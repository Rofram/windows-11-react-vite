var A=Object.defineProperty;var $=(e,n,c)=>n in e?A(e,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[n]=c;var p=(e,n,c)=>($(e,typeof n!="symbol"?n+"":n,c),c);import{W as S,C as l,s,j as u,o as w,m as k,O as F,F as O,R as C,a as T}from"./vendor.6b280d59.js";const z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))x(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&x(m)}).observe(document,{childList:!0,subtree:!0});function c(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function x(i){if(i.ep)return;i.ep=!0;const r=c(i);fetch(i.href,r)}};z();const I=S`
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

  ${({theme:e,removeBg:n})=>l`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${e.font.family};
      font-size: ${e.font.sizes.medium};

      ${!n&&l`
        background-color: ${e.colors.mainBg};
      `}
    }
  `}
`;var M={grid:{container:"130rem",gutter:"3.2rem"},border:{radius:"0.4rem"},font:{family:{roboto:"Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",segoe:"Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},light:300,normal:400,bold:600,sizes:{xsmall:"1.2rem",small:"1.4rem",medium:"1.6rem",large:"1.8rem",xlarge:"2.0rem",xxlarge:"2.8rem",huge:"5.2rem"}},colors:{primary:"#F231A5",secondary:"#3CD3C1",mainBg:"#06092B",lightBg:"#F2F2F2",white:"#FAFAFA",black:"#030517",lightGray:"#EAEAEA",gray:"#8F8F8F",darkGray:"#2E2F42",red:"#FF6347"},spacings:{xxsmall:"0.8rem",xsmall:"1.6rem",small:"2.4rem",medium:"3.2rem",large:"4.0rem",xlarge:"4.8rem",xxlarge:"5.6rem"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transition:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"}};const B=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  margin-right: 1rem;
`,b=s.span`
  ${({theme:e})=>l`
    font-family: ${e.font.family.segoe};
    font-weight: 500;
    font-size: ${e.font.sizes.xsmall};  
    color: ${e.colors.white}
  `}
`,t=u.exports.jsx,o=u.exports.jsxs,f=u.exports.Fragment;class R{constructor(){p(this,"time",new Date);k(this),setInterval(()=>this.updateTime(),1e3)}updateTime(){this.time=new Date}getHours(){const[n,c]=new Intl.DateTimeFormat("pt-br",{dateStyle:"short",timeStyle:"medium"}).format(this.time).split(" ");return[n,c]}}const P=new R;var N=w(function(){const[e,n]=P.getHours();return o(B,{children:[t(b,{children:n}),t(b,{children:e})]})});const W=s.div`
  display: flex;
  gap: 4px;
  align-items: center;
`,g=s.img`
  width: 20px;
  height: 20px;
`;function j(){return o(W,{children:[t(g,{src:"assets/taskbar/Shape.svg",style:{width:12,height:6.5,marginRight:6}}),t(g,{src:"assets/taskbar/WiFi.svg"}),t(g,{src:"assets/taskbar/Speaker.svg"}),t(g,{src:"assets/taskbar/Battery.svg"})]})}const E=s.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;

  &:hover {

  }
`,L=s.div`
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
`;function D(){return o(E,{children:[t("img",{src:"assets/icons/weather.svg",alt:"weather"}),o(L,{children:[t("span",{children:"8\xB0C"}),t("span",{children:"Partly sunny"})]})]})}const G=s.div`
  display: flex;
  gap: 26px;
`,d=s.img`
  
`;class H{constructor(){p(this,"user",{img:"https://avatars.githubusercontent.com/u/50988834?v=4",name:"Rodrigo de Fran\xE7a"});p(this,"apps",[{icon:"assets/apps/microsoftEdge.svg",alt:"Edge"},{icon:"assets/apps/world.svg",alt:"World"},{icon:"assets/apps/powerpoint.svg",alt:"PowerPoint"},{icon:"assets/apps/oneNote.svg",alt:"OneNote"},{icon:"assets/apps/mail.svg",alt:"Mail"},{icon:"assets/apps/todo.svg",alt:"To Do"},{icon:"assets/apps/windowsStore.svg",alt:"Microsoft Store"},{icon:"assets/apps/photos.svg",alt:"Photos"},{icon:"assets/apps/yourPhone.svg",alt:"Your Phone"},{icon:"assets/apps/snippingTool.svg",alt:"Snipping Tool"},{icon:"assets/apps/notepad.svg",alt:"Notepad"},{icon:"assets/apps/xbox.svg",alt:"Xbox"},{icon:"assets/apps/twitter.svg",alt:"Twitter"},{icon:"assets/apps/config.svg",alt:"Settings"},{icon:"assets/apps/microsoftNews.svg",alt:"News"},{icon:"assets/apps/spotify.svg",alt:"Spotify"},{icon:"assets/apps/calculadora.svg",alt:"Calculator"},{icon:"assets/apps/paint.svg",alt:"Paint"}]);p(this,"recommendedApps",[{icon:"assets/icons/getStarted.png",title:"Get Started",description:"Welcome to Windows"},{icon:"assets/icons/pdfIcon.png",title:"Rental Agreement",description:"17m ago"},{icon:"assets/icons/wordIcon.png",title:"Syllabus",description:"2h ago"},{icon:"assets/icons/pdfIcon.png",title:"Logo Ideas",description:"12h ago"},{icon:"assets/icons/ppIcon.png",title:"Tournament Photos",description:"Yesterday at 4:20 PM"},{icon:"assets/icons/exelIcon.png",title:"Timetable",description:"Yesterday at 1:15 PM"}]);p(this,"isAllAppsOpened",!1);p(this,"TabIndex",0);k(this)}toggleAllApps(){this.isAllAppsOpened=!this.isAllAppsOpened}setNewApp(n){this.apps.push(n)}setTabIndex(n){this.TabIndex=n}}var a=new H;function U(){return t(F,{children:()=>o(G,{children:[t(d,{src:"assets/taskbar/Windows.svg",onClick:a.toggleAllApps}),t(d,{src:"assets/taskbar/Search.svg"}),t(d,{src:"assets/taskbar/DesktopManager.svg"}),t(d,{src:"assets/taskbar/Chat.svg"}),t(d,{src:"assets/taskbar/FileExplorer.svg"}),t(d,{src:"assets/taskbar/MicrosoftEdge.svg"})]})})}const Y=s.div`
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
`,q=s.div`
  display: flex;
  gap: 1rem;
`;function K(){return o(Y,{children:[t(D,{}),t(U,{}),o(q,{children:[t(j,{}),t(N,{})]})]})}const X=s.div`
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
`,J=s.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;
`,Q=s.div`
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
`,V=s.div`
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
`,h=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5px;

  img {
    width: 40px;
    height: 40px;
  }
`,Z=s.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 15px;
  height: 315px;
`,_=s.div`
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

  ${h} {
    flex-direction: row;
    gap: 25px;

    img {
      width: 30px;
      height: 30px;
    }
  }
`,y=s.span`
  ${({theme:e})=>l`
    color: ${e.colors.white};
    font-family: ${e.font.family.segoe};
    font-size: 15px;
  `}
`,v=s.button`
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
`,ee=s.div`
  margin: 10px 40px 0 40px;
  height: 255px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 auto;
`,te=s.div`
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
`,se=s.div`
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
`,oe=s.div`
  display: flex;
  width: 100%;
  backdrop-filter: brightness(0.8);
  border-radius: 0 0 8.75px 8.75px;
  height: 80px;
  padding: 20px 80px;
`,ne=s.div`
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
`,ie=w(()=>o(X,{children:[o(J,{children:[t(Q,{children:t("input",{type:"text",placeholder:"Type here to search"})}),o(V,{children:[t("span",{children:"Pinned"}),t(v,{onClick:()=>a.toggleAllApps(),children:a.isAllAppsOpened?o(f,{children:[t("span",{children:"<"}),t("span",{children:"Back"})]}):o(f,{children:[t("span",{children:"All apps"}),t("span",{children:">"})]})})]}),a.isAllAppsOpened?t(_,{children:a.apps.map(e=>o(h,{children:[t("img",{src:e.icon,alt:e.alt}),t(y,{children:e.alt})]},e.icon))}):t(Z,{children:a.apps.map(e=>o(h,{children:[t("img",{src:e.icon,alt:e.alt}),t(y,{children:e.alt})]},e.icon))}),!a.isAllAppsOpened&&o(f,{children:[o(te,{children:[t("h2",{children:"Recommended"}),o(v,{children:[t("span",{children:"More"}),t("span",{children:">"})]})]}),t(ee,{children:a.recommendedApps.map(e=>o(se,{children:[t("img",{src:e.icon,alt:e.title}),o("div",{children:[t("span",{children:e.title}),t("p",{children:e.description})]})]}))})]})]}),!a.isAllAppsOpened&&t(oe,{children:o(ne,{children:[t("img",{src:a.user.img,alt:""}),t("span",{children:a.user.name})]})})]})),re=s.div`
  background-image: url('/assets/image-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
`;function ae(){return o(O,{theme:M,children:[t(I,{}),o(re,{children:[t(ie,{}),t(K,{})]})]})}C.render(t(T.StrictMode,{children:t(ae,{})}),document.getElementById("root"));
