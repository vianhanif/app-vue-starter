webpackJsonp([1],[,function(t,e,n){"use strict";n.d(e,"e",function(){return a}),n.d(e,"g",function(){return r}),n.d(e,"f",function(){return i}),n.d(e,"i",function(){return o}),n.d(e,"x",function(){return u}),n.d(e,"j",function(){return s}),n.d(e,"n",function(){return c}),n.d(e,"v",function(){return l}),n.d(e,"o",function(){return f}),n.d(e,"w",function(){return d}),n.d(e,"d",function(){return p}),n.d(e,"h",function(){return v}),n.d(e,"u",function(){return h}),n.d(e,"c",function(){return m}),n.d(e,"l",function(){return _}),n.d(e,"r",function(){return b}),n.d(e,"q",function(){return g}),n.d(e,"t",function(){return y}),n.d(e,"a",function(){return x}),n.d(e,"k",function(){return T}),n.d(e,"y",function(){return S}),n.d(e,"z",function(){return w}),n.d(e,"m",function(){return E}),n.d(e,"b",function(){return A}),n.d(e,"p",function(){return O}),n.d(e,"s",function(){return D});var a="APP",r="APP_MENUS",i="APP_CONTAINER",o="CLOSE_DRAWER",u="TABLE",s="DATA",c="RUN_PROCESS",l="STOP_PROCESS",f="RUN_TEST",d="STOP_TEST",p="ADD_TEST_RESULT",v="CLEAR_TEST_DATA",h="SET_TEST_INPUT",m="ADD_TEST_COUNT",_="RESET_TEST_COUNT",b="SET_MATCH",g="SET_LAST_RESULT",y="SET_TABLE_SEARCH",x="ADD_RANDOM_DATA",T="RESET_RANDOM_DATA",S="TICK_TIME",w="TIME_ELAPSED",E="RESET_TICK_TIME",A="ADD_SAMPLE",O="SAMPLES",D="SET_MATHCED"},,,,,,,,,,function(t,e,n){"use strict";var a=n(22);e.a={app:{title:"Collision Tester ( Updated ) - SJR(DATA)",SHA:function(t){return Object(a.encrypt)(["scytale","jefferson","railFence"],t)}}}},,,function(t,e,n){"use strict";e.a={name:"App",data:function(){return{}},head:{link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}]}}},function(t,e,n){"use strict";var a=n(2),r=n.n(a),i=n(3),o=n(1),u=n(11);e.a={name:"SHAMain",computed:r()({},Object(i.c)({AppMenus:o.g,AppContainer:o.f})),methods:{handleDrawer:function(t){this.$store.commit(o.i),this.$router.push(t)}},data:function(){return{title:u.a.app.title}},components:{"app-drawer":n(72).default}}},,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"encrypt",function(){return c}),n.d(e,"decrypt",function(){return l}),n.d(e,"collection",function(){return f});var a=n(2),r=n.n(a),i=n(69),o=n(70),u=n(71),s={scytale:i,jefferson:o,railFence:u},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1],n=e;return t.forEach(function(t){n=s[t].encrypt(n)}),n},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1],n=e;return t.reverse().forEach(function(t){n=s[t].decrypt(n)}),n},f=r()({encrypt:c,decrypt:l},s)},function(t,e,n){"use strict";e.a={name:"AppDrawer",props:["container","menus","title","handler"],methods:{handleMenu:function(t){this.handler(t)}}}},function(t,e,n){"use strict";var a=n(2),r=n.n(a),i=n(3),o=n(1);e.a={name:"Home",computed:r()({},Object(i.c)({Table:o.x,Data:o.j}),{progressCount:function(){var t=this.Data;return t.count/t.maxCount*100}}),methods:{handleSearch:function(t){this.$store.commit(o.t,t.target.value)}},components:{"home-header":n(78).default}}},function(t,e,n){"use strict";var a=n(2),r=n.n(a),i=n(3),o=n(1),u=n(80);e.a={name:"ShaHomeHeader",mixins:[u.a],computed:r()({},Object(i.c)({Data:o.j,App:o.e,Table:o.x,Time:o.z,Sample:o.p}),{time:function(){var t=this.Time,e=t.second,n=t.minute,a=t.hour,r=String(e).length<2?"0"+e:e,i=String(n).length<2?"0"+n:n;return(String(a).length<2?"0"+a:a)+":"+i+":"+r},matchCount:function(){var t=this.Data.count;return this.delimeter(t)+" / "+this.delimeter(this.Sample.length)}}),mounted:function(){var t=this,e=this.Data,n=this.Time,a=this.Sample;window.setInterval(function(){e.loading&&t.runTest({data:e,samples:a,time:n})},1),window.setInterval(function(){e.loading&&t.$store.commit(o.y)},1e3)},methods:r()({wrapText:function(t){for(var e="",n=0;n<t.length;n++)e+=n>0&&n%97==0?"\n":t.charAt(n);return e}},Object(i.b)({runTest:o.o,stopTest:o.w}),{handleInput:function(t){this.$store.commit(o.u,t.target.value),this.$store.commit(o.r,t.target.value)},handleResetTest:function(){this.$store.commit(o.l),this.$store.commit(o.h),this.$store.commit(o.r,""),this.$store.commit(o.u,""),this.$store.commit(o.k),this.$store.commit(o.m),this.$store.commit(o.s,!1)},handleTest:function(){this.Data.loading?this.stopTest():null!==this.Data.input&&""!==this.Data.input&&this.$store.commit(o.n)}}),data:function(){return{input:""}}}},function(t,e,n){"use strict";var a=n(2),r=n.n(a),i=n(1),o=n(3);e.a={name:"Samples",computed:r()({},Object(o.c)({Data:i.j,Table:i.x,Sample:i.p})),methods:{handleTest:function(){this.$store.commit(i.b,this.value),this.value=""}},data:function(){return{value:""}}}},function(t,e,n){"use strict";var a=n(22);e.a={name:"Tester",computed:{cryptoResult:function(){return a[this.method](this.cryptor,this.input.value)}},methods:{handleInput:function(t){this.input.value=t.target.value,this.output.value=this.input.value}},data:function(){return{method:"encrypt",cryptor:[],allcryptor:{jefferson:!1,scytale:!1,railFence:!1},input:{value:""},output:{value:""}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),r=n(31),i=n(35),o=n(89);a.a.config.productionTip=!1,a.a.config.devtools=!0,a.a.config.debug=!0,new a.a({el:"#app",store:o.a,router:i.a,template:"<App/>",components:{App:r.a}})},,,function(t,e,n){"use strict";function a(t){n(32)}var r=n(14),i=n(34),o=n(0),u=a,s=Object(o.a)(r.a,i.a,i.b,!1,u,null,null);e.a=s.exports},function(t,e){},,function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[]},function(t,e,n){"use strict";var a=n(6),r=n(36),i=n.n(r),o=n(37),u=n(38),s=n.n(u),c=n(39),l=(n.n(c),n(40));n.n(l);a.a.use(i.a),a.a.use(o.a),a.a.use(s.a,{separator:"-",complement:"Vue App Starter"}),e.a=new o.a({routes:[{path:"/",redirect:"/app"},{path:"/app",redirect:"/app/home"},{path:"/app",name:"COLlISION_APP",component:n(41).default,children:[{path:"home",component:n(76).default},{path:"samples",component:n(83).default},{path:"tester",component:n(86).default}]}]})},,,,function(t,e){},,function(t,e,n){"use strict";function a(t){n(42)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(15),i=n(75),o=n(0),u=a,s=Object(o.a)(r.a,i.a,i.b,!1,u,"data-v-55f19d85",null);e.default=s.exports},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"encrypt",function(){return a}),n.d(e,"decrypt",function(){return r});var a=function(t){for(var e=t.split(""),n=e.length/5,a="",r=0;r<5;r++)for(var i=0;i<n;i++)5*i+r<e.length?a+=e[5*i+r]:a+="~";return a},r=function(t){for(var e=t.split(""),n=e.length/5,a="",r=0;r<n;r++)for(var i=0;i<5;i++)5*r+i<e.length?a+=e[i*n+r]:a+="~";return a}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"encrypt",function(){return o}),n.d(e,"decrypt",function(){return u});var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789` !@#$%^&*()_ +-=/[]{}|;'\\:\",.<>?",r=function(){var t=[];return a.split("").forEach(function(e,n){t.push(e)}),t},i=function(t,e){t.split("").forEach(function(t,n){var a=0,i=[];r().forEach(function(e,n){i.push(e),t===e&&(a=n)}),e.push({position:a,disk:i})})},o=function(t){var e=[],n="";return i(t,e),e.forEach(function(t,e){n+=t.disk[function(){return t.position+5>=t.disk.length?(t.position+5)%t.disk.length:t.position+5}()]}),n},u=function(t){var e=[],n="";return i(t,e),e.forEach(function(t,e){n+=t.disk[function(){return t.position-5<0?(t.position-5)%t.disk.length*-1:t.position-5}()]}),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"encrypt",function(){return i}),n.d(e,"decrypt",function(){return o});var a=function(t,e){for(var n=0;n<e;n++)t.push([])},r=function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=n,i=!1;t.split("").forEach(function(t,n){e.forEach(function(n,i){e[i].push(i===r?null!==a?a:t:"_")}),i=0===r||i&&r>=1&&r+1<e.length,r=i?r+1:r-1})},i=function(t){var e=[];return a(e,3),r(t,e,2),e.join("").replace(/,|_/g,"")},o=function(t){var e="",n=[];a(n,3),r(t,n,2,"*");var i=0;return t.split("").forEach(function(e){n.forEach(function(e,a){e.forEach(function(e,r){"*"===e&&(n[a][r]=t.split("")[i],i++)})})}),i=0,t.split("").forEach(function(t,a){n.forEach(function(t,a){e+=n[a][i]}),i++}),e.replace(/,|_/g,"")}},function(t,e,n){"use strict";function a(t){n(73)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(23),i=n(74),o=n(0),u=a,s=Object(o.a)(r.a,i.a,i.b,!1,u,"data-v-7aacfa3d",null);e.default=s.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{standalone:""}},[n("v-navigation-drawer",{attrs:{absolute:"",persistent:"",light:"","mini-variant":t.container.mini,overflow:""},on:{"update:miniVariant":function(e){t.$set(t.container,"mini",e)}},model:{value:t.container.drawer,callback:function(e){t.$set(t.container,"drawer",e)},expression:"container.drawer"}},[n("v-list",{staticClass:"pt-0",attrs:{dense:""}},[n("v-divider"),t._v(" "),t._l(t.menus,function(e){return n("v-list-tile",{key:e.title,nativeOn:{click:function(n){t.handleMenu(e.path)}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2)],1),t._v(" "),n("v-toolbar",{staticClass:"indigo darken-4",attrs:{fixed:"",dark:""}},[n("v-toolbar-side-icon",{nativeOn:{click:function(e){e.stopPropagation(),t.container.drawer=!t.container.drawer}}}),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.title))])],1),t._v(" "),n("main",[n("v-container",{attrs:{fluid:""}},[t._t("default")],2)],1)],1)},r=[]},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-drawer",{attrs:{title:t.title,menus:t.AppMenus,container:t.AppContainer,handler:t.handleDrawer}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs10:"","offset-xs1":"",md6:"","offset-md3":""}},["/app/home"===t.$route.path||"/app/samples"===t.$route.path?n("p",[t._v("\n        Instructions for First Time Use:\n        "),n("ol",[n("li",[t._v("Insert data samples. click ("),n("v-icon",[t._v("menu")]),t._v('), then select "Samples"')],1),t._v(" "),n("li",[t._v('In "Samples" page, enter sample data as much as you want. (all data here will be used for collision test)')]),t._v(" "),n("li",[t._v("After finish, you can go back to main page. click ("),n("v-icon",[t._v("menu")]),t._v('), then select "Home"')],1),t._v(" "),n("li",[t._v('In this state, you have several sample data to test with. Now, Enter the data you want to test in the form "Test Data". You will see the resulting hash it generates on "Hash :".')]),t._v(" "),n("li",[t._v('Next, click "Run" to start the test. This action will test your data whether your data has any collision with any of your samples.')]),t._v(" "),n("li",[t._v('You will see a notice saying "Match found" if there is a match. This means the data has a collision. Or if not, The app will continue looking until the last sample and stop itself.')]),t._v(" "),n("li",[t._v('You can reset your test anytime by clicking "Reset"')])])]):t._e(),t._v(" "),n("v-card",{staticClass:"mt-5 white lighten-4 elevation-4"},[n("v-card-text",{staticClass:"text-xs-right"},[n("router-view")],1)],1)],1)],1)],1)},r=[]},function(t,e,n){"use strict";function a(t){n(77)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),i=n(82),o=n(0),u=a,s=Object(o.a)(r.a,i.a,i.b,!1,u,"data-v-76e31b08",null);e.default=s.exports},function(t,e){},function(t,e,n){"use strict";function a(t){n(79)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(25),i=n(81),o=n(0),u=a,s=Object(o.a)(r.a,i.a,i.b,!1,u,"data-v-1edd6624",null);e.default=s.exports},function(t,e){},function(t,e,n){"use strict";e.a={methods:{delimeter:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}}},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs10:""}},[n("v-text-field",{attrs:{name:"testInput",label:"Test Data",value:t.Data.input,disabled:t.Data.loading||t.Table.items.length>0,"multi-line":""},nativeOn:{input:function(e){return t.handleInput(e)}}})],1),t._v(" "),n("v-flex",{attrs:{xs2:""}},[t.Table.items.length>0&&!t.Data.loading?n("v-btn",{staticClass:"yellow accent-1",nativeOn:{click:function(e){t.handleResetTest()}}},[t._v("\n      Reset\n    ")]):t._e(),t._v(" "),!t.Data.matched&&t.Data.count<t.Sample.length?n("v-btn",{staticClass:"yellow accent-1",attrs:{disabled:t.Sample.length<=0},nativeOn:{click:function(e){t.handleTest()}}},[t._v("\n      "+t._s(t.App.test.btn)+"\n    ")]):t._e()],1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("p",{staticClass:"subheading text-xs-left",staticStyle:{"word-wrap":"break-word"}},[n("b",[t._v("Hash :")]),t._v(" "),n("br"),t._v("\n        "+t._s(t.wrapText(t.Data.match))+"\n      ")]),t._v(" "),n("p",{staticClass:"subheading text-xs-left"},[n("b",[t._v("Sample ("+t._s(t.matchCount)+") : "+t._s(t.Data.matched?"(Match found)":""))]),t._v(" "),n("br"),t._v("\n        "+t._s(t.Data.lastResult.input)+"\n      ")])])],1)],1)},r=[]},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("home-header"),t._v(" "),n("div",{staticClass:"text-xs-center mb-5"},[t.Table.items.length>0?n("v-text-field",{attrs:{"append-icon":"search",name:"search",label:"Search Table",value:t.Table.search,"single-line":""},nativeOn:{input:function(e){return t.handleSearch(e)}}}):t._e(),t._v(" "),n("v-data-table",{staticClass:"elevation-1 white",attrs:{dark:"",headers:t.Table.headers,items:t.Table.items,search:t.Table.search},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.count))]),t._v(" "),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.input))]),t._v(" "),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.output))])]}}])})],1)],1)},r=[]},function(t,e,n){"use strict";function a(t){n(84)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(26),i=n(85),o=n(0),u=a,s=Object(o.a)(r.a,i.a,i.b,!1,u,"data-v-3bf13573",null);e.default=s.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-text-field",{attrs:{name:"testInput",label:"Enter Sample (ex:/ data 1)",disabled:t.Data.loading||t.Table.items.length>0,"multi-line":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("v-btn",{staticClass:"yellow accent-1",attrs:{disabled:""==t.value},nativeOn:{click:function(e){t.handleTest()}}},[t._v("\n      Add Test Sample\n    ")]),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.Sample,function(e,a){return n("v-flex",{key:a,attrs:{sm6:""}},[n("v-card-text",{staticClass:"text-xs-left elevation-4"},[n("div",{staticStyle:{"word-wrap":"break-word"}},[t._v(t._s(e))])])],1)}))],1)},r=[]},function(t,e,n){"use strict";function a(t){n(87)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(27),i=n(88),o=n(0),u=a,s=Object(o.a)(r.a,i.a,i.b,!1,u,"data-v-0fbc2404",null);e.default=s.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{name:"testInput",label:"Input",value:t.input.value,"multi-line":""},nativeOn:{input:function(e){return t.handleInput(e)}}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-radio-group",{model:{value:t.method,callback:function(e){t.method=e},expression:"method"}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs3:""}},[n("v-radio",{attrs:{label:"Encrypt",value:"encrypt"}})],1),t._v(" "),n("v-flex",{attrs:{xs3:""}},[n("v-radio",{attrs:{label:"Decrypt",value:"decrypt"}})],1)],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs3:""}},[n("v-checkbox",{attrs:{label:"Scytale X",value:"scytale"},model:{value:t.cryptor,callback:function(e){t.cryptor=e},expression:"cryptor"}})],1),t._v(" "),n("v-flex",{attrs:{xs3:""}},[n("v-checkbox",{attrs:{label:"Jefferson X",value:"jefferson"},model:{value:t.cryptor,callback:function(e){t.cryptor=e},expression:"cryptor"}})],1),t._v(" "),n("v-flex",{attrs:{xs3:""}},[n("v-checkbox",{attrs:{label:"Rail Fence X",value:"railFence"},model:{value:t.cryptor,callback:function(e){t.cryptor=e},expression:"cryptor"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-card-text",{staticClass:"text-xs-left"},[n("h6",[n("b",[t._v("Output : ")])]),t._v(" "),n("h6",{staticStyle:{"word-wrap":"break-word"}},[t._v("\n        "+t._s(t.cryptoResult)+"\n      ")])])],1)],1)},r=[]},function(t,e,n){"use strict";var a=n(6),r=n(3),i=n(90);n(98).polyfill(),a.a.use(r.a),e.a=new r.a.Store({modules:{collision:i.a}})},function(t,e,n){"use strict";var a=n(91),r=n(95),i=n(96),o=n(97);e.a={state:o.a,getters:r.a,actions:a.a,mutations:i.a}},function(t,e,n){"use strict";var a,r=n(12),i=n.n(r),o=n(1),u=n(11);e.a=(a={},i()(a,o.o,function(t,e){var n=t.commit,a=e.data,r=e.samples,i=e.time,s=a.input,c=a.count,l=a.match,f=a.matched,d=a.lastResult,p=u.a.app.SHA;if(null!==s&&""!==s&&r.length>0&&!f)if(c<r.length){0===c&&n(o.a,s);var v=function(){return r[c]}(),h=i.second,m=i.minute,_=i.hour,b=String(h).length<2?"0"+h:h,g=String(m).length<2?"0"+m:m,y=String(_).length<2?"0"+_:_,x=y+":"+g+":"+b;n(o.a,v);var T=p(v);n(o.s,l===T),n(o.d,{count:c+1,time:x,input:String(l===T),output:T}),s!==d.input?(n(o.q,{time:x,input:v,value:T}),n(o.c)):n(o.v)}else n(o.v);else n(o.v)}),i()(a,o.w,function(t){(0,t.commit)(o.v)}),a)},,,,function(t,e,n){"use strict";var a,r=n(12),i=n.n(r),o=n(1);e.a=(a={},i()(a,o.e,function(t){return t.app}),i()(a,o.g,function(t){return t.app.menus}),i()(a,o.f,function(t){return t.app.container}),i()(a,o.x,function(t){return t.table}),i()(a,o.j,function(t){return t.data}),i()(a,o.z,function(t){return t.time}),i()(a,o.p,function(t){return t.samples.value}),a)},function(t,e,n){"use strict";var a,r=n(12),i=n.n(r),o=n(1),u=n(11);e.a=(a={},i()(a,o.i,function(t){t.app.container.drawer=!1}),i()(a,o.b,function(t,e){t.samples.value.push(e)}),i()(a,o.n,function(t){var e=t.data,n=t.app;e.loading=!0,n.test.btn="Stop"}),i()(a,o.v,function(t){var e=t.data,n=(t.table,t.app);e.loading=!1,n.test.btn="Continue"}),i()(a,o.d,function(t,e){t.table.items.push(e)}),i()(a,o.h,function(t){var e=t.table,n=t.app;e.items=[],n.test.btn="Run"}),i()(a,o.u,function(t,e){t.data.input=e}),i()(a,o.c,function(t){t.data.count+=1}),i()(a,o.l,function(t){t.data.count=0}),i()(a,o.t,function(t,e){t.table.search=e}),i()(a,o.a,function(t,e){t.data.randomData.push(e)}),i()(a,o.k,function(t){var e=t.data;e.randomData=[],e.lastResult={time:"00:00:00",input:"",value:""}}),i()(a,o.q,function(t,e){t.data.lastResult=e}),i()(a,o.r,function(t,e){var n=t.data;if(null!==e&&""!==e){var a=u.a.app.SHA;n.match=a(e)}else n.match=""}),i()(a,o.m,function(t){var e=t.time;e.second=0,e.minute=0,e.hour=0}),i()(a,o.y,function(t){var e=t.time;59===e.minute&&59===e.second?(e.hour+=1,e.minute=0,e.second=0):59===e.second?(e.minute+=1,e.second=0):e.second+=1}),i()(a,o.s,function(t,e){t.data.matched=e}),a)},function(t,e,n){"use strict";e.a={app:{menus:[{title:"Home",icon:"dashboard",path:"/"},{title:"Samples",icon:"dashboard",path:"samples"},{title:"Encrypt/Decrypt",icon:"dashboard",path:"tester"}],container:{drawer:!1,mini:!1,right:null},test:{btn:"Run"}},table:{search:"",pagination:{sortBy:"count",rowPerPage:5,descending:!0},headers:[{text:"Count",align:"left",sortable:!0,value:"count"},{text:"Match",value:"input",align:"left"},{text:"Output",value:"output",align:"left"}],items:[]},samples:{value:[]},data:{matched:!1,possibleChar:"",input:"",loading:!1,count:0,maxCount:0,match:"",lastResult:{time:"00:00:00",input:"",value:""},randomData:[]},time:{hour:0,minute:0,second:0}}}],[28]);