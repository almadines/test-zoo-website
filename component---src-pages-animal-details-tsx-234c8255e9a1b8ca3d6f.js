(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/e88":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},Awwr:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("KKXr"),n("pIFo");var a=n("Wwog"),r=function(){return Object(a.a)((function(t){return t||console.warn("No seach data found in props!"),t?(e="id",n=t.replace("?","").split("&&"),a=void 0,n.forEach((function(t){var n=t.split("=");n[0]===e&&(a=n[1])})),a):void 0;var e,n,a}))}},B7F5:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a=n("q1tI"),r=n("Wbzz"),i=(n("je2q"),n("X+mI")),o=n("/MKj");function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var c=function(t){function e(){return t.apply(this,arguments)||this}return s(e,t),e.mapStateToProps=function(t){return e.saveElement.stateChanged(t),{}},e.prototype.render=function(){return null},e}(a.PureComponent);c.saveElement=new i.a;var l=Object(o.connect)(c.mapStateToProps)(c),p=function(t){function e(){return t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){var t=this.props.iconName?a.createElement("i",{className:"material-icons layout-link-icon"},this.props.iconName):null;return a.createElement("div",{className:"layout-wrapper"},a.createElement(l,null),a.createElement("div",{className:"layout-side-nav"},a.createElement("div",{className:"layout-top-block"},a.createElement("div",{className:"layout-nav-title"},t)),a.createElement("div",{className:"layout-link-list"},a.createElement(r.a,{to:"/"},a.createElement("i",{className:"material-icons layout-link-icon"},"menu"),"Main Page"),a.createElement(r.a,{to:"/animals/"},a.createElement("i",{className:"material-icons layout-link-icon"},"pets"),"Animals"),a.createElement(r.a,{to:"/exhibits/"},a.createElement("i",{className:"material-icons layout-link-icon"},"house_siding"),"Exhibits"),a.createElement(r.a,{to:"/staff/"},a.createElement("i",{className:"material-icons layout-link-icon"},"person"),"Staff"),a.createElement(r.a,{to:"/about/"},a.createElement("i",{className:"material-icons layout-link-icon"},"info"),"About"))),a.createElement("div",{className:"layout-right-block"},a.createElement("div",{className:"layout-top-block"},a.createElement("div",{className:"layout-title"},a.createElement("h1",{className:"display-5"},this.props.title))),a.createElement("div",{className:"layout-main-content"},a.createElement("div",{className:"layout-main-content-padding"},this.props.children))))},e}(a.Component)},NF3E:function(t,e,n){"use strict";var a=n("q1tI"),r=n("uP/u"),i=(n("zPU5"),n("YwZP")),o=n("Wbzz");var s=function(t){var e,n;function s(e){var n;return(n=t.call(this,e)||this).state={isEditing:!1},n}n=t,(e=s).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var c=s.prototype;return c.toggleEditMode=function(){this.setState({isEditing:!this.state.isEditing})},c.setEditingState=function(t){this.setState({isEditing:t})},c.goBack=function(t){t.stopPropagation(),this.props.returnPath?Object(i.navigate)(Object(o.b)(this.props.returnPath)):history.back()},c.render=function(){var t=this.state.isEditing?null:a.createElement("button",{className:"btn btn-primary",onClick:this.setEditingState.bind(this,!this.state.isEditing)},this.state.isEditing?"Stop editing":"Edit");return a.createElement("div",{className:"detail-wrapper"},a.createElement("div",{className:"detail-header-button-wrapper"},a.createElement("button",{className:"btn btn-primary",onClick:this.goBack.bind(this)},"Back"),t),a.createElement(r.a,{editorTemplate:this.props.editorTemplate,editMode:this.state.isEditing,onCancelCallback:this.setEditingState.bind(this,!1),onSuccessCallback:this.setEditingState.bind(this,!1)}))},s}(a.PureComponent);e.a=s},Wbzz:function(t,e,n){"use strict";n("xfY5");var a=n("q1tI"),r=n.n(a),i=n("+ZDr"),o=n.n(i);n.d(e,"a",(function(){return o.a})),n.d(e,"b",(function(){return i.withPrefix}));n("lw3w"),n("emEt").default.enqueue,r.a.createContext({})},dRSK:function(t,e,n){"use strict";var a=n("XKFU"),r=n("CkkT")(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),a(a.P+a.F*i,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")("find")},je2q:function(t,e,n){},lw3w:function(t,e,n){var a;t.exports=(a=n("rzlk"))&&a.default||a},oox0:function(t,e,n){"use strict";n.r(e);n("OG14");var a=n("q1tI"),r=n("B7F5"),i=n("/MKj"),o=n("NF3E");var s=function(t){var e,n;function r(e){return t.call(this,e)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.mapStateToProps=function(t,e){return t.animals.get(e.id)?{editorTemplate:t.animals.get(e.id).getEditorTemplate()}:{}},r.prototype.render=function(){return this.props.editorTemplate?a.createElement("div",{className:"animal-detail-wrapper"},a.createElement(o.a,{editorTemplate:this.props.editorTemplate,returnPath:"/animals"})):(console.error("No editor template found! Error!"),null)},r}(a.PureComponent),c=Object(i.connect)(s.mapStateToProps)(s),l=n("Awwr");var p=function(t){var e,n;function i(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).getId=Object(l.a)(),e}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.prototype.render=function(){var t=this.props.location?this.props.location.search:void 0;return a.createElement(r.a,{title:"Animal Details",iconName:"pets"},a.createElement(c,{allowEditing:!0,id:this.getId(t)}))},i}(a.PureComponent);e.default=p},qncB:function(t,e,n){var a=n("XKFU"),r=n("vhPU"),i=n("eeVq"),o=n("/e88"),s="["+o+"]",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),p=function(t,e,n){var r={},s=i((function(){return!!o[t]()||"​"!="​"[t]()})),c=r[t]=s?e(u):o[t];n&&(r[n]=c),a(a.P+a.F*s,"String",r)},u=p.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=p},rzlk:function(t,e,n){"use strict";n.r(e);n("91GP");var a=n("q1tI"),r=n.n(a),i=n("IOVJ");e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(i.a,Object.assign({location:e,pageResources:n},n.json)):null}},"uP/u":function(t,e,n){"use strict";n("dRSK"),n("91GP");var a=n("q1tI"),r=n("/MKj"),i=n("Vkfw"),o=(n("ugz2"),n("8sGc"));var s=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).state={currentData:n.getInitialState(e),errors:[]},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s=r.prototype;return s.getInitialState=function(t){var e={};return t.editorTemplate.getEditorElements().forEach((function(t){t.initialValue&&(e[t.identifier]=t.initialValue)})),e},s.onInputChange=function(t,e){var n=Object.assign({},this.state.currentData);n[e]=t;var a=this.props.editorTemplate.convertDataToObject(n),r=a instanceof o.a?[]:a;this.setState({currentData:n,errors:r})},s.createObject=function(t){t.stopPropagation();var e=this.props.editorTemplate.convertDataToObject(this.state.currentData);e instanceof o.a?e&&this.props.dispatchFunction?(this.props.editorTemplate.reset(),this.props.dispatchFunction({type:i.a.add,values:[e],names:[this.props.editorTemplate.dataTypeName]}),this.setState({currentData:this.getInitialState(this.props)}),this.props.onSuccessCallback&&this.props.onSuccessCallback()):console.warn("Unable to create object!, Invalid  or incomplete data!"):this.setState({errors:e})},s.cancel=function(t){t.stopPropagation(),this.props.editorTemplate.reset(),this.setState({currentData:this.getInitialState(this.props)}),this.props.onCancelCallback&&this.props.onCancelCallback()},r.mapStateToProps=function(t){return{}},r.mapDispatchToProps=function(t){return{dispatchFunction:t}},s.render=function(){var t=this;console.log("render called in edit-page!");var e=this.props.editMode?a.createElement("button",{className:"btn btn-success edit-page-button",onClick:this.createObject.bind(this)},a.createElement("i",{className:"material-icons layout-link-icon"},"add"),"Submit"):null,n=this.props.editMode?a.createElement("button",{className:"btn btn-danger edit-page-button",onClick:this.cancel.bind(this)},a.createElement("i",{className:"material-icons layout-link-icon"},"close"),"Cancel"):null,r=this.props.title?a.createElement("h3",{className:"display-8"},this.props.title):null;return a.createElement("div",{className:"edit-wrapper"},r,a.createElement("div",{className:"edit-page-contents"},this.props.editorTemplate.getEditorElements().map((function(e){var n=t.state.errors.find((function(t){return t.inputIdentifier===e.identifier}));return e.render(t.props.editMode,t.onInputChange.bind(t),n)}))),a.createElement("div",{className:"edit-page-buttons-wrapper"},n,e))},r}(a.PureComponent),c=Object(r.connect)(s.mapStateToProps,s.mapDispatchToProps)(s);e.a=c},ugz2:function(t,e,n){},xfY5:function(t,e,n){"use strict";var a=n("dyZX"),r=n("aagx"),i=n("LZWt"),o=n("Xbzi"),s=n("apmT"),c=n("eeVq"),l=n("kJMx").f,p=n("EemH").f,u=n("hswa").f,m=n("qncB").trim,d=a.Number,h=d,f=d.prototype,E="Number"==i(n("Kuth")(f)),v="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,a,r,i=(e=v?e.trim():m(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+e}for(var o,c=e.slice(2),l=0,p=c.length;l<p;l++)if((o=c.charCodeAt(l))<48||o>r)return NaN;return parseInt(c,a)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(E?c((function(){f.valueOf.call(n)})):"Number"!=i(n))?o(new h(b(e)),n,d):b(e)};for(var g,N=n("nh4g")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;N.length>y;y++)r(h,g=N[y])&&!r(d,g)&&u(d,g,p(h,g));d.prototype=f,f.constructor=d,n("KroJ")(a,"Number",d)}},zPU5:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-animal-details-tsx-234c8255e9a1b8ca3d6f.js.map