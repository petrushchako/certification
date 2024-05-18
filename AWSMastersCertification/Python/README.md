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