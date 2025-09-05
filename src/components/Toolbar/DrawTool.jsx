import { Pencil1Icon } from "@radix-ui/react-icons"

function DrawTool() {
  return (
     <>
        <button className="group p-2 transition-colors duration-150 hover:bg-black/30 border-b-2 border-black/30">
            <Pencil1Icon className="group-hover:text-red-50 transition-colors duration-150"/>  
        </button>  
    </>
  )
}

export default DrawTool