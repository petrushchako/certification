# Examp tips

### Chapter 2<br>Foundation of Cloud Computing
- Learn service cathegories (EC2-Compute service, VPC-Networking service, etc)
- Read the AWS Service Whitepaper
- Undestand six advantages of the cloud as well as benefits and terminology
- Know computing models: IaaS, PaaS, SaaS, etc
- Know the deployment models: Public, Private, Hybrid (Hybrid uses Direct Connect)
- A Region is global and is made up of two or more AZs.
- An AZ is made up of multiple data centers.
- Multi-AZ deployments provide high availability.
- An Edge Location ensures low latency by placing content closer to users.
- A Local Zone is an extension of a Region enabling things like real-time gaming.
- Understand the Cloud Adaption Framework Perspectives and the Cloud Transformation Journey Phases.
- Understand the Well-Architected Framework pillars, design principles, and how they apply in the real world.
- The root user should be protected by MFA
- The root user has power that no other user has
- The CLI and SDKs are other options to manage AWS resources.
- Know hot to protect root user (MFA, and create Admin user for daily tasks)

<br>

### Chapter 3<br>Compute Technology and Services
- Know EC2 pricing options: On-Demand, Spot, Reserved instances, Dedicated Hosts and Savings Plans
- Real world usage: deploying a database or a web application
- Understand the difference between horizontal and vertical scaling
- The benefits of auto scaling
- Know the types of load balancers: Classic, Applciation, Gateway and Network
- Understand how to connect to an `EC2` isntance from the console
- Know the various ways to connect to a Linux `EC2` instance: Instance Connect, SSH and System Manager.
- Know the difference between `Elastic Container Service` and `Elastic Kubernetes Service`
- Understand when you would use containers: "Lift and shift", microservices architecture, CI/CD and refactoring applications.
- Know your responsibility when using serverless services like `Lambda`. You are responsible for your code only. AWS manages servers, the environment, and language support.
- Understand that `Fargate` is considered serverless and is used to manage containers.
- Know `Lambda` has an Always Free tier that includes million requests a month.
- Know `Fargate` has no upfront costs. Pay only for the resources used (vCPU, memory and storage)
- `Outposts` support hybrid deployment models
- `Lightsail` is a compute service used to quickly launch small projects
- `Batch` is compute service that processes large workloads in smaller batches
- `Wavelength` allows users t mobile network

<br>

### Chapter 4<br>Storage Technology and Services
- Understand the difference between `EBS`(lock level storage used with EC2 instances), `EFS`(file system scalable across multiple EC2 instances) and `Instance Stores`(provides temporary block level storage directly attached to the instance)
- Know that only `EBS` and `EFS` offer durable storage solutions.
Instance store's data is ephemeral, meaning the data doesn't persist after the instance stops or terminates.<br>While all three offer high performance, `EBS` is particularly known for its provisioned IOPS, `EFS` is scalable file storage, and instance store for a high I/O operation's suitable for temporary data.
- Remember that while `EBS` and `EFS` have costs associated with the amount of storage provisioned, `instance store` comes at no additional cost, as it's included in the instance price.
- Understand that `S3` is object storage
- `S3` provides durability, scalability, security and versatility
- Know that each object stored in S3 has data, a key (unique within a bucket) and metadata.
- Understand the difference of retrieval times and fee differences between classes. 
- Know if there is one or more AZ for data storage.
- Understand `S3` **Bucket naming**. Remember that S3 Bucket name has to be globally unique. Permission are deny all by default, if it is not explicitly allowed, the action will be denied. Encryption comes in by default, so any object stored in `S3` will be encrypted and protected if someone tries to access it. 
- `S3 Bucket` object versioning allow you to download previous version of an object.
- Understand `S3 Lifecycle Policies`, they are the process of transitioning object between storage classes (i.e. Standard to Glacier) or deleting files once ceratin condition is met. 
- Understand that `FSx` is for Windows primarelly.
- `Elastic Disaster Recovery` is about swift recovery
- Know that `FSx` offers seamless integration
- Know that `Elastic Disaster Recovery` (DRS) is cost effective.
- Understand that `Elastic Block Storage (EBS)` is persistent storage.
- Understand when you might want to use SSD (high IOPS) or HDD (high throughput) volumes
- Know the importance of `EBS snashots` for data recovery.
- Understand `Storage Gateway` is hybrid storage service. The Types are **S3 File, FSx File, Volume, Tape**
- Know that `Storage  Gateway` is cost-effective, secure and offers seamless integration. Use cases are data backup, disaster ricovery and data processing. 
- Understand that `AWS Backup` offers automated and centralized data protection. It integrates with various AWS Services
- Know `AWS Backup` provides security and compliance.
- Know that **Recovery process** allows you to restore.

<br>

### Chapter 5<br>Content Delivery and Networking Technology and Services
- Untderstand the benefits of a `CDN`, especially `CloudFront`.
- What is an `Edge Location`. Understand that `Edge Location` is a data center that is nearest the user requesting your content.
- Know of `CloudFront`'s integration with other AWS services for an optimized delivery network.
- Real-world applications of `CloudFront` include streaming and e-commerce.
- Understand the core function of `AWS Global Accelerator`. It improves application performance and availability by driecting traffic through Amazon's high-speed private global network.
- Be clear on when `Global Accelerator` is a must-have. It shines in cases of global user basis, high-traffic events, and multi-region applications.
- Also recognize how Global Accelerator simplifies traffic management across multiple regions acting as a single point and thus reducing the complexity of handling global network traffic. 
- Don't forget about `Global Accelerator's` built-in DDoS protection and automatic failover capabilites.
- Also understand how `Global Accelerator` integrates with other AWS services such as `Elastic Load Balancer`, `EC2` and `S3`
- Know that a `Virtual Private Cloud` allow you to provision a logically isolated section of AWS cloud.
- Understand that within a `VPC`, you can launch AWS resources in a virtual network that you define.
- Understand the roles and responsibilities of `Subnets`, `Routing Tables` and `Internet Gateways`
- Know the significance of `Security Groups` and `Network Access Control Lists`
- Know the difference between `Public` and `Private Subnets`
- Remember `DNS` translates human-friendly domain names into machine-readable IP addresses. 
- Know that `Route 53` provides diverse traffic routing options. It includes simple routing, geolocation routing and latency-based routing. 
- Understand that `Route 53`'s health checks monitor the health and performance of your resources. They ensure traffic is only directed to healthy endpoints. 
- Know that within a `VPC`, `Route 53` can be used to manage the `DNS` of your AWS resources, providing a private internal `DNS` service that is accessible only within your `VPC`.
- `Route 53` is not just for `DNS` queries, but also for managing global traffic. It is capable of directing users to the neares or most optimal region, enhancing the global reach and performance of your applications. 
- `Route 53` also allows for domain name registration management. Understand its role is not just routing traffic, but also in securing and managing domain names directly linked to your AWS resources. 
- Remember, `Direct Connect` provides a dedicated private connection to AWS. It's ideal for large-scale data transfers and offers consistent network performance.
- Know the two types of `VPN`s, `site-to-site` and `client` `VPN`. `Site-to-site VPN` is used for connecting entire networks to AWS, while `client VPN` is for individual remote access.
- Understand that `Direct Connect` is preferable for heavy, consistent data transfer requirements.
- `VPN` is suitable for secure remote connectivity.
- Consider factors like data volume, security requirements, and setup flexibility when choosing between them.
- Recognize the security offer by `VPN` through encryption, and recognize `Direct Connect` provides a more stable and faster connection.

<br>

### Chapter 6<br>Database Technology and Services
- Understand the differences between relational, NoSQL, and in-memory databases. Relational databases are structured, NoSQL offers flexibility, and in-memory databases provide speed.
- Know the different database services we talked about that are associated with AWS.
- Remember that `MemoryDB` is an in-memory database, and that `ElastiCache` is an in-memory data store and cache service.
- Understand the difference between `Database Migration Service (DMS)` (moving DB) and `Schema Conversion Tool (SCT)` (converting DB to AWS compatible)
- Know when and why `Database Migration` is necessary and the benefits of using `DMS`.
- `DynamoDB` is a no SQL service, perfect for flexible, scalable, and fast data management. It's used in web apps, gaming, IoT and more for its low latency and high performance.
- Know some of `DynamoDB` key features, scalability, performance security, and Restoreability.
- Understand the `MemoryDB` offers ultra-fast performance. `MemoryDB` delivers data access in microseconds.
- `MemoryDB` is fully compatible with `Redis` data structures and APIs.
- Know that `MemoryDB` automatically replicates data across multiple AWS availability zones.
- It's ideal for real-time analytics, session stores, and gaming leaderboards.


<br>

### Chapter 7<br>Development, Messaging, and Deployment Technology and Services
- `Continuous Integration` - integrating or merging small code changes frequently - at least once per day
- `Continous Development` - aumating the build, test and deployment functions. 
- `CodeCommit` - Source control service enabling teams to collaborate on code, html pages, scripts, images and binaries
- `CodeBuild` - compiles source code, runs tests and produces packages that are ready to deploy
- `CodeDeploy` - automates code deployments, e.g. to EC2, Lambda and on-premises servers.
- `CodePipeline` end-to-end solution, build, test and deploy your application every time there is a code change.
- `CodeArtifact` - an artifact repository that makes it easy for developers to find the software versions they need. Artifacts like documentation, compiled applications, deployable packages and libraries. 
- In `CodeArtifact` developers can find approved packages and can also publish their own. 
- **Coupling** interdependencies or connections between components of a system.
- **Tight coupling** Different parts of the system are highly dependent on each other. If one part fails, it could bring the whole system down.
- **Loose coupling** Decoupled components can be connected to each other but are not dependent on each other.
- `Simple Notification Service` allows you to send or push notifications (SMS and emails)
- `Simple Notification Service` uses **pub-sub** model. Subscribers must subscribe to a topic in order to receive notifications.
- `Simple Notification Service` topic is an access point, allowing subscribers to receive notifications.
- `Simple Queue Service` is a distributed message queueing system
- `Simple Queue Service` allow you to decouple the components of an application so that they are independent
- `Simple Queue Service` is a pull-based, not the push-based service, meaning that consumers pull message(s) from the queue when they're ready.
- `Simple Queue Service Standard queue`
  - Best-effort ordering.
  - Message delivered at least once.
  - Occasional duplicates.
  - Default queue type.
- `Simple Queue Service FIFO queue`
  - First-in-first-out message order is strictly preserved.
  - Messages are delivered once.
  - No duplicates.
  - Good for banking transactions which need to happen in a strict order.
- `Simple Queue Service Short Polling`
  - A response is returned immediately even if no messages are in the queue
  - A cost per response
- `Simple Queue Service Long Polling`
  - Periodically poll the queue and only return a response when a message is in queue or the timeout is reached.
  - Most cost effective option.
- `Simple Email Service (SES)` allows you to send richly formatted HTML emails from your applications.
- `Simple Email Service (SES)` is commonly used for marketing campaigns or confirmation of an order
- `Simple Notification Service (SNS)` allows you to send or push notifications, e.g. SMS text messages and plain text emails.
- `EventBridge`. Events are state changes generated by services like EC2, CloudWatch, CloudTrail.
- `EventBridge`. Rules match events and route them to the correct target.
- `EventBridge`. Targets respond by taking some action, like sending an `SNS` notification.
- `EventBridge` scheduled events let us schedule an action in advance, e.g. run process one a week or month.
- `Step Functions` provide a great way to visualize your serverless application.
- `Step Functions` automatically trigger and track each step.
- `Step Functions` log the state of each step, so you can track what went wrong and where.
- `CloudFormation` lets you deploy AWS resources using an **Infrastructure as Code** approach
- `CloudFormation` resources are defined using template written in **YAML** or **JSON**
- `CloudFormation` allows you to quickly provision AWS resources in a consistent way, with less effort. 
- `Elastic Beanstalk` deploys ans scales your web applications, including the web application server platform.
- `Elastic Beanstalk` provisions the AWS resources for you, e.g. EC2, RDS, S3, Elastic Load Balancer, Auto Scaling Groups, etc.
- `Elastic Beanstalk` supports **Java, .NET, PHP, Node.js, Python, Ruby, Go, Apache Tomcat, IIS, Nginx, Docker**.
- `Elastic Beanstalk` provides OS and application server updates. Monitoring metrics, and health checks are also included.

<br>

### Chapter 8<br>Migration and Transfer Technology and Services
- `Snow Family Services`
  - **Snowball** you have 10 TB or more to migrate.
  - **Snowball Edge** you have 10 TB or more to migrate and you also need to process the data.
  - **Snowmobile** you have 10 PT or more to migrate.
  - **Snowcone** small and portable military grade up to 14 TB SSD. 
- `Database Migration Service` migrates database and analytics workloads to AWS from EC2, on-premises or RDS.
- `Schema Conversion Tool` converts from one type of databases to another (i.e. Oracle to Aurora MySQL)
- `AWS Transfer Family` is all about:
  - File sharing and transfer with external parties
  - Files can be transferred out of your storage - e.g. SFTP GET
  - Files can be transferred in - e.g. SFTP PUT
  - Multiple protocols supported, like SFTP, AS2, FTPS and FTP.
- `DataSync`:
  - Securely transfer TB of data to S3, EFS, FSx
  - Supports NFS, SMB or object stores
  - Data can be on premises, in another cloud provider or in AWS storage
  - Usecases include, migration, replication to low cost storage, archiving and hybrid/multi-cloud
- `Application Discovery Service`:
  - Gathers data about your existing on-premises application servers and databases.
  - Install an agent on each server to collect the data.
  - A virtual appliance can be deployed on VMware Center systems to avoid using an agent.
  - Server inventory, configuration, operating system, capacity usage, networking.
  - This data can be used to develop a migration plan to move applications and data to AWS.
- `Application Migration Service`:
  - **Automated Lift-and-Shift** Automatically migrates applications to AWS without modifying them.
  - **AWS Replication Agent** Installed on the source server and replicates to a new server in AWS.
  - **Migrate Applications** Running on physical servers, on virtual servers, other cloud providers, and other AWS accounts or regions.
- `AWS Migration Hub`:
  - A central place to manage the migration of applications and data into AWS.
  - Integrated with Application Discovery Service, Application Migration Service, and Database Migration Service.
  - Group servers together logically so you can plan and track the progress of your migration.

<br>

### Chapter 9<br>Artificial Intelligence, Machine Learning, and Analytics Technology and Services

- `RedShift`:
  - Data warehousing service.
  - Stores huge amounts of data.
  - Designed for Online Analytics Processing (OLAP).
- `RedShift Serverless`:
  - Serverless option of RedShift.
  - No infrastructure management needed.
- `Kinesis`
  - Kinesis enables you to collect, process and analyze streaming data in real time
  - Examples include: website clickstreams, social media feeds, IoT telementry data and stock prices
  - Kinesis Data Streams and Video Streams
- `Kinesis Firehouse`
  - Use Cases:
    - Real-time Analytics
    - Data Lake Feeding
    - Log Data Management
    - IoT Data Integration
- `Kinesis vs Kinesis Firehose`
  - `Kinesis Data Streams` capture and store streaming data and video
  - `Kinesis Data Firehose` captures, fransforms and loads data continuously into data stores.
- `Athena` is an interactive query service for data in S3.<br>Features:
  - **Interactive Query** Athena is an interactive query service for data in $3.
  - **Standard SQL** Allows you to query data stored in $3 using standard SQL.
  - **Serverless** You don't need to configure any infrastructure to use Athena.
  - **Use Cases** Querying log files or generating reports from S3 data.
- `AWS Glue` perapres your data for analytics and ML
  - Data Catalog - Including metadata, e.g. the type of data JSON, CSV, XML etc.
  - Performs ETL (Extract Transform Load)
  - Extract - From data sources like RDS, S3, Kinesis etc
  - Transform - Categorize, clean, remove duplicates join multiple data sets.
  - Load - Load into RDS, RedShift, $3, or Athena for use by your applications.
- `AWS Data Exchange`
  - **Subscribe to Data Products** E.g. Financial services, healthcare, weather, manufacturing and telecommunications.
  - **Use Cases** - Analyze customer spending patterns based on geographic location, using data from Mastercard.
  - **Create Your Own Data Products** You can publish your own data product and let other accounts subscribe.
- `AWS Elastic Map Reduce (EMR)`
  - **Fully managed Big Data** supports open-source technology like Apache Spark, Apache Hive, Presto and Hadoop
  - **Petabyte Scale** Parallel data processing and analysis for structured, semi- structured and unstructured data.
  - **Use cases** Find patterns in genomic data, identify preferences from click-stream or analyze application log data.
- `AWS OpenSearch`:
  - **Fully Managed Elasticsearch**, based on open-source technology
  - Compatible with industry standard Elasticsearch open-source APIs, Logstash and Kibana.
  - Ingest data from AWS services like `CloudWatch Logs`, `S3`, and `DynamoDB`.
  - Use cases: Log Analytics Application Monitoring Security Analytics Business Data Analytics
- `AWS Managed Streaming for Apache Kafka (Amazon MSK)`
  - Fully managed Apache Kafka
  - Process streams of events from hundreds of event sources
  - Real-time data streaming application
  - Use cases: Track and analyze stock market data in real-time
- `Amazon QuickSight`
  - A business analytics service, which lets you make better decisions based on your data
  - Connect to AWS data and on-premises data sources
  - Build dashboards to visualize your data
  - Use Cases: Analyze sales performance and trends, application usage and traffic, and marketing campaign data
- `AWS SageMaker` is a fully managed Machine Learning service
  - Import and prepare your data
  - Build your ML model
  - Train your model using optimized infrastructure
  - Deploy your model
- `Kendra` an intelligent search service
  - Natural Language Processing (query your data with natural language)
  - Customized Search (Search your data to find answers)
  - **Add Custom Search** Users can search based on your data
  - **Query** Natural Language Processing
  - **Data Source** S3, FSx, RDS, databases, GitHub, Google Drive
  - **Data Types** Unstructured or semi-structured
  - **Simple Fact-Based** Who, what, where?
  - **Descriptive** How do return a faulty item?
- `AWS Lex` Lex allows you to build conversational interfaces in your applications using natural language models.
  - Know `Lex` useed to build conversational chatbots
  - Understand that `Lex` uses natural language models
- `AWS Polly` Generate realistic natural sounding speech, from text that you provide (text to speach)
  - You can provide the text in a variety of languages.
  - The resulting audio can be streamed, saved, or downloaded.
  - Can be used to add natural sounding speech to your applications.
- `AWS Comprehend`
  - Uses Natural Language Processing (NLP) to process text
  - Sentiment Analysis
  - Discover key phrases, topics and languages
  - Intelligent Search
- `Textract`, `Transcribe` and `Translate`
  - **Machine Learning** Perform automated document processing reducing manual effort 
  - **Amazon Textract** Extracts text and information from documents
  - **Amazon Transcribe** Speech-to-text service that takes speech as input and transcribes it to text
  - **Amazon Translate** Accurate, natural sounding language translation
- `AWS Rekognition` used to analyse images to identify text, objects and people

<br>

### Chapter 10<br>Auditing, Monitoring, Logging, and Additional Technology and Services
- Understand why it is important to collect logs and metrics on AWS
- Understand the differences between metrics, logs, and configurations.
- Keep the Well-Architected Framework pillars in mind as we continue through this section.
- Understand the difference between `CloudTrail` and `CloudWatch`, and how they each contribute to observability and security.
- Understand what a `CloudWatch` dashboard is and how you can set alarms on them.
- Understand how to create a `CloudWatch` dashboard from the console
- Know that by default `CloudWatch` log groups are retained indefinitely.
- To monitor application logs, you can create a `CloudWatch Log group` and send application logs to created group using AWS SDK. 
- Undesrtand how `Tags` can help you sort and visualize your cloud resources on AWS.
- `Systems Manager` allow you to track resource groups and perform automated actions. 
- `AWS Health Dashboard` or `Health API` are used to monitor services health
- `Trusted Advisor` is the best practice monitoring suggestion tool. 
- `AWS Config` is the backbone of configuration auditing on AWS. You can use it to set rules and detect non-compliant resources.
- `Audit Manager` and `The Well-Architected Tool` help you assess your AWS resources to achieve best practices and compliance standards. 
- 