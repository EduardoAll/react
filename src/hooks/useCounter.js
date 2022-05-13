import { useState } from "react";

const useCounter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return {
    count,
    decrement,
    increment,
    reset
  };
};

export default useCounter;
