(function(){"use strict";var e={7498:function(e,t,a){var r=a(144),n=a(998),o=a(3059),s=function(){var e=this,t=e._self._c;return t(n.Z,[t(o.Z,["/"!==e.$router.currentRoute.path?t("nav-bar"):e._e(),e._v(" "),t("router-view")],1)],1)},i=[],c=function(){var e=this,t=e._self._c;return t("app-bar")},l=[],u=a(6843),m=a(344),p=a(4562),d=a(4886),h=a(4324),f=a(5495),g=a(6900),v=a(5754),w=a(3687),y=function(){var e=this,t=e._self._c;return t("div",[t(u.Z,{staticClass:"pa-3",attrs:{color:e.$vuetify.theme.dark?"#121212":"#FFFFFF",app:""}},["/dashboard"!==e.$router.currentRoute.path?t(p.Z,{staticClass:"mt-n5 ml-n6",class:e.$vuetify.breakpoint.xsOnly?"mr-5":"",attrs:{icon:""},on:{click:function(t){return e.$router.go(-1)}}},[t(h.Z,[e._v("mdi-chevron-left-circle")])],1):e._e(),e.$vuetify.breakpoint.xsOnly?e._e():t(d.EB,{staticClass:"text-h5 mt-n5 ml-n4",style:"cursor:pointer",on:{click:function(t){return e.routeToDashboard()}}},[e._v("Store")]),e.$vuetify.breakpoint.xsOnly?t(p.Z,{staticClass:"mt-n5 ml-n6",class:e.$vuetify.breakpoint.xsOnly?"mr-5":"",attrs:{icon:""},on:{click:function(t){return e.routeToDashboard()}}},[t(h.Z,{attrs:{size:"40"}},[e._v("mdi-home-circle")])],1):e._e(),t(w.Z),t(m.Z,{staticClass:"accent--text mt-1",class:e.$vuetify.breakpoint.xsOnly?"":"ml-5",attrs:{items:e.products,placeholder:"Search store",filled:"",rounded:"",dense:"","prepend-inner-icon":"mdi-magnify",color:"white","hide-no-data":"","hide-selected":"","item-text":"name","item-value":"id","return-object":""},on:{input:function(t){return e.searchProduct()}},scopedSlots:e._u([{key:"item",fn:function({item:a}){return[t(g.Z,{staticClass:"text-h5 font-weight-light white--text",attrs:{color:"indigo"}},[t(f.Z,{attrs:{src:a.imgs[0]}})],1),t(v.km,[t(v.V9,{domProps:{textContent:e._s(a.name)}}),t(v.oZ,{domProps:{textContent:e._s(a.brand)}})],1)]}}]),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),t(w.Z),t(p.Z,{staticClass:"mt-n5 mr-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.showCart=!e.showCart}}},[t(h.Z,[e._v("mdi-cart")])],1),t("appBarMenu",{class:e.$vuetify.breakpoint.xsOnly?"mr-n4":""})],1),t("cartBar",{attrs:{showShoppingCart:e.showCart},on:{hide:function(t){e.showCart=t}}})],1)},b=[],S=(a(7658),a(9223)),_=a(5808),k=a(4525),C=a(5187),Z=a(9709),x=function(){var e=this,t=e._self._c;return t(Z.Z,{attrs:{app:"",right:"",width:"400",temporary:"",bottom:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[t(k.Z,[t(v.km,[t(v.V9,{staticClass:"text-center"},[t(h.Z,{staticClass:"mr-2"},[e._v("mdi-cart")]),e._v("Shopping Cart")],1)],1)],1)]},proxy:!0},e.totalAmount?{key:"append",fn:function(){return[t(S.Z),t(d.EB,{staticClass:"justify-center pa-2"},[e._v("Cart Total: $ "+e._s(e.totalAmount.price))])]},proxy:!0}:null],null,!0),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[t(S.Z),0===e.shoppingCartItems.length?t(k.Z,[t(v.km,[t(v.V9,{staticClass:"text-center text-wrap"},[e._v(" You have no added items in your cart")])],1)],1):t(_.Z,e._l(e.shoppingCartItems,(function(a){return t(k.Z,{key:a.timestamp},[t(g.Z,[t(f.Z,{attrs:{src:a.imgs[0]}})],1),t(v.km,[t(v.V9,[e._v(e._s(a.brand)+"-"+e._s(a.name))]),t(v.oZ,[e._v("$ "+e._s(a.price)+" X "+e._s(a.quantity))])],1),t(C.Z,[t(p.Z,{attrs:{icon:""},on:{click:function(t){return e.removeFromCart(a)}}},[t(h.Z,{attrs:{color:"red lighten-1"}},[e._v("mdi-cart-remove")])],1)],1)],1)})),1)],1)},A=[],I={props:{showShoppingCart:Boolean},data(){return{shoppingCartItems:JSON.parse(localStorage.getItem("shoppingCartItems"))||[]}},watch:{showShoppingCart(){this.shoppingCartItems=JSON.parse(localStorage.getItem("shoppingCartItems"))||[]}},computed:{show:{get:function(){return this.showShoppingCart},set:function(e){this.$emit("hide",e)}},totalAmount(){if(0!==this.shoppingCartItems.length){var e=this.shoppingCartItems.reduce((function(e,t){return{price:parseFloat(e.price)+parseFloat(t.price)}}));return e}return 0}},methods:{removeFromCart(e){this.shoppingCartItems=this.shoppingCartItems.filter((function(t){return e.timestamp!==t.timestamp})),localStorage.setItem("shoppingCartItems",JSON.stringify(this.shoppingCartItems))}}},$=I,E=a(1001),j=(0,E.Z)($,x,A,!1,null,null,null),D=j.exports,O=a(5154),U=a(3423),P=a(4127),M=a(7394),T=a(8224),z=a(4528),N=a(2933),L=a(9884),R=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mt-n5"},[t(z.Z,{attrs:{"offset-y":"","nudge-width":200},scopedSlots:e._u([{key:"activator",fn:function({on:r,attrs:n}){return[t(U.Z,e._g(e._b({attrs:{size:"35"}},"v-avatar",n,!1),r),[t(f.Z,{attrs:{src:e.$store.getters.currentUser.avatar?e.$store.getters.currentUser.avatar:{src:a(6557),text:"Default Avatar",extra:"Avatar"}}})],1)]}}])},[t(_.Z,[t(k.Z,[t(T.Z,{scopedSlots:e._u([{key:"default",fn:function({hover:r}){return[t(g.Z,[t(f.Z,{attrs:{src:e.$store.getters.currentUser.avatar?e.$store.getters.currentUser.avatar:{src:a(6557),text:"Default Avatar",extra:"Avatar"}}}),t(M.Z5,[r?t(N.Z,{staticStyle:{cursor:"pointer"},attrs:{absolute:""},on:{click:function(t){e.showProfile=!e.showProfile}}},[t(h.Z,{attrs:{size:"20"}},[e._v("mdi-pencil")])],1):e._e()],1)],1)]}}])}),t(v.km,[t(v.V9,[e._v(e._s(e.$store.getters.currentUser.name)+" ")]),t(v.oZ,[e._v("Logged in")])],1),t(C.Z,[t(p.Z,{attrs:{icon:""},on:{click:e.signOut}},[t(h.Z,[e._v("mdi-logout")])],1)],1)],1)],1),t(S.Z),t(_.Z,{attrs:{dense:""}},[t(v.V9,{staticClass:"text-center subtitle-2 mt-2"},[e._v("Settings")]),t(k.Z,[t(v.V9,[e._v("Dark mode")]),t(C.Z,[t(L.Z,{staticClass:"font-weight-bold mt-5",attrs:{inset:"",dense:"",color:"white"},on:{change:function(t){return e.saveSettings("darkMode")}},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1)],1),t(k.Z,[t(v.km,[t(v.V9,[e._v("Choose theme")]),t(v.oZ,{staticClass:"mt-2"},[t(P.Z,{staticClass:"ma-2",attrs:{small:"",color:e.$vuetify.theme.dark?"#b83232":"#ff4a4a"},on:{click:function(t){return e.saveSettings("setAccent","1")}}}),t(P.Z,{staticClass:"ma-2",attrs:{small:"",color:e.$vuetify.theme.dark?"#7532b8":"#954aff"},on:{click:function(t){return e.saveSettings("setAccent","2")}}}),t(P.Z,{staticClass:"ma-2",attrs:{small:"",color:e.$vuetify.theme.dark?"#3234b8":"#4964fc"},on:{click:function(t){return e.saveSettings("setAccent","3")}}}),t(P.Z,{staticClass:"ma-2",attrs:{small:"",color:e.$vuetify.theme.dark?"#d6a41c":"#ffce4a"},on:{click:function(t){return e.saveSettings("setAccent","4")}}}),t(P.Z,{staticClass:"ma-2",attrs:{small:"",color:e.$vuetify.theme.dark?"#2da138":"#46fa58"},on:{click:function(t){return e.saveSettings("setAccent","5")}}}),t(P.Z,{staticClass:"ma-2",attrs:{color:e.$vuetify.theme.dark?"#171717":"#e8e8e8"},on:{click:function(t){return e.saveSettings("setAccent","default")}}},[e._v(" Default ")])],1)],1)],1)],1)],1),t("profile",{attrs:{showProfile:e.showProfile},on:{closeProfileDialog:function(t){e.showProfile=!1}}})],1)},B=[],G=a(629);function q(e){var t="lmao";e=JSON.stringify(e).split("");for(var a=0,r=e.length;a<r;a++)"{"==e[a]?e[a]="}":"}"==e[a]&&(e[a]="{");return encodeURI(t+e.join(""))}function F(e){var t="lmao";if(e=decodeURI(e),t&&0!=e.indexOf(t))throw new Error("object cannot be decrypted");e=e.substring(t.length).split("");for(var a=0,r=e.length;a<r;a++)"{"==e[a]?e[a]="}":"}"==e[a]&&(e[a]="{");return JSON.parse(e.join(""))}r.ZP.use(G.ZP);const W=new G.ZP.Store({state:{currentUser:{}},mutations:{setCurrentUser(e,t){return e.currentUser=t}},actions:{setCurrentUser(e,t){window.$cookies.set("uauth",q(t)),e.currentUser!==t&&e.commit("setCurrentUser",t)},resetState(){}},getters:{currentUser:e=>e.currentUser}});var Q=W,J=a(8345);const V=[{path:"/",name:"Login",meta:{authorized:!1},component:()=>a.e(744).then(a.bind(a,7744))},{path:"/dashboard",name:"Dashboard",meta:{authorized:!0},component:()=>a.e(570).then(a.bind(a,5570))},{path:"/product/:id",name:"View Product",meta:{authorized:!0},component:()=>Promise.all([a.e(52),a.e(388)]).then(a.bind(a,7852))},{path:"/cart",name:"Cart",meta:{authorized:!0},component:()=>a.e(521).then(a.bind(a,4521))},{path:"/search/:id",name:"Search",meta:{authorized:!0},component:()=>Promise.all([a.e(52),a.e(750)]).then(a.bind(a,7265))}];var H=V;r.ZP.use(J.ZP);const X=new J.ZP({routes:H});var K=X;function Y(){if(null!==window.$cookies.get("uauth")&&JSON.stringify(window.$cookies.get("uauth"))!==JSON.stringify({})){var e=F(window.$cookies.get("uauth"));Q.dispatch("setCurrentUser",e)}let t=Q.getters.currentUser;JSON.stringify(t)===JSON.stringify({})&&"/"!==K.currentRoute.path&&K.push({path:"/"})}function ee(){window.$cookies.remove("uauth"),Q.dispatch("setCurrentUser",{}),"/"!==K.currentRoute.path&&K.push({path:"/"})}X.beforeEach(((e,t,a)=>{let r=null===window.$cookies.get("uauth")&&JSON.stringify(window.$cookies.get("uauth"))===JSON.stringify({});e.matched.some((e=>e.meta.authorized))?r?ee():e.matched.some((e=>e.meta.authorized))&&(r?a({path:t.path}):a()):a()})),X.afterEach((e=>{document.title=null!==e.name?e.name:"Vue And Vuetify"}));var te=a(9582),ae=a(4061),re=a(7808),ne=function(){var e=this,t=e._self._c;return t(ae.Z,{attrs:{value:e.showProfile,persistent:"","max-width":"400","content-class":"rounded-xl","overlay-opacity":.8}},[t(te.Z,{staticClass:"pa-5 text-center rounded-xl",attrs:{"max-width":"400"}},[t(T.Z,{scopedSlots:e._u([{key:"default",fn:function({hover:r}){return[t(U.Z,{attrs:{size:"200"}},[t(f.Z,{attrs:{src:e.$store.getters.currentUser.avatar?e.$store.getters.currentUser.avatar:{src:a(6557),text:"Default Avatar",extra:"Avatar"}}}),t(M.Z5,[r?t(N.Z,{staticStyle:{cursor:"pointer"},attrs:{absolute:""},on:{click:function(t){return e.$refs.avatarUpload.click()}}},[t("input",{ref:"avatarUpload",staticStyle:{display:"none"},attrs:{type:"file",accept:".png, .jpg, .jpeg"},on:{change:function(t){return e.avatarSelected(t.target.files)}}}),t(h.Z,{attrs:{size:"50"}},[e._v("mdi-pencil")])],1):e._e()],1)],1)]}}])}),t(k.Z,{attrs:{color:"#0000"}},[t(v.km,[t(v.V9,{staticClass:"text-h6"},[t(re.Z,{staticClass:"centered-input",model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1)],1),t(p.Z,{staticClass:"mr-5 px-4",class:e.$vuetify.theme.dark?"white--text":"black--text",attrs:{rounded:"",color:"accent",dark:"",elevation:"0"},on:{click:function(t){return t.stopPropagation(),e.$emit("closeProfileDialog")}}},[e._v(" Close ")]),t(p.Z,{staticClass:"mr-5 px-4",class:e.$vuetify.theme.dark?"white--text":"black--text",attrs:{disabled:this.$store.getters.currentUser.name===e.name&&null===e.selectedAvatar,rounded:"",color:"accent",dark:"",elevation:"0"},on:{click:function(t){return t.stopPropagation(),e.submitChanges.apply(null,arguments)}}},[e._v(" Save ")])],1)],1)},oe=[],se={name:"profile-component",props:{showProfile:Boolean},data(){return{name:this.$store.getters.currentUser.name,selectedAvatar:null}},computed:{},methods:{avatarSelected(e){e[0].size<=1e5?this.selectedAvatar=e:alert("Size exceeds more than one mb.")},submitChanges(){if(null!==localStorage.getItem("userDatabase")){let t=JSON.parse(localStorage.getItem("userDatabase")),a=this.$store.getters.currentUser.name;for(var e=0;e<t.length;e++)a===t[e].name?(this.$store.dispatch("setCurrentUser",{name:this.name,email:t[e].mail,avatar:null}),t[e].name=this.name,localStorage.setItem("userDatabase",JSON.stringify(t))):console.log("User auth failed")}else console.log("No userdatabase")}}},ie=se,ce=(0,E.Z)(ie,ne,oe,!1,null,"0f1bac54",null),le=ce.exports,ue={data:()=>({showProfile:!1}),components:{profile:le},methods:{signOut(){ee()},saveSettings(e,t){if("darkMode"===e)localStorage.setItem("darkTheme",this.$vuetify.theme.dark);else{let e="default"===t?"#e8e8e8":"5"===t?"#46fa58":"4"===t?"#ffce4a":"3"===t?"#4964fc":"2"===t?"#954aff":"1"===t?"#ff4a4a":"",a="default"===t?"#171717":"5"===t?"#32b83e":"4"===t?"#d6a41c":"3"===t?"#3234b8":"2"===t?"#7532b8":"1"===t?"#b83232":"";localStorage.setItem("lightAccent",e),localStorage.setItem("darkAccent",a),this.$vuetify.theme.themes.light.accent=e,this.$vuetify.theme.themes.dark.accent=a}}}},me=ue,pe=(0,E.Z)(me,R,B,!1,null,null,null),de=pe.exports,he={components:{appBarMenu:de,cartBar:D},data:()=>({products:O.R,search:{},showCart:!1}),beforeMount(){null!==localStorage.getItem("darkTheme")&&(this.$vuetify.theme.dark=JSON.parse(localStorage.getItem("darkTheme"))),localStorage.getItem("lightAccent")&&(this.$vuetify.theme.themes.light.accent=localStorage.getItem("lightAccent")),localStorage.getItem("darkAccent")&&(this.$vuetify.theme.themes.dark.accent=localStorage.getItem("darkAccent"))},beforeUnmount(){clearInterval(this.timer)},methods:{searchProduct(){this.$router.currentRoute.path!=="/product/p-"+this.search.id&&this.$router.push({path:"/product/p-"+this.search.id}),location.reload()},routeToDashboard(){"/dashboard"!==this.$router.currentRoute.path&&this.$router.push({path:"/dashboard"})}}},fe=he,ge=(0,E.Z)(fe,y,b,!1,null,null,null),ve=ge.exports,we={components:{appBar:ve},data:()=>({})},ye=we,be=(0,E.Z)(ye,c,l,!1,null,null,null),Se=be.exports,_e={name:"App",components:{navBar:Se},data:()=>({}),beforeCreate(){Y()}},ke=_e,Ce=(0,E.Z)(ke,s,i,!1,null,null,null),Ze=Ce.exports,xe=a(1705);r.ZP.use(xe.Z);var Ae=new xe.Z({theme:{themes:{light:{accent:"#e8e8e8",primary:"#ff8888",secondary:"#E0E0E0",error:"#FF5252",success:"#45a5ae"},dark:{accent:"#171717",primary:"#ff8888",secondary:"#1c1c1c",error:"#FF5252",success:"#45a5ae"}}}}),Ie=a(6123),$e=a.n(Ie);r.ZP.config.productionTip=!1,r.ZP.use($e()),new r.ZP({vuetify:Ae,router:K,store:Q,render:e=>e(Ze)}).$mount("#app")},5154:function(e,t,a){a.d(t,{R:function(){return r}});const r=[{id:369,name:"Edifice (ED369)",brand:"Casio",type:"Chronograph",price:"150.00",movement:"Quartz",gender:"M",popularity:36,rating:3.5,imgs:["https://m.media-amazon.com/images/I/713m0cORTBL._UL1100_.jpg","https://m.media-amazon.com/images/I/516UJ9B3AiL._UL1100_.jpg","https://m.media-amazon.com/images/I/41ojGD14DkL._UL1100_.jpg","https://m.media-amazon.com/images/I/61pU41bIjsL._UL1100_.jpg","https://m.media-amazon.com/images/I/51zRqfJICzL._UL1100_.jpg","https://m.media-amazon.com/images/I/51dLG6sE23L._UL1100_.jpg"],description:"Brand New Casio Edifice Tachymeter Chronograph Multi-Color Dial Men's Watch - EF-539D-1AVDF (ED369)"},{id:61,name:"SRPD61K1",brand:"Seiko",type:"Analogue",price:"250.00",movement:"Automatic & Mechanical",gender:"M",popularity:69,rating:4.2,imgs:["https://m.media-amazon.com/images/I/81j8TtonHhL._UL1500_.jpg","https://m.media-amazon.com/images/I/71WmjI3VosL._UL1500_.jpg","https://m.media-amazon.com/images/I/71u-C9C5IqL._UL1500_.jpg","https://m.media-amazon.com/images/I/71zydc1xRpL._UL1500_.jpg"],description:"Dial Color: Green, Case Shape: Round, Dial Glass Material: Hardlex /n Band Color: Silver, Band Material: Stainless Steel Watch Movement Type: Automatic, Watch Display Type: Analog Case Material: Stainless Steel, Case Diameter: 42.5 millimeters Water Resistance Depth: 100 meters"},{id:5e3,name:"Gshock GMWB5000D-1",brand:"Casio",type:"Digital",price:"550.00",movement:"Digital",popularity:81,gender:"U",rating:4.3,imgs:["https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/G/GM/GMW/GMW-B5000D-1/assets/GMW-B5000D-1_Seq1.png.transform/main-visual-pc/image.png","https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/G/GM/GMW/GMW-B5000D-1/assets/GMW-B5000D-1_Seq5.jpg.transform/main-visual-pc/image.jpg","https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/G/GM/GMW/GMW-B5000D-1/assets/GMW-B5000D-1_Seq4.jpg.transform/main-visual-pc/image.jpg","https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/G/GM/GMW/GMW-B5000D-1/assets/GMW-B5000D-1_Seq8.jpg.transform/main-visual-pc/image.jpg"],description:"The DW-5000C is the original G-Shock model from 1983. The GMW-B5000 Series has inherited its characteristic square design and been given the full metal treatment along with upgraded features including smartphone linking. The watch has been given a full-metal case by using a shock-resistant fine resin cushioning material inserted between the case and the sturdy stainless steel metal bezel. High-density mounting technology also allows the watch to maintain its size. The back of the watch features a solid Screw Lock Back and has been DLC treated for resistance to wear. The metal band has been dimple processed, inheriting the Resin Band design of the original. Visibility too has been enhanced via use of a film solar cell and STN-LCD (liquid crystal). "},{id:930,name:"NISMO Limited Edition",brand:"Casio",type:"Chronograph",price:"300.00",movement:"Solar",gender:"M",popularity:61,rating:3.5,imgs:["https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EQ/EQS/EQS-930NIS-1A/assets/EQS-930NIS-1A.png.transform/main-visual-pc/image.png","https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EQ/EQS/EQS-930NIS-1A/assets/EQS-930NIS-1A_top.jpg.transform/main-visual-pc/image.jpg","https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EQ/EQS/EQS-930NIS-1A/assets/EQS-930NIS-1A_N.png.transform/main-visual-pc/image.png","https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EQ/EQS/EQS-930NIS-1A/assets/EQS-930NIS-1A_side.jpg.transform/main-visual-pc/image.jpg"],description:"Celebrate a motorsports-chronograph partnership born in 2021 with the EDIFICE NISMO Limited Edition. "},{id:27086162,name:"True Square Automatic Open Heart",brand:"Rado",type:"Analog",price:"2500.00",movement:"Automatic & Mechanical",popularity:78,rating:4,gender:"U",imgs:["https://www.rado.com/media/catalog/product/r/g/rgb_cat_truesquare_734_6086_3_016_3.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center","https://www.rado.com/media/catalog/product/t/r/truesquare_0173460863016_r27086162_a_2.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center","https://www.rado.com/media/catalog/product/t/r/truesquare_0173460863016_r27086162_b_2.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center","https://www.rado.com/media/catalog/product/t/r/truesquare_r27086162_wrist_a.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center"],description:"At Rado, we made our name producing square high-tech ceramic watches. The True Square is a new take on an iconic Rado shape. Our first watch made using a square injected monobloc high-tech ceramic case, the True Square is light, scratch-resistant and comfortable to wear. Distinctive and design-led the Rado True Square Automatic Open Heart is the shape of things to come. "},{id:1374101104100,name:"PRX T1374101104100",brand:"Tissot",type:"Analog",price:"250.00",movement:"Quartz",rating:3.9,gender:"M",popularity:76,imgs:["https://cdn.helioswatchstore.com/production/media/catalog/product/cache/dd1c3400e344f54d12df823ec560a116/t/1/t1374101104100_1.jpg","https://cdn.helioswatchstore.com/production/media/catalog/product/cache/dd1c3400e344f54d12df823ec560a116/t/1/t1374101104100_10.jpg","https://cdn.helioswatchstore.com/production/media/catalog/product/cache/dd1c3400e344f54d12df823ec560a116/t/1/t1374101104100_2.jpg","https://cdn.helioswatchstore.com/production/media/catalog/product/cache/dd1c3400e344f54d12df823ec560a116/t/1/t1374101104100_8.jpg"],description:" In 1978 the Tissot PRX was born, in 2021 we celebrate its comeback. The new Tissot PRX, the watch for those with passion for design and an eye for ingenuity. Discover the brand new Tissot PRX now, its evocative and slim design makes it an uncompromising essential for all the design enthusiasts."},{id:36,name:"DATEJUST 36",brand:"Rolex",type:"Analog",price:"",movement:"Automatic & Mechanical",gender:"U",rating:4.8,popularity:94,imgs:["https://content.rolex.com//dam/2022/upright-cc/m126233-0039.png?impolicy=v6-corners&sc=0.384","https://content.rolex.com//dam/2022/laying-ba-with-shadow/m126233-0039.png?impolicy=v6-corners&sc=0.262&vo=-154","https://content.rolex.com//dam/2022/presentation-box-hr/m126233-0039.jpg?impolicy=v6-corners-bg&sc=0.17","https://content.rolex.com//dam/2022/presentation-tray/m126233-0039.jpg?impolicy=v6-corners&sc=0.32&vo=109"],description:" Oyster, 36 mm, Oystersteel and yellow gold"},{id:466,name:"SRZ466P1",brand:"Seiko",type:"Analog",price:"",movement:"Quartz",gender:"W",rating:3.7,popularity:34,imgs:["https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/s/e/seiko-fashion-style-srz466p1-large.jpg","https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/s/e/seiko-fashion-style-srz466p1-multiple-2.jpg","https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/s/e/seiko-fashion-style-srz466p1-multiple-1.jpg"],description:" Seiko has empowered the upliftment of new ideas and independence alike. Known for creating timepieces that are primarily for men and also unisex, it was new for the brand to launch a line of watches just for women. Called the Seiko Ladies collection, the timepieces under this collection are specifically made for women and cater to the feminine mind with sometimes quirky and sometimes elegant designs."}]},6557:function(e,t,a){e.exports=a.p+"img/defaultAvatar.d436515e.png"}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,o){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],o=e[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{52:"5feeaf4a",388:"f66b5348",521:"14d3e847",570:"9939f4fd",744:"388d9bd0",750:"4c819385"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{388:"925bebad",521:"87e3bb93",570:"25e96b05",744:"1ecf3cab",750:"4bdaa495"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-app:";a.l=function(r,n,o,s){if(e[r])e[r].push(n);else{var i,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var m=l[u];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==t+o){i=m;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[n];var p=function(t,a){i.onerror=i.onload=null,clearTimeout(d);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(a)})),t)return t(a)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/E-Commerce-VueJS/"}(),function(){var e=function(e,t,a,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)a();else{var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,n.parentNode.removeChild(n),r(c)}};return n.onerror=n.onload=o,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=a[r],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){n=s[r],o=n.getAttribute("data-href");if(o===e||o===t)return n}},r=function(r){return new Promise((function(n,o){var s=a.miniCssF(r),i=a.p+s;if(t(s,i))return n();e(r,i,n,o)}))},n={143:0};a.f.miniCss=function(e,t){var a={388:1,521:1,570:1,744:1,750:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,r){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(a,r){n=e[t]=[a,r]}));r.push(n[2]=o);var s=a.p+a.u(t),i=new Error,c=function(r){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,n[1](i)}};a.l(s,c,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,s=r[0],i=r[1],c=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var u=c(a)}for(t&&t(r);l<s.length;l++)o=s[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(7498)}));r=a.O(r)})();
//# sourceMappingURL=app.21bcf798.js.map