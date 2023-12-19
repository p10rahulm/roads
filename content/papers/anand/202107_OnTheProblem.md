+++
title = "On the Problem of Underranking in Group-Fair Ranking"
authors = "Sruthi Gorantla, Amit Deshpande, Anand Louis"
paper_link = "https://arxiv.org/abs/2010.06986"
publication_details = "ICML 2021: 38th International Conference on Machine Learning"
conference_date = "2021-07-01"
notes = ""
+++

<b>Abstract:</b>
Search and recommendation systems, such as search engines, recruiting tools, online marketplaces, news, and social media, output ranked lists of content, products, and sometimes, people. Credit ratings, standardized tests, risk assessments output only a score, but are also used implicitly for ranking. Bias in such ranking systems, especially among the top ranks, can worsen social and economic inequalities, polarize opinions, and reinforce stereotypes. On the other hand, a bias correction for minority groups can cause more harm if perceived as favoring group-fair outcomes over meritocracy. In this paper, we formulate the problem of underranking in group-fair rankings, which was not addressed in previous work. Most group-fair ranking algorithms post-process a given ranking and output a group-fair ranking. We define underranking based on how close the group-fair rank of each item is to its original rank, and prove a lower bound on the trade-off achievable for simultaneous underranking and group fairness in ranking. We give a fair ranking algorithm that takes any given ranking and outputs another ranking with simultaneous underranking and group fairness guarantees comparable to the lower bound we prove. Our algorithm works with group fairness constraints for any number of groups. Our experimental results confirm the theoretical trade-off between underranking and group fairness, and also show that our algorithm achieves the best of both when compared to the state-of-the-art baselines.
