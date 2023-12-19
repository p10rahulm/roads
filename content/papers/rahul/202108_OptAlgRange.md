+++
title = "Optimal Algorithms for Range Searching over Multi-Armed Bandits"
authors = "Siddharth Barman, Ramakrishnan Krishnamurthy, Saladi Rahul"
paper_link = "https://arxiv.org/abs/2105.01390"
publication_details = "IJCAI 2021: 30th International Joint Conference on Artificial Intelligence"
conference_date = "2021-08-01"
notes = ""
+++

<b>Abstract:</b>
This paper studies a multi-armed bandit (MAB) version of the range-searching problem. In its basic form, range searching considers as input a set of points (on the real line) and a collection of (real) intervals. Here, with each specified point, we have an associated weight, and the problem objective is to find a maximum-weight point within every given interval.
The current work addresses range searching with stochastic weights: each point corresponds to an arm (that admits sample access) and the point's weight is the (unknown) mean of the underlying distribution. In this MAB setup, we develop sample-efficient algorithms that find, with high probability, near-optimal arms within the given intervals, i.e., we obtain PAC (probably approximately correct) guarantees. We also provide an algorithm for a generalization wherein the weight of each point is a multi-dimensional vector. The sample complexities of our algorithms depend, in particular, on the size of the optimal hitting set of the given intervals.
Finally, we establish lower bounds proving that the obtained sample complexities are essentially tight. Our results highlight the significance of geometric constructs -- specifically, hitting sets -- in our MAB setting.