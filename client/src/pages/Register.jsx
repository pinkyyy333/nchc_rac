// client/src/pages/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('密碼與確認密碼不一致');
      return;
    }
    try {
      const res = await axios.post('/register', {
        username: form.username,
        email: form.email,
        password: form.password
      }, { withCredentials: true });
      if (res.data.success) {
        navigate('/login');
      } else {
        setError(res.data.message || '註冊失敗');
      }
    } catch {
      setError('註冊失敗，請稍後再試');
    }
  };

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family:'Segoe UI', Tahoma, sans-serif; background:#f5f7fa; }
        a { color:#0098c9; text-decoration:none; }
        a:hover { text-decoration:underline; }

        header { background:#fff; padding:15px 30px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 1px 4px rgba(0,0,0,0.1); }
        .logo { font-size:24px; font-weight:bold; color:#2bbbad; }
        nav ul { list-style:none; display:flex; gap:20px; }
        nav a { font-size:16px; color:#333; padding-bottom:4px; }
        nav a.active, nav a:hover { font-weight:bold; border-bottom:2px solid #2bbbad; }
        .btn-group { display:flex; gap:10px; }
        .btn { padding:6px 12px; border:1px solid #e0e0e0; border-radius:4px; background:#f0f0f0; cursor:pointer; display:inline-block; text-align:center; }
        .btn.primary { background:#dbae67; color:#fff; border-color:#c79952; }

        .auth-container { width:320px; margin:40px auto; padding:20px; background:#fff; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); }
        .auth-container h2 { text-align:center; margin-bottom:20px; color:#2bbbad; }
        .auth-container form { display:flex; flex-direction:column; }
        .auth-container label { margin-bottom:6px; font-size:14px; }
        .auth-container input { margin-bottom:15px; padding:8px; border:1px solid #ccc; border-radius:4px; font-size:14px; }
        .auth-container button { padding:10px; background:#2bbbad; color:#fff; border:none; border-radius:4px; cursor:pointer; font-size:16px; }
        .auth-container button:hover { background:#239e94; }
        .auth-container .links { font-size:14px; text-align:center; margin-top:10px; color: #333; }

        footer { margin-top:40px; background:linear-gradient(180deg,#00c2d7,#00538d); color:#fff; padding:40px 30px; }
        .footer-content { display:flex; flex-wrap:wrap; justify-content:space-between; }
        .footer-section { flex:1 1 200px; margin:10px; }
        .footer-section h4 { margin-bottom:12px; font-size:18px; }
        .footer-section ul { list-style:none; }
        .footer-info { text-align:center; margin-top:30px; font-size:14px; }
      `}</style>

      <header>
        <div className="logo">RAC 資源申請平台</div>
        <nav>
          <ul>
            <li><Link to="/">計畫介紹</Link></li>
            <li><Link to="/apply">申請流程</Link></li>
            <li><Link to="/list" >通過名單</Link></li>
            <li><Link to="/quota">額度申請</Link></li>
          </ul>
        </nav>
        <div className="btn-group">
          <Link to="/register" className="btn primary">註冊</Link>
          <Link to="/login"    className="btn">登入</Link>
        </div>
      </header>

      <div className="auth-container">
        <h2>會員註冊</h2>
        {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="new-username">使用者帳號</label>
          <input
            type="text"
            id="new-username"
            name="username"
            placeholder="請設定帳號"
            value={form.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">電子郵件</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="請輸入電子郵件"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="new-password">密碼</label>
          <input
            type="password"
            id="new-password"
            name="password"
            placeholder="請設定密碼"
            value={form.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirm-password">確認密碼</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            placeholder="再輸入一次密碼"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">註冊</button>
        </form>
        <div className="links">
          <Link to="/login">已經有帳號？前往登入</Link>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>指導單位</h4>
            <ul><li>國家科學及技術委員會</li></ul>
          </div>
          <div className="footer-section">
            <h4>執行單位</h4>
            <ul><li>國家高速網路與計算中心</li></ul>
          </div>
          <div className="footer-section">
            <h4>客服專線</h4>
            <p>0809-091-365</p>
            <p>rac@narlabs.org.tw</p>
          </div>
        </div>
        <div className="footer-info">2025 © NCHC All Rights Reserved</div>
      </footer>
    </>
  );
}
