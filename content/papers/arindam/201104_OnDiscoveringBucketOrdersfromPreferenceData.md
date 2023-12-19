+++
title = "On Discovering Bucket Orders from Preference Data"
authors = "Sreyash Kenkre, Arindam Khan, Vinayaka Pandit"
paper_link = "https://www14.in.tum.de/personen/khan/Arindam%20Khan_files/SDM11bucketOrder.pdf"
publication_details = "SDM-2011: Proceedings of the Eleventh SIAM International Conference on Data Mining, 2011"
conference_date = "2011-04"
notes = ""
+++

<b>Abstract:</b>
The problem of ordering a set of entities which contain 
inherent ties among them arises in many applications.
Notion of ``bucket order'' has emerged as a popular
mechanism of ranking in such settings. A bucket
order is an ordered partition of the set of entities into
``buckets''. There is a total order on the buckets, but
the entities within a bucket are treated as tied.
In this paper, we focus on discovering bucket order
from data captured in the form of user preferences. We
consider two settings: one in which the discrepancies in
the input preferences are ``local'' (when collected from
experts) and the other in which discrepancies could
be arbitrary (when collected from a large population).
We present a formal model to capture the setting of
local discrepancies and consider the following question:
``how many experts need to be queried to discover
the underlying bucket order on $n$ entities?''. We
prove an upperbound of $O(\sqrt{\log n})$. In the case of
arbitrary discrepancies, we model it as the bucket
order problem of discovering a bucket order that
best fits the data (captured as pairwise preference
statistics). We present a new approach which exploits
a connection between the discovery of buckets and the
correlation clustering problem. We present empirical
evaluation of our algorithms on real and artificially
generated datasets.

