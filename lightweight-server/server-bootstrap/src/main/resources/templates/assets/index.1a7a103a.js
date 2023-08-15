import{r as e,o as t,c as s,p as a,a as l,u as n,b as o,d as i,e as c,f as r,w as u,g as d,F as m,h as p,t as h,i as g,j as v,k as f,l as _,T as b,K as x,m as L,n as y,q as T,s as k,v as I,_ as C,x as E,R as w,y as P}from"./vendor.02d980ab.js";const D={};let O;D.render=function(a,l,n,o,i,c){const r=e("router-view");return t(),s(r)};const R={},j=function(e,t){if(!t)return e();if(void 0===O){const e=document.createElement("link").relList;O=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in R)return;R[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":O,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};const A={setup(){const e=localStorage.getItem("ms_username"),t=n(),s=o((()=>t.state.collapse)),a=()=>{t.commit("handleCollapse",!s.value)};i((()=>{document.body.clientWidth<1500&&a()}));const l=c();return{username:e,message:2,collapse:s,collapseChage:a,handleCommand:e=>{"loginout"==e?(localStorage.removeItem("ms_username"),l.push("/login")):"user"==e&&l.push("/user")}}}},S=u();a("data-v-0bd375e8");const $={class:"header"},V={key:0,class:"el-icon-s-fold"},q={key:1,class:"el-icon-s-unfold"},z=r("div",{class:"logo"},"后台管理系统",-1),H=r("div",{class:"header-right"},[r("div",{class:"header-user-con"})],-1);l();const N=S(((e,a,l,n,o,i)=>(t(),s("div",$,[r("div",{class:"collapse-btn",onClick:a[1]||(a[1]=(...e)=>n.collapseChage&&n.collapseChage(...e))},[n.collapse?(t(),s("i",q)):(t(),s("i",V))]),z,H]))));A.render=N,A.__scopeId="data-v-0bd375e8";const W={setup(){const e=d(),t=o((()=>e.path)),s=n();return{items:[{index:"/service",title:"服务列表"},{index:"/cluster",title:"集群列表"}],onRoutes:t,collapse:o((()=>s.state.collapse))}}},F=u();a("data-v-211e8b7b");const K={class:"sidebar"};l();const B=F(((a,l,n,o,i,c)=>{const u=e("el-menu-item"),d=e("el-submenu"),v=e("el-menu");return t(),s("div",K,[r(v,{class:"sidebar-el-menu","default-active":o.onRoutes,collapse:o.collapse,"background-color":"#eaedf1","text-color":"#3c3c3c","active-text-color":"#3c3c3c","unique-opened":"",router:""},{default:F((()=>[(t(!0),s(m,null,p(o.items,(e=>(t(),s(m,null,[e.subs?(t(),s(d,{index:e.index,key:e.index},{title:F((()=>[r("i",{class:e.icon},null,2),r("span",null,h(e.title),1)])),default:F((()=>[(t(!0),s(m,null,p(e.subs,(e=>(t(),s(m,null,[e.subs?(t(),s(d,{index:e.index,key:e.index},{title:F((()=>[g(h(e.title),1)])),default:F((()=>[(t(!0),s(m,null,p(e.subs,((e,a)=>(t(),s(u,{key:a,index:e.index},{default:F((()=>[g(h(e.title),1)])),_:2},1032,["index"])))),128))])),_:2},1032,["index"])):(t(),s(u,{index:e.index,key:e.index},{default:F((()=>[g(h(e.title),1)])),_:2},1032,["index"]))],64)))),256))])),_:2},1032,["index"])):(t(),s(u,{index:e.index,key:e.index},{title:F((()=>[g(h(e.title),1)])),default:F((()=>[r("i",{class:e.icon},null,2)])),_:2},1032,["index"]))],64)))),256))])),_:1},8,["default-active","collapse"])])}));W.render=B,W.__scopeId="data-v-211e8b7b";const G={setup(){const e=d(),t=c(),s=n(),a=o((()=>s.state.tagsList)),l=o((()=>a.value.length>0)),i=e=>{a.value.some((t=>t.path===e.fullPath))||(a.value.length>=8&&s.commit("delTagsItem",{index:0}),s.commit("setTagsItem",{name:e.name,title:e.meta.title,path:e.fullPath}))};i(e),v((e=>{i(e)}));return{isActive:t=>t===e.fullPath,tagsList:a,showTags:l,closeTags:l=>{const n=a.value[l];s.commit("delTagsItem",{index:l});const o=a.value[l]?a.value[l]:a.value[l-1];o?n.path===e.fullPath&&t.push(o.path):t.push("/")},handleTags:l=>{"other"===l?(()=>{const t=a.value.filter((t=>t.path===e.fullPath));s.commit("closeTagsOther",t)})():(s.commit("clearTags"),t.push("/"))}}}},J={key:0,class:"tags"},M=r("i",{class:"el-icon-close"},null,-1),Q={class:"tags-close-box"},U=g(" 标签选项 "),X=r("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),Y=g("关闭其他"),Z=g("关闭所有");G.render=function(a,l,n,o,i,c){const u=e("router-link"),d=e("el-button"),v=e("el-dropdown-item"),b=e("el-dropdown-menu"),x=e("el-dropdown");return o.showTags?(t(),s("div",J,[r("ul",null,[(t(!0),s(m,null,p(o.tagsList,((e,a)=>(t(),s("li",{class:["tags-li",{active:o.isActive(e.path)}],key:a},[r(u,{to:e.path,class:"tags-li-title"},{default:f((()=>[g(h(e.title),1)])),_:2},1032,["to"]),r("span",{class:"tags-li-icon",onClick:e=>o.closeTags(a)},[M],8,["onClick"])],2)))),128))]),r("div",Q,[r(x,{onCommand:o.handleTags},{dropdown:f((()=>[r(b,{size:"small"},{default:f((()=>[r(v,{command:"other"},{default:f((()=>[Y])),_:1}),r(v,{command:"all"},{default:f((()=>[Z])),_:1})])),_:1})])),default:f((()=>[r(d,{size:"mini",type:"primary"},{default:f((()=>[U,X])),_:1})])),_:1},8,["onCommand"])])])):_("",!0)};const ee={components:{vHeader:A,vSidebar:W,vTags:G},setup(){const e=n();return{tagsList:o((()=>e.state.tagsList.map((e=>e.name)))),collapse:o((()=>e.state.collapse))}}},te={class:"about"},se={class:"content"};ee.render=function(a,l,n,o,i,c){const u=e("v-header"),d=e("v-sidebar"),m=e("v-tags"),p=e("router-view");return t(),s("div",te,[r(u),r(d),r("div",{class:["content-box",{"content-collapse":o.collapse}]},[r(m),r("div",se,[r(p,null,{default:f((({Component:e})=>[r(b,{name:"move",mode:"out-in"},{default:f((()=>[(t(),s(x,{include:o.tagsList},[(t(),s(L(e)))],1032,["include"]))])),_:2},1024)])),_:1})])],2)])};const ae=[{path:"/",redirect:"/service"},{path:"/",name:"Home",component:ee,children:[{path:"/service",name:"service",meta:{title:"服务列表"},component:()=>j((()=>import("./Service.e7447f05.js")),["./assets/Service.e7447f05.js","./assets/Service.7e468817.css","./assets/service.29e8172a.js","./assets/request.83ecd05f.js","./assets/vendor.02d980ab.js"])},{path:"/serviceDetail/:serviceName",name:"serviceDetail",meta:{title:"服务详情"},component:()=>j((()=>import("./ServiceDetail.3d6c6133.js")),["./assets/ServiceDetail.3d6c6133.js","./assets/ServiceDetail.468ae73e.css","./assets/service.29e8172a.js","./assets/request.83ecd05f.js","./assets/vendor.02d980ab.js"])},{path:"/cluster",name:"cluster",meta:{title:"集群列表"},component:()=>j((()=>import("./Cluster.bc7249d8.js")),["./assets/Cluster.bc7249d8.js","./assets/Cluster.96e85009.css","./assets/request.83ecd05f.js","./assets/vendor.02d980ab.js"])},{path:"/404",name:"404",meta:{title:"找不到页面"},component:()=>j((()=>import("./404.f553e4b2.js")),["./assets/404.f553e4b2.js","./assets/404.4b8f307f.css","./assets/vendor.02d980ab.js"])},{path:"/403",name:"403",meta:{title:"没有权限"},component:()=>j((()=>import("./403.d03f0a7b.js")),["./assets/403.d03f0a7b.js","./assets/403.560e9602.css","./assets/vendor.02d980ab.js"])}]},{path:"/login",name:"Login",meta:{title:"登录"},component:()=>j((()=>import("./Login.d70c54f5.js")),["./assets/Login.d70c54f5.js","./assets/Login.98fe3ea7.css","./assets/vendor.02d980ab.js"])}],le=y({history:T(),routes:ae});le.beforeEach(((e,t,s)=>{document.title=`${e.meta.title} | vue-manage-system`;const a=localStorage.getItem("ms_username");a||"/login"===e.path?e.meta.permission?"admin"===a?s():s("/403"):s():s("/login")}));var ne=k({state:{tagsList:[],collapse:!1},mutations:{delTagsItem(e,t){e.tagsList.splice(t.index,1)},setTagsItem(e,t){e.tagsList.push(t)},clearTags(e){e.tagsList=[]},closeTagsOther(e,t){e.tagsList=t},closeCurrentTag(e,t){for(let s=0,a=e.tagsList.length;s<a;s++){if(e.tagsList[s].path===t.$route.fullPath){s<a-1?t.$router.push(e.tagsList[s+1].path):s>0?t.$router.push(e.tagsList[s-1].path):t.$router.push("/"),e.tagsList.splice(s,1);break}}},handleCollapse(e,t){e.collapse=t}},actions:{},modules:{}});const oe=I({locale:C.name,fallbackLocale:E.name,messages:{"zh-cn":{i18n:{breadcrumb:"国际化产品",tips:"通过切换语言按钮，来改变当前内容的语言。",btn:"切换英文",title1:"常用用法",p1:"要是你把你的秘密告诉了风，那就别怪风把它带给树。",p2:"没有什么比信念更能支撑我们度过艰难的时光了。",p3:"只要能把自己的事做好，并让自己快乐，你就领先于大多数人了。"}},en:{i18n:{breadcrumb:"International Products",tips:"Click on the button to change the current language. ",btn:"Switch Chinese",title1:"Common usage",p1:"If you reveal your secrets to the wind you should not blame the wind for  revealing them to the trees.",p2:"Nothing can help us endure dark times better than our faith. ",p3:"If you can do what you do best and be happy, you're further along in life  than most people."}}}});const ie=P(D);var ce;(ce=ie).use(w,{locale:C}),ce.use(oe),ie.use(ne).use(le).mount("#app");