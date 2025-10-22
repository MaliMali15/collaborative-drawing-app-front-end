import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "@/store/slices/chatSlice.js"
import { getSocket } from "@/utils/socket"

function ChatInput() {
    const [text, setText] = useState("");

  // Redux hooks
  const dispatch = useDispatch();
  const { userId, username } = useSelector((state) => state.user); // current user info from userSlice
  const roomId = useSelector((state) => state.room.roomId);       // current room id from roomSlice

  // Called when the form is submitted (Enter or button)
  const submitHandler = (e) => {
    e.preventDefault();                  // stop default form submit which would reload the page
    const trimmed = text.trim();         // remove leading/trailing whitespace
    if (!trimmed) return;                // do nothing on empty message

    // build a message object (shape: pick what backend expects)
    const message = {
      text: trimmed,
      userId: userId || "anonymous",     // fallback if user not set yet
      username: username || null,
      timestamp: Date.now(),
    };

    // Optimistic local update: add message to Redux state immediately
    dispatch(addMessage(message));

    // Emit to server over socket (if socket exists)
    const socket = getSocket();
    if (socket && roomId) {
      // We send an event name the backend expects - ensure it matches backend exactly
      socket.emit("chat:message", { roomId, message, username });
    } else {
      // Socket not ready — you could fallback to an HTTP save here,
      // or queue the message locally for retry. For now we just log.
      console.warn("Socket not connected or no roomId yet — message queued locally only", message);
    }

    // clear the input ready for the next message
    setText("");
  };
  return (
    <>
        
        <form onSubmit={submitHandler}>
            <div className="flex w-80">
                <div className="flex-5 w-max h-max border border-black/50">
            <input className=" p-1  font-[Roboto]  outline-none" value={ text } type="text" placeholder="Enter your messsage..." onChange={(e)=>setText(e.target.value)} />   
                </div> 
                <div className="flex-1">
                    <button className="group border transition-colors duration-150 border-black/50 hover:bg-black/30 h-full w-full flex justify-center items-center">
                        <PaperPlaneIcon className="group-hover:text-white text-black/60"/>
                    </button>
                </div>
            </div>  
        </form>
            
        
    </>
  )
}

export default ChatInput