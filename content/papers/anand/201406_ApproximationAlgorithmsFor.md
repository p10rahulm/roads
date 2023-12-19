+++
title = "Approximation Algorithms for Hypergraph Small Set Expansion and Small Set Vertex Expansion"
authors = "Anand Louis, Yury Makarychev"
paper_link = "https://arxiv.org/abs/1404.4575"
publication_details = "APPROX 2014: 17th International Conference on Approximation Algorithms for Combinatorial Optimization Problem"
conference_date = "2014-06-01"
notes = "A journal version of this appeared in Theory of Computing, vol. 12, article 17, 2016."
+++

<b>Abstract:</b>
The expansion of a hypergraph, a natural extension of the notion of expansion in graphs, is defined as the minimum over all cuts in the hypergraph of the ratio of the number of the hyperedges cut to the size of the smaller side of the cut. We study the Hypergraph Small Set Expansion problem, which, for a parameter \delta \in (0,1/2], asks to compute the cut having the least expansion while having at most \delta fraction of the vertices on the smaller side of the cut. We present two algorithms. Our first algorithm gives an \tilde O(\delta^{-1} \sqrt{\log n}) approximation. The second algorithm finds a set with expansion \tilde O(\delta^{-1}(\sqrt{d_{\text{max}}r^{-1}\log r\, \phi^*} + \phi^*)) in a r--uniform hypergraph with maximum degree d_{\text{max}} (where \phi^* is the expansion of the optimal solution). Using these results, we also obtain algorithms for the Small Set Vertex Expansion problem: we get an \tilde O(\delta^{-1} \sqrt{\log n}) approximation algorithm and an algorithm that finds a set with vertex expansion O\left(\delta^{-1}\sqrt{\phi^V \log d_{\text{max}} } + \delta^{-1} \phi^V\right) (where \phi^V is the vertex expansion of the optimal solution). 
For \delta=1/2, Hypergraph Small Set Expansion is equivalent to the hypergraph expansion problem. In this case, our approximation factor of O(\sqrt{\log n}) for expansion in hypergraphs matches the corresponding approximation factor for expansion in graphs due to ARV.