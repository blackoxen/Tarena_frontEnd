//思路：
//1、封装TQObject对象，提供一个数组元素，以及若干自定义操做方法；
//2、封装选择器，并且返回TQObject对象；
//3、通过封装的$("#id|.className|element")来获取元素




//1、封装TQobject:
function TQObject(){
	this.data = [];
}

//2、通过原型添加自定义方法
TQObject.prototype ={
	
}












//2、封装选择器，并且返回TQObject对象；
//参数：selector
function $(selector){
	this.tqObject = new TQObject();
	
	var c = selector.substring(0,1);
	
	//封装id选择器：$("#id")  id是唯一的，只有一个
	if(c == "#"){
		var elem = document.getElementById(selector.substring(1,selector.length));  //要把第一个字符#过滤
		this.tqObject.data.push(elem);
	}
	
	//封装类选择器：$(".className")   一组对象
	else if(c=="."){
		//document.getElementsByClassName()有兼容问题,要判断浏览器是否支持
		var className = selector.substring(1);  //从选择器中截取className
		if(document.getElementsByClassName){
			var elems = document.getElementsByClassName(className);
			//this.tqObject.data.push(elems);  //不能这样
			this.tqObject.data = elems;
			//document.querySelectorAll(selector);  也是要考虑兼容
		}else{
			//document.getElementsByTagName('*')+正则表达式
			var elems = document.getElementsByTagName('*');  //取得所有的元素
			var reg = new RegExp("(^|\\s)"+className+"($|\\s)");
			//var arr = [];   //保存获取到的指定className的元素
			for(var i=0; i<elems.length ; i++){
				if(reg.test(elems[i].className)){    //匹配className
					this.tqObject.data.push(elems[i]);
				}
			}
		}	
	}
	
	//封装element选择器
	else{
		var elems = document.getElementsByTagName(selector);
		this.tqObject.data=elems;   //直接扔给this.tqObject.data,不需要循环遍历
	}
	
	return tqObject;   //返回TQObject对象
}



