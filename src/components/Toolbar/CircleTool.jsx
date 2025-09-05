import { CircleIcon } from "@radix-ui/react-icons"

function CircleTool() {
  return (
    <>
        <button className="group p-2 transition-colors duration-150 hover:bg-black/30 border-b-2 border-black/30">
            <CircleIcon className="group-hover:text-red-50 transition-colors duration-150"/>  
        </button>  
    </>
  )
}

export default CircleTool