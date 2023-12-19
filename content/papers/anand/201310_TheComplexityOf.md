+++
title = "The Complexity of Approximating Vertex Expansion"
authors = "Anand Louis, Prasad Raghavendra, Santosh S. Vempala"
paper_link = "https://arxiv.org/abs/1304.3139"
publication_details = "FOCS 2013: 54th Annual IEEE Symposium on Foundations of Computer Science"
conference_date = "2013-10-01"
notes = ""
+++

<b>Abstract:</b>
We study the complexity of approximating the vertex expansion of graphs G = (V,E), defined as
\Phi^V := \min_{S \subset V} n \cdot \frac{|N(S)|}{|S| |V
\backslash S|}.

We give a simple polynomial-time algorithm for finding a subset with vertex expansion O(\sqrt{OPT \log d}) where d is the maximum degree of the graph. Our main result is an asymptotically matching lower bound: under the Small Set Expansion (SSE) hypothesis, it is hard to find a subset with expansion less than C\sqrt{OPT \log d} for an absolute constant C. In particular, this implies for all constant \epsilon > 0, it is SSE-hard to distinguish whether the vertex expansion < \epsilon or at least an absolute constant. The analogous threshold for edge expansion is \sqrt{OPT} with no dependence on the degree; thus our results suggest that vertex expansion is harder to approximate than edge expansion. In particular, while Cheeger's algorithm can certify constant edge expansion, it is SSE-hard to certify constant vertex expansion in graphs. 
Our proof is via a reduction from the {\it Unique Games} instance obtained from the \SSE hypothesis to the vertex expansion problem. It involves the definition of a smoother intermediate problem we call {\sf Analytic Vertex Expansion} which is representative of both the vertex expansion and the conductance of the graph. Both reductions (from the UGC instance to this problem and from this problem to vertex expansion) use novel proof ideas.