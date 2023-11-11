import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as T,i as y}from"./assets/vendor-50196a99.js";const s=document.querySelector("#datetime-picker"),r=document.querySelector("[data-start]"),t=document.createElement("button");t.setAttribute("id","resetBtn");r.insertAdjacentElement("afterend",t);r.setAttribute("id","startBtn");t.textContent="Reset";t.type="button";t.setAttribute("data-reset","");t.setAttribute("disabled","");const v=s.previousElementSibling,f=document.createElement("h1");f.className="title";f.textContent="Pick an expiration date";v.insertAdjacentElement("afterend",f);let p=null,i=null,x=null,g=null,h=null;function R(e){const m=Math.floor(e/864e5),k=Math.floor(e%864e5/36e5),S=Math.floor(e%864e5%36e5/6e4),w=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:k,minutes:S,seconds:w}}const u=e=>String(e).padStart(2,"0"),M={locale:{firstDayOfWeek:1},enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){p=new Date,i=e[0],i.getTime()-p.getTime()>0?r.disabled=!1:y.error({title:"Error",message:"Please choose a future date!"})}};T("#datetime-picker",M);const D=document.body.querySelector(".timer");D.insertAdjacentHTML("afterend",`
  <div class="end"></div>
  <div class="progress">
    <div class="circle"></div>
    <span class="percentage"></span>
  </div>
`);const l=document.querySelector(".end");function C(){p=new Date;let e=i.getTime()-p.getTime();if(e>0){t.disabled=!1;const{days:o,hours:d,minutes:n,seconds:a}=R(e);l.textContent=`Time's up in: ${u(o)} Days ${u(d)}:${u(n)}:${u(a)}`}else c.style.background="conic-gradient(#fafafa 0deg 360deg, transparent 360deg 360deg)",b.textContent="100%",l.textContent="Time has expired!",clearInterval(g),clearInterval(h),r.disabled=!0,t.disabled=!1,y.success({title:"OK",message:"Your wait has ended! Relax..."})}const c=document.querySelector(".circle"),b=document.querySelector(".percentage"),I={background:c.style.background},A=()=>{let e=new Date,o=i.getTime()-x.getTime(),d=i.getTime()-e.getTime(),n=(o-d)/o;n>1&&(n=1);let a=Math.round(360*n),m=Math.round(n*100);c.style.background=`conic-gradient(#daf6ff 0deg ${a}deg, transparent ${a}deg 360deg)`,b.textContent=`${m}%`};r.disabled=!0;r.addEventListener("click",()=>{g=setInterval(C,1e3),h=setInterval(A,100),r.disabled=!0,s.disabled=!0,l.style.display="block",s.style.display="none",x=new Date});t.addEventListener("click",()=>{t.disabled=!0,s.disabled=!1,s.style.display="block",c&&(c.style.background=I.background),b.textContent="",l.textContent="",l.style.display="none",clearInterval(g),clearInterval(h)});const B=document.head.querySelector("title"),L=document.querySelector("a");L.setAttribute("id","pageLink");B.insertAdjacentHTML("afterend",`<link rel="preconnect" href="https://fonts.googleapis.com">
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
    text-align: center;
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  
}`);document.styleSheets[0].insertRule(` #pageLink {
    text-decoration: none;
    font-family: 'Share Tech Mono', monospace;
    color: #456671;
    
  
}`);document.styleSheets[0].insertRule(` #pageLink:hover {
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
}`);document.styleSheets[0].insertRule(`#startBtn:hover {
  // border: 1px solid #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 9);
}`);document.styleSheets[0].insertRule(`#resetBtn:disabled{
  display: none;
}`);document.styleSheets[0].insertRule(`#resetBtn {
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
}`);document.styleSheets[0].insertRule(`.progress {
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
}`);document.styleSheets[0].insertRule(`@-webkit-keyframes circle-in-center {
  from {
    -webkit-clip-path: circle(125%);
    clip-path: circle(125%);
  }
  to {
    -webkit-clip-path: circle(0%);
    clip-path: circle(0%);
  }
}`);document.styleSheets[0].insertRule(`@keyframes circle-in-center {
  from {
    -webkit-clip-path: circle(125%);
    clip-path: circle(125%);
  }
  to {
    -webkit-clip-path: circle(0%);
    clip-path: circle(0%);
  }
}`);document.styleSheets[0].insertRule(`.circle {
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
}`);document.styleSheets[0].insertRule(`.percentage {
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
