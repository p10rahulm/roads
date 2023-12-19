+++
title = "Sampling Ex-Post Group-Fair Rankings"
authors = "Sruthi Gorantla, Amit Deshpande, Anand Louis"
paper_link = "https://arxiv.org/abs/2203.00887"
publication_details = "IJCAI 2023: 32nd International Joint Conference on Artificial Intelligence"
conference_date = "2023-07-01"
notes = ""
+++

<b>Abstract:</b>
Randomized rankings have been of recent interest to achieve ex-ante fairer exposure and better robustness than deterministic rankings. We propose a set of natural axioms for randomized group-fair rankings and prove that there exists a unique distribution D that satisfies our axioms and is supported only over ex-post group-fair rankings, i.e., rankings that satisfy given lower and upper bounds on group-wise representation in the top-k ranks. Our problem formulation works even when there is implicit bias, incomplete relevance information, or only ordinal ranking is available instead of relevance scores or utility values. 
We propose two algorithms to sample a random group-fair ranking from the distribution D mentioned above. Our first dynamic programming-based algorithm samples ex-post group-fair rankings uniformly at random in time O(k^2\ell), where \ell is the number of groups. Our second random walk-based algorithm samples ex-post group-fair rankings from a distribution \delta-close to D in total variation distance and has expected running time O^*(k^2\ell^2), when there is a sufficient gap between the given upper and lower bounds on the group-wise representation. The former does exact sampling, but the latter runs significantly faster on real-world data sets for larger values of k. We give empirical evidence that our algorithms compare favorably against recent baselines for fairness and ranking utility on real-world data sets.