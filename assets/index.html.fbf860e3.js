import{_ as b,r as k,o as m,a as _,b as h,t as g,d as j,F as T,e as u}from"./app.90f2bf86.js";var w=globalThis&&globalThis.__awaiter||function(t,s,e,n){function i(c){return c instanceof e?c:new e(function(l){l(c)})}return new(e||(e=Promise))(function(c,l){function d(r){try{a(n.next(r))}catch(p){l(p)}}function y(r){try{a(n.throw(r))}catch(p){l(p)}}function a(r){r.done?c(r.value):i(r.value).then(d,y)}a((n=n.apply(t,s||[])).next())})};class E{constructor(s,e,n,i){B(s),x(s),this.obj=s,this.input=typeof e=="string"?[e]:e,this.fn=typeof n=="function"?n:function(){},this.hooks=typeof i=="function"?i:function(){},this.timer=0,this.typeAction={rollback:this.typedBack.bind(this),normal:this.play.bind(this),custom:this.fn},this.init()}init(){this.play()}play(){if(!this.input.length)return this.fn(this);let s=0,e=!1,n=this.input.shift()||"";this.timer=setInterval(()=>{if(s===n.length&&(s=0,e=!0,this.closeTimer()),this.obj.isEnd)return this.closeTimer();if(e)return this.nextTick();this.obj.output=n.slice(0,s+1),this.hooks(n.slice(0,s+1),this),s++},this.obj.speed)}typedBack(){if(!this.input.length&&this.obj.sentencePause)return this.fn(this);let s=this.obj.output,e=s.length,n=!1;this.timer=setInterval(()=>{if(e===-1&&(this.obj.output="",this.hooks("",this),e=0,n=!0,this.closeTimer()),this.obj.isEnd)return this.closeTimer(),this.obj.singleBack=!1;if(n)return this.obj.singleBack=!1,(()=>{const{length:i}=this.input;return i?this.play():this.fn(this)})();this.obj.output=s.slice(0,e+1),this.hooks(s.slice(0,e+1),this),e--},this.obj.backSpeed)}nextTick(){return w(this,void 0,void 0,function*(){return yield this.sleep(this.obj.sleep),this.obj.singleBack?this.typedBack():this.getOutputType()})}getOutputType(){return this.typeAction[this.obj.type](this)}closeTimer(){clearInterval(this.timer)}sleep(s){return new Promise(e=>setTimeout(e,s))}close(){return this.obj.isEnd=!0}}const f=t=>{throw new Error(t)},B=t=>{const e=Object.keys({output:"",type:"",isEnd:!1,speed:80,backSpeed:40,sleep:3e3,singleBack:!1,sentencePause:!1}),n=Object.keys(t);e.length!==n.length&&f("\u914D\u7F6E\u5BF9\u8C61\u9519\u8BEF: \u5B57\u6BB5\u6570\u91CF\u4E0D\u6B63\u786E\uFF01"),e.forEach(i=>{(t[i]===void 0||t[i]===null)&&f("\u914D\u7F6E\u5BF9\u8C61\u9519\u8BEF\uFF1A\u5B57\u6BB5\u503C\u4E3Anull\u6216undefined\uFF01")})},x=t=>{Object.keys(t).forEach(s=>{const e=v[s](t);e.check()&&e.showTip(s)})},v=(()=>({output:t=>new o("string",t.output),type:t=>new o("string",t.type),isEnd:t=>new o("boolean",t.isEnd),speed:t=>new o("number",t.speed),backSpeed:t=>new o("number",t.backSpeed),sleep:t=>new o("number",t.sleep),singleBack:t=>new o("boolean",t.singleBack),sentencePause:t=>new o("boolean",t.sentencePause)}))();class o{constructor(s,e){this.type=s,this.field=e}check(){return typeof this.field!=`${this.type}`}showTip(s){f(`\u914D\u7F6E\u5BF9\u8C61\u9519\u8BEF\uFF1A\u5C5E\u6027 ${s} \u5FC5\u987B\u4E3A ${this.type} \u7C7B\u578B\uFF01`)}}const I={name:"home",data(){return{obj:{output:"",isEnd:!1,speed:80,singleBack:!1,sleep:0,type:"normal",backSpeed:40,sentencePause:!1}}},mounted(){this.init()},methods:{init(){this.fetchData()},fetchData(){fetch("https://v1.hitokoto.cn").then(t=>t.json()).then(({hitokoto:t})=>{this.initTyped(t)}).catch(t=>{console.error(t)})},initTyped(t,s,e){const n=this.obj;new E(n,t,s,e)}}},S=h("p",null,"\u8FD9\u662F\u4E00\u4E2A\u535A\u5BA2\u4E3B\u9875\u3002",-1),$=h("p",null,[u("\u8981\u4F7F\u7528\u6B64\u5E03\u5C40\uFF0C\u4F60\u5E94\u8BE5\u5728\u9875\u9762\u524D\u7AEF\u8BBE\u7F6E "),h("code",null,"layout: Blog"),u(" \u548C "),h("code",null,"home: true"),u("\u3002")],-1),O=u("\u76F8\u5173\u914D\u7F6E\u6587\u6863\u8BF7\u89C1 "),F={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/blog/home/",target:"_blank",rel:"noopener noreferrer"},N=u("\u535A\u5BA2\u4E3B\u9875"),P=u("\u3002");function D(t,s,e,n,i,c){const l=k("ExternalLinkIcon");return m(),_(T,null,[h("p",null,g(i.obj.output),1),S,$,h("p",null,[O,h("a",F,[N,j(l)]),P])],64)}var V=b(I,[["render",D]]);export{V as default};
