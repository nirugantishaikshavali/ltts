import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import yokohama from "./yokohama.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
// import Prediction from './Components/Predication/Prediction';
import TyrePrediction from './Components/Predication/TyrePrediction';
import Settings from './Components/Settings/Settings';
import Login from './Components/Login/Login';
import Help from './Components/Help/Help';
import Tyre_Curing_Data from './Components/Tyre_Curing_Data/Tyre_Curing_Data';

function Home(){
  return (
    // <div className="content">
    //   <h1>Yokohama Tyre Curing Time Prediction</h1>
    //   <p style={{}}>This tool is used for</p>
    //   <ol>
    //   {/* <li>This tool is used for:</li> */}

    //     <li>Predicting the Curing Time based on Maximum Temperatures</li>
    //     <li>Predicting Maximum Temperatures based on Curing Times</li>
    //   </ol>
    // </div>

  //   <div
  //   className="content"
  //   style={{
  //     backgroundImage: `url(${yokohama})`,
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //     height: '100vh',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     justifyContent:"space-even",
  //     alignItems: 'center',
  //     color: 'white',
  //     textAlign: 'center',
  //   }}
  // >
  //   <h1>Yokohama Tyre Curing Time Prediction</h1>
  //   <p>This tool is used for</p>
  //   <ol>
  //     <li>Predicting the Curing Time based on Maximum Temperatures</li>
  //     <li>Predicting Maximum Temperatures based on Curing Times</li>
  //   </ol>
  // </div>

  <div
      className="content"
      style={{
        backgroundImage: `url(${yokohama})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3em' }}>Yokohama Tyre Curing Time Prediction</h1>
      {/* <p style={{ fontSize: '1.5em' }}>This tool is used for</p> */}
      <ol style={{ fontSize: '1.2em' }}>
        <li>Predicting the Curing Time based on Maximum Temperatures</li>
        <li>Predicting Maximum Temperatures based on Curing Times</li>
      </ol>
    </div>

  )
}







const Header = ({ onSignOut }) => {
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
          <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/prediction">Prediction</Link>
            </li>
            <li>
              <Link to="/browse">Browse Tyre Curing Data</Link>
            </li>
          </ul>
        </nav>
        <div className="settings-help">
          <Link to="/settings">
            <i className="fas fa-cog"></i> Settings
          </Link>
          <Link to="/help">
            <i className="fas fa-question-circle"></i> Help
          </Link>
          <button className="signout-button" onClick={onSignOut}>
            <i className="fas fa-sign-out-alt"></i> Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated && <Header onSignOut={handleSignOut} />}
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/prediction" /> : <Login onLogin={handleLogin} />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />

          <Route path="/prediction" element={isAuthenticated ? <TyrePrediction /> : <Navigate to="/" />} />
          <Route path="/browse" element={isAuthenticated ? <Tyre_Curing_Data /> : <Navigate to="/" />} />
          <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/" />} />
          <Route path="/help" element={isAuthenticated ? <Help /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
