(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16410cc0"],{"136b":function(t,e,a){},af4c:function(t,e,a){"use strict";a("136b")},e37f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"qr-module"},[a("h3",[t._v("URL转二维码")]),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textVal,expression:"textVal"}],attrs:{placeholder:"请输入需要转码的URL"},domProps:{value:t.textVal},on:{input:function(e){e.target.composing||(t.textVal=e.target.value)}}})]),a("canvas",{ref:"canvas",attrs:{id:"canvas"}}),a("div",{staticClass:"op-con"},[a("button",{staticClass:"btn",on:{click:t.makeQrcode}},[t._v("生成二维码")])])])},r=[],o=a("d055"),s=a.n(o),c={name:"qr-code",data:function(){return{canvas:null,textVal:""}},mounted:function(){},computed:{qrcodeUrl:function(){return this.textVal}},methods:{makeQrcode:function(){this.qrcodeUrl?this._getQrCode():alert("请输入url~")},_getQrCode:function(){var t=new s.a["create"]("qrcode",{width:300,height:300,text:this.qrcodeUrl,colorDark:"#000000",colorLight:"#ffffff"});this._drawQrCode(t)},_drawQrCode:function(t){var e=this;Promise.resolve(s.a.toDataURL.call(t,this.qrcodeUrl),{errorCorrectionLevel:"H"}).then((function(t){var a=e,n=new Image;n.setAttribute("crossOrigin","anonymous"),n.src=t,n.onload=function(){this.complete?a._drawQrImage(n):alert("图片加载失败，生成二维码失败")}}))},_drawQrImage:function(t){this.canvas=this.$refs.canvas;var e=this.canvas.getContext("2d");this.canvas.setAttribute("width",300),this.canvas.setAttribute("height",300),this.canvas.style.width="300px",this.canvas.style.height="300px",e.drawImage(t,0,0,300,300)}}},i=c,l=(a("af4c"),a("2877")),d=Object(l["a"])(i,n,r,!1,null,"39059826",null);e["default"]=d.exports}}]);