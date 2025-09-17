import { MessageList } from "."
import { ChatInput } from "."

function Chatbox() {
  return (
      <>
        <div className="w-max h-max">
            <MessageList/>
            <ChatInput/>
        </div>
      </>
  )
}

export default Chatbox