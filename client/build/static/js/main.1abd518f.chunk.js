(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),o=n(1),c=n(4),i=n(5),u=n(7),m=n(6),s=n(8),p={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},f=function(){return r.a.createElement("label",null,"Card details",r.a.createElement(o.CardElement,{className:"MyCardElement",style:p}))},h={createPaymentIntent:function(e){return window.fetch("http://localhost:4242/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return 200===e.status?e.json():null})).then((function(e){if(!e||e.error)throw console.log("API error:",{data:e}),new Error("PaymentIntent API Error");return e.client_secret}))}},b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=n.props.elements.getElement("card");h.createPaymentIntent().then((function(e){console.log(e),n.props.stripe.confirmCardPayment(e,{payment_method:{card:t}})}))},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"SGD 10.99"),r.a.createElement("h4",null,"Order a blue llama now!"),r.a.createElement("img",{src:"http://bluebison.net/sketchbook/2009/1109/llama-blue-small.png",alt:"bluellama"}),r.a.createElement(f,null),r.a.createElement("button",null,"Confirm order"))}}]),t}(r.a.Component),d=Object(o.injectStripe)(b),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(o.Elements,null,r.a.createElement(d,null))}}]),t}(r.a.Component);Object(l.render)(r.a.createElement((function(){return r.a.createElement(o.StripeProvider,{apiKey:"pk_test_eLz60JoT4GwMcTJ6HLTLspsP"},r.a.createElement(y,null))}),null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1abd518f.chunk.js.map