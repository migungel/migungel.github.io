"use strict";(self.webpackChunkappDvnet=self.webpackChunkappDvnet||[]).push([[559],{3559:(F,g,l)=>{l.r(g),l.d(g,{AuthenticationModule:()=>y});var u=l(9808),t=l(5e3);let m=(()=>{class e{canDeactivate(o,n,s,i){return!!o.getHasChange()||confirm("\xbfDesea abandonar esta p\xe1gina sin guardar los cambios?")}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var r=l(3075);function d(e,a){1&e&&(t.TgZ(0,"small",10),t._uU(1," Ingrese una contrase\xf1a, minimo 6 caracteres "),t.qZA())}function h(e,a){1&e&&(t.TgZ(0,"small",10),t._uU(1," Las contrase\xf1as no coinciden "),t.qZA())}let f=(()=>{class e{constructor(o){this.formBuilder=o,this.passwords={},this.passForm=this.formBuilder.group({password1:["",[r.kI.required,r.kI.minLength(6),r.kI.maxLength(20)]],password2:["",[r.kI.required,r.kI.minLength(6),r.kI.maxLength(20)]]})}ngOnInit(){}changePass(){if(this.passForm.markAllAsTouched(),!this.passForm.valid)return;let o=this.passForm.value.password1,n=this.passForm.value.password2;o===n&&(this.passwords={user:o,pass:n},this.hasChange=!1,console.log("pass changed"))}checkMatchValidator(o,n){return function(s){let i=s.get(o).value,p=s.get(n).value;return""!==i&&i!==p?{notMatch:`value ${i} is not equal to ${n}`}:null}}validateMatch(o,n){return this.passForm.controls[o].value!=this.passForm.controls[n].value}validatePass(o){return this.passForm.controls[o].errors&&this.passForm.controls[o].touched}getHasChange(){return!this.hasChange}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-change-pass"]],decls:15,vars:3,consts:[[1,"set"],[1,"container"],[1,"row"],[1,"text-center"],["id","passwordForm",1,"formlogin",3,"formGroup","ngSubmit"],["type","password","formControlName","password1","placeholder","New Password","autocomplete","off",1,"form-control",3,"change"],["class","error",4,"ngIf"],["type","password","formControlName","password2","placeholder","Repeat Password","autocomplete","off",1,"form-control","mt-3"],[1,"text-center","mt-3"],["type","submit",1,"button-login"],[1,"error"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2"),t._uU(3,"Cambiar contrase\xf1a"),t.qZA(),t.TgZ(4,"div",2)(5,"p",3),t._uU(6,"Utilice el siguiente formulario para cambiar su contrase\xf1a."),t.qZA(),t.TgZ(7,"form",4),t.NdJ("ngSubmit",function(){return n.changePass()}),t.TgZ(8,"input",5),t.NdJ("change",function(){return n.hasChange=!0}),t.qZA(),t.YNc(9,d,2,0,"small",6),t._UZ(10,"input",7),t.YNc(11,h,2,0,"small",6),t.TgZ(12,"div",8)(13,"button",9),t._uU(14,"Cambiar"),t.qZA()()()()()()),2&o&&(t.xp6(7),t.Q6J("formGroup",n.passForm),t.xp6(2),t.Q6J("ngIf",n.validatePass("password1")),t.xp6(2),t.Q6J("ngIf",n.validateMatch("password1","password2")))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,u.O5],styles:[".set[_ngcontent-%COMP%]{background-color:#effff1!important;height:80%}.container[_ngcontent-%COMP%]{text-align:center;min-width:300px;max-width:40%;padding:2rem 3rem;border-radius:2.5rem;background-color:#fff;color:#000;position:absolute;top:30%;right:0;left:0}.button-login[_ngcontent-%COMP%]{background-color:#00ddec;border-radius:35px;border:1px solid #00a4af;display:inline-block;cursor:pointer;color:#000;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #00a4af}.button-login[_ngcontent-%COMP%]:hover{background-color:#00a4af}.button-login[_ngcontent-%COMP%]:active{position:relative;top:1px}"]}),e})();var c=l(6696),v=l(9250),C=l(4863);function b(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",15)(1,"strong"),t._uU(2,"Error!"),t.qZA(),t._uU(3),t.TgZ(4,"button",16),t.NdJ("click",function(){return t.CHM(o),t.oxw().closeAlert()}),t.TgZ(5,"span",17),t._uU(6,"\xd7"),t.qZA()()()}if(2&e){const o=t.oxw();t.xp6(3),t.hij(" ",o.alerta," ")}}function x(e,a){1&e&&(t.TgZ(0,"small",18),t._uU(1," Ingrese una cedula v\xe1lida "),t.qZA())}function _(e,a){1&e&&(t.TgZ(0,"small",18),t._uU(1," Ingrese su contrase\xf1a "),t.qZA())}const w=[{path:"login",component:(()=>{class e{constructor(o,n,s,i){this.formBuilder=o,this.router=n,this.loginserv=s,this.storage=i,this.usuario="",this.password="",this.loginForm=this.formBuilder.group({usuario:["",[r.kI.required,r.kI.minLength(3),r.kI.maxLength(10)]],password:["",[r.kI.required,r.kI.minLength(5),r.kI.maxLength(30)]]}),this.user={},this.error=!1,this.alerta="",this.visible=!0,this.changeType=!0}ngOnInit(){}autenticar(){this.loginForm.markAllAsTouched(),this.loginForm.valid&&(this.user={user:this.loginForm.value.usuario,pass:this.loginForm.value.password},this.loginserv.login(this.user).subscribe(o=>{const n=(new DOMParser).parseFromString(o,"text/xml");var s=n.getElementsByTagName("User_id")[0].textContent;if(s&&parseInt(s,10)>0){const i={name:n.getElementsByTagName("Name")[0].textContent,user_id:s,identification:n.getElementsByTagName("Identificacion")[0].textContent,sign:n.getElementsByTagName("Firma")[0].textContent};this.storage.saveDataJson("currentUser",i),this.router.navigateByUrl("/home")}else this.errorMsg()},o=>{this.errorMsg()}))}viewPass(){this.visible=!this.visible,this.changeType=!this.changeType}errorMsg(){this.error=!0,this.alerta="Usuario o clave incorrecto"}validarCampos(o){return this.loginForm.controls[o].errors&&this.loginForm.controls[o].touched}closeAlert(){this.error=!1}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.qu),t.Y36(c.F0),t.Y36(v.r),t.Y36(C.U))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:18,vars:6,consts:[[1,"container"],["action","",1,"formlogin",3,"formGroup","ngSubmit"],[1,"mb-3"],["class","alert alert-danger alert-dismissible fade show","role","alert",4,"ngIf"],[1,"row"],[1,"mb-4"],["type","text","id","usuario","placeholder","C\xe9dula","formControlName","usuario",1,"form-control","shadow-none"],["class","error",4,"ngIf"],[1,"input-group","mb-1"],["id","password","placeholder","Contrase\xf1a","formControlName","password",1,"form-control","shadow-none",3,"type"],[1,"input-group-append"],[1,"input-group-text","eyeicon",3,"click"],[3,"ngClass"],[1,"text-center","mt-3"],["type","submit",1,"button-login"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"error"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return n.autenticar()}),t.TgZ(2,"h1",2),t._uU(3,"Iniciar sesi\xf3n"),t.qZA(),t.YNc(4,b,7,1,"div",3),t.TgZ(5,"div",4)(6,"div",5),t._UZ(7,"input",6),t.YNc(8,x,2,0,"small",7),t.qZA(),t.TgZ(9,"div",8),t._UZ(10,"input",9),t.TgZ(11,"div",10)(12,"span",11),t.NdJ("click",function(){return n.viewPass()}),t._UZ(13,"i",12),t.qZA()()(),t.YNc(14,_,2,0,"small",7),t.qZA(),t.TgZ(15,"div",13)(16,"button",14),t._uU(17,"Ingresar"),t.qZA()()()()),2&o&&(t.xp6(1),t.Q6J("formGroup",n.loginForm),t.xp6(3),t.Q6J("ngIf",n.error),t.xp6(4),t.Q6J("ngIf",n.validarCampos("usuario")),t.xp6(2),t.Q6J("type",n.changeType?"password":"text"),t.xp6(3),t.Q6J("ngClass",n.visible?"bi bi-eye-fill":"bi bi-eye-slash-fill"),t.xp6(1),t.Q6J("ngIf",n.validarCampos("password")))},directives:[r._Y,r.JL,r.sg,u.O5,r.Fj,r.JJ,r.u,u.mk],styles:[".formlogin[_ngcontent-%COMP%]{min-width:300px;max-width:60%;background:rgba(255,255,255,.15);padding:2rem 3rem;margin:auto;border-radius:2.5rem;background-color:#9ad3ff;color:#000;position:absolute;top:25%;right:0;left:0}.button-login[_ngcontent-%COMP%]{background-color:#00ddec;border-radius:35px;border:1px solid #00a4af;display:inline-block;cursor:pointer;color:#000;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #00a4af}.button-login[_ngcontent-%COMP%]:hover{background-color:#00a4af}.button-login[_ngcontent-%COMP%]:active{position:relative;top:1px}.eyeicon[_ngcontent-%COMP%]{background-color:#fff;border:none}.form-control[_ngcontent-%COMP%]{border:none}"]}),e})()},{path:"password",component:f,canDeactivate:[m]},{path:"",redirectTo:"login"}];let T=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(w)],c.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,T]]}),e})()}}]);