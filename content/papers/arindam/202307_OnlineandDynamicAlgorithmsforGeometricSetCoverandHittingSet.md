+++
title = "Online and Dynamic Algorithms for Geometric Set Cover and Hitting Set"
authors = "Arindam Khan, Aditya Lonkar, Saladi Rahul, Aditya Subramanian, Andreas Wiese"
paper_link = "https://drops.dagstuhl.de/opus/volltexte/2023/17896/pdf/LIPIcs-SoCG-2023-46.pdf"
publication_details = "SoCG-2023: Symposium on Computational Geometry, 2023"
conference_date = "2023-07"
notes = ""
+++

<b>Abstract:</b>
Set cover and hitting set are fundamental problems in combinatorial optimization which are well-studied in the offline, online, and dynamic settings. We study the geometric versions of these problems and present new online and dynamic algorithms for them. In the online version of set cover (resp. hitting set), $m$ sets (resp. $n$ points) are given and $n$ points (resp. $m$ sets) arrive online, one-by-one. In the dynamic versions, points (resp. sets) can arrive as well as depart. Our goal is to maintain a set cover (resp. hitting set), minimizing the size of the computed solution.

For online set cover for (axis-parallel) squares of arbitrary sizes, we present a tight $O(\log n)$-competitive algorithm. In the same setting for hitting set, we provide a tight $O(\log N)$-competitive algorithm, assuming that all points have integral coordinates in $[0,N)^{2}$. No online algorithm had been known for either of these settings, not even for unit squares (apart from the known online algorithms for arbitrary set systems).

For both dynamic set cover and hitting set with $d$-dimensional hyperrectangles, we obtain $(\log m)^{O(d)}$-approximation algorithms with $(\log m)^{O(d)}$ worst-case update time. This partially answers an open question posed by Chan et al. [SODA'22]. Previously, no dynamic algorithms with polylogarithmic update time were known even in the setting of squares (for either of these problems). Our main technical contributions are an \emph{extended quad-tree }approach and a \emph{frequency reduction} technique that reduces geometric set cover instances to instances of general set cover with bounded frequency. 

