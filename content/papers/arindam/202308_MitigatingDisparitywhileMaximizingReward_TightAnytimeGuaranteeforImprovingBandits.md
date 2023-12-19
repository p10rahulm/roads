+++
title = "Mitigating Disparity while Maximizing Reward: Tight Anytime Guarantee for Improving Bandits"
authors = "Vishakha Patil, Vineet Nair, Ganesh Ghalme, Arindam Khan"
paper_link = "https://arxiv.org/abs/2208.09254"
publication_details = "IJCAI-2023: International Joint Conference On Artificial Intelligence, 2023"
conference_date = "2023-08-01"
notes = ""
+++

<b>Abstract:</b>
We study the Improving Multi-Armed Bandit (IMAB) problem, where the reward obtained from an arm increases with the number of pulls it receives. This model provides an elegant abstraction for many real-world problems in domains such as education and employment, where decisions about the distribution of opportunities can affect the future capabilities of communities and the disparity between them. A decision-maker in such settings must consider the impact of her decisions on future rewards in addition to the standard objective of maximizing her cumulative reward at any time. In many of these applications, the time horizon is unknown to the decision-maker beforehand, which motivates the study of the IMAB problem in the technically more challenging horizon-unaware setting. We study the tension that arises between two seemingly conflicting objectives in the horizon-unaware setting: a) maximizing the cumulative reward at any time based on current rewards of the arms, and b) ensuring that arms with better long-term rewards get sufficient opportunities even if they initially have low rewards. We show that, surprisingly, the two objectives are aligned with each other in this setting. Our main contribution is an anytime algorithm for the IMAB problem that achieves the best possible cumulative reward while ensuring that the arms reach their true potential given sufficient time. Our algorithm mitigates the initial disparity due to lack of opportunity and continues pulling an arm till it stops improving. We prove the optimality of our algorithm by showing that a) any algorithm for the IMAB problem, no matter how utilitarian, must suffer $\Omega(T)$ policy regret and $\Omega(k)$ competitive ratio with respect to the optimal offline policy, and b) the competitive ratio of our algorithm is $O(k)$. 

