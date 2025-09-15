import './App.css'
import { Toolbar } from './components/Toolbar'
import { CanvasContainer } from './components/CanvasContainer'
import { Header } from './components/Header'
import { Chatbox } from './components/Chatbox'
import { MembersList } from './components/MembersList'
import { ToolbarOptions } from './components/ToolbarOptions'
import { ToolOptions } from './components/ToolbarOptions'

function App() {
  
  return (
    <>
      <Toolbar />
      <Chatbox/>
      <MembersList />
      <ToolbarOptions />
      <ToolOptions/>
      <Header />
      <CanvasContainer />
      
    </>
  )
}

export default App
