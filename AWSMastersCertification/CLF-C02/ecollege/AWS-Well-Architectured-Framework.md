# AWS Well-Architected Framework

## Overview
The AWS Well-Architected Framework is a set of best practices and guidance for building secure, high-performing, resilient, and efficient infrastructure on AWS. The Framework is build on six pillars, each focusing on a key aspect of cloud architecture.

## Six Pillars
### 1. Operational Excellence
- Focuses on running and monitoring systems to deliver business value.
- Involves continuous improvement through automation, documentation, and monitoring.
- **Best practices include**:
  - Automating operational tasks (IaC).
  - Defining and following SOP.
  - Implementing observability and monitoring tools like Amazon CloudWatch.

### 2. Security
- Ensuring data protection, system integrity and compliance.
- Protects system from cyber threats and unauthorised access.
- **Best practice include**:
  - Using Identity and Access Management (IAM) policies and multi-factor authentication (MFA).
  - Encrypting data at rest (S3, KMS) and in transit (SSL/TLS).

### 3. Reliability
- Ensuring a workload can recover from failures and continue functioning.
- Focuses on fault tolerance, disaster recovery and system availability.
- **Best practices include**:
  - Designing with redundancy using multiple AZs.
  - Using AWS Auto Scaling to adjust resources dynamically.
  - Implementing backup and restore strategies (S3 and AWS Backup).

### 4. Performance Efficiency
- Optimises resource usage to ensure the performance at the lowest cost.
- Focuses on saling based on demand and optimizing workloads.
- **Best practices include**:
  - Using AWS Scaling and Elastic Load Balancer (ELB).
  - Choosing the right instance type (EC2, Lambda) based on workload.
  - Monitoring performance using AWS CloudWatch and AWS X-Ray.

### 5. Cost Optimization
- Ensuring efficient use of AWS resources to minimise expenses.
- Help avoid over-provisioning and unnecessary spending.
- **Best practices include**:
  - Using AWS Cost Explorer and AWS Budgets to track expenses.
  - Leveraging Reserved Instances (RIs) and Saving Plans for predictable workloads.
  - Implementing Serverless computing (AWS Lambda) to reduce operational costs.

### 6. Sustainability
- Focuses on minimising environmental impact while running cloud workloads.
- Encourages energy-efficient architectures and reducing carbon footprings.
- **Best practices include**:
  - Choosing energy-efficient AWS regions.
  - Right-sizing compute resources.
  - Using managed services (e.g. AWS Lambda, Amazon S3) to optimize resource consumtion
