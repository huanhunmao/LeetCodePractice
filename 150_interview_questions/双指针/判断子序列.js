// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 示例 1：

// 输入：s = "abc", t = "ahbgdc"
// 输出：true
// 示例 2：

// 输入：s = "axc", t = "ahbgdc"
// 输出：false

var isSubsequence = function(s, t) {
    let sIndex = 0 , tIndex = 0 

    while(sIndex < s.length && tIndex < t.length){
        // If characters match, move to the next character in s
        if(s[sIndex] === t[tIndex]){
            sIndex ++
        }
        // Always move to the next character in t
        tIndex ++
    }

    // Check if we've gone through the entire s string
    return sIndex === s.length
};

console.log(isSubsequence('abc',"ahbgdc"));
console.log(isSubsequence('axc',"ahbgdc"));