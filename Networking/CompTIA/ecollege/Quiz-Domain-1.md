# CompTIA Network+ 2025: Domain 1 Quiz Results

### **Question 1**
**Question text:**
An application is experiencing issues where data packets are being delivered out of sequence and some packets are missing entirely. Which OSI layer is responsible for ensuring reliable delivery and correct packet sequencing?

**Answer:**
* [ ] a. Layer 5 - Session
* [x] **b. Layer 4 - Transport**
* [ ] c. Layer 2 - Data Link
* [ ] d. Layer 3 - Network

**Feedback:**
The correct answer is Layer 4 - Transport because:

* The Transport layer is responsible for end-to-end communication reliability.
* It handles packet sequencing and ensures packets arrive in the correct order.
* It manages flow control to prevent overwhelming the receiver.
* It provides error detection and recovery for reliable data delivery.
* TCP, a common Transport layer protocol, specifically handles these functions through sequence numbers and acknowledgments.


### **Question 2**
**Question text:**
A company is experiencing network congestion during peak hours, particularly impacting their VoIP calls and video conferencing. The network administrator needs to prioritize this real-time traffic over less time-sensitive applications like email and file transfers. Which network function should be implemented to address this issue?

**Answer:**
* [ ] a. VPN (Virtual Private Network)
* [ ] b. CDN (Content Delivery Network)
* [x] **c. QoS (Quality of Service)**
* [ ] d. TTL (Time to Live)

**Feedback:**
The correct answer is QoS because:

* QoS specifically allows network administrators to prioritize certain types of traffic.
* It can guarantee bandwidth for critical applications like VoIP and video conferencing.
* It helps manage network congestion by creating traffic priorities.
* It can reduce latency, jitter, and packet loss for time-sensitive applications.

### **Question 3**
**Question text:**
A network administrator is troubleshooting an issue where encrypted data is being transmitted but the receiving application cannot decrypt and read the information properly. Which OSI layer is most likely responsible for handling the encryption/decryption of this data?

**Answer:**

* [x] **a. Layer 6 - Presentation**
* [ ] b. Layer 7 - Application
* [ ] c. Layer 4 - Transport
* [ ] d. Layer 5 - Session

**Feedback:**
The correct answer is Layer 6 - Presentation because this layer is specifically responsible for:

* Data encryption and decryption.
* Data translation between application and network formats.
* Character code translation.
* Data compression and decompression.
* Ensuring data is in a usable format for the Application layer.

### **Question 4**
**Question text:**
A company has been assigned the IP address 172.16.20.0/24 and needs to create four equal-sized subnets. Which subnet mask should be used for each subnet, and how many usable host addresses will be available per subnet?

**Answer:**
* [ ] a. /28 with 14 hosts per subnet
* [ ] b. /25 with 126 hosts per subnet
* [x] **c. /26 with 62 hosts per subnet** (Correct Answer)
* [ ] d. /27 with 30 hosts per subnet

**Feedback:**
The correct answer is /26 with 62 hosts per subnet because:

* To create 4 equal subnets from a /24, we need to borrow 2 bits ().
* Starting with a /24 and borrowing 2 bits results in a /26.
* A /26 subnet provides 64 addresses ().
* Subtract 2 addresses (network and broadcast) leaving 62 usable hosts.

### **Question 5**
**Question text:**
A company wants to implement a networking solution that provides consistent security policies and authentication regardless of user location, with access based on identity rather than network location. Which modern network architecture should they implement?

**Answer:**
* [ ] a. Virtual Extensible LAN (VXLAN)
* [ ] b. Software-defined WAN (SD-WAN)
* [x] **c. Zero Trust Architecture (ZTA)**
* [ ] d. Infrastructure as Code (IaC)

**Feedback:**
The correct answer is Zero Trust Architecture (ZTA) because:

* It implements policy-based authentication for all users.
* Applies the principle of "never trust, always verify".
* Provides least privilege access based on identity.
* Security is based on user/device identity rather than network location.


### **Question 6**
**Question text:**
A network administrator needs to install cabling in an environmental air space above a dropped ceiling. Which of the following cable types must be used to meet building codes?

**Answer:**
* [ ] a. PVC cable
* [ ] b. Direct attach copper cable
* [ ] c. Standard CAT6 cable
* [x] **d. Plenum-rated cable**

**Feedback:**
The correct answer is Plenum-rated cable because:

* Plenum-rated cables are specifically designed for use in air circulation spaces.
* They contain fire-retardant materials that produce minimal smoke when burned.
* They're mandatory in spaces used for environmental air circulation.


### **Question 7**
**Question text:**
A company wants to implement a cloud solution where they only need to manage their applications and data, while the cloud provider handles all infrastructure, including servers, storage, and networking. Which service model best meets these requirements?

**Answer:**
* [ ] a. Infrastructure as a Service (IaaS)
* [x] **b. Platform as a Service (PaaS)** (Correct Answer)
* [ ] c. Software as a Service (SaaS)
* [ ] d. Network as a Service (NaaS)

**Feedback:**
The correct answer is PaaS because:

* PaaS provides a platform where customers can develop, run, and manage applications.
* The cloud provider manages the underlying infrastructure (servers, storage, networking).
* The customer only manages applications and data.


### **Question 8**
**Question text:**
A large enterprise is designing their data center network and needs to optimize east-west traffic between application servers while maintaining high availability. Which network topology would best meet these requirements?

**Answer:**
* [ ] a. Star/hub and spoke
* [ ] b. Three-tier hierarchical model
* [x] **c. Spine and leaf**
* [ ] d. Point to point

**Feedback:**
The correct answer is Spine and leaf because:

* It's specifically designed to optimize east-west traffic flow (server-to-server).
* Provides predictable latency with a maximum of two hops between any two endpoints.
* Offers high bandwidth and redundancy through multiple parallel paths.


### **Question 9**
**Question text:**
An enterprise is deploying a new application that requires all users to receive the same data simultaneously across multiple network segments. Which type of IP traffic would be most efficient for this requirement?

**Answer:**
* [ ] a. Unicast
* [x] **b. Multicast**
* [ ] c. Anycast
* [ ] d. Broadcast

**Feedback:**
The correct answer is Multicast because:

* Multicast allows efficient one-to-many communication.
* It sends a single stream of data to multiple recipients simultaneously.
* It's bandwidth-efficient as the data is replicated only when necessary.


### **Question 10**
**Question text:**
A network administrator needs to set up a test environment and requires a private IP address range that can support up to 500 devices. Which of the following RFC1918 address ranges would be the MOST appropriate choice?

**Answer:**
* [ ] a. 172.16.0.0/16
* [ ] b. 10.0.0.0/8
* [x] **c. 192.168.0.0/23**
* [ ] d. 192.168.0.0/24

**Feedback:**
The correct answer is 192.168.0.0/23 because:

* A /23 network provides 510 usable host addresses ().
* This perfectly fits the requirement for 500 devices.
* It's the most efficient use of address space for the requirement.


### **Question 11**
**Question text:**
A data center requires high-speed fiber connections between switches with distances less than 100 meters. The installation needs to be cost-effective while maintaining high bandwidth. Which type of fiber and connector combination would be most appropriate?

**Answer:**
* [x] **a. Multimode fiber with LC connectors**
* [ ] b. Single-mode fiber with SC connectors
* [ ] c. Single-mode fiber with LC connectors
* [ ] d. Multimode fiber with MPO connectors

**Feedback:**
The correct answer is Multimode fiber with LC connectors because:

* Multimode fiber is more cost-effective for shorter distances (up to 100m).
* LC connectors are small form factor connectors ideal for high-density environments.
* Multimode transceivers are typically less expensive than single-mode.


### **Question 12**
**Question text:**
A security audit reveals that employees are using an insecure protocol for remote access that transmits credentials in plaintext. The current solution uses port 23. Which of the following protocols should be implemented as a secure replacement?

**Answer:**
* [ ] a. HTTP on port 80
* [x] **b. SSH on port 22**
* [ ] c. SMTP on port 25
* [ ] d. SNMP on ports 161/162

**Feedback:**
The correct answer is SSH on port 22 because:

* The scenario describes Telnet (port 23), which transmits in plaintext.
* SSH (Secure Shell) provides encrypted communication for remote access.
* SSH is the industry standard secure replacement for Telnet.