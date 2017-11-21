(function($){
	//时间戳
	function  timestampthrottle(func, wait){
		var starttime = Date.now();
		return function(){
			var nowtime=Date.now();
			if(nowtime - starttime > wait){
				func.apply(this,arguments);
				starttime = nowtime;
			}
		}
	}
	//计时器
	function timesoutthrottle(func, wait){
		var timeout;
		return function(){
			var context = this, args = arguments;
			if(!timeout){
				timeout = setTimeout(function(){
					timeout = null;
					//函数放在此处执行，和放在外面(2)执行区别是这里在刚进入时会延迟一个wait执行
					//并且在停止触发wait时间后会再触发一次
					func.apply(context,args);
				},wait);
				//2
				//func.apply(context,args);
			}
		}
	}

	//升级版：兼顾进入时触发处理事件，且在停止触发一个wait时间后再触发处理事件
	function throttle(func, wait){
		var timeout,isFirst = true;
		return function(){
			var context = this, args = arguments;
			if(!timeout){
				timeout = setTimeout(function(){
					timeout = null; 
					if(!isFirst){
						func.apply(context,args);
					}
				});
				if(isFirst){
					func.apply(context,args);
				}
			}
		}
	}



	$.throttle =  {
		timestampthrottle,
		timesoutthrottle,
		throttle
	};
})(window)