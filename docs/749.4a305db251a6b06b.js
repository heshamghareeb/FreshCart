"use strict";(self.webpackChunkFresh_Cart=self.webpackChunkFresh_Cart||[]).push([[749],{4768:(C,w,n)=>{n.d(w,{e:()=>P});var f=n(8784),p=n(5619);const s_baseUrlAuth="https://ecommerce.routemisr.com/api/v1/auth";var g=n(9212),h=n(1474),U=n(101);let P=(()=>{class l{constructor(a,d){this._HttpClient=a,this._Router=d,this.userData=new p.X(null),this.saveUser()}saveUser(){const a=localStorage.getItem("_token");if(a)try{const d=(0,f.o)(a);d.name&&this.userData.next(d)}catch(d){d.message.includes("Invalid token")&&(localStorage.removeItem("_token"),this._Router.navigate(["/login"]))}}setRegister(a){return this._HttpClient.post(s_baseUrlAuth+"/signup",a)}setLogin(a){return this._HttpClient.post(s_baseUrlAuth+"/signin",a)}setForgotPassword(a){return this._HttpClient.post(s_baseUrlAuth+"/forgotPasswords",a)}setVerifyResetCode(a){return this._HttpClient.post(s_baseUrlAuth+"/verifyResetCode",a)}resetPassword(a){return this._HttpClient.put(s_baseUrlAuth+"/resetPassword",a)}setChangePassword(a){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",a)}static#s=this.\u0275fac=function(d){return new(d||l)(g.LFG(h.eN),g.LFG(U.F0))};static#t=this.\u0275prov=g.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},749:(C,w,n)=>{n.r(w),n.d(w,{UpdatepassComponent:()=>J});var f=n(6814),p=n(6223),s=n(9212),g=n(4768),h=n(101);function U(e,i){1&e&&(s.TgZ(0,"p",22),s._uU(1," Curent Password Is Required "),s.qZA())}function P(e,i){1&e&&(s.TgZ(0,"p",22),s._uU(1," Must be at least 6 chars "),s.qZA())}function l(e,i){if(1&e&&(s.ynx(0),s.YNc(1,U,2,0,"p",21)(2,P,2,0,"p",21),s.BQk()),2&e){const r=s.oxw();s.xp6(1),s.Q6J("ngIf",r.f.currentPassword.getError("required")),s.xp6(1),s.Q6J("ngIf",r.f.currentPassword.getError("pattern"))}}function Z(e,i){1&e&&(s.TgZ(0,"p",22),s._uU(1," Password Is Required "),s.qZA())}function a(e,i){1&e&&(s.TgZ(0,"p",22),s._uU(1," Must be at least 6 chars "),s.qZA())}function d(e,i){if(1&e&&(s.ynx(0),s.YNc(1,Z,2,0,"p",21)(2,a,2,0,"p",21),s.BQk()),2&e){const r=s.oxw();s.xp6(1),s.Q6J("ngIf",r.f.password.getError("required")),s.xp6(1),s.Q6J("ngIf",r.f.password.getError("pattern"))}}function v(e,i){1&e&&(s.TgZ(0,"p",22),s._uU(1," RePassword Is Required "),s.qZA())}function T(e,i){1&e&&(s.TgZ(0,"p",22),s._uU(1," RePassword confirmation is incorrect "),s.qZA())}function A(e,i){if(1&e&&(s.ynx(0),s.YNc(1,v,2,0,"p",21)(2,T,2,0,"p",21),s.BQk()),2&e){const r=s.oxw();s.xp6(1),s.Q6J("ngIf",r.f.rePassword.getError("required")),s.xp6(1),s.Q6J("ngIf",r.f.rePassword.getError("mismatch"))}}function b(e,i){if(1&e&&(s.TgZ(0,"button",23)(1,"span"),s._uU(2,"Change"),s.qZA()()),2&e){const r=s.oxw();s.Q6J("disabled",r.updateForm.invalid)}}function I(e,i){1&e&&(s.TgZ(0,"button",24)(1,"span"),s._UZ(2,"i",25),s.qZA()())}function y(e,i){if(1&e&&(s.TgZ(0,"p",26),s._uU(1),s.qZA()),2&e){const r=s.oxw();s.xp6(1),s.hij(" ",r.errMsg," ")}}const c=e=>({"d-none":e});let J=(()=>{class e{constructor(r,u,t){this._AuthService=r,this._fb=u,this._Router=t,this.passwordShow=!1,this.curentPasswordShow=!1,this.rePasswordShow=!1,this.errMsg="",this.isLoading=!1}ngOnInit(){this.updateForm=this._fb.group({currentPassword:["",[p.kI.required,p.kI.pattern(/^\w{6,}$/)]],password:["",[p.kI.required,p.kI.pattern(/^\w{6,}$/)]],rePassword:[""]},{validator:[this.checkPassword]})}checkPassword(r){const u=r.get("password"),t=r.get("rePassword");""===t?.value?t?.setErrors({required:!0}):t?.value!==u?.value&&t?.setErrors({mismatch:!0})}get f(){return this.updateForm.controls}handleUpdate(){this.isLoading=!0,this.updateForm.valid&&this._AuthService.setChangePassword(this.updateForm.value).subscribe({next:r=>{"success"===r.message&&(this.isLoading=!1,localStorage.setItem("_token",r.token),this.updateForm.reset(),this.errMsg=r.message)},error:r=>{this.isLoading=!1,this.errMsg=r.error.message}})}static#s=this.\u0275fac=function(u){return new(u||e)(s.Y36(g.e),s.Y36(p.qu),s.Y36(h.F0))};static#t=this.\u0275cmp=s.Xpm({type:e,selectors:[["app-updatepass"]],standalone:!0,features:[s.jDz],decls:40,vars:25,consts:[[1,"bg-main-light","w-75","mx-auto","rounded","shadow","p-3"],[1,"h4","text-center"],[1,"vstack","gap-3","w-75","mx-auto",3,"formGroup","ngSubmit"],[1,"form-item"],["for","currentPassword"],[1,"position-relative"],["formControlName","currentPassword","id","currentPassword","type","password","placeholder","Your Current Password....",1,"form-control"],["cupass",""],["role","button",1,"position-absolute","top-50","end-0","translate-middle-y","me-2",3,"ngClass","click"],[1,"fas","fa-eye"],[1,"fas","fa-eye-slash"],[4,"ngIf"],["for","password"],["formControlName","password","id","password","type","password","placeholder","Your Password....",1,"form-control"],["pass",""],["for","rePassword"],["formControlName","rePassword","id","rePassword","type","Password","placeholder","Confirm Password....",1,"form-control"],["repass",""],["type","submit","class","main-btn ms-auto",3,"disabled",4,"ngIf"],["type","button","disabled","","class","main-btn ms-auto",4,"ngIf"],["class","alert alert-danger text-center w-50 mx-auto mb-0 p-1 mt-3",4,"ngIf"],["class","alert alert-danger w-50 mx-auto p-1 mb-0",4,"ngIf"],[1,"alert","alert-danger","w-50","mx-auto","p-1","mb-0"],["type","submit",1,"main-btn","ms-auto",3,"disabled"],["type","button","disabled","",1,"main-btn","ms-auto"],[1,"fas","fa-spinner","fa-spin"],[1,"alert","alert-danger","text-center","w-50","mx-auto","mb-0","p-1","mt-3"]],template:function(u,t){if(1&u){const _=s.EpF();s.TgZ(0,"section",0)(1,"h1",1),s._uU(2,"Update User Password"),s.qZA(),s.TgZ(3,"form",2),s.NdJ("ngSubmit",function(){return t.handleUpdate()}),s.TgZ(4,"div",3)(5,"label",4),s._uU(6,"Current Password:"),s.qZA(),s.TgZ(7,"div",5),s._UZ(8,"input",6,7),s.TgZ(10,"span",8),s.NdJ("click",function(){s.CHM(_);const o=s.MAs(9);return t.curentPasswordShow=!0,s.KtG(o.type=1==t.curentPasswordShow?"text":"password")}),s._UZ(11,"i",9),s.qZA(),s.TgZ(12,"span",8),s.NdJ("click",function(){s.CHM(_);const o=s.MAs(9);return t.curentPasswordShow=!1,s.KtG(o.type=0==t.curentPasswordShow?"password":"text")}),s._UZ(13,"i",10),s.qZA()(),s.YNc(14,l,3,2,"ng-container",11),s.qZA(),s.TgZ(15,"div",3)(16,"label",12),s._uU(17,"Password:"),s.qZA(),s.TgZ(18,"div",5),s._UZ(19,"input",13,14),s.TgZ(21,"span",8),s.NdJ("click",function(){s.CHM(_);const o=s.MAs(20);return t.passwordShow=!0,s.KtG(o.type=1==t.passwordShow?"text":"password")}),s._UZ(22,"i",9),s.qZA(),s.TgZ(23,"span",8),s.NdJ("click",function(){s.CHM(_);const o=s.MAs(20);return t.passwordShow=!1,s.KtG(o.type=0==t.passwordShow?"password":"text")}),s._UZ(24,"i",10),s.qZA()(),s.YNc(25,d,3,2,"ng-container",11),s.qZA(),s.TgZ(26,"div",3)(27,"label",15),s._uU(28,"RePassword:"),s.qZA(),s.TgZ(29,"div",5),s._UZ(30,"input",16,17),s.TgZ(32,"span",8),s.NdJ("click",function(){s.CHM(_);const o=s.MAs(31);return t.rePasswordShow=!0,s.KtG(o.type=1==t.rePasswordShow?"text":"password")}),s._UZ(33,"i",9),s.qZA(),s.TgZ(34,"span",8),s.NdJ("click",function(){s.CHM(_);const o=s.MAs(31);return t.rePasswordShow=!1,s.KtG(o.type=0==t.rePasswordShow?"password":"text")}),s._UZ(35,"i",10),s.qZA()(),s.YNc(36,A,3,2,"ng-container",11),s.qZA(),s.YNc(37,b,3,1,"button",18)(38,I,3,0,"button",19)(39,y,2,1,"p",20),s.qZA()()}2&u&&(s.xp6(3),s.Q6J("formGroup",t.updateForm),s.xp6(7),s.Q6J("ngClass",s.VKq(13,c,t.curentPasswordShow)),s.xp6(2),s.Q6J("ngClass",s.VKq(15,c,!t.curentPasswordShow)),s.xp6(2),s.Q6J("ngIf",t.f.currentPassword.errors&&((null==t.f.currentPassword.value?null:t.f.currentPassword.value.length)||t.f.currentPassword.touched)),s.xp6(7),s.Q6J("ngClass",s.VKq(17,c,t.passwordShow)),s.xp6(2),s.Q6J("ngClass",s.VKq(19,c,!t.passwordShow)),s.xp6(2),s.Q6J("ngIf",t.f.password.errors&&((null==t.f.password.value?null:t.f.password.value.length)||t.f.password.touched)),s.xp6(7),s.Q6J("ngClass",s.VKq(21,c,t.rePasswordShow)),s.xp6(2),s.Q6J("ngClass",s.VKq(23,c,!t.rePasswordShow)),s.xp6(2),s.Q6J("ngIf",t.f.rePassword.errors&&((null==t.f.rePassword.value?null:t.f.rePassword.value.length)||t.f.rePassword.touched)),s.xp6(1),s.Q6J("ngIf",!t.isLoading),s.xp6(1),s.Q6J("ngIf",t.isLoading),s.xp6(1),s.Q6J("ngIf",t.errMsg))},dependencies:[f.ez,f.mk,f.O5,p.UX,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u]})}return e})()}}]);