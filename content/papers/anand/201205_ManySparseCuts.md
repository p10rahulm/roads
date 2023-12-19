+++
title = "Many sparse cuts via higher eigenvalue"
authors = "Anand Louis, Prasad Raghavendra, Prasad Tetali, Santosh S. Vempala"
paper_link = "https://arxiv.org/abs/1111.0965"
publication_details = "STOC 2012: 44th ACM Symposium on Theory of Computing"
conference_date = "2012-05-01"
notes = ""
+++

<b>Abstract:</b>
Cheeger's fundamental inequality states that any edge-weighted graph has a vertex subset S such that its expansion (a.k.a. conductance) is bounded as follows:
\phi(S) \defeq \frac{w(S,\bar{S})}{\min \set{w(S), w(\bar{S})}}
\leq 2\sqrt{\lambda_2}
where w is the total edge weight of a subset or a cut and \lambda_2 is the second smallest eigenvalue of the normalized Laplacian of the graph. Here we prove the following natural generalization: for any integer k \in [n], there exist ck disjoint subsets S_1, ..., S_{ck}, such that
\max_i \phi(S_i) \leq C \sqrt{\lambda_{k} \log k}
where \lambda_i is the i^{th} smallest eigenvalue of the normalized Laplacian and c<1,C>0 are suitable absolute constants. Our proof is via a polynomial-time algorithm to find such subsets, consisting of a spectral projection and a randomized rounding. As a consequence, we get the same upper bound for the small set expansion problem, namely for any k, there is a subset S whose weight is at most a \bigO(1/k) fraction of the total weight and \phi(S) \le C \sqrt{\lambda_k \log k}. Both results are the best possible up to constant factors. 
The underlying algorithmic problem, namely finding k subsets such that the maximum expansion is minimized, besides extending sparse cuts to more than one subset, appears to be a natural clustering problem in its own right.