!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("express")},function(e,t,n){const r=n(8);e.exports=new r("customeronly1.database",{verbose:console.log})},function(e,t,n){(function(e){const t=n(0),r=n(3),o=t(),s=n(4),u=n(5),i=n(6);o.set("view engine","pug"),o.set("views",e+"/views"),o.use(s({secret:"keyboard cat",resave:!1,saveUninitialized:!1,cookie:{maxAge:36e5}})),o.use(r()),o.use(u.urlencoded({extended:!1})),o.use(u.json()),o.use("/",i),o.listen(4567,()=>{console.log("server started")})}).call(this,"/")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("express-session")},function(e,t){e.exports=require("body-parser")},function(e,t,n){const r=n(0).Router(),o=n(7),s=n(1);r.get("/",(e,t)=>{t.json({status:3})}),r.post("/",(e,t,n)=>{if(e.session.username)return t.json({status:2});n()}),r.post("/",(e,t)=>{const n=s.prepare("select username from login where username=? and password=?").get(e.body.username,e.body.password);return console.log(n),n?(e.session.username=n.username,t.json({status:1})):t.json({status:0})}),r.use(o),e.exports=r},function(e,t,n){const r=n(0).Router();n(1);r.post("/create/party/add",(e,t)=>{t.json({msg:"hi"})}),e.exports=r},function(e,t){e.exports=require("better-sqlite3")}]);