import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu.jsx"

function ToolOptions() {
  return (
    <>
        <div className='h-max w-max flex'>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        Color Picker
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
        </div>  
    </>
  )
}

export default ToolOptions