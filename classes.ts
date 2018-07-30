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


class class_one{
    public fun_one():string{
        return"I am from class one";
    };
};
class class_two extends class_one{
    public fun_two():string{
        return"I am from class two";
    };
};
var obj1:class_two = new class_two();
document.write(obj1.fun_one()+"..."+obj1.fun_two());


var obj2:class_one=new class_one();
document.write(obj2.fun_one());









