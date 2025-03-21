# While Loops

## 0x00 Syntax

```cpp
while (condition) {
    do_sth();
}
```

or 

```cpp
do {
    do_sth();
} while (condition)
```

::: tip Case Study
Loops to output integers 1 - 5.

```cpp
#include <iostream>
using namespace std;
int main() {
    int i = 1;
    while (i <= 5) {
        cout << i << endl;
        i++;
    }
    return 0;
}
:::