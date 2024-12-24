import FormRow from "./FormRow";
import { useForm } from "react-hook-form"

function Main() {
  const {register, handleSubmit} = useForm();
  function onSubmit(data){
    console.log(data);
  }
  return (
    <div className="text-left p-4">
      <h2 className="text-xl font-bold text-marineblue">Personal info</h2>
      <p className="text-coolGray">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow name={"Name"} placeholder={"e.g. Stephen King"} register={register} />
        <FormRow
          name={"Email Address"}
          placeholder={"e.g. stephenking@lorem.com"}
          register={register}
        />
        <FormRow name={"Phone Number"} placeholder={"e.g. +1 234 567 890"} register={register} />
        <button className="px-4 py-2 bg-marineblue text-white float-right mt-4">
          Next Step
        </button>
      </form>
    </div>
  );
}

export default Main;
