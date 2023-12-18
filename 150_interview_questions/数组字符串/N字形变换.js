// 6. N 字形变换

// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
 

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 无法进行有效的变换
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // 创建一个长度为 numRows 的数组，每个元素初始化为空字符串，用于存储变换后的每一行的字符
    const rows = Array.from({ length: numRows }, () => ''); // rows [ '', '', '' ]

    let currentRow = 0;
    let goingDown = false;

    for (let i = 0; i < s.length; i++) {
        // 根据 Z 字形的排列规则，逐个字符分配到相应的行。这里通过 rows[currentRow] += s[i]; 将当前字符添加到对应的行中
        rows[currentRow] += s[i];
        // 如果当前行为第一行或最后一行，则改变方向。通过 goingDown 变量来控制行的上下移动
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        // 构建新字符串：将每一行的字符连接起来形成新的字符串
        currentRow += goingDown ? 1 : -1;
    }

    // 将所有行连接起来作为最终的结果
    return rows.join('');
};

// 示例
const s = "PAYPALISHIRING";
const numRows = 3;
const result = convert(s, numRows);
console.log(result); // 输出："PAHNAPLSIIGYIR"