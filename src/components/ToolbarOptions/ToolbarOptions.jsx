import { UndoRedo } from "."
import { ValueNoneIcon } from "@radix-ui/react-icons"

function ToolbarOptions() {
  return (
      <>
        <div className="flex flex-1 items-center bg-black/20 rounded-2xl h-16 m-4">
            <div className="flex gap-8 mx-18 h-max w-max">  
                <UndoRedo/>
                <button className="group hover:bg-black/20 p-2">
                    <ValueNoneIcon className="group-hover:text-white"/>
                </button>
            </div>
            <div>
                
            </div>
        </div>
      </>
  )
}

export default ToolbarOptions