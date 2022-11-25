(function(){"use strict";var t={9549:function(t,e,n){var a=n(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("MainView")],1)},i=[],o=function(){var t=this,e=t._self._c;return e("div",[e("el-container",[e("el-header",{staticClass:"header",attrs:{height:"60px"}},[e("headerBar")],1),e("el-container",[e("el-container",[e("el-main",{staticClass:"main"},[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1),e("el-footer",[e("footerBar")],1)],1)],1)],1)],1)},r=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-container"},[e("div",{staticClass:"pc"},[e("div",{staticClass:"header-bar"},[e("div",{staticClass:"logo",on:{click:function(e){return t.setActiveTag(0,"home")}}},[e("div",{staticClass:"company-616"})]),e("ul",{staticClass:"header-bar-ul"},[e("li",{class:1===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(1,"aboutUs")}}},[t._v(" "+t._s(t.internationalDict.aboutUs))]),e("li",{class:2===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(2,"hotSale")}}},[t._v(" "+t._s(t.internationalDict.hotSale))]),e("li",{class:4===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(4,"address")}}},[t._v(" "+t._s(t.internationalDict.address))]),e("li",{class:5===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(5,"contactUs")}}},[t._v(" "+t._s(t.internationalDict.contactUs))]),e("li",{class:6===t.activeTab?"active-tag":"",on:{click:function(e){return t.setActiveTag(6,"joinUs")}}},[t._v(" "+t._s(t.internationalDict.joinUs))])]),e("div",{staticClass:"international"},[e("span",{staticClass:"pointer",on:{click:function(e){return t.setLangure("chinese")}}},[t._v("繁中")]),e("span",[t._v("|")]),e("span",{staticClass:"pointer",on:{click:function(e){return t.setLangure("english")}}},[t._v("EN")])])])])])},c=[],m=(n(7658),{name:"header-bar",components:{},mixins:[],props:{},data(){return{activeTab:-1,lang:1}},computed:{internationalDict(){return this.$store.getters.getInternationalDict}},watch:{},mounted(){},methods:{setActiveTag(t,e){this.activeTab=t,e&&this.$router.push({name:e}).catch((()=>{}))},setLangure(t){this.$store.dispatch("commitInternationalStatus",t)}}}),d=m,p=n(1001),u=(0,p.Z)(d,l,c,!1,null,"35bd3c3f",null),h=u.exports,f=function(){var t=this;t._self._c;return t._m(0)},g=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",[t._v("616集團")]),e("div",[e("span",[t._v("Privacy Policy")]),e("span",[t._v("|")]),e("span",[t._v("Terms and Conditions")])]),e("div",[t._v("©2020-2021 616 Limited. All rights reserved.")])])}],v={name:"footer-bar",components:{},mixins:[],props:{},data(){return{}},computed:{},watch:{},mounted(){},methods:{}},b=v,_=(0,p.Z)(b,f,g,!1,null,"91fadcd4",null),x=_.exports,k={name:"main-page",components:{headerBar:h,footerBar:x},mixins:[],props:{},data(){return{}},computed:{},watch:{},mounted(){},methods:{}},C=k,w=(0,p.Z)(C,o,r,!1,null,"6542d5da",null),y=w.exports,D={components:{MainView:y}},L=D,F=(0,p.Z)(L,s,i,!1,null,null,null),T=F.exports,U=n(2631),S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("el-carousel",{staticClass:"carousel",attrs:{height:"400px"}},t._l(t.imgList,(function(t,n){return e("el-carousel-item",{key:n},[e("img",{staticClass:"carousel-img",attrs:{src:t.img,alt:t.name}})])})),1),e("div",{staticClass:"container flex-row-center"},[e("span",{staticClass:"slogan"},[t._v(t._s(t.internationalDict.slogan))])]),e("ourBind")],1)},A=[],j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"flex-row-center pd-10-top pd-10-bottom"},[e("h2",{staticClass:"title"},[t._v(t._s(t.internationalDict.ourBand))])]),e("div",{staticClass:"band-table"},t._l(t.bandList,(function(n,a){return e("div",{key:a},[e("div",{staticClass:"band-table-item"},[e("img",{attrs:{src:n.img,alt:"",width:n.width,height:"200"}}),e("span",{staticClass:"band-text"},[t._v(t._s(n.name))])])])})),0)])},O=[],I={name:"our-bind",components:{},mixins:[],props:{},data(){return{bandList:[{name:"616牛肉火鍋專門店",img:n(1962),width:320},{name:"616燒肉酒場",img:n(423),width:200},{name:"虎喰燒肉",img:n(7489),width:200},{name:"千絵",img:n(3168),width:200},{name:"客香邨",img:n(1492),width:150}]}},computed:{internationalDict(){return this.$store.getters.getInternationalDict}},watch:{},mounted(){},methods:{}},$=I,B=(0,p.Z)($,j,O,!1,null,"24bc06df",null),P=B.exports,Z={name:"HomeView",components:{ourBind:P},data(){return{imgList:[{name:"616",img:n(7645)},{name:"bbq",img:n(1578)},{name:"tiger",img:n(9953)},{name:"village",img:n(9483)},{name:"thousand",img:n(5275)}]}},computed:{internationalDict(){return this.$store.getters.getInternationalDict}}},H=Z,N=(0,p.Z)(H,S,A,!1,null,null,null),q=N.exports,V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container about-us"},[e("div",{staticClass:"flex-row-center pd-10-top pd-10-bottom"},[e("h2",{staticClass:"title"},[t._v(t._s(t.internationalDict.aboutUsDetail))])]),e("el-row",{staticClass:"about-us-box",attrs:{justify:"center",type:"flex",gutter:30}},[e("el-col",{attrs:{span:9}},[e("img",{staticClass:"test",attrs:{src:"",alt:"",width:"100%",height:"300px"}})]),e("el-col",{attrs:{span:9}},[e("h3",[t._v("616由始開始")]),e("p",[t._v("2016年，616在大埔開設第一家牛肉火鍋專門店，主打新鮮、優質的牛肉火鍋。")]),e("p",[t._v("隨後，616憑著高品質的產品與優質的服務一路高歌猛進，現時已有23家分店散落在香港各區， 對於喜歡追求美味、共冶一爐的香港人來說，616始終是他們聚餐的不二之選。")])])],1),e("el-row",{staticClass:"about-us-box",attrs:{justify:"center",type:"flex",gutter:30}},[e("el-col",{attrs:{span:9}},[e("h3",[t._v("我們一直堅持為顧客提優質的美食體驗")]),e("p",[t._v("616集團是少數幾家經營自己的餐飲生產中心和總部的火鍋餐廳之一。 在2021年，我們的餐飲生產中心和總部已擴建，並遷至荃灣利達工業中心，將食品加工、倉務部及物流車隊等營運工作，交由中央團隊管理。")]),e("p",[t._v("616生產中心總面積為22000平方英尺，可支持集團20多家餐廳，這些餐廳於2022年4月獲得ISO 22000和HACCP認證。")])]),e("el-col",{attrs:{span:9}},[e("img",{staticClass:"test",attrs:{src:"",alt:"",width:"100%",height:"300px"}})])],1),e("ourBind")],1)},z=[],E={name:"about-us",components:{ourBind:P},mixins:[],props:{},data(){return{}},computed:{internationalDict(){return this.$store.getters.getInternationalDict}},watch:{},mounted(){},methods:{}},K=E,M=(0,p.Z)(K,V,z,!1,null,"db43339c",null),G=M.exports,J=function(){var t=this,e=t._self._c;return e("div")},W=[],X={name:"hot-sale",components:{},mixins:[],props:{},data(){return{}},computed:{},watch:{},mounted(){},methods:{}},Y=X,R=(0,p.Z)(Y,J,W,!1,null,"5b27d5f3",null),Q=R.exports,tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"flex-row-center pd-10-top pd-10-bottom"},[e("h2",{staticClass:"title"},[t._v(t._s(t.internationalDict.address))])]),e("el-row",{staticClass:"sreach-bar",attrs:{type:"flex",gutter:20}},[e("el-col",{attrs:{span:4}},[e("el-input",{attrs:{placeholder:"請输入内容",clearable:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),e("el-col",{attrs:{span:16}},[e("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.internationalDict.addressList,(function(n,a){return e("el-checkbox",{key:a,attrs:{label:a}},[t._v(t._s(n))])})),1)],1)],1),e("div",{staticClass:"address-box inner-container"},[e("ul",{staticClass:"address-list"},t._l(t.addressList,(function(n,a){return e("li",{key:a},[e("el-card",{attrs:{"body-style":{display:"flex",alignItems:"center"}}},[e("div",{staticClass:"address-detail"},[e("h3",[t._v(t._s(n.name))]),e("p",[t._v("地址："+t._s(n.address))]),e("p",[t._v("電話："+t._s(n.phone))])]),e("div",{staticClass:"btn-group"},[n.googleLink?e("el-button",{attrs:{plain:"",type:"primary",round:""},on:{click:function(e){return t.openLink(n.googleLink)}}},[t._v("外 賣")]):t._e(),e("el-button",{attrs:{plain:"",type:"primary",round:""}},[t._v("訂 座")])],1)])],1)})),0)])],1)},et=[],nt={name:"address-view",components:{},mixins:[],props:{},data(){return{input:"",checkList:[0,1,2,3],shopList:[{name:"616牛肉火鍋專門店 天后店",address:"天后威非路道9號海閣洋樓地下C號舖",phone:"8481 2016",district:0,googleLink:"https://bit.ly/2VsIOG6"},{name:"616牛肉火鍋專門店 干諾道西店",address:"西環干諾道西188號香港商業中心地下15，16，18，20，22號舖",phone:"6518 4319",district:0,googleLink:"http://bit.ly/2KcsJTg"},{name:"616牛肉火鍋專門店 西環店",address:"西環皇后大道西384-386號三多大廈地下A舖",phone:"9034 9794",district:0,googleLink:"http://bit.ly/2HreZzg"},{name:"616牛肉火鍋專門店 銅鑼灣店",address:"銅鑼灣謝斐道391-407號新時代中心地下C舖",phone:"6158 2345",district:0,googleLink:"http://bit.ly/3bKSrYf"},{name:"千絵日本料理 大角咀店",address:"大角咀埃華街70-86號大同新村大成樓地下H1A&H1B舖",phone:"6518 4419",district:1},{name:"616客香邨 大圍店",address:"大圍積存街36號地舖",phone:"2602 7173",district:1},{name:"616燒肉酒場 大圍店",address:"新蒲崗錦榮街6-24A號金僑大廈地下02-03號舖",phone:"6531 3090",district:1},{name:"616牛肉火鍋專門店 土瓜灣店",address:"九龍城道68號瑧尚1樓103號鋪",phone:"9500 2152",district:1,googleLink:"https://bit.ly/3FDigIc"},{name:"616牛肉火鍋專門店 新蒲崗店",address:"九龍城道68號瑧尚1樓103號鋪",phone:"6512 4500",district:1,googleLink:"http://bit.ly/2PngdzF"},{name:"616牛肉火鍋專門店 長沙灣店",address:"深水埗青山道438號麗群閣地下1-4號舖",phone:"6518 4496",district:1,googleLink:"https://bit.ly/3cBYsqL"},{name:"616牛肉火鍋專門店 太子店",address:"太子白楊街21號地舖",phone:"6515 6265",district:1,googleLink:"http://bit.ly/3a6Z1GS"},{name:"616牛肉火鍋專門店 旺角店",address:"九龍旺角彌敦道594-596號旺角新城3樓",phone:"5502 4837",district:1,googleLink:"https://bit.ly/3pXekKZ"},{name:"616牛肉火鍋專門店 尖沙咀店",address:"尖沙咀赫德道4號利是大廈1樓",phone:"9037 4146",district:1,googleLink:"http://bit.ly/3bLoWFp"},{name:"616牛肉火鍋專門店 黃埔店",address:"紅磡民泰街27-47號黃埔新村J-L座地下B2號舖",phone:"9034 8857",district:1,googleLink:"http://bit.ly/2Hs5rE4"},{name:"虎喰燒肉·洒場 黃埔店",address:"將軍澳唐德街3號九龍東智選假日酒店7樓702號舖",phone:"6685 7670",district:2},{name:"616牛肉火鍋專門店 坑口店",address:"將軍澳培成里10號明德商場1樓105-106號舖",phone:"5669 7874",district:2,googleLink:"https://bit.ly/39S9zPt"},{name:"616牛肉火鍋專門店 將軍澳店",address:"將軍澳唐德街3號九龍東智選假日酒店7樓702號舖",phone:"6685 7670",district:2,googleLink:"https://bit.ly/32nlEbX"},{name:"616牛肉火鍋專門店 元朗店",address:"元朗西菁街9號富盛大廈地下95-100號舖",phone:"6531 1158",district:2,googleLink:"http://bit.ly/2STV5lT"},{name:"616牛肉火鍋專門店 荃灣店",address:"新界荃灣三陂坊14-18號安安樓地下C舖",phone:"9023 4199",district:2,googleLink:"http://bit.ly/2SyLu4Q"},{name:"616牛肉火鍋專門店 大埔店",address:"大埔翠怡街3號翠怡花園B座地下18號舖",phone:"3565 6878 / 6531 1169",district:2,googleLink:"http://bit.ly/2HvoXzK"},{name:"616牛肉火鍋專門店 馬鞍山店",address:"馬鞍山鞍駿街1號馬鞍山中心地下A06舖",phone:"6518 4507",district:2,googleLink:"https://bit.ly/30aYPnB"},{name:"616牛肉火鍋專門店 大圍店",address:"大圍積富街33號積康樓地下C&D舖",phone:"3709 2128 / 6531 1192",district:2,googleLink:"http://bit.ly/2P0G00z"}]}},computed:{addressList(){let t=this.shopList.filter((t=>this.checkList.includes(t.district)));if(this.input){var e=new RegExp(this.input);t=t.filter((t=>t.name.match(e)))}return t},internationalDict(){return this.$store.getters.getInternationalDict}},watch:{},mounted(){},methods:{openLink(t){window.open(t)}}},at=nt,st=(0,p.Z)(at,tt,et,!1,null,"aea69ba4",null),it=st.exports,ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container flex-colum"},[e("div",{staticClass:"flex-row-center pd-10-top pd-10-bottom"},[e("h2",{staticClass:"title"},[t._v(t._s(t.internationalDict.contactUs))])]),e("div",{staticClass:"flex-row-left pd-10-top"},[e("h2",{staticClass:"sub-title"},[t._v(t._s(t.internationalDict.contactUsForm.onlineForm))])]),e("el-row",[e("el-col",{attrs:{xs:24,sm:12,md:10,lg:10,xl:8}},[e("el-form",{ref:"commentsform",attrs:{"label-width":"200px","label-position":"top",size:"medium",rules:t.rules},model:{value:t.commentsform,callback:function(e){t.commentsform=e},expression:"commentsform"}},[e("el-form-item",{attrs:{label:t.internationalDict.contactUsForm.typeOfFeedback,prop:"typeOfFeedback"}},[e("el-select",{attrs:{placeholder:"請選擇反映事項"},model:{value:t.commentsform.typeOfFeedback,callback:function(e){t.$set(t.commentsform,"typeOfFeedback",e)},expression:"commentsform.typeOfFeedback"}},[e("el-option",{attrs:{label:"评语",value:"0"}}),e("el-option",{attrs:{label:"建议",value:"1"}}),e("el-option",{attrs:{label:"讚賞",value:"1"}}),e("el-option",{attrs:{label:"投訴",value:"1"}})],1)],1),e("el-form-item",{attrs:{label:t.internationalDict.contactUsForm.eventDateAndTime,prop:"eventDateAndTime"}},[e("el-date-picker",{attrs:{type:"datetime",placeholder:"請選擇日期时间"},model:{value:t.commentsform.eventDateAndTime,callback:function(e){t.$set(t.commentsform,"eventDateAndTime",e)},expression:"commentsform.eventDateAndTime"}})],1),e("el-form-item",{attrs:{label:t.internationalDict.contactUsForm.comments,prop:"comments"}},[e("el-input",{attrs:{type:"textarea",rows:4,placeholder:"請输入你的建議"},model:{value:t.commentsform.comments,callback:function(e){t.$set(t.commentsform,"comments",e)},expression:"commentsform.comments"}})],1)],1)],1)],1),e("div",{staticClass:"flex-row-left pd-10-top"},[e("h2",{staticClass:"sub-title"},[t._v(t._s(t.internationalDict.contactUsForm.personalInformation))])]),e("el-row",[e("el-col",{attrs:{xs:24,sm:12,md:10,lg:10,xl:8}},[e("el-form",{ref:"personalForm",attrs:{"label-width":"200px","label-position":"top",size:"medium",rules:t.rules},model:{value:t.personalForm,callback:function(e){t.personalForm=e},expression:"personalForm"}},[e("el-form-item",{attrs:{label:t.internationalDict.contactUsForm.name,prop:"name"}},[e("el-input",{attrs:{type:"text",placeholder:"请输入内容"},model:{value:t.personalForm.name,callback:function(e){t.$set(t.personalForm,"name",e)},expression:"personalForm.name"}})],1),e("el-form-item",{attrs:{label:t.internationalDict.contactUsForm.email,prop:"email"}},[e("el-input",{attrs:{type:"text",placeholder:"请输入内容"},model:{value:t.personalForm.email,callback:function(e){t.$set(t.personalForm,"email",e)},expression:"personalForm.email"}})],1),e("el-form-item",{attrs:{label:t.internationalDict.contactUsForm.phoneNumber,prop:"phoneNumber"}},[e("el-input",{attrs:{type:"text",placeholder:"请输入内容"},model:{value:t.personalForm.phoneNumber,callback:function(e){t.$set(t.personalForm,"phoneNumber",e)},expression:"personalForm.phoneNumber"}})],1)],1)],1)],1),e("el-button",{staticClass:"btn",attrs:{type:"primary",size:"medium"},on:{click:t.submitHandler}},[t._v("提交")]),e("div",{staticClass:"pd-10-top pd-10-bottom"},[t._v("您亦可透過郵寄、電話或電郵與我們聯絡")]),t._m(0),t._m(1),t._m(2)],1)},rt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row-left gap"},[e("div",{staticClass:"icon-box"},[e("i",{staticClass:"el-icon-phone-outline icon"})]),e("div",{staticClass:"content-box"},[e("h3",[t._v("Tel/ WhatsApp")]),e("p",[t._v("(852)5441 3133")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row-left gap"},[e("div",{staticClass:"icon-box"},[e("i",{staticClass:"el-icon-message icon"})]),e("div",{staticClass:"content-box"},[e("h3",[t._v("Email")]),e("p",[t._v("info@616.com.hk")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-row-left gap"},[e("div",{staticClass:"icon-box"},[e("i",{staticClass:"el-icon-alarm-clock icon"})]),e("div",{staticClass:"content-box"},[e("h3",[t._v("Working Hour")]),e("p",[t._v("星期一至五上午9時至下午6時（星期六、日及公眾假期休息）")])])])}],lt={name:"contact-us",components:{},mixins:[],props:{},data(){return{submitStatus:"",commentsform:{typeOfFeedback:"",eventDateAndTime:"",comments:""},personalForm:{name:"",email:"",phoneNumber:""},rules:{typeOfFeedback:[{required:!0,message:"請選擇反映事項",trigger:"change"}],eventDateAndTime:[{required:!0,message:"請選擇日期時間",trigger:"change"}],comments:[{required:!0,message:"請输入你的建議",trigger:"change"}],name:[{required:!0,message:"請输入你的姓名",trigger:"change"}],email:[{required:!0,message:"請输入你的電郵",trigger:"change"}],phoneNumber:[{required:!0,message:"請输入你的電話",trigger:"change"}]}}},computed:{internationalDict(){return this.$store.getters.getInternationalDict}},watch:{},mounted(){},methods:{submitHandler(){let t=0;this.$refs.commentsform.validate((e=>{e&&t++})),this.$refs.personalForm.validate((e=>{e&&t++})),t>=2&&(this.$message({type:"success",message:"成功提交"}),this.$refs.commentsform.resetFields(),this.$refs.personalForm.resetFields())}}},ct=lt,mt=(0,p.Z)(ct,ot,rt,!1,null,"a7470dac",null),dt=mt.exports,pt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex-row-center pd-10-top pd-10-bottom"},[e("h2",{staticClass:"title"},[t._v(t._s(t.internationalDict.joinUs))])]),e("div",{staticClass:"flex-row-left pd-10-top"},[e("h2",{staticClass:"sub-title"},[t._v(t._s(t.internationalDict.hotjob))])]),e("div",{staticClass:"flex-row-left pd-10-top"},[e("h2",{staticClass:"sub-title"},[t._v(t._s(t.internationalDict.hotjob))])])])},ut=[],ht={name:"join-us",components:{},mixins:[],props:{},data(){return{}},computed:{internationalDict(){return this.$store.getters.getInternationalDict}},watch:{},mounted(){},methods:{}},ft=ht,gt=(0,p.Z)(ft,pt,ut,!1,null,"2a82600d",null),vt=gt.exports;a["default"].use(U.ZP);const bt=[{path:"/",name:"home",component:q},{path:"/aboutUs",name:"aboutUs",component:G},{path:"/hotSale",name:"hotSale",component:Q},{path:"/address",name:"address",component:it},{path:"/contactUs",name:"contactUs",component:dt},{path:"/joinUsView",name:"joinUsView",component:vt},{path:"/hotSaleView",name:"hotSaleView",component:Q}],_t=new U.ZP({mode:"hash",base:"/616_website_publish/",routes:bt});var xt=_t,kt=n(3822);a["default"].use(kt.ZP);var Ct=new kt.ZP.Store({state:{internationalStatus:"chinese",international:{chinese:{aboutUs:"關於我們",aboutUsDetail:"關於616",ourBand:"旗下品牌",award:"得獎",hotSale:"熱賣商品",address:"分店地址",takeAway:"外賣落單",contactUs:"聯係我們",contactUsForm:{onlineForm:"網上表格",typeOfFeedback:"您的反映事項",eventDateAndTime:"事發日期和時間",comments:"您的意見",personalInformation:"個人資料",name:"姓名",email:"聯絡電郵",phoneNumber:"聯絡電話"},joinUs:"加入我們",hotjob:"熱門職位",location:"分店搜索",addressList:["香港","九龍","新界"],slogan:"真朋友與616牛肉火鍋在一起"},english:{aboutUs:"About Us",aboutUsDetail:"About 616",ourBand:"Our Band",award:"Award",hotSale:"Hot Sale",address:"Branch Address",takeAway:"Takeaway Order",contactUs:"Contact Us",contactUsForm:{onlineForm:"Online form",typeOfFeedback:"Type of feedback",eventDateAndTime:"Event date and time",comments:"Comments",personalInformation:"Personal information",name:"name",email:"email",phoneNumber:"phoneNumber"},joinUs:"Join Us",hotjob:"Popular positions",location:"location",addressList:["Hong Kong Island","Kowloon","New Territories"],slogan:"FRENIDSHIP with 616 Beef Hot Pot"}}},getters:{getInternationalDict(t){return t.international[t.internationalStatus]},getInternationalstate(t){return t.internationalStatus}},mutations:{setInternationalStatus(t,e){t.internationalStatus=e}},actions:{commitInternationalStatus(t,e){console.log(e),t.commit("setInternationalStatus",e)}},modules:{}}),wt=n(8499),yt=n.n(wt);a["default"].config.productionTip=!1,a["default"].use(yt()),new a["default"]({router:xt,store:Ct,render:t=>t(T)}).$mount("#app")},7645:function(t,e,n){t.exports=n.p+"img/616_1.e6fbe21a.jpg"},1578:function(t,e,n){t.exports=n.p+"img/bbq1.8cacf514.jpg"},5275:function(t,e,n){t.exports=n.p+"img/thousand1.ff76d8c4.jpg"},9953:function(t,e,n){t.exports=n.p+"img/tiger1.905c3e21.jpg"},9483:function(t,e,n){t.exports=n.p+"img/villagel1.a6929338.jpg"},1962:function(t,e,n){t.exports=n.p+"img/616hotpot.2d57ae2f.png"},423:function(t,e,n){t.exports=n.p+"img/bbqLogo.d9c8b313.png"},3168:function(t,e,n){t.exports=n.p+"img/thousandLogo.1c91cbb4.png"},7489:function(t,e,n){t.exports=n.p+"img/tiger_logo_v1.ddf5b83b.png"},1492:function(t,e,n){t.exports=n.p+"img/villageLogo.8b981e3a.png"}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var i=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,a,s,i){if(!a){var o=1/0;for(m=0;m<t.length;m++){a=t[m][0],s=t[m][1],i=t[m][2];for(var r=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(r=!1,i<o&&(o=i));if(r){t.splice(m--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var m=t.length;m>0&&t[m-1][2]>i;m--)t[m]=t[m-1];t[m]=[a,s,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/616_website_publish/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,i,o=a[0],r=a[1],l=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(l)var m=l(n)}for(e&&e(a);c<o.length;c++)i=o[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(m)},a=self["webpackChunk_616_website"]=self["webpackChunk_616_website"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9549)}));a=n.O(a)})();
//# sourceMappingURL=app.ffe6f287.js.map