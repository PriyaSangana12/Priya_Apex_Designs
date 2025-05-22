// Counter.js
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) {
        clearInterval(counter);
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
};

export default Counter;
