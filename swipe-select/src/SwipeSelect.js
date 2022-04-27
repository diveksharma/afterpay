import { React, useState, useEffect } from "react";
import Card from "./Card";
import Swipe from "./Swipe";

function SwipeSelect() {
  const [amount, setAmount] = useState(null);
  const [editAmount, setEditAmount] = useState(false);
  
  useEffect(() => {
    setAmount(55);
  }, []);

  return (
    <div class="h-screen flex items-center justify-center">
      {!editAmount ? (
        <Card amount={amount} handleEdit={setEditAmount} />
      ) : (
        <Swipe amount={amount} handleAmount={setAmount} handleEdit={setEditAmount}/>
      )}
    </div>
  );
}

export default SwipeSelect;
