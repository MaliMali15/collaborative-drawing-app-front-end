import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setUser } from "@/store/slices/userSlice";
import { setRoom } from "@/store/slices/roomSlice";
import { useEffect } from "react";


export default function LandingPage() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newRoomId = uuidv4().slice(0, 10); 
  
    useEffect(() => {
      
      setRoomId(newRoomId)
  
  },[])
  
  
  const handleCreateRoom = () => {
    if (!username.trim()) return alert("Please enter your name!");

    const userId = uuidv4();

    dispatch(setUser({ userId, username }));
    dispatch(setRoom({ roomId: newRoomId }));

    navigate(`/board/${newRoomId}`);
  };

  const handleJoinRoom = () => {
    if (!username.trim() || !roomId.trim())
      return alert("Please enter both username and room ID!");

    const userId = uuidv4();
    dispatch(setUser({ userId, username }));
    dispatch(setRoom({ roomId }));

    navigate(`/board/${roomId}`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-indigo-100 to-white text-gray-800">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-[350px] flex flex-col gap-5 border border-gray-200">
        <h1 className="text-2xl font-bold text-center text-indigo-600">
          🎨 Bad Artists
        </h1>

        {/* Username input */}
        <input
          type="text"
          placeholder="Enter your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <div className="flex flex-col gap-3 mt-4">
          {/* Create Room */}
          <button
            onClick={handleCreateRoom}
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Create New Room
          </button>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">Join existing room:</label>
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              disabled={!isJoining} 
              className={`border border-gray-300 rounded-lg px-3 py-2 flex-1 outline-none ${
                !isJoining ? "bg-gray-100 cursor-not-allowed" : "focus:ring-2 focus:ring-indigo-400"
              }`}
            />
            <button
              onClick={() => setIsJoining(true)}
              className="text-xs text-indigo-500 underline self-start hover:text-indigo-700"
            >
              {isJoining ? "Typing enabled" : "Click to enable input"}
            </button>
          </div>

          {/* Join Button */}
          <button
            onClick={handleJoinRoom}
            className="bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}