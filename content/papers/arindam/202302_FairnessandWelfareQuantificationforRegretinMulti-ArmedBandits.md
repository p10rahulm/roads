+++
title = "Fairness and Welfare Quantification for Regret in Multi-Armed Bandits"
authors = "Siddharth Barman, Arindam Khan, Arnab Maiti, Ayush Sawarni"
paper_link = "https://ojs.aaai.org/index.php/AAAI/article/view/25829/"
publication_details = "AAAI-2023: AAAI Conference on Artificial Intelligence, 2023"
conference_date = "2023-02-01"
notes = ""
+++

<b>Abstract:</b>
We extend the notion of regret with a welfarist perspective. Focussing on the classic multi-armed bandit (MAB) framework, the current work quantifies the performance of bandit algorithms by applying a fundamental welfare function, namely the Nash social welfare (NSW) function. This corresponds to equating algorithm's performance to the geometric mean of its expected rewards and leads us to the study of Nash regret, defined as the difference between the -- a priori unknown -- optimal mean (among the arms) and the algorithm's performance. Since NSW is known to satisfy fairness axioms, our approach complements the utilitarian considerations of average (cumulative) regret, wherein the algorithm is evaluated via the arithmetic mean of its expected rewards.
This work develops an algorithm that, given the horizon of play $T$, achieves a Nash regret of $O \left( \sqrt{\frac{k \log T}{T}} \right)$, here $k$ denotes the number of arms in the MAB instance. Since, for any algorithm, the Nash regret is at least as much as its average regret (the AM-GM inequality), the known lower bound on average regret holds for Nash regret as well. Therefore, our Nash regret guarantee is essentially tight. In addition, we develop an anytime algorithm with a Nash regret guarantee of $O \left( \sqrt{\frac{k\log T}{T}} \log T \right)$. 
