var S=Object.defineProperty;var O=(e,n,c)=>n in e?S(e,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[n]=c;var p=(e,n,c)=>(O(e,typeof n!="symbol"?n+"":n,c),c);import{W as F,C as l,s,j as u,o as $,m as x,O as b,r as v,F as M,a as C,b as I,R as T,c as z}from"./vendor.7ead359d.js";const R=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))y(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&y(h)}).observe(document,{childList:!0,subtree:!0});function c(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function y(i){if(i.ep)return;i.ep=!0;const a=c(i);fetch(i.href,a)}};R();const B=F`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }

  }

  #root {
    height: 100%;
  }

  ${({theme:e,removeBg:n})=>l`
    html {
      font-size: 62.5%;
      height: 100%;
    }

    body {
      font-family: ${e.font.family};
      font-size: ${e.font.sizes.medium};
      height: 100%;

      ${!n&&l`
        background-color: ${e.colors.mainBg};
      `}
    }
  `}
`;var E={grid:{container:"130rem",gutter:"3.2rem"},border:{radius:"0.4rem"},font:{family:{roboto:"Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",segoe:"Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},light:300,normal:400,bold:600,sizes:{xsmall:"1.2rem",small:"1.4rem",medium:"1.6rem",large:"1.8rem",xlarge:"2.0rem",xxlarge:"2.8rem",huge:"5.2rem"}},colors:{primary:"#F231A5",secondary:"#3CD3C1",mainBg:"#06092B",lightBg:"#F2F2F2",white:"#FAFAFA",black:"#030517",lightGray:"#EAEAEA",gray:"#8F8F8F",darkGray:"#2E2F42",red:"#FF6347"},spacings:{xxsmall:"0.8rem",xsmall:"1.6rem",small:"2.4rem",medium:"3.2rem",large:"4.0rem",xlarge:"4.8rem",xxlarge:"5.6rem"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transition:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"}};const P=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  margin-right: 1rem;
`,w=s.span`
  ${({theme:e})=>l`
    font-family: ${e.font.family.segoe};
    font-weight: 500;
    font-size: ${e.font.sizes.xsmall};  
    color: ${e.colors.white}
  `}
`,t=u.exports.jsx,o=u.exports.jsxs,f=u.exports.Fragment;class N{constructor(){p(this,"time",new Date);x(this),setInterval(()=>this.updateTime(),1e3)}updateTime(){this.time=new Date}getHours(){const[n,c]=new Intl.DateTimeFormat("pt-br",{dateStyle:"short",timeStyle:"medium"}).format(this.time).split(" ");return[n,c]}}const W=new N;var j=$(function(){const[e,n]=W.getHours();return o(P,{children:[t(w,{children:n}),t(w,{children:e})]})});const L=s.div`
  display: flex;
  gap: 4px;
  align-items: center;
`,g=s.img`
  width: 20px;
  height: 20px;
`;function D(){return o(L,{children:[t(g,{src:"assets/taskbar/Shape.svg",style:{width:12,height:6.5,marginRight:6}}),t(g,{src:"assets/taskbar/WiFi.svg"}),t(g,{src:"assets/taskbar/Speaker.svg"}),t(g,{src:"assets/taskbar/Battery.svg"})]})}const H=s.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;

  &:hover {

  }
`,U=s.div`
  ${({theme:e})=>l`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    span {
      font-family: ${e.font.family.segoe};
      font-size: ${e.font.sizes.small};
      font-weight: 500;
      color: ${e.colors.white};
    }

    span:first-child {
      font-weight: bold;
    }
  `}
`;function G(){return o(H,{children:[t("img",{src:"assets/icons/weather.svg",alt:"weather"}),o(U,{children:[t("span",{children:"8\xB0C"}),t("span",{children:"Partly sunny"})]})]})}const Y=s.div`
  display: flex;
  gap: 26px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`,d=s.img`
  
`;class q{constructor(){p(this,"user",{img:"https://avatars.githubusercontent.com/u/50988834?v=4",name:"Rodrigo de Fran\xE7a"});p(this,"apps",[{icon:"assets/apps/microsoftEdge.svg",alt:"Edge"},{icon:"assets/apps/world.svg",alt:"World"},{icon:"assets/apps/powerpoint.svg",alt:"PowerPoint"},{icon:"assets/apps/oneNote.svg",alt:"OneNote"},{icon:"assets/apps/mail.svg",alt:"Mail"},{icon:"assets/apps/todo.svg",alt:"To Do"},{icon:"assets/apps/windowsStore.svg",alt:"Microsoft Store"},{icon:"assets/apps/photos.svg",alt:"Photos"},{icon:"assets/apps/yourPhone.svg",alt:"Your Phone"},{icon:"assets/apps/snippingTool.svg",alt:"Snipping Tool"},{icon:"assets/apps/notepad.svg",alt:"Notepad"},{icon:"assets/apps/xbox.svg",alt:"Xbox"},{icon:"assets/apps/twitter.svg",alt:"Twitter"},{icon:"assets/apps/config.svg",alt:"Settings"},{icon:"assets/apps/microsoftNews.svg",alt:"News"},{icon:"assets/apps/spotify.svg",alt:"Spotify"},{icon:"assets/apps/calculadora.svg",alt:"Calculator"},{icon:"assets/apps/paint.svg",alt:"Paint"}]);p(this,"recommendedApps",[{icon:"assets/icons/getStarted.png",title:"Get Started",description:"Welcome to Windows"},{icon:"assets/icons/pdfIcon.png",title:"Rental Agreement",description:"17m ago"},{icon:"assets/icons/wordIcon.png",title:"Syllabus",description:"2h ago"},{icon:"assets/icons/pdfIcon.png",title:"Logo Ideas",description:"12h ago"},{icon:"assets/icons/ppIcon.png",title:"Tournament Photos",description:"Yesterday at 4:20 PM"},{icon:"assets/icons/exelIcon.png",title:"Timetable",description:"Yesterday at 1:15 PM"}]);p(this,"isAllAppsOpened",!1);p(this,"TabIndex",0);p(this,"isStartMenuOpened",!1);x(this)}toggleAllApps(){this.isAllAppsOpened=!this.isAllAppsOpened}setNewApp(n){this.apps.push(n)}setTabIndex(n){this.TabIndex=n}setIsStartMenuOpened(n){this.isStartMenuOpened=n}}var r=new q;function K(){return t(b,{children:()=>o(Y,{children:[t(d,{src:"assets/taskbar/Windows.svg",onClick:()=>r.setIsStartMenuOpened(!r.isStartMenuOpened)}),t(d,{src:"assets/taskbar/Search.svg"}),t(d,{src:"assets/taskbar/DesktopManager.svg"}),t(d,{src:"assets/taskbar/Chat.svg"}),t(d,{src:"assets/taskbar/FileExplorer.svg"}),t(d,{src:"assets/taskbar/MicrosoftEdge.svg"})]})})}const X=s.div`
  ${({theme:e})=>l`
    display: flex;
    width: 100vw;
    height: 60px;
    background-color: rgba(68,68,68,0.3);

    justify-content: space-between;
    align-items: center;
    align-self: flex-end;
    backdrop-filter: blur(14px);
  `}
`,J=s.div`
  display: flex;
  gap: 1rem;
`;function Q(){return o(X,{children:[t(G,{}),t(K,{}),o(J,{children:[t(D,{}),t(j,{})]})]})}const V=s.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 925px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  

  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  filter: brightness(0.8);
  border-radius: 8.75px;
`,Z=s.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;
`,_=s.div`
  ${({theme:e})=>l`
    background-color: rgba(48,48,48,0.6);
    border: none;
    border-radius: 5px;
    position: relative;
    
    
    input {
      background: transparent;
      color: ${e.colors.white};
      outline: none;
      border: none;
      width: 100%;
      padding: 10px;

      &::placeholder {
        color: ${e.colors.white};
      }
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: aqua;
    }
  `}
`,ee=s.div`
  ${({theme:e})=>l`
    display: flex;
    margin: 40px 40px 0 40px;

    justify-content: space-between;

    > span {
      color: ${e.colors.white};
      font-family: ${e.font.family.segoe};
      font-weight: bold;
      font-size: 15px;
    }
  `}
`,m=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5px;

  img {
    width: 40px;
    height: 40px;
  }
`,te=s.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 15px;
  height: 315px;
`,se=s.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: none;
  overflow-y: scroll;
  height: 750px;
  margin: 15px 40px 0 40px;

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    background: transparent;
  }

  ${m} {
    flex-direction: row;
    gap: 25px;

    img {
      width: 30px;
      height: 30px;
    }
  }
`,k=s.span`
  ${({theme:e})=>l`
    color: ${e.colors.white};
    font-family: ${e.font.family.segoe};
    font-size: 15px;
  `}
`,A=s.button`
  ${({theme:e})=>l`
    display: flex;
    justify-content: space-around;
    width: 97px;
    height: 28px;
    background: transparent;
    backdrop-filter: brightness(0.7);
    border-radius: 5px;
    border: none;
    
    span {
      color: ${e.colors.white};
      line-height: 27.5px;
    }
  `}
`,ne=s.div`
  margin: 10px 40px 0 40px;
  height: 255px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 auto;
`,oe=s.div`
  ${({theme:e})=>l`
    display: flex;
    justify-content: space-between;
    margin: 20px 40px;

    h2 {
     font-family: ${e.font.family.segoe};
     font-size: 17.5px;
     font-weight: bold;
     color: ${e.colors.white};
    }
  `}
`,ie=s.div`
  ${({theme:e})=>l`
    display: flex;
    align-items: flex-start;
    gap: 15px;

    div {
      display: flex;
      flex-direction: column;
    }

    img {
      width: 40px;
      height: 40px;
    }

    span {
      color: ${e.colors.white};
      font-family: ${e.font.family.segoe};
      font-weight: normal;
      font-size: 15px;
    }

    p {
      color: rgba(255,255,255,0.7);
      font-family: ${e.font.family.roboto};
    }
  `}
`,re=s.div`
  display: flex;
  width: 100%;
  backdrop-filter: brightness(0.8);
  border-radius: 0 0 8.75px 8.75px;
  height: 80px;
  padding: 20px 80px;
`,ae=s.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  span {
    color: ${({theme:e})=>e.colors.white};
    font-family: ${({theme:e})=>e.font.family.segoe};
    font-size: 15px;
    font-weight: normal;
  }
`,le=$(()=>o(V,{children:[o(Z,{children:[t(_,{children:t("input",{type:"text",placeholder:"Type here to search"})}),o(ee,{children:[t("span",{children:"Pinned"}),t(A,{onClick:()=>r.toggleAllApps(),children:r.isAllAppsOpened?o(f,{children:[t("span",{children:"<"}),t("span",{children:"Back"})]}):o(f,{children:[t("span",{children:"All apps"}),t("span",{children:">"})]})})]}),r.isAllAppsOpened?t(se,{children:r.apps.map(e=>o(m,{children:[t("img",{src:e.icon,alt:e.alt}),t(k,{children:e.alt})]},e.icon))}):t(te,{children:r.apps.map(e=>o(m,{children:[t("img",{src:e.icon,alt:e.alt}),t(k,{children:e.alt})]},e.icon))}),!r.isAllAppsOpened&&o(f,{children:[o(oe,{children:[t("h2",{children:"Recommended"}),o(A,{children:[t("span",{children:"More"}),t("span",{children:">"})]})]}),t(ne,{children:r.recommendedApps.map(e=>o(ie,{children:[t("img",{src:e.icon,alt:e.title}),o("div",{children:[t("span",{children:e.title}),t("p",{children:e.description})]})]}))})]})]}),!r.isAllAppsOpened&&t(re,{children:o(ae,{children:[t("img",{src:r.user.img,alt:""}),t("span",{children:r.user.name})]})})]})),ce=s.div`
  resize: both;
  width: 1100px;
  height: 618.75px;
  
  background-color: red;

  position: absolute;
`,pe=s.div`
  height: 120px;
`;s.iframe``;class de{constructor(){p(this,"dragging",!1);x(this)}}function ge(){return t(b,{children:()=>{const e=v.exports.useRef(null);return v.exports.useState(new de),t(ce,{ref:e,children:t(pe,{children:o("div",{children:[t(M,{}),t(C,{})]})})})}})}const he=s.div`
  background-image: url('/assets/image-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;function fe(){return t(b,{children:()=>o(I,{theme:E,children:[t(B,{}),o(he,{children:[r.isStartMenuOpened&&t(le,{}),t(ge,{}),t(Q,{})]})]})})}T.render(t(z.StrictMode,{children:t(fe,{})}),document.getElementById("root"));
