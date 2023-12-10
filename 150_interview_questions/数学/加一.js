// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

 

// 示例 1：

// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const n = digits.length;

    // 从数组的最后一位开始遍历
    for (let i = n - 1; i >= 0; i--) {
        // 对当前位加一
        digits[i]++;

        // 如果当前位加一后变为 10，将当前位设为 0，进位到下一位
        if (digits[i] === 10) {
            digits[i] = 0;
        } else {
            // 如果当前位加一后不为 10，说明不需要进位，直接返回结果
            return digits;
        }
    }

    // 如果遍历完数组后，最高位仍然为 0，说明有进位，需要在数组最前面插入一个 1
    digits.unshift(1);

    return digits;
};

// test
const digits = [1,2,3]
console.log(plusOne(digits));