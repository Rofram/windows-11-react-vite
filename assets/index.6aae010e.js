var A=Object.defineProperty;var S=(e,s,p)=>s in e?A(e,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):e[s]=p;var i=(e,s,p)=>(S(e,typeof s!="symbol"?s+"":s,p),p);import{W as M,C as c,s as o,j as u,o as $,m as x,O as b,r as O,F,a as C,b as I,R as T,c as z}from"./vendor.7ead359d.js";const R=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))y(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&y(h)}).observe(document,{childList:!0,subtree:!0});function p(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function y(r){if(r.ep)return;r.ep=!0;const l=p(r);fetch(r.href,l)}};R();const D=M`
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
    overflow: hidden;
  }

  ${({theme:e,removeBg:s})=>c`
    html {
      font-size: 62.5%;
      height: 100%;
    }

    body {
      font-family: ${e.font.family};
      font-size: ${e.font.sizes.medium};
      height: 100%;

      ${!s&&c`
        background-color: ${e.colors.mainBg};
      `}
    }
  `}
`;var B={grid:{container:"130rem",gutter:"3.2rem"},border:{radius:"0.4rem"},font:{family:{roboto:"Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",segoe:"Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},light:300,normal:400,bold:600,sizes:{xsmall:"1.2rem",small:"1.4rem",medium:"1.6rem",large:"1.8rem",xlarge:"2.0rem",xxlarge:"2.8rem",huge:"5.2rem"}},colors:{primary:"#F231A5",secondary:"#3CD3C1",mainBg:"#06092B",lightBg:"#F2F2F2",white:"#FAFAFA",black:"#030517",lightGray:"#EAEAEA",gray:"#8F8F8F",darkGray:"#2E2F42",red:"#FF6347"},spacings:{xxsmall:"0.8rem",xsmall:"1.6rem",small:"2.4rem",medium:"3.2rem",large:"4.0rem",xlarge:"4.8rem",xxlarge:"5.6rem"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transition:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"}};const E=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  margin-right: 1rem;
`,v=o.span`
  ${({theme:e})=>c`
    font-family: ${e.font.family.segoe};
    font-weight: 500;
    font-size: ${e.font.sizes.xsmall};  
    color: ${e.colors.white}
  `}
`,t=u.exports.jsx,n=u.exports.jsxs,f=u.exports.Fragment;class P{constructor(){i(this,"time",new Date);x(this),setInterval(()=>this.updateTime(),1e3)}updateTime(){this.time=new Date}getHours(){const[s,p]=new Intl.DateTimeFormat("pt-br",{dateStyle:"short",timeStyle:"medium"}).format(this.time).split(" ");return[s,p]}}const L=new P;var N=$(function(){const[e,s]=L.getHours();return n(E,{children:[t(v,{children:s}),t(v,{children:e})]})});const W=o.div`
  display: flex;
  gap: 4px;
  align-items: center;
`,g=o.img`
  width: 20px;
  height: 20px;
`;function j(){return n(W,{children:[t(g,{src:"assets/taskbar/Shape.svg",style:{width:12,height:6.5,marginRight:6}}),t(g,{src:"assets/taskbar/WiFi.svg"}),t(g,{src:"assets/taskbar/Speaker.svg"}),t(g,{src:"assets/taskbar/Battery.svg"})]})}const U=o.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;

  &:hover {

  }
`,H=o.div`
  ${({theme:e})=>c`
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
`;function Y(){return n(U,{children:[t("img",{src:"assets/icons/weather.svg",alt:"weather"}),n(H,{children:[t("span",{children:"8\xB0C"}),t("span",{children:"Partly sunny"})]})]})}const G=o.div`
  display: flex;
  gap: 26px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`,d=o.img`
  
`;class X{constructor(){i(this,"user",{img:"https://avatars.githubusercontent.com/u/50988834?v=4",name:"Rodrigo de Fran\xE7a"});i(this,"apps",[{icon:"assets/apps/microsoftEdge.svg",alt:"Edge"},{icon:"assets/apps/world.svg",alt:"World"},{icon:"assets/apps/powerpoint.svg",alt:"PowerPoint"},{icon:"assets/apps/oneNote.svg",alt:"OneNote"},{icon:"assets/apps/mail.svg",alt:"Mail"},{icon:"assets/apps/todo.svg",alt:"To Do"},{icon:"assets/apps/windowsStore.svg",alt:"Microsoft Store"},{icon:"assets/apps/photos.svg",alt:"Photos"},{icon:"assets/apps/yourPhone.svg",alt:"Your Phone"},{icon:"assets/apps/snippingTool.svg",alt:"Snipping Tool"},{icon:"assets/apps/notepad.svg",alt:"Notepad"},{icon:"assets/apps/xbox.svg",alt:"Xbox"},{icon:"assets/apps/twitter.svg",alt:"Twitter"},{icon:"assets/apps/config.svg",alt:"Settings"},{icon:"assets/apps/microsoftNews.svg",alt:"News"},{icon:"assets/apps/spotify.svg",alt:"Spotify"},{icon:"assets/apps/calculadora.svg",alt:"Calculator"},{icon:"assets/apps/paint.svg",alt:"Paint"}]);i(this,"recommendedApps",[{icon:"assets/icons/getStarted.png",title:"Get Started",description:"Welcome to Windows"},{icon:"assets/icons/pdfIcon.png",title:"Rental Agreement",description:"17m ago"},{icon:"assets/icons/wordIcon.png",title:"Syllabus",description:"2h ago"},{icon:"assets/icons/pdfIcon.png",title:"Logo Ideas",description:"12h ago"},{icon:"assets/icons/ppIcon.png",title:"Tournament Photos",description:"Yesterday at 4:20 PM"},{icon:"assets/icons/exelIcon.png",title:"Timetable",description:"Yesterday at 1:15 PM"}]);i(this,"isAllAppsOpened",!1);i(this,"TabIndex",0);i(this,"isStartMenuOpened",!1);x(this)}toggleAllApps(){this.isAllAppsOpened=!this.isAllAppsOpened}setNewApp(s){this.apps.push(s)}setTabIndex(s){this.TabIndex=s}setIsStartMenuOpened(s){this.isStartMenuOpened=s}}var a=new X;function q(){return t(b,{children:()=>n(G,{children:[t(d,{src:"assets/taskbar/Windows.svg",onClick:()=>a.setIsStartMenuOpened(!a.isStartMenuOpened)}),t(d,{src:"assets/taskbar/Search.svg"}),t(d,{src:"assets/taskbar/DesktopManager.svg"}),t(d,{src:"assets/taskbar/Chat.svg"}),t(d,{src:"assets/taskbar/FileExplorer.svg"}),t(d,{src:"assets/taskbar/MicrosoftEdge.svg"})]})})}const K=o.div`
  ${({theme:e})=>c`
    display: flex;
    width: 100vw;
    height: 60px;
    background-color: rgba(68,68,68,0.3);

    justify-content: space-between;
    align-items: center;
    align-self: flex-end;
    backdrop-filter: blur(14px);
  `}
`,J=o.div`
  display: flex;
  gap: 1rem;
`;function Q(){return n(K,{children:[t(Y,{}),t(q,{}),n(J,{children:[t(j,{}),t(N,{})]})]})}const V=o.div`
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
`,Z=o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;
`,_=o.div`
  ${({theme:e})=>c`
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
`,ee=o.div`
  ${({theme:e})=>c`
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
`,m=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5px;

  img {
    width: 40px;
    height: 40px;
  }
`,te=o.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 15px;
  height: 315px;
`,se=o.div`
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
`,w=o.span`
  ${({theme:e})=>c`
    color: ${e.colors.white};
    font-family: ${e.font.family.segoe};
    font-size: 15px;
  `}
`,k=o.button`
  ${({theme:e})=>c`
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
`,oe=o.div`
  margin: 10px 40px 0 40px;
  height: 255px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 auto;
`,ne=o.div`
  ${({theme:e})=>c`
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
`,ie=o.div`
  ${({theme:e})=>c`
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
`,re=o.div`
  display: flex;
  width: 100%;
  backdrop-filter: brightness(0.8);
  border-radius: 0 0 8.75px 8.75px;
  height: 80px;
  padding: 20px 80px;
`,ae=o.div`
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
`,le=$(()=>n(V,{children:[n(Z,{children:[t(_,{children:t("input",{type:"text",placeholder:"Type here to search"})}),n(ee,{children:[t("span",{children:"Pinned"}),t(k,{onClick:()=>a.toggleAllApps(),children:a.isAllAppsOpened?n(f,{children:[t("span",{children:"<"}),t("span",{children:"Back"})]}):n(f,{children:[t("span",{children:"All apps"}),t("span",{children:">"})]})})]}),a.isAllAppsOpened?t(se,{children:a.apps.map(e=>n(m,{children:[t("img",{src:e.icon,alt:e.alt}),t(w,{children:e.alt})]},e.icon))}):t(te,{children:a.apps.map(e=>n(m,{children:[t("img",{src:e.icon,alt:e.alt}),t(w,{children:e.alt})]},e.icon))}),!a.isAllAppsOpened&&n(f,{children:[n(ne,{children:[t("h2",{children:"Recommended"}),n(k,{children:[t("span",{children:"More"}),t("span",{children:">"})]})]}),t(oe,{children:a.recommendedApps.map(e=>n(ie,{children:[t("img",{src:e.icon,alt:e.title}),n("div",{children:[t("span",{children:e.title}),t("p",{children:e.description})]})]}))})]})]}),!a.isAllAppsOpened&&t(re,{children:n(ae,{children:[t("img",{src:a.user.img,alt:""}),t("span",{children:a.user.name})]})})]})),ce=o.div`
  resize: both;
  width: 1100px;
  height: 618.75px;
  
  background-color: red;

  position: absolute;
  border-radius: 8.75px;
`,pe=o.div`
  height: 80px;
  background-color: blue;
`;o.iframe``;class de{constructor(){i(this,"dragging",!1);i(this,"mouseOffset",{x:0,y:0});i(this,"container",null);i(this,"setContainerRef",s=>{this.container=s});i(this,"setDragging",s=>{this.dragging=s});i(this,"onMouseDown",s=>{this.setDragging(!0),this.mouseOffset.x=s.clientX,this.mouseOffset.y=s.clientY,console.log(s.clientX,s.clientY)});i(this,"onMouseUp",s=>{this.setDragging(!1)});i(this,"onMouseMove",s=>{this.dragging&&(this.container.style.left=`${s.clientX-this.mouseOffset.x}px`,this.container.style.top=`${s.clientY-this.mouseOffset.y}px`)});i(this,"onMouseLeave",s=>{this.setDragging(!1)});x(this)}}function ge(){return t(b,{children:()=>{const[e]=O.exports.useState(new de);return t(ce,{ref:s=>e.setContainerRef(s),children:t(pe,{onMouseDown:e.onMouseDown.bind(e),onMouseUp:e.onMouseUp.bind(e),onMouseMove:e.onMouseMove.bind(e),onMouseLeave:e.onMouseLeave.bind(e),children:n("div",{children:[t(F,{}),t(C,{})]})})})}})}const he=o.div`
  background-image: url('/assets/image-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;function fe(){return t(b,{children:()=>n(I,{theme:B,children:[t(D,{}),n(he,{children:[a.isStartMenuOpened&&t(le,{}),t(ge,{}),t(Q,{})]})]})})}T.render(t(z.StrictMode,{children:t(fe,{})}),document.getElementById("root"));
