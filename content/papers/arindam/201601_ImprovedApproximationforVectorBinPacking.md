+++
title = "Improved Approximation for Vector Bin Packing"
authors = "Nikhil Bansal, Marek Eli\'a\v s, Arindam Khan"
paper_link = "https://www.csa.iisc.ac.in/~arindamkhan/papers/soda16bansalmarekkhan.pdf"
publication_details = "SODA-2016: ACM-SIAM Symposium on Discrete Algorithms, 2016"
conference_date = "2016-01"
notes = ""
+++

<b>Abstract:</b>
We study the $d$-dimensional vector bin packing problem, a well-studied generalization of bin packing arising in resource allocation and scheduling problems. Here we are given a set of $d$-dimensional vectors $v_1,v_2,\dots,v_n$ in $[0, 1]^d$, and the goal is to pack them into the least number of bins so that for each bin $B$, the sum of the vectors in it is at most $1$ in every dimension, i.e., $\lVert\sum_{{v_i}\in B}v_i\rVert_{\infty}\le 1$. For the $2$-dimensional case we give an asymptotic approximation guarantee of $1 + \ln(1.5)+\varepsilon\approx (1.405+\varepsilon)$, improving upon the previous bound of $1 + \ln 2 + \varepsilon \approx (1.693 + \varepsilon)$. We also give an almost tight $(1.5+\varepsilon)$ absolute approximation guarantee, improving upon the previous bound of 2 by Kellerer, Kotov [Oper. Res. Lett. '03]. For the $d$-dimensional case, we get a guarantee, improving upon the previous $(1 + \ln d + \varepsilon)$ guarantee by Bansal, Caprara, Sviridenko [FOCS '06]. Here $(1 + \ln d)$ was a natural barrier as rounding-based algorithms can not achieve better than $d$ approximation. We get around this by exploiting various structural properties of (near)-optimal packings, and using multi-objective multi-budget matching based techniques and expanding the Round \& Approx framework to go beyond rounding-based algorithms. Along the way we also prove several results that could be of independent interest. 

