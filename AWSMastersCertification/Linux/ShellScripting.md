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

<br>

### `top`

|Option|Description|
|---|---|
|`-u`|append option ot display specific user process details|
|`c`|press `c` to view absolute path of the process|
|`d`|press `d` to change refresh interval|
|`SHIFT+p`|Sort by CPU utilization|
|`-n`|append the option to limit the number of iteration|
|`q`|exit|
    
- The command show the processor and memory being used by the system
  
<br>

### `kill`

`kill <signal> <PID>`

- The command is used to terminate a particular process
- Common signal to a process are:
  - **SIGHUP** numeric value 1, hang up the process
  - **SIGKILL** numeric value 9, kills the process without saving
  - **SIGTERM** numeric value 15, terminate the process
- Use `ps` to find the process ID or use the command `pidof` (i.e. `pidof mysql`)

<br>

### Some Common Process Commands
- `bg`
  - Starts running a suspended process in the background
- `fg`
  - Brings the suspended or the background running process to the foreground
- `jobs`
  - Display the status of jobs in the current shell

<br>

### System Calls
It can be grouped into five major categories
- **Process Control**
  - create process
  - load
  - execute
  - terminate, etc
- **File Managment**
  - create file
  - open
  - read
  - write
  - delete, etc
- **Device Management**
  - request device
  - release
  - read
  - write, etc
- **Information Maintenance**
  - get time/date
  - system data
  - process attributes, etc
- **Communication**
  - create connection
  - send
  - receive
  - delete
  - transfer, etc

- System calls run in different memory-space and with different privileges
- The instructions are generally available as assemble language instructions

<br>

### `tee`

- It is used to store and view the output to another command
- We can also write output to multiple files:
  - `ls | tee file1.txt file2.txt file3.txt`
- It can also be used to pass it to multiple commands
  - `cat file1.txt | tee file2.txt | sed 's/hello/hi/' | sed 's/file/text/'`

<br>

### `cron`

- `cron` is a deamon which checks every fixed interval for scheduled tasks in cron table
- `cron` consists of six fields separated ty tab or space:
  - Minute (0-59)
  - Hour (0-23)
  - Day of the month (1-31)
  - Month of the year (1-12 or Jan-Dec)
  - Day of week (0-6 or Sun-Sat)
  - Command
- Use `crontab -e` to add a new entry

<br><br>

## Scripting
### What is Scripting?
- A script is a series of commands within a file which can be executed without being compiled
- Scripts are general text document in human readable format that need to be executed by a certain program to achieve desired results
- They can be written with any normal text editor
- Each has their own specific extension or tags embedded inside the file
- For ex - `.py` extension is for python scripts and `.sh` is for shell scripts
- Scripting is done to automate the task of a user
- A sequence of commands which is given as an input on regular intervals can be bundled together as a script and executed as a single file when required
- This reduces the chances of typing error while pacing-up the process of command execution as the next command is immediately executed after finishing the current execution
- Scripts can provide with help/suggestions in case of the user doing some error with a particular command

### Scripting in Linux
- Each distribution of Linux has shell which executes commands
- We provide a command to shell as input and it executes them
- The shell supports scripting and we can bundle a set of commands to be executed together by writing in a file with shell details
- Each script should have execute permission set to it
- The script can also be added to be executed during boot or specific process execution
- We can also install various tools like python and write their own scripts

<br><br>

## Bash scripting
- Bash scripts instructs bash to run a set of commands sequentially.
- The script must have execution permission assigned to it.
- The first line is generally used to define, it is a bash script `#!/bin/bash`
- Anything after `#` is not executed and used as a comment.
- Anything that works on command line can be part of bash script and vice-versa.
- Bash scipts have an extension of `.sh`

### Varaibles in Bash
- A varaible is a temporary memory block used to store information which is present for that block of code.
- We perform two actions on variable:
  - Set the value of it
  - Read value of it
- Bash works line by line. For every line it identifies the variables and replaces it with its value and then re-iterates the process in next line.
- To read varaible, place `$` symbol before it.<br>`echo $NAME`

<br>

|Special variable|Description|
|---|---|
|`$0`|The name of the Bash script|
|`$1-$9`|The first 9 arguments to the Bash script|
|`$#`|Number of arguments passed to the script|
|`$@`|All the arguments supplied to the Bash script|
|`$?`|The exit status of the most recently run process|
|`$USER`|THe username of the user running the script|
|`$HOSTNAME`|The hostname of the machine the script is running on|
|`$SECONDS`|The number of seconds since the script was started|
|`$RANDOM`|Returns a different random number each time is it referred to|
|`$LINENO`|Return the current line number on the Bash script|

<br>

### Input in bash
`read <option> <variable_name>`

- Use command `read` to ask user to provide an entry for the variable
- We can provide multiple variable to read in a go by separating them with whitespaces
- Some options read provide are:
  - `-p` allow you to specify promps
  - `-s` makes input silend and doesn't display on screen
  - `-r` backslash does not act as an escape character

```bash
#!/bin/bash
# Prompt the user for their name
echo "Enter your name: "
read name

# Display a greeting using the input provided
echo "Hello $name! Welcome to the script."
```

<br>

### Arithmetic in bash
- We use two double parenthasis to do arithmetic calculations
    - Syntax<br>`$((expression))`
    - Example<br>`a = $((4*5))

- `let` is a build-in function to do simple arithmetic:
  - 
    ```bash
    let a--
    let a = $2 -21
    ```

- `expr` is similar but it prints the result that assigning to a variable.<br>`expr 30 % 2`

<br>

### If Statement in bash
```bash
if [test_condition]
then
    <command>
elif [<test_condition_2>]
then
    <command_2>
else
    <command_3>
fi
```

- If statement helps to decide to run a piece of code based upon conditions that we may set.
- Case is also supported and works similar to a C program


<br>

### Loop in bash
- While loop
  - ```bash
    while [condition]
    do
        <command>
    done
    ```

- For loop
  - ```bash
    for var in <list>
    do
        command
    done
    ```
    
### Function in bash
- Function os a block of code which can be re-used multiple times
- No argument can be passed in functions in bash
- In Bash, you can define functions using the function keyword or simply by using the function name followed by parentheses and curly braces {}.
- Syntax

  ```bash
  function_name(){
    echo "Hello, world!"
  }

  function fnc(){
    function_name > file.txt
  }

  # Call function
  function_name
  fnc
  ```