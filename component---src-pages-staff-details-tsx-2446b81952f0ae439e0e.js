(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Awwr:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("KKXr"),n("pIFo");var a=n("Wwog"),o=function(){return Object(a.a)((function(e){return e||console.warn("No seach data found in props!"),e?(t="id",n=e.replace("?","").split("&&"),a=void 0,n.forEach((function(e){var n=e.split("=");n[0]===t&&(a=n[1])})),a):void 0;var t,n,a}))}},B7F5:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("q1tI"),o=n("Wbzz"),i=(n("je2q"),n("X+mI")),s=n("/MKj"),r=n("rCxd"),l=n("IjVs"),c=(n("f3/d"),n("Vkfw"));n("MV0r");var p=function(e){var t,n;function o(t){return e.call(this,t)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.mapDispatchToProps=function(e){return{dispatchFunction:e}};var i=o.prototype;return i.resetSettings=function(e){e.stopPropagation(),this.props.dispatchFunction&&this.props.dispatchFunction({type:c.a.upsert,values:[new r.d("")],names:[r.d.name]})},i.render=function(){return a.createElement("button",{className:"btn btn-dark reset-button-wrapper",onClick:this.resetSettings.bind(this)},"Reset")},o}(a.PureComponent),u=Object(s.connect)(null,p.mapDispatchToProps)(p);function d(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var m=function(e){function t(){return e.apply(this,arguments)||this}return d(t,e),t.mapStateToProps=function(e){return t.saveElement.stateChanged(e),{}},t.prototype.render=function(){return null},t}(a.PureComponent);m.saveElement=new i.a;var h=Object(s.connect)(m.mapStateToProps)(m),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={sideMenuExpanded:!1},n}d(t,e),t.mapStateToProps=function(e){return{settings:e.settings||new r.d("")}};var n=t.prototype;return n.setSideMenuExpanded=function(e,t){t.stopPropagation(),this.setState({sideMenuExpanded:e})},n.blockEventPropagation=function(e){e.stopPropagation()},n.render=function(){return this.props.settings&&this.props.settings.columnView===r.a.true?this.renderColumn():this.renderNormal()},n.renderColumn=function(){return a.createElement(l.a,null)},n.renderNormal=function(){var e=this.props.iconName?a.createElement("i",{className:"material-icons"},this.props.iconName):null,t=this.props.settings?{fontFamily:this.props.settings.fontFamily+", -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",backgroundColor:""+this.props.settings.backgroundColour,color:""+this.props.settings.textColour}:void 0,n=this.props.settings.expandableSideMenu===r.a.true?"layout-side-nav-expandable":"",i=this.state.sideMenuExpanded?"layout-side-nav-expanded":"layout-side-nav-collapsed",s=this.props.settings.expandableSideMenu===r.a.true?a.createElement("i",{className:"material-icons colour-red",onClick:this.setSideMenuExpanded.bind(this,!0)},"menu"):null,l=this.props.settings.expandableSideMenu===r.a.true?a.createElement("div",{className:"layout-side-nav-backing "+i,onClick:this.setSideMenuExpanded.bind(this,!1)}):null;return a.createElement("div",{className:"layout-wrapper",style:t,onClick:this.setSideMenuExpanded.bind(this,!1)},a.createElement(h,null),l,a.createElement("div",{className:"layout-side-nav "+n+" "+i,onClick:this.blockEventPropagation.bind(this)},a.createElement("div",{className:"layout-side-nav-inner-wrapper"},a.createElement("div",{className:"layout-top-block"},a.createElement("div",{className:"layout-nav-title"},e)),a.createElement("div",{className:"layout-link-list"},a.createElement(o.a,{to:"/",onClick:this.setSideMenuExpanded.bind(this,!1)},a.createElement("i",{className:"material-icons layout-link-icon"},"menu"),"Main Page"),a.createElement(o.a,{to:"/animals/",onClick:this.setSideMenuExpanded.bind(this,!1)},a.createElement("i",{className:"material-icons layout-link-icon"},"pets"),"Animals"),a.createElement(o.a,{to:"/exhibits/",onClick:this.setSideMenuExpanded.bind(this,!1)},a.createElement("i",{className:"material-icons layout-link-icon"},"house_siding"),"Exhibits"),a.createElement(o.a,{to:"/staff/",onClick:this.setSideMenuExpanded.bind(this,!1)},a.createElement("i",{className:"material-icons layout-link-icon"},"person"),"Staff"),a.createElement(o.a,{to:"/options/",onClick:this.setSideMenuExpanded.bind(this,!1)},a.createElement("i",{className:"material-icons layout-link-icon"},"edit"),"Options")))),a.createElement("div",{className:"layout-right-block"},a.createElement("div",{className:"layout-top-block"},a.createElement("div",{className:"layout-top-block-title"},a.createElement("div",{className:"layout-title"},a.createElement("div",{className:"layout-side-menu-button-wrapper"},s),a.createElement("h1",{className:"display-5"},this.props.title)),a.createElement(u,null))),a.createElement("div",{className:"layout-main-content "+(this.props.applyDefaultColourToMainContent?"default-colours":"")},a.createElement("div",{className:"layout-main-content-padding"},this.props.children))))},t}(a.Component),f=Object(s.connect)(E.mapStateToProps)(E)},MV0r:function(e,t,n){},RjPF:function(e,t,n){"use strict";n.r(t);n("OG14");var a=n("q1tI"),o=n("B7F5"),i=n("7Qx9"),s=n("Awwr");var r=function(e){var t,n;function r(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).getId=Object(s.a)(),t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.location?this.props.location.search:void 0;return a.createElement(o.a,{title:"Staff Details",iconName:"person"},a.createElement(i.a,{allowEditing:!0,id:this.getId(e)}))},r}(a.PureComponent);t.default=r},je2q:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-staff-details-tsx-2446b81952f0ae439e0e.js.map