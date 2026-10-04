/* ZI EER — RETRO CRT STREAM SCENES
   Mỗi file HTML đặt window.SCENE trước khi nạp script này.
   Tuỳ chỉnh qua URL, ví dụ: starting-soon.html?t=5&name=ZI%20EER&msg=LOADING%20RECORD
     t     — số phút đếm ngược (chỉ màn Starting Soon)
     name  — tên kênh trên poster / TV
     msg   — dòng chữ nhỏ dưới tiêu đề
     tape  — chữ viết tay trên băng VHS
*/
(function () {
  const params = new URLSearchParams(location.search);
  const S = window.SCENE;
  const name = (params.get('name') || 'ZI EER').toUpperCase();
  const msg = (params.get('msg') || S.caption).toUpperCase();
  const tape = params.get('tape') || S.tape;

  /* ─── scale 1920×1080 canvas to window ─── */
  const stage = document.getElementById('stage');
  function fit() {
    const k = Math.min(innerWidth / 1920, innerHeight / 1080);
    stage.style.transform = `translate(${(innerWidth - 1920 * k) / 2}px, ${(innerHeight - 1080 * k) / 2}px) scale(${k})`;
  }
  addEventListener('resize', fit);
  fit();

  const $ = (sel) => document.querySelector(sel);
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  /* ─── title (3D extruded lines) ─── */
  const title = $('.title');
  S.lines.forEach(([text, size]) => {
    const line = document.createElement('span');
    line.className = 'line';
    line.style.setProperty('--fs', size + 'px');
    line.innerHTML = `<span class="ext"></span><span class="face"></span>`;
    line.querySelector('.ext').textContent = text;
    line.querySelector('.face').textContent = text;
    title.appendChild(line);
  });

  $('.prompt .label').textContent = S.prompt;
  $('.caption .text').textContent = msg;
  $('.vcr-tape .label').textContent = tape;
  document.querySelectorAll('[data-name]').forEach((el) => (el.textContent = name));
  $('.hud.bl').textContent = S.hud;

  /* ─── shelves of tapes ─── */
  const spineColors = ['#2a0a0a', '#3d0d0c', '#170606', '#521210', '#1d1415', '#6b1712', '#241010'];
  const labelColors = ['rgba(255,241,223,.18)', 'rgba(255,90,60,.35)', 'rgba(255,241,223,.08)', 'rgba(0,0,0,.35)'];
  document.querySelectorAll('.shelf').forEach((shelf) => {
    let used = 0;
    while (used < 330) {
      const w = Math.round(rand(18, 34));
      const sp = document.createElement('span');
      sp.className = 'spine';
      sp.style.cssText = `--w:${w}px;--h:${Math.round(rand(82, 118))}px;--c:${pick(spineColors)};--lc:${pick(labelColors)};--lh:${Math.round(rand(12, 30))}%`;
      if (Math.random() < 0.12) sp.style.transform = `rotate(${rand(-8, -4)}deg) translateX(4px)`;
      shelf.appendChild(sp);
      used += w + 3;
    }
  });

  /* ─── bokeh + dust ─── */
  const bokehLayer = $('.bokeh-layer');
  for (let i = 0; i < 14; i++) {
    const b = document.createElement('span');
    b.className = 'bokeh';
    const s = rand(60, 200);
    b.style.cssText = `width:${s}px;height:${s}px;left:${rand(0, 1820)}px;top:${rand(0, 820)}px;--c:${pick(['#ff4a2e', '#ff7a4d', '#c8261b', '#ffb38a'])};--o:${rand(0.2, 0.55)};--d:${rand(7, 14)}s;--dl:${-rand(0, 14)}s;--b:${rand(14, 30)}px`;
    bokehLayer.appendChild(b);
  }
  for (let i = 0; i < 36; i++) {
    const d = document.createElement('span');
    d.className = 'dust';
    d.style.cssText = `left:${rand(0, 1920)}px;top:${rand(200, 1080)}px;--s:${rand(1.5, 4)}px;--d:${rand(10, 22)}s;--dl:${-rand(0, 22)}s;--dx:${rand(-80, 80)}px`;
    stage.appendChild(d);
  }

  /* ─── clocks: HUD time + countdown on VCR ─── */
  const pad = (n) => String(n).padStart(2, '0');
  const hudTime = $('.hud.br');
  const vcrTime = $('.vcr-display .time');
  const countdown = $('.countdown');
  const minutes = parseFloat(params.get('t'));
  const endAt = S.countdown && minutes > 0 ? Date.now() + minutes * 60000 : null;

  function tick() {
    const now = new Date();
    hudTime.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    if (endAt) {
      const left = Math.max(0, Math.round((endAt - Date.now()) / 1000));
      const mm = pad(Math.floor(left / 60));
      const ss = pad(left % 60);
      countdown.textContent = left > 0 ? `STARTS IN ${mm}:${ss}` : 'ANY SECOND NOW!';
      vcrTime.textContent = `${mm}:${ss}`;
    } else {
      vcrTime.textContent = S.vcr || `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    }
  }
  tick();
  setInterval(tick, 1000);
})();
