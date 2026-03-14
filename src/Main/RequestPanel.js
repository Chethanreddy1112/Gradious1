import React, { useState } from "react";
import axios from "axios";

function RequestPanel({ setResponse }) {

  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");

  const sendRequest = async () => {

    try {

      const res = await axios({
        method: method,
        url: url
      });

      setResponse(res);

      // Save history
      const history = JSON.parse(localStorage.getItem("apiHistory")) || [];

      const newEntry = {
        method: method,
        url: url,
        time: new Date().toLocaleString()
      };

      history.unshift(newEntry);

      localStorage.setItem("apiHistory", JSON.stringify(history));

    } catch (error) {

      setResponse(error);

    }

  };

  return (
    <div className="url-boxing">

      <select
        value={method}
        onChange={(e)=>setMethod(e.target.value)}
        className="selecting"
      >
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
      </select>

      <input
        type="text"
        placeholder="Enter API URL"
        value={url}
        onChange={(e)=>setUrl(e.target.value)}
        className="url-bar"
      />

      <button onClick={sendRequest} className="send-btn">
        Send
      </button>

    </div>
  );
}

export default RequestPanel; 