# Trees Research Notes

## Wiki
a tree is a widely used abstract data type that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. 


A balanced binary tree is a binary tree structure in which the left and right subtrees of every node differ in height by no more than 1.[22] One may also consider binary trees where no leaf is much farther away from the root than any other leaf. (Different balancing schemes allow different definitions of "much farther".[23])

A degenerate (or pathological) tree is where each parent node has only one associated child node.[24] This means that the tree will behave like a linked list data structure.


## Cracking the code

When given a binary tree question, many candidates assume that the interviewer means “binary search tree”, when the interviewer might only mean“binary tree” So, listen carefully for that word “search ” If you don’t hear it, the interviewer may just mean a binary tree with no particular ordering on the nodes When given a binary tree question, many candidates assume that the interviewer means “binary search tree”, when the interviewer might only mean“binary tree” So, listen carefully for that word “search ” If you don’t hear it, the interviewer may just mean a binary tree with no particular ordering on the nodes 

» In-Order: Traverse left node, current node, then right [usually used for binary search trees]
» Pre-Order: Traverse current node, then left node, then right node
» Post-Order: Traverse left node, then right node, then current node
» Insert Node: On a binary search tree, we insert a value v, by comparing it to the root If v > root, we go right, and else we go left We do this until we hit an empty spot in the tree

## DS for Programmers
A binary search tree (BST) is a rooted binary tree48 defined recursively as follows: the key of the root is greater than or equal to the key of its left child and less than or equal to the key of its right child (if any), and this is also true for the subtree rooted at every other node.

A binary search tree (BST) is a rooted binary tree48 defined recursively as follows: the key of the root is greater than or equal to the key of its left child and less than or equal to the key of its right child (if any), and this is also true for the subtree rooted at every other node.

In order to ensure that operations on the BST take O(lg n) time rather than O(n) time, we must constrain the height of the tree. When all of the keys are known in advance, we can construct a balanced tree (one where the tree has the minimum possible height). In practice the elements of the tree often change over time, so we allow the depth to be some amount greater than the minimum possible, while still being Θ(lg n).
A self-balancing binary search tree is a BST that automatically keeps its height small (compared to the number of levels required) regardless of any additions or
deletions. Self-balancing trees include red-black trees52, splay trees53, and treaps.In order to ensure that operations on the BST take O(lg n) time rather than O(n) time, we must constrain the height of the tree. When all of the keys are known in advance, we can construct a balanced tree (one where the tree has the minimum possible height). In practice the elements of the tree often change over time, so we allow the depth to be some amount greater than the minimum possible, while still being Θ(lg n).
A self-balancing binary search tree is a BST that automatically keeps its height small (compared to the number of levels required) regardless of any additions or
deletions. Self-balancing trees include red-black trees52, splay trees53, and treaps.


## 82 DS & algorithms
“binary tree, which is either an empty tree, or a tree in which every node has either no children, a left child, a right child, or both a left and a right child. The fact that each child in a binary tree is designated as a left child or as a right child makes a binary tree different from the ordered, oriented tree ”



## Wirth