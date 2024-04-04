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
- $\mathbb N$ is the set of natural numbers
### 博弈论符号
- 博弈方$-i$ 是博弈方$i$的竞争对手
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
### Nash Equilibrium
A commonly used solution concept in game theory is the Nash Equilibrium.
::: tip Definition
A **Nash Equilibrium** of a stategic game $\langle N, (A_i), (\succsim_i)\rangle$ is the profile of actions $a^* \in A$ so that $\forall n \in N$ we have
$$(a^*{-i},a^*_i)\succsim_i(a^*_i, a_i), \forall a_i\in A_i$$
Which just basicly means for all actions the action $a^*_i$ is the best for the player $n_i$.
:::

Therefore, for a Nash equilibrium to exist, all players are in a situation where the there are only one action where the consequence of the yields the least cost.

There is also an other definition:
::: tip Definition
In the **Nash Equilibrium** of a stategic game $\langle N, (A_i), (\succsim_i)\rangle$, $\forall a_{-i}\in A_{-i}$ define $B_i(a_{-i})$ to be the set of player $i$'s best actions. Then $\forall a'_i\in A_i$
$$B_i(a_{-i})=\{a_i\in A_i:(a_{-i}, a_i)\succsim_i(a_{-i}, a'_i)\}$$
We call the set-valued function $B_i$ the **best-response function** of the player $i$.

Then, the Nash equilibrium would be the profile $a^*$ of actions for which
$$a^*_i \in B_i(a^*_{-i}), \forall i \in N$$
This definition is just basicly yielding the actions profile for player $i$ to get maximum profit as defined by $\succsim_i$.

:::
### Examples
::: warning
All cases below contains only two players with the same action profiles.
:::
These following classical games present a variety of strategic situations. All of these situations, for simplicity, are **symmetric games**.
::: tip Definition
A **Symmetric Game** is a strategic game $\langle N, (A_i), (\succsim_i)\rangle$ so that if the player set $N = \{1, 2, 3, ..., i\}$, then $A_1 = A_2 = A_3 = ... = A_i$ and $\forall i \in N$ it holds that $(a_1, a_2, a_3, ..., a_4) \succsim_i (a_1, a_2, a_3, ..., a_i)$. It just basicly means that everyone has the same set of actions and have the same preference.
:::
#### Bach or Stravinsky? (BoS)
::: tip Scenario
Two people wish to go out together to a concert of music by either Bach or Stravinsky. Their main concern is to go out together, but one person prefers Bach and the other person prefers Stravinsky.
:::
We can rephrase this situation into:
1. Player I wants to go to a concert of music by Bach
2. Player II wants to go to a concert of music by Stravinsky
3. Player I and II wants to go together

There is a common way to express the player I's and II's preferences by laying out a table like this where $f$ is the consequence map:
| I / II| $a_1$ | $a_2$ | ... | $a_n$ |
| - | - | - | - | - |
| $a_1$ | ($f_I(a_1)$, $f_{II}(a_1)$) | ($f_I(a_1)$, $f_{II}(a_2)$) | ... | ($f_I(a_n)$, $f_{II}(a_1)$)
| $a_2$ | ($f_I(a_1)$, $f_{II}(a_1)$) | ($f_I(a_1)$, $f_{II}(a_1)$) | ... | ($f_I(a_n)$, $f_{II}(a_2)$)
| ... | ... | ... | ... | ... |
| $a_m$ | ($f_I(a_1)$, $f_{II}(a_m)$) | ($f_I(a_1)$, $f_{II}(a_m)$) | ... |( $f_I(a_n)$, $f_{II}(a_m)$)

We can try to define a consequence map of $f: A \to \mathbb N$ by and construct a table like the following:
| I / II| Bach | Stravinsky |
| - | - | - |
| Bach | (2, 1) | (0, 0) |
| Stavinsky | (0, 0)| (1, 2) |

It's clear now that the two Nash equilibriums exist at $(Bach, Bach)$, $(Stravinsky, Stravinsky)$.

#### Mozart or Mahler? (MoM)
This is a type of situation where a Nash equilibrium doesn't yield what we want.

We could have a situation where two concerts of music my Mozart and Mahler are availiable, and with both players wanting to go to the concert by Mozart. By constructing the same table we get:

| I / II | Mozart |  Mahler |
| - | - | - |
| Mozart | (2, 2) | (0, 0) |
| Mahler | (0, 0) | (1, 1) |

In this case the two equilibria are $(Mozart, Mozart)$ and $(Mahler, Mahler)$. But $\sum f$ of the inferior equilibria $(Mahler, Mahler)$ is definitly smaller then the $(Mozart, Mozart)$ one, so the player will go to the Mozart concert at the same time.

#### The Prisoner's Dilemma
A very interesting and classical example.
::: tip Scenario
Two suspects in a crime are put into separate cells. If they both confess, each will be sentenced to three years in prison. If only one of them confesses, he will be freed and used as a witness against the other, who will receive a sentence of four years. If neither confesses, they will both be convicted of a minor offense and spend one year in prison.
:::

It's pretty easy to construct the consequence map. We can directly use the length of the sentence for the map, and it's still a nice $A\to \mathbb N$ map, only now the player wants $f$ to be as low as possible.

| I/II | Confess | Don't Confess |
| - | - | - |
| Confess | (3, 3) | (0, 4) |
| Don't Confess | (4, 0) | (1, 1) |

It's pretty obvious that for any player in this game, they could reach a $f$ of 0 when they confess. Because in a Nash equilibrium, players don't care about each other, so they both tend to confess. This give this game the unique equilibrium $(Confess, Confess)$.
::: warning
Note that in a Nash equilibrium, we don't care about $\sum f$. It's only when there are multiple equilibria we consider other factors such as the common profit in a game. This is why the prisoners don't both choose not to confess even though it gives the best result for both of them.
:::

#### Dove or Hawk? (DoH)

There are this sort of dilemna in socializing, too.
::: tip Scenario
Two animals are fighting over some prey. Each can behave like a dove or like a hawk. The best outcome for each animal is that in which it acts like a hawk while the other acts like a dove; the worst outcome is that in which both animals act like hawks.
:::

| I/II | Dove | Hawk |
| - | - | - |
| Dove | (3, 3) | (1, 4) |
| Hawk | (4, 1) | (3, 3) |
So the two equilibra is when the two animals act differently.

#### Matching Pennies
This is a situation where a Nash equilibrium doesn't exist.
::: tip Scenario
Each of two people chooses either Head or Tail. If the choices differ, person 1 pays person 2 a dollar; if they are the same, person 2 pays person 1 a dollar. Each person cares only about the amount of money that he receives.
:::
In this situation, two players are diametrically opposed, and there are no hope of collaboration. Such a game is call **strictly competitive**.

| I/II | Head | Tail
| - | - | - |
| Head | (-1, 1) | (1, -1) |
| Tail | (1, -1) | (-1, 1) |

There are no Nash equilibria in here.


### The Existence of a Nash Equilibrium
We can proof the existence of a Nash equilibrium by using  Kakutani's fixed point theorem.
::: tip Theorem
Let $X$ be a compact convex subset of $\mathbb R^n$ and let $f: X \to X$ be a set-valued function for which
- $\forall x \in X$ the set $f(x)$ is convex and $|f(x)| \ge 0$
- the graph of $f$ is closed (i.e. all points in the graph of $f$ have a limit in $f$)
Then $\exists x^* \in X, x^* \in f(x^*)$. Which basicly means that $x^*$ gets mapped to itself after the correspondence $f$ is applied.
:::

::: tip Theorem
**Brouwer's fixed point theorem** states that for any convex and compact $X \subset \mathbb R^n$ and a continuous correspondence map $f: X \to X$ then there exists a fixed point $x^*$ so that $f(x^*) = x^*$.
:::

And we can define a preference relation $\succsim_i$ as **quasi-concave** on $A_i$ if 
$\forall a^* \in A$ the set $\{a_i \in A_i:(a^*_{-i},a^*_i) \succsim_i a^*\}$ is convex.

::: tip Proposition 
The strategic game $\langle N, (A_i), (\succsim_i)$ has a Nash equilibrium if
- $A_i \subset \mathbb R^n$ and $A_i$ is convex and compact
- $\forall i \in N$, the relation $\succsim_i$ is 
   - Continuous
   - Quasi-concave on A

*Proof.* Define $B: A\to A$ by $B(a)=\times_{i \in N}B_i(a_{-i})$
Then the map 
- is a set-valued function which it is convex since $\succsim_i$ is quasi-concave on $A_i$
- is nonempty since $\succsim_i$ is continuous and $A_i$ is compact

$B$ also has a closed graph since $\succsim_i$ is continuous. Then by Kakutani's theorem $B$ has a fixed point, and as noted,any fixed point is a Nash equilirbium of the game. 
$\square$
:::

So therefore we have this theorem, more commonly known as **Nash Theorem**.