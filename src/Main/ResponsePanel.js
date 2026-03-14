import React from "react";
// import './App.css'

function ResponsePanel({ response }) {

  if(!response) return <p>No response yet</p>;

  return (

    <div style={{marginTop:"20px"}}>

      <h3>Status : {response.status}</h3>

      <pre>
        {JSON.stringify(response.data,null,2)}
      </pre>

    </div>

  );
}

export default ResponsePanel;