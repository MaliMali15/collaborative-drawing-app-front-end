import { ResetIcon } from "@radix-ui/react-icons"

function UndoRedo() {
  return (
      <>
          <div className="flex justify-center items-center h-full w-max">
              <div>
                  <button className="group transition-colorscduration-150 hover:bg-black/50 ">  
                    <ResetIcon className="group-hover:text-white h-[13.25px] w-[13.25px] transition-colors duration-150"/>
                  </button>
              </div>
              <div>
                  <button className="group hover:bg-black/50 transition-colors duration-150">    
                    <ResetIcon className="group-hover:text-white  h-[13.25px] w-[13.25px] transition-colors duration-150 -scale-x-100"/>
                  </button>
              </div>
          </div>  
      </>
  )
}

export default UndoRedo