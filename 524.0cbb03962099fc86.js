"use strict";(self.webpackChunkappDvnet=self.webpackChunkappDvnet||[]).push([[524],{7524:(Q,u,l)=>{l.r(u),l.d(u,{AuthenticationModule:()=>Y});var g=l(9808),o=l(3075),t=l(5e3),p=l(6696),d=l(9250),m=l(7669),h=l(2340),f=l(520);let _=(()=>{class n{constructor(e){this.http=e,this.url=h.N.WS_URL}registerPartner(e){return this.http.post(`${this.url}/partner`,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(f.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function b(n,i){1&n&&(t.TgZ(0,"strong"),t._uU(1,"Error!"),t.qZA())}const v=function(n,i){return{"alert-danger":n,"alert-success":i}};function C(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",14),t.YNc(1,b,2,0,"strong",15),t._uU(2),t.TgZ(3,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeAlert()}),t.TgZ(4,"span",17),t._uU(5,"\xd7"),t.qZA()()()}if(2&n){const e=t.oxw();t.Q6J("ngClass",t.WLB(3,v,e.error,!e.error)),t.xp6(1),t.Q6J("ngIf",e.error),t.xp6(1),t.hij(" ",e.alerta," ")}}function x(n,i){1&n&&(t.TgZ(0,"small",18),t._uU(1," Ingrese una cedula v\xe1lida "),t.qZA())}function w(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",19),t._UZ(1,"input",20),t.TgZ(2,"div",21)(3,"span",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().viewPass()}),t._UZ(4,"i",23),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("type",e.changeType?"password":"text"),t.xp6(3),t.Q6J("ngClass",e.visible?"bi bi-eye-fill":"bi bi-eye-slash-fill")}}function y(n,i){1&n&&(t.TgZ(0,"small",18),t._uU(1," Ingrese una contrase\xf1a mayor a 8 caracteres "),t.qZA())}function T(n,i){1&n&&(t.TgZ(0,"div",19),t._UZ(1,"input",24),t.qZA())}function Z(n,i){1&n&&(t.TgZ(0,"small",18),t._uU(1," Las contrase\xf1as deben coincidir "),t.qZA())}function k(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().check("identification")}),t._uU(1,"Verificar"),t.qZA()}}function P(n,i){1&n&&(t.TgZ(0,"button",26),t._uU(1,"Registrar"),t.qZA())}let M=(()=>{class n{constructor(e,r,s,a,c){this.formBuilder=e,this.router=r,this.login=s,this.services=a,this.partners=c,this.registerForm=this.formBuilder.group({identification:["",[o.kI.required,o.kI.minLength(10),o.kI.maxLength(15)]],password:["",[o.kI.required,o.kI.minLength(8)]],repeatpassword:["",[o.kI.required,o.kI.minLength(8)]]},{validator:this.MatchConfirom("password","repeatpassword")}),this.error=!1,this.alerta="",this.changeType=!0,this.visible=!0,this.client=!1,this.show=!1}ngOnInit(){}register(){if(this.registerForm.markAllAsTouched(),!this.registerForm.valid)return;let e={identification:this.registerForm.value.identification,password:this.registerForm.value.password};this.check("identification"),this.client&&this.partners.registerPartner(e).subscribe(r=>{this.showMsg("Usuario resgistrado con exito"),this.registerForm.reset(),this.client=!1},r=>{this.errorMsg(r.error.message)})}check(e){this.error=!1,this.registerForm.controls[e].markAsTouched(),!this.registerForm.controls[e].errors&&this.login.verifyId(this.registerForm.value.identification).subscribe(r=>{r?this.client=!0:(this.client=!1,this.errorMsg())})}back(){this.router.navigateByUrl("/auth/login")}validarCampos(e){return this.registerForm.controls[e].errors&&this.registerForm.controls[e].touched}MatchConfirom(e,r){return s=>{let c=s.controls[r];return c.setErrors(s.controls[e].value===c.value?null:{notEquivalent:!0})}}viewPass(){this.visible=!this.visible,this.changeType=!this.changeType}showMsg(e){this.show=!0,this.alerta=e}errorMsg(e){this.error=!0,this.show=!0,this.alerta=e||"No existe un cliente con esa identificaci\xf3n"}closeAlert(){this.error=!1,this.show=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.qu),t.Y36(p.F0),t.Y36(d.r),t.Y36(m.r),t.Y36(_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-register"]],decls:24,vars:9,consts:[[1,"register"],[1,"child-register"],["src","../../../assets/login/logo.png","alt","Card image cap"],[1,"formlogin",3,"formGroup","ngSubmit"],[1,"mb-3"],["class","alert alert-danger alert-dismissible fade show","role","alert",3,"ngClass",4,"ngIf"],[1,"row"],["type","text","id","identification","placeholder","C\xe9dula o RUC","formControlName","identification",1,"form-control"],["class","error",4,"ngIf"],["class","input-group mb-1",4,"ngIf"],[1,"buttons","text-center"],["type","button",1,"button-back",3,"click"],["type","button","class","button-login",3,"click",4,"ngIf"],["type","submit","class","button-login",4,"ngIf"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show",3,"ngClass"],[4,"ngIf"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"error"],[1,"input-group","mb-1"],["id","password","placeholder","Contrase\xf1a","formControlName","password",1,"form-control",3,"type"],[1,"input-group-append"],[1,"input-group-text","eyeicon",3,"click"],[3,"ngClass"],["type","password","id","repeatpassword","placeholder","Repita su contrase\xf1a","formControlName","repeatpassword",1,"form-control"],["type","button",1,"button-login",3,"click"],["type","submit",1,"button-login"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",1)(4,"form",3),t.NdJ("ngSubmit",function(){return r.register()}),t.TgZ(5,"h1",4),t._uU(6,"Registrate"),t.qZA(),t.TgZ(7,"h3",4),t._uU(8,"Ingrese su n\xfamero de identificaci\xf3n"),t.qZA(),t.YNc(9,C,6,6,"div",5),t.TgZ(10,"div",6)(11,"div",4),t._UZ(12,"input",7),t.YNc(13,x,2,0,"small",8),t.qZA(),t.TgZ(14,"div",4),t.YNc(15,w,5,2,"div",9),t.YNc(16,y,2,0,"small",8),t.qZA(),t.YNc(17,T,2,0,"div",9),t.YNc(18,Z,2,0,"small",8),t.qZA(),t.TgZ(19,"div",10)(20,"button",11),t.NdJ("click",function(){return r.back()}),t._uU(21,"Volver"),t.qZA(),t.YNc(22,k,2,0,"button",12),t.YNc(23,P,2,0,"button",13),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",r.registerForm),t.xp6(5),t.Q6J("ngIf",r.show),t.xp6(4),t.Q6J("ngIf",r.validarCampos("identification")),t.xp6(2),t.Q6J("ngIf",r.client),t.xp6(1),t.Q6J("ngIf",r.validarCampos("password")),t.xp6(1),t.Q6J("ngIf",r.client),t.xp6(1),t.Q6J("ngIf",r.validarCampos("repeatpassword")),t.xp6(4),t.Q6J("ngIf",!r.client),t.xp6(1),t.Q6J("ngIf",r.client))},directives:[o._Y,o.JL,o.sg,g.O5,g.mk,o.Fj,o.JJ,o.u],styles:[".register[_ngcontent-%COMP%]{height:100vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;width:100%}.child-register[_ngcontent-%COMP%]{display:grid;justify-content:center;align-content:center}.formlogin[_ngcontent-%COMP%]{padding:2rem 3rem;border-radius:2.5rem;background-color:#3eb2e0;color:#151b94;width:100%;margin-left:0;margin-right:0}@media (max-width: 480px){img[_ngcontent-%COMP%]{height:25vh}.register[_ngcontent-%COMP%]{grid-template-columns:none}}@media (min-width: 1025px){img[_ngcontent-%COMP%]{height:35vh}.formlogin[_ngcontent-%COMP%]{width:70ch}}@media (min-width: 481px) and (max-width: 1024px){img[_ngcontent-%COMP%]{height:30vh}}.button-login[_ngcontent-%COMP%]{background-color:#53087d;border-radius:35px;border:1px solid #4868B5;display:inline-block;cursor:pointer;color:#fff;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #4868B5;min-width:150px;margin:5px}.button-login[_ngcontent-%COMP%]:hover{background-color:#4868b5}.button-login[_ngcontent-%COMP%]:active{position:relative;top:1px}.button-back[_ngcontent-%COMP%]{background-color:#d9fcff;border-radius:35px;border:1px solid #7ea4a7;display:inline-block;cursor:pointer;color:#000;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #7ea4a7}.button-back[_ngcontent-%COMP%]:hover{background-color:#7ea4a7}.button-back[_ngcontent-%COMP%]:active{position:relative;top:1px}.eyeicon[_ngcontent-%COMP%]{background-color:#fff;border:none}.form-control[_ngcontent-%COMP%]{box-shadow:none;border:none}"]}),n})(),A=(()=>{class n{canDeactivate(e,r,s,a){return!!e.getHasChange()||confirm("\xbfDesea abandonar esta p\xe1gina sin guardar los cambios?")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function F(n,i){1&n&&(t.TgZ(0,"small",14),t._uU(1," Ingrese una contrase\xf1a, minimo 6 caracteres "),t.qZA())}function I(n,i){1&n&&(t.TgZ(0,"small",14),t._uU(1," Las contrase\xf1as no coinciden "),t.qZA())}let J=(()=>{class n{constructor(e,r){this.formBuilder=e,this.service=r,this.visible=!0,this.changeType=!0,this.identification="",this.passwords={},this.passForm=this.formBuilder.group({password1:["",[o.kI.required,o.kI.minLength(6),o.kI.maxLength(20)]],password2:["",[o.kI.required,o.kI.minLength(6),o.kI.maxLength(20)]]})}ngOnInit(){this.service.verifyToken().subscribe(e=>{this.identification=e.identification})}changePass(){if(this.passForm.markAllAsTouched(),!this.passForm.valid)return;let e=this.passForm.value.password1,r=this.passForm.value.password2;e===r&&(this.passwords={user:e,pass:r},this.hasChange=!1,console.log("pass changed"),console.log(this.identification))}checkMatchValidator(e,r){return function(s){let a=s.get(e).value,c=s.get(r).value;return""!==a&&a!==c?{notMatch:`value ${a} is not equal to ${r}`}:null}}validateMatch(e,r){return this.passForm.controls[e].value!=this.passForm.controls[r].value}validatePass(e){return this.passForm.controls[e].errors&&this.passForm.controls[e].touched}viewPass(){this.visible=!this.visible,this.changeType=!this.changeType}getHasChange(){return!this.hasChange}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.qu),t.Y36(m.r))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-change-pass"]],decls:19,vars:5,consts:[[1,"set"],[1,"form"],[1,"row"],[1,"text-center"],["id","passwordForm",1,"formlogin",3,"formGroup","ngSubmit"],[1,"input-group"],["formControlName","password1","placeholder","New Password","autocomplete","off",1,"form-control","pwd1",3,"type","change"],[1,"input-group-append"],[1,"input-group-text","eyeicon",3,"click"],[3,"ngClass"],["class","error",4,"ngIf"],["type","password","formControlName","password2","placeholder","Repeat Password","autocomplete","off",1,"form-control","pwd2","mt-3"],[1,"text-center","mt-3"],["type","submit",1,"btn","btn-primary"],[1,"error"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2"),t._uU(3,"Cambiar contrase\xf1a"),t.qZA(),t.TgZ(4,"div",2)(5,"p",3),t._uU(6,"Utilice el siguiente formulario para cambiar su contrase\xf1a."),t.qZA(),t.TgZ(7,"form",4),t.NdJ("ngSubmit",function(){return r.changePass()}),t.TgZ(8,"div",5)(9,"input",6),t.NdJ("change",function(){return r.hasChange=!0}),t.qZA(),t.TgZ(10,"div",7)(11,"span",8),t.NdJ("click",function(){return r.viewPass()}),t._UZ(12,"i",9),t.qZA()()(),t.YNc(13,F,2,0,"small",10),t._UZ(14,"input",11),t.YNc(15,I,2,0,"small",10),t.TgZ(16,"div",12)(17,"button",13),t._uU(18,"Cambiar"),t.qZA()()()()()()),2&e&&(t.xp6(7),t.Q6J("formGroup",r.passForm),t.xp6(2),t.Q6J("type",r.changeType?"password":"text"),t.xp6(3),t.Q6J("ngClass",r.visible?"bi bi-eye-fill":"bi bi-eye-slash-fill"),t.xp6(1),t.Q6J("ngIf",r.validatePass("password1")),t.xp6(2),t.Q6J("ngIf",r.validateMatch("password1","password2")))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,g.mk,g.O5],styles:[".form[_ngcontent-%COMP%]{text-align:center;min-width:200px;max-width:40%;padding:1rem 2rem;border-radius:2.5rem;background-color:#fff;color:#000;margin-top:5%;margin-left:auto;margin-right:auto;background:#3EB2E0}.pwd1[_ngcontent-%COMP%]{box-shadow:none;border-color:gray;border-right:none}.pwd2[_ngcontent-%COMP%]{box-shadow:none;border-color:gray}.eyeicon[_ngcontent-%COMP%]{background-color:#fff;border-color:gray}.example[_ngcontent-%COMP%]{width:100%}  .mat-focused .mat-form-field-label{color:green!important}  .mat-form-field-underline{background-color:green!important}  .mat-form-field-ripple{background-color:#fff!important}  .mat-form-field-empty.mat-form-field-label{color:#6e6e6e}  .mat-form-field-wrapper{margin-bottom:-1.25em}  .mat-form-field-appearance-outline .mat-form-field-outline{color:red!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:red!important}"]}),n})();var U=l(4863);function O(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",18)(1,"strong"),t._uU(2,"Error!"),t.qZA(),t._uU(3),t.TgZ(4,"button",19),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeAlert()}),t.TgZ(5,"span",20),t._uU(6,"\xd7"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(3),t.hij(" ",e.alerta," ")}}function q(n,i){1&n&&(t.TgZ(0,"small",21),t._uU(1," Ingrese una cedula v\xe1lida "),t.qZA())}function N(n,i){1&n&&(t.TgZ(0,"small",21),t._uU(1," Ingrese su contrase\xf1a "),t.qZA())}const L=[{path:"login",component:(()=>{class n{constructor(e,r,s,a){this.formBuilder=e,this.router=r,this.loginserv=s,this.storage=a,this.identification="",this.password="",this.loginForm=this.formBuilder.group({identification:["",[o.kI.required,o.kI.minLength(10),o.kI.maxLength(14)]],password:["",[o.kI.required,o.kI.minLength(5),o.kI.maxLength(30)]]}),this.user={},this.error=!1,this.alerta="",this.visible=!0,this.changeType=!0}ngOnInit(){}autenticar(){this.loginForm.markAllAsTouched(),this.loginForm.valid&&(this.user={identification:this.loginForm.value.identification,password:this.loginForm.value.password},this.loginserv.login(this.user).subscribe(e=>{e?(this.storage.saveData("token",e.toString()),this.router.navigateByUrl("/home")):this.errorMsg("")},e=>{this.errorMsg(e.error.message)}))}register(){this.router.navigateByUrl("/auth/register")}viewPass(){this.visible=!this.visible,this.changeType=!this.changeType}errorMsg(e){this.error=!0,this.alerta=e}validarCampos(e){return this.loginForm.controls[e].errors&&this.loginForm.controls[e].touched}closeAlert(){this.error=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.qu),t.Y36(p.F0),t.Y36(d.r),t.Y36(U.U))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:24,vars:6,consts:[[1,"login"],[1,"child-login"],["src","../../../assets/login/logo.png","alt","Card image cap"],[1,"formlogin",3,"formGroup","ngSubmit"],[1,"mb-3"],["class","alert alert-danger alert-dismissible fade show","role","alert",4,"ngIf"],[1,"row","mb-3"],[1,"mb-4"],["type","text","id","identification","placeholder","C\xe9dula o RUC","formControlName","identification",1,"form-control"],["class","error",4,"ngIf"],[1,"input-group"],["id","password","placeholder","Contrase\xf1a","formControlName","password",1,"form-control",3,"type"],[1,"input-group-append"],[1,"input-group-text","eyeicon",3,"click"],[3,"ngClass"],[1,"buttons","text-center"],["type","button",1,"button-register",3,"click"],["type","submit",1,"button-login"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"error"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",1)(4,"form",3),t.NdJ("ngSubmit",function(){return r.autenticar()}),t.TgZ(5,"h1",4),t._uU(6,"Iniciar sesi\xf3n"),t.qZA(),t.YNc(7,O,7,1,"div",5),t.TgZ(8,"div",6)(9,"div",7),t._UZ(10,"input",8),t.YNc(11,q,2,0,"small",9),t.qZA(),t.TgZ(12,"div",4)(13,"div",10),t._UZ(14,"input",11),t.TgZ(15,"div",12)(16,"span",13),t.NdJ("click",function(){return r.viewPass()}),t._UZ(17,"i",14),t.qZA()()(),t.YNc(18,N,2,0,"small",9),t.qZA()(),t.TgZ(19,"div",15)(20,"button",16),t.NdJ("click",function(){return r.register()}),t._uU(21,"Registrate"),t.qZA(),t.TgZ(22,"button",17),t._uU(23,"Ingresar"),t.qZA()()()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",r.loginForm),t.xp6(3),t.Q6J("ngIf",r.error),t.xp6(4),t.Q6J("ngIf",r.validarCampos("identification")),t.xp6(3),t.Q6J("type",r.changeType?"password":"text"),t.xp6(3),t.Q6J("ngClass",r.visible?"bi bi-eye-fill":"bi bi-eye-slash-fill"),t.xp6(1),t.Q6J("ngIf",r.validarCampos("password")))},directives:[o._Y,o.JL,o.sg,g.O5,o.Fj,o.JJ,o.u,g.mk],styles:[".login[_ngcontent-%COMP%]{height:100vh;display:grid;grid-template-columns:1fr 1fr;align-items:center}.child-login[_ngcontent-%COMP%]{display:grid;justify-content:center;align-content:center}.formlogin[_ngcontent-%COMP%]{padding:2rem 3rem;border-radius:2.5rem;background-color:#3eb2e0;width:100%;color:#151b94;margin-left:0;margin-right:0}@media (max-width: 480px){img[_ngcontent-%COMP%]{height:25vh}.login[_ngcontent-%COMP%]{grid-template-columns:none}}@media (min-width: 1025px){img[_ngcontent-%COMP%]{height:35vh}.formlogin[_ngcontent-%COMP%]{width:70ch}}@media (min-width: 481px) and (max-width: 1024px){img[_ngcontent-%COMP%]{height:30vh}}.button-login[_ngcontent-%COMP%]{background-color:#53087d;border-radius:35px;border:1px solid #4868B5;display:inline-block;cursor:pointer;color:#fff;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #4868B5;min-width:150px;margin:5px}.button-login[_ngcontent-%COMP%]:hover{background-color:#4868b5}.button-login[_ngcontent-%COMP%]:active{position:relative;top:1px}.button-register[_ngcontent-%COMP%]{background-color:#008b9f;border-radius:35px;border:1px solid #559099;display:inline-block;cursor:pointer;color:#fff;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #559099;min-width:150px;margin:5px}.button-register[_ngcontent-%COMP%]:hover{background-color:#559099}.button-register[_ngcontent-%COMP%]:active{position:relative;top:1px}.eyeicon[_ngcontent-%COMP%]{background-color:#fff;border:none}.form-control[_ngcontent-%COMP%]{box-shadow:none;border:none}"]}),n})()},{path:"password",component:J,canDeactivate:[A]},{path:"register",component:M},{path:"",redirectTo:"login"}];let R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild(L)],p.Bz]}),n})(),Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,R]]}),n})()}}]);