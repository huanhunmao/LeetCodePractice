// 383. 赎金信
// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

// 如果可以，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。


// 示例 1：

// 输入：ransomNote = "a", magazine = "b"
// 输出：false

// 示例 3：

// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true

var canConstruct = function(ransomNote, magazine) {
    const charCount = new Map()

    // 统计 magazine 中每个字符的出现次数
    for(const char of magazine){
        charCount.set(char, (charCount.get(char) || 0) + 1) //  检查每个字符在 magazine 中是否有足够的剩余次数
    }

    console.log('charCount1',charCount);

    // 检查 ransomNote 中的字符是否可以由 magazine 构成
    for(const char of ransomNote){
        if(!charCount.has(char) || charCount.get(char) === 0) return false

        charCount.set(char, charCount.get(char)-1) // 如果有足够的次数，则减少对应字符的剩余次数
    }
    console.log('charCount2',charCount);

    return true
};

// 示例测试
// console.log(canConstruct("a", "b"));      // 输出: false
console.log(canConstruct("aa", "aab"));   // 输出: true