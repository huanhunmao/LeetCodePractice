// 202. 快乐数
// 简单
// 1.5K
// 相关企业
// 编写一个算法来判断一个数 n 是不是快乐数。

// 「快乐数」 定义为：

// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果这个过程 结果为 1，那么这个数就是快乐数。
// 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

// 示例 1：

// 输入：n = 19
// 输出：true
// 解释：
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// 示例 2：

// 输入：n = 2
// 输出：false

var isHappy = function(n) {
    const seen  = new Set();

    // 使用一个哈希集（或类似结构）来存储已经出现过的数字，以便检测无限循环。
    while(n !== 1 && !seen.has(n)) {
        seen.add(n)
        n = sumOfSquares(n)
    }

    return n === 1

    function sumOfSquares(num){
        return String(num)
        .split('')
        // 做累和
        .reduce((sum, digit) => sum + digit * digit , 0)
    }
};

// 示例测试
console.log(isHappy(19)); // 应该返回 true
console.log(isHappy(2));  // 应该返回 false