import React, { useState } from "react";
import axios from "axios";
// import './App.css'

function RequestPanel({ setResponse }) {

  const [url,setUrl] = useState("");
  const [method,setMethod] = useState("GET");

  const sendRequest = async () => {

    try {

      const res = await axios({
        method: method,
        url: url
      });

      setResponse(res);

    } catch(error) {

      setResponse(error);

    }

  };

  return (

    <div>

      <select
      className="selecting"
        value={method}
        onChange={(e)=>setMethod(e.target.value)}
      >
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
      </select>

      <input
        type="text"
        placeholder="  Enter API URL"
        value={url}
        onChange={(e)=>setUrl(e.target.value)}
        style={{marginLeft:"10px"}}
        className="url-bar"
      />

      <button onClick={sendRequest} style={{marginLeft:"10px"}} className="send-btn">
        Send
      </button>

    </div>

  );
}

export default RequestPanel;