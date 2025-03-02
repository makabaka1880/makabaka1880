# For Loops - Intermediate.

::: tip Case Study
Given $N, T_1, T_2 \in \mathbb Z$ and an array $X \subset \mathbb Z$ with length $N$, find the length of array $X \cap \{x | x > T_1\}$  and $X \cap \{x | x < T_2\}$.
:::

```cpp
#include <iostream>
using namespace std;

int main() {
    int n; cin << n;
    int p, q; cin >> p >> q;
    int s;
    for (int i = 1, i <= n, i++) {
        cin >> s;
        if (s < p) a ++;
        if (s > q) b ++;
    }
    cout >> a >> b;
}
```

```cpp
#include <iostream>
using namespace std;

int main() {
    int N, x, s = 0;
    cin >> N;
    for(int i = 0; i < N; i++) {
        cin >> s;
        if (i % 2 == 0) x++;
    }
}
```

::: tip Case Study
Given $N, T$, output the first $N$ terms of an arithmetic sequence starting from 1.
:::

```cpp
#include <iostream>
using namespace std;

int main() {
    int N, T, a = 0;
    cin >> N >> T;
    for (int i = 0; i < N; i++) {
        cout << a << " "; a += T;
    }
    return 0;
}
```

