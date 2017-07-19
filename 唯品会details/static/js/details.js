/*放大镜*/
var move = document.getElementById('move');
	var show = document.getElementById('zoomPad');
	var bigImg = document.getElementById('bigImg');
	var list = document.getElementById('J-sImg-wrap');
	var smallImg = document.getElementById('smallImg');
	var bshow = document.getElementById('zoomup');
	show.onmouseover = function(){
		move.style.display = 'block';
		bshow.style.display = 'block';
	}

	//             鼠标移出元素隐藏
	show.onmouseout = function(){
		move.style.display = 'none';
		bshow.style.display = 'none';
	}
	show.onmousemove = function(e){
		var newLeft = e.pageX - show.offsetLeft - move.offsetWidth/2;
		var newTop = e.pageY - show.offsetTop-move.offsetHeight/2;

		if(newLeft>=show.offsetWidth-move.offsetWidth-1){
			newLeft = show.offsetWidth-move.offsetWidth-1;
		}
		if(newLeft<=0){
			newLeft =0;
		}
		if(newTop >=show.offsetHeight-move.offsetHeight-1)
		{
			newTop = show.offsetHeight-move.offsetHeight-1;
		}
		if(newTop<=0){
			newTop = 0;
		}
		move.style.left = newLeft+'px';
		move.style.top = newTop+'px';

		var newBigLeft = bigImg.offsetWidth*newLeft/show.offsetWidth;
		var newBigTop = bigImg.offsetHeight*newTop/show.offsetHeight;

		bigImg.style.left= -newBigLeft+'px';
		bigImg.style.top = -newBigTop+'px';

	}
	var lis = list.children[0].children;
	//console.log(lis);
	for(var i =0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			bigImg.src = this.children[0].src;
			smallImg.src = this.children[0].src;
		
		}
	}
	/*放大镜结束*/
/*	底部选项卡*/
 var aucon = document.getElementById('au-con');
 var ilitem = document.getElementsByClassName('il-item ');
 console.log(ilitem);
 var xianshi = aucon.children;
 console.log(xianshi);
 

/* for(var i = 0;i<ilitem.lenght;i++){
 	//ilitem[i].index=i;
	ilitem[i].onmouseover = function(){
			xian[k].removeAttribute('class');
		 k++;

			xian[k].attribute('class','showpicc');
		}
	}
*/
	for(var i=0;i<ilitem.length;i++)
	{	//把当前的i赋值给当前btn属性index的值
		ilitem[i].index=i;
		//每个butn的点击事件
		ilitem[i].onmouseover=function ()
		{		
			for(var j=0;j<xianshi.length;j++)
			{	//移处当前的类名改掉div的样式为隐藏
				xianshi[j].removeAttribute('class');
			}
			//当前的建立类名
			//this.className='active';
			//alert(this.index);
			//把当前的元素显示方式改为显示
			xianshi[this.index].setAttribute('class','showpicc');
		}
	}