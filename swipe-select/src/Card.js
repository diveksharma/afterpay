import { React } from "react";

const Card = ({amount, handleEdit}) => {
    function onEditAmount(){
        handleEdit(true)
    }
  return (

      <div class="w-72 rounded-lg border shadow-md flex flex-col p-5 bg-gradient-to-tr from-cyan-300 to-blue-600">
        <div class="flex flex-col items-center">
          <p class="mt-1 text-6xl font-semibold  text-gray-50">{amount}</p>

          <p class="text-gray-50 font-semibold text-lg">€/Month</p>
        </div>
        <button onClick={onEditAmount} class="mt-7 rounded py-1 px-4 font-semibold bg-gray-50 text-blue-500 hover:bg-gray-200 hover:text-blue-700 text-md">
            EDIT
        </button>
      </div>
  );
};

export default Card;
