// 80. 删除有序数组中的重复项 II

// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 示例 1：

// 输入：nums = [1,1,1,2,2,3]
// 输出：5, nums = [1,1,2,2,3]
// 解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。 不需要考虑数组中超出新长度后面的元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 这种情况下无需进行重复项的处理，直接返回数组长度即可
    if(nums.length <= 2){
        return nums.length
    }

    let slow = 2 // 慢指针从第三个元素开始 前两个元素是可以保留的
    // 使用 for 循环遍历整个数组，从第三个元素开始（fast 初始化为2）
    for(let fast = 2; fast < nums.length; fast ++){
        if(nums[fast] !== nums[slow - 2]){
              // 复制当前元素到慢指针的位置
            nums[slow] = nums[fast]
            // 慢指针向前移动
            slow ++
        }
    }

    return slow
};

// 示例
let nums = [1, 1, 1, 2, 2, 3];
let length = removeDuplicates(nums);

console.log("删除重复项后的数组：", nums.slice(0, length)); 