(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{538:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9324,23)),Promise.resolve().then(r.bind(r,9304)),Promise.resolve().then(r.bind(r,1698)),Promise.resolve().then(r.t.bind(r,6874,23)),Promise.resolve().then(r.t.bind(r,9840,23))},1362:(e,t,r)=>{"use strict";r.d(t,{D:()=>c,N:()=>d});var n=r(2115),s=(e,t,r,n,s,a,o,l)=>{let i=document.documentElement,c=["light","dark"];function d(t){var r;(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&a?s.map(e=>a[e]||e):s;r?(i.classList.remove(...n),i.classList.add(a&&a[t]?a[t]:t)):i.setAttribute(e,t)}),r=t,l&&c.includes(r)&&(i.style.colorScheme=r)}if(n)d(n);else try{let e=localStorage.getItem(t)||r,n=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(n)}catch(e){}},a=["light","dark"],o="(prefers-color-scheme: dark)",l=n.createContext(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=n.useContext(l))?e:i},d=e=>n.useContext(l)?n.createElement(n.Fragment,null,e.children):n.createElement(m,{...e}),u=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:s=!0,enableColorScheme:i=!0,storageKey:c="theme",themes:d=u,defaultTheme:m=s?"system":"light",attribute:p="data-theme",value:g,children:b,nonce:k,scriptProps:w}=e,[x,E]=n.useState(()=>v(c,m)),[C,N]=n.useState(()=>"system"===x?y():x),S=g?Object.values(g):d,j=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=y());let n=g?g[t]:t,o=r?f(k):null,l=document.documentElement,c=e=>{"class"===e?(l.classList.remove(...S),n&&l.classList.add(n)):e.startsWith("data-")&&(n?l.setAttribute(e,n):l.removeAttribute(e))};if(Array.isArray(p)?p.forEach(c):c(p),i){let e=a.includes(m)?m:null,r=a.includes(t)?t:e;l.style.colorScheme=r}null==o||o()},[k]),T=n.useCallback(e=>{let t="function"==typeof e?e(x):e;E(t);try{localStorage.setItem(c,t)}catch(e){}},[x]),A=n.useCallback(e=>{N(y(e)),"system"===x&&s&&!t&&j("system")},[x,t]);n.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(A),A(e),()=>e.removeListener(A)},[A]),n.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?E(e.newValue):T(m))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),n.useEffect(()=>{j(null!=t?t:x)},[t,x]);let L=n.useMemo(()=>({theme:x,setTheme:T,forcedTheme:t,resolvedTheme:"system"===x?C:x,themes:s?[...d,"system"]:d,systemTheme:s?C:void 0}),[x,T,t,C,s,d]);return n.createElement(l.Provider,{value:L},n.createElement(h,{forcedTheme:t,storageKey:c,attribute:p,enableSystem:s,enableColorScheme:i,defaultTheme:m,value:g,themes:d,nonce:k,scriptProps:w}),b)},h=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:a,enableSystem:o,enableColorScheme:l,defaultTheme:i,value:c,themes:d,nonce:u,scriptProps:m}=e,h=JSON.stringify([a,r,i,t,d,c,o,l]).slice(1,-1);return n.createElement("script",{...m,suppressHydrationWarning:!0,nonce:"",dangerouslySetInnerHTML:{__html:"(".concat(s.toString(),")(").concat(h,")")}})}),v=(e,t)=>{let r;try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t},f=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},y=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},1698:(e,t,r)=>{"use strict";r.d(t,{default:()=>k});var n=r(5155),s=r(1362),a=r(2115),o=r(4624),l=r(2596);let i=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,c=l.$;var d=r(3999);let u=((e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return c(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:s,defaultVariants:a}=t,o=Object.keys(s).map(e=>{let t=null==r?void 0:r[e],n=null==a?void 0:a[e];if(null===t)return null;let o=i(t)||i(n);return s[e][o]}),l=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return c(e,o,null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...s}=t;return Object.entries(s).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...l}[t]):({...a,...l})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)})("inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),m=a.forwardRef((e,t)=>{let{className:r,variant:s,size:a,asChild:l=!1,...i}=e,c=l?o.DX:"button";return(0,n.jsx)(c,{className:(0,d.cn)(u({variant:s,size:a,className:r})),ref:t,...i})});m.displayName="Button";let h=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let y=(0,a.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:i,iconNode:c,...d}=e;return(0,a.createElement)("svg",{ref:t,...f,width:n,height:n,stroke:r,strokeWidth:o?24*Number(s)/Number(n):s,className:v("lucide",l),...d},[...c.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(i)?i:[i]])}),p=(e,t)=>{let r=(0,a.forwardRef)((r,n)=>{let{className:s,...o}=r;return(0,a.createElement)(y,{ref:n,iconNode:t,className:v("lucide-".concat(h(e)),s),...o})});return r.displayName="".concat(e),r},g=p("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),b=p("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);function k(){let{theme:e,systemTheme:t,setTheme:r}=(0,s.D)();return(0,n.jsxs)(m,{className:"-mr-4",onClick:()=>r("dark"===e?"light":"dark"),variant:"ghost",children:["dark"===e&&(0,n.jsx)(g,{size:14}),"light"===e&&(0,n.jsx)(b,{size:14}),"system"===e&&"light"===t&&(0,n.jsx)(b,{size:14}),"system"===e&&"dark"===t&&(0,n.jsx)(g,{size:14})]})}},3999:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var n=r(2596),s=r(9688);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,n.$)(t))}},9304:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>a});var n=r(5155);r(2115);var s=r(1362);function a(e){let{children:t,...r}=e;return(0,n.jsx)(s.N,{...r,children:t})}},9324:()=>{},9840:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[385,911,441,684,358],()=>t(538)),_N_E=e.O()}]);