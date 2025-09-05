import './App.css'
import { Toolbar } from './components/Toolbar'
import { CanvasContainer } from './components/CanvasContainer'
import { Header } from './components/Header'
import { Chatbox } from './components/Chatbox'

function App() {
  
  return (
    <>
      <Toolbar />
      <Chatbox/>
      <Header />
      <CanvasContainer/>
    </>
  )
}

export default App
