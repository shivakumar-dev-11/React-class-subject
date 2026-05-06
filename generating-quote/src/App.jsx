import "./App.css";
import axios from "axios";
import { useState } from "react";
import HerokuApi from "./quote";
import Products from "./products";
function App() {
  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;

//       const response = await axios.get("https://catfact.ninja/fact");
//       setQuote(response.data.fact);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <center>
//       <div className="App">
//         <h3>{quote}</h3>
//         <button onClick={quoteGenerator}>Generate Quote</button>
//       </div>
//     </center>
//   );
// // }
// function App() {}

// export default App;
