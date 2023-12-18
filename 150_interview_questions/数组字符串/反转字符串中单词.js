// 151. 反转字符串中的单词

// 给你一个字符串 s ，请你反转字符串中 单词 的顺序。

// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

// 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

// 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

 

// 示例 1：

// 输入：s = "the sky is blue"
// 输出："blue is sky the"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 移除字符串首尾的空格
    s = s.trim()

    // 关键 用正则表达式按空格分割字符串成数组
    let words = s.split(/\s+/)

    // 过滤掉数组中的空字符串
    words = words.filter(word => word !== '')

    // 反转数组并将其连接成一个新的字符串
    const reverseString = words.reverse().join(' ')

    return reverseString    
};

// 示例
var input = "the sky is blue";
var output = reverseWords(input);
console.log(output);  // 输出："blue is sky the"