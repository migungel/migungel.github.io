"use strict";(self.webpackChunkappDvnet=self.webpackChunkappDvnet||[]).push([[524],{7524:(Q,g,l)=>{l.r(g),l.d(g,{AuthenticationModule:()=>Y});var u=l(9808),n=l(3075),t=l(5e3),p=l(6696),d=l(9250),m=l(7669),f=l(2340),h=l(520);let _=(()=>{class r{constructor(e){this.http=e,this.url=f.N.WS_URL}registerPartner(e){return this.http.post(`${this.url}/partner`,e)}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(h.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function b(r,i){1&r&&(t.TgZ(0,"strong"),t._uU(1,"Error!"),t.qZA())}const v=function(r,i){return{"alert-danger":r,"alert-success":i}};function C(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"div",14),t.YNc(1,b,2,0,"strong",15),t._uU(2),t.TgZ(3,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeAlert()}),t.TgZ(4,"span",17),t._uU(5,"\xd7"),t.qZA()()()}if(2&r){const e=t.oxw();t.Q6J("ngClass",t.WLB(3,v,e.error,!e.error)),t.xp6(1),t.Q6J("ngIf",e.error),t.xp6(1),t.hij(" ",e.alerta," ")}}function x(r,i){1&r&&(t.TgZ(0,"small",18),t._uU(1," Ingrese una cedula v\xe1lida "),t.qZA())}function w(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"div",19),t._UZ(1,"input",20),t.TgZ(2,"div",21)(3,"span",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().viewPass()}),t._UZ(4,"i",23),t.qZA()()()}if(2&r){const e=t.oxw();t.xp6(1),t.Q6J("type",e.changeType?"password":"text"),t.xp6(3),t.Q6J("ngClass",e.visible?"bi bi-eye-fill":"bi bi-eye-slash-fill")}}function y(r,i){1&r&&(t.TgZ(0,"small",18),t._uU(1," Ingrese una contrase\xf1a mayor a 8 caracteres "),t.qZA())}function T(r,i){1&r&&(t.TgZ(0,"div",19),t._UZ(1,"input",24),t.qZA())}function Z(r,i){1&r&&(t.TgZ(0,"small",18),t._uU(1," Las contrase\xf1as deben coincidir "),t.qZA())}function k(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().check("identification")}),t._uU(1,"Verificar"),t.qZA()}}function A(r,i){1&r&&(t.TgZ(0,"button",26),t._uU(1,"Registrar"),t.qZA())}let F=(()=>{class r{constructor(e,o,s,a,c){this.formBuilder=e,this.router=o,this.login=s,this.services=a,this.partners=c,this.registerForm=this.formBuilder.group({identification:["",[n.kI.required,n.kI.minLength(10),n.kI.maxLength(15)]],password:["",[n.kI.required,n.kI.minLength(8)]],repeatpassword:["",[n.kI.required,n.kI.minLength(8)]]},{validator:this.MatchConfirom("password","repeatpassword")}),this.error=!1,this.alerta="",this.changeType=!0,this.visible=!0,this.client=!1,this.show=!1}ngOnInit(){}register(){if(this.registerForm.markAllAsTouched(),!this.registerForm.valid)return;let e={identification:this.registerForm.value.identification,password:this.registerForm.value.password};this.check("identification"),this.client&&this.partners.registerPartner(e).subscribe(o=>{this.showMsg("Usuario resgistrado con exito"),this.registerForm.reset(),this.client=!1},o=>{this.errorMsg(o.error.message)})}check(e){this.error=!1,this.registerForm.controls[e].markAsTouched(),!this.registerForm.controls[e].errors&&this.login.verifyId(this.registerForm.value.identification).subscribe(o=>{o?this.client=!0:(this.client=!1,this.errorMsg())})}back(){this.router.navigateByUrl("/auth/login")}validarCampos(e){return this.registerForm.controls[e].errors&&this.registerForm.controls[e].touched}MatchConfirom(e,o){return s=>{let c=s.controls[o];return c.setErrors(s.controls[e].value===c.value?null:{notEquivalent:!0})}}viewPass(){this.visible=!this.visible,this.changeType=!this.changeType}showMsg(e){this.show=!0,this.alerta=e}errorMsg(e){this.error=!0,this.show=!0,this.alerta=e||"No existe un cliente con esa identificaci\xf3n"}closeAlert(){this.error=!1,this.show=!1}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(n.qu),t.Y36(p.F0),t.Y36(d.r),t.Y36(m.r),t.Y36(_))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-register"]],decls:24,vars:9,consts:[[1,"register"],[1,"child-register"],["src","../../../assets/login/logo.png","alt","Card image cap"],[1,"formlogin",3,"formGroup","ngSubmit"],[1,"mb-3"],["class","alert alert-danger alert-dismissible fade show","role","alert",3,"ngClass",4,"ngIf"],[1,"row"],["type","text","id","identification","placeholder","C\xe9dula o RUC","formControlName","identification",1,"form-control"],["class","error",4,"ngIf"],["class","input-group mb-1",4,"ngIf"],[1,"text-center","mt-3"],["type","button",1,"button-back","mr-3",3,"click"],["type","button","class","button-login mr-3",3,"click",4,"ngIf"],["type","submit","class","button-login",4,"ngIf"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show",3,"ngClass"],[4,"ngIf"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"error"],[1,"input-group","mb-1"],["id","password","placeholder","Contrase\xf1a","formControlName","password",1,"form-control",3,"type"],[1,"input-group-append"],[1,"input-group-text","eyeicon",3,"click"],[3,"ngClass"],["type","password","id","repeatpassword","placeholder","Repita su contrase\xf1a","formControlName","repeatpassword",1,"form-control"],["type","button",1,"button-login","mr-3",3,"click"],["type","submit",1,"button-login"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",1)(4,"form",3),t.NdJ("ngSubmit",function(){return o.register()}),t.TgZ(5,"h1",4),t._uU(6,"Registrate"),t.qZA(),t.TgZ(7,"h3",4),t._uU(8,"Ingrese su n\xfamero de identificaci\xf3n"),t.qZA(),t.YNc(9,C,6,6,"div",5),t.TgZ(10,"div",6)(11,"div",4),t._UZ(12,"input",7),t.YNc(13,x,2,0,"small",8),t.qZA(),t.TgZ(14,"div",4),t.YNc(15,w,5,2,"div",9),t.YNc(16,y,2,0,"small",8),t.qZA(),t.YNc(17,T,2,0,"div",9),t.YNc(18,Z,2,0,"small",8),t.qZA(),t.TgZ(19,"div",10)(20,"button",11),t.NdJ("click",function(){return o.back()}),t._uU(21,"Volver"),t.qZA(),t.YNc(22,k,2,0,"button",12),t.YNc(23,A,2,0,"button",13),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",o.registerForm),t.xp6(5),t.Q6J("ngIf",o.show),t.xp6(4),t.Q6J("ngIf",o.validarCampos("identification")),t.xp6(2),t.Q6J("ngIf",o.client),t.xp6(1),t.Q6J("ngIf",o.validarCampos("password")),t.xp6(1),t.Q6J("ngIf",o.client),t.xp6(1),t.Q6J("ngIf",o.validarCampos("repeatpassword")),t.xp6(4),t.Q6J("ngIf",!o.client),t.xp6(1),t.Q6J("ngIf",o.client))},directives:[n._Y,n.JL,n.sg,u.O5,u.mk,n.Fj,n.JJ,n.u],styles:[".register[_ngcontent-%COMP%]{height:100vh;display:grid;grid-template-columns:auto auto;align-items:center}.child-register[_ngcontent-%COMP%]{display:grid;justify-content:center;align-content:center;width:100%}img[_ngcontent-%COMP%]{width:500px}.formlogin[_ngcontent-%COMP%]{background:rgba(255,255,255,.15);padding:2rem 3rem;border-radius:2.5rem;background-color:#9ad3ff;color:#000;right:0;left:0;width:600px}.button-login[_ngcontent-%COMP%]{background-color:#00ddec;border-radius:35px;border:1px solid #00a4af;display:inline-block;cursor:pointer;color:#000;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #00a4af}.button-login[_ngcontent-%COMP%]:hover{background-color:#00a4af}.button-login[_ngcontent-%COMP%]:active{position:relative;top:1px}.button-back[_ngcontent-%COMP%]{background-color:#d9fcff;border-radius:35px;border:1px solid #7ea4a7;display:inline-block;cursor:pointer;color:#000;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #7ea4a7}.button-back[_ngcontent-%COMP%]:hover{background-color:#7ea4a7}.button-back[_ngcontent-%COMP%]:active{position:relative;top:1px}.eyeicon[_ngcontent-%COMP%]{background-color:#fff;border:none}.form-control[_ngcontent-%COMP%]{box-shadow:none;border:none}"]}),r})(),I=(()=>{class r{canDeactivate(e,o,s,a){return!!e.getHasChange()||confirm("\xbfDesea abandonar esta p\xe1gina sin guardar los cambios?")}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function P(r,i){1&r&&(t.TgZ(0,"small",14),t._uU(1," Ingrese una contrase\xf1a, minimo 6 caracteres "),t.qZA())}function M(r,i){1&r&&(t.TgZ(0,"small",14),t._uU(1," Las contrase\xf1as no coinciden "),t.qZA())}let J=(()=>{class r{constructor(e){this.formBuilder=e,this.visible=!0,this.changeType=!0,this.passwords={},this.passForm=this.formBuilder.group({password1:["",[n.kI.required,n.kI.minLength(6),n.kI.maxLength(20)]],password2:["",[n.kI.required,n.kI.minLength(6),n.kI.maxLength(20)]]})}ngOnInit(){}changePass(){if(this.passForm.markAllAsTouched(),!this.passForm.valid)return;let e=this.passForm.value.password1,o=this.passForm.value.password2;e===o&&(this.passwords={user:e,pass:o},this.hasChange=!1,console.log("pass changed"))}checkMatchValidator(e,o){return function(s){let a=s.get(e).value,c=s.get(o).value;return""!==a&&a!==c?{notMatch:`value ${a} is not equal to ${o}`}:null}}validateMatch(e,o){return this.passForm.controls[e].value!=this.passForm.controls[o].value}validatePass(e){return this.passForm.controls[e].errors&&this.passForm.controls[e].touched}viewPass(){this.visible=!this.visible,this.changeType=!this.changeType}getHasChange(){return!this.hasChange}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(n.qu))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-change-pass"]],decls:19,vars:5,consts:[[1,"set"],[1,"container"],[1,"row"],[1,"text-center"],["id","passwordForm",1,"formlogin",3,"formGroup","ngSubmit"],[1,"input-group"],["formControlName","password1","placeholder","New Password","autocomplete","off",1,"form-control","pwd1",3,"type","change"],[1,"input-group-append"],[1,"input-group-text","eyeicon",3,"click"],[3,"ngClass"],["class","error",4,"ngIf"],["type","password","formControlName","password2","placeholder","Repeat Password","autocomplete","off",1,"form-control","pwd2","mt-3"],[1,"text-center","mt-3"],["type","submit",1,"btn","btn-primary"],[1,"error"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2"),t._uU(3,"Cambiar contrase\xf1a"),t.qZA(),t.TgZ(4,"div",2)(5,"p",3),t._uU(6,"Utilice el siguiente formulario para cambiar su contrase\xf1a."),t.qZA(),t.TgZ(7,"form",4),t.NdJ("ngSubmit",function(){return o.changePass()}),t.TgZ(8,"div",5)(9,"input",6),t.NdJ("change",function(){return o.hasChange=!0}),t.qZA(),t.TgZ(10,"div",7)(11,"span",8),t.NdJ("click",function(){return o.viewPass()}),t._UZ(12,"i",9),t.qZA()()(),t.YNc(13,P,2,0,"small",10),t._UZ(14,"input",11),t.YNc(15,M,2,0,"small",10),t.TgZ(16,"div",12)(17,"button",13),t._uU(18,"Cambiar"),t.qZA()()()()()()),2&e&&(t.xp6(7),t.Q6J("formGroup",o.passForm),t.xp6(2),t.Q6J("type",o.changeType?"password":"text"),t.xp6(3),t.Q6J("ngClass",o.visible?"bi bi-eye-fill":"bi bi-eye-slash-fill"),t.xp6(1),t.Q6J("ngIf",o.validatePass("password1")),t.xp6(2),t.Q6J("ngIf",o.validateMatch("password1","password2")))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,u.mk,u.O5],styles:[".set[_ngcontent-%COMP%]{background-color:#effff1!important;display:block;height:80%}.container[_ngcontent-%COMP%]{text-align:center;min-width:300px;max-width:40%;padding:2rem 3rem;border-radius:2.5rem;background-color:#fff;color:#000;position:absolute;top:30%;right:0;left:0}.pwd1[_ngcontent-%COMP%]{box-shadow:none;border-color:gray;border-right:none}.pwd2[_ngcontent-%COMP%]{box-shadow:none;border-color:gray}.eyeicon[_ngcontent-%COMP%]{background-color:#fff;border-color:gray}.example[_ngcontent-%COMP%]{width:100%}  .mat-focused .mat-form-field-label{color:green!important}  .mat-form-field-underline{background-color:green!important}  .mat-form-field-ripple{background-color:#fff!important}  .mat-form-field-empty.mat-form-field-label{color:#6e6e6e}  .mat-form-field-wrapper{margin-bottom:-1.25em}  .mat-form-field-appearance-outline .mat-form-field-outline{color:red!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:red!important}"]}),r})();var U=l(4863);function q(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"div",18)(1,"strong"),t._uU(2,"Error!"),t.qZA(),t._uU(3),t.TgZ(4,"button",19),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeAlert()}),t.TgZ(5,"span",20),t._uU(6,"\xd7"),t.qZA()()()}if(2&r){const e=t.oxw();t.xp6(3),t.hij(" ",e.alerta," ")}}function N(r,i){1&r&&(t.TgZ(0,"small",21),t._uU(1," Ingrese una cedula v\xe1lida "),t.qZA())}function O(r,i){1&r&&(t.TgZ(0,"small",21),t._uU(1," Ingrese su contrase\xf1a "),t.qZA())}const L=[{path:"login",component:(()=>{class r{constructor(e,o,s,a){this.formBuilder=e,this.router=o,this.loginserv=s,this.storage=a,this.identification="",this.password="",this.loginForm=this.formBuilder.group({identification:["",[n.kI.required,n.kI.minLength(10),n.kI.maxLength(14)]],password:["",[n.kI.required,n.kI.minLength(5),n.kI.maxLength(30)]]}),this.user={},this.error=!1,this.alerta="",this.visible=!0,this.changeType=!0}ngOnInit(){}autenticar(){this.loginForm.markAllAsTouched(),this.loginForm.valid&&(this.user={identification:this.loginForm.value.identification,password:this.loginForm.value.password},this.loginserv.login(this.user).subscribe(e=>{e?(this.storage.saveData("token",e.toString()),this.router.navigateByUrl("/home")):this.errorMsg("")},e=>{this.errorMsg(e.error.message)}))}register(){this.router.navigateByUrl("/auth/register")}viewPass(){this.visible=!this.visible,this.changeType=!this.changeType}errorMsg(e){this.error=!0,this.alerta=e}validarCampos(e){return this.loginForm.controls[e].errors&&this.loginForm.controls[e].touched}closeAlert(){this.error=!1}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(n.qu),t.Y36(p.F0),t.Y36(d.r),t.Y36(U.U))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-login"]],decls:24,vars:6,consts:[[1,"login"],[1,"child-login"],["src","../../../assets/login/logo.png","alt","Card image cap"],[1,"formlogin",3,"formGroup","ngSubmit"],[1,"mb-3"],["class","alert alert-danger alert-dismissible fade show","role","alert",4,"ngIf"],[1,"row","mb-3"],[1,"mb-4"],["type","text","id","identification","placeholder","C\xe9dula o RUC","formControlName","identification",1,"form-control"],["class","error",4,"ngIf"],[1,"input-group"],["id","password","placeholder","Contrase\xf1a","formControlName","password",1,"form-control",3,"type"],[1,"input-group-append"],[1,"input-group-text","eyeicon",3,"click"],[3,"ngClass"],[1,"text-center","mt-3"],["type","button",1,"button-register","mr-3",3,"click"],["type","submit",1,"button-login"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"error"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",1)(4,"form",3),t.NdJ("ngSubmit",function(){return o.autenticar()}),t.TgZ(5,"h1",4),t._uU(6,"Iniciar sesi\xf3n"),t.qZA(),t.YNc(7,q,7,1,"div",5),t.TgZ(8,"div",6)(9,"div",7),t._UZ(10,"input",8),t.YNc(11,N,2,0,"small",9),t.qZA(),t.TgZ(12,"div",4)(13,"div",10),t._UZ(14,"input",11),t.TgZ(15,"div",12)(16,"span",13),t.NdJ("click",function(){return o.viewPass()}),t._UZ(17,"i",14),t.qZA()()(),t.YNc(18,O,2,0,"small",9),t.qZA()(),t.TgZ(19,"div",15)(20,"button",16),t.NdJ("click",function(){return o.register()}),t._uU(21,"Registrate"),t.qZA(),t.TgZ(22,"button",17),t._uU(23,"Ingresar"),t.qZA()()()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",o.loginForm),t.xp6(3),t.Q6J("ngIf",o.error),t.xp6(4),t.Q6J("ngIf",o.validarCampos("identification")),t.xp6(3),t.Q6J("type",o.changeType?"password":"text"),t.xp6(3),t.Q6J("ngClass",o.visible?"bi bi-eye-fill":"bi bi-eye-slash-fill"),t.xp6(1),t.Q6J("ngIf",o.validarCampos("password")))},directives:[n._Y,n.JL,n.sg,u.O5,n.Fj,n.JJ,n.u,u.mk],styles:[".login[_ngcontent-%COMP%]{height:100vh;display:grid;grid-template-columns:auto auto;align-items:center}.child-login[_ngcontent-%COMP%]{display:grid;justify-content:center;align-content:center;width:100%}img[_ngcontent-%COMP%]{width:500px}.formlogin[_ngcontent-%COMP%]{background:rgba(255,255,255,.15);padding:2rem 3rem;border-radius:2.5rem;background-color:#9ad3ff;color:#000;width:600px;right:0;left:0}.button-login[_ngcontent-%COMP%]{background-color:#00ddec;border-radius:35px;border:1px solid #00a4af;display:inline-block;cursor:pointer;color:#000;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #00a4af}.button-login[_ngcontent-%COMP%]:hover{background-color:#00a4af}.button-login[_ngcontent-%COMP%]:active{position:relative;top:1px}.button-register[_ngcontent-%COMP%]{background-color:#d9fcff;border-radius:35px;border:1px solid #7ea4a7;display:inline-block;cursor:pointer;color:#000;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #7ea4a7}.button-register[_ngcontent-%COMP%]:hover{background-color:#7ea4a7}.button-register[_ngcontent-%COMP%]:active{position:relative;top:1px}.eyeicon[_ngcontent-%COMP%]{background-color:#fff;border:none}.form-control[_ngcontent-%COMP%]{box-shadow:none;border:none}"]}),r})()},{path:"password",component:J,canDeactivate:[I]},{path:"register",component:F},{path:"",redirectTo:"login"}];let R=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[p.Bz.forChild(L)],p.Bz]}),r})(),Y=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[u.ez,R]]}),r})()}}]);