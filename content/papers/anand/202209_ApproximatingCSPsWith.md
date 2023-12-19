+++
title = "Approximating CSPs with Outliers"
authors = "Suprovat Ghoshal, Anand Louis"
paper_link = "https://arxiv.org/abs/2205.11328"
publication_details = "APPROX 2022: 25th International Conference on Approximation Algorithms for Combinatorial Optimization Problems"
conference_date = "2022-09"
notes = ""
+++

<b>Abstract:</b>
Constraint satisfaction problems (CSPs) are ubiquitous in theoretical computer science. We study the problem of StrongCSPs, i.e. instances where a large induced sub-instance has a satisfying assignment. More formally, given a CSP instance \Psi(V, E, [k], \{\Pi_{ij}\}_{(i,j) \in E}) consisting of a set of vertices V, a set of edges E, alphabet [k], a constraint \Pi_{ij} \subset [k] \times [k] for each (i,j) \in E, the goal of this problem is to compute the largest subset S \subseteq V such that the instance induced on S has an assignment that satisfies all the constraints. 
In this paper, we study approximation algorithms for Unique Games and related problems under the StrongCSP framework when the underlying constraint graph satisfies mild expansion properties. In particular, we show that given a Strong Unique Games instance whose optimal solution S^* is supported on a regular low threshold rank graph, there exists an algorithm that runs in time exponential in the threshold rank, and recovers a large satisfiable sub-instance whose size is independent on the label set size and maximum degree of the graph. Our algorithm combines the techniques of Barak-Raghavendra-Steurer (FOCS'11), Guruswami-Sinop (FOCS'11) with several new ideas and runs in time exponential in the threshold rank of the optimal set. A key component of our algorithm is a new threshold rank based spectral decomposition, which is used to compute a "large" induced subgraph of "small" threshold rank; our techniques build on the work of Oveis Gharan and Rezaei (SODA'17) and could be of independent interest.