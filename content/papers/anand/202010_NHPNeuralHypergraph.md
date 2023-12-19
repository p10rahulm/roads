+++
title = "NHP: Neural Hypergraph Link Prediction"
authors = "Naganand Yadati, Vikram Nitin, Madhav Nimishakavi, Prateek Yadav, Anand Louis, Partha P. Talukdar"
paper_link = "https://malllabiisc.github.io/publications/papers/nhp_cikm20.pdf"
publication_details = "CIKM 2020: 29th ACM International Conference on Information and Knowledge Management"
conference_date = "2020-10-01"
notes = ""
+++

<b>Abstract:</b>
Link prediction insimple graphs is a fundamental problem in which new links between vertices are predicted based on the observed structure of the graph. However, in many real-world applications, there is a need to model relationships among vertices that go beyond pairwise associations. For example, in a chemical reaction, relationship among the reactants and products is inherently higher-order. Additionally, there is a need to represent the direction from reactants to products. Hypergraphs provide a natural way to represent such complex higher-order relationships. Graph Convolutional Network (GCN) has recently emerged as a powerful deep learning-based approach for link prediction over simple graphs. However, their suitability for link prediction in hypergraphs is underexplored -- we fill this gap in this paper and propose Neural Hyperlink Predictor (NHP). NHP adapts GCNs for link prediction in hypergraphs. We propose two variants of NHP -- NHP-U and NHP-D -- for link prediction over undirected and directed hypergraphs, respectively. To the best of our knowledge, NHP-D is the first-ever method for link prediction over directed hypergraphs. An important feature of NHP is that it can also be used for hyperlinks in which dissimilar vertices interact (e.g. acids reacting with bases). Another attractive feature of NHP is that it can be used to predict unseen hyperlinks at test time (inductive hyperlink prediction). Through extensive experiments on multiple real-world datasets, we show NHP's effectiveness.