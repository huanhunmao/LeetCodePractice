// 14. 最长公共前缀
// 简单
// 3K
// 相关企业
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

 

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。


/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//     if(strs.length === 0) return '' 

//      // 将第一个字符串作为基准
//     let prefix = strs[0]

//     // 遍历数组中的其他字符串
//     for(let i = 1; i < strs.length; i++) {
//         // 比较当前字符串与基准字符串的每个字符
//         let j = 0

//         while(j < prefix.length && prefix[j] === strs[i][j]){
//             j ++
//         }

//         console.log('prefix',prefix);
//         // 更新基准字符串为当前相同的前缀部分 截取为从索引 0 到索引 j 之间的部分，即截取下当前找到的公共前缀
//         prefix = prefix.slice(0,j)

//         // 如果最终前缀为空，则无需继续比较
//         if(prefix === ''){
//             break
//         }
//     }

//     return prefix
// };



var longestCommonPrefix = function(strs) {
    if(strs.length === '') return ''

    let prefix = strs[0]

    for(let i = 1; i < prefix.length; i ++){
        let j = 0

        while(j < prefix.length && prefix[j] === strs[i][j]){
            j ++
        }

        prefix = prefix.slice(0, j)

        if(prefix === ''){
            break
        }
    }

    return prefix
}

// 示例用法
const example1 = ["flower", "flow", "flight"];
const example2 = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(example1)); // 输出："fl"
console.log(longestCommonPrefix(example2)); // 输出：""