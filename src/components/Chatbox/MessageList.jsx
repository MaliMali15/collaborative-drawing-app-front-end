import { ScrollArea } from "@radix-ui/react-scroll-area"
import { useEffect, useRef } from "react"
import { Message } from "."

function MessageList() {
    const scrollRef = useRef(null)
    
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop=scrollRef.current.scrollHeight
        }
    })
  return (
      <>
        <ScrollArea ref={scrollRef} className="border border-black/50 w-80 h-90 bg-black/10 overflow-y-auto">
              <div className="flex flex-col min-h-full justify-end">
                 <Message/>
                 <Message/>
              </div>    
        </ScrollArea>
      </>
  )
}

export default MessageList