+++
title = "Spectral Properties of Hypergraph Laplacian and Approximation Algorithms "
authors = "T-H. Hubert Chan, Anand Louis, Zhihao Gavin Tang, Chenzi Zhang "
paper_link = "https://arxiv.org/abs/1605.01483"
publication_details = "JACM: Journal of the ACM, Volume 65, Issue 3"
conference_date = "2018-06"
notes = "A preliminary version of this paper appeared in STOC 2015 [Louis] (arXiv:1408.2425) and the current paper is the result of a merge with [Chan, Tang, Zhang] (arXiv:1510.01520)"
+++

<b>Abstract:</b>
The celebrated Cheeger's Inequality establishes a bound on the edge expansion of a graph via its spectrum. This inequality is central to a rich spectral theory of graphs, based on studying the eigenvalues and eigenvectors of the adjacency matrix (and other related matrices) of graphs. It has remained open to define a suitable spectral model for hypergraphs whose spectra can be used to estimate various combinatorial properties of the hypergraph. 
In this paper we introduce a new hypergraph Laplacian operator generalizing the Laplacian matrix of graphs. In particular, the operator is induced by a diffusion process on the hypergraph, such that within each hyperedge, measure flows from vertices having maximum weighted measure to those having minimum. Since the operator is non-linear, we have to exploit other properties of the diffusion process to recover a spectral property concerning the "second eigenvalue" of the resulting Laplacian. Moreover, we show that higher order spectral properties cannot hold in general using the current framework. 
We consider a stochastic diffusion process, in which each vertex also experiences Brownian noise from outside the system. We show a relationship between the second eigenvalue and the convergence behavior of the process. 
We show that various hypergraph parameters like multi-way expansion and diameter can be bounded using this operator's spectral properties. Since higher order spectral properties do not hold for the Laplacian operator, we instead use the concept of procedural minimizers to consider higher order Cheeger-like inequalities. For any positive integer k, we give a polynomial time algorithm to compute an O(\log r)-approximation to the k-th procedural minimizer, where r is the maximum cardinality of a hyperedge. We show that this approximation factor is optimal under the SSE hypothesis for constant values of k.