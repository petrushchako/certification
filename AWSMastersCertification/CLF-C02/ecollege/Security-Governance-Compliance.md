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



> **Security Logging Best Practices**
> - **Enable AWS CloudTrail** to track all API activity
> - **Use AWS Config** to monitor configuration changes
> - **Integrate logs with Amazon CloudWatch** for real-time analysis



