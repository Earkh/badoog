(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{U4Sp:function(t,e,n){"use strict";n.r(e),n.d(e,"MessageListPageModule",function(){return f});var s=n("ofXK"),i=n("3Pt+"),o=n("TEn/"),r=n("tyNb"),c=n("fXoL"),a=n("tk/3");let l=(()=>{class t{constructor(t){this.http=t}getMessages(){return this.http.get("https://jsonplaceholder.typicode.com/users")}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(a.a))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function b(t,e){if(1&t&&(c.Mb(0,"ion-item"),c.Mb(1,"ion-label"),c.Mb(2,"h2"),c.lc(3),c.Lb(),c.Mb(4,"p"),c.lc(5,"Hey there! I'm using Badoog"),c.Lb(),c.Lb(),c.Lb()),2&t){const t=e.$implicit;c.zb(3),c.mc(t.name)}}const u=[{path:"",component:(()=>{class t{constructor(t){this.DataService=t,this.messages=Array(15)}ngOnInit(){this.users=this.DataService.getMessages(),console.log(this.users)}loadData(t){setTimeout(()=>{if(this.messages.length>=30)return this.infiniteScroll.complete(),void(this.infiniteScroll.disabled=!0);var t=Array(15);this.messages.push(...t),this.infiniteScroll.complete()},2e3)}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(l))},t.\u0275cmp=c.Db({type:t,selectors:[["app-message-list"]],viewQuery:function(t,e){if(1&t&&c.pc(o.u,1),2&t){let t;c.fc(t=c.Vb())&&(e.infiniteScroll=t.first)}},decls:8,vars:3,consts:[[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.lc(3,"Badoog"),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content"),c.Mb(5,"ion-list"),c.kc(6,b,6,1,"ion-item",0),c.Xb(7,"async"),c.Lb(),c.Lb()),2&t&&(c.zb(6),c.cc("ngForOf",c.Yb(7,1,e.users)))},directives:[o.r,o.M,o.K,o.n,o.y,s.i,o.w,o.x],pipes:[s.b],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({imports:[[r.i.forChild(u)],r.i]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({imports:[[s.c,i.a,o.N,p]]}),t})()}}]);