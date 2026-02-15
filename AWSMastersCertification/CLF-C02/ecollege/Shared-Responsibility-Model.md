# Understanding AWS Shared Responsibility Model

### Introduction to the AWS Shared Responsibility Model
The AWS Shared Responsibility Model defines the division of responsibilities between AWS and its customers in securing and managing cloud environments. AWS takse case of the security **of the cloud** (global infra), while customers are responsible for security **in the cloud** (applications, data and ocnfig).

This model ensures that:
- AWS provides a secure foundation for cloud computing.
- Customers have control over how they configure and secure their workloads.

<br>

### Components of the AWS Shared Responsibility Model
The AWS Shared Responsibility Model consists of three key components:
1. **AWS Responsibilities**<br>AWS secures and maintains the cloud infrastructure.
2. **Customer Responsibilities**<br>Customer configure and secure their applications and data.
3. **Shared Responsibilities**<br>AWS and the customer jointly manage some security aspects.

<br>

### AWS Responsibilities (Security of the Cloud)
AWS is responsible for protecting the global infrastructure that runs cloud services, including:
1. **Physical Security**<br>Data centres, power, cooling and access controls. 
2. **Networking and Hardware Secutiry**<br>Protecting networking equipment, storage and compute resources.
3. **Hypervisor and Virtualization Security**<br>Managing server infrastructure and virtualisation layers.
4. **Security and Compliance Certifications**<br>AWS meets industry standards like:
   - ISO 27001
   - SOC 2
   - PCIDSS
   - FedRAMP
  

#### AWS Security Features
- **AWS Shield** – Protection against Distributed Denial of Service (DDoS) attacks.
- **AWS Identity and Access Management (IAM)** – Secure authentication and authorisation.
- **AWS Key Management Service (KMS)** – Secure encryption key storage.
- **AWS Security Hub** – Security best practices monitoring.



### Customer Responsibilities (Security in the Cloud)
Customers are responsible for securing their applications, workloads and configuration on AWS.

#### Key Customer Responsibilities
1. **Data Security**
    - Encypt data at rest and in transit (AWS KMS, SSL/TLS)
    - Implement access control for databases and storage (IAM, S3 bucket policies)
2. **Identity & Access Management**
    - Use IAM roles and policies with least privilege access
    - Implement MFA for added security
3. **Application Security**
    - Secure application code from vulnerabilities
    - Regularly update software and dependencies
4. **Networking Security**
    - Configure VPC Security Groups and Network ACLs to restrict access
    - Use AWS Web Application Firewall (WAF) to protect against threats
5. **Monitoring & Logging**
    - Enable AWS CloudTrail for API activity tracking
    - Use Amazon CloudWatch for real-time monitoring


<br>

### Shared Responsibilities

Some responsibilities are jointly managed by AWS and the customer, including:

| **Shared Responsibility** | **AWS Responsibility** | **Customer Responsibility** |
|------|------|------|
| **Patching & Updates** | AWS patches infra, hypervisors and managed services | Customer patch app, DB and OS on EC2 |
| **Configuration Management** | AWS provides default security config | Customers must correctly configure (e.g. S3 bucket permissions) |
| **Compliance & Gocernance** | AWS maintains conpmliance with global regulations | Customers ensure data security compliance (e.g. GDPR, HIPAA) |

<br>


### How Responsibilities Shift Based on AWS Services

The level of customer responsibility varies depending on the type of AWS service used:

#### Compute Services
| **AWS Service** | **AWS Responsibility** | **Customer Responsibility** |
| --------------- | ------------- | -------------- |
| **EC2<br>IaaS** | AWS secures hardware, networking and virtualization layers | Customers manage OS, App security and firewall settings |
| **RDS<br>PaaS** | AWS manageds databse infra, backup and patching | Customers configure database access, encryption and IAM policies |
| **Lambda<br>SaaS** | AWS sercures runtime, environment, networking and scaling | Customer manages function code, IAM permissions an data security |


#### Storage
| **AWS Service** | **AWS Responsibility** | **Customer Responsibility** |
| --------------- | ------------- | -------------- |
| **S3** | AWS secures the underlying storage infrastructure | Customers configure bucket policies, access permissions and encryption |
| **EBS** | AWS provides secure storage infrastructure | Customer manage snashot security, backups and access control |

| **AWS Service** | **AWS Responsibility** | **Customer Responsibility** |
| --------------- | ------------- | -------------- |
| **VPC** | AWS secures networking infrastructure and connectivity | Customers configure subnets, security groups and routing rules |









