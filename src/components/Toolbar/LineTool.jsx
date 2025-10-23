import { SlashIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux"
import { setTool } from "@/store/slices/canvasSlice.js"

function LineTool() {
    const dispatch = useDispatch();
    const currentTool = useSelector((state) => state.canvas.currentTool);

    const handleClick = () => {
    dispatch(setTool("line"));
  }
  return (
     <>
        <button onClick={ handleClick} className={`group p-2 transition-colors duration-150 hover:bg-black/30 border-b-2 border-black/30 ${currentTool==="line"? "bg-black/30  text-white":""}`}>
            <SlashIcon className="group-hover:text-white transition-colors duration-150 skew-[-18deg]"/>  
        </button>  
    </>
  )
}

export default LineTool