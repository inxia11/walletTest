(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5daa2732"],{3560:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"symbol-type"},[t._v("Валюта = "+t._s(t.currentSymbol))]),n("div",{staticClass:"wrapper"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentSymbol,expression:"currentSymbol"}],staticClass:"select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentSymbol=e.target.multiple?n:n[0]}}},t._l(t.options,(function(e,s){return n("option",{key:s,staticClass:"select__option"},[t._v(t._s(e))])})),0),t._m(0)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list"},[n("li",{staticClass:"list__content"})])}],a={name:"DiffStatus",data:function(){return{options:["BTCUSDT","BNBBTC","ETHBTC"],currentSymbol:"BTCUSDT"}},watch:{currentSymbol:function(t){this.$bus.$emit("symbol",t)}}},c=a,i=(n("63e7"),n("2877")),l=Object(i["a"])(c,s,r,!1,null,"651e10ca",null);e["default"]=l.exports},"3db3":function(t,e,n){},"63e7":function(t,e,n){"use strict";n("3db3")}}]);
//# sourceMappingURL=chunk-5daa2732.068c8e45.js.map