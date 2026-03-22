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

16. company is considering which AWS support plan is the most suitable for its needs. Which AWS support plan has Infrastructure Event Management (IEM) included as part of its offering at no additional cost?
    - [x] **AWS Enterprise Support**

    > AWS Infrastructure Event Management (IEM) is a consultation service to assist organizations with architecture, scaling guidance and operational support during the preparation and execution of significant planned events. For example, during times of peak usage such as a new product launch, data migration, or predictable high-demand online shopping periods (e.g. Black Friday).
    > 
    > IEM is offered only with the AWS Enterprise Support and (more limited) AWS Enterprise On-Ramp Support plans, as an integral part of these service bundles.
    >
    > IEM is available with the AWS Business Support plan but at additional cost.
    >
    > IEM is not available on the Basic Support and Developer Support plans.

17. A company is reassessing its AWS support plan coverage as it plans to deploy its first production workloads in the AWS cloud. For paid AWS support plans, which case severity offers a maximum one-hour response time?
    - [ ] Production system impaired
    - [ ] Business-critical system down
    - [x] **Production system down**
    - [ ] System impaired

    > Production system down case severities offer a maximum 1-hour response time. This case severity is available to customers with AWS Business or Enterprise Support plans.
    >
    > Business/Mission-critical system down is offered at maximum 15-minute response time on the AWS Enterprise Support plan and 30-minutes on the Enterprise On-Ramp plan.
    >
    > Production system impaired offers a maximum 4-hour response time. This case severity isavailable to customers with AWS Business or Enterprise Support plans.
    >
    > System impaired offers a maximum 12-hour response time time. This case severity is available to any AWS customer with a paid support plan.

18. Which AWS support plans offer 24/7 access to a Cloud Support Engineer via email, chat, or telephone for technical support? (Select TWO.)
    - [ ] AWS Basic Support
    - [x] **AWS Business Support**
    - [ ] AWS Developer Support
    - [x] **AWS Enterprise Support**

    > AWS Enterprise and Business support plans offer 24/7 access to a Cloud Support Engineer via email, chat, or telephone. Support cases for both of these plans can be created by any member of an organization and there is no limit to the number of cases that can be created. AWS Response times for general guidance is less than 24 hours, system impaired is less than 12 hours, production system impaired is less than four hours, and production system down is less than one hour.
    >
    > With a Developer Support plan, I nominated primary contact can open as many support cases as required. Developer support is email-based and is offered during normal business hours (not 24/7). This support level is best suited for the development and testing phases of an AWS-based project.
    >
    > Basic Support offers 24/7 access to customer services for account-related questions, such as a billing enquiry. However, this plan, which is free to all AWS customers, does not offer technical support from the AWS Support team.

19. Which statement regarding use of EC2Rescue for Windows Server is correct?
    - [ ] EC2Rescue for Windows Server runs on Windows 7 or later.
    - [ ] EC2Rescue for Windows Server cannot help with commonly-called blue screen errors.
    - [ ] EC2Rescue for Windows Server can only analyze online volumes, not offline volumes.
    - [x] **EC2Rescue for Windows Server requires an RDP connection.**

    > Use of EC2Rescue for Windows Server requires a Remote Desktop Protocol (RDP) connection. EC2Rescue is an Amazon Elastic Compute Cloud (EC2) service troubleshooting tool for EC2 windows environments that requires the instance to be accessible via a RDP connection.
    >
    > The EC2Rescue for Windows Server tool can assist in diagnosing and resolving connectivity issues, boot issues, volume corruption and other instance issues that impact operating system performance or stability.
    >
    > EC2Rescue for Windows Server will not run on Windows 7. EC2Rescue runs on Windows Server 2008 R2 or later.
    >
    > EC2Rescue for Windows Server can analyze both online and offline volumes. This is useful if volume corruption is causing instance issues or boot errors.
    >
    > EC2Rescue for Windows Server can help with commonly-called blue screen errors. It can also be used to analyze and resolve boot errors and corruption in the windows registry.

20. A third-party AWS consultancy is considering joining the AWS Partner Network. Which of the following statements describes a benefit of joining the AWS Partner Network?
    - [ ] The opportunity to perform comprehensive AWS technical and business audits on AWS Professional Services implementations
    - [ ] Opportunities to network with experts from other public cloud providers
    - [x] **Increased visibility of offered services and capabilities with other AWS customers**
    - [ ] Access to AWS funding for the provision of training on third-party software packages not related to the use of the AWS cloud.

    > A benefit of joining the AWS Partner Network is increased visibility of offered services and capabilities with other AWS customers. The AWS Partner Network is an AWS program that assesses, develops and promotes third-party companies that have achieved verified AWS competencies and capabilities. Companies participating in the AWS Partner Network program are provided with opportunities to promote offered services and capabilities to other AWS customers.
    >
    > Opportunities to network with experts with other public cloud providers is not a benefit of joining the AWS Partner Network. The AWS Partner Network can provide opportunities to network with AWS experts, rather than with experts of other public cloud providers.

21. A company is considering which AWS support plan is the most suitable for its needs. Which AWS support plan 24/7 phone, email, and chat access but does not provide access to dedicated AWS Technical Account Managers?
    - [ ] AWS Enterprise On-Ramp Support
    - [x] **AWS Business Support**

    > The AWS Business Support plan offers 24/7 phone, email, and chat access to the AWS Support team but not access to AWS Technical Account Managers (TAM). An AWS TAM is a customer advocate and trusted advisor who can assist with the optimization of the customer's cloud solution.
    >
    > The Enterprise On-Ramp plan offers elevated benefits comparable with the AWS Enterprise Support plan. The Enterprise Support plan provides a customer with a dedicated TAM who can deliver account-specific advice and guidance. Customers on the Enterprise On-Ramp plan receive support from a pool of available TAMs resources.


22. Which of the following can be created by customers with an AWS Basic Support plan? (Select TWO.)
    - [x] **Account and billing support cases**
    - [ ] Technical support cases
    - [ ] Third-party software support requests
    - [x] **Service limit increase requests**
    - [ ] AWS Support API requests

    > Customers with an AWS Basic Support plan can create account and billing support cases, and service limit increase requests. Basic Support is offered 24/7 for account and billing- related questions, such as a billing enquiry. Service limit increases may be required when a pre-defined quota has been reached. Basic Support is free and is provided by default to all AWS customers.
    >
    > Technical support cases cannot be created by Basic Support users. Customers must have at least a Developer Support plan in order to receive technical support.
    >
    > AWS Support Application Programming Interface (API) requests are only available to Business and Enterprise-level Support customers. The AWS Support API can be used to automate ticket generation and case management.
    >
    > Third-party software support requests are only available to Business and Enterprise-level Support customers. Third-party software support may include operating systems running in an EC2 instance, or a third-party Amazon Relational Database Service (RDS) engine such as Oracle.

23. A company is assessing its responsibilities within the AWS Shared Responsibility Model. In the AWS Shared Responsibility Model, which controls are shared between AWS and the customer? (Select TWO.)
    - [ ] Data Center environmental controls
    - [x] **Configuration management**
    - [x] **Patch management**
    - [ ] Data Center physical controls
    - [ ] Application network security in an Amazon Virtual Private Cloud (VPC)

    > Patch management and configuration management responsibilities are shared between AWS and the customer. The AWS Shared Responsibility Model is used to define which AWS operations are managed by AWS and which are the agreed responsibility of the customer. AWS manages configuration and patching for its cloud infrastructure, while the customer is responsible for configuring, updating and patching the Amazon Elastic Compute Cloud (EC2) virtual machines (VMs) and the applications they deploy.
    >
    > The customer is responsible for application network security in an Amazon Virtual Private Cloud (VPC). Customer PCs running applications need to be secured to protect cloud resources such as EC2 instances using available security control and conventions including Network Access Control Lists and Security Groups.

24. A company, as a new AWS customer, is assessing its responsibilities within the AWS Shared Responsibility Model. In the AWS Shared Responsibility Model, which of the following is managed by the customer?
    - [ ] IP addresses used for Elastic IPs
    - [ ] AZ network connectivity
    - [ ] Physical access to data centers
    - [x] **TLS connections between EC2 instances**

    > Transport Layer Security (TLS) based connectivity between EC2 instances is managed by the customer. The TLS protocol provides encryption for data-in-flight and is most commonly used in client-to-web-server https-based communications. In a scenario where traffic between EC2 instances needs to be secured, the customer is responsible for obtaining the TLS certificate (s) and configuring encrypted https-based messaging.
    >
    > An Elastic IP address is a public address owned and provisioned by AWS. Elastic IPs can be used by customers to make resources available on the Internet using a static address. Elastic IP address pools are managed by AWS, but customers associate these IPs to EC2 instances or network interfaces. Elastic IPs should not be confused with Bring Your Own IP (BYOIP) addresses. While Elastic IPs are owned by AWS, BYOIP addresses are owned by the customer.

25. A company would like to understand how the allocation of static IP addresses is managed for resources within the AWS cloud. According to the AWS shared responsibility model, a customer is responsible for assigning which of the following IP addresses?
    - [x] **Static IP addresses to Amazon Elastic Compute Cloud (EC2) instances**
    - [ ] Static IP addresses to CloudFront edge servers
    - [ ] Static IP addresses to Aurora instances
    - [ ] Static IP addresses to Amazon Relational Database Service (RDS) DB instances

    > According to the AWS shared responsibility model, a customer is responsible for assigning static Internet Protocol (IP) addresses to Amazon Elastic Compute Cloud (EC2) instances. The shared responsibility model is used to define which AWS operations are managed by AWS and which are managed by the customer. EC2 allows customers to deploy virtualized servers suitable for a range of customer purposes using a variety of a available operating systems. While AWS is responsible for managing the underling hypervisor and virtualization infrastructure, the customer is responsible for managing all EC2 configuration, including any static Elastic IP addresses assigned to specific instances.
    > 
    > AWS is responsible for assigning static IP addresses to Amazon Relational Database Service (RDS) DB instances. RDS is a fully-managed, cloud-based relational database platform. Each DB instance runs one from a wide range of supported database engine types including Microsoft SQL Server, Oracle, Amazon Aurora, MySQL and PostgreSQL.
    >
    > AWS is responsible for assigning static IP addresses to Aurora instances. Aurora is the Amazon RDS platform and is fully managed by AWS. 
    >
    > AWS is responsible for assigning static IP addresses to CloudFront edge servers. CloudFront is a content caching service that stores copies of distributed web application and website content such as HTML files, scripts, videos and other data at strategic locations worldwide. While customers manage the type of content that will be cached, AWS manages the caching infrastructure, including the edge servers.

26. An company is making enquires about the current AWS Identity and Access Management (IAM) password policy for IAM users. Which statement regarding the default AWS IAM password policy is correct?
    - [x] **Passwords cannot match an AWS Identity and Access Management (IAM) user's AWS account name.**
    - [ ] Passwords must include uppercase and lowercase characters.
    - [ ] Passwords expire after 90 days and must be reset.
    - [ ] Passwords must be at least six characters in length.

    > The default AWS Identity and Access Management (IAM) password policy for IAM users requires that passwords do not match a user's AWS account name. Password policies are used to enhance password security by specifying a minimum password length and password complexity rules. AWS requires that passwords cannot match the IAM user's AWS account name or email address. Note the default IAM password policy does not apply to the AWS account root user, which has a separate password policy.
    >
    > The default password policy requires that passwords be at least eight characters in length, not six. The default password policy supports password lengths from 8 to 128 characters.
    >
    > The default password policy does not require that passwords include uppercase and lowercase characters. Passwords must include at least three characters types, from uppercase, lowercase, numbers and special characters, the latter being the `! @ # $%^ & * () _ + - = [] {} | '` characters.
    >
    > The default password policy does not require passwords to expire after 90 days. The default policy does not specify a password expiration period.

27. Access to which of the following can be shared across AWS accounts using AWS Resource Access Manager (RAM)? (Select TWO.)
    - [x] **Amazon EC2**
    - [ ] Amazon ElastiCache
    - [ ] AWS CloudTrail
    - [ ] Network Access Control Lists (ACL)
    - [x] **Amazon Aurora**

    > Access to Amazon EC2 and Amazon Aurora can be shared across AWS accounts using the AWS Resource Access Manager (RAM) service. RAM allows some AWS services to be shared across multiple AWS accounts. This is useful in organizations where each department maintains its own AWS account, but some management and business tasks are centralized.

28. An administrator needs to provide access to sales documents for several account executives. An AWS Identity and Access Management (IAM) group was previously created for the account executive job function. The administrator would like to replace the existing IAM policy with a new one. What should the administrator do to complete the required IAM configuration while MINIMIZING administrative overheads? (Select TWO.)
    - [x] **Attach the new IAM policy to the existing IAM group, removing the previous IAM policy.**
    - [ ] Define a IAM role for each IAM user.
    - [x] **Define a replacement AM policy specifying the required access permissions.**
    - [ ] Assign access permissions directly to the IAM group.
    - [ ] Attach the IAM policy to each IAM user.

    > The administrator should define a replacement AM policy specifying the required access permissions and attach the new IAM policy to the existing IAM group, removing the previous IAM policy. The IAM policies in the described scenario are identity-based, as assigned to an IAM group.

29. A company notices that some employees routinely use the AWS root user to perform a variety of everyday developer tasks in a shared AWS account. In line with AWS IAM best practices, the company wants to restrict access to the root user credentials to employees who require access to its elevated privileges. Which of the following tasks can only be performed by the account root user?
    - [ ] Changing the primary contact person's name and telephone number in the AWS account settings
    - [x] **Activating IAM access to Billing and Cost Management in the AWS console**
    - [ ] Configuring an Amazon S3 bucket to enable versioning
    - [ ] Deleting an Amazon S3 bucket that requires administrative access to delete objects

    > Activating IAM access to Billing and Cost Management in the AWS console can only be performed by the account root user. By default, IAM users and roles cannot access Billing and Cost Management in the AWS console. The root user must explicitly use the Activate IAM Access setting to provision this access. Individual AM user and roles assigned with the appropriate IAM policies will then be able to access this billing and cost management data.
    >
    > Other IAM users and roles can change the primary contact person's name and telephone number in the AWS account settings. In the account settings information, a subset of the fields can only be changed by the root user, namely the account name, email address, root user password, and root user access keys fields. The other fields can be changed by other AWS users if granted the appropriate permissions.

30. A company currently manages user identities using Microsoft Entra ID hosted on another public cloud provider. This company would like to federate this user directory with AWS so its employees can access the AWS cloud without having to explicitly log in to establish each AWS console session. Which of the following AWS services meets this requirement?
    - [ ] Amazon Connect
    - [ ] Amazon Elastic Compute Cloud (EC2)
    - [x] **AWS IAM Identity Center (formerly AWS Single Sign-On)**
    - [ ] Amazon S3

    > AWS IAM Identity Center (formerly AWS Single Sign-On) service meets the requirement. The AWS AM Identity Center provides the means to integrate external corporate or third-party user directories, also known as Identity Providers (IdP), with AWS. For example, you can integrate AWS with Okta, Ping Identity, and Microsoft Entra ID (formerly Azure AD).
    >
    > The Amazon Connect service does not meet the requirement. Amazon Connect is the AWS cloud contact center solution that allows a company to interact with its clients using voice call, online chat and SMS channels.

31. A developer has observed failures in the AWS console attempting to start an Amazon Elastic Compute Cloud (EC2) Windows server instance. Which AWS service or tool provides the MOST effective means of troubleshooting this issue?
    - [x] **EC2Rescue for Windows Server**
    - [ ] AWS CloudTrail
    - [ ] Amazon CloudWatch

    > The EC2Rescue for Windows Server tool provides the most effective means of troubleshooting this issue. EC2Rescue for Windows Server is an easy-to-use tool that customers can launch to perform diagnostic and troubleshooting checks on unreachable instances, collecting log files, and identifying potential causes.
    >
    > AWS CloudTrail does not provide the most effective means of troubleshooting this issue. The CloudTrail service is a security auditing service that records activities undertaken by AWS users and roles as a series of recorded events logged on Amazon S3. Amazon CloudTrail is not the most effective to investigate failed EC2 instance startup.
    >
    > AWS CloudWatch does not provide the most effective means of troubleshooting this issue. The CloudWatch service collects logs, resource metrics, and actionable events from EC2 instances. However, CloudWatch would be unable to capture log data for specific Windows server issues such as boot failures.

32. A company has invested in Internet of Things (IoT) technologies and would like to connect its distributed farms of IoT devices to the AWS cloud. No AWS software components or additional runtime environments should be deployed. Which AWS service provides basic AWS connectivity for these IoT devices at MINIMAL cost?
    - [ ] AWS IoT Greengrass
    - [x] **AWS loT core**

    > The AWS IoT Core service provides basic AWS connectivity for these IoT devices. IoT Core is an AWS-managed service that provides the AWS infrastructure required to connect IoT devices with the AWS cloud. The IoT Core platform is able to support messaging with billions of IoT devices by providing high-bandwidth, low-latency network connectivity.
    >
    > AWS IoT Greengrass service does not provide basic AWS connectivity for these IoT devices. The IoT Greengrass service offers component software for IoT devices and provisions IoT runtime environments deployed to Amazon Edge network locations. These edge locations enable cloud processing to be performed closer to the customer IoT device farms in this scenario, minimizing network latency and improving message throughput. While highly capable, the IoT Greengrass service is not the best choice in this scenario, which requires only basic AWS connectivity for remote IoT devices.

33. A company is looking to adopt a Continuous Integration & Continuous Deployment (CI/CD) approach to automate the deployment of business applications on the AWS cloud. Which AWS service provides the use of configurable pipelines to automate the remote installation and update of customer applications?
    - [ ] AWS CodeBuild
    - [ ] AWS CodeCommit
    - [ ] AWS CodeStar
    - [x] **AWS CodePipeline**

    > AWS CodePipeline allows the configuring of pipelines to automate the remote installation and update of customer applications. With AWS CodePipeline you configure a pipeline by setting up different stages. Each of these stages can call other AWS development services to extract source code, build, test, and remotely deploy each application on the AWS cloud.
    >
    > AWS CodeCommit does not meet the scenario requirements. The AWS CodeCommit service provides highly-scalable private Git repositories that customers can use to store their application code within the AWS cloud. Each CI/CD pipeline developed using the AWS CodePipeline service must contain a source stage, which typically configures the AWS CodeCommit service to retrieve source code from a specified repository.
    >
    > AWS CodeBuild does not meet the scenario requirements. The AWS CodeBuild service can be configured to automatically provide a virtualized build server environment that c generate application deployment artifacts within a build stage defined on the AWS CodePipeline pipeline.
    >
    > AWS CodeStar does not meet the scenario requirements. The AWS CodeStar service is used to create and configure software development projects based on customer- selected templates. These template projects integrate the use of selected AWS development services. The CodeStar service is deprecated and AWS support for this service will be discontinued in July 2024.

34. Which Amazon Elastic Block Store (EBS) volume type provides the MOST cost-effective storage that supports a maximum throughput rate of 500 Mebibytes per second (MiB/s)?
    - [ ] General Purpose solid state drive (SSD)
    - [x] **Throughput Optimized hard disk drives (HDD)**
    - [ ] Provisioned Input/Output Operations Per Second (IOPS) solid state drive (SSD)
    - [ ] Cold hard disk drives (HDD)

    > The Throughput Optimized hard disk drive (HDD) volume type provides the most cost-effective storage that supports a maximum throughput of 500 MiB/s per volume. This storage type is optimized for high-throughput workloads such as big data, log processing, and data warehousing. HDD storage has a lower a cost than SSD storage. Note that AWS documentation often uses the Mebibytes (MiB), Gibibytes (GiB) and Tebibytes (TiB) byte units in place of the more common Megabytes, Gigabytes and Terabyte. For example, while one megabyte is 1 million bytes, a mebibyte represents the more accurate 2^20 (exactly 1,048,576) bytes count.
    >
    > Cold HDD offers the lowest cost but does not support 500 MiB/s throughput. Cold HDD storage is best suited for workloads with infrequent access requirements.
    >
    > General Purpose solid state drive (SSD) is suitable for many types of workloads and supports up to 1,000 MiB/s. However, it is more expensive than HDD storage.
    >
    > Provisioned IOPS SSD storage is optimized for IOPS and offers a maximum throughput rate of up to 4000 MiB/s per volume. However, it is the most expensive volume type.

35. An architect has received a requirement to provision internet connectivity for an application deployed to Amazon Elastic Compute Cloud (EC2) instances in a private subnet within the customer Virtual Private Cloud (VPC). What should the organization do to enhance security while minimizing the costs associated with utilizing static public IP addresses when connecting these instances to the internet?
    - [ ] Configure a security group
    - [ ] Configure an AWS Elastic IP for each EC2 instance
    - [x] **Deploy a NAT gateway**
    - [ ] Deploy Route 53

    > The organization should deploy a Network Address Translation (NAT) gateway to enhance security and minimize the costs associated with public Internet Protocol (IP) addresses when connecting Amazon Elastic Compute Cloud (EC2) instances to the internet. A NAT gateway is located in a public subnet between the Internet and the private networks, allowing privately addressed nodes to access, and be accessed by publicly addressed nodes. The NAT gateway translates the private addresses used by internal clients to a shared static Elastic IP address that is configured on the gateway.
    > 
    > The organization should not configure an AWS Elastic IP for each EC2 instance to minimize the costs associated with utilizing static public IP addresses when connecting instances to the internet. An Elastic IP is static public IPv4 address that is routable on the internet. The use of a NAT gateway is more cost effective for provisioning a single static public IP address, rather than allocating a separate Elastic IP for each and every instance requiring a fixed IP address that does not change after each EC2 restart.
    > 
    > The organization should not configure a security group to minimize the costs associated with utilizing static public IP addresses when connecting instances to the internet. A security group is used to manage inbound and outbound traffic to a specific instance and can be considered as a stateful firewall at the instance level. Security groups are attached to instances but are not used to provision public IPs.
    > 
    > The organization should not deploy Route 53 to minimize the costs associated with utilizing static public IP addresses when connecting instances to the internet. Route 53 provides managed Domain Name System (DNS) services. The Route 53 service is not used to provision public IPs to specific private instances.

36. A company is looking to migrate its infrastructure from a private data center and wants to use Network File System (NFS) compliant storage service in the AWS cloud. Which statement regarding Amazon Elastic File System (EFS) is correct?
    - [ ] Amazon Elastic File System (EFS) can be used to provide in-memory data stores.
    - [ ] Amazon Elastic File System (EFS) provides block level storage volumes for Amazon Elastic Compute Cloud (EC2) instances.
    - [x] **Amazon Elastic File System (EFS) offers a storage class for infrequently accessed files.**
    - [ ] Amazon Elastic File System (EFS) can only store up to terabyte-scale data sets.

    > Amazon Elastic File System (EFS) offers a storage class for infrequently accessed files. EFS provides a cost-effective, Network File System (NFS) based file storage platform that can be shared by hundreds or even thousands of EC2 instances. EFS is a managed file system that supports low-latency, high-throughput file operations. EFS supports a range of storage classes for different use cases including EFS Standard, EFS Standard- Infrequent Access (Standard-IA), EFS One Zone and EFS One Zone-Infrequent Access (EFS One Zone-IA).
    >
    > Amazon EFS does not provide block level storage volumes for Amazon Elastic Compute Cloud (EC2) instances. This functionality describes the Amazon Elastic Block Store (EBS) service, which offers several volumes types that can be attached to EC2 instances as network storage.

37. A company wants to schedule the regular archiving of S3 data associated with a financial trading application that is run on an Amazon Elastic Compute Cloud (EC2) cluster. What should the company do to meet the requirement with MINIMUM effort?
    - [x] **Configure the AWS Backup service to regularly back up the Amazon S3 data.**
    - [ ] Use the AWS console to execute each adhoc backup of the Amazon S3 data.
    - [ ] Configure the AWS Backup service to regularly back up the Amazon Elastic Compute Cloud (EC2) instance.
    - [ ] Deploy another application on the same Amazon Elastic Compute Cloud (EC2) cluster to automate the regular backup of the application data that is stored on Amazon S3.

    > The company should configure the AWS Backup service to regularly back up the Amazon S3 data. AWS Backup is a fully - managed AWS service that customers can use to schedule, retain and if required, restore backups taken on designated data and configuration from across a full range of supported AWS services.
    > 
    > The company should not configure the AWS Backup service to regularly back up the Amazon Elastic Compute Cloud (EC2) instance. The company should regularly backup the Amazon S3 data rather than EC instance data.
    >
    > The company should not use the AWS console to execute each adhoc backup of the Amazon S3 data. While this approach is possible, it does not meet the scenario requirement of scheduling these backups to occur automatically at regular intervals.
    >
    > The company should not deploy another application on the same Amazon Elastic Compute Cloud (EC2) cluster to automate the regular backup of application data that is stored on Amazon S3. While deploying a new application designed to automate the backup of the application data is possible, this approach does not meet the scenario requirement of minimum effort.


38. Which AWS services allow on-premises Windows clients to access AWS cloud-based Server Message Block (SMB) file shares? (Select TWO.)
    - [ ] Amazon Elastic Block Store (EBS)
    - [ ] AWS Elemental On-Premises
    - [ ] Amazon Elastic File System (EFS)
    - [x] **Amazon FSx for Windows File Server**
    - [x] **AWS Storage Gateway**

    > AWS Storage Gateway provides an on-premises virtual appliance that connects to AWS-based cloud storage. The Storage Gateway provides seamless access to cloud storage as a file, volume or tape-based resource. Once the Gateway is configured and activated, administrators can create Windows-compatible Server Message Block (SMB) file shares. Windows users can connect and access to these shares as they would with any other resource share.
    >
    > Amazon FSx for Windows File Server provides a managed service that natively supports file sharing using the Server Messaging Blocks (SMB) protocol between Windows-based clients and file servers.
    >
    > Amazon EFS does not allow on-premises Windows clients to access cloud-based Server Message Block (SMB) file shares. EFS is a managed file system that supports low-latency, high throughput file operations.
    >
    > Amazon EBS does not allow on-premises Windows clients to access cloud-based Server Message Block (SMB) file shares. EBS provides several types of block-level storage volumes that can be used with Amazon Elastic Compute Cloud (EC2) instances.

39. Which of the following are part of a cost-effective AWS static website deployment? (Select TWO.)
    - [x] **Naming the Amazon S3 bucket after the website domain.**
    - [x] **Storing the website files in an Amazon S3 bucket.**
    - [ ] Defining a storage lifecycle policy for the AWS static website.
    - [ ] Storing the website files in Amazon Elastic Compute Cloud (EC2).
    - [ ] Deploying the website using Amazon Redshift.

    > Storing the website files in Amazon S3 and naming the bucket after the website domain allows a static website to be deployed in the AWS cloud. Static websites can be hosted on Amazon S3 cost-effectively, storing the static content including HTML, json scripts, stylesheets and image files. When a bucket is configured as a website, the bucket name must match the domain name of the website that is hosted.
    >
    > A storage lifecycle policy does not need to be defined for the AWS static website. Storage lifecycle policies automate the process of archiving infrequently accessed data to more cost-effective storage. Archiving the AWS website content files would make the static website inoperable.

40. A company is considering the possible sharing of a data volume between Amazon Elastic Compute Cloud (EC2) instances run in the AWS cloud. Which type of Amazon Elastic Block Store (EBS) volume can be attached to more than one EC2 instance at the same time?
    - [ ] gp2
    - [ ] st1
    - [x] **io1**
    - [ ] gp3

    > The Amazon Elastic Block Store (EBS) volume type io1 can be attached to more than one Amazon EC2 instance at the same time. Amazon Elastic Compute Cloud (EC2) provides traditional block storage, much like a hard drive and can be attached directly to an instance. Most EBS volume types can only be attached to a single instance. However, i01 and io2 volume types, as Provisioned Input/Output Operations Per Second (IOPS) solid- state drive (SSDs) volumes, do support being concurrently attached to multiple instances, known as EBS Multi-Attach.
    >
    > The EBS gp2 and gp3 volume types cannot be attached to more than one Amazon EC2 instance. These volumes use General Purpose SSD and do not support EBS Multi-attach. The volume types gp2 and gp3 are best used in test or development environments and for applications that require low latencies for network storage.
    >
    > The EBS st1 volumes cannot be attached to more than one EC2 instance. This st1 volume type is a Throughput Optimized hard disk drive (HDD) which is well suited for data warehousing and big data storage use cases.

41. An organization is migrating to the AWS cloud and needs to move about 50TB of data to S3 storage once-only. Which of the following is the BEST option for transferring this data as quickly and economically as possible?
    - [ ] Amazon Lightsail
    - [ ] AWS Storage Gateway
    - [x] **AWS Snowball**
    - [ ] AWS Direct Connect

    > The AWS Snow Family service is the best option for transferring this data as quickly and economically as possible. AWS Snow is a service offering physical data storage and compute devices that can be used to physically transfer very large amounts of on- premises data to the AWS cloud. Customers can for example request an AWS Snowball device that can hold over 70 terabytes (TB) of data, depending on the model requested. The data is physically transferred onto the Snowball at the Customer on-premises site, where it is encrypted. Once the Snowball has been physically transported back to AWS, the customer data is transferred to Amazon S3 storage. For exabyte-level storage transfer needs, AWS offers the Snowmobile data transfer service using a shipping container holding Snow devices, carried by a semi-trailer truck.
    >
    > AWS Storage Gateway is not the best option for transferring this data. Storage Gateway offers an on-premises virtual appliance that connects to AWS-based storage. The Storage Gateway provides seamless access to cloud storage as a file, volume, or tape-based resource. However, use of Storage Gateway is not the quickest and cheapest means of transferring this data, noting the customer does not require on-premises infrastructure as this data transfer is a one-only exercise.

42. 