webpackJsonp([1],[function(t,n,e){"use strict";e.d(n,"f",function(){return a}),e.d(n,"s",function(){return i}),e.d(n,"t",function(){return r}),e.d(n,"b",function(){return s}),e.d(n,"a",function(){return o}),e.d(n,"r",function(){return u}),e.d(n,"u",function(){return c}),e.d(n,"i",function(){return l}),e.d(n,"j",function(){return d}),e.d(n,"v",function(){return f}),e.d(n,"n",function(){return p}),e.d(n,"k",function(){return m}),e.d(n,"w",function(){return v}),e.d(n,"m",function(){return h}),e.d(n,"l",function(){return _}),e.d(n,"y",function(){return T}),e.d(n,"e",function(){return g}),e.d(n,"x",function(){return b}),e.d(n,"o",function(){return x}),e.d(n,"h",function(){return S}),e.d(n,"g",function(){return A}),e.d(n,"p",function(){return E}),e.d(n,"d",function(){return w}),e.d(n,"c",function(){return D}),e.d(n,"q",function(){return C});var a="APP",i="APP_MENUS",r="APP_CONTAINER",s="TABLE",o="DATA",u="RUN_PROCESS",c="STOP_PROCESS",l="RUN_TEST",d="STOP_TEST",f="ADD_TEST_RESULT",p="CLEAR_TEST_DATA",m="SET_TEST_INPUT",v="ADD_TEST_COUNT",h="RESET_TEST_COUNT",_="SET_MATCH",T="SET_LAST_RESULT",g="SET_TABLE_SEARCH",b="ADD_RANDOM_DATA",x="RESET_RANDOM_DATA",S="TICK_TIME",A="TIME_ELAPSED",E="RESET_TICK_TIME",w="ADD_SAMPLE",D="SAMPLES",C="SET_MATHCED"},,,,,,function(t,n,e){"use strict";var a=e(22);n.a={app:{title:"Collision Tester - Jefferson(Scytale(DATA))",SHA:function(t){return e.i(a.a)(e.i(a.b)(t))}}}},,,,,,,,,,,,,function(t,n,e){"use strict";var a=e(5),i=e(92),r=e.n(i),s=e(90),o=e(78),u=e.n(o),c=e(69),l=(e.n(c),e(93));e.n(l);a.a.use(r.a),a.a.use(s.a),a.a.use(u.a,{separator:"-",complement:"Vue App Starter"}),n.a=new s.a({routes:[{path:"/",redirect:"/app"},{path:"/app",redirect:"/app/home"},{path:"/app",name:"COLlISION_APP",component:e(80),children:[{path:"home",component:e(81)},{path:"samples",component:e(83)}]}]})},function(t,n,e){"use strict";var a=e(5),i=e(2),r=e(29);a.a.use(i.c),n.a=new i.c.Store({modules:{collision:r.a}})},function(t,n,e){e(73);var a=e(1)(e(32),e(87),null,null);t.exports=a.exports},function(t,n,e){"use strict";var a=e(24),i=e(23);e.d(n,"b",function(){return a.a}),e.d(n,"a",function(){return i.a})},function(t,n,e){"use strict";n.a=function(t){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_ +-=[]{}|;'\\:\",./<>?",e="",a=function(){var t=[];return n.split("").forEach(function(n,e){t.push(n)}),t},i=[];return t.split("").forEach(function(t,n){var e=0,r=[];a().forEach(function(n,a){r.push(n),t===n&&(e=a)}),i.push({position:e,disk:r})}),i.forEach(function(t,n){e+=t.disk[function(){return t.position+5>=t.disk.length?(t.position+5)%t.disk.length:t.position+5}()]}),e}},function(t,n,e){"use strict";n.a=function(t){for(var n="",e=[],a=0;a<5;)e.push([]),a++;return a=0,t.split("").forEach(function(t,n){e[a].push(t),++a>=5&&(a=0)}),e.forEach(function(t,e){n+=t.join("")}),n}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(5),i=e(21),r=e.n(i),s=e(19),o=e(20);a.a.config.productionTip=!1,a.a.config.devtools=!0,a.a.config.debug=!0,new a.a({el:"#app",store:o.a,router:s.a,template:"<App/>",components:{App:r.a}})},function(t,n,e){"use strict";n.a={methods:{delimeter:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}}},function(t,n,e){"use strict";var a,i=e(7),r=e.n(i),s=e(0),o=e(6);n.a=(a={},r()(a,s.i,function(t,n){var e=t.commit,a=n.data,i=n.samples,r=n.time,u=a.input,c=a.count,l=a.match,d=a.matched,f=a.lastResult,p=o.a.app.SHA;if(null!==u&&""!==u&&i.length>0&&!d)if(c<i.length){0===c&&e(s.x,u);var m=function(){return i[c]}(),v=r.second,h=r.minute,_=r.hour,T=String(v).length<2?"0"+v:v,g=String(h).length<2?"0"+h:h,b=String(_).length<2?"0"+_:_,x=b+":"+g+":"+T;e(s.x,m);var S=p(m);e(s.q,l===S),e(s.v,{count:c+1,time:x,input:String(l===S),output:S}),u!==f.input?(e(s.y,{time:x,input:m,value:S}),e(s.w)):e(s.u)}else e(s.u);else e(s.u)}),r()(a,s.j,function(t){(0,t.commit)(s.u)}),a)},function(t,n,e){"use strict";var a,i=e(7),r=e.n(i),s=e(0);n.a=(a={},r()(a,s.f,function(t){return t.app}),r()(a,s.s,function(t){return t.app.menus}),r()(a,s.t,function(t){return t.app.container}),r()(a,s.b,function(t){return t.table}),r()(a,s.a,function(t){return t.data}),r()(a,s.g,function(t){return t.time}),r()(a,s.c,function(t){return t.samples.value}),a)},function(t,n,e){"use strict";var a=e(27),i=e(28),r=e(30),s=e(31);n.a={state:s.a,getters:i.a,actions:a.a,mutations:r.a}},function(t,n,e){"use strict";var a,i=e(7),r=e.n(i),s=e(0),o=e(6);n.a=(a={},r()(a,s.d,function(t,n){t.samples.value.push(n)}),r()(a,s.r,function(t){var n=t.data,e=t.app;n.loading=!0,e.test.btn="Stop"}),r()(a,s.u,function(t){var n=t.data,e=(t.table,t.app);n.loading=!1,e.test.btn="Continue"}),r()(a,s.v,function(t,n){t.table.items.push(n)}),r()(a,s.n,function(t){var n=t.table,e=t.app;n.items=[],e.test.btn="Run"}),r()(a,s.k,function(t,n){t.data.input=n}),r()(a,s.w,function(t){t.data.count+=1}),r()(a,s.m,function(t){t.data.count=0}),r()(a,s.e,function(t,n){t.table.search=n}),r()(a,s.x,function(t,n){t.data.randomData.push(n)}),r()(a,s.o,function(t){var n=t.data;n.randomData=[],n.lastResult={time:"00:00:00",input:"",value:""}}),r()(a,s.y,function(t,n){t.data.lastResult=n}),r()(a,s.l,function(t,n){var e=t.data;if(null!==n&&""!==n){var a=o.a.app.SHA;e.match=a(n)}else e.match=""}),r()(a,s.p,function(t){var n=t.time;n.second=0,n.minute=0,n.hour=0}),r()(a,s.h,function(t){var n=t.time;59===n.minute&&59===n.second?(n.hour+=1,n.minute=0,n.second=0):59===n.second?(n.minute+=1,n.second=0):n.second+=1}),r()(a,s.q,function(t,n){t.data.matched=n}),a)},function(t,n,e){"use strict";n.a={app:{menus:[{title:"Home",icon:"dashboard",path:"/"},{title:"Samples",icon:"dashboard",path:"samples"}],container:{drawer:!1,mini:!1,right:null},test:{btn:"Run"}},table:{search:"",pagination:{sortBy:"count",rowPerPage:5,descending:!0},headers:[{text:"Count",align:"left",sortable:!0,value:"count"},{text:"Match",value:"input",align:"left"},{text:"Output",value:"output",align:"left"}],items:[]},samples:{value:[]},data:{matched:!1,possibleChar:"",input:"",loading:!1,count:0,maxCount:0,match:"",lastResult:{time:"00:00:00",input:"",value:""},randomData:[]},time:{hour:0,minute:0,second:0}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"App",data:function(){return{}},head:{link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}]}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"AppDrawer",props:["container","menus","title"],methods:{handleMenu:function(t){this.$router.push(t)}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(3),i=e.n(a),r=e(2),s=e(0),o=e(6);n.default={name:"SHAMain",computed:i()({},e.i(r.a)({AppMenus:s.s,AppContainer:s.t})),data:function(){return{title:o.a.app.title}},components:{"app-drawer":e(79)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(3),i=e.n(a),r=e(2),s=e(0);n.default={name:"Home",computed:i()({},e.i(r.a)({Table:s.b,Data:s.a}),{progressCount:function(){var t=this.Data;return t.count/t.maxCount*100}}),methods:{handleSearch:function(t){this.$store.commit(s.e,t.target.value)}},components:{"home-header":e(82)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(3),i=e.n(a),r=e(2),s=e(0),o=e(26);n.default={name:"ShaHomeHeader",mixins:[o.a],computed:i()({},e.i(r.a)({Data:s.a,App:s.f,Table:s.b,Time:s.g,Sample:s.c}),{time:function(){var t=this.Time,n=t.second,e=t.minute,a=t.hour,i=String(n).length<2?"0"+n:n,r=String(e).length<2?"0"+e:e;return(String(a).length<2?"0"+a:a)+":"+r+":"+i},matchCount:function(){var t=this.Data.count;return this.delimeter(t)+" / "+this.delimeter(this.Sample.length)}}),mounted:function(){var t=this,n=this.Data,e=this.Time,a=this.Sample;window.setInterval(function(){n.loading&&t.runTest({data:n,samples:a,time:e})},1),window.setInterval(function(){n.loading&&t.$store.commit(s.h)},1e3)},methods:i()({wrapText:function(t){for(var n="",e=0;e<t.length;e++)n+=e>0&&e%97==0?"\n":t.charAt(e);return n}},e.i(r.b)({runTest:s.i,stopTest:s.j}),{handleInput:function(t){this.$store.commit(s.k,t.target.value),this.$store.commit(s.l,t.target.value)},handleResetTest:function(){this.$store.commit(s.m),this.$store.commit(s.n),this.$store.commit(s.l,""),this.$store.commit(s.k,""),this.$store.commit(s.o),this.$store.commit(s.p),this.$store.commit(s.q,!1)},handleTest:function(){this.Data.loading?this.stopTest():null!==this.Data.input&&""!==this.Data.input&&this.$store.commit(s.r)}}),data:function(){return{input:""}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(3),i=e.n(a),r=e(0),s=e(2);n.default={name:"Samples",computed:i()({},e.i(s.a)({Data:r.a,Table:r.b,Sample:r.c})),methods:{wrapText:function(t){for(var n="",e=0;e<t.length;e++)n+=e>0&&e%35==0?"\n":t.charAt(e);return n},handleTest:function(){this.$store.commit(r.d,this.value),this.value=""}},data:function(){return{value:""}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,,,function(t,n,e){e(71);var a=e(1)(e(33),e(85),"data-v-44d9c517",null);t.exports=a.exports},function(t,n,e){e(75);var a=e(1)(e(34),e(89),"data-v-c5565406",null);t.exports=a.exports},function(t,n,e){e(72);var a=e(1)(e(35),e(86),"data-v-47f97330",null);t.exports=a.exports},function(t,n,e){e(70);var a=e(1)(e(36),e(84),"data-v-14e793f2",null);t.exports=a.exports},function(t,n,e){e(74);var a=e(1)(e(37),e(88),"data-v-878b12a8",null);t.exports=a.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs10:""}},[e("v-text-field",{attrs:{name:"testInput",label:"Test Data",value:t.Data.input,disabled:t.Data.loading||t.Table.items.length>0,"multi-line":""},nativeOn:{input:function(n){t.handleInput(n)}}})],1),t._v(" "),e("v-flex",{attrs:{xs2:""}},[t.Table.items.length>0&&!t.Data.loading?e("v-btn",{staticClass:"yellow accent-1",nativeOn:{click:function(n){t.handleResetTest()}}},[t._v("\n      Reset\n    ")]):t._e(),t._v(" "),!t.Data.matched&&t.Data.count<t.Sample.length?e("v-btn",{staticClass:"yellow accent-1",attrs:{disabled:t.Sample.length<=0},nativeOn:{click:function(n){t.handleTest()}}},[t._v("\n      "+t._s(t.App.test.btn)+"\n    ")]):t._e()],1),t._v(" "),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("p",{staticClass:"subheading text-xs-left"},[t._v("\n        Test Hash :\n        "),e("br"),t._v("\n        "+t._s(t.wrapText(t.Data.match))+"\n      ")]),t._v(" "),e("p",{staticClass:"subheading text-xs-left"},[t._v("\n        Finding Match ("+t._s(t.matchCount)+") :\n        "),e("br"),t._v("\n        "+t._s(t.Data.lastResult.input)+"\n      ")])])],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{standalone:""}},[e("v-navigation-drawer",{attrs:{absolute:"",persistent:"",light:"","mini-variant":t.container.mini,overflow:""},on:{"update:miniVariant":function(n){t.container.mini=n}},model:{value:t.container.drawer,callback:function(n){t.container.drawer=n},expression:"container.drawer"}},[e("v-list",{staticClass:"pt-0",attrs:{dense:""}},[e("v-divider"),t._v(" "),t._l(t.menus,function(n){return e("v-list-tile",{key:n.title,nativeOn:{click:function(e){t.handleMenu(n.path)}}},[e("v-list-tile-action",[e("v-icon",[t._v(t._s(n.icon))])],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[t._v(t._s(n.title))])],1)],1)})],2)],1),t._v(" "),e("v-toolbar",{staticClass:"indigo darken-4",attrs:{fixed:"",dark:""}},[e("v-toolbar-side-icon",{nativeOn:{click:function(n){n.stopPropagation(),t.container.drawer=!t.container.drawer}}}),t._v(" "),e("v-toolbar-title",[t._v(t._s(t.title))])],1),t._v(" "),e("main",[e("v-container",{attrs:{fluid:""}},[t._t("default")],2)],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("home-header"),t._v(" "),e("div",{staticClass:"text-xs-center mb-5"},[t.Table.items.length>0?e("v-text-field",{attrs:{"append-icon":"search",name:"search",label:"Search Table",value:t.Table.search,"single-line":""},nativeOn:{input:function(n){t.handleSearch(n)}}}):t._e(),t._v(" "),e("v-data-table",{staticClass:"elevation-1 white",attrs:{dark:"",headers:t.Table.headers,items:t.Table.items,search:t.Table.search},scopedSlots:t._u([{key:"items",fn:function(n){return[e("td",{staticClass:"text-xs-left"},[t._v(t._s(n.item.count))]),t._v(" "),e("td",{staticClass:"text-xs-left"},[t._v(t._s(n.item.input))]),t._v(" "),e("td",{staticClass:"text-xs-left"},[t._v(t._s(n.item.output))])]}}])})],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-text-field",{attrs:{name:"testInput",label:"Sample Data",disabled:t.Data.loading||t.Table.items.length>0,"multi-line":""},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}}),t._v(" "),e("v-btn",{staticClass:"yellow accent-1",attrs:{disabled:""==t.value},nativeOn:{click:function(n){t.handleTest()}}},[t._v("\n      Add Test Sample\n    ")]),t._v(" "),e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.Sample,function(n,a){return e("v-flex",{key:a,attrs:{sm6:""}},[e("v-card-text",{staticClass:"text-xs-left elevation-4"},[e("pre",[t._v(t._s(t.wrapText(n)))])])],1)}))],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("app-drawer",{attrs:{title:t.title,menus:t.AppMenus,container:t.AppContainer}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs10:"","offset-xs1":"",md6:"","offset-md3":""}},[e("v-card",{staticClass:"mt-5 white lighten-4 elevation-4"},[e("v-card-text",{staticClass:"text-xs-right"},[e("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]}}],[25]);