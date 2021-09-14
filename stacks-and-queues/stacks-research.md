# Stacks

## Wikipedia

In computer science, a stack is an abstract data type that serves as a collection of elements, with two main principal operations:

Push, which adds an element to the collection, and
Pop, which removes the most recently added element that was not yet removed.

The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out).
Additionally, a peek operation may give access to the top without modifying the stack.  This data structure makes it possible to implement a stack as a singly linked list and a pointer to the top element.


A stack can be easily implemented either through an array or a linked list. This data structure makes it possible to implement a stack as a singly linked list and a pointer to the top element. What identifies the data structure as a stack, in either case, is not the implementation but the interface: the user is only allowed to pop or push items onto the array or linked list, with few other helper operations.

Several of the C++ Standard Library container types have push_back and pop_back operations with LIFO semantics; additionally, the stack template class adapts existing containers to provide a restricted API with only push/pop operations. PHP has an SplStack class. Java's library contains a Stack class that is a specialization of Vector. 

## Cracking the code
nothing really

## Programmers Guide

Pushing an item on the stack will throw an exception if the stack has limited size and is currently full (overflow error), while popping an item will throw an exception if the stack is currently empty (underflow error).

While stacks do not allow for random access, they work well for many operations in computing that require maintaining a history, from the Undo operation to recursive function calls. In this case, the stack provides backtracking, where we need to revert to a prior state

## Wirth
nothing really

## 83 Aho DS&Algo

“The intuitive model of a stack is a pile of poker chips on a table, books on a floor, or dishes on a shelf, where it is only convenient to remove the top object on the pile or add a new one above the top. ”

“In general, however, to reverse a stack, we must pop each element and push it onto another stack; the characters can then be popped from the second stack and printed in the order they are popped.”



