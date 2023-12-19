+++
title = "Bipartite Matchings with Group Fairness and Individual Fairness Constraints"
authors = "Atasi Panda, Anand Louis, Prajakta Nimbhorkar"
paper_link = "https://arxiv.org/abs/2208.09951"
publication_details = ""
conference_date = "Working Paper"
notes = ""
+++

<b>Abstract:</b>
We consider the problem of assigning items to platforms while satisfying group and individual fairness constraints. Each item is associated with certain groups and has a preference ordering over platforms. Each platform enforces group fairness by specifying an upper and a lower bound on the number of items that can be matched to it from each group. Although there may be multiple optimal solutions that satisfy the group fairness constraints, we aim to achieve `probabilistic individual fairness' by computing a distribution over `group fair' matchings such that each item has a reasonable probability of being matched to one of its top choices. When each item can belong to multiple groups, the problem of finding a maximum size group-fair matching is NP-hard even when all the group lower bounds are 0, and there are no individual fairness constraints. Given a total of n items, we achieve a O(\Delta \log n) approximation algorithm when an item can belong to at most \Delta groups, and all the group lower bounds are 0. We also provide two approximation algorithms in terms of the total number of groups that have items in the neighborhood of a platform. When each item belongs to a single group, we provide a polynomial-time algorithm that computes a probabilistic individually fair distribution over group fair matching. We further extend our model and algorithms to address the following notions of fairness: `maxmin group fairness', which maximizes the representation of the worst-off groups, and `mindom group fairness', which minimizes the representation of the most dominant groups.