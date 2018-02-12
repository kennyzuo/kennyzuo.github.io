(function(global) {

    function capotalize(str) {
        var classArry = {};
        "Boolean Number String".split(" ").forEach(function(item) {
            classArry[item.toLowerCase()] = item;
        });
        return classArry[str];
    }

    Function.prototype.callnew = Function.prototype.callnew || function(context) {
        var contextClass = capotalize(typeof context);
        if (contextClass) {
            context = eval('new ' + contextClass + '(context)');
        } else {
            context = context || window;
        }

        var args = [],
            result;
        context._fn_ = context._fn_ || this;
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args.push('arguments[' + i + ']');
            }
            result = eval('context._fn_(' + args + ')');
        } else {
            result = context._fn_();
        }
        delete context._fn_;
        return result;
    }


    Function.prototype.applynew = Function.prototype.applynew || function(context, arry) {
        var contextClass = capotalize(typeof context);
        if (contextClass) {
            context = eval('new ' + contextClass + '(context)');
        } else {
            context = context || window;
        }
        var result, args = [];
        context._fn_ = context._fn_ || this;
        if (arry) {
            for (var i = 0; i < arry.length; i++) {
                args.push('arry[' + i + ']');
            }
            result = eval('context._fn_(' + args + ')');

        } else {
            result = context._fn_();
        }
        delete context._fn_;
        return result;
    }

    Function.prototype.bindnew = Function.prototype.bindnew || function(context) {
        var self = this;
        var args = Array.prototype.slice.call(arguments, 1);
        var bindFun = function() {
            var bindArgs = Array.prototype.slice.call(arguments);
            return self.apply(this instanceof bindFun ? this : context, args.concat(bindArgs));
        };

        function fNOP() {} 
        fNOP.prototype = this.prototype; 
        bindFun.prototype = new fNOP();

        //bindFun.prototype = Object(this.prototype);

        return bindFun;
    }

})(window);


var name = 'global scope';

var obj1 = {
    name: 'xiaodaidai'
};

var obj2 = {
    name: 'xiaopangzi'
}

var $wrapper = document.querySelector('.wrapper');

function testApply() {
    $wrapper.innerHTML = $wrapper.innerHTML + '\n' + this + this.name;
}

function foo(name, age) {
    console.log(name + age);
    console.log(this);
    console.log(this.toString());
    $wrapper.innerHTML = $wrapper.innerHTML + '\n' + name + age + this + this.toString();
    return name;
}



testApply.applynew();

var returnName = foo.applynew(123, ['xiaodaidai', 18]);

console.log(returnName);

testApply.applynew(obj1);

testApply.applynew(obj2);

function bindtest() {
    $wrapper.innerHTML = $wrapper.innerHTML + '\n' + this.name;
}
bindtest();
var bar = bindtest.bindnew(obj1);
bar();
