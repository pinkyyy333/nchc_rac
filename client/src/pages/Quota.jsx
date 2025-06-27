import React, { useState } from 'react';

export default function Quota() {
  // 表格清單，可改為從 API 拿取
  const forms = [
    { code: 'A001', name: '主持人聲明書', desc: '（合併檔中不包含此項目）' },
    { code: 'A003', name: '計畫送審之家長意見領域', desc: '（合併檔中不包含此項目）' },
    { code: 'CM01', name: '基本資料表' },
    { code: 'CM02', name: '研究計畫中英文摘要及關鍵詞' },
    { code: 'CM03', name: '研究計畫內容' },
    { code: 'CM05', name: '申請補助經費表' },
    { code: 'CM06', name: '主要研究人力表' },
    { code: 'CM14', name: '近三年內執行本會之所有計畫' },
    { code: 'NSCM01', name: '自然處專題計畫主持人近五年研究成果' }
  ];

  // 紀錄各表格檔案上傳狀態
  const [statuses, setStatuses] = useState({});

  const handleFileChange = (code, event) => {
    const file = event.target.files[0];
    setStatuses(prev => ({
      ...prev,
      [code]: file ? file.name : '未上傳'
    }));
  };

  return (
    <>
      {/* 原 quota.html 的 CSS 直接內嵌，可後續拆成外部 .css 檔 */}
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Segoe UI', Tahoma, sans-serif; background:#f5f7fa; color:#333; }
        a { color:#0098c9; text-decoration:none; }
        a:hover { text-decoration:underline; }
        header { background:#fff; padding:15px 30px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 1px 4px rgba(0,0,0,0.1); }
        .logo { font-size:24px; font-weight:bold; color:#2bbbad; }
        nav ul { list-style:none; display:flex; gap:20px; }
        nav a { font-size:16px; color:#333; padding-bottom:4px; }
        nav a.active, nav a:hover { font-weight:bold; border-bottom:2px solid #2bbbad; }
        .btn-group { display:flex; gap:10px; }
        .btn { padding:6px 12px; border:1px solid #e0e0e0; border-radius:4px; background:#f0f0f0; cursor:pointer; }
        .btn.primary { background:#dbae67; color:#fff; border-color:#c79952; }
        .btn.secondary { background:#e9ecef; }
        .container { max-width:960px; margin:30px auto; background:#fff; padding:20px; border-radius:6px; box-shadow:0 1px 4px rgba(0,0,0,0.1); }
        .alert { padding:10px 15px; background:#ffeeba; border:1px solid #f5c6cb; border-radius:4px; color:#856404; margin-bottom:15px; }
        .actions { margin-bottom:15px; }
        .actions .btn { font-size:14px; }
        table { width:100%; border-collapse:collapse; }
        thead { background:#336699; color:#fff; }
        th, td { padding:10px; border:1px solid #ddd; text-align:left; font-size:14px; }
        th { font-weight:normal; }
        .status { margin-left:8px; font-size:13px; color:#888; }
        .file-input { font-size:14px; }
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
            <li><a href="/">計畫介紹</a></li>
            <li><a href="/apply">申請流程</a></li>
            <li><a href="/list">通過名單</a></li>
            <li><a href="/quota" className="active">額度申請</a></li>
          </ul>
        </nav>
        <div className="btn-group">
          <a href="/register" className="btn secondary">註冊</a>
          <a href="/login" className="btn primary">登入</a>
        </div>
      </header>

      <div className="container">
        <div className="alert">
          線上申請作業截止時間：<strong>2023/09/30 23:59</strong>，請於截止前完成「繳交送出」。
        </div>
        <div className="actions">
          <button className="btn secondary" onClick={() => window.location.href = '/'}>回主畫面</button>
          <button className="btn secondary" onClick={() => window.location.href = '/quota'}>表格目錄</button>
          <button className="btn secondary" onClick={() => window.location.href = '/quota-settings'}>表格設定</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>表格代號</th>
              <th>表格名稱 / 計畫書內容</th>
              <th>瀏覽 / 上傳</th>
            </tr>
          </thead>
          <tbody>
            {forms.map(f => (
              <tr key={f.code}>
                <td>{f.code}</td>
                <td>
                  {f.name}
                  {f.desc && (
                    <span style={{ color: '#888', fontSize: '12px', marginLeft: '4px' }}>
                      {f.desc}
                    </span>
                  )}
                </td>
                <td>
                  <input
                    type="file"
                    className="file-input"
                    data-code={f.code}
                    accept=".pdf,.doc,.docx"
                    onChange={e => handleFileChange(f.code, e)}
                  />
                  <span className="status">{statuses[f.code] || '未上傳'}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
