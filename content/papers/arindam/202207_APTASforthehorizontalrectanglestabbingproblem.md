+++
title = "A PTAS for the horizontal rectangle stabbing problem"
authors = "Arindam Khan, Aditya Subramanian, Andreas Wiese"
paper_link = "https://arxiv.org/abs/2111.05197"
publication_details = "IPCO-2022: International Conference on Integer Programming and Combinatorial Optimization, 2022"
conference_date = "2022-07"
notes = ""
+++

<b>Abstract:</b>
We study rectangle stabbing problems in which we are given $n$ axis-aligned rectangles in the plane that we want to stab, i.e., we want to select line segments such that for each given rectangle there is a line segment that intersects two opposite edges of it.

In the horizontal rectangle stabbing problem (STABBING), the goal is to find a set of horizontal line segments of minimum total length such that all rectangles are stabbed. In general rectangle stabbing problem, also known as horizontal-vertical stabbing problem (HV-Stabbing), the goal is to find a set of rectilinear (i.e., either vertical or horizontal) line segments of minimum total length such that all rectangles are stabbed. Both variants are NP-hard. Chan, van Dijk, Fleszar, Spoerhase, and Wolff [2018] initiated the study of these problems by providing constant approximation algorithms. Recently, Eisenbrand, Gallato, Svensson, and Venzin [2021] have presented a QPTAS and a polynomial-time $8$-approximation algorithm for STABBING but it is was open whether the problem admits a PTAS.

In this paper, we obtain a PTAS for STABBING, settling this question. For HV-Stabbing, we obtain a $(2+\varepsilon)$-approximation. We also obtain PTASes for special cases of HV-Stabbing: (i) when all rectangles are squares, (ii) when each rectangle's width is at most its height, and (iii) when all rectangles are $\delta$-large, i.e., have at least one edge whose length is at least $\delta$, while all edge lengths are at most $1$. Our result also implies improved approximations for other problems such as generalized minimum Manhattan network. 

