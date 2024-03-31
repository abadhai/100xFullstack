function sumAll(startIndex, endIndex){

    var sum = 0;
    for (var i =startIndex ;i<=endIndex ;i++){
        sum +=i;
    }
    return sum;
}

var sumAll = sumAll(1,2)
console.log(sumAll)

console.log("********************Function inside Function **************");

function sum(index1,index2){
    return index1 +index2;
}
function mul(index1,index2){
    return index1 * index2;
}

function div(index1,index2){
    return index1/index2;
}

function sub(index1,index2){
    return index1-index2;
}

console.log("********************Arithmetic Function **************");
function doArithmetic(firstEl,secondEl,arithmericFn){

    return arithmericFn(firstEl,secondEl);
}

console.log("Sum =", doArithmetic(2,4,sum));
console.log("Mul = ",doArithmetic(2,4,mul));
console.log("Div = ",doArithmetic(8,4,div));
console.log("Sub = ",doArithmetic(10,4,sub));