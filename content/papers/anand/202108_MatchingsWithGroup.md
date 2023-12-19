+++
title = "Matchings with Group Fairness Constraints: Online and Offline Algorithms"
authors = "Govind S. Sankar, Anand Louis, Meghana Nasre, Prajakta Nimbhorkar"
paper_link = "https://arxiv.org/abs/2105.09522"
publication_details = "IJCAI 2021: 30th International Joint Conference on Artificial Intelligence"
conference_date = "2021-08"
notes = ""
+++

<b>Abstract:</b>
We consider the problem of assigning items to platforms in the presence of group fairness constraints. In the input, each item belongs to certain categories, called classes in this paper. Each platform specifies the group fairness constraints through an upper bound on the number of items it can serve from each class. Additionally, each platform also has an upper bound on the total number of items it can serve. The goal is to assign items to platforms so as to maximize the number of items assigned while satisfying the upper bounds of each class. In some cases, there is a revenue associated with matching an item to a platform, then the goal is to maximize the revenue generated. 
This problem models several important real-world problems like ad-auctions, scheduling, resource allocations, school choice etc.We also show an interesting connection to computing a generalized maximum independent set on hypergraphs and ranking items under group fairness constraints. 
We show that if the classes are arbitrary, then the problem is NP-hard and has a strong inapproximability. We consider the problem in both online and offline settings under natural restrictions on the classes. Under these restrictions, the problem continues to remain NP-hard but admits approximation algorithms with small approximation factors. We also implement some of the algorithms. Our experiments show that the algorithms work well in practice both in terms of efficiency and the number of items that get assigned to some platform.
