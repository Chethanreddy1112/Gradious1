// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './Main/Header';
// import Login from './Login';
// import { Route, Router, Routes } from 'react-router-dom';
import React,{useState} from 'react';
import RequestPanel from './Main/RequestPanel'
import ResponsePanel from './Main/ResponsePanel';

function App() {
  const [response, setResponse] = useState(null);
  return (
    <div className='main-container'>
      <div className='API-container'>

      <h1 className='heading'>API Testing App</h1>

      <div className='url-section'>
        <RequestPanel setResponse={setResponse} />

        <ResponsePanel response={response} />
      </div>

      </div>
    </div>
  );
}

export default App;
