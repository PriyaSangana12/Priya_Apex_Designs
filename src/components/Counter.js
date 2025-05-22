// Counter.js
import React, { useState, useEffect } from "react";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // in ms
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) {
        clearInterval(counter);
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count}</span>;
};

export default Counter;
