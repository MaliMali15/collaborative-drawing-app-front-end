import { Button } from "../ui/button.jsx"

function LeaveBtn() {
  return (
    <div className="p-2 w-max h-max">
        <Button variant="outline" className="hover:bg-red-500 hover:text-white transition-colors duration-300ms">Leave Room</Button>
    </div>
  )
}

export default LeaveBtn