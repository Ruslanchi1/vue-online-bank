(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4783"],{"0728":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c=Object(n["S"])("data-v-209966e0");Object(n["y"])("data-v-209966e0");var r=Object(n["i"])("strong",null,"Имя владельца",-1),u=Object(n["i"])("strong",null,"Телефон",-1),s=Object(n["i"])("strong",null,"Сумма",-1),i=Object(n["i"])("strong",null,"Статус",-1),o=Object(n["h"])(" : "),b={class:"form-control"},p=Object(n["i"])("label",{for:"status"},"Статус",-1),l=Object(n["i"])("option",{value:"done"},"Завершен",-1),j=Object(n["i"])("option",{value:"cancelled"},"Отменен",-1),O=Object(n["i"])("option",{value:"active"},"Активен",-1),d=Object(n["i"])("option",{value:"pending"},"Выполняется",-1),v={key:2,class:"text-center text-white"};Object(n["w"])();var f=c((function(e,t,a,f,h,m){var g=Object(n["E"])("app-loader"),w=Object(n["E"])("app-status"),y=Object(n["E"])("app-page");return f.loading?(Object(n["v"])(),Object(n["e"])(g,{key:0})):f.request?(Object(n["v"])(),Object(n["e"])(y,{key:1,back:"",title:"Заявка"},{default:c((function(){return[Object(n["i"])("p",null,[r,Object(n["h"])(" : "+Object(n["H"])(f.request.fio),1)]),Object(n["i"])("p",null,[u,Object(n["h"])(" : "+Object(n["H"])(f.request.phone),1)]),Object(n["i"])("p",null,[s,Object(n["h"])(" : "+Object(n["H"])(f.currency(f.request.amount)),1)]),Object(n["i"])("p",null,[i,o,Object(n["i"])(w,{type:f.request.status},null,8,["type"])]),Object(n["i"])("div",b,[p,Object(n["Q"])(Object(n["i"])("select",{id:"status","onUpdate:modelValue":t[1]||(t[1]=function(e){return f.status=e})},[l,j,O,d],512),[[n["K"],f.status]])]),Object(n["i"])("button",{class:"btn danger",onClick:t[2]||(t[2]=function(){return f.remove&&f.remove.apply(f,arguments)})},"Удалить"),f.hasChanges?(Object(n["v"])(),Object(n["e"])("button",{key:0,class:"btn primary",onClick:t[3]||(t[3]=function(){return f.update&&f.update.apply(f,arguments)})},"Обновить")):Object(n["f"])("",!0)]})),_:1})):(Object(n["v"])(),Object(n["e"])("h3",v,"Заявки с id: "+Object(n["H"])(e.$route.params.id)+" нет",1))})),h=a("5530"),m=(a("96cf"),a("1da1")),g=a("6c02"),w=a("5502"),y=a("1da6"),k=a("ddc6"),q=a("0aeb"),x=a("3f9b"),R={setup:function(){var e=Object(g["c"])(),t=Object(g["d"])(),a=Object(w["b"])(),c=Object(n["B"])(!0),r=Object(n["B"])({}),u=Object(n["B"])();Object(n["t"])(Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c.value=!0,t.next=3,a.dispatch("request/loadById",e.params.id);case 3:r.value=t.sent,u.value=null===(n=r.value)||void 0===n?void 0:n.status,c.value=!1;case 6:case"end":return t.stop()}}),t)}))));var s=Object(n["c"])((function(){return r.value.status!==u.value})),i=function(){var n=Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.dispatch("request/remove",e.params.id);case 2:t.push("/");case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(h["a"])(Object(h["a"])({},r.value),{},{status:u.value,id:e.params.id}),t.next=3,a.dispatch("request/update",n);case 3:r.value.status=u.value;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{loading:c,request:r,currency:x["a"],status:u,hasChanges:s,remove:i,update:o}},components:{AppPage:y["a"],AppLoader:k["a"],AppStatus:q["a"]}};R.render=f,R.__scopeId="data-v-209966e0";t["default"]=R}}]);
//# sourceMappingURL=chunk-2d0a4783.f0305b0b.js.map