"use strict";(self.webpackChunkFresh_Cart=self.webpackChunkFresh_Cart||[]).push([[299],{5491:(m,u,n)=>{n.d(u,{J:()=>_});var o=n(9212),c=n(5619),a=n(553),e=n(1474),g=n(2425);let _=(()=>{class d{constructor(t,r){this._HttpClient=t,this._ToastrService=r,this.cartNumberSignal=(0,o.tdS)(0),this.wishList=new c.X([]),this.whishNumberSignal=(0,o.tdS)(0),this.products=[]}getUserOrders(t){return this._HttpClient.get(a.N.baseUrlData+"/orders/user/"+t)}addToCart(t){this.sendToCart(t).subscribe({next:r=>{"success"===r.status&&(this._ToastrService.success(r.message),this.updateCartNumberSignal(r.numOfCartItems))}})}updateCartNumberSignal(t){this.cartNumberSignal.update(()=>t)}SetcheckOut(t,r){return this._HttpClient.post(a.N.baseUrlData+`/orders/checkout-session/${t}?url=${a.N.payUrl}`,r)}getProducts(t=1){return this._HttpClient.get(a.N.baseUrlData+`/products?page=${t}`)}getProductById(t){return this._HttpClient.get(a.N.baseUrlData+"/products/"+t)}getCategories(){return this._HttpClient.get(a.N.baseUrlData+"/categories")}getCategoriesById(t){return this._HttpClient.get(a.N.baseUrlData+"/categories/"+t)}getSubCategoriesToCat(t){return this._HttpClient.get(a.N.baseUrlData+`/categories/${t}/subcategories`)}sendToCart(t){return this._HttpClient.post(a.N.baseUrlData+"/cart",{productId:t})}getCartData(){return this._HttpClient.get(a.N.baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(a.N.baseUrlData+"/cart")}updatePoductCount(t,r){return this._HttpClient.put(a.N.baseUrlData+"/cart/"+t,{count:r})}deletePoductCart(t){return this._HttpClient.delete(a.N.baseUrlData+"/cart/"+t)}getBrands(t=1){return this._HttpClient.get(a.N.baseUrlData+`/brands?page=${t}`)}getBrandData(t){return this._HttpClient.get(a.N.baseUrlData+`/brands/${t}`)}setWishlist(t){return this._HttpClient.post(a.N.baseUrlData+"/wishlist",{productId:t})}removeWishlist(t){return this._HttpClient.delete(a.N.baseUrlData+`/wishlist/${t}`)}getWishlist(){return this._HttpClient.get(a.N.baseUrlData+"/wishlist")}updateWishlistItem(t){this.wishList.next(t)}updateWhishNumberSignal(t){this.whishNumberSignal.update(()=>t)}setAddresses(t){return this._HttpClient.post(a.N.baseUrlData+"/addresses",t)}getAddresses(){return this._HttpClient.get(a.N.baseUrlData+"/addresses")}removeAddresses(t){return this._HttpClient.delete(a.N.baseUrlData+`/addresses/${t}`)}static#t=this.\u0275fac=function(r){return new(r||d)(o.LFG(e.eN),o.LFG(g._W))};static#e=this.\u0275prov=o.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},5299:(m,u,n)=>{n.r(u),n.d(u,{BrandsComponent:()=>t});var o=n(6814),c=n(6472),a=n(101),e=n(9212),g=n(5491);const _=r=>["/brands",r];function d(r,h){if(1&r&&(e.TgZ(0,"div",4)(1,"div",5),e._UZ(2,"img",6),e.TgZ(3,"div",7)(4,"h4",8),e._uU(5),e.qZA()()()()),2&r){const s=h.$implicit;e.Q6J("routerLink",e.VKq(4,_,s._id)),e.xp6(2),e.Q6J("src",s.image,e.LSH)("alt",s.name),e.xp6(3),e.Oqu(s.name)}}const C=(r,h,s)=>({id:"brand",itemsPerPage:r,currentPage:h,totalItems:s});let t=(()=>{class r{constructor(s){this._EcomdataService=s,this.brandsData=[],this.pageSize=0,this.curentPage=0,this.totalItem=0}ngOnInit(){this._EcomdataService.getBrands().subscribe({next:s=>{this.brandsData=s.data,this.pageSize=s.metadata.limit,this.totalItem=s.results,this.curentPage=s.metadata.currentPage}}),this._EcomdataService.getProducts().subscribe({next:s=>{this._EcomdataService.products=s.data}})}pageChanged(s){this.curentPage=s,this._EcomdataService.getBrands(s).subscribe({next:i=>{this.brandsData=i.data,this.pageSize=i.metadata.limit,this.totalItem=i.results,this.curentPage=i.metadata.currentPage}})}static#t=this.\u0275fac=function(i){return new(i||r)(e.Y36(g.J))};static#e=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-brands"]],standalone:!0,features:[e.jDz],decls:6,vars:12,consts:[[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","row-cols-lg-4","g-4"],["role","button","class","col",3,"routerLink",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-3"],["id","brand","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],["role","button",1,"col",3,"routerLink"],[1,"card"],[1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title","text-main"]],template:function(i,l){1&i&&(e.TgZ(0,"section")(1,"div",0),e.YNc(2,d,6,6,"div",1),e.ALo(3,"paginate"),e.qZA()(),e.TgZ(4,"footer",2)(5,"pagination-controls",3),e.NdJ("pageChange",function(p){return l.pageChanged(p)})("pageBoundsCorrection",function(p){return l.pageChanged(p)}),e.qZA()()),2&i&&(e.xp6(2),e.Q6J("ngForOf",e.xi3(3,5,l.brandsData,e.kEZ(8,C,l.pageSize,l.curentPage,l.totalItem))),e.xp6(3),e.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0))},dependencies:[o.ez,o.sg,c.JX,c._s,c.LS,a.rH]})}return r})()}}]);