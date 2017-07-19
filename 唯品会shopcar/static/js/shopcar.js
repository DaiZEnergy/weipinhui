/*固定底部导航栏*/
window.onscroll = function(){
// 获取元素
	var placeholder = document.getElementById('placeholder');

	var st = document.documentElement.scrollTop||document.body.scrollTop;
		if(st<=500){
				placeholder.setAttribute(
					'class','placeholder-on');
			}else{

				placeholder.removeAttribute('class');
			}

}
//三级联动
var pro = document.getElementById('pro');
	var city = document.getElementById('city');
	var county = document.getElementById('county');

	var pro_str='<option value="">请选择</option>';
	for(var i in address[0]){
		pro_str+='<option value="0,'+i+'">'+address[0][i]+'</option>';
		//console.log(pro_str);
	}
	pro.innerHTML=pro_str;

	pro.onchange = function(){

		county.style.display='none';
		if(!this.value){
			city.style.display = 'none';
			return;
		}
		city.style.display='inline-block';

		var city_str = '<option value="">请选择</option>';

		
		for(var i in address[this.value]){
			city_str+='<option value="'+this.value+','+i+'">'+address[this.value][i]+'</option>';
		 
		}

		city.innerHTML = city_str;

	}


	city.onchange = function(){
		if(!this.value){
			county.style.display='none';
			return;
		}
		county.style.display = 'inline-block';

		var county_str = '<option value="">请选择</option>';

		for(var i in address[this.value]){
			county_str+='<option value="">'+address[this.value][i]+'</option>';
		}
		county.innerHTML = county_str;
	}
//三级联动地址结束
//结算倒计时
var end = new Date(2017,5,18,24,33,00);
//获取元素
var hour = document.getElementById('djshour');
var minute = document.getElementById('djsfen');
var second = document.getElementById('djsmiao');
//倒计时函数
function shoptimeover(){
	var now = new Date();
	var cha = end.getTime()-now.getTime();
	//console.log(cha);
	if(cha<=0){
		clearInterval(run);


	hour.innerHTML = '00';
	minute.innerHTML = '00';
	second.innerHTML = '00';
		}else{
			var xiaoshi = fillZero(Math.floor(cha/1000/60/60%24));
			var fen = fillZero(Math.floor(cha/1000/60%60));
			var miao = fillZero(Math.floor(cha/1000%60));

			hour.innerHTML = xiaoshi;
			minute.innerHTML = fen;
			second.innerHTML = miao;
		}
}
shoptimeover();

var now = new Date();
var cha = end.getTime() - now.getTime();

if( cha>0){
	var run = setInterval(function(){
		shoptimeover();
	},1000)
}

function fillZero(num){
	if(num<10){
		 num = '0'+num;
	}
	return num;

}
//购物车结算倒计时函数结束
//全选
$(function(){

$('#all').click(function(event){
	$(':checkbox').each(function(){
		this.checked=true;
	});
	 zongliangjia();

});

$('#allno').click(function(event){
	$('.productl :checkbox').each(function(enent){
		this.checked = false;

	});
 zongliangjia();
});

$('#fan').click(function(event){
	$('.productl :checkbox').each(function(){
			if(this.checked){
			this.checked = false;
		}else{
			this.checked = true;
		}
	});


});

//追加商品
$('#addshoper').click(function(){
//console.log('abdfdfd');
 $('.orders-fst').before($('.tableinner:first').clone(true));
 zongliangjia();
});
//删除
//
$(document).on('click','.productr .deleteshop',function(){
 $(this).parents('.tableinner').remove();
 zongliangjia();
});

//加加
$('body').on('click','.tableinner .jia',function(){

	  var numjia = $(this).prev().val();
	  //console.log(numjia);
	  numjia++;
	  $(this).prev().val(numjia);
	  	$('.jian').css({
	  			'cursor':'pointer'
	  		});

})

//数量减减
$('.tableinner .jian').click(function(){
		//console.log('dfd');
	  var numjian = $(this).next().val();
	 // console.log(numjian);
	  numjian--;
	  if(numjian<=1){
	  		numjian=1;
	  		$('.jian').css({
	  			'cursor':'not-allowed'
	  		});
	  }else{
	  	$('.jian').css({
	  			'cursor':'pointer'
	  		});
	  }
	  $(this).next().val(numjian);	
});


//求商品加单价
$(document).on('click','.tableinner .jia',function(){
 var numshop = parseInt($(this).parents('.productr').find('b').html());
 //console.log(numshop);
 var numprice = parseInt($(this).prev().val());
 //console.log(numprice);
  var shopzong = numshop*numprice;
  //console.log(shopzong);
  	$(this).parents('.productr').find('.danprice').html(shopzong);
  	 zongliangjia();
  	  	});
//求商品减单价
$(document).on('click','.tableinner .jian',function(){
 var numshop = parseInt($(this).parents('.productr').find('b').html());
 console.log(numshop);
 var numprice = parseInt($(this).next().val());
 console.log(numprice);
  var shopzong = numshop*numprice;
  //console.log(shopzong);
  	$(this).parents('.productr').find('.danprice').html(shopzong);
  	//var a = $('.danprice');  	
  /*	var a = $each($('.shopzong'),function(
  			console.log('adf');
  		));*/
  	zongliangjia();
 	});

	//总价增加函数
	
		function zongliangjian(){
				 var totalPrice = 0;
		 $('.danprice').each(function(){
			 var strPrice =parseInt($(this).html());
				//console.log(strPrice);
				//totalPrice += strPrice;
				//var price = strPrice.splice(1);
			//	console.log(strPrice);
				totalPrice+=strPrice;
			
				// totalPrice.slice(1);
				//	console.log(totalPrice);
					$('.zongjiaab').html(totalPrice);
					});

		}
		//给所有的input标签绑定单机事件
		$(document).on('click','.productl input',function(){
				zongliangjia();

		})
			//判断商品是否被选中
		 zongliangjia();
		 		function zongliangjia(){
		 		
	  			 var totalPrice = 0;
		 			$('.danprice').each(function(){

		 	if($(this).parents('.tableinner').find('.productl input').prop('checked')){

			 			var strPrice =parseInt($(this).html());
							//console.log(strPrice);
							//totalPrice += strPrice;
							//var price = strPrice.splice(1);
							//	console.log(strPrice);
									totalPrice+=strPrice;
						
									// totalPrice.slice(1);
									//	console.log(totalPrice);
									$('.zongjiaab').html(totalPrice);

					//var abc = 	$(this).parents('.tableinner').find('.productl input').prop('checked');
		

		 			/*	var abcd = $(':checkbox').prop('checked');*/
		 				//console.log(abc);
		 				}else{
		 					$('.zongjiaab').html(totalPrice);
		 				}
			
					});
	
	 }

	
	//入口函数结尾标记
});
