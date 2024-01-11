# YAML Essentials

## YAML Overview
### What is YAML?

**YAM ain't markup language:**
- Yet another markup language?
- 2001
- Ingy Döt Net, Clark Evans, Oren Ben-Kiki

**YAML is a data serialization language:**
- "Natural and meaningful"
- AKA human-readable
- Relies on the familiar:

**Works with "agile" languages:**
- Python, Perl, Ruby, etc.

**Common data types:**
- Scalars, lists, arrays

**Common data structures:**
- Indentation, dashes, colons

**Common uses:**
- Config files
- Storing data

**Goals (in order!):**
- Easily human-readable
- Portable
- Matches native data structures to agile languages
- Consistent and able to support generic tools
- One-pass processing
- Expressive and extensible
- Easy to implement and use

### Syntax

**Human > computers:**
- Spaces, not tabs
- Indent for structure
- Dashes for lists
- Colons for key-value

```yaml
---
host: phl-42
datacenter:
  location: Philadelphia
  cab: 13
roles:
  - web
  - dns
```

**Character support:**
- Printable Unicode
**Unsupported symbols:**
- CO/C1 blocks
    - Exceptions:
        - Tab
        - Line feeds
        - Carriage return
        - Delete
        - Next line
        - Surrogates
- Encoding:
    - UTF-8
    - UTF-16
    - UTF-32
        - Mandatory for JSON compatibility

### YAML Styles



## YAML Breakdown
### Mappings
### Sequences

### Scalars

### Structures

### Comments

### Tags

### Anchors