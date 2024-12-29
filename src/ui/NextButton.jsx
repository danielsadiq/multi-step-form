/* eslint-disable react/prop-types */
function NextButton({onClick=null}) {
  return (
    <button className="px-4 py-2 bg-marineblue text-white float-right" onClick={onClick}>
      Next Step
    </button>
  );
}

export default NextButton;
