function Mvvm(options = {}){
	this.$options = options;
	let data = this._data = this.$options.data;

	// 数据劫持
	observe(data);  

	for(let key in data){
		Object.defineProperty(this, key, {
			configurable: true,
			get(){
				return this._data[key];
			},
			set(newValue){
				this._data[key] = newValue;
			}
		})
	}  

	//编译
	new Compile(options.el, this);
}

function Compile(el, vm){
	vm.$el = document.querySelector(el);

	let fragment = document.createDocumentFragment();

	while( child = vm.$el.firstChild){
		fragment.appendChild(child);
	}

	function replace(frag){
		Array.from(frag.childNodes).forEach((node) => { 
			let txt = node.nodeValue;
			let reg = /\{\{(.*)\}\}/;   
 

			if(node.nodeType === 3 && reg.test(txt)){  
				let arry = RegExp.$1.split(".");
				let val = vm;
				arry.forEach( key => {
					val = val[key.trim()];
				});

				node.nodeValue = txt.replace(reg, val);


				new Watcher(vm, RegExp.$1, newVal => {
					node.nodeValue = txt.replace(reg, newVal);
				})


			}

			if(node.childNodes && node.childNodes.length){
				replace(node);
			}

		}) ;
	} 
	replace(fragment);
	vm.$el.appendChild(fragment);
}


function Observe(data){
	let dep = new Dep();
	for(let key in data){ 
		let value = data[key];
		observe(value); 
		Object.defineProperty(data, key, {
			configurable: true,
			get(){
				if(Dep.target){ 
					dep.addSub(Dep.target); 
				} 
				return value;
			},
			set(newValue){
 				if(value === newValue) return;
 				value = newValue;
 				observe(value); 
 				dep.notify();
			}
		})

	}
}

function observe(data){

	if(!data || typeof data !== 'object') return;
	return new Observe(data);
}

//发布订阅
function Dep(){
	this.subs = [];
}

Dep.prototype = {
	addSub(sub){
		this.subs.push(sub);
	},
	notify(){ 
		this.subs.forEach(sub => sub.update());
	}
}

function Watcher(vm, exp, fn){
	this.vm = vm;
	this.exp = exp;
	this.fn = fn; 

	Dep.target = this;
	let arr = exp.split(".");
	let val = this.vm;
	arr.forEach(key => {
	    val = val[key.trim()];  
	}); 
	Dep.target = null;
}

Watcher.prototype.update = function(){
	let arr = this.exp.split('.');
	let val = this.vm;
	arr.forEach(key => {
	    val = val[key.trim()];  
	});
	this.fn(val); 
}
 