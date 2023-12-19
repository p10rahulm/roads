+++
title = "Simple Multi-Pass Streaming Algorithms for Skyline Points and Extreme Points"
authors = "Timothy Chan, Saladi Rahul"
paper_link = "https://drops.dagstuhl.de/opus/volltexte/2021/13667/"
publication_details = "STACS 2021: 38th International Symposium on Theoretical Aspects of Computer Science"
conference_date = "2021-03"
notes = ""
+++

<b>Abstract:</b>
In this paper, we present simple randomized multi-pass streaming algorithms for fundamental computational geometry problems of finding the skyline (maximal) points and the extreme points of the convex hull. For the skyline problem, one of our algorithm occupies $O(h)$ space and performs $O(log n)$ passes, where $h$ is the number of skyline points. This improves the space bound of the currently best known result by Das Sarma, Lall, Nanongkai, and Xu [VLDB'09] by a logarithmic factor. For the extreme points problem, we present the first non-trivial result for any constant dimension greater than two: an $O(h log^{O(1)}n)$ space and $O(log^dn)$ pass algorithm, where $h$ is the number of extreme points. Finally, we argue why randomization seems unavoidable for these problems, by proving lower bounds on the performance of deterministic algorithms for a related problem of finding maximal elements in a poset.