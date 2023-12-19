+++
title = "Searching for the closest-pair in a query translate"
authors = "Jie Xue, Yuan Li, Saladi Rahul, Ravi Janardan"
paper_link = "https://arxiv.org/abs/1807.09498"
publication_details = "SOCG 2019: 35th International Symposium on Computational Geometry"
conference_date = "2019-06"
notes = ""
+++

<b>Abstract:</b>
We consider a range-search variant of the closest-pair problem. Let $\varGamma$ be a fixed shape in the plane. We are interested in storing a given set of n points in the plane in some data structure such that for any specified translate of $\varGamma$, the closest pair of points contained in the translate can be reported efficiently. We present results on this problem for two important settings: when $\varGamma$ is a polygon (possibly with holes) and when $\varGamma$ is a general convex body whose boundary is smooth. When $\varGamma$ is a polygon, we present a data structure using $O(n)$ space and $O(\log n)$ query time, which is asymptotically optimal. When $\varGamma$ is a general convex body with a smooth boundary, we give a near-optimal data structure using $O(n \log n)$ space and $O(\log^2 n)$ query time. Our results settle some open questions posed by Xue et al.