+++
title = "Approximation Algorithms and Hardness for Strong Unique Games"
authors = "Suprovat Ghoshal, Anand Louis"
paper_link = "https://arxiv.org/abs/2005.08918"
publication_details = "SODA 2021: 32th Annual ACM-SIAM Symposium on Discrete Algorithms"
conference_date = "2021-01-01"
notes = ""
+++

<b>Abstract:</b>
The UNIQUE GAMES problem is a central problem in algorithms and complexity theory. Given an instance of UNIQUE GAMES, the STRONG UNIQUE GAMES problem asks to find the largest subset of vertices, such that the UNIQUE GAMES instance induced on them is completely satisfiable. In this paper, we give new algorithmic and hardness results for STRONG UNIQUE GAMES. Given an instance with label set size k where a set of (1 - \epsilon)-fraction of the vertices induce an instance that is completely satisfiable, our first algorithm produces a set of 1 - \widetilde{O}({k^2}) \epsilon \sqrt{\log n} fraction of the vertices such that the UNIQUE GAMES induced on them is completely satisfiable. In the same setting, our second algorithm produces a set of 1 - \widetilde{O}({k^2}) \sqrt{\epsilon \log d} (here d is the largest vertex degree of the graph) fraction of the vertices such that the UNIQUE GAMES induced on them is completely satisfiable. The technical core of our results is a new connection between STRONG UNIQUE GAMES and Small-Set-Vertex-Expansion in graphs. Complementing this, assuming the Unique Games Conjecture, we prove that it is NP-hard to compute a set of size larger than 1 - \Omega( \sqrt{\epsilon \log k \log d}) for which all the constraints induced on this set are satisfied. 
Given an undirected graph G(V,E) the ODD CYCLE TRANSVERSAL problem asks to delete the least fraction of vertices to make the induced graph on the remaining vertices bipartite. As a corollary to our main algorithmic results, we obtain an algorithm that outputs a set S such the graph induced on V \setminus S is bipartite, and |S|/n \leq O(\sqrt{\epsilon \log d}) (here d is the largest vertex degree and \epsilon is the optimal fraction of vertices that need to be deleted). Assuming the Unique Games Conjecture, we prove a matching (up to constant factors) hardness.