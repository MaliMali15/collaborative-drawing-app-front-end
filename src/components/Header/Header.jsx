import { RoomName } from ".."
import { Count } from ".."
import { LeaveBtn } from ".."
import { CopyLink } from ".."
import { SettingsBtn } from ".."

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
            <div className="flex items-center h-full absolute right-7">
              <LeaveBtn/>
            </div>
            <div className="flex gap-3 items-center h-full absolute right-47">
              <SettingsBtn/>
              <CopyLink /> 
            </div>
        </div>
      </>
  )
}

export default Header