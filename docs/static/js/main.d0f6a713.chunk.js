(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,a){e.exports=a(21)},20:function(e,n,a){},21:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(6),c=a.n(r),s=a(11),l=a(10);const i="fa fa-hand-rock-o",m="fa fa-hand-paper-o",u="fa fa-hand-scissors-o",p="fa fa-hand-spock-o",d="fa fa-refresh",f="rock",g="paper",b="scissors",w="spock",h=o.a.createContext({}),k=()=>{const e=o.a.useContext(h);if(!e)throw new Error("No context found!");return e};var E=({children:e})=>{const n=Object(t.useState)({_p1:"Me",_p2:"Spock",spocked:!1,answered:!1,winner:"",message:"",score:{me:0,spock:0},splashIconArray:[],cpuHand:f}),a=Object(l.a)(n,2),r=a[0],c=a[1];Object(t.useEffect)(()=>{const e=u().get();e?i({score:e}):u().save({me:0,spock:0})},[]),Object(t.useEffect)(()=>{(()=>{const e=[];for(let a=0;a<29;a++){const n=[f,g,b];a%9===0&&n.push(w),e.push(n)}const n=e.reduce((e,n)=>e.concat(n),[]);i({splashIconArray:n,cpuHand:n[0]})})()},[]);const i=e=>{c(n=>Object(s.a)({},n,{},e))},m=e=>{const n=r.score,a=r._p1,t=r._p2;let o=parseInt(n.me,10),c=parseInt(n.spock,10);e===a&&(o=parseInt(n.me,10)+1),e===t&&(c=parseInt(n.spock,10)+1);const s={me:o,spock:c};return u().save(s),s},u=()=>({get:()=>{const e=window.localStorage.getItem("score");return e?e&&"string"===typeof e?JSON.parse(e):e:{me:0,spock:0}},save:e=>{window.localStorage.setItem("score",JSON.stringify(e))},remove:()=>{window.localStorage.removeItem("score")},clearAll:()=>{window.localStorage.clearAll()}});return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.Provider,{value:{gameState:r,setGameState:i,playHand:e=>{const n=r.answered,a=r.splashIconArray,t=r._p1,o=r._p2;let c=!1,s=null,l=null,u=r.score;const p=a[Math.floor(Math.random()*a.length)];n||(p===w?(c=!0,s=o,l="You've been Spocked'd"):e===p?(s="tie",l="it's a tie"):e===f&&p===b||e===g&&p===f||e===b&&p===g?(s=t,l="You won!"):(s=o,l="You lost!"),"tie"!==s&&(u=m(s)),i({answered:e,spocked:c,winner:s,message:l,score:u,cpuHand:p}),console.log("CPU hand = ",p),console.log("PLAYER hand = ",e),console.log("======================="),console.log("message = ",l),console.log("score = ",u),console.log("======================="))},playAgain:()=>{i({spocked:!1,answered:!1,message:"",score:u().get()})}}},e))},v=a(1),y=a(2);function S(){const e=Object(v.a)([" {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.35);\n  }\n  100% {\n    box-shadow: 0 0 0 2rem transparent;\n  }\n}"]);return S=function(){return e},e}const x=Object(y.b)(S());function j(){const e=Object(v.a)(["\n   width: 1em;\n  height: 1em;\n  border-radius: 100%;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(35, 41, 44, 0.5) 0px 0.1em 0.25em -0.15em;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &.bg-light {\n    background: #f3f4f5;\n    color: #23292C;\n  }\n\n  &.bg-dark {\n    background: #23292C;\n    color: #f3f4f5;\n  }\n\n  &.beacon-1 {\n    animation: "," 1s infinite linear;\n  }\n  &.beacon-2 {\n    animation: "," 1s infinite linear;\n    animation-delay: .15s;\n  }\n  &.beacon-3 {\n    animation: "," 1s infinite linear;\n    animation-delay: .3s;\n  }\n"]);return j=function(){return e},e}function N(){const e=Object(v.a)(["\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  width: 1.28571429em;\n  text-align: center;\n  font-size: 65%;\n  cursor: pointer;\n"]);return N=function(){return e},e}function O(){const e=Object(v.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: ",";\n"]);return O=function(){return e},e}const C=y.a.div(O(),e=>e.align),z=y.a.span(N()),I=y.a.div(j(),x,x,x);var A=({hand:e,icon:n,number:a,type:t})=>{const r=k(),c=r.playHand,s=r.gameState,l=s.answered,i=s.winner,m=e.toLowerCase()!==w?"beacon-".concat(parseInt(a,10)):"",u=l===e&&"me"===i.toLowerCase()?"bg-dark":l?"":"bg-light ".concat(m);return t&&"cpu"===t.toLowerCase()?o.a.createElement(C,{align:"align-center"},o.a.createElement(I,{className:"bg-light"},o.a.createElement(z,{className:"".concat(n)}))):o.a.createElement(C,{align:"align-center"},o.a.createElement(I,{className:"".concat(u),onClick:()=>c(e)},o.a.createElement(z,{className:"".concat(n)})))};var L=[{name:f,icon:i},{name:g,icon:m},{name:b,icon:u},{name:w,icon:p}];function _(){const e=Object(v.a)(["\n  margin: 0;\n  font-size: 4rem;\n  margin-block-start: 0.83em;\n  margin-block-end: 0.83em;\n  display: block;\n  font-weight: bold;\n  color: #f3f4f5;\n  margin-top: 0!important;\n  margin-bottom: 0!important;\n"]);return _=function(){return e},e}function H(){const e=Object(v.a)(["\n  font-size: 2.5rem;\n  opacity: .35;\n"]);return H=function(){return e},e}function F(){const e=Object(v.a)(["\n  width: 100vw;\n  text-align: center;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-around;\n"]);return F=function(){return e},e}const J=y.a.div(F()),M=y.a.span(H()),P=y.a.h1(_());var Y=()=>{const e=k().gameState,n=e.score,a=e._p1,t=e._p2;return o.a.createElement(J,null,o.a.createElement("div",null,o.a.createElement(M,null,a),o.a.createElement(P,null,n.me)),o.a.createElement("div",null,o.a.createElement(M,null,t),o.a.createElement(P,null,n.spock)))};function B(){const e=Object(v.a)(["\n  margin-right: 1em;\n  font-size: 1.5em;\n"]);return B=function(){return e},e}function R(){const e=Object(v.a)(["\n  display: flex;\n  flex-flow: row;\n  padding: .5em 1em;\n  align-items: center;\n\n  justify-content: center;\n  border-radius: 3em;\n  box-shadow: 0 0 2em -0.3em rgba(18, 21, 22, 0.65);\n  line-height: 1.5;\n  opacity: .9;\n  background: ",";\n  color: ",";\n\n  .refresh {\n    font-size:1em;\n  }\n"]);return R=function(){return e},e}function X(){const e=Object(v.a)(["\n  bottom: 35%;\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%) scale(0);\n  transition: .3s cubic-bezier(0.5, 0.1, 0.3, 1.4);\n  transition-delay: 0s;\n  z-index: 2;\n\n  &.show {\n    bottom: 50%;\n    transform: translateX(-50%) scale(1);\n    transition-delay: 0.9s;\n  }\n"]);return X=function(){return e},e}const D=y.a.div(X()),G=y.a.div(R(),e=>e.bg,"#f3f4f5"),U=y.a.div(B());var q=()=>{const e=k(),n=e.gameState,a=n.message,t=n.answered,r=n.winner,c=n.spocked,s=e.playAgain,l=t?"show":"",i=(()=>{if(r){if("tie"===r.toLowerCase())return"#00BCD4";if("me"===r.toLowerCase())return"#ff5722";if("spock"===r.toLowerCase())return"#FF3B80"}if(c)return"#cddc39"})();return o.a.createElement(D,{className:l},o.a.createElement(G,{bg:i,onClick:s},o.a.createElement(U,null,a),o.a.createElement(I,{className:"beacon-1"},o.a.createElement(z,{className:"".concat(d," refresh")}))))};a(20);var K=()=>{const e=k().gameState,n=e.answered,a=e.cpuHand,t=n?"flip-me":"",r=(e,n=null)=>{let a=[];return(a=e?L.filter(n=>n.name.toLowerCase()===e):L.filter(e=>e.name.toLowerCase()!==w)).map(({name:e,icon:a},t)=>o.a.createElement(A,{key:"icon--".concat(t),hand:e,icon:a,number:t+1,type:n}))};return o.a.createElement("div",{className:"App"},o.a.createElement("article",{className:"column"},o.a.createElement("div",{className:"description"},o.a.createElement("h1",null,"Rock Paper Scissors *No Lizard* Spock"),o.a.createElement("small",null,"As ",o.a.createElement("b",null,"Sheldon"),' explains, "Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors."')),o.a.createElement("div",{className:"flip-container ".concat(t)},o.a.createElement("div",{className:"flipper"},o.a.createElement("div",{className:"front"},r(w,"cpu")),o.a.createElement("div",{className:"back"},r(a,"cpu")))),o.a.createElement("div",{className:"answers row around"},r()),o.a.createElement(Y,null),o.a.createElement(q,null)))};const Q=document.getElementById("root");c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null,o.a.createElement(K,null))),Q)}},[[13,1,2]]]);
//# sourceMappingURL=main.d0f6a713.chunk.js.map