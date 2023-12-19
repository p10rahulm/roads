+++
title = "Geometry Meets Vectors: Approximation Algorithms for Multidimensional Packing"
authors = "Arindam Khan, Eklavya Sharma, K. V. N. Sreenivas"
paper_link = "https://drops.dagstuhl.de/opus/volltexte/2022/17415/pdf/LIPIcs-FSTTCS-2022-23.pdf"
publication_details = "FSTTCS-2022: Foundations of Software Technology and Theoretical Computer Science, 2022"
conference_date = "2022-12"
notes = ""
+++

<b>Abstract:</b>
We study the generalized multidimensional bin packing problem (GVBP) that generalizes both geometric packing and vector packing. Here, we are given $n$ rectangular items where the $i^{\textrm{th}}$ item has width $w(i)$, height $h(i)$, and $d$ nonnegative weights $v_1(i), v_2(i), \ldots, v_{d}(i)$. Our goal is to get an axis-parallel non-overlapping packing of the items into square bins so that for all $j \in [d]$, the sum of the $j^{\textrm{th}}$ weight of items in each bin is at most $1$. This is a natural problem arising in logistics, resource allocation, and scheduling. Despite being well studied in practice, surprisingly, approximation algorithms for this problem have rarely been explored.

We first obtain two simple algorithms for GVBP having asymptotic approximation ratios $6(d+1)$ and $3(1 + \ln(d+1) + \varepsilon)$. We then extend the Round-and-Approx (R\&A) framework [Bansal-Khan, SODA'14] to wider classes of algorithms, and show how it can be adapted to GVBP. Using more sophisticated techniques, we obtain better approximation algorithms for GVBP, and we get further improvement by combining them with the R\&A framework. This gives us an asymptotic approximation ratio of $2(1+\ln((d+4)/2))+\varepsilon$ for GVBP, which improves to $2.919+\varepsilon$ for the special case of $d=1$. We obtain further improvement when the items are allowed to be rotated. We also present algorithms for a generalization of GVBP where the items are high dimensional cuboids. 

