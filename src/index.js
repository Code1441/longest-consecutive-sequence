module.exports = function longestConsecutiveLength(array) {
    if (array.length == 0) return 0;
    array.sort(function (a, b) {
        return a-b;
    });

    var currCount =1; result = [];
    for(var i = 0; i < array.length; i++){
        if(array[i]==array[i+1]) continue;
        if(array[i]+1==array[i+1]) currCount++;
        else {
            result.push(currCount);
            currCount=1;
        }

    }
    return Math.max.apply(null,result);
}
