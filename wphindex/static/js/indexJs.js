
/*	登陆注册模版*/
	var mb = document.getElementById('mengban');
	var login = document.getElementById('login');
	var btnLogin = document.getElementById('loginbtn');
	var close = document.getElementById('closebzuce');
	var zutitle = document.getElementById('frameTitle');
	/*显示登陆模块的函数*/
	function showLogin(){
		login.style.display='block';
		mb.style.display="block"
		// 设置宽度为当前可视区域的宽度的值
		var dW = document.documentElement.scrollWidth||document.body.scrollWidth;
		if(dW<=800){
			dW=800;
		}

		var dH= document.documentElement.scrollHeight||document.body.scrollHeight;
			// 给模版赋值宽度高度
			//console.log(dH);
			//console.log(dW);
		mb.style.width = dW+'px';
		mb.style.height = dH+'px';
		//console.log(mb.style.height);
		//console.log(mb.style.width);
			// 登录框的left和top的值
		var loginnLeft = (document.documentElement.clientWidth/2||document.body .clientWidth/2) - login.offsetWidth/2;
		/*console.log(loginnLeft);*/
		var loginnTop = (document.documentElement.clientHeight/2||document.body.clientHeight/2) - login.offsetHeight/2;
		// 赋值
		login.style.left = loginnLeft +'px';
		login.style.top = loginnTop +'px';
	
		
	}
	btnLogin.onclick = function(){
			showLogin();
	/*		return false;*//*取消默认事件*/
	}
// 监视窗口改变大小的事件
	window.onresize = function(){
		// console.log(login.style.display);

		// 判断登录框是否已经显示了
		if(login.style.display == 'block'){
			showLogin();
		}		
	}
	// 设置close关闭按钮的单击事件
	mb.onclick = close.onclick = function(){
		mb.style.display = 'none';
		login.style.display = 'none';
	}


	var offLeft;
	var offTop;

	var isDown = false;
	//设置鼠标拖动事件
	
	zutitle.onmousedown =function(e){
		offLeft = e.clientX - login.offsetLeft;
		offTop = e.clientY - login.offsetTop;
		isDown=true;
	}  
	window.onmousemove = function(e){
		if(!isDown){
			// 终止程序 
			return;
		}
		var newLeft = e.clientX-offLeft;
		var newTop = e.clientY- offTop;
	var cW = document.documentElement.clientWidth;
	var cH = document.documentElement.clientHeight;
	//四边吸附功能 
	if(newLeft>cW-login.offsetWidth-10){
		newLeft=cW-login.offsetWidth;
		}
	if(newLeft<10){
			newLeft=0;		
		}
	if(newTop>cH-login.offsetHeight-10){
		newTop=cH-login.offsetHeight;
		}  
		if(newTop<10){
			newTop=0;
		}
	login.style.left = newLeft + 'px';
	login.style.top = newTop + 'px';
	}
	/* zutitle.onmouseup = function(){ 
		 // 将标志设置为false 
		 isDown = false; 
	} */
	window.onmouseup = function(e){
		isDown = false;
	}
	zutitle.onmouseup=function(e){
		isDown = false;
	}
/*
登陆注册模版结束*/

/*广告浮动*/
//获取元素
var move = document.getElementById('guanggaopiao');
var close = document.getElementById('guangclose');
// 获取水平方向/垂直方向的速度
var stepX=1;
var stepY=1;
/*定时器*/
setInterval(function(){
	var cW = document.documentElement.clientWidth;
	var cH = document.documentElement.clientHeight;
	var movLeft = move.offsetLeft+stepX;
	var movTop = move.offsetTop+stepY;
	if(movLeft>=cW-move.offsetWidth){
		movLeft = cW-move.offsetWidth;
		stepX*=-1;
	}
	if(movLeft<=0){
		movLeft=0;
		stepX*-1;
		stepX*=-1;
	}
	if(movTop>=cH-move.offsetHeight){
		movTop=cH-move.offsetHeight;
		stepY*=-1;
	}
	if(movTop<=0){
		movTop=0;
		stepY*=-1;
	}
	move.style.left= movLeft+'px';
	move.style.top = movTop + 'px';
},20)
close.onclick = function(){
	this.parentElement.style.display='none';
}
/*广告浮动结束*/

/*轮播图*/
/*获取元素*/
var lshow = document.getElementById('lunbo');
var lbtn = document.getElementById('Lbtn');
var rbtn = document.getElementById('Rbtn');
var lis = lshow.children[0].children[0].children;
var lunblist = document.getElementById('lunbolist');
var lists = lunblist.children[0].children;
//console.log(lists);
// 定义索引index，标志要显示的图片的索引
	var index = 0;
	// 定义变量run，就是定时器是否运行的标志
	var run;
//定义轮显show
function autoRuns(){
		if(run){
			// 终止程序
			return;
		}
	run = setInterval(function(){
		lis[index].removeAttribute('class');
		lists[index].removeAttribute('class');
		index++;

		if(index==lis.length){
			index = 0;
		}

		lis[index].setAttribute('class','lbtshow');
		lists[index].setAttribute('class','luobocolor');
	},1000);

}
autoRuns();
lshow.onmouseenter = function(e){
		// 停止
		clearInterval(run);
		// console.log(run);
		// 将标志run重新赋值为空
		run = undefined;

		// 左右箭头显示
		lbtn.style.display = 'block';
		rbtn.style.display = 'block';
		return false;

	}
	lshow.onmouseleave = function(e){
		autoRuns();
		lbtn.style.display = 'none';
		rbtn.style.display = 'none';
		return false;
	}


	lbtn.onmouseover = function(){
		// console.log(1111);
		this.style.background = 'rgba(0,0,0,0.6)';
	}
	lbtn.onmouseout = function(){
		this.style.background = 'rgba(0,0,0,0.1)';
		//console.log(222);
	}

	// 右箭头
	rbtn.onmouseover = function(){
		// console.log(1111);
		this.style.background = 'rgba(0,0,0,0.6)';
		 console.log(3333);
	}
	rbtn.onmouseout = function(){
		this.style.background = 'rgba(0,0,0,0.1)';
		 console.log(444);
	}
lbtn.onclick = function(){
		// 对于轮播图自身

		// 当前元素隐藏
		lis[index].removeAttribute('class');
		lists[index].removeAttribute('class');
		// 当前的索引-1
		index--;

		// 最小值临界判定
		if(index<0){
			// 赋值为最大值 = 长度 - 1
			index = lis.length - 1;
		}
		// 上一张显示
		lis[index].setAttribute('class','lbtshow');
		lists[index].setAttribute('class','luobocolor');
	}
	rbtn.onclick = function(){
		// 当前隐藏	
		lis[index].removeAttribute('class');
		lists[index].removeAttribute('class');
		// 索引++
		index++;

		// 最大值
		if(index==lis.length){
			// 重新赋值为0
			index = 0;
		}

		// 下一张显示
		lis[index].setAttribute('class','lbtshow');
		lists[index].setAttribute('class','luobocolor');
	}
	for(var i=0;i<lists.length;i++){
		// 手动设置元素的标记
		lists[i].setAttribute('data-index',i);			

		// 移入事件
		lists[i].onmouseover = function(){
			// 将之前显示的元素移除class
			lis[index].removeAttribute('class');
			lists[index].removeAttribute('class');

			// 知道我是第几张
			// 获取该元素身上的data-index的值
			// console.log(this.getAttribute('data-index'));
			index = this.getAttribute('data-index');

			// 当前图片、圆点显示
			lis[index].setAttribute('class','lbtshow');
			lists[index].setAttribute('class','luobocolor');
		}
	}
	/*导航栏吸顶*/
	var indexRankWrap = document.getElementById('main-nav');
	window.onscroll = function(){
		var sT = document.documentElement.scrollTop||document.body.scrollTop;
		 var randmatop =indexRankWrap.offsetTop;
		  //console.log(randmatop);
		//console.log(sT);
		if(sT>=800){
			indexRankWrap.style.top='0px';
			indexRankWrap.setAttribute('class','Mfiedxian');
			
		}else{

			indexRankWrap.style.top='-40px';
			/*indexRankWrap.style.transition = "top .3s ease-out"*/
		/*	indexRankWrap.setAttribute*/
				indexRankWrap.removeAttribute('class','Mfiedxian');

		}
	}
	/*右侧楼梯*/
	$(function(){
		var vpHeight = $(window).height();
		  var halfVpHeight = vpHeight/2;

		 	var floor1Top = $('#main-nav').offset().top;
	    var floor2Top = $('#shop-title').offset().top;
	    var floor3Top = $('#shop-sort-title').offset().top;
	    var floor4Top = $('.brand-item-on').offset().top;
	    var floor5Top = $('.brand-item-ona').offset().top;
	    var floor6Top = $('.J_proPic_wrap-on').offset().top;
	    var floor7Top = $('#index-bg-bttom').offset().top;
	    var floor8Top = $('#footer-link').offset().top;
	    var floor9Top = $('.head-inner').offset().top;

			var h = $('#index-nav-wrap').height();

	    function onScroll(){
	    	var st = $(this).scrollTop();
	    	console.log(floor1Top);
	    	var t1 = floor1Top - st;
	    	var t2 = floor2Top - st;
	    	var t3 = floor3Top - st;
	    	var t4 = floor4Top - st;
	    	var t5 = floor5Top - st;
	    	var t6 = floor6Top - st;
	    	var t7 = floor7Top - st;
	    	var t8 = floor8Top - st;
	    	var t9 = floor9Top - st;
        	console.log(t1);
        	console.log(halfVpHeight);
	    if(t1<=halfVpHeight){
	    		$('#index-nav-wrap').stop().fadeIn();
	    		$('#index-nav-wrap li').eq(0).addClass('indexnavbg') .siblings().removeClass('indexnavbg');
	    		//console.log(222);
	    		
	  	  	}else {
	  	  		$('#index-nav-wrap').stop().fadeOut();
	  	  		//console.log(1111);
	  	  	}
	  	  	/*if(t2<=halfVpHeight){
	  	  		$('#index-nav-wrap li').eq(1).addClass('indexnavbg').siblings().removeClass('indexnavbg');
	  	  		//console.log(222);
	  	  	}
	  	  	if(t3<=halfVpHeight){
	  	  		$('#index-nav-wrap li').eq(2).addClass('indexnavbg').siblings().removeClass('indexnavbg');
	  	  	}

	  	  	if(t4<=halfVpHeight){
	  	  		$('#index-nav-wrap li').eq(3).addClass('indexnavbg').siblings().removeClass('indexnavbg');
	  	  	}
	  	  	if(t5<=halfVpHeight){
	  	  		$('#index-nav-wrap li').eq(4).addClass('indexnavbg').siblings().removeClass('indexnavbg');
	  	  	}
	  	  	if(t6<=halfVpHeight){
	  	  		$('#index-nav-wrap li').eq(5).addClass('indexnavbg').siblings().removeClass('indexnavbg');
	  	  	}
	  	  	if(t7<=halfVpHeight){
	  	  		$('#index-nav-wrap li').eq(6).addClass('indexnavbg').siblings().removeClass('indexnavbg');
	  	  	}
	  	  	if(t8<=halfVpHeight){
	  	  		$('#index-nav-wrap li').eq(7).addClass('indexnavbg').siblings().removeClass('indexnavbg');
	  	  	}
	  	  	if(t9<=halfVpHeight){
	  	  		$('#index-nav-wrap li').eq(8).addClass('indexnavbg').siblings().removeClass('indexnavbg');
	  	  	}*/

	    }


	   $(window).scroll(onScroll);

	    $('#index-nav-wrap li').click(function(event){
				$(window).off('scroll');
	
					$(this).addClass('indexnavbg').siblings().removeClass('indexnavbg');
				$(this).css({
				'background':'#F10180',
				'borderRadius':'3px'

						}).siblings().css({'background':'#fff'});
					if ($(this).index() ===0) {
					// 自定义动画，实现自动滚屏
					$('html,body').stop().animate({
						'scrollTop':floor1Top
					},800,function() {
						// 滚屏结束后，重新把滚动事件响应函数绑定
					 $(window).scroll(onScroll);
						console.log(111);
					});
				}
				if ($(this).index() === 1) {
					$('html,body').stop().animate({
						'scrollTop':floor2Top
					},800,function() {
				 $(window).scroll(onScroll);
					});
				}
				if ($(this).index() ===2) {
					$('html,body').stop().animate({
						'scrollTop':floor3Top
					},800,function() {
						$(window).scroll(onScroll);
					});
				}
				if ($(this).index() ===3) {
					$('html,body').stop().animate({
						'scrollTop':floor4Top
					},800,function() {
						$(window).scroll(onScroll);
					});
				}
				if ($(this).index() === 4) {
					$('html,body').stop().animate({
						'scrollTop':floor5Top
					},800,function() {
						$(window).scroll(onScroll);
					});
				}
				if ($(this).index() === 5) {
					$('html,body').stop().animate({
						'scrollTop':floor6Top
					},800,function() {
						$(window).scroll(onScroll);
					});
				}
				if ($(this).index() === 6) {
					$('html,body').stop().animate({
						'scrollTop':floor7Top
					},800,function() {
						$(window).scroll(onScroll);
					});
				}
			if ($(this).index() === 7) {
					$('html,body').stop().animate({
						'scrollTop':floor8Top
					},800,function() {
						$(window).scroll(onScroll);
					});
				}
				if ($(this).index() === 8) {
					$('html,body').stop().animate({
						'scrollTop':floor9Top
					},800,function() {
						$(window).scroll(onScroll);
					});
				}


	    });
	});
//账户登录
     window.onload = function() {
			// 第一步，实例化XMLHttpRequest对象
			var xhr = new XMLHttpRequest();
			// ----------------------------------------------------------------------
			// 第二步，绑定onreadystatechange事件响应函数，该函数用来接收服务器端响应回来
			// 的数据，并处理这些数据
			// 每当请求状态改变的时候，都会调用这个函数
			xhr.onreadystatechange = function() {
				// 每次调用函数时，都检查请求状态是否为4（收到完整响应）
				if (this.readyState === 4) {
					// 如果收到完整响应，那么就获取服务器发回来的数据，保存到data中
					var data = xhr.responseText;
					// 把数据放入文本框后面的段落中，展示给用户
					document.getElementById('fanhuzhi').innerHTML = data;
				}
			}
				//document.getElementById('user-name').value = 'data';
// --------------------------------------------------------------------------------
			// 当文本框对象触发键盘按键弹起事件时，就执行下面的函数
			document.getElementById('user-name').onkeyup = function() {
				// 为open方法准备url参数
				var url = '/ajax.php?' + this.name + '=' + this.value;
				// 第三步，调用open方法，为发出请求做好准备
				xhr.open('get',url,true);
				
				// 第四步，调用send方法，正式发出请求
				xhr.send(null);
			}
		}	