# Floats in CPP

::: tip Case Study
Given $m_a, m_b, m_c \in \mathbb R$, and $\sum_{\{a, b, c\}} m ≤ m_{\max}$. Given $m_a, m_b, m_c$ through `stdin`, decide whether if m

**Answer**
```cpp
float ma, mb, mc, mmax = 10;
cin >> ma >> mb >> mc;
cout << (ma + mb + mc < 10 ? 'true' : 'false')
```
:::

## 0x00 Formatting

Use iomanip.

::: tip Case Study
```cpp
#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    float n;
    scanf("%f", &n);
    printf("%f\n", n);
    printf("%g\n", n);
    printf("%.1f\n", n);
}
```
:::