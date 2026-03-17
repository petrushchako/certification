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
    - [x] Standard Reserved Instances with a fixed three-year term
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

11. 




