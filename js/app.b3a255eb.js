(function(e){function t(t){for(var i,s,r=t[0],c=t[1],l=t[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09d1":function(e,t,n){e.exports=n.p+"img/github-icon.ab420948.svg"},"0e03":function(e,t,n){e.exports=n.p+"img/TryNotToLaugh-Logo.333f5684.png"},1:function(e,t){},"10a8":function(e,t,n){"use strict";var i=n("6fba"),a=n.n(i);a.a},"115d":function(e,t,n){},1564:function(e,t,n){"use strict";var i=n("ba47"),a=n.n(i);a.a},"1fdc":function(e,t,n){"use strict";var i=n("427d"),a=n.n(i);a.a},2:function(e,t){},"252b":function(e,t,n){"use strict";var i=n("836a"),a=n.n(i);a.a},"2cd8":function(e,t,n){},3:function(e,t){},"31c9":function(e,t,n){},3216:function(e,t,n){"use strict";var i=n("9b56"),a=n.n(i);a.a},"321d":function(e,t,n){},"37e7":function(e,t,n){"use strict";var i=n("321d"),a=n.n(i);a.a},"3dc9":function(e,t,n){"use strict";var i=n("6f9e"),a=n.n(i);a.a},4:function(e,t){},4227:function(e,t,n){"use strict";var i=n("c4b4"),a=n.n(i);a.a},"427d":function(e,t,n){},4671:function(e,t,n){e.exports=n.p+"img/spinner2.dd66add6.svg"},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=n("8c4f"),o=n("caf9"),s=n("85fe"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",[i("NavBar"),e.BlockstackUtils.pendingAuth?e._e():i("router-view",{staticClass:"view"}),e.BlockstackUtils.pendingAuth?i("div",{staticClass:"centered authentication-in-progress-title"},[i("img",{attrs:{id:"svg-loader",src:n("4671")}}),i("h2",[e._v("\n        Authentication in progress...\n      ")])]):e._e()],1)])},c=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"navbar"}},[i("header",{staticClass:"mdc-top-app-bar mdc-top-app-bar--dense"},[i("div",{staticClass:"mdc-top-app-bar__row"},[i("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},[e.State.path.includes("level/")?e._e():i("a",{attrs:{href:"#/"}},[i("img",{attrs:{id:"navbar-logo",src:n("0e03")}})]),e._m(0),e.State.path.includes("level/")?i("a",{staticClass:"mdc-button mdc-button--outlined",attrs:{href:"javascript:history.back()"}},[i("i",{staticClass:"material-icons back-icon"},[e._v("keyboard_backspace")]),e._v("\n          BACK\n        ")]):e._e()]),i("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end",attrs:{role:"toolbar"}},[i("div",{staticClass:"navbar-el"},[i("a",{staticClass:"mdc-icon-button material-icons white add-photo-icon",attrs:{id:"night-mode-icon"},on:{click:function(t){return e.toggleDarkMode()}}},[e._v("\n            brightness_4\n          ")])]),i("div",{staticClass:"navbar-el"},[i("div",{staticClass:"account-circle mdc-menu-surface--anchor",on:{click:function(t){return e.openMenu()}}},[e.signedIn&&e.userAvatar?i("img",{attrs:{id:"avatar-image",src:e.userAvatar}}):e._e(),e.signedIn&&!e.userAvatar?i("div",{staticClass:"username-letter"},[e._v("\n              "+e._s(e.usernameFirstLetter)+"\n            ")]):e._e(),i("Menu",{attrs:{onSettingsClicked:e.openSettings,onLogOutClicked:e.logOut}})],1),e.signedIn?e._e():i("button",{staticClass:"mdc-button mdc-button--raised sign-in-button",on:{click:function(t){return e.openSignInModal()}}},[i("div",{staticClass:"mdc-button__ripple"}),e._v("\n              SIGN IN\n          ")])])])])]),i("SignInModal",{attrs:{onLogInButtonClicked:e.logIn}})],1)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"normal-text",attrs:{href:"#/"}},[n("span",{staticClass:"mdc-top-app-bar__title white"})])}],d=(n("c5f6"),n("96cf"),n("3b8d")),p=n("e4d3"),v=n.n(p),m={levels:[{title:"Level 1",img:"levels/level1.png",videoId:"DODLEX4zzLQ"},{title:"Level 2",img:"levels/level2.png",videoId:"MRKKGwE5N58"},{title:"Level 3",img:"levels/level3.png",videoId:"2aK8hy50fS4"},{title:"Level 4",img:"levels/level4.png",videoId:"mkjcN18edeo"},{title:"Level 5",img:"levels/level5.png",videoId:"FoiXcLC1yB0"},{title:"Level 6",img:"levels/level6.png",videoId:"bzZEH_5OuIs"},{title:"Level 7",img:"levels/level7.png",videoId:"XTHr4kjVj2o"},{title:"Level 8",img:"levels/level8.png",videoId:"2aK8hy50fS4"},{title:"Level 9",img:"levels/level9.png",videoId:"A6hrw6KGdtM"}]},f="TNTL_scores.json",g=new v.a.AppConfig(["store_write","publish_data","email"]),h=new v.a.UserSession({appConfig:g}),b={pendingAuth:!1,isUserSignedIn:function(){return h.isUserSignedIn()},getUserSession:function(){return h},getUserName:function(){return h.loadUserData().username},getUserAvatar:function(){if(h.isUserSignedIn()){var e=h.loadUserData();if(e.profile&&e.profile.image&&e.profile.image[0])return e.profile.image[0].contentUrl}return null},getAllScores:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!h.isUserSignedIn()){e.next=11;break}return e.next=3,h.getFile(f,{decrypt:!0});case 3:if(t=e.sent,t){e.next=8;break}return e.abrupt("return",{});case 8:return e.abrupt("return",JSON.parse(t));case 9:e.next=12;break;case 11:throw new Error("Cant get scores, user is not signed in");case 12:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),updateScoresInBlockstack:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!h.isUserSignedIn()){e.next=6;break}return console.log("Updating scores in Blockstack: "+JSON.stringify(t)),e.next=4,h.putFile(f,JSON.stringify(t),{encrypt:!0});case 4:e.next=7;break;case 6:throw new Error("Cant update scores, user is not signed in");case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),checkAuth:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!h.isSignInPending()){e.next=13;break}return e.prev=1,i["a"].set(this,"pendingAuth",!0),e.next=5,h.handlePendingSignIn();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),console.error(e.t0);case 10:return e.prev=10,localStorage.locationBeforeRedirection?(t=localStorage.locationBeforeRedirection,localStorage.removeItem("locationBeforeRedirection"),location.href=t):i["a"].set(this,"pendingAuth",!1),e.finish(10);case 13:h.isUserSignedIn()&&this.syncGameProgressWithLocalStorageAndGaia();case 14:case"end":return e.stop()}}),e,this,[[1,7,10,13]])})));function t(){return e.apply(this,arguments)}return t}(),signIn:function(){h.redirectToSignIn()},signOut:function(){h.signUserOut(),location.reload()},saveLevelAsCompleted:function(e){console.log("SETTING COMPLETION"),console.log(e),(!localStorage.lastLevelCompletedTNTL||Number(localStorage.lastLevelCompletedTNTL)<e)&&(console.log("SETTING COMPLETION222"),localStorage.lastLevelCompletedTNTL=e),this.syncGameProgressWithLocalStorageAndGaia()},syncGameProgressWithLocalStorageAndGaia:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n,i,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isUserSignedIn()){e.next=12;break}return console.log("SYNCING GAME PROGRESS WITH LOCAL STORAGE AND GAIA - STARTED"),e.next=4,this.getAllScores();case 4:for(t=e.sent,n={},i=0;i<m.levels.length;i++)console.log("SYNCING GAME PROGRESS FOR LEVEL: "+i),a=0,t&&t[i]&&(a=Number(t[i])),o=0,localStorage["TNTLScoresForLevel"+i]&&(o=localStorage["TNTLScoresForLevel"+i]),s=Math.max(a,o),isNaN(s)&&(s=0),n[i]=s.toFixed(2),localStorage["TNTLScoresForLevel"+i]=s;return e.next=9,this.updateScoresInBlockstack(n);case 9:console.log("SYNCING GAME PROGRESS WITH LOCAL STORAGE AND GAIA - COMPLETED"),e.next=13;break;case 12:console.log("USER IS NOT SIGNED IN TO BLOCKSTACK: SYNCING SKIPPED");case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mdc-menu mdc-menu-surface"},[n("ul",{staticClass:"mdc-list",attrs:{role:"menu","aria-hidden":"true","aria-orientation":"vertical",tabindex:"-1"}},[n("li",{staticClass:"mdc-list-item",attrs:{role:"menuitem"},on:{click:function(t){return e.onLogOutClicked()}}},[e._m(0)])])])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mdc-list-item__text black-in-dark-mode"},[n("i",{staticClass:"material-icons black-in-dark-mode"},[e._v("\n          directions_walk\n        ")]),e._v("\n        Log out\n      ")])}],C={props:{onSettingsClicked:Function,onLogOutClicked:Function}},S=C,k=n("2877"),w=Object(k["a"])(S,_,y,!1,null,null,null),L=w.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Dialog",{attrs:{title:"Log in to save your progress in Blockstack"}},[n("p",{staticClass:"blockstack-description"},[e._v("\n    TryNotToLaugh.online is built using\n      "),n("a",{attrs:{target:"_blank",href:"https://blockstack.org/try-blockstack"}},[e._v("Blockstack")]),e._v("\n    infrastructure,\n    allowing us to provide decentralized encrypted storage.\n  ")]),n("p",{staticClass:"blockstack-description"},[e._v("\n    Blockstack ID provides user-controlled login and storage\n    that enable you to take back control of your identity and data.\n  ")]),n("button",{staticClass:"mdc-button mdc-button--raised continue-with-blockstack-button",attrs:{id:"log-in-to-blockstack-button"},on:{click:function(t){return e.onLogInButtonClicked()}}},[n("div",{staticClass:"mdc-button__ripple"}),e._v("\n      LOG IN TO BLOCKSTACK\n  ")])])},T=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mdc-dialog",attrs:{role:"alertdialog","aria-modal":"true","aria-labelledby":"my-dialog-title","aria-describedby":"my-dialog-content"}},[n("div",{staticClass:"mdc-dialog__container"},[n("div",{staticClass:"mdc-dialog__surface"},[n("h2",{staticClass:"mdc-dialog__title",attrs:{id:"my-dialog-title"}},[e._v("\n        "+e._s(e.title)+"\n      ")]),n("div",{staticClass:"mdc-dialog__content",attrs:{id:"my-dialog-content"}},[e._t("default")],2)])]),n("div",{staticClass:"mdc-dialog__scrim"})])},I=[],O={name:"Dialog",data:function(){return{}},props:{title:String},computed:{}},N=O,B=(n("1fdc"),Object(k["a"])(N,x,I,!1,null,"6dab4c7c",null)),j=B.exports,A={props:{onLogInButtonClicked:Function},components:{Dialog:j}},F=A,R=(n("d4ca"),Object(k["a"])(F,E,T,!1,null,"48513c4c",null)),D=R.exports,M=n("2ef0"),U=n.n(M),P=(n("6b54"),{generateId:function(){return Date.now().toString()},capitalizeFirst:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},dictToListWithIds:function(e){var t=[];for(var n in e)t.push(Object.assign({id:n},e[n]));return t}}),G={path:"",contacts:{},debts:{},syncStatus:"Synced",liveEmotionsEnabled:!1,selectedTag:"",emotionDetectionCB:null,loadStateFromBlockchain:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Loading state from blockchain"),e.next=3,b.getContacts();case 3:return t=e.sent,e.next=6,b.getDebts();case 6:n=e.sent,t&&i["a"].set(this,"contacts",t),n&&i["a"].set(this,"debts",n);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateStateToBlockchain:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,i,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.updateContacts,i=void 0!==n&&n,a=t.updateDebts,o=void 0!==a&&a,console.log("Updating blockchain state with contacts: ".concat(i,", with debts: ").concat(o)),e.prev=2,!i){e.next=8;break}return this.syncStatus="Syncing contacts",this.updatingStateInBlockchain=!0,e.next=8,b.saveContacts(this.contacts);case 8:if(!o){e.next=13;break}return this.syncStatus="Syncing debts",this.updatingStateInBlockchain=!0,e.next=13,b.saveDebts(this.debts);case 13:this.syncStatus="Synced",e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](2),console.error(e.t0),this.syncStatus="Syncing failed";case 20:case"end":return e.stop()}}),e,this,[[2,16]])})));function t(t){return e.apply(this,arguments)}return t}(),setEmotionsDetectionCB:function(e){i["a"].set(this,"emotionDetectionCB",e)},upsertContact:function(e){var t=this.defaultUpsert(e,"contacts","Contact");return this.updateStateToBlockchain({updateContacts:!0}),t},saveScoresForLevel:function(e,t){localStorage["TNTLScoresForLevel"+e]=t},removeContact:function(e){this.defaultRemove(e,"contacts","Contact"),this.updateStateToBlockchain({updateContacts:!0})},upsertDebt:function(e){e.amount=Number(e.amount);var t=this.defaultUpsert(e,"debts","Debt");return this.updateStateToBlockchain({updateDebts:!0}),t},removeDebt:function(e){this.defaultRemove(e,"debts","Debt"),this.updateStateToBlockchain({updateDebts:!0})},defaultUpsert:function(e,t,n){console.log("Updating ".concat(n)),console.log(e),e.id||(e.id=P.generateId());var a=U.a.clone(e);return i["a"].set(this[t],e.id,a),a},toggleLiveEmotions:function(){var e=this.liveEmotionsEnabled;i["a"].set(this,"liveEmotionsEnabled",!e)},selectTag:function(e){i["a"].set(this,"selectedTag",e)},setPath:function(e){i["a"].set(this,"path",e)}},$=G,z=n("704c"),V=n("0021"),K={name:"NavBar",data:function(){return{userAvatar:b.getUserAvatar(),signedIn:b.isUserSignedIn(),modalType:"",dialog:null,State:$,route:this.$router.currentRoute}},computed:{usernameFirstLetter:function(){var e=b.getUserName();return e?e[0].toUpperCase():""}},components:{Menu:L,SignInModal:D},methods:{toggleDarkMode:function(){var e=document.getElementsByTagName("body")[0];e.classList.toggle("dark-mode")},openSignInModal:function(){var e=document.querySelector(".mdc-dialog");this.dialog=z["a"].attachTo(e),this.modalType="signIn",this.dialog.open()},closeSignInModal:function(){this.dialog&&this.dialog.close()},openMenu:function(){var e=V["a"].attachTo(document.querySelector(".mdc-menu"));e.open=!e.open},openSettings:function(){},toggleLiveEmotions:function(){$.liveEmotionsEnabled||localStorage.liveEmotionExplanationShowed?$.toggleLiveEmotions():confirm("Live emotions is an innovative feature, which uses your web camera to analyze your emotions and calculate the time of being happy o blockgag. Note, that your video is private and we don't send it anywhere. Currently our algoithm can recognize happiness, sadness, surprise and anger")&&(localStorage.liveEmotionExplanationShowed=!0,$.toggleLiveEmotions())},logIn:function(){this.closeSignInModal(),window.localStorage.locationBeforeRedirection=location.href,window.toastr.success("Blockstack authentication started...","",{timeOut:"20000",closeButton:!1}),setTimeout((function(){b.signIn()}),200)},logOut:function(){b.signOut()}}},H=K,W=(n("ba40"),Object(k["a"])(H,l,u,!1,null,"707d73ae",null)),Y=W.exports;window.toastr.options={closeButton:!0,iconClass:"hidden"};var J={name:"app",created:function(){$.setPath(this.$router.currentRoute.fullPath)},data:function(){return{BlockstackUtils:b}},watch:{$route:function(e){$.setPath(e.fullPath)}},components:{NavBar:Y}},X=J,q=(n("60bc"),n("8a5f"),n("1564"),Object(k["a"])(X,r,c,!1,null,null,null)),Q=q.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Splash"),n("Features"),n("LiveEmotionsExplanation"),n("Footer")],1)},ee=[],te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{attrs:{id:"splash"}},[i("div",{attrs:{id:"splash-content"}},[i("img",{staticClass:"fade-in-element init-hidden",attrs:{id:"logo-on-splash",src:n("0e03")}}),e._m(0),i("p",{staticClass:"slide-down-element-500ms-delay init-hidden",attrs:{id:"subtitle"}},[e._v("Gain scores, compete with friends")]),e._m(1),i("div",{staticClass:"mousey",on:{click:function(t){return e.scrollToSection("features-section")}}},[i("div",{staticClass:"scroller"})])])])},ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"slide-down-element init-hidden",attrs:{id:"h1-title"}},[e._v("\n      Try not to laugh\n      "),n("br")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slide-down-element-1s-delay init-hidden",attrs:{id:"get-started-button-container"}},[n("a",{staticClass:"mdc-button mdc-button--raised",attrs:{href:"/#/levels/",id:"get-started-button"}},[n("div",{staticClass:"mdc-button__ripple"}),n("span",{staticClass:"mdc-button__label"},[e._v("\n          TRY THE GAME\n          ")])])])}];function ie(){}var ae={data:function(){return{}},mounted:function(){},created:function(){ie(),document.onscroll=function(){}},methods:{scrollToSection:function(e){var t=document.getElementById(e);t.scrollIntoView()}},components:{}},oe=ae,se=(n("252b"),Object(k["a"])(oe,te,ne,!1,null,"68323229",null)),re=se.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"features-section"}},[n("h2",[e._v("Why should I try it?")]),n("div",{staticClass:"mdc-layout-grid"},[n("div",{staticClass:"mdc-layout-grid__inner"},e._l(e.features,(function(e){return n("Feature",{key:e.title,attrs:{title:e.title,description:e.description,icon:e.icon}})})),1)])])},le=[],ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"}],staticClass:"mdc-layout-grid__cell feature-container init-hidden",class:{"slide-left-element":e.wasVisible}},[n("i",{staticClass:"material-icons"},[e._v(e._s(e.icon))]),n("h2",[e._v(e._s(e.title))]),n("p",{staticClass:"feature-description"},[e._v("\n    "+e._s(e.description)+"\n  ")])])},de=[],pe={data:function(){return{wasVisible:!1}},props:{title:String,description:String,icon:String},methods:{visibilityChanged:function(e){e&&(this.wasVisible=!0)}}},ve=pe,me=(n("a5da"),Object(k["a"])(ve,ue,de,!1,null,"75bf877e",null)),fe=me.exports,ge={data:function(){return{features:[{title:"Funny",description:"You'll watch funny videos and try not to laugh. The less you laugh - the more scores you gain",icon:"emoji_emotions"},{title:"AI powered",description:"AI will analyze your emotions through your webcam",icon:"memory"},{title:"Free",description:"It is absolutely free and ads free, thanks to Blockstack App mining program",icon:"monetization_on"},{title:"Decentralized",description:"It is a decentralized web game built on Blockstack",icon:"blur_on"},{title:"Open source",description:"All the code is published on GitHub so everyone can see it and contribute",icon:"public"},{title:"Secure",description:"All your private data, like analyzed emotions, preferences and progress, is safe and secure",icon:"security"}]}},components:{Feature:fe}},he=ge,be=(n("3216"),Object(k["a"])(he,ce,le,!1,null,"4bccd528",null)),_e=be.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"live-emotions-explanation"}},[n("div",{attrs:{id:"text-content"}},[e._m(0),n("p",{staticClass:"description"}),n("a",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.visibilityChanged,expression:"visibilityChanged"}],staticClass:"mdc-button mdc-button--raised init-hidden",class:{"fade-in-element":e.wasViewable},attrs:{href:"/#/levels/",id:"get-started-button"}},[n("div",{staticClass:"mdc-button__ripple"}),e._m(1)])])])},Ce=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("\n      \n      Don't laugh\n      "),n("br"),e._v("\n      Have fun\n      \n    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mdc-button__label"},[e._v("\n        PLAY\n        "),n("i",{staticClass:"material-icons"},[e._v("videogame_asset")])])}],Se=n("98c9");i["a"].use(Se["a"]);var ke,we,Le,Ee={data:function(){return{wasViewable:!1}},created:function(){},methods:{visibilityChanged:function(e){e&&(this.wasViewable=!0)}}},Te=Ee,xe=(n("9fc0"),Object(k["a"])(Te,ye,Ce,!1,null,"01c7f74d",null)),Ie=xe.exports,Oe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ne=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",[i("div",{attrs:{id:"gh-icon"}},[i("a",{attrs:{href:"https://github.com/hatskier/TryNotToLaugh.online",target:"_blank"}},[i("img",{attrs:{src:n("09d1")}})])]),i("p",[e._v("© 2020 TryNotToLaugh.online")])])}],Be={},je=Be,Ae=(n("7d4a"),Object(k["a"])(je,Oe,Ne,!1,null,"53ce173c",null)),Fe=Ae.exports,Re={name:"Home",data:function(){return{modalContent:"first"}},props:{text:Number,img:String},components:{Splash:re,Features:_e,LiveEmotionsExplanation:Ie,Footer:Fe},methods:{}},De=Re,Me=(n("37e7"),Object(k["a"])(De,Z,ee,!1,null,"c0b6832c",null)),Ue=Me.exports,Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-container mdc-layout-grid"},[n("h1",{staticClass:"init-hidden fade-in-element"},[e._v("Select level")]),n("h3",{staticClass:"total-scores-title init-hidden fade-in-element"},[e._v("Total:\n    "),n("i",{staticClass:"material-icons star"},[e._v("star")]),n("span",{staticClass:"level-scores-number"},[e._v("\n      "+e._s(e.getTotalScrores())+"\n    ")])]),n("div",{staticClass:"mdc-layout-grid__inner"},e._l(e.levels,(function(t,i){return n("div",{key:t.title,staticClass:"mdc-layout-grid__cell--span-3 init-hidden slide-down-element"},[n("div",{staticClass:"mdc-card",class:{"level-blocked":i>e.lastCompletedLevel+1,"level-completed":i<=e.lastCompletedLevel},on:{click:function(t){return e.goToLevel(i)}}},[n("div",{staticClass:"mdc-card__primary-action demo-card__primary-action",attrs:{tabindex:"0"}},[n("div",{staticClass:"mdc-card__media mdc-card__media--16-9 demo-card__media",style:{backgroundImage:"url('"+t.img+"')"}})]),n("h3",{staticClass:"level-title"},[e._v("\n          "+e._s(t.title)+"\n          ")]),n("span",{staticClass:"level-scores"},[n("i",{staticClass:"material-icons star"},[e._v("star")]),n("span",{staticClass:"level-scores-number"},[e._v("\n            "+e._s(e.getScoresForLevel(i))+"\n          ")])])])])})),0)])},Ge=[],$e={name:"Levels",mounted:function(){window.scrollTo(0,0)},data:function(){return{State:$,levels:m.levels}},props:{},methods:{goToLevel:function(e){e<=this.lastCompletedLevel+1&&(location.href="#/level/".concat(e))},getScoresForLevel:function(e){var t=localStorage["TNTLScoresForLevel"+e];return t?Number(t).toFixed(2):0},getTotalScrores:function(){for(var e=0,t=0;t<m.levels.length;t++)e+=Number(this.getScoresForLevel(t));return e.toFixed(2)}},components:{},computed:{lastCompletedLevel:function(){var e=Number(localStorage.lastLevelCompletedTNTL);return localStorage.lastLevelCompletedTNTL?e:-1}}},ze=$e,Ve=(n("3dc9"),Object(k["a"])(ze,Pe,Ge,!1,null,"758e804e",null)),Ke=Ve.exports,He=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"level-container"},[n("h1",{staticClass:"init-hidden slide-left-element"},[e._v(e._s(e.level.title))]),n("h3",{staticClass:"init-hidden slide-left-element"},[e._v("Level scores: "+e._s(e.levelScoresFormatted)+" ")]),n("h3",{staticClass:"init-hidden slide-left-element"},[e._v("Times smiling: "+e._s(e.laughingTimes))]),n("button",{staticClass:"mdc-button mdc-button--raised sign-in-button init-hidden slide-down-element",attrs:{id:"complete-level-button"},on:{click:function(t){return e.completeLevel()}}},[n("div",{staticClass:"mdc-button__ripple"}),e._v("\n      COMPLETE LEVEL\n  ")]),n("LiveEmotions",{attrs:{enabled:e.liveEmotionsEnabled}}),n("div",{staticClass:"video-player-container"},[n("youtube",{attrs:{id:"video-player","video-id":e.level.videoId,"player-vars":{rel:"0",allowfullscreen:"0",autoplay:"1"},host:"https://www.youtube-nocookie.com","player-width":800,"player-height":480},on:{ready:e.ready,ended:e.ended,playing:e.playing}})],1)],1)},We=[],Ye=n("7618"),Je=n("f6dd"),Xe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.enabled?i("div",{staticClass:"live-emotions-container "},[i("video",{staticClass:"mdc-elevation--z1",attrs:{id:"video",width:"200",height:"150",autoplay:"",muted:""},domProps:{muted:!0}}),e.enabled?i("span",{attrs:{id:"expression-emoji"}},[e._v("\n    "+e._s(e.expressionEmoji)+"\n  ")]):e._e(),e.enabled&&!e.ready?i("span",{attrs:{id:"expression-emoji"}},[i("img",{staticClass:"loader-img",attrs:{src:n("4671")}})]):e._e(),i("div",{staticClass:"mdc-elevation--z1",attrs:{id:"live-emotions-stats"}},[i("i",{staticClass:"material-icons centered",attrs:{id:"time-icon"}},[e._v("alarm")]),i("br"),i("h2",{staticClass:"centered"},[e._v("\n      "+e._s(e.happyTimeSeconds)+"\n    ")]),i("p",{staticClass:"centered",attrs:{id:"seconds-text"}},[e._v("seconds")]),i("p",{staticClass:"centered",attrs:{id:"happy-time-text"}},[e._v("Laughing time")])])]):e._e()},qe=[],Qe=(n("5df3"),n("ac6a"),n("ab39")),Ze=300,et=!1;function tt(e){return nt.apply(this,arguments)}function nt(){return nt=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,ke=document.getElementById("video"),e.next=4,ot();case 4:return e.next=6,navigator.mediaDevices.getUserMedia({video:!0,audio:!1});case 6:we=e.sent,ke=document.getElementById("video"),ke.srcObject=we,Le=setInterval(Object(d["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,rt();case 2:n=e.sent,t(n);case 4:case"end":return e.stop()}}),e)}))),Ze),et&&it(),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),window.toastr.error("Video initialization failed :("),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])}))),nt.apply(this,arguments)}function it(){return at.apply(this,arguments)}function at(){return at=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:we.getTracks().forEach((function(e){e.stop()})),clearInterval(Le);case 2:case"end":return e.stop()}}),e)}))),at.apply(this,arguments)}function ot(){return st.apply(this,arguments)}function st(){return st=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Loading ML models"),e.next=3,Promise.all([Qe["c"].tinyFaceDetector.loadFromUri("/MLModels"),Qe["c"].faceLandmark68Net.loadFromUri("/MLModels"),Qe["c"].faceRecognitionNet.loadFromUri("/MLModels"),Qe["c"].faceExpressionNet.loadFromUri("/MLModels")]);case 3:console.log("ML models loaded");case 4:case"end":return e.stop()}}),e)}))),st.apply(this,arguments)}function rt(){return ct.apply(this,arguments)}function ct(){return ct=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(Qe["b"])(ke,new Qe["a"]).withFaceLandmarks().withFaceExpressions();case 2:if(t=e.sent,!t||!t[0]){e.next=7;break}return e.abrupt("return",t[0].expressions);case 7:return e.abrupt("return",{});case 8:case"end":return e.stop()}}),e)}))),ct.apply(this,arguments)}function lt(e){var t=localStorage.happyTimeOnBlockgag;return e.happy>.4&&(localStorage.happyTimeOnBlockgag=(Number(t)||0)+Ze),localStorage.happyTimeOnBlockgag}var ut={neutral:"😐",happy:{1:"🙂",2:"😊",3:"😃",4:"😄",5:"😁",6:"😆",7:"😅",8:"😂"},sad:{1:"😕",2:"😟",3:"😩"},angry:{1:"😠",2:"😤",3:"😡"},surprised:{1:"😮"}},dt={props:{enabled:Boolean},data:function(){return{expressions:{},ready:!1,happyTimeSeconds:(localStorage.happyTimeOnBlockgag||0)/1e3}},computed:{expressionEmoji:function(){var e={happy:{.8:ut.happy[8],.6:ut.happy[7],.5:ut.happy[5],.3:ut.happy[2],.2:ut.happy[1]},sad:{.5:ut.sad[3]},angry:{.2:ut.angry[3]},surprised:{.2:ut.surprised[1]}};for(var t in this.expressions.happy,$.emotionDetectionCB&&$.emotionDetectionCB(this.expressions),e)for(var n in e[t])if(this.expressions[t]>n)return e[t][n];return ut.neutral}},beforeDestroy:function(){var e=this;console.log("Finishing video recording"),it(),et=!0,setTimeout((function(){e.ready=!1}),2*Ze)},watch:{enabled:function(e){var t=this;e?(et=!1,console.log("Starting video recording"),tt((function(e){!t.ready&&e&&(t.ready=!0,window.toastr.success("Algorithm is ready. Emoji should show your emotions now")),t.expressions=e;var n=lt(e);t.happyTimeSeconds=n/1e3}))):(console.log("Finishing video recording"),it(),et=!0,setTimeout((function(){t.ready=!1}),2*Ze))}}},pt=dt,vt=(n("4227"),Object(k["a"])(pt,Xe,qe,!1,null,null,null)),mt=vt.exports;i["a"].use(Je["a"]);var ft=.01,gt=30,ht={name:"Level",data:function(){return console.log(this.player),{level:m.levels[this.$route.params.levelNr],player:null,liveEmotionsEnabled:!1,laughingTimes:0,isPaused:!1,levelScores:0}},created:function(){var e=this;b.saveLevelAsCompleted(this.$route.params.levelNr),this.laughingTimes=0,$.setEmotionsDetectionCB((function(t){t||console.error("NOT DETECTED");var n="object"==Object(Ye["a"])(t)&&"happy"in t;n?(e.play(),e.isPaused=!1):(e.isPaused||window.toastr.warning("Can't find a face. Video paused. Will continue automatically"),e.pause(),e.isPaused=!0),!t.happy||t.happy<.4?e.levelScores<gt&&(e.levelScores+=ft):(e.laughingTimes++,e.levelScores-=5*ft)}))},beforeDestroy:function(){this.liveEmotionsEnabled=!1},props:{text:Number,img:String},computed:{levelScoresFormatted:function(){return this.levelScores.toFixed(2)}},components:{LiveEmotions:mt},methods:{ready:function(e){this.player=e.target,this.liveEmotionsEnabled=!0},completeLevel:function(){confirm("Do you want to confirm this level and claim ".concat(this.levelScoresFormatted,"?"))&&($.saveScoresForLevel(this.$route.params.levelNr,this.levelScores),location.href="#/levels")},ended:function(){console.log("ended")},playing:function(){console.log("playing"),this.isPaused=!1},stop:function(){this.player.stopVideo()},pause:function(){this.player.pauseVideo()},play:function(){this.player.playVideo()},log:function(){console.log(this.player)},enableLE:function(){this.liveEmotionsEnabled=!0},disableLE:function(){this.liveEmotionsEnabled=!1}}},bt=ht,_t=(n("10a8"),Object(k["a"])(bt,He,We,!1,null,"1f05c940",null)),yt=_t.exports;function Ct(){return Ue}i["a"].config.productionTip=!1,i["a"].use(a["a"]),i["a"].use(o["a"],{lazyComponent:!0,preLoad:5,loading:"./loading.gif"}),i["a"].use(s["a"]),b.checkAuth();var St=[{path:"/",component:Ct()},{path:"/home",component:Ue},{path:"/levels",component:Ke},{path:"/level/:levelNr",component:yt}],kt=new a["a"]({routes:St}),wt=new i["a"]({router:kt,render:function(e){return e(Q)}}).$mount("#app");t["default"]=wt},5966:function(e,t,n){},6:function(e,t){},"6f9e":function(e,t,n){},"6fba":function(e,t,n){},7:function(e,t){},"7d4a":function(e,t,n){"use strict";var i=n("31c9"),a=n.n(i);a.a},8:function(e,t){},"836a":function(e,t,n){},"83a5":function(e,t,n){},"8a5f":function(e,t,n){"use strict";var i=n("92a9"),a=n.n(i);a.a},"92a9":function(e,t,n){},"9b56":function(e,t,n){},"9fc0":function(e,t,n){"use strict";var i=n("83a5"),a=n.n(i);a.a},a5da:function(e,t,n){"use strict";var i=n("5966"),a=n.n(i);a.a},ba40:function(e,t,n){"use strict";var i=n("115d"),a=n.n(i);a.a},ba47:function(e,t,n){},c4b4:function(e,t,n){},d4ca:function(e,t,n){"use strict";var i=n("2cd8"),a=n.n(i);a.a}});
//# sourceMappingURL=app.b3a255eb.js.map