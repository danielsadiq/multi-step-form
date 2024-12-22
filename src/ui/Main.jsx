import FormRow from "./FormRow";

function Main() {
  return (
    <div className="text-left p-4"> 
      <h2 className="text-xl font-bold text-marineblue">Personal info</h2>
      <p className="text-coolGray">
        Please provide your name, email address, and phone number.
      </p>
      <FormRow name={"Name"} placeholder={"e.g. Stephen King"} />
      <FormRow name={"Email Address"} placeholder={"e.g. stephenking@lorem.com"} />
      <FormRow name={"Phone Number"} placeholder={"e.g. +1 234 567 890"} />
        Next Step
    </div>
  );
}

export default Main;
