(function($){
	function debounce(func,wait,immediate){
		var timeout;
		var debounced = function (){
			var context = this,args=arguments;
			if(timeout) clearTimeout(timeout);
			if(immediate){
				/*
				**如果是立即执行，且没有执行过（timeout == null），则立即执行；
				**这里注意区别 timeout 为 null与 clearTimeout(timeout),
				**计时器被cleartimeout不代表赋值的变量为null ;  
				*/
				var callNow = !timeout;
				timeout = setTimeout(function() {
					timeout = null;
				}, wait);
				if(callNow) func.apply(context,args);
			}else{
				timeout = setTimeout(function() {
					func.apply(context,args);
				}, wait);
			}
		};

		//取消防抖
		debounced.cancel = function(){
			clearTimeout(timeout);
			timeout = null;
		};
		return debounced;
	} 
	$.debounce = debounce;
})(window)


