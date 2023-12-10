// 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。

// 示例 1：

// 输入：n = 00000000000000000000000000001011
// 输出：3
// 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0 

    while(n !== 0){
        count += n & 1   // 使用位运算检查每一位是否为1 (n & 1)
        n >>>= 1 // 无符号右移，去掉最低位
    }

    return count
};

// 示例用法
const exampleInput = 0b00000000000000000000000000001011;
const result = hammingWeight(exampleInput);
console.log(result); // 输出: 3