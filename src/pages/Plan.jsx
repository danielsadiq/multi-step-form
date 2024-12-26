/* eslint-disable react/prop-types */
function Plan() {
  return (
    <div className="text-left p-4">
      <h2 className="text-3xl font-bold text-marineblue">Select your plan</h2>
      <p className="text-coolGray">
        You have the option of monthly or yearly billing.
      </p>
      <div className="w-full grid grid-cols-3 gap-4">
        <Card name={"Arcade"} amount={9} />
        <Card name={"Advanced"} amount={12} />
        <Card name={"Pro"} amount={15} />
      </div>
    </div>
  );
}

function Card({ name, amount }) {
  return (
    <div className="p-4 border-[1px] border-coolGray rounded-xl">
      <img src={`./icon-${name.toLowerCase()}.svg`} />
      <div>
        <p>{name}</p> <p>${amount}/mo</p>
      </div>
    </div>
  );
}

export default Plan;
