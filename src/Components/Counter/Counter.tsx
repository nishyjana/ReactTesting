import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ padding: "20px" }}>
      <button
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
        onClick={() => handleClick()}
      >
        Click {count}
      </button>
    </div>
  );
}
