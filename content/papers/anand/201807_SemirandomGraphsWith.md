+++
title = "Semi-random Graphs with Planted Sparse Vertex Cuts: Algorithms for Exact and Approximate Recovery"
authors = "Anand Louis, Rakesh Venkat"
paper_link = "https://arxiv.org/abs/1805.09747"
publication_details = "ICALP 2018: 45th International Colloquium on Automata, Languages, and Programming (ICALP)"
conference_date = "2018-07-01"
notes = ""
+++

<b>Abstract:</b>
The problem of computing the vertex expansion of a graph is an NP-hard problem. The current best worst-case approximation guarantees for computing the vertex expansion of a graph are a O(\sqrt{\log n})-approximation algorithm due to Feige, Hajiaghayi and Lee [SIAM J. Comp., 2008], and O(\sqrt{OPT \log d}) bound in graphs having vertex degrees at most d, due to Louis, Raghavendra and Vempala [FOCS 2013]. 
We study a natural semi-random model of graphs with sparse vertex cuts. For certain ranges of parameters, we give an algorithm to recover the planted sparse vertex cut exactly. For a larger range of parameters, we give a constant factor bi-criteria approximation algorithm to compute the graph's balanced vertex expansion. Our algorithms are based on studying a semidefinite programming relaxation for the balanced vertex expansion of the graph. 
In addition to being a family of instances that will help us to better understand the complexity of the computation of vertex expansion, our model can also be used in the study of community detection where only a few nodes from each community interact with nodes from other communities. There has been a lot of work on studying random and semi-random graphs with planted sparse edge cuts. To the best of our knowledge, our model of semi-random graphs with planted sparse vertex cuts has not been studied before.