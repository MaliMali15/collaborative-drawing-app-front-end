import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu.jsx"

import { ColorPalette } from "./index.js"
import { ColorWheelIcon } from "@radix-ui/react-icons"

function ColorTool() {
  return (
    <>
        
            
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <ColorWheelIcon className="transition-colors duration-150 hover:text-white"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <ColorPalette/>
                    </DropdownMenuContent>
                </DropdownMenu>
             
          
    </>
  )
}

export default ColorTool