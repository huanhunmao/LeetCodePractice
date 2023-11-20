// 接雨水
// Trapping Rain Water

// 概述：计算下雨后方块之间可以滞留多少水。
// Overview: Calculate how much water can be trapped between the blocks after raining.
// 方法：用两个指针或动态规划计算每个位置的截水量。
// Approach: Use two pointers or dynamic programming to calculate the trapped water at each position.

function trapRainWater(height){
    // 两个指针 指向数组开始 / 结束
    let left = 0, right = height.length - 1
    // 用来存储遍历过程中遇到的最大高度
    let leftMax = 0, rightMax = 0 
    let result = 0 

    while(left < right){
        // 处理左边的条形图
        if(height[left] < height[right]){
            // 如果 height[left] 大于或等于 leftMax，更新 leftMax。
            // 否则，计算 leftMax - height[left] 并加到 result 上，因为这部分差值代表了这个位置可以接的雨水量
            height[left] >= leftMax ? (leftMax = height[left]) :  result += (leftMax - height[left])
            left ++ 
        }else{
            height[right] >= rightMax ? (rightMax = height[right]) : result += (rightMax - height[right])
            right --
        }
    }

    return result
}





// test 
const height = [4,2,0,3,2,5]
console.log(trapRainWater(height));