const sumAll = function(i, j) {
    if(!Number.isInteger(i)||!Number.isInteger(j) || i < 0 || j < 0){
        return "ERROR";
    }
    sum = 0;
    small = 0;
    large = 0;
    if(j > i){
        small = i;
        large = j;
    } else{
        small = j;
        large = i;
    }
    while(small<=large){
        sum+=small;
        small++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
