# User Administration

### Topics
- File Systems and its Types
- Software Package Management
- Users in Linux
- User Groups in Linux
- File/Folder Permissions
- Special Permissions


### Objectives
- Understand File System in the OS
- Learn Packaging Management in Linux
- Understand where user information is stored
- Use Commands to Add a New User, Delete a user, Modify User and Change Password
- Use Linux Group Mechanism to Organize a Collection of Users
- Manage Permissions for Files and Directories


## File System
The file system is a logical arrangement to store and retrieve data

- The file system can be local data storage via a network protocol or virtual files
- Most of the file systems use hard disks which are made of small fixed size blocks. Each block has an identifier to describe the start and end of the block
- Depending upon the file system architecture, file fragmentation occurs when some files are in noncontiguous clusters or some file are deleted
- Each file has a metadata consisting of size, date and time of creation, file type, access permission, owner of a file, etc.

### Type of file systems

- **Disk File System**
  
  It manages data on a permanent storage device. Accessing the data for multiple request can be handled Ex - NTFS, FAT, etc.

- **Network File System**

  It allows a user on a client computer to access the files over a computer network using NFS protocol Ex - AFS, SMB

- **Special Purpose File System**

  The system API/device is given a file type representation to use according with Unix OS

<br><br>

### Examples of File Systems

- **FAT**

  - File Allocation Table (FAT) uses indexing for a contiguous area of disk store
  - Each entry has index of the next cluster or indicates end of the file
  - The top directory has a number of clusters of each file in the particular directory
  - FAT may lead to fragmentation and has better alternatives for larger file systems

    ![](img/FAT.png)

  **Comparison of FAT versions**

  |Attribute|FAT12|FAT16|FAT32|
  |---|---|---|---|
  |Used For|Floppies, small hard drives|Small to large hard drives|Large to very large hard drives|
  |Size of each FAT entry|12 bits|16 bits|28 bits|
  |Maximum number of Clusters|~4,096|~65,536|~268,435,456|
  |Supported cluster size|512 B to 4 KB|2 KB to 32 KB|4 KB to 32 KB|
  |Maximum volume size|16,736,256B (16MB)|2,147,123,200B (2GB)|~2^41B (2TB)|
  
  - There are multiple version of FAT like FAT 12, FAT 16, FAT 32 with FAT 32 more suited for device with larger memory chunks
  - It is best suited for file system of smaller sizes and primarily used in floppies, cameras, media players, etc.

<br><br>

- **NTFS**

  **N**ew **T**echnology **F**ile **S**ystem (NTFS) uses advanced data structure to improve performance, reliability and disk space usage

  - Each file operation is broken down into transaction so that recovery is allowed
  - Whenever it is needed each file or folder can be expanded or compressed automatically

  ![](img/NTFS.png)

  **NTFS - Features**
  |Feature|Description|
  |---|---|
  |**Self Healing NTFS**|Detects and corrects corrupted NTFS volume file|
  |**ACL(Access Control List)**|Determines who else can access or modify your files|
  |**File level encryption**|Protects your file content from unauthorized access|
  |**Disk Quotas**|It keeps track of disk space being used and enables administrator to limit disk space that a user may use|
  |**Reliable File System**|Automated recovery operations and checks for consistency by using transaction log and journal file|
  |**File Compression**|Compression of large file is allowed so that disk space is used efficiently|

<br><br>

- **ext4**

  - Fourth Extended File System (ext4) is designed for Linux Kernel
  - It supports huge individual file size and go to TB's and almost one directory can contain 64,000 sub-directories

  ![](img/VirtualFileSystem.png)

  **Features**
  - Less chances of file corruption during a crash and transparent encryption is supported
  - When data is copied to disk, it supports delayed allocation and create blocks
  - There are very low chances of fragmentation in ext4
  - It is faster as it skips the unallocated blocks reducing the retrieval time

<br><br>

- **XFS**

  - It is a journaling file system that uses a B-tree (balance tree) to allocate data as fast as possible
  - It supports huge individual file size allocation
  - It allows to reserve bandwidth and adjusts its operation based on existing reservations
  - It is designed for data storage server and recommended for home systems

    ![](img/XFS.png)

<br><br>

- **Comparison of ext4 and XFS**

  |Feature|ext4|XFS|
  |---|---|---|
  |Architecture|Hashed B-tree|B+tree|
  |Emerged|2006|1994|
  |Max volume size|1 Ebytes|8 Ebytes|
  |Max file size|16 Tbytes|8 Ebytes|
  |Max number of files|4 billion|2^64|
  |Max file name size|255 bytes|255 bytes|
  |Attributes|Yes|Yes|
  |Transparent Compression|No|No|
  |Transparent Encryption|Yes|No|
  |Copy-on-Write(COW)|No|Planned|
  |Snapshots|No|Planned|

<br><br>

- **File systems comparisons**

  |Attribute|NTFS|FAT32|XFS|ext4|
  |---|---|---|---|---|
  |**Max Filename Length**|255|255|255|255|
  |**Max File Size**|16 EB|4 GB|8 EB|16 GB - 16 EB|
  |**Max Volume Size**|16 EB|512 MB - 16 TB|8 EB|1 EB|
  |**Access Control List**|Yes|No|Yes|Yes|
  |**Symbolic Links**|Yes|No|Yes|Yes|
  |**Filesystem-level Encryption**|Yes|No|No|Yes(experimental)|
  |**Online grow**|No|No|Yes|Yes|
  |**Offline grow**|Yes|With third party tools|No|Yes|
  |**Transparent Compression**|Yes|No|No|No|
  |**Copy on Write**|No|No|Yes(On request)|No|
  |**OS Support**|Windows, Linux,MAC|DOS, Windows,Linux, MAC|Linux|Linux, MAC|

