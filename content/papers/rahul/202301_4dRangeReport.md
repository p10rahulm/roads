+++
title = "4D Range Reporting in the Pointer Machine Model in Almost-Optimal Time"
authors = "Yakov Nekrich, Saladi Rahul"
paper_link = "https://arxiv.org/abs/2211.03161"
publication_details = "SODA 2023: 2023 Annual ACM-SIAM Symposium on Discrete Algorithms"
conference_date = "2023-01"
notes = ""
+++

<b>Abstract:</b>
In the orthogonal range reporting problem we must pre-process a set $P$ of multi-dimensional points, so that for any axis-parallel query rectangle $q$ all points from $q\cap P$ can be reported efficiently. In this paper we study the query complexity of multi-dimensional orthogonal range reporting in the pointer machine model. We present a data structure that answers four-dimensional orthogonal range reporting queries in almost-optimal time $O(\log n\log\log n + k)$ and uses $O(n\log^4 n)$ space, where $n$ is the number of points in $P$ and $k$ is the number of points in $q\cap P$ . This is the first data structure with nearly-linear space usage that achieves almost-optimal query time in 4d. This result can be immediately generalized to $d\ge 4$ dimensions: we show that there is a data structure supporting $d$-dimensional range reporting queries in time $O(\log^{d-3} n\log\log n+k)$ for any constant $d\ge 4$.