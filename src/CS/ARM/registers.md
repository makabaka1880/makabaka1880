# UNIX System Call Numbers

For AArch64/ARM64 Assembly tutorials see [here](/CS/asm/)
## Usage

```asm
.global _start
.align 4

_start:     your_code_here
            ...
            mov X16, syscall_number     ; Load syscall number
            svc #0x80                   ; Example svc on macOS
            ...                         ; Other ops
            mov X16, 0                  ; Exit
            svc #0x80                   ; Call kernel

syscall_number: .quad your_call_num_here
```


| **Register** | **Explanation**                                                                                                                                               |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **`X0`**     | First argument register and also used for the return value of a function. When calling a function, the first parameter is passed in `X0`.                     |
| **`X1`**     | Second argument register. Used to pass the second parameter to a function.                                                                                   |
| **`X2`**     | Third argument register. Used to pass the third parameter to a function.                                                                                     |
| **`X3`**     | Fourth argument register. Used to pass the fourth parameter to a function.                                                                                   |
| **`X4`**     | Fifth argument register. Used to pass the fifth parameter to a function.                                                                                     |
| **`X5`**     | Sixth argument register. Used to pass the sixth parameter to a function.                                                                                     |
| **`X6`**     | Seventh argument register. Used to pass the seventh parameter to a function.                                                                                 |
| **`X7`**     | Eighth argument register. Used to pass the eighth parameter to a function.                                                                                   |
| **`X8`**     | Often used as a special-purpose register for system calls. In many ABIs, it holds the system call number when making a syscall.                               |
| **`X9`**     | Temporary register. Caller-saved, so its value is not preserved across function calls. Used for intermediate calculations or temporary storage.               |
| **`X10`**    | Temporary register. Similar to `X9`, it is used for temporary values and is caller-saved.                                                                    |
| **`X11`**    | Temporary register. Another general-purpose register for temporary data or calculations.                                                                     |
| **`X12`**    | Temporary register. Caller-saved and used for intermediate calculations.                                                                                     |
| **`X13`**    | Temporary register. Caller-saved and used for temporary or intermediate data.                                                                                |
| **`X14`**    | Temporary register. Another caller-saved register for general-purpose use.                                                                                   |
| **`X15`**    | Temporary register. Caller-saved, and typically used for temporary calculations or data storage.                                                             |
| **`X16`**    | Often reserved as an intra-procedure call (IPC) scratch register. It can also be used for special purposes like veneers or branching by the linker.           |
| **`X17`**    | Another IPC scratch register. Like `X16`, it is used for linker-related tasks or branch-to-register operations.                                               |
| **`X18`**    | Platform register. Its usage depends on the operating system. On macOS, it may be reserved for system purposes and should not be modified directly.           |
| **`X19`**    | Callee-saved register. Preserved across function calls, making it suitable for storing variables that must survive after calling other functions.             |
| **`X20`**    | Callee-saved register. Used for local variables or data that must be preserved across function calls.                                                        |
| **`X21`**    | Callee-saved register. Preserved across function calls, often used for storing persistent values.                                                            |
| **`X22`**    | Callee-saved register. Used for local or long-lived variables within a function.                                                                              |
| **`X23`**    | Callee-saved register. Preserved across function calls and used for persistent data.                                                                          |
| **`X24`**    | Callee-saved register. Used for storing variables that should not be overwritten during function calls.                                                       |
| **`X25`**    | Callee-saved register. Typically used for storing persistent data within a function.                                                                          |
| **`X26`**    | Callee-saved register. Used for long-term data storage within a function, preserved across calls.                                                             |
| **`X27`**    | Callee-saved register. Similar to other callee-saved registers, used for persistent or local variables.                                                       |
| **`X28`**    | Callee-saved register. Another general-purpose register that retains its value across function calls.                                                         |
| **`X29`**    | Frame Pointer (FP). Points to the current stack frame, helping with stack navigation and function call debugging.                                              |
| **`X30`**    | Link Register (LR). Stores the return address after a `bl` (branch with link) instruction. It tells the CPU where to return after a subroutine is complete.   |