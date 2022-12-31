# Graphs Research Notes

## Wiki


## Cracking the code

Depth First Search: DFS involves searching a node and all its children before proceed- ing to its siblings

Breadth First Search: BFS involves searching a node and its siblings before going on to any children

## DSA for programmers

A graph is a way of representing relationships in a set of data. Graphs are often drawn with circles for vertices and lines between the circles representing edges, but we'll see other ways to represent them as well. Two vertices are called adjacent if there is an edge between them, and non-adjacent if there is no edge between them.
Vertices in a graph are also known as nodes; the two terms are largely used interchangeably. However, the point on a polygon where two or more edges meet is always a vertex, and a piece of memory which holds both a vertex and its collection of edges is always a node.

A complete (sub)graph, or clique, is one that contains every possible edge between its vertices. An independent set (or stable set) is a set of vertices with no edges between them. Figure 4.3 shows K8; in graph theory, the letter K with an integer subscript means a complete graph on that many vertices.

We generally work with simple graphs, which are graphs that do not contain loops (an edge from a vertex back to itself) or multiple edges (more than one edge between two vertices); when we say graph without specifying otherwise, we always mean a simple graph. A graph with loops can be called a nonsimple graph, and one with multiple edges is a multigraph.


In a directed graph, or digraph, each arrow has a direction showing which way the relationship goes

One way to classify graphs is by whether they are cyclic or acyclic. An acyclic graph has at most one path between any two vertices; that is, there is no path a-
b-c-a, where {a,b,c} are distinct vertices37. A cyclic graph has at least one cycle: it is possible to find a path that begins and ends at the same vertex.

Many problems on graphs involve coloring, which is a way of labeling the vertices (or edges) of the graph. A proper vertex coloring is one in which no adjacent vertices (that is, vertices with an edge between them) have the same color. In other words, it is a partitioning of the vertices into independent sets. The four color conjecture42, posed in 1852, states that for any map consisting of only connected regions with borders of finite length, properly coloring the map requires at most four colors.

We can think of the vertices of a graph as being locations and the edges as being paths between those locations, but in reality not all paths have equal length. In an unweighted graph, edges simply show which vertices have a direct path between them, but we also have weighted graphs, in which each edge is assigned a weight. Usually, but not always, these weights are non-negative integers. We often refer to the weight as the cost of taking that edge.

In breadth-first search, we first explore all vertices which are adjacent to the root. We then explore all vertices adjacent to the root's neighbors that have not already been explored, and so on. In this way, we discover all vertices that are at
distance k from the root (usually denoted s, for source) before finding any vertices at distance k+1. What is the runtime of BFS? During initialization, each vertex of the graph has the three mentioned properties initialized, in constant time for each vertex, for a total of O(n). Each vertex is enqueued, dequeued, and has its properties updated at most one time each, all of which are O(1) operations, for another O(n). Finally, we look at every neighbor of every vertex to see if it has been marked yet, which takes another O(m) time. This gives us a total runtime of O(n+m). Storing the graph required n+m space and the queue takes O(n) space, so the space requirement is O(n+m) as well. This also means that BFS runs in linear time relative to the size of the input (which is n+m). As shown above, breadth-first search enables us to find the length of the shortest path from a source vertex s to every other vertex in the graph in linear time. We can then find the actual path by following the parent pointers from the destination node back up to the source, in time proportional to the length of the path. This means that BFS is useful for any number of problems which require finding shortest paths. A few examples follow:


In Dijkstra's algorithm, we start with a source vertex s and a set S of nodes (currently empty) whose distance from s has been determined. We insert all elements of the graph into a priority queue based on their known distance from s; at the beginning, s itself has a distance of 0 and every other node has a distance of infinity. We extract the minimum element of the queue, which will initially be s, and relax all of its edges. We continue to extract the minimum element and relax its edges until the queue is empty, at which point every node is labeled with the length of its shortest path.





Many important algorithms in graph theory operate on trees. A tree is simply a connected graph in which there are no cycles. It is usually convenient for us to pick up a tree by its root; we denote one particular vertex to be the root of the tree and define the rest of the vertices by their relationship to the root.


4.4.1 Representing graphs with adjacency lists
When using an adjacency list representation, each vertex of the graph is stored with a list of the vertices to which it is adjacent. When this is implemented with
a set of linked lists, we have a space requirement of O(n+m)33. For a sparse graph (one with very few edges), this reduces to O(n). For a dense graph (a graph with many edges, such as the complete and near-complete graphs) this
reduces to O(n2).

4.4.2 Representing graphs with adjacency matrices
The other common way to store a graph is as an adjacency matrix, which is a matrix with the following properties:
Every cell in the matrix is either 0 or 1.
The cell at position (i,j) is a 1 if and only if there exists an edge between
vertices i and j. This is also true of the cell at position (j,i).

4.4.3 Representing graphs in memory
When working with a graph in memory, it will often be stored as a collection of nodes. Each node represents a vertex and contains a collection of pointers to other nodes representing the edges to other vertices.

Which representation of the graph to choose will depend on how dense the graph is and how you plan to use it. For a sparse graph, an adjacency list is much more
space efficient than an adjacency matrix as we don't need to store O(n2) 0s, and it's easy to iterate over all of the existing edges. Additionally, when the graph is dynamic (changes over time), it's easier to add and remove vertices from the adjacency list.
On the other hand, accessing edges is more efficient with an adjacency matrix; determining whether vertices i and j are adjacent requires simply checking whether A[i][j]=1, rather than scanning through a list, which can take up to O(n)
 
time. Thus, not only are lookups faster with an adjacency matrix, but the amount of time taken is constant, making them a better choice for applications where
predictability is highly desired36.


## Wirth

## '83 data structures


## Dijkstra's algorithm
https://www.youtube.com/watch?v=EFg3u_E6eHU

Graph matrices : https://www.youtube.com/watch?v=LUDNz2bIjWI




