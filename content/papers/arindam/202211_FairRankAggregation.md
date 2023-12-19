+++
title = "Fair Rank Aggregation"
authors = "Diptarka Chakraborty, Syamantak Das, Arindam Khan, Aditya Subramanian"
paper_link = "https://openreview.net/pdf?id=xbgtFOO9J5D"
publication_details = "NeurIPS-2022: Annual Conference on Neural Information Processing Systems, 2022"
conference_date = "2022-11-01"
notes = ""
+++

<b>Abstract:</b>
Ranking algorithms find extensive usage in diverse areas such as web search, employment, college
admission, voting, etc. The related rank aggregation problem deals with combining multiple
rankings into a single aggregate ranking.  However, algorithms for both these problems might be
biased against some individuals or groups due to implicit prejudice or marginalization in the
historical data.  We study ranking and rank aggregation problems from a fairness or diversity
perspective, where the candidates (to be ranked) may belong to different groups and each group
should have a fair representation in the final ranking. We allow the designer to set the
parameters that define fair representation. These parameters specify the allowed range of the
number of candidates from a particular group in the top-$k$ positions of the ranking.  Given any
ranking, we provide a fast and exact algorithm for finding the closest fair ranking for the
Kendall tau metric under {\em strong fairness}, i.e., when the final ranking is fair for all
values of $k$. We also provide an exact algorithm for finding the closest fair ranking for the
Ulam metric under strong fairness when there are only $O(1)$ number of groups.  Our
algorithms are simple, fast, and might be extendable to other relevant metrics. We also give a
novel  meta-algorithm for the general rank aggregation problem under the fairness framework.
Surprisingly, this meta-algorithm works for any generalized mean objective (including center and
median problems) and any fairness criteria. As a byproduct, we obtain 3-approximation algorithms
for both center and median problems, under both Kendall tau and Ulam metrics. Furthermore, using
sophisticated techniques we obtain a $(3-\varepsilon)$-approximation algorithm, for a constant 
$\epsilon>0$, for the Ulam metric under strong fairness.

