(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{KSXI:function(e,t,i){"use strict";i.r(t),i.d(t,"CardPageModule",function(){return p});var s=i("ofXK"),n=i("3Pt+"),c=i("TEn/"),o=i("tyNb"),r=i("mrSG"),a=i("fXoL");let d=(()=>{class e{constructor(){this.start=0,this.end=1}getStart(){return this.start}getEnd(){return this.end}increaseS(){this.start+=1,this.end+=1,console.log(this.start+" - "+this.end)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=i("6Qg2"),b=i("2Jhb");i("AytR");let u=(()=>{class e{constructor(e,t,i){this.modalController=e,this.sliceService=t,this.usersService=i}ngOnInit(){}presentModal(){return Object(r.a)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:b.a,componentProps:{name:this.name,sex:this.sex,size:this.size,age:this.age,desc:this.desc}});return yield e.present()})}like(e){let t=this.usersService.getUser()._id;this.usersService.saveLike(this.id,t),console.log("user id",t),setTimeout(()=>{this.usersService.checkIfMatch(this.id,t)},100),document.getElementById("card").classList.remove("animate__fadeInRight"),document.getElementById("card").classList.add("animate__fadeOutLeft"),setTimeout(()=>{this.sliceService.increaseS()},600)}dislike(e){document.getElementById("card").classList.remove("animate__fadeInRight"),document.getElementById("card").classList.add("animate__fadeOutLeft"),setTimeout(()=>{this.sliceService.increaseS()},600)}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(c.P),a.Jb(d),a.Jb(l.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-dog"]],inputs:{id:"id",name:"name",sex:"sex",age:"age",size:"size",desc:"desc",img:"img"},decls:19,vars:4,consts:[["fixed",""],["size","12","size-md","9","size-lg","6"],["id","card",1,"animate__animated","animate__fadeInRight"],[3,"src"],["color","success","slot","start",3,"click"],["src","assets/icon/bone.png"],["shape","round","size","small","color","secondary",3,"click"],["slot","icon-only","name","add-circle-outline","icon","add-circle-outline"],["color","danger","slot","end",3,"click"],["src","assets/icon/poo.png"]],template:function(e,t){1&e&&(a.Mb(0,"ion-grid",0),a.Mb(1,"ion-row"),a.Mb(2,"ion-col",1),a.Mb(3,"ion-card",2),a.Kb(4,"ion-img",3),a.Mb(5,"ion-card-header"),a.Mb(6,"ion-card-title"),a.lc(7),a.Lb(),a.Lb(),a.Mb(8,"ion-card-content"),a.Mb(9,"p"),a.lc(10),a.Lb(),a.Kb(11,"br"),a.Mb(12,"ion-buttons"),a.Mb(13,"ion-fab-button",4),a.Ub("click",function(e){return t.like(e)}),a.Kb(14,"img",5),a.Lb(),a.Mb(15,"ion-button",6),a.Ub("click",function(){return t.presentModal()}),a.Kb(16,"ion-icon",7),a.Lb(),a.Mb(17,"ion-fab-button",8),a.Ub("click",function(e){return t.dislike(e)}),a.Kb(18,"img",9),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&e&&(a.zb(4),a.dc("src",t.img),a.zb(3),a.oc("",t.name,", ",t.age," a\xf1os"),a.zb(3),a.mc(t.desc))},directives:[c.q,c.D,c.m,c.i,c.t,c.k,c.l,c.j,c.h,c.o,c.g,c.s],styles:["ion-fab-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75%}ion-buttons[_ngcontent-%COMP%]{justify-content:space-around}"]}),e})();function g(e,t){if(1&e&&a.Kb(0,"app-dog",1),2&e){const e=t.$implicit;a.dc("id",e._id),a.dc("name",e.name),a.dc("sex",e.sex),a.dc("size",e.size),a.dc("age",e.age),a.dc("desc",e.desc),a.ec("img","https://badoog-server.herokuapp.com/user/imagen/",e._id,"/",e._id,".jpg")}}const m=[{path:"",component:(()=>{class e{constructor(e,t){this.sliceService=e,this.userService=t,this.dogs=[],this.start=this.sliceService.getStart()}ionViewWillEnter(){return Object(r.a)(this,void 0,void 0,function*(){try{yield this.userService.getFilters(),this.dogs=[]}catch(e){console.error(e)}this.userService.getUsers().subscribe(e=>{this.dogs.push(...e.users)}),console.log(this.dogs)})}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(d),a.Jb(l.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-card"]],decls:7,vars:5,consts:[[3,"id","name","sex","size","age","desc","img",4,"ngFor","ngForOf"],[3,"id","name","sex","size","age","desc","img"]],template:function(e,t){1&e&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-title"),a.lc(3,"Badoog"),a.Lb(),a.Lb(),a.Lb(),a.Mb(4,"ion-content"),a.kc(5,g,1,8,"app-dog",0),a.Xb(6,"slice"),a.Lb()),2&e&&(a.zb(5),a.cc("ngForOf",a.Zb(6,1,t.dogs,t.sliceService.getStart(),t.sliceService.getEnd())))},directives:[c.r,c.M,c.K,c.n,s.i,u],pipes:[s.m],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({imports:[[o.i.forChild(m)],o.i]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({imports:[[s.c,n.a,c.N,h]]}),e})()}}]);