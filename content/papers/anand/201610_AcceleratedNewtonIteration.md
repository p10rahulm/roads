+++
title = "Accelerated Newton Iteration for Roots of Black Box Polynomials"
authors = "Anand Louis, Santosh S. Vempala"
paper_link = "https://arxiv.org/abs/1511.03186"
publication_details = "FOCS 2016: 57th Annual Symposium on Foundations of Computer Science"
conference_date = "2016-10"
notes = ""
+++

<b>Abstract:</b>
We study the problem of computing the largest root of a real rooted polynomial p(x) to within error \varepsilon given only black box access to it, i.e., for any x \in {\mathbb R}, the algorithm can query an oracle for the value of p(x), but the algorithm is not allowed access to the coefficients of p(x). A folklore result for this problem is that the largest root of a polynomial can be computed in O(n \log (1/\varepsilon )) polynomial queries using the Newton iteration. We give a simple algorithm that queries the oracle at only O(\log n \log(1/\varepsilon )) points, where n is the degree of the polynomial. Our algorithm is based on a novel approach for accelerating the Newton method by using higher derivatives. 
As a special case, we consider the problem of computing the top eigenvalue of a symmetric matrix in {\mathbb Q}^{n \times n} to within error \varepsilon in time polynomial in the input description, i.e., the number of bits to describe the matrix and \log(1/\varepsilon ). Well-known methods such as the power iteration and Lanczos iteration incur running time polynomial in 1/\varepsilon, while Gaussian elimination takes \Omega(n^4) bit operations. As a corollary of our main result, we obtain a \tilde{O}(n^{\omega} \log^2 ( ||A||_F/\varepsilon )) bit complexity algorithm to compute the top eigenvalue of the matrix A or to check if it is approximately PSD (A \succeq -\varepsilon I).