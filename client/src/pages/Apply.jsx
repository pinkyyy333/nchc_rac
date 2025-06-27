import React from 'react';
import { Link } from 'react-router-dom';

export default function Apply() {
  return (
    <>
      {/* Apply page styles */}
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Segoe UI', Tahoma, sans-serif; color:#333; background:#f5f7fa; line-height:1.6; }
        h2, h3, h4 { color:#2bbbad; }
        a { color:#0098c9; text-decoration:none; }
        a:hover { text-decoration:underline; }
        header { background:#fff; padding:15px 30px; display:flex; align-items:center; justify-content:space-between; box-shadow:0 1px 4px rgba(0,0,0,0.1); }
        .logo { font-size:24px; font-weight:bold; color:#2bbbad; }
        nav ul { list-style:none; display:flex; gap:20px; }
        nav a { font-size:16px; color:#333; }
        nav a.active { font-weight:bold; border-bottom:2px solid #2bbbad; }
        .btn-group { display:flex; gap:10px; }
        .btn { padding:6px 12px; border:1px solid #e0e0e0; border-radius:4px; background:#f0f0f0; cursor:pointer; }
        .btn.primary { background:#dbae67; color:#fff; border-color:#c79952; }
        .container { max-width:960px; margin:30px auto; background:#fff; padding:20px; border-radius:6px; box-shadow:0 1px 4px rgba(0,0,0,0.1); }
        section { margin-bottom:30px; }
        section p, section ul, section ol { margin-top:10px; }
        ul, ol { padding-left:20px; }
        .image-container { text-align:center; margin:20px 0; }
        .image-container img { max-width:100%; border:1px solid #ddd; padding:4px; }
        footer { margin-top:40px; background:linear-gradient(180deg,#00c2d7,#00538d); color:#fff; padding:40px 30px; }
        .footer-content { display:flex; flex-wrap:wrap; justify-content:space-between; }
        .footer-section { flex:1 1 200px; margin:10px; }
        .footer-section h4 { margin-bottom:12px; font-size:18px; color:white; }
        .footer-section ul { list-style:none; }
        .footer-section a { color:#fff; }
        .footer-info { text-align:center; margin-top:30px; font-size:14px; }
      `}</style>

      <header>
        <div className="logo">RAC 資源申請平台</div>
        <nav>
          <ul>
            <li><Link to="/" >計畫介紹</Link></li>
            <li><Link to="/apply" className="active">申請流程</Link></li>
            <li><Link to="/list" >通過名單</Link></li>
            <li><Link to="/quota" >額度申請</Link></li>
          </ul>
        </nav>
        <div className="btn-group">
          <Link to="/register" className="btn">註冊</Link>
          <Link to="/login" className="btn primary">登入</Link>
        </div>
      </header>

      <div className="container">
        <h2>112年度 高效能計算資源申請流程</h2>

        <section>
          <h3>背景說明</h3>
          <p><strong>背景：</strong>現有高效能計算採開放式服務，以不同費率供用戶選擇對應資源，易產生計算排程壅塞等問題，也較難呈現國家級計算設施之效益。</p>
          <p><strong>目標：</strong>成立計算資源審查委員會，由國科會學術處與學門代表審議，國網中心提供計算資源配置建議。</p>
          <p><strong>實施後資源使用原則：</strong>經核定通過後之計畫，可於計畫補助期間內以一般資源費率使用高優先資源，不須額外負擔價差。</p>
        </section>

        <section>
          <h3>申請步驟</h3>
          <ol>
            <li>請於國科會專題研究計畫申請書之基本資料中，「本計畫是否申請高效能計算資源」勾選「是」。</li>
            <li>參考國網中心「高效能計算資源審查網」說明 (<a href="https://rac.nchc.org.tw" target="_blank" rel="noopener noreferrer">https://rac.nchc.org.tw</a>)，填寫使用申請表，於專題研究計畫申請期間內，在「高效能計算資源審查網」進行申請。</li>
          </ol>
        </section>

        <section>
          <h3>表單填寫說明</h3>
          <ul>
            <li>為簡化申請流程，「高效能計算資源使用申請表」僅保留必要之申請人基本資訊及高效能計算相關內容。</li>
            <li>請於國科會學術服務網，匯出完整基本資料 (CM01.pdf) 及中英文摘要 (CM02.pdf)。</li>
            <li>請將「高效能計算資源使用申請表」及 CM01.pdf、CM02.pdf，一併寄至國網中心收案窗口 (<a href="mailto:rac@narlabs.org.tw">rac@narlabs.org.tw</a>)。</li>
          </ul>
          <div className="image-container">
            <img src="/example-form.png" alt="表單填寫說明" />
          </div>
        </section>

        <section>
          <h3>填寫參考範例</h3>
          <h4>使用規劃與可行性</h4>
          <ul>
            <li>三元合金設計工作，擬以電腦計算進行虛擬篩選，各元素成分比例分為 10 個 level，參數空間將有 1,000 種組合。</li>
            <li>每個組合計算消耗 2,240 core-hr，總計算量為 2,240,000 core-hr。</li>
            <li>使用 40 個台灣杉三號節點，可於 41.6 天內完成。</li>
          </ul>

          <h4>必要性</h4>
          <strong>可用文字敘述</strong>
          <p>利用 Taiwania3 (T3) 高密度核心的優勢，用 1~2 個 T3 計算節點，便可完成實驗室 PC cluster 動輒 10~20 台的計算資源消耗，T3 對於高通量材料計算的研究推進加速效果是十分顯著的。</p>
          <ul>
            <li>使用兩個 T3 計算節點計算 SiC 相關材料，大約 2.5 小時。使用自建 PC cluster (8 cores/node) 需要同時動用到 15 台才有相同核心數量，但低速的網路連結 (eth) 加上更多的節點數使得 VASP 計算效率不彰，需要 10 小時才能完成相同工作 (整體提升約四倍速度)。</li>
            <li>相同工作在 Taiwania1 (T1) 執行，使用 2 個 T1 計算節點 (40 cores/node)，約需 4.5 小時。</li>
          </ul>
          <br />
          <strong>可用表格敘述</strong>
          <div className="image-container">
            <img src="/example-sheet.png" alt="必要性表格" />
          </div>

          <h4>效率評估</h4>
          <p>建議可提供 strong scaling, weak scaling 測試：</p>
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/Scalability" target="_blank" rel="noopener noreferrer">Strong/Weak Scalability (Wikipedia)</a></li>
            <li><a href="https://hpc-wiki.info/hpc/Scaling" target="_blank" rel="noopener noreferrer">HPC Wiki: Scaling</a></li>
          </ul>
          <div className="image-container">
            <img src="/example-form.png" alt="效率評估" />
          </div>
        </section>
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
