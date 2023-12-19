+++
title = "A Simple Polynomial Time Algorithm for Max Cut on Laminar  Geometric Intersection Graphs"
authors = "Utkarsh Joshi, Saladi Rahul, Jason Thoppil"
paper_link = "https://drops.dagstuhl.de/opus/volltexte/2022/17413/"
publication_details = "FSTTCS 2022: 42nd IARCS Annual Conference on Foundations of Software Technology and Theoretical Computer Science"
conference_date = "2022-12"
notes = ""
+++

<b>Abstract:</b>
In a geometric intersection graph, given a collection of n geometric objects as input, each object corresponds to a vertex and there is an edge between two vertices if and only if the corresponding objects intersect. In this work, we present a somewhat surprising result: a polynomial time algorithm for max cut on laminar geometric intersection graphs. In a laminar geometric intersection graph, if two objects intersect, then one of them will completely lie inside the other. To the best of our knowledge, for max cut this is the first class of (non-trivial) geometric intersection graphs with an exact solution in polynomial time. Our algorithm uses a simple greedy strategy. However, proving its correctness requires non-trivial ideas.
Next, we design almost-linear time algorithms (in terms of n) for laminar axis-aligned boxes by combining the properties of laminar objects with vertical ray shooting data structures. Note that the edge-set of the graph is not explicitly given as input; only the n geometric objects are given as input.