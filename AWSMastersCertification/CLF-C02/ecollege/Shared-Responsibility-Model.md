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
