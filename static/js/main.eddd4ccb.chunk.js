(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),c=n.n(s),i=(n(15),n(16),n(17),n(1)),l=n.n(i),o=n(2),u=n(3),m=n(5),p=n(4),d=n(6),h=(n(19),n(7)),f=n.n(h),v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={time:"00:00",min:"00",hour:"00"},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:new Date,this.ticktack(),setInterval((function(){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.ticktack();case 1:case"end":return t.stop()}}))}),6e4);case 3:case"end":return t.stop()}}),null,this)}},{key:"ticktack",value:function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return new Date,t.next=3,l.a.awrap(fetch("http://api.geonames.org/timezoneJSON?lat=".concat(this.props.lat,"&lng=").concat(this.props.lon,"&username=napasponiki")).then((function(e){return e.json()})));case 3:e=t.sent,this.setState({time:e.time,min:e.time.substr(14),hour:e.time.substr(11,2)});case 5:case"end":return t.stop()}}),null,this)}},{key:"whatdayIs",value:function(){var e=new Date,t=this.state,n=(t.time,t.min),a=t.hour;switch(e.getDay()){case 1:return r.a.createElement("h4",null,a,r.a.createElement("span",{className:"double_dots"},":"),n," \u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a");case 2:return r.a.createElement("h4",null,a,r.a.createElement("span",{className:"double_dots"},":"),n," \u0412\u0442\u043e\u0440\u043d\u0438\u043a");case 3:return r.a.createElement("h4",null,a,r.a.createElement("span",{className:"double_dots"},":"),n," \u0421\u0440\u0435\u0434\u0430");case 4:return r.a.createElement("h4",null,a,r.a.createElement("span",{className:"double_dots"},":"),n," \u0427\u0435\u0442\u0432\u0435\u0440\u0433");case 5:return r.a.createElement("h4",null,a,r.a.createElement("span",{className:"double_dots"},":"),n," \u041f\u044f\u0442\u043d\u0438\u0446\u0430");case 6:return r.a.createElement("h4",null,a,r.a.createElement("span",{className:"double_dots"},":"),n," \u0421\u0443\u0431\u0431\u043e\u0442\u0430");case 7:return r.a.createElement("h4",null,a,r.a.createElement("span",{className:"double_dots"},":"),n," \u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435")}}},{key:"render",value:function(){return this.whatdayIs()}}]),t}(a.Component),g=(n(20),function(e){var t=e.children;e.tag;return r.a.createElement("h4",null,t)}),E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).inputRefs=r.a.createRef(),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.inputRefs.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.onChange,n=(e.className,e.onKeyPress),a=e.value;return r.a.createElement("input",{onChange:t,className:"box-input",onKeyPress:n,value:a,ref:this.inputRefs,type:"text"})}}]),t}(a.Component),w=function(e){var t=e.temp,n=e.feelsLike,a=e.temp_min,s=e.temp_max,c=e.windDeg,i=e.windSpeed;e.className;return r.a.createElement("div",{className:"box-container__item"},r.a.createElement("p",null,"\u0437\u0430 \u043e\u043a\u043d\u043e\u043c ",r.a.createElement("span",null,t.toFixed(0))),r.a.createElement("p",null,"\u043f\u043e \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u044f\u043c ",r.a.createElement("span",null,n.toFixed(0))),r.a.createElement("p",null,"min ",r.a.createElement("span",null,a.toFixed(0)),"max ",r.a.createElement("span",null,s.toFixed(0))),r.a.createElement("p",null,"\u0432\u0435\u0442\u0435\u0440 ",r.a.createElement("span",null,i)," m/s \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 ",r.a.createElement("span",null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:150;return e>180&&e<270?"\u042e\u0433\u043e-\u0417\u0430\u043f\u0430\u0434":e>270&&e<360?"\u0421\u0435\u0432\u0435\u0440\u043e-\u0417\u0430\u043f\u0430\u0434":e>0&&e<90?"\u0421\u0435\u0432\u0435\u0440\u043e-\u0412\u043e\u0441\u0442\u043e\u043a":e>180&&e<270?"\u042e\u0433\u043e-\u0412\u043e\u0441\u0442\u043e\u043a":void 0}(c)||"\u042e\u0436\u043d\u044b\u0439")))},y=(n(21),function(e){var t=e.sky,n=e.time,a=f()("sky");return r.a.createElement("div",{className:a},r.a.createElement("img",{src:function(e){switch(e){case"Snow":return"https://i.gifer.com/3klb.gif";case"Rain":return"https://media.giphy.com/media/gGrEYlSniuiJMlfuR6/giphy.gif";case"Clear":return n>19||n<7?"http://pngimg.com/uploads/moon/moon_PNG40.png":"https://i.gifer.com/6HhP.gif";case"Clouds":return"https://i.gifer.com/ODkn.gif";case"Mist":case"Smoke":return"http://pngimg.com/uploads/moon/moon_PNG40.png"}}(t),alt:""}))}),k=function(e){var t=e.time,n=e.sky,a=e.temp,s=e.sunrise,c=e.sunset;console.log(c,s);return r.a.createElement("div",{className:"box-container__item"},r.a.createElement(y,{sky:n,time:t}),r.a.createElement(g,null,function(e){switch(e){case"Clear":return"\u042f\u0441\u043d\u043e";case"Clouds":return"\u041e\u0431\u043b\u0430\u0447\u043d\u043e";case"Snow":return"\u0421\u043d\u0435\u0433";case"Rain":return"\u0414\u043e\u0436\u0434\u044c";case"Mist":return"\u0422\u0443\u043c\u0430\u043d";case"Smoke":return"\u0421\u043c\u043e\u0433";default:return"new type of weather"}}(n),",",a.toFixed(0),"C"))},b=function(e){var t=e.children,n=e.className;return r.a.createElement("div",{className:n},t)},x=function(e){var t=e.children;return r.a.createElement("div",{className:"box-badge"},t.map((function(e){return r.a.createElement("p",null,e)})))},_=function(e){var t=e.sky,n=e.country,a=e.city,s=e.temp,c=e.feelsLike,i=e.temp_min,l=e.temp_max,o=e.windDeg,u=e.windSpeed,m=e.sunrise,p=e.sunset,d=e.onKeyPress,h=e.onChange,y=e.value,_=e.error,N=e.lat,P=e.lon,D=e.time;console.log(D);new Date;var S=function(e){return e>19||e<6?"night":"day"}(D.substr(11,2)),j=f()("box",S);return r.a.createElement(b,{className:j},r.a.createElement(v,{lat:N,lon:P}),r.a.createElement(g,null,_?"".concat(_):"".concat(a,",").concat(n)),r.a.createElement(x,null,"\u0440\u0430\u0441\u0441\u0432\u0435\u0442: ".concat(m.substr(11)),"\u0437\u0430\u043a\u0430\u0442: ".concat(p.substr(11))),r.a.createElement(E,{onKeyPress:d,onChange:h,value:y}),r.a.createElement(b,{className:"box-container"},r.a.createElement(w,{temp:s,feelsLike:c,temp_min:i,temp_max:l,windSpeed:u,windDeg:o}),r.a.createElement(k,{time:D,sky:t,temp:s})))},N=_;_.defaultProps={sky:"Clear",country:"Zimbabve",city:"Chita",temp:"12",feelsLike:"12",temp_min:"12",temp_max:"12",windDeg:250,windSpeed:5,sunrise:11,sunset:11,onKeyPress:function(){},onChange:function(){},value:""};n(22);var P=function(){return r.a.createElement("div",{className:"lds-roller"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},D=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],weather:[],coord:[],loading:!0,findPlace:"",error:"",sunrise:"",sunset:""},n.onChangeHandler=function(e){n.setState({findPlace:e.target.value})},n.getData=function(e){var t,a,r;return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),e.prev=1,t=n.state.findPlace||"\u041b\u043e\u043d\u0434\u043e\u043d",e.next=5,l.a.awrap(fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&APPID=349083c430ac053a45a0745df28c1425")).then((function(e){return e.json()})));case 5:return a=e.sent,e.next=8,l.a.awrap(fetch("http://api.geonames.org/timezoneJSON?lat=".concat(a.coord.lat,"&lng=").concat(a.coord.lon,"&username=napas")).then((function(e){return e.json()})));case 8:r=e.sent,console.log(r),n.setState({data:a,coord:a.coord,weather:{main:a.weather[0].main,description:a.weather[0].description,temp:a.main.temp,feelsLike:a.main.feels_like,temp_min:a.main.temp_min,temp_max:a.main.temp_max,pressure:a.main.pressure,humidity:a.main.humidity,windSpeed:a.wind.speed,windDeg:a.wind.deg,country:a.sys.country,name:a.name,sunrise:r.sunrise,sunset:r.sunset,time:r.time},loading:!1,findPlace:"",error:!1}),console.log(n.state.weather.sunrise),console.log(a),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),n.setState({loading:!1,error:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u043d\u0430\u0431\u0440\u0430\u043d \u043d\u043e\u043c\u0435\u0440"});case 18:case"end":return e.stop()}}),null,null,[[1,15]])},n.findPlace=function(e){if("Enter"===e.key){var t=n.state.findPlace;n.getData(t),n.setState({findPlace:""})}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.weather,n=e.coord;return console.log(this.state.sunrise),r.a.createElement("div",{className:"weather"},this.state.loading?r.a.createElement(P,null):r.a.createElement(N,{sky:t.main,country:t.country,city:t.name,temp:t.temp,temp_max:t.temp_max,temp_min:t.temp_min,feelsLike:t.feelsLike,windSpeed:t.windSpeed,windDeg:t.windDeg,sunrise:t.sunrise,sunset:t.sunset,onKeyPress:this.findPlace,onChange:this.onChangeHandler,value:this.state.findPlace,error:this.state.error,lat:n.lat,lon:n.lon,time:t.time}))}}]),t}(a.Component);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.eddd4ccb.chunk.js.map