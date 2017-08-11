/**
 * Created by zqf on 2017/6/12.
 */
angular.module("myModule2",[])
.controller("con2",function($scope){
      $scope.abc1="abc1";
        $scope.fun=function(){
            alert(1234);
        };
        $scope.arr=["wmn","uvw"]
    })
.filter("fil1",function(){
        return function(input,num){//input代表需要处理的参数
            return input+"abc1"+num
        }
    })