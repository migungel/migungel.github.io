"use strict";(self.webpackChunkappDvnet=self.webpackChunkappDvnet||[]).push([[639],{639:(b,u,a)=>{a.r(u),a.d(u,{AuthenticationModule:()=>x});var c=a(9808),e=a(3075),t=a(5e3),l=a(1083),m=a(9250),g=a(4863);function d(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",11)(1,"strong"),t._uU(2,"Error!"),t.qZA(),t._uU(3),t.TgZ(4,"button",12),t.NdJ("click",function(){return t.CHM(n),t.oxw().closeAlert()}),t.TgZ(5,"span",13),t._uU(6,"\xd7"),t.qZA()()()}if(2&o){const n=t.oxw();t.xp6(3),t.hij(" ",n.alerta," ")}}function p(o,i){1&o&&(t.TgZ(0,"small",14),t._uU(1," Ingrese una cedula v\xe1lida "),t.qZA())}function h(o,i){1&o&&(t.TgZ(0,"small",14),t._uU(1," Ingrese su contrase\xf1a "),t.qZA())}const f=[{path:"login",component:(()=>{class o{constructor(n,r,s,C){this.formBuilder=n,this.router=r,this.loginserv=s,this.storage=C,this.usuario="",this.password="",this.loginForm=this.formBuilder.group({usuario:["",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(10)]],password:["",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(30)]]}),this.user={},this.error=!1,this.alerta=""}ngOnInit(){}autenticar(){this.loginForm.markAllAsTouched(),this.loginForm.valid&&(this.user={user:this.loginForm.value.usuario,pass:this.loginForm.value.password},this.loginserv.login(this.user).subscribe(n=>{const r=(new DOMParser).parseFromString(n,"text/xml"),s={name:r.getElementsByTagName("Name")[0].textContent,user_id:r.getElementsByTagName("User_id")[0].textContent,identification:r.getElementsByTagName("Identificacion")[0].textContent,sign:r.getElementsByTagName("Firma")[0].textContent};this.storage.saveDataJson("currentUser",s),this.router.navigateByUrl("/home")},n=>{this.error=!0,this.alerta="Usuario o clave incorrecto"}))}validarCampos(n){return this.loginForm.controls[n].errors&&this.loginForm.controls[n].touched}closeAlert(){this.error=!1}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(e.qu),t.Y36(l.F0),t.Y36(m.r),t.Y36(g.U))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:15,vars:4,consts:[[1,"container"],["action","",1,"fomlogin",3,"formGroup","ngSubmit"],[1,"mb-3"],["class","alert alert-danger alert-dismissible fade show","role","alert",4,"ngIf"],[1,"row"],[1,"mb-4"],["type","text","id","usuario","placeholder","C\xe9dula","formControlName","usuario",1,"form-control"],["class","error",4,"ngIf"],["type","password","id","password","placeholder","Contrase\xf1a","formControlName","password",1,"form-control"],[1,"text-center"],["type","submit",1,"button-login"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"error"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return r.autenticar()}),t.TgZ(2,"h1",2),t._uU(3,"Iniciar sesion"),t.qZA(),t.YNc(4,d,7,1,"div",3),t.TgZ(5,"div",4)(6,"div",5),t._UZ(7,"input",6),t.YNc(8,p,2,0,"small",7),t.qZA(),t.TgZ(9,"div",5),t._UZ(10,"input",8),t.YNc(11,h,2,0,"small",7),t.qZA()(),t.TgZ(12,"div",9)(13,"button",10),t._uU(14,"Ingresar"),t.qZA()()()()),2&n&&(t.xp6(1),t.Q6J("formGroup",r.loginForm),t.xp6(3),t.Q6J("ngIf",r.error),t.xp6(4),t.Q6J("ngIf",r.validarCampos("usuario")),t.xp6(3),t.Q6J("ngIf",r.validarCampos("password")))},directives:[e._Y,e.JL,e.sg,c.O5,e.Fj,e.JJ,e.u],styles:[".fomlogin[_ngcontent-%COMP%]{min-width:300px;max-width:60%;background:rgba(255,255,255,.15);padding:2rem 3rem;margin:auto;border-radius:2.5rem;background-color:#9ad3ff;color:#000;margin-top:10rem}.button-login[_ngcontent-%COMP%]{background-color:#00ddec;border-radius:35px;border:1px solid #00a4af;display:inline-block;cursor:pointer;color:#000;font-family:Arial;font-size:17px;padding:8px 20px;text-decoration:none;text-shadow:0px 1px 0px #00a4af}.button-login[_ngcontent-%COMP%]:hover{background-color:#00a4af}.button-login[_ngcontent-%COMP%]:active{position:relative;top:1px}"]}),o})()},{path:"",redirectTo:"login"}];let v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(f)],l.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,v]]}),o})()}}]);