/*class class_one{
    public myfun():any{
        return new class_two();

    }
}
class class_two{
    public myfun():String{
        return"welcome...";
    }
}
document.write(new class_one().myfun().myfun());



class class_one{
    private var_one:class_two;
    private var_two:class_three;
    private var_three:class_four;
    
constructor (arg1:class_two,arg2:class_three,arg3:class_four){

    this.var_one=arg1;
    this.var_two=arg2;
    this.var_three=arg3;
}
public myfun():any{
    document.write(this.var_one.myfun());
    document.write(this.var_two.myfun());
    document.write(this.var_three.myfun());
}
}
class class_two{
    public myfun():string{
    return"angular6";
}}
class class_three{
    public myfun():string{
        return"nodejs";
    }
}
class class_four{
    public myfun():string{
        return"mongodb";
    }
}
var obj:class_one=new class_one(new class_two().myfun,new class_three(),new class_four());
obj.myfun();*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return "I am from class one";
    };
    ;
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.fun_two = function () {
        return "I am from class two";
    };
    ;
    return class_two;
}(class_one));
;
var obj1 = new class_two();
document.write(obj1.fun_one() + "..." + obj1.fun_two());
/br>;
var obj2 = new class_one();
document.write(obj2.fun_one());
