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
- String, number, boolean
    - Whitespace permitted
- "... presented with zero or more Unicode characters"
- Mapping: Assigning one scalar to another
- Use quotes (**`** or **"** ) to conver a non-string scalar into a string scalar
    - Double quotes permit escape sequences
- Multiline scalars:
    - **Block style** (preserves newline)

        ```yaml
        downtime_schedule: |
            2019-10-04 - kernel upgrade
            2019-02-02 - security fix
        ```

    - **Folded style** (converts newline/spacing to single space):

        ```yaml
        comments: >
            Experiencing high I/O
            since 2018-10-01.
            Current investigating.
        ```

### Structures
- Multiple directives/documents in one file
- Optional within the YAML spec
    - May be requirement for different platforms
- Tripple dashes (`---`) to mark the ned without closing the data stream

>**Multi-doc stream**
> ```yaml
> ---
> host: phl-42
> datacenter:
>     location: Philadelphia
>     cabinet: 13
>     cab_unit: 2
> ---
> host: phl-43
> datacenter:
>     location: Philadelphia
>     cabinet: 13
>     cab_unit: 3
> ```

>**Stream with end**
> ```yaml
> ---
> host: phl-42
> datacenter:
>     location: Philadelphia
>     cabinet: 13
>     cab_unit: 2
> ...
> ---
> host: phl-43
> datacenter:
>     location: Philadelphia
>     cabinet: 13
>     cab_unit: 3
> ...
> ```

### Comments

- Define a comment with an octothorpe and whitespace (`# `)
- Inline comments aceeptable, however, must continue to end of the line
- Comments cannot be contained in scalars
- Comments are for humants, no actual content should be conveyed through comments
- Blank lines function as commented lines

> **Do this**
> ```yaml
> # Philly DC Host Data
> host: phl-42
> datacenter:
>     location: Philadelphia # Reference ID ...
> Reference ID: PHL
> ```

> **Don't do this**
>   - No space after `#`
>   - Comment in the middle of the string
> ```yaml
> #Philly DC Host Data
> host: phl-42
> datacenter:
>     location: "Philadelphia # Reference ID ...
> Reference ID: PHL"
> ```

### Tags
- Used for:
    - **Setting a custom URI**
        >Use the `%TAG !` prefix
        >```yaml
        >%TAG ! tag:hostdata:phl:
        >---
        >```

    - **Setting local tags**
        >- Single exlamation, no space `!`
        >- URI: `tag:hostdata:phl:PHL`
        >```yaml
        >datacenter:
        >   location: !PHL Philadelphia
        >```

    - **Setting a data type**
        >- Force data type; don't rely on parser
        >- Use two exlamation points, no space `!!`
        >```yaml
        >cabinet: !!str 13
        >cab_unit: !!str 2
        >```



### Anchors


