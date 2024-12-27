import { useState } from "react";
import NextButton from "../ui/NextButton";
import { NavLink } from "react-router";

/* eslint-disable react/prop-types */
function Plan() {
  const [active, setActive] = useState("false");
  // const [monthly, setMonthly] = useState(true);
  const planList = [
    ["Arcade", 9],
    ["Advanced", 12],
    ["Pro", 15],
  ];
  return (
    <div className="text-left p-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-marineblue">Select your plan</h2>
        <p className="text-coolGray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="w-full grid grid-cols-3 gap-4">
        {planList.map((x) => (
          <Card
            name={x[0]}
            amount={x[1]}
            active={active == x[0]}
            key={x[1]}
            onClick={() => setActive(x[0])}
          />
        ))}
      </div>
      <div className="flex items-center my-4 justify-center gap-4 bg-alabaster">
        <p>Monthly</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <p>Yearly</p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <NavLink className={"text-coolGray"}>Go Back</NavLink>
        <NextButton />
      </div>
    </div>
  );
}

function Card({ name, amount, active, onClick }) {
  return (
    <div
      className={`p-4 border-[1px] rounded-xl flex flex-col items-start gap-8 ${
        active ? "border-marineblue bg-alabaster" : "border-coolGray"
      } `}
      onClick={onClick}
    >
      <img src={`./icon-${name.toLowerCase()}.svg`} className="h-12" />
      <div>
        <p className="text-lg font-bold text-marineblue">{name}</p>{" "}
        <p className="text-coolGray">${amount}/mo</p>
      </div>
    </div>
  );
}

export default Plan;
