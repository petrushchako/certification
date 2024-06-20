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
- 