# 博弈论笔记
这个也是我的英文阅读笔记

[[toc]]

## 符号标记
待完善
### 概率学
::: details Probability Space
A probability space is a mathematical construct that formalizes the concept of a random experiment. It consists of three elements:

1. **Sample Space ($S$)**: This is the set of all possible outcomes of the random experiment. For example, if you're rolling a fair six-sided die, the sample space would be $S = \{1, 2, 3, 4, 5, 6\}$.

2. **Event Space ($\mathcal{F}$)**: This is a collection of subsets of the sample space $S$, called events, such that certain rules are satisfied. These rules usually include that the sample space $S$ and the empty set $\emptyset$ are in $\mathcal{F}$, and that the event space is closed under complements (if $A$ is in $\mathcal{F}$, then so is its complement) and countable unions (the union of countably many events in $\mathcal{F}$ is also in $\mathcal{F}$).

3. **Probability Measure ($P$)**: This is a function that assigns a probability to each event in the event space. The probability measure $P$ satisfies certain properties, such as:
   - Non-negativity: $P(A) \geq 0$ for all events $A$.
   - Normalization: $P(S) = 1$, indicating that the probability of the entire sample space is 1.
   - Countable additivity: If $A_1, A_2, \ldots$ are pairwise disjoint events (i.e., they have no outcomes in common), then $P(\bigcup_{i=1}^{\infty} A_i) = \sum_{i=1}^{\infty} P(A_i)$.
:::
### 集合论
- $\times_{\text{Statement}}\text{Set}$ is the set produced by the Cartesian product for all elements that satisfy the statement and is in the set.
- $G \times H$ is the Cartesian product of the set $G$ and $H$

## Nash Equilibrium

P28\-
### Bayesian games
::: tip Definition
A **Strategic Game** is a "model of interactive decivion making in which each descision-maker choose his plan of action once and for all, and these choices are made simultaneously." It is consisted of
1. A finite set $N$ (the set of **players**)
2. $\forall i \in N$ a nonempty set $A_i$ (the set of **actions** available for player $i$)
3. $\forall i \in N$ a preference relation $\succsim_i$ on $\times_{j\in N}A_j$ (The **preference action**. This just compares two action for player $j$ and tells whether the player prefers one action over another.)
:::
This model's abstraction made it possible for one to apply it to many situations. For example, the player may be an "individual human being or any otehr decision making entity like a government." This model has absolutely no restriction on anything the player prefers or avoids.

This model is the basis for any model for situations from market dynamics to political simulation.

There are some times where the player's preferences are over the consequences rather then the action. In this case, we extend our definition:
::: tip Definition
A stategic game is consisted of
1. ...
2. ...
3. ...
4. A nonempty set $C$ (The **consequence**)
5. A function $g: A \to C$ (**maps** actions to consequences)
6. $\forall c \in C$ a preference relationship such that $\forall a, b\in A_i$, $a\succsim_i b$ if and only if $g(a) \succsim^*_i g(b)$ (A profile of preference relation over $C$)
:::

In other cases, the game would be affected by an exogenous randoms variable whose realization is not known to the players before a action is done. In this case, an additional modification could be made:

::: tip Definition
A stategic game is consisted of
1. ...
2. ...
3. ...
4. ...

5. A probability space $\Omega$ (The **random variable**)
6. $\forall c \in C$ a preference relationship such that $\forall a, b\in A_i$, $a\succsim_i b$ if and only if the lottery over $C$ induced by $g(a,\cdot)$ is at least as good accoding to $\succsim^*_i$ as the lottery induced by $g(b, \cdot)$ (A profile of preference relation over $C$)
7. A function $g: A \times \Omega \to C$ (**maps** actions to consequences with **random variable**)
:::
