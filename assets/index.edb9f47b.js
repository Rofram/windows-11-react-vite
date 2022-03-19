var E=Object.defineProperty;var $=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var b=(e,s,r)=>s in e?E(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,y=(e,s)=>{for(var r in s||(s={}))F.call(s,r)&&b(e,r,s[r]);if($)for(var r of $(s))P.call(s,r)&&b(e,r,s[r]);return e};var i=(e,s,r)=>(b(e,typeof s!="symbol"?s+"":s,r),r);import{W as D,C as d,s as o,m,j as k,O as h,o as I,r as f,B as R,a as B,b as T,c as S,d as C,e as z,F as L,R as U,f as j}from"./vendor.60c85540.js";const N=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))p(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const x of c.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&p(x)}).observe(document,{childList:!0,subtree:!0});function r(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function p(a){if(a.ep)return;a.ep=!0;const c=r(a);fetch(a.href,c)}};N();const W=D`
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

  ${({theme:e,removeBg:s})=>d`
    html {
      font-size: 62.5%;
      height: 100%;
    }

    body {
      font-family: ${e.font.family};
      font-size: ${e.font.sizes.medium};
      height: 100%;

      ${!s&&d`
        background-color: ${e.colors.mainBg};
      `}
    }
  `}
`;var H={grid:{container:"130rem",gutter:"3.2rem"},border:{radius:"0.4rem"},font:{family:{roboto:"Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",segoe:"Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},light:300,normal:400,bold:600,sizes:{xsmall:"1.2rem",small:"1.4rem",medium:"1.6rem",large:"1.8rem",xlarge:"2.0rem",xxlarge:"2.8rem",huge:"5.2rem"}},colors:{primary:"#F231A5",secondary:"#3CD3C1",mainBg:"#06092B",lightBg:"#F2F2F2",white:"#FAFAFA",black:"#030517",lightGray:"#EAEAEA",gray:"#8F8F8F",darkGray:"#2E2F42",red:"#FF6347"},spacings:{xxsmall:"0.8rem",xsmall:"1.6rem",small:"2.4rem",medium:"3.2rem",large:"4.0rem",xlarge:"4.8rem",xxlarge:"5.6rem"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transition:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"}};const Y=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  margin-right: 1rem;
`,M=o.span`
  ${({theme:e})=>d`
    font-family: ${e.font.family.segoe};
    font-weight: 500;
    font-size: ${e.font.sizes.xsmall};  
    color: ${e.colors.white}
  `}
`;class X{constructor(){i(this,"time",new Date);m(this),setInterval(()=>this.tick(),1e3)}tick(){this.time=new Date}getHours(){const[s,r]=new Intl.DateTimeFormat("pt-br",{dateStyle:"short",timeStyle:"medium"}).format(this.time).split(" ");return[s,r]}}var G=new X;const t=k.exports.jsx,n=k.exports.jsxs,v=k.exports.Fragment;function K(){return t(h,{children:()=>{const[e,s]=G.getHours();return n(Y,{children:[t(M,{children:s}),t(M,{children:e})]})}})}const V=o.div`
  display: flex;
  gap: 4px;
  align-items: center;
`,u=o.img`
  width: 20px;
  height: 20px;
`;function q(){return n(V,{children:[t(u,{src:"assets/taskbar/Shape.svg",style:{width:12,height:6.5,marginRight:6}}),t(u,{src:"assets/taskbar/WiFi.svg"}),t(u,{src:"assets/taskbar/Speaker.svg"}),t(u,{src:"assets/taskbar/Battery.svg"})]})}const J=o.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;

  &:hover {

  }
`,Q=o.div`
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
`;function Z(){return n(J,{children:[t("img",{src:"assets/icons/weather.svg",alt:"weather"}),n(Q,{children:[t("span",{children:"8\xB0C"}),t("span",{children:"Partly sunny"})]})]})}const _=o.div`
  display: flex;
  gap: 26px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`,g=o.img`
  width: 30px;
  height: 30px;
`;class ee{constructor(){i(this,"user",{img:"https://avatars.githubusercontent.com/u/50988834?v=4",name:"Rodrigo de Fran\xE7a"});i(this,"appsOpened",{vscode:!1,microsoftEdge:!1,fileExplorer:!1,windowsStore:!1,notepad:!1,spotify:!1});i(this,"apps",[{icon:"assets/apps/microsoftEdge.svg",alt:"Edge"},{icon:"assets/apps/world.svg",alt:"World"},{icon:"assets/apps/powerpoint.svg",alt:"PowerPoint"},{icon:"assets/apps/oneNote.svg",alt:"OneNote"},{icon:"assets/apps/mail.svg",alt:"Mail"},{icon:"assets/apps/todo.svg",alt:"To Do"},{icon:"assets/apps/windowsStore.svg",alt:"Microsoft Store"},{icon:"assets/apps/photos.svg",alt:"Photos"},{icon:"assets/apps/yourPhone.svg",alt:"Your Phone"},{icon:"assets/apps/snippingTool.svg",alt:"Snipping Tool"},{icon:"assets/apps/notepad.svg",alt:"Notepad"},{icon:"assets/apps/xbox.svg",alt:"Xbox"},{icon:"assets/apps/twitter.svg",alt:"Twitter"},{icon:"assets/apps/config.svg",alt:"Settings"},{icon:"assets/apps/microsoftNews.svg",alt:"News"},{icon:"assets/apps/spotify.svg",alt:"Spotify"},{icon:"assets/apps/calculadora.svg",alt:"Calculator"},{icon:"assets/apps/paint.svg",alt:"Paint"}]);i(this,"recommendedApps",[{icon:"assets/icons/getStarted.png",title:"Get Started",description:"Welcome to Windows"},{icon:"assets/icons/pdfIcon.png",title:"Rental Agreement",description:"17m ago"},{icon:"assets/icons/wordIcon.png",title:"Syllabus",description:"2h ago"},{icon:"assets/icons/pdfIcon.png",title:"Logo Ideas",description:"12h ago"},{icon:"assets/icons/ppIcon.png",title:"Tournament Photos",description:"Yesterday at 4:20 PM"},{icon:"assets/icons/exelIcon.png",title:"Timetable",description:"Yesterday at 1:15 PM"}]);i(this,"isAllAppsOpened",!1);i(this,"TabIndex",0);i(this,"isStartMenuOpened",!1);m(this)}setAppsOpened(s){this.appsOpened=y(y({},this.appsOpened),s)}toggleAllApps(){this.isAllAppsOpened=!this.isAllAppsOpened}setNewApp(s){this.apps.push(s)}setTabIndex(s){this.TabIndex=s}setIsStartMenuOpened(s){this.isStartMenuOpened=s}}var l=new ee;function te(){return t(h,{children:()=>n(_,{children:[t(g,{src:"assets/taskbar/Windows.svg",onClick:()=>l.setIsStartMenuOpened(!l.isStartMenuOpened)}),t(g,{src:"assets/taskbar/Search.svg"}),t(g,{src:"assets/taskbar/DesktopManager.svg"}),t(g,{src:"assets/taskbar/Chat.svg"}),t(g,{src:"assets/taskbar/FileExplorer.svg"}),t(g,{src:"assets/taskbar/MicrosoftEdge.svg",onClick:()=>l.setAppsOpened({microsoftEdge:!l.appsOpened.microsoftEdge})}),t(g,{src:"assets/taskbar/vscode.png",onClick:()=>l.setAppsOpened({vscode:!l.appsOpened.vscode})})]})})}const se=o.div`
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
`,oe=o.div`
  display: flex;
  gap: 1rem;
`;function ne(){return n(se,{children:[t(Z,{}),t(te,{}),n(oe,{children:[t(q,{}),t(K,{})]})]})}const ie=o.div`
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
`,re=o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;
`,ae=o.div`
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
`,le=o.div`
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
`,w=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5px;

  img {
    width: 40px;
    height: 40px;
  }
`,ce=o.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 15px;
  height: 315px;
`,de=o.div`
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

  ${w} {
    flex-direction: row;
    gap: 25px;

    img {
      width: 30px;
      height: 30px;
    }
  }
`,O=o.span`
  ${({theme:e})=>d`
    color: ${e.colors.white};
    font-family: ${e.font.family.segoe};
    font-size: 15px;
  `}
`,A=o.button`
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
`,pe=o.div`
  margin: 10px 40px 0 40px;
  height: 255px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 auto;
`,ge=o.div`
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
`,fe=o.div`
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
`,he=o.div`
  display: flex;
  width: 100%;
  backdrop-filter: brightness(0.8);
  border-radius: 0 0 8.75px 8.75px;
  height: 80px;
  padding: 20px 80px;
`,ue=o.div`
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
`,me=I(()=>n(ie,{children:[n(re,{children:[t(ae,{children:t("input",{type:"text",placeholder:"Type here to search"})}),n(le,{children:[t("span",{children:"Pinned"}),t(A,{onClick:()=>l.toggleAllApps(),children:l.isAllAppsOpened?n(v,{children:[t("span",{children:"<"}),t("span",{children:"Back"})]}):n(v,{children:[t("span",{children:"All apps"}),t("span",{children:">"})]})})]}),l.isAllAppsOpened?t(de,{children:l.apps.map(e=>n(w,{children:[t("img",{src:e.icon,alt:e.alt}),t(O,{children:e.alt})]},e.icon))}):t(ce,{children:l.apps.map(e=>n(w,{children:[t("img",{src:e.icon,alt:e.alt}),t(O,{children:e.alt})]},e.icon))}),!l.isAllAppsOpened&&n(v,{children:[n(ge,{children:[t("h2",{children:"Recommended"}),n(A,{children:[t("span",{children:"More"}),t("span",{children:">"})]})]}),t(pe,{children:l.recommendedApps.map(e=>n(fe,{children:[t("img",{src:e.icon,alt:e.title}),n("div",{children:[t("span",{children:e.title}),t("p",{children:e.description})]})]},e.title))})]})]}),!l.isAllAppsOpened&&t(he,{children:n(ue,{children:[t("img",{src:l.user.img,alt:""}),t("span",{children:l.user.name})]})})]})),xe=o.div`
  ${({theme:e})=>d`
    resize: both;
    width: 1100px;
    height: 618.75px;
    
    background-color: ${e.colors.white};

    position: absolute;
    border-radius: 8.75px;
  `}
`,be=o.div`
  display: flex;
  height: 40px;
  background-color: #56585d;
  color: ${({theme:e})=>e.colors.white};
  padding: 0 1rem;

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
`;class ve{constructor(){i(this,"dragging",!1);i(this,"mouseOffset",{x:0,y:0});i(this,"containerPosition",{x:0,y:0});i(this,"search","");i(this,"input",null);i(this,"container",null);m(this)}setContainerRef(s){this.container=s}setInputRef(s){this.input=s}setDragging(s){this.dragging=s}onMount(){document.addEventListener("keyup",this.onKeyUp)}onUnmount(){document.removeEventListener("keyup",this.onKeyUp)}onKeyUp(s){s.key==="Enter"&&(this.search=this.input.value,console.log(this.input.value))}onMouseDown(s){var r,p,a,c;this.setDragging(!0),this.mouseOffset.x=s.clientX,this.mouseOffset.y=s.clientY,this.containerPosition.x=(p=(r=this.container)==null?void 0:r.offsetLeft)!=null?p:0,this.containerPosition.y=(c=(a=this.container)==null?void 0:a.offsetTop)!=null?c:0}onMouseUp(s){this.setDragging(!1)}onMouseMove(s){this.dragging&&(this.container.style.left=`${s.clientX+this.containerPosition.x-this.mouseOffset.x}px`,this.container.style.top=`${s.clientY+this.containerPosition.y-this.mouseOffset.y}px`)}onMouseLeave(s){this.setDragging(!1)}}var we=new ve;function ke(){return t(h,{children:()=>{const[e]=f.exports.useState(we);return f.exports.useEffect(()=>(e.onMount(),()=>e.onUnmount()),[]),n(xe,{ref:s=>e.setContainerRef(s),children:[n(be,{onMouseDown:e.onMouseDown.bind(e),onMouseUp:e.onMouseUp.bind(e),onMouseMove:e.onMouseMove.bind(e),onMouseLeave:e.onMouseLeave.bind(e),children:[n("div",{children:[t(R,{}),t(B,{}),t(T,{})]}),t("input",{type:"text",ref:s=>e.setInputRef(s)}),n("div",{children:[t(S,{size:20,color:"#fff"}),t(C,{size:15,color:"#fff"}),t(z,{size:20,color:"#fff",onClick:()=>l.setAppsOpened({microsoftEdge:!1})})]})]}),t(ye,{children:t("iframe",{src:`https://www.bing.com.br/search?q=${e.search}`})})]})}})}var $e=f.exports.memo(ke);class Me{constructor(){i(this,"dragging",!1);i(this,"mouseOffset",{x:0,y:0});i(this,"containerPosition",{x:0,y:0});i(this,"container",null);i(this,"setContainerRef",s=>{this.container=s});i(this,"setDragging",s=>{this.dragging=s});i(this,"onMouseDown",s=>{var r,p,a,c;this.setDragging(!0),this.mouseOffset.x=s.clientX,this.mouseOffset.y=s.clientY,this.containerPosition.x=(p=(r=this.container)==null?void 0:r.offsetLeft)!=null?p:0,this.containerPosition.y=(c=(a=this.container)==null?void 0:a.offsetTop)!=null?c:0});i(this,"onMouseUp",s=>{this.setDragging(!1)});i(this,"onMouseMove",s=>{this.dragging&&(this.container.style.left=`${s.clientX+this.containerPosition.x-this.mouseOffset.x}px`,this.container.style.top=`${s.clientY+this.containerPosition.y-this.mouseOffset.y}px`)});i(this,"onMouseLeave",s=>{this.setDragging(!1)});m(this)}}var Oe=new Me;const Ae=o.div`
  ${({theme:e})=>d`
    resize: both;
    width: 1100px;
    height: 618.75px;
    
    background-color: ${e.colors.white};

    position: absolute;
    border-radius: 8.75px;
  `}
`,Se=o.div`
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
`,Ce=o.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 8.75px 8.75px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 8.75px 8.75px;
  }
`,ze=o.img`
  width: 20px;
  height: 20px;
`,Ee=o.span`
  font-family: ${({theme:e})=>e.font.family.segoe};
  font-size: 12px;
  color: white;
`;function Fe(){const[e]=f.exports.useState(Oe);return t(h,{children:()=>n(Ae,{ref:s=>e.setContainerRef(s),children:[n(Se,{onMouseDown:e.onMouseDown.bind(e),onMouseUp:e.onMouseUp.bind(e),onMouseMove:e.onMouseMove.bind(e),onMouseLeave:e.onMouseLeave.bind(e),children:[n("div",{children:[t(ze,{src:"assets/taskbar/vscode.png"}),t(Ee,{children:"VS Code"})]}),n("div",{children:[t(S,{size:20,color:"#fff"}),t(C,{size:15,color:"#fff"}),t(z,{size:20,color:"#fff",onClick:()=>l.setAppsOpened({vscode:!1})})]})]}),t(Ce,{children:t("iframe",{src:"http://www.vscode.dev"})})]})})}var Pe=f.exports.memo(Fe);const De=o.div`
  background-image: url('/assets/image-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;function Ie(){return t(h,{children:()=>n(L,{theme:H,children:[t(W,{}),n(De,{children:[l.isStartMenuOpened&&t(me,{}),l.appsOpened.microsoftEdge&&t($e,{}),l.appsOpened.vscode&&t(Pe,{}),t(ne,{})]})]})})}U.render(t(j.StrictMode,{children:t(Ie,{})}),document.getElementById("root"));
