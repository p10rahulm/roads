+++
title = "On Guillotine Separable Packings for the Two-Dimensional Geometric Knapsack Problem"
authors = "Arindam Khan, Arnab Maiti, Amatya Sharma, Andreas Wiese"
paper_link = "https://drops.dagstuhl.de/opus/volltexte/2021/13847/"
publication_details = "SoCG-2021: International Symposium on Computational Geometry, 2021"
conference_date = "2021-07"
notes = ""
+++

<b>Abstract:</b>
In two-dimensional geometric knapsack problem, we are given a set of $n$ axis-aligned rectangular items and an axis-aligned square-shaped knapsack. Each item has integral width, integral height and an associated integral profit. The goal is to find a (non-overlapping axis-aligned) packing of a maximum profit subset of rectangles into the knapsack. A well-studied and frequently used constraint in practice is to allow only packings that are guillotine separable, i.e., every rectangle in the packing can be obtained by recursively applying a sequence of edge-to-edge axis-parallel cuts that do not intersect any item of the solution. In this paper we study approximation algorithms for the geometric knapsack problem under guillotine cut constraints. We present polynomial time $(1 + \varepsilon)$-approximation algorithms for the cases with and without allowing rotations by $90$ degrees, assuming that all input numeric data are polynomially bounded in $n$. In comparison, the best-known approximation factor for this setting is $3 + \varepsilon$ [Jansen-Zhang, SODA 2004], even in the cardinality case where all items have the same profit. Our main technical contribution is a structural lemma which shows that any guillotine packing can be converted into another structured guillotine packing with almost the same profit. In this packing, each item is completely contained in one of a constant number of boxes and L-shaped regions, inside which the items are placed by a simple greedy routine. In particular, we provide a clean sufficient condition when such a packing obeys the guillotine cut constraints which might be useful for other settings where these constraints are imposed. 

