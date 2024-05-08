# Shell Scripting

### Topics:
- Process Management
- Process Synchronization
- Some Basic Linux Commands
- Scripting
- BASH Scripting
- Expect Scripting

### Objectives
- Perform Process Management
- Learn Basic Linux Commands
- Understand system related commands
- Learn basic shell scripting

<br><br>

## Process Managment
### What is a Process?
- A process is a series of commands to instruct the processor, what to do
- It may use any available resources that Linux kernel has and allows to go ahead with the execution
- The process management involves scheduling, interrupt handling, signaling, process prioritization, process switching, process memory, etc
- Every process has its own life-cycle such as:
  - Creation
  - Execution
  - Termination
  - Removal

### Process States
|State|Description|
|---|---|
|`TASK_RUNNING`|The process is executing or about to be executed|
|`TASK_INTERUPTIBLE`|The process is waiting for a signal or a resource|
|`TASK_UNINTERRUPTIBLE`|The process is forced to halt for certain condition|
|`TASK_KILLABLE`|Allows waiting task to respond to a signal to be killed|
|`TASK_STOPPED`|The process is stopped by receiving certain signals|
|`TASK_TRACED`|The process is being debugged and temporarily stopped|
|`EXIT_ZOMBIE`|The process is terminated but information available in process table|
|`EXIT_DEAD`|The process is released completely|

### Process Memory Area
The process memory are is broadly divided in these segments:
![](img/processMemoryArea.png)

### Process Synchronization
Multiple processes running on system share resources which may lead to issues like:
- Resource blocking
- Data inconsistency
- Race condition

<br>

Process synchronization can be achieved by:
- **Semaphores**
  - A variable or data type used to control access to common resource in a multi-processing operating system
  - It is a signaling mechanism
  - Semaphores are mainly of two types:
    - binary semaphore
    - counting semaphore
- **Mutex locks**
  - Entire section of code is locked and no-one can access it until the lock is released by the process who applied the lock
  - Multiple locks can be applied in a part of the code. It is a locking mechanism.

<br>

### `ps`

  `ps <option>`
  |Option|Description|
  |---|---|
  |`-e`|every active process|
  |`-f`|full format list for the process
  |`-x`|all processes owned by the owner
  |`-r`|all running processes
  |`-T`|all processes associated with this Terminal
  |`-g`|all processes owned by particular group
  |`-p`|process by particular PID
  |`--forest`|display how processes are linked to each other
  

  - Process status is used to check infomration related to various processes running on system
  - It is primarily user for process monitoring
  - The information generally displayed are:
    - **PID** Unique process ID
    - **TTY** terminal type used is logged into
    - **TIME** amount of CPU in minutes and seconds that the process has been running
    - **CMD** name of command that launched the process
