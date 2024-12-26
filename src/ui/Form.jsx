import { useNavigate } from "react-router";
import FormRow from "./FormRow";
import { useForm } from "react-hook-form";
import NextButton from "./NextButton";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  function onSubmit(data) {
    console.log(data);
    navigate('/plan');
  }
  function onError(error) {
    console.log(error);
    console.log(errors);
  }
  return (
    <div className="text-left p-4">
      <h2 className="text-3xl font-bold text-marineblue">Personal info</h2>
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
        <NextButton/>
      </form>
    </div>
  );
}

export default Form;
