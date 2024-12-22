function Sidebar() {
  return (
    <div className="relative bg-[url('./bg-sidebar-mobile.svg')] md:bg-[url('./bg-sidebar-desktop.svg')] bg-center bg-cover bg-no-repeat md:h-[90vh]">
      <div>
        <Step num='1'>Your Info</Step>
        <Step num='2'>Select plan</Step>
        <Step num='3'>Add-ons</Step>
        <Step num='4'>Summary</Step>
      </div>
    </div>
  );
}

function Step({num, children}){
return <div>
  <div>{num}</div>
  <div>
    <p>STEP {num}</p>
    <p className="uppercase">{children}</p>
  </div>
</div>
}

export default Sidebar;
