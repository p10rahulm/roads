+++
title = "Tight Approximation Algorithms For Geometric Bin Packing with Skewed Items"
authors = "Arindam Khan, Eklavya Sharma"
paper_link = "https://drops.dagstuhl.de/opus/volltexte/2021/14715/pdf/LIPIcs-APPROX22.pdf"
publication_details = "APPROX-2021: International Conference on Approximation Algorithms for Combinatorial Optimization Problems, 2021"
conference_date = "2021-10"
notes = ""
+++

<b>Abstract:</b>
In the Two-dimensional Bin Packing (2BP) problem, we are given a set of rectangles of height and width at most one and our goal is to find an axis-aligned nonoverlapping packing of these rectangles into the minimum number of unit square bins. The problem admits no APTAS and the current best approximation ratio is $1.406$ by Bansal and Khan [SODA'14]. A well-studied variant of the problem is Guillotine Two-dimensional Bin Packing (G2BP), where all rectangles must be packed in such a way that every rectangle in the packing can be obtained by recursively applying a sequence of end-to-end axis-parallel cuts, also called guillotine cuts. Bansal, Lodi, and Sviridenko [FOCS'05] obtained an APTAS for this problem. Let $\lambda$ be the smallest constant such that for every set $I$ of items, the number of bins in the optimal solution to G2BP for $I$ is upper bounded by $\lambda\operatorname{opt}(I) + c$, where $\operatorname{opt}(I)$ is the number of bins in the optimal solution to 2BP for $I$ and $c$ is a constant. It is known that $4/3 \le \lambda \le 1.692$. Bansal and Khan [SODA'14] conjectured that $\lambda = 4/3$. The conjecture, if true, will imply a $(4/3+\varepsilon)$-approximation algorithm for 2BP. According to convention, for a given constant $\delta>0$, a rectangle is large if both its height and width are at least $\delta$, and otherwise it is called skewed. We make progress towards the conjecture by showing $\lambda = 4/3$ for skewed instance, i.e., when all input rectangles are skewed. Even for this case, the previous best upper bound on $\lambda$ was roughly $1.692$. We also give an APTAS for 2BP for skewed instance, though general 2BP does not admit an APTAS. 

