+++
title = "Improved Approximation Algorithms for 2-Dimensional Knapsack: Packing into Multiple L-Shapes, Spirals, and More"
authors = "Waldo G\'alvez, Fabrizio Grandoni, Arindam Khan, Diego Ramírez-Romero, Andreas Wiese"
paper_link = "https://arxiv.org/abs/2103.10406"
publication_details = "SoCG-2021: International Symposium on Computational Geometry, 2021"
conference_date = "2021-07"
notes = ""
+++

<b>Abstract:</b>
In the \textsc{2-Dimensional Knapsack} problem (2DK) we are given a square knapsack and a collection of n rectangular items with integer sizes and profits. Our goal is to find the most profitable subset of items that can be packed non-overlappingly into the knapsack. The currently best known polynomial-time approximation factor for 2DK is $17/9+\varepsilon<1.89$ and there is a $(3/2+\varepsilon)$-approximation algorithm if we are allowed to rotate items by $90$ degrees [G\'alvez et al., FOCS 2017]. In this paper, we give $(4/3+\varepsilon)$-approximation algorithms in polynomial time for both cases, assuming that all input data are integers polynomially bounded in $n$.
G\'alvez et al.'s algorithm for 2DK partitions the knapsack into a constant number of rectangular regions plus one L-shaped region and packs items into those in a structured way. We generalize this approach by allowing up to a constant number of \emph{more general} regions that can have the shape of an L, a U, a Z, a spiral, and more, and therefore obtain an improved approximation ratio. In particular, we present an algorithm that computes the essentially optimal structured packing into these regions.

