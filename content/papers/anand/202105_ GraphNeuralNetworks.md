+++
title = "Graph Neural Networks for Soft Semi-Supervised Learning on Hypergraphs"
authors = "Naganand Yadati, Tingran Gao, Shahab Asoodeh, Partha P. Talukdar, Anand Louis: "
paper_link = "https://scholar.harvard.edu/files/shahab/files/dhn_pakdd21.pdf"
publication_details = "PAKDD 2021: 25th Pacific-Asia Conference on Knowledge Discovery and Data Mining"
conference_date = "2021-05-01"
notes = ""
+++


<b>Abstract:</b>
Graph-based semi-supervised learning (SSL) assigns labels to initially unlabelled vertices in a graph. Graph neural networks (GNNs), esp. graph convolutional networks (GCNs), are at the core of the current-state-of-the art models for graph-based SSL problems. GCNs have recently been extended to undirected hypergraphs in which relationships go beyond pairwise associations. There is a need to extend GCNs to directed hypergraphs which represent more expressively many real-world data sets such as co-authorship networks and recommendation networks. Furthermore, labels of interest in these applications are most naturally represented by probability distributions. Motivated by these needs, in this paper, we propose a novel GNN-based method for directed hypergraphs, called Directed Hypergraph Network (DHN) for semi-supervised learning of probability distributions (Soft SSL). A key contribution of this paper is to establish generalisation error bounds for GNN-based soft SSL. In fact, our theoretical analysis is quite general and has straightforward applicability to DHN as well as to existing hypergraph methods. We demonstrate the effectiveness of our method through detailed experimentation on real-world datasets. We have made the code available.
