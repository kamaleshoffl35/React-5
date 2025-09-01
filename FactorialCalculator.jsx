import React, { useState, useMemo } from "react";


function factorial(n) {
  console.log("Calculating factorial...");
  if (n <= 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    
    for (let j = 0; j < 100000000; j++) {}
    result *= i;
  }
  return result;
}

export default function FactorialCalculator() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0); 


  const fact = useMemo(() => factorial(number), [number]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Factorial Calculator</h2>
      
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        style={{ padding: "5px", fontSize: "16px", margin: "10px" }}
      />

      <h3>Factorial of {number} is: {fact}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        Increase Unrelated Counter
      </button>
      <p>Counter: {counter}</p>
    </div>
  );
}
