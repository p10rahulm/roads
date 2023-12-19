+++
title = "A PTAS for Packing Hypercubes into a Knapsack"
authors = "Klaus Jansen, Arindam Khan, Marvin Lira, K. V. N. Sreenivas"
paper_link = "https://drops.dagstuhl.de/opus/volltexte/2022/16419/pdf/LIPIcs-ICALP-2022-78.pdf"
publication_details = "ICALP-2022: International Colloquium on Automata, Languages, and Programming, 2022"
conference_date = "2022-07"
notes = ""
+++

<b>Abstract:</b>
We study the $d$-dimensional hypercube knapsack problem where we are given a set of $d$-dimensional hypercubes with associated profits, and a knapsack which is a unit $d$-dimensional hypercube. The goal is to find an axis-aligned non-overlapping packing of a subset of hypercubes such that the profit of the packed hypercubes is maximized. For this problem, Harren (ICALP '06) gave an algorithm with an approximation ratio of $(1+1/2^d+epsilon)$. For $d=2$, Jansen and Solis-Oba (IPCO '08) showed that the problem admits a polynomial-time approximation scheme (PTAS); Heydrich and Wiese (SODA '17) further improved the running time and gave an efficient polynomial-time approximation scheme (EPTAS). Both the results use structural properties of $2$-D packing, which do not generalize to higher dimensions. For $d>2$, it remains open to obtain a PTAS, and in fact, there has been no improvement since Harren's result.

We settle the problem by providing a PTAS. Our main technical contribution is a structural lemma which shows that any packing of hypercubes can be converted into another structured packing such that a high profitable subset of hypercubes is packed into a constant number of special hypercuboids, called $\mathcal{V}$-Boxes and $\mathcal{N}$-Boxes. As a side result, we give an almost optimal algorithm for a variant of the strip packing problem in higher dimensions. This might have applications for other multidimensional geometric packing problems. 

