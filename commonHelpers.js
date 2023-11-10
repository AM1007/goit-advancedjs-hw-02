import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function o(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}function l(){return"linear-gradient("+90+"deg, "+o()+" 0%, "+o()+" 100%)"}function u(){document.body.classList.add("fade-out"),setTimeout(()=>{document.body.style.background=l(),document.body.classList.remove("fade-out"),document.body.classList.add("fade-in"),setTimeout(()=>{document.body.classList.remove("fade-in")},250)},250)}const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.disabled=!0;let s=null;t.addEventListener("click",()=>{s=setInterval(u,1e3),t.disabled=!0,e.disabled=!1});e.addEventListener("click",()=>{clearInterval(s),t.disabled=!1,e.disabled=!0});const a=document.createElement("style");a.textContent="body {transition: background 0.5s ease-in-out;}";document.head.insertAdjacentHTML("beforeend",a);const r=document.createElement("style");r.innerHTML=`
  .fade-in {
    opacity: 0.8;
  }
  `;const d=document.createElement("style");d.innerHTML=`
  .fade-out {
    opacity: 0.2;
    pointer-events: none;
    transition: opacity 0.5s ease-in-out;
  }
`;document.head.insertAdjacentHTML("beforeend",r);document.head.insertAdjacentHTML("beforeend",d);document.styleSheets[0].insertRule(`button {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  mix-blend-mode: multiply;

  margin: 15px;
  padding: 15px 30px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #1D1B1B;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #1D1B1B;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #1D1B1B;
}`);document.styleSheets[0].insertRule(`button:disabled {
  display: none;
}`);t.addEventListener("mouseover",i);e.addEventListener("mouseover",i);t.addEventListener("mouseout",c);e.addEventListener("mouseout",c);function i(){this.style.cssText=`
    color: white;
    box-shadow: inset 0 -100px 0 0 #1D1B1B;
  `}function c(){this.style.cssText=`
  color: #1D1B1B;
  box-shadow: inset 0 0 0 0 #1D1B1B;
`}const n=document.querySelector("a");n.style.cssText=`
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #1D1B1B;

`;n.addEventListener("mouseover",()=>{n.style.cssText=`
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #1D1B1B;
  transition: font-size 0.9s;
  `});n.addEventListener("mouseout",()=>{n.style.cssText=`
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #1D1B1B;
  transition: font-size 0.9s;
  `});
//# sourceMappingURL=commonHelpers.js.map
