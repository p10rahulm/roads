+++
title = "Planted Models for the Densest k-Subgraph Problem"
authors = "Yash Khanna, Anand Louis"
paper_link = "https://arxiv.org/abs/2004.13978"
publication_details = "FSTTCS 2020: 40th conference on Foundations of Software Technology and Theoretical Computer Science"
conference_date = "2020-12-01"
notes = ""
+++

<b>Abstract:</b>
Given an undirected graph G, the Densest k-subgraph problem (DkS) asks to compute a set S \subset V of cardinality \left\lvert S\right\rvert \leq k such that the weight of edges inside S is maximized. This is a fundamental NP-hard problem whose approximability, inspite of many decades of research, is yet to be settled. The current best known approximation algorithm due to Bhaskara et al. (2010) computes a \mathcal{O}\left({n^{1/4 + \epsilon}}\right) approximation in time n^{\mathcal{O}\left(1/\epsilon\right)}, for any \epsilon > 0. 
We ask what are some "easier" instances of this problem? We propose some natural semi-random models of instances with a planted dense subgraph, and study approximation algorithms for computing the densest subgraph in them. These models are inspired by the semi-random models of instances studied for various other graph problems such as the independent set problem, graph partitioning problems etc. For a large range of parameters of these models, we get significantly better approximation factors for the Densest k-subgraph problem. Moreover, our algorithm recovers a large part of the planted solution.
