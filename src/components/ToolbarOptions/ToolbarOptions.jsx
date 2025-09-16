import { ColorTool, UndoRedo } from "."
import { ValueNoneIcon } from "@radix-ui/react-icons"

function ToolbarOptions() {
  return (
      <>
        <div className="flex items-center bg-black/20 h-max w-max m-4">
            <div className=" p-2 border border-black/40 transition-colors duration-150 hover:bg-black/40">  
                <UndoRedo/>
            </div>
            <div className="px-3 py-2 border-t border-b border-black/40 group transition-colors duration-150 hover:bg-black/40">
                <button>
                    <ValueNoneIcon className="group-hover:text-white transition-colors duration-150 h-[13.25px] w-[13.25px] "/>
                </button>
            </div>
            <div className="h-max w-max px-3 py-2 border border-black/40">
              <ColorTool/>
            </div>
        </div>
      </>
  )
}

export default ToolbarOptions