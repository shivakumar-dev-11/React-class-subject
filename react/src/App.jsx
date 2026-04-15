import "./App.css";

import React, { useState } from "react";

function Counter() {
  const num = 0;
  const [count, setCount] = useState(num);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: "0 10px" }}>
        Decrement
      </button>
      <button onClick={() => setCount(`${num}`)}>Reset</button>
    </div>
  );
}

export default Counter;
