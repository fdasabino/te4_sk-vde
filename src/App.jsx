import React from "react";
import Counter from "./components/counter";

const App = () => {
  return (
    <div className="container">
      <h1>Welcome to React Hooks</h1>
      <ul>
        <li>Introduction</li>
        <li>useState</li>
        <li>useEffect</li>
        <li>useContext</li>
        <li>useReducer</li>
        <li>useRef</li>
      </ul>
      <hr />

      <Counter />
    </div>
  );
};

export default App;
