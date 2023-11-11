import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as M,i as g}from"./assets/vendor-50196a99.js";const s=document.querySelector("#datetime-picker"),S=document.querySelector("[data-days]"),k=document.querySelector("[data-hours]"),T=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]"),o=document.querySelector("[data-start]"),t=document.createElement("button");t.setAttribute("id","resetBtn");o.insertAdjacentElement("afterend",t);o.setAttribute("id","startBtn");t.textContent="Reset";t.type="button";t.setAttribute("data-reset","");t.setAttribute("disabled","");const R=s.previousElementSibling,b=document.createElement("h1");b.className="title";b.textContent="Pick an expiration date";R.insertAdjacentElement("afterend",b);let d=null,c=null,x=null,u=null;function C(e){const p=Math.floor(e/864e5),h=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),w=Math.floor(e%864e5%36e5%6e4/1e3);return{days:p,hours:h,minutes:y,seconds:w}}const n=e=>String(e).padStart(2,"0"),D=()=>{d=new Date;let e=c.getTime()-d.getTime();if(e>0){e=C(e);let{days:f,hours:a,minutes:l,seconds:i}=e;S.textContent=n(f),k.textContent=n(a),T.textContent=n(l),v.textContent=n(i),t.disabled=!1}else clearInterval(x),o.disabled=!0,t.disabled=!1,s.disabled=!1,g.success({title:"OK",message:"Your wait has ended! Relax..."})},I={locale:{firstDayOfWeek:1},enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){d=new Date,c=e[0],c.getTime()-d.getTime()>0?o.disabled=!1:g.error({title:"Error",message:"Please choose a future date!"})}};M("#datetime-picker",I);o.disabled=!0;o.addEventListener("click",()=>{x=setInterval(D,1e3),r.style.display="block",u=E(),m.style.display="block",o.disabled=!0,s.style.display="none",s.disabled=!0,r.dataset.intervalId=u});t.addEventListener("click",()=>{clearInterval(x),o.disabled=!0,t.disabled=!0,s.style.display="block",s.disabled=!1,S.textContent="00",k.textContent="00",T.textContent="00",v.textContent="00",clearInterval(u),r.textContent="",r.style.display="none",m.style.display="none",u=null});const m=document.body.querySelector(".timer");m.style.display="none";m.insertAdjacentHTML("afterend",'<div class="end"></div>');const r=document.querySelector(".end");function E(){const e=()=>{const a=c.getTime()-new Date().getTime();if(a>0){const l=C(a),{days:i,hours:p,minutes:h,seconds:y}=l;r.textContent=`Time's up in: ${n(i)} Days ${n(p)}:${n(h)}:${n(y)}`}else r.textContent="Time has expired!"};return e(),setInterval(e,1e3)}const q=document.head.querySelector("title");q.insertAdjacentHTML("afterend",`<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
    `);document.styleSheets[0].insertRule(`body {
  height: 100vh;
  background: #0f3854;
  background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
  background-size: 100%;
  background-repeat: no-repeat;
}`);document.styleSheets[0].insertRule(` .title {
  font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    text-align: center;
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  
}`);document.styleSheets[0].insertRule(`#datetime-picker {
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translate(-50%, -50%);
  width: 308px;
  padding: 5px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.5em;
  text-align: center;
  outline: none;
  border: none;
  color: #daf6ff;
  background-color: transparent;
}`);document.styleSheets[0].insertRule(`#startBtn:disabled{
  display: none;
}`);document.styleSheets[0].insertRule(`#startBtn {
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.5em;
  text-align: center;
  padding: 5px 25px;
  color: #daf6ff;
  // text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  background-color: transparent;
  border: none;
  cursor: pointer;
}`);document.styleSheets[0].insertRule(`#startBtn:hover {
  // border: 1px solid #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 9);
}`);document.styleSheets[0].insertRule(`#resetBtn:disabled{
  display: none;
}`);document.styleSheets[0].insertRule(`#resetBtn {
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.5em;
  text-align: center;
  padding: 5px 25px;
  color: #daf6ff;
  // text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  background-color: transparent;
  border: none;
  cursor: pointer;
}`);document.styleSheets[0].insertRule(`#resetBtn:hover {
  // border: 1px solid #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 9);
}`);document.styleSheets[0].insertRule(`.field {
 display: none;
}`);document.styleSheets[0].insertRule(`.end {
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.5em;
  color: #daf6ff;
}`);
//# sourceMappingURL=commonHelpers2.js.map
