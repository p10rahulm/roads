+++
title = "Improved Online Algorithms for Knapsack and GAP in the Random Order Model"
authors = "Susanne Albers, Arindam Khan, Leon Ladewig"
paper_link = "https://arxiv.org/abs/2012.00497"
publication_details = "APPROX-2019: International Conference on Approximation Algorithms for Combinatorial Optimization Problems, 2019"
conference_date = "2019-09"
notes = "Journal version published in Algorithmica, 2021."
+++

<b>Abstract:</b>
The knapsack problem is one of the classical problems in combinatorial optimization: Given a set of items, each specified by its size and profit, the goal is to find a maximum profit packing into a knapsack of bounded capacity. In the online setting, items are revealed one by one and the decision, if the current item is packed or discarded forever, must be done immediately and irrevocably upon arrival. We study the online variant in the random order model where the input sequence is a uniform random permutation of the item set.

We develop a randomized $(1/6.65)$-competitive algorithm for this problem, outperforming the current best algorithm of competitive ratio $1/8.06$ by Kesselheim et al. [SIAM J. Comp. 47(5)]. Our algorithm is based on two new insights: We introduce a novel algorithmic approach that employs two given algorithms, optimized for restricted item classes, sequentially on the input sequence. In addition, we study and exploit the relationship of the knapsack problem to the $2$-secretary problem.

The generalized assignment problem (GAP) includes, besides the knapsack problem, several important problems related to scheduling and matching. We show that in the same online setting, applying the proposed sequential approach yields a $(1/6.99)$-competitive randomized algorithm for GAP. Again, our proposed algorithm outperforms the current best result of competitive ratio $1/8.06$ by Kesselheim et al. [SIAM J. Comp. 47(5)]. 

