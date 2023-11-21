// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

// 字母和数字都属于字母数字字符。

// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

 

// 示例 1：

// 输入: s = "A man, a plan, a canal: Panama"
// 输出：true
// 解释："amanaplanacanalpanama" 是回文串。

/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     // 匹配 并替换数字字母项 -> 并转为小写 
//     const cleanString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

//     return cleanString === cleanString.split('').reverse().join('')
// };


var isPalindrome = function(s) {
    let cleanString = ''

    for(let i = 0; i < s.length; i++) {
        if((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9')){
            cleanString += s[i].toLocaleLowerCase()
        }
    }

    return cleanString === cleanString.split('').reverse().join('')
}

console.log(
    isPalindrome("A man, a plan, a canal: Panama") // true
);
