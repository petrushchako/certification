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

**Block or flow:**
- Two forms of styles:
    - Block Styles
    - Flow Styles

- **Block styles**:
    - Better for humans
    - Less compact
    - The YAML you've probably seen

    ```yaml
    host: phl-42
    datacenter:
      location: Philadelphia
      cab: 13
    roles:
      - web
      - dns
    ```

- **Flow styles**:
    - An extension of JSON
    - "Folding" long lines of content
    - Tags and anchors

    ```yaml
    host: "phl-42"
    datacenter: {location: Philadelphia, cab: 13 }
    roles: [web, dns]
    ```

## YAML Breakdown
### Mappings

- Associative arrays, hash tables, key-value pairs, collections
- Denote with a colon and a space `: `
- No duplicate keys
- Mappings can be nested

    ```yaml
    host: "phl-42"
    datecenter:
      location: "Philadelphia"
      cab: 13
    ```

**Flow styles**
- Use curly brackets and commas (`{ x , y }`)

    ```yaml
    datacenter: { location: "Philadelphia", cab: 13 }
    ```


### Sequences

- Lists, arrays, collections
- Denote with dash and space (`- `)
- Can be a combined with mappings:
    - Mapping of sequences
    - Sequence of mappings

    ```yaml
    roles:
      - webserver
      - wp_database
    ```
    >Note:
    > - Cannot be:
    >   - Nested without mapping (**#1** missing colon after `playbook`)
    >   - Blank (**#2** empty element)<br>
    >     Instead, an empty string can be provided (`""`)
    >```yaml
    >- playbook     #1
    >   - wordpress
    >   -            #2
    >   - mysql
    >```

Sequence of mapping example:

```yaml
datacenter:
    - location: "Philadelphia"
      cab: 13
      cab_unit: 3 
```

**Flow styles:**
```yaml
roles: [ websrver , wp_database ]
```




### Scalars

### Structures

### Comments

### Tags

### Anchors