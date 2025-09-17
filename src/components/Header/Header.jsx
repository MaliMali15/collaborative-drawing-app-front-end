import { RoomName,Count,SettingsBtn,CopyLink,LeaveBtn } from "."

function Header() {
  return (
      <>
        <div className='py-2 relative flex h-full w-full items-center '>
            <div>
                <RoomName/>
            </div>
            <div className="flex w-max items-center justify-center mx-5">
                <Count count={10 } />
            </div>
            <div className="flex gap-3 items-center h-full absolute right-0">
              <SettingsBtn/>
              <CopyLink /> 
              <LeaveBtn/>
            </div>
        </div>
      </>
  )
}

export default Header