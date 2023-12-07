// 给定两个字符串 s 和 t ，判断它们是否是同构的。

// 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

// 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。


// 示例 1:

// 输入：s = "egg", t = "add"
// 输出：true

// 示例 2：

// 输入：s = "foo", t = "bar"
// 输出：false
// 示例 3：

// 输入：s = "paper", t = "title"
// 输出：true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    const sToTMapping = new Map()
    const tToSMapping = new Map()

    for(let i = 0; i < s.length; i++) {
        const charS = s[i]
        const charT = t[i]

        if(sToTMapping.has(charS)) { // has 判断是键
            if(sToTMapping.get(charS) !== charT){ // get 得到的是值
                return false
            }
        }else{
            // 成对存储 存储后结果是这样的  { 'e' => 'a', 'g' => 'd' }
            sToTMapping.set(charS,charT)
            console.log('sToTMapping',sToTMapping);
        }

        if(tToSMapping.has(charT)) {
            if(tToSMapping.get(charT) !== charS){
                return false
            }
        }else{
            tToSMapping.set(charT,charS)
            console.log('tToSMapping',tToSMapping);
        }
    }

    return true
};


// 示例
console.log(isIsomorphic("egg", "add"));     // 输出：true
// console.log(isIsomorphic("foo", "bar"));     // 输出：false
// console.log(isIsomorphic("paper", "title")); // 输出：true