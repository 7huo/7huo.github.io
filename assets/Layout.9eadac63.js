var p=Object.defineProperty;var n=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(o,e,a)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,l=(o,e)=>{for(var a in e||(e={}))g.call(e,a)&&m(o,a,e[a]);if(n)for(var a of n(e))v.call(e,a)&&m(o,a,e[a]);return o};import{h as c,i as d,p as b,q as f,s as h,k as s,r as t,v as y,x as D,y as L}from"./app.d0deae2d.js";import{S as k}from"./SkipLink.9a0ab1a5.js";var C=c({name:"Layout",setup(){const o=L(),e=d(),a=D(),u=b(),i=f(),r=h(()=>e.value.blog.sidebarDisplay||o.value.blog.sidebarDisplay||"mobile");return()=>[s(k),s(t("CommonWrapper"),{},l(l({default:()=>u.value.home?s(t("HomePage")):s(y,()=>s(t("NormalPage"),{key:a.value.path}))},r.value!=="none"?{navScreenBottom:()=>s(t("BloggerInfo"))}:{}),!i.value&&r.value==="always"?{sidebar:()=>s(t("BloggerInfo"))}:{}))]}});export{C as default};
