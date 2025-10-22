import { MessageList } from "."
import { ChatInput } from "."
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getSocket } from "@/utils/socket.js"
import { addMessage } from "@/store/slices/chatSlice.js"

function Chatbox() {
   const dispatch = useDispatch();
  const socket = getSocket(); // get existing socket instance

  useEffect(() => {
    if (!socket) return;

    // Listen for messages broadcasted by the backend
    socket.on("chat:message", (messageData) => {
      /**
       * messageData comes from backend broadcast
       * It should contain:
       * {
       *   userId,
       *   username,
       *   text/message,
       *   timestamp
       * }
       */
      dispatch(addMessage(messageData)); // update Redux store
    });

    // Clean up the listener when component unmounts
    return () => {
      socket.off("chat:message");
    };
  }, [socket, dispatch]);

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