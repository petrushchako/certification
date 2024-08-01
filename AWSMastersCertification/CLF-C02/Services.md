# AWS Services
- **Compute Services** (EC2, Lambda, ECS, EKS, Fargate, Lightsale, Batch, Elastic Beanstalk)
- **Storage Services** (S3, EBS, EFS, FSx, Glacier, Storage Gateway, Snowball, Backup)
- **Database Services** (RDS, DynamoDB, Aurora, Redshift, ElasticCache, DocumentDB, Neptune, QLDB, Keyspaces)
- **Networking and Content Delivery Services** (VPC, CloudFront, Route 53, Direct Connect, Global Accelerator, Transit Gateway, PrivateLink, VPN, Elastic Load Balancing, App Mesh)
- **Security, Identity, and Compliance** (IAM, Cognito, GuardDuty, Inspector, Macie, Certificate Manager, Directory Service, WAF, Shield, Secrets Manager, Security Hub)
- **Management and Governance** (CloudTrail, Config, Systems Manager, Trusted Advisor, CloudFormation, Control Tower, Service Catalog, Oranizations, Auto Scaling, License Manager)
- **Analytics** (Athena, EMR, Kinesis, QuickSight, Data Pipeline, Glue, Redshift, Managed Streaming for Apache Kafka (MSK), Elasticsearch Service, Lake Formation)






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


### Networking and Content Delivery Services

| Service Name | Description | Key Features | Pricing Information |
|---|---|---|---|
| **VPC**                  | Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS cloud. | - Customizable network configurations<br>- Security groups<br>- Network ACLs<br>- VPC Peering | Pay based on VPN connections, NAT gateways, traffic mirroring, and data transfer. |
| **CloudFront**           | Amazon CloudFront is a fast content delivery network (CDN) service. | - Global content delivery<br>- DDoS protection<br>- Integration with AWS services<br>- Lambda@Edge | Pay based on data transfer out, HTTP/HTTPS requests, and invalidation requests. |
| **Route 53**             | Amazon Route 53 is a scalable Domain Name System (DNS) web service. | - DNS management<br>- Traffic routing<br>- Health checks and monitoring<br>- Domain registration | Pay based on hosted zones, queries, health checks, and domain registration fees. |
| **Direct Connect**       | AWS Direct Connect allows you to establish a dedicated network connection from your premises to AWS. | - High bandwidth<br>- Low latency<br>- Consistent network performance<br>- Secure connections | Pay based on port hours and data transfer out. Pricing varies by location and connection speed. |
| **Global Accelerator**   | AWS Global Accelerator is a networking service that improves the availability and performance of applications. | - Global static IP addresses<br>- Automatic health checks<br>- Traffic management<br>- DDoS protection | Pay based on accelerator hours and data transfer out. |
| **Transit Gateway**      | AWS Transit Gateway connects VPCs and on-premises networks through a central hub. | - Simplified network architecture<br>- Scalable<br>- Centralized management<br>- High performance | Pay based on attachments, data processing, and data transfer. |
| **PrivateLink**         | AWS PrivateLink provides private connectivity between VPCs and AWS services. | - Private connections<br>- Enhanced security<br>- Simplified network architecture<br>- Integration with AWS services | Pay based on interface endpoints, gateway endpoints, and data processing. |
| **VPN**                  | AWS VPN allows you to establish a secure and private tunnel from your network to AWS. | - Secure connections<br>- Easy setup<br>- Integration with AWS services<br>- High availability | Pay based on VPN connection hours and data transfer. |
| **Elastic Load Balancing**| Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets. | - Application Load Balancer (ALB)<br>- Network Load Balancer (NLB)<br>- Classic Load Balancer (CLB)<br>- High availability | Pay based on the type of load balancer, usage, and data transfer. |
| **App Mesh**             | AWS App Mesh is a service mesh that provides application-level networking to make it easy for your services to communicate with each other. | - Service discovery<br>- Traffic management<br>- Observability<br>- Integration with AWS services | Pay based on the number of Envoy proxies and data transfer. |


### Security, Identity, and Compliance

| Service Name| Description|Key Features| Pricing Information|
|---|---|---|---|
| **IAM** (Identity and Access Management) | Enables you to manage access to AWS services and resources securely.                | - User and group management<br>- Role-based access<br>- Fine-grained permissions | No additional cost. You pay only for the usage of other AWS services. |
| **Cognito**                  | Provides authentication, authorization, and user management for your web and mobile apps.     | - User pools<br>- Identity pools<br>- Federated identities          | Pay based on the number of active users and federated identities.    |
| **GuardDuty**                | A threat detection service that continuously monitors for malicious activity and unauthorized behavior. | - Threat detection<br>- Continuous monitoring<br>- Integration with other AWS services | Pay based on the volume of data processed.                         |
| **Inspector**                | An automated security assessment service that helps improve the security and compliance of applications deployed on AWS. | - Automated security assessments<br>- Network configuration checks<br>- Detailed reports | Pay based on the number of EC2 instances assessed.                  |
| **Macie**                    | Uses machine learning to automatically discover, classify, and protect sensitive data in AWS. | - Data classification<br>- Sensitive data discovery<br>- Automated alerts | Pay based on the volume of data processed and the number of S3 buckets evaluated. |
| **Certificate Manager**      | Lets you easily provision, manage, and deploy SSL/TLS certificates for use with AWS services and your internal connected resources. | - SSL/TLS certificate management<br>- Automatic renewal<br>- Free certificates for use with AWS services | No additional cost for provisioning and managing certificates. Charges apply for private CA operations. |
| **Directory Service**        | A managed Microsoft Active Directory in the AWS Cloud that you can connect to your on-premises directories. | - Managed AD<br>- Seamless integration<br>- Multi-region deployment | Pay based on the type and size of the directory.                    |
| **WAF** (Web Application Firewall) | Protects your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources. | - Web traffic filtering<br>- Customizable rules<br>- Real-time monitoring | Pay based on the number of web ACLs, rules, and requests processed. |
| **Shield**                   | A managed DDoS protection service that safeguards applications running on AWS.                | - DDoS protection<br>- Real-time attack mitigation<br>- Comprehensive protection | Shield Standard is free. Shield Advanced is charged based on usage. |
| **Secrets Manager**          | Helps you protect access to your applications, services, and IT resources without the upfront cost and complexity of managing your own hardware security module (HSM). | - Secret management<br>- Automated rotation<br>- Secure access | Pay based on the number of secrets stored and API requests.         |
| **Security Hub**             | Gives you a comprehensive view of your high-priority security alerts and compliance status across AWS accounts. | - Centralized security view<br>- Compliance checks<br>- Automated alerts | Pay based on the volume of data processed and the number of compliance checks run. |


### Management and Governance

| Service Name| Description| Key Features| Pricing Information|
|---|---|---|---|
| **CloudWatch**           | Monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. | - Metrics collection<br>- Log monitoring<br>- Alarms and events     | Pay for custom metrics, logs, dashboards, and alarms.                               |
| **CloudTrail**           | Enables governance, compliance, and operational and risk auditing of your AWS account.        | - API activity tracking<br>- Event history<br>- Compliance auditing | Pay based on the number of events recorded and the volume of data logged.          |
| **Config**               | Enables you to assess, audit, and evaluate the configurations of your AWS resources.          | - Configuration monitoring<br>- Compliance auditing<br>- Resource relationships | Pay based on the number of configuration items recorded and the number of active rules. |
| **Systems Manager**      | Provides a unified user interface so you can track and resolve operational issues across your AWS applications and resources from a central place. | - Operations management<br>- Patch management<br>- Resource groups  | Pay for the features you use, such as Automation, Session Manager, and OpsCenter.  |
| **OpsWorks**             | Configuration management service that provides managed instances of Chef and Puppet.          | - Managed Chef and Puppet<br>- Automated deployments<br>- Configuration management | Pay based on the number of nodes managed.                                         |
| **Trusted Advisor**      | Online resource to help you reduce cost, increase performance, and improve security by optimizing your AWS environment. | - Best practice checks<br>- Recommendations<br>- Cost optimization | Basic checks are free. Advanced checks require Business or Enterprise support plans. |
| **Service Catalog**      | Allows organizations to create and manage catalogs of IT services that are approved for use on AWS. | - Catalog management<br>- Self-service provisioning<br>- Governance | Pay based on the number of catalog actions and API calls.                          |
| **Control Tower**        | Provides an easy way to set up and govern a secure, compliant, multi-account AWS environment.  | - Account management<br>- Landing zones<br>- Compliance management  | No additional charge. You pay only for AWS services enabled by Control Tower.       |
| **AWS Organizations**    | Helps you centrally manage and govern your environment as you grow and scale your AWS resources. | - Account management<br>- Policy-based management<br>- Consolidated billing | No additional charge. You pay only for AWS resources used by your accounts.        |
| **License Manager**      | Makes it easier to manage licenses in AWS and on-premises servers from software vendors like Microsoft, SAP, Oracle, and IBM. | - License tracking<br>- Compliance management<br>- Automated discovery | No additional charge. You pay only for the resources managed.                      |
| **CloudFormation**       | Provides a common language for you to describe and provision all the infrastructure resources in your cloud environment. | - Infrastructure as code<br>- Stack management<br>- Template creation | No additional charge for using CloudFormation. You pay only for the AWS resources created. |


### Analytics

| Service Name| Description| Key Features| Pricing Information|
|---|---|---|---|
| **Athena**                 | Interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL. | - Serverless<br>- Standard SQL<br>- Integrates with AWS Glue             | Pay per query, based on the amount of data scanned.|
| **EMR**                    | Managed cluster platform that simplifies running big data frameworks such as Apache Hadoop and Apache Spark. | - Scalable clusters<br>- Integrated with S3, DynamoDB, RDS<br>- Presto, Hive, and Pig support | Pay for the EC2 instances used and the size of the cluster.|
| **Kinesis**                | Platform on AWS to collect, process, and analyze real-time, streaming data.                  | - Real-time processing<br>- Scalable<br>- Integrates with Lambda and Redshift | Pay for data ingested, storage, and data processing.        |
| **QuickSight**             | Scalable, serverless, embeddable, machine learning-powered business intelligence (BI) service built for the cloud. | - Data visualization<br>- Interactive dashboards<br>- Machine learning insights | Pay per session, and per user for Enterprise edition.      |
| **Data Pipeline**          | Web service that helps you reliably process and move data between different AWS compute and storage services, as well as on-premises data sources. | - Data workflow orchestration<br>- Scheduling<br>- Error handling       | Pay based on the frequency and volume of data processed.    |
| **Glue**                   | Fully managed ETL (extract, transform, load) service that makes it easy to prepare and load data for analytics. | - Serverless ETL<br>- Data catalog<br>- Job scheduling                  | Pay for data processed, crawlers, and data catalog storage. |
| **Redshift**               | Fast, fully managed data warehouse that makes it simple and cost-effective to analyze all your data using standard SQL and your existing BI tools. | - Columnar storage<br>- Massively parallel processing<br>- Integrates with BI tools | Pay for the instances and storage used, plus backup storage. |
| **Managed Streaming for Apache Kafka (MSK)** | Fully managed service that makes it easy to build and run applications that use Apache Kafka to process streaming data. | - Managed Kafka<br>- Integrated with AWS services<br>- High availability | Pay for the broker instance hours, storage, and data transfer. |
| **Elasticsearch Service**  | Fully managed service that makes it easy to deploy, secure, and run Elasticsearch at scale.  | - Real-time search and analytics<br>- Integrated with Kibana<br>- Scalability | Pay for the instance hours, storage, and data transfer.     |
| **Lake Formation**         | Service that makes it easy to set up a secure data lake in days.                             | - Centralized data catalog<br>- Data ingestion<br>- Security management | No additional charge. You pay for the AWS resources used for data storage and processing.|


### Machine Learning

| Service Name| Description| Key Features| Pricing Information|
|---|---|---|---|
| **SageMaker**                     | Fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning models quickly. | - Jupyter notebooks<br>- Training and tuning<br>- Deployment                   | Pay for notebook instances, training, and hosting. |
| **Comprehend**                    | Natural Language Processing (NLP) service that uses machine learning to find insights and relationships in text. | - Sentiment analysis<br>- Entity recognition<br>- Keyphrase extraction         | Pay per unit of text analyzed.                    |
| **Lex**                           | Service for building conversational interfaces into any application using voice and text.           | - Automatic Speech Recognition (ASR)<br>- Natural Language Understanding (NLU) | Pay per request, with a free tier available.      |
| **Polly**                         | Service that turns text into lifelike speech using deep learning.                                   | - Wide range of voices<br>- Customization<br>- Real-time streaming             | Pay per character converted to speech.            |
| **Rekognition**                   | Service that makes it easy to add image and video analysis to your applications.                    | - Object and scene detection<br>- Facial analysis<br>- Celebrity recognition    | Pay per image and video minute analyzed.          |
| **Translate**                     | Neural machine translation service that delivers fast, high-quality, and affordable language translation. | - Real-time translation<br>- Custom terminology<br>- Scalability               | Pay per character translated.                     |
| **Transcribe**                    | Automatic speech recognition (ASR) service that makes it easy for you to add speech-to-text capability to your applications. | - Real-time transcription<br>- Custom vocabularies<br>- Speaker identification | Pay per second of transcribed audio.              |
| **Personalize**                   | Machine learning service that makes it easy to build and deploy recommendation engines.             | - Real-time recommendations<br>- Customizable algorithms<br>- Integration with data sources | Pay for data processing, training, and usage.      |
| **Forecast**                      | Fully managed service that uses machine learning to deliver highly accurate forecasts.              | - Automated machine learning<br>- Accuracy metrics<br>- Scalable               | Pay for data ingestion, training, and forecast usage. |
| **Kendra**                        | Highly accurate and easy to use enterprise search service powered by machine learning.              | - Natural language search<br>- Connectors to data sources<br>- Relevance tuning | Pay for index storage, queries, and data transfer.|
| **DeepRacer**                     | An autonomous 1/18th scale race car designed to test reinforcement learning models.                  | - 3D racing simulator<br>- Community races<br>- Model training                 | Pay for training models and participating in races. |
| **DeepLens**                      | Deep learning-enabled video camera designed for developers to run and create deep learning models.  | - Integrates with SageMaker<br>- Pre-trained models<br>- Custom models         | Pay for the device and usage of related services. |


<br>


### Application Integration

| Service Name| Description| Key Features| Pricing Information|
|---|---|---|---|
| **Step Functions**                | Serverless orchestration service that lets you coordinate multiple AWS services into serverless workflows. | - Visual workflow editor<br>- Built-in error handling<br>- Integration with AWS services | Pay per state transition and workflow execution. |
| **SNS (Simple Notification Service)** | Fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication. | - Pub/sub messaging<br>- SMS, email, and mobile push notifications<br>- Serverless event handling | Pay per request and data transfer.                |
| **SQS (Simple Queue Service)**    | Fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. | - Standard and FIFO queues<br>- Message retention<br>- Dead-letter queues       | Pay per request and data transfer.                |
| **AppFlow**                       | Integration service that enables you to securely transfer data between AWS services and SaaS applications. | - Bi-directional data transfer<br>- Transformation and filtering<br>- Scheduled and event-driven flows | Pay per flow run and data processing.             |
| **MQ (Managed Message Broker)**   | Managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers on AWS. | - Supports AMQP, MQTT, OpenWire, and STOMP protocols<br>- High availability     | Pay per broker instance and storage usage.        |
| **EventBridge**                   | Serverless event bus service that makes it easy to connect applications using data from your own apps, integrated SaaS applications, and AWS services. | - Event routing<br>- Schema registry<br>- Event archive and replay              | Pay per event and rule invocation.                |
| **AppSync**                       | Managed service that uses GraphQL to make it easy for applications to get exactly the data they need. | - Real-time data synchronization<br>- Offline data access<br>- Fine-grained access control | Pay per query and data transfer.                  |
| **Glue**                          | Fully managed extract, transform, and load (ETL) service that makes it easy to prepare and load data for analytics. | - Automatic schema discovery<br>- Job scheduling<br>- Serverless ETL            | Pay per DPU-hour and data processing.             |

<br>

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
