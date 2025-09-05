import { Input } from "../ui/input.jsx"
import { useState } from "react"
function RoomName() {
    const [isEditable, setIsEditable] = useState(false)
    const [value, setValue] = useState("Default")
    
    const editHandler = () => {
        setIsEditable(true)
    }

    const valueHandler = (e) => {
        setValue(e.target.value)
    }

    const blurHandler = () => {
        setIsEditable(false)
    }

    const keyDownHandler = (e) => {
        if (e.key === "Enter") {
            setIsEditable(false)
        }
    }

  return (
      <>
          <div onClick={editHandler} className=" flex items-center p-3 w-28 h-16" >
              {isEditable ? (<Input value={value} onChange={valueHandler} onBlur={blurHandler} onKeyDown={keyDownHandler} autoFocus className="p-0 min-w-0 h-max" />) : (<p className="break-words text-gray-800 min-w-0 h-max"> { value } </p>)}    
          </div>
          
    </>
  )
}

export default RoomName