// 69. x 的平方根
// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

// 示例 2：

// 输入：x = 8
// 输出：2
// 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x <= 1){
        return x
    }

    // 实现计算非负整数 x 的算术平方根，并返回整数部分，可以使用二分查找的方法
    let left = 1
    let right = x 

    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2)

        if(mid * mid === x){
            return mid
        }else if(mid * mid < x){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }

     // 最终， right 将会小于 left，取 right 作为整数部分
    return right
};

// 示例
console.log(mySqrt(4)); // 输出: 2
console.log(mySqrt(10)); // 输出: 2