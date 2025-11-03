import { Header } from "../components/Header"
import { Toolbar } from "../components/Toolbar"
import { ToolbarOptions } from "../components/ToolbarOptions"
import { Chatbox } from "../components/Chatbox"
import { MembersList } from "../components/MembersList"
import { CanvasBoard } from "../components/Canvas"


function CanvasContainer() {
  
  return (
    <>
    <div className="flex flex-col h-screen w-screen">
      <header className="h-14 border-b border-black/20">
        <Header />
      </header>

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-20 flex flex-col justify-between ">
          {/* Toolbar at top */}
          <div className="flex justify-center mt-20">
            <Toolbar />
          </div>
        </aside>

        {/* Main Canvas Area */}
        <main className="flex-1 relative bg-white">
          {/* Reserve this space for your canvas */}
            <CanvasBoard/>
            <div className="absolute bottom-4 left-1/2">
              <ToolbarOptions />
            </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-90 flex flex-col">
          {/* Chatbox at top */}
          <div className="h-max w-max p-4 overflow-y-auto ">
            <Chatbox />
          </div>
          {/* Members list at bottom */}
          <div className="h-max w-max p-4">
            <MembersList />
          </div>
        </aside>
      </div>
    </div>

    </>
  )
}

export default CanvasContainer