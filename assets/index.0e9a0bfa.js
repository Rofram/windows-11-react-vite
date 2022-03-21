var P=Object.defineProperty;var O=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var w=(e,s,n)=>s in e?P(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,d=(e,s)=>{for(var n in s||(s={}))I.call(s,n)&&w(e,n,s[n]);if(O)for(var n of O(s))R.call(s,n)&&w(e,n,s[n]);return e};var r=(e,s,n)=>(w(e,typeof s!="symbol"?s+"":s,n),n);import{W as q,C as c,s as o,m as y,j as A,O as h,U as u,r as B,B as E,a as U,b as D,c as W,d as L,e as j,f as $,F as N,g as X,I as H,h as G,i as Y,k as K,l as J,R as z,n as Q}from"./vendor.8513bb3b.js";const V=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))f(l);new MutationObserver(l=>{for(const p of l)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&f(v)}).observe(document,{childList:!0,subtree:!0});function n(l){const p={};return l.integrity&&(p.integrity=l.integrity),l.referrerpolicy&&(p.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?p.credentials="include":l.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function f(l){if(l.ep)return;l.ep=!0;const p=n(l);fetch(l.href,p)}};V();const Z=q`
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
`;var _={grid:{container:"130rem",gutter:"3.2rem"},border:{radius:"0.4rem"},font:{family:{roboto:"Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",segoe:"Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",openSans:"Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},light:300,normal:400,bold:600,sizes:{xsmall:"1.2rem",small:"1.4rem",medium:"1.6rem",large:"1.8rem",xlarge:"2.0rem",xxlarge:"2.8rem",huge:"5.2rem"}},colors:{primary:"#F231A5",secondary:"#3CD3C1",mainBg:"#06092B",lightBg:"#F2F2F2",white:"#FAFAFA",black:"#030517",lightGray:"#EAEAEA",gray:"#8F8F8F",darkGray:"#2E2F42",red:"#FF6347"},spacings:{xxsmall:"0.8rem",xsmall:"1.6rem",small:"2.4rem",medium:"3.2rem",large:"4.0rem",xlarge:"4.8rem",xxlarge:"5.6rem"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transition:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"}};const ee=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  margin-right: 1rem;
`,C=o.span`
  ${({theme:e})=>c`
    font-family: ${e.font.family.segoe};
    font-weight: 500;
    font-size: ${e.font.sizes.xsmall};  
    color: ${e.colors.white}
  `}
`;class te{constructor(){r(this,"time",new Date);y(this),setInterval(()=>this.tick(),1e3)}tick(){this.time=new Date}getHours(){const[s,n]=new Intl.DateTimeFormat("pt-br",{dateStyle:"short",timeStyle:"medium"}).format(this.time).split(" ");return[s,n]}}var se=new te;const t=A.exports.jsx,i=A.exports.jsxs,b=A.exports.Fragment;function oe(){return t(h,{children:()=>{const[e,s]=se.getHours();return i(ee,{children:[t(C,{children:s}),t(C,{children:e})]})}})}const ie=o.div`
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
`,m=o.img`
  width: 20px;
  height: 20px;
`,ne=o.div`
  display: flex;
  height: 55px;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${m} {
    width: 12px;
    height: 6.5px;
  }
`,re=u`
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
`,ae=u`
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
`,le=o.div`
  ${({theme:e,requestToClose:s})=>c`
    resize: both;
    width: 1100px;
    height: 618.75px;
    
    background-color: ${e.colors.white};

    position: absolute;
    border-radius: 8.75px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    animation: ${s?ae:re} 0.3s ease;
  `}
`,pe=o.div`
  display: flex;
  height: 40px;
  background-color: #56585d;
  color: ${({theme:e})=>e.colors.white};
  padding: 0 1rem;
  border-radius: 8.75px 8.75px 0 0;

  justify-content: space-between;
  align-items: center;

  input {
    background: #46474b;
    color: ${({theme:e})=>e.colors.white};
    outline: none;
    border: none;
    width: 50%;
    padding: 10px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem
  }
`,ce=o.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 8.75px 8.75px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 8.75px 8.75px;
  }
`;class de{constructor(){r(this,"dragging",!1);r(this,"mouseOffset",{x:0,y:0});r(this,"containerPosition",{x:0,y:0});r(this,"search","");r(this,"input",null);r(this,"container",null);r(this,"titleBar",!0);r(this,"systemMenu",!0);r(this,"minimizeButton",!0);r(this,"maximizeButton",!0);y(this)}setMinimizeButton(s){this.minimizeButton=s}setMaximizeButton(s){this.maximizeButton=s}setContainerRef(s){this.container=s}setInputRef(s){this.input=s}setDragging(s){this.dragging=s}onMount(){document.addEventListener("keyup",this.onKeyUp)}onUnmount(){document.removeEventListener("keyup",this.onKeyUp)}onKeyUp(s){s.key==="Enter"&&(this.search=this.input.value,console.log(this.input.value))}onMouseDown(s){var n,f,l,p;this.setDragging(!0),this.mouseOffset.x=s.clientX,this.mouseOffset.y=s.clientY,this.containerPosition.x=(f=(n=this.container)==null?void 0:n.offsetLeft)!=null?f:0,this.containerPosition.y=(p=(l=this.container)==null?void 0:l.offsetTop)!=null?p:0}onMouseUp(s){this.setDragging(!1)}onMouseMove(s){this.dragging&&(this.container.style.left=`${s.clientX+this.containerPosition.x-this.mouseOffset.x}px`,this.container.style.top=`${s.clientY+this.containerPosition.y-this.mouseOffset.y}px`)}onMouseLeave(s){this.setDragging(!1)}}class ge{constructor(){r(this,"store",new de)}setMinimizeButton(s){this.store.setMinimizeButton(s)}setMaximizeButton(s){this.store.setMaximizeButton(s)}render(s){return t(h,{children:()=>(B.exports.useEffect(()=>(this.store.onMount(),()=>this.store.onUnmount()),[]),i(le,{ref:n=>this.store.setContainerRef(n),requestToClose:a.appsOpened.microsoftEdge.requestToClose,children:[i(pe,{onMouseDown:this.store.onMouseDown.bind(this.store),onMouseUp:this.store.onMouseUp.bind(this.store),onMouseMove:this.store.onMouseMove.bind(this.store),onMouseLeave:this.store.onMouseLeave.bind(this.store),children:[i("div",{children:[t(E,{}),t(U,{}),t(D,{})]}),t("input",{type:"text",onChange:n=>this.store.search=n.target.value,ref:n=>this.store.setInputRef(n)}),i("div",{children:[this.store.minimizeButton&&t(W,{size:20,color:"#fff"}),this.store.maximizeButton&&t(L,{size:15,color:"#fff"}),t(j,{size:20,color:"#fff",onClick:()=>a.toggleAppOpened("microsoftEdge")})]})]}),t(ce,{children:s})]}))})}}class F extends ge{constructor(){super();this.setMinimizeButton(!1)}render(){return super.render(t(b,{children:"oi"}))}}class he{constructor(){r(this,"openedApps",[]);r(this,"user",{img:"https://avatars.githubusercontent.com/u/50988834?v=4",name:"Rodrigo de Fran\xE7a"});r(this,"appsOpened",{vscode:{requestToClose:!1,isOpen:!1},microsoftEdge:{requestToClose:!1,isOpen:!1},fileExplorer:{requestToClose:!1,isOpen:!1},windowsStore:{requestToClose:!1,isOpen:!1},notepad:{requestToClose:!1,isOpen:!1},spotify:{requestToClose:!1,isOpen:!1}});r(this,"apps",[{icon:"assets/apps/microsoftEdge.svg",alt:"Edge"},{icon:"assets/apps/world.svg",alt:"World"},{icon:"assets/apps/powerpoint.svg",alt:"PowerPoint"},{icon:"assets/apps/oneNote.svg",alt:"OneNote"},{icon:"assets/apps/mail.svg",alt:"Mail"},{icon:"assets/apps/todo.svg",alt:"To Do"},{icon:"assets/apps/windowsStore.svg",alt:"Microsoft Store"},{icon:"assets/apps/photos.svg",alt:"Photos"},{icon:"assets/apps/yourPhone.svg",alt:"Your Phone"},{icon:"assets/apps/snippingTool.svg",alt:"Snipping Tool"},{icon:"assets/apps/notepad.svg",alt:"Notepad"},{icon:"assets/apps/xbox.svg",alt:"Xbox"},{icon:"assets/apps/twitter.svg",alt:"Twitter"},{icon:"assets/apps/config.svg",alt:"Settings"},{icon:"assets/apps/microsoftNews.svg",alt:"News"},{icon:"assets/apps/spotify.svg",alt:"Spotify"},{icon:"assets/apps/calculadora.svg",alt:"Calculator"},{icon:"assets/apps/paint.svg",alt:"Paint"}]);r(this,"recommendedApps",[{icon:"assets/icons/getStarted.png",title:"Get Started",description:"Welcome to Windows"},{icon:"assets/icons/pdfIcon.png",title:"Rental Agreement",description:"17m ago"},{icon:"assets/icons/wordIcon.png",title:"Syllabus",description:"2h ago"},{icon:"assets/icons/pdfIcon.png",title:"Logo Ideas",description:"12h ago"},{icon:"assets/icons/ppIcon.png",title:"Tournament Photos",description:"Yesterday at 4:20 PM"},{icon:"assets/icons/exelIcon.png",title:"Timetable",description:"Yesterday at 1:15 PM"}]);r(this,"isAllAppsOpened",!1);r(this,"tabIndex",0);r(this,"systemTrayPopup",{isOpen:!1,requestToClose:!1});r(this,"startMenu",{isOpen:!1,requestToClose:!1});y(this)}toggleAppOpened(s){this.openedApps.push(new F)}toggleAllApps(){this.isAllAppsOpened=!this.isAllAppsOpened}setNewApp(s){this.apps.push(s)}setTabIndex(s){this.tabIndex=s}toggleSystemTrayPopup(){if(this.systemTrayPopup.isOpen){this.systemTrayPopup.requestToClose=!0,setTimeout(()=>{$(()=>{this.systemTrayPopup.isOpen=!1,this.systemTrayPopup.requestToClose=!1})},300);return}this.systemTrayPopup.isOpen=!0}toggleStartMenuOpened(){if(this.startMenu.isOpen){this.startMenu.requestToClose=!0,setTimeout(()=>{$(()=>{this.startMenu.isOpen=!1,this.startMenu.requestToClose=!1})},300);return}this.startMenu.isOpen=!0}}var a=new he;function ue(){return i("div",{style:{display:"flex"},children:[t(ne,{children:t(m,{src:"assets/taskbar/Shape.svg"})}),i(ie,{onClick:()=>a.toggleSystemTrayPopup(),children:[t(m,{src:"assets/taskbar/WiFi.svg"}),t(m,{src:"assets/taskbar/Speaker.svg"}),t(m,{src:"assets/taskbar/Battery.svg"})]})]})}const fe=o.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;

  &:hover {

  }
`,me=o.div`
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
`;function xe(){return i(fe,{children:[t("img",{src:"assets/icons/weather.svg",alt:"weather"}),i(me,{children:[t("span",{children:"8\xB0C"}),t("span",{children:"Partly sunny"})]})]})}const be=o.div`
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
`;function ye(){return t(h,{children:()=>i(be,{children:[t("button",{onClick:()=>a.toggleStartMenuOpened(),children:t(g,{src:"assets/taskbar/Windows.svg"})}),t("button",{onClick:()=>{},children:t(g,{src:"assets/taskbar/Search.svg"})}),t("button",{onClick:()=>{},children:t(g,{src:"assets/taskbar/DesktopManager.svg"})}),t("button",{onClick:()=>{},children:t(g,{src:"assets/taskbar/Chat.svg"})}),t("button",{onClick:()=>{},children:t(g,{src:"assets/taskbar/FileExplorer.svg"})}),t("button",{onClick:()=>a.toggleAppOpened("microsoftEdge"),children:t(g,{src:"assets/taskbar/MicrosoftEdge.svg"})}),t("button",{onClick:()=>a.toggleAppOpened("vscode"),children:t(g,{src:"assets/taskbar/vscode.png"})})]})})}const ve=o.div`
  ${({theme:e})=>c`
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
`,we=o.div`
  display: flex;
  gap: 1rem;
`;function ke(){return i(ve,{children:[t(xe,{}),t(ye,{}),i(we,{children:[t(ue,{}),t(oe,{})]})]})}const Ae=u`
  0% {
    transform: translateX(-50%);
    bottom: -1000px;
  }
  100% {
    transform: translateX(-50%);
    bottom: 70px;
  }
`,Oe=u`
  0% {
    transform: translateX(-50%);
    bottom: 70px;
  }
  100% {
    transform: translateX(-50%);
    bottom: -1000px;
  }
`,$e=o.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 925px;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${({requestToClose:e})=>e?Oe:Ae} 0.5s ease-in-out;
  

  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  filter: brightness(0.8);
  border-radius: 8.75px;
  z-index: 50;
`,Ce=o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;
`,Me=o.div`
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
`,Te=o.div`
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
`,k=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5px;

  img {
    width: 40px;
    height: 40px;
  }
`,Se=o.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 15px;
  height: 315px;
`,Be=o.div`
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

  ${k} {
    flex-direction: row;
    gap: 25px;

    img {
      width: 30px;
      height: 30px;
    }
  }
`,M=o.span`
  ${({theme:e})=>c`
    color: ${e.colors.white};
    font-family: ${e.font.family.segoe};
    font-size: 15px;
  `}
`,T=o.button`
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
`,ze=o.div`
  margin: 10px 40px 0 40px;
  height: 255px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 auto;
`,Fe=o.div`
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
`,Pe=o.div`
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
`,Ie=o.div`
  display: flex;
  width: 100%;
  backdrop-filter: brightness(0.8);
  border-radius: 0 0 8.75px 8.75px;
  height: 80px;
  padding: 20px 80px;
`,Re=o.div`
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
`;function qe(){return t(h,{children:()=>i($e,{requestToClose:a.startMenu.requestToClose,children:[i(Ce,{children:[t(Me,{children:t("input",{type:"text",placeholder:"Type here to search"})}),i(Te,{children:[t("span",{children:"Pinned"}),t(T,{onClick:()=>a.toggleAllApps(),children:a.isAllAppsOpened?i(b,{children:[t("span",{children:"<"}),t("span",{children:"Back"})]}):i(b,{children:[t("span",{children:"All apps"}),t("span",{children:">"})]})})]}),a.isAllAppsOpened?t(Be,{children:a.apps.map(e=>i(k,{children:[t("img",{src:e.icon,alt:e.alt}),t(M,{children:e.alt})]},e.icon))}):t(Se,{children:a.apps.map(e=>i(k,{children:[t("img",{src:e.icon,alt:e.alt}),t(M,{children:e.alt})]},e.icon))}),!a.isAllAppsOpened&&i(b,{children:[i(Fe,{children:[t("h2",{children:"Recommended"}),i(T,{children:[t("span",{children:"More"}),t("span",{children:">"})]})]}),t(ze,{children:a.recommendedApps.map(e=>i(Pe,{children:[t("img",{src:e.icon,alt:e.title}),i("div",{children:[t("span",{children:e.title}),t("p",{children:e.description})]})]},e.title))})]})]}),!a.isAllAppsOpened&&t(Ie,{children:i(Re,{children:[t("img",{src:a.user.img,alt:""}),t("span",{children:a.user.name})]})})]})})}const Ee=u`
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 70px;
  }
`,Ue=u`
  0% {
    bottom: 70px;
  }
  100% {
    bottom: -200px;
  }
`,De=o.div`
  width: 467.5px;
  position: absolute;
  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  filter: brightness(0.8);
  bottom: 70px;
  right: 1%;
  border-radius: 8.75px;
  animation: ${({requestToClose:e})=>e?Ue:Ee} 0.3s ease-in;
`,We=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  margin: 2rem auto;
`,Le=o.div`
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
`,je=o.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`,Ne=o.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  gap: 5rem;
  margin: 2rem 0;
`,S=o.input`
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
`,Xe=o.div`
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
`;class He{constructor(){r(this,"iconOptions",{color:"#fff",size:18});r(this,"buttons",[{icon:t(N,d({},this.iconOptions)),title:"Wi-fi",isActive:!1},{icon:t(X,d({},this.iconOptions)),title:"Bluetooth",isActive:!1},{icon:t(H,d({},this.iconOptions)),title:"Airplane mode",isActive:!1},{icon:t(G,d({},this.iconOptions)),title:"Battery saver",isActive:!1},{icon:t(Y,d({},this.iconOptions)),title:"Focus assist",isActive:!1},{icon:t(K,d({},this.iconOptions)),title:"Accessibility",isActive:!1}]);y(this)}}var x=new He;function Ge(){return t(h,{children:()=>i(De,{requestToClose:a.systemTrayPopup.requestToClose,children:[i(je,{children:[t(We,{children:x.buttons.map((e,s)=>i(Le,{children:[t("button",{onClick:()=>{x.buttons[s].isActive=!x.buttons[s].isActive},className:x.buttons[s].isActive?"active":"",children:e.icon}),t("span",{children:e.title})]},e.title))}),i(Ne,{children:[t(S,{type:"range"}),t(S,{type:"range"})]})]}),t(Xe,{children:t("span",{children:"92%"})})]})})}const Ye=o.div`
  background-image: url('assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;function Ke(){return B.exports.useState(new F),t(h,{children:()=>i(J,{theme:_,children:[t(Z,{}),i(Ye,{children:[a.openedApps.map((e,s)=>t(z.Fragment,{children:e.render()},String(s))),a.startMenu.isOpen&&t(qe,{}),a.systemTrayPopup.isOpen&&t(Ge,{}),t(ke,{})]})]})})}Q.render(t(z.StrictMode,{children:t(Ke,{})}),document.getElementById("root"));
