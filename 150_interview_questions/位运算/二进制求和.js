// 67. 二进制求和
// 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。

// 示例 1：

// 输入:a = "11", b = "1"
// 输出："100"

// 示例 2：

// 输入：a = "1010", b = "1011"
// 输出："10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = [];
    let carry = 0;

    // 从右到左遍历两个二进制字符串
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
        const numA = i >= 0 ? parseInt(a[i]) : 0;
        const numB = j >= 0 ? parseInt(b[j]) : 0;

        const currentSum = numA + numB + carry;
        result.unshift(currentSum % 2); // 在数组最前面添加当前位的值
        carry = Math.floor(currentSum / 2);
    }

    return result.join(''); // 将数组转换为字符串
};

// 示例
console.log(addBinary("11", "1"));     // 输出："100"
console.log(addBinary("1010", "1011")); // 输出："10101"