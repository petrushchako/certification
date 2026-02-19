# Understanding Concept of Cloud Economics

1. Introduction to Cloud Economics
   
Cloud economics focuses on the financial benefits of using cloud computing over traditional on-premises infrastructure. AWS offers a pay-as-you-go pricing model, enabling organisations to optimise costs, increase efficiency, and reduce capital expenditures.

Cloud computing offers several economic advantages, including:
- **Cost savings** through optimised resource usage.
- **Scalability** to match demand and avoid over-provisioning.
- **Operational efficiency** via automation and managed services.


2. Aspects of Cloud Economics

#### On-Premises vs. Cloud Cost Models

| **Cost Factor**            | **On-Premises**                                                | **Cloud (AWS)**                    |
|----------------------------|----------------------------------------------------------------|------------------------------------|
| **Upfront Investment**     | Requires purchasing servers, storage, and networking equipment | No upfront hardware costs          | 
| **Operational Costs**      | Maintenance, electricity, cooling, staff                       | Pay for what you use               |
| **Scalability**            | Limited; requires additional hardware purchases                | Elastic scaling based on demand    |
| **Utilisation Efficiency** | Over-provisioning leads to wasted resources                    | Right-sizing ensures optimal usage |
| **Maintenance**            | Manual updates and hardware replacements                       | AWS manages infrastructure         |





3. Licensing Strategies in the Cloud

AWS offers different licensing models to optimise software costs:


| **Licensing Model**               | **Description**                                               | **Example Use Case**                                  |
|-----------------------------------|---------------------------------------------------------------|-------------------------------------------------------|
| **Bring Your Own License (BYOL)** | Allows organizations to use existing software licenses in AWS | Migrating licensed database like Microsoft SQL Server |
| **Included License**              | AWS provides the software license as part of the service      | Running Amazon RDS with built-in SQL Server licensing |
| **Subscription-Based License**    | Pay for software on a usage basis                             | Amazon WorkSpace for Windows virtual desktops         |



4. Understanding the concept of Rightsizing
#### What is Rightsizing
Rightsizing refers to optimising AWS resources to mach actual workload demands. This prevents over-provisioning and reduces costs.

#### Strategies of Rightsizing
- **Monitoring Usage**<br>Use AWS CloudWatch and AWS Cost Explorer to analyse usage patterns.
- **CHoose the Right Instance Type**<br>Select the appropriate EC2 instance based on CPU, memory, and nework requirements.
- **Use Auto Scaling**<br>Automatically scale resources up or down.
- **Switch to Serverless**<br>Use AWS Lambda, Amazon DynamoDB, or AWS Fargate to avoid unnecessary infrastructure costs.


<br>

5. Benefits of Automation in Cloud Cost Optimisation

#### How Automation Reduces Costs
Automation minimises manual intervention, improves efficiency, and reduces errors. AWS provides several automation tools:

| **AWS Automation Service** | **Benefit** |
|----------------------------|-------------|
| **AWS CloudFormation** | Automates provisioning and infrastructure management |
| **AWS Auto Scaling** | Adjusts resources dynamically to meet demand |
| **AWS Systems Manager** | Automates patching, updates, and maintenance tasks |
| **AWS Lambda** | Serverless computing reduces infrastructure management overhead |

<br>

6. Managed AWS Services and Their Cost Benefits

| **Managed Service**                   | **Use Case** | **Cost Savings** |
|---------------------------------------|------|------|
| **Amazon RDS**                        | Managed relational database | Eliminates database maintenance costs |
| **Amazon DynamoDB**                   | Serverless NoSQL databse | No promovisioning os scaling costs |
| **Amazon Elastic Container Service**  | Container orchestration | Reduces infrastructure management costs |
| **Amazon Elastic Kubernetes Service** | Managed Kubernetes | There is no need to manage Kubernetes clusters manually |


