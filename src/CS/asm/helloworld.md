# Hello World!

Everything starts with a hello world.

## 0. Source code overview

First of all, here's the final code:

```asm
.global _start
.align 4

_start: mov X0, #1
        adr X1, helloworld
        mov X2, #13
        mov X16, #4
        svc #0x80

        mov X0, #0
        mov X16, #1
        svc #0x80

helloworld: .ascii "Hello World!\n"
```

ASM directly interacts with the hardware, which eliminates any possibilities of using high-level methods such as `print` in py or `std::cout` in cpp. This meant that we'll need to directly communicate with the kernel and direct the string from creation to stdout.

## 1. Walkthrough

### 1x00 Overall structure

The program is divided into three sections:

::: tabs

@tab Initialization
This section defines the global entry point (`_start`) and ensures proper alignment for the code.
```asm
.global _start
.align 4
```

@tab Main Program
This is the main execution logic. It outputs “Hello World!” to the screen and then exits the program.
```asm
_start: mov X0, #1             ; File descriptor 1 (stdout)
        adr X1, helloworld     ; Load address of the string into X1
        mov X2, #13            ; Length of the string
        mov X16, #4            ; System call number for write
        svc #0x80              ; Make the system call

        mov X0, #0             ; Exit code 0
        mov X16, #1            ; System call number for exit
        svc #0x80              ; Make the system call
```

@tab Data Section
This section defines the helloworld label, which stores the “Hello World!” string.
```asm
helloworld: .ascii "Hello World!\n"
```
:::

### 1x01 Initialization

Let's look at the first lines

```asm
.global _start
.align 4
```

The first line declared the `_start` label as global. This is not the same as [variable scopes](/CS/cpp/variables), since it is to make sure that the assembler and linker can access the label.

::: tip Labels
The first line declared the `_start` label as global. This is not the same as [variable scopes](/CS/cpp/variables), since it is to make sure that the assembler and linker can access the label.

::: tip Labels
Labels in assembly are **identifiers** that mark specific locations in your code. They represent memory addresses and can be referenced to jump or point to instructions or data. 

### Key Features of Labels:
- **Definition**: A label is written as `name:` (e.g., `_start:`). 
- **Reference**: Instructions like `b` (branch) or `adr` (address register) can use labels to point to these locations.
- **Scope**: Labels can be local (within one file) or global (accessible across files, marked with `.global`).

Common usage contains
1. **Entry Point**: `_start:` is a label used as the program entry point.
2. **Data Reference**: Labels like `helloworld:` point to memory locations where data (e.g., strings) are stored.
3. **Control Flow**: Labels can be targets for branching (e.g., loops or conditionals).

Example:
```asm
.global _start   ; Makes the _start label global
_start:          ; Marks the program entry point
    b loop       ; Branch to the 'loop' label

loop:
    nop          ; Do nothing
    b loop       ; Infinite loop
```
:::

Here, `_start` is declared as the entry point of the program, similar to `int main()` in cpp or `if __name__ = "__main__"` in py.

The `.align 4` ensures that the following label or data is aligned to a 4-byte boundary. In assembly, alignment means arranging data in memory at addresses that are multiples of a specified power of 2 (in this case, $2^2 = 4$).


