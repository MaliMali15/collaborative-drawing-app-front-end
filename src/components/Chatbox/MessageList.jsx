import { ScrollArea } from "@radix-ui/react-scroll-area"
import { useEffect, useRef } from "react"
import { Message } from "."
import { useSelector } from "react-redux"


function MessageList() {
  const scrollRef = useRef(null)
  const messages = useSelector((state) => state.chat.messages)
    
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop=scrollRef.current.scrollHeight
        }
    },[messages])
  return (
      <>
        <ScrollArea ref={scrollRef} className="border border-black/50 w-80 h-100 bg-black/10 overflow-y-auto">
              <div className="flex flex-col min-h-full justify-end">
                {messages.map((msg) => (
                  <Message key={msg.timestamp} username={msg.username} text={msg.text} />
                ))}
              </div>    
        </ScrollArea>        
      </>
  )
}

export default MessageList