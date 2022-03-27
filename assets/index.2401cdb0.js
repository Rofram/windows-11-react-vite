var P=Object.defineProperty;var S=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var $=(e,s,r)=>s in e?P(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,h=(e,s)=>{for(var r in s||(s={}))R.call(s,r)&&$(e,r,s[r]);if(S)for(var r of S(s))q.call(s,r)&&$(e,r,s[r]);return e};var i=(e,s,r)=>($(e,typeof s!="symbol"?s+"":s,r),r);import{W as U,C as a,s as o,m,j as M,O as x,r as v,U as b,B as E,a as j,b as W,F as L,c as N,I as H,d as X,e as G,f as Y,g as K,h as F,o as Q,i as V,R as D,k as _}from"./vendor.f1beedd9.js";const J=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))f(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const k of c.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&f(k)}).observe(document,{childList:!0,subtree:!0});function r(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerpolicy&&(c.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?c.credentials="include":l.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function f(l){if(l.ep)return;l.ep=!0;const c=r(l);fetch(l.href,c)}};J();const Z=U`
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

  ${({theme:e,removeBg:s})=>a`
    html {
      font-size: 62.5%;
      height: 100%;
    }

    body {
      font-family: ${e.font.family};
      font-size: ${e.font.sizes.medium};
      height: 100%;

      ${!s&&a`
        background-color: ${e.colors.mainBg};
      `}
    }
  `}
`;var ee={grid:{container:"130rem",gutter:"3.2rem"},border:{radius:"0.4rem"},font:{family:{roboto:"Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",segoe:"Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",openSans:"Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},light:300,normal:400,bold:600,sizes:{xsmall:"1.2rem",small:"1.4rem",medium:"1.6rem",large:"1.8rem",xlarge:"2.0rem",xxlarge:"2.8rem",huge:"5.2rem"}},colors:{primary:"#60CDFF",secondary:"#3CD3C1",mainBg:"#06092B",lightBg:"#F2F2F2",white:"#FAFAFA",black:"#030517",lightGray:"#EAEAEA",gray:"#8F8F8F",darkGray:"#2E2F42",red:"#FF6347"},spacings:{xxsmall:"0.8rem",xsmall:"1.6rem",small:"2.4rem",medium:"3.2rem",large:"4.0rem",xlarge:"4.8rem",xxlarge:"5.6rem"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transition:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"}};const te=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  margin-right: 1rem;
`,T=o.span`
  ${({theme:e})=>a`
    font-family: ${e.font.family.segoe};
    font-weight: 500;
    font-size: ${e.font.sizes.xsmall};  
    color: ${e.colors.white}
  `}
`;class se{constructor(){i(this,"time",new Date);m(this),setInterval(()=>this.tick(),1e3)}tick(){this.time=new Date}getHours(){const[s,r]=new Intl.DateTimeFormat("pt-br",{dateStyle:"short",timeStyle:"medium"}).format(this.time).split(" ");return[s,r]}}var oe=new se;const t=M.exports.jsx,n=M.exports.jsxs,C=M.exports.Fragment;function ie(){return t(x,{children:()=>{const[e,s]=oe.getHours();return n(te,{children:[t(T,{children:s}),t(T,{children:e})]})}})}const ne=o.div`
  display: flex;
  height: 40px;
  align-self: center;
  gap: 4px;
  align-items: center;
  padding: 1rem;
  border-radius: 8.75px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,y=o.img`
  width: 20px;
  height: 20px;
`,re=o.div`
  display: flex;
  height: 55px;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${y} {
    width: 12px;
    height: 6.5px;
  }
`;class ae{constructor(){i(this,"startMenu",{isOpen:!1,requestToClose:!1});i(this,"systemTrayPopup",{isOpen:!1,requestToClose:!1});i(this,"calendar",{isOpen:!1,requestToClose:!1});i(this,"apps",new Map);m(this,{},{autoBind:!0})}addApp(s){this.apps.set(s.store.uuid,s)}removeApp(s){this.apps.delete(s)}setFocus(s){Array.from(this.apps.values()).forEach(r=>{r.store.setIsFocused(r.store.uuid===s)})}toggleCalendar(){if(this.calendar.isOpen){this.calendar.requestToClose=!0,setTimeout(()=>{v(()=>{this.calendar.isOpen=!1,this.calendar.requestToClose=!1})},300);return}this.calendar.isOpen=!0}toggleStartMenuOpened(){if(this.startMenu.isOpen){this.startMenu.requestToClose=!0,setTimeout(()=>{v(()=>{this.startMenu.isOpen=!1,this.startMenu.requestToClose=!1})},300);return}this.startMenu.isOpen=!0}toggleSystemTrayPopup(){if(this.systemTrayPopup.isOpen){this.systemTrayPopup.requestToClose=!0,setTimeout(()=>{v(()=>{this.systemTrayPopup.isOpen=!1,this.systemTrayPopup.requestToClose=!1})},300);return}this.systemTrayPopup.isOpen=!0}}var p=new ae;function le(){return n("div",{style:{display:"flex"},children:[t(re,{children:t(y,{src:"assets/taskbar/Shape.svg"})}),n(ne,{onClick:()=>p.toggleSystemTrayPopup(),children:[t(y,{src:"assets/taskbar/WiFi.svg"}),t(y,{src:"assets/taskbar/Speaker.svg"}),t(y,{src:"assets/taskbar/Battery.svg"})]})]})}const ce=o.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;

  &:hover {

  }
`,de=o.div`
  ${({theme:e})=>a`
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
`;function pe(){return n(ce,{children:[t("img",{src:"assets/icons/weather.svg",alt:"weather"}),n(de,{children:[t("span",{children:"8\xB0C"}),t("span",{children:"Partly sunny"})]})]})}const ue=o.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 10px;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8.75px;

    &:hover {
      background-color: rgba(255,255,255,0.1);
    }
  }
`,g=o.img`
  width: 30px;
  height: 30px;
  outline: none;
`;class he{constructor(){i(this,"search","");i(this,"input",null);m(this,{},{autoBind:!0})}setInputRef(s){this.input=s}onMount(){document.addEventListener("keyup",this.onKeyUp)}onUnmount(){document.removeEventListener("keyup",this.onKeyUp)}onKeyUp(s){s.key==="Enter"&&(this.search=this.input.value,console.log(this.input.value))}}var ge=new he;const me=b`
  0% {
    width: 550px;
    height: 309.375px;
    opacity: 0;
  }
  100% {
    width: 1100px;
    height: 618.75px;
    opacity: 1;
  }
`,fe=b`
  0% {
    width: 1100px;
    height: 618.75px;
    opacity: 1;
  }
  100% {
    width: 550px;
    height: 309.375px;
    opacity: 0;
  }
`,xe=o.div`
  ${({requestToClose:e,isFocused:s,isMinimized:r,isMaximized:f})=>a`
    resize: both;
    width: 1100px;
    height: 618.75px;
    
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14px);

    position: absolute;
    border-radius: 8.75px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${s?"15":"5"};

    animation: ${e?fe:me} 0.3s ease;
  `}
`,be=o.div`
  display: flex;
  height: 40px;
  background: transparent;
  color: ${({theme:e})=>e.colors.white};
  padding: 0 1rem;
  border-radius: 8.75px 8.75px 0 0;

  justify-content: flex-end;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem
  }
`,ye=o.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 8.75px 8.75px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 8.75px 8.75px;
  }
`;class we{constructor(){i(this,"dragging",!1);i(this,"mouseOffset",{x:0,y:0});i(this,"containerPosition",{x:0,y:0});i(this,"container",null);i(this,"isFocused",!1);i(this,"isMaximized",!1);i(this,"isMinimized",!1);i(this,"uuid",window.crypto.randomUUID());i(this,"titleBar",!0);i(this,"minimizeButton",!0);i(this,"maximizeButton",!0);i(this,"requestToClose",!1);m(this,{},{autoBind:!0})}setIsFocused(s){this.isFocused=s}setIsMaximized(s){this.isMaximized=s}setIsMinimized(s){this.isMinimized=s}setMaximizeButton(s){this.maximizeButton=s}setRequestToClose(s){this.requestToClose=s}setMinimizeButton(s){this.minimizeButton=s}setContainerRef(s){this.container=s}setDragging(s){this.dragging=s}onMouseDown(s){var r,f,l,c;this.setDragging(!0),this.mouseOffset.x=s.clientX,this.mouseOffset.y=s.clientY,this.containerPosition.x=(f=(r=this.container)==null?void 0:r.offsetLeft)!=null?f:0,this.containerPosition.y=(c=(l=this.container)==null?void 0:l.offsetTop)!=null?c:0,p.setFocus(this.uuid)}onMouseUp(s){this.setDragging(!1)}onMouseMove(s){this.dragging&&(this.container.style.left=`${s.clientX+this.containerPosition.x-this.mouseOffset.x}px`,this.container.style.top=`${s.clientY+this.containerPosition.y-this.mouseOffset.y}px`)}onMouseLeave(s){this.setDragging(!1)}}class I{constructor(){i(this,"store",new we)}setMinimizeButton(s){this.store.setMinimizeButton(s)}setMaximizeButton(s){this.store.setMaximizeButton(s)}close(){this.store.setRequestToClose(!0),setTimeout(()=>{v(()=>{p.removeApp(this.store.uuid)})},300)}render(s){return t(x,{children:()=>n(xe,{ref:r=>this.store.setContainerRef(r),requestToClose:this.store.requestToClose,isFocused:this.store.isFocused,children:[this.store.titleBar&&t(be,{onMouseDown:this.store.onMouseDown,onMouseUp:this.store.onMouseUp,onMouseMove:this.store.onMouseMove,onMouseLeave:this.store.onMouseLeave,children:n("div",{children:[this.store.minimizeButton&&t(E,{}),this.store.maximizeButton&&t(j,{}),t(W,{onClick:this.close.bind(this)})]})}),t(ye,{children:s})]})})}}class ve extends I{constructor(){super()}render(){return super.render(t("iframe",{src:`https://www.bing.com.br/search?q=${ge.search}`}))}}class ke extends I{constructor(){super()}render(){return super.render(t("iframe",{src:"https://www.vscode.dev"}))}}function $e(){return t(x,{children:()=>n(ue,{children:[t("button",{onClick:()=>p.toggleStartMenuOpened(),children:t(g,{src:"assets/taskbar/Windows.svg"})}),t("button",{onClick:()=>{},children:t(g,{src:"assets/taskbar/Search.svg"})}),t("button",{onClick:()=>{},children:t(g,{src:"assets/taskbar/DesktopManager.svg"})}),t("button",{onClick:()=>{},children:t(g,{src:"assets/taskbar/Chat.svg"})}),t("button",{onClick:()=>{},children:t(g,{src:"assets/taskbar/FileExplorer.svg"})}),t("button",{onClick:()=>p.addApp(new ve),children:t(g,{src:"assets/taskbar/MicrosoftEdge.svg"})}),t("button",{onClick:()=>p.addApp(new ke),children:t(g,{src:"assets/taskbar/vscode.png"})})]})})}const Ce=o.div`
  ${({theme:e})=>a`
    display: flex;
    width: 100vw;
    height: 60px;
    background-color: rgba(68,68,68,0.3);
    z-index: 100;

    justify-content: space-between;
    align-items: center;
    align-self: flex-end;
    backdrop-filter: blur(14px);
  `}
`,Ae=o.div`
  display: flex;
  gap: 1rem;
`;function Me(){return n(Ce,{children:[t(pe,{}),t($e,{}),n(Ae,{children:[t(le,{}),t(ie,{})]})]})}const Se=b`
  0% {
    transform: translateX(-50%);
    bottom: -1000px;
  }
  100% {
    transform: translateX(-50%);
    bottom: 70px;
  }
`,Te=b`
  0% {
    transform: translateX(-50%);
    bottom: 70px;
  }
  100% {
    transform: translateX(-50%);
    bottom: -1000px;
  }
`,Oe=o.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 925px;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${({requestToClose:e})=>e?Te:Se} 0.5s ease-in-out;
  

  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  filter: brightness(0.8);
  border-radius: 8.75px;
  z-index: 50;
`,ze=o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;
`,Be=o.div`
  ${({theme:e})=>a`
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
`,Fe=o.div`
  ${({theme:e})=>a`
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
`,A=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5px;

  img {
    width: 40px;
    height: 40px;
  }
`,De=o.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 15px;
  height: 315px;
`,Ie=o.div`
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

  ${A} {
    flex-direction: row;
    gap: 25px;

    img {
      width: 30px;
      height: 30px;
    }
  }
`,O=o.span`
  ${({theme:e})=>a`
    color: ${e.colors.white};
    font-family: ${e.font.family.segoe};
    font-size: 15px;
  `}
`,z=o.button`
  ${({theme:e})=>a`
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
`,Pe=o.div`
  margin: 10px 40px 0 40px;
  height: 255px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 auto;
`,Re=o.div`
  ${({theme:e})=>a`
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
`,qe=o.div`
  ${({theme:e})=>a`
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
`,Ue=o.div`
  display: flex;
  width: 100%;
  backdrop-filter: brightness(0.8);
  border-radius: 0 0 8.75px 8.75px;
  height: 80px;
  padding: 20px 80px;
`,Ee=o.div`
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
`;class je{constructor(){i(this,"tabIndex",0);i(this,"isAllAppsOpened",!1);i(this,"user",{img:"https://avatars.githubusercontent.com/u/50988834?v=4",name:"Rodrigo de Fran\xE7a"});i(this,"apps",[{icon:"assets/apps/microsoftEdge.svg",alt:"Edge"},{icon:"assets/apps/world.svg",alt:"World"},{icon:"assets/apps/powerpoint.svg",alt:"PowerPoint"},{icon:"assets/apps/oneNote.svg",alt:"OneNote"},{icon:"assets/apps/mail.svg",alt:"Mail"},{icon:"assets/apps/todo.svg",alt:"To Do"},{icon:"assets/apps/windowsStore.svg",alt:"Microsoft Store"},{icon:"assets/apps/photos.svg",alt:"Photos"},{icon:"assets/apps/yourPhone.svg",alt:"Your Phone"},{icon:"assets/apps/snippingTool.svg",alt:"Snipping Tool"},{icon:"assets/apps/notepad.svg",alt:"Notepad"},{icon:"assets/apps/xbox.svg",alt:"Xbox"},{icon:"assets/apps/twitter.svg",alt:"Twitter"},{icon:"assets/apps/config.svg",alt:"Settings"},{icon:"assets/apps/microsoftNews.svg",alt:"News"},{icon:"assets/apps/spotify.svg",alt:"Spotify"},{icon:"assets/apps/calculadora.svg",alt:"Calculator"},{icon:"assets/apps/paint.svg",alt:"Paint"}]);i(this,"recommendedApps",[{icon:"assets/icons/getStarted.png",title:"Get Started",description:"Welcome to Windows"},{icon:"assets/icons/pdfIcon.png",title:"Rental Agreement",description:"17m ago"},{icon:"assets/icons/wordIcon.png",title:"Syllabus",description:"2h ago"},{icon:"assets/icons/pdfIcon.png",title:"Logo Ideas",description:"12h ago"},{icon:"assets/icons/ppIcon.png",title:"Tournament Photos",description:"Yesterday at 4:20 PM"},{icon:"assets/icons/exelIcon.png",title:"Timetable",description:"Yesterday at 1:15 PM"}]);m(this,{},{autoBind:!0})}setTabIndex(s){this.tabIndex=s}toggleAllApps(){this.isAllAppsOpened=!this.isAllAppsOpened}}var d=new je;function We(){return t(x,{children:()=>n(Oe,{requestToClose:p.startMenu.requestToClose,children:[n(ze,{children:[t(Be,{children:t("input",{type:"text",placeholder:"Type here to search"})}),n(Fe,{children:[t("span",{children:"Pinned"}),t(z,{onClick:()=>d.toggleAllApps(),children:d.isAllAppsOpened?n(C,{children:[t("span",{children:"<"}),t("span",{children:"Back"})]}):n(C,{children:[t("span",{children:"All apps"}),t("span",{children:">"})]})})]}),d.isAllAppsOpened?t(Ie,{children:d.apps.map(e=>n(A,{children:[t("img",{src:e.icon,alt:e.alt}),t(O,{children:e.alt})]},e.icon))}):t(De,{children:d.apps.map(e=>n(A,{children:[t("img",{src:e.icon,alt:e.alt}),t(O,{children:e.alt})]},e.icon))}),!d.isAllAppsOpened&&n(C,{children:[n(Re,{children:[t("h2",{children:"Recommended"}),n(z,{children:[t("span",{children:"More"}),t("span",{children:">"})]})]}),t(Pe,{children:d.recommendedApps.map(e=>n(qe,{children:[t("img",{src:e.icon,alt:e.title}),n("div",{children:[t("span",{children:e.title}),t("p",{children:e.description})]})]},e.title))})]})]}),!d.isAllAppsOpened&&t(Ue,{children:n(Ee,{children:[t("img",{src:d.user.img,alt:""}),t("span",{children:d.user.name})]})})]})})}const Le=b`
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 70px;
  }
`,Ne=b`
  0% {
    bottom: 70px;
  }
  100% {
    bottom: -200px;
  }
`,He=o.div`
  width: 467.5px;
  position: absolute;
  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  filter: brightness(0.8);
  bottom: 70px;
  right: 1%;
  border-radius: 8.75px;
  animation: ${({requestToClose:e})=>e?Ne:Le} 0.3s ease-in;
`,Xe=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  margin: 2rem auto;
`,Ge=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.white};
  gap: 10px;
  
  button {
    width: 128px;
    height: 62px;
    border-radius: 8.75px;
    background: rgba(255,255,255,0.05);
    border: none;

    &:hover {
      background-color: rgba(255,255,255,0.1);
    }

    &.active {
      background-color: #60cdff;
    }
  }

  span {
    font-size: 1.5rem;
    font-family: ${({theme:e})=>e.font.family.segoe};
    font-weight: normal;
  }
`,Ye=o.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`,Ke=o.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  gap: 5rem;
  margin: 2rem 0;
`,B=o.input`
  width: 100%;
  -webkit-appearance: none;
  border-radius: 14px;
  background: transparent;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: #9b9da1;
    border-radius: 14px;
    border: 0px solid #000000;
  }

  &:focus::-webkit-slider-runnable-track {
    background: #9B9DA1C4;
  }

  &::-webkit-slider-thumb {
    border: 6px solid #454545;
    height: 26px;
    width: 26px;
    
    border-radius: 23px;
    background: #60cdff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
  }
`,Qe=o.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  flex: 1;
  height: 50px;
  background: rgba(68,68,68,0.3);
  filter: brightness(0.8);

  span {
    font-size: 1.5rem;
    font-family: ${({theme:e})=>e.font.family.segoe};
    font-weight: normal;
    color: white;
  }
`;class Ve{constructor(){i(this,"iconOptions",{color:"#fff",size:18});i(this,"buttons",[{icon:t(L,h({},this.iconOptions)),title:"Wi-fi",isActive:!1},{icon:t(N,h({},this.iconOptions)),title:"Bluetooth",isActive:!1},{icon:t(H,h({},this.iconOptions)),title:"Airplane mode",isActive:!1},{icon:t(X,h({},this.iconOptions)),title:"Battery saver",isActive:!1},{icon:t(G,h({},this.iconOptions)),title:"Focus assist",isActive:!1},{icon:t(Y,h({},this.iconOptions)),title:"Accessibility",isActive:!1}]);m(this)}}var w=new Ve;function _e(){return t(x,{children:()=>n(He,{requestToClose:p.systemTrayPopup.requestToClose,children:[n(Ye,{children:[t(Xe,{children:w.buttons.map((e,s)=>n(Ge,{children:[t("button",{onClick:()=>{w.buttons[s].isActive=!w.buttons[s].isActive},className:w.buttons[s].isActive?"active":"",children:e.icon}),t("span",{children:e.title})]},e.title))}),n(Ke,{children:[t(B,{type:"range"}),t(B,{type:"range"})]})]}),t(Qe,{children:t("span",{children:"92%"})})]})})}const Je=o.div`
  ${({theme:e,requestToClose:s})=>a`
    display: flex;
    flex-direction: column;
    border-radius: 8.75px;
    position: absolute;
    bottom: 70px;
    right: 15px;
    width: 470px;
    height: 515px;
    background-color: rgba(68, 68, 68, 0.4);
    backdrop-filter: blur(40px);
  `}
`,Ze=o.div`
  display: flex;
  height: 70px;
  background-color: rgba(68, 68, 68, 0.3);
  color: ${({theme:e})=>e.colors.white};
  padding: 0 2rem;
  border-radius: 8.75px 8.75px 0 0;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.5rem;
    font-family: ${({theme:e})=>e.font.family.openSans};
    color: #fff;
    
    &:hover {
      filter: brightness(0.8);
      cursor: default;
    }
  }
`,et=o.div`
  ${({theme:e})=>a`
    display: flex;
    margin-top: 6px;
    
    div {
      display: flex;
      gap: 1rem;
      padding: 1.2rem 2.2rem;
    }

    span {
      font-size: 1.6rem;
      font-weight: 600;
      font-family: ${e.font.family.openSans};
      color: ${e.colors.white};
      text-transform: capitalize;
    }
  `}
`,tt=o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 0 3rem;
  place-content: center;
`,st=o.div`
  ${({theme:e,isToday:s,isSelected:r})=>a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: ${s?e.colors.primary:"transparent"};

    span {
      color: ${s?"#000":e.colors.white};
      font-size: 1.6rem;
      font-weight: 400;
      font-family: ${e.font.family.openSans};
      cursor: default;
    }

    ${r?s?a`
              border: 1px solid black;
          `:a`
              border: 1px solid ${e.colors.primary};
              backdrop-filter: brightness(0.8);

              span {
                color: ${e.colors.primary};
              }
          `:a`
          border: none;
        `}
    
    ${s?a`
        &:hover {
          background: ${K(.1,e.colors.primary)};
        }
      `:a`
        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}
  `}
`,ot=o.div`
  ${({theme:e})=>a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    
    span {
      color: ${e.colors.white};
      font-size: 1.6rem;
      font-weight: 600;
      font-family: ${e.font.family.openSans};
    }
  `}
`;class it{constructor(){i(this,"now",new Date);i(this,"selectedDay",this.now.getDate());i(this,"daysOfWeek",["Seg","Ter","Qua","Qui","Sex","Sab","Dom"]);i(this,"calendarHeaderText",new Intl.DateTimeFormat("pt-br",{month:"long",weekday:"long",day:"2-digit"}).format(this.now));i(this,"days",Array.from({length:this.lastDayOfMonth()},(s,r)=>r+1));i(this,"month",new Intl.DateTimeFormat("pt-BR",{month:"long"}).format(this.now));i(this,"year",new Intl.DateTimeFormat("pt-BR",{year:"numeric"}).format(this.now));m(this)}lastDayOfMonth(){return new Date(this.now.getFullYear(),this.now.getMonth()+1,0).getDate()}setSelectedDay(s){this.selectedDay=s}}var u=new it;function nt(){return t(x,{children:()=>n(Je,{children:[t(Ze,{children:t("span",{children:u.calendarHeaderText})}),t(et,{children:n("div",{children:[t("span",{children:u.month}),t("span",{children:u.year})]})}),n(tt,{children:[u.daysOfWeek.map(e=>t(ot,{children:t("span",{children:e})},e)),u.days.map(e=>t(st,{isToday:e==u.now.getDate(),onClick:()=>u.setSelectedDay(e),isSelected:e==u.selectedDay,children:t("span",{children:e})},e))]})]})})}var rt=F.exports.memo(nt);const at=o.div`
  background-image: url('assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;function lt(){const[e]=F.exports.useState(p);return n(V,{theme:ee,children:[t(Z,{}),n(at,{children:[Array.from(e.apps.values()).map(s=>t(D.Fragment,{children:s.render()},s.store.uuid)),e.startMenu.isOpen&&t(We,{}),e.systemTrayPopup.isOpen&&t(_e,{}),t(rt,{}),t(Me,{})]})]})}var ct=Q(lt);_.render(t(D.StrictMode,{children:t(ct,{})}),document.getElementById("root"));
