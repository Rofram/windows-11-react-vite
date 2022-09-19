var en=Object.defineProperty;var Ft=Object.getOwnPropertySymbols;var tn=Object.prototype.hasOwnProperty,rn=Object.prototype.propertyIsEnumerable;var nt=(f,m,a)=>m in f?en(f,m,{enumerable:!0,configurable:!0,writable:!0,value:a}):f[m]=a,ge=(f,m)=>{for(var a in m||(m={}))tn.call(m,a)&&nt(f,a,m[a]);if(Ft)for(var a of Ft(m))rn.call(m,a)&&nt(f,a,m[a]);return f};var L=(f,m,a)=>(nt(f,typeof m!="symbol"?m+"":m,a),a);import{W as nn,C as O,s as _,m as ye,o as le,r as ot,j as A,a as h,U as oe,B as on,b as an,c as sn,d as Ee,e as ne,t as ln,V as un,F as it,f as cn,g as dn,I as fn,h as pn,i as mn,k as hn,l as gn,n as zt,p as vn,q as yn,T as wn,u as bn,v as Ot,w as Gt,x as En,y as xn,R as kn,z as _n}from"./vendor.7a5b1c4a.js";const ti={},Sn=function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))T(S);new MutationObserver(S=>{for(const R of S)if(R.type==="childList")for(const W of R.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&T(W)}).observe(document,{childList:!0,subtree:!0});function a(S){const R={};return S.integrity&&(R.integrity=S.integrity),S.referrerpolicy&&(R.referrerPolicy=S.referrerpolicy),S.crossorigin==="use-credentials"?R.credentials="include":S.crossorigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function T(S){if(S.ep)return;S.ep=!0;const R=a(S);fetch(S.href,R)}};Sn();const Mn=nn`
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

  ${({theme:f,removeBg:m})=>O`
    html {
      font-size: 62.5%;
      height: 100%;
    }

    body {
      font-family: ${f.font.family};
      font-size: ${f.font.sizes.medium};
      height: 100%;

      ${!m&&O`
        background-color: ${f.colors.mainBg};
      `}
    }
  `}
`;var Tn={grid:{container:"130rem",gutter:"3.2rem"},border:{radius:"0.4rem"},font:{family:{roboto:"Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",segoe:"Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",openSans:"Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},light:300,normal:400,bold:600,sizes:{xsmall:"1.2rem",small:"1.4rem",medium:"1.6rem",large:"1.8rem",xlarge:"2.0rem",xxlarge:"2.8rem",huge:"5.2rem"}},colors:{primary:"#60CDFF",secondary:"#3CD3C1",mainBg:"#06092B",lightBg:"#F2F2F2",white:"#FAFAFA",black:"#030517",lightGray:"#EAEAEA",gray:"#8F8F8F",darkGray:"#2E2F42",red:"#FF6347"},spacings:{xxsmall:"0.8rem",xsmall:"1.6rem",small:"2.4rem",medium:"3.2rem",large:"4.0rem",xlarge:"4.8rem",xxlarge:"5.6rem"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transition:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"}};const An=_.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  margin: .2rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 10%;


  :hover {
    background: rgba(255,255,255,.2);
  }
`,Rt=_.span`
  ${({theme:f})=>O`
    font-family: ${f.font.family.segoe};
    font-weight: 500;
    font-size: ${f.font.sizes.small};
    color: ${f.colors.white}
  `}
`;class Ln{constructor(){L(this,"time",new Date);ye(this),setInterval(()=>this.tick(),1e3)}tick(){this.time=new Date}get Hours(){const[m,a]=new Intl.DateTimeFormat("pt-br",{dateStyle:"short",timeStyle:"medium"}).format(this.time).split(" ");return a}get Date(){const[m]=new Intl.DateTimeFormat("pt-br",{dateStyle:"short",timeStyle:"medium"}).format(this.time).split(" ");return m}}var at=new Ln;class Cn{constructor(){L(this,"startMenu",{isOpen:!1,requestToClose:!1});L(this,"systemTrayPopup",{isOpen:!1,requestToClose:!1});L(this,"calendar",{isOpen:!1,requestToClose:!1});L(this,"systemApps",new Map);L(this,"apps",new Map);ye(this,{},{autoBind:!0})}addApp(m){this.apps.set(m.store.uuid,[m,le(m.render.bind(m))]),this.setFocus(m.store.uuid)}removeApp(m){this.apps.delete(m)}setFocus(m){Array.from(this.apps.values()).forEach(([a])=>{a.store.setIsFocused(a.store.uuid===m)})}toggleCalendar(){if(this.calendar.isOpen){this.calendar.requestToClose=!0,setTimeout(()=>{ot(()=>{this.calendar.isOpen=!1,this.calendar.requestToClose=!1})},300);return}this.calendar.isOpen=!0}toggleStartMenuOpened(){if(this.startMenu.isOpen){this.startMenu.requestToClose=!0,setTimeout(()=>{ot(()=>{this.startMenu.isOpen=!1,this.startMenu.requestToClose=!1})},300);return}this.startMenu.isOpen=!0}toggleSystemTrayPopup(){if(this.systemTrayPopup.isOpen){this.systemTrayPopup.requestToClose=!0,setTimeout(()=>{ot(()=>{this.systemTrayPopup.isOpen=!1,this.systemTrayPopup.requestToClose=!1})},300);return}this.systemTrayPopup.isOpen=!0}}var q=new Cn;const Dn=le(()=>A(An,{id:"calendarButton",onClick:()=>q.toggleCalendar(),children:[h(Rt,{children:at.Hours}),h(Rt,{children:at.Date})]})),Fn=_.div`
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
`,Te=_.img`
  width: 20px;
  height: 20px;
`,On=_.div`
  display: flex;
  height: 55px;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${Te} {
    width: 12px;
    height: 6.5px;
  }
`;function Rn(){return A("div",{style:{display:"flex"},children:[h(On,{children:h(Te,{src:"assets/taskbar/Shape.svg"})}),A(Fn,{onClick:()=>q.toggleSystemTrayPopup(),children:[h(Te,{src:"assets/taskbar/WiFi.svg"}),h(Te,{src:"assets/taskbar/Speaker.svg"}),h(Te,{src:"assets/taskbar/Battery.svg"})]})]})}const Pn=_.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;

  &:hover {

  }
`,In=_.div`
  ${({theme:f})=>O`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    span {
      font-family: ${f.font.family.segoe};
      font-size: ${f.font.sizes.small};
      font-weight: 500;
      color: ${f.colors.white};
    }

    span:first-child {
      font-weight: bold;
    }
  `}
`;function Nn(){return A(Pn,{children:[h("img",{src:"assets/icons/weather.svg",alt:"weather"}),A(In,{children:[h("span",{children:"8\xB0C"}),h("span",{children:"Partly sunny"})]})]})}const Bn=_.div`
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
`,ve=_.img`
  width: 30px;
  height: 30px;
  outline: none;
`;class Un{constructor(){L(this,"dragging",!1);L(this,"mouseOffset",{x:0,y:0});L(this,"containerPosition",{x:0,y:0});L(this,"container",null);L(this,"isFocused",!1);L(this,"isMaximized",!1);L(this,"isMinimized",!1);L(this,"uuid",window.crypto.randomUUID());L(this,"titleBar",!0);L(this,"minimizeButton",!0);L(this,"maximizeButton",!0);L(this,"requestToClose",!1);ye(this,{},{autoBind:!0})}closeApp(){q.removeApp(this.uuid)}setIsFocused(m){this.isFocused=m}setIsMaximized(m){this.isMaximized=m}setIsMinimized(m){this.isMinimized=m}setMaximizeButton(m){this.maximizeButton=m}setRequestToClose(m){this.requestToClose=m}setMinimizeButton(m){this.minimizeButton=m}setContainerRef(m){this.container=m}setDragging(m){this.dragging=m}onMouseDown(m){var a,T,S,R;this.setDragging(!0),this.mouseOffset.x=m.clientX,this.mouseOffset.y=m.clientY,this.containerPosition.x=(T=(a=this.container)==null?void 0:a.offsetLeft)!=null?T:0,this.containerPosition.y=(R=(S=this.container)==null?void 0:S.offsetTop)!=null?R:0,q.setFocus(this.uuid)}onMouseUp(m){this.setDragging(!1)}onMouseMove(m){!this.container||this.dragging&&(this.container.style.left=`${m.clientX+this.containerPosition.x-this.mouseOffset.x}px`,this.container.style.top=`${m.clientY+this.containerPosition.y-this.mouseOffset.y}px`)}onMouseLeave(m){this.setDragging(!1)}}const zn=oe`
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
`,Gn=oe`
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
`,jn=_.div`
  ${({requestToClose:f,isFocused:m,isMinimized:a,isMaximized:T})=>O`
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
    z-index: ${m?"15":"5"};

    animation: ${f?Gn:zn} 0.3s ease;
  `}
`,Wn=_.div`
  display: flex;
  height: 40px;
  background: transparent;
  color: ${({theme:f})=>f.colors.white};
  padding: 0 1rem;
  border-radius: 8.75px 8.75px 0 0;

  justify-content: flex-end;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem
  }
`,$n=_.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 8.75px 8.75px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 8.75px 8.75px;
  }
`;class jt{constructor(){L(this,"store",new Un);L(this,"close",()=>{this.store.setRequestToClose(!0),setTimeout(()=>{this.store.closeApp()},300)})}setMinimizeButton(m){this.store.setMinimizeButton(m)}setMaximizeButton(m){this.store.setMaximizeButton(m)}render(m){return A(jn,{ref:a=>this.store.setContainerRef(a),requestToClose:this.store.requestToClose,isFocused:this.store.isFocused,id:this.store.uuid,children:[this.store.titleBar&&h(Wn,{onMouseDown:this.store.onMouseDown,onMouseUp:this.store.onMouseUp,onMouseMove:this.store.onMouseMove,onMouseLeave:this.store.onMouseLeave,children:A("div",{children:[this.store.minimizeButton&&h(on,{}),this.store.maximizeButton&&h(an,{}),h(sn,{onClick:this.close})]})}),h($n,{children:m})]})}}class qn extends jt{render(){return super.render(h("iframe",{src:"https://www.bing.com.br"}))}}class Hn extends jt{render(){return super.render(h("iframe",{src:"https://www.spotify.com"}))}}const Yn=le(()=>A(Bn,{children:[h("button",{id:"startMenuButton",onClick:()=>q.toggleStartMenuOpened(),children:h(ve,{src:"assets/taskbar/Windows.svg"})}),h("button",{onClick:()=>{},children:h(ve,{src:"assets/taskbar/Search.svg"})}),h("button",{onClick:()=>{},children:h(ve,{src:"assets/taskbar/DesktopManager.svg"})}),h("button",{onClick:()=>{},children:h(ve,{src:"assets/taskbar/Chat.svg"})}),h("button",{onClick:()=>{},children:h(ve,{src:"assets/taskbar/FileExplorer.svg"})}),h("button",{onClick:()=>q.addApp(new qn),children:h(ve,{src:"assets/taskbar/MicrosoftEdge.svg"})}),h("button",{onClick:()=>q.addApp(new Hn),children:h(ve,{src:"assets/taskbar/vscode.png"})})]})),Xn=_.div`
  ${({theme:f})=>O`
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
`,Vn=_.div`
  display: flex;
  gap: 1rem;
`;function Kn(){return A(Xn,{children:[h(Nn,{}),h(Yn,{}),A(Vn,{children:[h(Rn,{}),h(Dn,{})]})]})}const Jn=oe`
  0% {
    transform: translateX(-50%);
    bottom: -1000px;
  }
  100% {
    transform: translateX(-50%);
    bottom: 70px;
  }
`,Qn=oe`
  0% {
    transform: translateX(-50%);
    bottom: 70px;
  }
  100% {
    transform: translateX(-50%);
    bottom: -1000px;
  }
`,Zn=_.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 925px;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${({requestToClose:f})=>f?Qn:Jn} 0.5s ease-in-out;
  overflow: hidden;
  

  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  border-radius: 8.75px;
  z-index: 50;
`,eo=_(Ee.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  padding: 0 40px;
`,to=_.div`
  ${({theme:f})=>O`
    background-color: rgba(48,48,48,0.6);
    border: none;
    border-radius: 5px;
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    
    input {
      background: transparent;
      color: ${f.colors.white};
      outline: none;
      border: none;
      width: 100%;
      padding: 10px;
      font-size: 1.7rem;

      &::placeholder {
        color: ${f.colors.white};
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
`,ro=_.div`
  ${({theme:f})=>O`
    display: flex;
    margin: 40px 40px 0 40px;

    justify-content: space-between;

    > span {
      color: ${f.colors.white};
      font-family: ${f.font.family.segoe};
      font-weight: bold;
      font-size: 15px;
    }
  `}
`,Wt=_(Ee.div)`
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
`,no=_(Ee.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 15px;
  height: 315px;
`,oo=_(Ee.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: none;
  overflow-y: scroll;
  height: 750px;
  margin: 15px 40px 0 40px;
  height: 650px;

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    background: transparent;
  }

  ${Wt} {
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
`,io=_.div`
  ${({theme:f})=>O`
    color: ${f.colors.white};
    font-family: ${f.font.family.segoe};
    font-size: 20px;
    padding: 10px;
    width: 100%;
    border-radius: 8.75px;

    &:hover {
      cursor: pointer;
      background-color: rgba(255,255,255,0.1);
    }
  `}
`,ao=_.span`
  ${({theme:f})=>O`
    color: ${f.colors.white};
    font-family: ${f.font.family.segoe};
    font-size: 15px;
  `}
`,Pt=_.button`
  ${({theme:f})=>O`
    display: flex;
    justify-content: space-around;
    width: 97px;
    height: 28px;
    background: transparent;
    backdrop-filter: brightness(0.7);
    border-radius: 5px;
    border: none;

    :hover {
      backdrop-filter: brightness(0.9);
    }
    
    span {
      color: ${f.colors.white};
      line-height: 27.5px;
    }
  `}
`,so=_.div`
  margin: 10px 30px 0 30px;
  height: 255px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 auto;
  column-gap: 40px;
`,lo=_.div`
  ${({theme:f})=>O`
    display: flex;
    justify-content: space-between;
    margin: 20px 40px;

    h2 {
      font-family: ${f.font.family.segoe};
      font-size: 17.5px;
      font-weight: bold;
      color: ${f.colors.white};
    }
  `}
`,uo=_.div`
  ${({theme:f})=>O`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 8px;
    border-radius: 8.75px;
    cursor: pointer;

    div {
      display: flex;
      flex-direction: column;
    }

    img {
      width: 40px;
      height: 40px;
    }

    span {
      color: ${f.colors.white};
      font-family: ${f.font.family.segoe};
      font-weight: normal;
      font-size: 15px;
    }

    p {
      color: rgba(255,255,255,0.7);
      font-family: ${f.font.family.roboto};
    }

    :hover {
      background: rgba(255,255,255,0.1);
    }
  `}
`,co=_.div`
  position: absolute;
  display: flex;
  width: 100%;

  backdrop-filter: brightness(0.8);
  border-radius: 0 0 8.75px 8.75px;
  height: 80px;
  padding: 20px 80px;
  top: 91%;
`,fo=_.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  span {
    color: ${({theme:f})=>f.colors.white};
    font-family: ${({theme:f})=>f.font.family.segoe};
    font-size: 15px;
    font-weight: normal;
  }
`;class po{constructor(){L(this,"tabIndex",0);L(this,"isAllAppsOpened",!1);L(this,"user",{img:"https://avatars.githubusercontent.com/u/50988834?v=4",name:"Rodrigo de Fran\xE7a"});L(this,"apps",[{icon:"assets/apps/microsoftEdge.svg",alt:"Edge"},{icon:"assets/apps/world.svg",alt:"World"},{icon:"assets/apps/powerpoint.svg",alt:"PowerPoint"},{icon:"assets/apps/oneNote.svg",alt:"OneNote"},{icon:"assets/apps/mail.svg",alt:"Mail"},{icon:"assets/apps/todo.svg",alt:"To Do"},{icon:"assets/apps/windowsStore.svg",alt:"Microsoft Store"},{icon:"assets/apps/photos.svg",alt:"Photos"},{icon:"assets/apps/yourPhone.svg",alt:"Your Phone"},{icon:"assets/apps/snippingTool.svg",alt:"Snipping Tool"},{icon:"assets/apps/notepad.svg",alt:"Notepad"},{icon:"assets/apps/xbox.svg",alt:"Xbox"},{icon:"assets/apps/twitter.svg",alt:"Twitter"},{icon:"assets/apps/config.svg",alt:"Settings"},{icon:"assets/apps/microsoftNews.svg",alt:"News"},{icon:"assets/apps/spotify.svg",alt:"Spotify"},{icon:"assets/apps/calculadora.svg",alt:"Calculator"},{icon:"assets/apps/paint.svg",alt:"Paint"}]);L(this,"recommendedApps",[{icon:"assets/icons/getStarted.png",title:"Get Started",description:"Welcome to Windows"},{icon:"assets/icons/pdfIcon.png",title:"Rental Agreement",description:"17m ago"},{icon:"assets/icons/wordIcon.png",title:"Syllabus",description:"2h ago"},{icon:"assets/icons/pdfIcon.png",title:"Logo Ideas",description:"12h ago"},{icon:"assets/icons/ppIcon.png",title:"Tournament Photos",description:"Yesterday at 4:20 PM"},{icon:"assets/icons/exelIcon.png",title:"Timetable",description:"Yesterday at 1:15 PM"}]);ye(this,{},{autoBind:!0})}setTabIndex(m){this.tabIndex=m}toggleAllApps(){this.isAllAppsOpened=!this.isAllAppsOpened}}var ee=new po;const It=({icon:f,alt:m,setPosition:a})=>A(Wt,{children:[h("img",{src:f,alt:m}),h(ao,{children:m})]});class mo{constructor(){L(this,"items",null);L(this,"position",null);ye(this,{},{autoBind:!0})}get isOpen(){return!!this.position}setPosition(m){this.position=m}setItems(m){this.items=m}}const pe=new mo,ho=f=>{function m(a){a.preventDefault(),pe.setItems(f),pe.setPosition({x:a.clientX,y:a.clientY})}return m};function st(f,m){ne.exports.useEffect(()=>{function a(T){T.path.some(R=>R===f.current)||m()}return window.addEventListener("click",a),()=>{window.removeEventListener("click",a)}},[])}const go=le(()=>{let f=[...new Set(ee.apps.map(S=>S.alt[0]))].sort();const m=ne.exports.useRef(null),a=ne.exports.useMemo(()=>Array.from({length:f.length},(R,W)=>{const Ae=ln(ee.apps).filter(xe=>xe.alt[0]===f[W]);return{[f[W]]:Ae}}),[ee.apps]),T=ho([{title:"testeando",icon:"assets/apps/xbox.svg"},{title:"mucho texto",icon:"assets/apps/xbox.svg"},{title:"qualquer coisa",icon:"assets/apps/xbox.svg"},{title:"seila",icon:"assets/apps/xbox.svg"}]);return st(m,q.toggleStartMenuOpened),A(Zn,{ref:m,requestToClose:q.startMenu.requestToClose,onContextMenu:T,children:[h("div",{style:{marginTop:30,marginLeft:40,marginRight:40},children:A(to,{children:[h(un,{size:20,color:"#fff"}),h("input",{type:"text",placeholder:"Type here to search"})]})}),A(ro,{children:[h("span",{children:ee.isAllAppsOpened?"All Apps":"Pinned"}),h(Pt,{onClick:ee.toggleAllApps,children:ee.isAllAppsOpened?A(it,{children:[h("span",{children:"<"}),h("span",{children:"Back"})]}):A(it,{children:[h("span",{children:"All apps"}),h("span",{children:">"})]})})]}),ee.isAllAppsOpened?h(oo,{animate:{opacity:1,x:0},initial:{opacity:0,x:"5%"},transition:{duration:.3},children:a.map((S,R)=>A(it,{children:[h(io,{children:f[R].toUpperCase()},f[R]),S[f[R]].map(W=>h(It,{icon:W.icon,alt:W.alt},W.alt))]}))}):A(eo,{animate:{opacity:1,x:0},initial:{opacity:0,x:"-5%"},transition:{duration:.3},children:[h(no,{children:ee.apps.map(S=>h(It,{icon:S.icon,alt:S.alt},S.icon))}),A(lo,{children:[h("h2",{children:"Recommended"}),A(Pt,{children:[h("span",{children:"More"}),h("span",{children:">"})]})]}),h(so,{children:ee.recommendedApps.map(S=>A(uo,{children:[h("img",{src:S.icon,alt:S.title}),A("div",{children:[h("span",{children:S.title}),h("p",{children:S.description})]})]},S.title))})]}),h(co,{children:A(fo,{children:[h("img",{src:ee.user.img,alt:""}),h("span",{children:ee.user.name})]})})]})}),vo=oe`
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 70px;
  }
`,yo=oe`
  0% {
    bottom: 70px;
  }
  100% {
    bottom: -200px;
  }
`,wo=_.div`
  width: 467.5px;
  position: absolute;
  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  filter: brightness(0.8);
  bottom: 70px;
  right: 1%;
  border-radius: 8.75px;
  animation: ${({requestToClose:f})=>f?yo:vo} 0.3s ease-in;
`,bo=_.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  margin: 2rem auto;
`,Eo=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  border: none;
  color: ${({theme:f})=>f.colors.white};
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
    font-family: ${({theme:f})=>f.font.family.segoe};
    font-weight: normal;
  }
`,xo=_.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`,ko=_.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  gap: 5rem;
  margin: 2rem 0;
`,Nt=_.input`
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
`,_o=_.div`
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
    font-family: ${({theme:f})=>f.font.family.segoe};
    font-weight: normal;
    color: white;
  }
`;class So{constructor(){L(this,"iconOptions",{color:"#fff",size:18});L(this,"buttons",[{icon:h(cn,ge({},this.iconOptions)),title:"Wi-fi",isActive:!1},{icon:h(dn,ge({},this.iconOptions)),title:"Bluetooth",isActive:!1},{icon:h(fn,ge({},this.iconOptions)),title:"Airplane mode",isActive:!1},{icon:h(pn,ge({},this.iconOptions)),title:"Battery saver",isActive:!1},{icon:h(mn,ge({},this.iconOptions)),title:"Focus assist",isActive:!1},{icon:h(hn,ge({},this.iconOptions)),title:"Accessibility",isActive:!1}]);ye(this)}}var Ne=new So;const Mo=le(()=>{const f=ne.exports.useRef(null);return st(f,q.toggleSystemTrayPopup),A(wo,{ref:f,requestToClose:q.systemTrayPopup.requestToClose,children:[A(xo,{children:[h(bo,{children:Ne.buttons.map((m,a)=>A(Eo,{children:[h("button",{onClick:()=>{Ne.buttons[a].isActive=!Ne.buttons[a].isActive},className:Ne.buttons[a].isActive?"active":"",children:m.icon}),h("span",{children:m.title})]},m.title))}),A(ko,{children:[h(Nt,{type:"range"}),h(Nt,{type:"range"})]})]}),h(_o,{children:h("span",{children:"92%"})})]})}),To=oe`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,Ao=oe`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`,Lo=_.div`
  ${({theme:f,requestToClose:m})=>O`
    display: flex;
    flex-direction: column;
    border-radius: 8.75px;
    position: absolute;
    bottom: 70px;
    right: 15px;
    width: 470px;
    height: 590px;
    background-color: rgba(68, 68, 68, 0.4);
    animation: ${m?Ao:To} 0.5s ease-in-out;
    backdrop-filter: blur(40px);
  `}
`,Bt=_.button`
  display: flex;
  color: white;
  font-size: 20px;
  background: transparent;
  border: 0;
  padding: 8px;
  border-radius: 20%;

  :hover {
    background: rgba(255,255,255,.2);
  }
`,Co=_.div`
  display: flex;
  height: 70px;
  background-color: rgba(68, 68, 68, 0.3);
  color: ${({theme:f})=>f.colors.white};
  padding: 0 2rem;
  border-radius: 8.75px 8.75px 0 0;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.5rem;
    font-family: ${({theme:f})=>f.font.family.openSans};
    color: #fff;
    
    &:hover {
      filter: brightness(0.8);
      cursor: default;
    }
  }
`,Do=_.div`
  ${({theme:f})=>O`
    display: flex;
    margin-top: 6px;
    
    div {
      display: flex;
      gap: 1rem;
    }

    span {
      font-size: 1.6rem;
      font-weight: 600;
      font-family: ${f.font.family.openSans};
      color: ${f.colors.white};
      text-transform: capitalize;
    }
  `}
`,Fo=_.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 0 3rem;
  place-content: center;
  overflow: hidden;
`,Oo=_(Ee.div)`
  ${({theme:f,isToday:m,isSelected:a})=>O`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: ${m?f.colors.primary:"transparent"};

    span {
      color: ${m?"#000":f.colors.white};
      font-size: 1.6rem;
      font-weight: 400;
      font-family: ${f.font.family.openSans};
      cursor: default;
    }

    ${a?m?O`
              border: 1px solid black;
          `:O`
              border: 1px solid ${f.colors.primary};
              backdrop-filter: brightness(0.8);

              span {
                color: ${f.colors.primary};
              }
          `:O`
          border: none;
        `}
    
    ${m?O`
        &:hover {
          background: ${gn(.1,f.colors.primary)};
        }
      `:O`
        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}
  `}
`,Ro=_.div`
  ${({theme:f})=>O`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    
    span {
      color: ${f.colors.white};
      font-size: 1.6rem;
      font-weight: 600;
      font-family: ${f.font.family.openSans};
    }
  `}
`;class Po{constructor(){L(this,"now",new Date);L(this,"selectedDay",new Date);L(this,"currentMonth",new Date);L(this,"daysOfWeek",["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]);L(this,"calendarHeaderText",new Intl.DateTimeFormat("pt-br",{month:"long",weekday:"long",day:"2-digit"}).format(this.now));L(this,"days",Array.from({length:this.lastDayOfMonth(new Date)},(m,a)=>{let T=new Date;return T.setDate(a+1),T}));ye(this,{},{autoBind:!0})}lastDayOfMonth(m){return new Date(m.getFullYear(),m.getMonth()+1,0).getDate()}setMonth(m){this.currentMonth=zt(this.currentMonth,{months:m}),this.days=Array.from({length:this.lastDayOfMonth(this.currentMonth)},(a,T)=>{let S=new Date(this.currentMonth);return S.setDate(T+1),S})}get month(){return new Intl.DateTimeFormat("pt-BR",{month:"long"}).format(this.days[0])}get year(){return new Intl.DateTimeFormat("pt-BR",{year:"numeric"}).format(this.days[0])}get day(){return new Intl.DateTimeFormat("pt-BR",{weekday:"short"}).format(this.now).split(".")[0]}setSelectedDay(m){this.selectedDay=m}}var te=new Po;function Io(){const f=ne.exports.useRef(null),m=ne.exports.useMemo(()=>{const T=new Date(te.currentMonth);T.setDate(1);let S=[];const R=T.getDay();for(let W=0;W<R;W++)S.unshift(zt(T,{days:W+1}));S.push(...te.days),T.setDate(0);for(let W=0;S.length<42;W++)S.push(vn(yn(T,1),{days:W+1}));return S},[te.days]);function a(T){te.setMonth(T)}return st(f,q.toggleCalendar),A(Lo,{ref:f,requestToClose:q.calendar.requestToClose,children:[h(Co,{children:h("span",{children:te.calendarHeaderText})}),A("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px"},children:[h(Do,{children:A("div",{children:[h("span",{children:te.month}),h("span",{children:te.year})]})}),A("div",{style:{display:"flex",gap:10},children:[h(Bt,{onClick:()=>a(1),children:h(wn,{size:20})}),h(Bt,{onClick:()=>a(-1),children:h(bn,{size:20})})]})]}),A(Fo,{children:[te.daysOfWeek.map(T=>h(Ro,{children:h("span",{children:T})},T)),m.map((T,S)=>h(Oo,{isToday:Ot(T,te.now),onClick:()=>te.setSelectedDay(T),isSelected:Ot(T,te.selectedDay),children:h("span",{children:T.getDate()})},S))]})]})}var No=le(Io);const Bo=_.div`
  ${({theme:f})=>O`
    display: flex;
    width: 100%;
    height: 40px;
    color: white;
    align-items: center;
    font-family: ${f.font.family.segoe};
    font-size: ${f.font.sizes.large};
    text-transform: capitalize;
    cursor: pointer;

    gap: 16px;
    border-radius: 8.75px;

    :hover {
      background: rgba(255,255,255,.2);
    }

    img {
      width: 35px;
    }
  `}
`;_.span`

`;const Uo=_(Ee.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: ${f=>f.y}px;
  left: ${f=>f.x}px;
  z-index: 9999;
  backdrop-filter: blur(40px);
  background: rgba(0,0,0,.2);
  width: 250px;
  border-radius: 8.75px;
  gap: 20px;
  padding: 10px;
  
`,zo=le(()=>{var m;const f=ne.exports.useRef(null);return ne.exports.useEffect(()=>{function a(T){T.path.some(R=>R===f.current)||pe.setPosition(null)}return window.addEventListener("click",a),()=>{window.removeEventListener("click",a)}},[pe.isOpen]),pe.isOpen?h(Uo,{ref:f,x:pe.position.x,y:pe.position.y,children:(m=pe.items)==null?void 0:m.map((a,T)=>A(Bo,{children:[h("img",{src:a.icon,alt:`item_${T}`}),h("span",{children:a.title})]}))}):null}),Go=oe`
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,jo=oe`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%);
    opacity: 0;
  }
`,Wo=_.div`
  ${({requestToClose:f,theme:m})=>O`
    width: 750px;
    height: 93%;
    position: absolute;
    background: rgba(255,255,255,.2);
    margin: .7%;
    backdrop-filter: blur(40px);
    border-radius: 8.75px;
    animation: ${f?jo:Go} 200ms ease-in-out;
    padding: 2rem;
    overflow: hidden;
  `}
`,$o=_.img`
  ${({theme:f})=>O`
    width: 45px;
    height: 45px;
    border-radius: 50%;
  `}
`,qo=_.div`
  ${({theme:f})=>O`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 4rem;
      font-family: ${f.font.family.segoe};
      font-weight: ${f.font.light};
      color: white;
    }
  `}
`,Ut=_.button`
  ${({theme:f})=>O`
    background: transparent;
    border: none;
    display: flex;
    flex: 1;
    height: 100%;
    width: 54px;
    align-items: center;
    justify-content: center;
    border-radius: 8.75px;
    

    :hover {
      backdrop-filter: brightness(.87);
    }
  `}
`,Ho=_.div`
  ${({theme:f})=>O`
    display: flex;
    background: rgba(214, 216, 219, .9);
    border-radius: 8.75px;
    align-items: center;
    height: 58px;
    justify-content: center;
    padding: 4px;
  `}
`,Yo=_.div`
  display: flex;
  background: rgb(255, 255, 255);
  border-radius: 8.75px;
`,Xo=_.div`
  ${({theme:f})=>O`
    padding: 5rem 2rem;
    overflow-y: scroll;
    height: 100%;
    margin-bottom: 1rem;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  `}
`;Gt.create({baseURL:"https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=d4abd38b3fc14466b2f09df2342c3edd"});const Vo=Gt.create({baseURL:"http://api.mediastack.com/v1/news?access_key=6157c8156100834ad8da1742fc281706&countries=br"}),Ko=le(()=>{const[f,m]=ne.exports.useState([]);return ne.exports.useEffect(()=>{async function a(){const{data:T}=await Vo.get("");console.log(T.data),m(T.data)}a()},[]),A(Wo,{children:[A(qo,{children:[h("div",{}),h("h2",{children:at.Hours}),A(Ho,{children:[h(Ut,{children:h(En,{size:30,color:"#8c8d8f"})}),h(Ut,{children:h($o,{src:"https://avatars.githubusercontent.com/u/50988834?v=4"})})]})]}),h(Xo,{children:f.map(a=>h(Yo,{children:a.image&&h("img",{src:a.image,alt:"noticia",width:"100%"})},a.url))})]})});var Jo=(()=>{var f=ti.url;return function(a){a=a||{};var a=typeof a!="undefined"?a:{},T,S;a.ready=new Promise(function(e,t){T=e,S=t}),["_main","_fflush","onRuntimeInitialized"].forEach(e=>{Object.getOwnPropertyDescriptor(a.ready,e)||Object.defineProperty(a.ready,e,{get:()=>z("You are getting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>z("You are setting "+e+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})});var R=Object.assign({},a),W=[],Ae="./this.program",xe=(e,t)=>{throw t},$t=!0,qt=!1,Ht=!1,Yt=!1;if(a.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var ie="";function Xt(e){return a.locateFile?a.locateFile(e,ie):ie+e}var Be,lt,Vt;{if(typeof document!="undefined"&&document.currentScript&&(ie=document.currentScript.src),f&&(ie=f),ie.indexOf("blob:")!==0?ie=ie.substr(0,ie.replace(/[?#].*/,"").lastIndexOf("/")+1):ie="",!(typeof window=="object"||typeof importScripts=="function"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");Be=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},lt=(e,t,r)=>{var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=()=>{if(n.status==200||n.status==0&&n.response){t(n.response);return}r()},n.onerror=r,n.send(null)}}var K=a.print||console.log.bind(console),D=a.printErr||console.warn.bind(console);Object.assign(a,R),R=null,Hr(),a.arguments&&(W=a.arguments),re("arguments","arguments_"),a.thisProgram&&(Ae=a.thisProgram),re("thisProgram","thisProgram"),a.quit&&(xe=a.quit),re("quit","quit_"),x(typeof a.memoryInitializerPrefixURL=="undefined","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),x(typeof a.pthreadMainPrefixURL=="undefined","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),x(typeof a.cdInitializerPrefixURL=="undefined","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),x(typeof a.filePackagePrefixURL=="undefined","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),x(typeof a.read=="undefined","Module.read option was removed (modify read_ in JS)"),x(typeof a.readAsync=="undefined","Module.readAsync option was removed (modify readAsync in JS)"),x(typeof a.readBinary=="undefined","Module.readBinary option was removed (modify readBinary in JS)"),x(typeof a.setWindowTitle=="undefined","Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),x(typeof a.TOTAL_MEMORY=="undefined","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),re("read","read_"),re("readAsync","readAsync"),re("readBinary","readBinary"),re("setWindowTitle","setWindowTitle"),x(!qt,"worker environment detected but not enabled at build time.  Add 'worker' to `-sENVIRONMENT` to enable."),x(!Ht,"node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable."),x(!Yt,"shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");function re(e,t){Object.getOwnPropertyDescriptor(a,e)||Object.defineProperty(a,e,{configurable:!0,get:function(){z("Module."+e+" has been replaced with plain "+t+" (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")}})}function Kt(e){Object.getOwnPropertyDescriptor(a,e)&&z("`Module."+e+"` was supplied but `"+e+"` not included in INCOMING_MODULE_JS_API")}function ut(e){return e==="FS_createPath"||e==="FS_createDataFile"||e==="FS_createPreloadedFile"||e==="FS_unlink"||e==="addRunDependency"||e==="FS_createLazyFile"||e==="FS_createDevice"||e==="removeRunDependency"}function Jt(e){typeof globalThis!="undefined"&&!Object.getOwnPropertyDescriptor(globalThis,e)&&Object.defineProperty(globalThis,e,{configurable:!0,get:function(){var t="`"+e+"` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line";ut(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),V(t)}})}function Qt(e){Object.getOwnPropertyDescriptor(a,e)||Object.defineProperty(a,e,{configurable:!0,get:function(){var t="'"+e+"' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";ut(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),z(t)}})}var ke;a.wasmBinary&&(ke=a.wasmBinary),re("wasmBinary","wasmBinary");var Zt=a.noExitRuntime||!0;re("noExitRuntime","noExitRuntime"),typeof WebAssembly!="object"&&z("no native wasm support detected");var Ue,ue=!1,Le;function x(e,t){e||z("Assertion failed"+(t?": "+t:""))}var ct=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):void 0;function me(e,t,r){for(var n=t+r,i=t;e[i]&&!(i>=n);)++i;if(i-t>16&&e.buffer&&ct)return ct.decode(e.subarray(t,i));for(var s="";t<i;){var c=e[t++];if(!(c&128)){s+=String.fromCharCode(c);continue}var l=e[t++]&63;if((c&224)==192){s+=String.fromCharCode((c&31)<<6|l);continue}var p=e[t++]&63;if((c&240)==224?c=(c&15)<<12|l<<6|p:((c&248)!=240&&V("Invalid UTF-8 leading byte 0x"+c.toString(16)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),c=(c&7)<<18|l<<12|p<<6|e[t++]&63),c<65536)s+=String.fromCharCode(c);else{var v=c-65536;s+=String.fromCharCode(55296|v>>10,56320|v&1023)}}return s}function er(e,t){return e?me(ae,e,t):""}function ze(e,t,r,n){if(!(n>0))return 0;for(var i=r,s=r+n-1,c=0;c<e.length;++c){var l=e.charCodeAt(c);if(l>=55296&&l<=57343){var p=e.charCodeAt(++c);l=65536+((l&1023)<<10)|p&1023}if(l<=127){if(r>=s)break;t[r++]=l}else if(l<=2047){if(r+1>=s)break;t[r++]=192|l>>6,t[r++]=128|l&63}else if(l<=65535){if(r+2>=s)break;t[r++]=224|l>>12,t[r++]=128|l>>6&63,t[r++]=128|l&63}else{if(r+3>=s)break;l>1114111&&V("Invalid Unicode code point 0x"+l.toString(16)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),t[r++]=240|l>>18,t[r++]=128|l>>12&63,t[r++]=128|l>>6&63,t[r++]=128|l&63}}return t[r]=0,r-i}function Ge(e){for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);n<=127?t++:n<=2047?t+=2:n>=55296&&n<=57343?(t+=4,++r):t+=3}return t}var dt,P,ae,je,b,H,ce;function tr(e){dt=e,a.HEAP8=P=new Int8Array(e),a.HEAP16=je=new Int16Array(e),a.HEAP32=b=new Int32Array(e),a.HEAPU8=ae=new Uint8Array(e),a.HEAPU16=new Uint16Array(e),a.HEAPU32=H=new Uint32Array(e),a.HEAPF32=ce=new Float32Array(e),a.HEAPF64=new Float64Array(e)}var We=5242880;a.TOTAL_STACK&&x(We===a.TOTAL_STACK,"the stack size can no longer be determined at runtime");var $e=a.INITIAL_MEMORY||16777216;re("INITIAL_MEMORY","INITIAL_MEMORY"),x($e>=We,"INITIAL_MEMORY should be larger than TOTAL_STACK, was "+$e+"! (TOTAL_STACK="+We+")"),x(typeof Int32Array!="undefined"&&typeof Float64Array!="undefined"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support"),x(!a.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),x($e==16777216,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");var ft;function rr(){var e=tt();x((e&3)==0),H[e>>2]=34821223,H[e+4>>2]=2310721022,H[0]=1668509029}function _e(){if(!ue){var e=tt(),t=H[e>>2],r=H[e+4>>2];(t!=34821223||r!=2310721022)&&z("Stack overflow! Stack cookie has been overwritten at 0x"+e.toString(16)+", expected hex dwords 0x89BACDFE and 0x2135467, but received 0x"+r.toString(16)+" 0x"+t.toString(16)),H[0]!==1668509029&&z("Runtime error: The application has corrupted its heap memory area (address zero)!")}}(function(){var e=new Int16Array(1),t=new Int8Array(e.buffer);if(e[0]=25459,t[0]!==115||t[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();var qe=[],pt=[],nr=[],mt=[],He=!1;function ht(){return Zt}function or(){if(a.preRun)for(typeof a.preRun=="function"&&(a.preRun=[a.preRun]);a.preRun.length;)lr(a.preRun.shift());De(qe)}function ir(){x(!He),He=!0,_e(),!a.noFSInit&&!o.init.initialized&&o.init(),o.ignorePermissions=!1,De(pt)}function ar(){_e(),De(nr)}function sr(){if(_e(),a.postRun)for(typeof a.postRun=="function"&&(a.postRun=[a.postRun]);a.postRun.length;)cr(a.postRun.shift());De(mt)}function lr(e){qe.unshift(e)}function ur(e){pt.unshift(e)}function cr(e){mt.unshift(e)}x(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),x(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),x(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),x(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var de=0,he=null,Se=null,we={};function gt(e){for(var t=e;;){if(!we[e])return e;e=t+Math.random()}}function Ye(e){de++,a.monitorRunDependencies&&a.monitorRunDependencies(de),e?(x(!we[e]),we[e]=1,he===null&&typeof setInterval!="undefined"&&(he=setInterval(function(){if(ue){clearInterval(he),he=null;return}var t=!1;for(var r in we)t||(t=!0,D("still waiting on run dependencies:")),D("dependency: "+r);t&&D("(end of list)")},1e4))):D("warning: run dependency added without ID")}function Ce(e){if(de--,a.monitorRunDependencies&&a.monitorRunDependencies(de),e?(x(we[e]),delete we[e]):D("warning: run dependency removed without ID"),de==0&&(he!==null&&(clearInterval(he),he=null),Se)){var t=Se;Se=null,t()}}function z(e){a.onAbort&&a.onAbort(e),e="Aborted("+e+")",D(e),ue=!0,Le=1;var t=new WebAssembly.RuntimeError(e);throw S(t),t}var dr="data:application/octet-stream;base64,";function vt(e){return e.startsWith(dr)}function fr(e){return e.startsWith("file://")}function Z(e,t){return function(){var r=e,n=t;return t||(n=a.asm),x(He,"native function `"+r+"` called before runtime initialization"),n[e]||x(n[e],"exported native function `"+r+"` not found"),n[e].apply(null,arguments)}}var X;a.locateFile?(X="hello3.wasm",vt(X)||(X=Xt(X))):X=new URL("./assets/hello3.6cea0a4c.wasm",self.location).toString();function yt(e){try{if(e==X&&ke)return new Uint8Array(ke);throw"both async and sync fetching of the wasm failed"}catch(t){z(t)}}function pr(){return!ke&&$t&&typeof fetch=="function"?fetch(X,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+X+"'";return e.arrayBuffer()}).catch(function(){return yt(X)}):Promise.resolve().then(function(){return yt(X)})}function mr(){var e={env:Mt,wasi_snapshot_preview1:Mt};function t(l,p){var v=l.exports;a.asm=v,Ue=a.asm.memory,x(Ue,"memory not found in wasm exports"),tr(Ue.buffer),ft=a.asm.__indirect_function_table,x(ft,"table not found in wasm exports"),ur(a.asm.__wasm_call_ctors),Ce("wasm-instantiate")}Ye("wasm-instantiate");var r=a;function n(l){x(a===r,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),r=null,t(l.instance)}function i(l){return pr().then(function(p){return WebAssembly.instantiate(p,e)}).then(function(p){return p}).then(l,function(p){D("failed to asynchronously prepare wasm: "+p),fr(X)&&D("warning: Loading from a file URI ("+X+") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"),z(p)})}function s(){return!ke&&typeof WebAssembly.instantiateStreaming=="function"&&!vt(X)&&typeof fetch=="function"?fetch(X,{credentials:"same-origin"}).then(function(l){var p=WebAssembly.instantiateStreaming(l,e);return p.then(n,function(v){return D("wasm streaming compile failed: "+v),D("falling back to ArrayBuffer instantiation"),i(n)})}):i(n)}if(a.instantiateWasm)try{var c=a.instantiateWasm(e,t);return c}catch(l){D("Module.instantiateWasm callback failed with error: "+l),S(l)}return s().catch(S),{}}var J,be;function wt(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function De(e){for(;e.length>0;)e.shift()(a)}function hr(e){return V("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling"),e}function gr(e){var t=/\b_Z[\w\d_]+/g;return e.replace(t,function(r){var n=hr(r);return r===n?r:n+" ["+r+"]"})}function bt(e){if(e instanceof wt||e=="unwind")return Le;xe(1,e)}function V(e){V.shown||(V.shown={}),V.shown[e]||(V.shown[e]=1,D(e))}function vr(){if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function"){var e=new Uint8Array(1);return()=>(crypto.getRandomValues(e),e[0])}else return()=>z("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")}var I={isAbs:e=>e.charAt(0)==="/",splitPath:e=>{var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return t.exec(e).slice(1)},normalizeArray:(e,t)=>{for(var r=0,n=e.length-1;n>=0;n--){var i=e[n];i==="."?e.splice(n,1):i===".."?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r;r--)e.unshift("..");return e},normalize:e=>{var t=I.isAbs(e),r=e.substr(-1)==="/";return e=I.normalizeArray(e.split("/").filter(n=>!!n),!t).join("/"),!e&&!t&&(e="."),e&&r&&(e+="/"),(t?"/":"")+e},dirname:e=>{var t=I.splitPath(e),r=t[0],n=t[1];return!r&&!n?".":(n&&(n=n.substr(0,n.length-1)),r+n)},basename:e=>{if(e==="/")return"/";e=I.normalize(e),e=e.replace(/\/$/,"");var t=e.lastIndexOf("/");return t===-1?e:e.substr(t+1)},join:function(){var e=Array.prototype.slice.call(arguments);return I.normalize(e.join("/"))},join2:(e,t)=>I.normalize(e+"/"+t)},se={resolve:function(){for(var e="",t=!1,r=arguments.length-1;r>=-1&&!t;r--){var n=r>=0?arguments[r]:o.cwd();if(typeof n!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!n)return"";e=n+"/"+e,t=I.isAbs(n)}return e=I.normalizeArray(e.split("/").filter(i=>!!i),!t).join("/"),(t?"/":"")+e||"."},relative:(e,t)=>{e=se.resolve(e).substr(1),t=se.resolve(t).substr(1);function r(v){for(var E=0;E<v.length&&v[E]==="";E++);for(var g=v.length-1;g>=0&&v[g]==="";g--);return E>g?[]:v.slice(E,g-E+1)}for(var n=r(e.split("/")),i=r(t.split("/")),s=Math.min(n.length,i.length),c=s,l=0;l<s;l++)if(n[l]!==i[l]){c=l;break}for(var p=[],l=c;l<n.length;l++)p.push("..");return p=p.concat(i.slice(c)),p.join("/")}};function Fe(e,t,r){var n=r>0?r:Ge(e)+1,i=new Array(n),s=ze(e,i,0,i.length);return t&&(i.length=s),i}var fe={ttys:[],init:function(){},shutdown:function(){},register:function(e,t){fe.ttys[e]={input:[],output:[],ops:t},o.registerDevice(e,fe.stream_ops)},stream_ops:{open:function(e){var t=fe.ttys[e.node.rdev];if(!t)throw new o.ErrnoError(43);e.tty=t,e.seekable=!1},close:function(e){e.tty.ops.fsync(e.tty)},fsync:function(e){e.tty.ops.fsync(e.tty)},read:function(e,t,r,n,i){if(!e.tty||!e.tty.ops.get_char)throw new o.ErrnoError(60);for(var s=0,c=0;c<n;c++){var l;try{l=e.tty.ops.get_char(e.tty)}catch{throw new o.ErrnoError(29)}if(l===void 0&&s===0)throw new o.ErrnoError(6);if(l==null)break;s++,t[r+c]=l}return s&&(e.node.timestamp=Date.now()),s},write:function(e,t,r,n,i){if(!e.tty||!e.tty.ops.put_char)throw new o.ErrnoError(60);try{for(var s=0;s<n;s++)e.tty.ops.put_char(e.tty,t[r+s])}catch{throw new o.ErrnoError(29)}return n&&(e.node.timestamp=Date.now()),s}},default_tty_ops:{get_char:function(e){if(!e.input.length){var t=null;if(typeof window!="undefined"&&typeof window.prompt=="function"?(t=window.prompt("Input: "),t!==null&&(t+=`
`)):typeof readline=="function"&&(t=readline(),t!==null&&(t+=`
`)),!t)return null;e.input=Fe(t,!0)}return e.input.shift()},put_char:function(e,t){t===null||t===10?(K(me(e.output,0)),e.output=[]):t!=0&&e.output.push(t)},fsync:function(e){e.output&&e.output.length>0&&(K(me(e.output,0)),e.output=[])}},default_tty1_ops:{put_char:function(e,t){t===null||t===10?(D(me(e.output,0)),e.output=[]):t!=0&&e.output.push(t)},fsync:function(e){e.output&&e.output.length>0&&(D(me(e.output,0)),e.output=[])}}};function yr(e,t){return ae.fill(0,e,e+t),e}function Et(e){z("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")}var M={ops_table:null,mount:function(e){return M.createNode(null,"/",16895,0)},createNode:function(e,t,r,n){if(o.isBlkdev(r)||o.isFIFO(r))throw new o.ErrnoError(63);M.ops_table||(M.ops_table={dir:{node:{getattr:M.node_ops.getattr,setattr:M.node_ops.setattr,lookup:M.node_ops.lookup,mknod:M.node_ops.mknod,rename:M.node_ops.rename,unlink:M.node_ops.unlink,rmdir:M.node_ops.rmdir,readdir:M.node_ops.readdir,symlink:M.node_ops.symlink},stream:{llseek:M.stream_ops.llseek}},file:{node:{getattr:M.node_ops.getattr,setattr:M.node_ops.setattr},stream:{llseek:M.stream_ops.llseek,read:M.stream_ops.read,write:M.stream_ops.write,allocate:M.stream_ops.allocate,mmap:M.stream_ops.mmap,msync:M.stream_ops.msync}},link:{node:{getattr:M.node_ops.getattr,setattr:M.node_ops.setattr,readlink:M.node_ops.readlink},stream:{}},chrdev:{node:{getattr:M.node_ops.getattr,setattr:M.node_ops.setattr},stream:o.chrdev_stream_ops}});var i=o.createNode(e,t,r,n);return o.isDir(i.mode)?(i.node_ops=M.ops_table.dir.node,i.stream_ops=M.ops_table.dir.stream,i.contents={}):o.isFile(i.mode)?(i.node_ops=M.ops_table.file.node,i.stream_ops=M.ops_table.file.stream,i.usedBytes=0,i.contents=null):o.isLink(i.mode)?(i.node_ops=M.ops_table.link.node,i.stream_ops=M.ops_table.link.stream):o.isChrdev(i.mode)&&(i.node_ops=M.ops_table.chrdev.node,i.stream_ops=M.ops_table.chrdev.stream),i.timestamp=Date.now(),e&&(e.contents[t]=i,e.timestamp=i.timestamp),i},getFileDataAsTypedArray:function(e){return e.contents?e.contents.subarray?e.contents.subarray(0,e.usedBytes):new Uint8Array(e.contents):new Uint8Array(0)},expandFileStorage:function(e,t){var r=e.contents?e.contents.length:0;if(!(r>=t)){var n=1024*1024;t=Math.max(t,r*(r<n?2:1.125)>>>0),r!=0&&(t=Math.max(t,256));var i=e.contents;e.contents=new Uint8Array(t),e.usedBytes>0&&e.contents.set(i.subarray(0,e.usedBytes),0)}},resizeFileStorage:function(e,t){if(e.usedBytes!=t)if(t==0)e.contents=null,e.usedBytes=0;else{var r=e.contents;e.contents=new Uint8Array(t),r&&e.contents.set(r.subarray(0,Math.min(t,e.usedBytes))),e.usedBytes=t}},node_ops:{getattr:function(e){var t={};return t.dev=o.isChrdev(e.mode)?e.id:1,t.ino=e.id,t.mode=e.mode,t.nlink=1,t.uid=0,t.gid=0,t.rdev=e.rdev,o.isDir(e.mode)?t.size=4096:o.isFile(e.mode)?t.size=e.usedBytes:o.isLink(e.mode)?t.size=e.link.length:t.size=0,t.atime=new Date(e.timestamp),t.mtime=new Date(e.timestamp),t.ctime=new Date(e.timestamp),t.blksize=4096,t.blocks=Math.ceil(t.size/t.blksize),t},setattr:function(e,t){t.mode!==void 0&&(e.mode=t.mode),t.timestamp!==void 0&&(e.timestamp=t.timestamp),t.size!==void 0&&M.resizeFileStorage(e,t.size)},lookup:function(e,t){throw o.genericErrors[44]},mknod:function(e,t,r,n){return M.createNode(e,t,r,n)},rename:function(e,t,r){if(o.isDir(e.mode)){var n;try{n=o.lookupNode(t,r)}catch{}if(n)for(var i in n.contents)throw new o.ErrnoError(55)}delete e.parent.contents[e.name],e.parent.timestamp=Date.now(),e.name=r,t.contents[r]=e,t.timestamp=e.parent.timestamp,e.parent=t},unlink:function(e,t){delete e.contents[t],e.timestamp=Date.now()},rmdir:function(e,t){var r=o.lookupNode(e,t);for(var n in r.contents)throw new o.ErrnoError(55);delete e.contents[t],e.timestamp=Date.now()},readdir:function(e){var t=[".",".."];for(var r in e.contents)!e.contents.hasOwnProperty(r)||t.push(r);return t},symlink:function(e,t,r){var n=M.createNode(e,t,41471,0);return n.link=r,n},readlink:function(e){if(!o.isLink(e.mode))throw new o.ErrnoError(28);return e.link}},stream_ops:{read:function(e,t,r,n,i){var s=e.node.contents;if(i>=e.node.usedBytes)return 0;var c=Math.min(e.node.usedBytes-i,n);if(x(c>=0),c>8&&s.subarray)t.set(s.subarray(i,i+c),r);else for(var l=0;l<c;l++)t[r+l]=s[i+l];return c},write:function(e,t,r,n,i,s){if(x(!(t instanceof ArrayBuffer)),!n)return 0;var c=e.node;if(c.timestamp=Date.now(),t.subarray&&(!c.contents||c.contents.subarray)){if(s)return x(i===0,"canOwn must imply no weird position inside the file"),c.contents=t.subarray(r,r+n),c.usedBytes=n,n;if(c.usedBytes===0&&i===0)return c.contents=t.slice(r,r+n),c.usedBytes=n,n;if(i+n<=c.usedBytes)return c.contents.set(t.subarray(r,r+n),i),n}if(M.expandFileStorage(c,i+n),c.contents.subarray&&t.subarray)c.contents.set(t.subarray(r,r+n),i);else for(var l=0;l<n;l++)c.contents[i+l]=t[r+l];return c.usedBytes=Math.max(c.usedBytes,i+n),n},llseek:function(e,t,r){var n=t;if(r===1?n+=e.position:r===2&&o.isFile(e.node.mode)&&(n+=e.node.usedBytes),n<0)throw new o.ErrnoError(28);return n},allocate:function(e,t,r){M.expandFileStorage(e.node,t+r),e.node.usedBytes=Math.max(e.node.usedBytes,t+r)},mmap:function(e,t,r,n,i){if(!o.isFile(e.node.mode))throw new o.ErrnoError(43);var s,c,l=e.node.contents;if(!(i&2)&&l.buffer===dt)c=!1,s=l.byteOffset;else{if((r>0||r+t<l.length)&&(l.subarray?l=l.subarray(r,r+t):l=Array.prototype.slice.call(l,r,r+t)),c=!0,s=Et(),!s)throw new o.ErrnoError(48);P.set(l,s)}return{ptr:s,allocated:c}},msync:function(e,t,r,n,i){return M.stream_ops.write(e,t,0,n,r,!1),0}}};function wr(e,t,r,n){var i=n?"":gt("al "+e);lt(e,s=>{x(s,'Loading data file "'+e+'" failed (no arrayBuffer).'),t(new Uint8Array(s)),i&&Ce(i)},s=>{if(r)r();else throw'Loading data file "'+e+'" failed.'}),i&&Ye(i)}var br={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"},Xe={},o={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(e,t={})=>{if(e=se.resolve(o.cwd(),e),!e)return{path:"",node:null};var r={follow_mount:!0,recurse_count:0};if(t=Object.assign(r,t),t.recurse_count>8)throw new o.ErrnoError(32);for(var n=I.normalizeArray(e.split("/").filter(g=>!!g),!1),i=o.root,s="/",c=0;c<n.length;c++){var l=c===n.length-1;if(l&&t.parent)break;if(i=o.lookupNode(i,n[c]),s=I.join2(s,n[c]),o.isMountpoint(i)&&(!l||l&&t.follow_mount)&&(i=i.mounted.root),!l||t.follow)for(var p=0;o.isLink(i.mode);){var v=o.readlink(s);s=se.resolve(I.dirname(s),v);var E=o.lookupPath(s,{recurse_count:t.recurse_count+1});if(i=E.node,p++>40)throw new o.ErrnoError(32)}}return{path:s,node:i}},getPath:e=>{for(var t;;){if(o.isRoot(e)){var r=e.mount.mountpoint;return t?r[r.length-1]!=="/"?r+"/"+t:r+t:r}t=t?e.name+"/"+t:e.name,e=e.parent}},hashName:(e,t)=>{for(var r=0,n=0;n<t.length;n++)r=(r<<5)-r+t.charCodeAt(n)|0;return(e+r>>>0)%o.nameTable.length},hashAddNode:e=>{var t=o.hashName(e.parent.id,e.name);e.name_next=o.nameTable[t],o.nameTable[t]=e},hashRemoveNode:e=>{var t=o.hashName(e.parent.id,e.name);if(o.nameTable[t]===e)o.nameTable[t]=e.name_next;else for(var r=o.nameTable[t];r;){if(r.name_next===e){r.name_next=e.name_next;break}r=r.name_next}},lookupNode:(e,t)=>{var r=o.mayLookup(e);if(r)throw new o.ErrnoError(r,e);for(var n=o.hashName(e.id,t),i=o.nameTable[n];i;i=i.name_next){var s=i.name;if(i.parent.id===e.id&&s===t)return i}return o.lookup(e,t)},createNode:(e,t,r,n)=>{x(typeof e=="object");var i=new o.FSNode(e,t,r,n);return o.hashAddNode(i),i},destroyNode:e=>{o.hashRemoveNode(e)},isRoot:e=>e===e.parent,isMountpoint:e=>!!e.mounted,isFile:e=>(e&61440)===32768,isDir:e=>(e&61440)===16384,isLink:e=>(e&61440)===40960,isChrdev:e=>(e&61440)===8192,isBlkdev:e=>(e&61440)===24576,isFIFO:e=>(e&61440)===4096,isSocket:e=>(e&49152)===49152,flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:e=>{var t=o.flagModes[e];if(typeof t=="undefined")throw new Error("Unknown file open mode: "+e);return t},flagsToPermissionString:e=>{var t=["r","w","rw"][e&3];return e&512&&(t+="w"),t},nodePermissions:(e,t)=>o.ignorePermissions?0:t.includes("r")&&!(e.mode&292)||t.includes("w")&&!(e.mode&146)||t.includes("x")&&!(e.mode&73)?2:0,mayLookup:e=>{var t=o.nodePermissions(e,"x");return t||(e.node_ops.lookup?0:2)},mayCreate:(e,t)=>{try{var r=o.lookupNode(e,t);return 20}catch{}return o.nodePermissions(e,"wx")},mayDelete:(e,t,r)=>{var n;try{n=o.lookupNode(e,t)}catch(s){return s.errno}var i=o.nodePermissions(e,"wx");if(i)return i;if(r){if(!o.isDir(n.mode))return 54;if(o.isRoot(n)||o.getPath(n)===o.cwd())return 10}else if(o.isDir(n.mode))return 31;return 0},mayOpen:(e,t)=>e?o.isLink(e.mode)?32:o.isDir(e.mode)&&(o.flagsToPermissionString(t)!=="r"||t&512)?31:o.nodePermissions(e,o.flagsToPermissionString(t)):44,MAX_OPEN_FDS:4096,nextfd:(e=0,t=o.MAX_OPEN_FDS)=>{for(var r=e;r<=t;r++)if(!o.streams[r])return r;throw new o.ErrnoError(33)},getStream:e=>o.streams[e],createStream:(e,t,r)=>{o.FSStream||(o.FSStream=function(){this.shared={}},o.FSStream.prototype={},Object.defineProperties(o.FSStream.prototype,{object:{get:function(){return this.node},set:function(i){this.node=i}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}},flags:{get:function(){return this.shared.flags},set:function(i){this.shared.flags=i}},position:{get:function(){return this.shared.position},set:function(i){this.shared.position=i}}})),e=Object.assign(new o.FSStream,e);var n=o.nextfd(t,r);return e.fd=n,o.streams[n]=e,e},closeStream:e=>{o.streams[e]=null},chrdev_stream_ops:{open:e=>{var t=o.getDevice(e.node.rdev);e.stream_ops=t.stream_ops,e.stream_ops.open&&e.stream_ops.open(e)},llseek:()=>{throw new o.ErrnoError(70)}},major:e=>e>>8,minor:e=>e&255,makedev:(e,t)=>e<<8|t,registerDevice:(e,t)=>{o.devices[e]={stream_ops:t}},getDevice:e=>o.devices[e],getMounts:e=>{for(var t=[],r=[e];r.length;){var n=r.pop();t.push(n),r.push.apply(r,n.mounts)}return t},syncfs:(e,t)=>{typeof e=="function"&&(t=e,e=!1),o.syncFSRequests++,o.syncFSRequests>1&&D("warning: "+o.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var r=o.getMounts(o.root.mount),n=0;function i(c){return x(o.syncFSRequests>0),o.syncFSRequests--,t(c)}function s(c){if(c)return s.errored?void 0:(s.errored=!0,i(c));++n>=r.length&&i(null)}r.forEach(c=>{if(!c.type.syncfs)return s(null);c.type.syncfs(c,e,s)})},mount:(e,t,r)=>{if(typeof e=="string")throw e;var n=r==="/",i=!r,s;if(n&&o.root)throw new o.ErrnoError(10);if(!n&&!i){var c=o.lookupPath(r,{follow_mount:!1});if(r=c.path,s=c.node,o.isMountpoint(s))throw new o.ErrnoError(10);if(!o.isDir(s.mode))throw new o.ErrnoError(54)}var l={type:e,opts:t,mountpoint:r,mounts:[]},p=e.mount(l);return p.mount=l,l.root=p,n?o.root=p:s&&(s.mounted=l,s.mount&&s.mount.mounts.push(l)),p},unmount:e=>{var t=o.lookupPath(e,{follow_mount:!1});if(!o.isMountpoint(t.node))throw new o.ErrnoError(28);var r=t.node,n=r.mounted,i=o.getMounts(n);Object.keys(o.nameTable).forEach(c=>{for(var l=o.nameTable[c];l;){var p=l.name_next;i.includes(l.mount)&&o.destroyNode(l),l=p}}),r.mounted=null;var s=r.mount.mounts.indexOf(n);x(s!==-1),r.mount.mounts.splice(s,1)},lookup:(e,t)=>e.node_ops.lookup(e,t),mknod:(e,t,r)=>{var n=o.lookupPath(e,{parent:!0}),i=n.node,s=I.basename(e);if(!s||s==="."||s==="..")throw new o.ErrnoError(28);var c=o.mayCreate(i,s);if(c)throw new o.ErrnoError(c);if(!i.node_ops.mknod)throw new o.ErrnoError(63);return i.node_ops.mknod(i,s,t,r)},create:(e,t)=>(t=t!==void 0?t:438,t&=4095,t|=32768,o.mknod(e,t,0)),mkdir:(e,t)=>(t=t!==void 0?t:511,t&=1023,t|=16384,o.mknod(e,t,0)),mkdirTree:(e,t)=>{for(var r=e.split("/"),n="",i=0;i<r.length;++i)if(!!r[i]){n+="/"+r[i];try{o.mkdir(n,t)}catch(s){if(s.errno!=20)throw s}}},mkdev:(e,t,r)=>(typeof r=="undefined"&&(r=t,t=438),t|=8192,o.mknod(e,t,r)),symlink:(e,t)=>{if(!se.resolve(e))throw new o.ErrnoError(44);var r=o.lookupPath(t,{parent:!0}),n=r.node;if(!n)throw new o.ErrnoError(44);var i=I.basename(t),s=o.mayCreate(n,i);if(s)throw new o.ErrnoError(s);if(!n.node_ops.symlink)throw new o.ErrnoError(63);return n.node_ops.symlink(n,i,e)},rename:(e,t)=>{var r=I.dirname(e),n=I.dirname(t),i=I.basename(e),s=I.basename(t),c,l,p;if(c=o.lookupPath(e,{parent:!0}),l=c.node,c=o.lookupPath(t,{parent:!0}),p=c.node,!l||!p)throw new o.ErrnoError(44);if(l.mount!==p.mount)throw new o.ErrnoError(75);var v=o.lookupNode(l,i),E=se.relative(e,n);if(E.charAt(0)!==".")throw new o.ErrnoError(28);if(E=se.relative(t,r),E.charAt(0)!==".")throw new o.ErrnoError(55);var g;try{g=o.lookupNode(p,s)}catch{}if(v!==g){var y=o.isDir(v.mode),w=o.mayDelete(l,i,y);if(w)throw new o.ErrnoError(w);if(w=g?o.mayDelete(p,s,y):o.mayCreate(p,s),w)throw new o.ErrnoError(w);if(!l.node_ops.rename)throw new o.ErrnoError(63);if(o.isMountpoint(v)||g&&o.isMountpoint(g))throw new o.ErrnoError(10);if(p!==l&&(w=o.nodePermissions(l,"w"),w))throw new o.ErrnoError(w);o.hashRemoveNode(v);try{l.node_ops.rename(v,p,s)}catch(k){throw k}finally{o.hashAddNode(v)}}},rmdir:e=>{var t=o.lookupPath(e,{parent:!0}),r=t.node,n=I.basename(e),i=o.lookupNode(r,n),s=o.mayDelete(r,n,!0);if(s)throw new o.ErrnoError(s);if(!r.node_ops.rmdir)throw new o.ErrnoError(63);if(o.isMountpoint(i))throw new o.ErrnoError(10);r.node_ops.rmdir(r,n),o.destroyNode(i)},readdir:e=>{var t=o.lookupPath(e,{follow:!0}),r=t.node;if(!r.node_ops.readdir)throw new o.ErrnoError(54);return r.node_ops.readdir(r)},unlink:e=>{var t=o.lookupPath(e,{parent:!0}),r=t.node;if(!r)throw new o.ErrnoError(44);var n=I.basename(e),i=o.lookupNode(r,n),s=o.mayDelete(r,n,!1);if(s)throw new o.ErrnoError(s);if(!r.node_ops.unlink)throw new o.ErrnoError(63);if(o.isMountpoint(i))throw new o.ErrnoError(10);r.node_ops.unlink(r,n),o.destroyNode(i)},readlink:e=>{var t=o.lookupPath(e),r=t.node;if(!r)throw new o.ErrnoError(44);if(!r.node_ops.readlink)throw new o.ErrnoError(28);return se.resolve(o.getPath(r.parent),r.node_ops.readlink(r))},stat:(e,t)=>{var r=o.lookupPath(e,{follow:!t}),n=r.node;if(!n)throw new o.ErrnoError(44);if(!n.node_ops.getattr)throw new o.ErrnoError(63);return n.node_ops.getattr(n)},lstat:e=>o.stat(e,!0),chmod:(e,t,r)=>{var n;if(typeof e=="string"){var i=o.lookupPath(e,{follow:!r});n=i.node}else n=e;if(!n.node_ops.setattr)throw new o.ErrnoError(63);n.node_ops.setattr(n,{mode:t&4095|n.mode&-4096,timestamp:Date.now()})},lchmod:(e,t)=>{o.chmod(e,t,!0)},fchmod:(e,t)=>{var r=o.getStream(e);if(!r)throw new o.ErrnoError(8);o.chmod(r.node,t)},chown:(e,t,r,n)=>{var i;if(typeof e=="string"){var s=o.lookupPath(e,{follow:!n});i=s.node}else i=e;if(!i.node_ops.setattr)throw new o.ErrnoError(63);i.node_ops.setattr(i,{timestamp:Date.now()})},lchown:(e,t,r)=>{o.chown(e,t,r,!0)},fchown:(e,t,r)=>{var n=o.getStream(e);if(!n)throw new o.ErrnoError(8);o.chown(n.node,t,r)},truncate:(e,t)=>{if(t<0)throw new o.ErrnoError(28);var r;if(typeof e=="string"){var n=o.lookupPath(e,{follow:!0});r=n.node}else r=e;if(!r.node_ops.setattr)throw new o.ErrnoError(63);if(o.isDir(r.mode))throw new o.ErrnoError(31);if(!o.isFile(r.mode))throw new o.ErrnoError(28);var i=o.nodePermissions(r,"w");if(i)throw new o.ErrnoError(i);r.node_ops.setattr(r,{size:t,timestamp:Date.now()})},ftruncate:(e,t)=>{var r=o.getStream(e);if(!r)throw new o.ErrnoError(8);if((r.flags&2097155)===0)throw new o.ErrnoError(28);o.truncate(r.node,t)},utime:(e,t,r)=>{var n=o.lookupPath(e,{follow:!0}),i=n.node;i.node_ops.setattr(i,{timestamp:Math.max(t,r)})},open:(e,t,r)=>{if(e==="")throw new o.ErrnoError(44);t=typeof t=="string"?o.modeStringToFlags(t):t,r=typeof r=="undefined"?438:r,t&64?r=r&4095|32768:r=0;var n;if(typeof e=="object")n=e;else{e=I.normalize(e);try{var i=o.lookupPath(e,{follow:!(t&131072)});n=i.node}catch{}}var s=!1;if(t&64)if(n){if(t&128)throw new o.ErrnoError(20)}else n=o.mknod(e,r,0),s=!0;if(!n)throw new o.ErrnoError(44);if(o.isChrdev(n.mode)&&(t&=-513),t&65536&&!o.isDir(n.mode))throw new o.ErrnoError(54);if(!s){var c=o.mayOpen(n,t);if(c)throw new o.ErrnoError(c)}t&512&&!s&&o.truncate(n,0),t&=-131713;var l=o.createStream({node:n,path:o.getPath(n),flags:t,seekable:!0,position:0,stream_ops:n.stream_ops,ungotten:[],error:!1});return l.stream_ops.open&&l.stream_ops.open(l),a.logReadFiles&&!(t&1)&&(o.readFiles||(o.readFiles={}),e in o.readFiles||(o.readFiles[e]=1)),l},close:e=>{if(o.isClosed(e))throw new o.ErrnoError(8);e.getdents&&(e.getdents=null);try{e.stream_ops.close&&e.stream_ops.close(e)}catch(t){throw t}finally{o.closeStream(e.fd)}e.fd=null},isClosed:e=>e.fd===null,llseek:(e,t,r)=>{if(o.isClosed(e))throw new o.ErrnoError(8);if(!e.seekable||!e.stream_ops.llseek)throw new o.ErrnoError(70);if(r!=0&&r!=1&&r!=2)throw new o.ErrnoError(28);return e.position=e.stream_ops.llseek(e,t,r),e.ungotten=[],e.position},read:(e,t,r,n,i)=>{if(n<0||i<0)throw new o.ErrnoError(28);if(o.isClosed(e))throw new o.ErrnoError(8);if((e.flags&2097155)===1)throw new o.ErrnoError(8);if(o.isDir(e.node.mode))throw new o.ErrnoError(31);if(!e.stream_ops.read)throw new o.ErrnoError(28);var s=typeof i!="undefined";if(!s)i=e.position;else if(!e.seekable)throw new o.ErrnoError(70);var c=e.stream_ops.read(e,t,r,n,i);return s||(e.position+=c),c},write:(e,t,r,n,i,s)=>{if(n<0||i<0)throw new o.ErrnoError(28);if(o.isClosed(e))throw new o.ErrnoError(8);if((e.flags&2097155)===0)throw new o.ErrnoError(8);if(o.isDir(e.node.mode))throw new o.ErrnoError(31);if(!e.stream_ops.write)throw new o.ErrnoError(28);e.seekable&&e.flags&1024&&o.llseek(e,0,2);var c=typeof i!="undefined";if(!c)i=e.position;else if(!e.seekable)throw new o.ErrnoError(70);var l=e.stream_ops.write(e,t,r,n,i,s);return c||(e.position+=l),l},allocate:(e,t,r)=>{if(o.isClosed(e))throw new o.ErrnoError(8);if(t<0||r<=0)throw new o.ErrnoError(28);if((e.flags&2097155)===0)throw new o.ErrnoError(8);if(!o.isFile(e.node.mode)&&!o.isDir(e.node.mode))throw new o.ErrnoError(43);if(!e.stream_ops.allocate)throw new o.ErrnoError(138);e.stream_ops.allocate(e,t,r)},mmap:(e,t,r,n,i)=>{if((n&2)!==0&&(i&2)===0&&(e.flags&2097155)!==2)throw new o.ErrnoError(2);if((e.flags&2097155)===1)throw new o.ErrnoError(2);if(!e.stream_ops.mmap)throw new o.ErrnoError(43);return e.stream_ops.mmap(e,t,r,n,i)},msync:(e,t,r,n,i)=>e.stream_ops.msync?e.stream_ops.msync(e,t,r,n,i):0,munmap:e=>0,ioctl:(e,t,r)=>{if(!e.stream_ops.ioctl)throw new o.ErrnoError(59);return e.stream_ops.ioctl(e,t,r)},readFile:(e,t={})=>{if(t.flags=t.flags||0,t.encoding=t.encoding||"binary",t.encoding!=="utf8"&&t.encoding!=="binary")throw new Error('Invalid encoding type "'+t.encoding+'"');var r,n=o.open(e,t.flags),i=o.stat(e),s=i.size,c=new Uint8Array(s);return o.read(n,c,0,s,0),t.encoding==="utf8"?r=me(c,0):t.encoding==="binary"&&(r=c),o.close(n),r},writeFile:(e,t,r={})=>{r.flags=r.flags||577;var n=o.open(e,r.flags,r.mode);if(typeof t=="string"){var i=new Uint8Array(Ge(t)+1),s=ze(t,i,0,i.length);o.write(n,i,0,s,void 0,r.canOwn)}else if(ArrayBuffer.isView(t))o.write(n,t,0,t.byteLength,void 0,r.canOwn);else throw new Error("Unsupported data type");o.close(n)},cwd:()=>o.currentPath,chdir:e=>{var t=o.lookupPath(e,{follow:!0});if(t.node===null)throw new o.ErrnoError(44);if(!o.isDir(t.node.mode))throw new o.ErrnoError(54);var r=o.nodePermissions(t.node,"x");if(r)throw new o.ErrnoError(r);o.currentPath=t.path},createDefaultDirectories:()=>{o.mkdir("/tmp"),o.mkdir("/home"),o.mkdir("/home/web_user")},createDefaultDevices:()=>{o.mkdir("/dev"),o.registerDevice(o.makedev(1,3),{read:()=>0,write:(t,r,n,i,s)=>i}),o.mkdev("/dev/null",o.makedev(1,3)),fe.register(o.makedev(5,0),fe.default_tty_ops),fe.register(o.makedev(6,0),fe.default_tty1_ops),o.mkdev("/dev/tty",o.makedev(5,0)),o.mkdev("/dev/tty1",o.makedev(6,0));var e=vr();o.createDevice("/dev","random",e),o.createDevice("/dev","urandom",e),o.mkdir("/dev/shm"),o.mkdir("/dev/shm/tmp")},createSpecialDirectories:()=>{o.mkdir("/proc");var e=o.mkdir("/proc/self");o.mkdir("/proc/self/fd"),o.mount({mount:()=>{var t=o.createNode(e,"fd",16895,73);return t.node_ops={lookup:(r,n)=>{var i=+n,s=o.getStream(i);if(!s)throw new o.ErrnoError(8);var c={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>s.path}};return c.parent=c,c}},t}},{},"/proc/self/fd")},createStandardStreams:()=>{a.stdin?o.createDevice("/dev","stdin",a.stdin):o.symlink("/dev/tty","/dev/stdin"),a.stdout?o.createDevice("/dev","stdout",null,a.stdout):o.symlink("/dev/tty","/dev/stdout"),a.stderr?o.createDevice("/dev","stderr",null,a.stderr):o.symlink("/dev/tty1","/dev/stderr");var e=o.open("/dev/stdin",0),t=o.open("/dev/stdout",1),r=o.open("/dev/stderr",1);x(e.fd===0,"invalid handle for stdin ("+e.fd+")"),x(t.fd===1,"invalid handle for stdout ("+t.fd+")"),x(r.fd===2,"invalid handle for stderr ("+r.fd+")")},ensureErrnoError:()=>{o.ErrnoError||(o.ErrnoError=function(t,r){this.node=r,this.setErrno=function(n){this.errno=n;for(var i in Xe)if(Xe[i]===n){this.code=i;break}},this.setErrno(t),this.message=br[t],this.stack&&(Object.defineProperty(this,"stack",{value:new Error().stack,writable:!0}),this.stack=gr(this.stack))},o.ErrnoError.prototype=new Error,o.ErrnoError.prototype.constructor=o.ErrnoError,[44].forEach(e=>{o.genericErrors[e]=new o.ErrnoError(e),o.genericErrors[e].stack="<generic error, no stack>"}))},staticInit:()=>{o.ensureErrnoError(),o.nameTable=new Array(4096),o.mount(M,{},"/"),o.createDefaultDirectories(),o.createDefaultDevices(),o.createSpecialDirectories(),o.filesystems={MEMFS:M}},init:(e,t,r)=>{x(!o.init.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),o.init.initialized=!0,o.ensureErrnoError(),a.stdin=e||a.stdin,a.stdout=t||a.stdout,a.stderr=r||a.stderr,o.createStandardStreams()},quit:()=>{o.init.initialized=!1,Tt(0);for(var e=0;e<o.streams.length;e++){var t=o.streams[e];!t||o.close(t)}},getMode:(e,t)=>{var r=0;return e&&(r|=365),t&&(r|=146),r},findObject:(e,t)=>{var r=o.analyzePath(e,t);return r.exists?r.object:null},analyzePath:(e,t)=>{try{var r=o.lookupPath(e,{follow:!t});e=r.path}catch{}var n={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var r=o.lookupPath(e,{parent:!0});n.parentExists=!0,n.parentPath=r.path,n.parentObject=r.node,n.name=I.basename(e),r=o.lookupPath(e,{follow:!t}),n.exists=!0,n.path=r.path,n.object=r.node,n.name=r.node.name,n.isRoot=r.path==="/"}catch(i){n.error=i.errno}return n},createPath:(e,t,r,n)=>{e=typeof e=="string"?e:o.getPath(e);for(var i=t.split("/").reverse();i.length;){var s=i.pop();if(!!s){var c=I.join2(e,s);try{o.mkdir(c)}catch{}e=c}}return c},createFile:(e,t,r,n,i)=>{var s=I.join2(typeof e=="string"?e:o.getPath(e),t),c=o.getMode(n,i);return o.create(s,c)},createDataFile:(e,t,r,n,i,s)=>{var c=t;e&&(e=typeof e=="string"?e:o.getPath(e),c=t?I.join2(e,t):e);var l=o.getMode(n,i),p=o.create(c,l);if(r){if(typeof r=="string"){for(var v=new Array(r.length),E=0,g=r.length;E<g;++E)v[E]=r.charCodeAt(E);r=v}o.chmod(p,l|146);var y=o.open(p,577);o.write(y,r,0,r.length,0,s),o.close(y),o.chmod(p,l)}return p},createDevice:(e,t,r,n)=>{var i=I.join2(typeof e=="string"?e:o.getPath(e),t),s=o.getMode(!!r,!!n);o.createDevice.major||(o.createDevice.major=64);var c=o.makedev(o.createDevice.major++,0);return o.registerDevice(c,{open:l=>{l.seekable=!1},close:l=>{n&&n.buffer&&n.buffer.length&&n(10)},read:(l,p,v,E,g)=>{for(var y=0,w=0;w<E;w++){var k;try{k=r()}catch{throw new o.ErrnoError(29)}if(k===void 0&&y===0)throw new o.ErrnoError(6);if(k==null)break;y++,p[v+w]=k}return y&&(l.node.timestamp=Date.now()),y},write:(l,p,v,E,g)=>{for(var y=0;y<E;y++)try{n(p[v+y])}catch{throw new o.ErrnoError(29)}return E&&(l.node.timestamp=Date.now()),y}}),o.mkdev(i,s,c)},forceLoadFile:e=>{if(e.isDevice||e.isFolder||e.link||e.contents)return!0;if(typeof XMLHttpRequest!="undefined")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(Be)try{e.contents=Fe(Be(e.url),!0),e.usedBytes=e.contents.length}catch{throw new o.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile:(e,t,r,n,i)=>{function s(){this.lengthKnown=!1,this.chunks=[]}if(s.prototype.get=function(w){if(!(w>this.length-1||w<0)){var k=w%this.chunkSize,C=w/this.chunkSize|0;return this.getter(C)[k]}},s.prototype.setDataGetter=function(w){this.getter=w},s.prototype.cacheLength=function(){var w=new XMLHttpRequest;if(w.open("HEAD",r,!1),w.send(null),!(w.status>=200&&w.status<300||w.status===304))throw new Error("Couldn't load "+r+". Status: "+w.status);var k=Number(w.getResponseHeader("Content-length")),C,F=(C=w.getResponseHeader("Accept-Ranges"))&&C==="bytes",G=(C=w.getResponseHeader("Content-Encoding"))&&C==="gzip",j=1024*1024;F||(j=k);var U=($,Q)=>{if($>Q)throw new Error("invalid range ("+$+", "+Q+") or no bytes requested!");if(Q>k-1)throw new Error("only "+k+" bytes available! programmer error!");var B=new XMLHttpRequest;if(B.open("GET",r,!1),k!==j&&B.setRequestHeader("Range","bytes="+$+"-"+Q),B.responseType="arraybuffer",B.overrideMimeType&&B.overrideMimeType("text/plain; charset=x-user-defined"),B.send(null),!(B.status>=200&&B.status<300||B.status===304))throw new Error("Couldn't load "+r+". Status: "+B.status);return B.response!==void 0?new Uint8Array(B.response||[]):Fe(B.responseText||"",!0)},Y=this;Y.setDataGetter($=>{var Q=$*j,B=($+1)*j-1;if(B=Math.min(B,k-1),typeof Y.chunks[$]=="undefined"&&(Y.chunks[$]=U(Q,B)),typeof Y.chunks[$]=="undefined")throw new Error("doXHR failed!");return Y.chunks[$]}),(G||!k)&&(j=k=1,k=this.getter(0).length,j=k,K("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=k,this._chunkSize=j,this.lengthKnown=!0},typeof XMLHttpRequest!="undefined"){throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var c,l}else var l={isDevice:!1,url:r};var p=o.createFile(e,t,l,n,i);l.contents?p.contents=l.contents:l.url&&(p.contents=null,p.url=l.url),Object.defineProperties(p,{usedBytes:{get:function(){return this.contents.length}}});var v={},E=Object.keys(p.stream_ops);E.forEach(y=>{var w=p.stream_ops[y];v[y]=function(){return o.forceLoadFile(p),w.apply(null,arguments)}});function g(y,w,k,C,F){var G=y.node.contents;if(F>=G.length)return 0;var j=Math.min(G.length-F,C);if(x(j>=0),G.slice)for(var U=0;U<j;U++)w[k+U]=G[F+U];else for(var U=0;U<j;U++)w[k+U]=G.get(F+U);return j}return v.read=(y,w,k,C,F)=>(o.forceLoadFile(p),g(y,w,k,C,F)),v.mmap=(y,w,k,C,F)=>{o.forceLoadFile(p);var G=Et();if(!G)throw new o.ErrnoError(48);return g(y,P,G,w,k),{ptr:G,allocated:!0}},p.stream_ops=v,p},createPreloadedFile:(e,t,r,n,i,s,c,l,p,v)=>{var E=t?se.resolve(I.join2(e,t)):e,g=gt("cp "+E);function y(w){function k(C){v&&v(),l||o.createDataFile(e,t,C,n,i,p),s&&s(),Ce(g)}d.handledByPreloadPlugin(w,E,k,()=>{c&&c(),Ce(g)})||k(w)}Ye(g),typeof r=="string"?wr(r,w=>y(w),c):y(r)},indexedDB:()=>window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,DB_NAME:()=>"EM_FS_"+window.location.pathname,DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:(e,t,r)=>{t=t||(()=>{}),r=r||(()=>{});var n=o.indexedDB();try{var i=n.open(o.DB_NAME(),o.DB_VERSION)}catch(s){return r(s)}i.onupgradeneeded=()=>{K("creating db");var s=i.result;s.createObjectStore(o.DB_STORE_NAME)},i.onsuccess=()=>{var s=i.result,c=s.transaction([o.DB_STORE_NAME],"readwrite"),l=c.objectStore(o.DB_STORE_NAME),p=0,v=0,E=e.length;function g(){v==0?t():r()}e.forEach(y=>{var w=l.put(o.analyzePath(y).object.contents,y);w.onsuccess=()=>{p++,p+v==E&&g()},w.onerror=()=>{v++,p+v==E&&g()}}),c.onerror=r},i.onerror=r},loadFilesFromDB:(e,t,r)=>{t=t||(()=>{}),r=r||(()=>{});var n=o.indexedDB();try{var i=n.open(o.DB_NAME(),o.DB_VERSION)}catch(s){return r(s)}i.onupgradeneeded=r,i.onsuccess=()=>{var s=i.result;try{var c=s.transaction([o.DB_STORE_NAME],"readonly")}catch(y){r(y);return}var l=c.objectStore(o.DB_STORE_NAME),p=0,v=0,E=e.length;function g(){v==0?t():r()}e.forEach(y=>{var w=l.get(y);w.onsuccess=()=>{o.analyzePath(y).exists&&o.unlink(y),o.createDataFile(I.dirname(y),I.basename(y),w.result,!0,!0,!0),p++,p+v==E&&g()},w.onerror=()=>{v++,p+v==E&&g()}}),c.onerror=r},i.onerror=r},absolutePath:()=>{z("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder:()=>{z("FS.createFolder has been removed; use FS.mkdir instead")},createLink:()=>{z("FS.createLink has been removed; use FS.symlink instead")},joinPath:()=>{z("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc:()=>{z("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath:()=>{z("FS.standardizePath has been removed; use PATH.normalize instead")}};function Ve(e,t){if(d.mainLoop.timingMode=e,d.mainLoop.timingValue=t,!d.mainLoop.func)return D("emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up."),1;if(d.mainLoop.running||(d.mainLoop.running=!0),e==0)d.mainLoop.scheduler=function(){var c=Math.max(0,d.mainLoop.tickStartTime+t-Ke())|0;setTimeout(d.mainLoop.runner,c)},d.mainLoop.method="timeout";else if(e==1)d.mainLoop.scheduler=function(){d.requestAnimationFrame(d.mainLoop.runner)},d.mainLoop.method="rAF";else if(e==2){if(typeof setImmediate=="undefined"){var r=[],n="setimmediate",i=s=>{(s.data===n||s.data.target===n)&&(s.stopPropagation(),r.shift()())};addEventListener("message",i,!0),setImmediate=function(c){r.push(c),postMessage(n,"*")}}d.mainLoop.scheduler=function(){setImmediate(d.mainLoop.runner)},d.mainLoop.method="immediate"}return 0}var Ke;Ke=()=>performance.now();function Er(e){Le=e,ht()||(a.onExit&&a.onExit(e),ue=!0),xe(e,new wt(e))}function xr(e,t){if(Le=e,Qr(),ht()&&!t){var r="program exited (with status: "+e+"), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)";S(r),D(r)}Er(e)}function kr(e,t,r,n,i){x(!d.mainLoop.func,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."),d.mainLoop.func=e,d.mainLoop.arg=n;var s=d.mainLoop.currentlyRunningMainloop;function c(){return!(s<d.mainLoop.currentlyRunningMainloop)}if(d.mainLoop.running=!1,d.mainLoop.runner=function(){if(!ue){if(d.mainLoop.queue.length>0){var p=Date.now(),v=d.mainLoop.queue.shift();if(v.func(v.arg),d.mainLoop.remainingBlockers){var E=d.mainLoop.remainingBlockers,g=E%1==0?E-1:Math.floor(E);v.counted?d.mainLoop.remainingBlockers=g:(g=g+.5,d.mainLoop.remainingBlockers=(8*E+g)/9)}if(K('main loop blocker "'+v.name+'" took '+(Date.now()-p)+" ms"),d.mainLoop.updateStatus(),!c())return;setTimeout(d.mainLoop.runner,0);return}if(!!c()){if(d.mainLoop.currentFrameNumber=d.mainLoop.currentFrameNumber+1|0,d.mainLoop.timingMode==1&&d.mainLoop.timingValue>1&&d.mainLoop.currentFrameNumber%d.mainLoop.timingValue!=0){d.mainLoop.scheduler();return}else d.mainLoop.timingMode==0&&(d.mainLoop.tickStartTime=Ke());d.mainLoop.method==="timeout"&&a.ctx&&(V("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"),d.mainLoop.method=""),d.mainLoop.runIter(e),_e(),c()&&(typeof u=="object"&&u.audio&&u.audio.queueNewAudioData&&u.audio.queueNewAudioData(),d.mainLoop.scheduler())}}},i||(t&&t>0?Ve(0,1e3/t):Ve(1,1),d.mainLoop.scheduler()),r)throw"unwind"}function Je(e){if(ue){D("user callback triggered after runtime exited or application aborted.  Ignoring.");return}try{e()}catch(t){bt(t)}}function xt(e,t){return setTimeout(function(){Je(e)},t)}var d={mainLoop:{running:!1,scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function(){d.mainLoop.scheduler=null,d.mainLoop.currentlyRunningMainloop++},resume:function(){d.mainLoop.currentlyRunningMainloop++;var e=d.mainLoop.timingMode,t=d.mainLoop.timingValue,r=d.mainLoop.func;d.mainLoop.func=null,kr(r,0,!1,d.mainLoop.arg,!0),Ve(e,t),d.mainLoop.scheduler()},updateStatus:function(){if(a.setStatus){var e=a.statusMessage||"Please wait...",t=d.mainLoop.remainingBlockers,r=d.mainLoop.expectedBlockers;t?t<r?a.setStatus(e+" ("+(r-t)+"/"+r+")"):a.setStatus(e):a.setStatus("")}},runIter:function(e){if(!ue){if(a.preMainLoop){var t=a.preMainLoop();if(t===!1)return}Je(e),a.postMainLoop&&a.postMainLoop()}}},isFullscreen:!1,pointerLock:!1,moduleContextCreatedCallbacks:[],workers:[],init:function(){if(a.preloadPlugins||(a.preloadPlugins=[]),d.initted)return;d.initted=!0;try{new Blob,d.hasBlobConstructor=!0}catch{d.hasBlobConstructor=!1,D("warning: no blob constructor, cannot create blobs with mimetypes")}d.BlobBuilder=typeof MozBlobBuilder!="undefined"?MozBlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:d.hasBlobConstructor?null:D("warning: no BlobBuilder"),d.URLObject=typeof window!="undefined"?window.URL?window.URL:window.webkitURL:void 0,!a.noImageDecoding&&typeof d.URLObject=="undefined"&&(D("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),a.noImageDecoding=!0);var e={};e.canHandle=function(s){return!a.noImageDecoding&&/\.(jpg|jpeg|png|bmp)$/i.test(s)},e.handle=function(s,c,l,p){var v=null;if(d.hasBlobConstructor)try{v=new Blob([s],{type:d.getMimetype(c)}),v.size!==s.length&&(v=new Blob([new Uint8Array(s).buffer],{type:d.getMimetype(c)}))}catch(w){V("Blob constructor present but fails: "+w+"; falling back to blob builder")}if(!v){var E=new d.BlobBuilder;E.append(new Uint8Array(s).buffer),v=E.getBlob()}var g=d.URLObject.createObjectURL(v);x(typeof g=="string","createObjectURL must return a url as a string");var y=new Image;y.onload=()=>{x(y.complete,"Image "+c+" could not be decoded");var w=document.createElement("canvas");w.width=y.width,w.height=y.height;var k=w.getContext("2d");k.drawImage(y,0,0),qr[c]=w,d.URLObject.revokeObjectURL(g),l&&l(s)},y.onerror=w=>{K("Image "+g+" could not be decoded"),p&&p()},y.src=g},a.preloadPlugins.push(e);var t={};t.canHandle=function(s){return!a.noAudioDecoding&&s.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},t.handle=function(s,c,l,p){var v=!1;function E(C){v||(v=!0,St[c]=C,l&&l(s))}function g(){v||(v=!0,St[c]=new Audio,p&&p())}if(d.hasBlobConstructor){try{var y=new Blob([s],{type:d.getMimetype(c)})}catch{return g()}var w=d.URLObject.createObjectURL(y);x(typeof w=="string","createObjectURL must return a url as a string");var k=new Audio;k.addEventListener("canplaythrough",()=>E(k),!1),k.onerror=function(F){if(v)return;D("warning: browser could not fully decode audio "+c+", trying slower base64 approach");function G(j){for(var U="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Y="=",$="",Q=0,B=0,rt=0;rt<j.length;rt++)for(Q=Q<<8|j[rt],B+=8;B>=6;){var Zr=Q>>B-6&63;B-=6,$+=U[Zr]}return B==2?($+=U[(Q&3)<<4],$+=Y+Y):B==4&&($+=U[(Q&15)<<2],$+=Y),$}k.src="data:audio/x-"+c.substr(-3)+";base64,"+G(s),E(k)},k.src=w,xt(function(){E(k)},1e4)}else return g()},a.preloadPlugins.push(t);function r(){d.pointerLock=document.pointerLockElement===a.canvas||document.mozPointerLockElement===a.canvas||document.webkitPointerLockElement===a.canvas||document.msPointerLockElement===a.canvas}var n=a.canvas;n&&(n.requestPointerLock=n.requestPointerLock||n.mozRequestPointerLock||n.webkitRequestPointerLock||n.msRequestPointerLock||(()=>{}),n.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||(()=>{}),n.exitPointerLock=n.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",r,!1),document.addEventListener("mozpointerlockchange",r,!1),document.addEventListener("webkitpointerlockchange",r,!1),document.addEventListener("mspointerlockchange",r,!1),a.elementPointerLock&&n.addEventListener("click",i=>{!d.pointerLock&&a.canvas.requestPointerLock&&(a.canvas.requestPointerLock(),i.preventDefault())},!1))},handledByPreloadPlugin:function(e,t,r,n){d.init();var i=!1;return a.preloadPlugins.forEach(function(s){i||s.canHandle(t)&&(s.handle(e,t,r,n),i=!0)}),i},createContext:function(e,t,r,n){if(t&&a.ctx&&e==a.canvas)return a.ctx;var i,s;if(t){var c={antialias:!1,alpha:!1,majorVersion:1};if(n)for(var l in n)c[l]=n[l];typeof N!="undefined"&&(s=N.createContext(e,c),s&&(i=N.getContext(s).GLctx))}else i=e.getContext("2d");return i?(r&&(t||x(typeof et=="undefined","cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),a.ctx=i,t&&N.makeContextCurrent(s),a.useWebGL=t,d.moduleContextCreatedCallbacks.forEach(function(p){p()}),d.init()),i):null},destroyContext:function(e,t,r){},fullscreenHandlersInstalled:!1,lockPointer:void 0,resizeCanvas:void 0,requestFullscreen:function(e,t){d.lockPointer=e,d.resizeCanvas=t,typeof d.lockPointer=="undefined"&&(d.lockPointer=!0),typeof d.resizeCanvas=="undefined"&&(d.resizeCanvas=!1);var r=a.canvas;function n(){d.isFullscreen=!1;var s=r.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===s?(r.exitFullscreen=d.exitFullscreen,d.lockPointer&&r.requestPointerLock(),d.isFullscreen=!0,d.resizeCanvas?d.setFullscreenCanvasSize():d.updateCanvasDimensions(r)):(s.parentNode.insertBefore(r,s),s.parentNode.removeChild(s),d.resizeCanvas?d.setWindowedCanvasSize():d.updateCanvasDimensions(r)),a.onFullScreen&&a.onFullScreen(d.isFullscreen),a.onFullscreen&&a.onFullscreen(d.isFullscreen)}d.fullscreenHandlersInstalled||(d.fullscreenHandlersInstalled=!0,document.addEventListener("fullscreenchange",n,!1),document.addEventListener("mozfullscreenchange",n,!1),document.addEventListener("webkitfullscreenchange",n,!1),document.addEventListener("MSFullscreenChange",n,!1));var i=document.createElement("div");r.parentNode.insertBefore(i,r),i.appendChild(r),i.requestFullscreen=i.requestFullscreen||i.mozRequestFullScreen||i.msRequestFullscreen||(i.webkitRequestFullscreen?()=>i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):null)||(i.webkitRequestFullScreen?()=>i.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):null),i.requestFullscreen()},requestFullScreen:function(){z("Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)")},exitFullscreen:function(){if(!d.isFullscreen)return!1;var e=document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){};return e.apply(document,[]),!0},nextRAF:0,fakeRequestAnimationFrame:function(e){var t=Date.now();if(d.nextRAF===0)d.nextRAF=t+1e3/60;else for(;t+2>=d.nextRAF;)d.nextRAF+=1e3/60;var r=Math.max(d.nextRAF-t,0);setTimeout(e,r)},requestAnimationFrame:function(e){if(typeof requestAnimationFrame=="function"){requestAnimationFrame(e);return}var t=d.fakeRequestAnimationFrame;t(e)},safeSetTimeout:function(e){return xt(e)},safeRequestAnimationFrame:function(e){return d.requestAnimationFrame(function(){Je(e)})},getMimetype:function(e){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[e.substr(e.lastIndexOf(".")+1)]},getUserMedia:function(e){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia),window.getUserMedia(e)},getMovementX:function(e){return e.movementX||e.mozMovementX||e.webkitMovementX||0},getMovementY:function(e){return e.movementY||e.mozMovementY||e.webkitMovementY||0},getMouseWheelDelta:function(e){var t=0;switch(e.type){case"DOMMouseScroll":t=e.detail/3;break;case"mousewheel":t=e.wheelDelta/120;break;case"wheel":switch(t=e.deltaY,e.deltaMode){case 0:t/=100;break;case 1:t/=3;break;case 2:t*=80;break;default:throw"unrecognized mouse wheel delta mode: "+e.deltaMode}break;default:throw"unrecognized mouse wheel event: "+e.type}return t},mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function(e){if(d.pointerLock)e.type!="mousemove"&&"mozMovementX"in e?d.mouseMovementX=d.mouseMovementY=0:(d.mouseMovementX=d.getMovementX(e),d.mouseMovementY=d.getMovementY(e)),typeof u!="undefined"?(d.mouseX=u.mouseX+d.mouseMovementX,d.mouseY=u.mouseY+d.mouseMovementY):(d.mouseX+=d.mouseMovementX,d.mouseY+=d.mouseMovementY);else{var t=a.canvas.getBoundingClientRect(),r=a.canvas.width,n=a.canvas.height,i=typeof window.scrollX!="undefined"?window.scrollX:window.pageXOffset,s=typeof window.scrollY!="undefined"?window.scrollY:window.pageYOffset;if(x(typeof i!="undefined"&&typeof s!="undefined","Unable to retrieve scroll position, mouse positions likely broken."),e.type==="touchstart"||e.type==="touchend"||e.type==="touchmove"){var c=e.touch;if(c===void 0)return;var l=c.pageX-(i+t.left),p=c.pageY-(s+t.top);l=l*(r/t.width),p=p*(n/t.height);var v={x:l,y:p};if(e.type==="touchstart")d.lastTouches[c.identifier]=v,d.touches[c.identifier]=v;else if(e.type==="touchend"||e.type==="touchmove"){var E=d.touches[c.identifier];E||(E=v),d.lastTouches[c.identifier]=E,d.touches[c.identifier]=v}return}var g=e.pageX-(i+t.left),y=e.pageY-(s+t.top);g=g*(r/t.width),y=y*(n/t.height),d.mouseMovementX=g-d.mouseX,d.mouseMovementY=y-d.mouseY,d.mouseX=g,d.mouseY=y}},resizeListeners:[],updateResizeListeners:function(){var e=a.canvas;d.resizeListeners.forEach(function(t){t(e.width,e.height)})},setCanvasSize:function(e,t,r){var n=a.canvas;d.updateCanvasDimensions(n,e,t),r||d.updateResizeListeners()},windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:function(){if(typeof u!="undefined"){var e=H[u.screen>>2];e=e|8388608,b[u.screen>>2]=e}d.updateCanvasDimensions(a.canvas),d.updateResizeListeners()},setWindowedCanvasSize:function(){if(typeof u!="undefined"){var e=H[u.screen>>2];e=e&-8388609,b[u.screen>>2]=e}d.updateCanvasDimensions(a.canvas),d.updateResizeListeners()},updateCanvasDimensions:function(e,t,r){t&&r?(e.widthNative=t,e.heightNative=r):(t=e.widthNative,r=e.heightNative);var n=t,i=r;if(a.forcedAspectRatio&&a.forcedAspectRatio>0&&(n/i<a.forcedAspectRatio?n=Math.round(i*a.forcedAspectRatio):i=Math.round(n/a.forcedAspectRatio)),(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===e.parentNode&&typeof screen!="undefined"){var s=Math.min(screen.width/n,screen.height/i);n=Math.round(n*s),i=Math.round(i*s)}d.resizeCanvas?(e.width!=n&&(e.width=n),e.height!=i&&(e.height=i),typeof e.style!="undefined"&&(e.style.removeProperty("width"),e.style.removeProperty("height"))):(e.width!=t&&(e.width=t),e.height!=r&&(e.height=r),typeof e.style!="undefined"&&(n!=t||i!=r?(e.style.setProperty("width",n+"px","important"),e.style.setProperty("height",i+"px","important")):(e.style.removeProperty("width"),e.style.removeProperty("height"))))}};function _r(){return Date.now()-u.startTime|0}function kt(e){var t=u.surfaces[e];if(t.locked++,t.locked>1||(t.buffer||(t.buffer=Me(t.width*t.height*4),H[e+20>>2]=t.buffer),H[e+20>>2]=t.buffer,e==u.screen&&a.screenIsReadOnly&&t.image))return 0;if(t.image=t.ctx.getImageData(0,0,t.width,t.height),e==u.screen&&u.defaults.opaqueFrontBuffer)for(var r=t.image.data,n=r.length,i=0;i<n/4;i++)r[i*4+3]=255;{if(t.isFlagSet(2097152))throw"CopyOnLock is not supported for SDL_LockSurface with SDL_HWPALETTE flag set"+new Error().stack;ae.set(t.image.data,t.buffer)}return 0}function Sr(){return u.unicode}function Mr(){return u.ttfContext}function Tr(){return u.audio}var u={defaults:{width:320,height:200,copyOnLock:!0,discardOnLock:!1,opaqueFrontBuffer:!0},version:null,surfaces:{},canvasPool:[],events:[],fonts:[null],audios:[null],rwops:[null],music:{audio:null,volume:1},mixerFrequency:22050,mixerFormat:32784,mixerNumChannels:2,mixerChunkSize:1024,channelMinimumNumber:0,GL:!1,glAttributes:{0:3,1:3,2:2,3:0,4:0,5:1,6:16,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:1,16:0,17:0,18:0},keyboardState:null,keyboardMap:{},canRequestFullscreen:!1,isRequestingFullscreen:!1,textInput:!1,startTime:null,initFlags:0,buttonState:0,modState:0,DOMButtons:[0,0,0],DOMEventToSDLEvent:{},TOUCH_DEFAULT_ID:0,eventHandler:null,eventHandlerContext:null,eventHandlerTemp:0,keyCodes:{16:1249,17:1248,18:1250,20:1081,33:1099,34:1102,35:1101,36:1098,37:1104,38:1106,39:1103,40:1105,44:316,45:1097,46:127,91:1251,93:1125,96:1122,97:1113,98:1114,99:1115,100:1116,101:1117,102:1118,103:1119,104:1120,105:1121,106:1109,107:1111,109:1110,110:1123,111:1108,112:1082,113:1083,114:1084,115:1085,116:1086,117:1087,118:1088,119:1089,120:1090,121:1091,122:1092,123:1093,124:1128,125:1129,126:1130,127:1131,128:1132,129:1133,130:1134,131:1135,132:1136,133:1137,134:1138,135:1139,144:1107,160:94,161:33,162:34,163:35,164:36,165:37,166:38,167:95,168:40,169:41,170:42,171:43,172:124,173:45,174:123,175:125,176:126,181:127,182:129,183:128,188:44,190:46,191:47,192:96,219:91,220:92,221:93,222:39,224:1251},scanCodes:{8:42,9:43,13:40,27:41,32:44,35:204,39:53,44:54,46:55,47:56,48:39,49:30,50:31,51:32,52:33,53:34,54:35,55:36,56:37,57:38,58:203,59:51,61:46,91:47,92:49,93:48,96:52,97:4,98:5,99:6,100:7,101:8,102:9,103:10,104:11,105:12,106:13,107:14,108:15,109:16,110:17,111:18,112:19,113:20,114:21,115:22,116:23,117:24,118:25,119:26,120:27,121:28,122:29,127:76,305:224,308:226,316:70},loadRect:function(e){return{x:b[e+0>>2],y:b[e+4>>2],w:b[e+8>>2],h:b[e+12>>2]}},updateRect:function(e,t){b[e>>2]=t.x,b[e+4>>2]=t.y,b[e+8>>2]=t.w,b[e+12>>2]=t.h},intersectionOfRects:function(e,t){var r=Math.max(e.x,t.x),n=Math.max(e.y,t.y),i=Math.min(e.x+e.w,t.x+t.w),s=Math.min(e.y+e.h,t.y+t.h);return{x:r,y:n,w:Math.max(r,i)-r,h:Math.max(n,s)-n}},checkPixelFormat:function(e){var t=b[e>>2];t!=-2042224636&&V("Unsupported pixel format!")},loadColorToCSSRGB:function(e){var t=b[e>>2];return"rgb("+(t&255)+","+(t>>8&255)+","+(t>>16&255)+")"},loadColorToCSSRGBA:function(e){var t=b[e>>2];return"rgba("+(t&255)+","+(t>>8&255)+","+(t>>16&255)+","+(t>>24&255)/255+")"},translateColorToCSSRGBA:function(e){return"rgba("+(e&255)+","+(e>>8&255)+","+(e>>16&255)+","+(e>>>24)/255+")"},translateRGBAToCSSRGBA:function(e,t,r,n){return"rgba("+(e&255)+","+(t&255)+","+(r&255)+","+(n&255)/255+")"},translateRGBAToColor:function(e,t,r,n){return e|t<<8|r<<16|n<<24},makeSurface:function(e,t,r,n,i,s,c,l,p){r=r||0;var v=r&1,E=r&2097152,g=r&67108864,y=Me(60),w=Me(44),k=E?1:4,C=0;!v&&!g&&(C=Me(e*t*4)),b[y>>2]=r,H[y+4>>2]=w,b[y+8>>2]=e,b[y+12>>2]=t,b[y+16>>2]=e*k,H[y+20>>2]=C,b[y+36>>2]=0,b[y+40>>2]=0,b[y+44>>2]=a.canvas.width,b[y+48>>2]=a.canvas.height,b[y+56>>2]=1,b[w>>2]=-2042224636,b[w+4>>2]=0,P[w+8>>0]=k*8,P[w+9>>0]=k,b[w+12>>2]=s||255,b[w+16>>2]=c||65280,b[w+20>>2]=l||16711680,b[w+24>>2]=p||4278190080,u.GL=u.GL||g;var F;n?F=a.canvas:(u.canvasPool.length>0?F=u.canvasPool.pop():F=document.createElement("canvas"),F.width=e,F.height=t);var G={antialias:u.glAttributes[13]!=0,depth:u.glAttributes[6]>0,stencil:u.glAttributes[7]>0,alpha:u.glAttributes[3]>0},j=d.createContext(F,g,n,G);return u.surfaces[y]={width:e,height:t,canvas:F,ctx:j,surf:y,buffer:C,pixelFormat:w,alpha:255,flags:r,locked:0,usePageCanvas:n,source:i,isFlagSet:function(U){return r&U}},y},copyIndexedColorData:function(e,t,r,n,i){if(!!e.colors){var s=a.canvas.width,c=a.canvas.height,l=t||0,p=r||0,v=(n||s-l)+l,E=(i||c-p)+p,g=e.buffer;e.image.data32||(e.image.data32=new Uint32Array(e.image.data.buffer));for(var y=e.image.data32,w=e.colors32,k=p;k<E;++k)for(var C=k*s,F=l;F<v;++F)y[C+F]=w[ae[g+C+F>>0]]}},freeSurface:function(e){var t=e+56,r=b[t>>2];if(r>1){b[t>>2]=r-1;return}var n=u.surfaces[e];!n.usePageCanvas&&n.canvas&&u.canvasPool.push(n.canvas),n.buffer&&Pe(n.buffer),Pe(n.pixelFormat),Pe(e),u.surfaces[e]=null,e===u.screen&&(u.screen=null)},blitSurface:function(e,t,r,n,i){var s=u.surfaces[e],c=u.surfaces[r],l,p;if(t?l=u.loadRect(t):l={x:0,y:0,w:s.width,h:s.height},n?p=u.loadRect(n):p={x:0,y:0,w:s.width,h:s.height},c.clipRect){var v=!i||l.w===0?1:l.w/p.w,E=!i||l.h===0?1:l.h/p.h;p=u.intersectionOfRects(c.clipRect,p),l.w=p.w*v,l.h=p.h*E,n&&u.updateRect(n,p)}var g,y;if(i?(g=p.w,y=p.h):(g=l.w,y=l.h),l.w===0||l.h===0||g===0||y===0)return 0;var w=c.ctx.globalAlpha;return c.ctx.globalAlpha=s.alpha/255,c.ctx.drawImage(s.canvas,l.x,l.y,l.w,l.h,p.x,p.y,g,y),c.ctx.globalAlpha=w,r!=u.screen&&(V("WARNING: copying canvas data to memory for compatibility"),kt(r),c.locked--),0},downFingers:{},savedKeydown:null,receiveEvent:function(e){function t(){for(var E in u.keyboardMap)u.events.push({type:"keyup",keyCode:u.keyboardMap[E]})}switch(e.type){case"touchstart":case"touchmove":{e.preventDefault();var r=[];if(e.type==="touchstart")for(var n=0;n<e.touches.length;n++){var i=e.touches[n];u.downFingers[i.identifier]!=!0&&(u.downFingers[i.identifier]=!0,r.push(i))}else r=e.touches;var s=r[0];if(s){e.type=="touchstart"&&(u.DOMButtons[0]=1);var c;switch(e.type){case"touchstart":c="mousedown";break;case"touchmove":c="mousemove";break}var l={type:c,button:0,pageX:s.clientX,pageY:s.clientY};u.events.push(l)}for(var n=0;n<r.length;n++){var i=r[n];u.events.push({type:e.type,touch:i})}break}case"touchend":{e.preventDefault();for(var n=0;n<e.changedTouches.length;n++){var i=e.changedTouches[n];u.downFingers[i.identifier]===!0&&delete u.downFingers[i.identifier]}var l={type:"mouseup",button:0,pageX:e.changedTouches[0].clientX,pageY:e.changedTouches[0].clientY};u.DOMButtons[0]=0,u.events.push(l);for(var n=0;n<e.changedTouches.length;n++){var i=e.changedTouches[n];u.events.push({type:"touchend",touch:i})}break}case"DOMMouseScroll":case"mousewheel":case"wheel":var p=-d.getMouseWheelDelta(e);p=p==0?0:p>0?Math.max(p,1):Math.min(p,-1);var v=p>0?3:4;u.events.push({type:"mousedown",button:v,pageX:e.pageX,pageY:e.pageY}),u.events.push({type:"mouseup",button:v,pageX:e.pageX,pageY:e.pageY}),u.events.push({type:"wheel",deltaX:0,deltaY:p}),e.preventDefault();break;case"mousemove":if(u.DOMButtons[0]===1&&u.events.push({type:"touchmove",touch:{identifier:0,deviceID:-1,pageX:e.pageX,pageY:e.pageY}}),d.pointerLock&&("mozMovementX"in e&&(e.movementX=e.mozMovementX,e.movementY=e.mozMovementY),e.movementX==0&&e.movementY==0)){e.preventDefault();return}case"keydown":case"keyup":case"keypress":case"mousedown":case"mouseup":if((e.type!=="keydown"||!Sr()&&!u.textInput||e.keyCode===8||e.keyCode===9)&&e.preventDefault(),e.type=="mousedown")u.DOMButtons[e.button]=1,u.events.push({type:"touchstart",touch:{identifier:0,deviceID:-1,pageX:e.pageX,pageY:e.pageY}});else if(e.type=="mouseup"){if(!u.DOMButtons[e.button])return;u.events.push({type:"touchend",touch:{identifier:0,deviceID:-1,pageX:e.pageX,pageY:e.pageY}}),u.DOMButtons[e.button]=0}e.type==="keydown"||e.type==="mousedown"?u.canRequestFullscreen=!0:(e.type==="keyup"||e.type==="mouseup")&&(u.canRequestFullscreen=!1),e.type==="keypress"&&u.savedKeydown?(u.savedKeydown.keypressCharCode=e.charCode,u.savedKeydown=null):e.type==="keydown"&&(u.savedKeydown=e),(e.type!=="keypress"||u.textInput)&&u.events.push(e);break;case"mouseout":for(var n=0;n<3;n++)u.DOMButtons[n]&&(u.events.push({type:"mouseup",button:n,pageX:e.pageX,pageY:e.pageY}),u.DOMButtons[n]=0);e.preventDefault();break;case"focus":u.events.push(e),e.preventDefault();break;case"blur":u.events.push(e),t(),e.preventDefault();break;case"visibilitychange":u.events.push({type:"visibilitychange",visible:!document.hidden}),t(),e.preventDefault();break;case"unload":d.mainLoop.runner&&(u.events.push(e),d.mainLoop.runner());return;case"resize":u.events.push(e),e.preventDefault&&e.preventDefault();break}u.events.length>=1e4&&(D("SDL event queue full, dropping events"),u.events=u.events.slice(0,1e4))},lookupKeyCodeForEvent:function(e){var t=e.keyCode;return t>=65&&t<=90?t+=32:(t=u.keyCodes[e.keyCode]||e.keyCode,e.location===2&&t>=(224|1<<10)&&t<=(227|1<<10)&&(t+=4)),t},handleEvent:function(e){if(!e.handled)switch(e.handled=!0,e.type){case"touchstart":case"touchend":case"touchmove":{d.calculateMouseEvent(e);break}case"keydown":case"keyup":{var t=e.type==="keydown",r=u.lookupKeyCodeForEvent(e);P[u.keyboardState+r>>0]=t,u.modState=(P[u.keyboardState+1248>>0]?64:0)|(P[u.keyboardState+1249>>0]?1:0)|(P[u.keyboardState+1250>>0]?256:0)|(P[u.keyboardState+1252>>0]?128:0)|(P[u.keyboardState+1253>>0]?2:0)|(P[u.keyboardState+1254>>0]?512:0),t?u.keyboardMap[r]=e.keyCode:delete u.keyboardMap[r];break}case"mousedown":case"mouseup":e.type=="mousedown"?u.buttonState|=1<<e.button:e.type=="mouseup"&&(u.buttonState&=~(1<<e.button));case"mousemove":{d.calculateMouseEvent(e);break}}},flushEventsToHandler:function(){},pollEvent:function(e){if(u.initFlags&512&&u.joystickEventState&&u.queryJoysticks(),e){for(;u.events.length>0;)if(u.makeCEvent(u.events.shift(),e)!==!1)return 1;return 0}return u.events.length>0},makeCEvent:function(e,t){if(typeof e=="number"){Yr(t,e,28),Pe(e);return}switch(u.handleEvent(e),e.type){case"keydown":case"keyup":{var r=e.type==="keydown",n=u.lookupKeyCodeForEvent(e),i;n>=1024?i=n-1024:i=u.scanCodes[n]||n,b[t>>2]=u.DOMEventToSDLEvent[e.type],P[t+8>>0]=r?1:0,P[t+9>>0]=0,b[t+12>>2]=i,b[t+16>>2]=n,je[t+20>>1]=u.modState,b[t+24>>2]=e.keypressCharCode||n;break}case"keypress":{b[t>>2]=u.DOMEventToSDLEvent[e.type];for(var s=Fe(String.fromCharCode(e.charCode)),c=0;c<s.length;++c)P[t+(8+c)>>0]=s[c];break}case"mousedown":case"mouseup":case"mousemove":{if(e.type!="mousemove"){var r=e.type==="mousedown";b[t>>2]=u.DOMEventToSDLEvent[e.type],b[t+4>>2]=0,b[t+8>>2]=0,b[t+12>>2]=0,P[t+16>>0]=e.button+1,P[t+17>>0]=r?1:0,b[t+20>>2]=d.mouseX,b[t+24>>2]=d.mouseY}else b[t>>2]=u.DOMEventToSDLEvent[e.type],b[t+4>>2]=0,b[t+8>>2]=0,b[t+12>>2]=0,b[t+16>>2]=u.buttonState,b[t+20>>2]=d.mouseX,b[t+24>>2]=d.mouseY,b[t+28>>2]=d.mouseMovementX,b[t+32>>2]=d.mouseMovementY;break}case"wheel":{b[t>>2]=u.DOMEventToSDLEvent[e.type],b[t+16>>2]=e.deltaX,b[t+20>>2]=e.deltaY;break}case"touchstart":case"touchend":case"touchmove":{var l=e.touch;if(!d.touches[l.identifier])break;var p=a.canvas.width,v=a.canvas.height,E=d.touches[l.identifier].x/p,g=d.touches[l.identifier].y/v,y=d.lastTouches[l.identifier].x/p,w=d.lastTouches[l.identifier].y/v,k=E-y,C=g-w;if(l.deviceID===void 0&&(l.deviceID=u.TOUCH_DEFAULT_ID),k===0&&C===0&&e.type==="touchmove")return!1;b[t>>2]=u.DOMEventToSDLEvent[e.type],b[t+4>>2]=_r(),be=[l.deviceID>>>0,(J=l.deviceID,+Math.abs(J)>=1?J>0?(Math.min(+Math.floor(J/4294967296),4294967295)|0)>>>0:~~+Math.ceil((J-+(~~J>>>0))/4294967296)>>>0:0)],b[t+8>>2]=be[0],b[t+12>>2]=be[1],be=[l.identifier>>>0,(J=l.identifier,+Math.abs(J)>=1?J>0?(Math.min(+Math.floor(J/4294967296),4294967295)|0)>>>0:~~+Math.ceil((J-+(~~J>>>0))/4294967296)>>>0:0)],b[t+16>>2]=be[0],b[t+20>>2]=be[1],ce[t+24>>2]=E,ce[t+28>>2]=g,ce[t+32>>2]=k,ce[t+36>>2]=C,l.force!==void 0?ce[t+40>>2]=l.force:ce[t+40>>2]=e.type=="touchend"?0:1;break}case"unload":{b[t>>2]=u.DOMEventToSDLEvent[e.type];break}case"resize":{b[t>>2]=u.DOMEventToSDLEvent[e.type],b[t+4>>2]=e.w,b[t+8>>2]=e.h;break}case"joystick_button_up":case"joystick_button_down":{var F=e.type==="joystick_button_up"?0:1;b[t>>2]=u.DOMEventToSDLEvent[e.type],P[t+4>>0]=e.index,P[t+5>>0]=e.button,P[t+6>>0]=F;break}case"joystick_axis_motion":{b[t>>2]=u.DOMEventToSDLEvent[e.type],P[t+4>>0]=e.index,P[t+5>>0]=e.axis,b[t+8>>2]=u.joystickAxisValueConversion(e.value);break}case"focus":{var G=12;b[t>>2]=u.DOMEventToSDLEvent[e.type],b[t+4>>2]=0,P[t+8>>0]=G;break}case"blur":{var j=13;b[t>>2]=u.DOMEventToSDLEvent[e.type],b[t+4>>2]=0,P[t+8>>0]=j;break}case"visibilitychange":{var U=1,Y=2,$=e.visible?U:Y;b[t>>2]=u.DOMEventToSDLEvent[e.type],b[t+4>>2]=0,P[t+8>>0]=$;break}default:throw"Unhandled SDL event: "+e.type}},makeFontString:function(e,t){return t.charAt(0)!="'"&&t.charAt(0)!='"'&&(t='"'+t+'"'),e+"px "+t+", serif"},estimateTextWidth:function(e,t){var r=e.size,n=u.makeFontString(r,e.name),i=Mr();x(i,"TTF_Init must have been called"),i.font=n;var s=i.measureText(t).width|0;return s},allocateChannels:function(e){if(!(u.numChannels&&u.numChannels>=e&&e!=0)){u.numChannels=e,u.channels=[];for(var t=0;t<e;t++)u.channels[t]={audio:null,volume:1}}},setGetVolume:function(e,t){if(!e)return 0;var r=e.volume*128;if(t!=-1&&(e.volume=Math.min(Math.max(t,0),128)/128,e.audio))try{e.audio.volume=e.volume,e.audio.webAudioGainNode&&(e.audio.webAudioGainNode.gain.value=e.volume)}catch(n){D("setGetVolume failed to set audio volume: "+n)}return r},setPannerPosition:function(e,t,r,n){!e||e.audio&&e.audio.webAudioPannerNode&&e.audio.webAudioPannerNode.setPosition(t,r,n)},playWebAudio:function(e){if(!!e&&!e.webAudioNode&&!!u.webAudioAvailable())try{var t=e.resource.webAudio;if(e.paused=!1,!t.decodedBuffer){t.onDecodeComplete===void 0&&z("Cannot play back audio object that was not loaded"),t.onDecodeComplete.push(function(){e.paused||u.playWebAudio(e)});return}e.webAudioNode=u.audioContext.createBufferSource(),e.webAudioNode.buffer=t.decodedBuffer,e.webAudioNode.loop=e.loop,e.webAudioNode.onended=function(){e.onended()},e.webAudioPannerNode=u.audioContext.createPanner(),e.webAudioPannerNode.setPosition(0,0,-.5),e.webAudioPannerNode.panningModel="equalpower",e.webAudioGainNode=u.audioContext.createGain(),e.webAudioGainNode.gain.value=e.volume,e.webAudioNode.connect(e.webAudioPannerNode),e.webAudioPannerNode.connect(e.webAudioGainNode),e.webAudioGainNode.connect(u.audioContext.destination),e.webAudioNode.start(0,e.currentPosition),e.startTime=u.audioContext.currentTime-e.currentPosition}catch(r){D("playWebAudio failed: "+r)}},pauseWebAudio:function(e){if(!!e){if(e.webAudioNode)try{e.currentPosition=(u.audioContext.currentTime-e.startTime)%e.resource.webAudio.decodedBuffer.duration,e.webAudioNode.onended=void 0,e.webAudioNode.stop(0),e.webAudioNode=void 0}catch(t){D("pauseWebAudio failed: "+t)}e.paused=!0}},openAudioContext:function(){u.audioContext||(typeof AudioContext!="undefined"?u.audioContext=new AudioContext:typeof webkitAudioContext!="undefined"&&(u.audioContext=new webkitAudioContext))},webAudioAvailable:function(){return!!u.audioContext},fillWebAudioBufferFromHeap:function(e,t,r){for(var n=Tr(),i=n.channels,s=0;s<i;++s){var c=r.getChannelData(s);if(c.length!=t)throw"Web Audio output buffer length mismatch! Destination size: "+c.length+" samples vs expected "+t+" samples!";if(n.format==32784)for(var l=0;l<t;++l)c[l]=je[e+(l*i+s)*2>>1]/32768;else if(n.format==8)for(var l=0;l<t;++l){var p=P[e+(l*i+s)>>0];c[l]=(p>=0?p-128:p+128)/128}else if(n.format==33056)for(var l=0;l<t;++l)c[l]=ce[e+(l*i+s)*4>>2];else throw"Invalid SDL audio format "+n.format+"!"}},debugSurface:function(e){K("dumping surface "+[e.surf,e.source,e.width,e.height]);for(var t=e.ctx.getImageData(0,0,e.width,e.height),r=t.data,n=Math.min(e.width,e.height),i=0;i<n;i++)K("   diagonal "+i+":"+[r[i*e.width*4+i*4+0],r[i*e.width*4+i*4+1],r[i*e.width*4+i*4+2],r[i*e.width*4+i*4+3]])},joystickEventState:1,lastJoystickState:{},joystickNamePool:{},recordJoystickState:function(e,t){for(var r=new Array(t.buttons.length),n=0;n<t.buttons.length;n++)r[n]=u.getJoystickButtonState(t.buttons[n]);u.lastJoystickState[e]={buttons:r,axes:t.axes.slice(0),timestamp:t.timestamp,index:t.index,id:t.id}},getJoystickButtonState:function(e){return typeof e=="object"?e.pressed:e>0},queryJoysticks:function(){for(var e in u.lastJoystickState){var t=u.getGamepad(e-1),r=u.lastJoystickState[e];if(typeof t=="undefined"||t===null)return;if(typeof t.timestamp!="number"||t.timestamp!=r.timestamp||!t.timestamp){var n;for(n=0;n<t.buttons.length;n++){var i=u.getJoystickButtonState(t.buttons[n]);i!==r.buttons[n]&&u.events.push({type:i?"joystick_button_down":"joystick_button_up",joystick:e,index:e-1,button:n})}for(n=0;n<t.axes.length;n++)t.axes[n]!==r.axes[n]&&u.events.push({type:"joystick_axis_motion",joystick:e,index:e-1,axis:n,value:t.axes[n]});u.recordJoystickState(e,t)}}},joystickAxisValueConversion:function(e){return e=Math.min(1,Math.max(e,-1)),Math.ceil((e+1)*32767.5-32768)},getGamepads:function(){var e=navigator.getGamepads||navigator.webkitGamepads||navigator.mozGamepads||navigator.gamepads||navigator.webkitGetGamepads;return e!==void 0?e.apply(navigator):[]},getGamepad:function(e){var t=u.getGamepads();return t.length>e&&e>=0?t[e]:null}};function Ar(e){}function Lr(e){if(u.startTime=Date.now(),u.initFlags=e,!a.doNotCaptureKeyboard){var t=a.keyboardListeningElement||document;t.addEventListener("keydown",u.receiveEvent),t.addEventListener("keyup",u.receiveEvent),t.addEventListener("keypress",u.receiveEvent),window.addEventListener("focus",u.receiveEvent),window.addEventListener("blur",u.receiveEvent),document.addEventListener("visibilitychange",u.receiveEvent)}return window.addEventListener("unload",u.receiveEvent),u.keyboardState=Me(65536),yr(u.keyboardState,65536),u.DOMEventToSDLEvent.keydown=768,u.DOMEventToSDLEvent.keyup=769,u.DOMEventToSDLEvent.keypress=771,u.DOMEventToSDLEvent.mousedown=1025,u.DOMEventToSDLEvent.mouseup=1026,u.DOMEventToSDLEvent.mousemove=1024,u.DOMEventToSDLEvent.wheel=1027,u.DOMEventToSDLEvent.touchstart=1792,u.DOMEventToSDLEvent.touchend=1793,u.DOMEventToSDLEvent.touchmove=1794,u.DOMEventToSDLEvent.unload=256,u.DOMEventToSDLEvent.resize=28673,u.DOMEventToSDLEvent.visibilitychange=512,u.DOMEventToSDLEvent.focus=512,u.DOMEventToSDLEvent.blur=512,u.DOMEventToSDLEvent.joystick_axis_motion=1536,u.DOMEventToSDLEvent.joystick_button_down=1539,u.DOMEventToSDLEvent.joystick_button_up=1540,0}function Cr(e,t,r,n,i){return u.checkPixelFormat(e),t&255|(r&255)<<8|(n&255)<<16|(i&255)<<24}function Dr(){for(var e=0;e<u.numChannels;++e){var t=u.channels[e];t.audio&&(t.audio.pause(),t.audio=void 0)}var r=u.music.audio;r&&r.pause(),u.music.audio=void 0}function Fr(){Dr(),K("SDL_Quit called (and ignored)")}function Or(e){var t=e.getExtension("ANGLE_instanced_arrays");if(t)return e.vertexAttribDivisor=function(r,n){t.vertexAttribDivisorANGLE(r,n)},e.drawArraysInstanced=function(r,n,i,s){t.drawArraysInstancedANGLE(r,n,i,s)},e.drawElementsInstanced=function(r,n,i,s,c){t.drawElementsInstancedANGLE(r,n,i,s,c)},1}function Rr(e){var t=e.getExtension("OES_vertex_array_object");if(t)return e.createVertexArray=function(){return t.createVertexArrayOES()},e.deleteVertexArray=function(r){t.deleteVertexArrayOES(r)},e.bindVertexArray=function(r){t.bindVertexArrayOES(r)},e.isVertexArray=function(r){return t.isVertexArrayOES(r)},1}function Pr(e){var t=e.getExtension("WEBGL_draw_buffers");if(t)return e.drawBuffers=function(r,n){t.drawBuffersWEBGL(r,n)},1}function Ir(e){return!!(e.multiDrawWebgl=e.getExtension("WEBGL_multi_draw"))}var N={counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],shaders:[],vaos:[],contexts:[],offscreenCanvases:{},queries:[],stringCache:{},unpackAlignment:4,recordError:function(t){N.lastError||(N.lastError=t)},getNewId:function(e){for(var t=N.counter++,r=e.length;r<t;r++)e[r]=null;return t},getSource:function(e,t,r,n){for(var i="",s=0;s<t;++s){var c=n?b[n+s*4>>2]:-1;i+=er(b[r+s*4>>2],c<0?void 0:c)}return i},createContext:function(e,t){if(!e.getContextSafariWebGL2Fixed){let i=function(s,c){var l=e.getContextSafariWebGL2Fixed(s,c);return s=="webgl"==l instanceof WebGLRenderingContext?l:null};e.getContextSafariWebGL2Fixed=e.getContext,e.getContext=i}var r=e.getContext("webgl",t);if(!r)return 0;var n=N.registerContext(r,t);return n},registerContext:function(e,t){var r=N.getNewId(N.contexts),n={handle:r,attributes:t,version:t.majorVersion,GLctx:e};return e.canvas&&(e.canvas.GLctxObject=n),N.contexts[r]=n,(typeof t.enableExtensionsByDefault=="undefined"||t.enableExtensionsByDefault)&&N.initExtensions(n),r},makeContextCurrent:function(e){return N.currentContext=N.contexts[e],a.ctx=et=N.currentContext&&N.currentContext.GLctx,!(e&&!et)},getContext:function(e){return N.contexts[e]},deleteContext:function(e){N.currentContext===N.contexts[e]&&(N.currentContext=null),typeof JSEvents=="object"&&JSEvents.removeAllHandlersOnTarget(N.contexts[e].GLctx.canvas),N.contexts[e]&&N.contexts[e].GLctx.canvas&&(N.contexts[e].GLctx.canvas.GLctxObject=void 0),N.contexts[e]=null},initExtensions:function(e){if(e||(e=N.currentContext),!e.initExtensionsDone){e.initExtensionsDone=!0;var t=e.GLctx;Or(t),Rr(t),Pr(t),t.disjointTimerQueryExt=t.getExtension("EXT_disjoint_timer_query"),Ir(t);var r=t.getSupportedExtensions()||[];r.forEach(function(n){!n.includes("lose_context")&&!n.includes("debug")&&t.getExtension(n)})}}};function Nr(e,t,r,n){["touchstart","touchend","touchmove","mousedown","mouseup","mousemove","DOMMouseScroll","mousewheel","wheel","mouseout"].forEach(function(s){a.canvas.addEventListener(s,u.receiveEvent,!0)});var i=a.canvas;return e==0&&t==0&&(e=i.width,t=i.height),u.addedResizeListener||(u.addedResizeListener=!0,d.resizeListeners.push(function(s,c){u.settingVideoMode||u.receiveEvent({type:"resize",w:s,h:c})})),u.settingVideoMode=!0,d.setCanvasSize(e,t),u.settingVideoMode=!1,u.screen&&(u.freeSurface(u.screen),x(!u.screen)),u.GL&&(n=n|67108864),u.screen=u.makeSurface(e,t,n,!0,"screen"),u.screen}function Br(e){x(!u.GL);var t=u.surfaces[e];if(!(!t.locked||--t.locked>0)){if(t.isFlagSet(2097152))u.copyIndexedColorData(t);else if(t.colors)for(var w=a.canvas.width,k=a.canvas.height,C=t.buffer,r=t.image.data,F=t.colors,G=0;G<k;G++){for(var j=G*w*4,U=0;U<w;U++){var p=ae[C++>>0]*4,Y=j+U*4;r[Y]=F[p],r[Y+1]=F[p+1],r[Y+2]=F[p+2]}C+=w*3}else{var r=t.image.data,n=t.buffer;x(n%4==0,"Invalid buffer offset: "+n);var i=n>>2,s=0,c=e==u.screen,l;if(typeof CanvasPixelArray!="undefined"&&r instanceof CanvasPixelArray)for(l=r.length;s<l;){var p=b[i];r[s]=p&255,r[s+1]=p>>8&255,r[s+2]=p>>16&255,r[s+3]=c?255:p>>24&255,i++,s+=4}else{var v=new Uint32Array(r.buffer);if(c&&u.defaults.opaqueFrontBuffer){l=v.length,v.set(b.subarray(i,i+l));var E=new Uint8Array(r.buffer),g=3,y=g+4*l;if(l%8==0)for(;g<y;)E[g]=255,g=g+4|0,E[g]=255,g=g+4|0,E[g]=255,g=g+4|0,E[g]=255,g=g+4|0,E[g]=255,g=g+4|0,E[g]=255,g=g+4|0,E[g]=255,g=g+4|0,E[g]=255,g=g+4|0;else for(;g<y;)E[g]=255,g=g+4|0}else v.set(b.subarray(i,i+v.length))}}t.ctx.putImageData(t.image,0,0)}}function Ur(e,t,r){ae.copyWithin(e,t,t+r)}function zr(e){z("Cannot enlarge memory arrays to size "+e+" bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value "+P.length+", (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0")}function Gr(e){ae.length,e=e>>>0,zr(e)}var Qe=[null,[],[]];function Ze(e,t){var r=Qe[e];x(r),t===0||t===10?((e===1?K:D)(me(r,0)),r.length=0):r.push(t)}function jr(){Tt(0),Qe[1].length&&Ze(1,10),Qe[2].length&&Ze(2,10)}function Wr(e,t,r,n){for(var i=0,s=0;s<r;s++){var c=H[t>>2],l=H[t+4>>2];t+=8;for(var p=0;p<l;p++)Ze(e,ae[c+p]);i+=l}return H[n>>2]=i,0}function $r(e){var t=Ge(e)+1,r=Lt(t);return ze(e,P,r,t),r}var _t=function(e,t,r,n){e||(e=this),this.parent=e,this.mount=e.mount,this.mounted=null,this.id=o.nextInode++,this.name=t,this.mode=r,this.node_ops={},this.stream_ops={},this.rdev=n},Oe=365,Re=146;Object.defineProperties(_t.prototype,{read:{get:function(){return(this.mode&Oe)===Oe},set:function(e){e?this.mode|=Oe:this.mode&=~Oe}},write:{get:function(){return(this.mode&Re)===Re},set:function(e){e?this.mode|=Re:this.mode&=~Re}},isFolder:{get:function(){return o.isDir(this.mode)}},isDevice:{get:function(){return o.isChrdev(this.mode)}}}),o.FSNode=_t,o.staticInit(),Xe={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},a.requestFullscreen=function(t,r){d.requestFullscreen(t,r)},a.requestFullScreen=function(){d.requestFullScreen()},a.requestAnimationFrame=function(t){d.requestAnimationFrame(t)},a.setCanvasSize=function(t,r,n){d.setCanvasSize(t,r,n)},a.pauseMainLoop=function(){d.mainLoop.pause()},a.resumeMainLoop=function(){d.mainLoop.resume()},a.getUserMedia=function(){d.getUserMedia()},a.createContext=function(t,r,n,i){return d.createContext(t,r,n,i)};var qr={},St={},et;function Hr(){Kt("fetchSettings")}var Mt={SDL_Flip:Ar,SDL_Init:Lr,SDL_LockSurface:kt,SDL_MapRGBA:Cr,SDL_Quit:Fr,SDL_SetVideoMode:Nr,SDL_UnlockSurface:Br,emscripten_memcpy_big:Ur,emscripten_resize_heap:Gr,fd_write:Wr};mr(),a.___wasm_call_ctors=Z("__wasm_call_ctors"),a._main=Z("__main_argc_argv"),a.___errno_location=Z("__errno_location");var Yr=a._memcpy=Z("memcpy"),Tt=a._fflush=Z("fflush"),Me=a._malloc=Z("malloc"),Pe=a._free=Z("free"),At=a._emscripten_stack_init=function(){return(At=a._emscripten_stack_init=a.asm.emscripten_stack_init).apply(null,arguments)};a._emscripten_stack_get_free=function(){return(a._emscripten_stack_get_free=a.asm.emscripten_stack_get_free).apply(null,arguments)},a._emscripten_stack_get_base=function(){return(a._emscripten_stack_get_base=a.asm.emscripten_stack_get_base).apply(null,arguments)};var tt=a._emscripten_stack_get_end=function(){return(tt=a._emscripten_stack_get_end=a.asm.emscripten_stack_get_end).apply(null,arguments)};a.stackSave=Z("stackSave"),a.stackRestore=Z("stackRestore");var Lt=a.stackAlloc=Z("stackAlloc");a.dynCall_jiji=Z("dynCall_jiji");var Xr=["run","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","addOnPreRun","addOnInit","addOnPreMain","addOnExit","addOnPostRun","addRunDependency","removeRunDependency","FS_createFolder","FS_createPath","FS_createDataFile","FS_createPreloadedFile","FS_createLazyFile","FS_createLink","FS_createDevice","FS_unlink","getLEB","getFunctionTables","alignFunctionTables","registerFunctions","prettyPrint","getCompilerSetting","print","printErr","callMain","abort","keepRuntimeAlive","wasmMemory","stackAlloc","stackSave","stackRestore","getTempRet0","setTempRet0","writeStackCookie","checkStackCookie","ptrToString","zeroMemory","stringToNewUTF8","exitJS","getHeapMax","abortOnCannotGrowMemory","emscripten_realloc_buffer","ENV","ERRNO_CODES","ERRNO_MESSAGES","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","DNS","getHostByName","Protocols","Sockets","getRandomDevice","warnOnce","traverseStack","UNWIND_CACHE","convertPCtoSourceLocation","readAsmConstArgsArray","readAsmConstArgs","mainThreadEM_ASM","jstoi_q","jstoi_s","getExecutableName","listenOnce","autoResumeAudioContext","dynCallLegacy","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getCFunc","ccall","cwrap","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","freeTableIndexes","functionsInTableMap","getEmptyTableSlot","updateTableMap","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","setValue","getValue","PATH","PATH_FS","intArrayFromString","intArrayToString","AsciiToString","stringToAscii","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","allocateUTF8","allocateUTF8OnStack","writeStringToMemory","writeArrayToMemory","writeAsciiToMemory","SYSCALLS","getSocketFromFD","getSocketAddress","JSEvents","registerKeyEventCallback","specialHTMLTargets","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","currentFullscreenStrategy","restoreOldWindowedStyle","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","demangle","demangleAll","jsStackTrace","stackTrace","ExitStatus","getEnvStrings","checkWasiClock","flush_NO_FILESYSTEM","dlopenMissingError","createDyncallWrapper","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","exception_addRef","exception_decRef","Browser","setMainLoop","wget","FS","MEMFS","TTY","PIPEFS","SOCKFS","_setNetworkCallback","tempFixedLengthArray","miniTempWebGLFloatBuffers","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","GL","emscriptenWebGLGet","computeUnpackAlignedImageSize","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","writeGLArray","AL","SDL_unicode","SDL_ttfContext","SDL_audio","SDL","SDL_gfx","GLUT","EGL","GLFW_Window","GLFW","GLEW","IDBStore","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate"];Xr.forEach(Qt);var Vr=["ptrToString","stringToNewUTF8","emscripten_realloc_buffer","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","getHostByName","traverseStack","convertPCtoSourceLocation","readAsmConstArgs","mainThreadEM_ASM","jstoi_q","jstoi_s","getExecutableName","listenOnce","autoResumeAudioContext","dynCallLegacy","getDynCaller","dynCall","runtimeKeepalivePush","runtimeKeepalivePop","asmjsMangle","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getCFunc","ccall","cwrap","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","AsciiToString","stringToAscii","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","allocateUTF8","writeStringToMemory","writeAsciiToMemory","getSocketFromFD","getSocketAddress","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","getEnvStrings","checkWasiClock","createDyncallWrapper","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","ExceptionInfo","exception_addRef","exception_decRef","_setNetworkCallback","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","emscriptenWebGLGet","computeUnpackAlignedImageSize","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","writeGLArray","GLFW_Window","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate"];Vr.forEach(Jt);var Ie;Se=function e(){Ie||Ct(),Ie||(Se=e)};function Kr(e){x(de==0,'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])'),x(qe.length==0,"cannot call main when preRun functions remain to be called");var t=a._main;e=e||[],e.unshift(Ae);var r=e.length,n=Lt((r+1)*4),i=n>>2;e.forEach(c=>{b[i++]=$r(c)}),b[i]=0;try{var s=t(r,n);return xr(s,!0),s}catch(c){return bt(c)}}function Jr(){At(),rr()}function Ct(e){if(e=e||W,de>0||(Jr(),or(),de>0))return;function t(){Ie||(Ie=!0,a.calledRun=!0,!ue&&(ir(),ar(),T(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),Dt&&Kr(e),sr()))}a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1),t()},1)):t(),_e()}function Qr(){var e=K,t=D,r=!1;K=D=n=>{r=!0};try{jr(),["stdout","stderr"].forEach(function(n){var i=o.analyzePath("/dev/"+n);if(!!i){var s=i.object,c=s.rdev,l=fe.ttys[c];l&&l.output&&l.output.length&&(r=!0)}})}catch{}K=e,D=t,r&&(V("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc."),V("(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)"))}if(a.preInit)for(typeof a.preInit=="function"&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();var Dt=!0;return a.noInitialRun&&(Dt=!1),Ct(),a.ready}})();const Qo=_.div`
  background-image: url('assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;setTimeout(async()=>{console.log(await Jo())},500);function Zo(){return A(xn,{theme:Tn,children:[h(Mn,{}),A(Qo,{id:"screen",children:[Array.from(q.apps.values()).map(([f,m])=>h(m,{},f.store.uuid)),h(zo,{}),q.startMenu.isOpen&&h(go,{}),q.systemTrayPopup.isOpen&&h(Mo,{}),q.calendar.isOpen&&h(No,{}),h(Ko,{}),h(Kn,{})]})]})}var ei=le(Zo);kn.render(h(_n.StrictMode,{children:h(ei,{})}),document.getElementById("root"));
