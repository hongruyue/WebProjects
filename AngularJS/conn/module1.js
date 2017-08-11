/**
 * Created by zqf on 2017/6/12.
 */
angular.module("myModule1",[])
.controller("con3",function($scope){
        $scope.abc="abc";
        $scope.fun=function(){
            alert(123);
        };
        $scope.arr=["abc","def"]
    })
.filter("fil1",function(){
        return function(input,num){//input代表需要处理的参数
            return input+"abc"+num
        }
    });