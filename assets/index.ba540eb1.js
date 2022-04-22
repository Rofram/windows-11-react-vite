var q=Object.defineProperty,E=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var A=(e,s,o)=>s in e?q(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,c=(e,s)=>{for(var o in s||(s={}))W.call(s,o)&&A(e,o,s[o]);if(O)for(var o of O(s))j.call(s,o)&&A(e,o,s[o]);return e},f=(e,s)=>E(e,U(s));var a=(e,s,o)=>(A(e,typeof s!="symbol"?s+"":s,o),o);import{W as N,C as u,s as i,m as b,o as D,j as r,a as t,r as v,b as C,U as m,O as w,B as L,c as H,d as X,F as $,D as T,e as S,P as z,f as G,g as Y,I as K,h as V,i as J,k as Q,l as Z,R as _,n as ee}from"./vendor.cfc83ad7.js";const te=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const k of l.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&d(k)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}};te();const se=N`
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

  ${({theme:e,removeBg:s})=>u`
    html {
      font-size: 62.5%;
      height: 100%;
    }

    body {
      font-family: ${e.font.family};
      font-size: ${e.font.sizes.medium};
      height: 100%;

      ${!s&&u`
        background-color: ${e.colors.mainBg};
      `}
    }
  `}
`;var oe={grid:{container:"130rem",gutter:"3.2rem"},border:{radius:"0.4rem"},font:{family:{roboto:"Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",segoe:"Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",openSans:"Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},light:300,normal:400,bold:600,sizes:{xsmall:"1.2rem",small:"1.4rem",medium:"1.6rem",large:"1.8rem",xlarge:"2.0rem",xxlarge:"2.8rem",huge:"5.2rem"}},colors:{primary:"#60CDFF",secondary:"#3CD3C1",mainBg:"#06092B",lightBg:"#F2F2F2",white:"#FAFAFA",black:"#030517",lightGray:"#EAEAEA",gray:"#8F8F8F",darkGray:"#2E2F42",red:"#FF6347"},spacings:{xxsmall:"0.8rem",xsmall:"1.6rem",small:"2.4rem",medium:"3.2rem",large:"4.0rem",xlarge:"4.8rem",xxlarge:"5.6rem"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transition:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"}};const ie=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  margin-right: 1rem;
`,B=i.span`
  ${({theme:e})=>u`
    font-family: ${e.font.family.segoe};
    font-weight: 500;
    font-size: ${e.font.sizes.xsmall};  
    color: ${e.colors.white}
  `}
`;class ne{constructor(){a(this,"time",new Date);b(this),setInterval(()=>this.tick(),1e3)}tick(){this.time=new Date}getHours(){const[s,o]=new Intl.DateTimeFormat("pt-br",{dateStyle:"short",timeStyle:"medium"}).format(this.time).split(" ");return[s,o]}}var re=new ne;const ae=D(()=>{const[e,s]=re.getHours();return r(ie,{children:[t(B,{children:s}),t(B,{children:e})]})}),le=i.div`
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
`,x=i.img`
  width: 20px;
  height: 20px;
`,ce=i.div`
  display: flex;
  height: 55px;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${x} {
    width: 12px;
    height: 6.5px;
  }
`;class de{constructor(){a(this,"startMenu",{isOpen:!1,requestToClose:!1});a(this,"systemTrayPopup",{isOpen:!1,requestToClose:!1});a(this,"calendar",{isOpen:!1,requestToClose:!1});a(this,"apps",new Map);b(this,{},{autoBind:!0})}addApp(s){this.apps.set(s.store.uuid,[s,v.exports.memo(s.render.bind(s))]),this.setFocus(s.store.uuid)}removeApp(s){this.apps.delete(s)}setFocus(s){Array.from(this.apps.values()).forEach(([o])=>{o.store.setIsFocused(o.store.uuid===s)})}toggleCalendar(){if(this.calendar.isOpen){this.calendar.requestToClose=!0,setTimeout(()=>{C(()=>{this.calendar.isOpen=!1,this.calendar.requestToClose=!1})},300);return}this.calendar.isOpen=!0}toggleStartMenuOpened(){if(this.startMenu.isOpen){this.startMenu.requestToClose=!0,setTimeout(()=>{C(()=>{this.startMenu.isOpen=!1,this.startMenu.requestToClose=!1})},300);return}this.startMenu.isOpen=!0}toggleSystemTrayPopup(){if(this.systemTrayPopup.isOpen){this.systemTrayPopup.requestToClose=!0,setTimeout(()=>{C(()=>{this.systemTrayPopup.isOpen=!1,this.systemTrayPopup.requestToClose=!1})},300);return}this.systemTrayPopup.isOpen=!0}}var g=new de;function pe(){return r("div",{style:{display:"flex"},children:[t(ce,{children:t(x,{src:"assets/taskbar/Shape.svg"})}),r(le,{onClick:()=>g.toggleSystemTrayPopup(),children:[t(x,{src:"assets/taskbar/WiFi.svg"}),t(x,{src:"assets/taskbar/Speaker.svg"}),t(x,{src:"assets/taskbar/Battery.svg"})]})]})}const ue=i.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;

  &:hover {

  }
`,ge=i.div`
  ${({theme:e})=>u`
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
`;function he(){return r(ue,{children:[t("img",{src:"assets/icons/weather.svg",alt:"weather"}),r(ge,{children:[t("span",{children:"8\xB0C"}),t("span",{children:"Partly sunny"})]})]})}const me=i.div`
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
`,h=i.img`
  width: 30px;
  height: 30px;
  outline: none;
`;class fe{constructor(){a(this,"dragging",!1);a(this,"mouseOffset",{x:0,y:0});a(this,"containerPosition",{x:0,y:0});a(this,"container",null);a(this,"isFocused",!1);a(this,"isMaximized",!1);a(this,"isMinimized",!1);a(this,"uuid",window.crypto.randomUUID());a(this,"titleBar",!0);a(this,"minimizeButton",!0);a(this,"maximizeButton",!0);a(this,"requestToClose",!1);b(this,{},{autoBind:!0})}closeApp(){g.removeApp(this.uuid)}setIsFocused(s){this.isFocused=s}setIsMaximized(s){this.isMaximized=s}setIsMinimized(s){this.isMinimized=s}setMaximizeButton(s){this.maximizeButton=s}setRequestToClose(s){this.requestToClose=s}setMinimizeButton(s){this.minimizeButton=s}setContainerRef(s){this.container=s}setDragging(s){this.dragging=s}onMouseDown(s){var o,d,n,l;this.setDragging(!0),this.mouseOffset.x=s.clientX,this.mouseOffset.y=s.clientY,this.containerPosition.x=(d=(o=this.container)==null?void 0:o.offsetLeft)!=null?d:0,this.containerPosition.y=(l=(n=this.container)==null?void 0:n.offsetTop)!=null?l:0,g.setFocus(this.uuid)}onMouseUp(s){this.setDragging(!1)}onMouseMove(s){this.dragging&&(this.container.style.left=`${s.clientX+this.containerPosition.x-this.mouseOffset.x}px`,this.container.style.top=`${s.clientY+this.containerPosition.y-this.mouseOffset.y}px`)}onMouseLeave(s){this.setDragging(!1)}}const xe=m`
  0% {
    width: 55rem;
    height: 30.9375rem;
    opacity: 0;
  }
  100% {
    width: 110rem;
    height: 61.875rem;
    opacity: 1;
  }
`,be=m`
  0% {
    width: 110rem;
    height: 61.875rem;
    opacity: 1;
  }
  100% {
    width: 55rem;
    height: 30.9375rem;
    opacity: 0;
  }
`,ye=i.div`
  ${({requestToClose:e,isFocused:s,isMinimized:o,isMaximized:d})=>u`
    resize: both;
    width: 110rem;
    height: 61.875rem;
    
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14px);

    position: absolute;
    border-radius: 8.75px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${s?"15":"5"};

    animation: ${e?be:xe} 0.3s ease;
  `}
`,ve=i.div`
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
`,we=i.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 8.75px 8.75px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 8.75px 8.75px;
  }
`;class R{constructor(){a(this,"store",new fe)}setMinimizeButton(s){this.store.setMinimizeButton(s)}setMaximizeButton(s){this.store.setMaximizeButton(s)}close(){this.store.setRequestToClose(!0),setTimeout(()=>{this.store.closeApp()},300)}render(s){return t(w,{children:()=>r(ye,{ref:o=>this.store.setContainerRef(o),requestToClose:this.store.requestToClose,isFocused:this.store.isFocused,children:[this.store.titleBar&&t(ve,{onMouseDown:this.store.onMouseDown,onMouseUp:this.store.onMouseUp,onMouseMove:this.store.onMouseMove,onMouseLeave:this.store.onMouseLeave,children:r("div",{children:[this.store.minimizeButton&&t(L,{}),this.store.maximizeButton&&t(H,{}),t(X,{onClick:this.close.bind(this)})]})}),t(we,{children:s})]})})}}class ke extends R{constructor(){super()}render(){return super.render(t("iframe",{src:"https://www.bing.com.br"}))}}class Ae extends R{constructor(){super()}render(){return super.render(t("iframe",{src:"https://www.vscode.dev"}))}}function Ce(){return t(w,{children:()=>r(me,{children:[t("button",{onClick:()=>g.toggleStartMenuOpened(),children:t(h,{src:"assets/taskbar/Windows.svg"})}),t("button",{onClick:()=>{},children:t(h,{src:"assets/taskbar/Search.svg"})}),t("button",{onClick:()=>{},children:t(h,{src:"assets/taskbar/DesktopManager.svg"})}),t("button",{onClick:()=>{},children:t(h,{src:"assets/taskbar/Chat.svg"})}),t("button",{onClick:()=>{},children:t(h,{src:"assets/taskbar/FileExplorer.svg"})}),t("button",{onClick:()=>g.addApp(new ke),children:t(h,{src:"assets/taskbar/MicrosoftEdge.svg"})}),t("button",{onClick:()=>g.addApp(new Ae),children:t(h,{src:"assets/taskbar/vscode.png"})})]})})}const $e=i.div`
  ${({theme:e})=>u`
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
`,Me=i.div`
  display: flex;
  gap: 1rem;
`;function Oe(){return r($e,{children:[t(he,{}),t(Ce,{}),r(Me,{children:[t(pe,{}),t(ae,{})]})]})}const Te=m`
  0% {
    transform: translateX(-50%);
    bottom: -1000px;
  }
  100% {
    transform: translateX(-50%);
    bottom: 70px;
  }
`,Se=m`
  0% {
    transform: translateX(-50%);
    bottom: 70px;
  }
  100% {
    transform: translateX(-50%);
    bottom: -1000px;
  }
`,ze=i.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 925px;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${({requestToClose:e})=>e?Se:Te} 0.5s ease-in-out;
  

  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  border-radius: 8.75px;
  z-index: 50;
`,Be=i.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;
`,Fe=i.div`
  ${({theme:e})=>u`
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
`,Pe=i.div`
  ${({theme:e})=>u`
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
`,M=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7.5px;
  border-radius: 8.75px;

  img {
    width: 40px;
    height: 40px;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(255,255,255,0.1);
  }
`,Ie=i.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 15px;
  height: 315px;
`,De=i.div`
  position: relative;
  display: flex;
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

  ${M} {
    flex-direction: row;
    gap: 25px;
    width: 100%;
    padding: 8px 0;
    justify-content: flex-start;

    img {
      width: 30px;
      height: 30px;
    }
  }
`,F=i.span`
  ${({theme:e})=>u`
    color: ${e.colors.white};
    font-family: ${e.font.family.segoe};
    font-size: 15px;
  `}
`,P=i.button`
  ${({theme:e})=>u`
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
`,Re=i.div`
  margin: 10px 40px 0 40px;
  height: 255px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 auto;
`,qe=i.div`
  ${({theme:e})=>u`
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
`,Ee=i.div`
  ${({theme:e})=>u`
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
`,Ue=i.div`
  display: flex;
  width: 100%;
  backdrop-filter: brightness(0.8);
  border-radius: 0 0 8.75px 8.75px;
  height: 80px;
  padding: 20px 80px;
`,We=i.div`
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
`;class je{constructor(){a(this,"tabIndex",0);a(this,"isAllAppsOpened",!1);a(this,"user",{img:"https://avatars.githubusercontent.com/u/50988834?v=4",name:"Rodrigo de Fran\xE7a"});a(this,"apps",[{icon:"assets/apps/microsoftEdge.svg",alt:"Edge"},{icon:"assets/apps/world.svg",alt:"World"},{icon:"assets/apps/powerpoint.svg",alt:"PowerPoint"},{icon:"assets/apps/oneNote.svg",alt:"OneNote"},{icon:"assets/apps/mail.svg",alt:"Mail"},{icon:"assets/apps/todo.svg",alt:"To Do"},{icon:"assets/apps/windowsStore.svg",alt:"Microsoft Store"},{icon:"assets/apps/photos.svg",alt:"Photos"},{icon:"assets/apps/yourPhone.svg",alt:"Your Phone"},{icon:"assets/apps/snippingTool.svg",alt:"Snipping Tool"},{icon:"assets/apps/notepad.svg",alt:"Notepad"},{icon:"assets/apps/xbox.svg",alt:"Xbox"},{icon:"assets/apps/twitter.svg",alt:"Twitter"},{icon:"assets/apps/config.svg",alt:"Settings"},{icon:"assets/apps/microsoftNews.svg",alt:"News"},{icon:"assets/apps/spotify.svg",alt:"Spotify"},{icon:"assets/apps/calculadora.svg",alt:"Calculator"},{icon:"assets/apps/paint.svg",alt:"Paint"}]);a(this,"recommendedApps",[{icon:"assets/icons/getStarted.png",title:"Get Started",description:"Welcome to Windows"},{icon:"assets/icons/pdfIcon.png",title:"Rental Agreement",description:"17m ago"},{icon:"assets/icons/wordIcon.png",title:"Syllabus",description:"2h ago"},{icon:"assets/icons/pdfIcon.png",title:"Logo Ideas",description:"12h ago"},{icon:"assets/icons/ppIcon.png",title:"Tournament Photos",description:"Yesterday at 4:20 PM"},{icon:"assets/icons/exelIcon.png",title:"Timetable",description:"Yesterday at 1:15 PM"}]);b(this,{},{autoBind:!0})}setTabIndex(s){this.tabIndex=s}toggleAllApps(){this.isAllAppsOpened=!this.isAllAppsOpened}onDragEnd(s){!s.destination||this.reorder(this.apps,s.source.index,s.destination.index)}reorder(s,o,d){const n=Array.from(s),[l]=n.splice(o,1);n.splice(d,0,l),this.apps=n}}var p=new je;const Ne=(e,s)=>c(c({userSelect:"none"},e&&{left:"150%",bottom:"70px"}),s);function Le(){return t(w,{children:()=>r(ze,{requestToClose:g.startMenu.requestToClose,children:[r(Be,{children:[t(Fe,{children:t("input",{type:"text",placeholder:"Type here to search"})}),r(Pe,{children:[t("span",{children:"Pinned"}),t(P,{onClick:()=>p.toggleAllApps(),children:p.isAllAppsOpened?r($,{children:[t("span",{children:"<"}),t("span",{children:"Back"})]}):r($,{children:[t("span",{children:"All apps"}),t("span",{children:">"})]})})]}),p.isAllAppsOpened?t(T,{onDragEnd:p.onDragEnd,children:t(S,{droppableId:"droppable",children:(e,s)=>r(De,f(c({},e.droppableProps),{ref:e.innerRef,children:[p.apps.map((o,d)=>t(z,{draggableId:o.alt,index:d,children:(n,l)=>v.exports.createElement(M,f(c(c({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{key:o.icon,style:Ne(l.isDragging,n.draggableProps.style)}),t("img",{src:o.icon,alt:o.alt}),t(F,{children:o.alt}))},o.alt)),e.placeholder]}))})}):t(T,{onDragEnd:p.onDragEnd,children:t(S,{droppableId:"droppable",children:(e,s)=>r(Ie,f(c({},e.droppableProps),{ref:e.innerRef,children:[p.apps.map((o,d)=>t(z,{draggableId:o.alt,index:d,children:(n,l)=>v.exports.createElement(M,f(c(c({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{key:o.icon}),t("img",{src:o.icon,alt:o.alt}),t(F,{children:o.alt}))},o.alt)),e.placeholder]}))})}),!p.isAllAppsOpened&&r($,{children:[r(qe,{children:[t("h2",{children:"Recommended"}),r(P,{children:[t("span",{children:"More"}),t("span",{children:">"})]})]}),t(Re,{children:p.recommendedApps.map(e=>r(Ee,{children:[t("img",{src:e.icon,alt:e.title}),r("div",{children:[t("span",{children:e.title}),t("p",{children:e.description})]})]},e.title))})]})]}),!p.isAllAppsOpened&&t(Ue,{children:r(We,{children:[t("img",{src:p.user.img,alt:""}),t("span",{children:p.user.name})]})})]})})}const He=m`
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 70px;
  }
`,Xe=m`
  0% {
    bottom: 70px;
  }
  100% {
    bottom: -200px;
  }
`,Ge=i.div`
  width: 467.5px;
  position: absolute;
  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  filter: brightness(0.8);
  bottom: 70px;
  right: 1%;
  border-radius: 8.75px;
  animation: ${({requestToClose:e})=>e?Xe:He} 0.3s ease-in;
`,Ye=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  margin: 2rem auto;
`,Ke=i.div`
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
`,Ve=i.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`,Je=i.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  gap: 5rem;
  margin: 2rem 0;
`,I=i.input`
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
`,Qe=i.div`
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
`;class Ze{constructor(){a(this,"iconOptions",{color:"#fff",size:18});a(this,"buttons",[{icon:t(G,c({},this.iconOptions)),title:"Wi-fi",isActive:!1},{icon:t(Y,c({},this.iconOptions)),title:"Bluetooth",isActive:!1},{icon:t(K,c({},this.iconOptions)),title:"Airplane mode",isActive:!1},{icon:t(V,c({},this.iconOptions)),title:"Battery saver",isActive:!1},{icon:t(J,c({},this.iconOptions)),title:"Focus assist",isActive:!1},{icon:t(Q,c({},this.iconOptions)),title:"Accessibility",isActive:!1}]);b(this)}}var y=new Ze;function _e(){return t(w,{children:()=>r(Ge,{requestToClose:g.systemTrayPopup.requestToClose,children:[r(Ve,{children:[t(Ye,{children:y.buttons.map((e,s)=>r(Ke,{children:[t("button",{onClick:()=>{y.buttons[s].isActive=!y.buttons[s].isActive},className:y.buttons[s].isActive?"active":"",children:e.icon}),t("span",{children:e.title})]},e.title))}),r(Je,{children:[t(I,{type:"range"}),t(I,{type:"range"})]})]}),t(Qe,{children:t("span",{children:"92%"})})]})})}const et=i.div`
  background-image: url('assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;function tt(){const[e]=v.exports.useState(g);return r(Z,{theme:oe,children:[t(se,{}),r(et,{children:[Array.from(e.apps.values()).map(([s,o])=>t(o,{},s.store.uuid)),e.startMenu.isOpen&&t(Le,{}),e.systemTrayPopup.isOpen&&t(_e,{}),t(Oe,{})]})]})}var st=D(tt);_.render(t(ee.StrictMode,{children:t(st,{})}),document.getElementById("root"));
