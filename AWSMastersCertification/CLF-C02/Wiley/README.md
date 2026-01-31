# AWS Certified Cloud Practitioner Study Guide With 500 Practice Test Questions: Foundational (CLF-C02) Exam, 2nd Edition

## Chapter 1: The Cloud

1. Which of the following does not contribute significantly to the operational value of a large cloud provider like AWS?

    - Metered, pay‐per‐use pricing
    <br>
    
    > Having globally distributed infrastructure and experienced security engineers makes a provider’s infrastructure more reliable. Metered pricing makes a wider range of workloads possible.

<br>

2. Which of the following are signs of a highly available application? (Choose two.)
    - A failure in one geographic region will trigger an automatic failover to resources in a different region.
    - Spikes in user demand are met through automatically increasing resources.
    <br>
    
    > Security and virtualization are both important characteristics of successful cloud workloads, but neither will directly impact availability.

<br>

3. How does the metered payment model make many benefits of cloud computing possible? (Choose two.)
    - Experiments with multiple configuration options are now cost‐effective.
    - Full‐stack applications are possible without the need to invest in capital expenses.
    <br>
    
    > Security and scalability are important cloud elements but are not related to metered pricing.

<br>

4. Which of the following are direct benefits of server virtualization? (Choose two.)

    - Fast resource provisioning and launching
    - Efficient (high-density) use of resources
    <br>
    
    > Security and elasticity are important but are not directly related to server virtualization.

<br>

5. What is a hypervisor?
    - Software used to administer virtualized resources run on physical infrastructure
    <br>
    
    > A hypervisor is software (not hardware) that administers virtualized operations.

<br>

6. Which of the following best describes server virtualization?
    - Logically partitioning physical compute and storage devices into multiple smaller virtual devices
    <br>
    
    > Sharding, aggregating remote resources, and abstracting complex infrastructure can all be accomplished using virtualization techniques, but they aren’t, of themselves, virtualization.

<br>

7. Which of the following best describes infrastructure‐as‐a‐service products?
    - Services that give you direct control over underlying compute and storage resources

    <br>
    
    > PaaS products mask complexity, SaaS products provide end-user services, and serverless architectures (like AWS Lambda) let developers run code on cloud servers.

<br>

8. Which of the following best describes platform‐as‐a‐service products?
    - Services that hide infrastructure complexity behind a simple interface
    <br>
    
    > IaaS products provide full infrastructure access, SaaS products provide end‐user services, and serverless architectures (like AWS Lambda) let developers run code on cloud servers.

<br>

9. Which of the following best describes software‐as‐a‐service products?
    - Services that provide a service to end users through a public network
    <br>
    
    > IaaS products provide full infrastructure access, PaaS products mask complexity, and serverless architectures (like AWS Lambda) let developers run code on cloud servers.

<br>

10. Which of the following best describes scalability?
    - The ability of an application to automatically add preconfigured compute resources to meet increasing demand
    <br>
    
    > Increasing or decreasing compute resources better describes elasticity. Efficient use of virtualized resources and billing models aren’t related directly to scalability.

<br>

11. Which of the following best describes elasticity?
    - The ability of an application to increase or decrease compute resources to match changing demand
    <br>
    
    > Preconfiguring compute instances before they’re used to scale up an application is an element of scalability rather than elasticity. Efficient use of virtualized resources and billing models aren’t related directly to elasticity.

<br>

12. Which of the following characteristics most help AWS provide such scalable services? (Choose two.)
    - The enormous number of servers it operates
    - Its highly automated infrastructure administration systems
    <br>
    
    > Capitalized assets and geographic reach are important but don’t have a direct impact on operational scalability.


<br><br><br>



## Chapter 2: Understanding your AWS Account

1. Which of the following EC2 services can be used without charge under the Free Tier?
    - t2.micro EC2 instance type instances for a total of 750 hours per month
    <br>
    
    > Only the t2.micro instance type is Free Tier–eligible, and any combination of t2.micro instances can be run up to a total of 750 hours per month.
<br>

2. You want to experiment with deploying a web server on an EC2 instance. Which two of the following resources can you include to make that work while remaining within the Free Tier? (Choose two.)
    - A t2.micro instance type EC2 instance 
    - A 30 GB solid-state Elastic Block Store (EBS) drive
    <br>
    
    > S3 buckets—while available in such volumes under the Free Tier—are not necessary for an EC2 instance. Since the maximum total EBS space allowed by the Free Tier is 30 GB, two 20 GB would not be covered.

<br>

3. Which of the following usage will always be cost‐free even after your account’s Free Tier has expired? (Choose two.)
    - 10 GB of data retrievals from Amazon Glacier per month
    - 10 custom monitoring metrics and 10 alarms on Amazon CloudWatch
    <br>
    
    > The API calls/month and ECR free storage are available only under the Free Tier.

<br>

4. Which of the following tools are available to ensure you won’t accidentally run past your Free Tier limit and incur unwanted costs? (Choose two.)
    - Automated email alerts when activity approaches the Free Tier limits
    - The Top Free Tier Services by Usage section on the Billing & Cost Management Dashboard
    <br>
    
    > There is no Top Free Tier Services Dashboard or, for that matter, a Billing Preferences Dashboard.

<br>

5. Which of the following is likely to be an accurate source of AWS pricing information?
    - AWS online documentation relating to a particular service
    <br>
    
    > Wikipedia pages aren’t updated or detailed enough to be helpful in this respect. The AWS CLI isn’t likely to have much (if any) pricing information. The Pricing Calculator may not contain the absolute latest information about service pricing.

<br>

6. Which of the following will probably not affect the pricing for an AWS service?
    - Requests for raising the available service limit
    <br>
    
    > Pricing will normally change based on the volume of service units you consume and, often, between AWS regions.

<br>

7. Which of the following AWS documentation URLs points to the page containing an up‐to‐date list of service limits?
    - `https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html`
    <br>
    

8. Which of the following best describes one possible reason for AWS service limits?
    - To prevent individual customers from accidentally launching a crippling level of resource consumption
    <br>
    
    > Resource limits exist only within individual regions; the limits in one region don’t impact another. There’s no logistical reason that customers can’t scale up deployments at any rate. There are, in fact, no logical limits to the ability of AWS resources to scale upward.

<br>

9. Is it always possible to request service limit increases from AWS?
    - No. Some service limits are hard.
    <br>
    
    > While most service limits are soft and can be raised on request, some service limits exist that are absolute.

<br>

10. Which is the best place to get a quick summary of this month’s spend for your account?
    - Billing & Cost Management Dashboard
    <br>
    
    > The Cost Explorer and Cost and Usage reports provide more in‐depth and/or customized details. Budgets allow you to set alerts based on usage.

<br>

11. What is the main goal for creating a Usage budget type (in AWS Budgets)?
    - To track particular categories of resource consumption
    <br>
    
    > Reservation budgets track the status of any active reserved instances on your account. Cost budgets monitor costs being incurred against your account. There is no budget type that correlates usage per unit cost to determine your account cost efficiency.

<br>

12. Which of the following is not a setting you can configure in a Cost budget?
    - Owner (username of resource owner)
    <br>
    
    > You can configure the period, instance type, and start/stop dates for a budget, but you can’t filter by resource owner.
<br>

13. What is the main difference between the goals of Cost Explorer and of Cost and Usage reports?
    - Cost Explorer displays visualizations of high‐level historical and current account costs, whereas Cost and Usage reports generate granular usage reports in CSV format.
    <br>
    
    > Billing events aren’t triggers for alerts. Nothing in this chapter discusses intrusion events.

<br>

14. What is the purpose of cost allocation tags?
    - To help you identify resources for the purpose of tracking your account spending
    <br>
    
    > Tags are passive, so they can’t automatically trigger anything. Resource tags—not cost allocation tags—are meant to help you understand and control deployments. Tags aren’t associated with particular billing periods.

<br>

15. Which of the following scenarios would be a good use case for AWS Organizations? (Choose two.)
    - A single company with multiple AWS accounts that wants a single place to administer everything
    - A company that’s integrated some operations with an upstream vendor
    <br>
    
    > Companies with multiple users of resources in a single AWS account would not benefit from AWS Organizations, nor would a company with completely separated units. The value of AWS Organizations is in integrating the administration of related accounts.

<br>

16. Which of these tools lets you design graphs within the browser interface to track your account spending?
    - Cost Explorer
    <br>
    
    > Budgets are used to set alerts. Reports provide CSV‐formatted data for offline processing. Consolidated Billing (now migrated to AWS Organizations) is for administering resources across multiple AWS accounts.


<br><br><br>



## Chapter 3: Getting Support on AwS

1. Your company is planning a major deployment on AWS. While the design and testing stages are still in progress, which of the following plans will provide the best blend of support and cost savings?
    - Business
    <br>
    
    > The Basic plan won’t provide any personalized support. The Developer plan is cheaper, but there is limited access to support professionals. The Business plan does offer 24/7 email, chat, and phone access to an engineer, so until you actually deploy, this will make the most sense. At a $15,000 monthly minimum, the Enterprise plan won’t be cost effective.

<br>

2. Your web development team is actively gearing up for a deployment of an e‐commerce site. During these early stages of the process, individual developers are running into frustrating conflicts and configuration problems that are highly specific to your situation. Which of the following plans will provide the best blend of support and cost savings?
    - Developer
    <br>
    
    > Using the public documentation available through the Basic plan won’t be enough to address your specific needs. The Business and Enterprise plans are not necessary as you don’t yet have production deployments.

<br>

3. Your corporate website was offline last week for more than two hours—which caused serious consequences, including the early retirement of your CTO. Your engineers have been having a lot of trouble tracking down the source of the outage and admit that they need outside help. Which of the following will most likely meet that need?
    - Enterprise
    <br>
    
    > The lower three support tiers provide limited access to only lower‐level support professionals, whereas the Enterprise plan provides full access to senior engineers and dedicates a technical account manager (TAM) as your resource for all your AWS needs.

<br>

4. For which of the following will AWS provide direct 24/7 support to all users—even those on the Basic Support plan?
    - elp with making a bill payment to AWS
    <br>
    
    > Basic plan customers are given customer support access only for account management issues and not for technical support or security breaches.

<br>

5. The primary purpose of an AWS technical account manager is to:
    -  Provide deployment guidance and advocacy for Enterprise Support customers.
    <br>
    
    > The TAM is available only for Enterprise Support customers. The primary function is one of guidance and advocacy.

<br>

6. Your Linux‐based EC2 instance requires a patch to a Linux kernel module. The problem is that patching the module will, for some reason, break the connection between your instance and data in an S3 bucket. Your team doesn’t know if it’s possible to work around this problem. Which is the most cost‐effective AWS plan through which support professionals will try to help you?
    - Business.
    <br>
    
    > Only the Business and Enterprise plans include help with troubleshooting interoperability between AWS resources and third‐party software and operating systems. The Business plan is the least expensive that will get you this level of support.

<br>

7. Your company enrolled in the Developer Support plan and, through the course of one month, consumed $4,000 USD of AWS services. How much will the support plan cost the company for the month?
    - $120
    <br>
    
    > The Developer plan costs the greater of $29 or 3 percent of the monthly usage. In this case, 3 percent of the month’s usage is $120.

<br>

8. Your company enrolled in the Business Support plan and, through the course of three months, consumed $33,000 of AWS services (the consumption was equally divided across the months). How much will the support plan cost the company for the full three months?
    - $3,310
    <br>
    
    > The Business plan costs $1,000 (10 percent) for the first $10,000 of usage, and then 7 percent for the next level. In our case, that would come to $3,310 for the full three months.

<br>

9. Which of the following AWS support services does not offer free documentation of some sort?
    - AWS Partner Network
    <br>
    
    > The AWS Professional Services site includes tech talk webinars, white papers, and blog posts. The Basic Support plan includes AWS documentation resources. The Knowledge Center consists of FAQ documentation.

<br>

10. What is the key difference between the roles of AWS Professional Services and a technical account manager (TAM)?
    - The Professional Services product helps AWS Partner Network cloud professionals work alongside your own team to help you administer your cloud infrastructure. The TAM is a cloud professional employed by AWS to guide you through the planning and execution of your infrastructure.
    <br>
    
    > The TAM is an AWS employee dedicated to guiding your developer and admin teams. There is no such thing as a network appliance for workload testing.

<br>

11. Which of the following documentation sites are most likely to contain code snippets for you to cut and (after making sure you understand exactly what they’ll do) paste into your AWS operations? (Choose two.)
    - https://repost.aws/knowledge-center
    - https://docs.aws.amazon.com
    <br>
    
    > The https://aws.amazon.com/premiumsupport/compare-plans site provides general information about support plans, and the https://aws.amazon.com/professional-services site describes accessing that particular resource. Neither directly includes technical guides.

<br>

12. What is the primary function of the content linked from the Knowledge Center?
    - To present solutions to commonly encountered technical problems using AWS infrastructure
    <br>
    
    > The Knowledge Center is a FAQ for technical problems and their solutions. The main documentation site is much better suited to introduction‐level guides. The https://forums.aws.amazon.com site is the discussion forum for AWS users.

<br>

13. On which of the following sites are you most likely to find information about encrypting your AWS resources?
    - https://aws.amazon.com/security/security-resources
    <br>
    
    > The Knowledge Center is a general FAQ for technical problems and their solutions. The docs.aws.amazon.com site is for general documentation. There is no https://aws.amazon.com/security/encryption page.

<br>

14. When using AWS documentation pages, what is the best way to be sure the information you’re reading is up‐to‐date?
    - The page URL will include the word latest.
    <br>
    
    > Version numbers are not publicly available, and the word Current isn’t used in this context.

<br>

15. Which of the following is not a Trusted Advisor category?
    - Replication
    <br>
    
    > Replication is, effectively, a subset of Fault Tolerance and therefore would not require its own category.

<br>

16. “Data volumes that aren’t properly backed up” is an example of which of these Trusted Advisor categories?
    - Fault Tolerance
    <br>
    
    > Performance identifies configuration settings that might be blocking performance improvements. Security identifies any failures to use security best‐practice configurations. Cost Optimization identifies any resources that are running and unnecessarily costing you money.

<br>

17. Instances that are running (mostly) idle should be identified by which of these Trusted Advisor categories?
    - Cost Optimization
    <br>
    
    > Performance identifies configuration settings that might be blocking performance improvements. Service Limits identifies resource usage that’s approaching AWS region or service limits. There is no Replication category.

<br>

18. Within the context of Trusted Advisor, what is a false positive?
    - An alert for a service state that was actually intentional
    <br>
    
    > An OK status for a failed state is a false negative. There is no single status icon indicating that your account is completely compliant in Trusted Advisor.

<br>

19. Which of the following Trusted Advisor alerts is available only for accounts on the Business or Enterprise Support plan? (Choose two.)
    - Load Balancer Optimization
    - IAM Access Key Rotation
    <br>
    
    > Both the MFA and Service Limits checks are available for all accounts.



<br><br><br>



## Chapter 4: Understanding the AWS Environment

1. Which of the following designations would refer to the AWS US West (Oregon) region?
    - us‐west‐2
    <br>
    
    > The letter (a, b...) at the end of a designation indicates an availability zone. us‐east‐1 would never be used for a region in the western part of the United States.

<br>

2. Which of the following is an AWS region for which customer access is restricted?
    - AWS GovCloud
    <br>
    
    > The AWS GovCloud region is restricted to authorized customers only. Asia Pacific (Tokyo) is a normal region. AWS Admin and US‐DOD don’t exist (as far as we know, at any rate).

<br>

3. When you request a new virtual machine instance in EC2, your instance will automatically launch into the currently selected value of which of the following?
    - Region
    <br>
    
    > EC2 instances will automatically launch into the region you currently have selected. You can manually select the subnet that’s associated with a particular availability zone for your new EC2 instance, but there’s no default choice.

<br>

4. Which of the following are globally based AWS services? (Choose two.)
    - Route 53
    - CloudFront
    <br>
    
    > Relational Database Service (RDS) and EC2 both use resources that can exist in only one region. Route 53 and CloudFront are truly global services in that they’re not located in or restricted to any single AWS region.

<br>

5. Which of the following would be a valid endpoint your developers could use to access a particular Relational Database Service instance you’re running in the Northern Virginia region?
    - `rds.us-east-1.amazonaws.com`
    <br>
    
    > The correct syntax for an endpoint is <service-designation>.<region-designation>.amazonaws.com—meaning, in this case, rds.us-east-1.amazonaws.com.

<br>

6. What are the most significant architectural benefits of the way AWS designed its regions? (Choose two.)
    - It can make applications available to end users with lower latency.
    - It can make applications more compliant with local regulations.
    <br>
    
    > For most uses, distributing your application infrastructure between multiple AZs within a single region gives them sufficient fault tolerance. While AWS services do enjoy a significant economy of scale—bringing prices down—little of that is due to the structure of their regions. Lower latency and compliance are the biggest benefits from this list.

<br>

7. Why is it that most AWS resources are tied to a single region?
    - Because those resources are run on a physical device, and that device must live somewhere
    <br>
    
    > Sharing a single resource among regions wouldn’t cause any particular security, networking, or latency problems. It’s a simple matter of finding a single physical host device to run on.

<br>

8. You want to improve the resilience of your EC2 web server. Which of the following is the most effective and efficient approach?
    - Launch parallel, load‐balanced instances in multiple availability zones within a single AWS region.
    <br>
    
    > Autoscaling is an important working element of application high availability, but it’s not what most directly drives it (that’s load balancing). The most effective and efficient way to get the job done is through parallel, load‐balanced instances in multiple availability zones, not regions.

<br>

9. Which of the following is the most accurate description of an AWS availability zone?
    - One or more independently powered data centers running a wide range of hardware host types
    <br>
    
    > “Data centers running uniform host types” would describe an edge location. The data centers within a “broad geographic area” would more closely describe an AWS region. AZs aren’t restricted to a single data center.

<br>

10. Which of the following most accurately describes a subnet within the AWS ecosystem?
    - The block of IP addresses assigned for use within a single availability zone
    <br>
    
    > Imposing virtual networking limits on an instance would be the job of a security group or access control list. IP address blocks are not assigned at the region level. Customers have no access to or control over AWS networking hardware.

<br>

11. What determines the order by which subnets/AZ options are displayed in EC2 configuration dialog boxes?
    - They (appear) to be displayed in random order.
    <br>
    
    > AWS displays AZs in (apparently) random order to prevent too many resources from being launched in too few zones.

<br>

12. What is the primary goal of autoscaling?
    - To ensure that a predefined service level is maintained regardless of external demand or instance failures
    <br>
    
    > Autoscaling doesn’t focus on any one resource (physical or virtual) because it’s interested only in the appropriate availability and quality of the overall service. The job of orchestration is for load balancers, not autoscalers.

<br>

13. Which of the following design strategies is most effective for maintaining the reliability of a cloud application?
    - Resource redundancy
    <br>
    
    > Resource isolation can play an important role in security, but not reliability. Automation can improve administration processes, but neither it, nor geolocation, is the most effective reliability strategy.

<br>

14. Which of the following AWS services are not likely to benefit from Amazon edge locations? (Choose two.)
    - RDS
    - Elastic Block Store (EBS)
    <br>
    
    > RDS database instances and Lambda functions are not qualified CloudFront origins. EC2 load balancers can be used as CloudFront origins.

<br>

15. Which of the following is the primary benefit of using CloudFront distributions?
    - Reduced latency access to your content no matter where your end users live
    <br>
    
    > CloudFront can’t protect against spam, and although it can complement your application’s existing redundancy and encryption, that is not its primary purpose.

<br>

16. What is the main purpose of Amazon Route 53?
    - Managing domain name registration and traffic routing
    <br>
    
    > Countering the threat of DDoS attacks is the job of AWS Shield. Protecting web applications from web‐based threats is done by AWS Web Application Firewall. Using Lambda to customize CloudFront behavior is for Lambda Edge.

<br>

17. According to the AWS Shared Responsibility Model, which of the following are responsibilities of AWS? (Choose two.)
    - The security of the cloud
    - Patching underlying virtualization software running in AWS data centers
    <br>
    
    > What’s in the cloud is your responsibility—it includes the administration of EC2‐based operating systems.

<br>

18. According to the AWS Shared Responsibility Model, what’s the best way to define the status of the software driving an AWS managed service?
    - Whatever the customer can control (application code and/or configuration settings) is the customer’s responsibility.
    <br>
    
    > There’s no one easy answer, as some managed services are pretty much entirely within Amazon’s sphere, and others leave lots of responsibility with the customer. Remember, “if you can edit it, you own it.”

<br>

19. Which of the following is one of the first places you should look when troubleshooting a failing application?
    - Service Health Dashboard
    <br>
    
    > The AWS Billing Dashboard is focused on your account billing issues. Neither the AWS Acceptable Use Monitor nor the Service Status Dashboard actually exists. But nice try.

<br>

20. Where will you find information on the limits AWS imposes on the ways you can use your account resources?
    - AWS Acceptable Use Policy
    <br>
    
    > The correct document (and web page https://aws.amazon.com/aup) for this information is the AWS Acceptable Use Policy.
    
<br>




<br><br><br>



## Chapter 5: Securing Your AWS Resources

1. What is the primary function of the AWS IAM service?
    - Identity and access management
    <br>
    
    > Identity and Access Management (IAM) is primarily focused on helping you control access to your AWS resources. KMS handles access keys. EC2 manages SSH key pairs. While IAM does touch on federated management, that’s not its primary purpose.

<br>

2. Which of the following are requirements you can include in an IAM password policy? (Choose three.)
    - Require at least one uppercase letter.
    - Require at least one number.
    - Require at least one nonalphanumeric character.
    <br>
    
    > Including a space or null character is not a password policy option.

<br>

3. Which of the following should you do to secure your AWS root user? (Choose two.)
    - Enable MFA.
    - Create a strong password.
    <br>
    
    > The root user should not be used for day‐to‐day administration tasks—even as part of an “admin” group. The goal is to protect root as much as possible.

<br>

4. How does multifactor authentication work?
    - Users authenticate using a password and also either a physical or virtual MFA device.
    <br>
    
    > MFA requires at least two (“multi”) authentication methods. Those will normally include a password (something you know) and a token sent to either a virtual or a physical MFA device (something you have).

<br>

5. Which of the following SSH commands will successfully connect to an EC2 Amazon Linux instance with an IP address of 54.7.35.103 using a key named mykey.pem?
    - `ssh -i mykey.pem ec2-user@54.7.35.103`
    <br>
    
    > The -i argument should point to the name (and location) of the key stored on the local (client) machine. By default, the admin user on an Amazon Linux instance is named ec2-user.

<br>

6. What’s the most efficient method for managing permissions for multiple IAM users?
    - Assign users requiring similar permissions to IAM groups.
    <br>
    
    > While assigning permissions and policy‐based roles will work, it’s not nearly as efficient as using groups, where you need to set or update permissions only once for multiple users.

<br>

7. What is an IAM role?
    - Permissions granted a trusted entity over specified AWS resources
    <br>
    
    > An IAM role is meant to be assigned to a trusted entity (like another AWS service or a federated identity). A “set of permissions” could refer to a policy. A set of IAM users could describe a group.

<br>

8. How can federated identities be incorporated into AWS workflows? (Choose two.)
    -  You can provide users authenticated through a third‐party identity provider access to backend resources used by your mobile app.
    - You can provide admins authenticated through AWS Microsoft AD with access to a Microsoft SharePoint farm running on AWS.
    <br>
    
    > Federated identities are for permitting authenticated entities access to AWS resources and data. They’re not for importing anything from external accounts—neither data nor guidance.

<br>

9. Which of the following are valid third‐party federated identity standards? (Choose two.)
    - SAML 2.0
    - Active Directory
    <br>
    
    > Secure Shell (SSH) is an encrypted remote connectivity protocol, and SSO (single sign‐on) is an interface feature—neither is a standard for federated identities.

<br>

10. What information does the IAM credential report provide?
    - The current state of security of your IAM users’ access credentials
    <br>
    
    > The credential report focuses only on your users’ passwords, access keys, and MFA status. It doesn’t cover actual activities or general security settings.

<br>

11. What text format does the credential report use?
    - CSV
    <br>
    
    > The credential report is saved to the comma‐separated values (spreadsheet) format.

<br>

12. Which of the following IAM policies is the best choice for the admin user you create in order to replace the root user for day‐to‐day administration tasks?
    - AdministratorAccess
    <br>
    
    > Your admin user will need broad access to be effective, so AmazonS3FullAccess and AmazonEC2FullAccess—which open up only S3 and EC2, respectively—won’t be enough. There is no AdminAccess policy.

<br>

13. What will you need to provide for a new IAM user you’re creating who will use “programmatic access” to AWS resources?
    - An access key ID and secret access key
    <br>
    
    > “Programmatic access” users don’t sign in through the AWS Management Console; they access through APIs or the AWS CLI. They would therefore not need passwords or MFA. An access key ID alone without a matching secret access key is worthless.

<br>

14. What will IAM users with AWS Management Console access need to successfully log in?
    - Their username and password
    <br>
    
    > When the correct login page (such as https://291976716973.signin.aws.amazon.com/console) is loaded, an IAM user only needs to enter a username and a valid password. Account numbers and secret access keys are not used for this kind of authentication.

<br>

15. Which of the following will encrypt your data while in transit between your office and Amazon S3?
    - A client‐side master key

    <br>
    
    > In‐transit encryption requires that the data be encrypted on the remote client before uploading. Server‐side encryption (either SSE‐S3 or SSE‐KMS) only encrypts data within S3 buckets. DynamoDB is a NoSQL database service.

<br>

16. Which of the following AWS resources cannot be encrypted using KMS?
    - Existing AWS Elastic Block Store volumes
    <br>
    
    > You can only encrypt an EBS volume at creation, not later.

<br>

17. What does KMS use to encrypt objects stored on your AWS account?
    - Customer master key
    <br>
    
    > A client‐side master key is used to encrypt objects before they reach AWS (specifically S3). There are no keys commonly known as either SSH or KMS master keys.

<br>

18. Which of the following standards governs AWS‐based applications processing credit card transactions?
    - PCI DSS
    <br>
    
    > SSE‐KMS are KMS‐managed server‐side keys. FedRAMP is the U.S. government’s Federal Risk and Authorization Management Program (within which transaction data protection plays only a relatively minor role). ARPA is the Australian Prudential Regulation Authority.

<br>

19. What is the purpose of the Service Organization Controls (SOC) reports found on AWS Artifact?
    - They attest to AWS infrastructure compliance with data accountability standards like Sarbanes–Oxley.
    <br>
    
    > SOC isn’t primarily about guidance or risk assessment, and it’s definitely not a guarantee of the state of your own deployments. SOC reports are reports of audits on AWS infrastructure that you can use as part of your own reporting requirements.

<br>

20. What role can the documents provided by AWS Artifact play in your application planning? (Choose two.)
    - They can help you confirm that your deployment infrastructure is compliant with regulatory standards.
    - They can provide insight into various regulatory and industry standards that represent best practices.
    <br>
    
    > AWS Artifact documents are about AWS infrastructure compliance with external standards. They tangentially can also provide insight into best practices. They do not represent internal AWS design or policies.
    
<br>





<br><br><br>



## 

1. 
    - 
    <br>
    
    > 

<br>

2. 
    - 
    <br>
    
    > 

<br>

3. 
    - 
    <br>
    
    > 

<br>

4. 
    - 
    <br>
    
    > 

<br>

5. 
    - 
    <br>
    
    > 

<br>

6. 
    - 
    <br>
    
    > 

<br>

7. 
    - 
    <br>
    
    > 

<br>

8. 
    - 
    <br>
    
    > 

<br>

9. 
    - 
    <br>
    
    > 

<br>

10. 
    - 
    <br>
    
    > 

<br>

11. 
    - 
    <br>
    
    > 

<br>

12. 
    - 
    <br>
    
    > 

<br>

13. 
    - 
    <br>
    
    > 

<br>

14. 
    - 
    <br>
    
    > 

<br>

15. 
    - 
    <br>
    
    > 

<br>

16. 
    - 
    <br>
    
    > 

<br>

17. 
    - 
    <br>
    
    > 

<br>

18. 
    - 
    <br>
    
    > 

<br>

19. 
    - 
    <br>
    
    > 

<br>

20. 
    - 
    <br>
    
    > 
    
<br>

