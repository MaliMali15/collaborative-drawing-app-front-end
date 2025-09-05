import { SlashIcon } from "@radix-ui/react-icons";

function LineTool() {
  return (
     <>
        <button className="group p-2 transition-colors duration-150 hover:bg-black/30 border-b-2 border-black/30">
            <SlashIcon className="group-hover:text-white transition-colors duration-150 skew-[-18deg]"/>  
        </button>  
    </>
  )
}

export default LineTool