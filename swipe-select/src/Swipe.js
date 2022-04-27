import { React, useEffect } from "react";

const Swipe = ({ amount, handleAmount, handleEdit }) => {
  useEffect(() => {
    scrollToCurrentAmount(amount);
  }, []);

  const amountList = [
    { amount: 36, selected: false },
    { amount: 40, selected: false },
    { amount: 45, selected: false },
    { amount: 50, selected: false },
    { amount: 55, selected: true },
    { amount: 60, selected: false },
    { amount: 70, selected: false },
    { amount: 75, selected: false },
    { amount: 80, selected: false },
    { amount: 434, selected: false },
  ];

  function scrollToCurrentAmount(id) {
    document.getElementById(id).scrollIntoView();
  }

  function closeEdit() {
    handleEdit(false);
  }

  function selectAmount(option) {
    handleAmount(option);
    closeEdit();
  }

  return (
    <div class="max-w-lg mx-auto overflow-hidden">
      <div class="relative w-full flex gap-6 overflow-x-auto snap-x snap-mandatory pb-14">
        <div class="shrink-0">
          <div class="shrink-0 w-4 sm:w-48"></div>
        </div>
        {amountList.map((option, index) => (
          <div
            id={option.amount}
            class="group snap-center snap-always shrink-0 first:pl-8 last:pr-8"
          >
            <button
              key={index}
              onClick={(e) => selectAmount(option.amount)}
              class="relative shrink-0 w-72 h-40 rounded-xl shadow-lg bg-gradient-to-tr from-cyan-300 to-blue-600 text-6xl text-gray-50 font-semibold"
            >
              <p class="invisible group-hover:visible text-lg font-semibold text-gray-50 absolute ml-20 -mt-7">
                {option.selected ? "Current choice" : ""}
              </p>
              {option.amount}
              <p class="text-gray-50 font-semibold text-lg">€/Month</p>
            </button>
          </div>
        ))}
        <div class="shrink-0">
          <div class="shrink-0 w-4 sm:w-48"></div>
        </div>
      </div>
    </div>
  );
};

export default Swipe;
