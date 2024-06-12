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