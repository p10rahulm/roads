+++
title = "Sampling Individually-Fair Rankings that are Always Group Fair."
authors = "Sruthi Gorantla, Anay Mehrotra, Amit Deshpande, Anand Louis:"
paper_link = "https://arxiv.org/abs/2306.11964"
publication_details = "ACM AIES-2023: 6th AAAI/ACM Conference on Artificial Intelligence, Ethics, and Society, 2023."
conference_date = "2023-08-01"
notes = ""
+++

<b>Abstract:</b>
Rankings on online platforms help their end-users find the relevant information -- people, news, media, and products -- quickly. Fair ranking tasks, which ask to rank a set of items to maximize utility subject to satisfying group-fairness constraints, have gained significant interest in the Algorithmic Fairness, Information Retrieval, and Machine Learning literature. Recent works, however, identify uncertainty in the utilities of items as a primary cause of unfairness and propose introducing randomness in the output. This randomness is carefully chosen to guarantee an adequate representation of each item (while accounting for the uncertainty). However, due to this randomness, the output rankings may violate group fairness constraints. We give an efficient algorithm that samples rankings from an individually-fair distribution while ensuring that every output ranking is group fair. The expected utility of the output ranking is at least α times the utility of the optimal fair solution. Here, α depends on the utilities, position-discounts, and constraints -- it approaches 1 as the range of utilities or the position-discounts shrinks, or when utilities satisfy distributional assumptions. Empirically, we observe that our algorithm achieves individual and group fairness and that Pareto dominates the state-of-the-art baselines.