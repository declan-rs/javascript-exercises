const removeFromArray = function(arr, ...nums) {
    for(let i = 0; i < nums.length; i++) {
        let toRemove = nums[i];
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] === toRemove) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
