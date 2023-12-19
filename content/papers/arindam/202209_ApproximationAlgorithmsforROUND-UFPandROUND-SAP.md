+++
title = "Approximation Algorithms for ROUND-UFP and ROUND-SAP"
authors = "Debajyoti Kar, Arindam Khan, Andreas Wiese"
paper_link = "https://drops.dagstuhl.de/opus/volltexte/2022/17009/pdf/LIPIcs-ESA-2022-71.pdf"
publication_details = "ESA-2022: European Symposium on Algorithms, 2022"
conference_date = "2022-09-01"
notes = ""
+++

<b>Abstract:</b>
We study ROUND-UFP and ROUND-SAP, two generalizations of the classical BIN PACKING problem that correspond to the unsplittable flow problem on a path (UFP) and the storage allocation problem (SAP), respectively. We are given a path with capacities on its edges and a set of tasks where for each task we are given a demand and a subpath. In ROUND-UFP, the goal is to find a packing of all tasks into a minimum number of copies (rounds) of the given path such that for each copy, the total demand of tasks on any edge does not exceed the capacity of the respective edge. In ROUND-SAP, the tasks are considered to be rectangles and the goal is to find a non-overlapping packing of these rectangles into a minimum number of rounds such that all rectangles lie completely below the capacity profile of the edges.

We show that in contrast to BIN PACKING, both the problems do not admit an asymptotic polynomial-time approximation scheme (APTAS), even when all edge capacities are equal. However, for this setting, we obtain asymptotic $(2+\varepsilon)$-approximations for both problems. For the general case, we obtain an $O(\log\log n)$-approximation algorithm and an $O(\log\log\frac{1}{\delta})$-approximation under $(1+\delta)$-resource augmentation for both problems. For the intermediate setting of the no bottleneck assumption (i.e., the maximum task demand is at most the minimum edge capacity), we obtain absolute $12$- and asymptotic $(16+\varepsilon)$-approximation algorithms for ROUND-UFP and ROUND-SAP, respectively. 

