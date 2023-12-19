+++
title = "A Tight $(3/2+\varepsilon)$ Approximation for Skewed Strip Packing"
authors = "Waldo G\'alvez, Fabrizio Grandoni, Afrouz Jabal Ameli, Klaus Jansen, Arindam Khan, Malin Rau."
paper_link = "https://drops.dagstuhl.de/opus/volltexte/2020/12647/"
publication_details = "APPROX-2020: International Conference on Approximation Algorithms for Combinatorial Optimization Problems, 2020"
conference_date = "2020-08"
notes = ""
+++

<b>Abstract:</b>
In the Strip Packing problem, we are given a vertical half-strip $[0 , W] \times [0 , \infty)$ and a collection of open rectangles of width at most $W$. Our goal is to find an axis-aligned (non-overlapping) packing of such rectangles into the strip such that the maximum height $OPT$ spanned by the packing is as small as possible. It is NP-hard to approximate this problem within a factor $(3 / 2 - \varepsilon)$ for any constant $\varepsilon> 0$ by a simple reduction from the Partition problem, while the current best approximation factor for it is $(5/3 +\varepsilon)$. It seems plausible that Strip Packing admits a $(3 / 2 + \varepsilon)$ -approximation. We make progress in that direction by achieving such tight approximation guarantees for a special family of instances, which we call skewed instances. As standard in the area, for a given constant parameter $\delta> 0$, we call large the rectangles with width at least $\delta W$ and height at least $\delta OPT$, and skewed the remaining rectangles. If all the rectangles in the input are large, then one can easily compute the optimal packing in polynomial time (since the input can contain only a constant number of rectangles). We consider the complementary case where all the rectangles are skewed. This second case retains a large part of the complexity of the original problem; in particular, the skewed case is still NP-hard to approximate within a factor $(3 / 2 - \varepsilon)$, and we provide an (almost) tight $(3 / 2 + ε)$-approximation algorithm.

