+++
title = "Approximation Algorithm for Sparsest k-Partitioning"
authors = "Anand Louis, Konstantin Makarychev"
paper_link = "https://arxiv.org/abs/1306.4384"
publication_details = "SODA 2014: 25th Annual ACM-SIAM Symposium on Discrete Algorithms"
conference_date = "2014-01"
notes = ""
+++

<b>Abstract:</b>
Given a graph G, the sparsest-cut problem asks to find the set of vertices S which has the least expansion defined as
\phi_G(S) :=
\frac{w(E(S,\bar{S}))}{\min \set{w(S), w(\bar{S})}},
where w is the total edge weight of a subset. Here we study the natural generalization of this problem: given an integer k, compute a k-partition \set{P_1, \ldots, P_k} of the vertex set so as to minimize
\phi_k(\set{P_1, \ldots, P_k}) := \max_i
\phi_G(P_i).
Our main result is a polynomial time bi-criteria approximation algorithm which outputs a (1 - \e)k-partition of the vertex set such that each piece has expansion at most O_{\varepsilon}(\sqrt{\log n \log k}) times OPT. We also study balanced versions of this problem.
