import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

export default function List() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/data/rac_approved.json')
      .then(res => setRows(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const columns = useMemo(() => [
    { name: '主持人',        selector: row => row['主持人'],        sortable: true },
    { name: '計畫名稱',      selector: row => row['計畫名稱'],      sortable: true, wrap: true },
    { name: '計畫編號',      selector: row => row['計畫編號'],      sortable: true },
    { name: '需求用量',        selector: row => row['需求用量'],   sortable: true, right: true },
    { name: '方案一核發量',  selector: row => row['方案一核發量'],  sortable: true, right: true },
    { name: '時間',          selector: row => row['時間']      ,   sortable: true },
  ], []);

  return (
    <>
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Segoe UI', Tahoma, sans-serif; color:#333; background:#f5f7fa; line-height:1.6; }
        h2, h3, h4 { color:#2bbbad; }
        a { color:#0098c9; text-decoration:none; }
        a:hover { text-decoration:underline; }

        header { background:#fff; padding:15px 30px; display:flex; align-items:center; justify-content:space-between; box-shadow:0 1px 4px rgba(0,0,0,0.1); }
        .logo { font-size:24px; font-weight:bold; color:#2bbbad; }
        nav ul { list-style:none; display:flex; gap:20px; }
        nav a { font-size:16px; color:#333; text-decoration:none; }
        nav a.active { font-weight:bold; border-bottom:2px solid #2bbbad; }
        .btn-group { display:flex; gap:10px; }
        .btn { padding:6px 12px; border:1px solid #e0e0e0; border-radius:4px; background:#f0f0f0; cursor:pointer; text-decoration:none; color:#333; }
        .btn.primary { background:#dbae67; color:#fff; border-color:#c79952; }

        .container { max-width:960px; margin:30px auto; background:#fff; padding:20px; border-radius:6px; box-shadow:0 1px 4px rgba(0,0,0,0.1); }
        .data-table { margin-top:10px; }
        
        footer { margin-top:40px; background:linear-gradient(180deg,#00c2d7,#00538d); color:#fff; padding:40px 30px; }
        .footer-content { display:flex; flex-wrap:wrap; justify-content:space-between; }
        .footer-section { flex:1 1 200px; margin:10px; }
        .footer-section h4 { margin-bottom:12px; font-size:18px; color:white; }
        .footer-section ul { list-style:none; }
        .footer-info { text-align:center; margin-top:30px; font-size:14px; }
      `}</style>

      <header>
        <div className="logo">RAC 資源申請平台</div>
        <nav>
          <ul>
            <li><Link to="/">計畫介紹</Link></li>
            <li><Link to="/apply">申請流程</Link></li>
            <li><Link to="/list" className="active">通過名單</Link></li>
            <li><Link to="/quota">額度申請</Link></li>
          </ul>
        </nav>
        <div className="btn-group">
          <Link to="/register" className="btn">註冊</Link>
          <Link to="/login" className="btn primary">登入</Link>
        </div>
      </header>

      <div className="container">
        <h2>通過名單</h2>
        {loading ? (
          <p>載入中…</p>
        ) : (
          <DataTable
            className="data-table"
            columns={columns}
            data={rows}
            pagination
            highlightOnHover
            defaultSortField="主持人"
            responsive
          />
        )}
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
