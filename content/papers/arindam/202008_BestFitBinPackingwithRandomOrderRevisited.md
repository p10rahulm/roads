+++
title = "Best Fit Bin Packing with Random Order Revisited"
authors = "Susanne Albers, Arindam Khan, Leon Ladewig"
paper_link = "https://drops.dagstuhl.de/opus/volltexte/2020/12730/"
publication_details = "MFCS-2020: 45th International Symposium on Mathematical Foundations of Computer Science, 2020"
conference_date = "2020-08"
notes = "Recipient of best paper award at MFCS, 2020. Journal version accepted at Algorithmica, 2021."
+++

<b>Abstract:</b>
Best Fit is a well known online algorithm for the bin packing problem, where a collection of one-dimensional items has to be packed into a minimum number of unit-sized bins. In a seminal work, Kenyon [SODA 1996] introduced the (asymptotic) random order ratio as an alternative performance measure for online algorithms. Here, an adversary specifies the items, but the order of arrival is drawn uniformly at random. Kenyon’s result establishes lower and upper bounds of $1.08$ and $1.5$, respectively, for the random order ratio of Best Fit. Although this type of analysis model became increasingly popular in the field of online algorithms, no progress has been made for the Best Fit algorithm after the result of Kenyon.

We study the random order ratio of Best Fit and tighten the long-standing gap by establishing an improved lower bound of $1.10$. For the case where all items are larger than $1/3$, we show that the random order ratio converges quickly to $1.25$. It is the existence of such large items that crucially determines the performance of Best Fit in the general case. Moreover, this case is closely related to the classical maximum-cardinality matching problem in the fully online model. As a side product, we show that Best Fit satisfies a monotonicity property on such instances, unlike in the general case.

In addition, we initiate the study of the absolute random order ratio for this problem. In contrast to asymptotic ratios, absolute ratios must hold even for instances that can be packed into a small number of bins. We show that the absolute random order ratio of Best Fit is at least $1.3$. For the case where all items are larger than $1/3$, we derive upper and lower bounds of $21/16$ and $1.2$, respectively. 

