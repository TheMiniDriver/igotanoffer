## Stack and Queue Basics

### What are stacks and queues?

Stacks and queues are similar and complementary in many ways. Both are a sequenced collection of elements that are generally accessed one element at time, and are implemented using similar data structures. 

Stacks are Last in First Out (LIFO) constructs. Queues are the opposite, being First In First Out (FIFO) constructs. These characteristics are what gives these structures their name. A stack is analogous to a stack of physical objects, for example a stack of plates or chairs. The last plate or chair added to the stack is usually the first one removed when an item is needed. Similarly for a queue, the first person to enter a queue is usually the first person served. 

There are 2 main operations on stacks and queues. These are adding a new element, and accessing the next logical element. 

For a stack, these 2 operations are known as "Push" and "Pop". Push adds a new element to the top of the stack. "Pop" returns the last element added to the stack, and removes it from the stack. 

A queue's two operations are known as "Enqueue" and "Dequeue". "Enqueue" adds a new element to the end of the queue. "Dequeue" returns the oldest element in the queue, and removes it from the queue. 

Stacks and queues often have a third operation defined, "Peek". This operation returns the next logical element, but does not remove it from the stack or queue. 

Although theoretically stacks and queues have no fixed capacity, in practice resource bounds means that they do. Adding an element to a stack when it has no more space is known as a "Stack Overflow'' error. Trying to Pop an element from an empty stack is called a "Stack Underflow" error. Similarly for queues, these errors are known as "Queue Overflow" and "Queue Underflow". 


### Types of stacks and queues (Java, Python, C++)

In Java a Stack class is available, which is based off of the Vector class. C++ has many containers in the STL that expose push and pop operations. It also has Stack and Queue templates which wrap underlying vectors or lists to provide stricter stack and queue interfaces. Python has a deque class, or double ended queue, which allows pushing and popping from the front or the back. This effectively allows it to be used as a stack or a queue. 


### How stacks and queues store data

Stacks and queues are defined by their interface and functionality, not by their implementations. Stacks and queues are often implemented using arrays or more commonly linked lists. 

A straightforward implementation of a stack can be done with an array. Elements are pushed by adding them to the first unoccupied position of the array. The pop operation is accomplished by returning and removing the element at the last occupied position of the array. A variable is maintained indicating the last occupied position in the array, so that elements can be pushed and popped at the correct position. 

Linked list implementations for stacks and queues can also be straightforward. For a stack, elements are pushed and popped from the tail of the linked list. For a queue, elements are enqueued at the tail, and dequeued from the head. For both implementations, maintaining a variable pointing to the head and the tail of the linked list makes the standard stack and queue operations possible in constant time. 


### How stacks and queues compare to other data structures

Stacks and queues are often mentioned with arrays and linked lists, as these are commonly used to implement them. Deques, or double ended queues, are also a variant that can be used as both a stack and a queue.


## Cheat-sheet explained
The cheat sheet above is a summary of information you might need to know for an interview, but it’s usually not enough to simply memorize it. Instead, aim to understand each result so that you can give the answer in context.

The cheat sheet is broken into time complexity (the processing time for various stack and queue operations) and algorithm complexity (the amount of time and space used for common algorithms). 

### Basic operations time complexity

Queues and stacks are simple in terms of time complexity. All defined operations are possible in constant time. This is because push/enqueue and pop/dequeue operations are appending / prepending or removing elements from the ends of a linked list. These are operations that linked lists are very efficient at. 

Finding a particular element in a stack or queue is dependent on the underlying implementation, with most cases in linear time. Often searching within a queue or stack is not a function provided on implementations. 

