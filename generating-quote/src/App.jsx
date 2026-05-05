import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  const quoteGenerator = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setQuote(response.data.fact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>
      <div className="App">
        <h3>{quote}</h3>
        <button onClick={quoteGenerator}>Generate Quote</button>
      </div>
    </center>
  );
}

export default App;
