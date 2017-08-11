/**
 * Created by zqf on 2017/6/12.
 */
angular.module("myModule",[])
.directive("myDirective",function(){
      return {
          restrict:"ECMA",
          templateUrl:"view/third.html",
          replace:true
      }
    });