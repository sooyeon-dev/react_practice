import Button from "./Button.js";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all that time");

  const onChange = (event) => setKeyword(event.target.value);
  
  const iRunOnlyOnece = () => {
    console.log("i run only onece");
  };
  useEffect(iRunOnlyOnece, []);

  useEffect(() => {
    console.log("Call the API..");
  }, []);

  useEffect(() => {
    if(keyword !== "" && keyword.length> 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Seach here">
      </input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
