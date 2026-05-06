import { useState } from "react";
import axios from "axios";
import "./App.css";

function HerokuApi() {
  const [category, setCategory] = useState("");
  const [excuse, setExcuse] = useState("");
  const [id, setId] = useState(0);

  const apiCall = async () => {
    try {
      const response = await axios.get(
        `https://excuser-three.vercel.app/v1/excuse/${category}`,
      );
      setExcuse(response.data[0].excuse);
      setId(response.data[0].id);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button
          onClick={() => {
            setCategory("gaming");
            apiCall();
          }}
        >
          Gaming
        </button>
        <button
          onClick={() => {
            setCategory("office");
            apiCall();
          }}
        >
          Office
        </button>
        <button
          onClick={() => {
            setCategory("family");
            apiCall();
          }}
        >
          Family
        </button>
        <button
          onClick={() => {
            setCategory("party");
            apiCall();
          }}
        >
          Party
        </button>
      </div>

      <center>
        <p>Category: {category}</p>
        <p>Excuse: {excuse}</p>
        <p>Id: {id}</p>
      </center>
    </>
  );
}

export default HerokuApi;
