import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => handleClick()}>Click {count}</button>
    </div>
  );
}
