(function(t){function e(e){for(var s,l,n=e[0],o=e[1],c=e[2],d=0,p=[];d<n.length;d++)l=n[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var o=a[n];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},r={app:0},i=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"05ca":function(t,e,a){},"1a12":function(t,e,a){},"22b7":function(t,e,a){},5394:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[a("div",{staticClass:"d-flex align-items-center"},[a("i",{staticClass:"fas fa-box-open fa-2x text-success"}),a("router-link",{staticClass:"navbar-brand mb-1 ml-1 text-success",attrs:{to:{name:"home"}}},[a("span",{staticClass:"text-large"},[t._v("Keepr")])])],1),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"dashboard"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-primary",on:{click:t.login}},[t._v("Login")])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("bc3a"),c=a.n(o);c.a.create({baseURL:"https://localhost:5001",withCredentials:!0});var u={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},d=u,p=(a("5dfc"),a("2877")),m=Object(p["a"])(d,l,n,!1,null,null,null),v=m.exports,h=a("335d"),f={name:"App",async beforeCreate(){await Object(h["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer)},components:{Navbar:v}},b=f,g=(a("5c0b"),Object(p["a"])(b,r,i,!1,null,null,null)),_=g.exports,C=a("8c4f"),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid"},[a("div",{staticClass:"row mx-1 my-2"},t._l(t.keeps,(function(t){return a("Keep",{key:t.id,attrs:{keepData:t}})})),1)])},w=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-3 my-2"},[a("div",{staticClass:"keep card text-center"},[a("img",{staticClass:"card-img",attrs:{src:t.keepData.img,alt:""}}),a("div",{staticClass:"card-img-overlay"},[a("div",{staticClass:"row justify-content-center mx-0 px-0"},[a("AddToVault",{staticClass:"addToVault",attrs:{keepData:t.keepData}})],1),a("div",{staticClass:"row dataRow"},[a("span",{staticClass:"p-2"},[a("i",{staticClass:"fas fa-box-open text-success"}),t._v(" "+t._s(t.keepData.keeps)+" "),a("i",{staticClass:"fas fa-eye text-primary pl-1"}),t._v(" "+t._s(t.keepData.views)+" "),a("i",{staticClass:"fas fa-share-square text-warning pl-1"}),t._v(" "+t._s(t.keepData.shares)+" ")])])])]),a("div",{staticClass:"p-2 text-center"},[a("h5",{staticClass:"card-subtitle pb-1"},[t._v(t._s(t.keepData.name))]),a("h6",{staticClass:"card-subtitle text-muted pb-1"},[t._v(t._s(t.keepData.description))]),a("button",{staticClass:"btn btn-sm btn-primary mr-1",attrs:{"data-toggle":"modal","data-target":"#viewKeepModal"},on:{click:function(e){return t.setActive()}}},[a("i",{staticClass:"fas fa-eye"})]),t._m(0),t.keepData.isPrivate?a("button",{staticClass:"btn btn-sm btn-danger ml-1",on:{click:function(e){return t.deletePrompt()}}},[a("i",{staticClass:"fas fa-trash-alt"})]):t._e()]),a("SmallModal",{attrs:{title:t.keep.name,id:"viewKeepModal"}},[a("KeepDetails")],1)],1)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-sm btn-warning ml-1"},[a("i",{staticClass:"fas fa-share-square"})])}],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"largeModal modal"},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header bg-light"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.title))]),t._m(0)]),a("div",{staticClass:"modal-body"},[t._t("default")],2),t._m(1)])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close text-danger",attrs:{type:"button",id:"close-btn","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer mt-3 bg-light"},[a("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],D={name:"largeModal",props:["title"],data(){return{}},computed:{},methods:{},components:{}},x=D,P=Object(p["a"])(x,k,$,!1,null,"8d70250a",null),O=P.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"smallModal modal"},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.title))]),t._m(0)]),a("div",{staticClass:"modal-body"},[t._t("default")],2),t._m(1)])])])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close text-danger",attrs:{type:"button",id:"close-btn","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],E={name:"smallModal",props:["title"],data(){return{}},computed:{},methods:{},components:{}},T=E,A=Object(p["a"])(T,M,j,!1,null,"70efcfb6",null),N=A.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keepDetails container-fluid"},[a("div",{staticClass:"row flex-column align-items-center"},[a("div",[a("img",{staticClass:"img-fluid",attrs:{src:t.keep.img,alt:""}})]),a("p",[t._v(t._s(t.keep.description))]),t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.deletePrompt()}}},[t._v("Delete Keep")]):t._e()])])},U=[],S={name:"keepDetails",data(){return{}},computed:{keep(){return this.$store.state.keeps.activeKeep}},methods:{deletePrompt(){let t=confirm("Are you sure you want to delete?\nThis Keep cannot be recovered");1==t&&this.deleteKeep()},deleteKeep(){this.$store.dispatch("deleteKeep",{keepId:this.keep.id,user:this.$auth.user})}},components:{}},L=S,B=Object(p["a"])(L,I,U,!1,null,"61218579",null),J=B.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addToVault"},[a("div",{staticClass:"input-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("Select a Vault")]),t._l(t.vaults,(function(e){return a("VaultTarget",{key:e.id,attrs:{vaultData:e,keepData:t.keepData}})}))],2),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-success",on:{click:function(e){return t.addToVault()}}},[a("i",{staticClass:"fas fa-box-open"})])])])])},q=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("option",{domProps:{value:t.vaultData.id}},[t._v(t._s(t.vaultData.name))])},W=[],Z={name:"vaultTarget",props:["vaultData","keepData"],data(){return{newVaultKeep:{}}},computed:{keep(){return this.$store.state.keeps.activeKeep}},methods:{createVaultKeep(){this.newVaultKeep.vaultId=this.vaultData.id,this.newVaultKeep.keepId=this.keep.id,this.newVaultKeep.user=this.$auth.user,this.$store.dispatch("createVaultKeep",this.newVaultKeep)}},components:{}},F=Z,H=Object(p["a"])(F,z,W,!1,null,"1d549bb4",null),Y=H.exports,G={name:"addToVault",props:["keepData"],data(){return{selected:"Select a Vault",newVaultKeep:{}}},computed:{vaults(){return this.$store.state.vaults.userVaults}},methods:{addToVault(){this.newVaultKeep.vaultId=this.selected,this.newVaultKeep.keepId=this.keepData.id,this.newVaultKeep.user=this.$auth.user,this.$store.dispatch("createVaultKeep",this.newVaultKeep),this.keepData.keeps++,this.$store.dispatch("updateKeep",{id:this.keepData.id,keepToBeUpdated:this.keepData,user:this.$auth.user}),alert("Added to vault!")}},components:{VaultTarget:Y}},Q=G,X=(a("cc0a"),Object(p["a"])(Q,R,q,!1,null,"5d177970",null)),tt=X.exports,et={name:"keep",props:["keepData"],data(){return{}},computed:{keep(){return this.$store.state.keeps.activeKeep}},methods:{setActive(){this.$store.commit("setActiveKeep",this.keepData),this.keepData.views++,this.$store.dispatch("updateKeep",{id:this.keepData.id,keepToBeUpdated:this.keepData,user:this.$auth.user})},deletePrompt(){let t=confirm("Are you sure you want to delete?\nThis Keep cannot be recovered");1==t&&this.deleteKeep()},deleteKeep(){this.$store.dispatch("deleteKeep",{keepId:this.keepData.id,user:this.$auth.user})}},components:{LargeModal:O,SmallModal:N,KeepDetails:J,AddToVault:tt}},at=et,st=(a("6598"),Object(p["a"])(at,y,V,!1,null,"4bf9f460",null)),rt=st.exports,it={name:"home",mounted(){this.$store.dispatch("getKeeps")},computed:{user(){return this.$store.state.user},keeps(){return this.$store.state.keeps.publicKeeps}},methods:{logout(){this.$store.dispatch("logout")}},components:{Keep:rt}},lt=it,nt=Object(p["a"])(lt,K,w,!1,null,null,null),ot=nt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center text-primary"},[a("h1",[t._v("Welcome back "+t._s(t.user.name))]),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"button","data-toggle":"modal","data-target":"#createKeepModal"}},[t._v("Add a Keep")]),a("button",{staticClass:"btn btn-outline-info",attrs:{type:"button","data-toggle":"modal","data-target":"#createVaultModal"}},[t._v("Create a Vault")])]),a("LargeModal",{attrs:{title:"Create a Keep",id:"createKeepModal"}},[a("CreateKeep")],1),a("LargeModal",{attrs:{title:"Create a Vault",id:"createVaultModal"}},[a("CreateVault")],1)],1),a("div",{staticClass:"row"},[t._m(0),t._l(t.userVaults,(function(t){return a("Vault",{key:t.id,attrs:{vaultData:t}})}))],2),t._m(1),a("div",{staticClass:"row"},t._l(t.userKeeps,(function(t){return a("Keep",{key:t.id,attrs:{keepData:t}})})),1)])},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("h2",[t._v("Vaults:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h2",[t._v("Keeps:")])])])}],dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createKeep"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.name,expression:"newKeep.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Please enter a Name..."},domProps:{value:t.newKeep.name},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.description,expression:"newKeep.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:"Please enter a Description..."},domProps:{value:t.newKeep.description},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"img"}},[t._v("Image URL")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.img,expression:"newKeep.img"}],staticClass:"form-control",attrs:{type:"text",name:"img",placeholder:"Please enter an Image URL.."},domProps:{value:t.newKeep.img},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"img",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"private"},on:{click:function(e){return t.togglePrivate()}}}),a("label",{staticClass:"form-check-label",attrs:{for:"private"}},[t._v("Private?")])])]),a("button",{attrs:{type:"submit","data-dismiss":"modal"},on:{click:function(e){return t.createNewKeep()}}},[t._v("Post Keep")])])])},pt=[],mt={name:"createKeep",data(){return{isPrivate:!1,newKeep:{}}},mounted(){},computed:{},methods:{togglePrivate(){this.isPrivate?this.isPrivate=!1:this.isPrivate=!0},createNewKeep(){this.newKeep.isPrivate=this.isPrivate,this.$store.dispatch("createKeep",{newKeep:this.newKeep,user:this.$auth.user})}},components:{}},vt=mt,ht=Object(p["a"])(vt,dt,pt,!1,null,"e1a016a0",null),ft=ht.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createVault"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.name,expression:"newVault.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Please enter a Name..."},domProps:{value:t.newVault.name},on:{input:function(e){e.target.composing||t.$set(t.newVault,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.description,expression:"newVault.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:"Please enter a Description..."},domProps:{value:t.newVault.description},on:{input:function(e){e.target.composing||t.$set(t.newVault,"description",e.target.value)}}})]),a("button",{attrs:{type:"submit","data-dismiss":"modal"},on:{click:function(e){return t.createNewVault()}}},[t._v("Create Vault")])])])},gt=[],_t={name:"createVault",data(){return{newVault:{}}},mounted(){},computed:{},methods:{createNewVault(){this.$store.dispatch("createVault",{newVault:this.newVault,user:this.$auth.user})}},components:{}},Ct=_t,Kt=Object(p["a"])(Ct,bt,gt,!1,null,"5fd94dfa",null),wt=Kt.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault col-md-3 my-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.vaultData.name))]),a("h6",{staticClass:"card-subtitle"},[t._v(t._s(t.vaultData.description))]),a("div",{staticClass:"row mt-5 justify-content-center"},[a("button",{staticClass:"btn btn-sm btn-primary",attrs:{"data-toggle":"modal","data-target":"#viewVaultModal"},on:{click:function(e){return t.viewDetails()}}},[t._v("View")]),a("button",{staticClass:"btn btn-sm btn-danger ml-1",on:{click:function(e){return t.deletePrompt()}}},[t._v("Delete")])])])]),a("LargeModal",{attrs:{title:t.vault.name,id:"viewVaultModal"}},[a("VaultDetails")],1)],1)},Vt=[],kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vaultDetails container-fluid"},[a("div",{staticClass:"row justify-content-between mt-0 align-items-center"},[a("p",{staticClass:"align-self-start ml-1"},[t._v(t._s(t.vault.description))]),a("button",{staticClass:"btn btn-sm btn-danger",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.deletePrompt()}}},[t._v("Delete Vault")])]),a("div",{staticClass:"row"},t._l(t.vaultKeeps,(function(t){return a("VaultKeep",{key:t.id,attrs:{vaultKeepData:t}})})),1)])},$t=[],Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-3 my-2"},[a("div",{staticClass:"vaultKeep card text-center"},[a("img",{staticClass:"card-img",attrs:{src:t.vaultKeepData.img,alt:""}}),a("div",{staticClass:"card-img-overlay"},[a("span",{staticClass:"dataRow p-2"},[a("i",{staticClass:"fas fa-box-open text-success"}),t._v(" "+t._s(t.vaultKeepData.keeps)+" "),a("i",{staticClass:"fas fa-eye text-primary"}),t._v(" "+t._s(t.vaultKeepData.views)+" "),a("i",{staticClass:"fas fa-share-square text-warning"}),t._v(" "+t._s(t.vaultKeepData.shares)+" ")])]),a("div",{staticClass:"card-footer"},[t._m(0),t.vaultKeepData.isPrivate?a("button",{staticClass:"btn btn-sm btn-danger ml-1",on:{click:function(e){return t.deletePrompt()}}},[a("i",{staticClass:"fas fa-trash-alt"})]):t._e()])])])},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-sm btn-warning ml-1"},[t._v(" Share "),a("i",{staticClass:"fas fa-share-square"})])}],Pt={name:"vaultKeep",props:["vaultKeepData"],data(){return{}},computed:{vault(){return this.$store.state.vaults.activeVault}},methods:{deletePrompt(){let t=confirm("Are you sure you want to delete?\nYou will need to add this Keep to your Vault again");1==t&&this.deleteVaultKeep()},deleteVaultKeep(){this.$store.dispatch("deleteVaultKeep",{vaultKeepId:this.vaultKeepData.vaultKeepId,user:this.$auth.user,vaultId:this.vault.id})},setActive(){this.$store.commit("setActiveKeep",this.vaultKeepData),this.vaultKeepData.views++,this.$store.dispatch("updateKeep",{id:this.vaultKeepData.id,keepToBeUpdated:this.vaultKeepData,user:this.$auth.user})}},components:{SmallModal:N,LargeModal:O,KeepDetails:J}},Ot=Pt,Mt=(a("e679"),Object(p["a"])(Ot,Dt,xt,!1,null,"29acddd3",null)),jt=Mt.exports,Et={name:"vaultDetails",data(){return{}},computed:{vault(){return this.$store.state.vaults.activeVault},vaultKeeps(){return this.$store.state.vaults.activeVaultKeeps}},methods:{deletePrompt(){let t=confirm("Are you sure you want to delete?\nThis Vault cannot be recovered");1==t&&this.deleteVault()},deleteVault(){this.$store.dispatch("deleteVault",{vaultId:this.vault.id,user:this.$auth.user})}},components:{VaultKeep:jt}},Tt=Et,At=Object(p["a"])(Tt,kt,$t,!1,null,"34f8f642",null),Nt=At.exports,It={name:"vault",props:["vaultData"],data(){return{}},computed:{vault(){return this.$store.state.vaults.activeVault}},methods:{viewDetails(){this.$store.commit("setActiveVault",this.vaultData),this.$store.dispatch("getKeepsByVaultId",this.vaultData.id)},deletePrompt(){let t=confirm("Are you sure you want to delete?\nThis Vault cannot be recovered");1==t&&this.deleteVault()},deleteVault(){this.$store.dispatch("deleteVault",{vaultId:this.vaultData.id,user:this.$auth.user})}},components:{LargeModal:O,SmallModal:N,VaultDetails:Nt}},Ut=It,St=Object(p["a"])(Ut,yt,Vt,!1,null,"f86e980e",null),Lt=St.exports,Bt={mounted(){this.$store.dispatch("getUserKeeps",this.$auth.user),this.$store.dispatch("getUserVaults",this.$auth.user)},methods:{},computed:{user(){return this.$auth.user},userKeeps(){return this.$store.state.keeps.userKeeps},userVaults(){return this.$store.state.vaults.userVaults}},components:{LargeModal:O,SmallModal:N,CreateKeep:ft,CreateVault:wt,Keep:rt,Vault:Lt}},Jt=Bt,Rt=Object(p["a"])(Jt,ct,ut,!1,null,null,null),qt=Rt.exports;s["a"].use(C["a"]);var zt=new C["a"]({routes:[{path:"/",name:"home",component:ot},{path:"/dashboard",name:"dashboard",component:qt,beforeEnter:h["b"]}]}),Wt=a("2f62");let Zt=location.host.includes("localhost")?"https://localhost:5001/":"/";const Ft=c.a.create({baseURL:Zt+"api/",timeout:3e3,withCredentials:!0}),Ht={state:{publicKeeps:[],userKeeps:[],activeKeep:{}},mutations:{setKeeps(t,e){t.publicKeeps=e},setUserKeeps(t,e){t.userKeeps=e},setActiveKeep(t,e){t.activeKeep=e}},actions:{async getKeeps({commit:t,dispatch:e}){try{let e=await Ft.get("keeps");t("setKeeps",e.data)}catch(a){console.error(a)}},async getUserKeeps({commit:t,dispatch:e},a){try{let e=await Ft.get("keeps/user",a);t("setUserKeeps",e.data)}catch(s){console.error(s)}},async createKeep({commit:t,dispatch:e},a){try{await Ft.post("keeps",a.newKeep),e("getKeeps"),e("getUserKeeps",a.user)}catch(s){alert(JSON.stringify(s.response))}},async updateKeep({commit:t,dispatch:e},a){try{await Ft.put("keeps/"+a.id,a.keepToBeUpdated),e("getKeeps"),e("getUserKeeps",a.user)}catch(s){alert(JSON.stringify(s.response))}},async deleteKeep({dispatch:t},e){try{await Ft.delete("keeps/"+e.keepId),t("getUserKeeps",e.user)}catch(a){alert(JSON.stringify(a.response.data))}}}},Yt={state:{userVaults:[],activeVault:{},activeVaultKeeps:[]},mutations:{setUserVaults(t,e){t.userVaults=e},setActiveVault(t,e){t.activeVault=e},setActiveVaultKeeps(t,e){t.activeVaultKeeps=e}},actions:{async getUserVaults({commit:t,dispatch:e},a){try{let e=await Ft.get("vaults/user",a);t("setUserVaults",e.data)}catch(s){alert(JSON.stringify(s.response.data))}},async getKeepsByVaultId({commit:t,dispatch:e},a){try{let e=await Ft.get(`vaults/${a}/keeps`);t("setActiveVaultKeeps",e.data)}catch(s){alert(JSON.stringify(s.response.data))}},async createVault({commit:t,dispatch:e},a){try{await Ft.post("vaults",a.newVault),e("getUserVaults",a.user)}catch(s){alert(JSON.stringify(s.response.data))}},async deleteVault({dispatch:t},e){try{await Ft.delete("vaults/"+e.vaultId),t("getUserVaults",e.user)}catch(a){alert(JSON.stringify(a.response.data))}}}},Gt={state:{},mutations:{},actions:{async createVaultKeep({commit:t,dispatch:e},a){try{await Ft.post("vaultkeeps",a)}catch(s){console.error(s)}},async deleteVaultKeep({dispatch:t},e){try{await Ft.delete("vaultkeeps/"+e.vaultKeepId),t("getKeepsByVaultId",e.vaultId)}catch(a){alert(JSON.stringify(a.response.data))}}}};s["a"].use(Wt["a"]);var Qt=new Wt["a"].Store({modules:{keeps:Ht,vaults:Yt,vaultKeeps:Gt},state:{},mutations:{},actions:{setBearer({},t){Ft.defaults.headers.authorization=t},resetBearer(){Ft.defaults.headers.authorization=""}}}),Xt=a("5886");const te="dev-l0nrcp1d.auth0.com",ee="https://keepr.com",ae="s8MIML3Ir241bZv6fFZ7mtM0a15zMrva";s["a"].use(h["a"],{domain:te,clientId:ae,audience:ee,onRedirectCallback:t=>{zt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),s["a"].use(Xt["a"]),new s["a"]({router:zt,store:Qt,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"5dfc":function(t,e,a){"use strict";var s=a("1a12"),r=a.n(s);r.a},6598:function(t,e,a){"use strict";var s=a("5394"),r=a.n(s);r.a},"9c0c":function(t,e,a){},cc0a:function(t,e,a){"use strict";var s=a("05ca"),r=a.n(s);r.a},e679:function(t,e,a){"use strict";var s=a("22b7"),r=a.n(s);r.a}});