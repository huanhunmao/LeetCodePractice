// 222. 完全二叉树的节点个数

// 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

// 完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。
// 若最底层为第 h 层，则该层包含 1~ 2h 个节点。


// 示例 1：


// 输入：root = [1,2,3,4,5,6]
// 输出：6

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(!root) return 0 

    // 计算左子树和右子树的高度
    const leftHeight = getHeight(root.left)
    const rightHeight = getHeight(root.right)

    // 如果左右子树高度相等，说明左子树是满二叉树，直接计算左子树的节点数，然后递归计算右子树的节点数
    if(leftHeight === rightHeight) {
        return Math.pow(2,leftHeight) + countNodes(root.right)

    }else{
    // 如果左右子树高度不相等，说明右子树是满二叉树，直接计算右子树的节点数，然后递归计算左子树的节点数
    return Math.pow(2,rightHeight) + countNodes(root.left)
    }
}

function getHeight(root){
    let height = 0
    while(root){
        height ++
        root = root.left
    }

    return height
}