var T=Object.defineProperty;var A=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var v=(e,o,r)=>o in e?T(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,p=(e,o)=>{for(var r in o||(o={}))B.call(o,r)&&v(e,r,o[r]);if(A)for(var r of A(o))E.call(o,r)&&v(e,r,o[r]);return e};var n=(e,o,r)=>(v(e,typeof o!="symbol"?o+"":o,r),r);import{W as I,C as d,s,m as x,j as $,O as f,o as D,r as m,B as R,a as L,b as U,c as z,d as F,e as P,F as j,f as W,I as N,g as H,h as Y,i as X,k as G,R as K,l as V}from"./vendor.9583cda1.js";const q=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))g(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const y of c.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&g(y)}).observe(document,{childList:!0,subtree:!0});function r(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerpolicy&&(c.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?c.credentials="include":l.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function g(l){if(l.ep)return;l.ep=!0;const c=r(l);fetch(l.href,c)}};q();const J=I`
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

  ${({theme:e,removeBg:o})=>d`
    html {
      font-size: 62.5%;
      height: 100%;
    }

    body {
      font-family: ${e.font.family};
      font-size: ${e.font.sizes.medium};
      height: 100%;

      ${!o&&d`
        background-color: ${e.colors.mainBg};
      `}
    }
  `}
`;var Q={grid:{container:"130rem",gutter:"3.2rem"},border:{radius:"0.4rem"},font:{family:{roboto:"Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",segoe:"Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},light:300,normal:400,bold:600,sizes:{xsmall:"1.2rem",small:"1.4rem",medium:"1.6rem",large:"1.8rem",xlarge:"2.0rem",xxlarge:"2.8rem",huge:"5.2rem"}},colors:{primary:"#F231A5",secondary:"#3CD3C1",mainBg:"#06092B",lightBg:"#F2F2F2",white:"#FAFAFA",black:"#030517",lightGray:"#EAEAEA",gray:"#8F8F8F",darkGray:"#2E2F42",red:"#FF6347"},spacings:{xxsmall:"0.8rem",xsmall:"1.6rem",small:"2.4rem",medium:"3.2rem",large:"4.0rem",xlarge:"4.8rem",xxlarge:"5.6rem"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transition:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"}};const Z=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  margin-right: 1rem;
`,O=s.span`
  ${({theme:e})=>d`
    font-family: ${e.font.family.segoe};
    font-weight: 500;
    font-size: ${e.font.sizes.xsmall};  
    color: ${e.colors.white}
  `}
`;class _{constructor(){n(this,"time",new Date);x(this),setInterval(()=>this.tick(),1e3)}tick(){this.time=new Date}getHours(){const[o,r]=new Intl.DateTimeFormat("pt-br",{dateStyle:"short",timeStyle:"medium"}).format(this.time).split(" ");return[o,r]}}var ee=new _;const t=$.exports.jsx,i=$.exports.jsxs,w=$.exports.Fragment;function te(){return t(f,{children:()=>{const[e,o]=ee.getHours();return i(Z,{children:[t(O,{children:o}),t(O,{children:e})]})}})}const oe=s.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 1rem;
  border-radius: 8.75px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,u=s.img`
  width: 20px;
  height: 20px;
`,se=s.div`
  display: flex;
  height: 55px;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${u} {
    width: 12px;
    height: 6.5px;
  }
`;class ie{constructor(){n(this,"user",{img:"https://avatars.githubusercontent.com/u/50988834?v=4",name:"Rodrigo de Fran\xE7a"});n(this,"appsOpened",{vscode:!1,microsoftEdge:!1,fileExplorer:!1,windowsStore:!1,notepad:!1,spotify:!1});n(this,"apps",[{icon:"assets/apps/microsoftEdge.svg",alt:"Edge"},{icon:"assets/apps/world.svg",alt:"World"},{icon:"assets/apps/powerpoint.svg",alt:"PowerPoint"},{icon:"assets/apps/oneNote.svg",alt:"OneNote"},{icon:"assets/apps/mail.svg",alt:"Mail"},{icon:"assets/apps/todo.svg",alt:"To Do"},{icon:"assets/apps/windowsStore.svg",alt:"Microsoft Store"},{icon:"assets/apps/photos.svg",alt:"Photos"},{icon:"assets/apps/yourPhone.svg",alt:"Your Phone"},{icon:"assets/apps/snippingTool.svg",alt:"Snipping Tool"},{icon:"assets/apps/notepad.svg",alt:"Notepad"},{icon:"assets/apps/xbox.svg",alt:"Xbox"},{icon:"assets/apps/twitter.svg",alt:"Twitter"},{icon:"assets/apps/config.svg",alt:"Settings"},{icon:"assets/apps/microsoftNews.svg",alt:"News"},{icon:"assets/apps/spotify.svg",alt:"Spotify"},{icon:"assets/apps/calculadora.svg",alt:"Calculator"},{icon:"assets/apps/paint.svg",alt:"Paint"}]);n(this,"recommendedApps",[{icon:"assets/icons/getStarted.png",title:"Get Started",description:"Welcome to Windows"},{icon:"assets/icons/pdfIcon.png",title:"Rental Agreement",description:"17m ago"},{icon:"assets/icons/wordIcon.png",title:"Syllabus",description:"2h ago"},{icon:"assets/icons/pdfIcon.png",title:"Logo Ideas",description:"12h ago"},{icon:"assets/icons/ppIcon.png",title:"Tournament Photos",description:"Yesterday at 4:20 PM"},{icon:"assets/icons/exelIcon.png",title:"Timetable",description:"Yesterday at 1:15 PM"}]);n(this,"isAllAppsOpened",!1);n(this,"isSystemTrayPopupOpened",!1);n(this,"TabIndex",0);n(this,"isStartMenuOpened",!1);x(this)}setAppsOpened(o){this.appsOpened=p(p({},this.appsOpened),o)}toggleSystemTrayPopup(){this.isSystemTrayPopupOpened=!this.isSystemTrayPopupOpened}toggleAllApps(){this.isAllAppsOpened=!this.isAllAppsOpened}setNewApp(o){this.apps.push(o)}setTabIndex(o){this.TabIndex=o}setIsStartMenuOpened(o){this.isStartMenuOpened=o}}var a=new ie;function ne(){return i("div",{style:{display:"flex"},children:[t(se,{children:t(u,{src:"assets/taskbar/Shape.svg"})}),i(oe,{onClick:()=>a.toggleSystemTrayPopup(),children:[t(u,{src:"assets/taskbar/WiFi.svg"}),t(u,{src:"assets/taskbar/Speaker.svg"}),t(u,{src:"assets/taskbar/Battery.svg"})]})]})}const re=s.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;

  &:hover {

  }
`,ae=s.div`
  ${({theme:e})=>d`
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
`;function le(){return i(re,{children:[t("img",{src:"assets/icons/weather.svg",alt:"weather"}),i(ae,{children:[t("span",{children:"8\xB0C"}),t("span",{children:"Partly sunny"})]})]})}const ce=s.div`
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
`,h=s.img`
  width: 30px;
  height: 30px;
`;function de(){return t(f,{children:()=>i(ce,{children:[t("button",{onClick:()=>a.setIsStartMenuOpened(!a.isStartMenuOpened),children:t(h,{src:"assets/taskbar/Windows.svg"})}),t("button",{children:t(h,{src:"assets/taskbar/Search.svg"})}),t("button",{children:t(h,{src:"assets/taskbar/DesktopManager.svg"})}),t("button",{children:t(h,{src:"assets/taskbar/Chat.svg"})}),t("button",{children:t(h,{src:"assets/taskbar/FileExplorer.svg"})}),t("button",{onClick:()=>a.setAppsOpened({microsoftEdge:!a.appsOpened.microsoftEdge}),children:t(h,{src:"assets/taskbar/MicrosoftEdge.svg"})}),t("button",{onClick:()=>a.setAppsOpened({vscode:!a.appsOpened.vscode}),children:t(h,{src:"assets/taskbar/vscode.png"})})]})})}const pe=s.div`
  ${({theme:e})=>d`
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
`,ge=s.div`
  display: flex;
  gap: 1rem;
`;function he(){return i(pe,{children:[t(le,{}),t(de,{}),i(ge,{children:[t(ne,{}),t(te,{})]})]})}const fe=s.div`
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
  z-index: 50;
`,ue=s.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;
`,me=s.div`
  ${({theme:e})=>d`
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
`,xe=s.div`
  ${({theme:e})=>d`
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
`,k=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5px;

  img {
    width: 40px;
    height: 40px;
  }
`,be=s.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 15px;
  height: 315px;
`,ye=s.div`
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
`,M=s.span`
  ${({theme:e})=>d`
    color: ${e.colors.white};
    font-family: ${e.font.family.segoe};
    font-size: 15px;
  `}
`,S=s.button`
  ${({theme:e})=>d`
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
`,ve=s.div`
  margin: 10px 40px 0 40px;
  height: 255px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 auto;
`,we=s.div`
  ${({theme:e})=>d`
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
`,ke=s.div`
  ${({theme:e})=>d`
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
`,$e=s.div`
  display: flex;
  width: 100%;
  backdrop-filter: brightness(0.8);
  border-radius: 0 0 8.75px 8.75px;
  height: 80px;
  padding: 20px 80px;
`,Ae=s.div`
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
`,Oe=D(()=>i(fe,{children:[i(ue,{children:[t(me,{children:t("input",{type:"text",placeholder:"Type here to search"})}),i(xe,{children:[t("span",{children:"Pinned"}),t(S,{onClick:()=>a.toggleAllApps(),children:a.isAllAppsOpened?i(w,{children:[t("span",{children:"<"}),t("span",{children:"Back"})]}):i(w,{children:[t("span",{children:"All apps"}),t("span",{children:">"})]})})]}),a.isAllAppsOpened?t(ye,{children:a.apps.map(e=>i(k,{children:[t("img",{src:e.icon,alt:e.alt}),t(M,{children:e.alt})]},e.icon))}):t(be,{children:a.apps.map(e=>i(k,{children:[t("img",{src:e.icon,alt:e.alt}),t(M,{children:e.alt})]},e.icon))}),!a.isAllAppsOpened&&i(w,{children:[i(we,{children:[t("h2",{children:"Recommended"}),i(S,{children:[t("span",{children:"More"}),t("span",{children:">"})]})]}),t(ve,{children:a.recommendedApps.map(e=>i(ke,{children:[t("img",{src:e.icon,alt:e.title}),i("div",{children:[t("span",{children:e.title}),t("p",{children:e.description})]})]},e.title))})]})]}),!a.isAllAppsOpened&&t($e,{children:i(Ae,{children:[t("img",{src:a.user.img,alt:""}),t("span",{children:a.user.name})]})})]})),Me=s.div`
  ${({theme:e})=>d`
    resize: both;
    width: 1100px;
    height: 618.75px;
    
    background-color: ${e.colors.white};

    position: absolute;
    border-radius: 8.75px;
  `}
`,Se=s.div`
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
`,Ce=s.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 8.75px 8.75px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 8.75px 8.75px;
  }
`;class ze{constructor(){n(this,"dragging",!1);n(this,"mouseOffset",{x:0,y:0});n(this,"containerPosition",{x:0,y:0});n(this,"search","");n(this,"input",null);n(this,"container",null);x(this)}setContainerRef(o){this.container=o}setInputRef(o){this.input=o}setDragging(o){this.dragging=o}onMount(){document.addEventListener("keyup",this.onKeyUp)}onUnmount(){document.removeEventListener("keyup",this.onKeyUp)}onKeyUp(o){o.key==="Enter"&&(this.search=this.input.value,console.log(this.input.value))}onMouseDown(o){var r,g,l,c;this.setDragging(!0),this.mouseOffset.x=o.clientX,this.mouseOffset.y=o.clientY,this.containerPosition.x=(g=(r=this.container)==null?void 0:r.offsetLeft)!=null?g:0,this.containerPosition.y=(c=(l=this.container)==null?void 0:l.offsetTop)!=null?c:0}onMouseUp(o){this.setDragging(!1)}onMouseMove(o){this.dragging&&(this.container.style.left=`${o.clientX+this.containerPosition.x-this.mouseOffset.x}px`,this.container.style.top=`${o.clientY+this.containerPosition.y-this.mouseOffset.y}px`)}onMouseLeave(o){this.setDragging(!1)}}var Fe=new ze;function Pe(){return t(f,{children:()=>{const[e]=m.exports.useState(Fe);return m.exports.useEffect(()=>(e.onMount(),()=>e.onUnmount()),[]),i(Me,{ref:o=>e.setContainerRef(o),children:[i(Se,{onMouseDown:e.onMouseDown.bind(e),onMouseUp:e.onMouseUp.bind(e),onMouseMove:e.onMouseMove.bind(e),onMouseLeave:e.onMouseLeave.bind(e),children:[i("div",{children:[t(R,{}),t(L,{}),t(U,{})]}),t("input",{type:"text",onChange:o=>e.search=o.target.value,ref:o=>e.setInputRef(o)}),i("div",{children:[t(z,{size:20,color:"#fff"}),t(F,{size:15,color:"#fff"}),t(P,{size:20,color:"#fff",onClick:()=>a.setAppsOpened({microsoftEdge:!1})})]})]}),t(Ce,{children:t("iframe",{src:`https://www.bing.com.br/search?q=${e.search}`})})]})}})}var Te=m.exports.memo(Pe);class Be{constructor(){n(this,"dragging",!1);n(this,"mouseOffset",{x:0,y:0});n(this,"containerPosition",{x:0,y:0});n(this,"container",null);n(this,"setContainerRef",o=>{this.container=o});n(this,"setDragging",o=>{this.dragging=o});n(this,"onMouseDown",o=>{var r,g,l,c;this.setDragging(!0),this.mouseOffset.x=o.clientX,this.mouseOffset.y=o.clientY,this.containerPosition.x=(g=(r=this.container)==null?void 0:r.offsetLeft)!=null?g:0,this.containerPosition.y=(c=(l=this.container)==null?void 0:l.offsetTop)!=null?c:0});n(this,"onMouseUp",o=>{this.setDragging(!1)});n(this,"onMouseMove",o=>{this.dragging&&(this.container.style.left=`${o.clientX+this.containerPosition.x-this.mouseOffset.x}px`,this.container.style.top=`${o.clientY+this.containerPosition.y-this.mouseOffset.y}px`)});n(this,"onMouseLeave",o=>{this.setDragging(!1)});x(this)}}var Ee=new Be;const Ie=s.div`
  ${({theme:e})=>d`
    resize: both;
    width: 1100px;
    height: 618.75px;
    
    background-color: ${e.colors.white};

    position: absolute;
    border-radius: 8.75px;
  `}
`,De=s.div`
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
`,Re=s.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 8.75px 8.75px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 8.75px 8.75px;
  }
`,Le=s.img`
  width: 20px;
  height: 20px;
`,Ue=s.span`
  font-family: ${({theme:e})=>e.font.family.segoe};
  font-size: 12px;
  color: white;
`;function je(){const[e]=m.exports.useState(Ee);return t(f,{children:()=>i(Ie,{ref:o=>e.setContainerRef(o),children:[i(De,{onMouseDown:e.onMouseDown.bind(e),onMouseUp:e.onMouseUp.bind(e),onMouseMove:e.onMouseMove.bind(e),onMouseLeave:e.onMouseLeave.bind(e),children:[i("div",{children:[t(Le,{src:"assets/taskbar/vscode.png"}),t(Ue,{children:"VS Code"})]}),i("div",{children:[t(z,{size:20,color:"#fff"}),t(F,{size:15,color:"#fff"}),t(P,{size:20,color:"#fff",onClick:()=>a.setAppsOpened({vscode:!1})})]})]}),t(Re,{children:t("iframe",{src:"https://www.vscode.dev"})})]})})}var We=m.exports.memo(je);const Ne=s.div`
  width: 467.5px;
  position: absolute;
  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  filter: brightness(0.8);
  bottom: 8%;
  right: 1%;
  border-radius: 8.75px;
`,He=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  margin: 2rem auto;
`,Ye=s.div`
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
`,Xe=s.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`,Ge=s.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  gap: 5rem;
  margin: 2rem 0;
`,C=s.input`
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
`,Ke=s.div`
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
`;class Ve{constructor(){n(this,"iconOptions",{color:"#fff",size:18});n(this,"buttons",[{icon:t(j,p({},this.iconOptions)),title:"Wi-fi",isActive:!1},{icon:t(W,p({},this.iconOptions)),title:"Bluetooth",isActive:!1},{icon:t(N,p({},this.iconOptions)),title:"Airplane mode",isActive:!1},{icon:t(H,p({},this.iconOptions)),title:"Battery saver",isActive:!1},{icon:t(Y,p({},this.iconOptions)),title:"Focus assist",isActive:!1},{icon:t(X,p({},this.iconOptions)),title:"Accessibility",isActive:!1}]);x(this)}}var b=new Ve;function qe(){return t(f,{children:()=>i(Ne,{children:[i(Xe,{children:[t(He,{children:b.buttons.map((e,o)=>i(Ye,{children:[t("button",{onClick:()=>{b.buttons[o].isActive=!b.buttons[o].isActive},className:b.buttons[o].isActive?"active":"",children:e.icon}),t("span",{children:e.title})]},e.title))}),i(Ge,{children:[t(C,{type:"range"}),t(C,{type:"range"})]})]}),t(Ke,{children:t("span",{children:"92%"})})]})})}const Je=s.div`
  background-image: url('assets/image-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;function Qe(){return t(f,{children:()=>i(G,{theme:Q,children:[t(J,{}),i(Je,{children:[a.isStartMenuOpened&&t(Oe,{}),a.appsOpened.microsoftEdge&&t(Te,{}),a.appsOpened.vscode&&t(We,{}),a.isSystemTrayPopupOpened&&t(qe,{}),t(he,{})]})]})})}K.render(t(V.StrictMode,{children:t(Qe,{})}),document.getElementById("root"));
