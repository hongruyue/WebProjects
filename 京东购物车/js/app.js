
angular.module('cartApp',[]).controller('cartCtrl',function($scope){
    //定义数据
    $scope.items=[
        {
            id:1,
            name:'iphone6',
            count:4,
            price:6588,
            pic:'1.jpg'
        },
        {
            id:2,
            name:'mackbook',
            count:3,
            price:6588,
            pic:'2.jpg'
        },
        {
            id:3,
            name:'bingxiang',
            count:3,
            price:5788,
            pic:'3.jpg'
        },
        {
            id:4,
            name:'baets',
            count:5,
            price:3458,
            pic:'4.jpg'
        }

    ];
    //购买总数量
    $scope.totalCount=function(){
        var total=0;
        angular.forEach($scope.items,function(item){
            total+=item.count;
        });
        return total;
    };
 //购买总价
    $scope.totalPrice=function(){
        var total=0;
        angular.forEach($scope.items,function(item){
            total+=totalprice=item.count*item.price;

        });
        return total;
    };
  //添加数量
    $scope.add=function(id){
        var index=findIndex(id);
        $scope.items[index].count++;
    };
    //减少数量
    $scope.reduce=function(id){
        var index=findIndex(id);
        if(index!=-1){
         var item=$scope.items[index];
            if(item.count>1){
                item.count--;
            }else{
                var delConfirm=confirm('您确定要删除此商品吗？');
                if(delConfirm){
                    $scope.remove(id);
                }
            }

        }

    };
  var findIndex=function(id){
       var index=-1;
       angular.forEach($scope.items,function(item,key){
           if(item.id===id){
               index=key;
               return;
           }
       });
       return index;
   }
//删除商品
    $scope.remove=function(id){
       var index=findIndex(id);
        $scope.items.splice(index,1);
    };
//清空购物车
    $scope.clearCart=function(id){
        $scope.items="";
    }
});
