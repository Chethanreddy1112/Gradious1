// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './Main/Header';
import Login from './Login/Login';
// import { Route, Router, Routes } from 'react-router-dom';
import React,{useState} from 'react';
import RequestPanel from './Main/RequestPanel'
import ResponsePanel from './Main/ResponsePanel';
import HistoryPanel from './Main/HistoryPanel';

function App() {
  const [isLogin,setIsLogin]=useState(false)
  const [response, setResponse] = useState(null);
  return (
    <div className='main-container'>
      {!isLogin?
      (<Login setIsLogin={setIsLogin}/>):
      (
        
        <div className='API-container'>
          <button onClick={setIsLogin}>🏃🚪Log Out </button>
          <h1 className='heading'>API Testing</h1>

          <div className='url-section'>
            <RequestPanel setResponse={setResponse} />

            <ResponsePanel response={response} />
          </div>
          <HistoryPanel />
        </div>
      )}
      
    </div>
  );
}

export default App;
