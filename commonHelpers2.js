import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as S,i as y}from"./assets/vendor-50196a99.js";const i=document.querySelector("#datetime-picker"),a=document.querySelector("[data-start]"),r=document.createElement("button");r.setAttribute("id","resetBtn");a.insertAdjacentElement("afterend",r);a.setAttribute("id","startBtn");r.textContent="Reset";r.type="button";r.setAttribute("data-reset","");r.setAttribute("disabled","");const R=i.previousElementSibling,m=document.createElement("h1");m.className="title";m.textContent="Pick an expiration date";R.insertAdjacentElement("afterend",m);let f=null,l=null,k=null,b=null,h=null;function M(t){const g=Math.floor(t/864e5),w=Math.floor(t%864e5/36e5),T=Math.floor(t%864e5%36e5/6e4),v=Math.floor(t%864e5%36e5%6e4/1e3);return{days:g,hours:w,minutes:T,seconds:v}}const u=t=>String(t).padStart(2,"0"),D={locale:{firstDayOfWeek:1},enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){f=new Date,l=t[0],l.getTime()-f.getTime()>0?a.disabled=!1:y.error({title:"Error",message:"Please choose a future date!"})}};S("#datetime-picker",D);const C=document.body.querySelector(".timer");C.insertAdjacentHTML("afterend",`
  <div class="end"></div>
  <div class="progress">
    <div class="circle"></div>
    <span class="percentage"></span>
  </div>
`);const c=document.querySelector(".end");function I(){f=new Date;let t=l.getTime()-f.getTime();if(t>0){r.disabled=!1;const{days:o,hours:p,minutes:n,seconds:s}=M(t);c.textContent=`Time's up in: ${u(o)} Days ${u(p)}:${u(n)}:${u(s)}`}else d.style.background="conic-gradient(#fafafa 0deg 360deg, transparent 360deg 360deg)",x.textContent="100%",c.textContent="Time has expired!",clearInterval(b),clearInterval(h),a.disabled=!0,r.disabled=!1,y.success({title:"OK",message:"Your wait has ended! Relax..."})}const d=document.querySelector(".circle"),x=document.querySelector(".percentage"),A={background:d.style.background},B=()=>{let t=new Date,o=l.getTime()-k.getTime(),p=l.getTime()-t.getTime(),n=(o-p)/o;n>1&&(n=1);let s=Math.round(360*n),g=Math.round(n*100);d.style.background=`conic-gradient(#daf6ff 0deg ${s}deg, transparent ${s}deg 360deg)`,x.textContent=`${g}%`};a.disabled=!0;a.addEventListener("click",()=>{b=setInterval(I,1e3),h=setInterval(B,100),a.disabled=!0,i.disabled=!0,c.style.display="block",i.style.display="none",k=new Date});r.addEventListener("click",()=>{r.disabled=!0,i.disabled=!1,i.style.display="block",d&&(d.style.background=A.background),x.textContent="",c.textContent="",c.style.display="none",clearInterval(b),clearInterval(h)});const L=document.head.querySelector("title"),q=document.querySelector("a");q.setAttribute("id","pageLink");const e=document.styleSheets[0];L.insertAdjacentHTML("afterend",`<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
    `);e.insertRule(`body {
  height: 100vh;
  background: #0f3854;
  background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
  background-size: 100%;
  background-repeat: no-repeat;
}`);e.insertRule(` #pageLink {
  text-decoration: none;
  font-family: 'Share Tech Mono', monospace;
  color: #456671;
}`);e.insertRule(` #pageLink:hover {
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
}`);e.insertRule(` .title {
  font-family: 'Share Tech Mono', monospace;
    text-align: center;
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
}`);e.insertRule(`#datetime-picker {
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
}`);e.insertRule(`#startBtn:disabled{
  display: none;
}`);e.insertRule(`#startBtn {
  position: absolute;
  left: 50%;
  bottom: 80px;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 2em;
  text-align: center;
  padding: 5px 25px;
  color: #daf6ff;
  // text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  background-color: transparent;
  border: none;
  cursor: pointer;
}`);e.insertRule(`#startBtn:hover {
  // border: 1px solid #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 9);
}`);e.insertRule(`#resetBtn:disabled{
  display: none;
}`);e.insertRule(`#resetBtn {
  position: absolute;
  left: 50%;
  bottom: 80px;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 2em;
  text-align: center;
  padding: 5px 25px;
  color: #daf6ff;
  // text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  background-color: transparent;
  border: none;
  cursor: pointer;
}`);e.insertRule(`#resetBtn:hover {
  // border: 1px solid #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 9);
}`);e.insertRule(`.field {
 display: none;
}`);e.insertRule(`.end {
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.5em;
  color: #daf6ff;
}`);e.insertRule(`.progress {
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 350px;
  border-radius: 50%;
}`);e.insertRule(`@-webkit-keyframes circle-in-center {
  from {
    -webkit-clip-path: circle(125%);
    clip-path: circle(125%);
  }
  to {
    -webkit-clip-path: circle(0%);
    clip-path: circle(0%);
  }
}`);e.insertRule(`@keyframes circle-in-center {
  from {
    -webkit-clip-path: circle(125%);
    clip-path: circle(125%);
  }
  to {
    -webkit-clip-path: circle(0%);
    clip-path: circle(0%);
  }
}`);e.insertRule(`.circle {
  display: block;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  transform: rotate(-180deg);
  -webkit-mask-image: radial-gradient(
    circle at 50% 50%,
    transparent 60%,
    black 40%
  );
  mask-image: radial-gradient(circle at 50% 50%, transparent 60%, black 40%);
}`);e.insertRule(`.percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  font-size: 70px;
}`);
//# sourceMappingURL=commonHelpers2.js.map
