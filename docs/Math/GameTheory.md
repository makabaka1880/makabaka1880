# 博弈论笔记
这个也是我的英文阅读笔记

[[toc]]

## Chapter 1: 符号标记
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
## Chapter 2: Nash Equilibrium 
P28\-
### 2.1 Bayesian games
::: tip Definition 1.0
A **Strategic Game** is a "model of interactive decivion making in which each descision-maker choose his plan of action once and for all, and these choices are made simultaneously." It is consisted of
1. A finite set $N$ (the set of **players**)
2. $\forall i \in N$ a nonempty set $A_i$ (the set of **actions** available for player $i$)
3. $\forall i \in N$ a preference relation $\succsim_i$ on $\times_{j\in N}A_j$ (The **preference action**. This just compares two action for player $j$ and tells whether the player prefers one action over another.)
:::
This model's abstraction made it possible for one to apply it to many situations. For example, the player may be an "individual human being or any otehr decision making entity like a government." This model has absolutely no restriction on anything the player prefers or avoids.

This model is the basis for any model for situations from market dynamics to political simulation.

There are some times where the player's preferences are over the consequences rather then the action. In this case, we extend our definition:
::: tip Definition 1.1
A stategic game is consisted of
1. ...
2. ...
3. ...
4. A nonempty set $C$ (The **consequence**)
5. A function $g: A \to C$ (**maps** actions to consequences)
6. $\forall c \in C$ a preference relationship such that $\forall a, b\in A_i$, $a\succsim_i b$ if and only if $g(a) \succsim^*_i g(b)$ (A profile of preference relation over $C$)
:::

In other cases, the game would be affected by an exogenous randoms variable whose realization is not known to the players before a action is done. In this case, an additional modification could be made:

::: tip Definition 1.2
A stategic game is consisted of
1. ...
2. ...
3. ...
4. ...

5. A probability space $\Omega$ (The **random variable**)
6. $\forall c \in C$ a preference relationship such that $\forall a, b\in A_i$, $a\succsim_i b$ if and only if the lottery over $C$ induced by $g(a,\cdot)$ is at least as good accoding to $\succsim^*_i$ as the lottery induced by $g(b, \cdot)$ (A profile of preference relation over $C$)
7. A function $g: A \times \Omega \to C$ (**maps** actions to consequences with **random variable**)
:::

### 2.2 Nash Equilibrium
A commonly used solution concept in game theory is the Nash Equilibrium.
::: tip Definition 2.0
A **Nash Equilibrium** of a stategic game $\langle N, (A_i), (\succsim_i)\rangle$ is the profile of actions $a^* \in A$ so that $\forall n \in N$ we have
$$(a^*{-i},a^*_i)\succsim_i(a^*_i, a_i), \forall a_i\in A_i$$
Which just basicly means for all actions the action $a^*_i$ is the best for the player $n_i$.
:::

Therefore, for a Nash equilibrium to exist, all players are in a situation where the there are only one action where the consequence of the yields the least cost.

There is also an other definition:
::: tip Definition 2.1
In the **Nash Equilibrium** of a stategic game $\langle N, (A_i), (\succsim_i)\rangle$, $\forall a_{-i}\in A_{-i}$ define $B_i(a_{-i})$ to be the set of player $i$'s best actions. Then $\forall a'_i\in A_i$
$$B_i(a_{-i})=\{a_i\in A_i:(a_{-i}, a_i)\succsim_i(a_{-i}, a'_i)\}$$
We call the set-valued function $B_i$ the **best-response function** of the player $i$.

Then, the Nash equilibrium would be the profile $a^*$ of actions for which
$$a^*_i \in B_i(a^*_{-i}), \forall i \in N$$
This definition is just basicly yielding the actions profile for player $i$ to get maximum profit as defined by $\succsim_i$.
:::

### 2.3 Examples
::: warning
All cases below contains only two players with the same action profiles.
:::
These following classical games present a variety of strategic situations. All of these situations, for simplicity, are **symmetric games**.
::: tip Definition 3.0
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


### 2.4 The Existence of a Nash Equilibrium
We can proof the existence of a Nash equilibrium by using  Kakutani's fixed point theorem.
::: tip Theorem 4.0
Let $X$ be a compact convex subset of $\mathbb R^n$ and let $f: X \to X$ be a set-valued function for which
- $\forall x \in X$ the set $f(x)$ is convex and $|f(x)| \ge 0$
- the graph of $f$ is closed (i.e. all points in the graph of $f$ have a limit in $f$)
Then $\exists x^* \in X, x^* \in f(x^*)$. Which basicly means that $x^*$ gets mapped to itself after the correspondence $f$ is applied.
:::

::: tip Theorem 4.1
**Brouwer's fixed point theorem** states that for any convex and compact $X \subset \mathbb R^n$ and a continuous correspondence map $f: X \to X$ then there exists a fixed point $x^*$ so that $f(x^*) = x^*$.
:::

And we can define a preference relation $\succsim_i$ as **quasi-concave** on $A_i$ if 
$\forall a^* \in A$ the set $\{a_i \in A_i:(a^*_{-i},a^*_i) \succsim_i a^*\}$ is convex.

::: tip Proposition 4.2
The strategic game $\langle N, (A_i), (\succsim_i)$ has a Nash equilibrium if
- $A_i \subset \mathbb R^n$ and $A_i$ is convex and compact
- $\forall i \in N$, the relation $\succsim_i$ is 
   - Continuous
   - Quasi-concave on A

*Proof.* Define $B: A\to A$ by $B(a)=\times_{i \in N}B_i(a_{-i})$
Then the map 
- is a set-valued function which it is convex since $\succsim_i$ is quasi-concave on $A_i$
- is nonempty since $\succsim_i$ is continuous and $A_i$ is compact

$B$ also has a closed graph since $\succsim_i$ is continuous. Then by Kakutani's theorem $B$ has a fixed point. By definition, this function takes in the best-response actions of last round, and gives the best-reponse actions this round. Therefore, a fixed point means that there is a situation where the strategy is to use the same actions last round, which, by definition, is the Nash equilibrium of the game.
$\square$
:::

The proposition is more commonly known as **Nash Theorem**.

::: tip Theorem 4.4
**Nash theorem** for any game $\langle N, (A_i), (\succsim_i)\rangle$, if the action set is a convex and compact subset of a Euclidean space and $\forall i \in N$ the realtion $\succsim_i$ is continuous and quasi-concave on $A_i$ then there exists a Nash equilibrium for the game.
:::

::: tip Example
Consider a two-person strategic game that satisfies the conditions of Proposition 4.3. Let $N = {1, 2}$ and assume that the game is symmetric: $A_1 = A_2$ and $(a_1, a_2) \succsim_i (b_1, b_2)$ if and only if $(a_2,a_1) \succsim_i (b_2,b_1)$ for all $a \in A$ and $b \in A$. Then proof, using Kakutani's theorem, that there is an action $a^*_1 \in A_1$ such that $(a^*_1, a^*_1)$ is a Nash equilibrium of the game.

*Proof.* Now consider a map $F(a) = \{(a, a') \in \times^2 A \mid (a, a') \succsim_i (b, b') \forall b, b' \in A\}$. This because the game satisfy the conditions of proposition 1.3, then according to the Nash theorem, the map over this set of actions generated by the cartesian product $A \times A$ must have a unique Nash equilibrium. Considering the set $F(a^*)$, then $a^*$ must be in it, so the Nash equilibrium $(a^*, a^*)$ must be symmetric.
:::

### 2.5 Strictly Competitive Games
While it is pretty hard to find Nash equilibria of an arbitrary strategic games, there are a few exceptions.
::: tip Definition 5.0
A strategic game $\langle\{1, 2\}, (A_i), (\succsim_i)\rangle$ is **strictly competitive** when $\forall a, b \in A$ we have $a \succsim_1 b$ if and only if $a \precsim_2 b$. This just means that for two players competing, an action $a$ is only better then $b$ for player 1 when it is worse for player 2. Strictly competitive games are also called zerosums because the payoff function $u_i$ for the two players add up to $u_1 + u_2 = 0$.
:::

When player $i$ maxminimizes his actions, that means that it is best for him on the assumption that whatevery he does, his opponent $j$ will try her best to hurt him as much as possible. *This can only happen under a strictly competitive game*. In a sense, the maximinimizer is the best-response function in a strictly competitive game.

Now we want to show that in a strictly competitive game, the tuples of maxminimizers for every player is the Nash equilibria.

::: tip Definition 5.1
let $\langle \{1, 2\}, (A_i), (u_i)$ be a strictly competitive game. Then the action $x^* \in A$ is a **maxminimizer for player 1** if 
$$ \min_{y\in A_2}{u_1(x^*, y)} \geq \min_{y\in A_2}{u_1(x, y)}\quad \forall x \in A_1$$
This basically means maximizing $u(x^*, y)$ for player 1, and making it at least as good as any other $u(x, y)$.
Here, operater $\min$ means finding the smallest value for the expression the operator is acting on, while maintaining the expression in the subscript true. Ex, $\min_{x \geq 3, x \in \mathbb N}{x^2} \leq 10$, then $x = 3$.
:::

Similarly, the maxminimizer for player 2 is $y^*$ if 
$$ \min_{y\in A_1}{u_2(x, y^*)} \geq \min_{y\in A_1}{u_2(x, y)}\quad \forall y \in A_2$$

> In words, a maxminimizer for player i is an action that maximizes the payoff that player i can guarantee. A maxminimizer for player 1 solves the problem maxx miny u1(x,y) and a maxminimizer for player 2 solves the problem maxy minx u2(x, y).

We will assume for convenience that $u_i$ means that payoff function for player $i \in N$.

::: tip Lemma 5.2
Let $\langle \{1, 2\}, (A_i), (u_i)$ be a strictly competitive game. Then 
$$\max_{y\in A_2}{\min_{x\in A_1}{u_2(x, y)}} = -\min_{y\in A_2}{\max_{x\in A_1}{u_1(x,y)}}$$
*Proof*. We know that for any function $f$ we have $\min_{x} {-f(x)} = -\max_{x} {f(x)}$ also $\arg\min_x{-f(x)}=\arg\max_x{f(x)}$. This follows that $\forall y\in A_2$ we have $-\min_{x\in A_2}{u_2(x, y)} = \max_{x\in A_2}{-u_2(x, y)}$ which is also $\max_{x\in A_2}{u_1(x, y)}$. This follows that $\max_{y\in A_2}{\min_{x\in A_1}{u_2(x, y)}} = -\min_{y\in A_2}{\max_{x\in A_1}{u_1(x,y)}}$.
$\square$
:::

Then the following results give the connection between the Nash equilibria of a strictly competitiev game and the set of pairs of maxminimizers.

::: tip Proposition 5.3
Let $G= \langle\{1, 2\}, (A_i), (\succsim_i)\rangle$ be a strictly competitive game.
1. If $(x^*, y^*)$ is a Nash equilibrium of G then $x^*$ is a maxminimizer for player 1 and $y^*$ is a maxminimizer for player 2.
2. If $(x^*, y^*)$ is a Nash equilibrium of G then $\max_{x}{\min_{y}{u_1(x, y)}} = \min_{y}{\max_{x}{u_1(x, y)}} = u_1(x, y)$. Thus the Nash equilibria of G yield the same payoffs.
3. Proof the converse statement of (1).

*Proof.* Let's first proof (1) and (2). 
1. Let $(x^*, y^*)$ be a Nash equilibrium for the game $G$. Then $u_1(x^*, y) \geq u_1(x, y) \quad \forall x, y \in A$, and it follows that $\min_{y\in A_2}{u_1(x^*, y)} \geq \min_{y\in A_2}{u_1(x, y)} \quad \forall x \in A_1$. It can be proved the same way the $y^*$ is the maxminimizer for player 2. (I don't like the proof from the book. It's too lengthy)
2. I'm not sure how to proof this explicitly, but intuitively it seems that $\max_x\min_y$ means maximizing x and minimizing y, which is the maxminimizer for player 1, and it can be proved similarly for player 2. And the cartesian product of all the player's maxminimizers has been proved to be a Nash equilibrium, then the lemma holds.
3. Let $v^* = \max_x{\min_y{u_1(x,y)}}$. Then because we want to prove the situation where it has a nash equilibrium, then $v^*$ also equals to $\min_y{\max_x{u_1(x,y)}}$. By lemma 5.2, we have $v^*=-\max_y{\min_x{u_2(x, y)}}$. Then let $x^*$ be a maxminimizer for player 1 then $u_1(x^*, y) \geq v^*\quad \forall y\in A_2$. In similar method it is easy to obtain that $u_2(x, y^*) \geq v^*\quad \forall x\in A_1$. By combining these two inequalities, we get $u_2(x^*, y^*) = v^*$. By using $u_1 + u_2 = 0$, we have proved that this is the Nash equilibrium.
:::

Now some useful facts. By part (c), we have proved that the players' Nash equilibrium strategies could be found by two problems:
1. Finding the maxima with respect to $x \in A_1$ of minima with respect to $y \in A_2$ of $u_1(x,y)$. This is basicly $\max_{x\in A_1}{\min_{y \in A_2}{u_1(x, y)}}$.
2. Finding the maxima with respect to $y \in A_2$ of minima with respect to $x \in A_1$ of $u_2(x,y)$. This is basicly $\max_{y\in A_2}{\min_{x \in A_1}{u_2(x, y)}}$.

Note that also part (a) and (c) implies that the Nash equilibria of a strictly competitive game is **interchangeable**.

::: tip Definition 5.4
For a game's equilibria to be interchangeable, then if $(x, y)$ and $(x', y')$ are Nash equilibria of a strategic game, then so are $(x', y)$ and $(x, y')$.

Part (b) of preposition 5.3 also implies that $\max_x{\min_y{u_1(x, y)}} = \min_y{\max_y{u_1(x,y)}}$ for all strictly competitive games. Further extending the general inequality of $\max_{x}{\min_y{u_1(x,y)}} \leq \min_{y}{\max_{x}{u_1(x, y)}}$ give us that for any $x'$, we have $u_1(x', y) \leq \max_x{u_1(x, y)}$ for all $y$, so that $\min_y{u_1(x', y)} \leq \min_y{\max_x{u_1(x, y)}}$. This basicly means that for any best-response action $x'$, no matter what the other player do($\min_y{u_1}$ actually means minimizing $u_1$ with the action $y$, so under a strictly competitive game, this is equivilent to $\max_y{u_2}$), it will always be the best response action for player 1.
:::

> Thus in any game (whether or not it is strictly competitive) the payoff that player 1 can guarantee herself is at most the amount that player 2 can hold her down to.

The hypothesis that the game has a Nash equilibrium is essential in establishing the opposite inequality.
For example, in the game [*Matching Pennies*](#matching-pennies), $\max_x{\min_y{u_1(x, y)}} = -1$ but $\min_y{\max_x{u_1(x, y)}} = 1$. To think about it, this game is sort of completely random. The order of the $\max$ and the $\min$ directly effected the outcome, since the last to decide the action(which coin side to flip) have enough information to guarantee a success in the game.

::: tip Definition 5.5
If $\max_x{\min_y{u_1(x^*, y^*)}}=\min_y{\max_x{u_1(x^*, y^*)}}$, that is, $(x^*, y^*)$ is a Nash equilibrium of the game then $u_1(x^*, y^*)$ is called the **value** of the game.
:::

This follows that if $v^*$, as defined in Proposition 5.3, is the value of a game, then it is guarateened that the payoff of player is at least her equilibrium payoff $v^*$. It follows that any equilibrium strategy of player 2 guaruntees that his payoff is at least $-v^*$.


### 2.6 Bayesian Games: Strategic Games with Imperfect Information

Sometimes, we wish to model situations in which some of the players are not certain of characteristic of other parties. The model of a Baysesian game, which is closely related to that of a strategic game, is designed for this purpose. Definition 1.2 is sort of like the strandard model.

::: tip Definition 6.0
A **Bayesian Game** is consisted of a set $N$ of players and a profile $(A_i)$ of actions. There are also a set $\Omega$ of possible "state of nature", each of which is a description of all the players’ relevant characteristics. For convenience we assume that $\Omega$ is finite. Each player $i$ has a *prior belief* about the stat of nature given by a probability measure $p_i$ on $\Omega$.$p_i(\omega)$ basicly just means the how much the player believes the situation $\omega$ is true. In any given play of the game some state of nature $\omega \in \Omega$ is realized. We model that players' information about the state of nature by a profile $(\tau_i)$ of *signal functions*, and $\tau_i(\omega)$ being the signal preceived by player i under the realization $\omega$. Let $T_i$ be the set of all possible values of $\tau_i$, and we refer to $T_i$ as the set of *types* of player i(This is just the collection of all possible state the player i thought the game is in). We assume $p_i(\tau^{-1}_i(t_i))$(The possibility the player $i$ think the state $t_i$ is true) $> 0$. The player isn't absolutely negative about anything. If player $i$ received the signal $t_i \in T_i$ the he deduces the the state is in the set $\tau_i^{-1}(t_i)$; the *posterior belief* about the state that has been realized assigns to each state $\omega \in \Omega$ the probability $\frac{p_i(\omega)}{p_i(\tau_i^{-1}(t_i))}$(How close is the player to the truth is, if you think about it, with $p_i(\omega)$ as the truth and $p_i(\tau^{-1}(t_i))$ what the player think is the truth) if $\omega \in \tau_i^{-1}(t_i)$ and the probability zero otherwise (i.e. the probability of $\omega$ conditional on $\tau^{-1}(t_i)$). As an example, if $\tau^{-1}(t_i) = \omega$ for all $\omega \in \Omega$ then player $i$ has full information about the state of nature. Alternatively, if $\Omega = \times_{i\in N}T_i$ and for each player $i$ the probability measure $p_i$ is a product measure on $\Omega$ and $\tau_i(\omega) = \omega_i$ then the players’ signals are independent and player $i$ does not learn from his signal anything about the other players’ information.
:::

<Vssue/>