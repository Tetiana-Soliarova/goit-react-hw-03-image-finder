(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={imageGalleryItem:"imageGalleryItem_imageGalleryItem__2zR4A",imageGalleryItemImage:"imageGalleryItem_imageGalleryItemImage__2BoMW"}},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a.n(r),s=a(7),c=a.n(s),i=(a(17),a(2)),l=a(3),m=a(5),h=a(4),u=a(6),d=a.n(u),b=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={tagsName:" "},e.hendleNameChange=function(t){e.setState({tagsName:t.currentTarget.value.toLowerCase()})},e.hendleSubmit=function(t){t.preventDefault(),""!==e.state.tagsName.trim()?(e.props.onSubmit(e.state.tagsName),e.setState({tagsName:""})):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u044b\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:d.a.Searchbar,children:Object(n.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.hendleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(n.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.tagsName,onChange:this.hendleNameChange})]})})}}]),a}(r.Component),g=a(11),p=a(10),j=a.n(p);function f(e,t,a){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("li",{className:j.a.imageGalleryItem,children:Object(n.jsx)("img",{src:e,alt:t,className:j.a.imageGalleryItemImage})},a)})}var O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.tagsName!==this.props.tagsName&&(console.log("\u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e\u0441\u044c \u0438\u043c\u044f "),console.log("prevProps.tagsName:",e.tagsName),console.log("this.props.tagsName:",this.props.tagsName),this.setState({loading:!0}),fetch("https://pixabay.com/api/?q=".concat(this.props.tagsName,"&page=1&key=").concat("19244879-147a84bd8a529ac8c96d916bd","&image_type=photo&orientation=horizontal&per_page=3")).then((function(e){return e.json()})).then((function(e){return a.setState({images:Object(g.a)(e.hits)})})).finally((function(){return a.setState({loading:!1})})))}},{key:"render",value:function(){return Object(n.jsxs)("ul",{className:"ImageGallery",children:[this.state.images.map((function(e){return Object(n.jsx)(f,{tags:e.tags,src:e.webformatURL},e.id)})),this.state.loading&&Object(n.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f...."})]})}}]),a}(r.Component),v=a(8),y=a.n(v),S=document.querySelector("#modal-root"),_=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("Keydown",(function(t){"Escape"===t.code&&e.props.onClose()}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("Keydown",(function(t){"Escape"===t.code&&e.props.onClose()}))}},{key:"render",value:function(){return Object(s.createPortal)(Object(n.jsx)("div",{className:y.a.Overlay,children:Object(n.jsxs)("div",{className:y.a.Modal,children:[Object(n.jsx)("p",{className:y.a.text,children:"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u0435 \u0432\u0456\u043a\u043d\u043e "}),Object(n.jsx)("img",{src:"",alt:""})]})}),S)}}]),a}(r.Component),N=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={tagsName:" ",showModal:!1,images:[]},e.toogleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.hendleFormSubmit=function(t){console.log(t),e.setState({tagsName:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.showModal;return Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{onSubmit:this.hendleFormSubmit}),Object(n.jsx)(O,{tagsName:this.state.tagsName,images:this.state.images,webformatURL:this.state.images.webformatURL}),e&&Object(n.jsx)(_,{})]})}}]),a}(r.Component);c.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={Searchbar:"searchbar_Searchbar__1Ul4t",SearchForm:"searchbar_SearchForm__9FDze",SearchFormButton:"searchbar_SearchFormButton__1Cos9",SearchFormButtonLabel:"searchbar_SearchFormButtonLabel__3w4rm",SearchFormInput:"searchbar_SearchFormInput__1trJS"}},8:function(e,t,a){e.exports={Overlay:"modal_Overlay__1SgBo",Modal:"modal_Modal__11iBY",text:"modal_text__Td1m7"}}},[[18,1,2]]]);
//# sourceMappingURL=main.d0110fdc.chunk.js.map