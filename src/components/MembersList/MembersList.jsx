import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Member } from "."


function MembersList() {
  return (
    <>
      <ScrollArea className="flex bg-black/40 h-40 w-max  overflow-y-auto ">
        <div className="flex flex-col min-h-full">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />

        </div>
        
      </ScrollArea>
    </>
  )
}

export default MembersList