!function(){
	
     var  $tab = $('.tab'),
          $lis = $tab.find('.tab-header li'),
          $divs = $tab.find(".tab-Body div");
    $lis.on('click',function(){   
        var  $this = $(this),       
             index = $this.index();
             console.log(index)
             $this.addClass('on').siblings('.on').removeClass('on');       
             $divs.eq(index).show().siblings().hide();
 
    })     

}();