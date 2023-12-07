// 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

// 例如：

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// 示例 1：

// 输入：columnNumber = 1
// 输出："A"

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = "";
    while(columnNumber > 0){
        columnNumber -- 
        // 计算当前列编号对应的字母，并将其添加到 result 的前面
        // String.fromCharCode 将 ASCII 码转换为字符
        // (columnNumber % 26 + 65) 计算余数并加上 65，将其转换为大写字母的 ASCII 码
        result = String.fromCharCode(columnNumber % 26 + 65) + result 
        // Math.floor 来更新 columnNumber 为整除 26 的结果  进位是基于 26 进制的 A-Z 26个
        columnNumber = Math.floor(columnNumber / 26)
    }

    return result
};

// 示例
const columnNumber = 521;
const result = convertToTitle(columnNumber);
console.log(result);