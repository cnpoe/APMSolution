(function () {
   "use strict";

   angular
       .module("productManagement")
       .controller("ProductEditCtrl",
           ["product",
               "$state",
               ProductEditCtrl]);
   
   function ProductEditCtrl(product, $state) {
       var vm = this;

       vm.product = product;

       if (vm.product && vm.product.productId){
           vm.title = "Edit: " + vm.product.productName;
       }else{
           vm.title = "New product";
       }

       vm.open = function ($event) {
           $event.preventDefault();
           $event.stopPropagation();

           vm.opened = !vm.opened;
       }

       vm.submit = function () {
           vm.product.$save();
       }

       vm.cancel = function () {
           $state.go('productList');
       }
   }
}());