(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Awwr:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("KKXr"),i("pIFo");var a=i("Wwog"),r=function(){return Object(a.a)((function(t){return t||console.warn("No seach data found in props!"),t?(e="id",i=t.replace("?","").split("&&"),a=void 0,i.forEach((function(t){var i=t.split("=");i[0]===e&&(a=i[1])})),a):void 0;var e,i,a}))}},NF3E:function(t,e,i){"use strict";var a=i("q1tI"),r=i("uP/u"),n=(i("zPU5"),i("YwZP")),o=i("Wbzz");var s=function(t){var e,i;function s(e){var i;return(i=t.call(this,e)||this).state={isEditing:!1},i}i=t,(e=s).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var c=s.prototype;return c.toggleEditMode=function(){this.setState({isEditing:!this.state.isEditing})},c.setEditingState=function(t){this.setState({isEditing:t})},c.goBack=function(t){t.stopPropagation(),this.props.returnPath?Object(n.navigate)(Object(o.b)(this.props.returnPath)):history.back()},c.render=function(){var t=this.state.isEditing?null:a.createElement("button",{className:"btn btn-primary",onClick:this.setEditingState.bind(this,!this.state.isEditing)},this.state.isEditing?"Stop editing":"Edit");return a.createElement("div",{className:"detail-wrapper"},a.createElement("div",{className:"detail-header-button-wrapper"},a.createElement("button",{className:"btn btn-primary",onClick:this.goBack.bind(this)},"Back"),t),a.createElement(r.a,{editorTemplate:this.props.editorTemplate,editMode:this.state.isEditing,onCancelCallback:this.setEditingState.bind(this,!1),onSuccessCallback:this.setEditingState.bind(this,!1)}))},s}(a.PureComponent);e.a=s},RBV9:function(t,e,i){"use strict";i.r(e);i("OG14");var a=i("q1tI"),r=i("B7F5"),n=i("/MKj"),o=i("NF3E");var s=function(t){var e,i;function r(e){return t.call(this,e)||this}return i=t,(e=r).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i,r.mapStateToProps=function(t,e){return t.exhibits.get(e.id)?{editorTemplate:t.exhibits.get(e.id).getEditorTemplate()}:{}},r.prototype.render=function(){return this.props.editorTemplate?a.createElement("div",{className:"animal-detail-wrapper"},a.createElement(o.a,{editorTemplate:this.props.editorTemplate,returnPath:"/exhibits/"})):(console.error("No editor template found! Error!"),null)},r}(a.PureComponent),c=Object(n.connect)(s.mapStateToProps)(s),p=i("Awwr");var l=function(t){var e,i;function n(){for(var e,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).getId=Object(p.a)(),e}return i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i,n.prototype.render=function(){var t=this.props.location?this.props.location.search:void 0;return a.createElement(r.a,{title:"Exhibit Details",iconName:"house_siding"},a.createElement(c,{allowEditing:!0,id:this.getId(t)}))},n}(a.PureComponent);e.default=l},"uP/u":function(t,e,i){"use strict";i("dRSK"),i("91GP");var a=i("Y+p1"),r=i.n(a),n=i("q1tI"),o=i("/MKj"),s=i("Vkfw"),c=(i("ugz2"),i("8sGc"));var p=function(t){var e,i;function a(e){var i,a=(i=t.call(this,e)||this).props.editorTemplate.convertDataToObject(i.getInitialState(e)),r=a instanceof c.a?[]:a;return i.state={currentData:i.getInitialState(e),errors:r},i}i=t,(e=a).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var o=a.prototype;return o.getInitialState=function(t){var e={};return t.editorTemplate.getEditorElements().forEach((function(t){t.initialValue&&(e[t.identifier]=t.initialValue)})),e},o.onInputChange=function(t,e){var i=Object.assign({},this.state.currentData);if(i[e]=t,!r()(i,this.state.currentData)){var a=this.props.editorTemplate.convertDataToObject(i),n=a instanceof c.a?[]:a;this.setState({currentData:i,errors:n})}},o.createObject=function(t){t.stopPropagation();var e=this.props.editorTemplate.convertDataToObject(this.state.currentData);e instanceof c.a?e&&this.props.dispatchFunction?(this.props.editorTemplate.reset(),this.props.dispatchFunction({type:s.a.add,values:[e],names:[this.props.editorTemplate.dataTypeName]}),this.setState({currentData:this.getInitialState(this.props)}),this.props.onSuccessCallback&&this.props.onSuccessCallback()):console.warn("Unable to create object!, Invalid  or incomplete data!"):this.setState({errors:e})},o.cancel=function(t){t.stopPropagation(),this.props.editorTemplate.reset(),this.setState({currentData:this.getInitialState(this.props)}),this.props.onCancelCallback&&this.props.onCancelCallback()},a.mapStateToProps=function(t){return{}},a.mapDispatchToProps=function(t){return{dispatchFunction:t}},o.render=function(){var t=this,e=this.props.editMode?n.createElement("button",{className:"btn btn-success edit-page-button",onClick:this.createObject.bind(this)},n.createElement("i",{className:"material-icons layout-link-icon"},"add"),"Submit"):null,i=this.props.editMode?n.createElement("button",{className:"btn btn-danger edit-page-button",onClick:this.cancel.bind(this)},n.createElement("i",{className:"material-icons layout-link-icon"},"close"),"Cancel"):null,a=this.props.title?n.createElement("h3",{className:"display-8"},this.props.title):null;return n.createElement("div",{className:"edit-wrapper"},a,n.createElement("div",{className:"edit-page-contents"},this.props.editorTemplate.getEditorElements().map((function(e){var i=t.state.errors.find((function(t){return t.inputIdentifier===e.identifier}));return e.render(t.props.editMode,t.onInputChange.bind(t),i)}))),n.createElement("div",{className:"edit-page-buttons-wrapper"},i,e))},a}(n.PureComponent),l=Object(o.connect)(p.mapStateToProps,p.mapDispatchToProps)(p);e.a=l},zPU5:function(t,e,i){}}]);
//# sourceMappingURL=component---src-pages-exhibit-details-tsx-3dfd05e2ca62dd33c827.js.map