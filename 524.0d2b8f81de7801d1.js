"use strict";(self.webpackChunkappDvnet=self.webpackChunkappDvnet||[]).push([[524],{7524:(Q,g,l)=>{l.r(g),l.d(g,{AuthenticationModule:()=>Y});var u=l(9808),n=l(3075),e=l(5e3),p=l(6696),d=l(9250),m=l(7669),f=l(2340),h=l(520);let b=(()=>{class r{constructor(t){this.http=t,this.url=f.N.WS_URL}registerPartner(t){return this.http.post(`${this.url}/partner`,t)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(h.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function _(r,i){1&r&&(e.TgZ(0,"strong"),e._uU(1,"Error!"),e.qZA())}const v=function(r,i){return{"alert-danger":r,"alert-success":i}};function C(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div",12),e.YNc(1,_,2,0,"strong",13),e._uU(2),e.TgZ(3,"button",14),e.NdJ("click",function(){return e.CHM(t),e.oxw().closeAlert()}),e.TgZ(4,"span",15),e._uU(5,"\xd7"),e.qZA()()()}if(2&r){const t=e.oxw();e.Q6J("ngClass",e.WLB(3,v,t.error,!t.error)),e.xp6(1),e.Q6J("ngIf",t.error),e.xp6(1),e.hij(" ",t.alerta," ")}}function x(r,i){1&r&&(e.TgZ(0,"small",16),e._uU(1," Ingrese una cedula v\xe1lida "),e.qZA())}function T(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div",17),e._UZ(1,"input",18),e.TgZ(2,"div",19)(3,"span",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().viewPass()}),e._UZ(4,"i",21),e.qZA()()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("type",t.changeType?"password":"text"),e.xp6(3),e.Q6J("ngClass",t.visible?"bi bi-eye-fill":"bi bi-eye-slash-fill")}}function w(r,i){1&r&&(e.TgZ(0,"small",16),e._uU(1," Ingrese una contrase\xf1a mayor a 8 caracteres "),e.qZA())}function Z(r,i){1&r&&(e.TgZ(0,"div",17),e._UZ(1,"input",22),e.qZA())}function k(r,i){1&r&&(e.TgZ(0,"small",16),e._uU(1," Las contrase\xf1as deben coincidir "),e.qZA())}function y(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){return e.CHM(t),e.oxw().check("identification")}),e._uU(1,"Verificar"),e.qZA()}}function F(r,i){1&r&&(e.TgZ(0,"button",24),e._uU(1,"Registrar"),e.qZA())}let A=(()=>{class r{constructor(t,o,s,a,c){this.formBuilder=t,this.router=o,this.login=s,this.services=a,this.partners=c,this.registerForm=this.formBuilder.group({identification:["",[n.kI.required,n.kI.minLength(10),n.kI.maxLength(15)]],password:["",[n.kI.required,n.kI.minLength(8)]],repeatpassword:["",[n.kI.required,n.kI.minLength(8)]]},{validator:this.MatchConfirom("password","repeatpassword")}),this.error=!1,this.alerta="",this.changeType=!0,this.visible=!0,this.client=!1,this.show=!1}ngOnInit(){}register(){if(this.registerForm.markAllAsTouched(),!this.registerForm.valid)return;let t={identification:this.registerForm.value.identification,password:this.registerForm.value.password};this.check("identification"),this.client&&this.partners.registerPartner(t).subscribe(o=>{this.showMsg("Usuario resgistrado con exito"),this.registerForm.reset(),this.client=!1},o=>{this.errorMsg(o.error.message)})}check(t){this.error=!1,this.registerForm.controls[t].markAsTouched(),!this.registerForm.controls[t].errors&&this.login.verifyId(this.registerForm.value.identification).subscribe(o=>{o?this.client=!0:(this.client=!1,this.errorMsg())})}back(){this.router.navigateByUrl("/auth/login")}validarCampos(t){return this.registerForm.controls[t].errors&&this.registerForm.controls[t].touched}MatchConfirom(t,o){return s=>{let c=s.controls[o];return c.setErrors(s.controls[t].value===c.value?null:{notEquivalent:!0})}}viewPass(){this.visible=!this.visible,this.changeType=!this.changeType}showMsg(t){this.show=!0,this.alerta=t}errorMsg(t){this.error=!0,this.show=!0,this.alerta=t||"No existe un cliente con esa identificaci\xf3n"}closeAlert(){this.error=!1,this.show=!1}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(n.qu),e.Y36(p.F0),e.Y36(d.r),e.Y36(m.r),e.Y36(b))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],decls:21,vars:9,consts:[[1,"container"],["action","",1,"formlogin",3,"formGroup","ngSubmit"],[1,"mb-3"],["class","alert alert-danger alert-dismissible fade show","role","alert",3,"ngClass",4,"ngIf"],[1,"row"],["type","text","id","identification","placeholder","C\xe9dula o RUC","formControlName","identification",1,"form-control"],["class","error",4,"ngIf"],["class","input-group mb-1",4,"ngIf"],[1,"text-center","mt-3"],["type","button",1,"button-back","mr-3",3,"click"],["type","button","class","button-login mr-3",3,"click",4,"ngIf"],["type","submit","class","button-login",4,"ngIf"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show",3,"ngClass"],[4,"ngIf"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"error"],[1,"input-group","mb-1"],["id","password","placeholder","Contrase\xf1a","formControlName","password",1,"form-control",3,"type"],[1,"input-group-append"],[1,"input-group-text","eyeicon",3,"click"],[3,"ngClass"],["type","password","id","repeatpassword","placeholder","Repita su contrase\xf1a","formControlName","repeatpassword",1,"form-control"],["type","button",1,"button-login","mr-3",3,"click"],["type","submit",1,"button-login"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return o.register()}),e.TgZ(2,"h1",2),e._uU(3,"Registrate"),e.qZA(),e.TgZ(4,"h3",2),e._uU(5,"Ingrese su n\xfamero de identificaci\xf3n"),e.qZA(),e.YNc(6,C,6,6,"div",3),e.TgZ(7,"div",4)(8,"div",2),e._UZ(9,"input",5),e.YNc(10,x,2,0,"small",6),e.qZA(),e.TgZ(11,"div",2),e.YNc(12,T,5,2,"div",7),e.YNc(13,w,2,0,"small",6),e.qZA(),e.YNc(14,Z,2,0,"div",7),e.YNc(15,k,2,0,"small",6),e.qZA(),e.TgZ(16,"div",8)(17,"button",9),e.NdJ("click",function(){return o.back()}),e._uU(18,"Volver"),e.qZA(),e.YNc(19,y,2,0,"button",10),e.YNc(20,F,2,0,"button",11),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",o.registerForm),e.xp6(5),e.Q6J("ngIf",o.show),e.xp6(4),e.Q6J("ngIf",o.validarCampos("identification")),e.xp6(2),e.Q6J("ngIf",o.client),e.xp6(1),e.Q6J("ngIf",o.validarCampos("password")),e.xp6(1),e.Q6J("ngIf",o.client),e.xp6(1),e.Q6J("ngIf",o.validarCampos("repeatpassword")),e.xp6(4),e.Q6J("ngIf",!o.client),e.xp6(1),e.Q6J("ngIf",o.client))},directives:[n._Y,n.JL,n.sg,u.O5,u.mk,n.Fj,n.JJ,n.u],styles:[".formlogin[_ngcontent-%COMP%]{min-width:300px;max-width:60%;background:rgba(255,255,255,.15);padding:2rem 3rem;margin:auto;border-radius:2.5rem;background-color:#9ad3ff;color:#000;position:absolute;top:25%;right:0;left:0}.button-login[_ngcontent-%COMP%]{background-color:#00ddec;border-radius:35px;border:1px solid #00a4af;display:inline-block;cursor:pointer;color:#000;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #00a4af}.button-login[_ngcontent-%COMP%]:hover{background-color:#00a4af}.button-login[_ngcontent-%COMP%]:active{position:relative;top:1px}.button-back[_ngcontent-%COMP%]{background-color:#d9fcff;border-radius:35px;border:1px solid #7ea4a7;display:inline-block;cursor:pointer;color:#000;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #7ea4a7}.button-back[_ngcontent-%COMP%]:hover{background-color:#7ea4a7}.button-back[_ngcontent-%COMP%]:active{position:relative;top:1px}.eyeicon[_ngcontent-%COMP%]{background-color:#fff;border:none}.form-control[_ngcontent-%COMP%]{box-shadow:none;border:none}"]}),r})(),I=(()=>{class r{canDeactivate(t,o,s,a){return!!t.getHasChange()||confirm("\xbfDesea abandonar esta p\xe1gina sin guardar los cambios?")}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function P(r,i){1&r&&(e.TgZ(0,"small",14),e._uU(1," Ingrese una contrase\xf1a, minimo 6 caracteres "),e.qZA())}function J(r,i){1&r&&(e.TgZ(0,"small",14),e._uU(1," Las contrase\xf1as no coinciden "),e.qZA())}let M=(()=>{class r{constructor(t){this.formBuilder=t,this.visible=!0,this.changeType=!0,this.passwords={},this.passForm=this.formBuilder.group({password1:["",[n.kI.required,n.kI.minLength(6),n.kI.maxLength(20)]],password2:["",[n.kI.required,n.kI.minLength(6),n.kI.maxLength(20)]]})}ngOnInit(){}changePass(){if(this.passForm.markAllAsTouched(),!this.passForm.valid)return;let t=this.passForm.value.password1,o=this.passForm.value.password2;t===o&&(this.passwords={user:t,pass:o},this.hasChange=!1,console.log("pass changed"))}checkMatchValidator(t,o){return function(s){let a=s.get(t).value,c=s.get(o).value;return""!==a&&a!==c?{notMatch:`value ${a} is not equal to ${o}`}:null}}validateMatch(t,o){return this.passForm.controls[t].value!=this.passForm.controls[o].value}validatePass(t){return this.passForm.controls[t].errors&&this.passForm.controls[t].touched}viewPass(){this.visible=!this.visible,this.changeType=!this.changeType}getHasChange(){return!this.hasChange}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(n.qu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-change-pass"]],decls:19,vars:5,consts:[[1,"set"],[1,"container"],[1,"row"],[1,"text-center"],["id","passwordForm",1,"formlogin",3,"formGroup","ngSubmit"],[1,"input-group"],["formControlName","password1","placeholder","New Password","autocomplete","off",1,"form-control","pwd1",3,"type","change"],[1,"input-group-append"],[1,"input-group-text","eyeicon",3,"click"],[3,"ngClass"],["class","error",4,"ngIf"],["type","password","formControlName","password2","placeholder","Repeat Password","autocomplete","off",1,"form-control","pwd2","mt-3"],[1,"text-center","mt-3"],["type","submit",1,"btn","btn-primary"],[1,"error"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Cambiar contrase\xf1a"),e.qZA(),e.TgZ(4,"div",2)(5,"p",3),e._uU(6,"Utilice el siguiente formulario para cambiar su contrase\xf1a."),e.qZA(),e.TgZ(7,"form",4),e.NdJ("ngSubmit",function(){return o.changePass()}),e.TgZ(8,"div",5)(9,"input",6),e.NdJ("change",function(){return o.hasChange=!0}),e.qZA(),e.TgZ(10,"div",7)(11,"span",8),e.NdJ("click",function(){return o.viewPass()}),e._UZ(12,"i",9),e.qZA()()(),e.YNc(13,P,2,0,"small",10),e._UZ(14,"input",11),e.YNc(15,J,2,0,"small",10),e.TgZ(16,"div",12)(17,"button",13),e._uU(18,"Cambiar"),e.qZA()()()()()()),2&t&&(e.xp6(7),e.Q6J("formGroup",o.passForm),e.xp6(2),e.Q6J("type",o.changeType?"password":"text"),e.xp6(3),e.Q6J("ngClass",o.visible?"bi bi-eye-fill":"bi bi-eye-slash-fill"),e.xp6(1),e.Q6J("ngIf",o.validatePass("password1")),e.xp6(2),e.Q6J("ngIf",o.validateMatch("password1","password2")))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,u.mk,u.O5],styles:[".set[_ngcontent-%COMP%]{background-color:#effff1!important;display:block;height:80%}.container[_ngcontent-%COMP%]{text-align:center;min-width:300px;max-width:40%;padding:2rem 3rem;border-radius:2.5rem;background-color:#fff;color:#000;position:absolute;top:30%;right:0;left:0}.pwd1[_ngcontent-%COMP%]{box-shadow:none;border-color:gray;border-right:none}.pwd2[_ngcontent-%COMP%]{box-shadow:none;border-color:gray}.eyeicon[_ngcontent-%COMP%]{background-color:#fff;border-color:gray}.example[_ngcontent-%COMP%]{width:100%}  .mat-focused .mat-form-field-label{color:green!important}  .mat-form-field-underline{background-color:green!important}  .mat-form-field-ripple{background-color:#fff!important}  .mat-form-field-empty.mat-form-field-label{color:#6e6e6e}  .mat-form-field-wrapper{margin-bottom:-1.25em}  .mat-form-field-appearance-outline .mat-form-field-outline{color:red!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:red!important}"]}),r})();var U=l(4863);function N(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div",20)(1,"strong"),e._uU(2,"Error!"),e.qZA(),e._uU(3),e.TgZ(4,"button",21),e.NdJ("click",function(){return e.CHM(t),e.oxw().closeAlert()}),e.TgZ(5,"span",22),e._uU(6,"\xd7"),e.qZA()()()}if(2&r){const t=e.oxw();e.xp6(3),e.hij(" ",t.alerta," ")}}function q(r,i){1&r&&(e.TgZ(0,"small",23),e._uU(1," Ingrese una cedula v\xe1lida "),e.qZA())}function L(r,i){1&r&&(e.TgZ(0,"small",23),e._uU(1," Ingrese su contrase\xf1a "),e.qZA())}const O=[{path:"login",component:(()=>{class r{constructor(t,o,s,a){this.formBuilder=t,this.router=o,this.loginserv=s,this.storage=a,this.identification="",this.password="",this.loginForm=this.formBuilder.group({identification:["",[n.kI.required,n.kI.minLength(10),n.kI.maxLength(14)]],password:["",[n.kI.required,n.kI.minLength(5),n.kI.maxLength(30)]]}),this.user={},this.error=!1,this.alerta="",this.visible=!0,this.changeType=!0}ngOnInit(){}autenticar(){this.loginForm.markAllAsTouched(),this.loginForm.valid&&(this.user={identification:this.loginForm.value.identification,password:this.loginForm.value.password},this.loginserv.login(this.user).subscribe(t=>{t?(this.storage.saveData("token",t.toString()),this.router.navigateByUrl("/home")):this.errorMsg("")},t=>{this.errorMsg(t.error.message)}))}register(){this.router.navigateByUrl("/auth/register")}viewPass(){this.visible=!this.visible,this.changeType=!this.changeType}errorMsg(t){this.error=!0,this.alerta=t}validarCampos(t){return this.loginForm.controls[t].errors&&this.loginForm.controls[t].touched}closeAlert(){this.error=!1}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(n.qu),e.Y36(p.F0),e.Y36(d.r),e.Y36(U.U))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-login"]],decls:26,vars:7,consts:[[1,"container"],[1,"input-group"],[1,"mr-3"],["src","../../../assets/login/logo.png","alt","Card image cap"],[1,"formlogin",3,"formGroup","ngSubmit"],[1,"mb-3"],["action","",1,"formlogin",3,"formGroup","ngSubmit"],["class","alert alert-danger alert-dismissible fade show","role","alert",4,"ngIf"],[1,"row"],[1,"mb-4"],["type","text","id","identification","placeholder","C\xe9dula o RUC","formControlName","identification",1,"form-control"],["class","error",4,"ngIf"],[1,"input-group","mb-1"],["id","password","placeholder","Contrase\xf1a","formControlName","password",1,"form-control",3,"type"],[1,"input-group-append"],[1,"input-group-text","eyeicon",3,"click"],[3,"ngClass"],[1,"text-center","mt-3"],["type","button",1,"button-register","mr-3",3,"click"],["type","submit",1,"button-login"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"error"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"form",4),e.NdJ("ngSubmit",function(){return o.autenticar()}),e.TgZ(5,"h1",5),e._uU(6,"Iniciar sesi\xf3n"),e.qZA()()(),e.TgZ(7,"form",6),e.NdJ("ngSubmit",function(){return o.autenticar()}),e.TgZ(8,"h1",5),e._uU(9,"Iniciar sesi\xf3n"),e.qZA(),e.YNc(10,N,7,1,"div",7),e.TgZ(11,"div",8)(12,"div",9),e._UZ(13,"input",10),e.YNc(14,q,2,0,"small",11),e.qZA(),e.TgZ(15,"div",12),e._UZ(16,"input",13),e.TgZ(17,"div",14)(18,"span",15),e.NdJ("click",function(){return o.viewPass()}),e._UZ(19,"i",16),e.qZA()()(),e.YNc(20,L,2,0,"small",11),e.qZA(),e.TgZ(21,"div",17)(22,"button",18),e.NdJ("click",function(){return o.register()}),e._uU(23,"Registrate"),e.qZA(),e.TgZ(24,"button",19),e._uU(25,"Ingresar"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",o.loginForm),e.xp6(3),e.Q6J("formGroup",o.loginForm),e.xp6(3),e.Q6J("ngIf",o.error),e.xp6(4),e.Q6J("ngIf",o.validarCampos("identification")),e.xp6(2),e.Q6J("type",o.changeType?"password":"text"),e.xp6(3),e.Q6J("ngClass",o.visible?"bi bi-eye-fill":"bi bi-eye-slash-fill"),e.xp6(1),e.Q6J("ngIf",o.validarCampos("password")))},directives:[n._Y,n.JL,n.sg,u.O5,n.Fj,n.JJ,n.u,u.mk],styles:[".formlogin[_ngcontent-%COMP%]{min-width:300px;max-width:60%;background:rgba(255,255,255,.15);padding:2rem 3rem;margin:auto;border:2px solid red;border-radius:2.5rem;background-color:#9ad3ff;color:#000;top:25%}.button-login[_ngcontent-%COMP%]{background-color:#00ddec;border-radius:35px;border:1px solid #00a4af;display:inline-block;cursor:pointer;color:#000;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #00a4af}.button-login[_ngcontent-%COMP%]:hover{background-color:#00a4af}.button-login[_ngcontent-%COMP%]:active{position:relative;top:1px}.button-register[_ngcontent-%COMP%]{background-color:#d9fcff;border-radius:35px;border:1px solid #7ea4a7;display:inline-block;cursor:pointer;color:#000;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #7ea4a7}.button-register[_ngcontent-%COMP%]:hover{background-color:#7ea4a7}.button-register[_ngcontent-%COMP%]:active{position:relative;top:1px}.eyeicon[_ngcontent-%COMP%]{background-color:#fff;border:none}.form-control[_ngcontent-%COMP%]{box-shadow:none;border:none}"]}),r})()},{path:"password",component:M,canDeactivate:[I]},{path:"register",component:A},{path:"",redirectTo:"login"}];let R=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[p.Bz.forChild(O)],p.Bz]}),r})(),Y=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[u.ez,R]]}),r})()}}]);