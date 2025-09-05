import { GearIcon } from "@radix-ui/react-icons"

function SettingsBtn() {
  return (
    <>
      <button className="p-2">
        <GearIcon className="transition-transform duration-300 hover:rotate-180 w-5 h-5 stroke-3"/>
      </button>
      
    </>
  )
}

export default SettingsBtn