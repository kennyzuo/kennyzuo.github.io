(function(global){
	Function.prototype.applynew = function(thisArg,args){ 

		args = args || [];

		const capotalize = ([first,...rest]) =>{
			return first.toUpperCase() + rest.join('');
		};

		let objtype = capotalize(typeof thisArg);

		if(objtype !== 'Object' && objtype !=='Undefined' ){
			thisArg = eval('new ' + objtype + '('+ thisArg +')');
		}else{
			thisArg = thisArg || global;
		}

		var fn = Symbol('callback'); 

		thisArg[fn] = this;

		var returnValue = thisArg[fn](...args);

		delete thisArg[fn];

		return returnValue;
	}; 

	Function.prototype.bindnew = function(obj){
		var fn = this;
		return function(){
			return fn.applynew(obj,arguments);
		}
	};
})(window);


var name = 'global scope';

var obj1 = {
	name : 'xiaodaidai'
};

var obj2 = {
	name : 'xiaopangzi'
}

var $wrapper = document.querySelector('.wrapper');

function testApply(){  
	$wrapper.innerHTML = $wrapper.innerHTML + '\n'  + this +  this.name ;
}

function foo(name,age){
    console.log(name + age);
    console.log(this);
    console.log(this.toString()); 
    $wrapper.innerHTML = $wrapper.innerHTML + '\n'  + name + age +  this + this.toString() ;
    return name;
}



testApply.applynew();

var returnName = foo.applynew(123,['xiaodaidai',18]);

console.log(returnName);

testApply.applynew(obj1);

testApply.applynew(obj2);

function bindtest(){
	 $wrapper.innerHTML = $wrapper.innerHTML + '\n'  + this.name;
}
bindtest();
var bar = bindtest.bindnew(obj1);
bar();