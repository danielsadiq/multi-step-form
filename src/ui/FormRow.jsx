/* eslint-disable react/prop-types */
function FormRow({name, placeholder}) {
  return (
    <div className="grid items-center py-2">
      <label className="font-medium">{name}</label>
      <input placeholder={placeholder} className="border-2 rounded-md px-3 py-2" />
    </div>
  )
}

export default FormRow
