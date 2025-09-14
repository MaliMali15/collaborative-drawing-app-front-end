import './App.css'
import { Toolbar } from './components/Toolbar'
import { CanvasContainer } from './components/CanvasContainer'
import { Header } from './components/Header'
import { Chatbox } from './components/Chatbox'
import { Member, MembersList } from './components/MembersList'

function App() {
  
  return (
    <>
      <Toolbar />
      <Chatbox/>
      <MembersList />
      
      <Header />
      <CanvasContainer />
      
    </>
  )
}

export default App
