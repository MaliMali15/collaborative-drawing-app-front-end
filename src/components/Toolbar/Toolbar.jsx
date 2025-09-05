import { SelectionTool, TextTool, LineTool,CircleTool,QuadTool,DrawTool,EraserTool } from "."

function Toolbar() {
  return (
    <>
        <div className="flex gap-4 flex-col w-max h-max p-1.5 m-2 border-black/20 border-1">
          <SelectionTool />
          <TextTool />
          <LineTool/>
          <CircleTool />
          <QuadTool />
          <DrawTool />
          <EraserTool />
        
        </div>
    </>
  )
}

export default Toolbar