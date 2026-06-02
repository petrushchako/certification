# MS SQL Data Types

| **Cathegory** | **Data Type** | **Description** | **Storage** |
|---|---|---|---|
| **Exact numeric** | `int` | Integer: a whole number between **-2,147,483,648** and **2,147,483,647** | **4 bytes** |
|                   | `tinyint` | Integer: a whole number between **0** and **255** | **1 byte** |
|                   | `smallint` | Integer| a whole number between **-32,768** and **32,767** | **2 bytes** |
|                   | `bigint` | Integer: a whole number between **-9,223,372,036,854,775,808** and **9,223,372,036,854,770,000** | 8 bytes |
| | | | | 
| **Approximate numeric** | `Decimal` | Anumeric with decimals. Declared as decimal (p,s), with `p` as the total numer of digits stored and `s` as the maximum number of digits stored to the right of the decimal point. For example, dec(5,2) can store the number 123,45 | Depends on the amount of precision |
| | | | |
| **Date and time** | `datetime` | This data type combines the date and the time | **8 byte** |
|                    | `smalldatetime` | Can store less values than datetime. It sotres dates with less precision (up to the second, instead of up to the millisecond) | **4 bytes** |
|                    | `date` | Date. We store dates in the format YYYY-MM-DD, ex: 2024-01-15 | **3 bytes** |
|                    | `time` | Time | **5 bytes** |
| | | | |
| **Character Strings** | `char` | A fixed-length character string. For example, char(100) will store exactly 100 characters. Fox example, to store the text string "false" as char(100), will take up to 100 bytes | Fixed-size string data. n defines the string size in bytes and must be a value from **1** through **8000** |
|                       | `varchar` | A variable length character string. SQL will only store the characters that are actually needed. For example, to store the text string "false" as varchar(100), will take up 5 bytes, plus an additional 2 bytes to store the length of the string. | The storage size is **n bytes + 2 bytes** (SQL uses an additional 2 bytes to store the length).|
| | | | |
| **Exact numerics** | `money` | Data type that represents monetary or currency values | **8 bytes** |
|                    | `smallmoney` | Store a smaller range of values then moeny above | **4 bytes** |


















