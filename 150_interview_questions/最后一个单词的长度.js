// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。 

// 输入：s = "Hello World"
// 输出：5
// 解释：最后一个单词是“World”，长度为5。

var lengthOfLastWord = function(s) {
    // 转到数组
    var words = s.trim().split(' ')

    return words.length > 0 ? words[words.length - 1].length : 0
};



console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));