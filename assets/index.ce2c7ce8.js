import{s as c,j as e,F as f,r as h,a as i,B as m,R as g,b as l,c as y,d as v,l as b,W as x,e as S,f as k,P as R}from"./vendor.9f010218.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}};w();var L="/hackathon/assets/logo.ecc203fb.svg",N=c.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`,A=c.button`
  font-size: calc(10px + 2vmin);
`;const M=()=>e(f,{children:e("p",{children:"Profile"})}),P=()=>e(f,{children:e("p",{children:"Home"})}),j=()=>e(f,{children:e("p",{children:"Topic"})}),C=()=>e(f,{children:e("p",{children:"Video"})}),H=c.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`,O=c.div`
  text-align: center;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`,d=c.p`
  font-size: calc(10px + 2vmin);
  color: white;
`,B=c.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,p=c.a`
  color: #61dafb;
`;function F({num:n=0}){const[r,a]=h.exports.useState(n);return i(O,{children:[i(N,{children:[e(B,{src:L,alt:"logo"}),e(d,{children:"Hello Vite + React!"}),e(d,{children:i(A,{type:"button",onClick:()=>a(s=>s+1),children:["count is: ",r]})}),i(d,{children:["Edit ",e(H,{children:"App.tsx"})," and save to test HMR updates."]}),i(d,{children:[e(p,{href:"https://reactjs.org",rel:"noopener noreferrer",target:"_blank",children:"Learn React"})," | ",e(p,{className:"App-link",href:"https://vitejs.dev/guide/features.html",rel:"noopener noreferrer",target:"_blank",children:"Vite Docs"})]})]}),e(m,{children:i(g,{children:[e(l,{path:"/",element:e(P,{})}),e(l,{path:"/profile",element:e(M,{})}),e(l,{path:"/topic",element:e(j,{})}),e(l,{path:"/video",element:e(C,{})})]})})]})}const z=(n,r)=>{const{status:a,title:s,message:t}=r.payload;n.notification={status:a,title:s,message:t}},D=n=>{n.notification=null},V={loading:!1,notification:null},E=y({name:"ui",initialState:V,reducers:{showNotification:z,hideNotification:D}}),I=v({reducer:{ui:E.reducer},middleware:n=>n().concat(b)}),T=x`
  body {
    margin: 0px;
  }
`;S.render(i(k.StrictMode,{children:[e(R,{store:I,children:e(F,{})}),e(T,{})]}),document.getElementById("root"));
