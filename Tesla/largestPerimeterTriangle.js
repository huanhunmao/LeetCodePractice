// 计算最大 三角形周长
// Largest Perimeter Triangle: 

// 概述：给定一个整数数组 A，您必须使用其中任意三个整数形成一个周长最大的三角形。
// Overview: Given an array A of integers, you must form a triangle with the maximum possible perimeter using any three of these integers.
// 方法：对数组进行排序并迭代，找到可以形成有效三角形的最大三边
// Approach: Sort the array and iterate through it to find the largest three sides that can form a valid triangle.


// [ 2,3,6,7,8,9,10]

function largestPerimeter (arr) {
    arr.sort((a,b) => b - a) // 从大到小
    for(let i = 0; i < arr.length - 2; i++) {
        if(arr[i] < arr[i + 1] + arr[i + 2]){
            return arr[i] + arr[i+1] + arr[i+2]
        }
    }
    return 0
}

// test 
const arr = [ 2,3,6,10,8,7,4]
console.log(largestPerimeter(arr)); // 25  [7,8,10]