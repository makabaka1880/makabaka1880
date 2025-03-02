# C Standard I/O Legacy Methods

One can use c legacy io methods by importing the `cstdio` into the source file.

```cpp
#include <cstdio>
```

## 0x00 Using Printf

`printf` is a stdout method used in `C`. Usage as following:

- `Control Sequence` First arg.
- `Vars`, Othervars.

Output | printf | cout 
-|-|-
int | `printf("%d", a)` | `cout << a`
long | `prinf("%d", a)` | `cout << a`
float | `printf("%f", f)` | `cout << a`
double | `printf("%lf", d)` | `cout << d`
double (2 precision) | `printf("%.2lf", d)` | `cout << fixed << setprecision(2) << d`
char | `print("%c", c)` | `cout << c`
string | `print("%s, s")` | `cout << s`
mixed | `print("Int %d, Float %f", a, b)` | `cout << << "Int " << a << ", Float " << b`

```cpp
#include <cstdio>

int main() {
    int i = 1;
    long l = 15342;
    float f = 2.1;
    double lf = 3.0012;
    char a = 't';
    printf("Hello World!\ni = %d, l = %ld, f = %.2f, lf = %lf, a = %c\n", i, l, f, lf, a);
    printf("Escaping sequence: \\\\n outputs \\n");
    return 0;
}
```


## 0x01 Using Scanf

`scanf` is a stdin method used in `C`. Usage is similar to `printf`, but characters other than control sequences are not allowed. Instead of variables accessede by control sequences, an [**address**](variables.html#_0x03-addresses) is needed to be passed in sinced the var needed to be passed in.

- `Control Sequence` First arg.
- `Vars`, Othervars. Need to be an address.

Output | printf | cout 
-|-|-
int | `scanf("%d", &a)` | `cin >> a`
long | `scanf("%d", &a)` | `cin >> a`
float | `scanf("%f", &f)` | `cin >> a`
double | `scanf("%lf", &d)` | `cin >> d`
char | `print("%c", &c)` | `cin >> c`
string | `print("%s, &s")` | `cin >> s`
multiple vars | `print("%d%f", &a, &b)` | `cin >> a >> b`

```cpp
#include <cstdio>

int main() {
    int a;
    printf("Input: ");
    scanf("%d", &a);
    printf("a = %d\n", a);
}
```
