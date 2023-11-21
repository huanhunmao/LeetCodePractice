// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

var removeElement = function(nums, val) {
    let i = 0 
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== val){
            // 要的是不一样的元素长度 
            nums[i] = nums[j]
            i ++
        }
    }

    return i
};


console.log(removeElement([2,3,3,3,4,5],3));
    
