import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStroke, setStrokes } from "@/store/slices/canvasSlice";
import { getSocket } from "@/utils/socket";

function CanvasBoard() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [start, setStart] = useState(null);

  const dispatch = useDispatch();
  const { roomId } = useSelector((state) => state.room);
  const { color, width, currentTool } = useSelector((state) => state.canvas);
  const socket = getSocket();

  // --- Initialize canvas + load strokes ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctxRef.current = ctx;

    if (socket && roomId) socket.emit("canvas:loadDrawing", { roomId });

    const handleLoad = (data) => {
      dispatch(setStrokes(data));
      data.forEach(drawStroke);
    };

    socket.on("canvas:loadDrawing", handleLoad);
    socket.on("canvas:draw", handleIncomingDraw);
    socket.on("canvas:clearCanvas", handleClearCanvas);

    return () => {
      socket.off("canvas:loadDrawing", handleLoad);
      socket.off("canvas:draw", handleIncomingDraw);
      socket.off("canvas:clearCanvas", handleClearCanvas);
    };
  }, [socket, roomId]);

  // --- Handlers ---
  const handleIncomingDraw = (drawData) => {
    dispatch(addStroke(drawData));
    drawStroke(drawData);
  };

  const handleClearCanvas = () => {
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    dispatch(setStrokes([]));
  };

  const drawStroke = (s) => {
    const ctx = ctxRef.current;
    ctx.save();
    ctx.strokeStyle = s.color;
    ctx.lineWidth = s.width;
    ctx.beginPath();

    switch (s.tool) {
      case "pen":{
        s.points.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();
        break;
      }
        
      case "eraser": {
        s.points.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();
        break;
      }

      case "line": {
        const [p1, p2] = s.points;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        break;
      }

      case "quad": {
        const [p1, p2] = s.points;
        ctx.strokeRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
        break;
      }

      case "circle": {
        const [p1, p2] = s.points;
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const radius = Math.sqrt(dx * dx + dy * dy);
        ctx.arc(p1.x, p1.y, radius, 0, Math.PI * 2);
        ctx.stroke();
        break;
      }

      case "text": {
        const [p1] = s.points;
        ctx.font = `${s.width * 5}px Arial`;
        ctx.fillStyle = s.color;
        ctx.fillText(s.text || "Text", p1.x, p1.y);
        break;
      }

      default:
        break;
    }

    ctx.restore();
  };

  // --- Mouse Events ---
  const handleMouseDown = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setIsDrawing(true);
    setStart({ x, y });

    if (currentTool === "pencil" || currentTool === "eraser") {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(x, y);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing || !start) return;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    if (currentTool === "pencil" || currentTool === "eraser") {
      const ctx = ctxRef.current;
      ctx.strokeStyle = currentTool === "eraser" ? "#ffffff" : color;
      ctx.lineWidth = width;
      ctx.lineTo(x, y);
      ctx.stroke();

      const drawData = {
        tool: currentTool,
        color: ctx.strokeStyle,
        width,
        points: [start, { x, y }],
        x,
        y,
      };

      dispatch(addStroke(drawData));
      if (socket && roomId) socket.emit("canvas:draw", { roomId, drawData });
      setStart({ x, y });
    }
  };

  const handleMouseUp = (e) => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (["line", "quad", "circle", "text"].includes(currentTool) && start) {
      const end = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
      const drawData = {
        tool: currentTool,
        color,
        width,
        points: [start, end],
        text: currentTool === "text" ? "Text" : null,
        x: end.x,
        y: end.y,
      };

      dispatch(addStroke(drawData));
      if (socket && roomId) socket.emit("canvas:draw", { roomId, drawData });
      drawStroke(drawData);
    }

    setStart(null);
  };

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full bg-white"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    />
  );
}

export default CanvasBoard;
