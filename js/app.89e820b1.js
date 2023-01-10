(function(){"use strict";var t={3918:function(t,e,a){var n=a(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("MainView")],1)},i=[],o=function(){var t=this,e=t._self._c;return e("div",[e("el-container",[e("el-header",{staticClass:"header",attrs:{height:"60px"}},[e("headerBar")],1),e("el-container",[e("el-container",[e("el-main",{staticClass:"main"},[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1),e("el-footer",{attrs:{height:"70px"}},[e("footerBar")],1)],1)],1)],1)],1)},r=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-container"},[e("div",{staticClass:"header-bar"},["small"===t.windowSize?e("div",{ref:"menu",attrs:{id:"nav-icon2"},on:{click:t.toggleMenu}},[e("span"),e("span"),e("span")]):t._e(),e("div",{staticClass:"logo",on:{click:function(e){return t.setActiveTag(0,"home")}}},[e("div",{staticClass:"company-616"})]),"big"===t.windowSize?e("ul",{staticClass:"header-bar-ul"},[e("li",{class:1===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(1,"home")}}},[t._v(" "+t._s(t.internationalDict.homePage)+" ")]),e("li",{class:2===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(2,"aboutUs")}}},[t._v(" "+t._s(t.internationalDict.aboutUs)+" ")]),e("li",{class:3===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(3,"hotSale")}}},[t._v(" "+t._s(t.internationalDict.lastPromotion)+" ")]),e("li",{class:4===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(4,"address")}}},[t._v(" "+t._s(t.internationalDict.address)+" ")]),e("li",{class:5===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(5,"contactUs")}}},[t._v(" "+t._s(t.internationalDict.contactUs)+" ")])]):t._e(),e("div",{staticClass:"international"},[e("svg",{staticClass:"pointer",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.setLangure()}}},[e("path",{attrs:{d:"M3 5H15M9 3V5M10.0482 14.5C8.52083 12.9178 7.28073 11.0565 6.41187 9M12.5 18H19.5M11 21L16 11L21 21M12.7511 5C11.7831 10.7702 8.06969 15.6095 3 18.129",stroke:"#206b6e","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),e("el-drawer",{attrs:{title:"",visible:t.drawer,direction:"ltr","modal-append-to-body":!1,size:"50%","before-close":t.toggleMenu},on:{"update:visible":function(e){t.drawer=e}}},[e("ul",{staticClass:"header-bar-ul-mobile"},[e("li",{class:1===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(1,"home")}}},[t._v(" "+t._s(t.internationalDict.homePage)+" ")]),e("li",{class:2===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(2,"aboutUs")}}},[t._v(" "+t._s(t.internationalDict.aboutUs)+" ")]),e("li",{class:3===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(3,"hotSale")}}},[t._v(" "+t._s(t.internationalDict.lastPromotion)+" ")]),e("li",{class:4===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(4,"address")}}},[t._v(" "+t._s(t.internationalDict.address)+" ")]),e("li",{class:5===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(5,"contactUs")}}},[t._v(" "+t._s(t.internationalDict.contactUs)+" ")])])])],1)},c=[],u=(a(7658),{name:"header-bar",components:{},mixins:[],props:{},data(){return{activeTab:-1,lang:1,drawer:!1}},computed:{internationalDict(){return this.$store.getters.getInternationalDict},internationalstate(){return this.$store.getters.getInternationalstate},windowSize(){return this.$store.getters.getWindowSize}},watch:{},mounted(){},methods:{setActiveTag(t,e){this.activeTab=t,e&&this.$router.push({name:e}).then((()=>{this.drawer=!1})).catch((()=>{}))},setLangure(){let t="chinese"===this.internationalstate?"english":"chinese";this.$store.dispatch("commitInternationalStatus",t)},toggleMenu(){this.drawer=!this.drawer}}}),d=u,p=a(1001),m=(0,p.Z)(d,l,c,!1,null,"9e464d56",null),g=m.exports,h=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"footer"},[t._m(1),e("div",[e("span",{staticClass:"privacy",on:{click:t.toPrivacyPage}},[t._v("Terms and Conditions")]),e("span",{staticClass:"visitable-switch"},[t._v("Copyright © 2022 616Catering Management Ltd. All Rights Reserved.")])])])])},f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"btn-group"},[e("a",{attrs:{href:"https://www.facebook.com/616hotpot/"}},[e("div",{staticClass:"FB"})]),e("a",{attrs:{href:"https://instagram.com/616hotpothk"}},[e("div",{staticClass:"IG"})])])},function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"visitable-switch"},[t._v("616餐飲管理有限公司")])])}],v={name:"footer-bar",components:{},mixins:[],props:{},data(){return{}},computed:{},watch:{},mounted(){},methods:{toPrivacyPage(){this.$router.push({name:"privacy"})}}},b=v,_=(0,p.Z)(b,h,f,!1,null,"199f5c48",null),C=_.exports,w={name:"main-page",components:{headerBar:g,footerBar:C},mixins:[],props:{},data(){return{size:""}},computed:{},watch:{},mounted(){this.windowResize(),window.onresize=()=>{this.windowResize()}},methods:{windowResize(){let t=window.innerWidth>1200?"big":"small";this.size!==t&&this.$store.dispatch("commitWindowSize",t),this.size=t}}},y=w,x=(0,p.Z)(y,o,r,!1,null,"7f8bcaa2",null),k=x.exports,S={components:{MainView:k}},T=S,E=(0,p.Z)(T,s,i,!1,null,null,null),H=E.exports,D=a(2631),L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("el-carousel",{staticClass:"carousel"},t._l(t.imgList,(function(t,a){return e("el-carousel-item",{key:a,attrs:{interval:6e3}},[e("img",{staticClass:"carousel-img",attrs:{src:t.img,alt:t.name}})])})),1),e("div",{staticClass:"container flex-column-center"},[e("span",{staticClass:"slogan"},[t._v(t._s(t.internationalDict.slogan))])]),e("aboutUs",{attrs:{isAbstract:!0}}),e("div",{staticClass:"container"},[e("ourBrands")],1)],1)},B=[],P=function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"sub-title"},[t._v(t._s(t.internationalDict.ourBrand))]),e("div",{staticClass:"brand-table"},t._l(t.brandList,(function(a,n){return e("el-card",{key:n,staticStyle:{borderRadius:"10px"},attrs:{"body-style":{padding:"15px 10px"}}},[e("div",{staticClass:"brand-table-item"},[e("div",{staticClass:"flex1 flex-row-center"},[e("img",{staticClass:"brand-item-logo",attrs:{src:a.img,alt:""}})]),e("span",{staticClass:"brand-text"},[t._v(t._s("english"===t.internationalstate?a.nameEng:a.name))])])])})),1)])},F=[],K={name:"our-bind",components:{},mixins:[],props:{},data(){return{brandList:[{name:"616燒肉酒場",nameEng:"616 YanKiniku",img:a(423),width:162,height:150},{name:"虎喰燒肉酒場",nameEng:"Tora Kui Japanese Yakiniku",img:a(7489),width:130,height:150},{name:"616牛肉火鍋專門店",nameEng:"616 Beef Hotpot",img:a(1962),width:200,height:80},{name:"千絵日本料理",nameEng:"Chie Japanese Cuisine",img:a(3168),width:150},{name:"616客香邨",nameEng:"616 HakKaInn",img:a(1492),width:80,height:150}]}},computed:{internationalDict(){return this.$store.getters.getInternationalDict},internationalstate(){return this.$store.getters.getInternationalstate},windowSize(){return this.$store.getters.getWindowSize}},watch:{},mounted(){},methods:{}},A=K,W=(0,p.Z)(A,P,F,!1,null,"631a05ae",null),j=W.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-us"},[t.isAbstract?e("div",[e("div",{staticClass:"container"},[e("h2",{staticClass:"sub-title"},[t._v(t._s(t.internationalDict.aboutUsDetail))])]),"chinese"===t.internationalstate?e("div",[e("el-row",{staticClass:"about-us-box",attrs:{justify:"center",type:"flex",gutter:50}},[e("el-col",{attrs:{xs:22,sm:9,md:8,lg:8,xl:9}},[e("img",{staticClass:"about-us-img",attrs:{src:a(8149),alt:""}})]),e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("h3",[t._v("集團概況")]),e("p",[t._v("616餐飲管理有限公司於2016年成立，是一家由牛肉火鍋、日本餐廳和中式餐廳組成的餐飲公司，其中包括：616牛肉火鍋專門店﹑616燒肉酒場﹑616客香邨﹑虎喰燒肉酒場﹑千絵日本料理。")]),e("p",[t._v("我們的分店偏佈香港、九龍和新界，目標客戶為 Z 世代。")])])],1)],1):t._e(),"english"===t.internationalstate?e("div",[e("el-row",{staticClass:"about-us-box",attrs:{justify:"center",type:"flex",gutter:50}},[e("el-col",{attrs:{xs:22,sm:9,md:8,lg:8,xl:9}},[e("img",{staticClass:"about-us-img",attrs:{src:a(8149),alt:""}})]),e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("h3",[t._v("Group overview")]),e("p",[t._v("Founded in 2016, 616 Catering Management Limited (a company incorporated in Hong Kong) is food and beverage company comprised of Beef hotpot, Japanese restaurant and Chinese restaurant which are including the 616 Beef Hotpot (616牛肉火煱專門店)﹑616 YanKiniku (616燒肉酒場)﹑616 HakKaInn (616客香邨)﹑Tora Kui Japanese Yakiniku (虎喰燒肉酒場) and Chie Japanese Cuisine(千繪日本料理). ")]),e("p",[t._v("All of the outlets in Hong Kong, Kowloon & New Territories as target customers for Gen Z.")])])],1)],1):t._e(),e("el-row",{staticClass:"more-btn",attrs:{justify:"center",type:"flex"}},[e("el-col",{attrs:{span:4,offset:18}},[e("el-button",{attrs:{type:"text"},on:{click:t.toAboutUsView}},[e("span",{staticClass:"more-btn-text"},[t._v("more >>")])])],1)],1)],1):t._e(),t.isAbstract?t._e():e("div",[e("h2",{staticClass:"title"},[t._v(t._s(t.internationalDict.aboutUsDetail))]),"chinese"===t.internationalstate?e("div",{staticClass:"aboutus-chinese-box"},[e("el-row",{staticClass:"about-us-box",attrs:{justify:"center",type:"flex",gutter:50}},[e("el-col",{attrs:{xs:22,sm:9,md:8,lg:8,xl:9}},[e("img",{staticClass:"about-us-img",attrs:{src:a(8149),alt:""}})]),e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("h3",[t._v("集團概況")]),e("p",[t._v("616餐飲管理有限公司於2016年成立，是一家由牛肉火鍋、日本餐廳和中式餐廳組成的餐飲公司，其中包括：616牛肉火鍋專門店﹑616燒肉酒場﹑616客香邨﹑虎喰燒肉酒場﹑千絵日本料理。")]),e("p",[t._v("我們的分店偏佈香港、九龍和新界，目標客戶為 Z 世代。")])])],1),e("el-row",{staticClass:"about-us-box",attrs:{justify:"center",type:"flex",gutter:50}},[e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("img",{staticClass:"about-us-img",attrs:{src:a(5098),alt:""}})]),e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("h3",[t._v("第一間616牛肉火鍋專門店")]),e("p",[t._v("首間616牛肉火鍋專門店成立於2016年，位於香港新界大埔翠怡街3號翠怡廣場1樓18號舖。")]),e("p",[t._v("首創以刁鑽牛肉部位作招徠的火鍋店，提供高品質、專家級牛肉火鍋產品的餐廳用餐服務。")])])],1),e("el-row",{staticClass:"about-us-box",attrs:{justify:"center",type:"flex",gutter:50}},[e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("img",{staticClass:"about-us-img",attrs:{src:a(163),alt:""}})]),e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("h3",[t._v("中央食品工場及辦公室總部")]),e("p",[t._v("616集團是香港極少數擁有自己的中央食品工場及辦公室總部的火鍋店之一。")]),e("p",[t._v("於2021年12月，我們的中央食品工場及辦公室總部已擴建並搬遷至荃灣立泰工業中心，其總面積為 22,000 平方尺，使我們能精心將食品加工並由自家物流車隊每天把新鮮食品直送至本集團旗下 20 多家餐廳。 ")]),e("p",[t._v("我們的中央食品工場於 2022 年 4 月獲得了 ISO 22000 和 HACCP 證書。品質均有統一保證，提供優質及安全食品予顧客。")])])],1),e("el-row",{staticClass:"about-us-box",attrs:{justify:"center",type:"flex",gutter:50}},[e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("img",{staticClass:"about-us-img",attrs:{src:a(9039),alt:""}})]),e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("h3",[t._v("616牛肉火鍋專門店x虎喰燒肉酒場旗艦店")]),e("p",[t._v("在2021 年 12 月 20 日，616牛肉火鍋專門店x虎喰燒肉酒場旗艦店於將軍澳PopDeli 開業，總面積為 4,542 平方尺。")]),e("p",[t._v("而 PopDeli 位於將軍澳地鐵站上蓋的將軍澳中心，座落於將軍澳真正中心點。")])])],1)],1):t._e(),"english"===t.internationalstate?e("div",{staticClass:"aboutus-english-box"},[e("el-row",{staticClass:"about-us-box",attrs:{justify:"center",type:"flex",gutter:50}},[e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("img",{staticClass:"about-us-img",attrs:{src:a(8149),alt:""}})]),e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("h3",[t._v("Group overview")]),e("p",[t._v("Founded in 2016, 616 Catering Management Limited (a company incorporated in Hong Kong) is food and beverage company comprised of Beef hotpot, Japanese restaurant and Chinese restaurant which are including the 616 Beef Hotpot (616牛肉火鍋專門店)﹑616 YanKiniku (616燒肉酒場)﹑616 HakKaInn (616客香邨)﹑Tora Kui Japanese Yakiniku (虎喰燒肉酒場) and Chie Japanese Cuisine(千繪日本料理). ")]),e("p",[t._v("All of the outlets in Hong Kong, Kowloon & New Territories as target customers for Gen Z.")])])],1),e("el-row",{staticClass:"about-us-box",attrs:{justify:"center",type:"flex",gutter:50}},[e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("img",{staticClass:"about-us-img",attrs:{src:a(5098),alt:""}})]),e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("h3",[t._v("The First 616 Beef Hotpot Restaurant")]),e("p",[t._v("The first 616 Beef Hotpot Restaurant (616牛肉火鍋專門店) was established in 2016 as located at Shop 18 Level 1, Greenery Plaza 3 Chui Yi Street, Tai Po, New Territories, Hong Kong.")]),e("p",[t._v("It is providing high quality and an expert’s beef hotpot product of restaurant dinning services. ")])])],1),e("el-row",{staticClass:"about-us-box",attrs:{justify:"center",type:"flex",gutter:50}},[e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("img",{staticClass:"about-us-img",attrs:{src:a(163),alt:""}})]),e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("h3",[t._v("Food & Beverage Production Centre and Head Office")]),e("p",[t._v("616 Group is amongst the very few Hot Pot restaurants that operate its own Food & Beverage Production Centre and Head Office. ")]),e("p",[t._v("In Dec of 2021, our Food & Beverage Production Centre & Head Office have been expanded and relocated to Leader Industrial Centre in Tsuen Wan. Its gross area is 22,000 sq.ft. and enables us to process food more carefully and deliver fresh food directly to more than 20 restaurants under the group by our own logistics team every day.")]),e("p",[t._v("Our Food & Beverage Production Centre gained ISO 22000 and HACCP certificates in April 2022. Quality is uniformly guaranteed, providing high-quality and safe food to customers.")])])],1),e("el-row",{staticClass:"about-us-box",attrs:{justify:"center",type:"flex",gutter:50}},[e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("img",{staticClass:"about-us-img",attrs:{src:a(9039),alt:""}})]),e("el-col",{attrs:{xs:22,sm:9,md:9,lg:8,xl:9}},[e("h3",[t._v("The Flagship Restaurant of 616 Beef Hotpot x Tora Kui Japanese Yakiniku")]),e("p",[t._v("Besides, the flagship restaurant of 616 Beef Hotpot (616牛肉火鍋專門店) x Tora Kui Japanese Yakiniku (虎喰燒肉酒場) as the total net floor area 4,542sq.ft at PopDeli was launched on 20 Dec 2021.")]),e("p",[t._v("And the shop location PopDeli is centrally located at the hub of Tseung Kwan O atop Tseung Kwan O MTR Station.")])])],1)],1):t._e()]),t.isAbstract?t._e():e("div",{staticClass:"container"},[e("h2",{staticClass:"sub-title"},[t._v(t._s(t.internationalDict.award))]),e("el-timeline",[e("el-timeline-item",{attrs:{timestamp:"2022",placement:"top",color:"#206b6e"}},[e("el-card",[e("h4",[t._v("《新假期》")]),e("p",[t._v("2022必吃食店大獎必吃火鍋✨大獎")])])],1)],1),e("ourBrands")],1)])},U=[],I={name:"about-us",components:{ourBrands:j},mixins:[],props:{isAbstract:{type:Boolean,require:!0,default:!1}},data(){return{}},computed:{internationalDict(){return this.$store.getters.getInternationalDict},internationalstate(){return this.$store.getters.getInternationalstate}},watch:{},mounted(){},methods:{toAboutUsView(){this.$router.push({name:"aboutUs"})}}},z=I,M=(0,p.Z)(z,O,U,!1,null,"083032e5",null),G=M.exports,$={name:"HomeView",components:{ourBrands:j,aboutUs:G},data(){return{imgList:[{name:"photo-output_3",img:a(2869)},{name:"photo-output_4",img:a(5572)},{name:"photo-output_5",img:a(3882)},{name:"photo-output_6",img:a(306)},{name:"photo-output_7",img:a(5801)}]}},computed:{internationalDict(){return this.$store.getters.getInternationalDict}}},R=$,Y=(0,p.Z)(R,L,B,!1,null,null,null),Z=Y.exports,J=function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"pd-10-top title"},[t._v(t._s(t.internationalDict.lastPromotion))]),"big"===t.windowSize?e("div",{staticClass:"full-height container"},[e("h2",{staticClass:"sub-title"},[t._v(t._s(t.internationalDict.recentoffers))]),e("el-carousel",{staticClass:"carousel-container",attrs:{interval:4e3,type:"card"}},t._l(t.promotions,(function(t,a){return e("el-carousel-item",{key:"promotions"+a},[e("img",{staticClass:"carousel-item",attrs:{src:t.img,alt:t.name}})])})),1)],1):t._e(),"small"===t.windowSize?e("div",{staticClass:"container"},[e("h2",{staticClass:"sub-title"},[t._v(t._s(t.internationalDict.recentoffers))]),e("div",{staticClass:"product-table"},t._l(t.promotions,(function(t,a){return e("div",{key:"promotions"+a},[e("div",{staticClass:"product-table-item"},[e("div",{staticClass:"flex1 flex-row-center"},[e("img",{attrs:{src:t.img,alt:"",width:"100%",height:"100%"}})])])])})),0)]):t._e()])},q=[],N={name:"hot-sale",components:{},mixins:[],props:{},data(){return{newProduct:[{img:a(2658),name:"",nameEng:""},{img:a(46),name:"",nameEng:""},{img:a(5856),name:"",nameEng:""}],promotions:[{img:a(2947),name:"",nameEng:""},{img:a(6028),name:"",nameEng:""},{img:a(855),name:"",nameEng:""},{img:a(2270),name:"",nameEng:""},{img:a(4867),name:"",nameEng:""}]}},computed:{internationalDict(){return this.$store.getters.getInternationalDict},windowSize(){return this.$store.getters.getWindowSize}},watch:{},mounted(){},methods:{}},V=N,Q=(0,p.Z)(V,J,q,!1,null,"b0012ee0",null),X=Q.exports,tt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"pd-10-bottom"},[e("h2",{staticClass:"title"},[t._v(t._s(t.internationalDict.address))])]),e("div",{staticClass:"container"},[e("el-row",{staticClass:"sreach-bar",attrs:{type:"flex",gutter:20}},[e("el-col",{attrs:{xs:12,sm:8,md:4,lg:4,xl:6}},[e("el-select",{attrs:{placeholder:"請選擇品牌",clearable:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(a){return e("el-option",{key:a.value,attrs:{label:"english"===t.internationalstate?a.labelEng:a.label,value:a.value}})})),1)],1),e("el-col",{attrs:{xs:12,sm:12,md:12,lg:12,xl:12}},[e("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.internationalDict.addressList,(function(a,n){return e("el-checkbox",{key:n,attrs:{label:n}},[t._v(t._s(a)+" ")])})),1)],1)],1),e("div",{staticClass:"address-box inner-container"},[e("ul",{staticClass:"address-list"},t._l(t.addressList,(function(a,n){return e("li",{key:n},[e("el-card",[e("div",{staticClass:"full-height"},["chinese"===t.internationalstate?e("h3",{staticClass:"pd-5-bottom"},[t._v(t._s(a.name))]):t._e(),"english"===t.internationalstate?e("h3",{staticClass:"pd-5-bottom"},[t._v(t._s(a.nameEng))]):t._e(),e("div",{staticClass:"flex-row-left"},[e("div",{staticClass:"address-detail"},["chinese"===t.internationalstate?e("p",[e("i",{staticClass:"el-icon-s-home icon"}),t._v(t._s(a.address))]):t._e(),"english"===t.internationalstate?e("p",[e("i",{staticClass:"el-icon-s-home icon"}),t._v(t._s(a.addressEng))]):t._e(),e("p",[e("i",{staticClass:"el-icon-phone icon"}),t._v(t._s(a.phone))])]),a.googleLink?e("div",{staticClass:"btn-group"},[e("el-button",{attrs:{plain:"",type:"primary",round:"",size:"mini"},on:{click:function(e){return t.openLink(a.googleLink)}}},[t._v(t._s(t.internationalDict.takeOut))])],1):t._e()])])])],1)})),0)])],1)])},et=[],at={name:"address-view",components:{},mixins:[],props:{},data(){return{input:"",value:"",options:[{value:0,label:"616牛肉火鍋專門店",labelEng:"616 Beef Hotpot"},{value:2,label:"616燒肉酒場",labelEng:"616 YanKiniku"},{value:3,label:"616客香邨",labelEng:"616 HakKaInn"},{value:4,label:"虎喰燒肉酒場",labelEng:"Tora Kui Japanese Yakiniku"},{value:5,label:"千絵日本料理",labelEng:"Chie Japanese Cuisine"}],checkList:[0,1,2,3],shopList:[{name:"616牛肉火鍋專門店 天后店",address:"天后威非路道9號海閣洋樓地下C號舖",nameEng:"616 Beef Hotpot (Tin Hau)",addressEng:"Shop C, G/F, Hoi Kok Mansion, 9 Whitfield Road, Tin Hau",phone:"8481 2016",district:0,type:0,googleLink:"https://bit.ly/2VsIOG6"},{name:"616牛肉火鍋專門店 干諾道西店",address:"西環干諾道西188號香港商業中心地下15，16，18，20，22號舖",nameEng:"616 Beef Hotpot (Connaught Road West)",addressEng:"Shop 15-22, G/F, Hong Kong Plaza, 188 Connaught Road West, Western District",phone:"6518 4319",district:0,type:0,googleLink:"http://bit.ly/2KcsJTg"},{name:"616牛肉火鍋專門店 西環店",address:"西環皇后大道西384-386號三多大廈地下A舖",nameEng:"616 Beef Hotpot (Sai Wan)",addressEng:"Shop A, G/F, Samtoh Building, 384-386 Queen's Road West, Sai Ying Pun, Western District",phone:"9034 9794",district:0,type:0,googleLink:"http://bit.ly/2HreZzg"},{name:"616牛肉火鍋專門店 銅鑼灣店",address:"銅鑼灣謝斐道391-407號新時代中心地下C舖",nameEng:"616 Beef Hotpot (Causeway Bay)",addressEng:"Shop C, G/F, Times Tower, 391-407 Jaffe Road, Causeway Bay",phone:"6158 2345",district:0,type:0,googleLink:"http://bit.ly/3bKSrYf"},{name:"千絵日本料理",address:"大角咀埃華街70-86號大同新村大成樓地下H1A&H1B舖",nameEng:"Chie Japanese Cuisine",addressEng:"Shop H1A&H1B, G/F, Tai Shing Building (block H), Cosmopolitan Estates, 70-86 Ivy Street, Tai Kok Tsui",phone:"6518 4419",type:5,district:1},{name:"616客香邨",address:"大圍積存街36號地舖",nameEng:"616 HakKaInn",addressEng:"G/F, 36 Chik Chuen Street, Tai Wai",phone:"2602 7173",type:3,district:1},{name:"616燒肉酒場",address:"大圍積福街62 號好時洋樓地下4-5號鋪",nameEng:"616 YanKiniku",addressEng:"Shop 4-5, G/F, Ho Sze House, 60-62 Chik Fuk Street, Tai Wai",phone:"6531 3090",type:2,district:1},{name:"616牛肉火鍋專門店 土瓜灣店",address:"九龍城道68號瑧尚1樓103號鋪",nameEng:"616 Beef Hotpot (To Kwa Wan)",addressEng:"Shop 103, 1/F, UPLACE, Artisan Garden, 68 Kowloon City Road, To Kwa Wan",phone:"9500 2152",district:1,type:0,googleLink:"https://bit.ly/3FDigIc"},{name:"616牛肉火鍋專門店 新蒲崗店",address:"新蒲崗錦榮街6-24A號金僑大廈地下02-03號舖",nameEng:"616 Beef Hotpot (San Po Kong)",addressEng:"G/F, Cambridge Building, 6-24 Kam Wing Street, San Po Kong",phone:"6512 4500",district:1,type:0,googleLink:"http://bit.ly/2PngdzF"},{name:"616牛肉火鍋專門店 長沙灣店",address:"深水埗青山道438號麗群閣地下1-4號舖",nameEng:"616 Beef Hotpot (Cheung Sha Wan)",addressEng:"Shop 1-4, G/F, Lai Kwan Court , 438 Castle Peak Road, Cheung Sha Wan",phone:"6518 4496",district:1,type:0,googleLink:"https://bit.ly/3cBYsqL"},{name:"616牛肉火鍋專門店 太子店",address:"太子白楊街21號地舖",nameEng:"616 Beef Hotpot (Prince Edward)",addressEng:"G/F, 21 Poplar Street, Prince Edward",phone:"6515 6265",district:1,type:0,googleLink:"http://bit.ly/3a6Z1GS"},{name:"616牛肉火鍋專門店 旺角店",address:"九龍旺角彌敦道594-596號旺角新城3樓",nameEng:"616 Beef Hotpot (Mong Kok)",addressEng:"3/F, Mongkok Metro, 594-596 Nathan Road, Mong Kok",phone:"5502 4837",district:1,type:0,googleLink:"https://bit.ly/3pXekKZ"},{name:"616牛肉火鍋專門店 尖沙咀店",address:"尖沙咀赫德道4號利是大廈1樓",nameEng:"616 Beef Hotpot (Tsim Sha Tsui)",addressEng:"1/F, The Hart, 4 Hart Avenue, Tsim Sha Tsui",phone:"9037 4146",district:1,type:0,googleLink:"http://bit.ly/3bLoWFp"},{name:"616牛肉火鍋專門店 黃埔店",address:"紅磡民泰街27-47號黃埔新村J-L座地下B2號舖",nameEng:"616 Beef Hotpot (Whampoa)",addressEng:"Shop B2, G/F, Block J,K,L, Whampoa Estate, 27-47 Man Tai Street, Hung Hom",phone:"9034 8857",district:1,type:0,googleLink:"http://bit.ly/2Hs5rE4"},{name:"虎喰燒肉·洒場",address:"將軍澳唐德街3號九龍東智選假日酒店7樓702號舖",nameEng:"Tora Kui Japanese Yakiniku",addressEng:"Shop 702, 7/F, Holiday Inn Express, Tower 4, 3 Tong Tak Street, Tseung Kwan O",phone:"6685 7670",type:4,district:2},{name:"616牛肉火鍋專門店 坑口店",address:"將軍澳培成里10號明德商場1樓105-106號舖",nameEng:"616 Beef Hotpot (Hang Hau)",addressEng:"Shop 105-106, 1/F, Ming Tak Shopping Centre, Ming Tak Estate, 10 Pui Shing Lane",phone:"5669 7874",district:2,type:0,googleLink:"https://bit.ly/39S9zPt"},{name:"616牛肉火鍋專門店 將軍澳店",address:"將軍澳唐德街3號九龍東智選假日酒店7樓702號舖",nameEng:"616 Beef Hotpot (Tseung Kwan O)",addressEng:"Shop 702, 7/F, Holiday Inn Express, Tower 4, 3 Tong Tak Street, Tseung Kwan O",phone:"6685 7670",district:2,type:0,googleLink:"https://bit.ly/32nlEbX"},{name:"616牛肉火鍋專門店 元朗店",address:"元朗西菁街9號富盛大廈地下95-100號舖",nameEng:"616 Beef Hotpot (Yuen Long)",addressEng:"Shop 95-100, G/F, Full Shing Building, 9 Sai Ching Street, Yuen Long",phone:"6531 1158",district:2,type:0,googleLink:"http://bit.ly/2STV5lT"},{name:"616牛肉火鍋專門店 荃灣店",address:"新界荃灣三陂坊14-18號安安樓地下C舖",nameEng:"616 Beef Hotpot (Tsuen Wan)",addressEng:"Shop C, G/F, On On Building, 14-18 Sam Pei Square, Tsuen Wan",phone:"9023 4199",district:2,type:0,googleLink:"http://bit.ly/2SyLu4Q"},{name:"616牛肉火鍋專門店 大埔店",address:"大埔翠怡街3號翠怡花園B座地下18號舖",nameEng:"616 Beef Hotpot (Tai Po)",addressEng:"Shop 18, G/F, Greenery Plaza, 3 Chui Yi Street, Tai Po",phone:"3565 6878 / 6531 1169",district:2,type:0,googleLink:"http://bit.ly/2HvoXzK"},{name:"616牛肉火鍋專門店 馬鞍山店",address:"馬鞍山鞍駿街1號馬鞍山中心地下A06舖",nameEng:"616 Beef Hotpot Ma On Shan",addressEng:"Shop A06, G/F, Ma On Shan Centre, 1 On Chun Street, Ma On Shan",phone:"6518 4507",district:2,type:0,googleLink:"https://bit.ly/30aYPnB"},{name:"616牛肉火鍋專門店 大圍店",address:"大圍積富街33號積康樓地下C&D舖",nameEng:"616 Beef Hotpot (Tai Wai)",addressEng:"Shop C&D, G/F, Chik Hong Mansion, 33 Chik Fu Street, Tai Wai",phone:"3709 2128 / 6531 1192",district:2,type:0,googleLink:"http://bit.ly/2P0G00z"}]}},computed:{addressList(){let t=this.shopList.filter((t=>this.checkList.includes(t.district)));if(this.input){var e=new RegExp(this.input);t=t.filter((t=>t.name.match(e)))}return""!==this.value&&(t=t.filter((t=>t.type===this.value))),t},internationalDict(){return this.$store.getters.getInternationalDict},internationalstate(){return this.$store.getters.getInternationalstate}},watch:{},mounted(){},methods:{openLink(t){window.open(t)}}},nt=at,st=(0,p.Z)(nt,tt,et,!1,null,"d8a20530",null),it=st.exports,ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"full-height"},[e("h2",{staticClass:"title"},[t._v(t._s(t.internationalDict.contactUs))]),e("div",{staticClass:"container flex-colum"},[e("h2",{staticClass:"sub-title"},[t._v(t._s(t.internationalDict.contactUsWay))]),e("div",{staticClass:"pd-10-bottom"},[t._v(t._s(t.internationalDict.contactUsDetail))]),e("div",{staticClass:"flex-row-left gap"},[t._m(0),e("div",{staticClass:"content-box"},[e("h3",[t._v(t._s(t.internationalDict.telephone))]),e("p",[t._v("(852)3704 7978")])])]),e("div",{staticClass:"flex-row-left gap"},[t._m(1),e("div",{staticClass:"content-box"},[e("h3",[t._v(t._s(t.internationalDict.email))]),e("p",[t._v("info@616.com.hk")])])]),e("div",{staticClass:"flex-row-left gap"},[t._m(2),e("div",{staticClass:"content-box"},[e("h3",[t._v(t._s(t.internationalDict.workingHour))]),e("p",[t._v("星期一至五上午9時至下午6時（星期六、日及公眾假期休息）")])])])])])},rt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon-box"},[e("i",{staticClass:"el-icon-phone-outline icon"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon-box"},[e("i",{staticClass:"el-icon-message icon"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon-box"},[e("i",{staticClass:"el-icon-alarm-clock icon"})])}],lt={name:"contact-us",components:{},mixins:[],props:{},data(){return{submitStatus:"",commentsform:{typeOfFeedback:"",eventDateAndTime:"",comments:""},personalForm:{name:"",email:"",phoneNumber:""},rules:{typeOfFeedback:[{required:!0,message:"請選擇反映事項",trigger:"change"}],eventDateAndTime:[{required:!0,message:"請選擇日期時間",trigger:"change"}],comments:[{required:!0,message:"請输入你的建議",trigger:"change"}],name:[{required:!0,message:"請输入你的姓名",trigger:"change"}],email:[{required:!0,message:"請输入你的電郵",trigger:"change"}],phoneNumber:[{required:!0,message:"請输入你的電話",trigger:"change"}]}}},computed:{internationalDict(){return this.$store.getters.getInternationalDict}},watch:{},mounted(){},methods:{submitHandler(){let t=0;this.$refs.commentsform.validate((e=>{e&&t++})),this.$refs.personalForm.validate((e=>{e&&t++})),t>=2&&(this.$message({type:"success",message:"成功提交"}),this.$refs.commentsform.resetFields(),this.$refs.personalForm.resetFields())}}},ct=lt,ut=(0,p.Z)(ct,ot,rt,!1,null,"5350ad88",null),dt=ut.exports,pt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{directives:[{name:"show",rawName:"v-show",value:"chinese"===t.internationalstate,expression:"internationalstate === 'chinese'"}],staticClass:"content"},[t._m(0),e("p",[t._v(' 本網站("本網站")內所載之資料由616餐飲管理有限公司("本公司")提供。閣下進入本網站及其任何網頁，即已同意此等使用條款。 本公司有權隨時更改本網站所呈示之資料使用條款，而毋須給予通知。本網站("本網站")內所載之資料由616餐飲管理有限公司("本公司")提供。 閣下進入本網站及其任何網頁，即已同意此等使用條款。本公司有全權酌情决定隨時更改、修訂、增加或刪除本網站所呈示之資料使用條款，而毋須給予通知。 ')]),t._m(1),e("p",[t._v(" 本公司在編製本網站之內容時已力求謹慎。本網站並無為資料之準確性發出任何保證或聲明，並無為其資料之準確性及完整性承擔任何責任。 本集團不會就任何電腦病毒或類似項目或程序以任何方式引致之損失或損害承擔而任何責任。本公司在編製本網站之內容時已力求謹慎。 本網站並無明示或默示資料之完整性、準確性、有效性、適當性發出任何保證、陳述或聲明，也並不為其資料之完整性、準確性、有效性、適當性承擔任何責任。 在任何情况下，本公司不會就任何方式，(包括但不限于如電腦病毒或類似項目或程序等)引致之任何直接、間接、衍生之損失或損害而承擔任何責任（包括但不限於失去使用、損失時間、損失資料、損失利潤、商業上損失等）。 ")]),t._m(2),e("p",[t._v(" 本網站可能會含有離開本網站並連繫至第三者網站之連結。本公司並無對該等第三者網站作出任何控制或影響，亦不會對使用或接達該等第三者網站承擔任何責任。 ")]),t._m(3),e("p",[t._v(" 除非特別指明，本網站和其文字的內容、版面及圖像等一切均由本公司擁有；網站之資料受到適用的版權法律或其他知識財產法律保護。未經本公司事先以書面同意，任何人或機構不得複製作其他用途。本網站容許列印、複製內容作私人或非商業用途。在任何情況下，本公司不會就使用本網站而引致之任何直接、間接、連帶或特別損失或損害負責。 ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"english"===t.internationalstate,expression:"internationalstate === 'english'"}],staticClass:"content"},[t._m(4),e("p",[t._v(' This website (the "Website") is provided by 616Catering Management Limited (the "Company"). By entering the Website, the user agrees to abide by the following terms and conditions of use. The Company reserves the right, at its sole discretion, to modify, change, add or remove, in whole or in part any terms and conditions at any time. ')]),t._m(5),e("p",[t._v(" The Company has used its best endeavor in compiling information for the Website. The Company does not give any representations or warranties of any kind, express or implied as to the accuracy, completeness, suitability, usefulness, reliability of any information published on the Website nor does it accept liability or responsibility whatsoever for the accuracy, completeness, suitability, usefulness and reliability of any information contained on the Website for any purpose. In no event, the Company will be held liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. ")]),t._m(6),e("p",[t._v(" The Website may contain certain hyperlinks that enable the user to leave the Website and enter third party websites for the convenience of users. The Company has no control or influence over the contents of third party websites and as such accepts or assumes no liability or responsibility for the contents of any linked third party website nor does the Company endorse, warrant or guarantee any products, services or information described or offered at these third party websites. ")]),t._m(7),e("p",[t._v(" Unless otherwise stated, the text, layout and graphics contained in the Website are the sole property of the Company and may only be reproduced with its express written consent. Some information provided on the Website may also be subject to the intellectual property rights of third parties. Permission is granted to print or download copies of information provided in the Website solely for personal and non-commercial use. ")])]),e("p",{staticClass:"copy-right"},[t._v("Copyright © 2022 616Catering Management Ltd. All Rights Reserved.")])])},mt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row-center pd-10-top pd-10-bottom"},[e("h2",{staticClass:"title"},[t._v("616餐飲管理有限公司網站之使用條款")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row-left pd-10-top"},[e("h2",{staticClass:"sub-title"},[t._v("免責聲明")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row-left pd-10-top"},[e("h2",{staticClass:"sub-title"},[t._v("外部連結")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row-left pd-10-top"},[e("h2",{staticClass:"sub-title"},[t._v("版權")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row-center pd-10-top pd-10-bottom"},[e("h2",{staticClass:"title"},[t._v("Terms and Conditions for the use of the 616Catering Management Limited Internet Website")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row-left pd-10-top"},[e("h2",{staticClass:"sub-title"},[t._v("Disclaimer")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row-left pd-10-top"},[e("h2",{staticClass:"sub-title"},[t._v("Internet Links")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row-left pd-10-top"},[e("h2",{staticClass:"sub-title"},[t._v("Copyright")])])}],gt={name:"privacy-view",components:{},mixins:[],props:{},data(){return{}},computed:{internationalstate(){return this.$store.getters.getInternationalstate}},watch:{},mounted(){},methods:{}},ht=gt,ft=(0,p.Z)(ht,pt,mt,!1,null,"eebd9d88",null),vt=ft.exports;n["default"].use(D.ZP);const bt=[{path:"/",name:"home",component:Z},{path:"/aboutUs",name:"aboutUs",component:G},{path:"/hotSale",name:"hotSale",component:X},{path:"/address",name:"address",component:it},{path:"/contactUs",name:"contactUs",component:dt},{path:"/hotSaleView",name:"hotSaleView",component:X},{path:"/privacy",name:"privacy",component:vt}],_t=new D.ZP({mode:"hash",base:"/",routes:bt});var Ct=_t,wt=a(3822);n["default"].use(wt.ZP);var yt=new wt.ZP.Store({state:{windowSize:"",internationalStatus:"chinese",international:{chinese:{homePage:"首頁",aboutUs:"關於我們",aboutUsDetail:"關於616",ourBrand:"旗下品牌",award:"得獎",lastPromotion:"最新推廣",recentoffers:"近期優惠",hotSale:"熱賣推介",address:"分店地址",takeAway:"外賣落單",takeOut:"外 賣 自 取",contactUs:"聯繫我們",contactUsWay:"聯繫方法",contactUsDetail:"您可透過電話或電郵與我們聯絡",joinUsDetail:"您可透過電話或whatsapp與我們聯絡",contactUsForm:{onlineForm:"網上表格",typeOfFeedback:"您的反映事項",eventDateAndTime:"事發日期和時間",comments:"您的意見",personalInformation:"個人資料",name:"姓名",email:"聯絡電郵",phoneNumber:"聯絡電話"},joinUs:"加入我們",hotjob:"熱門職位",jobHotLine:"招聘專線",location:"分店搜索",addressList:["香港","九龍","新界"],slogan:"食盡世界各地各種刁鑽牛部位",telephone:"電話",email:"電郵地址",workingHour:"辦公時間"},english:{homePage:"Home",aboutUs:"About Us",aboutUsDetail:"About 616",ourBrand:"Our Brands",award:"Award",lastPromotion:"Last Promotion",recentoffers:"Recent Offers",hotSale:"Hot Sale",address:"Branch Address",takeAway:"Takeaway Order",takeOut:"Take Out",contactUs:"Contact Us",contactUsWay:"Contact Information",contactUsDetail:"You can contact us by phone or email",joinUsDetail:"You can contact us by phone or whatsapp",contactUsForm:{onlineForm:"Online form",typeOfFeedback:"Type of feedback",eventDateAndTime:"Event date and time",comments:"Comments",personalInformation:"Personal information",name:"name",email:"email",phoneNumber:"phoneNumber"},joinUs:"Join Us",hotjob:"Popular positions",jobHotLine:"Recruitment hotline",location:"location",addressList:["Hong Kong Island","Kowloon","New Territories"],slogan:"食盡世界各地各種刁鑽牛部位",telephone:"Tel",email:"Email",workingHour:"Working Hour"}}},getters:{getInternationalDict(t){return t.international[t.internationalStatus]},getInternationalstate(t){return t.internationalStatus},getWindowSize(t){return t.windowSize}},mutations:{setInternationalStatus(t,e){t.internationalStatus=e},setWindowSize(t,e){t.windowSize=e}},actions:{commitInternationalStatus(t,e){t.commit("setInternationalStatus",e)},commitWindowSize(t,e){t.commit("setWindowSize",e)}},modules:{}}),xt=a(8499),kt=a.n(xt);n["default"].config.productionTip=!1,n["default"].use(kt()),new n["default"]({router:Ct,store:yt,render:t=>t(H)}).$mount("#app")},8149:function(t,e,a){t.exports=a.p+"img/photo-output_1.872ab471.jpg"},5098:function(t,e,a){t.exports=a.p+"img/photo-output_3.2f5d3c99.jpg"},9039:function(t,e,a){t.exports=a.p+"img/photo-output_4.55599c04.jpg"},163:function(t,e,a){t.exports=a.p+"img/photo-output_8.90050f09.jpg"},2869:function(t,e,a){t.exports=a.p+"img/photo-output_3.9b4b4118.jpg"},5572:function(t,e,a){t.exports=a.p+"img/photo-output_4.e66b90b3.jpg"},3882:function(t,e,a){t.exports=a.p+"img/photo-output_5.c6661c9a.png"},306:function(t,e,a){t.exports=a.p+"img/photo-output_6.b95d038c.png"},5801:function(t,e,a){t.exports=a.p+"img/photo-output_7.8defb6c3.jpg"},1962:function(t,e,a){t.exports=a.p+"img/616hotpot.2d57ae2f.png"},423:function(t,e,a){t.exports=a.p+"img/bbqLogo.d9c8b313.png"},3168:function(t,e,a){t.exports=a.p+"img/thousandLogo.1c91cbb4.png"},7489:function(t,e,a){t.exports=a.p+"img/tiger_logo_v1.ddf5b83b.png"},1492:function(t,e,a){t.exports=a.p+"img/villageLogo.8b981e3a.png"},2658:function(t,e,a){t.exports=a.p+"img/drink1.30638809.jpg"},46:function(t,e,a){t.exports=a.p+"img/drink2.96ca8d56.jpg"},5856:function(t,e,a){t.exports=a.p+"img/drink3.71089b8a.jpg"},855:function(t,e,a){t.exports=a.p+"img/buy3get1free.b53ef1c7.jpg"},2947:function(t,e,a){t.exports=a.p+"img/calmpot.b0dac04f.jpg"},6028:function(t,e,a){t.exports=a.p+"img/discount.29b8694e.jpg"},4867:function(t,e,a){t.exports=a.p+"img/minihotpot.1092d202.jpg"},2270:function(t,e,a){t.exports=a.p+"img/tiger.dd433435.jpg"}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=t,function(){var t=[];a.O=function(e,n,s,i){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],i=t[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(r=!1,i<o&&(o=i));if(r){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,s,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,i,o=n[0],r=n[1],l=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(l)var u=l(a)}for(e&&e(n);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},n=self["webpackChunk_616_website"]=self["webpackChunk_616_website"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(3918)}));n=a.O(n)})();
//# sourceMappingURL=app.89e820b1.js.map