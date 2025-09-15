import { ResetIcon } from "@radix-ui/react-icons"

function UndoRedo() {
  return (
      <>
          <div className="flex gap-2 justify-center items-center h-full w-max mx-4">
              <div>
                  <button className="group  hover:bg-black/20  p-2">  
                    <ResetIcon className="group-hover:text-white"/>
                  </button>
              </div>
              <div>
                  <button className="group hover:bg-black/20 p-2">    
                    <ResetIcon className="group-hover:text-white  -scale-x-100"/>
                  </button>
              </div>
          </div>  
      </>
  )
}

export default UndoRedo