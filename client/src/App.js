import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quota from './pages/Quota';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* 根路由，顯示原本的 CRA 歡迎畫面 */}
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          }
        />

        {/* 額度申請頁面 */}
        <Route path="/quota" element={<Quota />} />

        {/* 其他尚未實作的頁面路由可以依需求增加 */}
        {/* <Route path="/list" element={<List />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
