# linked-list-research

## wiki

In computer science, a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration.


Linked lists are among the simplest and most common data structures. They can be used to implement several other common abstract data types, including lists, stacks, queues, associative arrays

The principal benefit of a linked list over a conventional array is that the list elements can be easily inserted or removed without reallocation or reorganization of the entire structure because the data items need not be stored contiguously in memory or on disk, while restructuring an array at run-time is a much more expensive operation.

On the other hand, dynamic arrays (as well as fixed-size array data structures) allow constant-time random access, while linked lists allow only sequential access to elements. 

types of linked lists: 
2.1	Singly linked list
2.2	Doubly linked list
2.3	Multiply linked list
2.4	Circular linked list


## cracking the code

nothing really. Just some code on implementing a linked list, and code to delete a node.

## pg guide to comSci

A linked list is a data structure where every element contains both data and a pointer to the next element in the list (and, if it is a doubly-linked list, to the previous element). A pointer to a linked list is simply a pointer to the first element, or head, of the list; as the elements may be scattered anywhere in the allocated memory, finding a specified element requires starting at the head and walking through the list. 

In many ways a linked list is the complement of an array. Where the strength of an array is fast access to any item (given its key), finding an element of the list requires walking through the links until the desired element is found, in worst case O(n) time. On the other hand, while an array is fixed in size, because the elements of a linked list can be
anywhere in memory, it can grow arbitrarily until the available memory is exhausted. Additionally, while insertions and deletions are very expensive in an array, they can be done in constant time in a linked list if we have a pointer to the previous node.

## 83 Data structs + algorithms
“Our second implementation of lists, singly-linked cells, uses pointers to link successive list elements. This implementation frees us from using contiguous memory for storing a list and hence from shifting elements to make room for new elements or to close up gaps created by deleted elements. However, one price we pay is extra space for pointers.”

“The array implementation requires us to specify the maximum size of a list at compile time. If we cannot put a bound on the length to which the list will grow, we should probably choose a pointer-based implementation.
Certain operations take longer in one implementation than the other. For example, INSERT and DELETE take a constant number of steps for a linked list, but require time proportional to the number of following elements when the array implementation is used. Conversely, executing PREVIOUS and END require constant time with the array implementation, but time proportional to the length of the list if pointers are used.
If a program calls for insertions or deletions that affect the element at the position denoted by some position variable, and the value of that variable will be used later on, then the pointer representation cannot be used as we have described it here. As a general principle, pointers should be used with great care and restraint.
The array implementation may waste space, since it uses the maximum amount of space independent of the number of elements actually on the list at any time. The pointer implementation uses only as much space as is[…]”

## Wirth 

Not much noteworthy - interesting that the fastest way to add to a list is to just add the new item as the new head, instead of runniing all the way to the end of the list. 




