/* eslint-disable react/prop-types */
function FormRow({ name, placeholder, register }) {
  return (
    <div className="grid items-center py-2 space-y-2">
      <label className="font-normal text-marineblue">{name}</label>
      <input
        placeholder={placeholder}
        className="border-[2px] rounded-md px-3 py-2 border-lightGray"
        {...register(name.replace(" ", ""))}
      />
    </div>
  );
}

export default FormRow;
