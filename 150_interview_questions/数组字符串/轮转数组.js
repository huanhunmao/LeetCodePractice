// 189. 轮转数组

// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。


// 示例 1:

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length
    k = k % n 

    // 创建一个新的数组，将旋转后的元素放入对应位置
    const rotateArray = new Array(n)
    for(let i = 0; i < n; i ++){
        // 额外的数组 rotatedArray 来保存旋转后的结果
        rotateArray[(i + k) % n] = nums[i]
    }

    // 结果 复制回原数组
    for(let i = 0; i < n; i ++){
        nums[i] = rotateArray[i]
    }
};

// 示例
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
rotate(nums, k);
console.log(nums);  // 输出 [5, 6, 7, 1, 2, 3, 4]