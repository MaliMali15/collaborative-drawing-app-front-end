function CanvasContainer() {
  return (
      <div className=" relative bg-[#E2FDFF] h-screen w-full"> 
        <div className="w-full h-max border-b">
            
        </div>
        <div className=" absolute left-0 h-screen top-0 w-28 border-r">
          
        </div>  
        <div className="absolute bottom-0  w-full h-26 border-t">

        </div>
        <div className="absolute right-0 top-0  h-full w-80 border-l">
            
        </div>
    </div>
  )
}

export default CanvasContainer