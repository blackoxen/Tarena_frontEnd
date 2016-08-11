
//根据ID获取指定的元素
//function $(id){
//	return document.getElementById(id);
//}

//$("#id")
//参数：selector  
//封装id选择器：$("#id")  id是唯一的，只有一个
function $(selector){
	var c = selector.substring(0,1);
	
	//封装id选择器：$("#id")  id是唯一的，只有一个
	if(c == "#"){
		return document.getElementById(selector.substring(1,selector.length));  //要把第一个字符#过滤
	}
	
	//封装类选择器：$(".className")   一组对象
	else if(c=="."){
		//document.getElementsByClassName()有兼容问题,要判断浏览器是否支持
		var className = selector.substring(1);
		if(document.getElementsByClassName){
			return document.getElementsByClassName(className);
			//document.querySelectorAll(selector);  也是要考虑兼容
		}else{
			//document.getElementsByTagName('*')+正则表达式
			var reg = new RegExp("(^|\\s)"+className+"($|\\s)");
			var elems = document.getElementsByTagName('*');  //取得所有的元素
			var arr = [];   //保存获取到的指定className的元素
			for(var i=0; i<elems.length ; i++){
				if(reg.test(elems[i].className)){
					arr.push(elems[i]);
				}
			}
			return arr;
		}	
	}
	
	//封装element选择器
	else{
		return document.getElementsByTagName(selector);
	}
}



