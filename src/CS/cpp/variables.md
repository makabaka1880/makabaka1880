# Variables

Not all ariables are globally accessible.

```cpp
int y = 50;
void test() {
    cout >> y;
}
test()
```

This var is initiated **outside** the function, thus accessible to it.

```stdout
50
```

Now consider code snippet

```cpp
int y = 50;
void test() {
    int y = 60;
    cout >> y;
}
test()
```

The program now outputs this:

```stdout
60
```

This is because y is mutated inside `test`.

However:

```cpp
int y = 50;
void test() {
    int y = 60;
    cout >> y;
}

int main() {
    test(); // 1
    cout << y; // 2
    return 0;
}
```

Gives us

```stdout
50 // 1
60 // 2
Program exited with code 0.
```

Why?

## 0x01 Variable Scope

```flow:vue

st=>start: Start
end=>end: return 0;
iy=>operation: int y = 50;
cond=>condition: branching
test=>operation: test()
testdef=>operation: int test() {}
muty=>operation: y = 60;
y60=>operation: stdout = 60
y50=>operation: stdout = 50

st->iy->cond

cond(no@test)->test->muty->y60
cond(yes@main)->y50

```
As seen, `y` is defined on the main branch, thus in the **global scope**. The mutation of `y` to 60 is done in the declaration of `test`, thus in the **local scope** of `test`.

# 0x02 Some other examples

```cpp
int main() {
    int i = 0;
    for (i = 1; i <= 10; i++) {}
    std::cout << i;
}
```

```flow:vue
start=>start: Start
end=>end: return 0;
initi=>operation: int i = 0;
cond=>condition: i <= 10
increi=>operation: i++;
output=>operation: std::cout << i;
start->initi(right)->increi->cond
cond(yes, right)->increi
cond(no)->output->end
```

## 0x03 Addresses
An address can be passed to a function in order to make the variable mutatable inside the func. It acts like an index pointing to the address of the var inside the memory.

The address of var `a` can be accessed by `&a`.

::: important 
Addresses are not pointers.
:::