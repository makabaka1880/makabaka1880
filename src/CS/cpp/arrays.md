# CPP Arrays

## 0x00 Basic Manip
```cpp
int a[5] = {}; // Creates an empty array with length 5
for(int i = 0; i < 5; i++) {
    std::cin >> a[i]; // Iterates through the [0, 5] and assign each element
}
for(int i = 0; i < 5; i++) {
    std::cout << a[i]; // Iterates through the [0, 5] and prints each element
}
```

## 0x01 Applications
::: tip Case Study
Given an array $X$ of length 5, output $\Sigma X$
:::

```cpp
#include <iostream>
using namespace std;

int main() {
    int a[5], signma = 0;
    for (int i = 0, i < 5; i++) {
        cin >> a[i];
        sigma += a[i];
    }
    cout << signma;
    return 0;
}
```

::: tip Case Study
Given an Array $X$ of length $n$, do random access of $X$ at index $i$
:::

```cpp
#include <iostream>
using namespace std;

int main() {
    int a[101] = {};
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    int x;
    cin >> x;
    cout << a[x];
    return 0;
}
```

::: tip Case Study
Given an Array $X$ of length $n$, find $\mu$ and indices of all those $x \in X$ and $x > \mu$.
:::

```cpp
#include <iostream>
using namespace std;

int main() {
    int N, mu = 0; cin >> N;
    int a[100] = {};
    for (int i = 0; i < N; i++) {
        cin >> a[i];
        mu += a[i];
    }
    mu /= N;
    cout << mu << endl;
    for (int i = 0; i < N; i++) {
        if (a[i] > mu) cout << i + 1 << " ";
    }
    return 0;
}
```

## 0x02 Insertion

Start at a[:-2], and move the element at -2 to -1. Move cursor forward to -3, and vice versa.
```cpp
int a[7] = {1, 2, 3, 4, 5, 6, 0};
for (int i = 5, i >= 3; i--) { // 5 = (7 - 1) - 1, 3 is the insertion place
    a[i + 1] = a[i] // Move backwards
}
std::cin >> a[3]; // Perform insertion
```

::: tip Case Study
Given an ASCII char array $X$ of length $N$, find $x \in X$ so that $x = \max{X}$. 
:::

```cpp
#include <iostream>
using namespace std;

int main() {
    int N; cin >> N;
    char a[52] = {};
    char temp = '0';
    int ind = 0;
    for (int i = 0; i  < N; i++) {
        cin >> a[i];
        if (temp < a[i]) {
            temp = a[i]; ind = i;
        }
    }
    for (int i = N - 2; i >= ind; i--) {
        a[i + 1] = a[i];
    }
    a[ind] = '0';
    for (int i = 0; i < N; i++) {
        cout << a[i];
    }
    return 0;
}
```

::: tip Case Study
Given an int array $X$ with length $N < 100$, a value $x$ and index $i$. Insert $x$ into $X$ at $i$.
:::

```cpp
#include <iostream>
using namespace std;

int main() {
    int N, ind, val; cin >> N;
    int a[100] = {};
    for (int i = 0; i < N; i++) {
        cin >> a[i];
    }
    cin >> ind >> val;
    for (int i = N - 1; i >= ind - 1; i--) {
        a[i + 1] = a[i];
    }
    a[ind - 1] = val;

    for (int i = 0; i < N; i++) cout << a[i] << " ";
    return 0;
}
```
## 0x03 Deletion

Start at a[i], and move the element at i to i - 1. Continue vice versa.

```cpp
int a[7] = {1, 2, 3, 4, 5, 6, 0};
for (int i = 3, i < 7; i++) { // 5 = (7 - 1) - 1, 3 is the insertion place
    a[i - 1] = a[i] // Move backwards
}
```