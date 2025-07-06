// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Index from './pages/Index';
import Apply from './pages/Apply';
import List from './pages/List';
import Quota from './pages/Quota';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* 首頁 — 計畫介紹 */}
        <Route path="/" element={<Index />} />

        {/* 申請流程 */}
        <Route path="/apply" element={<Apply />} />

        {/* 通過名單 */}
        <Route path="/list" element={<List />} />

        {/* 額度申請 */}
        <Route path="/quota" element={<Quota />} />

        {/* 登入註冊 */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 找不到路由時導回首頁 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
