import{s as n,j as p,r as u,W as m,R as g,a as h}from"./vendor.7a51bf54.js";const y=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};y();var v="/hackathon/assets/logo.ecc203fb.svg",x=n.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`,b=n.button`
  font-size: calc(10px + 2vmin);
`;const o=p.exports.jsx,s=p.exports.jsxs,k=n.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`,j=n.div`
  text-align: center;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`,c=n.p`
  font-size: calc(10px + 2vmin);
  color: white;
`,L=n.img`
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
`,f=n.a`
  color: #61dafb;
`;function R({num:d=0}){const[r,a]=u.exports.useState(d);return o(j,{children:s(x,{children:[o(L,{src:v,alt:"logo"}),o(c,{children:"Hello Vite + React!"}),o(c,{children:s(b,{type:"button",onClick:()=>a(i=>i+1),children:["count is: ",r]})}),s(c,{children:["Edit ",o(k,{children:"App.tsx"})," and save to test HMR updates."]}),s(c,{children:[o(f,{href:"https://reactjs.org",rel:"noopener noreferrer",target:"_blank",children:"Learn React"})," | ",o(f,{className:"App-link",href:"https://vitejs.dev/guide/features.html",rel:"noopener noreferrer",target:"_blank",children:"Vite Docs"})]})]})})}const S=m`
  body {
    margin: 0px;
  }
`;g.render(s(h.StrictMode,{children:[o(R,{}),o(S,{})]}),document.getElementById("root"));
