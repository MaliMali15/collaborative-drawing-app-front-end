import { PaperPlaneIcon } from "@radix-ui/react-icons"

function ChatInput() {
    const submitHandler = (e) => {
        e.preventDefault()
    }
  return (
    <>
        
        <form onSubmit={submitHandler}>
            <div className="flex w-80">
                <div className="flex-5 w-max h-max border border-black/50">
                    <input className=" p-1  font-[Roboto]  outline-none" type="text" placeholder="Enter your messsage..." />   
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