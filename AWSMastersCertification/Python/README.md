# Python Scripting Certification Training

### Course outline
1. Introduction to Python
2. Sequences and File Operations
3. Deep Dive - Functions, OOP, Modules, Errors and Exceptions
4. Introduction to NumPy and Pandas
5. Data visualization

### Python Interpreter
- Python Interpreter is a program that reads and executes code
- This includes source code, pre-compiled code and scripts
- Example: `help('for')`

### Standard Data Types
![](img/datatypes.png)

## Data Types

### Immtutable data types
#### Numeric data type
- Python supports three different numerical values
  - int (signed integer) e.g. 10
  - float (real numbers) e.g. 10.65
  - Complex Numbers e.g. 10+6j
- In Python you can represent numbers in multiple ways
  - Binary
  - Octal
  - Hexedecimal

#### String
- The continuous set of characters represented within quotation is called as String. Python allows for either pairs of single or double quotes. Python does not support a character type, these are treated as strings of length one
- Python cannot differentiate between single and double quotes

#### Tuple
- Tuple consists of a number of values separated by comma(s). It is enclosed with parenthesis. i.e. `(1,2,3.15,'Python')`
- Tuple can have objects of different data types, unlike Arrays in C.

### Mutable data types
#### Lists
List is an ordered set of elements enclosed within square brackets. The main differences between Lists and Tuples are:
- Lists are enclosed in brackets[] and Tuples are enclosed within parenthesis()
- Lists are Mutable and Tuples are Immutable
- Tuples are faster than Lists
- Lists are enclosed within square brackets

#### Dictionaries
Dictionaries contain key value pairs. Each key is separated from its value by a colon (:), the items are separated by comma, and the whole thing is enclosed within curly braces
```python
dictionaryExample = {"name":"Alex", "email":"alex@gmail.com"}
print(dictionaryExample) # {'name':'Alex', 'email':'alex@gmail.com'}
```

#### Sets
A set is an unordered collection of items. Every element is unique. A set is created by placing all the items (elements) inside curly braces `{}`, separated by comma.
- You can create set by calling inbuild function `set()`

## Python Operators
### Arithmetic Operators
|Operator|Example|
|---|---|
|Addition|`a+b`|
|Subtraction|`a-b`|
|Multiplication|`a*b`|
|Division|`a/b`|
|Modulus|`a%b`|
|Exponent|`a**b`|
|Floor Division|`a//b`|

### Assignment Operator
|||
|---|---|
|Assign value from right to left|`a=b`|
|`a=a+b`|`a+=b`|
|`a=a-b`|`a-=b`|
|`a=a*b`|`a*=b`|
|`a=a/b`|`a/=b`|
|`a=a**b`|`a**=b`|
|`a=a//b`|`a//=b`|

### Comparison
|Operator|Example|
|---|---|
|Equal to|`a==b`|
|Not Equal To|`a!=b`|
|Greater Than|`a>b`|
|Less Than|`a<b`|
|Greather Than Equal To|`a>=b`|
|Less Than Equal To|`a <=b`|

### Logical Operator
|Operator|Description|
|---|---|
|a `and` b|Returns True if both values evaluate to True|
|a `or` b|Return if at leas one of the values evaluate to True|
|`not` a|Inverts the boolean value of an expression, making True become False and False become True|

### Bitwise
|Operator|Example|Details|
|---|---|
|Binary AND|`a & b`|Combines bits where both are 1|
|Binary OR|`a\|b`|Combines bits where either is 1|
|Binary XOR|`a^b`|Combines bits where one is 1 and the other is 0|
|Binary NOT|`a~b`|Inverts all bits|
|Binary Left Shift|`a<<`|Shifts bits to the left, filling with 0s|
|Binary Right Shift|`a>>b`|Shifts bits to the right, filling with sign bit|

### Identity
- `is` <br>Evaluates to TRUE if the variables on either side of the operator point to the same object and FALSE otherwise
- `is not`<br>Evaluates to FALSE if the variables on either side of the operator point to the same object and TRUE otherwise

### Membership
- `in`<br>Evaluates to TRUE if it finds a variable in the specified sequence and FALSE otherwise
- `not in`<br>Evaluates to TRUE if it does not find a variable in the specified sequence and FALSE otherwise


## Command Line Parameters
- It is possible to pass arguments to Python programs when they are executed
- The brackets which follow main are used for this purpose
- `.argv` refers to the number of arguments passed, and `argv[]` is a pointer array which points to
each argument which is passed to main
- The Python `sys` module provide access to any command-line argument via the `sys.argv`. This servers two purposes:
  - `sys.argv` is the list of command-line arguments
  - `len(sys.argv)` is the number of command-line arguments

- Example
  - `test.py`

    ```python
    #!/usr/bin/python
    import sys
    print('Number of arguments:')
    len(sys.argv)
    print('Argument List:', str(sys.argv))
    ```
  - Now run above script as following:
    ```python
    python test.py arg1 arg2 arg3
    
    # Number of arguments: 4 arguments. Argument
    # List: ['test.py', 'argl', arg2', 'arg3']
    ```

<br>

## Sequences and File Operations
- Understand Operations performed on files
- Learn what sequences are
- Execute Sequence Operations
- Understand Types of Sequences in Python
  - Lists
  - Tuples
  - Strings
  - Sets
  - Dictionaries
 
 <br>

### Opening and closing fiels

#### Open function
- You can open files using Python's built-in `open()` function

  `file_Obj = open(file_name,[access_mode])`
- Here are parameter details
  - **file_name**<br>The `file_name` argument is a string value that contains the name of the file that you want to access
  - **access_mode**<br>The `access_mode` determines the mode in which the file has to be opened (read, write, append)

  |Mode|Description|
  |---|---|
  |`r`|This is the default mode. Opens a file for reading only|
  |`rb`|Opens a file for reading in banary only|
  |`r+`|Opens a file for both reading and writing|
  |`rb+`|Opens a file for both reading and writing in binary format|
  |`w`|Opens a file for writing only. Overwrites the file if the file exists. If the file does not exist, creates a new file for writing|
  |`wb`|Opens a file for writing only in binary format. Overwrites the file if the file exists. If the file does not exist, creates a new file for writing|
  |`a`|Opens a file for appending|
  |`ab`|Opens a file for appending in binary format|
  |`a+`|Opens a file for both appending and reading|
  |`ab+`|Opens a file for both appending and reading in binary format|
  |`w+`|Opens a file for both writing and reading|
  |`wb+`|Opens a file for both writing and reading in binary format|
