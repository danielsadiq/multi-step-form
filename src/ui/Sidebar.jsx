/* eslint-disable react/prop-types */
function Sidebar() {
  return (
    <div className="relative bg-[url('./bg-sidebar-mobile.svg')] md:bg-[url('./bg-sidebar-desktop.svg')] bg-center bg-cover bg-no-repeat md:h-[90vh] md:rounded-xl h-[172px]">
      <div className="flex md:block items-center text-center justify-evenly md:px-6 md:py-12 md:space-y-6 pt-8 px-12">
        <Step num="1">Your Info</Step>
        <Step num="2">Select plan</Step>
        <Step num="3">Add-ons</Step>
        <Step num="4">Summary</Step>
      </div>
    </div>
  );
}

function Step({ num, children }) {
  return (
    <div className="flex md:space-x-4 md:w-auto md:my-2 items-center">
      <div className="rounded-[100%] bg-lightblue px-4 py-2 font-semibold md:h-10">{num}</div>
      <div className="hidden md:block text-left">
        <p className="text-coolGray">STEP {num}</p>
        <p className="uppercase font-medium text-white">{children}</p>
      </div>
    </div>
  );
}

export default Sidebar;
