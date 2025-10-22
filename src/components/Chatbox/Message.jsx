

function Message({username, text}) {
  return (
    <>
      <div className="p-2 max-w-[90%] wrap-break-word border-b border-black/8 ">
        <p className="text-[14px]">
          <span className="font-semibold text-gray-600">{username}: </span>
          {text}
        </p>
      </div>
    </>
    
  )
}

export default Message