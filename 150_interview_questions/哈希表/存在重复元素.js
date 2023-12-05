// 219. 存在重复元素 II
// 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。
// 如果存在，返回 true ；否则，返回 false 。

// 示例 1：

// 输入：nums = [1,2,3,1], k = 3
// 输出：true

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 首先创建一个 Map 对象来存储每个元素及其最近出现的索引。然后，它遍历数组 nums。对于每个元素，如果它已存在于 map 中，并且当前索引与存储的索引之差小于或等于 k，则返回 true。
// 如果不满足条件，它会更新 map 中该元素的索引。如果遍历完成后仍未找到满足条件的元素对，则返回 false。
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            const prevIndex = map.get(nums[i]);
            // console.log(i - prevIndex); // 3
            if(i - prevIndex <= k){
                return true 
            }
        }
        map.set(nums[i],i)
        // console.log('map',map);
        // map Map(1) { 1 => 0 }
        // map Map(2) { 1 => 0, 2 => 1 }
        // map Map(3) { 1 => 0, 2 => 1, 3 => 2 }
    }

    return false
};


// test
const nums = [1,2,3,1], k = 3
console.log(containsNearbyDuplicate(nums,k));
