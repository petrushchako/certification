# AWS Services

### Compute Services

| Service Name |Description | Key Features | Pricing Information |
|---|---|---|---|
| **EC2**                  | Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity in the AWS cloud. | - Resizable compute capacity<br>- Wide selection of instance types<br>- Pay-as-you-go pricing<br>- Supports multiple operating systems | Pay for compute capacity by the hour or second, depending on the instance type. Prices vary by instance type, region, and OS. |
| **Lambda**               | AWS Lambda lets you run code without provisioning or managing servers. | - Automatic scaling<br>- Pay only for compute time<br>- Supports multiple programming languages<br>- Integrates with other AWS services | Pay only for the compute time you consume. Billed based on the number of requests and the duration of your code execution. |
| **ECS**                  | Amazon Elastic Container Service (ECS) is a fully managed container orchestration service. | - Supports Docker containers<br>- Integrates with other AWS services<br>- Flexible scheduling<br>- Secure and scalable | No additional charge for ECS. You pay for the AWS resources (e.g., EC2 instances or Fargate compute) you create to store and run your application. |
| **EKS**                  | Amazon Elastic Kubernetes Service (EKS) is a managed service to run Kubernetes on AWS without needing to install and operate your own Kubernetes control plane. | - Managed Kubernetes<br>- Integrated with AWS services<br>- Secure and scalable<br>- High availability | Pay for the EKS clusters you create and the AWS resources (e.g., EC2 instances or Fargate compute) you use. |
| **Fargate**              | AWS Fargate is a serverless compute engine for containers that works with both ECS and EKS. | - No server management<br>- Seamless integration with ECS and EKS<br>- Pay per application run<br>- Scales automatically | Billed based on the vCPU and memory resources used from the time you start to download your container image until the container terminates. |
| **Lightsail**            | Amazon Lightsail is designed to be the easiest way to launch and manage a virtual private server. | - Simple management interface<br>- Pre-configured OS and application stacks<br>- Fixed monthly pricing<br>- Includes SSD-based storage | Fixed monthly price that includes a bundle of compute power, storage, and data transfer allowance. |
| **Batch**                | AWS Batch enables you to run batch computing workloads on the AWS Cloud. | - Dynamically provisions compute resources<br>- Optimizes the workload distribution<br>- Managed service<br>- Integrates with other AWS services | No additional charge for AWS Batch. You pay for the AWS resources (e.g., EC2 instances) you use to store and run your batch jobs. |
| **Elastic Beanstalk**    | AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services. | - Supports multiple platforms<br>- Managed service<br>- Auto-scaling<br>- Integrated monitoring | No additional charge for Elastic Beanstalk. You pay for the AWS resources (e.g., EC2 instances, S3 storage) you use to store and run your applications. |


### Storage Services

| Service Name | Description | Key Features | Pricing Information |
|---|---|---|---|
| **S3**                   | Amazon Simple Storage Service (S3) provides scalable object storage for a wide range of use cases. | - Highly durable and available<br>- Multiple storage classes<br>- Versioning and lifecycle management<br>- Data encryption | Pay only for what you use. Pricing based on storage type, requests, data retrievals, and data transfers. |
| **EBS**                  | Amazon Elastic Block Store (EBS) provides block storage volumes for use with EC2 instances. | - High performance<br>- Persistent storage<br>- Snapshots<br>- Encryption | Charged based on the amount of data provisioned per month, snapshots, and data transfer. Pricing varies by volume type and region. |
| **EFS**                  | Amazon Elastic File System (EFS) provides scalable file storage for use with AWS Cloud services and on-premises resources. | - Fully managed<br>- Scalable<br>- Secure<br>- Low latency | Pay only for the storage used. Pricing based on the amount of data stored, data transfer, and access patterns (Standard or Infrequent Access). |
| **FSx**                  | Amazon FSx provides fully managed third-party file systems, including FSx for Windows File Server and FSx for Lustre. | - Fully managed<br>- High performance<br>- Integration with other AWS services<br>- Secure | Pricing based on the amount of storage provisioned, storage type, throughput capacity, backups, and data transfer. |
| **Glacier**              | Amazon S3 Glacier and S3 Glacier Deep Archive provide secure, durable, and extremely low-cost storage for data archiving and long-term backup. | - Low-cost<br>- Secure and durable<br>- Flexible retrieval options<br>- Integration with S3 | Pay based on storage used, retrieval requests, data transfer, and optional features like expedited retrievals. |
| **Storage Gateway**      | AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. | - Hybrid storage integration<br>- Multiple gateway types (File, Tape, Volume)<br>- Data encryption<br>- Backup and restore capabilities | Pricing based on the type of gateway, amount of data stored, data transfer, and requests. |
| **Snowball**             | AWS Snowball is a petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data into and out of AWS. | - Secure data transfer<br>- Large capacity<br>- Rugged and portable<br>- Offline data transfer | Pricing includes a service fee per data transfer job and the daily rate for each appliance used, plus data transfer costs. |
| **Backup**               | AWS Backup is a centralized backup service to automate and manage backups across AWS services. | - Centralized backup management<br>- Automated backup scheduling<br>- Cross-service integration<br>- Compliance and reporting | Pay only for the backup storage and backup requests. Pricing varies by the amount of data backed up, backup storage class, and data transfer. |


### Database Services

| Service Name | Description | Key Features | Pricing Information |
|---|---|----|---|
| **RDS**           | Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database in the cloud. | - Supports multiple engines (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Aurora)<br>- Automated backups<br>- Multi-AZ deployments<br>- Read replicas | Pay based on instance type, storage, I/O, backups, and data transfer. Pricing varies by database engine and region. |
| **DynamoDB**            | Amazon DynamoDB is a fast and flexible NoSQL database service for single-digit millisecond performance at any scale. | - Fully managed<br>- Serverless<br>- Automatic scaling<br>- Built-in security<br>- Multi-region replication | Pay based on read and write throughput, storage, data transfer, and optional features like DynamoDB Accelerator (DAX). |
| **Aurora**              | Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud with up to 5 times the performance of standard MySQL and 3 times the performance of standard PostgreSQL. | - High performance<br>- Highly available<br>- Automatic scaling<br>- Multi-AZ deployments<br>- Global databases | Pay based on instance type, storage, I/O, backups, and data transfer. Pricing varies by instance type and region. |
| **Redshift**            | Amazon Redshift is a fully managed data warehouse service in the cloud. | - Fast query performance<br>- Columnar storage<br>- Massively parallel processing (MPP)<br>- Integration with BI tools | Pay based on the type and number of nodes, storage, data transfer, and optional features like concurrency scaling and spectrum. |
| **ElastiCache**         | Amazon ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory cache in the cloud. | - Supports Redis and Memcached<br>- Low latency<br>- Fully managed<br>- Scalability and flexibility | Pay based on instance type, number of nodes, data transfer, and optional features like backups for Redis. |
| **DocumentDB**          | Amazon DocumentDB (with MongoDB compatibility) is a scalable, fully managed document database service that supports MongoDB workloads. | - Fully managed<br>- MongoDB compatibility<br>- High performance<br>- Scalability and flexibility | Pay based on instance type, storage, I/O, backups, and data transfer. Pricing varies by instance type and region. |
| **Neptune**             | Amazon Neptune is a fast, reliable, fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets. | - Fully managed<br>- High performance<br>- Supports Apache TinkerPop and RDF/SPARQL<br>- Highly available | Pay based on instance type, storage, I/O, backups, and data transfer. Pricing varies by instance type and region. |
| **QLDB**                | Amazon Quantum Ledger Database (QLDB) is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log. | - Immutable and transparent<br>- Fully managed<br>- Cryptographically verifiable<br>- SQL-like API | Pay based on instance type, storage, I/O, and data transfer. |
| **Keyspaces**           | Amazon Keyspaces (for Apache Cassandra) is a scalable, highly available, and managed Apache Cassandra-compatible database service. | - Fully managed<br>- Apache Cassandra compatibility<br>- High performance<br>- Scalability and flexibility | Pay based on read and write throughput, storage, and data transfer. |


### Networking and Content Delivery

| Service Name         | Description                                             | Key Features                                       | Pricing Information        |
|----------------------|---------------------------------------------------------|----------------------------------------------------|----------------------------|
|                      |                                                         |                                                    |                            |

### Security, Identity, and Compliance

| Service Name         | Description                                             | Key Features                                       | Pricing Information        |
|----------------------|---------------------------------------------------------|----------------------------------------------------|----------------------------|
|                      |                                                         |                                                    |                            |

### Management and Governance

| Service Name         | Description                                             | Key Features                                       | Pricing Information        |
|----------------------|---------------------------------------------------------|----------------------------------------------------|----------------------------|
|                      |                                                         |                                                    |                            |

### Analytics

| Service Name         | Description                                             | Key Features                                       | Pricing Information        |
|----------------------|---------------------------------------------------------|----------------------------------------------------|----------------------------|
|                      |                                                         |                                                    |                            |

### Machine Learning

| Service Name         | Description                                             | Key Features                                       | Pricing Information        |
|----------------------|---------------------------------------------------------|----------------------------------------------------|----------------------------|
|                      |                                                         |                                                    |                            |

### Application Integration

| Service Name         | Description                                             | Key Features                                       | Pricing Information        |
|----------------------|---------------------------------------------------------|----------------------------------------------------|----------------------------|
|                      |                                                         |                                                    |                            |

### Developer Tools

| Service Name         | Description                                             | Key Features                                       | Pricing Information        |
|----------------------|---------------------------------------------------------|----------------------------------------------------|----------------------------|
|                      |                                                         |                                                    |                            |

### Cost Management

| Service Name         | Description                                             | Key Features                                       | Pricing Information        |
|----------------------|---------------------------------------------------------|----------------------------------------------------|----------------------------|
|                      |                                                         |                                                    |                            |

### Additional Support Services

| Service Name         | Description                                             | Key Features                                       | Pricing Information        |
|----------------------|---------------------------------------------------------|----------------------------------------------------|----------------------------|
|                      |                                                         |                                                    |                            |
