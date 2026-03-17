# AWS Cloud Security, Governance, and Compliance Concepts

### Introduction to AWS Security, Governance, and Compliance
AWS provides a secure, compliant, well-governed cloud environment through built-in security tools, compliance frameworks, and governance policies. These features help businesses protect data, meet regulatory requirements, and monitor their AWS resources.

Key security concepts include:
- Data encryption
- Access control and identity management
- Monitoring and logging
- Governance and compliance frameworks


<br>

### AWS Compliance and Governance Concepts
AWS follows globally recognised security and compliance standards, helping organisations meet industry-specific and regional regulatory requirements.

#### AWS Compliance Programs

| **Compliance Standard**             | **Description**                                                                    |
|-------------------------------------|------------------------------------------------------------------------------------|
| **ISO 27001**, **27017**, **27018** | Information security, cloud security, and personal data protection                 |
| **SOC 1**, **SOC 2**, **SOC 3**     | Service Organization Control (SOC) report for security and risk management         |
| **PCIDSS**                          | Payment Card Industry Data Security Standard for handlingcredit card transactions  |
| **HIPAA**                           | Health Insurance Portability and Accountability Act for healthcare data protection |
| **FedRAMP**                         | Federal Risk and Authorization Managmeent Program for government cloud security    |
| **GDPR**                            | General Data Protection Regulation for protecting EU customer data                 |


> AWS provides compliance documentation and audit reports through **AWS Artifact**. 
> **AWS Artifact**: A self-service portal where customers can downlod compliance reports and certifications
>    - Location: AWS Console -> AWS Artifact
>    - Use Case: Verifying AWS compliance for legal or regulatory audits.

<br>

### Benefits of Cloud Security
AWS offers security controls to help consumers protect workloads from threats.

#### Key Security Benefits
1. **Encryption of Data Protection**
   * **Encryption in transit**:<br>Secures data while mowing accross network (SSL/TLS, AWS Certificate Manager)
   * **Encryption at rest**:<br>Protects stored data (AWS Key Management Service, Amazon S3 encryption)
   * **Client-Side Encryption**:<br>Data is encrypted before being sent to AWS
2. **Identity and Access Management (IAM)**
   * Role-based access control (RBAC)
   * Multi-factor Authentication (MFA)
   * AWS Organizations for managing multiple accounts
3. **Threat Detection and Monitoring**
   * AWS continuously monitors security risks with AI-powered tools
4. **Scaling and Automation**
   * Security policies and compliance automation reduce manual security efforts

<br>

### Cloud Security Logs and Monitoring
AWS provides tools for capturing and analyzing security-related logs to maintain security visibility

#### Where to Find Security Logs

| **Log Type**            | **AWS Service**         | **Purpose**                               |
|-------------------------|-------------------------|-------------------------------------------|
| **Access Logs**         | AWS IAM Access Analyzer | Track IAM role and permission usage       |
| **API Activity Logs**   | AWS CloudTrail          | Records API requests and changes          |
| **Security Monitoring** | AWS Security Hub        | Centralised security dashboard            |
| **Network Logs**        | VPC Flow Logs           | Captures inbound/outbound network traffic |
| **Threat Detection**    | Amazon GuardDuty        | Detects suspicious activity               |

<br>

> **Security Logging Best Practices**
> - **Enable AWS CloudTrail** to track all API activity
> - **Use AWS Config** to monitor configuration changes
> - **Integrate logs with Amazon CloudWatch** for real-time analysis

<br>


### AWS Security Services for Protecting Cloud Resources
AWS provides various security tools to detect threats, secure workloads and enforce compliance

#### AWS Security Tools and Their Functions
| **AWS Security Service** | **Purpose**                                                               |
|--------------------------|---------------------------------------------------------------------------|
| **AWS Inspector**        | Automed scurity vulnerability assessments for EC2 and container workloads |
| **AWS Security Hub**     | Unified scurity dashboard with compliance monitoring                      |
| **Amazon GuardDuty**     | AI-driven threat detection (e.g. malware, unathorised access)             |
| **AWS Shield**           | Protections agains DDoS                                                   |
| **AWS WAF**              | Protects against SQL injection and XSS attacks                            |

<br>

### AWS Governance and Compliance Services
AWS governance services help businesses monitor compliance, enforce security
policies, and generate audit reports.

#### AWS Governance Tools
| **Service**             | **Function**                                            |
|-------------------------|---------------------------------------------------------|
| **AWS Config**          | Track AWS resource changes and configuration compliance |
| **AWS CloudTrail**      | Logs all AWS API activity for auditing                  |
| **AWS Audit Manager**   | Automates audit preparation and compliance checks       |
| **IAM Access Analyzer** | Identifies overly permissive IAM roles and policies     |
| **AWS Organizations**   | Manages multiple AWS accounts with centralised policies |

<br>

### Compliance Requirements Across AWS Services
Security and compliance requirements vary depending on the AWS service used

#### Security Considerations for Different AWS Services
| **AWS Service** | **Security Consideration**                            |
|-----------------|-------------------------------------------------------|
| **Amazon S3**   | Use bucket policies and encryption SSE-S3, SSE-KMS    |
| **Amazon EC2**  | Implment security groups, IAM roles and patch updates |
| **Amazon RDS**  | Enable encryption and restrict database access        |
| **AWS Lambda**  | Secure IAM permissions and function execution roles   |
| **Amazon VPM**  | Configure firewasll (security group and NACLs)        |