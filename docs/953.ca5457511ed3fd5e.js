"use strict";(self.webpackChunkFresh_Cart=self.webpackChunkFresh_Cart||[]).push([[953],{4768:(f,_,i)=>{i.d(_,{e:()=>d});var t=i(8784),h=i(5619);const a_baseUrlAuth="https://ecommerce.routemisr.com/api/v1/auth";var u=i(9212),b=i(1474),p=i(101);let d=(()=>{class l{constructor(s,m){this._HttpClient=s,this._Router=m,this.userData=new h.X(null),this.saveUser()}saveUser(){const s=localStorage.getItem("_token");if(s)try{const m=(0,t.o)(s);m.name&&this.userData.next(m)}catch(m){m.message.includes("Invalid token")&&(localStorage.removeItem("_token"),this._Router.navigate(["/login"]))}}setRegister(s){return this._HttpClient.post(a_baseUrlAuth+"/signup",s)}setLogin(s){return this._HttpClient.post(a_baseUrlAuth+"/signin",s)}setForgotPassword(s){return this._HttpClient.post(a_baseUrlAuth+"/forgotPasswords",s)}setVerifyResetCode(s){return this._HttpClient.post(a_baseUrlAuth+"/verifyResetCode",s)}resetPassword(s){return this._HttpClient.put(a_baseUrlAuth+"/resetPassword",s)}setChangePassword(s){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",s)}static#t=this.\u0275fac=function(m){return new(m||l)(u.LFG(b.eN),u.LFG(p.F0))};static#e=this.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},2893:(f,_,i)=>{i.d(_,{N:()=>b});var t=i(9212),h=i(5619),a=i(553),u=i(1474);let b=(()=>{class p{constructor(l){this._HttpClient=l,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new h.X(0),this.cartNumberSignal=(0,t.tdS)(0)}addToCart(l){return this._HttpClient.post(a.N.baseUrlData+"/cart",{productId:l})}getCartUser(){return this._HttpClient.get(a.N.baseUrlData+"/cart")}removeCartItem(l){return this._HttpClient.delete(this.baseUrl+`cart/${l}`)}updateCartCount(l,e){return this._HttpClient.put(this.baseUrl+`cart/${l}`,{count:e})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(l,e){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${l}?url=https://heshamghareeb.github.io/freshcart`,{shippingAddress:e})}updateCartNumberSignal(l){this.cartNumberSignal.update(()=>l)}static#t=this.\u0275fac=function(e){return new(e||p)(t.LFG(u.eN))};static#e=this.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},5491:(f,_,i)=>{i.d(_,{J:()=>p});var t=i(9212),h=i(5619),a=i(553),u=i(1474),b=i(2425);let p=(()=>{class d{constructor(e,s){this._HttpClient=e,this._ToastrService=s,this.cartNumberSignal=(0,t.tdS)(0),this.wishList=new h.X([]),this.whishNumberSignal=(0,t.tdS)(0),this.products=[]}getUserOrders(e){return this._HttpClient.get(a.N.baseUrlData+"/orders/user/"+e)}addToCart(e){this.sendToCart(e).subscribe({next:s=>{"success"===s.status&&(this._ToastrService.success(s.message),this.updateCartNumberSignal(s.numOfCartItems))}})}updateCartNumberSignal(e){this.cartNumberSignal.update(()=>e)}SetcheckOut(e,s){return this._HttpClient.post(a.N.baseUrlData+`/orders/checkout-session/${e}?url=${a.N.payUrl}`,s)}getProducts(e=1){return this._HttpClient.get(a.N.baseUrlData+`/products?page=${e}`)}getProductById(e){return this._HttpClient.get(a.N.baseUrlData+"/products/"+e)}getCategories(){return this._HttpClient.get(a.N.baseUrlData+"/categories")}getCategoriesById(e){return this._HttpClient.get(a.N.baseUrlData+"/categories/"+e)}getSubCategoriesToCat(e){return this._HttpClient.get(a.N.baseUrlData+`/categories/${e}/subcategories`)}sendToCart(e){return this._HttpClient.post(a.N.baseUrlData+"/cart",{productId:e})}getCartData(){return this._HttpClient.get(a.N.baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(a.N.baseUrlData+"/cart")}updatePoductCount(e,s){return this._HttpClient.put(a.N.baseUrlData+"/cart/"+e,{count:s})}deletePoductCart(e){return this._HttpClient.delete(a.N.baseUrlData+"/cart/"+e)}getBrands(e=1){return this._HttpClient.get(a.N.baseUrlData+`/brands?page=${e}`)}getBrandData(e){return this._HttpClient.get(a.N.baseUrlData+`/brands/${e}`)}setWishlist(e){return this._HttpClient.post(a.N.baseUrlData+"/wishlist",{productId:e})}removeWishlist(e){return this._HttpClient.delete(a.N.baseUrlData+`/wishlist/${e}`)}getWishlist(){return this._HttpClient.get(a.N.baseUrlData+"/wishlist")}updateWishlistItem(e){this.wishList.next(e)}updateWhishNumberSignal(e){this.whishNumberSignal.update(()=>e)}setAddresses(e){return this._HttpClient.post(a.N.baseUrlData+"/addresses",e)}getAddresses(){return this._HttpClient.get(a.N.baseUrlData+"/addresses")}removeAddresses(e){return this._HttpClient.delete(a.N.baseUrlData+`/addresses/${e}`)}static#t=this.\u0275fac=function(s){return new(s||d)(t.LFG(u.eN),t.LFG(b._W))};static#e=this.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},953:(f,_,i)=>{i.d(_,{S:()=>T});var t=i(9212),h=i(6814),a=i(101),u=i(2618),b=i(4768),p=i(5491),d=i(2893);function l(o,g){if(1&o&&(t.TgZ(0,"span",44),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.hij(" ",n.whishItemNumberS," ")}}function e(o,g){if(1&o){const n=t.EpF();t.TgZ(0,"li",45),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.changeLangage("en"))}),t.TgZ(1,"span",46),t._UZ(2,"img",47),t.qZA()()}}function s(o,g){if(1&o){const n=t.EpF();t.TgZ(0,"li",45),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.changeLangage("ar"))}),t.TgZ(1,"span",46),t._UZ(2,"img",48),t.qZA()()}}function m(o,g){if(1&o){const n=t.EpF();t.TgZ(0,"span",49),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.changeLangage("en"))}),t._UZ(1,"img",47),t.qZA()}}function U(o,g){if(1&o){const n=t.EpF();t.TgZ(0,"span",49),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.changeLangage("ar"))}),t._UZ(1,"img",48),t.qZA()}}const N=(o,g)=>({"me-auto":o,"ms-auto":g}),D=(o,g)=>({"ms-auto":o,"me-auto":g}),x=o=>({"fa-flip-horizontal":o}),L=(o,g)=>({"end-0":o,"start-0":g}),O=(o,g)=>({"me-4":o,"ms-4":g});let T=(()=>{class o{constructor(n,c,r,C,v,Z,E,w){this.translate=n,this._AuthService=c,this._Router=r,this._Renderer2=C,this._EcomdataService=v,this._CartService=Z,this.document=E,this.translateService=w,this.pageDirAR=!1,this.whishItemNumberS=0,this.cartItemNumberS=0,this.userName="",(0,t.cEC)(()=>{this.whishItemNumberS=this._EcomdataService.whishNumberSignal()}),(0,t.cEC)(()=>{this.cartItemNumberS=this._CartService.cartNumberSignal()})}changeLangage(n){this.document.getElementsByTagName("html")[0].dir="ar"===n?"rtl":"ltr",this.translateService.setDefaultLang(n),this.translateService.use(n),this.changeCssFile(n)}changeCssFile(n){let c=this.document.getElementsByTagName("head")[0],r=this.document.getElementById("langCss"),C="ar"===n?"arabicStyle.css":"englishStyle.css";if(r)r.href=C;else{let v=this.document.createElement("link");v.rel="stylesheet",v.type="text/css",v.id="langCss",v.href=C,c.appendChild(v)}}ngOnInit(){this._AuthService.userData.subscribe({next:n=>{this.userName=null!==n&&n.name?n?.name?.slice(0,1).toUpperCase():"U"}}),this._Router.url.includes("cart")&&this._CartService.getCartUser().subscribe({next:n=>{"success"===n.status&&(this._CartService.updateCartNumberSignal(n.numOfCartItems),this.cartItemNumberS=this._CartService.cartNumberSignal())},error:n=>{}}),this._Router.url.includes("whishlist")||this._EcomdataService.getWishlist().subscribe({next:n=>{if("success"===n.status){const c=n.data.map(r=>r._id);this._EcomdataService.updateWhishNumberSignal(n.data.length),this._EcomdataService.updateWishlistItem(c),this.whishItemNumberS=this._EcomdataService.whishNumberSignal()}}})}logOut(){localStorage.removeItem("_token"),this._AuthService.userData.next(null),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(c){return new(c||o)(t.Y36(u.sK),t.Y36(b.e),t.Y36(a.F0),t.Y36(t.Qsj),t.Y36(p.J),t.Y36(d.N),t.Y36(h.K0),t.Y36(u.sK))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-navbar"]],standalone:!0,features:[t.jDz],decls:63,vars:43,consts:[[1,"navbar","shadow-sm","navbar-expand-lg","fixed-top","navbar-light","bg-light","px-5"],["navbar",""],[1,"container-fluid"],["routerLink","/",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt","freshCart"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","mt-2","mt-lg-0",3,"ngClass"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],["routerLinkActive","active-link","routerLink","/brands",1,"nav-link"],["routerLinkActive","active-link","routerLink","/categories",1,"nav-link"],[1,"navbar-nav","mt-2","mt-lg-0","navbar-icons",3,"ngClass"],[1,"nav-item","hstack"],["routerLink","/whishlist",1,"text-main","number-item"],[1,"fas","fa-heart","fa-2x"],["class","text-white",4,"ngIf"],[1,"nav-item","mx-3","hstack"],["routerLink","/cart",1,"nav-link","position-relative"],[1,"fas","fa-cart-shopping","fa-2xl","text-main",3,"ngClass"],[1,"badge","bg-info","position-absolute","top-0","end-0",3,"ngClass"],["ngbDropdown","",1,"nav-item","dropdown","navbardropdown"],["id","navbarScrollingDropdown","role","button","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"nav-link","text-main"],[1,"fa-solid","fa-bars","nav-icons"],["ngbDropdownMenu","","aria-labelledby","navbarScrollingDropdown",1,"dropdown-menu","dropstart"],["ngbDropdownItem","","class","p-2",3,"click",4,"ngIf"],["ngbDropdownItem",""],["href","https://www.facebook.com/HxBoss","target","_blank",1,"text-reset",2,"color","#4267B2 !important"],[1,"fab","fa-facebook","h4"],["target","_blank","href","https://api.whatsapp.com/send?phone=01119244463",1,"text-reset"],[1,"fab","fa-whatsapp","text-main","h4"],[1,"nav-item","ms-auto","align-content-center"],["role","button",1,"nav-link","h6",3,"click"],[1,"nav-item","hstack","navbar-social-language"],["class","d-block navbar-social-language",3,"click",4,"ngIf"],[1,"d-flex","pt-3","navbar-social-language","ps-0"],["href","https://www.facebook.com/HxBoss","target","_blank",1,"text-reset","me-4","navbar-social-language",2,"color","#4267B2 !important",3,"ngClass"],[1,"fab","fa-2xl","fa-facebook"],["target","_blank","href","https://api.whatsapp.com/send?phone=01119244463",1,"text-reset","navbar-social-language"],[1,"fab","fa-2xl","fa-whatsapp","text-main"],[1,"ps-0","nav-item"],["role","button",1,"logout-button","nav-link","h6","pt-3","navbar-social-language",3,"click"],[1,"text-white"],["ngbDropdownItem","",1,"p-2",3,"click"],[1,""],["src","./assets/images/united-states.png","alt","freshCart",1,"p-1","flag-icon"],["src","./assets/images/flag.png","alt","freshCart",1,"p-1","flag-icon"],[1,"d-block","navbar-social-language",3,"click"]],template:function(c,r){1&c&&(t.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),t._uU(11),t.ALo(12,"translate"),t.qZA()(),t.TgZ(13,"li",9)(14,"a",11),t._uU(15),t.ALo(16,"translate"),t.qZA()(),t.TgZ(17,"li",9)(18,"a",12),t._uU(19),t.ALo(20,"translate"),t.qZA()(),t.TgZ(21,"li",9)(22,"a",13),t._uU(23),t.ALo(24,"translate"),t.qZA()()(),t.TgZ(25,"ul",14)(26,"li",15)(27,"a",16),t._UZ(28,"i",17),t.YNc(29,l,2,1,"span",18),t.qZA()(),t.TgZ(30,"li",19)(31,"a",20),t._UZ(32,"i",21),t.TgZ(33,"span",22),t._uU(34),t.qZA()()(),t.TgZ(35,"li",23)(36,"a",24),t._UZ(37,"i",25),t.qZA(),t.TgZ(38,"ul",26),t.YNc(39,e,3,0,"li",27)(40,s,3,0,"li",27),t.TgZ(41,"li",28)(42,"a",29),t._UZ(43,"i",30),t.qZA()(),t.TgZ(44,"li",28)(45,"a",31),t._UZ(46,"i",32),t.qZA()(),t.TgZ(47,"li",33)(48,"span",34),t.NdJ("click",function(){return r.logOut()}),t._uU(49),t.ALo(50,"translate"),t.qZA()()()(),t.TgZ(51,"li",35),t.YNc(52,m,2,0,"span",36)(53,U,2,0,"span",36),t.qZA()(),t.TgZ(54,"ul",37)(55,"a",38),t._UZ(56,"i",39),t.qZA(),t.TgZ(57,"a",40),t._UZ(58,"i",41),t.qZA()(),t.TgZ(59,"ul",42)(60,"button",43),t.NdJ("click",function(){return r.logOut()}),t._uU(61),t.ALo(62,"translate"),t.qZA()()()()()),2&c&&(t.xp6(8),t.Q6J("ngClass",t.WLB(29,N,"en"===r.translate.currentLang,"ar"===r.translate.currentLang)),t.xp6(3),t.Oqu(t.lcZ(12,17,"Home")),t.xp6(4),t.Oqu(t.lcZ(16,19,"Products")),t.xp6(4),t.Oqu(t.lcZ(20,21,"Brands")),t.xp6(4),t.Oqu(t.lcZ(24,23,"Categories")),t.xp6(2),t.Q6J("ngClass",t.WLB(32,D,"en"===r.translate.currentLang,"ar"===r.translate.currentLang)),t.xp6(4),t.Q6J("ngIf",r.whishItemNumberS),t.xp6(3),t.Q6J("ngClass",t.VKq(35,x,"ar"===r.translate.currentLang)),t.xp6(1),t.Q6J("ngClass",t.WLB(37,L,"en"===r.translate.currentLang,"ar"===r.translate.currentLang)),t.xp6(1),t.hij(" ",r.cartItemNumberS," "),t.xp6(5),t.Q6J("ngIf","ar"==r.translate.currentLang),t.xp6(1),t.Q6J("ngIf","en"==r.translate.currentLang),t.xp6(9),t.Oqu(t.lcZ(50,25,"SignOut")),t.xp6(3),t.Q6J("ngIf","ar"==r.translate.currentLang),t.xp6(1),t.Q6J("ngIf","en"==r.translate.currentLang),t.xp6(2),t.Q6J("ngClass",t.WLB(40,O,"en"===r.translate.currentLang,"ar"===r.translate.currentLang)),t.xp6(6),t.Oqu(t.lcZ(62,27,"SignOut")))},dependencies:[h.ez,h.mk,h.O5,a.rH,a.Od,u.aw,u.X$],styles:[".navbar[_ngcontent-%COMP%]{transition:padding 1s}.number-item[_ngcontent-%COMP%]{position:relative}.number-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;bottom:18%;left:36%;color:#343a40;z-index:10;font-weight:900}.nav-icons[_ngcontent-%COMP%]{font-size:25px}.flag-icon[_ngcontent-%COMP%]{width:40px;height:40px}@media (max-width: 992px){.navbardropdown[_ngcontent-%COMP%]{display:none}}@media (min-width: 992px){.navbar-social-language[_ngcontent-%COMP%]{display:none}}.dropdown-item[_ngcontent-%COMP%]:focus, .dropdown-item[_ngcontent-%COMP%]:hover{background-color:#055d0a!important;color:#fff!important}.dropdown-item[_ngcontent-%COMP%]{transition:1s!important;padding:4px!important;-webkit-transition:1s!important;-moz-transition:1s!important;-ms-transition:1s!important;-o-transition:1s!important}.dropdown-menu[_ngcontent-%COMP%]{padding:3px!important;text-align:center}.dropdown-menu[data-bs-popper][_ngcontent-%COMP%]{left:-124%!important}@media only screen and (min-width: 320px) and (max-width: 992px){.navbar-icons[_ngcontent-%COMP%]{flex-direction:row}}.logout-button[_ngcontent-%COMP%]{color:rgba(var(--bs-emphasis-color-rgb),.65)}.logout-button[_ngcontent-%COMP%]:hover{color:rgba(var(--bs-emphasis-color-rgb),1)}"]})}return o})()},553:(f,_,i)=>{i.d(_,{N:()=>t});const t={baseUrlAuth:"https://ecommerce.routemisr.com/api/v1/auth",baseUrlUser:"https://ecommerce.routemisr.com/api/v1",baseUrlData:"https://ecommerce.routemisr.com/api/v1",payUrl:"https://heshamghareeb.github.io/freshcart"}}}]);