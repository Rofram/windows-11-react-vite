var q=Object.defineProperty;var A=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var w=(e,o,a)=>o in e?q(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,h=(e,o)=>{for(var a in o||(o={}))E.call(o,a)&&w(e,a,o[a]);if(A)for(var a of A(o))I.call(o,a)&&w(e,a,o[a]);return e};var i=(e,o,a)=>(w(e,typeof o!="symbol"?o+"":o,a),a);import{W as R,C as p,s,m as b,j as C,O as u,r as k,U as g,a as x,B as D,b as U,c as L,d as F,e as z,f as B,F as j,g as N,I as W,h as H,i as X,k as Y,l as G,R as K,n as V}from"./vendor.d1381eef.js";const J=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const v of c.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function a(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerpolicy&&(c.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?c.credentials="include":l.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(l){if(l.ep)return;l.ep=!0;const c=a(l);fetch(l.href,c)}};J();const Q=R`
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

  ${({theme:e,removeBg:o})=>p`
    html {
      font-size: 62.5%;
      height: 100%;
    }

    body {
      font-family: ${e.font.family};
      font-size: ${e.font.sizes.medium};
      height: 100%;

      ${!o&&p`
        background-color: ${e.colors.mainBg};
      `}
    }
  `}
`;var Z={grid:{container:"130rem",gutter:"3.2rem"},border:{radius:"0.4rem"},font:{family:{roboto:"Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",segoe:"Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",openSans:"Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},light:300,normal:400,bold:600,sizes:{xsmall:"1.2rem",small:"1.4rem",medium:"1.6rem",large:"1.8rem",xlarge:"2.0rem",xxlarge:"2.8rem",huge:"5.2rem"}},colors:{primary:"#F231A5",secondary:"#3CD3C1",mainBg:"#06092B",lightBg:"#F2F2F2",white:"#FAFAFA",black:"#030517",lightGray:"#EAEAEA",gray:"#8F8F8F",darkGray:"#2E2F42",red:"#FF6347"},spacings:{xxsmall:"0.8rem",xsmall:"1.6rem",small:"2.4rem",medium:"3.2rem",large:"4.0rem",xlarge:"4.8rem",xxlarge:"5.6rem"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transition:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"}};const _=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  margin-right: 1rem;
`,M=s.span`
  ${({theme:e})=>p`
    font-family: ${e.font.family.segoe};
    font-weight: 500;
    font-size: ${e.font.sizes.xsmall};  
    color: ${e.colors.white}
  `}
`;class ee{constructor(){i(this,"time",new Date);b(this),setInterval(()=>this.tick(),1e3)}tick(){this.time=new Date}getHours(){const[o,a]=new Intl.DateTimeFormat("pt-br",{dateStyle:"short",timeStyle:"medium"}).format(this.time).split(" ");return[o,a]}}var te=new ee;const t=C.exports.jsx,n=C.exports.jsxs,O=C.exports.Fragment;function oe(){return t(u,{children:()=>{const[e,o]=te.getHours();return n(_,{children:[t(M,{children:o}),t(M,{children:e})]})}})}const se=s.div`
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
`,m=s.img`
  width: 20px;
  height: 20px;
`,ne=s.div`
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
`;class ie{constructor(){i(this,"user",{img:"https://avatars.githubusercontent.com/u/50988834?v=4",name:"Rodrigo de Fran\xE7a"});i(this,"appsOpened",{vscode:{requestToClose:!1,isOpen:!1},microsoftEdge:{requestToClose:!1,isOpen:!1},fileExplorer:{requestToClose:!1,isOpen:!1},windowsStore:{requestToClose:!1,isOpen:!1},notepad:{requestToClose:!1,isOpen:!1},spotify:{requestToClose:!1,isOpen:!1}});i(this,"apps",[{icon:"assets/apps/microsoftEdge.svg",alt:"Edge"},{icon:"assets/apps/world.svg",alt:"World"},{icon:"assets/apps/powerpoint.svg",alt:"PowerPoint"},{icon:"assets/apps/oneNote.svg",alt:"OneNote"},{icon:"assets/apps/mail.svg",alt:"Mail"},{icon:"assets/apps/todo.svg",alt:"To Do"},{icon:"assets/apps/windowsStore.svg",alt:"Microsoft Store"},{icon:"assets/apps/photos.svg",alt:"Photos"},{icon:"assets/apps/yourPhone.svg",alt:"Your Phone"},{icon:"assets/apps/snippingTool.svg",alt:"Snipping Tool"},{icon:"assets/apps/notepad.svg",alt:"Notepad"},{icon:"assets/apps/xbox.svg",alt:"Xbox"},{icon:"assets/apps/twitter.svg",alt:"Twitter"},{icon:"assets/apps/config.svg",alt:"Settings"},{icon:"assets/apps/microsoftNews.svg",alt:"News"},{icon:"assets/apps/spotify.svg",alt:"Spotify"},{icon:"assets/apps/calculadora.svg",alt:"Calculator"},{icon:"assets/apps/paint.svg",alt:"Paint"}]);i(this,"recommendedApps",[{icon:"assets/icons/getStarted.png",title:"Get Started",description:"Welcome to Windows"},{icon:"assets/icons/pdfIcon.png",title:"Rental Agreement",description:"17m ago"},{icon:"assets/icons/wordIcon.png",title:"Syllabus",description:"2h ago"},{icon:"assets/icons/pdfIcon.png",title:"Logo Ideas",description:"12h ago"},{icon:"assets/icons/ppIcon.png",title:"Tournament Photos",description:"Yesterday at 4:20 PM"},{icon:"assets/icons/exelIcon.png",title:"Timetable",description:"Yesterday at 1:15 PM"}]);i(this,"isAllAppsOpened",!1);i(this,"tabIndex",0);i(this,"systemTrayPopup",{isOpen:!1,requestToClose:!1});i(this,"startMenu",{isOpen:!1,requestToClose:!1});b(this)}toggleAppOpened(o){if(this.appsOpened[o].isOpen){this.appsOpened[o].requestToClose=!0,setTimeout(()=>{k(()=>{this.appsOpened[o].isOpen=!1,this.appsOpened[o].requestToClose=!1})},300);return}this.appsOpened[o].isOpen=!0}toggleAllApps(){this.isAllAppsOpened=!this.isAllAppsOpened}setNewApp(o){this.apps.push(o)}setTabIndex(o){this.tabIndex=o}toggleSystemTrayPopup(){if(this.systemTrayPopup.isOpen){this.systemTrayPopup.requestToClose=!0,setTimeout(()=>{k(()=>{this.systemTrayPopup.isOpen=!1,this.systemTrayPopup.requestToClose=!1})},300);return}this.systemTrayPopup.isOpen=!0}toggleStartMenuOpened(){if(this.startMenu.isOpen){this.startMenu.requestToClose=!0,setTimeout(()=>{k(()=>{this.startMenu.isOpen=!1,this.startMenu.requestToClose=!1})},300);return}this.startMenu.isOpen=!0}}var r=new ie;function re(){return n("div",{style:{display:"flex"},children:[t(ne,{children:t(m,{src:"assets/taskbar/Shape.svg"})}),n(se,{onClick:()=>r.toggleSystemTrayPopup(),children:[t(m,{src:"assets/taskbar/WiFi.svg"}),t(m,{src:"assets/taskbar/Speaker.svg"}),t(m,{src:"assets/taskbar/Battery.svg"})]})]})}const ae=s.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;

  &:hover {

  }
`,le=s.div`
  ${({theme:e})=>p`
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
`;function ce(){return n(ae,{children:[t("img",{src:"assets/icons/weather.svg",alt:"weather"}),n(le,{children:[t("span",{children:"8\xB0C"}),t("span",{children:"Partly sunny"})]})]})}const pe=s.div`
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
`,f=s.img`
  width: 30px;
  height: 30px;
  outline: none;
`;function de(){return t(u,{children:()=>n(pe,{children:[t("button",{onClick:()=>r.toggleStartMenuOpened(),children:t(f,{src:"assets/taskbar/Windows.svg"})}),t("button",{onClick:()=>{},children:t(f,{src:"assets/taskbar/Search.svg"})}),t("button",{onClick:()=>{},children:t(f,{src:"assets/taskbar/DesktopManager.svg"})}),t("button",{onClick:()=>{},children:t(f,{src:"assets/taskbar/Chat.svg"})}),t("button",{onClick:()=>{},children:t(f,{src:"assets/taskbar/FileExplorer.svg"})}),t("button",{onClick:()=>r.toggleAppOpened("microsoftEdge"),children:t(f,{src:"assets/taskbar/MicrosoftEdge.svg"})}),t("button",{onClick:()=>r.toggleAppOpened("vscode"),children:t(f,{src:"assets/taskbar/vscode.png"})})]})})}const ge=s.div`
  ${({theme:e})=>p`
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
`,he=s.div`
  display: flex;
  gap: 1rem;
`;function fe(){return n(ge,{children:[t(ce,{}),t(de,{}),n(he,{children:[t(re,{}),t(oe,{})]})]})}const ue=g`
  0% {
    transform: translateX(-50%);
    bottom: -1000px;
  }
  100% {
    transform: translateX(-50%);
    bottom: 70px;
  }
`,me=g`
  0% {
    transform: translateX(-50%);
    bottom: 70px;
  }
  100% {
    transform: translateX(-50%);
    bottom: -1000px;
  }
`,xe=s.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 925px;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${({requestToClose:e})=>e?me:ue} 0.5s ease-in-out;
  

  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  filter: brightness(0.8);
  border-radius: 8.75px;
  z-index: 50;
`,be=s.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;
`,ye=s.div`
  ${({theme:e})=>p`
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
`,ve=s.div`
  ${({theme:e})=>p`
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
`,$=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5px;

  img {
    width: 40px;
    height: 40px;
  }
`,we=s.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 15px;
  height: 315px;
`,ke=s.div`
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

  ${$} {
    flex-direction: row;
    gap: 25px;

    img {
      width: 30px;
      height: 30px;
    }
  }
`,T=s.span`
  ${({theme:e})=>p`
    color: ${e.colors.white};
    font-family: ${e.font.family.segoe};
    font-size: 15px;
  `}
`,S=s.button`
  ${({theme:e})=>p`
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
`,Oe=s.div`
  margin: 10px 40px 0 40px;
  height: 255px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 auto;
`,$e=s.div`
  ${({theme:e})=>p`
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
`,Ce=s.div`
  ${({theme:e})=>p`
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
`,Ae=s.div`
  display: flex;
  width: 100%;
  backdrop-filter: brightness(0.8);
  border-radius: 0 0 8.75px 8.75px;
  height: 80px;
  padding: 20px 80px;
`,Me=s.div`
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
`;function Te(){return t(u,{children:()=>n(xe,{requestToClose:r.startMenu.requestToClose,children:[n(be,{children:[t(ye,{children:t("input",{type:"text",placeholder:"Type here to search"})}),n(ve,{children:[t("span",{children:"Pinned"}),t(S,{onClick:()=>r.toggleAllApps(),children:r.isAllAppsOpened?n(O,{children:[t("span",{children:"<"}),t("span",{children:"Back"})]}):n(O,{children:[t("span",{children:"All apps"}),t("span",{children:">"})]})})]}),r.isAllAppsOpened?t(ke,{children:r.apps.map(e=>n($,{children:[t("img",{src:e.icon,alt:e.alt}),t(T,{children:e.alt})]},e.icon))}):t(we,{children:r.apps.map(e=>n($,{children:[t("img",{src:e.icon,alt:e.alt}),t(T,{children:e.alt})]},e.icon))}),!r.isAllAppsOpened&&n(O,{children:[n($e,{children:[t("h2",{children:"Recommended"}),n(S,{children:[t("span",{children:"More"}),t("span",{children:">"})]})]}),t(Oe,{children:r.recommendedApps.map(e=>n(Ce,{children:[t("img",{src:e.icon,alt:e.title}),n("div",{children:[t("span",{children:e.title}),t("p",{children:e.description})]})]},e.title))})]})]}),!r.isAllAppsOpened&&t(Ae,{children:n(Me,{children:[t("img",{src:r.user.img,alt:""}),t("span",{children:r.user.name})]})})]})})}const Se=g`
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
`,Pe=g`
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
`,Fe=s.div`
  ${({theme:e,requestToClose:o})=>p`
    resize: both;
    width: 1100px;
    height: 618.75px;
    
    background-color: ${e.colors.white};

    position: absolute;
    border-radius: 8.75px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    animation: ${o?Pe:Se} 0.3s ease;
  `}
`,ze=s.div`
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
`,Be=s.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 8.75px 8.75px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 8.75px 8.75px;
  }
`;class qe{constructor(){i(this,"dragging",!1);i(this,"mouseOffset",{x:0,y:0});i(this,"containerPosition",{x:0,y:0});i(this,"search","");i(this,"input",null);i(this,"container",null);b(this)}setContainerRef(o){this.container=o}setInputRef(o){this.input=o}setDragging(o){this.dragging=o}onMount(){document.addEventListener("keyup",this.onKeyUp)}onUnmount(){document.removeEventListener("keyup",this.onKeyUp)}onKeyUp(o){o.key==="Enter"&&(this.search=this.input.value,console.log(this.input.value))}onMouseDown(o){var a,d,l,c;this.setDragging(!0),this.mouseOffset.x=o.clientX,this.mouseOffset.y=o.clientY,this.containerPosition.x=(d=(a=this.container)==null?void 0:a.offsetLeft)!=null?d:0,this.containerPosition.y=(c=(l=this.container)==null?void 0:l.offsetTop)!=null?c:0}onMouseUp(o){this.setDragging(!1)}onMouseMove(o){this.dragging&&(this.container.style.left=`${o.clientX+this.containerPosition.x-this.mouseOffset.x}px`,this.container.style.top=`${o.clientY+this.containerPosition.y-this.mouseOffset.y}px`)}onMouseLeave(o){this.setDragging(!1)}}var Ee=new qe;function Ie(){return t(u,{children:()=>{const[e]=x.exports.useState(Ee);return x.exports.useEffect(()=>(e.onMount(),()=>e.onUnmount()),[]),n(Fe,{ref:o=>e.setContainerRef(o),requestToClose:r.appsOpened.microsoftEdge.requestToClose,children:[n(ze,{onMouseDown:e.onMouseDown.bind(e),onMouseUp:e.onMouseUp.bind(e),onMouseMove:e.onMouseMove.bind(e),onMouseLeave:e.onMouseLeave.bind(e),children:[n("div",{children:[t(D,{}),t(U,{}),t(L,{})]}),t("input",{type:"text",onChange:o=>e.search=o.target.value,ref:o=>e.setInputRef(o)}),n("div",{children:[t(F,{size:20,color:"#fff"}),t(z,{size:15,color:"#fff"}),t(B,{size:20,color:"#fff",onClick:()=>r.toggleAppOpened("microsoftEdge")})]})]}),t(Be,{children:t("iframe",{src:`https://www.bing.com.br/search?q=${e.search}`})})]})}})}var Re=x.exports.memo(Ie);class De{constructor(){i(this,"dragging",!1);i(this,"mouseOffset",{x:0,y:0});i(this,"containerPosition",{x:0,y:0});i(this,"container",null);i(this,"setContainerRef",o=>{this.container=o});i(this,"setDragging",o=>{this.dragging=o});i(this,"onMouseDown",o=>{var a,d,l,c;this.setDragging(!0),this.mouseOffset.x=o.clientX,this.mouseOffset.y=o.clientY,this.containerPosition.x=(d=(a=this.container)==null?void 0:a.offsetLeft)!=null?d:0,this.containerPosition.y=(c=(l=this.container)==null?void 0:l.offsetTop)!=null?c:0});i(this,"onMouseUp",o=>{this.setDragging(!1)});i(this,"onMouseMove",o=>{this.dragging&&(this.container.style.left=`${o.clientX+this.containerPosition.x-this.mouseOffset.x}px`,this.container.style.top=`${o.clientY+this.containerPosition.y-this.mouseOffset.y}px`)});i(this,"onMouseLeave",o=>{this.setDragging(!1)});b(this)}}var Ue=new De;const Le=g`
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
`,je=g`
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
`,Ne=s.div`
  ${({theme:e,requestToClose:o})=>p`
    resize: both;
    width: 1100px;
    height: 618.75px;
    
    background-color: ${e.colors.white};

    position: absolute;
    border-radius: 8.75px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    animation: ${o?je:Le} 0.3s ease;
  `}
`,We=s.div`
  height: 40px;
  display: flex;
  background-color: #252526;
  color: ${({theme:e})=>e.colors.white};
  border-radius: 8.75px 8.75px 0 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem
  }
`,He=s.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 8.75px 8.75px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 8.75px 8.75px;
  }
`,Xe=s.img`
  width: 20px;
  height: 20px;
`,Ye=s.span`
  font-family: ${({theme:e})=>e.font.family.segoe};
  font-size: 12px;
  color: white;
`;function Ge(){const[e]=x.exports.useState(Ue);return t(u,{children:()=>n(Ne,{ref:o=>e.setContainerRef(o),requestToClose:r.appsOpened.vscode.requestToClose,children:[n(We,{onMouseDown:e.onMouseDown.bind(e),onMouseUp:e.onMouseUp.bind(e),onMouseMove:e.onMouseMove.bind(e),onMouseLeave:e.onMouseLeave.bind(e),children:[n("div",{children:[t(Xe,{src:"assets/taskbar/vscode.png"}),t(Ye,{children:"VS Code"})]}),n("div",{children:[t(F,{size:20,color:"#fff"}),t(z,{size:15,color:"#fff"}),t(B,{size:20,color:"#fff",onClick:()=>r.toggleAppOpened("vscode")})]})]}),t(He,{children:t("iframe",{src:"https://www.vscode.dev"})})]})})}var Ke=x.exports.memo(Ge);const Ve=g`
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 70px;
  }
`,Je=g`
  0% {
    bottom: 70px;
  }
  100% {
    bottom: -200px;
  }
`,Qe=s.div`
  width: 467.5px;
  position: absolute;
  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  filter: brightness(0.8);
  bottom: 70px;
  right: 1%;
  border-radius: 8.75px;
  animation: ${({requestToClose:e})=>e?Je:Ve} 0.3s ease-in;
`,Ze=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  margin: 2rem auto;
`,_e=s.div`
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
`,et=s.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`,tt=s.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  gap: 5rem;
  margin: 2rem 0;
`,P=s.input`
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
`,ot=s.div`
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
`;class st{constructor(){i(this,"iconOptions",{color:"#fff",size:18});i(this,"buttons",[{icon:t(j,h({},this.iconOptions)),title:"Wi-fi",isActive:!1},{icon:t(N,h({},this.iconOptions)),title:"Bluetooth",isActive:!1},{icon:t(W,h({},this.iconOptions)),title:"Airplane mode",isActive:!1},{icon:t(H,h({},this.iconOptions)),title:"Battery saver",isActive:!1},{icon:t(X,h({},this.iconOptions)),title:"Focus assist",isActive:!1},{icon:t(Y,h({},this.iconOptions)),title:"Accessibility",isActive:!1}]);b(this)}}var y=new st;function nt(){return t(u,{children:()=>n(Qe,{requestToClose:r.systemTrayPopup.requestToClose,children:[n(et,{children:[t(Ze,{children:y.buttons.map((e,o)=>n(_e,{children:[t("button",{onClick:()=>{y.buttons[o].isActive=!y.buttons[o].isActive},className:y.buttons[o].isActive?"active":"",children:e.icon}),t("span",{children:e.title})]},e.title))}),n(tt,{children:[t(P,{type:"range"}),t(P,{type:"range"})]})]}),t(ot,{children:t("span",{children:"92%"})})]})})}const it=s.div`
  background-image: url('assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;function rt(){return t(u,{children:()=>n(G,{theme:Z,children:[t(Q,{}),n(it,{children:[r.startMenu.isOpen&&t(Te,{}),r.appsOpened.microsoftEdge.isOpen&&t(Re,{}),r.appsOpened.vscode.isOpen&&t(Ke,{}),r.systemTrayPopup.isOpen&&t(nt,{}),t(fe,{})]})]})})}K.render(t(V.StrictMode,{children:t(rt,{})}),document.getElementById("root"));
