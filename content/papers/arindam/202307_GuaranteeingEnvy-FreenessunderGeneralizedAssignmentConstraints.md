+++
title = "Guaranteeing Envy-Freeness under Generalized Assignment Constraints"
authors = "Siddharth Barman, Arindam Khan, Sudarshan Shyam, K. V. N. Sreenivas"
paper_link = "https://arxiv.org/abs/2305.01339"
publication_details = "EC-2023: ACM Conference on Economics and Computation, 2023"
conference_date = "2023-07"
notes = ""
+++

<b>Abstract:</b>
We study fair division of goods under the broad class of generalized assignment constraints. In this constraint framework, the sizes and values of the goods are agent-specific, and one needs to allocate the goods among the agents fairly while further ensuring that each agent receives a bundle of total size at most the corresponding budget of the agent. Since, in such a constraint setting, it may not always be feasible to partition all the goods among the agents, we conform -- as in recent works -- to the construct of charity to designate the set of unassigned goods. For this allocation framework, we obtain existential and computational guarantees for envy-free (appropriately defined) allocation of divisible and indivisible goods, respectively, among agents with individual, additive valuations for the goods.

We deem allocations to be fair by evaluating envy only with respect to feasible subsets. In particular, an allocation is said to be feasibly envy-free (FEF) iff each agent prefers its bundle over every (budget) feasible subset within any other agent's bundle (and within the charity). The current work establishes that, for divisible goods, FEF allocations are guaranteed to exist and can be computed efficiently under generalized assignment constraints.

In the context of indivisible goods, FEF allocations do not necessarily exist, and hence, we consider the fairness notion of feasible envy-freeness up to any good (FEFx). We show that, under generalized assignment constraints, an FEFx allocation of indivisible goods always exists. In fact, our FEFx result resolves open problems posed in prior works. Further, for indivisible goods and under generalized assignment constraints, we provide a pseudo-polynomial time algorithm for computing FEFx allocations, and a fully polynomial-time approximation scheme (FPTAS) for computing approximate FEFx allocations. 

