//04_03

//let funcNoname = function () {
//    alert('함수_01');
//    alert('함수_02');
//}

//funcNoname();

//alert(typeof(funcNoname) + ' : ' + funcNoname);

//function funcName() {
//    alert('함수_01');
//    alert('함수_02');
//}

//alert(typeof(funcName) + ' : ' + funcName);

//04_04

//function f(x) {
//    return x * x;
//};

//alert(f(3))

//let fun = function() {
//    alert('함수호출');
//};

//function callTenTimes(callback_func){

//    for(let i=0; i<10; i++){
//        callback_func();
//    }
//}

//callTenTimes(fun)

let person = {
    name: '김정길',
    eat: function (food) {
        alert(this.name + '이' + food + '을/를 먹었습니다');
    }
};

person.eat('버거');