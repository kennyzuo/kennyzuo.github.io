(function(global, factory){
	factory(global);
}(this, function(window){
	var Xixi = (function(){
		var xixi = {};

		function X(dom, selector){
			var i, len = dom ? dom.length : 0;
			for(i=0; i<len; i++){
				this[i] = dom[i];
			}
			this.length = len;
			this.selector = selector || '';
		}

		xixi.X = function(dom, selector){
			return new X(dom, selector);
		}

		xixi.init = function(selector){
			var dom;

			if(typeof selector === "string"){
				if(!selector) return xixi.X();
				selector = selector.trim();
				dom = xixi.qsa(document, selector);

			}else if($.isX(selector)){
				return selector;
			}else{
				return xixi.X();
			}
			return xixi.X(dom, selector);
		}

		xixi.qsa = function(element, selector){
			var isId = selector[0] === '#';
			return isId ? element.querySelector(selector) : element.querySelectorAll(selector);
		}


		var $ = function(selector){
			return xixi.init(selector);
		}

		$.isX = function(obj){ return obj instanceof xixi.X}

		

		$.fn = {
			constructor: xixi.X,
			length: 0,
			map: function(fn){
				var value, values = [], i, key, len = this.length >>> 0;

				if(len > 0){
					for(i = 0; i < len;  i++){
						value = fn(this[i], i);
						if(value != null) values.push(value);
					}
				}
				else{
					for(key in this){
						value = fn(this[key], key);
						if(value) values.push(value);
					}
				} 
				return values; 
			},
			first: function(){
				var el = this[0];
				return el || $(el);
			},
			last: function(){
				var el = this[this.length - 1];
				return el || $(el);
			},

			find: function(selector){
				/*
				 * 1. selector 字符串
				 */
				if(!selector) return $();
  				
  				selector = selector.trim();

  				return this.map(function(item){
  					return	xixi.qsa(item, selector)
  				}.bind(this));
			}
		}

		xixi.X.prototype = X.prototype = $.fn;
		$.xixi = xixi;
		return $;

	}());

	window.Xixi = Xixi;
	window.$ === undefined && (window.$ = Xixi); 
}));