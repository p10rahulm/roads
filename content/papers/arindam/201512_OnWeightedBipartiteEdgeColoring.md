+++
title = "On Weighted Bipartite Edge Coloring"
authors = "Arindam Khan, Mohit Singh"
paper_link = "https://drops.dagstuhl.de/opus/volltexte/2015/5643/pdf/28.pdf"
publication_details = "FSTTCS-2015: IARCS Annual Conference on Foundations of Software Technology and Theoretical Computer Science, 2015"
conference_date = "2015-12-01"
notes = ""
+++

<b>Abstract:</b>
We study weighted bipartite edge coloring problem, which is a generalization of two classical problems: bin packing and edge coloring. This problem has been inspired from the study of Clos networks in multirate switching environment in communication networks. In weighted bipartite edge coloring problem, we are given an edge-weighted bipartite multi-graph $G=(V,E)$ with weights
$w:E\rightarrow [0,1]$. The goal is to find a proper
weighted coloring of the edges with as few colors as possible. An
edge coloring of the weighted graph is called a proper
weighted coloring if the sum of the weights of the edges incident
to a vertex of any color is at most one. Chung and Ross conjectured $2m-1$ colors are sufficient for a proper weighted coloring, where $m$ denotes the minimum number of unit sized bins needed to pack the weights of all edges incident at any vertex. We give an algorithm that returns a coloring with at most $\lceil 2.2223m \rceil$ colors improving on the previous result of $\frac{9m}{4}$ by Feige and Singh.
Our algorithm is purely combinatorial and combines the K\"onig's theorem for edge coloring bipartite graphs and first-fit decreasing heuristic for bin packing. However, our analysis uses configuration linear program for the bin packing problem to give the improved result.  

