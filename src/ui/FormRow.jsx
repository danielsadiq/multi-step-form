/* eslint-disable react/prop-types */
function FormRow({ name, placeholder, register, error=false }) {
  const nameForField = name.replace(" ", "");
  return (
    <div className="grid items-center py-2 space-y-2">
      <div className="flex justify-between">
        <label className="font-normal text-marineblue">{name}</label>
        <p className="text-strawberryred">{error ? error : ""}</p>
      </div>
      <input
        placeholder={placeholder}
        id={nameForField}
        className={`border-[2px] rounded-md px-3 py-2 border-lightGray ${error == "This field is required" ? "border-strawberryred active:border-strawberryred": ""}`}
        {...register(nameForField, { required: "This field is required" })}
      />
    </div>
  );
}

export default FormRow;
