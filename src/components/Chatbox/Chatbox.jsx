import { MessageList } from "."
import { ChatInput } from "."

function Chatbox() {
  return (
      <>
        <div className="w-max h-max m-4">
            <MessageList/>
            <ChatInput/>
        </div>
      </>
  )
}

export default Chatbox