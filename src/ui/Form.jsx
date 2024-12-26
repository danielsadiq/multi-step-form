import FormRow from "./FormRow";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  function onError(error) {
    console.log(error);
    console.log(errors);
  }
  return (
    <div className="text-left p-4">
      <h2 className="text-xl font-bold text-marineblue">Personal info</h2>
      <p className="text-coolGray">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow
          name={"Name"}
          placeholder={"e.g. Stephen King"}
          register={register}
          error={errors?.Name?.message}
        />
        <FormRow
          name={"Email Address"}
          placeholder={"e.g. stephenking@lorem.com"}
          register={register}
          error={errors?.EmailAddress?.message}
        />
        <FormRow
          name={"Phone Number"}
          placeholder={"e.g. +1 234 567 890"}
          register={register}
          error={errors?.PhoneNumber?.message}
        />
        <button className="px-4 py-2 bg-marineblue text-white float-right mt-4">
          Next Step
        </button>
      </form>
    </div>
  );
}

export default Form;
