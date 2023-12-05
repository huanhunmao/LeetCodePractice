// 637. 二叉树的层平均值

// 给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受。

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    // 使用一个队列 queue 来层次遍历二叉树
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        // 在每一层的迭代中，我们计算该层的节点数 levelSize，并用一个变量 levelSum 来累积该层所有节点的值。然后，计算平均值并将其推入结果数组中。最后，返回结果数组
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            levelSum += node.val;

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        const levelAverage = levelSum / levelSize;
        result.push(parseFloat(levelAverage.toFixed(5)));
    }

    return result;
};


//

const root = [3,9,20,null,null,15,7]
console.log(averageOfLevels(root));