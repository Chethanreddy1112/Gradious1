import React, { useEffect, useState } from "react";

function HistoryPanel() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    const savedHistory = JSON.parse(localStorage.getItem("apiHistory")) || [];

    setHistory(savedHistory);

  }, []);

  return (

    <div style={{marginTop:"30px"}}>

      <h2>Request History</h2>

      {history.length === 0 ? (
        <p>No history yet</p>
      ) : (
        <ul>
          {history.map((item,index) => (
            <li key={index}>
              <b>{item.method}</b> — {item.url}
              <br/>
              <small>{item.time}</small>
            </li>
          ))}
        </ul>
      )}

    </div>

  );
}

export default HistoryPanel;