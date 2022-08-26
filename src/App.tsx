import React from "react";
import Counter from "./Components/Counter/Counter";
import Title from "./Components/Title/Title";

function App() {
  return (
    <div className="App">
      <div style={{ flexDirection: "row" }}>
        Welcome <Title title={"Nishy"} />
      </div>
      <Counter />
    </div>
  );
}

export default App;
