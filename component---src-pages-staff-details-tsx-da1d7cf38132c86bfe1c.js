(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/e88":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},Awwr:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("KKXr"),n("pIFo");var a=n("Wwog"),r=function(){return Object(a.a)((function(t){return t||console.warn("No seach data found in props!"),t?(e="id",n=t.replace("?","").split("&&"),a=void 0,n.forEach((function(t){var n=t.split("=");n[0]===e&&(a=n[1])})),a):void 0;var e,n,a}))}},B7F5:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("q1tI"),r=n("Wbzz"),i=(n("je2q"),n("X+mI")),o=n("/MKj");function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var c=function(t){function e(){return t.apply(this,arguments)||this}return s(e,t),e.mapStateToProps=function(t){return e.saveElement.stateChanged(t),{}},e.prototype.render=function(){return null},e}(a.PureComponent);c.saveElement=new i.a;var p=Object(o.connect)(c.mapStateToProps)(c),l=function(t){function e(){return t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){return a.createElement("div",{className:"layout-wrapper"},a.createElement(p,null),a.createElement("div",{className:"layout-side-nav"},a.createElement("div",{className:"layout-top-block layout-nav-title"},a.createElement("div",{className:"layout-nav-header"},a.createElement("h3",{className:"display-6"}))),a.createElement("div",{className:"layout-link-list"},a.createElement(r.a,{to:"/"},"Main Page"),a.createElement(r.a,{to:"/animals/"},"Animals"),a.createElement(r.a,{to:"/exhibits/"},"Exhibits"),a.createElement(r.a,{to:"/staff/"},"Staff"),a.createElement(r.a,{to:"/about/"},"About"))),a.createElement("div",{className:"layout-right-block"},a.createElement("div",{className:"layout-top-block"},a.createElement("div",{className:"layout-title"},a.createElement("h1",{className:"display-5"},this.props.title))),a.createElement("div",{className:"layout-main-content"},a.createElement("div",{className:"layout-main-content-padding"},this.props.children))))},e}(a.Component)},NF3E:function(t,e,n){"use strict";var a=n("q1tI"),r=n("uP/u"),i=(n("zPU5"),n("YwZP")),o=n("Wbzz");var s=function(t){var e,n;function s(e){var n;return(n=t.call(this,e)||this).state={isEditing:!1},n}n=t,(e=s).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var c=s.prototype;return c.toggleEditMode=function(){this.setState({isEditing:!this.state.isEditing})},c.setEditingState=function(t){this.setState({isEditing:t})},c.goBack=function(t){t.stopPropagation(),this.props.returnPath?Object(i.navigate)(Object(o.b)(this.props.returnPath)):history.back()},c.render=function(){var t=this.state.isEditing?null:a.createElement("button",{className:"btn btn-primary",onClick:this.setEditingState.bind(this,!this.state.isEditing)},this.state.isEditing?"Stop editing":"Edit");return a.createElement("div",{className:"detail-wrapper"},a.createElement("div",{className:"detail-header-button-wrapper"},a.createElement("button",{className:"btn btn-primary",onClick:this.goBack.bind(this)},"Back"),t),a.createElement(r.a,{editorTemplate:this.props.editorTemplate,editMode:this.state.isEditing,onCancelCallback:this.setEditingState.bind(this,!1),onSuccessCallback:this.setEditingState.bind(this,!1)}))},s}(a.PureComponent);e.a=s},RjPF:function(t,e,n){"use strict";n.r(e);n("OG14");var a=n("q1tI"),r=n("B7F5"),i=n("/MKj"),o=n("NF3E");var s=function(t){var e,n;function r(e){return t.call(this,e)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.mapStateToProps=function(t,e){return t.staff.get(e.id)?{editorTemplate:t.staff.get(e.id).getEditorTemplate()}:{}},r.prototype.render=function(){return this.props.editorTemplate?a.createElement("div",{className:"animal-detail-wrapper"},a.createElement(o.a,{editorTemplate:this.props.editorTemplate,returnPath:"/staff/"})):(console.error("No editor template found! Error!"),null)},r}(a.PureComponent),c=Object(i.connect)(s.mapStateToProps)(s),p=n("Awwr");var l=function(t){var e,n;function i(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).getId=Object(p.a)(),e}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.prototype.render=function(){var t=this.props.location?this.props.location.search:void 0;return a.createElement(r.a,{title:"Staff Details"},a.createElement(c,{allowEditing:!0,id:this.getId(t)}))},i}(a.PureComponent);e.default=l},Wbzz:function(t,e,n){"use strict";n("xfY5");var a=n("q1tI"),r=n.n(a),i=n("+ZDr"),o=n.n(i);n.d(e,"a",(function(){return o.a})),n.d(e,"b",(function(){return i.withPrefix}));n("lw3w"),n("emEt").default.enqueue,r.a.createContext({})},je2q:function(t,e,n){},lw3w:function(t,e,n){var a;t.exports=(a=n("rzlk"))&&a.default||a},qncB:function(t,e,n){var a=n("XKFU"),r=n("vhPU"),i=n("eeVq"),o=n("/e88"),s="["+o+"]",c=RegExp("^"+s+s+"*"),p=RegExp(s+s+"*$"),l=function(t,e,n){var r={},s=i((function(){return!!o[t]()||"​"!="​"[t]()})),c=r[t]=s?e(u):o[t];n&&(r[n]=c),a(a.P+a.F*s,"String",r)},u=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(p,"")),t};t.exports=l},rzlk:function(t,e,n){"use strict";n.r(e);n("91GP");var a=n("q1tI"),r=n.n(a),i=n("IOVJ");e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(i.a,Object.assign({location:e,pageResources:n},n.json)):null}},"uP/u":function(t,e,n){"use strict";n("91GP");var a=n("q1tI"),r=n("/MKj"),i=n("Vkfw");n("ugz2");var o=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).state={currentData:n.getInitialState(e)},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.getInitialState=function(t){var e={};return t.editorTemplate.getEditorElements().forEach((function(t){t.initialValue&&(e[t.identifier]=t.initialValue)})),e},o.onInputChange=function(t,e){var n=Object.assign({},this.state.currentData);n[e]=t,this.setState({currentData:n})},o.createObject=function(t){t.stopPropagation();var e=this.props.editorTemplate.fromData(this.state.currentData);e&&this.props.dispatchFunction?(this.props.editorTemplate.reset(),this.props.dispatchFunction({type:i.a.add,values:[e],names:[this.props.editorTemplate.dataTypeName]}),this.setState({currentData:this.getInitialState(this.props)}),this.props.onSuccessCallback&&this.props.onSuccessCallback()):console.warn("Unable to create object!, Invalid  or incomplete data!")},o.cancel=function(t){t.stopPropagation(),this.props.editorTemplate.reset(),this.setState({currentData:this.getInitialState(this.props)}),this.props.onCancelCallback&&this.props.onCancelCallback()},r.mapStateToProps=function(t){return{}},r.mapDispatchToProps=function(t){return{dispatchFunction:t}},o.render=function(){var t=this,e=this.props.editMode?a.createElement("button",{className:"btn btn-success edit-page-button",onClick:this.createObject.bind(this)},"Submit"):null,n=this.props.editMode?a.createElement("button",{className:"btn btn-danger edit-page-button",onClick:this.cancel.bind(this)},"Cancel"):null,r=this.props.title?a.createElement("h3",{className:"display-8"},this.props.title):null;return a.createElement("div",{className:"edit-wrapper"},r,a.createElement("div",{className:"edit-page-contents"},this.props.editorTemplate.getEditorElements().map((function(e){return e.render(t.props.editMode,t.onInputChange.bind(t))}))),a.createElement("div",{className:"edit-page-buttons-wrapper"},n,e))},r}(a.PureComponent),s=Object(r.connect)(o.mapStateToProps,o.mapDispatchToProps)(o);e.a=s},ugz2:function(t,e,n){},xfY5:function(t,e,n){"use strict";var a=n("dyZX"),r=n("aagx"),i=n("LZWt"),o=n("Xbzi"),s=n("apmT"),c=n("eeVq"),p=n("kJMx").f,l=n("EemH").f,u=n("hswa").f,d=n("qncB").trim,m=a.Number,h=m,f=m.prototype,E="Number"==i(n("Kuth")(f)),b="trim"in String.prototype,v=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,a,r,i=(e=b?e.trim():d(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+e}for(var o,c=e.slice(2),p=0,l=c.length;p<l;p++)if((o=c.charCodeAt(p))<48||o>r)return NaN;return parseInt(c,a)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(E?c((function(){f.valueOf.call(n)})):"Number"!=i(n))?o(new h(v(e)),n,m):v(e)};for(var g,N=n("nh4g")?p(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;N.length>y;y++)r(h,g=N[y])&&!r(m,g)&&u(m,g,l(h,g));m.prototype=f,f.constructor=m,n("KroJ")(a,"Number",m)}},zPU5:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-staff-details-tsx-da1d7cf38132c86bfe1c.js.map