import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as c}from"./assets/vendor-50196a99.js";const f=document.querySelector(".form"),s=document.querySelectorAll("input"),d=document.querySelector('button[type="submit"]');let u=null,m=null,i=null,l=null;function h(t,r){return new Promise((n,g)=>{setTimeout(()=>{l=r,Math.random()>.3?n(t):g(t)},r)})}const o={block(){d.disabled=!0,[...s].forEach(t=>{t.disabled=!0})},reset(){f.reset(),d.disabled=!1,[...s].forEach(t=>{t.disabled=!1})}};f.addEventListener("submit",t=>{t.preventDefault(),u=parseInt(t.currentTarget.elements[0].value),m=parseInt(t.currentTarget.elements[1].value),i=parseInt(t.currentTarget.elements[2].value),a.start(),o.block();for(let r=0;r<i;r+=1)h(r+1,u+m*r).then(n=>{c.success({progressBar:!1,close:!1,position:"topRight",icon:"",message:`✅ Fulfilled promise ${n} in ${l}ms`}),n===i&&(a.done(),o.reset())}).catch(n=>{c.error({progressBar:!1,close:!1,position:"topRight",icon:"",message:`❌ Rejected promise ${n} in ${l}ms`}),n===i&&(a.done(),o.reset())})});const p=document.querySelectorAll("label");[...p].forEach(t=>{t.insertAdjacentHTML("beforeend",'<div class="input-background"></div>')});p[p.length-1].insertAdjacentHTML("afterend",`<div class="progress">
        <div class="generator"></div>
        <div class="spiner"></div>
      </div>`);[...s].forEach(t=>{t.setAttribute("min",1)});[...s].forEach(t=>{t.addEventListener("focus",r=>{r.target.nextElementSibling.classList.add("focused")}),t.addEventListener("blur",r=>{r.target.nextElementSibling.classList.remove("focused")})});const a={progress:document.querySelector(".progress"),generator:document.querySelector(".generator"),spiner:document.querySelector(".spiner"),generatorTimer:void 0,spinerTimer:void 0,genStepVar:1,spinStepVar:1,start(){this.generatorTimer=setInterval(()=>{switch(this.genStepVar){case 1:this.generator.textContent="Resolving",this.genStepVar+=1;break;case 2:this.generator.textContent="Resolving.",this.genStepVar+=1;break;case 3:this.generator.textContent="Resolving..",this.genStepVar+=1;break;case 4:this.generator.textContent="Resolving...",this.genStepVar=1;break}},500),this.spinerTimer=setInterval(()=>{switch(this.spinStepVar){case 1:this.spiner.textContent="╱",this.spinStepVar+=1;break;case 2:this.spiner.textContent="──",this.spinStepVar+=1;break;case 3:this.spiner.textContent="╲",this.spinStepVar+=1;break;case 4:this.spiner.textContent="│",this.spinStepVar=1;break}},200)},done(){clearInterval(this.generatorTimer),this.generatorTimer=void 0,clearInterval(this.spinerTimer),this.spinerTimer=void 0,this.progress.innerHTML='<div class="done">Done!</div>',setTimeout(()=>{this.progress.innerHTML=`<div class="generator"></div>
        <div class="spiner"></div>`,this.generator=document.querySelector(".generator"),this.spiner=document.querySelector(".spiner")},2e3)}},b=document.head.querySelector("title");b.insertAdjacentHTML("afterend",`<link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
      rel="stylesheet"
    />
    <link
      rel="preload"
      href="https://upload.wikimedia.org/wikipedia/commons/8/8a/10x10_checkered_board_transparent.svg"
      as="image"
      type="image/svg+xml"
      crossorigin
    />`);const x=document.querySelector("a");x.setAttribute("id","pageLink");document.body.style.cssText="overflow: hidden; width: 100vw; height: 100vh; background: radial-gradient(transparent, #e9e9e9);";const e=document.styleSheets[0];e.insertRule(` #pageLink {
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #1D1B1B;
}`);e.insertRule(` #pageLink:hover {
  color: #00f;
}`);e.insertRule(`@-webkit-keyframes anim-gradient {
  0% {
    background-position: -50% -50%;
  }
  25% {
    background-position: 75% 200%;
  }
  50% {
    background-position: 200% -50%;
  }
  75% {
    background-position: 75% -200%;
  }
  100% {
    background-position: -50% -50%;
  }
}`);e.insertRule(`.form {
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #00f;
  box-shadow: 0 0 0 3px #0ff, 0 0 0 5px #00f, 0 0 0 8px #0ff, 0 0 0 12px #00f,
    15px 15px 0px 10px #00000099;
  color: #0ff;
  font-family: 'VT323', monospace;
  font-size: 20px;
  -webkit-font-smoothing: none;
}`);e.insertRule(`.form::before {
  content: 'PROMISE GENERATOR';
  position: absolute;
  top: 0%;
  left: 50%;
  height: 15px;
  transform: translate(-50%, -11px);
  background-color: #0ff;
  color: #00f;
  padding: 1px 5px 0px 5px;
  vertical-align: text-top;
  line-height: 12px;
}`);e.insertRule(`label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}`);e.insertRule(`label:first-of-type {
  margin-top: 100px;
}`);e.insertRule(`.input-background {
  pointer-events: none;
  position: absolute;
  right: 30px;
  display: block;
  width: 180px;
  height: 22px;
  background-color: #00ffff96;
  -webkit-mask-image: url(https://upload.wikimedia.org/wikipedia/commons/8/8a/10x10_checkered_board_transparent.svg);
  mask-image: url(https://upload.wikimedia.org/wikipedia/commons/8/8a/10x10_checkered_board_transparent.svg);
  -webkit-mask-size: 12%;
  mask-size: 12%;
  -webkit-mask-repeat: repeat;
  mask-repeat: repeat;
}`);e.insertRule(`.focused {
  -webkit-mask-image: none !important;
  mask-image: none !important;
}`);e.insertRule(`input[type='number'] {
  z-index: 1;
  width: 180px;
  height: 22px;
  padding: 0 5px 0;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  caret-color: #f00;
  border: solid 2px transparent;
  background-color: transparent;
  color: #fff;
  -moz-appearance: textfield;
}`);e.insertRule(`input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}`);e.insertRule(`input[type='number']:focus {
  border: dotted 2px #00ffff96;
}`);e.insertRule(`.progress {
  position: absolute;
  top: 280px;
  left: 50%;
  width: 130px;
  height: 30px;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
}`);e.insertRule(`.generator {
  width: 100px;
}`);e.insertRule(`.spiner {
  width: 25px;
  text-align: center;
}`);e.insertRule(`.done {
  width: 100%;
  text-align: center;
}`);e.insertRule(`button[type='submit'] {
  cursor: pointer;
  display: block;
  width: 150px;
  height: 50px;
  background-color: #fff;
  border: none;
  outline: none;
  box-shadow: 5px 5px 0px 0px #00000099;
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  text-align: center;
  margin-top: 120px;
}`);e.insertRule(`button[type='submit']:focus,
button[type='submit']:hover {
  background-color: #ff0;
}`);e.insertRule(`button[type='submit']:active {
  background-color: #ff0;
  box-shadow: none;
  transform: translate(5px, 5px);
}`);e.insertRule(`button[type='submit']:disabled {
  cursor: not-allowed;
  background-color: silver;
  color: gray;
}`);e.insertRule(`button[type='submit']:disabled:focus, button[type='submit']:disabled:hover {
  background-color: silver;
}`);e.insertRule(`button[type='submit']:disabled:active {
  transform: none;
  box-shadow: 5px 5px 0px 0px #00000099;
}
`);
//# sourceMappingURL=commonHelpers3.js.map
