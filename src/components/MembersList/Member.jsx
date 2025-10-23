import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu.jsx"

import { Avatar, AvatarImage } from "../ui/avatar.jsx"

import { Badge } from "../ui/badge.jsx"

import { DotsHorizontalIcon} from "@radix-ui/react-icons"

function Member() {
  return (
      <>
          <div className="flex justify-between w-80 p-2 border-b border-black/60 h-max items-center bg-black/20">
              <div className="flex items-center w-44">
                  <p className="min-w-0 truncate">helladadadahfajfpoajwfpoajpfojapofjapojfo</p>
                  <div className="flex items-center mx-2">
                       <Badge className="rounded-full w-2 h-2 bg-green-300"></Badge>
                  </div>
              </div>
              <div className="ml-11">
                  <div>
                      <DropdownMenu>
                          <DropdownMenuTrigger><DotsHorizontalIcon /></DropdownMenuTrigger>
                          <DropdownMenuContent>
                              <DropdownMenuItem>Kick</DropdownMenuItem>
                              <DropdownMenuSeparator/>
                              <DropdownMenuItem>Mute</DropdownMenuItem>
                              <DropdownMenuSeparator/>
                              <DropdownMenuItem>Make Admin</DropdownMenuItem>
                          </DropdownMenuContent>
                      </DropdownMenu>
                      
                  </div>
              </div>
          </div>
      </>
  )
}

export default Member