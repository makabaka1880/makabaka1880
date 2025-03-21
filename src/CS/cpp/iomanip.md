# I/O Manipulation Header

## 0x00 IOManip Usage
```cpp
#include <iomanip.h>
```

## 0x00 Methods

### Set Width
```cpp
setw(n)
```
::: tip Case Study
Output 10 chars, filling in blank ones with spaces.
```
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    string n;
    cin >> n;
    cout << left << setw(10) << n << endl;
    return 0;
}
:::

::: tip Case Study
Pretty-printing datetime:

```cpp
#include <iostream>
#include <iomanip>
#include <cstring>
using namespace std;

int main() {
    int y, m, d;
    cin << y << m << d;
    cout << y << '-' << setw(2) << m << '-' << setw(2) << d;
}
:::

### Set Fill

```cpp
setfill(n);
```

::: tip Case Study

Output 10 chars, filling in blank ones with dashes.
```cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    string n;
    cin >> n;
    cout << setfill('-') << setw(10)<< n << endl;
    return 0;
}
```
:::
