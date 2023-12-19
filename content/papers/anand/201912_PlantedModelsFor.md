+++
title = "Planted Models for k-Way Edge and Vertex Expansion"
authors = "Anand Louis, Rakesh Venkat"
paper_link = "https://arxiv.org/abs/1910.08889"
publication_details = "FSTTCS 2019: 39th IARCS Annual Conference on. Foundations of Software Technology and Theoretical Computer Science"
conference_date = "2019-12"
notes = ""
+++

<b>Abstract:</b>
Graph partitioning problems are a central topic of study in algorithms and complexity theory. Edge expansion and vertex expansion, two popular graph partitioning objectives, seek a 2-partition of the vertex set of the graph that minimizes the considered objective. However, for many natural applications, one might require a graph to be partitioned into k parts, for some k \geq 2. For a k-partition S_1, \ldots, S_k of the vertex set of a graph G = (V,E), the k-way edge expansion (resp. vertex expansion) of \{S_1, \ldots, S_k\} is defined as \max_{i \in [k]} \Phi(S_i), and the balanced k-way edge expansion (resp. vertex expansion) of G is defined as
\min_{ \{S_1, \ldots, S_k\} \in \mathcal{P}_k} \max_{i \in [k]} \Phi(S_i) \,
,
where \mathcal{P}_k is the set of all balanced k-partitions of V (i.e each part of a k-partition in \mathcal{P}_k should have cardinality |V|/k), and \Phi(S) denotes the edge expansion (resp. vertex expansion) of S \subset V. We study a natural planted model for graphs where the vertex set of a graph has a k-partition S_1, \ldots, S_k such that the graph induced on each S_i has large expansion, but each S_i has small edge expansion (resp. vertex expansion) in the graph. We give bi-criteria approximation algorithms for computing the balanced k-way edge expansion (resp. vertex expansion) of instances in this planted model.