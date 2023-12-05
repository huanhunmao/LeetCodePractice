// 290. 单词规律
// 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。

 

// 示例1:

// 输入: pattern = "abba", s = "dog cat cat dog"
// 输出: true

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ')

    if(pattern.length !== words.length) return false

    const patternMap = new Map()
    const wordMap = new Map()

    for(let i = 0; i < pattern.length; i++) {
        // 获取当前字符和对应的单词
        const char = pattern[i]
        const word = words[i]

        // 检查字符和单词的映射关系。如果 patternMap 中没有当前字符的映射关系，就建立映射；如果已经有映射关系，就检查是否和当前单词相符，不相符则返回 false。
        if(!patternMap.has(char)){
            patternMap.set(char, word)
        }else{
            if(patternMap.get(char) !== word){
                return false
            } 
        }

        // 检查单词和字符的映射关系。同样的逻辑，如果 wordMap 中没有当前单词的映射关系，就建立映射；如果已经有映射关系，就检查是否和当前字符相符，不相符则返回 false。
        if(!wordMap.has(word)){
            wordMap.set(word,char)
        }else{
            if(wordMap.get(word) !== char){
                return false
            }
        }
        // console.log('patternMap',patternMap); // patternMap Map(2) { 'a' => 'dog', 'b' => 'cat' }
        // console.log('wordMap',wordMap);      // wordMap Map(2) { 'dog' => 'a', 'cat' => 'b' }
    }

    return true
};


// 示例
const pattern = "abba";
const s = "dog cat cat dog";
const result = wordPattern(pattern, s);
console.log(result); // 输出: true