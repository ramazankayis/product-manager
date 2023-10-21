import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Products from "./components/Products/Products.jsx";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Products />
      <Counter counter={counter} setCounter={setCounter} productPrice={counter}>
        {counter}
      </Counter>
    </div>
  );
};

export default App;
