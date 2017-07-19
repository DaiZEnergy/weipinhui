
//固定的定位图标
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>=800){
			$('.u-shopbag').fadeIn(300);
				$('.mg-dialog').fadeIn(300);
		}else{
			$('.u-shopbag').fadeOut(300);
			$('.mg-dialog').fadeOut(300);
		}

	});

//轮播图
	var run ;
	var i=0;
function autoRun(){
	run = setInterval(function(){
		if(!run){
			return ;
		}

		i++;
		if(i==$('.lunbotu li').length){
			$('.lunbotu').animate(
							{'left':0}	

			,1500);
				i=0;
		}else{
			$('.lunbotu').animate(
							{'left':'-=736px'}			
			,1500);
			console.log(i);
		}
	$('.lists li').eq(i).addClass('bianseluntu').siblings().removeClass('bianseluntu');
			
		  
		//console.log('dfdf');
	},1500);
}
autoRun();

/*$('.banner').mouseover(function(){
	 clearInterval(run);
	 console.log('dfd');
	 run=undefined;
});
 $('.banner').mouseover(function(){
	autoRun();
});*/
 

});
