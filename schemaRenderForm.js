window.SchemaRenderForm=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=window.Vue},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,l,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function l(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],s=n[u]||0,c="".concat(u," ").concat(s);n[u]=s+1;var p=l(c),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:c,updater:v(f,t),references:1}),r.push(c)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,p=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var a=h++;n=m||(m=s(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=s(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);i[o].references--}for(var a=u(e,t),s=0;s<n.length;s++){var c=l(n[s]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,".separator {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  font-size: 10px;\n  margin: 25px 10px 10px 10px;\n}\n.separator::before, .separator::after {\n  content: '';\n  flex: 1;\n  border-bottom: 2px dashed #CCCACA;\n}\n.separator::before {\n  margin-right: .5em;\n}\n.separator::after {\n  margin-left: .5em;\n}\n",""]),t.default=o},function(e,t,n){"use strict";n.r(t),n.d(t,"SCHEMA_TYPES",(function(){return r})),n.d(t,"INPUT_TYPES",(function(){return o})),n.d(t,"s4",(function(){return a})),n.d(t,"genId",(function(){return i})),n.d(t,"generAttrs",(function(){return l})),n.d(t,"parserSchema",(function(){return u})),n.d(t,"parserItem",(function(){return s})),n.d(t,"SchemaForm",(function(){return d})),n.d(t,"ObjArray",(function(){return m})),n.d(t,"FormItem",(function(){return h})),n.d(t,"Radio",(function(){return v})),n.d(t,"Checkbox",(function(){return g})),n.d(t,"Input",(function(){return y})),n.d(t,"InputNumber",(function(){return b})),n.d(t,"Text",(function(){return x})),n.d(t,"Select",(function(){return S})),n.d(t,"Switch",(function(){return O})),n.d(t,"DatePicker",(function(){return w})),n.d(t,"Color",(function(){return k})),n.d(t,"ToolTip",(function(){return j}));const r=Object.freeze({ARRAY:"array",BOOLEAN:"boolean",INTEGER:"number",NUMBER:"number",OBJECT:"object",STRING:"string",NULL:null}),o=Object.freeze({CHECKBOX:"checkbox",EMAIL:"email",HIDDEN:"hidden",NUMBER:"number",RADIO:"radio",SELECT:"select",SWITCH:"switch",TEXT:"text",TEXTAREA:"textarea",URL:"url"});function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function i(e=""){const t=a()+a();return e?`${e}-${t}`:t}function l(e,t){return{placeholder:e.description,...e.attrs,...t}}function u(e){if(e.oneOf instanceof Array)return e.oneOf=s(e.oneOf),v;if(e.anyOf instanceof Array){if(e.anyOf=s(e.anyOf),"array"!==e.type)throw new Error("多选框的类型必须是数组："+e);return g}return e.enum instanceof Array?(e.enum=s(e.enum),S):e.text?x:"color".includes(e.format)?k:"date".includes(e.format)?w:"boolean".includes(e.type)?O:"string".includes(e.type)?y:"number".includes(e.type)?b:void 0}function s(e){return e.map(e=>"object"!=typeof e?{label:e,value:e}:e)}var c=n(0),p=n.n(c);const f=i("SchemaForm"),d=p.a.extend({name:"op-schemaForm",props:{schema:{type:Object,default:()=>({})},value:{type:[Number,String,Array,Object,Boolean],default:()=>({})},rules:Object,labelPosition:String,labelWidth:String,labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:String,disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1}},data:()=>({modelValue:{}}),watch:{schema(e,t){this.modelValue={...this.value}}},render(e){const{schema:t,$slots:n}=this,r=Object.keys(t.properties).map(n=>{const r={...t.properties[n],name:n};return e(h,{props:{schema:r,label:r.title,titleHref:r.titleHref||void 0,toolTip:r.toolTip||void 0,required:r.required,rules:r.rules||[],value:this.value[n]},on:{change:this.change}})});return n.default&&n.default.forEach(e=>r.push(e)),e("el-form",{ref:f,props:{...this._props,model:this.modelValue}},r)},methods:{change({key:e,value:t}){this.$set(this.modelValue,e,t),this.$emit("change",this.modelValue)}},created(){this.modelValue={...this.value}}}),m={functional:!0,name:"op-objArray",render(e,t){const{props:{schema:n,schema:{name:r,items:o,defaultNum:a},value:i},listeners:l}=t;"number"==typeof a&&a>0&&i.length!==a&&Array.from({length:a-1},(e,t)=>i.push(JSON.parse(JSON.stringify(i[0]))));let u=i.length;const s=[],c=e(h,{style:{margin:"15px 10px 10px 5px"},props:{schema:{name:"num",type:"number",title:"数量",attrs:{min:1}},value:u},on:{change(e){const t=JSON.parse(JSON.stringify(i[i.length-1]));e.value>u?Array.from({length:e.value-u},(e,n)=>i.push(t)):u>1&&e.value<u&&Array.from({length:u-e.value},(e,t)=>i.pop()),u=e.value,l.change({key:r,value:i})}}});for(let t=0;t<u;t+=1){const n=Object.keys(o.properties).map(n=>{const a={...o.properties[n],name:n};return e(h,{style:{margin:"5px 10px 10px 5px"},props:{schema:a,label:a.title,required:a.required,value:i[t][n]},on:{change(e){i[t][e.key]=e.value,l.change({key:r,value:i})}}})}),u=e("div",{class:{separator:!0}},"选项 "+(t+1));(!a||a>1)&&s.push(u),s.push(n)}return e("div",{style:{border:"1px solid #CCCACA",marginBottom:"20px",boxShadow:"1px 1px rgba(0, 0, 0, 0.1)"}},[a?null:c,s])}},h={functional:!0,name:"op-form-item",render(e,t){const{props:{schema:n,value:r},data:o,listeners:a}=t,i=n.title?e(x,{slot:"label",props:{schema:{text:n.title,toolTip:n.toolTip||void 0,attrs:{href:n.titleHref||void 0}}}}):void 0;if("array"===n.type&&n.items&&"object"===n.items.type){return[i,e(m,{props:{schema:n,value:r},on:a})]}const l=e(u(n),{props:{schema:n,value:r},on:a});return e("el-form-item",o,[i,l])}},v={functional:!0,name:"op-radio",render(e,t){const{props:{schema:{name:n,oneOf:r},value:o},listeners:a}=t,i=r.map(t=>e("el-radio",{props:{label:t.value},on:{change(){a.change({key:n,value:t.value})}}},t.label));return e("el-radio-group",{props:{value:o||""}},i)}},g={functional:!0,name:"op-checkbox",render(e,t){const{props:{schema:{anyOf:n,name:r},value:o},listeners:a}=t,i=n.map(t=>e("el-checkbox",{props:{label:t.value},on:{change(){let e=[];e=o.includes(t.value)?o.filter(e=>e!==t.value):[...o,t.value],a.change({key:r,value:e})}}},t.label));return e("el-checkbox-group",{props:{value:o||[]}},i)}},y={functional:!0,name:"op-input",render(e,t){const{props:{schema:n,schema:{name:r},value:o},attrs:a,listeners:i}=t,u=l(n,a);return e("el-input",{props:{...u,value:o||""},attrs:u,on:{input(e){i.change({key:r,value:e})}}})}},b={functional:!0,name:"op-input-number",render(e,t){const{props:{schema:n,schema:{name:r,description:o},value:a},attrs:i,listeners:u}=t,s=l(n,i);return e("el-input-number",{props:{...s,value:a||""},attrs:s,on:{change(e){u.change({key:r,value:e})}}})}},x={functional:!0,name:"text",render(e,t){const{props:{schema:n,schema:{text:r,name:o},value:a},data:i,attrs:u,listeners:s}=t,c=l(n,u),p="label"===i.slot&&n.toolTip?e(j,{props:{toolTip:n.toolTip}}):void 0,f="label"===i.slot&&n.text?":":void 0,d=e("el-link",{props:{...c,value:a||""},attrs:{...c,type:"primary",target:"_blank",underline:!1},style:{fontSize:"12px",fontWeight:"normal"}},[r,p,f]),m=e("span",{props:{...c,value:a||""},style:{fontSize:"12px",fontWeight:"normal"}},[r,p,f]);return c.href?d:m}},S={functional:!0,name:"op-select",render(e,t){const{props:{schema:n,schema:{name:r,enum:o},value:a},attrs:i,listeners:u}=t,s=o.map(t=>e("el-option",{props:{key:t.value,label:t.label,value:t.value}})),c=l(n,i);return e("el-select",{props:{...c,value:a||""},attrs:c,on:{change(e){u.change({key:r,value:e})}}},s)}},O={functional:!0,name:"op-switch",render(e,t){const{props:{schema:n,schema:{name:r},value:o},attrs:a,listeners:i}=t,u=l(n,a);return e("el-switch",{props:{...u,value:o||!1},attrs:u,on:{change(e){i.change({key:r,value:e})}}})}},T=new Date,w={functional:!0,name:"op-date-picker",render(e,t){const{props:{schema:n,schema:{name:r},value:o},attrs:a,listeners:i}=t,u=l(n,a);return Object.assign(u,{type:n.attrs&&n.attrs.type||"date"}),e("el-date-picker",{props:{...u,value:o||T},attrs:u,on:{change(e){i.change({key:r,value:e.toString()})},input(e,...t){i.change({key:r,value:e.toString()})}}})}},k={functional:!0,name:"op-color",render(e,t){const{props:{schema:n,schema:{name:r},value:o},attrs:a,listeners:i}=t;return e("el-color-picker",{props:{...l(n,a),value:o||""},on:{change(e){i.change({key:r,value:e})}}})}},j={functional:!0,name:"op-toolTip",render(e,t){const{props:{toolTip:n,placement:r}}=t;return e("el-tooltip",{props:{content:n,placement:r||"top"}},[e("i",{class:"el-icon-question el-icon--right",style:{fontSize:"5px",margin:"1px",opacity:"0.8"}})])}};n(2);"undefined"!=typeof window&&window.Vue&&window.Vue.component("SchemaForm",d)}]).SchemaRenderForm;