(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{75:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(17),c=t.n(i),o=t(7),l=t.n(o),u=t(8);function d(){var e=l()(["\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  button{\n    outline: none;\n    border: none;\n  }\n"]);return d=function(){return e},e}var s=Object(u.a)(d()),p=t(16),f=t(2),h=t(14),b=t(11),g=t(37),m=t(18),v={inputValue:"",list:[]},x={goods:[],checked:{}},k=Object(b.c)({todoList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;return Object(m.a)(e,(function(e){switch(n.type){case"todo_list/input_change":return void(e.inputValue=n.value);case"todo_list/add_list_item":return e.list.push(e.inputValue),void(e.inputValue="");case"todo_list/init_list_data":return void(e.list=n.data);case"todo_list/delete_list_data":return void e.list.splice(n.index,1);default:return}}))},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;if("cart/init_cart_data"===n.type){var t=JSON.parse(JSON.stringify(e));return t.goods=n.goods,t}if("cart/change_checked_data"===n.type){var a=JSON.parse(JSON.stringify(e));return a.checked=n.data,a}return e}}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,_=Object(b.e)(k,E(Object(b.a)(g.a)));function y(){var e=l()(["\n  padding: 10px 20px;\n  height: 56px;\n\n  .link{\n    line-height: 56px;\n    margin: 0 15px;\n    display: inline-block;\n    color: #333;\n    text-decoration: none;\n  }\n  .selected{\n    color: #1890ff;\n  }\n"]);return y=function(){return e},e}var O=u.b.div(y()),C=function(){return r.a.createElement(O,null,r.a.createElement(p.b,{to:"/todo-list",className:"link",activeClassName:"selected"},"TodoList"),r.a.createElement(p.b,{to:"/cart",className:"link",activeClassName:"selected"},"cart"))},j=t(15),w=t.n(j),N=t(19),S=t.n(N),L=t(41),q=t.n(L).a.create({baseURL:"",timeout:1e3});q.interceptors.response.use((function(e){return console.log(e.data),e}));function I(){var e=l()(["\n  padding: 20px;\n\n  li{\n    height: 35px;\n    line-height: 35px;\n    list-style: circle;\n    width: 400px;\n  }\n"]);return I=function(){return e},e}function V(){var e=l()(["\n  background-color: #1890ff;\n  color: #fff;\n  margin-left: 10px;\n  height: 32px;\n  padding: 4px 20px;\n  cursor: pointer;\n  border-radius: 2px;\n\n  &.del{\n    height: 24px;\n    padding: 4px 10px;\n    font-size: 12px;\n    background-color: #ff4d4f;\n  }\n"]);return V=function(){return e},e}function J(){var e=l()(["\n  border: 1px solid #d9d9d9;\n  padding: 0 11px;\n  width: 300px;\n  line-height: 35px;\n  height: 35px;\n  box-sizing: border-box;\n"]);return J=function(){return e},e}function z(){var e=l()(["\n  padding: 10px 30px;\n  box-sizing: border-box;\n"]);return z=function(){return e},e}var R=u.b.div(z()),D=u.b.input.attrs({placeholder:"请输入"})(J()),T=u.b.button(V()),B=u.b.ul(I()),F=Object(h.b)((function(e){return{inputValue:e.todoList.inputValue,list:e.todoList.list}}),(function(e){return{handleInputChange:function(n){var t={type:"todo_list/input_change",value:n.target.value};e(t)},handleClick:function(){e({type:"todo_list/add_list_item"})},handleInitList:function(){e(function(){var e=S()(w.a.mark((function e(n){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.get("/api/todoList.json");case 2:t=e.sent,a=t.data.list,n({type:"todo_list/init_list_data",data:a});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},handleDelete:function(n){e(function(e){return{type:"todo_list/delete_list_data",index:e}}(n))}}}))((function(e){var n=e.inputValue,t=e.list,i=e.handleInputChange,c=e.handleClick,o=e.handleInitList,l=e.handleDelete;return Object(a.useEffect)((function(){t.length>0||o()}),[]),r.a.createElement(R,null,r.a.createElement(D,{value:n,onChange:i}),r.a.createElement(T,{onClick:c},"添加"),r.a.createElement(B,null,t.map((function(e,n){return r.a.createElement("li",{key:n},e,r.a.createElement(T,{onClick:function(){return l(n)},className:"del"},"删除"))}))))})),M=t(42),U=t.n(M),X=t(43),H=t.n(X);function P(){var e=l()(["\n\n  li{\n    width: 300px;\n    display: flex;\n    justify-content: space-between;\n    line-height: 40px;\n\n    label{\n      margin-left: 10px;\n    }\n  }\n"]);return P=function(){return e},e}function A(){var e=l()(["\n  padding: 10px 30px;\n  box-sizing: border-box;\n"]);return A=function(){return e},e}var G=u.b.div(A()),K=u.b.ul(P()),Q=function(e){var n=e.item,t=e.checkedState,a=e.handleCheckedChangeRef;return console.log("child render"),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:n.id,onChange:function(){return a.current(n.id,!t)},checked:t}),r.a.createElement("label",{htmlFor:n.id},n.name)),r.a.createElement("span",null,"￥",n.price))},W=function(e,n){return e.checkedState===n.checkedState},Y=r.a.memo(Q,W),Z=function(e){return{type:"cart/init_cart_data",goods:e}},$=Object(h.b)((function(e){return{goods:e.cart.goods,checked:e.cart.checked}}),(function(e){return{handleInitCart:function(){var n=function(){var e=S()(w.a.mark((function e(n){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.get("/api/cart.json");case 2:t=e.sent,a=t.data.goods,n(Z(a));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();e(n)},handleCheckedChange:function(n){e(function(e){return{type:"cart/change_checked_data",data:e}}(n))}}}))((function(e){var n=e.goods,t=e.checked,i=e.handleInitCart,c=e.handleCheckedChange;Object(a.useEffect)((function(){i()}),[]);var o=function(){return Object.entries(t).filter((function(e){return Boolean(e[1])})).map((function(e){var t=H()(e,1)[0];return n.find((function(e){return e.id===Number(t)}))}))},l=o().reduce((function(e,n){return e+n.price}),0),u=Object.keys(o()).length===n.length,d=Object(a.useCallback)((function(){var e={};n.forEach((function(n){e[n.id]=!u})),c(e)}),[u,n]),s=function(e,n){console.log(t),c(Object.assign({},t,U()({},e,n)))};console.log("parent render");var p=Object(a.useRef)(s);return Object(a.useEffect)((function(){p.current=s})),r.a.createElement(G,null,r.a.createElement(K,null,n.map((function(e){return r.a.createElement(Y,{key:e.id,item:e,checkedState:Boolean(t[e.id]),handleCheckedChangeRef:p})})),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"check-all",checked:u,onChange:d}),r.a.createElement("label",{htmlFor:"check-all"},"全选")),r.a.createElement("span",null,"商品总价￥",l))))})),ee=function(){return r.a.createElement(h.a,{store:_},r.a.createElement(p.a,null,r.a.createElement(s,null),r.a.createElement(C,null),r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",exact:!0},r.a.createElement(f.a,{to:"/todo-list"})),r.a.createElement(f.b,{path:"/todo-list",exact:!0},r.a.createElement(F,null)),r.a.createElement(f.b,{path:"/cart",exact:!0},r.a.createElement($,null)))))};Object(m.b)(),c.a.render(r.a.createElement(ee,null),document.getElementById("app"))}},[[75,1,2]]]);