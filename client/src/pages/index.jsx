import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <style>{`
        /* 全域樣式 */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family:'Segoe UI', Tahoma, sans-serif; color:#333; background:#f5f7fa; line-height:1.6; }
        h2, h3, h4 { color:#2bbbad; }
        a { color:#0098c9; text-decoration:none; }
        a:hover { text-decoration:underline; }

        /* header */
        header { background:#fff; padding:15px 30px; display:flex; align-items:center; justify-content:space-between; box-shadow:0 1px 4px rgba(0,0,0,0.1); }
        .logo { font-size:24px; font-weight:bold; color:#2bbbad; }
        nav ul { list-style:none; display:flex; gap:20px; }
        nav a { font-size:16px; color:#333; }
        nav a.active { font-weight:bold; border-bottom:2px solid #2bbbad; }
        .btn-group { display:flex; gap:10px; }
        .btn { padding:6px 12px; border:1px solid #e0e0e0; border-radius:4px; background:#f0f0f0; cursor:pointer; }
        .btn.primary { background:#dbae67; color:#fff; border-color:#c79952; }

        /* 內容 container */
        .container { max-width:960px; margin:30px auto; background:#fff; padding:20px; border-radius:6px; box-shadow:0 1px 4px rgba(0,0,0,0.1); }
        section { margin-bottom:30px; }
        section p, section ul, section ol { margin-top:10px; }
        ul, ol { padding-left:20px; }

        /* footer */
        footer { margin-top:40px; background:linear-gradient(180deg,#00c2d7,#00538d); color:#fff; padding:40px 30px; }
        .footer-content { display:flex; flex-wrap:wrap; justify-content:space-between; }
        .footer-section { flex:1 1 200px; margin:10px; }
        .footer-section h4 { margin-bottom:12px; font-size:18px; color:#fff; }
        .footer-section ul { list-style:none; }
        .footer-section a { color:#fff; }
        .footer-info { text-align:center; margin-top:30px; font-size:14px; }
      `}</style>

      {/* header */}
      <header>
        <div className="logo">RAC 資源申請平台</div>
        <nav>
          <ul>
            <li><Link to="/" className="active">計畫介紹</Link></li>
            <li><Link to="/apply">申請流程</Link></li>
            <li><Link to="/list">通過名單</Link></li>
            <li><Link to="/quota">額度申請</Link></li>
          </ul>
        </nav>
        <div className="btn-group">
          <Link to="/register" className="btn">註冊</Link>
          <Link to="/login" className="btn primary">登入</Link>
        </div>
      </header>

      {/* 主要內容 */}
      <div className="container">
        <h2>計畫介紹</h2>

        <section>
          <h3>一、目的</h3>
          <p>
            提升財團法人國家實驗研究院國家高速網路與計算中心（以下簡稱國網中心）高效能計算資源之運用成效，落實資源合理分配，協助學研用戶擴大計算規模與能量，增進研發成果之國際競爭力。
          </p>
        </section>

        <section>
          <h3>二、適用範圍</h3>
          <ul>
            <li>本機制審查對象，為申請國家科學及技術委員會（以下簡稱國科會）補助之專題研究計畫。</li>
            <li>本機制所分配之計算資源，為國網中心台灣杉三號之 CPU 計算時數，不包含台灣杉二號、TWCC 等 GPU 計算時數及其他儲存服務。</li>
            <li>經審查及國科會核定通過之專題研究計畫，可於計畫執行期間內以一般資源費率使用高優先資源，不須額外負擔價差。</li>
            <li>高優先資源係指在國網中心可隨需即算、不需等待的計算資源。</li>
          </ul>
        </section>

        <section>
          <h3>三、審查方式</h3>
          <ul>
            <li>由國科會各學門推薦專家與國網中心共同組成「高效能計算資源審查委員會」進行審查。</li>
            <li>審查委員依據申請計畫所提計算資源需求之必要性、使用規劃與可行性、效率評估等項目，給予計算資源核給建議，供國科會參考。</li>
          </ul>
        </section>

        <section>
          <h3>四、申請方式</h3>
          <ul>
            <li>請於國科會專題研究計畫申請書之基本資料中，勾選申請「高效能計算資源」。</li>
            <li>於專題研究計畫申請期限內，填寫「高效能計算資源使用申請表」，於國網中心「高效能計算資源審查網」提出申請（https://rac.nchc.org.tw）。</li>
          </ul>
        </section>

        <section>
          <h3>五、相關資訊及聯絡窗口</h3>
          <ul>
            <li>申請相關說明，請參見國網中心「高效能計算資源審查網」（https://rac.nchc.org.tw）。</li>
            <li>
              如有疑義，請洽國網中心：<br/>
              電話：03-5776085 分機 262<br/>
              電子信箱：<a href="mailto:rac@narlabs.org.tw">rac@narlabs.org.tw</a>
            </li>
          </ul>
        </section>
      </div>

      {/* footer */}
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
