import { CursorArrowIcon } from "@radix-ui/react-icons"

function SelectionTool() {
  return (
    <>
      <button className="group p-2 transition-colors duration-150 hover:bg-black/30 border-b-2 border-black/30">
        <CursorArrowIcon className="group-hover:text-white transition-colors duration-150"/>  
      </button>  
    </>
  )
}

export default SelectionTool