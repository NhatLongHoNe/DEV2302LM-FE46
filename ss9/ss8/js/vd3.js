
var arrNumber = [1,2,3,'3a',4,3];

function sumArr(arr){
    var sum = 0;
    for(var i = 0;i< arr.length;i++){
        sum+= arr[i];
    }
    return sum;
}
// 63a
console.log(sumArr(arrNumber));