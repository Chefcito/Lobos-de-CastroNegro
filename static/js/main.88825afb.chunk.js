(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){},33:function(e,a,t){e.exports=t(57)},38:function(e,a,t){},39:function(e,a,t){},48:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(10),s=t(15),o=t(0),i=t.n(o),c=t(16),r=t.n(c);t(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(3),u=t(4),d=t(8),m=t(7),f=t(9),h=t(5),v=(t(39),function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"page Spalh"},i.a.createElement("img",{width:"220px",src:"./imgs/lobo.png",alt:"Italian Trulli"}),i.a.createElement("p",null,"Hombres lobo de castronegro es un juego Colaborativo, basado en la desconfianza"),i.a.createElement("h3",{className:"titulo"},"Hombres lobo de Castronegro"),i.a.createElement("div",{className:"btnContainer"},i.a.createElement(n.b,{to:"/SingIn",className:"go"},">")))}}]),a}(o.Component)),p=Object(h.a)(v),b=(t(48),t(2)),g=t(18),j=t(20),E=(t(49),t(51),{apiKey:"AIzaSyBuTV6IHwc1e6HRPqltfHIewD9gaLwrzIM",authDomain:"lobosdecastro-59aae.firebaseapp.com",databaseURL:"https://lobosdecastro-59aae.firebaseio.com",projectId:"lobosdecastro-59aae",storageBucket:"lobosdecastro-59aae.appspot.com",messagingSenderId:"43257255271",appId:"1:43257255271:web:f05fc3dbcdb172ad"});j.initializeApp(E);var I=0,k=j.database();k.ref("contadorSalas").once("value").then(function(e){O=e.val()+"",k.ref("salas/"+O+"/users").on("value",function(e){e.val()&&function(){for(var a=Object.keys(e.val()),t=[],n=function(e){k.ref("salas/"+O+"/users/"+a[e]).once("value").then(function(n){t=[].concat(Object(g.a)(t),[{name:n.val().username,personaje:n.val().personaje,imagen:n.val().imagen,id:n.val().id}]),e===a.length-1&&A.setRoomMates(t)})},s=0;s<a.length;s++)n(s);A.setCurrentConectados(a.length)}()}),k.ref("salas/"+O+"/asesinado").on("value",function(e){e.val()&&(1===I&&(A.setAsesinado(e.val()),N(e.val()[0]),A.setAsesinado(e.val()),7===e.val()[0].id?A.setThereIsVidente(!1):4===e.val()[0].id?A.setThereIsMedico(!1):0===e.val()[0].id||5===e.val()[0].id?2===(I+=1)&&A.setThereIsLobo(!1):1!==e.val()[0].id&&2!==e.val()[0].id&&3!==e.val()[0].id&&e.val()[0].id),e.val().length>=2?(A.setAsesinado(e.val()),e.val()[0].name===e.val()[1].name?(N(e.val()[0]),A.setAsesinado(e.val()),7===e.val()[0].id?A.setThereIsVidente(!1):4===e.val()[0].id?A.setThereIsMedico(!1):0===e.val()[0].id||5===e.val()[0].id?2===(I+=1)&&A.setThereIsLobo(!1):1!==e.val()[0].id&&2!==e.val()[0].id&&3!==e.val()[0].id&&e.val()[0].id):setTimeout(function(){k.ref("salas/"+O).update({asesinado:[]}),A.setAsesinado([]),A.setIsActionDidIt(!1)},5e3)):A.setAsesinado(e.val()))}),k.ref("salas/"+O+"/linchado").on("value",function(e){if(e.val())if(e.val().length===A.roomMates.length){A.setLinchado(e.val());for(var a=0,t=e.val().length-1;t>0;t--)e.val()[t].name===e.val()[t-1].name&&(a+=1);a===A.roomMates.length-1?(N(e.val()[0]),A.setLinchado(e.val()),k.ref("salas/"+O+"/users/"+e.val()[0].id).set({}),7===e.val()[0].id?A.setThereIsVidente(!1):4===e.val()[0].id?A.setThereIsMedico(!1):0===e.val()[0].id||5===e.val()[0].id?2===(I+=1)&&A.setThereIsLobo(!1):1!==e.val()[0].id&&2!==e.val()[0].id&&3!==e.val()[0].id&&e.val()[0].id,e.val()[0].id===A.userInfo.id&&(window.location.href="./")):setTimeout(function(){k.ref("salas/"+O).update({linchado:[]}),A.setLinchado([]),A.setIsActionDidIt(!1)},5e3)}else A.setLinchado(e.val())}),k.ref("salas/"+O+"/turno").on("value",function(e){A.setIsActionDidIt(!1),A.setTurnoGeneral(e.val()),4===e.val()&&k.ref("salas/"+O+"/seleccionados").once("value").then(function(e){e.val()[0].name===e.val()[1].name?A.setHayMuerto(!1):(A.setHayMuerto(!0),k.ref("salas/"+O+"/users/"+e.val()[0].id).set({}),e.val()[0].id===A.userInfo.id&&(window.location.href="./"))})}),k.ref("salas/"+O+"/mensajes").on("value",function(e){A.setMensajes(e.val())}),k.ref("salas/"+O+"/ronda").on("value",function(e){A.setRonda(e.val())}),k.ref("salas/"+O+"/seleccionados").on("value",function(e){A.setSeleccionados(e.val())})});var O=0;function C(e,a,t){k.ref("personajes").transaction(function(t){if(t){if(function(e,a,t,n){k.ref("contadorSalas").once("value").then(function(t){O=t.val()+"",k.ref("salas/"+O+"/cantidadUsuarios").once("value").then(function(t){null!==t.val()||void 0!==t.val()?y(t.val(),n,e,a):y(0,n,e,a)})})}(e,a,0,t[0]),1!==t.length)return t.shift(),t;k.ref("fixedPersonajes").once("value").then(function(e){return t=e.val(),k.ref("contadorSalas").once("value").then(function(e){O=e.val(),k.ref().update({contadorSalas:O+1})}),k.ref().update({personajes:t}),t})}})}function y(e,a,t,n){null===e&&(e=0),k.ref("salas/"+O+"/users/"+e).transaction(function(s){if(s)return k.ref("salas/"+O+"/users/"+e).update({activo:!0,personaje:a,descripcion:A.getDescripcion(a),turno:A.getTurno(a),imagen:"./imgs/"+a+".png"});k.ref("salas/"+O).update({turno:0}),k.ref("salas/"+O).update({ronda:0}),k.ref("salas/"+O).update({seleccionados:""}),k.ref("salas/"+O).update({cantidadUsuarios:e+1});var o={username:t,email:n,activo:!0,personaje:a,descripcion:A.getDescripcion(a),imagen:"./imgs/"+a+".png",turno:A.getTurno(a),id:e};return A.setUserInfo(o),o})}function N(e){if(A.setIsActionDidIt(!1),A.turnoGeneral+1===2&&!1===A.thereIsMedico?A.thereIsVidente?k.ref("salas/"+O).update({turno:A.turnoGeneral+2}):k.ref("salas/"+O).update({turno:A.turnoGeneral+3}):A.turnoGeneral+1===3&&!1===A.thereIsVidente?k.ref("salas/"+O).update({turno:4}):k.ref("salas/"+O).update({turno:A.turnoGeneral+1}),"nadie"!==e){var a=A.seleccionados;a?k.ref("salas/"+O).update({seleccionados:[].concat(Object(g.a)(a),[e])}):k.ref("salas/"+O).update({seleccionados:[e]})}}k.ref().on("value",function(e){});var w=j.auth();var S={SingIn:function(e,a,t){A.isLogin||(A.setLogin(!0),w.signInWithEmailAndPassword(e,a).then(function(a){A.setLogin(!1),t(!0),C(a.user.email.split("@")[0],e)}).catch(function(e){e&&(A.setLogin(!1),t(!1),console.log("sing In error ",e))}))},SingUp:function(e,a,t,n){A.isLogin||(A.setLogin(!0),w.createUserWithEmailAndPassword(e,a).then(function(){n(!0),C(t,e),A.setLogin(!1)}).catch(function(e){e&&(n(!1),A.setLogin(!1),console.log("sing Up error ",e))}))},setTurnoGeneral:function(e){A.setIsActionDidIt(!1),2===e&&!1===A.thereIsMedico?A.thereIsVidente?k.ref("salas/"+O).update({turno:e+1}):k.ref("salas/"+O).update({turno:e+2}):3===e&&!1===A.thereIsVidente?k.ref("salas/"+O).update({turno:4}):k.ref("salas/"+O).update({turno:e})},updateUserSelected:N,updateAsesinado:function(e){k.ref("salas/"+O+"/asesinado").once("value").then(function(a){a.val()?k.ref("salas/"+O).update({asesinado:[].concat(Object(g.a)(a.val()),[e])}):k.ref("salas/"+O).update({asesinado:[e]})})},updateLinchado:function(e){k.ref("salas/"+O+"/linchado").once("value").then(function(a){a.val()?k.ref("salas/"+O).update({linchado:[].concat(Object(g.a)(a.val()),[e])}):k.ref("salas/"+O).update({linchado:[e]})})},reset:function(){k.ref("salas/"+O).update({linchado:null,asesinado:null,seleccionados:null}),A.setMensajes([])},NuevoMsj:function(e){k.ref("salas/"+O+"/mensajes").once("value").then(function(a){a.val()?k.ref("salas/"+O).update({mensajes:[].concat(Object(g.a)(a.val()),[e])}):k.ref("salas/"+O).update({mensajes:[e]})})}},T=new(function(){function e(){Object(l.a)(this,e),Object(b.f)(this,{currentConectados:0,minConectados:8,isLogin:!1,turnoGeneral:0,ronda:0,seleccionados:[],asesinado:[],linchado:[],mensajes:[],userInfo:{username:"",email:"",activo:!1,personaje:"",descripcion:"",imagen:"",turno:null,id:null},isActionDidit:!1,hayMuerto:!1,roomMates:[],thereIsLobo:!0,thereIsAldeano:!0,thereIsMedico:!0,thereIsVidente:!0})}return Object(u.a)(e,[{key:"setThereIsLobo",value:function(e){var a=this;Object(b.k)(function(){a.thereIsLobo=e,!1===e&&(window.location.href="./Win")})}},{key:"setThereIsAldeano",value:function(e){var a=this;Object(b.k)(function(){a.thereIsAldeano=e,!1===e&&(window.location.href="./Win/LOBOS")})}},{key:"setThereIsMedico",value:function(e){var a=this;Object(b.k)(function(){a.thereIsMedico=e})}},{key:"setThereIsVidente",value:function(e){var a=this;Object(b.k)(function(){a.thereIsVidente=e})}},{key:"setMensajes",value:function(e){var a=this;Object(b.k)(function(){a.mensajes=e})}},{key:"setHayMuerto",value:function(e){var a=this;Object(b.k)(function(){a.hayMuerto=e})}},{key:"setIsActionDidIt",value:function(e){var a=this;Object(b.k)(function(){a.isActionDidit=e})}},{key:"setAsesinado",value:function(e){var a=this;Object(b.k)(function(){a.asesinado=e})}},{key:"setLinchado",value:function(e){var a=this;Object(b.k)(function(){a.linchado=e})}},{key:"setRonda",value:function(e){var a=this;Object(b.k)(function(){a.ronda=e})}},{key:"setSeleccionados",value:function(e){var a=this;Object(b.k)(function(){a.seleccionados=e})}},{key:"setRoomMates",value:function(e){var a=this;Object(b.k)(function(){a.roomMates=e})}},{key:"setTurnoGeneral",value:function(e){var a=this;Object(b.k)(function(){a.turnoGeneral=e,4===e&&setTimeout(function(){a.setTurnoGeneral(5),a.setIsActionDidIt(!1)},9e3),6===e&&setTimeout(function(){S.reset(),a.setTurnoGeneral(0),T.setIsActionDidIt(!1),setTimeout(function(){S.setTurnoGeneral(1),T.setIsActionDidIt(!1)},9e3)},9e3)})}},{key:"getDescripcion",value:function(e){switch(e){case"lobo":return"matar a todos los aldeanos sin que te descubran";case"aldeano":return"descubrir quien es el lobo";case"vidente":return"saber quien es un personaje que escojas";case"medico":return"darle inmunidad a algun jugador"}}},{key:"getTurno",value:function(e){switch(e){case"lobo":return 1;case"aldeano":return 5;case"vidente":return 3;case"medico":return 2}}},{key:"setUserInfo",value:function(e){var a=this;Object(b.k)(function(){a.userInfo=e})}},{key:"setCurrentConectados",value:function(e){var a=this;Object(b.k)(function(){a.currentConectados=e})}},{key:"setLogin",value:function(e){var a=this;Object(b.k)(function(){a.isLogin=e})}},{key:"getCharacter",value:function(){var e=this;Object(b.k)(function(){if(!e.loadingCharcter){e.loadingCharcter=!0;S.getCharacter(function(a){e.character=a})}})}}]),e}()),A=Object(h.a)(T),M=function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"page Waiting"},i.a.createElement("h1",null,A.currentConectados),i.a.createElement("h3",{className:"titulo"},"Conectados"),i.a.createElement("p",null,"Esta sala esta programada para ",i.a.createElement("strong",null,A.minConectados," "),"personas. Debemos esperar mas usuarios"),i.a.createElement(n.b,{to:"/ShowCharacter",className:A.currentConectados>=A.minConectados?"btn":"oculto"},"Jugar"))}}]),a}(o.Component),L=Object(h.a)(M),D=(t(53),function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.history.push("/Juego")},9e3)}},{key:"render",value:function(){return i.a.createElement("div",{className:"page ShowCharacter"},i.a.createElement("img",{width:"220px",src:A.userInfo.imagen,alt:"Italian Trulli"}),i.a.createElement("h3",{className:"titulo"},A.userInfo.personaje),i.a.createElement("p",null,"El objetivo de tu personaje es ",A.userInfo.descripcion))}}]),a}(o.Component)),G=Object(h.a)(D),U=t(11),W=(t(30),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(d.a)(this,Object(m.a)(a).call(this,e))).state={email:"",password:""},t.handleClick=t.handleClick.bind(Object(U.a)(t)),t.onSingIn=t.onSingIn.bind(Object(U.a)(t)),t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"onSingIn",value:function(e){e&&this.props.history.push("/Waiting")}},{key:"handleClick",value:function(){S.SingIn(this.state.email+"@gmail.com",this.state.password,this.onSingIn)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"page Sing"},i.a.createElement("div",{className:"titulo"},"Sing In"),i.a.createElement("input",{type:"text",placeholder:"Usuario",value:this.state.email,onChange:function(a){e.setState({email:a.target.value+""})}}),i.a.createElement("input",{type:"password",placeholder:"Password",value:this.state.password,onChange:function(a){e.setState({password:a.target.value+""})}}),A.isLogin?i.a.createElement("div",{className:"btn"},"Cargando"):i.a.createElement("div",{className:"btn",onClick:this.handleClick},"Iniciar"),i.a.createElement(n.b,{to:"/SingUp",className:"link"},"Crear una cuenta"))}}]),a}(o.Component)),x=Object(h.a)(W),V=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(d.a)(this,Object(m.a)(a).call(this,e))).state={email:"",password:"",name:""},t.handleClick=t.handleClick.bind(Object(U.a)(t)),t.onSingUp=t.onSingUp.bind(Object(U.a)(t)),t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"onSingUp",value:function(e){e&&this.props.history.push("/Waiting")}},{key:"handleClick",value:function(){S.SingUp(this.state.email+"@gmail.com",this.state.password,this.state.name,this.onSingUp)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"page Sing"},i.a.createElement("div",{className:"titulo"},"Sing Up"),i.a.createElement("input",{type:"text",placeholder:"Usuario",value:this.state.email,onChange:function(a){e.setState({name:a.target.value+""}),e.setState({email:a.target.value+""})}}),i.a.createElement("input",{type:"password",placeholder:"Password",value:this.state.password,onChange:function(a){e.setState({password:a.target.value+""})}}),A.isLogin?i.a.createElement("div",{className:"btn"},"Cargando"):i.a.createElement("div",{className:"btn",onClick:this.handleClick},"Registrar"),i.a.createElement(n.b,{to:"/SingIn",className:"link"},"Ya tengo una cuenta"))}}]),a}(o.Component),q=Object(h.a)(V),H=(t(54),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(d.a)(this,Object(m.a)(a).call(this,e))).handleClick=t.handleClick.bind(Object(U.a)(t)),t.handleClassSelected=t.handleClassSelected.bind(Object(U.a)(t)),t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){"vidente"===A.userInfo.personaje&&setTimeout(function(){S.setTurnoGeneral(1)},9e3)}},{key:"handleClick",value:function(e){if(!1===A.isActionDidit){if("lobo"===A.userInfo.personaje)return S.updateAsesinado(e),void A.setIsActionDidIt(!0);S.updateUserSelected(e),A.setIsActionDidIt(!0)}}},{key:"handleClick2",value:function(e){!1===A.isActionDidit&&(S.updateLinchado(e),A.setIsActionDidIt(!0))}},{key:"handleClassSelected",value:function(e){if("lobo"===A.userInfo.personaje){var a=!1;A.asesinado&&A.asesinado.map(function(t){t.name===e.name&&(a=!0)});var t="card";return a&&(t="card sel"),t}return"card"}},{key:"handleClassSelected2",value:function(e){var a=!1;A.linchado&&A.linchado.map(function(t){t.name===e.name&&(a=!0)});var t="card";return a&&(t="card sel"),t}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"page Juego"},i.a.createElement("div",{className:"header"},i.a.createElement("h3",{className:"titulo"},A.userInfo.personaje),i.a.createElement("p",null,A.isActionDidit?"":"Dale"),i.a.createElement("div",{className:"imgContainer"},i.a.createElement("img",{width:"100%",src:A.userInfo.imagen,alt:"Italian Trulli"}))),i.a.createElement("div",{className:"actions"},5===A.turnoGeneral?i.a.createElement("div",{className:"cards"},A.roomMates.map(function(a,t){return i.a.createElement("div",{key:t,className:e.handleClassSelected2(a),onClick:function(){return e.handleClick2(a)}},a.name)})):4===A.turnoGeneral?A.hayMuerto?i.a.createElement("div",null,i.a.createElement("p",{className:"msj"},"ha muerto ",A.seleccionados[0].name&&A.seleccionados[0].name),i.a.createElement("img",{width:"220px",src:A.seleccionados[0].imagen&&A.seleccionados[0].imagen,alt:"Italian Trulli"})):i.a.createElement("div",null,i.a.createElement("p",{className:"msj"},"Nadie Murio esta noche")):A.turnoGeneral===A.userInfo.turno?i.a.createElement("div",{className:"cards"},A.roomMates.map(function(a,t){return i.a.createElement("div",{key:t,className:e.handleClassSelected(a),onClick:function(){return e.handleClick(a)}},a.name)})):1===A.turnoGeneral?i.a.createElement("p",{className:"msj"},"El lobo esta escogiendo a su presa"):2===A.turnoGeneral?i.a.createElement("p",{className:"msj"},"El medico esta buscando a quien darle inmunidad"):3===A.turnoGeneral?i.a.createElement("p",{className:"msj"},"El vidente esta descubriendo a alguien"):6===A.turnoGeneral?i.a.createElement("div",null,i.a.createElement("p",{className:"msj"},"Resumen, Matamos a: ",A.linchado[0].personaje),i.a.createElement("p",{className:"msj"},A.linchado[0].name),i.a.createElement("img",{width:"220px",src:A.linchado[0].imagen,alt:"Italian Trulli"})):0===A.turnoGeneral&&i.a.createElement("p",{className:"msj"},"Es de noche y todos dormimos")),i.a.createElement("div",{className:"footer"},4===A.turnoGeneral?i.a.createElement("p",{className:"msj"},"Es de d\xeca"):5===A.turnoGeneral?i.a.createElement("p",{className:"msj"},"Es momento de decidir quien es el lobo"):A.turnoGeneral===A.userInfo.turno?i.a.createElement("p",{className:"msj"},A.isActionDidit?"Gracias por seleccionar":"Es tu turno, no peritas que los demas descubran quiene eres"):6===A.turnoGeneral?i.a.createElement("p",{className:"msj"},"Es de d\xeca"):0===A.turnoGeneral&&i.a.createElement("p",{className:"msj"},"Debes dormir")),i.a.createElement("img",{width:"30px",src:"./imgs/chat.png",className:"flotante"}),i.a.createElement(n.b,{to:"/Chat",className:"flotante"}))}}]),a}(o.Component)),R=Object(h.a)(H),J=(t(55),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(d.a)(this,Object(m.a)(a).call(this,e))).state={msj:""},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"page Chat"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"btnContainer"},i.a.createElement(n.b,{to:"/Juego",className:"go"}," ","<"," ")),i.a.createElement("h3",{className:"titulo"},"Chat")),i.a.createElement("p",null,"Discute con los dem\xe1s y ponte de acuerdo en las acciones a realizar"),i.a.createElement("div",{className:"mensajes"},A.mensajes&&A.mensajes.map(function(e,a){return e.split(":")[0]===A.userInfo.name?i.a.createElement("p",{className:"mensaje2",key:a},e.split(":")[1]):i.a.createElement("p",{className:"mensaje",key:a},e)})),i.a.createElement("div",{className:"container2"},i.a.createElement("input",{className:"input",type:"text",value:this.state.msj,onChange:function(a){e.setState({msj:a.target.value})}}),i.a.createElement("div",{className:"btn",onClick:function(a){S.NuevoMsj(A.userInfo.username+": "+e.state.msj),e.setState({msj:""})}},"Enviar")))}}]),a}(o.Component)),B=Object(h.a)(J),P=(t(56),function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"page Win"},i.a.createElement("h1",null,"Ha ganado esta partida los"),i.a.createElement("h3",null,"LOBOS"))}}]),a}(o.Component)),z=Object(h.a)(P),K=i.a.createElement(n.a,{basename:"/Lobos-de-CastroNegro"},i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:"/",component:p}),i.a.createElement(s.a,{path:"/SingIn",component:x}),i.a.createElement(s.a,{path:"/SingUp",component:q}),i.a.createElement(s.a,{path:"/Waiting",component:L}),i.a.createElement(s.a,{path:"/ShowCharacter",component:G}),i.a.createElement(s.a,{path:"/Juego",component:R}),i.a.createElement(s.a,{path:"/Chat",component:B}),i.a.createElement(s.a,{path:"/Win/:who",component:z})));r.a.render(K,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.88825afb.chunk.js.map