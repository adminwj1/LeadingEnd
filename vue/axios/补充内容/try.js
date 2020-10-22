// try...catch 语句将能引发错误的代码放在try块中，并且对应一个相应，然后有异常被抛出
/*
    try语句包含了有一个或多个语句组成的try块，和至少一个catch子句或者一个finally子句的其中一个
    或者两个兼有，例如：
    1. try...catch
    2.try...finally
    3.try...catch...finally
*/

var a = 2;
// try里面的代码一定会执行
// 如果try代码块中的代码执行出现错误或异常，那么错误不再由系统处理，交给catch处理
try{
    console.log(a);
}catch(err){
    console.log(err);
}