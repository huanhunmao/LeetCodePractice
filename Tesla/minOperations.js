// 生成交替二进制字符串的最小更改 Minimum Changes To Make Alternating Binary String

// 给你一个仅由字符 '0' 和 '1' 组成的字符串 s 。一步操作中，你可以将任一 '0' 变成 '1' ，或者将 '1' 变成 '0' 。
// Overview: Given a binary string, you need to make the minimum number of changes to make the string alternate between '0' and '1'.
// 计算两种情况所需的更改数量（从“0”或“1”开始），然后选择最小值
// Approach: Count the number of changes needed for two scenarios—starting with '0' or '1', and choose the minimum.

function minOperations(s){
    let count1 = 0, count2 = 0;
    // 字符串中偶数索引处的字符为 '0'，奇数索引处的字符为 '1'。
    // 字符串中偶数索引处的字符为 '1'，奇数索引处的字符为 '0'。
    for (let i = 0; i < s.length; i++){
        // 如果 i % 2 的结果与 parseInt(s[i]) 的结果相等，意味着当前字符符合模式 1（偶数索引处为 '0'，奇数索引处为 '1'），则 count1 增加 1。否则，count2 增加 1，意味着当前字符符合模式 2。
        if(i % 2 == parseInt(s[i])) count1 ++
        else count2 ++ 
    }
    
    return Math.min(count1, count2);
}

// test 
// 输入：s = "1111"
// 输出：2
// 解释：需要 2 步操作得到 "0101" 或 "1010" 。
console.log(minOperations("1111")); // 2
console.log(minOperations("10"));  // 0 
console.log(minOperations("0100")); // 1

// 详细说明 
// 如果 s = '1111'，函数 minOperations 将如下处理：

// count1 和 count2 初始设为 0。

// 遍历字符串 s，它的长度是 4，所以循环将进行四次。

// 在每次迭代中，函数将检查当前索引 i 是偶数还是奇数，并将字符 '1' 转换为整数 1。

// 第一次迭代（i = 0）：由于 i % 2 == 0，我们期望在索引 0（偶数索引）处为 '0'。但实际上是 '1'，所以 count2 加 1（因为它不符合模式 1，但符合模式 2）。
// 第二次迭代（i = 1）：i % 2 == 1，我们期望在索引 1（奇数索引）处为 '1'。这符合预期，所以 count1 加 1（因为它符合模式 1）。
// 第三次迭代（i = 2）：类似于第一次迭代，count2 加 1。
// 第四次迭代（i = 3）：类似于第二次迭代，count1 加 1。
// 循环结束后，count1 和 count2 的值如下：

// count1 = 2（奇数索引处的 '1' 符合模式 1）
// count2 = 2（偶数索引处的 '1' 符合模式 2）
// 最后，函数返回 count1 和 count2 中的较小值。在这个例子中，两者相等，都是 2。

// 因此，对于字符串 '1111'，函数 minOperations 将返回 2，表示最少需要更改两个字符来满足其中一种模式。