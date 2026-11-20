'use strict';
/**
 * CORRE QUE TE PÍO — versión de UN SOLO ARCHIVO.
 * Archivo GENERADO automáticamente (tools/build-single.js): contiene el servidor, el motor de juego,
 * las salas y todo el frontend. No lo edites a mano; edita el proyecto completo y vuelve a generarlo.
 */
const __BUILD_MTIME__ = 1795153916408;
const __EMBEDDED_FILES__ = {"/assets/chick/chick.svg":"<svg width=\"400\" height=\"400\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pío, el pollito\">\n<defs><style>.on-eyes-happy,.on-eyes-wide,.on-eyes-sad,.on-eyes-confused,.on-beak-open,.on-brows-angry,.on-brows-sad,.on-tear,.on-sweat,.on-sparks,.on-qmark,.on-bang,.on-crown,.on-conf,.on-lol{display:none}</style>\n  <radialGradient id=\"c1y\" cx=\"42%\" cy=\"30%\" r=\"80%\"><stop offset=\"0\" stop-color=\"#fff08a\"/><stop offset=\".55\" stop-color=\"#ffd23f\"/><stop offset=\"1\" stop-color=\"#f0b10f\"/></radialGradient>\n  <linearGradient id=\"c1w\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#ffd84f\"/><stop offset=\"1\" stop-color=\"#eaa90c\"/></linearGradient>\n</defs>\n<ellipse cx=\"100\" cy=\"192\" rx=\"56\" ry=\"7\" fill=\"#040b24\" opacity=\".28\"/>\n<g class=\"body-g\">\n  <g fill=\"#ff8a1f\" stroke=\"#d96d0a\" stroke-width=\"2.5\" stroke-linejoin=\"round\">\n    <path d=\"M60 178 q4 -9 17 -7 q13 2 13 9 q-2 7 -14 7 q-14 0 -16 -9z\"/><path d=\"M110 180 q0 -7 13 -9 q13 -2 17 7 q-2 9 -16 9 q-12 0 -14 -7z\"/>\n  </g>\n  <ellipse cx=\"100\" cy=\"134\" rx=\"58\" ry=\"50\" fill=\"url(#c1y)\"/>\n  <ellipse cx=\"100\" cy=\"148\" rx=\"33\" ry=\"29\" fill=\"#fff4b0\" opacity=\".85\"/>\n  <g class=\"wing-l\"><ellipse cx=\"44\" cy=\"136\" rx=\"15\" ry=\"27\" transform=\"rotate(16 44 136)\" fill=\"url(#c1w)\" stroke=\"#d99a08\" stroke-width=\"2\"/></g>\n  <g class=\"wing-r\"><ellipse cx=\"156\" cy=\"136\" rx=\"15\" ry=\"27\" transform=\"rotate(-16 156 136)\" fill=\"url(#c1w)\" stroke=\"#d99a08\" stroke-width=\"2\"/></g>\n  <circle cx=\"100\" cy=\"84\" r=\"54\" fill=\"url(#c1y)\"/>\n  <path d=\"M90 34 q-8 -16 4 -22 M101 31 q0 -18 11 -18 M111 35 q9 -12 18 -6\" stroke=\"#f0b10f\" stroke-width=\"7\" fill=\"none\" stroke-linecap=\"round\"/>\n  <ellipse cx=\"61\" cy=\"101\" rx=\"12\" ry=\"7.5\" fill=\"#ff7a4d\" opacity=\".5\"/><ellipse cx=\"139\" cy=\"101\" rx=\"12\" ry=\"7.5\" fill=\"#ff7a4d\" opacity=\".5\"/>\n\n  <g class=\"blink on-eyes-open\"><ellipse cx=\"76\" cy=\"84\" rx=\"9\" ry=\"12.5\" fill=\"#0a1640\"/><ellipse cx=\"124\" cy=\"84\" rx=\"9\" ry=\"12.5\" fill=\"#0a1640\"/>\n    <circle cx=\"79.5\" cy=\"78.5\" r=\"3.6\" fill=\"#fff\"/><circle cx=\"127.5\" cy=\"78.5\" r=\"3.6\" fill=\"#fff\"/><circle cx=\"73\" cy=\"90\" r=\"1.9\" fill=\"#fff\"/><circle cx=\"121\" cy=\"90\" r=\"1.9\" fill=\"#fff\"/></g>\n  <g class=\"on-eyes-happy\" stroke=\"#0a1640\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M65 90 q11 -19 22 0\"/><path d=\"M113 90 q11 -19 22 0\"/></g>\n  <g class=\"on-eyes-wide\"><ellipse cx=\"75\" cy=\"83\" rx=\"13\" ry=\"16\" fill=\"#fff\" stroke=\"#0a1640\" stroke-width=\"3\"/><ellipse cx=\"125\" cy=\"83\" rx=\"13\" ry=\"16\" fill=\"#fff\" stroke=\"#0a1640\" stroke-width=\"3\"/>\n    <circle cx=\"76\" cy=\"84\" r=\"7\" fill=\"#0a1640\"/><circle cx=\"124\" cy=\"84\" r=\"7\" fill=\"#0a1640\"/><circle cx=\"78.5\" cy=\"81\" r=\"2.6\" fill=\"#fff\"/><circle cx=\"126.5\" cy=\"81\" r=\"2.6\" fill=\"#fff\"/></g>\n  <g class=\"on-eyes-sad\"><ellipse cx=\"76\" cy=\"88\" rx=\"9.5\" ry=\"12\" fill=\"#0a1640\"/><ellipse cx=\"124\" cy=\"88\" rx=\"9.5\" ry=\"12\" fill=\"#0a1640\"/>\n    <circle cx=\"79\" cy=\"83\" r=\"5\" fill=\"#fff\"/><circle cx=\"127\" cy=\"83\" r=\"5\" fill=\"#fff\"/><circle cx=\"73\" cy=\"93\" r=\"2.2\" fill=\"#fff\"/><circle cx=\"121\" cy=\"93\" r=\"2.2\" fill=\"#fff\"/></g>\n  <g class=\"on-eyes-confused\"><ellipse cx=\"76\" cy=\"84\" rx=\"9\" ry=\"12.5\" fill=\"#0a1640\"/><circle cx=\"125\" cy=\"86\" r=\"6\" fill=\"#0a1640\"/><circle cx=\"79\" cy=\"79\" r=\"3.4\" fill=\"#fff\"/><circle cx=\"127\" cy=\"84\" r=\"2\" fill=\"#fff\"/>\n    <path d=\"M62 66 q12 -10 26 -2\" stroke=\"#0a1640\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"/></g>\n  <g class=\"on-brows-angry\" stroke=\"#0a1640\" stroke-width=\"6.5\" stroke-linecap=\"round\"><path d=\"M60 64 L91 77\"/><path d=\"M140 64 L109 77\"/></g>\n  <g class=\"on-brows-sad\" stroke=\"#0a1640\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"><path d=\"M62 76 L90 64\"/><path d=\"M138 76 L110 64\"/></g>\n\n  <path class=\"beak-closed\" d=\"M85 97 Q100 88 115 97 Q100 117 85 97Z\" fill=\"#ff8a1f\" stroke=\"#d96d0a\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <g class=\"on-beak-open\" stroke=\"#d96d0a\" stroke-width=\"2.5\" stroke-linejoin=\"round\"><path d=\"M85 95 Q100 86 115 95 Q100 103 85 95Z\" fill=\"#ff8a1f\"/><path d=\"M89 99 Q100 121 111 99Z\" fill=\"#7a2318\"/><ellipse cx=\"100\" cy=\"112\" rx=\"6\" ry=\"3.5\" fill=\"#ff7a8a\" stroke=\"none\"/></g>\n  <g class=\"on-tear\"><path d=\"M58 98 q-8 13 0 18 q8 -5 0 -18z\" fill=\"#7fd0ff\" stroke=\"#3d9be0\" stroke-width=\"1.5\"/></g>\n  <g class=\"on-lol\"><path d=\"M56 96 q-8 11 0 16 q8 -5 0 -16z\" fill=\"#7fd0ff\"/><path d=\"M144 96 q-8 11 0 16 q8 -5 0 -16z\" fill=\"#7fd0ff\"/></g>\n  <g class=\"on-sweat\"><path d=\"M150 54 q-9 14 0 20 q9 -6 0 -20z\" fill=\"#7fd0ff\" stroke=\"#3d9be0\" stroke-width=\"1.5\"/></g>\n  <g class=\"on-crown\"><path d=\"M70 38 L76 8 L90 26 L100 2 L110 26 L124 8 L130 38 Z\" fill=\"#ffd23f\" stroke=\"#c99a12\" stroke-width=\"3\" stroke-linejoin=\"round\"/><circle cx=\"100\" cy=\"12\" r=\"4\" fill=\"#ff5d73\"/></g>\n</g>\n<g class=\"on-sparks\" fill=\"#fff3b0\" stroke=\"#e0a800\" stroke-width=\"1.5\">\n  <path d=\"M26 52 l5 -14 l5 14 l14 5 l-14 5 l-5 14 l-5 -14 l-14 -5z\"/><path d=\"M168 36 l4 -11 l4 11 l11 4 l-11 4 l-4 11 l-4 -11 l-11 -4z\"/><path d=\"M162 112 l3 -8 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3z\"/>\n</g>\n<g class=\"on-conf\"><rect x=\"22\" y=\"20\" width=\"9\" height=\"14\" rx=\"2\" fill=\"#5ec3ff\" transform=\"rotate(20 26 27)\"/><rect x=\"170\" y=\"24\" width=\"9\" height=\"14\" rx=\"2\" fill=\"#ff6b3d\" transform=\"rotate(-25 174 31)\"/><rect x=\"40\" y=\"6\" width=\"8\" height=\"12\" rx=\"2\" fill=\"#fff\" transform=\"rotate(40 44 12)\"/><rect x=\"150\" y=\"4\" width=\"8\" height=\"12\" rx=\"2\" fill=\"#2f6bff\" transform=\"rotate(-10 154 10)\"/><rect x=\"180\" y=\"70\" width=\"8\" height=\"12\" rx=\"2\" fill=\"#ffd23f\" transform=\"rotate(30 184 76)\"/></g>\n<text class=\"on-qmark\" x=\"150\" y=\"46\" font-size=\"44\" font-weight=\"900\" fill=\"#fff\" stroke=\"#0a1640\" stroke-width=\"3\" paint-order=\"stroke\" font-family=\"ui-rounded,system-ui,sans-serif\">?</text>\n<text class=\"on-bang\" x=\"152\" y=\"48\" font-size=\"48\" font-weight=\"900\" fill=\"#ff5d73\" stroke=\"#0a1640\" stroke-width=\"3\" paint-order=\"stroke\" font-family=\"ui-rounded,system-ui,sans-serif\">!</text>\n</svg>","/assets/icons/favicon.svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\"><rect width=\"64\" height=\"64\" rx=\"16\" fill=\"#0b1b4a\"/><ellipse cx=\"32\" cy=\"40\" rx=\"20\" ry=\"17\" fill=\"#ffd23f\"/><circle cx=\"32\" cy=\"27\" r=\"17\" fill=\"#ffd23f\"/><circle cx=\"25\" cy=\"25\" r=\"3.2\" fill=\"#0a1640\"/><circle cx=\"39\" cy=\"25\" r=\"3.2\" fill=\"#0a1640\"/><path d=\"M27 31q5-3 10 0q-5 7-10 0z\" fill=\"#ff8a1f\"/><path d=\"M26 56q2-3 4 0M34 56q2-3 4 0\" stroke=\"#ff8a1f\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"/></svg>\n","/css/style.css":"/* ═══════════════════════════════════════════════════════════════════════════\n   CORRE QUE TE PÍO — hoja de estilos\n   Azul profundo manda · amarillo señala · blanco da claridad\n   ═══════════════════════════════════════════════════════════════════════════ */\n:root {\n  --navy-950: #040b24; --navy-900: #071236; --navy-800: #0b1b4a; --navy-700: #12297a; --navy-600: #1a3a9e;\n  --blue-500: #2f6bff; --blue-400: #5a8bff; --sky-300: #9fd0ff; --sky-200: #cfe6ff;\n  --yellow-500: #ffd23f; --yellow-400: #ffe066; --yellow-100: #fff3b0;\n  --white: #ffffff; --off: #f6f8ff; --ink: #0a1640; --ink-soft: #3d4c85;\n  --coral: #ff6b3d; --good: #46d39a; --bad: #ff5d73;\n  --font-display: ui-rounded, \"SF Pro Rounded\", \"Arial Rounded MT Bold\", \"Nunito\", \"Trebuchet MS\", system-ui, sans-serif;\n  --font-body: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  --r-lg: 22px; --r-md: 14px; --r-sm: 9px;\n  --shadow-1: 0 6px 18px rgba(2, 8, 30, .35); --shadow-2: 0 14px 40px rgba(2, 8, 30, .5);\n  --ease-spring: cubic-bezier(.2, .9, .3, 1.25); --ease-out: cubic-bezier(.16, .84, .3, 1);\n  --cw: 112px;               /* ancho de carta en mano */\n  --cw-outer: var(--cw);\n  --hand-h: 176px;\n}\n* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }\nhtml, body { height: 100%; margin: 0; }\nbody {\n  font-family: var(--font-body); color: var(--off); background: var(--navy-900); overflow: hidden;\n  background-image: radial-gradient(1100px 650px at 50% -12%, #2350d8 0%, rgba(35, 80, 216, 0) 62%), radial-gradient(800px 500px at 100% 110%, #12297a 0%, rgba(18, 41, 122, 0) 70%);\n  -webkit-font-smoothing: antialiased;\n}\nbutton, input { font: inherit; color: inherit; }\nbutton { cursor: pointer; }\n:focus-visible { outline: 3px solid var(--yellow-400); outline-offset: 2px; border-radius: 8px; }\n.hidden { display: none !important; }\n.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }\n\n/* ─── Botones ─── */\n.btn {\n  appearance: none; border: 0; border-radius: 999px; padding: .78em 1.5em; font-family: var(--font-display); font-weight: 800; font-size: 1rem;\n  letter-spacing: .01em; background: rgba(255, 255, 255, .12); color: var(--white); box-shadow: inset 0 0 0 2px rgba(255, 255, 255, .18);\n  transition: transform .15s var(--ease-spring), background .2s, box-shadow .2s, opacity .2s;\n}\n.btn:hover:not(:disabled) { transform: translateY(-2px); background: rgba(255, 255, 255, .2); }\n.btn:active:not(:disabled) { transform: translateY(1px) scale(.98); }\n.btn:disabled { opacity: .45; cursor: not-allowed; }\n.btn.primary { background: linear-gradient(180deg, var(--yellow-400), var(--yellow-500)); color: var(--ink); box-shadow: 0 5px 0 #c99a12, 0 12px 22px rgba(255, 210, 63, .25); }\n.btn.primary:hover:not(:disabled) { background: linear-gradient(180deg, #fff09a, var(--yellow-400)); }\n.btn.primary:active:not(:disabled) { box-shadow: 0 1px 0 #c99a12; transform: translateY(4px); }\n.btn.blue { background: linear-gradient(180deg, var(--blue-400), var(--blue-500)); box-shadow: 0 5px 0 #1a3fae, 0 12px 22px rgba(47, 107, 255, .3); }\n.btn.small { padding: .5em 1em; font-size: .88rem; }\n.btn.icon { padding: .5em .7em; font-size: 1.1rem; line-height: 1; }\n.btn.ghost { background: transparent; box-shadow: none; }\n\n/* ─── Pantallas ─── */\n#app { position: fixed; inset: 0; }\n.screen { position: absolute; inset: 0; display: none; }\n.screen.active { display: flex; }\n\n/* ═══ MENÚ ═══ */\n#screen-menu { align-items: center; justify-content: center; padding: 18px; overflow: auto; }\n.menu-wrap { width: min(980px, 100%); display: grid; grid-template-columns: 1.05fr 1fr; gap: 28px; align-items: center; margin: auto; }\n.hero { text-align: center; position: relative; }\n.logo { font-family: var(--font-display); font-weight: 900; line-height: .9; margin: 0; transform: rotate(-3deg); user-select: none; }\n.logo span { display: block; color: var(--yellow-500); font-size: clamp(3.1rem, 8.5vw, 5.6rem); letter-spacing: .01em; paint-order: stroke fill;\n  -webkit-text-stroke: 9px var(--navy-950); text-shadow: 0 5px 0 var(--navy-950), 0 9px 0 #c99a12, 0 18px 32px rgba(0, 0, 0, .45); }\n.logo span:nth-child(2) { color: var(--white); font-size: clamp(3.8rem, 10.6vw, 6.9rem); margin-top: .04em; text-shadow: 0 5px 0 var(--navy-950), 0 9px 0 var(--blue-500), 0 18px 32px rgba(0, 0, 0, .45); }\n.tagline { margin: 1.1rem auto 0; max-width: 28ch; color: var(--sky-200); font-size: 1.08rem; line-height: 1.4; }\n#menu-chick { width: min(250px, 44vw); margin: 4px auto -10px; }\n.panel {\n  background: linear-gradient(180deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .05)); border: 1px solid rgba(255, 255, 255, .14);\n  border-radius: var(--r-lg); padding: 20px; backdrop-filter: blur(10px); box-shadow: var(--shadow-2);\n}\n.field { display: block; margin-bottom: 14px; }\n.field > span { display: block; font-size: .85rem; color: var(--sky-300); margin-bottom: 6px; font-weight: 600; }\n.input {\n  width: 100%; background: rgba(4, 11, 36, .55); border: 2px solid rgba(159, 208, 255, .25); border-radius: var(--r-md); padding: .72em .95em; color: var(--white); font-size: 1rem;\n  transition: border-color .2s, box-shadow .2s;\n}\n.input:focus { outline: none; border-color: var(--yellow-400); box-shadow: 0 0 0 4px rgba(255, 224, 102, .18); }\n.input.code { text-transform: uppercase; letter-spacing: .3em; text-align: center; font-family: var(--font-display); font-weight: 800; }\n.avatars { display: flex; flex-wrap: wrap; gap: 6px; }\n.avatar-btn { width: 42px; height: 42px; border-radius: 50%; border: 2px solid transparent; background: rgba(255, 255, 255, .1); font-size: 1.35rem; padding: 0; transition: transform .15s var(--ease-spring), border-color .2s, background .2s; }\n.avatar-btn:hover { transform: scale(1.12); }\n.avatar-btn[aria-pressed=\"true\"] { border-color: var(--yellow-400); background: rgba(255, 224, 102, .22); transform: scale(1.08); }\n.menu-actions { display: grid; gap: 10px; margin-top: 4px; }\n.join-row { display: grid; grid-template-columns: 1fr auto; gap: 8px; }\n.menu-links { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-top: 14px; }\n.pub-list { margin-top: 12px; display: grid; gap: 6px; max-height: 120px; overflow: auto; }\n.pub-item { display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, .08); border-radius: var(--r-sm); padding: 7px 12px; font-size: .92rem; }\n.conn { position: fixed; top: 10px; right: 12px; z-index: 50; font-size: .8rem; padding: 5px 11px; border-radius: 99px; background: rgba(4, 11, 36, .7); border: 1px solid rgba(255, 255, 255, .15); display: flex; gap: 6px; align-items: center; }\n.conn i { width: 8px; height: 8px; border-radius: 50%; background: var(--bad); display: block; }\n.conn.ok i { background: var(--good); }\n.conn.wait i { background: var(--yellow-500); animation: pulse 1s infinite; }\n\n/* ═══ LOBBY ═══ */\n#screen-lobby { align-items: center; justify-content: center; padding: 18px; overflow: auto; }\n.lobby-wrap { width: min(1000px, 100%); display: grid; grid-template-columns: 1.4fr 1fr; gap: 18px; margin: auto; }\n.room-code { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }\n.room-code b { font-family: var(--font-display); font-size: 2.6rem; letter-spacing: .22em; color: var(--yellow-500); text-shadow: 0 3px 0 var(--navy-950); }\n.members { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; margin: 16px 0; }\n.member { background: rgba(255, 255, 255, .09); border-radius: var(--r-md); padding: 10px 12px; display: flex; align-items: center; gap: 10px; border: 1px solid rgba(255, 255, 255, .1); animation: popIn .35s var(--ease-spring); }\n.member .av { font-size: 1.7rem; }\n.member small { display: block; color: var(--sky-300); font-size: .75rem; }\n.member.off { opacity: .5; }\n.lobby-foot { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; justify-content: space-between; }\n.hint { color: var(--sky-300); font-size: .9rem; line-height: 1.4; }\n.switch { display: flex; align-items: center; gap: 8px; font-size: .92rem; }\n\n/* ═══ CHAT ═══ */\n.chat { display: flex; flex-direction: column; min-height: 0; height: 100%; }\n.chat-list { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; padding: 4px 2px; min-height: 120px; }\n.msg { background: rgba(255, 255, 255, .09); border-radius: 12px 12px 12px 3px; padding: 6px 10px; font-size: .9rem; word-break: break-word; animation: popIn .25s var(--ease-out); }\n.msg b { color: var(--yellow-400); font-weight: 700; margin-right: 6px; }\n.msg.me { background: rgba(47, 107, 255, .4); border-radius: 12px 12px 3px 12px; }\n.emoji-bar { display: flex; gap: 4px; flex-wrap: wrap; margin: 6px 0; }\n.emoji-bar button { background: rgba(255, 255, 255, .1); border: 0; border-radius: 9px; padding: 3px 7px; font-size: 1.15rem; transition: transform .12s var(--ease-spring); }\n.emoji-bar button:hover { transform: scale(1.25) rotate(-6deg); }\n.chat-form { display: flex; gap: 6px; }\n.chat-form .input { padding: .5em .8em; }\n\n/* ═══ PARTIDA ═══ */\n#screen-game { flex-direction: column; }\n#hud { display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: linear-gradient(180deg, rgba(4, 11, 36, .75), rgba(4, 11, 36, 0)); z-index: 20; min-height: 52px; }\n#hud .grow { flex: 1; min-width: 0; }\n.hud-chip { background: rgba(255, 255, 255, .1); border-radius: 99px; padding: 5px 12px; font-size: .85rem; font-weight: 600; white-space: nowrap; }\n.hud-chip b { color: var(--yellow-400); }\n#turn-label { font-family: var(--font-display); font-weight: 800; font-size: 1.05rem; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n#turn-label.mine { color: var(--yellow-500); text-shadow: 0 0 18px rgba(255, 210, 63, .6); }\n#game-body { flex: 1; min-height: 0; display: grid; grid-template-columns: 1fr; position: relative; }\n@media (min-width: 1100px) { #game-body { grid-template-columns: 1fr 290px; } #side-toggle { display: none; } #side { position: static !important; transform: none !important; } }\n#main { position: relative; display: flex; flex-direction: column; min-width: 0; min-height: 0; }\n#table { position: relative; flex: 1; min-height: 0; }\n#felt {\n  position: absolute; inset: 7% 6% 3% 6%; border-radius: 50%;\n  background: radial-gradient(ellipse at 50% 38%, #2b62f0 0%, #1b45c4 45%, #112b86 100%);\n  box-shadow: inset 0 0 0 5px rgba(255, 230, 128, .22), inset 0 0 70px rgba(4, 11, 36, .55), 0 24px 60px rgba(2, 8, 30, .55);\n}\n#felt::after { content: \"\"; position: absolute; inset: 14%; border-radius: 50%; border: 2px dashed rgba(255, 255, 255, .1); }\n#center { position: absolute; left: 50%; top: 48%; transform: translate(-50%, -50%); display: flex; align-items: center; gap: clamp(10px, 2.4vw, 26px); z-index: 4; }\n.pile { position: relative; width: calc(var(--cw-outer) * .72); aspect-ratio: 5/7; flex: none; }\n.pile .card { position: absolute; inset: 0; --cw: calc(var(--cw-outer) * .72); width: var(--cw); }\n.pile .card:nth-child(1) { transform: translate(-4px, 4px) rotate(-3deg); }\n.pile .card:nth-child(2) { transform: translate(-2px, 2px) rotate(1deg); }\n.pile-label { position: absolute; left: 50%; bottom: -22px; transform: translateX(-50%); font-size: .72rem; font-weight: 700; color: var(--sky-200); background: rgba(4, 11, 36, .6); padding: 1px 9px; border-radius: 9px; white-space: nowrap; }\n.pile.shuffle { animation: shuffle .6s ease; }\n#play-zone { min-width: calc(var(--cw-outer) * 1.05); height: calc(var(--cw-outer) * 1.4 * .86); position: relative; }\n#play-zone .card { position: absolute; left: 50%; top: 0; --cw: calc(var(--cw-outer) * .86); width: var(--cw); transition: transform .35s var(--ease-spring), opacity .3s; }\n.pz-tag { position: absolute; left: 50%; transform: translateX(-50%); bottom: -24px; font-size: .75rem; font-weight: 700; white-space: nowrap; background: rgba(4, 11, 36, .75); border-radius: 9px; padding: 2px 10px; z-index: 9; }\n#react-box { position: absolute; left: 50%; top: calc(100% + 34px); transform: translateX(-50%); width: max-content; max-width: 90vw; z-index: 12; text-align: center; }\n#react-box .ring { display: inline-flex; align-items: center; gap: 12px; background: rgba(4, 11, 36, .88); border: 2px solid var(--yellow-400); padding: 8px 12px 8px 16px; border-radius: 99px; box-shadow: 0 0 0 0 rgba(255, 210, 63, .5); animation: ping 1.4s infinite; }\n#react-box .cd { font-family: var(--font-display); font-weight: 900; font-size: 1.25rem; color: var(--yellow-500); min-width: 1.4em; }\n#mods { position: absolute; left: 50%; top: 2.5%; transform: translateX(-50%); display: flex; gap: 6px; z-index: 6; flex-wrap: wrap; justify-content: center; }\n.mod { background: rgba(255, 243, 176, .94); color: var(--ink); font-weight: 800; font-size: .78rem; padding: 3px 11px; border-radius: 99px; animation: popIn .4s var(--ease-spring); box-shadow: var(--shadow-1); }\n#dir { position: absolute; left: 50%; top: 24%; transform: translateX(-50%); font-size: 1.4rem; opacity: .5; transition: transform .6s var(--ease-spring); z-index: 2; }\n\n/* Asientos */\n.seat { position: absolute; transform: translate(-50%, -50%); width: var(--seatw, 96px); text-align: center; z-index: 5; transition: filter .3s, transform .25s var(--ease-spring); }\n.seat .av { width: clamp(36px, calc(var(--seatw, 96px) * .5), 58px); aspect-ratio: 1; margin: 0 auto; border-radius: 50%; background: linear-gradient(180deg, var(--off), var(--sky-200)); display: grid; place-items: center; font-size: clamp(1.1rem, calc(var(--seatw, 96px) * .26), 1.95rem);\n  box-shadow: 0 4px 12px rgba(2, 8, 30, .45), 0 0 0 3px var(--navy-800); position: relative; transition: box-shadow .3s; }\n.seat.turn .av { box-shadow: 0 0 0 4px var(--yellow-500), 0 0 28px 6px rgba(255, 210, 63, .55); animation: turnGlow 1.4s infinite; }\n.seat .nm { margin-top: 4px; font-weight: 700; font-size: .78rem; background: rgba(4, 11, 36, .72); border-radius: 9px; padding: 1px 7px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.nest { display: flex; gap: 2px; justify-content: center; margin-top: 3px; }\n.nest i { width: 9px; height: 12px; border-radius: 50% 50% 48% 48% / 60% 60% 40% 40%; background: rgba(255, 255, 255, .16); box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .2); transition: background .3s, transform .4s var(--ease-spring); }\n.nest i.on { background: linear-gradient(180deg, #fff6c2, var(--yellow-500)); transform: scale(1.12); box-shadow: 0 0 6px rgba(255, 210, 63, .7); }\n.hc { position: absolute; right: -6px; bottom: -4px; background: var(--navy-950); border: 2px solid var(--sky-300); border-radius: 8px; font-size: .68rem; font-weight: 800; padding: 0 5px; line-height: 1.35; }\n.st { margin-top: 2px; font-size: .8rem; min-height: 1.1em; letter-spacing: 1px; }\n.seat.pickable { cursor: pointer; animation: pickGlow .9s infinite alternate ease-in-out; }\n.seat.pickable .av { box-shadow: 0 0 0 4px var(--yellow-500); }\n.seat.away { opacity: .45; }\n.seat.gone { opacity: .25; filter: grayscale(1); }\n.seat.hit { animation: shake .45s; }\n.me-chip.hit { animation: shakeMe .45s; }\n.pop { position: fixed; z-index: 90; pointer-events: none; font-family: var(--font-display); font-weight: 900; font-size: 1.35rem; color: var(--yellow-400); text-shadow: 0 2px 0 var(--navy-950), 0 0 12px rgba(0, 0, 0, .5); white-space: nowrap; transform: translate(-50%, -50%); }\n.pop.neg { color: var(--bad); }\n\n/* Zona inferior */\n#bottom { position: relative; height: var(--hand-h); flex: none; z-index: 8; }\n#me-bar { position: absolute; left: 10px; bottom: calc(100% - 8px); display: flex; gap: 8px; align-items: flex-end; z-index: 9; pointer-events: none; }\n#me-bar > * { pointer-events: auto; }\n.me-chip { display: flex; gap: 8px; align-items: center; background: rgba(4, 11, 36, .82); border: 2px solid rgba(255, 255, 255, .16); border-radius: 99px; padding: 4px 12px 4px 5px; font-weight: 700; font-size: .85rem; transition: box-shadow .3s, border-color .3s; }\n.me-chip.turn { border-color: var(--yellow-500); box-shadow: 0 0 22px rgba(255, 210, 63, .45); }\n.me-chip .av { width: 34px; height: 34px; border-radius: 50%; background: var(--off); display: grid; place-items: center; font-size: 1.2rem; }\n.me-chip .nest i { width: 10px; height: 13px; }\n#acts { display: flex; gap: 3px; align-items: center; background: rgba(4, 11, 36, .82); border-radius: 99px; padding: 4px 10px; font-size: .82rem; font-weight: 700; }\n#acts i { width: 14px; height: 14px; background: var(--yellow-500); clip-path: polygon(55% 0, 12% 56%, 45% 56%, 38% 100%, 88% 40%, 54% 40%); }\n#acts i.off { background: rgba(255, 255, 255, .22); }\n#hand { position: absolute; left: 0; right: 0; bottom: 0; top: 0; display: flex; justify-content: center; align-items: flex-end; padding: 0 8px calc(12px + env(safe-area-inset-bottom, 0px)); overflow: visible; }\n#end-turn { position: absolute; right: 12px; bottom: calc(100% - 4px); z-index: 10; }\n#end-turn.nudge { animation: nudge 1s infinite; }\n\n/* Vista previa / acción */\n#preview { position: absolute; left: 50%; bottom: calc(var(--hand-h) + 62px); transform: translateX(-50%); width: min(600px, 96vw); z-index: 30; display: grid; grid-template-columns: auto 1fr; gap: 14px; padding: 12px 14px;\n  background: rgba(7, 18, 54, .94); border: 2px solid rgba(255, 255, 255, .18); border-radius: var(--r-lg); box-shadow: var(--shadow-2); animation: sheetUp .3s var(--ease-spring); }\n#preview .card { --cw: 128px; }\n#preview h3 { margin: 0 0 4px; font-family: var(--font-display); font-size: 1.25rem; }\n#preview p { margin: 0 0 8px; color: var(--sky-200); font-size: .92rem; line-height: 1.38; }\n#preview .why { color: var(--yellow-400); font-weight: 700; font-size: .88rem; margin-bottom: 8px; }\n#preview .row { display: flex; gap: 8px; flex-wrap: wrap; }\n\n/* ═══ CARTAS ═══ */\n.card { --cc: #ffc933; width: var(--cw); aspect-ratio: 5/7; font-size: calc(var(--cw) / 10.5); position: relative; flex: none; user-select: none; -webkit-user-select: none; }\n.card .face { position: absolute; inset: 0; border-radius: .95em; backface-visibility: hidden; overflow: hidden; box-shadow: 0 .35em 1em rgba(2, 8, 30, .45); }\n.card .front { background: var(--off); border: .2em solid var(--cc); display: flex; flex-direction: column; }\n.card .back { background: radial-gradient(circle at 50% 40%, #3b74ff, #17389e 70%); border: .2em solid var(--off); display: grid; place-items: center; }\n.card .back::before { content: \"\"; position: absolute; inset: .5em; border-radius: .6em; border: .12em dashed rgba(255, 255, 255, .35); }\n.card .back span { font-size: 3.2em; filter: drop-shadow(0 .1em .15em rgba(0, 0, 0, .3)); }\n.card:not(.flipped) .back { display: none; }\n.card.flipped .front { display: none; }\n.c-top { background: var(--cc); color: var(--ink); font-family: var(--font-display); font-weight: 900; font-size: .78em; padding: .3em .6em; display: flex; justify-content: space-between; letter-spacing: .02em; }\n.c-art { flex: 1; display: grid; place-items: center; font-size: 3.5em; background: radial-gradient(circle at 50% 55%, #fff 0%, var(--off) 45%, color-mix(in srgb, var(--cc) 30%, #fff) 100%); position: relative; filter: saturate(1.1); }\n.c-art .ic { filter: drop-shadow(0 .06em .06em rgba(10, 22, 64, .35)); display: block; }\n.c-name { font-family: var(--font-display); font-weight: 900; font-size: 1.12em; line-height: 1.05; color: var(--ink); padding: .35em .45em .1em; text-align: center; min-height: 2.35em; display: grid; place-items: center; }\n.c-desc { font-size: .8em; line-height: 1.25; color: var(--ink-soft); padding: 0 .6em .6em; text-align: center; }\n.card.mini .c-desc { display: none; }\n.card.mini .c-name { padding-bottom: .55em; }\n.card.cat-sabotaje { --cc: #ff6b3d; } .card.cat-defensa { --cc: #2f6bff; } .card.cat-manipulacion { --cc: #5ec3ff; } .card.cat-estrategia { --cc: #ffc933; }\n.card.cat-defensa .c-top { color: var(--white); }\n.card.cat-especial { --cc: #f4f1ff; }\n.card.cat-especial .front { background: linear-gradient(135deg, #fff 0%, #fff3b0 50%, #fff 100%); border-color: transparent; background-clip: padding-box; box-shadow: 0 0 0 .2em transparent; }\n.card.cat-especial .face { box-shadow: 0 0 0 .2em #ffd23f, 0 .35em 1.2em rgba(255, 210, 63, .5); }\n.card.cat-especial .c-top { background: linear-gradient(90deg, #ffd23f, #ff9bd0, #7fd3ff, #ffd23f); background-size: 200% 100%; animation: foil 3s linear infinite; }\n.card.cat-especial .front::after { content: \"\"; position: absolute; inset: 0; background: linear-gradient(115deg, transparent 30%, rgba(255, 255, 255, .8) 48%, transparent 66%); background-size: 250% 100%; animation: shine 3.2s infinite; pointer-events: none; mix-blend-mode: overlay; }\n\n/* Cartas en la mano */\n#hand .card { margin-left: calc(var(--ov, 0px) * -1); transform-origin: 50% 130%; transform: translateY(var(--lift, 0px)) rotate(var(--rot, 0deg)); transition: transform .28s var(--ease-spring), filter .2s, margin .25s; cursor: pointer; }\n#hand .card:first-child { margin-left: 0; }\n#hand .card.dim { filter: saturate(.55) brightness(.78); }\n#hand .card.playable .front { box-shadow: 0 .35em 1em rgba(2, 8, 30, .45), 0 0 0 .2em rgba(255, 224, 102, .0); }\n#hand .card.playable.react-ok .front { animation: reactGlow .8s infinite alternate ease-in-out; }\n#hand .card:hover, #hand .card:focus-visible { transform: translateY(-34px) rotate(0) scale(1.14); z-index: 50 !important; filter: none; }\n#hand .card.sel { transform: translateY(-48px) rotate(0) scale(1.16); z-index: 60 !important; filter: none; }\n#hand .card.sel .front { box-shadow: 0 0 0 .22em var(--yellow-400), 0 .8em 1.6em rgba(2, 8, 30, .6), 0 0 2.2em rgba(255, 224, 102, .6); }\n#hand .card.deal-in { animation: dealIn .55s var(--ease-spring) backwards; }\n.fly { position: fixed; z-index: 80; pointer-events: none; margin: 0; will-change: transform; }\n.fly .card { width: 100%; }\n.fx { position: fixed; z-index: 85; pointer-events: none; will-change: transform, opacity; }\n.fx.p { width: 9px; height: 9px; border-radius: 50%; }\n.fx.ring { border-radius: 50%; border: 5px solid var(--sky-300); }\n.flash { position: fixed; inset: 0; z-index: 70; pointer-events: none; background: radial-gradient(circle, rgba(255, 255, 255, .85), rgba(255, 224, 102, .3) 60%, transparent 80%); animation: flash .55s ease-out forwards; }\n\n/* Banner de eventos */\n#banner { position: absolute; left: 0; right: 0; top: 36%; z-index: 40; display: flex; justify-content: center; pointer-events: none; }\n.bn { font-family: var(--font-display); font-weight: 900; font-size: clamp(1.5rem, 4.4vw, 2.7rem); padding: .3em 1em; border-radius: 18px; color: var(--ink); background: var(--yellow-500); box-shadow: 0 8px 0 #c99a12, var(--shadow-2); text-align: center; transform: rotate(-2deg); animation: banner 2s var(--ease-spring) forwards; max-width: 94vw; }\n.bn small { display: block; font-size: .42em; font-weight: 700; color: var(--navy-800); margin-top: .2em; }\n.bn.blue { background: var(--blue-500); color: var(--white); box-shadow: 0 8px 0 #1a3fae, var(--shadow-2); }\n.bn.coral { background: var(--coral); box-shadow: 0 8px 0 #b73c14, var(--shadow-2); }\n\n/* Lateral (chat + registro) */\n#side { display: flex; flex-direction: column; background: rgba(4, 11, 36, .78); border-left: 1px solid rgba(255, 255, 255, .1); padding: 10px; min-height: 0; z-index: 35; }\n@media (max-width: 1099px) { #side { position: absolute; right: 0; top: 0; bottom: 0; width: min(340px, 92vw); transform: translateX(105%); transition: transform .3s var(--ease-out); box-shadow: var(--shadow-2); background: rgba(4, 11, 36, .96); } #side.open { transform: none; } }\n.tabs { display: flex; gap: 6px; margin-bottom: 8px; }\n.tab { flex: 1; background: rgba(255, 255, 255, .08); border: 0; border-radius: 9px; padding: 6px; font-weight: 700; font-size: .85rem; }\n.tab[aria-selected=\"true\"] { background: var(--yellow-500); color: var(--ink); }\n.tab .dot { display: inline-block; min-width: 1.3em; background: var(--bad); color: #fff; border-radius: 99px; font-size: .72rem; margin-left: 4px; padding: 0 4px; }\n#log { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 4px; font-size: .84rem; color: var(--sky-200); }\n#log div { padding: 3px 8px; border-left: 3px solid var(--blue-500); background: rgba(255, 255, 255, .05); border-radius: 0 7px 7px 0; }\n\n/* ═══ MODALES ═══ */\n.overlay { position: fixed; inset: 0; z-index: 100; background: rgba(4, 11, 36, .78); display: grid; place-items: center; padding: 16px; backdrop-filter: blur(5px); animation: fade .25s; overflow: auto; }\n.modal { width: min(640px, 100%); max-height: 92vh; overflow: auto; background: linear-gradient(180deg, #14308c, #0b1b4a); border: 2px solid rgba(255, 255, 255, .18); border-radius: 26px; padding: 22px; box-shadow: var(--shadow-2); animation: popIn .4s var(--ease-spring); }\n.modal h2 { font-family: var(--font-display); margin: 0 0 12px; font-size: 1.7rem; color: var(--yellow-500); }\n.modal h3 { font-family: var(--font-display); margin: 18px 0 6px; color: var(--sky-200); }\n.modal p, .modal li { line-height: 1.5; color: var(--off); }\n.modal .foot { display: flex; gap: 10px; justify-content: flex-end; margin-top: 16px; flex-wrap: wrap; }\n.range { width: 100%; accent-color: var(--yellow-500); }\n.rules-cats { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px; }\n.rule-cat { background: rgba(255, 255, 255, .08); border-radius: 12px; padding: 8px 10px; border-left: 6px solid var(--cc); font-size: .9rem; }\n.rule-cat b { display: block; margin-bottom: 2px; }\n.cardlist { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin: 10px 0; }\n.cardlist .card { --cw: 110px; }\n.peek { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }\n.peek .card { --cw: 96px; }\n.standings { display: grid; gap: 6px; margin: 12px 0; }\n.stand { display: flex; align-items: center; gap: 10px; background: rgba(255, 255, 255, .09); border-radius: 12px; padding: 7px 12px; }\n.stand.win { background: rgba(255, 210, 63, .25); box-shadow: inset 0 0 0 2px var(--yellow-500); }\n.stand .eg { margin-left: auto; font-weight: 800; color: var(--yellow-400); }\n#end-chick { width: 150px; margin: 0 auto; display: block; }\n.confetti { position: fixed; top: -20px; z-index: 105; width: 10px; height: 16px; pointer-events: none; animation: fall linear forwards; }\n\n/* Intro */\n#intro { position: absolute; left: 50%; bottom: calc(var(--hand-h) + 12px); transform: translateX(-50%); z-index: 45; width: min(520px, 94vw); text-align: center; }\n#intro .panel { background: rgba(7, 18, 54, .96); border: 2px solid var(--yellow-500); }\n#intro .btns { display: grid; gap: 8px; margin-top: 12px; }\n#intro h3 { margin: 0; font-family: var(--font-display); font-size: 1.3rem; }\n\n/* ═══ MASCOTA ═══ */\n#mascot { position: absolute; left: 8px; top: 8px; z-index: 25; width: clamp(74px, 9vw, 108px); pointer-events: none; }\n#mascot .bubble { position: absolute; left: 82%; top: 14%; width: max-content; max-width: min(240px, 58vw); background: var(--white); color: var(--ink); font-weight: 700; font-size: .9rem; line-height: 1.3; padding: 8px 13px; border-radius: 3px 16px 16px 16px; box-shadow: var(--shadow-1); transform-origin: 0 0; animation: bubble .35s var(--ease-spring); }\n#mascot .bubble.out { animation: bubbleOut .25s forwards; }\n.chick { width: 100%; height: auto; overflow: visible; display: block; }\n.chick * { transform-box: fill-box; }\n.chick .on-eyes-open, .chick .on-eyes-happy, .chick .on-eyes-wide, .chick .on-eyes-sad, .chick .on-eyes-confused, .chick .on-beak-open, .chick .on-brows-angry, .chick .on-brows-sad, .chick .on-tear, .chick .on-sweat, .chick .on-sparks, .chick .on-qmark, .chick .on-bang, .chick .on-crown, .chick .on-conf, .chick .on-lol { display: none; }\n.chick.e-idle .on-eyes-open, .chick.e-explaining .on-eyes-open { display: inline; }\n.chick.e-excited .on-eyes-wide, .chick.e-excited .on-sparks, .chick.e-excited .on-beak-open { display: inline; }\n.chick.e-surprised .on-eyes-wide, .chick.e-surprised .on-beak-open, .chick.e-surprised .on-sweat { display: inline; }\n.chick.e-confused .on-eyes-confused, .chick.e-confused .on-qmark { display: inline; }\n.chick.e-sad .on-eyes-sad, .chick.e-sad .on-brows-sad, .chick.e-sad .on-tear { display: inline; }\n.chick.e-celebrate .on-eyes-happy, .chick.e-celebrate .on-beak-open, .chick.e-celebrate .on-conf, .chick.e-celebrate .on-sparks { display: inline; }\n.chick.e-warning .on-eyes-open, .chick.e-warning .on-brows-angry, .chick.e-warning .on-bang { display: inline; }\n.chick.e-laughing .on-eyes-happy, .chick.e-laughing .on-beak-open, .chick.e-laughing .on-lol { display: inline; }\n.chick.e-victory .on-eyes-happy, .chick.e-victory .on-beak-open, .chick.e-victory .on-crown, .chick.e-victory .on-conf, .chick.e-victory .on-sparks { display: inline; }\n.chick.e-explaining .on-beak-open { display: inline; animation: talk .32s infinite alternate; }\n.chick .blink { transform-origin: 50% 50%; animation: blink 4.2s infinite; }\n.chick .body-g { transform-origin: 50% 100%; }\n.chick.e-idle .body-g { animation: bob 2.6s ease-in-out infinite; }\n.chick.e-excited .body-g { animation: hop .5s ease-in-out infinite; }\n.chick.e-excited .wing-l, .chick.e-excited .wing-r, .chick.e-celebrate .wing-l, .chick.e-celebrate .wing-r, .chick.e-victory .wing-l, .chick.e-victory .wing-r { animation: flap .22s ease-in-out infinite alternate; }\n.chick .wing-l { transform-origin: 90% 20%; } .chick .wing-r { transform-origin: 10% 20%; }\n.chick.e-surprised .body-g { animation: jolt .55s var(--ease-spring) 1; }\n.chick.e-confused .body-g { animation: tilt 1.6s ease-in-out infinite; }\n.chick.e-sad .body-g { animation: sag 3s ease-in-out infinite; transform: scaleY(.94); }\n.chick.e-celebrate .body-g { animation: jump .62s ease-in-out infinite; }\n.chick.e-warning .body-g { animation: warnShake .16s linear infinite; }\n.chick.e-warning .wing-l { transform: rotate(-35deg); } .chick.e-warning .wing-r { transform: rotate(35deg); }\n.chick.e-laughing .body-g { animation: laugh .14s linear infinite; }\n.chick.e-explaining .body-g { animation: bob 2s ease-in-out infinite; }\n.chick.e-explaining .wing-r { animation: point 1.3s ease-in-out infinite; }\n.chick.e-victory .body-g { animation: spinJump 1.1s ease-in-out infinite; }\n.chick .on-sparks path { animation: twinkle .7s infinite alternate; transform-origin: center; }\n\n/* ═══ TUTORIAL ═══ */\n#spot { position: fixed; z-index: 120; pointer-events: none; border-radius: 18px; box-shadow: 0 0 0 9999px rgba(4, 11, 36, .78), 0 0 0 4px var(--yellow-400), 0 0 34px 6px rgba(255, 224, 102, .5); transition: all .45s var(--ease-out); }\n#tut { position: fixed; z-index: 125; left: 50%; bottom: 14px; transform: translateX(-50%); width: min(560px, 96vw); display: grid; grid-template-columns: 78px 1fr; gap: 12px; align-items: end; }\n#tut.top { bottom: auto; top: 62px; }\n#tut .tut-chick { width: 78px; }\n#tut .tut-card { background: var(--white); color: var(--ink); border-radius: 20px 20px 20px 4px; padding: 14px 16px; box-shadow: var(--shadow-2); animation: popIn .35s var(--ease-spring); }\n#tut h4 { margin: 0 0 4px; font-family: var(--font-display); font-size: 1.1rem; color: var(--navy-700); }\n#tut p { margin: 0 0 10px; line-height: 1.42; font-size: .95rem; }\n#tut .cardlist { margin: 6px 0 10px; } #tut .cardlist .card { --cw: 72px; }\n#tut .tut-foot { display: flex; gap: 8px; align-items: center; justify-content: space-between; }\n#tut .dots { display: flex; gap: 5px; }\n#tut .dots i { width: 8px; height: 8px; border-radius: 50%; background: #c9d4f5; }\n#tut .dots i.on { background: var(--blue-500); transform: scale(1.3); }\n#tut .btn { color: var(--ink); background: #e5ecff; box-shadow: none; } #tut .btn.primary { background: var(--yellow-500); }\n\n/* Toasts */\n#toasts { position: fixed; top: 64px; left: 50%; transform: translateX(-50%); z-index: 200; display: grid; gap: 8px; justify-items: center; pointer-events: none; width: min(92vw, 460px); }\n.toast { background: var(--white); color: var(--ink); font-weight: 700; padding: 10px 16px; border-radius: 14px; box-shadow: var(--shadow-2); animation: toast 3.4s var(--ease-spring) forwards; text-align: center; }\n.toast.bad { background: #ffe3e8; color: #7a0f23; }\n\n/* ═══ ANIMACIONES ═══ */\n@keyframes pulse { 50% { opacity: .35; } }\n@keyframes popIn { from { transform: scale(.8); opacity: 0; } }\n@keyframes fade { from { opacity: 0; } }\n@keyframes sheetUp { from { transform: translate(-50%, 24px); opacity: 0; } }\n@keyframes dealIn { from { transform: translateY(-260px) scale(.4) rotate(-20deg); opacity: 0; } }\n@keyframes turnGlow { 50% { box-shadow: 0 0 0 4px var(--yellow-500), 0 0 38px 12px rgba(255, 210, 63, .7); } }\n@keyframes pickGlow { from { filter: drop-shadow(0 0 5px rgba(255, 210, 63, .55)); } to { filter: drop-shadow(0 0 20px rgba(255, 210, 63, 1)); } }\n@keyframes shake { 20%, 60% { transform: translate(calc(-50% - 7px), -50%); } 40%, 80% { transform: translate(calc(-50% + 7px), -50%); } }\n@keyframes shakeMe { 20%, 60% { transform: translateX(-7px); } 40%, 80% { transform: translateX(7px); } }\n@keyframes shuffle { 25% { transform: translateX(-9px) rotate(-5deg); } 50% { transform: translateX(9px) rotate(5deg); } 75% { transform: translateX(-5px); } }\n@keyframes ping { 70% { box-shadow: 0 0 0 16px rgba(255, 210, 63, 0); } }\n@keyframes reactGlow { from { box-shadow: 0 .35em 1em rgba(2, 8, 30, .45), 0 0 0 .16em rgba(255, 224, 102, .55), 0 0 .6em rgba(255, 224, 102, .3); } to { box-shadow: 0 .35em 1em rgba(2, 8, 30, .45), 0 0 0 .26em rgba(255, 224, 102, 1), 0 0 1.6em rgba(255, 224, 102, .9); } }\n@keyframes nudge { 50% { transform: translateY(-5px) scale(1.04); } }\n@keyframes banner { 0% { transform: scale(.2) rotate(-12deg); opacity: 0; } 18% { transform: scale(1.12) rotate(-2deg); opacity: 1; } 28% { transform: scale(1) rotate(-2deg); } 82% { opacity: 1; } 100% { transform: scale(.96) translateY(-26px) rotate(-2deg); opacity: 0; } }\n@keyframes foil { to { background-position: 200% 0; } }\n@keyframes shine { from { background-position: 200% 0; } to { background-position: -100% 0; } }\n@keyframes flash { from { opacity: 1; } to { opacity: 0; } }\n@keyframes toast { 0% { transform: translateY(-24px) scale(.9); opacity: 0; } 10% { transform: none; opacity: 1; } 85% { opacity: 1; } 100% { opacity: 0; transform: translateY(-10px); } }\n@keyframes fall { to { transform: translate(var(--dx), 108vh) rotate(var(--rot)); } }\n@keyframes bubble { from { transform: scale(.4); opacity: 0; } }\n@keyframes bubbleOut { to { transform: scale(.6) translateY(8px); opacity: 0; } }\n@keyframes blink { 0%, 93%, 100% { transform: scaleY(1); } 96% { transform: scaleY(.08); } }\n@keyframes bob { 50% { transform: translateY(-4px) scale(1.015, .99); } }\n@keyframes hop { 50% { transform: translateY(-14px) scale(.98, 1.04); } }\n@keyframes flap { from { transform: rotate(-24deg); } to { transform: rotate(18deg); } }\n@keyframes jolt { 0% { transform: translateY(0) scale(1); } 30% { transform: translateY(-22px) scale(.92, 1.1); } 60% { transform: translateY(0) scale(1.08, .92); } 100% { transform: none; } }\n@keyframes tilt { 0%, 100% { transform: rotate(-7deg); } 50% { transform: rotate(7deg); } }\n@keyframes sag { 50% { transform: translateY(3px) scaleY(.92); } }\n@keyframes jump { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-26px) rotate(4deg); } }\n@keyframes warnShake { 0% { transform: translateX(-3px); } 50% { transform: translateX(3px); } 100% { transform: translateX(-3px); } }\n@keyframes laugh { 0% { transform: rotate(-3deg) translateY(0); } 50% { transform: rotate(3deg) translateY(-3px); } 100% { transform: rotate(-3deg); } }\n@keyframes talk { to { transform: scaleY(.55); } }\n@keyframes point { 0%, 100% { transform: rotate(0); } 40% { transform: rotate(-52deg); } }\n@keyframes spinJump { 0% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-28px) rotate(180deg); } 100% { transform: translateY(0) rotate(360deg); } }\n@keyframes twinkle { to { transform: scale(1.5) rotate(25deg); opacity: .4; } }\n\n/* ═══ RESPONSIVE ═══ */\n@media (max-width: 860px) {\n  .menu-wrap { grid-template-columns: 1fr; gap: 14px; } #menu-chick { width: 120px; margin-bottom: -6px; }\n  .tagline { display: none; } .lobby-wrap { grid-template-columns: 1fr; }\n}\n@media (max-width: 700px) {\n  :root { --cw: 82px; --hand-h: 146px; }\n  #hud { padding: 6px 8px; gap: 6px; } .hud-chip { padding: 4px 9px; font-size: .75rem; }\n  #felt { inset: 5% 1% 2% 1%; }\n  #preview { grid-template-columns: auto 1fr; gap: 10px; padding: 10px; } #preview .card { --cw: 96px; } #preview h3 { font-size: 1.05rem; } #preview p { font-size: .82rem; }\n  #hand .card:hover { transform: translateY(-14px) rotate(var(--rot, 0)) scale(1.06); }\n  #mascot { width: 62px; top: auto; bottom: calc(var(--hand-h) + 54px); } #mascot .bubble { font-size: .78rem; max-width: 190px; top: auto; bottom: 78%; left: 70%; border-radius: 16px 16px 16px 3px; transform-origin: 0 100%; }\n  #acts span { display: none; } #end-turn { font-size: .88rem; padding: .62em 1.05em; right: 8px; }\n  .me-chip { padding-right: 9px; }\n  .nest i { width: 7px; height: 10px; } .seat .nm { font-size: .68rem; max-width: 74px; }\n  #me-bar { left: 4px; } .me-chip { font-size: .75rem; } #tut { grid-template-columns: 56px 1fr; } #tut .tut-chick { width: 56px; }\n}\n@media (max-height: 520px) { :root { --cw: 74px; --hand-h: 120px; } #mascot { display: none; } }\n@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .001s !important; animation-iteration-count: 1 !important; transition-duration: .001s !important; } }\nhtml[data-rm=\"1\"] *, html[data-rm=\"1\"] *::before, html[data-rm=\"1\"] *::after { animation-duration: .001s !important; animation-iteration-count: 1 !important; transition-duration: .001s !important; }\nhtml[data-rm=\"1\"] .card.cat-especial .c-top { animation: none !important; }\n\n/* El indicador de conexión no debe tapar la barra de la partida */\nbody[data-screen=\"game\"] .conn { top: 60px; right: 10px; }\nbody[data-screen=\"game\"] .conn.ok { display: none; }\n\n/* Detalles de mesa */\n#table.narrow #dir { display: none; }\n#discard:not(:has(.card)) { border: 2px dashed rgba(255, 255, 255, .28); border-radius: 12px; }\n\n#spot.none { box-shadow: 0 0 0 9999px rgba(4, 11, 36, .78); }\n","/index.html":"<!doctype html>\n<html lang=\"es-ES\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n  <title>Corre que te pío — juego de cartas online</title>\n  <meta name=\"description\" content=\"Corre que te pío: el juego de cartas online de huevos, sabotajes y reacciones para 2 a 10 jugadores.\">\n  <meta name=\"theme-color\" content=\"#0b1b4a\">\n  <link rel=\"icon\" href=\"/assets/icons/favicon.svg\" type=\"image/svg+xml\">\n  <link rel=\"stylesheet\" href=\"/css/style.css\">\n</head>\n<body>\n<div id=\"app\">\n\n  <!-- ═══ MENÚ ═══ -->\n  <section class=\"screen active\" id=\"screen-menu\" aria-label=\"Menú principal\">\n    <div class=\"menu-wrap\">\n      <div class=\"hero\">\n        <h1 class=\"logo\" aria-label=\"Corre que te pío\"><span>CORRE QUE</span><span>TE PÍO</span></h1>\n        <div id=\"menu-chick\"></div>\n        <p class=\"tagline\">Pon huevos, róbaselos a los demás y que no te pillen.</p>\n      </div>\n      <div class=\"panel\">\n        <label class=\"field\"><span>Tu nombre</span><input class=\"input\" id=\"in-name\" maxlength=\"16\" autocomplete=\"nickname\" placeholder=\"Pollito\"></label>\n        <div class=\"field\"><span>Tu avatar</span><div class=\"avatars\" id=\"avatars\" role=\"group\" aria-label=\"Elige avatar\"></div></div>\n        <div class=\"menu-actions\">\n          <button class=\"btn primary\" id=\"btn-quick\">Partida rápida</button>\n          <button class=\"btn blue\" id=\"btn-create\">Crear sala privada</button>\n          <div class=\"join-row\">\n            <input class=\"input code\" id=\"in-code\" maxlength=\"5\" placeholder=\"CÓDIGO\" aria-label=\"Código de sala\" autocapitalize=\"characters\" autocomplete=\"off\">\n            <button class=\"btn\" id=\"btn-join\">Unirme</button>\n          </div>\n        </div>\n        <div class=\"pub-list\" id=\"pub-list\"></div>\n        <div class=\"menu-links\">\n          <button class=\"btn small\" id=\"btn-rules\">Cómo se juega</button>\n          <button class=\"btn small\" id=\"btn-tutorial\">Ver tutorial</button>\n          <button class=\"btn small\" id=\"btn-settings\">Ajustes</button>\n          <button class=\"btn small\" id=\"btn-cards\">Las cartas</button>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ═══ LOBBY ═══ -->\n  <section class=\"screen\" id=\"screen-lobby\" aria-label=\"Sala de espera\">\n    <div class=\"lobby-wrap\">\n      <div class=\"panel\">\n        <div class=\"room-code\"><div><div class=\"hint\">Código de la sala</div><b id=\"lb-code\">·····</b></div>\n          <div style=\"display:grid;gap:6px\"><button class=\"btn small\" id=\"btn-copy-link\">Copiar enlace</button><button class=\"btn small\" id=\"btn-copy-code\">Copiar código</button></div></div>\n        <div class=\"members\" id=\"lb-members\"></div>\n        <p class=\"hint\" id=\"lb-info\"></p>\n        <label class=\"switch hidden\" id=\"lb-public-row\"><input type=\"checkbox\" id=\"lb-public\"> Sala pública (aparece en «Partida rápida»)</label>\n        <div class=\"lobby-foot\" style=\"margin-top:14px\">\n          <button class=\"btn\" id=\"btn-lb-leave\">Salir</button>\n          <button class=\"btn primary\" id=\"btn-start\">Empezar partida</button>\n        </div>\n      </div>\n      <div class=\"panel chat\" id=\"lb-chat-panel\">\n        <h3 style=\"margin:0 0 8px;font-family:var(--font-display)\">Chat</h3>\n        <div class=\"chat-list\" id=\"lb-chat\"></div>\n        <div class=\"emoji-bar\" id=\"lb-emojis\"></div>\n        <form class=\"chat-form\" id=\"lb-chat-form\"><input class=\"input\" maxlength=\"160\" placeholder=\"Escribe un mensaje…\" aria-label=\"Mensaje\" autocomplete=\"off\"><button class=\"btn small primary\">Enviar</button></form>\n      </div>\n    </div>\n  </section>\n\n  <!-- ═══ PARTIDA ═══ -->\n  <section class=\"screen\" id=\"screen-game\" aria-label=\"Partida\">\n    <header id=\"hud\">\n      <button class=\"btn icon\" id=\"btn-menu\" title=\"Salir de la partida\" aria-label=\"Salir de la partida\">⬅</button>\n      <div class=\"grow\"><div id=\"turn-label\">—</div></div>\n      <span class=\"hud-chip\" id=\"goal-chip\">Meta <b>5</b> 🥚</span>\n      <span class=\"hud-chip\" id=\"room-chip\">Sala <b></b></span>\n      <button class=\"btn icon\" id=\"btn-hud-rules\" title=\"Reglas\" aria-label=\"Reglas\">📖</button>\n      <button class=\"btn icon\" id=\"btn-hud-settings\" title=\"Ajustes\" aria-label=\"Ajustes\">⚙️</button>\n      <button class=\"btn icon\" id=\"side-toggle\" title=\"Chat y registro\" aria-label=\"Chat y registro\">💬<span class=\"dot hidden\" id=\"chat-dot\"></span></button>\n    </header>\n    <div id=\"game-body\">\n      <div id=\"main\">\n        <div id=\"table\">\n          <div id=\"felt\"></div>\n          <div id=\"mods\"></div><div id=\"dir\">↻</div>\n          <div id=\"seats\"></div>\n          <div id=\"center\">\n            <div class=\"pile\" id=\"deck\"><div class=\"card flipped\"><div class=\"face back\"><span>🥚</span></div></div><div class=\"card flipped\"><div class=\"face back\"><span>🥚</span></div></div><div class=\"card flipped\"><div class=\"face back\"><span>🥚</span></div></div><div class=\"pile-label\" id=\"deck-label\">Mazo</div></div>\n            <div id=\"play-zone\"></div>\n            <div class=\"pile\" id=\"discard\"><div class=\"pile-label\" id=\"discard-label\">Descarte</div></div>\n            <div id=\"react-box\" class=\"hidden\"></div>\n          </div>\n          <div id=\"banner\"></div>\n        </div>\n        <div id=\"bottom\">\n          <div id=\"me-bar\"></div>\n          <button class=\"btn primary\" id=\"end-turn\">Terminar turno</button>\n          <div id=\"hand\" role=\"list\" aria-label=\"Tu mano\"></div>\n        </div>\n        <div id=\"preview\" class=\"hidden\"></div>\n        <div id=\"intro\" class=\"hidden\"></div>\n        <div id=\"mascot\"></div>\n      </div>\n      <aside id=\"side\">\n        <div class=\"tabs\" role=\"tablist\"><button class=\"tab\" role=\"tab\" aria-selected=\"true\" data-tab=\"chat\">Chat<span class=\"dot hidden\" id=\"tab-dot\"></span></button><button class=\"tab\" role=\"tab\" aria-selected=\"false\" data-tab=\"log\">Registro</button></div>\n        <div class=\"chat\" id=\"tab-chat\"><div class=\"chat-list\" id=\"g-chat\"></div><div class=\"emoji-bar\" id=\"g-emojis\"></div>\n          <form class=\"chat-form\" id=\"g-chat-form\"><input class=\"input\" maxlength=\"160\" placeholder=\"Escribe un mensaje…\" aria-label=\"Mensaje\" autocomplete=\"off\"><button class=\"btn small primary\">Enviar</button></form></div>\n        <div id=\"log\" class=\"hidden\" aria-live=\"polite\"></div>\n      </aside>\n    </div>\n  </section>\n</div>\n\n<div class=\"conn wait\" id=\"conn\"><i></i><span>Conectando…</span></div>\n<div id=\"toasts\" aria-live=\"polite\"></div>\n<div id=\"modal-root\"></div>\n\n<script src=\"/socket.io/socket.io.js\"></script>\n<script type=\"module\" src=\"/js/main.js\"></script>\n</body>\n</html>\n","/js/audio.js":"// Efectos de sonido sintetizados con WebAudio: originales, sin archivos ni licencias.\nimport { settings } from './store.js';\nlet ctx = null, master = null;\n\nfunction ensure() {\n  if (!ctx) {\n    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;\n    ctx = new AC(); master = ctx.createGain(); master.connect(ctx.destination);\n  }\n  if (ctx.state === 'suspended') ctx.resume();\n  master.gain.value = settings.muted ? 0 : Math.pow(settings.volume, 1.6);\n  return ctx;\n}\nexport const unlock = () => { ensure(); };\nexport const refreshVolume = () => { if (master) master.gain.value = settings.muted ? 0 : Math.pow(settings.volume, 1.6); };\n\nfunction tone({ f = 440, f2 = null, t = 0, d = .15, type = 'sine', v = .25, a = .006 }) {\n  const c = ensure(); if (!c || settings.muted) return;\n  const o = c.createOscillator(), g = c.createGain(), t0 = c.currentTime + t;\n  o.type = type; o.frequency.setValueAtTime(f, t0);\n  if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + d);\n  g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(v, t0 + a); g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);\n  o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + d + .03);\n}\nfunction noise({ t = 0, d = .12, v = .2, hp = 600, lp = 7000 }) {\n  const c = ensure(); if (!c || settings.muted) return;\n  const len = Math.max(1, Math.floor(c.sampleRate * d)), buf = c.createBuffer(1, len, c.sampleRate), ch = buf.getChannelData(0);\n  for (let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1) * (1 - i / len);\n  const s = c.createBufferSource(); s.buffer = buf;\n  const h = c.createBiquadFilter(); h.type = 'highpass'; h.frequency.value = hp;\n  const l = c.createBiquadFilter(); l.type = 'lowpass'; l.frequency.value = lp;\n  const g = c.createGain(); const t0 = c.currentTime + t; g.gain.setValueAtTime(v, t0); g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);\n  s.connect(h); h.connect(l); l.connect(g); g.connect(master); s.start(t0);\n}\nconst arp = (notes, step = .09, o = {}) => notes.forEach((f, i) => tone(Object.assign({ f, t: i * step, d: .22, type: 'triangle', v: .22 }, o)));\n\nconst BANK = {\n  select: () => tone({ f: 620, f2: 880, d: .07, type: 'triangle', v: .16 }),\n  draw: () => { noise({ d: .09, v: .12, hp: 1800 }); tone({ f: 300, f2: 520, d: .08, type: 'sine', v: .1 }); },\n  play: () => { noise({ d: .14, v: .16, hp: 900 }); tone({ f: 200, f2: 90, d: .16, type: 'sine', v: .3 }); },\n  sabotage: () => { tone({ f: 520, f2: 130, d: .28, type: 'sawtooth', v: .14 }); noise({ d: .18, v: .12, hp: 1200 }); },\n  defense: () => { tone({ f: 330, d: .1, type: 'square', v: .12 }); tone({ f: 660, t: .09, d: .22, type: 'triangle', v: .2 }); },\n  manip: () => { tone({ f: 300, f2: 900, d: .3, type: 'sine', v: .18 }); tone({ f: 900, f2: 300, t: .22, d: .3, type: 'sine', v: .12 }); },\n  strategy: () => arp([660, 880, 1320], .06, { d: .14, v: .14 }),\n  special: () => { arp([523, 659, 784, 1047, 1319], .07, { v: .2 }); noise({ t: .3, d: .3, v: .06, hp: 4000 }); },\n  nope: () => { tone({ f: 180, f2: 90, d: .3, type: 'square', v: .2 }); noise({ d: .12, v: .15 }); },\n  steal: () => { tone({ f: 800, f2: 240, d: .35, type: 'triangle', v: .2 }); noise({ d: .2, v: .08, hp: 2500 }); },\n  egg: () => arp([784, 988, 1319], .07, { d: .16, v: .2 }),\n  eggLost: () => { tone({ f: 420, f2: 120, d: .4, type: 'sine', v: .26 }); noise({ t: .05, d: .15, v: .1 }); },\n  shuffle: () => { for (let i = 0; i < 5; i++) noise({ t: i * .06, d: .06, v: .1, hp: 1500 }); },\n  notify: () => { tone({ f: 880, d: .12, type: 'triangle', v: .22 }); tone({ f: 1175, t: .12, d: .2, type: 'triangle', v: .22 }); },\n  tick: () => tone({ f: 1000, d: .04, type: 'square', v: .06 }),\n  chick: () => { tone({ f: 1700, f2: 2500, d: .09, type: 'sine', v: .16 }); tone({ f: 1900, f2: 2700, t: .12, d: .09, type: 'sine', v: .16 }); },\n  win: () => { arp([523, 659, 784, 1047, 784, 1047, 1319], .11, { v: .25 }); },\n  lose: () => arp([440, 392, 349, 262], .16, { type: 'sine', v: .22, d: .35 }),\n  chat: () => tone({ f: 1400, d: .05, type: 'sine', v: .1 }),\n  coin: () => { tone({ f: 1500, d: .06, type: 'square', v: .1 }); tone({ f: 2000, t: .06, d: .3, type: 'sine', v: .12 }); },\n};\nexport const sfx = (name) => { try { const f = BANK[name]; if (f) f(); } catch (_) { /* audio no disponible */ } };\n","/js/cards-ui.js":"// Datos de cartas (descargados del servidor) y constructor de cartas en el DOM.\nexport let DEFS = {}, CATS = {}, MODS = {};\nexport const CAT_ORDER = ['estrategia', 'sabotaje', 'manipulacion', 'defensa', 'especial'];\n\nexport function setData(d) {\n  DEFS = Object.fromEntries(d.cards.map(c => [c.id, c]));\n  CATS = d.cats; MODS = d.mods;\n}\nexport const esc = s => String(s).replace(/[&<>\"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', \"'\": '&#39;' }[c]));\n\n/** Crea una carta. opts: uid, mini (sin descripción), flipped (boca abajo), cw (ancho en px). */\nexport function makeCard(id, opts = {}) {\n  const d = DEFS[id] || { name: '?', cat: 'estrategia', icon: '❓', desc: '' };\n  const el = document.createElement('div');\n  el.className = `card cat-${d.cat}${opts.mini ? ' mini' : ''}${opts.flipped ? ' flipped' : ''}`;\n  if (opts.uid != null) el.dataset.uid = opts.uid;\n  el.dataset.id = id;\n  if (opts.cw) el.style.setProperty('--cw', opts.cw + 'px');\n  const cat = CATS[d.cat] ? CATS[d.cat].name : d.cat;\n  const react = d.timing === 'react';\n  el.innerHTML =\n    `<div class=\"face front\"><div class=\"c-top\"><span>${esc(cat)}</span><span>${react ? '⚡ Reacción' : ''}</span></div>` +\n    `<div class=\"c-art\"><span class=\"ic\">${d.icon}</span></div><div class=\"c-name\">${esc(d.name)}</div><div class=\"c-desc\">${esc(d.desc)}</div></div>` +\n    `<div class=\"face back\"><span>🥚</span></div>`;\n  el.setAttribute('aria-label', `${d.name}. ${cat}. ${d.desc}`);\n  return el;\n}\nexport const cardBack = (cw) => makeCard('huevo_fresco', { flipped: true, cw, mini: true });\n","/js/main.js":"// CORRE QUE TE PÍO — cliente. Orquesta pantallas, conexión, chat, tutorial y modales.\nimport { store, settings, saveSettings, applySettings, motionOff } from './store.js';\nimport { sfx, unlock, refreshVolume } from './audio.js';\nimport { mascot, chickSVG, EMOTIONS } from './mascot.js';\nimport { setData, DEFS, CATS, CAT_ORDER, makeCard, esc } from './cards-ui.js';\nimport { createTable } from './table.js';\nimport { startTutorial } from './tutorial.js';\n\nconst $ = (s, r = document) => r.querySelector(s);\nconst $$ = (s, r = document) => [...r.querySelectorAll(s)];\nconst AVATARS = ['🐔', '🦊', '🐷', '🐮', '🐸', '🐙', '🦆', '🐢', '🐝', '🐺', '🦉', '🐰'];\nconst EMOJIS = ['😂', '🐔', '🥚', '😈', '🙏', '😱', '🔥', '👏'];\n\napplySettings();\nlet socket = null, table = null;\nlet session = store.get('session', null);          // { code, id, token }\nlet myId = session ? session.id : null;\nlet room = null, gstate = null, demo = false, lastRoomPhase = null;\nlet introMode = null, readySent = false, tutorialHandle = null, unread = 0, winShown = false, quickBusy = false;\nconst profile = Object.assign({ name: '', avatar: AVATARS[Math.floor(Math.random() * AVATARS.length)] }, store.get('profile', {}));\n\n/* ───────────── utilidades de interfaz ───────────── */\nfunction toast(msg, kind = '') {\n  const t = document.createElement('div'); t.className = 'toast ' + kind; t.textContent = msg; $('#toasts').appendChild(t);\n  setTimeout(() => t.remove(), 3500); if (kind === 'bad') sfx('nope');\n}\nfunction show(name) { $$('.screen').forEach(s => s.classList.toggle('active', s.id === 'screen-' + name)); document.body.dataset.screen = name; }\nfunction send(evt, data = {}) {\n  if (demo) return Promise.resolve({ ok: false });\n  return new Promise(res => {\n    if (!socket || !socket.connected) return res({ ok: false, error: 'Sin conexión con el servidor. Reintentando…' });\n    socket.emit(evt, data, r => res(r || { ok: false }));\n  });\n}\nfunction openModal(html, { onClose, wide } = {}) {\n  closeModal();\n  const ov = document.createElement('div'); ov.className = 'overlay'; ov.innerHTML = `<div class=\"modal\" role=\"dialog\" aria-modal=\"true\">${html}</div>`;\n  if (wide) $('.modal', ov).style.width = 'min(900px, 100%)';\n  $('#modal-root').appendChild(ov);\n  const close = () => { ov.remove(); document.removeEventListener('keydown', esc_); if (onClose) onClose(); };\n  const esc_ = e => { if (e.key === 'Escape') close(); };\n  document.addEventListener('keydown', esc_);\n  ov.addEventListener('mousedown', e => { if (e.target === ov) close(); });\n  ov._close = close; setTimeout(() => { const b = $('.btn.primary', ov) || $('[data-close]', ov); if (b) b.focus({ preventScroll: true }); }, 30);\n  $$('[data-close]', ov).forEach(b => b.addEventListener('click', close));\n  return ov;\n}\nfunction closeModal() { $$('#modal-root .overlay').forEach(o => o._close && o._close()); }\nfunction copy(text, ok) {\n  const done = () => toast(ok);\n  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, () => fallback());\n  else fallback();\n  function fallback() { const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } catch (_) { toast('No se pudo copiar. Cópialo a mano: ' + text); } t.remove(); }\n}\nconst inviteLink = code => `${location.origin}${location.pathname}?sala=${code}`;\n\n/* ───────────── conexión ───────────── */\nfunction setConn(state, text) { const c = $('#conn'); c.className = 'conn ' + state; $('span', c).textContent = text; }\nfunction connect() {\n  if (typeof io !== 'function') { setConn('', 'Sin conexión'); toast('No se pudo cargar la conexión en tiempo real. Recarga la página.', 'bad'); return; }\n  socket = io({ reconnectionDelay: 700, reconnectionDelayMax: 4000 });\n  socket.on('connect', () => {\n    setConn('ok', 'Conectado');\n    if (session) socket.emit('room:resume', session, r => {\n      if (r && r.ok) { myId = r.id; return; }\n      session = null; store.del('session'); myId = null;\n      if (document.body.dataset.screen !== 'menu') { goMenu(); toast((r && r.error) || 'La sala ya no existe.', 'bad'); }\n    });\n  });\n  socket.on('disconnect', () => setConn('wait', 'Reconectando…'));\n  socket.on('connect_error', () => setConn('wait', 'Reconectando…'));\n  socket.on('room:state', onRoomState);\n  socket.on('game:update', ({ state, events }) => onGameUpdate(state, events));\n  socket.on('game:peek', onPeek);\n  socket.on('chat:msg', addChat);\n  socket.on('chat:history', h => { $('#lb-chat').innerHTML = ''; $('#g-chat').innerHTML = ''; (h || []).forEach(m => addChat(m, true)); });\n  socket.on('room:kicked', d => { session = null; store.del('session'); goMenu(); toast(d.reason || 'Te han desconectado de la sala.', 'bad'); });\n}\nfunction saveSession(r) { session = { code: r.code, id: r.id, token: r.token }; myId = r.id; store.set('session', session); }\nfunction goMenu() {\n  closeModal(); if (tutorialHandle) tutorialHandle.stop(); table.reset(); room = null; gstate = null; lastRoomPhase = null; introMode = null; $('#intro').classList.add('hidden'); winShown = false;\n  show('menu'); refreshPublic();\n}\n\n/* ───────────── menú ───────────── */\nfunction initMenu() {\n  $('#in-name').value = profile.name;\n  const av = $('#avatars');\n  AVATARS.forEach(a => { const b = document.createElement('button'); b.className = 'avatar-btn'; b.textContent = a; b.type = 'button'; b.setAttribute('aria-label', 'Avatar ' + a); b.setAttribute('aria-pressed', a === profile.avatar); b.onclick = () => { profile.avatar = a; saveProfile(); $$('.avatar-btn').forEach(x => x.setAttribute('aria-pressed', x === b)); sfx('select'); }; av.appendChild(b); });\n  const prof = () => { profile.name = $('#in-name').value.trim().slice(0, 16); saveProfile(); return { name: profile.name || 'Pollito', avatar: profile.avatar }; };\n  $('#in-name').addEventListener('input', () => { profile.name = $('#in-name').value.trim().slice(0, 16); saveProfile(); });\n  $('#btn-create').onclick = async () => { const r = await send('room:create', Object.assign(prof(), { isPublic: false })); if (r.ok) saveSession(r); else toast(r.error || 'No se pudo crear la sala.', 'bad'); };\n  $('#btn-quick').onclick = async () => { if (quickBusy) return; quickBusy = true; const r = await send('room:quick', prof()); quickBusy = false; if (r.ok) saveSession(r); else toast(r.error || 'No se pudo encontrar partida.', 'bad'); };\n  const join = async code => { code = String(code || '').trim().toUpperCase(); if (code.length < 4) return toast('Escribe el código de la sala (5 caracteres).', 'bad'); const r = await send('room:join', Object.assign(prof(), { code })); if (r.ok) saveSession(r); else toast(r.error || 'No se pudo entrar.', 'bad'); };\n  $('#btn-join').onclick = () => join($('#in-code').value);\n  $('#in-code').addEventListener('keydown', e => { if (e.key === 'Enter') join(e.target.value); });\n  $('#btn-rules').onclick = openRules; $('#btn-hud-rules').onclick = openRules;\n  $('#btn-settings').onclick = openSettings; $('#btn-hud-settings').onclick = openSettings;\n  $('#btn-cards').onclick = openCatalog;\n  $('#btn-tutorial').onclick = () => runDemoTutorial();\n  // mascota del menú\n  const mc = $('#menu-chick'); mc.innerHTML = chickSVG(); const msvg = mc.firstElementChild; msvg.style.cursor = 'pointer';\n  const wiggle = () => { if (document.body.dataset.screen !== 'menu') return; const e = ['excited', 'laughing', 'surprised', 'explaining', 'celebrate'][Math.floor(Math.random() * 5)]; msvg.setAttribute('class', 'chick e-' + e); setTimeout(() => msvg.setAttribute('class', 'chick e-idle'), 1600); };\n  setInterval(wiggle, 6000);\n  msvg.addEventListener('click', () => { sfx('chick'); msvg.setAttribute('class', 'chick e-surprised'); setTimeout(() => msvg.setAttribute('class', 'chick e-laughing'), 500); setTimeout(() => msvg.setAttribute('class', 'chick e-idle'), 2000); });\n  // invitación por enlace\n  const q = new URLSearchParams(location.search).get('sala');\n  if (q) { $('#in-code').value = q.toUpperCase().slice(0, 5); history.replaceState(null, '', location.pathname); setTimeout(() => toast(`Te han invitado a la sala ${q.toUpperCase().slice(0, 5)}. Pon tu nombre y pulsa «Unirme».`), 500); $('#in-name').focus(); }\n}\nconst saveProfile = () => store.set('profile', profile);\nfunction refreshPublic() {\n  if (!socket || !socket.connected || document.body.dataset.screen !== 'menu') return;\n  socket.emit('room:list', {}, r => {\n    const box = $('#pub-list'); if (!r || !r.ok) return; box.innerHTML = '';\n    if (!r.rooms.length) { box.innerHTML = '<div class=\"hint\" style=\"text-align:center\">No hay salas públicas abiertas. ¡Crea la primera con «Partida rápida»!</div>'; return; }\n    r.rooms.forEach(x => { const d = document.createElement('div'); d.className = 'pub-item'; d.innerHTML = `<span>${esc(x.host)} · ${x.count}/${x.max}</span>`; const b = document.createElement('button'); b.className = 'btn small'; b.textContent = 'Entrar'; b.onclick = () => { $('#in-code').value = x.code; $('#btn-join').click(); }; d.appendChild(b); box.appendChild(d); });\n  });\n}\nsetInterval(refreshPublic, 5000);\n\n/* ───────────── sala / lobby ───────────── */\nfunction onRoomState(r) {\n  room = r; myId = r.you; if (session) { session.id = r.you; }\n  $('#room-chip b').textContent = r.code;\n  if (r.phase === 'lobby') {\n    if (lastRoomPhase !== 'lobby') { table.reset(); gstate = null; winShown = false; introMode = null; closeModal(); }\n    show('lobby'); renderLobby();\n  } else if (!demo) {\n    if (lastRoomPhase === 'lobby' || lastRoomPhase === 'ended' || lastRoomPhase === null) { if (r.phase === 'game') enterGame(); else if (lastRoomPhase === null) show('game'); }\n    if (r.phase === 'ended' && lastRoomPhase !== 'ended') { /* el overlay llega con el evento win */ }\n  }\n  lastRoomPhase = r.phase;\n}\nfunction renderLobby() {\n  $('#lb-code').textContent = room.code;\n  const host = room.hostId === myId;\n  const box = $('#lb-members'); box.innerHTML = '';\n  room.members.forEach(m => {\n    const d = document.createElement('div'); d.className = 'member' + (m.connected ? '' : ' off');\n    d.innerHTML = `<span class=\"av\">${m.avatar}</span><div><b>${esc(m.name)}</b><small>${m.id === room.hostId ? 'Anfitrión' : m.connected ? 'Listo' : 'Desconectado'}${m.id === myId ? ' · tú' : ''}</small></div>`; box.appendChild(d);\n  });\n  const n = room.members.filter(m => m.connected).length;\n  $('#lb-info').textContent = n < room.min ? `Hacen falta al menos ${room.min} jugadores. Comparte el código o el enlace.` : `${n} jugadores. Gana quien llene antes su nido: ${n <= 5 ? 5 : 6} huevos.`;\n  $('#btn-start').classList.toggle('hidden', !host); $('#btn-start').disabled = n < room.min;\n  $('#lb-public-row').classList.toggle('hidden', !host); $('#lb-public').checked = room.isPublic;\n  if (!host) $('#lb-info').textContent += ' Esperando a que el anfitrión empiece.';\n}\nfunction initLobby() {\n  $('#btn-copy-code').onclick = () => copy(room.code, 'Código copiado');\n  $('#btn-copy-link').onclick = () => copy(inviteLink(room.code), 'Enlace de invitación copiado');\n  $('#btn-lb-leave').onclick = leaveRoom;\n  $('#btn-start').onclick = async () => { const r = await send('room:start'); if (!r.ok) toast(r.error, 'bad'); };\n  $('#lb-public').onchange = e => send('room:settings', { isPublic: e.target.checked });\n}\nasync function leaveRoom() { await send('room:leave'); session = null; store.del('session'); goMenu(); }\n\n/* ───────────── chat ───────────── */\nfunction addChat(m, silent) {\n  [$('#lb-chat'), $('#g-chat')].forEach(list => {\n    const d = document.createElement('div'); d.className = 'msg' + (m.id === myId ? ' me' : ''); const b = document.createElement('b'); b.textContent = `${m.avatar} ${m.name}`; d.append(b, document.createTextNode(m.text)); list.appendChild(d); list.scrollTop = list.scrollHeight;\n  });\n  if (!silent && m.id !== myId) {\n    sfx('chat');\n    const open = $('#side').classList.contains('open') || matchMedia('(min-width:1100px)').matches;\n    if (!open || $('.tab[aria-selected=\"true\"]').dataset.tab !== 'chat') { unread++; $('#chat-dot').textContent = unread; $('#chat-dot').classList.remove('hidden'); $('#tab-dot').textContent = unread; $('#tab-dot').classList.remove('hidden'); }\n  }\n}\nfunction initChat() {\n  [['#lb-emojis', '#lb-chat-form'], ['#g-emojis', '#g-chat-form']].forEach(([eb, fm]) => {\n    const bar = $(eb); EMOJIS.forEach(e => { const b = document.createElement('button'); b.type = 'button'; b.textContent = e; b.setAttribute('aria-label', 'Enviar ' + e); b.onclick = () => send('chat:send', { text: e }).then(r => { if (r.error) toast(r.error, 'bad'); }); bar.appendChild(b); });\n    const form = $(fm), input = $('input', form);\n    form.onsubmit = async e => { e.preventDefault(); const t = input.value.trim(); if (!t) return; input.value = ''; const r = await send('chat:send', { text: t }); if (r.error) toast(r.error, 'bad'); };\n  });\n  $$('.tab').forEach(t => t.onclick = () => {\n    $$('.tab').forEach(x => x.setAttribute('aria-selected', x === t)); const chat = t.dataset.tab === 'chat';\n    $('#tab-chat').classList.toggle('hidden', !chat); $('#log').classList.toggle('hidden', chat);\n    if (chat) clearUnread();\n  });\n  $('#side-toggle').onclick = () => { $('#side').classList.toggle('open'); if ($('#side').classList.contains('open')) clearUnread(); };\n}\nfunction clearUnread() { unread = 0; $('#chat-dot').classList.add('hidden'); $('#tab-dot').classList.add('hidden'); }\n\n/* ───────────── partida ───────────── */\nfunction enterGame() {\n  table.reset(); gstate = null; winShown = false; introMode = null; readySent = false; closeModal(); $('#intro').classList.add('hidden');\n  show('game'); mascot.setEnabled(settings.mascot);\n}\nfunction onGameUpdate(state, events) {\n  if (demo) return;\n  gstate = state;\n  if (document.body.dataset.screen !== 'game') show('game');\n  table.update(state, events);\n  if (state.phase === 'intro') handleIntro(state); else if (introMode) { $('#intro').classList.add('hidden'); introMode = null; }\n  if (state.phase === 'ended' && state.winner && !winShown && !events.some(e => e.type === 'win')) onWin(state.winner, false, true);\n}\nfunction handleIntro(st) {\n  const intro = $('#intro'), iAmReady = st.ready.includes(myId);\n  const waiting = () => { const names = st.players.filter(p => !st.ready.includes(p.id) && p.connected && !p.gone).map(p => p.name); intro.classList.remove('hidden'); intro.innerHTML = `<div class=\"panel\"><h3>¡Preparados!</h3><p class=\"hint\">Esperando a: ${esc(names.join(', ') || '…')}</p></div>`; introMode = 'waiting'; };\n  if (iAmReady) { if (introMode !== 'tutorial') waiting(); return; }\n  if (introMode === 'tutorial') return;\n  if (store.get('tutorialDone', false)) {\n    if (!readySent) { readySent = true; setTimeout(() => send('game:ready'), 1300); }\n    waiting(); return;\n  }\n  if (introMode === 'ask') return;\n  introMode = 'ask'; intro.classList.remove('hidden');\n  intro.innerHTML = `<div class=\"panel\"><h3>¡Pío, pío! Parece que es tu primera partida</h3><p class=\"hint\">¿Quieres que te explique cómo se juega? Dura un minuto y la partida espera a que termines.</p><div class=\"btns\"><button class=\"btn primary\" id=\"i-teach\">¡Enséñame a jugar!</button><button class=\"btn\" id=\"i-skip\">Ya sé jugar, ¡vamos!</button></div></div>`;\n  mascot.say('¡Hola! Soy Pío, tu guía por el corral.', 'excited', { sticky: false, ms: 5000, prio: 4 });\n  $('#i-skip').onclick = () => { store.set('tutorialDone', true); readySent = true; send('game:ready'); introMode = null; handleIntro(gstate); };\n  $('#i-teach').onclick = () => {\n    introMode = 'tutorial'; intro.classList.add('hidden'); $('#mascot').classList.add('hidden');\n    tutorialHandle = startTutorial({ table, context: () => ({ target: (gstate || { target: 5 }).target }), onStep: () => {}, onDone: () => { tutorialHandle = null; store.set('tutorialDone', true); $('#mascot').classList.remove('hidden'); readySent = true; send('game:ready'); introMode = null; if (gstate) handleIntro(gstate); } });\n  };\n}\nfunction onPeek(p) {\n  const ov = openModal(`<h2>${esc(p.title)}</h2><p class=\"hint\">Solo lo ves tú.</p><div class=\"peek\"></div><div class=\"foot\"><button class=\"btn primary\" data-close>Entendido</button></div>`);\n  const box = $('.peek', ov); if (!p.cards.length) box.innerHTML = '<p>No hay cartas que mostrar.</p>'; p.cards.forEach(id => box.appendChild(makeCard(id, { cw: 96 })));\n  sfx('manip');\n}\nfunction confetti() {\n  if (motionOff()) return;\n  const cols = ['#ffd23f', '#fff', '#5ec3ff', '#2f6bff', '#ff6b3d', '#ff9bd0'];\n  for (let i = 0; i < 90; i++) { const c = document.createElement('div'); c.className = 'confetti'; c.style.cssText = `left:${Math.random() * 100}vw;background:${cols[i % cols.length]};--dx:${(Math.random() - .5) * 240}px;--rot:${Math.random() * 900}deg;animation-duration:${2.4 + Math.random() * 2.2}s;animation-delay:${Math.random() * .8}s;border-radius:${Math.random() > .5 ? '50%' : '2px'}`; document.body.appendChild(c); setTimeout(() => c.remove(), 6000); }\n}\nfunction onWin(pid, abandon, immediate) {\n  if (winShown) return; winShown = true;\n  setTimeout(() => showEnd(pid, abandon), immediate ? 0 : 1300);\n}\nfunction showEnd(pid, abandon) {\n  const st = gstate; if (!st) return;\n  const won = pid === myId, w = st.players.find(p => p.id === pid);\n  sfx(won ? 'win' : 'lose'); if (won) confetti();\n  const rows = [...st.players].sort((a, b) => (b.id === pid) - (a.id === pid) || b.eggs - a.eggs).map(p => `<div class=\"stand ${p.id === pid ? 'win' : ''}\"><span style=\"font-size:1.4rem\">${p.avatar}</span><b>${esc(p.name)}${p.id === myId ? ' (tú)' : ''}</b>${p.gone ? '<small>(se fue)</small>' : ''}<span class=\"eg\">${p.eggs} 🥚</span></div>`).join('');\n  const host = room && room.hostId === myId;\n  const ov = openModal(`<div id=\"end-chick\"></div><h2 style=\"text-align:center\">${won ? '¡Has ganado!' : `Ha ganado ${esc(w ? w.name : '?')}`}</h2>\n    <p style=\"text-align:center;margin:0\">${abandon ? 'La partida ha terminado porque no quedaban suficientes jugadores.' : won ? '¡Campeón del corral! Tu nido es el más grande.' : 'Otra vez será… ¡la próxima te pillo yo!'}</p>\n    <div class=\"standings\">${rows}</div><div class=\"foot\"><button class=\"btn\" id=\"e-leave\">Salir al menú</button><button class=\"btn\" data-close>Ver mesa</button>${host ? '<button class=\"btn primary\" id=\"e-rematch\">Revancha</button>' : '<span class=\"hint\" style=\"align-self:center\">El anfitrión puede pedir revancha.</span>'}</div>`);\n  const ch = $('#end-chick', ov); ch.innerHTML = chickSVG(); ch.firstElementChild.setAttribute('class', 'chick e-' + (won ? 'victory' : 'sad'));\n  $('#e-leave', ov).onclick = leaveRoom;\n  const rm = $('#e-rematch', ov); if (rm) rm.onclick = async () => { const r = await send('room:start'); if (!r.ok) toast(r.error, 'bad'); };\n  mascot.quip(won ? 'win' : 'lose', { prio: 5 });\n}\n\n/* ───────────── modales ───────────── */\nfunction openRules() {\n  const cats = CAT_ORDER.map(k => `<div class=\"rule-cat\" style=\"--cc:${CATS[k].color}\"><b>${CATS[k].name}</b>${{\n    estrategia: 'Huevos, robar cartas y apuestas.', sabotaje: 'Robar, destruir y fastidiar a un rival.', manipulacion: 'Cambiar turnos, manos y reglas.',\n    defensa: 'Cancelar, devolver, desviar y protegerte.', especial: 'Efectos raros, globales y alianzas.' }[k]}</div>`).join('');\n  openModal(`<h2>Cómo se juega</h2>\n    <h3>Objetivo</h3><p>Llena tu nido antes que nadie: <b>5 huevos</b> si sois de 2 a 5 jugadores, <b>6 huevos</b> si sois de 6 a 10.</p>\n    <h3>Tu turno</h3><ol><li>Robas <b>1 carta</b>.</li><li>Tienes <b>2 acciones</b>: cada carta que juegas gasta una. Algunas cartas dan acciones extra.</li><li>Cuando no te queden acciones el turno termina solo, o pulsa <b>«Terminar turno»</b> antes. No hay reloj de turno: tómate tu tiempo.</li></ol>\n    <h3>Reacciones</h3><p>Cuando alguien juega una carta, durante unos segundos <b>cualquiera puede reaccionar</b> con una carta de Defensa marcada con ⚡. Se pueden encadenar: un <b>¡Ni Hablar!</b> se cancela con otro, y se resuelve de la última carta a la primera. Si nadie puede reaccionar, la ventana es muy corta.</p>\n    <h3>Tipos de carta</h3><div class=\"rules-cats\">${cats}</div>\n    <h3>Detalles que conviene saber</h3><ul><li>Los jugadores con <b>Pollito Fantasma</b> no pueden ser objetivo de nada.</li><li>Las cartas de efecto global (Luna Llena, Veda de Caza, Fiesta, Silencio) duran una ronda.</li><li>Si el mazo se agota, se baraja el descarte.</li><li>Si alguien se desconecta, se le pasa el turno; puede volver con el mismo navegador.</li></ul>\n    <div class=\"foot\"><button class=\"btn\" id=\"r-cards\">Ver todas las cartas</button><button class=\"btn\" id=\"r-tut\">Ver tutorial</button><button class=\"btn primary\" data-close>Entendido</button></div>`, { wide: false })\n    .addEventListener('click', e => { if (e.target.id === 'r-cards') { closeModal(); openCatalog(); } if (e.target.id === 'r-tut') { closeModal(); runDemoTutorial(); } });\n}\nfunction openCatalog() {\n  const ov = openModal(`<h2>Todas las cartas</h2><p class=\"hint\">${Object.keys(DEFS).length} cartas distintas. Toca el icono ⚡ para reconocer las reacciones.</p><div id=\"catalog\"></div><div class=\"foot\"><button class=\"btn primary\" data-close>Cerrar</button></div>`, { wide: true });\n  const box = $('#catalog', ov);\n  CAT_ORDER.forEach(k => {\n    const h = document.createElement('h3'); h.textContent = CATS[k].name; box.appendChild(h);\n    const list = document.createElement('div'); list.className = 'cardlist'; Object.values(DEFS).filter(d => d.cat === k).forEach(d => { const c = makeCard(d.id, { cw: 132 }); list.appendChild(c); }); box.appendChild(list);\n  });\n}\nfunction openSettings() {\n  const ov = openModal(`<h2>Ajustes</h2>\n    <label class=\"field\"><span>Volumen: <b id=\"s-vol-v\">${Math.round(settings.volume * 100)}%</b></span><input class=\"range\" id=\"s-vol\" type=\"range\" min=\"0\" max=\"1\" step=\"0.05\" value=\"${settings.volume}\"></label>\n    <label class=\"switch\" style=\"margin-bottom:12px\"><input type=\"checkbox\" id=\"s-mute\" ${settings.muted ? 'checked' : ''}> Silenciar todo el sonido</label>\n    <label class=\"field\"><span>Animaciones</span><select class=\"input\" id=\"s-motion\"><option value=\"auto\">Según mi sistema</option><option value=\"off\">Reducidas (sin movimiento)</option><option value=\"on\">Completas</option></select></label>\n    <label class=\"switch\" style=\"margin-bottom:12px\"><input type=\"checkbox\" id=\"s-mascot\" ${settings.mascot ? 'checked' : ''}> Mostrar a Pío durante la partida</label>\n    <div class=\"foot\" style=\"justify-content:space-between\"><button class=\"btn\" id=\"s-tut\">Ver el tutorial otra vez</button><button class=\"btn primary\" data-close>Hecho</button></div>`);\n  $('#s-motion', ov).value = settings.reducedMotion === null ? 'auto' : settings.reducedMotion ? 'off' : 'on';\n  $('#s-vol', ov).oninput = e => { settings.volume = Number(e.target.value); $('#s-vol-v', ov).textContent = Math.round(settings.volume * 100) + '%'; saveSettings(); refreshVolume(); };\n  $('#s-vol', ov).onchange = () => sfx('egg');\n  $('#s-mute', ov).onchange = e => { settings.muted = e.target.checked; saveSettings(); refreshVolume(); };\n  $('#s-motion', ov).onchange = e => { settings.reducedMotion = e.target.value === 'auto' ? null : e.target.value === 'off'; saveSettings(); };\n  $('#s-mascot', ov).onchange = e => { settings.mascot = e.target.checked; saveSettings(); mascot.setEnabled(settings.mascot); $('#mascot').classList.toggle('hidden', !settings.mascot); };\n  $('#s-tut', ov).onclick = () => { closeModal(); runDemoTutorial(); };\n}\n\n/* ───────────── tutorial a demanda (mesa de práctica) ───────────── */\nfunction demoState(mode) {\n  const you = { id: 'you', name: profile.name || 'Tú', avatar: profile.avatar };\n  const P = [[you, 1], [{ id: 'a', name: 'Ana', avatar: '🦊' }, 2], [{ id: 'b', name: 'Beni', avatar: '🐷' }, 0], [{ id: 'c', name: 'Carla', avatar: '🐸' }, 3], [{ id: 'd', name: 'Dani', avatar: '🐙' }, 1]];\n  const base = {\n    now: Date.now(), phase: 'play', deadline: null, target: 5, dir: 1, turn: 'you', actions: 2, deckCount: 84, discardCount: 7, discardTop: 'rapina', mods: { luna: 3 }, winner: null,\n    players: P.map(([p, e], i) => Object.assign({ eggs: e, handCount: 4 + (i % 3), connected: true, gone: false, ghost: i === 2, skip: false, trap: false, hideout: false, incubating: i === 3 ? 1 : 0, pact: null, noSabotage: false, noDraw: 0 }, p)),\n    hand: ['huevo_fresco', 'zarpazo', 'trueque', 'nope', 'escudo', 'maiz', 'gallina_oro'].map((id, i) => ({ uid: i + 1, id })),\n    stack: [], reaction: null, log: ['Ana juega Zarpazo del Zorro sobre ti.', 'Tú reaccionas con Escudo de Paja.', 'Beni termina su turno.'],\n  };\n  if (mode === 'reaction') Object.assign(base, { phase: 'reaction', turn: 'a', deadline: Date.now() + 5000, stack: [{ eid: 1, id: 'zarpazo', by: 'a', target: 'you', reaction: false }, { eid: 2, id: 'nope', by: 'b', target: null, reaction: true }], reaction: { eid: 2, mine: true, passed: false } });\n  return base;\n}\nfunction runDemoTutorial() {\n  if (!DEFS.nope) return;\n  demo = true; closeModal(); table.reset(); show('game'); mascot.setEnabled(false); $('#mascot').classList.add('hidden'); $('#intro').classList.add('hidden');\n  table.update(demoState('play'), []);\n  tutorialHandle = startTutorial({\n    table, context: () => ({ target: 5 }),\n    onStep: (i, st) => table.update(demoState(st.demo || 'play'), []),\n    onDone: () => { tutorialHandle = null; store.set('tutorialDone', true); demo = false; table.reset(); $('#mascot').classList.remove('hidden'); mascot.setEnabled(settings.mascot); room ? (room.phase === 'lobby' ? show('lobby') : (show('game'), gstate && table.update(gstate, []))) : show('menu'); refreshPublic(); },\n  });\n}\n\n/* ───────────── arranque ───────────── */\nasync function boot() {\n  try { setData(await (await fetch('/cards.json')).json()); } catch (e) { toast('No se pudieron cargar las cartas. Recarga la página.', 'bad'); return; }\n  mascot.mount($('#mascot'));\n  table = createTable({ me: () => (demo ? 'you' : myId), send, toast, onWin });\n  initMenu(); initLobby(); initChat();\n  $('#btn-menu').onclick = () => {\n    if (demo) return;\n    const ov = openModal(`<h2>¿Salir de la partida?</h2><p>Si sales, tu sitio quedará vacío y no podrás volver a esta partida.</p><div class=\"foot\"><button class=\"btn\" data-close>Seguir jugando</button><button class=\"btn primary\" id=\"x-leave\">Salir</button></div>`);\n    $('#x-leave', ov).onclick = () => { closeModal(); leaveRoom(); };\n  };\n  document.addEventListener('pointerdown', unlock, { once: true });\n  document.addEventListener('keydown', unlock, { once: true });\n  connect();\n  window.__cqtp = { get state() { return gstate; }, get room() { return room; }, table, mascot, runDemoTutorial, EMOTIONS };\n}\nboot();\n","/js/mascot.js":"// Pío, el pollito chibi: dibujo SVG + 10 emociones + frases contextuales en español.\nlet uid = 0;\nexport const EMOTIONS = ['idle', 'excited', 'surprised', 'confused', 'sad', 'celebrate', 'warning', 'laughing', 'explaining', 'victory'];\n\nexport function chickSVG(cls = '') {\n  const k = 'c' + (++uid);\n  return `<svg class=\"chick e-idle ${cls}\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pío, el pollito\">\n<defs>\n  <radialGradient id=\"${k}y\" cx=\"42%\" cy=\"30%\" r=\"80%\"><stop offset=\"0\" stop-color=\"#fff08a\"/><stop offset=\".55\" stop-color=\"#ffd23f\"/><stop offset=\"1\" stop-color=\"#f0b10f\"/></radialGradient>\n  <linearGradient id=\"${k}w\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#ffd84f\"/><stop offset=\"1\" stop-color=\"#eaa90c\"/></linearGradient>\n</defs>\n<ellipse cx=\"100\" cy=\"192\" rx=\"56\" ry=\"7\" fill=\"#040b24\" opacity=\".28\"/>\n<g class=\"body-g\">\n  <g fill=\"#ff8a1f\" stroke=\"#d96d0a\" stroke-width=\"2.5\" stroke-linejoin=\"round\">\n    <path d=\"M60 178 q4 -9 17 -7 q13 2 13 9 q-2 7 -14 7 q-14 0 -16 -9z\"/><path d=\"M110 180 q0 -7 13 -9 q13 -2 17 7 q-2 9 -16 9 q-12 0 -14 -7z\"/>\n  </g>\n  <ellipse cx=\"100\" cy=\"134\" rx=\"58\" ry=\"50\" fill=\"url(#${k}y)\"/>\n  <ellipse cx=\"100\" cy=\"148\" rx=\"33\" ry=\"29\" fill=\"#fff4b0\" opacity=\".85\"/>\n  <g class=\"wing-l\"><ellipse cx=\"44\" cy=\"136\" rx=\"15\" ry=\"27\" transform=\"rotate(16 44 136)\" fill=\"url(#${k}w)\" stroke=\"#d99a08\" stroke-width=\"2\"/></g>\n  <g class=\"wing-r\"><ellipse cx=\"156\" cy=\"136\" rx=\"15\" ry=\"27\" transform=\"rotate(-16 156 136)\" fill=\"url(#${k}w)\" stroke=\"#d99a08\" stroke-width=\"2\"/></g>\n  <circle cx=\"100\" cy=\"84\" r=\"54\" fill=\"url(#${k}y)\"/>\n  <path d=\"M90 34 q-8 -16 4 -22 M101 31 q0 -18 11 -18 M111 35 q9 -12 18 -6\" stroke=\"#f0b10f\" stroke-width=\"7\" fill=\"none\" stroke-linecap=\"round\"/>\n  <ellipse cx=\"61\" cy=\"101\" rx=\"12\" ry=\"7.5\" fill=\"#ff7a4d\" opacity=\".5\"/><ellipse cx=\"139\" cy=\"101\" rx=\"12\" ry=\"7.5\" fill=\"#ff7a4d\" opacity=\".5\"/>\n\n  <g class=\"blink on-eyes-open\"><ellipse cx=\"76\" cy=\"84\" rx=\"9\" ry=\"12.5\" fill=\"#0a1640\"/><ellipse cx=\"124\" cy=\"84\" rx=\"9\" ry=\"12.5\" fill=\"#0a1640\"/>\n    <circle cx=\"79.5\" cy=\"78.5\" r=\"3.6\" fill=\"#fff\"/><circle cx=\"127.5\" cy=\"78.5\" r=\"3.6\" fill=\"#fff\"/><circle cx=\"73\" cy=\"90\" r=\"1.9\" fill=\"#fff\"/><circle cx=\"121\" cy=\"90\" r=\"1.9\" fill=\"#fff\"/></g>\n  <g class=\"on-eyes-happy\" stroke=\"#0a1640\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M65 90 q11 -19 22 0\"/><path d=\"M113 90 q11 -19 22 0\"/></g>\n  <g class=\"on-eyes-wide\"><ellipse cx=\"75\" cy=\"83\" rx=\"13\" ry=\"16\" fill=\"#fff\" stroke=\"#0a1640\" stroke-width=\"3\"/><ellipse cx=\"125\" cy=\"83\" rx=\"13\" ry=\"16\" fill=\"#fff\" stroke=\"#0a1640\" stroke-width=\"3\"/>\n    <circle cx=\"76\" cy=\"84\" r=\"7\" fill=\"#0a1640\"/><circle cx=\"124\" cy=\"84\" r=\"7\" fill=\"#0a1640\"/><circle cx=\"78.5\" cy=\"81\" r=\"2.6\" fill=\"#fff\"/><circle cx=\"126.5\" cy=\"81\" r=\"2.6\" fill=\"#fff\"/></g>\n  <g class=\"on-eyes-sad\"><ellipse cx=\"76\" cy=\"88\" rx=\"9.5\" ry=\"12\" fill=\"#0a1640\"/><ellipse cx=\"124\" cy=\"88\" rx=\"9.5\" ry=\"12\" fill=\"#0a1640\"/>\n    <circle cx=\"79\" cy=\"83\" r=\"5\" fill=\"#fff\"/><circle cx=\"127\" cy=\"83\" r=\"5\" fill=\"#fff\"/><circle cx=\"73\" cy=\"93\" r=\"2.2\" fill=\"#fff\"/><circle cx=\"121\" cy=\"93\" r=\"2.2\" fill=\"#fff\"/></g>\n  <g class=\"on-eyes-confused\"><ellipse cx=\"76\" cy=\"84\" rx=\"9\" ry=\"12.5\" fill=\"#0a1640\"/><circle cx=\"125\" cy=\"86\" r=\"6\" fill=\"#0a1640\"/><circle cx=\"79\" cy=\"79\" r=\"3.4\" fill=\"#fff\"/><circle cx=\"127\" cy=\"84\" r=\"2\" fill=\"#fff\"/>\n    <path d=\"M62 66 q12 -10 26 -2\" stroke=\"#0a1640\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"/></g>\n  <g class=\"on-brows-angry\" stroke=\"#0a1640\" stroke-width=\"6.5\" stroke-linecap=\"round\"><path d=\"M60 64 L91 77\"/><path d=\"M140 64 L109 77\"/></g>\n  <g class=\"on-brows-sad\" stroke=\"#0a1640\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"><path d=\"M62 76 L90 64\"/><path d=\"M138 76 L110 64\"/></g>\n\n  <path class=\"beak-closed\" d=\"M85 97 Q100 88 115 97 Q100 117 85 97Z\" fill=\"#ff8a1f\" stroke=\"#d96d0a\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <g class=\"on-beak-open\" stroke=\"#d96d0a\" stroke-width=\"2.5\" stroke-linejoin=\"round\"><path d=\"M85 95 Q100 86 115 95 Q100 103 85 95Z\" fill=\"#ff8a1f\"/><path d=\"M89 99 Q100 121 111 99Z\" fill=\"#7a2318\"/><ellipse cx=\"100\" cy=\"112\" rx=\"6\" ry=\"3.5\" fill=\"#ff7a8a\" stroke=\"none\"/></g>\n  <g class=\"on-tear\"><path d=\"M58 98 q-8 13 0 18 q8 -5 0 -18z\" fill=\"#7fd0ff\" stroke=\"#3d9be0\" stroke-width=\"1.5\"/></g>\n  <g class=\"on-lol\"><path d=\"M56 96 q-8 11 0 16 q8 -5 0 -16z\" fill=\"#7fd0ff\"/><path d=\"M144 96 q-8 11 0 16 q8 -5 0 -16z\" fill=\"#7fd0ff\"/></g>\n  <g class=\"on-sweat\"><path d=\"M150 54 q-9 14 0 20 q9 -6 0 -20z\" fill=\"#7fd0ff\" stroke=\"#3d9be0\" stroke-width=\"1.5\"/></g>\n  <g class=\"on-crown\"><path d=\"M70 38 L76 8 L90 26 L100 2 L110 26 L124 8 L130 38 Z\" fill=\"#ffd23f\" stroke=\"#c99a12\" stroke-width=\"3\" stroke-linejoin=\"round\"/><circle cx=\"100\" cy=\"12\" r=\"4\" fill=\"#ff5d73\"/></g>\n</g>\n<g class=\"on-sparks\" fill=\"#fff3b0\" stroke=\"#e0a800\" stroke-width=\"1.5\">\n  <path d=\"M26 52 l5 -14 l5 14 l14 5 l-14 5 l-5 14 l-5 -14 l-14 -5z\"/><path d=\"M168 36 l4 -11 l4 11 l11 4 l-11 4 l-4 11 l-4 -11 l-11 -4z\"/><path d=\"M162 112 l3 -8 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3z\"/>\n</g>\n<g class=\"on-conf\"><rect x=\"22\" y=\"20\" width=\"9\" height=\"14\" rx=\"2\" fill=\"#5ec3ff\" transform=\"rotate(20 26 27)\"/><rect x=\"170\" y=\"24\" width=\"9\" height=\"14\" rx=\"2\" fill=\"#ff6b3d\" transform=\"rotate(-25 174 31)\"/><rect x=\"40\" y=\"6\" width=\"8\" height=\"12\" rx=\"2\" fill=\"#fff\" transform=\"rotate(40 44 12)\"/><rect x=\"150\" y=\"4\" width=\"8\" height=\"12\" rx=\"2\" fill=\"#2f6bff\" transform=\"rotate(-10 154 10)\"/><rect x=\"180\" y=\"70\" width=\"8\" height=\"12\" rx=\"2\" fill=\"#ffd23f\" transform=\"rotate(30 184 76)\"/></g>\n<text class=\"on-qmark\" x=\"150\" y=\"46\" font-size=\"44\" font-weight=\"900\" fill=\"#fff\" stroke=\"#0a1640\" stroke-width=\"3\" paint-order=\"stroke\" font-family=\"ui-rounded,system-ui,sans-serif\">?</text>\n<text class=\"on-bang\" x=\"152\" y=\"48\" font-size=\"48\" font-weight=\"900\" fill=\"#ff5d73\" stroke=\"#0a1640\" stroke-width=\"3\" paint-order=\"stroke\" font-family=\"ui-rounded,system-ui,sans-serif\">!</text>\n</svg>`;\n}\n\n/** Frases del pollito, por tipo de suceso. e = emoción que acompaña. */\nexport const LINES = {\n  start: [{ t: '¡Corre, corre, que te pío!', e: 'excited' }, { t: '¡Pío, pío! Que empiece el follón.', e: 'excited' }],\n  myTurn: [{ t: '¡Te toca! No me hagas esperar.', e: 'excited' }, { t: '¡Tu turno! Piensa bien... o no.', e: 'laughing' }, { t: '¡Corre que te pío! A por esos huevos.', e: 'warning' }],\n  steal: [{ t: '¡Pero qué acaba de pasar!', e: 'surprised' }, { t: 'Uy... creo que alguien tiene problemas.', e: 'surprised' }, { t: '¡Eso es un robo con alas!', e: 'laughing' }],\n  stolenFromMe: [{ t: '¡Ladrones! ¡Cacareo de alarma!', e: 'warning' }, { t: 'No te lo tomes a mal... ¡toma venganza!', e: 'warning' }],\n  sabotage: [{ t: '¡Pío, pío! Aquí nadie está a salvo.', e: 'laughing' }, { t: 'Qué carita de inocente... y qué jugada más sucia.', e: 'laughing' }, { t: 'Yo no he visto nada.', e: 'confused' }],\n  defense: [{ t: '¡Ni hablar! Portazo en toda la cresta.', e: 'excited' }, { t: '¡Eso ha sido una jugada maestra!', e: 'excited' }],\n  power: [{ t: '¡Eso ha sido una jugada maestra!', e: 'excited' }, { t: '¡Madre mía, qué barbaridad!', e: 'surprised' }],\n  fizzle: [{ t: 'No me mires a mí, yo no he sido.', e: 'confused' }, { t: 'Pues eso no ha servido de mucho, ¿no?', e: 'laughing' }],\n  egg: [{ t: '¡Qué huevo más bonito!', e: 'excited' }, { t: '¡Huevo a la vista!', e: 'excited' }],\n  eggLost: [{ t: 'Pobre huevito... se ha ido a la sartén.', e: 'sad' }, { t: 'Eso va a doler en el nido.', e: 'sad' }],\n  mod: [{ t: '¡Esto cambia las reglas del corral!', e: 'surprised' }],\n  betrayal: [{ t: '¡Traición! Qué feo, qué feo...', e: 'surprised' }],\n  skip: [{ t: 'Uy, a este le toca mirar.', e: 'laughing' }],\n  win: [{ t: '¡Campeón del corral! ¡Pío, pío, pío!', e: 'victory' }],\n  lose: [{ t: 'Otra vez será... ¡la próxima te pillo yo!', e: 'sad' }],\n  react: [{ t: '¡Reacciona rápido, que se te escapa!', e: 'warning' }],\n  chaos: [{ t: '¡Y ahora, el caos!', e: 'excited' }],\n};\n\nexport const mascot = {\n  host: null, svg: null, bubble: null, tm: 0, bt: 0, lastAt: 0, lastPrio: 0, enabled: true,\n  mount(el) {\n    this.host = el; el.innerHTML = chickSVG(); this.svg = el.querySelector('svg');\n    this.bubble = document.createElement('div'); this.bubble.className = 'bubble hidden'; el.appendChild(this.bubble);\n  },\n  emote(name, ms = 1800) {\n    if (!this.svg) return;\n    this.svg.setAttribute('class', `chick e-${name}`);\n    clearTimeout(this.tm);\n    if (name !== 'idle' && ms) this.tm = setTimeout(() => this.svg && this.svg.setAttribute('class', 'chick e-idle'), ms);\n  },\n  say(text, emotion = 'idle', { ms = 3800, prio = 1, sticky = false } = {}) {\n    if (!this.host || !this.enabled) return;\n    const now = Date.now();\n    if (!sticky && prio < this.lastPrio && now - this.lastAt < 1800) return;\n    if (!sticky && now - this.lastAt < 900 && prio <= this.lastPrio) return;\n    this.lastAt = now; this.lastPrio = prio;\n    this.emote(emotion, sticky ? 0 : Math.min(ms, 2600));\n    this.bubble.textContent = text; this.bubble.classList.remove('hidden', 'out');\n    this.bubble.style.animation = 'none'; void this.bubble.offsetWidth; this.bubble.style.animation = '';\n    clearTimeout(this.bt);\n    if (!sticky) this.bt = setTimeout(() => this.hide(), ms);\n  },\n  quip(kind, opts = {}) {\n    const arr = LINES[kind]; if (!arr) return;\n    const l = arr[Math.floor(Math.random() * arr.length)];\n    this.say(l.t, l.e, opts);\n  },\n  hide() {\n    if (!this.bubble) return;\n    this.bubble.classList.add('out'); this.lastPrio = 0;\n    setTimeout(() => this.bubble && this.bubble.classList.add('hidden'), 240);\n    if (this.svg) this.svg.setAttribute('class', 'chick e-idle');\n  },\n  setEnabled(v) { this.enabled = v; if (!v) { this.hide(); } },\n};\n","/js/store.js":"// Preferencias y datos locales del navegador (nada se envía a ningún servidor externo).\nconst K = 'cqtp.';\nexport const store = {\n  get(k, d) { try { const v = localStorage.getItem(K + k); return v == null ? d : JSON.parse(v); } catch (_) { return d; } },\n  set(k, v) { try { localStorage.setItem(K + k, JSON.stringify(v)); } catch (_) { /* modo privado */ } },\n  del(k) { try { localStorage.removeItem(K + k); } catch (_) { /* nada */ } },\n};\n\nexport const settings = Object.assign({ volume: 0.7, muted: false, reducedMotion: null, mascot: true }, store.get('settings', {}));\nexport const saveSettings = () => { store.set('settings', settings); applySettings(); };\nexport const motionOff = () => settings.reducedMotion === null\n  ? !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) : !!settings.reducedMotion;\nexport function applySettings() { document.documentElement.dataset.rm = motionOff() ? '1' : '0'; }\n","/js/table.js":"// La mesa: asientos dinámicos (2–10), mano en abanico, pila de reacciones y coreografía de animaciones.\nimport { DEFS, CATS, CAT_ORDER, MODS, makeCard, esc } from './cards-ui.js';\nimport { sfx } from './audio.js';\nimport { mascot } from './mascot.js';\nimport { motionOff } from './store.js';\n\nconst $ = (s, r = document) => r.querySelector(s);\nconst wait = ms => new Promise(r => setTimeout(r, ms));\nconst clamp = (v, a, b) => Math.max(a, Math.min(b, v));\nconst cardRect = (cx, cy, w) => ({ left: cx - w / 2, top: cy - w * 0.7, width: w, height: w * 1.4 });\nconst center = r => ({ x: r.left + r.width / 2, y: r.top + r.height / 2 });\nconst CAT_SFX = { sabotaje: 'sabotage', defensa: 'defense', manipulacion: 'manip', estrategia: 'strategy', especial: 'special' };\nconst STATUS = [\n  ['ghost', '👻', 'Fantasma: nadie puede apuntarle'], ['skip', '💤', 'Perderá su próximo turno'], ['trap', '🕸️', 'Cepo: su próximo huevo se rompe'],\n  ['hideout', '🧺', 'Escondrijo: protege un huevo'], ['pact', '🤝', 'Pacto de plumas'], ['noSabotage', '🤐', 'Sin Sabotajes en su turno'],\n  ['noDraw', '🚫', 'No robará carta'], ['incubating', '🔥', 'Incubadora'],\n];\n\nexport function createTable(api) {\n  const E = {\n    table: $('#table'), center: $('#center'), seats: $('#seats'), hand: $('#hand'), meBar: $('#me-bar'), deck: $('#deck'), discard: $('#discard'), zone: $('#play-zone'),\n    react: $('#react-box'), mods: $('#mods'), dir: $('#dir'), banner: $('#banner'), preview: $('#preview'), endTurn: $('#end-turn'),\n    turn: $('#turn-label'), goal: $('#goal-chip b'), log: $('#log'), deckLabel: $('#deck-label'), discardLabel: $('#discard-label'),\n  };\n  let s = null, off = 0, sel = null, pick = null, chain = Promise.resolve(), pending = 0, lastPlay = null, seatKey = '', logKey = '', ticker = 0;\n  const me = () => api.me();\n  const meP = () => (s ? s.players.find(p => p.id === me()) : null);\n  const pl = id => (s ? s.players.find(p => p.id === id) : null);\n  const now = () => Date.now() + off;\n  const fast = () => motionOff() || pending > 26;\n\n  /* ───────── utilidades visuales ───────── */\n  const seatEl = id => (id === me() ? $('.me-chip .av', E.meBar) : $(`.seat[data-id=\"${id}\"] .av`, E.seats));\n  const seatPoint = id => { const e = seatEl(id); return e ? center(e.getBoundingClientRect()) : center(E.table.getBoundingClientRect()); };\n  const zoneRect = () => E.zone.getBoundingClientRect();\n  const deckPoint = () => center(E.deck.getBoundingClientRect());\n  const discardPoint = () => center(E.discard.getBoundingClientRect());\n\n  function fly(from, to, node, { dur = 520, delay = 0, rot = 0, arc = 40 } = {}) {\n    if (fast()) return Promise.resolve();\n    const el = document.createElement('div'); el.className = 'fly';\n    Object.assign(el.style, { left: from.left + 'px', top: from.top + 'px', width: from.width + 'px', height: from.height + 'px' });\n    node.style.setProperty('--cw', from.width + 'px'); el.appendChild(node); document.body.appendChild(el);\n    const dx = to.left + to.width / 2 - (from.left + from.width / 2), dy = to.top + to.height / 2 - (from.top + from.height / 2), sc = to.width / from.width;\n    const a = el.animate([\n      { transform: 'translate(0,0) scale(1) rotate(0deg)' },\n      { transform: `translate(${dx * .5}px,${dy * .5 - arc}px) scale(${((1 + sc) / 2) * 1.12}) rotate(${rot / 2}deg)`, offset: .55 },\n      { transform: `translate(${dx}px,${dy}px) scale(${sc}) rotate(${rot}deg)` },\n    ], { duration: dur, delay, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' });\n    return a.finished.catch(() => {}).then(() => el.remove());\n  }\n  const mkfx = (cls, css) => { const n = document.createElement('div'); n.className = 'fx ' + cls; Object.assign(n.style, css); document.body.appendChild(n); return n; };\n  const runfx = (n, frames, opt) => n.animate(frames, opt).finished.catch(() => {}).then(() => n.remove());\n\n  /** Partículas distintas por categoría. */\n  function burst(x, y, cat) {\n    if (fast()) return;\n    if (cat === 'defensa') {\n      for (let i = 0; i < 2; i++) runfx(mkfx('ring', { left: x - 20 + 'px', top: y - 20 + 'px', width: '40px', height: '40px', borderColor: i ? '#fff' : '#9fd0ff' }),\n        [{ transform: 'scale(.3)', opacity: 1 }, { transform: 'scale(4.2)', opacity: 0 }], { duration: 650, delay: i * 120, easing: 'ease-out' });\n    } else if (cat === 'manipulacion') {\n      for (let i = 0; i < 16; i++) {\n        const a = (i / 16) * Math.PI * 2, r = 70 + (i % 3) * 14, n = mkfx('p', { left: x + 'px', top: y + 'px', background: i % 2 ? '#9fd0ff' : '#fff' });\n        runfx(n, [{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${Math.cos(a + 1.6) * r}px,${Math.sin(a + 1.6) * r}px) scale(.2)`, opacity: 0 }], { duration: 700, easing: 'cubic-bezier(.5,0,.8,.6)' });\n      }\n    } else if (cat === 'sabotaje') {\n      for (let i = 0; i < 18; i++) {\n        const a = Math.random() * Math.PI * 2, r = 50 + Math.random() * 90, n = mkfx('p', { left: x + 'px', top: y + 'px', background: ['#ff6b3d', '#ffb13d', '#fff3b0'][i % 3], width: '7px', height: '7px' });\n        runfx(n, [{ transform: 'translate(0,0)', opacity: 1 }, { transform: `translate(${Math.cos(a) * r}px,${Math.sin(a) * r + 20}px) scale(.3)`, opacity: 0 }], { duration: 520 + Math.random() * 200, easing: 'cubic-bezier(.1,.8,.3,1)' });\n      }\n    } else if (cat === 'estrategia') {\n      for (let i = 0; i < 14; i++) {\n        const n = mkfx('p', { left: x + (Math.random() - .5) * 90 + 'px', top: y + 'px', background: i % 2 ? '#ffd23f' : '#fff3b0', width: '8px', height: '8px', borderRadius: '2px' });\n        runfx(n, [{ transform: 'translateY(0) rotate(0) scale(1)', opacity: 1 }, { transform: `translateY(${-60 - Math.random() * 70}px) rotate(180deg) scale(.2)`, opacity: 0 }], { duration: 750, delay: Math.random() * 150, easing: 'ease-out' });\n      }\n    } else {\n      flash();\n      for (let i = 0; i < 26; i++) {\n        const a = Math.random() * Math.PI * 2, r = 70 + Math.random() * 150, n = mkfx('p', { left: x + 'px', top: y + 'px', background: ['#ffd23f', '#ff9bd0', '#7fd3ff', '#fff', '#b5f3c3'][i % 5], width: '9px', height: '13px', borderRadius: '2px' });\n        runfx(n, [{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: `translate(${Math.cos(a) * r}px,${Math.sin(a) * r + 50}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }], { duration: 900 + Math.random() * 300, easing: 'cubic-bezier(.1,.8,.3,1)' });\n      }\n    }\n  }\n  function flash() { if (fast()) return; const f = document.createElement('div'); f.className = 'flash'; document.body.appendChild(f); setTimeout(() => f.remove(), 600); }\n  function pop(text, x, y, cls = '') {\n    const n = document.createElement('div'); n.className = 'pop ' + cls; n.textContent = text; n.style.left = x + 'px'; n.style.top = y + 'px'; document.body.appendChild(n);\n    const frames = motionOff() ? [{ opacity: 1 }, { opacity: 0 }] : [{ transform: 'translate(-50%,-50%) scale(.4)', opacity: 0 }, { transform: 'translate(-50%,-90%) scale(1.15)', opacity: 1, offset: .22 }, { transform: 'translate(-50%,-190%) scale(1)', opacity: 0 }];\n    n.animate(frames, { duration: 1300, easing: 'ease-out' }).finished.catch(() => {}).then(() => n.remove());\n  }\n  function banner(html, cls = '', ms = 2000) {\n    E.banner.innerHTML = `<div class=\"bn ${cls}\">${html}</div>`;\n    clearTimeout(banner.t); banner.t = setTimeout(() => { E.banner.innerHTML = ''; }, ms);\n  }\n  const hit = id => { const e = id === me() ? $('.me-chip', E.meBar) : $(`.seat[data-id=\"${id}\"]`, E.seats); if (e && !fast()) { e.classList.remove('hit'); void e.offsetWidth; e.classList.add('hit'); } };\n\n  /* ───────── asientos ───────── */\n  const seatH = w => clamp(w * 0.5, 36, 58) + 54;\n  function layoutSeats() {\n    const ps = s.players, myI = ps.findIndex(p => p.id === me()), others = [];\n    for (let k = myI < 0 ? 0 : 1; k < ps.length; k++) others.push(ps[(Math.max(myI, 0) + k) % ps.length]);\n    const W = E.table.clientWidth, H = E.table.clientHeight;\n    const key = others.map(p => p.id).join(',') + '|' + W + 'x' + H;\n    const known = new Set(others.map(p => p.id));\n    for (const n of [...E.seats.children]) if (!known.has(n.dataset.id)) n.remove();\n    const m = others.length; if (!m) return;\n    if (key !== seatKey) {\n      seatKey = key;\n      const narrow = W < 640; E.table.classList.toggle('narrow', narrow);\n      let pts = [], sw;\n      if (narrow) {\n        // Pantallas estrechas: los rivales en filas ordenadas sobre el centro (una elipse no cabe).\n        const rows = m <= 5 ? 1 : 2, cols = Math.ceil(m / rows);\n        sw = clamp(Math.floor((W - 8) / cols) - 4, 56, 104);\n        const h = seatH(sw) + 4;\n        others.forEach((_, i) => {\n          const r = Math.floor(i / cols), inRow = r === rows - 1 ? m - cols * (rows - 1) : cols, c = i - r * cols;\n          pts.push({ x: W / 2 + (c - (inRow - 1) / 2) * (sw + 4), y: 6 + h / 2 + r * h });\n        });\n        const bottom = 6 + rows * h;\n        E.center.style.top = bottom + 18 + 64 + 'px'; E.mods.style.top = bottom + 2 + 'px';\n      } else {\n        // Elipse con asientos a distancias iguales (longitud de arco) y el mayor tamaño que no solape.\n        E.center.style.top = ''; E.mods.style.top = '';\n        const ex = m >= 7 ? 22 : m >= 5 ? 12 : 0, spread = Math.min(80 + ex, 40 * (m - 1)), cy = H * 0.5, ry = H * 0.4;\n        for (sw = 114; sw >= 54; sw -= 4) {\n          const rx = W / 2 - sw / 2 - 6, N = 240, a0 = 270 - spread, a1 = 270 + spread, smp = [];\n          let L = 0;\n          for (let k = 0; k <= N; k++) {\n            const t = (a0 + ((a1 - a0) * k) / N) * Math.PI / 180, x = W / 2 + rx * Math.cos(t), y = cy + ry * Math.sin(t);\n            if (k) L += Math.hypot(x - smp[k - 1].x, y - smp[k - 1].y);\n            smp.push({ x, y, L });\n          }\n          pts = others.map((_, i) => { const want = m === 1 ? L / 2 : (L * i) / (m - 1); let k = 0; while (k < N && smp[k].L < want) k++; return smp[k]; });\n          let clash = false;\n          for (let i = 0; i < m && !clash; i++) for (let j = i + 1; j < m; j++) if (Math.abs(pts[i].x - pts[j].x) < sw + 4 && Math.abs(pts[i].y - pts[j].y) < seatH(sw) + 2) { clash = true; break; }\n          if (!clash) break;\n        }\n        sw = Math.max(sw, 54);\n      }\n      E.table.style.setProperty('--seatw', sw + 'px');\n      others.forEach((p, i) => { const e = ensureSeat(p); e.style.left = pts[i].x + 'px'; e.style.top = pts[i].y + 'px'; });\n    }\n    others.forEach(p => updateSeat(ensureSeat(p), p));\n  }\n  function ensureSeat(p) {\n    let e = $(`.seat[data-id=\"${p.id}\"]`, E.seats);\n    if (!e) {\n      e = document.createElement('div'); e.className = 'seat'; e.dataset.id = p.id;\n      e.innerHTML = '<div class=\"av\"><span class=\"emo\"></span><span class=\"hc\"></span></div><div class=\"nm\"></div><div class=\"nest\"></div><div class=\"st\"></div>';\n      e.addEventListener('click', () => onSeat(p.id)); E.seats.appendChild(e);\n    }\n    return e;\n  }\n  function nestHTML(eggs) { let h = ''; for (let i = 0; i < s.target; i++) h += `<i class=\"${i < eggs ? 'on' : ''}\"></i>`; return h; }\n  function statusText(p) {\n    return STATUS.map(([k, ic, t]) => { const v = p[k]; if (!v) return ''; return `<span title=\"${esc(t)}\">${ic}${k === 'incubating' && v > 1 ? v : ''}</span>`; }).join('') + (!p.connected && !p.gone ? '<span title=\"Desconectado\">🔌</span>' : '');\n  }\n  function updateSeat(e, p) {\n    e.querySelector('.emo').textContent = p.avatar; e.querySelector('.hc').textContent = p.handCount; e.querySelector('.nm').textContent = p.name;\n    const nest = e.querySelector('.nest'), want = nestHTML(p.eggs); if (nest.dataset.k !== want) { nest.innerHTML = want; nest.dataset.k = want; }\n    e.querySelector('.st').innerHTML = statusText(p);\n    e.classList.toggle('turn', s.turn === p.id && s.phase !== 'ended'); e.classList.toggle('away', !p.connected && !p.gone); e.classList.toggle('gone', p.gone);\n    e.classList.toggle('pickable', !!pick && pickable(p)); e.title = `${p.name}: ${p.eggs} huevos, ${p.handCount} cartas`;\n  }\n  const pickable = p => p.id !== me() && !p.gone && !p.ghost;\n\n  function renderMeBar() {\n    const p = meP(); if (!p) { E.meBar.innerHTML = ''; return; }\n    let chip = $('.me-chip', E.meBar);\n    if (!chip) {\n      E.meBar.innerHTML = '<div class=\"me-chip\"><div class=\"av\"></div><div><div class=\"nmx\"></div><div class=\"nest\"></div></div><div class=\"st\"></div></div><div id=\"acts\" title=\"Acciones que te quedan este turno\"></div>';\n      chip = $('.me-chip', E.meBar);\n    }\n    $('.av', chip).textContent = p.avatar; $('.nmx', chip).textContent = p.name + ' (tú)';\n    $('.nest', chip).innerHTML = nestHTML(p.eggs); $('.st', chip).innerHTML = statusText(p);\n    chip.classList.toggle('turn', s.turn === p.id && s.phase !== 'ended');\n    const acts = $('#acts', E.meBar), mine = s.turn === p.id && s.phase !== 'ended' && s.phase !== 'intro';\n    acts.classList.toggle('hidden', !mine);\n    if (mine) { let h = '<span>Acciones</span>'; const total = Math.max(s.actions, 2); for (let i = 0; i < total; i++) h += `<i class=\"${i < s.actions ? '' : 'off'}\"></i>`; acts.innerHTML = h; }\n  }\n\n  /* ───────── centro ───────── */\n  function renderCenter() {\n    E.deckLabel.textContent = `Mazo · ${s.deckCount}`; E.discardLabel.textContent = `Descarte · ${s.discardCount}`;\n    const lbl = E.discard.querySelector('.card'); if (lbl) lbl.remove();\n    if (s.discardTop) { const c = makeCard(s.discardTop, { mini: true }); c.style.position = 'absolute'; c.style.inset = '0'; E.discard.insertBefore(c, E.discardLabel); }\n    // pila de jugadas en curso\n    const have = new Map([...E.zone.querySelectorAll('.card')].map(c => [c.dataset.eid, c]));\n    s.stack.forEach((en, i) => {\n      let c = have.get(String(en.eid));\n      if (!c) { c = makeCard(en.id, { mini: true }); c.dataset.eid = en.eid; c.dataset.hold = '1'; c.style.visibility = 'hidden'; setTimeout(() => { c.style.visibility = ''; }, 1400); E.zone.appendChild(c); }\n      have.delete(String(en.eid));\n      c.style.transform = `translate(calc(-50% + ${i * 26}px), ${i * 5}px) rotate(${(i - (s.stack.length - 1) / 2) * 5}deg)`; c.style.zIndex = i + 1;\n      c.classList.toggle('reaction', !!en.reaction);\n    });\n    have.forEach(c => c.remove());\n    const top = s.stack[s.stack.length - 1];\n    let tag = E.zone.querySelector('.pz-tag');\n    if (top) { if (!tag) { tag = document.createElement('div'); tag.className = 'pz-tag'; E.zone.appendChild(tag); } const by = pl(top.by), tg = top.target ? pl(top.target) : null; tag.textContent = `${by ? by.name : '?'}${tg ? ' → ' + tg.name : ''}`; } else if (tag) tag.remove();\n    E.mods.innerHTML = Object.keys(s.mods).map(k => `<span class=\"mod\">${esc(MODS[k] || k)}</span>`).join('');\n    const arrow = s.dir === 1 ? '↻' : '↺'; if (E.dir.textContent !== arrow) { E.dir.textContent = arrow; }\n    renderReactBox();\n  }\n  function renderReactBox() {\n    const r = s.reaction;\n    if (!r || s.phase !== 'reaction') { E.react.classList.add('hidden'); E.react.innerHTML = ''; return; }\n    const top = s.stack[s.stack.length - 1], d = top ? DEFS[top.id] : null;\n    let msg;\n    if (r.mine && !r.passed) msg = '<b>¡Puedes reaccionar!</b> Elige una carta de Defensa';\n    else if (r.passed) msg = 'Has pasado. Esperando…';\n    else msg = 'Esperando reacciones…';\n    E.react.classList.remove('hidden');\n    E.react.innerHTML = `<div class=\"ring\"><span>${msg}</span><span class=\"cd\">·</span>${r.mine && !r.passed ? '<button class=\"btn small\" id=\"btn-pass\">Paso</button>' : ''}</div>`;\n    const b = $('#btn-pass', E.react); if (b) b.onclick = () => { api.send('game:pass').then(() => {}); };\n    updateCountdown();\n  }\n  function updateCountdown() {\n    const cd = $('.cd', E.react); if (!cd || !s || !s.reaction) return;\n    const left = Math.max(0, Math.ceil((s.deadline - now()) / 1000)); const prev = cd.textContent; cd.textContent = left;\n    if (s.reaction.mine && !s.reaction.passed && left <= 3 && prev !== String(left) && left > 0) sfx('tick');\n  }\n\n  /* ───────── mano ───────── */\n  const catIdx = id => CAT_ORDER.indexOf((DEFS[id] || {}).cat);\n  function renderHand() {\n    const hand = [...s.hand].sort((a, b) => catIdx(a.id) - catIdx(b.id) || a.id.localeCompare(b.id) || a.uid - b.uid);\n    const have = new Map([...E.hand.children].map(c => [c.dataset.uid, c]));\n    hand.forEach((c, i) => {\n      let el = have.get(String(c.uid));\n      if (!el) { el = makeCard(c.id, { uid: c.uid, mini: true }); el.setAttribute('role', 'listitem'); el.tabIndex = 0; el.classList.add('deal-in'); el.style.animationDelay = i * 70 + 'ms'; bindCard(el); }\n      have.delete(String(c.uid));\n      if (E.hand.children[i] !== el) E.hand.insertBefore(el, E.hand.children[i] || null);\n    });\n    have.forEach(c => c.remove());\n    const n = hand.length;\n    const cw = n ? parseFloat(getComputedStyle(E.hand.children[0]).width) : 100, avail = E.hand.clientWidth - 44;\n    const ov = n > 1 ? Math.max(n > 5 ? cw * .08 : 0, (n * cw - avail) / (n - 1)) : 0, step = Math.min(4.2, 24 / Math.max(n, 1));\n    [...E.hand.children].forEach((el, i) => {\n      const o = i - (n - 1) / 2;\n      el.style.setProperty('--ov', ov + 'px'); el.style.setProperty('--rot', o * step + 'deg'); el.style.setProperty('--lift', Math.abs(o) ** 2 * 1.3 + 'px'); el.style.zIndex = i + 1;\n      const id = el.dataset.id, d = DEFS[id], why = whyNot(d), ok = !why;\n      el.classList.toggle('dim', !ok); el.classList.toggle('playable', ok);\n      el.classList.toggle('react-ok', ok && d.timing === 'react'); el.classList.toggle('sel', sel === Number(el.dataset.uid));\n    });\n    if (sel != null && !s.hand.some(c => c.uid === sel)) clearSel();\n  }\n  function bindCard(el) {\n    const uid = () => Number(el.dataset.uid);\n    el.addEventListener('click', () => { sfx('select'); if (sel === uid()) { clearSel(); } else { sel = uid(); pick = null; renderHand(); renderPreview(); } });\n    el.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); el.click(); } });\n    el.addEventListener('dblclick', () => { sel = uid(); doPlay(); });\n  }\n  function whyNot(d) {\n    if (!s || !meP()) return 'No estás en la partida.';\n    const mine = s.turn === me();\n    if (s.phase === 'ended') return 'La partida ha terminado.';\n    if (s.phase === 'intro') return 'La partida aún no ha empezado.';\n    if (d.timing === 'react') {\n      if (s.phase === 'reaction' && s.reaction && s.reaction.mine && !s.reaction.passed) return null;\n      if (s.phase === 'reaction') return 'Ahora no puedes reaccionar (o ya has pasado).';\n      return 'Es una reacción: guárdala para cuando alguien juegue algo.';\n    }\n    if (s.phase === 'reaction') return 'Hay una jugada en marcha: espera a que se resuelva.';\n    if (!mine) return 'Aún no es tu turno.';\n    if (s.actions < 1) return 'No te quedan acciones: termina el turno.';\n    if (d.cat === 'sabotaje' && meP().noSabotage) return 'La mordaza te impide jugar Sabotajes este turno.';\n    return null;\n  }\n  function clearSel() { sel = null; pick = null; renderPreview(); if (s) { renderHand(); [...E.seats.children].forEach(e => updateSeat(e, pl(e.dataset.id))); } }\n\n  /* ───────── vista previa y acción ───────── */\n  function renderPreview() {\n    const c = s && sel != null ? s.hand.find(h => h.uid === sel) : null;\n    if (!c) { E.preview.classList.add('hidden'); E.preview.innerHTML = ''; return; }\n    const d = DEFS[c.id], why = whyNot(d), react = d.timing === 'react';\n    E.preview.classList.remove('hidden'); E.preview.innerHTML = '';\n    const big = makeCard(c.id, { cw: 128 }); E.preview.appendChild(big);\n    const box = document.createElement('div');\n    let hint = pick ? '👆 Toca al jugador que será el objetivo.' : (why ? why : (d.target === 'enemy' ? 'Al jugarla elegirás un objetivo.' : d.target === 'leader' ? 'Apunta sola al jugador con más huevos.' : d.target === 'revenge' ? 'Apunta sola a quien te atacó por última vez.' : ''));\n    box.innerHTML = `<h3>${d.icon} ${esc(d.name)}</h3><p>${esc(d.desc)}</p><div class=\"why\">${esc(hint)}</div><div class=\"row\"></div>`;\n    const row = $('.row', box);\n    const go = document.createElement('button'); go.className = 'btn primary small'; go.textContent = react ? 'Reaccionar' : 'Jugar'; go.disabled = !!why || !!pick; go.onclick = doPlay; row.appendChild(go);\n    const cancel = document.createElement('button'); cancel.className = 'btn small'; cancel.textContent = pick ? 'Cambiar de carta' : 'Cerrar'; cancel.onclick = clearSel; row.appendChild(cancel);\n    E.preview.appendChild(box);\n    if (!why && !pick && matchMedia('(hover:hover)').matches) setTimeout(() => go.focus({ preventScroll: true }), 0);\n  }\n  function doPlay() {\n    const c = s && s.hand.find(h => h.uid === sel); if (!c) return;\n    const d = DEFS[c.id], why = whyNot(d); if (why) { api.toast(why, 'bad'); return; }\n    if (d.target === 'enemy') {\n      if (!s.players.some(pickable)) { api.toast('No hay ningún jugador al que puedas apuntar ahora mismo.', 'bad'); return; }\n      pick = { uid: c.uid, reaction: d.timing === 'react' }; renderPreview(); [...E.seats.children].forEach(e => updateSeat(e, pl(e.dataset.id))); return;\n    }\n    send(c.uid, d.timing === 'react', null);\n  }\n  function onSeat(id) {\n    if (!pick) return; const p = pl(id); if (!p || !pickable(p)) { api.toast(p && p.ghost ? `${p.name} es un fantasma: no se le puede apuntar.` : 'Elige a otro jugador.', 'bad'); return; }\n    send(pick.uid, pick.reaction, id);\n  }\n  function send(uid, reaction, target) {\n    const el = E.hand.querySelector(`[data-uid=\"${uid}\"]`);\n    if (el) lastPlay = { t: Date.now(), rect: el.getBoundingClientRect(), uid };\n    sel = null; pick = null; renderPreview();\n    api.send(reaction ? 'game:react' : 'game:play', { uid, target }).then(r => { if (r && !r.ok && r.error) { api.toast(r.error, 'bad'); lastPlay = null; } });\n  }\n  E.endTurn.onclick = () => { sfx('select'); api.send('game:end').then(r => { if (r && !r.ok && r.error) api.toast(r.error, 'bad'); }); };\n  document.addEventListener('keydown', e => { if (e.key === 'Escape' && sel != null) clearSel(); });\n\n  /* ───────── HUD, registro ───────── */\n  function renderHud() {\n    const cur = s.turn ? pl(s.turn) : null, mine = s.turn === me();\n    let t = 'Preparando la partida…';\n    if (s.phase === 'ended') t = 'Fin de la partida';\n    else if (s.phase === 'reaction') t = 'Reacciones en juego…';\n    else if (cur) t = mine ? '¡Es tu turno!' : `Turno de ${cur.name}`;\n    E.turn.textContent = t; E.turn.classList.toggle('mine', mine && s.phase !== 'ended');\n    E.goal.textContent = s.target;\n    const canEnd = mine && s.phase === 'play';\n    E.endTurn.classList.toggle('hidden', !canEnd); E.endTurn.classList.toggle('nudge', canEnd && s.actions < 1);\n    const k = s.log.join('\\n'); if (k !== logKey) { logKey = k; E.log.innerHTML = s.log.map(l => `<div>${esc(l)}</div>`).join(''); E.log.scrollTop = E.log.scrollHeight; }\n  }\n\n  /* ───────── actualización principal ───────── */\n  function update(state, events = []) {\n    s = state; off = state.now - Date.now();\n    layoutSeats(); renderMeBar(); renderCenter(); renderHand(); renderHud(); renderPreview();\n    clearInterval(ticker); if (s.phase === 'reaction') ticker = setInterval(updateCountdown, 250);\n    if (events.length) { pending += events.length; chain = chain.then(() => runEvents(events)); }\n  }\n  async function runEvents(evs) {\n    for (const e of evs) { try { await handle(e); } catch (err) { console.warn('evento', e.type, err); } pending = Math.max(0, pending - 1); }\n  }\n\n  /* ───────── coreografía de eventos ───────── */\n  async function handle(e) {\n    const W = ms => (fast() ? Promise.resolve() : wait(ms));\n    switch (e.type) {\n      case 'start': sfx('chick'); mascot.quip('start', { prio: 3 }); break;\n      case 'turn':\n        if (e.pid === me()) { sfx('notify'); banner('¡Tu turno!', '', 1100); mascot.quip('myTurn'); await W(300); }\n        break;\n      case 'play': {\n        const d = DEFS[e.card]; if (!d) break;\n        const mineLocal = e.pid === me() && lastPlay && Date.now() - lastPlay.t < 5000;\n        const from = mineLocal ? lastPlay.rect : cardRect(...Object.values(seatPoint(e.pid)), 58);\n        const zc = E.zone.querySelector(`[data-eid=\"${e.eid}\"]`), to = zc ? zc.getBoundingClientRect() : zoneRect();\n        sfx('select');\n        await fly(from, to, makeCard(e.card, { mini: true }), { dur: 480, rot: (Math.random() - .5) * 14 });\n        if (zc) { zc.style.visibility = ''; zc.dataset.hold = ''; }\n        const c = center(to); sfx(CAT_SFX[d.cat] || 'play'); burst(c.x, c.y, d.cat);\n        if (d.cat === 'especial') banner(`${d.icon} ${esc(d.name)}`, '', 1500);\n        if (e.target) hit(e.target);\n        if (d.hostile && e.target === me() && e.pid !== me()) mascot.quip('stolenFromMe', { prio: 3 });\n        else if (d.cat === 'sabotaje') mascot.quip('sabotage');\n        else if (d.cat === 'defensa') mascot.quip('defense');\n        else if (d.cat === 'especial') mascot.quip('power', { prio: 2 });\n        await W(260); break;\n      }\n      case 'draw': {\n        sfx('draw');\n        if (e.pid !== me()) { const dp = deckPoint(), sp = seatPoint(e.pid); for (let k = 0; k < Math.min(e.n, 3); k++) { fly(cardRect(dp.x, dp.y, 50), cardRect(sp.x, sp.y, 34), makeCard('huevo_fresco', { flipped: true, mini: true }), { dur: 420, delay: k * 110, rot: 12 }); } await W(140); }\n        break;\n      }\n      case 'discard': {\n        const sp = seatPoint(e.pid), dp = discardPoint(); sfx('play');\n        e.cards.forEach((id, k) => fly(cardRect(sp.x, sp.y, 40), cardRect(dp.x, dp.y, 60), makeCard(id, { mini: true }), { dur: 480, delay: k * 130, rot: -10 }));\n        hit(e.pid); await W(300 + e.cards.length * 100); break;\n      }\n      case 'steal': {\n        const a = seatPoint(e.from), b = seatPoint(e.to); sfx('steal'); hit(e.from);\n        const node = e.kind === 'egg' ? (() => { const d = document.createElement('div'); d.textContent = '🥚'; d.style.cssText = 'font-size:34px;line-height:48px;text-align:center'; return d; })() : makeCard('huevo_fresco', { flipped: true, mini: true });\n        await fly(cardRect(a.x, a.y, e.kind === 'egg' ? 30 : 38), cardRect(b.x, b.y, e.kind === 'egg' ? 30 : 38), node, { dur: 560, arc: 70, rot: 25 });\n        if (e.to !== me() && e.from === me()) mascot.quip('stolenFromMe', { prio: 3 }); else mascot.quip('steal', { prio: 2 });\n        break;\n      }\n      case 'egg': {\n        const p = seatPoint(e.pid);\n        if (e.delta > 0) { pop(`+${e.delta} 🥚`, p.x, p.y - 20); sfx('egg'); if (e.pid === me() && Math.random() < .5) mascot.quip('egg'); await W(220); }\n        else if (e.delta < 0) { pop(`${e.delta} 🥚`, p.x, p.y - 20, 'neg'); sfx('eggLost'); hit(e.pid); if (e.pid === me()) mascot.quip('eggLost', { prio: 2 }); await W(220); }\n        else pop('⚖️', p.x, p.y - 20);\n        break;\n      }\n      case 'shuffle': sfx('shuffle'); E.deck.classList.remove('shuffle'); void E.deck.offsetWidth; E.deck.classList.add('shuffle'); await W(350); break;\n      case 'negate': { const c = center(zoneRect()); pop('¡CANCELADA!', c.x, c.y - 40, 'neg'); sfx('nope'); burst(c.x, c.y, 'defensa'); mascot.quip('defense', { prio: 2 }); await W(450); break; }\n      case 'bounce': { const c = center(zoneRect()); pop('↩️ ¡REBOTE!', c.x, c.y - 40); sfx('defense'); burst(c.x, c.y, 'defensa'); await W(450); break; }\n      case 'shield': { const p = seatPoint(e.pid); pop('🛡️', p.x, p.y - 10); sfx('defense'); burst(p.x, p.y, 'defensa'); break; }\n      case 'trap': { const p = seatPoint(e.pid); pop('💥 ¡Cepo!', p.x, p.y - 20, 'neg'); sfx('eggLost'); hit(e.pid); break; }\n      case 'skip': { const p = seatPoint(e.pid); pop('💤 pierde el turno', p.x, p.y - 30); mascot.quip('skip'); await W(250); break; }\n      case 'coin': { const p = seatPoint(e.pid); pop(e.cara ? '🪙 ¡Cara!' : '🪙 ¡Cruz!', p.x, p.y - 30); sfx('coin'); await W(500); break; }\n      case 'duel': banner('🥊 ¡Pelea de gallos!', 'coral', 1300); sfx('sabotage'); await W(500); break;\n      case 'betrayal': banner('¡TRAICIÓN!', 'coral', 1800); sfx('sabotage'); mascot.quip('betrayal', { prio: 3 }); await W(600); break;\n      case 'caos': banner(`🎰 ¡Caos!<small>${esc((DEFS[e.card] || {}).name || '')}</small>`, 'blue', 1800); sfx('special'); mascot.quip('chaos', { prio: 2 }); await W(700); break;\n      case 'mod': banner(`${esc(e.name)}`, 'blue', 2100); sfx('special'); flash(); mascot.quip('mod', { prio: 3 }); await W(500); break;\n      case 'modEnd': api.toast(`Termina: ${MODS[e.mod] || e.mod}`); break;\n      case 'dir': sfx('manip'); E.dir.style.transform = 'translateX(-50%) rotate(360deg) scale(1.6)'; setTimeout(() => { E.dir.style.transform = ''; }, 500); await W(200); break;\n      case 'rotate': case 'swap': { const c = center(E.table.getBoundingClientRect()); sfx('manip'); burst(c.x, c.y, 'manipulacion'); await W(300); break; }\n      case 'resolved': {\n        const dp = discardPoint(), zr = zoneRect(), z = center(zr);\n        e.cards.forEach((id, k) => fly(cardRect(z.x, z.y, 70), cardRect(dp.x, dp.y, 50), makeCard(id, { mini: true }), { dur: 420, delay: k * 90, arc: 20, rot: 14 }));\n        await W(180 + e.cards.length * 60); break;\n      }\n      case 'left': api.toast('Un jugador ha abandonado la partida.'); break;\n      case 'win': api.onWin(e.pid, !!e.abandon); break;\n      default: break;\n    }\n  }\n\n  window.addEventListener('resize', () => { if (s) { seatKey = ''; layoutSeats(); renderHand(); } });\n  return {\n    update, getEl: k => ({ hand: E.hand, deck: E.deck, discard: E.discard, play: E.zone.parentElement, me: E.meBar, seats: E.seats, goal: $('#goal-chip'), endTurn: E.endTurn, log: $('#side'), table: E.table, react: E.react, mods: E.mods }[k]),\n    reset() { s = null; seatKey = ''; logKey = ''; sel = null; pick = null; E.seats.innerHTML = ''; E.hand.innerHTML = ''; E.zone.innerHTML = ''; E.meBar.innerHTML = ''; E.banner.innerHTML = ''; E.preview.classList.add('hidden'); clearInterval(ticker); pending = 0; },\n    relayout() { if (s) { seatKey = ''; layoutSeats(); renderHand(); } },\n    state: () => s,\n  };\n}\n","/js/tutorial.js":"// Tutorial guiado por el pollito: burbujas animadas, foco sobre la interfaz real y cartas de ejemplo.\nimport { chickSVG } from './mascot.js';\nimport { makeCard, esc } from './cards-ui.js';\nimport { sfx } from './audio.js';\n\nconst STEPS = [\n  { key: 'me', emo: 'excited', title: 'El objetivo', pos: 'top',\n    text: (c) => `¡Pío, pío! Aquí gana quien llene antes su nido: <b>${c.target} huevos</b> (5 si sois hasta 5 jugadores, 6 si sois más). Este es tu nido. Los huevos se ponen con cartas de <b>Huevo</b>… y se pueden robar.` },\n  { key: 'me', emo: 'explaining', title: 'Cómo va un turno', pos: 'top',\n    text: () => 'Al empezar tu turno robas <b>1 carta</b> y tienes <b>2 acciones</b> (los rayos amarillos). Cada carta que juegas gasta 1. No hay reloj: piensa lo que quieras. Cuando no te queden acciones el turno acaba solo, o pulsa <b>«Terminar turno»</b> antes.' },\n  { key: 'hand', emo: 'explaining', title: 'Jugar una carta', pos: 'top',\n    text: () => 'Estas son tus cartas, solo las ves tú. <b>Toca una</b> para verla en grande y pulsa <b>«Jugar»</b> (o haz doble clic). Si necesita objetivo, te pedirá que toques al jugador al que apuntas.' },\n  { key: null, emo: 'explaining', title: 'Cinco tipos de cartas', pos: 'bottom', cards: ['huevo_fresco', 'zarpazo', 'trueque', 'nope', 'gallina_oro'],\n    text: () => '<b>Estrategia</b> (amarillo): huevos y cartas. <b>Sabotaje</b> (naranja): fastidiar a los demás. <b>Manipulación</b> (celeste): cambiar cartas, turnos y reglas. <b>Defensa</b> (azul): protegerte. <b>Especial</b> (brillante): locuras que lo cambian todo.' },\n  { key: 'seats', emo: 'laughing', title: 'Sabotaje', pos: 'bottom',\n    text: () => 'Con los <b>Sabotajes</b> apuntas a otro jugador: robar huevos o cartas, romper nidos, hacerle perder el turno… Alrededor de la mesa están tus rivales con sus huevos y su número de cartas. Ojo: ellos también te apuntarán a ti.' },\n  { key: 'play', emo: 'warning', title: 'Reacciones', pos: 'bottom', demo: 'reaction',\n    text: () => 'Cuando alguien juega una carta se abre una <b>ventana de unos segundos</b> y ¡todos pueden reaccionar, aunque no sea su turno! Una carta de Defensa puede <b>cancelarla</b>, <b>devolverla</b> a su autor, <b>desviarla</b> o <b>protegerte</b>. Pulsa «Paso» si no quieres reaccionar.' },\n  { key: 'play', emo: 'explaining', title: 'Cadenas y contraataques', pos: 'bottom', demo: 'reaction',\n    text: () => 'Las reacciones se encadenan: un <b>¡Ni Hablar!</b> puede cancelarse con otro ¡Ni Hablar!. Cuando nadie más reacciona, se resuelve todo de la última carta a la primera. El <b>Sello Dorado</b> es la única cancelación que no se puede cancelar.' },\n  { key: 'table', emo: 'surprised', title: 'Cartas que cambian la partida', pos: 'bottom',\n    text: () => 'Algunas cartas Especiales crean <b>efectos globales</b> durante una ronda (Luna Llena, Veda de Caza, Fiesta en el Corral, Silencio de Gallinero). Los verás arriba, en la mesa, mientras duren. También hay alianzas… y traiciones.' },\n  { key: 'goal', emo: 'victory', title: '¡Eso es todo!', pos: 'top', last: true,\n    text: (c) => `Llena tu nido con <b>${c.target} huevos</b> antes que nadie. Roba, defiéndete y… ¡corre que te pío! Puedes repasar las reglas con el botón 📖 y volver a ver este tutorial desde el menú o los ajustes.` },\n];\n\nexport function startTutorial({ table, context, onStep, onDone }) {\n  let i = 0, spot, root, chickHost, resizeH;\n  spot = document.createElement('div'); spot.id = 'spot';\n  root = document.createElement('div'); root.id = 'tut';\n  root.innerHTML = '<div class=\"tut-chick\"></div><div class=\"tut-card\" role=\"dialog\" aria-live=\"polite\"></div>';\n  chickHost = root.querySelector('.tut-chick');\n  document.body.append(spot, root);\n\n  const union = els => {\n    const rs = els.map(e => e.getBoundingClientRect()).filter(r => r.width > 0);\n    if (!rs.length) return null;\n    const l = Math.min(...rs.map(r => r.left)), t = Math.min(...rs.map(r => r.top)), rr = Math.max(...rs.map(r => r.right)), b = Math.max(...rs.map(r => r.bottom));\n    return { left: l, top: t, width: rr - l, height: b - t };\n  };\n  function place(step) {\n    let r = null;\n    if (step.key === 'seats') r = union([...table.getEl('seats').children]);\n    else if (step.key) { const e = table.getEl(step.key); if (e) r = union([e]); }\n    if (r) {\n      const pad = 10; Object.assign(spot.style, { left: r.left - pad + 'px', top: r.top - pad + 'px', width: r.width + pad * 2 + 'px', height: r.height + pad * 2 + 'px', opacity: 1 });\n    } else Object.assign(spot.style, { left: '50%', top: '50%', width: '0px', height: '0px', opacity: 1 });\n    spot.classList.toggle('none', !r);\n    root.classList.toggle('top', step.pos === 'top');\n  }\n  function show() {\n    const st = STEPS[i]; if (onStep) onStep(i, st);\n    chickHost.innerHTML = chickSVG('e-' + st.emo); chickHost.firstElementChild.setAttribute('class', 'chick e-' + st.emo);\n    const card = root.querySelector('.tut-card');\n    card.innerHTML = `<h4>${esc(st.title)}</h4><p>${st.text(context())}</p><div class=\"cardlist\"></div><div class=\"tut-foot\"><button class=\"btn small\" data-a=\"skip\">Saltar</button><div class=\"dots\">${STEPS.map((_, k) => `<i class=\"${k === i ? 'on' : ''}\"></i>`).join('')}</div><div style=\"display:flex;gap:6px\"><button class=\"btn small\" data-a=\"prev\" ${i === 0 ? 'disabled' : ''}>Atrás</button><button class=\"btn small primary\" data-a=\"next\">${st.last ? '¡A jugar!' : 'Siguiente'}</button></div></div>`;\n    const list = card.querySelector('.cardlist');\n    if (st.cards) st.cards.forEach(id => list.appendChild(makeCard(id, { mini: true })));\n    else list.remove();\n    card.querySelectorAll('button').forEach(b => b.onclick = () => act(b.dataset.a));\n    sfx('select'); requestAnimationFrame(() => place(st));\n  }\n  function act(a) {\n    if (a === 'next') { if (i === STEPS.length - 1) return end(true); i++; show(); }\n    else if (a === 'prev') { i = Math.max(0, i - 1); show(); }\n    else end(false);\n  }\n  function end(completed) {\n    window.removeEventListener('resize', resizeH); document.removeEventListener('keydown', keyH);\n    spot.remove(); root.remove(); onDone(completed);\n  }\n  const keyH = e => { if (e.key === 'ArrowRight') act('next'); else if (e.key === 'ArrowLeft') act('prev'); else if (e.key === 'Escape') act('skip'); };\n  resizeH = () => place(STEPS[i]);\n  window.addEventListener('resize', resizeH); document.addEventListener('keydown', keyH);\n  show();\n  return { stop: () => end(false) };\n}\n"};
const __nodeRequire = require;
const __cache = {};
const __defs = {
cards: function (module, exports, require) {
'use strict';
/**
 * CORRE QUE TE PÍO — colección de cartas (fuente única de verdad).
 * El servidor la usa para jugar y el cliente la descarga en /cards.json.
 */
const CAT = {
  estrategia:   { name: 'Estrategia',   color: '#ffc933' },
  sabotaje:     { name: 'Sabotaje',     color: '#ff6b3d' },
  manipulacion: { name: 'Manipulación', color: '#5ec3ff' },
  defensa:      { name: 'Defensa',      color: '#2f6bff' },
  especial:     { name: 'Especial',     color: '#f4f1ff' },
};

const LIST = [];
// c(id, nombre, categoría, icono, copias, objetivo, descripción, extras)
// objetivo: none | enemy (se elige jugador) | all | leader (el que va ganando) | revenge (quien te atacó)
function c(id, name, cat, icon, copies, target, desc, extra = {}) {
  const sinVentana = ['ojo_pollo', 'segunda', 'reciclaje'].includes(id);
  LIST.push(Object.assign({
    id, name, cat, icon, copies, target, desc,
    timing: 'turn',                                   // turn = en tu turno · react = como reacción
    window: cat !== 'estrategia' && cat !== 'defensa' && !sinVentana,
    hostile: cat === 'sabotaje' || ['gran_zorro', 'impuestos', 'intercambio_nidos', 'trueque'].includes(id),
  }, extra));
}

// ── ESTRATEGIA ─────────────────────────────────────────────────────────────
c('huevo_fresco', 'Huevo Fresco', 'estrategia', '🥚', 12, 'none', 'Pon un huevo en tu nido: +1 huevo.');
c('huevo_oro', 'Huevo de Oro', 'estrategia', '🌟', 3, 'none', '+2 huevos. Pero te deja sin fuerzas: tu próximo robo se pierde.');
c('huevo_moteado', 'Huevo Moteado', 'estrategia', '🐣', 3, 'none', '+1 huevo. Si ya tenías 2 o más, robas además una carta.');
c('incubadora', 'Incubadora', 'estrategia', '🔥', 3, 'none', 'Al empezar tu próximo turno ganas +1 huevo. Se acumulan.');
c('gallina_clueca', 'Gallina Clueca', 'estrategia', '🐔', 4, 'none', 'Robas 2 cartas.');
c('maiz', 'Maíz a Puñados', 'estrategia', '🌽', 4, 'none', 'Robas 1 carta y ganas 1 acción extra este turno.');
c('cosecha', 'Cosecha de Maíz', 'estrategia', '🌾', 2, 'none', 'Robas 1 carta por cada huevo de tu nido (máximo 3).');
c('apuesta', 'Apuesta del Pollito', 'estrategia', '🎲', 3, 'none', 'Lanza la moneda. Cara: +2 huevos. Cruz: pierdes 1 huevo.');
c('gallinero_coop', 'Gallinero Cooperativo', 'estrategia', '🏡', 2, 'none', 'Todos robáis 1 carta, y tú robas 1 más. La generosidad tiene premio.');
c('remover', 'Remover el Gallinero', 'estrategia', '🌀', 2, 'none', 'Descarta toda tu mano y roba una carta más de las que tenías (mínimo 2).');
c('escondrijo', 'Escondrijo Secreto', 'estrategia', '🧺', 2, 'none', 'El próximo huevo que fueses a perder se salva. Dura hasta tu siguiente turno.');
c('pienso', 'Pienso Premium', 'estrategia', '🥣', 3, 'none', 'Tu próximo huevo vale +1 extra.');

// ── SABOTAJE ───────────────────────────────────────────────────────────────
c('zarpazo', 'Zarpazo del Zorro', 'sabotaje', '🦊', 3, 'enemy', 'Robas 1 huevo del nido de otro jugador.');
c('rapina', 'Rapiña', 'sabotaje', '🧤', 4, 'enemy', 'Robas 1 carta al azar de la mano de otro jugador.');
c('huevo_roto', 'Huevo Cascado', 'sabotaje', '💥', 3, 'enemy', 'Destruye 1 huevo del nido de otro jugador.');
c('picotazo', 'Picotazo Traidor', 'sabotaje', '🐤', 3, 'enemy', 'El objetivo descarta 1 carta al azar (2 si tiene 5 o más).');
c('cuarentena', 'Cuarentena', 'sabotaje', '🚧', 2, 'enemy', 'El objetivo se salta su próximo turno.');
c('mordaza', 'Mordaza de Paja', 'sabotaje', '🤐', 2, 'enemy', 'El objetivo no podrá jugar Sabotajes en su próximo turno.');
c('maldicion', 'Maldición del Gallo', 'sabotaje', '🐓', 2, 'enemy', 'El objetivo no roba carta al empezar su próximo turno.');
c('pulgas', 'Plaga de Pulgas', 'sabotaje', '🦟', 2, 'all', 'Todos los demás jugadores descartan 1 carta al azar.');
c('granizo', 'Tormenta de Granizo', 'sabotaje', '⛈️', 2, 'all', 'Cada jugador con 3 o más huevos (¡tú también!) pierde 1 huevo.');
c('pelea', 'Pelea de Gallos', 'sabotaje', '🥊', 3, 'enemy', 'Pulso al azar contra el objetivo. El ganador roba 1 huevo al perdedor (o 1 carta si no tiene).');
c('cazador', 'Cazador de Líderes', 'sabotaje', '🎯', 2, 'leader', 'Robas 1 huevo al jugador con más huevos (sin contarte a ti).');
c('susto', 'Susto Gordo', 'sabotaje', '😱', 3, 'enemy', 'El objetivo tendrá 1 acción menos en su próximo turno (mínimo 1).');
c('cepo', 'Cepo de Mazorcas', 'sabotaje', '🕸️', 2, 'enemy', 'El próximo huevo que ponga el objetivo se rompe sin dar nada.');
c('revancha', 'Revancha Pollil', 'sabotaje', '😤', 2, 'revenge', 'Robas 1 huevo (o 1 carta) a quien te atacó por última vez.');

// ── MANIPULACIÓN ───────────────────────────────────────────────────────────
c('cambio_sentido', 'Cambio de Sentido', 'manipulacion', '🔄', 2, 'none', 'Invierte el sentido de los turnos.');
c('salto_valla', 'Salto de Valla', 'manipulacion', '🏃', 2, 'none', 'El siguiente jugador pierde su turno.');
c('baile_sillas', 'Baile de Sillas', 'manipulacion', '💃', 2, 'all', 'Cada jugador pasa 1 carta al azar al siguiente jugador.');
c('trueque', 'Trueque Tramposo', 'manipulacion', '🔀', 3, 'enemy', 'Intercambias 1 carta al azar con el objetivo.');
c('ojo_pollo', 'Ojo de Pollo', 'manipulacion', '👁️', 3, 'none', 'Mira en secreto las 3 primeras cartas del mazo.');
c('halcon', 'Mirada de Halcón', 'manipulacion', '🦅', 3, 'enemy', 'Mira en secreto la mano del objetivo.');
c('intercambio_nidos', 'Intercambio de Nidos', 'manipulacion', '⚖️', 1, 'enemy', 'Intercambias tu número de huevos con el del objetivo.');
c('remolino', 'Remolino', 'manipulacion', '🌪️', 1, 'all', 'Se juntan todas las manos, se mezclan y se reparten de nuevo (mismo número de cartas).');
c('silencio', 'Silencio de Gallinero', 'manipulacion', '🤫', 1, 'none', 'Durante una ronda nadie puede reaccionar a las jugadas.');
c('mercadillo', 'Mercadillo de Plumas', 'manipulacion', '🛍️', 2, 'all', 'Todos descartan 1 carta al azar y roban 1.');
c('reciclaje', 'Reciclaje de Corral', 'manipulacion', '♻️', 2, 'none', 'Mezcla el descarte con el mazo y roba 2 cartas.');
c('segunda', 'Segunda Oportunidad', 'manipulacion', '🎩', 2, 'none', 'Recoge la última carta del descarte.');

// ── DEFENSA ────────────────────────────────────────────────────────────────
c('nope', '¡Ni Hablar!', 'defensa', '✋', 5, 'none', 'Reacción. Cancela la última jugada. También sirve contra otro ¡Ni Hablar!.', { timing: 'react' });
c('escudo', 'Escudo de Paja', 'defensa', '🛡️', 4, 'none', 'Reacción. Anula el efecto de una jugada sobre ti. Los demás afectados lo sufren igual.', { timing: 'react' });
c('rebote', '¡Rebote!', 'defensa', '↩️', 3, 'none', 'Reacción. Si una jugada te apunta a ti, vuelve contra quien la lanzó.', { timing: 'react' });
c('desvio', 'Desvío', 'defensa', '🧭', 2, 'enemy', 'Reacción. Si una jugada te apunta a ti, eliges a otro jugador para que se la lleve.', { timing: 'react' });
c('contragolpe', 'Contragolpe', 'defensa', '🥋', 2, 'none', 'Reacción. Cancela una jugada que te afecta y roba 1 carta al azar a su autor.', { timing: 'react' });
c('seguro_nido', 'Seguro del Nido', 'defensa', '🔒', 3, 'none', 'Reacción. No pierdes huevos por la jugada que está en juego.', { timing: 'react' });
c('alarma', 'Cacareo de Alarma', 'defensa', '🚨', 2, 'none', 'Reacción. Cancela una jugada que te afecta y robas 1 carta.', { timing: 'react' });
c('fantasma', 'Pollito Fantasma', 'defensa', '👻', 2, 'none', 'En tu turno: nadie puede apuntarte con nada hasta tu próximo turno.');
c('reposicion', 'Reposición', 'defensa', '🩹', 2, 'none', 'En tu turno: recuperas hasta 2 huevos perdidos desde tu último turno. Si no perdiste ninguno, robas 1 carta.');
c('sello', 'Sello Dorado', 'defensa', '🏅', 1, 'none', 'Reacción. Cancela un ¡Ni Hablar!. Esta cancelación no se puede cancelar.', { timing: 'react' });

// ── ESPECIAL ───────────────────────────────────────────────────────────────
c('gallina_oro', 'Gallina de Oro', 'especial', '👑', 1, 'none', '+2 huevos y robas 1 carta.');
c('gran_zorro', 'El Gran Zorro', 'especial', '🐺', 1, 'all', 'Robas 1 huevo a cada jugador que tenga alguno.');
c('impuestos', 'Cobro de Impuestos', 'especial', '💰', 1, 'all', 'Todos los demás jugadores te dan 1 carta al azar.');
c('doble_turno', 'Reloj Roto', 'especial', '⏰', 2, 'none', 'Cuando acabes tu turno, juegas otro más.');
c('caos', 'Cacareo del Caos', 'especial', '🎰', 2, 'none', 'El destino elige un efecto y un jugador al azar. ¡Sin garantías!');
c('pacto', 'Pacto de Plumas', 'especial', '🤝', 2, 'enemy', 'Tú y el objetivo ganáis 1 huevo. Hasta tu próximo turno, quien ataque al otro lo traiciona y le roba una carta extra.');
c('luna_llena', 'Luna Llena', 'especial', '🌕', 1, 'none', 'Durante una ronda, todos los huevos que se pongan valen +1.');
c('veda', 'Veda de Caza', 'especial', '🚫', 1, 'none', 'Durante una ronda no se puede robar nada (ni huevos ni cartas).');
c('fiesta', 'Fiesta en el Corral', 'especial', '🎉', 1, 'none', 'Durante una ronda, todos tienen 1 acción extra en su turno.');
c('mercado_negro', 'Mercado Negro', 'especial', '🕶️', 1, 'none', 'Coge 2 cartas al azar del descarte.');

const CARDS = Object.fromEntries(LIST.map(d => [d.id, d]));

/** Mazo: cada carta con sus copias; hay un Huevo Fresco extra por jugador. */
function buildDeck(nPlayers) {
  const ids = [];
  for (const d of LIST) {
    const n = d.copies + (d.id === 'huevo_fresco' ? nPlayers : 0);
    for (let i = 0; i < n; i++) ids.push(d.id);
  }
  return ids;
}

const MODS = {
  luna: 'Luna Llena', veda: 'Veda de Caza', fiesta: 'Fiesta en el Corral', silencio: 'Silencio de Gallinero',
};

module.exports = { CAT, LIST, CARDS, MODS, buildDeck };

},
engine: function (module, exports, require) {
'use strict';
/**
 * CORRE QUE TE PÍO — motor de juego (autoritativo, sin dependencias).
 * El servidor es el único que baraja, reparte, valida y resuelve.
 * El cliente solo recibe una "vista" con SU mano; nunca la de los demás.
 */
const { CARDS, MODS, buildDeck } = require('./cards');

const rnd = n => Math.floor(Math.random() * n);
const pick = a => a[rnd(a.length)];
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const err = error => ({ ok: false, error });
const OK = { ok: true };

// Tiempos (ms)
// Solo temporizadores de MECÁNICA (no hay reloj de turno ni de ronda):
//  · REACT_*  ventana para reaccionar a una jugada (evita esperas infinitas)
//  · AUTO_END pequeña pausa para cerrar el turno cuando ya no quedan acciones
//  · AWAY     se pasa el turno de un jugador DESCONECTADO
//  · INTRO    margen para que todos terminen el tutorial antes de empezar
const T = { REACT_FIRST: 6500, REACT_CHAIN: 4500, REACT_EMPTY: 1700, INTRO: 150000, AWAY: 3000, AUTO_END: 1300 };

const freshStatus = () => ({
  skip: false, noDraw: 0, fewerActions: 0, noSabotage: false, ghost: false, hideout: false,
  incubating: 0, eggBonus: 0, trap: false, lostEggs: 0, lastAttacker: null, pactWith: null, pactHost: false,
});

/* ───────────────────────────── EFECTOS DE CARTA ───────────────────────────── */
// Cada efecto recibe (g = partida, e = entrada de la pila). e.by = jugador, e.target = objetivo.
function layEggs(g, e, base) {
  const p = e.by;
  if (p.st.trap) {
    p.st.trap = false;
    g.log(`¡El cepo revienta el huevo de ${p.name}!`); g.ev('trap', { pid: p.id });
    return 0;
  }
  const n = base + (g.mods.luna ? 1 : 0) + p.st.eggBonus;
  p.st.eggBonus = 0;
  g.addEggs(p, n);
  g.log(`${p.name} pone ${n} huevo${n > 1 ? 's' : ''}.`);
  return n;
}

const FX = {
  // Estrategia
  huevo_fresco: (g, e) => { layEggs(g, e, 1); },
  huevo_oro: (g, e) => { layEggs(g, e, 2); e.by.st.noDraw++; },
  huevo_moteado: (g, e) => { const antes = e.by.eggs; layEggs(g, e, 1); if (antes >= 2) g.draw(e.by, 1); },
  incubadora: (g, e) => { e.by.st.incubating++; g.log(`${e.by.name} pone una incubadora.`); },
  gallina_clueca: (g, e) => { g.draw(e.by, 2); },
  maiz: (g, e) => { g.draw(e.by, 1); g.actions++; },
  cosecha: (g, e) => { g.draw(e.by, Math.min(3, e.by.eggs)); },
  apuesta: (g, e) => {
    const cara = rnd(2) === 0;
    g.ev('coin', { pid: e.by.id, cara });
    if (cara) { g.addEggs(e.by, 2); g.log(`¡Cara! ${e.by.name} gana 2 huevos.`); }
    else { g.loseEggs(e.by, 1, e); g.log(`¡Cruz! ${e.by.name} pierde un huevo.`); }
  },
  gallinero_coop: (g, e) => { for (const p of g.alive()) g.draw(p, p === e.by ? 2 : 1); },
  remover: (g, e) => {
    const n = e.by.hand.length;
    while (e.by.hand.length) g.discard.push(e.by.hand.pop());
    g.draw(e.by, Math.max(2, n + 1));
  },
  escondrijo: (g, e) => { e.by.st.hideout = true; },
  pienso: (g, e) => { e.by.st.eggBonus = Math.min(3, e.by.st.eggBonus + 1); },

  // Sabotaje
  zarpazo: (g, e) => { if (g.hit(e, e.target)) g.stealEgg(e.target, e.by, e); },
  rapina: (g, e) => { if (g.hit(e, e.target)) g.stealCard(e.target, e.by); },
  huevo_roto: (g, e) => { if (g.hit(e, e.target)) { g.loseEggs(e.target, 1, e); g.log(`${e.target.name} sufre un huevo cascado.`); } },
  picotazo: (g, e) => { if (g.hit(e, e.target)) g.discardRandom(e.target, e.target.hand.length >= 5 ? 2 : 1); },
  cuarentena: (g, e) => { if (g.hit(e, e.target)) e.target.st.skip = true; },
  mordaza: (g, e) => { if (g.hit(e, e.target)) e.target.st.noSabotage = true; },
  maldicion: (g, e) => { if (g.hit(e, e.target)) e.target.st.noDraw++; },
  pulgas: (g, e) => { for (const t of g.others(e.by)) if (g.hit(e, t)) g.discardRandom(t, 1); },
  granizo: (g, e) => { for (const t of g.alive()) if (t.eggs >= 3 && g.hit(e, t, true)) g.loseEggs(t, 1, e); },
  pelea: (g, e) => {
    if (!g.hit(e, e.target)) return;
    const gana = rnd(2) === 0 ? e.by : e.target, pierde = gana === e.by ? e.target : e.by;
    g.ev('duel', { a: e.by.id, b: e.target.id, winner: gana.id });
    g.log(`${gana.name} gana la pelea de gallos.`);
    if (pierde.eggs > 0) g.stealEgg(pierde, gana, e); else g.stealCard(pierde, gana);
  },
  cazador: (g, e) => { if (g.hit(e, e.target)) g.stealEgg(e.target, e.by, e); },
  susto: (g, e) => { if (g.hit(e, e.target)) e.target.st.fewerActions++; },
  cepo: (g, e) => { if (g.hit(e, e.target)) e.target.st.trap = true; },
  revancha: (g, e) => {
    if (!g.hit(e, e.target)) return;
    if (e.target.eggs > 0) g.stealEgg(e.target, e.by, e); else g.stealCard(e.target, e.by);
  },

  // Manipulación
  cambio_sentido: (g) => { g.dir *= -1; g.ev('dir', { dir: g.dir }); },
  salto_valla: (g, e) => { const n = g.nextPlayer(e.by); if (n && n !== e.by) { n.st.skip = true; g.log(`${n.name} perderá su turno.`); } },
  baile_sillas: (g, e) => {
    const ps = g.alive().filter(p => g.hit(e, p, true));
    if (ps.length < 2) return;
    const out = ps.map(p => p.hand.length ? p.hand.splice(rnd(p.hand.length), 1)[0] : null);
    ps.forEach((p, i) => { const c = out[(i - 1 + ps.length) % ps.length]; if (c) p.hand.push(c); });
    g.ev('rotate', {});
  },
  trueque: (g, e) => {
    if (!g.hit(e, e.target)) return;
    const a = e.by.hand, b = e.target.hand;
    const ca = a.length ? a.splice(rnd(a.length), 1)[0] : null;
    const cb = b.length ? b.splice(rnd(b.length), 1)[0] : null;
    if (cb) a.push(cb); if (ca) b.push(ca);
    g.ev('swap', { a: e.by.id, b: e.target.id });
  },
  ojo_pollo: (g, e) => { g.priv.push({ pid: e.by.id, type: 'peek', title: 'Las 3 primeras cartas del mazo', cards: g.deck.slice(-3).reverse().map(c => c.id) }); },
  halcon: (g, e) => {
    if (!g.hit(e, e.target)) return;
    g.priv.push({ pid: e.by.id, type: 'peek', title: `La mano de ${e.target.name}`, cards: e.target.hand.map(c => c.id) });
  },
  intercambio_nidos: (g, e) => {
    if (!g.hit(e, e.target)) return;
    [e.by.eggs, e.target.eggs] = [e.target.eggs, e.by.eggs];
    g.ev('egg', { pid: e.by.id, delta: 0 }); g.ev('egg', { pid: e.target.id, delta: 0 });
  },
  remolino: (g, e) => {
    const ps = g.alive().filter(p => g.hit(e, p, true));
    const sizes = ps.map(p => p.hand.length);
    const pool = shuffle([].concat(...ps.map(p => p.hand.splice(0))));
    ps.forEach((p, i) => { p.hand.push(...pool.splice(0, sizes[i])); });
    g.ev('shuffle', { hands: true });
  },
  silencio: (g) => { g.setMod('silencio'); },
  mercadillo: (g, e) => { for (const t of g.alive()) if (g.hit(e, t, true)) { g.discardRandom(t, 1); g.draw(t, 1); } },
  reciclaje: (g, e) => { g.deck = shuffle(g.deck.concat(g.discard.splice(0))); g.ev('shuffle', {}); g.draw(e.by, 2); },
  segunda: (g, e) => { const c = g.discard.pop(); if (c) e.by.hand.push(c); },

  // Defensa (en turno)
  fantasma: (g, e) => { e.by.st.ghost = true; },
  reposicion: (g, e) => {
    const n = Math.min(2, e.by.st.lostEggs);
    if (n > 0) { e.by.st.lostEggs -= n; g.addEggs(e.by, n); g.log(`${e.by.name} recupera ${n} huevo${n > 1 ? 's' : ''}.`); } else g.draw(e.by, 1);
  },

  // Especial
  gallina_oro: (g, e) => { layEggs(g, e, 2); g.draw(e.by, 1); },
  gran_zorro: (g, e) => { for (const t of g.others(e.by)) if (t.eggs > 0 && g.hit(e, t)) g.stealEgg(t, e.by, e); },
  impuestos: (g, e) => { for (const t of g.others(e.by)) if (g.hit(e, t)) g.stealCard(t, e.by); },
  doble_turno: (g, e) => { g.extraTurn = true; g.log(`${e.by.name} jugará otro turno.`); },
  caos: (g, e) => {
    const pool = ['zarpazo', 'rapina', 'huevo_roto', 'picotazo', 'cuarentena', 'pulgas', 'granizo', 'pelea', 'trueque', 'baile_sillas',
      'cambio_sentido', 'mercadillo', 'gallina_clueca', 'maiz', 'salto_valla', 'impuestos', 'susto', 'maldicion'];
    const id = pick(pool), d = CARDS[id];
    const foes = g.others(e.by).filter(x => !x.st.ghost);
    const needs = d.target === 'enemy' || d.target === 'leader';
    const t = needs ? (foes.length ? pick(foes) : null) : null;
    g.log(`El caos elige: ${d.name}${t ? ' contra ' + t.name : ''}.`); g.ev('caos', { card: id });
    if (needs && !t) return;
    FX[id](g, { card: { id }, by: e.by, target: t, shield: new Set(e.shield), noLoss: new Set(e.noLoss), reaction: false });
  },
  pacto: (g, e) => {
    if (!g.hit(e, e.target)) return;
    e.by.st.pactWith = e.target.id; e.by.st.pactHost = true;
    e.target.st.pactWith = e.by.id; e.target.st.pactHost = false;
    g.addEggs(e.by, 1); g.addEggs(e.target, 1);
    g.log(`${e.by.name} y ${e.target.name} firman un pacto de plumas.`);
  },
  luna_llena: (g) => { g.setMod('luna'); },
  veda: (g) => { g.setMod('veda'); },
  fiesta: (g) => { g.setMod('fiesta'); },
  mercado_negro: (g, e) => { for (let i = 0; i < 2 && g.discard.length; i++) e.by.hand.push(g.discard.splice(rnd(g.discard.length), 1)[0]); },
};

/* ──────────────────────────────── PARTIDA ──────────────────────────────── */
class Game {
  constructor(infos, opts = {}) {
    this.clock = opts.clock || Date.now;
    this.uidN = 0; this.eidN = 0; this.seq = 0;
    this.players = infos.map(p => ({
      id: p.id, name: p.name, avatar: p.avatar, hand: [], eggs: 0, connected: true, gone: false, st: freshStatus(),
    }));
    const n = this.players.length;
    this.target = n <= 5 ? 5 : 6;
    this.deck = shuffle(buildDeck(n).map(id => this.mk(id)));
    this.discard = [];
    this.turn = rnd(n); this.dir = 1; this.actions = 0; this.stack = []; this.mods = {}; this.extraTurn = false;
    this.events = []; this.priv = []; this.logs = []; this.winner = null;
    this.phase = 'intro'; this.deadline = this.clock() + T.INTRO; this.ready = new Set();
    this.eligible = new Set(); this.passed = new Set();
    const hs = n <= 5 ? 5 : 4;
    for (const p of this.players) {
      const i = this.deck.findIndex(c => c.id === 'huevo_fresco');
      p.hand.push(this.deck.splice(i, 1)[0]);
      while (p.hand.length < hs) p.hand.push(this.deck.pop());
    }
    this.log(`¡Empieza la partida! Gana quien llegue a ${this.target} huevos.`);
  }

  /* ── utilidades ── */
  mk(id) { return { uid: ++this.uidN, id }; }
  get(id) { return this.players.find(p => p.id === id) || null; }
  cur() { return this.players[this.turn]; }
  alive() { return this.players.filter(p => !p.gone); }
  others(p) {
    const n = this.players.length, i = this.players.indexOf(p), out = [];
    for (let k = 1; k < n; k++) { const q = this.players[(i + k) % n]; if (!q.gone) out.push(q); }
    return out;
  }
  nextPlayer(p) {
    const n = this.players.length, i = this.players.indexOf(p);
    for (let k = 1; k <= n; k++) { const q = this.players[(i + this.dir * k + n * k) % n]; if (!q.gone) return q; }
    return null;
  }
  leader(p) {
    const c = this.others(p).filter(q => !q.st.ghost && q.eggs > 0);
    if (!c.length) return null;
    const m = Math.max(...c.map(q => q.eggs));
    return pick(c.filter(q => q.eggs === m));
  }
  ev(type, data = {}) { this.events.push(Object.assign({ type, n: ++this.seq }, data)); }
  log(text) { this.logs.push(text); if (this.logs.length > 80) this.logs.shift(); this.ev('log', { text }); }
  drainEvents() { const e = this.events; this.events = []; return e; }
  drainPrivate() { const e = this.priv; this.priv = []; return e; }

  /* ── cartas y huevos ── */
  drawCard() {
    if (!this.deck.length && this.discard.length) { this.deck = shuffle(this.discard.splice(0)); this.ev('shuffle', {}); }
    return this.deck.pop() || null;
  }
  draw(p, n) {
    let k = 0;
    for (let i = 0; i < n; i++) { const c = this.drawCard(); if (!c) break; p.hand.push(c); k++; }
    if (k) this.ev('draw', { pid: p.id, n: k });
    return k;
  }
  discardRandom(p, n) {
    const out = [];
    for (let i = 0; i < n && p.hand.length; i++) { const c = p.hand.splice(rnd(p.hand.length), 1)[0]; this.discard.push(c); out.push(c.id); }
    if (out.length) { this.ev('discard', { pid: p.id, cards: out }); this.log(`${p.name} descarta ${out.length} carta${out.length > 1 ? 's' : ''}.`); }
    return out.length;
  }
  addEggs(p, n) { p.eggs += n; this.ev('egg', { pid: p.id, delta: n }); }
  takeEgg(t, e) {
    if (t.eggs <= 0) return false;
    if (t.st.hideout) { t.st.hideout = false; this.log(`El escondrijo de ${t.name} salva un huevo.`); this.ev('shield', { pid: t.id }); return false; }
    if (e && e.noLoss && e.noLoss.has(t.id)) { this.log(`El seguro del nido de ${t.name} lo protege.`); this.ev('shield', { pid: t.id }); return false; }
    t.eggs--; t.st.lostEggs++;
    return true;
  }
  loseEggs(t, n, e) {
    let k = 0;
    for (let i = 0; i < n; i++) { if (!this.takeEgg(t, e)) break; k++; }
    if (k) this.ev('egg', { pid: t.id, delta: -k });
    return k;
  }
  stealEgg(from, to, e) {
    if (from === to) return false;
    if (this.mods.veda) { this.log('La Veda de Caza impide el robo.'); return false; }
    if (!this.takeEgg(from, e)) return false;
    to.eggs++;
    this.ev('steal', { from: from.id, to: to.id, kind: 'egg' });
    this.log(`${to.name} roba un huevo a ${from.name}.`);
    return true;
  }
  stealCard(from, to) {
    if (from === to) return false;
    if (this.mods.veda) { this.log('La Veda de Caza impide el robo.'); return false; }
    if (!from.hand.length) return false;
    to.hand.push(from.hand.splice(rnd(from.hand.length), 1)[0]);
    this.ev('steal', { from: from.id, to: to.id, kind: 'card' });
    this.log(`${to.name} roba una carta a ${from.name}.`);
    return true;
  }
  setMod(k) { this.mods[k] = this.alive().length; this.ev('mod', { mod: k, name: MODS[k] }); this.log(`Efecto global: ${MODS[k]}.`); }

  /** ¿Se puede aplicar el efecto a t? Gestiona fantasma, escudo y "último atacante". */
  hit(e, t, includeSelf) {
    if (!t || t.gone || t.st.ghost) return false;
    if (e.shield.has(t.id)) { this.log(`El escudo de ${t.name} lo protege.`); this.ev('shield', { pid: t.id }); return false; }
    if (CARDS[e.card.id].hostile && t !== e.by) t.st.lastAttacker = e.by.id;
    return true;
  }

  /* ── flujo de turnos ── */
  step() {
    const n = this.players.length;
    for (let k = 0; k < n; k++) { this.turn = (this.turn + this.dir + n) % n; if (!this.players[this.turn].gone) return; }
  }
  setReady(pid) {
    if (this.phase !== 'intro') return OK;
    this.ready.add(pid);
    if (this.players.every(p => p.gone || !p.connected || this.ready.has(p.id))) this.beginPlay();
    return OK;
  }
  beginPlay() { if (this.phase === 'intro') { this.phase = 'play'; this.ev('start', {}); this.startTurn(); } }

  startTurn() {
    for (let guard = 0; guard < this.players.length * 3; guard++) {
      const p = this.cur();
      if (p.gone) { this.step(); continue; }
      for (const k of Object.keys(this.mods)) {
        if (--this.mods[k] <= 0) { delete this.mods[k]; this.ev('modEnd', { mod: k }); this.log(`Termina: ${MODS[k]}.`); }
      }
      p.st.ghost = false; p.st.hideout = false;
      if (p.st.pactWith && p.st.pactHost) { const o = this.get(p.st.pactWith); if (o) { o.st.pactWith = null; o.st.pactHost = false; } p.st.pactWith = null; p.st.pactHost = false; }
      if (p.st.skip) {
        p.st.skip = false; this.log(`${p.name} se salta el turno.`); this.ev('skip', { pid: p.id });
        this.step(); continue;
      }
      if (p.st.incubating) {
        const k = p.st.incubating; p.st.incubating = 0; this.addEggs(p, k);
        this.log(`La incubadora de ${p.name} da ${k} huevo${k > 1 ? 's' : ''}.`);
      }
      if (this.checkWin()) return;
      if (p.st.noDraw > 0) { p.st.noDraw--; this.log(`${p.name} no roba carta este turno.`); } else this.draw(p, 1);
      this.actions = Math.max(1, 2 + (this.mods.fiesta ? 1 : 0) - (p.st.fewerActions > 0 ? 1 : 0));
      if (p.st.fewerActions > 0) p.st.fewerActions--;
      this.phase = 'play';
      this.deadline = p.connected ? null : this.clock() + T.AWAY;   // sin reloj de turno
      this.ev('turn', { pid: p.id });
      return;
    }
    // Nadie puede jugar: se acaba la partida por abandono.
    this.finishByAbandon();
  }
  finishTurn() {
    const p = this.cur();
    p.st.noSabotage = false; p.st.lostEggs = 0;
    this.ev('turnEnd', { pid: p.id });
    if (this.extraTurn) { this.extraTurn = false; } else this.step();
    this.startTurn();
  }
  endTurn(pid) {
    if (this.phase !== 'play') return err('Ahora no se puede terminar el turno.');
    if (this.cur().id !== pid) return err('No es tu turno.');
    this.log(`${this.cur().name} termina su turno.`);
    this.finishTurn();
    return OK;
  }

  checkWin() {
    if (this.winner) return true;
    const c = this.alive().filter(p => p.eggs >= this.target);
    if (!c.length) return false;
    const w = c.includes(this.cur()) ? this.cur() : c.sort((a, b) => b.eggs - a.eggs)[0];
    this.winner = w.id; this.phase = 'ended'; this.stack = [];
    this.ev('win', { pid: w.id }); this.log(`¡${w.name} llena su nido y gana la partida!`);
    return true;
  }
  finishByAbandon() {
    const left = this.alive();
    if (this.winner) return;
    this.winner = left.length ? left.sort((a, b) => b.eggs - a.eggs)[0].id : this.players[0].id;
    this.phase = 'ended'; this.stack = [];
    this.ev('win', { pid: this.winner, abandon: true });
    this.log('La partida termina por falta de jugadores.');
  }

  /* ── jugar cartas ── */
  checkTarget(p, t) {
    if (!t || t.gone || t === p) return 'Elige a otro jugador como objetivo.';
    if (t.st.ghost) return `${t.name} es un fantasma y no se le puede apuntar.`;
    return null;
  }
  mkEntry(card, by, target, reaction, parent) {
    return { eid: ++this.eidN, card, by, target, reaction, parent, negated: false, shield: new Set(), noLoss: new Set() };
  }

  play(pid, uid, targetId) {
    if (this.phase !== 'play') return err('Ahora no puedes jugar cartas.');
    const p = this.cur();
    if (p.id !== pid) return err('No es tu turno.');
    const i = p.hand.findIndex(c => c.uid === uid);
    if (i < 0) return err('Esa carta no está en tu mano.');
    const card = p.hand[i], d = CARDS[card.id];
    if (d.timing === 'react') return err('Esa carta solo se puede jugar como reacción a otra jugada.');
    if (this.actions < 1) return err('No te quedan acciones: termina el turno.');
    if (d.cat === 'sabotaje' && p.st.noSabotage) return err('La mordaza te impide jugar Sabotajes este turno.');
    let target = null;
    if (d.target === 'enemy') {
      target = this.get(targetId);
      const e = this.checkTarget(p, target); if (e) return err(e);
    } else if (d.target === 'leader') {
      target = this.leader(p);
      if (!target) return err('Ningún rival a tu alcance tiene huevos.');
    } else if (d.target === 'revenge') {
      target = this.get(p.st.lastAttacker);
      if (!target || target.gone || target === p || target.st.ghost) return err('Nadie te ha atacado... todavía.');
    }
    if (card.id === 'doble_turno' && this.extraTurn) return err('Ya tienes un turno extra preparado.');
    p.hand.splice(i, 1); this.actions--;
    const en = this.mkEntry(card, p, target, false, null);
    this.stack = [en];
    this.log(`${p.name} juega ${d.name}${target ? ' sobre ' + target.name : ''}.`);
    this.ev('play', { pid: p.id, card: card.id, target: target ? target.id : null, eid: en.eid });
    if (d.window && !this.mods.silencio) this.openWindow(true);
    else this.resolveStack();
    return OK;
  }

  affects(e, p) {
    if (e.reaction || e.by === p) return false;
    const d = CARDS[e.card.id];
    if (d.target === 'all') return !p.gone && !p.st.ghost;
    return e.target === p;
  }
  /** targetId === '*' → solo comprobar si la carta podría jugarse (sin elegir objetivo). */
  reactError(p, d, top, targetId) {
    if (top.by === p) return 'No puedes reaccionar a tu propia jugada.';
    const single = top.target && CARDS[top.card.id].target !== 'all';
    switch (d.id) {
      case 'nope':
        if (top.card.id === 'sello') return 'El Sello Dorado no se puede cancelar.';
        return null;
      case 'sello':
        return top.card.id === 'nope' ? null : 'El Sello Dorado solo cancela un ¡Ni Hablar!.';
      case 'escudo': case 'seguro_nido': case 'alarma': case 'contragolpe':
        return this.affects(top, p) ? null : 'Esa jugada no te afecta.';
      case 'rebote': case 'desvio': {
        if (top.reaction || !single || top.target !== p) return 'Solo puedes usarla si la jugada te apunta a ti.';
        if (d.id === 'desvio' && targetId !== '*') {
          const t = this.get(targetId);
          if (t === top.by) return 'Para devolvérsela a quien la lanzó usa ¡Rebote!.';
          if (!t || t.gone || t === p || t.st.ghost) return 'Elige a otro jugador para desviar la jugada.';
        }
        return null;
      }
      default: return 'Esa carta no se puede usar ahora.';
    }
  }
  canReact(p, top) {
    return !p.gone && p.connected && p.hand.some(c => CARDS[c.id].timing === 'react' && !this.reactError(p, CARDS[c.id], top, '*'));
  }
  openWindow(first) {
    const top = this.stack[this.stack.length - 1];
    this.phase = 'reaction'; this.passed = new Set();
    this.eligible = new Set(this.players.filter(p => this.canReact(p, top)).map(p => p.id));
    this.deadline = this.clock() + (this.eligible.size ? (first ? T.REACT_FIRST : T.REACT_CHAIN) : T.REACT_EMPTY);
    this.ev('window', { eid: top.eid });
  }
  react(pid, uid, targetId) {
    if (this.phase !== 'reaction') return err('No hay ninguna jugada a la que reaccionar.');
    const p = this.get(pid);
    if (!p || p.gone) return err('No estás en la partida.');
    const i = p.hand.findIndex(c => c.uid === uid);
    if (i < 0) return err('Esa carta no está en tu mano.');
    const card = p.hand[i], d = CARDS[card.id];
    if (d.timing !== 'react') return err('Esa carta no es una reacción.');
    const top = this.stack[this.stack.length - 1];
    const bad = this.reactError(p, d, top, d.id === 'desvio' ? targetId : '*');
    if (bad) return err(bad);
    p.hand.splice(i, 1);
    const t = d.id === 'desvio' ? this.get(targetId) : null;
    const en = this.mkEntry(card, p, t, true, top.eid);
    this.stack.push(en);
    this.log(`${p.name} reacciona con ${d.name}${t ? ' hacia ' + t.name : ''}.`);
    this.ev('play', { pid: p.id, card: card.id, target: t ? t.id : null, eid: en.eid, reaction: true });
    this.openWindow(false);
    return OK;
  }
  pass(pid) {
    if (this.phase !== 'reaction') return OK;
    if (this.eligible.has(pid)) {
      this.passed.add(pid);
      if ([...this.eligible].every(id => this.passed.has(id))) this.resolveStack();
    }
    return OK;
  }

  applyReaction(e, byEid) {
    const par = byEid[e.parent];
    if (!par) return;
    const who = e.by, d = CARDS[e.card.id];
    switch (d.id) {
      case 'nope': case 'sello': par.negated = true; this.ev('negate', { eid: par.eid, pid: who.id }); this.log(`${who.name} cancela ${CARDS[par.card.id].name}.`); break;
      case 'escudo': par.shield.add(who.id); break;
      case 'seguro_nido': par.noLoss.add(who.id); break;
      case 'alarma': par.negated = true; this.ev('negate', { eid: par.eid, pid: who.id }); this.log(`${who.name} da la alarma y cancela ${CARDS[par.card.id].name}.`); this.draw(who, 1); break;
      case 'contragolpe': par.negated = true; this.ev('negate', { eid: par.eid, pid: who.id }); this.log(`${who.name} contraataca.`); this.stealCard(par.by, who); break;
      case 'rebote': { const autor = par.by; par.by = who; par.target = autor; this.ev('bounce', { eid: par.eid, pid: who.id }); this.log(`¡Rebote! La jugada vuelve contra ${autor.name}.`); break; }
      case 'desvio': par.target = e.target; this.ev('bounce', { eid: par.eid, pid: who.id }); this.log(`${who.name} desvía la jugada hacia ${e.target.name}.`); break;
    }
  }

  resolveStack() {
    const st = this.stack; this.stack = [];
    const byEid = Object.fromEntries(st.map(e => [e.eid, e]));
    for (let i = st.length - 1; i >= 0; i--) {
      const e = st[i];
      if (!e.negated) {
        if (e.reaction) this.applyReaction(e, byEid);
        else this.applyEffect(e);
      } else if (!e.reaction) this.log(`${CARDS[e.card.id].name} no surte efecto.`);
      this.discard.push(e.card);
    }
    this.ev('resolved', { cards: st.map(e => e.card.id) });
    if (this.checkWin()) return;
    this.phase = 'play';
    const now = this.clock();
    const cur = this.cur();
    this.deadline = this.actions <= 0 ? now + T.AUTO_END : (cur.connected ? null : now + T.AWAY);
  }
  applyEffect(e) {
    const d = CARDS[e.card.id];
    if (d.hostile && e.target && e.target !== e.by && e.by.st.pactWith === e.target.id && !e.shield.has(e.target.id)) {
      e.by.st.pactWith = null; e.by.st.pactHost = false; e.target.st.pactWith = null; e.target.st.pactHost = false;
      e.betray = true; this.log(`¡TRAICIÓN! ${e.by.name} ataca a su aliado ${e.target.name}.`); this.ev('betrayal', { by: e.by.id, to: e.target.id });
    }
    FX[d.id](this, e);
    if (e.betray && !e.target.gone) this.stealCard(e.target, e.by);
  }

  /* ── reloj ── */
  tick() {
    if (this.phase === 'ended' || this.deadline == null || this.clock() < this.deadline) return;
    if (this.phase === 'intro') this.beginPlay();
    else if (this.phase === 'reaction') this.resolveStack();
    else if (this.phase === 'play') {
      if (this.actions > 0) this.log(`${this.cur().name} no está conectado: se pasa su turno.`);
      this.finishTurn();
    }
  }

  /* ── conexión ── */
  setConnected(pid, ok) {
    const p = this.get(pid); if (!p) return;
    p.connected = ok;
    if (!ok && this.phase === 'intro') this.setReady(pid);
    if (!ok && this.phase === 'play' && this.cur() === p) this.deadline = this.clock() + T.AWAY;
    if (ok && this.phase === 'play' && this.cur() === p && this.actions > 0) this.deadline = null;   // volvió a tiempo
  }
  removePlayer(pid) {
    const p = this.get(pid);
    if (!p || p.gone) return;
    p.gone = true; p.connected = false;
    this.discard.push(...p.hand.splice(0));
    this.log(`${p.name} abandona la partida.`); this.ev('left', { pid });
    if (this.phase === 'ended') return;
    const humans = this.players.filter(q => !q.gone);
    if (humans.length < 2) { this.finishByAbandon(); return; }
    if (this.phase === 'play' && this.cur() === p) this.finishTurn();
    else if (this.phase === 'reaction') {
      this.eligible.delete(pid);
      if ([...this.eligible].every(id => this.passed.has(id))) this.resolveStack();
    } else if (this.phase === 'intro') this.setReady(pid);
  }

  /* ── vista para un jugador (sin información oculta) ── */
  view(pid) {
    const me = this.get(pid), top = this.stack[this.stack.length - 1];
    return {
      now: this.clock(), phase: this.phase, deadline: this.deadline, target: this.target, dir: this.dir,
      turn: this.phase === 'intro' ? null : this.cur().id, actions: this.actions,
      deckCount: this.deck.length, discardCount: this.discard.length,
      discardTop: this.discard.length ? this.discard[this.discard.length - 1].id : null,
      mods: Object.assign({}, this.mods), winner: this.winner,
      ready: this.phase === 'intro' ? [...this.ready] : undefined,
      players: this.players.map(p => ({
        id: p.id, name: p.name, avatar: p.avatar, eggs: p.eggs, handCount: p.hand.length, connected: p.connected, gone: p.gone,
        ghost: p.st.ghost, skip: p.st.skip, trap: p.st.trap, hideout: p.st.hideout, incubating: p.st.incubating,
        pact: p.st.pactWith, noSabotage: p.st.noSabotage, noDraw: p.st.noDraw,
      })),
      hand: me ? me.hand.map(c => ({ uid: c.uid, id: c.id })) : [],
      stack: this.stack.map(e => ({ eid: e.eid, id: e.card.id, by: e.by.id, target: e.target ? e.target.id : null, reaction: e.reaction })),
      reaction: this.phase === 'reaction' && top ? {
        eid: top.eid, mine: this.eligible.has(pid), passed: this.passed.has(pid),
      } : null,
      log: this.logs.slice(-40),
    };
  }
}

module.exports = { Game, T };

},
rooms: function (module, exports, require) {
'use strict';
/**
 * Gestión de salas multijugador. No depende de Socket.IO: recibe objetos "socket"
 * con { id, on(evt, fn), emit(evt, data) }, así se puede probar sin red.
 */
const crypto = require('crypto');
const { Game } = require('../game/engine');

const MAX_PLAYERS = 10, MIN_PLAYERS = 2, MAX_ROOMS = 300;
const LOBBY_GRACE = 25000;      // desconexión en lobby: se expulsa pasado este tiempo
const GAME_GRACE = 120000;      // desconexión en partida: se da por abandonado pasado este tiempo
const EMPTY_ROOM_TTL = 10 * 60000;
const AVATARS = ['🐔', '🦊', '🐷', '🐮', '🐸', '🐙', '🦆', '🐢', '🐝', '🐺', '🦉', '🐰'];
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

const rid = n => crypto.randomBytes(n).toString('hex');
const cleanText = (s, max) => String(s == null ? '' : s).replace(/[\u0000-\u001f\u007f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, max);
const same = (a, b) => { a = Buffer.from(String(a)); b = Buffer.from(String(b)); return a.length === b.length && crypto.timingSafeEqual(a, b); };

function createRooms(opts = {}) {
  const rooms = new Map();
  const now = opts.now || Date.now;

  const newCode = () => {
    for (let t = 0; t < 50; t++) {
      let c = ''; for (let i = 0; i < 5; i++) c += CODE_CHARS[crypto.randomInt(CODE_CHARS.length)];
      if (!rooms.has(c)) return c;
    }
    return null;
  };
  const nameFor = (room, base) => {
    let n = base || 'Pollito', k = 1;
    const taken = () => [...room.members.values()].some(m => m.name.toLowerCase() === n.toLowerCase());
    while (taken()) n = `${base || 'Pollito'} ${++k}`.slice(0, 18);
    return n;
  };

  /* ── envío ── */
  const emit = (m, evt, data) => { if (m.socket) { try { m.socket.emit(evt, data); } catch (_) { /* socket muerto */ } } };
  const publicMembers = room => [...room.members.values()].map(m => ({ id: m.id, name: m.name, avatar: m.avatar, connected: m.connected }));
  function sendRoom(room) {
    const base = { code: room.code, hostId: room.hostId, isPublic: room.isPublic, phase: room.state, members: publicMembers(room), max: MAX_PLAYERS, min: MIN_PLAYERS };
    for (const m of room.members.values()) emit(m, 'room:state', Object.assign({ you: m.id }, base));
  }
  function flush(room) {
    const g = room.game; if (!g) return;
    const events = g.drainEvents(), priv = g.drainPrivate();
    for (const m of room.members.values()) emit(m, 'game:update', { state: g.view(m.id), events });
    for (const p of priv) { const m = room.members.get(p.pid); if (m) emit(m, 'game:peek', p); }
    if (g.phase === 'ended' && room.state === 'game') { room.state = 'ended'; sendRoom(room); }
  }
  const pendingGame = room => room.game && (room.game.events.length || room.game.priv.length);

  /* ── ciclo de vida ── */
  function addMember(room, { name, avatar }) {
    const m = {
      id: rid(4), token: rid(16), name: nameFor(room, cleanText(name, 16)),
      avatar: AVATARS.includes(avatar) ? avatar : AVATARS[crypto.randomInt(AVATARS.length)],
      socket: null, connected: true, dc: null,
    };
    room.members.set(m.id, m);
    return m;
  }
  function pickHost(room) {
    const h = room.members.get(room.hostId);
    if (h && h.connected) return;
    const n = [...room.members.values()].find(m => m.connected);
    if (n) room.hostId = n.id;
  }
  function removeMember(room, m, { abandon } = {}) {
    clearTimeout(m.dc);
    if (room.game && abandon !== false) { room.game.removePlayer(m.id); }
    room.members.delete(m.id);
    if (m.socket && m.socket.ctx) { m.socket.ctx.room = null; m.socket.ctx.member = null; }
    if (!room.members.size) { rooms.delete(room.code); return; }
    pickHost(room); sendRoom(room); flush(room);
  }
  function attach(room, m, socket) {
    if (m.socket && m.socket !== socket) { try { m.socket.emit('room:kicked', { reason: 'Has abierto la partida en otra pestaña.' }); } catch (_) { /* nada */ } if (m.socket.ctx) { m.socket.ctx.room = null; m.socket.ctx.member = null; } }
    clearTimeout(m.dc); m.dc = null;
    m.socket = socket; m.connected = true;
    socket.ctx.room = room; socket.ctx.member = m;
    if (room.game) room.game.setConnected(m.id, true);
    pickHost(room);
  }
  function detach(socket) {
    const { room, member: m } = socket.ctx;
    if (!room || !m || m.socket !== socket) return;
    m.socket = null; m.connected = false; room.lastActive = now();
    if (room.game && room.state !== 'lobby') {
      room.game.setConnected(m.id, false);
      m.dc = setTimeout(() => { if (!m.connected && room.members.has(m.id)) removeMember(room, m); }, GAME_GRACE);
    } else {
      m.dc = setTimeout(() => { if (!m.connected && room.members.has(m.id)) removeMember(room, m); }, LOBBY_GRACE);
    }
    if (m.dc.unref) m.dc.unref();
    pickHost(room); sendRoom(room); flush(room);
  }

  function createRoom(socket, { name, avatar, isPublic }) {
    if (rooms.size >= MAX_ROOMS) return { ok: false, error: 'Hay demasiadas salas abiertas ahora mismo. Inténtalo en unos minutos.' };
    const code = newCode(); if (!code) return { ok: false, error: 'No se ha podido crear la sala.' };
    const room = { code, hostId: null, isPublic: !!isPublic, state: 'lobby', members: new Map(), game: null, chat: [], createdAt: now(), lastActive: now() };
    rooms.set(code, room);
    const m = addMember(room, { name, avatar }); room.hostId = m.id;
    attach(room, m, socket);
    sendRoom(room);
    return { ok: true, code, id: m.id, token: m.token };
  }
  function joinRoom(socket, code, { name, avatar }) {
    const room = rooms.get(String(code || '').toUpperCase().replace(/[^A-Z0-9]/g, ''));
    if (!room) return { ok: false, error: 'No existe ninguna sala con ese código.' };
    if (room.state !== 'lobby') return { ok: false, error: 'Esa partida ya ha empezado.' };
    if (room.members.size >= MAX_PLAYERS) return { ok: false, error: `La sala está llena (máximo ${MAX_PLAYERS} jugadores).` };
    const m = addMember(room, { name, avatar });
    attach(room, m, socket);
    room.lastActive = now();
    sendRoom(room);
    emit(m, 'chat:history', room.chat);
    return { ok: true, code: room.code, id: m.id, token: m.token };
  }
  function leave(socket) {
    const { room, member: m } = socket.ctx;
    if (room && m) removeMember(room, m);
  }

  /* ── conexión de un socket ── */
  function onConnect(socket) {
    socket.ctx = { room: null, member: null, bucket: 40, last: now(), lastChat: 0 };
    const handle = (evt, fn) => socket.on(evt, (data, cb) => {
      if (typeof data === 'function') { cb = data; data = {}; }
      if (typeof cb !== 'function') cb = () => {};
      const t = now(), c = socket.ctx;
      c.bucket = Math.min(40, c.bucket + (t - c.last) / 50); c.last = t;     // 20 eventos/s de media
      if (--c.bucket < 0) return cb({ ok: false, error: 'Vas demasiado rápido. Respira un segundo.' });
      try { cb(fn(data && typeof data === 'object' ? data : {}) || { ok: true }); }
      catch (e) { console.error('[rooms]', evt, e); cb({ ok: false, error: 'Error interno. Inténtalo de nuevo.' }); }
    });
    const inRoom = () => socket.ctx.room && socket.ctx.member;

    handle('room:create', d => { if (inRoom()) leave(socket); return createRoom(socket, d); });
    handle('room:join', d => { if (inRoom()) leave(socket); return joinRoom(socket, d.code, d); });
    handle('room:quick', d => {
      if (inRoom()) leave(socket);
      const open = [...rooms.values()].filter(r => r.isPublic && r.state === 'lobby' && r.members.size < MAX_PLAYERS);
      open.sort((a, b) => b.members.size - a.members.size);
      return open.length ? joinRoom(socket, open[0].code, d) : createRoom(socket, Object.assign({}, d, { isPublic: true }));
    });
    handle('room:list', () => ({
      ok: true, rooms: [...rooms.values()].filter(r => r.isPublic && r.state === 'lobby' && r.members.size < MAX_PLAYERS)
        .map(r => ({ code: r.code, host: (r.members.get(r.hostId) || {}).name || '?', count: r.members.size, max: MAX_PLAYERS })).slice(0, 20),
    }));
    handle('room:resume', d => {
      const room = rooms.get(String(d.code || '').toUpperCase());
      const m = room && room.members.get(String(d.id || ''));
      if (!m || !same(m.token, d.token)) return { ok: false, error: 'La sala ya no existe o ha caducado.' };
      if (inRoom() && socket.ctx.member !== m) leave(socket);
      attach(room, m, socket);
      sendRoom(room); emit(m, 'chat:history', room.chat);
      if (room.game) flush2(room, m);
      return { ok: true, code: room.code, id: m.id, token: m.token };
    });
    handle('room:leave', () => { leave(socket); return { ok: true }; });
    handle('room:settings', d => {
      if (!inRoom() || socket.ctx.room.hostId !== socket.ctx.member.id) return { ok: false, error: 'Solo el anfitrión puede cambiar esto.' };
      socket.ctx.room.isPublic = !!d.isPublic; sendRoom(socket.ctx.room); return { ok: true };
    });
    handle('room:start', () => {
      if (!inRoom()) return { ok: false, error: 'No estás en ninguna sala.' };
      const room = socket.ctx.room;
      if (room.hostId !== socket.ctx.member.id) return { ok: false, error: 'Solo el anfitrión puede empezar la partida.' };
      if (room.state === 'game') return { ok: false, error: 'La partida ya ha empezado.' };
      const live = [...room.members.values()].filter(m => m.connected);
      if (live.length < MIN_PLAYERS) return { ok: false, error: `Hacen falta al menos ${MIN_PLAYERS} jugadores.` };
      for (const m of [...room.members.values()]) if (!m.connected) { room.members.delete(m.id); clearTimeout(m.dc); }
      room.game = new Game([...room.members.values()].map(m => ({ id: m.id, name: m.name, avatar: m.avatar })), { clock: opts.clock });
      room.state = 'game'; room.lastActive = now();
      sendRoom(room); flush(room);
      return { ok: true };
    });
    const gameAct = (name, fn) => handle(name, d => {
      if (!inRoom()) return { ok: false, error: 'No estás en ninguna sala.' };
      const room = socket.ctx.room, g = room.game;
      if (!g || room.state !== 'game') return { ok: false, error: 'No hay ninguna partida en marcha.' };
      const r = fn(g, socket.ctx.member.id, d);
      room.lastActive = now(); flush(room);
      return r;
    });
    gameAct('game:ready', (g, id) => g.setReady(id));
    gameAct('game:play', (g, id, d) => g.play(id, Number(d.uid), d.target ? String(d.target) : null));
    gameAct('game:react', (g, id, d) => g.react(id, Number(d.uid), d.target ? String(d.target) : null));
    gameAct('game:pass', (g, id) => g.pass(id));
    gameAct('game:end', (g, id) => g.endTurn(id));
    handle('chat:send', d => {
      if (!inRoom()) return { ok: false };
      const t = now(), c = socket.ctx;
      if (t - c.lastChat < 600) return { ok: false, error: 'Más despacio, que se cansan los pollitos.' };
      const text = cleanText(d.text, 160); if (!text) return { ok: false };
      c.lastChat = t;
      const room = c.room, msg = { id: c.member.id, name: c.member.name, avatar: c.member.avatar, text, t };
      room.chat.push(msg); if (room.chat.length > 50) room.chat.shift();
      for (const m of room.members.values()) emit(m, 'chat:msg', msg);
      return { ok: true };
    });
    socket.on('disconnect', () => detach(socket));
  }
  function flush2(room, m) {      // reenvía el estado completo a un solo jugador (reconexión)
    const g = room.game;
    emit(m, 'game:update', { state: g.view(m.id), events: [] });
  }

  /* ── reloj de las salas (cada 250 ms) ── */
  function tick() {
    const t = now();
    for (const room of [...rooms.values()]) {
      if (room.game && room.state === 'game') {
        room.game.tick();
        if (pendingGame(room)) flush(room);
      }
      if (![...room.members.values()].some(m => m.connected) && t - room.lastActive > EMPTY_ROOM_TTL) {
        for (const m of room.members.values()) clearTimeout(m.dc);
        rooms.delete(room.code);
      }
    }
  }

  return {
    onConnect, tick, rooms,
    stats: () => ({ rooms: rooms.size, players: [...rooms.values()].reduce((s, r) => s + [...r.members.values()].filter(m => m.connected).length, 0) }),
  };
}

module.exports = { createRooms, AVATARS, MAX_PLAYERS, MIN_PLAYERS };

},
};
function __load(n) { if (!__cache[n]) { const m = { exports: {} }; __cache[n] = m; __defs[n](m, m.exports, __req); } return __cache[n].exports; }
function __req(r) {
  if (/(^|\/)cards$/.test(r)) return __load('cards');
  if (/(^|\/)engine$/.test(r)) return __load('engine');
  if (/(^|\/)rooms$/.test(r)) return __load('rooms');
  return __nodeRequire(r);
}
// ─────────────────────────── servidor ───────────────────────────
/**
 * CORRE QUE TE PÍO — servidor.
 * Un único proceso sirve: frontend estático, /healthz, /cards.json y los WebSockets (Socket.IO).
 */
const http = __req('http');
const fs = __req('fs');
const path = __req('path');
const zlib = __req('zlib');
const { Server } = __req('socket.io');
const { createRooms } = __req('./src/multiplayer/rooms');
const { CAT, LIST, MODS } = __req('./src/game/cards');

// En la versión de UN SOLO ARCHIVO (tools/build-single.js) el frontend viaja incrustado en este mismo fichero.
const EMBEDDED = typeof __EMBEDDED_FILES__ !== 'undefined' ? __EMBEDDED_FILES__ : null;
const BUILD_MTIME = typeof __BUILD_MTIME__ !== 'undefined' ? __BUILD_MTIME__ : 0;
const embCache = new Map();

const PORT = Number(process.env.PORT) || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const ALLOWED = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon', '.webp': 'image/webp', '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.wav': 'audio/wav',
  '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json',
};
const TEXTUAL = new Set(['.html', '.js', '.css', '.json', '.svg', '.txt', '.webmanifest']);
const SEC = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
  'X-Frame-Options': 'SAMEORIGIN',
  'Content-Security-Policy': "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self' ws: wss:; media-src 'self' data: blob:; base-uri 'none'; form-action 'none'",
};

const rooms = createRooms();
const cardsJson = JSON.stringify({ cats: CAT, cards: LIST, mods: MODS });
const cache = new Map();          // ruta → { mtime, body, gz, type }

function send(req, res, status, body, type, extra = {}) {
  const headers = Object.assign({ 'Content-Type': type }, SEC, extra);
  const enc = String(req.headers['accept-encoding'] || '');
  if (body.length > 1024 && /^(text\/|application\/json|image\/svg)/.test(type) && enc.includes('gzip') && !extra.__gz) {
    body = zlib.gzipSync(body); headers['Content-Encoding'] = 'gzip'; headers.Vary = 'Accept-Encoding';
  }
  headers['Content-Length'] = body.length;
  res.writeHead(status, headers);
  res.end(req.method === 'HEAD' ? undefined : body);
}

const NOT_FOUND = Buffer.from('No encontrado: este pollito se ha escapado.');
function sendAsset(req, res, ext, body, etag) {
  const type = MIME[ext] || 'application/octet-stream';
  const cc = ext === '.html' || ext === '.js' || ext === '.css' ? 'no-cache' : 'public, max-age=86400';
  if (req.headers['if-none-match'] === etag) { res.writeHead(304, Object.assign({ ETag: etag, 'Cache-Control': cc }, SEC)); return res.end(); }
  send(req, res, 200, body, type, { ETag: etag, 'Cache-Control': cc });
}

function serveStatic(req, res, urlPath) {
  let rel = decodeURIComponent(urlPath);
  if (rel === '/' || rel === '') rel = '/index.html';
  if (EMBEDDED) {                                   // frontend incrustado: nada de acceder al disco
    if (!Object.prototype.hasOwnProperty.call(EMBEDDED, rel)) return send(req, res, 404, NOT_FOUND, 'text/plain; charset=utf-8');
    let body = embCache.get(rel);
    if (!body) { body = Buffer.from(EMBEDDED[rel], 'utf8'); embCache.set(rel, body); }
    return sendAsset(req, res, path.extname(rel).toLowerCase(), body, `"${body.length}-${BUILD_MTIME}"`);
  }
  const file = path.normalize(path.join(PUBLIC_DIR, rel));
  if (!file.startsWith(PUBLIC_DIR + path.sep)) return send(req, res, 403, Buffer.from('Prohibido'), 'text/plain; charset=utf-8');
  fs.stat(file, (e, st) => {
    if (e || !st.isFile()) return send(req, res, 404, NOT_FOUND, 'text/plain; charset=utf-8');
    const ext = path.extname(file).toLowerCase(), hit = cache.get(file), etag = `"${st.size}-${Math.floor(st.mtimeMs)}"`;
    if (hit && hit.mtime === st.mtimeMs) return sendAsset(req, res, ext, hit.body, etag);
    fs.readFile(file, (err, body) => {
      if (err) return send(req, res, 500, Buffer.from('Error del servidor'), 'text/plain; charset=utf-8');
      if (TEXTUAL.has(ext)) cache.set(file, { mtime: st.mtimeMs, body });
      sendAsset(req, res, ext, body, etag);
    });
  });
}

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    if (req.method !== 'GET' && req.method !== 'HEAD') return send(req, res, 405, Buffer.from('Método no permitido'), 'text/plain; charset=utf-8');
    if (url.pathname === '/healthz') return send(req, res, 200, Buffer.from(JSON.stringify(Object.assign({ ok: true, uptime: Math.round(process.uptime()) }, rooms.stats()))), 'application/json; charset=utf-8', { 'Cache-Control': 'no-store' });
    if (url.pathname === '/cards.json') return send(req, res, 200, Buffer.from(cardsJson), 'application/json; charset=utf-8', { 'Cache-Control': 'no-cache' });
    serveStatic(req, res, url.pathname);
  } catch (e) {
    send(req, res, 400, Buffer.from('Petición no válida'), 'text/plain; charset=utf-8');
  }
});

const io = new Server(server, {
  cors: ALLOWED.length ? { origin: ALLOWED } : undefined,
  maxHttpBufferSize: 20_000,
  pingInterval: 20000,
  pingTimeout: 25000,
});
io.on('connection', socket => rooms.onConnect(socket));
const timer = setInterval(rooms.tick, 250);

server.listen(PORT, '0.0.0.0', () => console.log(`🐥 CORRE QUE TE PÍO escuchando en el puerto ${PORT}`));

function shutdown() {
  clearInterval(timer);
  io.close(() => server.close(() => process.exit(0)));
  setTimeout(() => process.exit(0), 3000).unref();
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
process.on('unhandledRejection', e => console.error('[unhandledRejection]', e));
process.on('uncaughtException', e => console.error('[uncaughtException]', e));
