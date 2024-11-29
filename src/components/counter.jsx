import React, { useEffect, useReducer, useRef } from "react";
import { ACTIONS, countReducer } from "../reducers/count.reducer";

const Counter = () => {
  const [count, dispatch] = useReducer(countReducer, 1);

  const headingRef = useRef(null);
  const buttonPlusRef = useRef(null);
  const buttonMinusRef = useRef(null);

  console.log("headingRef", headingRef);

  useEffect(() => {
    console.log("Start the workday");

    if (count <= 0) {
      headingRef.current.style.color = "red";
      alert("You are going to zero, you cannot go to zero");
    } else if (count >= 10) {
      headingRef.current.style.color = "green";
      alert("You are going to ten, you cannot go to ten");
    } else {
      console.log("Working....");
      return;
    }

    return () => {
      console.log("End the workday");
    };
  }, [count]);

  return (
    <div>
      <h1 ref={headingRef}>My counter: {count}</h1>
      <hr />
      <button
        onClick={() => dispatch({ type: ACTIONS.PLUS })}
        ref={buttonPlusRef}>
        add
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.MINUS })}
        ref={buttonMinusRef}>
        subtract
      </button>
    </div>
  );
};

export default Counter;
