# MeasureUp Missed Practice Exam Questions

1. Access to which of the following can be shared across AWS accounts using AWS Resource Access Manager (RAM)?
    - [ ] AWS CloudTrail
    - [x] **Amazon Aurora**
    - [ ] Network Access Control Lists (NACLs)
    - [x] **Amazon EC2**

    > Access to Amazon EC2 and Amazon Aurora can be shared across AWS accounts using the AWS Resource Access Manager (RAM) service. RAM allows some AWS services to be shared across multiple AWS accounts. This is useful in organizations where each department maintains its own AWS account, but some management and business tasks are centralized.
    >
    > RAM is not used to share access to AWS CloudTrail across multiple AWS accounts. CloudTrail maintains event history for actions taken using the AWS Management Console, AWS API, SDK and command-line tools. CloudTrail can be used to audit resource configuration and access activities.
    >
    > RAM is not used to share access to Network Access Control Lists (ACLs) across multiple AWS accounts. Network ACLs can be used to block traffic based on IP address ranges and Transmission Control Protocol (TCP) port numbers.
    >
    > RAM is not used to share access to Amazon ElastiCache across multiple AWS accounts. ElastiCache can be used to provide in-memory data stores to significantly reduce application read and write latency.

2. A company is looking to choose an AWS container orchestration environment as a managed service that provides maximum flexibility and control over container deployment and network configurations.<br>Which AWS service will best meet these requirements?
    - [ ] AWS Lambda
    - [x] **Amazon Elastic Kubernetes Service (EKS)**
    - [ ] Amazon Elastic Container Service (ECS)
    - [ ] Amazon Elastic Compute Cloud (EC2)

    > The company should use the Amazon Elastic Kubernetes Service (EKS) service for maximum flexibility and control over container deployment and network configurations. Amazon EKS is an AWS managed service that provides Kubernetes cluster environments, which allow customers to directly configure detailed container deployment and network configurations. This approach provides maximum flexibility and technical control over the configuration of the worker nodes and pods running the containerized workloads.
    >
    > The company should not use the Amazon Elastic Container Service (ECS). Like Amazon EKS, the Amazon ECS service provides a container orchestration environment as a managed AWS service providing secure, highly-scalable and resilient infrastructure. However, the Amazon ECS service aims to provide a far simpler configuration and deployment interface for customers to use, abstracting away many of the technical details supporting container deployments and network configurations.
    >
    > The company should not use the AWS Lambda service. AWS Lambda is not intended for container orchestration. This is an AWS serverless environment that allows you to execute code in response to events, without having to worry about underlying server or cluster deployment.
    >
    > The company should not use the Amazon Elastic Compute Cloud (EC2) service. While EC2 virtual machines (VM) can run customer-built Amazon Machine Image (AMI) images, the EC2 service is not a container orchestration system so is not the best solution for these requirements.

3. A developer has observer failure in AWS console attempting to start Amazon Elastic Compute (EC2) Windows server instance.<br>Which AWS service or tool provides the most effective means of troubleshooting this issue?
    - [ ] Amazon CloudWatch
    - [ ] AWS CloudTrail
    - [x] **EC2Rescue for Windows Server**
    - [ ] Amazon Connect

    > The EC2Rescue for Windows Server tool provides the most effective means of troubleshooting this issue. EC2Rescue for Windows Server is an easy-to-use tool that customers can launch to perform diagnostic and troubleshooting checks on unreachable instances, collecting log files, and identifying potential causes.
    >
    > AWS CloudTrail does not provide the most effective means of troubleshooting this issue. The CloudTrail service is a security auditing service that records activities undertaken by AWS users and roles as a series of recorded events logged on Amazon S3. Amazon Cloud Trail is not the most effective to investigate a failed EC2 instance startup.
    >
    > AWS CloudWatch does not provide the most effective means of troubleshooting this issue. The CloudWatch service collects logs, resource metrics, and actionable events from EC2 instances. However, CloudWatch would be unable to capture log data for specific Windows server issues such as boot failures.
    >
    > Amazon Connect does not provide the most effective means of troubleshooting this issue. The Amazon Connect service provides a highly scalable contact center solution to allow customers to provide their own users with public-facing customer services using the AWS cloud.

4. A company is considering migrating source data from an external file server onto the AWS cloud using Amazon S3 storage.<br>Which of the following statements describes the use of object-base storage?
    - [ ] Source data is saved using block storage
    - [ ] Source data is organized in files and folder hierarchies
    - [x] **Additional information is stored about the source data in the form of object metadata**
    - [ ] Object-based storage saves/writes data in a consistent structured data format

    > Additional information is stored about the source data in the form of object metadata when using object-based storage in the AWS cloud. The Amazon S3 service stores metadata associated with each stored object, which can include customer defined keys and values.
    >
    > Object-based storage does not save/write data in a consistent structured data format. Object-based storage is a data storage architecture based on saving unstructured source data. Amazon S3 will store data in the format it is uploaded, for example as text, images or video.
    > 
    > Source data is not organized in files and folder hierarchies when using object-based storage. Object-based storage using the Amazon S3 service stores data in S3 buckets and does not require a folder structure.
    > 
    > Source data saved using block storage does not describe the use of object-based storage. Block storage is based on the division of uploaded files into equal-sized blocks of data allocated to the underlying volume storage, configured to optimize the speed of data access and retrieval.


5. A company is looking to migrate its infrastructure from a private data center and wants to use Network File System (NFS) compliant storage service in the AWS cloud.<br>Which statement regarding Amazon Elastic File System (EFS) is correct?
    - [x] **Amazon Elastic File System (EFS) offers a storage class for infrequently accessed files**
    - [ ] Amazon EFS can only store up to terabyte-scale data sets
    - [ ] Amazon Elastic File System (EFS) can be used to provide in-memory data stores.
    - [ ] Amazon Elastic File System (EFS) provides block level storage volumes for Amazon Elastic Compute Cloud (EC2) instances.

    > Amazon Elastic File System (EFS) offers a storage class for infrequently accessed files. EFS provides a cost-effective, Network File System (NFS) based file storage platform that can be shared by hundreds or even thousands of EC2 instances. EFS is a managed file system that supports low-latency, high-throughput file operations. EFS supports a range of storage classes for different use cases including EFS Standard, EFS Standard-Infrequent Access (Standard-IA), EFS One Zone and EFS One Zone-Infrequent Access (EFS One Zone-IA).
    >
    > Amazon Elastic File System (EFS) can store data beyond terabyte-scale. EFS is highly scalable and can store petabytes of data without requiring additional configuration by the customer.
    >
    > Amazon EFS cannot be used to provide in-memory data stores. In-memory data stores in AWS are provisioned by the Amazon ElastiCache service based on choice of Redis or Memcached compatible implementations.
    >
    > Amazon EFS does not provide block level storage volumes for Amazon Elastic Compute Cloud (EC2) instances. This functionality describes the Amazon Elastic Block Store (EBS) service, which offers several volumes types that can be attached to EC2 instances as network storage.

6. Which statements correctly describe the Amazon Relational Database Service (RDS)? (Select TWO.)
    - [x] **A B instance can contain multiple customer-created databases.**
    - [x] **DB instance storage can be Magnetic, General Purpose SSD or Provisioned OPS (PIOPS).**
    - [ ] Each DB instances must run in the customers' default Virtual Private Cloud (VPC).
    - [ ] Amazon manages software patching, but customers must manage backups.
    - [ ] RDS does not support access control using AWS Security Groups.

    > An Amazon Relational Database Service (RDS) DB instance can contain multiple customer- created databases. RDS is a managed, AWS public cloud relational database platform. RDS supports a wide range of database engines, including Amazon Aurora, Microsoft SQL Server, Oracle, MariaDB, MySQL and PostgreSQL. DB instance resources such as CPU, memory and storage can be scaled independently as needed.
    >
    > Supported RDS DB instance storage types are General Purpose SSD (gp2 or gp3), Provisioned OPS (io1) and Magnetic (standard). Magnetic storage is the most cost-effective, but offers the lowest performance, while PIOPS can scale to 256,000 input/output operations per second (IOPS).
    > 
    > With Amazon RDS, Amazon manages software patching as well as automated backups and database recovery. Customers can schedule additional backup jobs manually if desired.
    >
    > By default, new DB instances will be created in the customers' default Virtual Private Cloud (VPC). However, the customer can choose to deploy to an alternate new or existing customer VPC to tailor the networking environment for the specific requirements associated with each new DB instance.
    >
    > RDS does support access control using AWS Security Groups. Security groups can be used to control network access to DB instances based on request protocol, source IP addresses or CIDR range, port and source Security Group instance ID.


7. Which Amazon Elastic Block Store (EBS) volume type provides the MOST cost-effective storage that supports a maximum throughput rate of 500 Mebibytes per second (MiB/s)?
    - [ ] Provisioned Input/Output Operations Per Second (IOPS) solid state drive (SSD)
    - [ ] General Purpose solid state drive (SSD)
    - [x] **Throughput Optimized hard disk drives (HDD)**
    - [ ] Cold hard disk drives (HDD)

    > The Throughput Optimized hard disk drive (HDD) volume type provides the most cost- effective storage that supports a maximum throughput of 500 MiB/sper volume. This storage type is optimized for high-throughput workloads such as big data, log processing, and data warehousing. HDD storage has a lower cost than SSD storage. Note that AWS documentation often uses the Mebibytes (MiB), Gibibytes (GiB) and Tebibytes (TiB) byte units in place of the more common Megabytes, Gigabytes and Terabyte. For example, while one megabyte is 1 million bytes, a mebibyte represents the more accurate 220 (exactly 1,048,576) bytes count.
    >
    > Cold DD offers the lowest cost but does not support 500 MiB/s throughput. Cold HDD storage is best suited for workloads with infrequent access requirements.
    >
    > General Purpose solid state drive (SSD) is suitable for many types of workloads and supports up to 1,000 MiB/s. However, it is more expensive than HDD storage.
    >
    > Provisioned IOPS SSD storage is optimized for IOPS and offers a maximum throughput rate of up to 4000 MiB/s per volume. However, it is the most expensive volume type.

8. The finance department in a large company is examining aspects of the AWS Cloud Value Framework. <br>What would reduce the company's Total Cost of Ownership (TCO) when using AWS compared with legacy data centers?
    - [ ] The use of anti-virus software
    - [x] **Elastic computing**
    - [ ] Data Encryption
    - [ ] Shared security model

    > The use of Amazon Elastic Compute Cloud (EC2) instances within AWS could reduce the customer's Total Cost of Ownership (TCO) when compared with legacy data centers. As customers are only paying for the resources they use, they do not have to fund the upfront costs associated with setting up traditional data centers. Each EC2 instance is the virtual equivalent of a physical server which AWS customers can provision, start, stop, and terminate at will. Since AWS billing is fundamentally based on customers only paying for the AWS resources used, the TCO can be significantly reduced.
    >
    > Safeguarding workloads with data encryption and the use of anti-virus software are important parts of ensuring business resilience. However, TCO is not reduced by using these features and products, as they are paid services that must be provisioned using AWS and/or third parties.
    >
    > The shared security model defines the obligations of security and compliance between AWS and the customer. TO is unaffected by these commitments.

9. A company is looking to deploy a new application using the Amazon Elastic Compute Cloud (EC2) service and wants to minimize the associated operational costs. The business application must be available 24/7 and be licensed to use for a period of three years.<br>Which EC2 instance pricing model is the BEST choice to minimize costs?
    - [ ] Spot Instances
    - [x] **Standard Reserved Instances with a fixed three-year term**
    - [ ] On-Demand Instances
    - [ ] Convertible Reserved Instances with fixed three-year term

    > Standard Reserved Instances with a fixed three-year term is the best choice to reduce operational costs. The Amazon Elastic Compute Cloud (EC2) service offers Standard Reserved Instances for a specific instance type on a one-year or three-year term. The three-year term as a fixed price plan provides the greatest savings compared to the use of the On-Demand pricing model.
    >
    > On-Demand Instances is not the best choice of EC2 pricing model to reduce operational costs. On-Demand allows each customer to provision EC2 instances of any type when required and for any duration. However, On-Demand as a variable cost pricing model is the most expensive of all available options.
    >
    > Convertible Reserved Instances with a fixed three-year term is not the best choice to reduce operational costs. Although the use of EC2 Convertible Reserved Instances on a one-year or three-year term does provide significant discounts compared to the use of the On-Demand pricing model and allows the customer to modify the selected EC instance family, operating system, and tenancy, they are more expensive than the equivalent Standard Reserved instance plans.
    >
    > Spot Instances is not the best choice of EC2 pricing model to reduce operational costs. AWS allows customers to access unused EC2 capacity in the AWS cloud at significantly discounted prices. However, depending on demand, AWS may choose to reclaim a particular spot instance in customer use after providing a two-minute warning. The use of Spot Instances does not meet the scenario requirement for the application to be available around the clock.

10. A company is examining ways to reduce Amazon Elastic Compute Cloud (EC2) server costs for its fleet of applications running in the AWS cloud.<br>Which of the following AWS features can help reduce costs by taking advantage of Amazon unutilized EC2 capacity?
    - [ ] AWS Auto Scaling
    - [ ] AWS Compute Optimized
    - [x] **Amazon Elastic Compute Cloud Spot Instances**
    - [ ] AWS Serverless Computing

    > Amazon Elastic Compute Cloud (EC2) Spot Instances can help reduce costs by taking advantage of Amazon unutilized EC2 capacity. Amazon offers unused EC2 capacity at significant discount to customers. This allows Amazon to recover some of the costs associated with operating its expansive global infrastructure. Unlike an On-Demand EC2 instance, Spot Instances do not offer guaranteed compute resources at a specified time. Amazon may choose to reclaim an EC2 Spot instance at any time, nominally with only 2 minutes' notice. Spot Instances are well-suited for batch or other asynchronous workloads that can occur on a flexible schedule, where this processing can be restarted or repeated.
    >
    > AWS Serverless Computing does not reduce expenses by taking advantage of unutilized EC2 capacity. Serverless Computing allows on-demand applications to run without the customer having to consider and provision the underlying server infrastructure.
    >
    > AWS Auto Scaling does not reduce expenses by taking advantage of unutilized EC2 capacity. Auto Scaling Groups can be used to lower EC2 costs by optimizing the number of running instances based on the on-demand workload.
    >
    > AWS Compute Optimizer does not reduce expenses by taking advantage of unutilized EC2 capacity. Compute Optimizer evaluates EC2 instance usage and makes recommendations that optimize instance type based on historical usage.

11. A company is looking to improve its AWS cost analysis and management capabilities.<br>Which statement describes use of AWS Cost Explorer?
    - [ ] Recommendations for Spot and On-Demand Amazon Elastic Compute Cloud (EC2) instances can be generated.
    - [ ] Cost Explorer should be disabled if its features are no longer required.
    - [x] **Spending forecasts can be generated for up to the next 12 months.**
    - [ ] Up to 36 months of historical spend data can be reviewed.

    > Using AWS Cost Explorer, customer spending forecasts can be generated for up to the next 12 months. Cost Explorer can be used to visualize AWS usage and costs incurred over time. Cost Explorer evaluates historical usage information and trends in order to generate a spending forecast for the next 12 months. This information can be used to ensure that AWS services and resources are properly sized and improve the accuracy of allocated budgets.
    >
    > AWS Cost Explorer does not display up to 36 months of historical spend data. Only data for the last 13 months can be reviewed.
    >
    > AWS Cost Explorer does not generate recommendations for Spot and On-demand Amazon Elastic Compute Cloud (EC2) instances. Cost Explorer does generate recommendations for which Reserved Instances the customer should be purchased to maximize cost savings.
    >
    > Once enabled, AWS Cost Explorer cannot be disabled if its features are no longer required. Cost Explorer is free to use, unless accessed via its Application Programming Interface (API).

12. A company is considering using the AWS Budgets service to better management AWS costs.<br>Which AWS Budgets budget type should be used to optimize billing by determining the number of Amazon Elastic Compute Cloud (EC2) service usage hours that did not use an EC2 Reserved Instance?
    - [ ] Reserved Instance (RI) utilization budget
    - [ ] Usage budget
    - [ ] Cost budget
    - [x] **Reserved Instance (RI) coverage budget**

    > The AWS Budgets Reserved Instance (RI) coverage budget should be used to optimize billing by determining the number of Amazon Elastic Compute Cloud (EC2) service usage hours that did not use an EC2 Reserved Instance (RI). Ris provide costs savings by allowing an organization to commit to one or three- year terms that offer lower usage costs than use of On-Demand Instances. Using an RI coverage budget, a customer can receive alerts when instance usage does not fall under a reservation and is therefore incurring higher per-hour charges.
    >
    > RI utilization budgets are not used to determine the number of EC2 hours that did not use a reservation. These budgets can trigger alerts when Is are under-utilized.
    >
    > Usage budgets are not used to determine the number of EC2 hours that did not use a reservation. Usage budgets define target usage for a nominated AWS service.
    >
    > Cost budgets are not used to determine the number of EC2 hours that did not use a reservation. Cost budgets are similar t usage budgets but focus on service costs.

13. Which of the following statements describe AWS Developer Support? (Select TWO.)
    - [ ] AWS Develoepr Support response times for impaired systems are eight hours or less
    - [x] **One nominated primary contact can open as many support cases as required.**
    - [x] **Email-based AWS Developer support is offered during normal business hours.**
    - [ ] Telephone, email, and chat-based support is available 24/7.
    - [ ] AWS Developer Support includes access to an AWS Technical Account Manager (TAM).

    > With an AWS Developer Support plan, one nominated primary contact can open as many support cases as required. Developer support is email-based and is offered during normal business hours. This support level is best suited for the development and testing phases of an AWS-based project.
    >
    > AWS Developer Support response times for impaired systems is not eight hours or less. AWS Response times on the AWS Developer Support plan for general guidance is less than 24 business hours, and less than 12 business hours for impaired systems.
    >
    > AWS Developer Support does not include access to a Technical Account Manager (TAM), as is the case for the AWS enterprise-level support plans. AWS Enterprise level support is intended for organizations that have invested in AWS cloud resources for production services.
    >
    > Telephone, email and chat-based support are not available 24/7 for Developer support, as is the case for AWS Enterprise support. Email-based support from AWS Cloud Support engineers is available within business hours only.

14. Which of the following statements describes a capability of the AWS Trust and Safety team?
    - [ ] Ensuring all AWS Support requests are handled in a timely manner
    - [ ] Investigating customer reports of incorrect AWS billing
    - [ ] Investigating reports of malicious network activity originating from sanctioned or politically-sensitive countries
    - [x] **Investigating reports of excessive network activity originating from an AWS resource on a customer account**

    > Investigating reports of excessive network activity originating from an AWS resource is a capability of the AWS Trust and Safety Team. The Trust and Safety Team is an AWS security team tasked with assisting AWS customers involved in reported incidents of abuse involving AWS resources. The AWS Trust and Safety team will contact AWS customers if associated AWS resources are alleged to be sources of copyright breaches, email abuse or of generating excessive or malicious network traffic.
    >
    > Ensuring all AWS Support requests are handled in a timely manner is not a capability of the AWS Trust and Safety team. The AWS Support team, rather than the AWS Trust and Safety team, is responsible for ensuring that customer support requests are handled in a timely manner.
    >
    > Investigating reports of malicious network activity originating from sanctioned or politically- sensitive countries is not a capability of the AWS Trust and Safety team. The AWS Trust and Safety team is responsible for investigating malicious network activity only when the source is suspected to be associated with the use of AWS resources.
    >
    > Investigating customer reports of incorrect AWS billing is not a capability of the AWS Trust and Safety team. This scenario should be resolved by the AWS Support team.

15. A company is reassessing its AWS support plan coverage as it plans to deploy its first production workloads in the AWS cloud.<br>For paid AWS support plans, which case severity offers a maximum one-hour response time?
    - [ ] Production system impaired
    - [x] **Production system down**
    - [ ] System impaired
    - [ ] Business-critical system down

    > Production system down case severities offer a maximum 1-hour response time. This case severity is available to customers with AWS Business or Enterprise Support plans.
    >
    > Business/Mission-critical system down is offered at maximum 15-minute response time on the AWS Enterprise Support plan and 30-minutes on the Enterprise On-Ramp plan.
    >
    > Production system impaired offers a maximum 4-hour response time. This case severity is available to customers with AWS Business or Enterprise Support plans.
    >
    > System impaired offers a maximum 12-hour response time time. This case severity is available to any AWS customer with a paid support plan.

16. A company is considering which AWS support plan is the most suitable for its needs.<br>Which AWS support plan 24/7 phone, email, and chat access but does not provide access to dedicated AWS Technical Account Managers?
    - [ ] Basic Support
    - [x] **AWS Business Support**
    - [ ] AWS Enterprise On-Ramp Support
    - [ ] AWS Developer Support

    > The AWS Business Support plan offers 24/7 phone, email, and chat access to the AWS Support team but not access to AWS Technical Account Managers (TAM). An AWS TAM is a customer advocate and trusted advisor who can assist with the optimization of the customer's cloud solution.
    >
    > The Enterprise On-Ramp plan offers elevated benefits comparable with the AWS Enterprise Support plan. The Enterprise Support plan provides a customer with a dedicated TAM who can deliver account-specific advice and guidance. Customers on the Enterprise On-Ramp plan receive support from a pool of available TAMs resources.
    >
    > The AWS Developer Support plan is designed for those experimenting or testing in AWS rather than for running production workloads. Cases can be raised with AWS Support via email, but responses will be restricted to during business hours. Response times are significantly longer than for Business and Enterprise Support customers.
    >
    > AWS Basic Support is available for all AWS customers at no additional cost, but has a limited offering. Basic Support offers access to customer services, AWS Trusted Advisor, and the AWS Personal Health Dashboard.






<br><br><br>

## Easy Beginner
1. Which AWS Global Infrastructure component represents a discrete data center that is geographically distant from others of its type?

    - [ ] AWS Outposts
    - [ ] Edge Location
    - [ ] Region
    - [x] **Availability Zone**

    > An Availability Zone (AZ) is a discrete physical data center that is positioned so as to be geographically distant from one or more other data centers (AZs) within the same AWS Region.
    >
    > An AWS Region is a group (cluster) of AZs that are geographically dispersed.
    >
    > An Edge Location is a discrete physical location available to customers as a low latency access point to join the AWS network.
    >
    > AWS Outposts is an AWS-managed service offering to customers which runs specific AWS services on-premises. The primary use cases are to provision workloads using localized AWS services to meet specific certain regulatory and compliance requirements, for ultra-low network latency, or to support dependencies on local physical hardware.

2. Which of the following is NOT a general design principle of the Well-Architected Framework in AWS?

    - [ ] Test systems at production scale.
    - [ ] Drive architectures using data.
    - [x] **Create static architecture.**
    - [ ] Stop guessing your capacity needs.

    > Static architecture is often a characteristic of traditional data centers. Designs and architectures are created as one-time events and do not change. AWS design principles allow for dynamic, flexible architecture that evolves over time. The design framework offers best practices for designing and operating reliable, secure, efficient, and cost- effective systems in the cloud.
    >
    > Not guessing your capacity needs, and having a design underpinned by data allows the correct allocation of resources as a tenant of the AWS cloud.
    >
    > Testing systems at production scale had always been a challenge to the industry before cloud architectures. Cloud computing facilitates pre-production testing at scale without having to invest in additional capital resources. The design principles support this dynamic and agile methodology of testing systems before going into production.
    >
    > Driving architectures using data takes the guesswork out of delivering reliable, secure, efficient and cost-effective AWS cloud infrastructure.

3. A company is looking to improve its security posture in AWS following a number of security breaches involving shared credentials.<br>What is a benefit of enabling multi-factor authentication (MFA) for an AWS Identity and Access Management (IAM) user?

    - [ ] Applications and services can consume AWS resources automatically, without requiring AWS Identity and Access Management (IAM) service interaction.
    - [ ] An AWS Identity and Access Management (IAM) user can log on by using a code or token and does not need to provide a password.
    - [ ] Passwords are stored in encrypted format in the AWS account.
    - [x] **If an AWS account password is compromised, the account is still protected from unauthorized access.**

    > Once AWS Multi-Factor Authentication (MFA) is enabled, even if an AWS Identity and Access Management (IAM) user password is compromised, the account is still protected from unauthorized access. MFA authentication requires at least two authentication factors before an AWS IAM user will be allowed to access the account. The IAM user's password serves as the first factor, and an authentication code generated on their smartphone can serve as the second factor. AWS also supports hardware-based key fobs and other similar devices as the second authentication factor.
    >
    > Enabling AWS MFA does not allow an IAM user to log on using only a code or token. With MFA, a user is required to provide at least two authentication factors.




<br><br><br>

## Expert

1. An administrator plans to deploy General Purpose solid state drive (SSD) volumes for several Amazon Elastic Compute Cloud (EC2) instances.<br>Which statement BEST describes General Purpose SSD volume capabilities?

    - [ ] General Purpose solid state drive (SSD) volumes have excellent durability with an annual failure rate less than 0.1%.
    - [ ] General Purpose solid state drive (SSD) volumes support 32,000 IOPS per volume.
    - [ ] General Purpose solid state drive (SSD) volumes are the most cost-effective storage for static data.
    - [x] **General Purpose solid state drive (SSD) volumes can be used for boot volumes.**

    > The use of General Purpose SSD volumes for boot volumes is an AWS-supported use case. The Amazon Elastic Block Store (EBS) service offers several types of block level storage volumes that can be used with Amazon Elastic Compute Cloud (EC2) instances. General Purpose SSD volumes are designed to facilitate most non-specialized storage workloads. These volumes are ideal for test and development environments.
    >
    > General Purpose SSD volumes are not the most cost-effective storage for static data. Cold hard-disk drive (HDD) storage is the most cost-effective EBS option for storing static data. Cold HDD storage is ideal for large volumes that store infrequently accessed data.
    >
    > General Purpose SSD volumes support a maximum of 16,000 Input/Output Operations Per Second (I0PS) per volume. For higher lOPS requirements, customers should deploy Provisioned IOPS SSD volumes, which supports IOPS up to 256,000.
    >
    > General Purpose SSD volumes have an annual failure rate of 0.1 to 0.2%. For more durable volumes, implement Provisioned IOPS SSD volumes which provide an annual failure rate of 0.001% or less.


<br><br><br>


## Moderate

1. A company is looking to improve its AWS cost analysis and management capabilities. Which statement describes use of AWS Cost Explorer?
    - [x] **Spending forecasts can be generated for up to the next 12 months.**
    - [ ] Cost Explorer should be disabled if its features are no longer required.
    - [ ] Up to 36 months of historical spend data can be reviewed.
    - [ ] Recommendations for Spot and On-Demand Amazon Elastic Compute Cloud (EC2) instances can be generated.

    > Using AWS Cost Explorer, customer spending forecasts can be generated for up to the next 12 months. Cost Explorer can be used to visualize AWS usage and costs incurred over time. Cost Explorer evaluates historical usage information and trends in order to generate a spending forecast for the next 12 months. This information can be used to ensure that AWS services and resources are properly sized and improve the accuracy of allocated budgets.
    > 
    > AWS Cost Explorer does not display up to 36 months of historical spend data. Only data for the last 13 months can be reviewed.
    >
    > AWS Cost Explorer does not generate recommendations for Spot and On-demand Amazon Elastic Compute Cloud (EC2) instances. Cost Explorer does generate recommendations for which Reserved Instances the customer should be purchased to maximize cost savings.
    >
    > Once enabled, AWS Cost Explorer cannot be disabled if its features are no longer required. Cost Explorer is free to use, unless accessed via its Application Programming Interface (API).

2. Which of the following is NOT a feature of AWS Billing and Cost Management?
    - [ ] AWS Cost Explorer
    - [ ] AWS Budgets
    - [ ] Consolidated billing
    - [x] **AWS Pricing Calculator**

    > AWS Pricing Calculator is not a feature of AWS Billing and Cost Management. Pricing Calculator can be used to estimate costs based on customer-defined usage scenarios. These cost estimates can help an organization clarify the financial overheads for a planned AWS deployment or migration.
    >
    > AWS Cost Explorer is a feature of AWS Billing and Cost Management. Cost explorer can be used to visualize AWS usage and customer costs incurred over time.
    >
    > AWS Budgets is a feature of AWS Billing and Cost Management. AWS Budgets is used to monitor usage metrics and establish service budgets. Alerts can be configured when spending approaches a budgeted limit.
    >
    > Consolidated billing is a feature of AWS Billing and Cost Management. Use of the AWS Organization service allows a customer to centralize the monthly charges for all member accounts into a consolidated bill payable in the AWS Organization Management account.

3. Which statement BEST describes the consolidated billing available for use with AWS Organizations?
    - [x] **Usage from all member accounts is aggregated to calculate a service's pricing tier.**
    - [ ] The AWS Organizations Management account pays the prior month's usage for new member accounts.
    - [ ] All AWS Support plan fees are consolidated in the AWS Organization's monthly consolidated bill.
    - [ ] Consolidated billing requires an AWS Organization to be defined using AWS Budgets.

    > Usage from all member accounts is aggregated to calculate a service's pricing tier. Aside from ease of management, one of the primary benefits of consolidated billing is that volume pricing discounts can be shared across accounts. For services or features that support volume pricing discounts, such as Amazon S3, usage is combined across all member accounts to provide greater discounts. For example, if each member account transfers 10 gigabytes (GB) of data in a given month, the usage is aggregated to provide the lowest price for the total data transferred.
    >
    > Consolidated billing does not require an AWS Organization to be defined using AWS Budgets. Organizations are defined using AWS Organizations, not AWS Budgets which is used to predict and manage usage costs and establish customer service budgets.
    >
    > The AWS Organizations Management account does not pay the prior month's usage for new member accounts. The AWS usage charges for the current month are split based on the date in the month when the member account was added to the AWS Organization. Any monthly charges incurred prior to joining the master account are paid by the account.
    >
    > All AWS Support plan fees are not consolidated in the AWS Organization's monthly consolidated bill. Support plan fees are based on monthly AWS usage and are calculated and billed on each account independently. The Enterprise Support plan offers a feature to a include multiple accounts in an aggregated monthly support plan bill.

4. Which AWS billing tool can be used to automatically deliver report files to an S3 bucket?
    - [ ] Amazon CloudWatch
    - [ ] Amazon EC2 Usage Reports
    - [ ] AWS Trusted Advisor
    - [x] **AWS Cost and Usage Reports**

    > AWS Cost and Usage Reports deliver report files to your nominated S3 bucket, can be updated up to three times a day, and are manipulated via API (Application Programming Interface). Cost and Usage Reports give a comprehensive set of cost and usage data for your AWS account.
    >
    > Amazon EC2 Usage Reports are created by AWS Cost Explorer to report on the cost and usage of your EC2 instances and the usage of your Reserved Instances. This EC2 usage and costing data is accessible using the AWS Cost Explorer user interface to view charts and download data files from within the AWS console.
    >
    > Amazon CloudWatch is a monitoring service that collects and reports on performance and operational data. CloudWatch can be used to trigger actions when events happen. One example is Auto Scaling where additional EC2 instances can be provisioned if CPU or memory usage exceeds pre-defined threshold values.
    >
    > AWS Trusted Advisor is a tool to review your AWS environment against AS best practice benchmarks. The recommendations cover cost optimization, performance, security, fault tolerance and service limits checks.

5. What can be used to generate recommendations for cost optimization? (Select TWO.)
    - [ ] AWS Pricing Calculator
    - [x] **AWS Cost Explorer**
    - [ ] Amazon Inspector
    - [x] **AWS Trusted Advisor**
    - [ ] AWS Budgets

    > AWS Trusted Advisor and AWS Cost Explorer can be used to generate recommendations for cost optimization.
    >
    > Trusted Advisor can be used to evaluate the configuration and customer operations within an AWS environment, and make recommendations in six categories; Cost optimization, Performance, Security, Fault tolerance, Service limits and Operational Excellence.
    >
    > Cost Explorer can be used to visualize AWS usage and customer costs incurred over time. Cost Explorer evaluates historical usage information and trends in order to generate spending forecasts and will make recommendations based on EC2 resource usage. These recommendations can for example allow a customer to identify and right-size underutilized EC2 instances.
    >
    > AWS Pricing Calculator does not generate recommendations for cost optimization. Pricing Calculator can be used to estimate costs based on customer-defined usage scenarios. These estimates can help an organization undertake project costings for a planned AWS deployment or migration scenario.
    >
    > Amazon Inspector does not generate recommendations for cost optimization. Inspector evaluates the security configuration and scans for vulnerabilities in running Amazon Elastic Compute Cloud (EC2) environment instances.
    >
    > AWS Budgets does not generate recommendations for cost optimization. AWS Budgets can be used to establish service budgets and raise alerts when spending approaches a customer budgeted limit.


6. Which of the following is NOT a feature of AWS Organizations consolidated billing?
    - [x] **Consolidated billing for AWS Organizations incurs a small monthly maintenance fee.**
    - [ ] Volume pricing discounts can be shared across member accounts.
    - [ ] A single bill is generated for all AWS Organization member accounts.
    - [ ] Cost and usage data are collected for all member accounts in the AWS Organization.

    > Consolidated billing for AWS Organizations does not incur a small monthly maintenance fee. Using consolidated billing, a company has a management account that accrues and pays the charges of all member accounts. This AWS Organizations feature is offered at no additional cost.
    >
    > With consolidated billing, volume pricing discounts can be shared across member accounts. For AWS services and features that support volume pricing discounts, such as AWS Data Transfer and Amazon S3, usage is combined across all member accounts to provision greater discounts.
    > 
    > With consolidated billing, a single bill is generated aggregating costs across all AWS organization member accounts. The costs incurred by each member account are itemised, but total charges are paid in one financial transaction.
    > 
    > With consolidated billing, cost and usage data is collected and available for all member accounts in the AWS Organization. Customers can access this information via the AWS organizations' management account.

7. A company is considering using the AWS Budgets service to better management AWS costs.<br>Which AWS Budgets budget type should be used to optimize billing by determining the number of Amazon Elastic Compute Cloud (EC2) service usage hours that did not use an EC2 Reserved Instance?
    - [ ] Reserved Instance (RI) utilization budget
    - [x] **Reserved Instance (RI) coverage budget**
    - [ ] Cost budget
    - [ ] Usage budget

    > The AWS Budgets Reserved Instance (RI) coverage budget should be used to optimize billing by determining the number of Amazon Elastic Compute Cloud (EC2) service usage hours that did not use an EC2 Reserved Instance (RI). Ris provide costs savings by allowing an organization to commit to one or three-year terms that offer lower usage costs than use of On-Demand Instances. Using an RI coverage budget, a customer can receive alerts when instance usage does not fall under a reservation and is therefore incurring higher per-hour charges.
    >
    > RI utilization budgets are not used to determine the number of EC2 hours that did not use a reservation. These budgets can trigger alerts when RIs are under-utilized.
    >
    > Usage budgets are not used to determine the number of EC2 hours that did not use a reservation. Usage budgets define target usage for a nominated AWS service.
    >
    > Cost budgets are not used to determine the number of EC2 hours that did not use a reservation. Cost budgets are similar to usage budgets but focus on service costs.

8. A company is considering replacing a number of its data centres in specific european countries with use of the AWS cloud. Which statement regarding AWS Regions is correct?
    - [ ] Each region hosts at least one Local Zone for latency-sensitive apps.
    - [x] **Each AWS Region is composed of multiple Availability Zones (AZ) connected with redundant low-latency, fiber optic network links.**
    - [ ] For high availability, customer applications should be distributed across at least multiple regions.
    - [ ] A minimum of two fault-tolerant data centers are located in each region.

    > Each AWS Region is composed of multiple Availability Zones (AZ) connected with redundant low-latency, fiber optic network links. The AWS global infrastructure is designed to maximize network availability and throughput while reducing latency for customers. Regions are geographically distinct areas that operate independently.
    >
    > A minimum of three, not two, fault tolerant data centers are located in each region. Each region contains at least three AZs, and each AZ contains at least one data center.
    >
    > For high availability, customer applications must be distributed across at least multiple AZs, not regions. Distributing applications across multiple regions can enhance high availability but is not the minimum requirement. High availability iS met by distributing an application across multiple AZs within a single region.
    >
    > Local Zones are not available in every AWS Region. Local Zones are extensions of AWS Regions that place AWS infrastructure in metropolitan locations near large populations centers within the broad geographic area. Local Zones are designed to reduce latency for applications such as video streaming and real-time gaming.

9. An accounting company has a historical document archive containing handwritten paper tax returns. Each paper form has been scanned to generate a digital image. Which AWS machine learning service is BEST suited to extract the content in each scanned image?
    - [ ] Amazon Transcribe
    - [ ] Amazon Polly
    - [ ] Amazon Rekognition
    - [x] **Amazon Textract**
    
    > The Amazon Textract machine learning service is best suited to extract the content in each scanned image. The Amazon Textract API can be used to automatically process text including handwriting and document layout information from scanned images and generate digital output in text.
    >
    > The Amazon Polly machine learning service is not best suited in this scenario. Amazon Polly is designed to convert text data into audible life-like speech, providing a choice of natural-sounding human voices.
    >
    > The Amazon Transcribe machine learning service is not best suited in this scenario. Amazon Transcribe uses machine learning to convert audio data into text, for example using a recorded speech.
    > 
    > The Amazon Rekognition machine learning service is not best suited in this scenario. Amazon Rekognition provides image processing and video analysis capabilities, supporting many different face recognition system use cases.

10. A company wants to implement improved network security on an existing AWS Virtual Private Cloud (VPC). Which of the following can be used to implement VPC subnet security by restricting inbound requests by protocol and port?
    - [ ] Security Groups
    - [ ] AWS Identity and Access Management (IAM) Groups
    - [ ] AWS PrivateLink
    - [x] **Network ACLs**

    > A network Access Control List (ACL) can be used to support VPC subnet security by screening inbound requests. A subnet is a building block of an Internet Protocol (IP) network for connectivity and security configuration purposes. An AWS Subnet does not provide firewalling features and need to be secured with a network ACL. ACLs are used to block traffic based on IP addresses and Transmission Control Protocol (TCP) port numbers.
    >
    > AWS Security groups control traffic for Amazon Elastic Compute Cloud (EC2) instances and can be compared to a firewall at the instance level. Customers are responsible for creating and configuring security groups based on the messaging requirements for application running in their AWS environments.
    >
    > Identity and Access Management (IAM) groups are used to group IAM users based on attributes and characteristics such as job function. IAM policies are linked to an 1AM group to provide specific access permissions to all members of the IAM group. IAM groups do not control inbound requests at the network level.
    >
    > AWS PrivateLink facilitates secure connectivity between AWS PCs, and between VPCs and AWS services. Network traffic on a Private Link connection does not traverse the Internet. PrivateLink does not filter specific inbound requests at the subnet level.

11. Which of the following are the BEST sources of AWS security documentation for enterprise- level use cases on the AWS public cloud? (Select TWO.)
    - [x] **AWS Architect Center**
    - [ ] AWS CloudWatch
    - [ ] AWS Cost and Usage Reports
    - [x] **AWS Shared Responsibility Model**
    - [ ] AWS CloudTrail

    > The AWS Architecture Center and the AWS Shared Responsibility Model are the best sources of AWS security documentation for enterprise-level use cases on the AWS public cloud.
    >
    > The AWS Architecture Center provides security guidance and documentation as part of the AWS Well-Architected framework; whereas the AWS Shared Responsibility model provides security documentation as part of the description of the inherent division of responsibilities between AWS and the customer. Fundamentally, AWS provides the security of the public cloud, while the customer agrees to secure its applications and all AWS resource usage within the AWS cloud.
    >
    > AWS CloudWatch is not the best source of AWS security documentation for enterprise-level use cases on the AWS public cloud. The CloudWatch service provides detailed logging and monitoring of applications and resources deployed to the AWS cloud.
    >
    > AWS CloudTrail is not the best source of AWS security documentation for enterprise-level use cases on the AWS public cloud. The CloudTrail service is a security auditing service that records activities undertaken by AWS users and roles as a series of recorded events logged on Amazon S3.
    >
    > AWS Cost and Usage Reports is not the best source of AWS security documentation for enterprise-level use cases on the AWS public cloud. The AWS cost and usage reports contain detailed billing information broken down by AWS resource and are configurable using definable AWS tags.

12. Which of the following statements describe AWS Developer Support? (Select TWO.)
    - [ ] AWS Developer Support response times for impaired systems are eight hours or less.
    - [ ] AWS Developer Support includes access to an AWS Technical Account Manager (TAM).
    - [x] **Email-based AWS Developer support is offered during normal business hours.**
    - [x] **One nominated primary contact can open as many support cases as required.**
    - [ ] Telephone, email, and chat-based support is available 24/7.

    > With an AWS Developer Support plan, one nominated primary contact can open as many support cases as required. Developer support is email-based and is offered during normal business hours. This support level is best suited for the development and testing phases of an AWS-based project.
    >
    > AWS Developer Support response times for impaired systems is not eight hours or less. AWS Response times on the AWS Developer Support plan for general guidance is less than 24 business hours, and less than 12 business hours for impaired systems.
    >
    > AWS Developer Support does not include access to a Technical Account Manager (TAM), as is the case for the AWS enterprise-level support plans. AWS Enterprise level support is intended for organizations that have invested in AWS cloud resources for production services.
    >
    > Telephone, email and chat-based support are not available 24/7 for Developer support, as is the case for AWS Enterprise support. Email-based support from AWS Cloud Support engineers is available within business hours only.

13. A support team is preparing for a company's first live deployment onto the AWS cloud and would like to understand which AWS services provide visibility of the current and planned availability of the AWS services on which the application depends. Which statement regarding the AWS Health service is correct?
    - [ ] AWS Health allows notifications for events to be deleted from the Personal Health Dashboard.
    - [ ] AWS Health can detect and alert on events generated in Amazon CloudWatch.
    - [ ] AWS Health can only be used to view events from a single nominated AWS account.
    - [x] **AWS Health displays events even if a customer does not use AWS services in the affected region.**

    > The AWS Health service displays events even if a customer does not use AWS services in the affected region. AWS Health provides alert information regarding planned and unplanned AWS Service disruptions and failure events that may impact a customer. AWS Health displays two types of events: account-specific events and public events. Public events may include general service events for services in regions where a customer does not host resources.
    >
    > AWS Health can be used to view events from a multiple AWS accounts. For customers that use AWS Organizations, events for all associated accounts can be viewed.
    >
    > AWS Health does not detect and alert on events generated in Amazon CloudWatch. However, CloudWatch can be used to detect and alert on events generated by the AWS Health service.
    >
    > AWS Health does not allow notifications for events to be deleted from the Personal Health Dashboard. These notifications are updated and removed by AWS when the event is resolved.

14. A company is evaluating which AWS support plan best meets their support needs on the AWS cloud. Which of the following support features is offered as part of the AWS Business Support but is not included in a Developer Support plan?
    - [ ] AWS online documentation regarding best practices
    - [ ] One-on-one billing and account support
    - [ ] An unlimited number of support cases
    - [x] **Access to all AWS Trusted Advisor best practice checks**

    > The AWS Business Support plans offer access to all AWS Trusted Advisor best practice checks checks. The Trusted Advisor service automatically evaluates and reports in the configuration and operational status of each customer AWS environment, making recommendations in the cost optimization, performance, resilience, security, operational excellence, and service limits categories. Subscribers to the AWS Basic and Developer support plans have access to a subset of security checks as well as service quota checks. However, customers who subscribe to Business or Enterprise levels of support get full access to Trusted Advisor checks and capabilities.
    >
    > Both Business and Developer Support plans offer an unlimited number of support cases. In a Developer Support plan, the cases must be created by a primary contact.
    >
    > Both Business and Developer support plans offer access to AWS online documentation regarding best practices. AWS Best practices documentation is available in the public domain via AS websites and related training and community resources.
    >
    > Both Business and Developer support plans offer one-on-one billing and account support. AIl AWS customers, even those without a paid support plan, have access to customer billing support resources 24/7.


15. Which of the following statements describes a capability of the AWS Trust and Safety team?
    - [ ] Investigating reports of malicious network activity originating from sanctioned or politically-sensitive countries
    - [ ] Investigating customer reports of incorrect AWS billing
    - [ ] Ensuring all AWS Support requests are handled in a timely manner
    - [x] **Investigating reports of excessive network activity originating from an AWS resource on a customer account**

    > Investigating reports of excessive network activity originating from an AWS resource is a capability of the AWS Trust and Safety Team. The Trust and Safety Team is an AWS security team tasked with assisting AWS customers involved in reported incidents of abuse involving AWS resources. The AWS Trust and Safety team will contact AWS customers if associated AWS resources are alleged to be sources of copyright breaches, email abuse or of generating excessive or malicious network traffic.
    >
    > Ensuring all AWS Support requests are handled in a timely manner is not a capability of the AWS Trust and Safety team. The AWS Support team, rather than the AWS Trust and Safety team, is responsible for ensuring that customer support requests are handled in a timely manner.
    >
    > Investigating reports of malicious network activity originating from sanctioned or politically-sensitive countries is not a capability of the AWS Trust and Safety team. The AWS Trust and Safety team is responsible for investigating malicious network activity only when the source is suspected to be associated with the use of AWS resources.
    >
    > Investigating customer reports of incorrect AWS billing is not a capability of the AWS Trust and Safety team. This scenario should be resolved by the AWS Support team.

