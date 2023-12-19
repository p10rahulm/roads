+++
title = "A 3-Approximation Algorithm for Maximum Independent Set of Rectangles"
authors = "Waldo G\'alvez, Arindam Khan, Mathieu Mari, Tobias M\"omke, Madhusudhan Reddy Pittu, and Andreas Wiese"
paper_link = "https://epubs.siam.org/doi/pdf/10.1137/1.9781611977073.38"
publication_details = "SODA-2022: ACM-SIAM Symposium on Discrete Algorithms, 2022"
conference_date = "2022-01-01"
notes = ""
+++

<b>Abstract:</b>
We study the Maximum Independent Set of Rectangles (MISR) problem, where we are given a set of axis-parallel rectangles in the plane and the goal is to select a subset of non-overlapping rectangles of maximum cardinality. In a recent breakthrough, Mitchell [2021] obtained the first constant-factor approximation algorithm for MISR. His algorithm achieves an approximation ratio of $10$ and it is based on a dynamic program that intuitively recursively partitions the input plane into special polygons called corner-clipped rectangles (CCRs), without intersecting certain special horizontal line segments called fences.

In this paper, we present a $3$-approximation algorithm for MISR which is also based on a recursive partitioning scheme. First, we use a partition into a class of axis-parallel polygons with constant complexity each that are more general than CCRs. This allows us to provide an arguably simpler analysis and at the same time already improves the approximation ratio to $6$. Then, using a more elaborate charging scheme and a recursive partitioning into general axis-parallel polygons with constant complexity, we improve our approximation ratio to $3$. In particular, we construct a recursive partitioning based on more general fences which can be sequences of up to $O(1)$ line segments each. This partitioning routine and our other new ideas may be useful for future work towards a PTAS for MISR. 

