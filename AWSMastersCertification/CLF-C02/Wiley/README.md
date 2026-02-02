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



## Chapter 6: Working with Your AWS Resources

1. Which of the following credentials can you use to log into the AWS Management Console?
    - Identity and Access Management (IAM) username
    <br>
    
    > You can sign in as the root user or as an IAM user. Although you need to specify the account alias or account ID to log in as an IAM user, those are not credentials. You can’t log in to the console using an access key ID.

<br>

2. How long will your session with the AWS Management Console remain active?
    - 12 hours
    <br>
    
    > Once you’re logged in, your session will remain active for 12 hours. After that, it will expire and log you out to protect your account.

<br>

3. When looking at the EC2 service console in the AWS Management Console while logged in as the root user, you notice all of your instances are missing. What could be the reason?
    - You’ve selected the wrong region in the navigation bar.
    <br>
    
    > If a resource that should be visible appears to be missing, you may have the wrong region selected. Since you’re logged in as the root, you have view access to all resources in your account. You don’t need an access key to use the console. You can’t select an availability zone in the navigation bar.

<br>

4. Which of the following is true regarding a resource tag?
    - It must have a key.
    <br>
    
    > Each resource tag you create must have a key, but a value is optional. Tags don’t have to be unique within an account, and they are case‐sensitive.

<br>

5. Which of the following is required to use the AWS Command‐Line Interface (CLI)?
    - A secret key
    <br>
    
    > The AWS CLI requires an access key ID and secret key. You can use those of an IAM user or the root user. Outbound network access to TCP port 443 is required, not port 80. Linux is also not required, although you can use the AWS CLI with Linux, macOS, or Windows. You also can use the AWS Console Mobile Application with Android or iOS devices.

<br>

6. Which of the following are options for installing the AWS CLI on Windows 10? (Choose two.)
    - The MSI installer
    - Using Python and pip
    <br>
    
    > You can use Python and the pip package manager or (with the exception of Windows Server 2008) the MSI installer to install the AWS CLI on Windows. AWS SDKs don’t include the AWS CLI. Yum and Aptitude are package managers for Linux only.

<br>

7. After installing the AWS Command‐Line Interface, what should you do before using it to securely manage your AWS resources?
    - Issue the aws configure command.
    <br>
    
    > The aws configure command walks you through setting up the AWS CLI to specify the default region you want to use as well as your access key ID and secret key. The aws --version command displays the version of the AWS CLI installed, but running this command isn’t necessary to use the AWS CLI to manage your resources. Rebooting is also not necessary. Using your root user to manage your AWS resources is insecure, so there’s no need to generate a new access key ID for your root user.

<br>

8. Which output format does the AWS CLI support?
    - JavaScript Object Notation (JSON)
    <br>
    
    > The AWS CLI can display output in JSON, text, or table formats. It doesn’t support CSV or TSV.

<br>

9. Which of the following programming languages are AWS software development kits available for? (Choose three.)
    - JavaScript
    - Java
    - PHP
    <br>
    
    > AWS offers SDKs for JavaScript, Java, and PHP. There are no SDKs for Fortran. JSON is a format for representing data, not a programming language.
<br>

10. Which of the following software development kits (SDKs) enable developers to write mobile applications that run on both Apple and Android devices? (Choose two.)
    - AWS Mobile SDK for Unity
    - AWS Mobile SDK for .NET and Xamarin
    <br>
    
    > The AWS Mobile SDK for Unity and the AWS Mobile SDK for .NET and Xamarin let you create mobile applications for both Android and Apple iOS devices. The AWS SDK for Go doesn’t enable development of mobile applications for these devices. The AWS Mobile SDK for iOS supports development of applications for Apple iOS devices but not Android.

<br>

11. Which of the following programming languages are AWS Internet of Things (IoT) device software development kits available for? (Choose two.)
    - JavaScript
    - C++
    <br>
    
    > AWS IoT device SDKs are available for C++, Python, Java, JavaScript, and Embedded C. There isn’t one available for Ruby or Swift.

<br>

12. What’s the difference between the AWS Command‐Line Interface (CLI) and the AWS software development kits (SDK)? (Choose two.)
    - The AWS SDKs allow you to use popular programming languages to write applications that interact with AWS services.
    - The AWS CLI allows you to interact with AWS services from a terminal.
    <br>
    
    > The AWS CLI is a program that runs on Linux, macOS, or Windows and allows you to interact with AWS services from a terminal. The AWS SDKs let you use your favorite programming language to write applications that interact with AWS services.

<br>

13. Which of the following CloudWatch features store performance data from AWS services?
    - Metrics
    <br>
    
    > CloudWatch metrics store performance data from AWS services. Logs store text‐based logs from applications and AWS services. Events are actions that occur against your AWS resources. Alarms monitor metrics. Metric filters extract metric information from logs.

<br>

14.  For which of the following scenarios can you create a CloudWatch alarm to send a notification?
    - A metric that exceeds a given threshold
    <br>
    
    > A CloudWatch alarm monitors a metric and triggers when that metric exceeds a specified threshold. It will not trigger if the metric doesn’t change. Termination of an EC2 instance is an event, and you can’t create a CloudWatch alarm to trigger based on an event. You also can’t create an alarm to trigger based on the presence of an IP address in a web server log. But you could create a metric filter to look for a specific IP address in the log and increment a custom metric when that IP address appears in the log.

<br>

15. Which of the following Simple Notification Service (SNS) protocols can you use to send a notification? (Choose two.)
    - Short Message Service (SMS) text message
    - Simple Queue Service (SQS)
    <br>
    
    > SNS supports the SMS and SQS protocols for sending notifications. You can’t send a notification to a CloudWatch event. There is no such thing as a mobile pull notification.

<br>

16. Which of the following are true regarding CloudWatch Events? (Choose two.)
    - It can send an SNS notification when an IAM user logs in to the AWS Management Console.
    - It can shut down an EC2 instance at a specific time.
    <br>
    
    > CloudWatch Events monitors events that cause changes in your AWS resources as well as AWS Management Console sign‐in events. In response to an event, CloudWatch Events can take an action, including sending an SNS notification or rebooting an EC2 instance. CloudWatch Events can also perform actions on a schedule. It doesn’t monitor logs or metrics.

<br>

17. Which of the following trigger an API action? (Choose two.)
    - Viewing an S3 bucket from the AWS Management Console
    - Listing IAM users from the AWS CLI
    <br>
    
    > Viewing an AWS resource triggers an API action regardless of whether it’s done using the AWS Management Console or the AWS CLI. Configuring the AWS CLI doesn’t trigger any API actions. Logging into the AWS Management Console doesn’t trigger an API action.

<br>

18. What’s the most cost‐effective way to view and search only the last 60 days of management API events on your AWS account?
    - Use CloudTrail event history.
    <br>
    
    > The CloudTrail event history log stores the last 90 days of management events for each region. Creating a trail is overkill and not as cost‐effective since it would involve storing logs in an S3 bucket. Streaming CloudTrail logs to CloudWatch would r

<br>

19. You want to log every object downloaded from an S3 bucket in a specific region. You want to retain these logs indefinitely and search them easily. What’s the most cost‐effective way to do this? (Choose two.)
    - Stream CloudTrail logs to CloudWatch Logs.
    - Create a trail to log S3 data events.
    <br>
    
    > Creating a trail in the region where the bucket exists will generate CloudTrail logs, which you can then stream to CloudWatch for viewing and searching. CloudTrail event history doesn’t log data events. CloudTrail logs global service events by default, but S3 data events are not included.

<br>

20. What is a benefit of using CloudTrail log file integrity validation?
    - It lets you assert that no CloudTrail log files have been deleted from S3.
    <br>
    
    > Log file integrity validation uses cryptographic hashing to help you assert that no CloudTrail log files have been deleted from S3. It doesn’t prevent tampering or deletion and can’t tell you how a file has been tampered with. Log file integrity validation has nothing to do with CloudWatch.
    
<br>

21. Which of the following Cost Explorer report types can show you the monthly costs for your reserved EC2 instances?
    - Costs and usage reports
    <br>
    
    > The costs and usage reports show you your monthly spend by service. The reserved instances reports and reserved instance recommendations don’t show actual monthly costs.

<br>

22. Which of the following services allow you to purchase reserved instances to save money?
    - Amazon Relational Database Service (RDS)
    <br>
    
    > RDS lets you purchase reserved instances to save money. Lambda, S3, and Fargate don’t use instances.

<br>

23.  Which Cost Explorer report shows the amount of money you’ve saved using reserved instances?
    - Reserved Instances Utilization
    <br>
    
    > The Reserved Instances Utilization report shows how much you have saved using reserved instances. The Reserved Instances Utilization report shows how much you could have potentially saved had you purchased reserved instances. The daily costs and monthly EC2 running hours costs and usage reports don’t know how much you’ve saved using reserved instances.

<br>

24. You’ve been running several Elasticsearch instances continuously for the past three months. You check the reserved instance recommendations in Cost Explorer but see no recommendations. What could be a reason for this?
    - Your instances are already covered by reservations.
    <br>
    
    > Cost Explorer will make reservation recommendations for EC2, RDS, ElastiCache, Redshift, and Elasticsearch instances. You need to select the service you want it to analyze for recommendations. But Cost Explorer will not make recommendations for instances that are already covered by reservations. Because your Elasticsearch instances have been running continuously for at least the past seven days, that usage would be analyzed.



<br><br><br>



## Chapter 7: The Core Compute Services

1. What is the function of an EC2 AMI?
    - To serve as a source image from which an instance’s primary storage volume is built
    <br>
    
    > An instance’s hardware profile is defined by the instance type. High‐volume (or low‐volume) data processing operations and data streams can be handled using any storage volume or on any instance (although some may be better optimized than others).

<br>

2. Where can you find a wide range of verified AMIs from both AWS and third‐party vendors?
    - AWS Marketplace
    <br>
    
    > The Quick Start includes only the few dozen most popular AMIs. The Community tab includes thousands of publicly available AMIs—whether verified or not. The My AMIs tab only includes AMIs created from your account.

<br>

3. Which of the following could be included in an EC2 AMI? (Choose two.)
    - A software application stack
    - An operating system
    <br>
    
    > AMIs can be created that provide both a base operating system and a preinstalled application. They would not, however, include any networking or hardware profile information—which are largely determined by the instance type.

<br>

4. Which of the following are EC2 instance type families? (Choose two.)
    - Compute optimized
    - Accelerated computing
    <br>
    
    > c5d.18xlarge and t2.micro are the names of EC2 instance types, not instance type families.

<br>

5. When describing EC2 instance types, what is the role played by the vCPU metric?
    - vCPUs represent an instance type’s compute power compared to the number of processors on a physical machine.
    <br>
    
    > A virtual central processing unit (vCPU) is a metric that roughly measures an instance type’s compute power in terms of the number of processors on a physical server. It has nothing to do with resilience to high traffic, system memory, or the underlying AMI.

<br>

6. Which of the following describes an EC2 dedicated instance?
    - An EC2 instance running on a physical host reserved for the exclusive use of a single AWS account
    <br>
    
    > An EC2 instance that runs on a physical host reserved for and controlled by a single AWS account is called a dedicated host. A dedicated host is not an AMI, nor is it an instance type.

<br>

7. Which of the following describes an EBS volume?
    - A virtualized partition of a physical storage drive that’s not directly connected to the EC2 instance it’s associated with
    <br>
    
    > A virtualized partition of a physical storage drive that is directly connected to the EC2 instance it’s associated with is known as an instance store volume. A software stack archive packaged to make it easy to copy and deploy to an EC2 instance describes an EC2 AMI. It’s possible to encrypt EBS volumes, but encryption doesn’t define them.

<br>

8. Why might you want to use an instance store volume with your EC2 instance rather than a volume from the more common EBS service? (Choose two.)
    - Instance store volumes provide faster data read/write performance.
    - Instance store volumes are connected directly to your EC2 instance.
    <br>
    
    > Instance store volumes cannot be encrypted, nor will their data survive an instance shutdown. Those are features of EBS volumes.

<br>

9. Your web application experiences periodic spikes in demand that require the provisioning of extra instances. Which of the following pricing models would make the most sense for those extra instances?
    - On‐demand
    <br>
    
    > Spot instances are unreliable for this sort of usage since they can be shut down unexpectedly. Reserved instances make economic sense where they’ll be used 24/7 over long stretches of time. “Dedicated” isn’t a pricing model.

<br>

10. Your web application experiences periodic spikes in demand that require the provisioning of extra instances. Which of the following pricing models would make the most sense for the “base” instances that will run constantly?
    - Reserved
    <br>
    
    > Reserved instances will work here because your “base” instances will need to run 24/7 over the long term. Spot and spot fleet instances are unreliable for this sort of usage since they can be shut down unexpectedly. On‐demand instances will incur unnecessarily high costs over such a long period.

<br>

11. Which of the following best describes what happens when you purchase an EC2 reserved instance?
    - Charges for any instances you run matching the reserved instance type will be covered by the reservation.
    <br>
    
    > There’s no real need for guaranteed available capacity since it’s extremely rare for AWS to run out. You choose how you’ll pay for a reserved instance. All Upfront, Partial Upfront, and No Upfront are available options, and there is no automatic billing. An instance would never be launched automatically in this context.

<br>

12. Which of the following use cases are good candidates for spot instances? (Choose two.)
    - Big data processing workloads
    - Continuous integration development environments
    <br>
    
    > Because spot instances can be shut down, they’re not recommended for applications that provide any kind of always‐on service.

<br>

13. Which AWS services simplify the process of bringing web applications to deployment? (Choose two.)
    - Elastic Beanstalk
    - Lightsail
    <br>
    
    > Elastic Block Store provides storage volumes for Lightsail and Beanstalk (and for EC2, for that matter). Elastic Compute Cloud (EC2) provides application deployment, but no one ever accused it of being simple.

<br>

14. Which of the following services bills at a flat rate regardless of how it’s consumed?
    - Lightsail
    <br>
    
    > Beanstalk, EC2 (unreserved instances), and RDS all bill according to actual usage.

<br>

15. Which of these stacks are available from Lightsail blueprints? (Choose two.)
    - Gitlab
    - LAMP
    <br>
    
    > Ubuntu is an OS, not a stack. WordPress is an application, not an OS.

<br>

16. Which of these AWS services use primarily EC2 resources under the hood? (Choose two.)
    - Lightsail
    - Elastic Beanstalk
    <br>
    
    > Elastic Block Store is, for practical purposes, an EC2 resource. RDS is largely built on its own infrastructure.

<br>

17. Which of the following AWS services are designed to let you deploy Docker containers? (Choose two.)
    - Elastic Container Service
    - Elastic Beanstalk
    <br>
    
    > While you could, in theory at least, manually install Docker Engine on either a Lightsail or an EC2 instance, that’s not their primary function.

<br>

18. Which of the following directly use container technologies? (Choose two.)
    - Docker
    - Kubernetes
    <br>
    
    > Both Lambda and Lightsail are compute services that—while they might possibly make use of containers under the hood—are not themselves container technologies.

<br>

19. What role can the Python programming language play in AWS Lambda?
    - It can be set as the runtime environment for a function.
    <br>
    
    > Python is, indeed, a valid choice for a function’s runtime environment. There is no one “primary” language for Lambda API calls.

<br>

20. What is the maximum time a Lambda function may run before timing out?
    - 15 minutes
    <br>
    
    > While the maximum time was, at one point, 5 minutes, that’s been changed to 15.
    
<br>



<br><br><br>



## Chapter 8: The Core Storage Services

1. When you’re trying to create an S3 bucket named documents, AWS informs you that the bucket name is already in use. What should you do in order to create a bucket?
    - Use a globally unique bucket name.
    <br>
    
    > Bucket names must be globally unique across AWS, regardless of region. The length of the bucket name isn’t an issue since it’s between 3 and 63 characters long. Storage classes are configured on a per‐object basis and have no impact on bucket naming.

<br>

2. Which S3 storage classes are most cost‐effective for infrequently accessed data that can’t be easily replaced? (Choose two.)
    - STANDARD_IA
    - GLACIER
    <br>
    
    > STANDARD_IA and GLACIER storage classes offer the highest levels of redundancy and are replicated across at least three availability zones. Due to their low level of availability (99.9 and 99.5 percent, respectively), they’re the most cost‐effective for infrequently accessed data. ONEZONE_IA stores objects in only one availability zone, so the loss of that zone could result in the loss of all objects. The STANDARD and INTELLIGENT_TIERING classes provide the highest levels of durability and cross‐zone replication but are also the least cost‐effective for this use case.

<br>

3. What are the major differences between Simple Storage Service (S3) and Elastic Block Store (EBS)? (Choose two.)
    - EBS stores volumes.
    - S3 stores objects.
    <br>
    
    > S3 is an object storage service, whereas EBS is a block storage service that stores volumes. EBS snapshots are stored in S3. S3 doesn’t store volumes, and EBS doesn’t store objects.

<br>

4. Which tasks can S3 object life‐cycle configurations perform automatically? (Choose three.)
    - Deleting old object versions
    - Moving objects to Glacier
    - Deleting old objects
    <br>
    
    > Object life‐cycle configurations can perform transition or expiration actions based on an object’s age. Transition actions can move objects between storage classes, such as between STANDARD and GLACIER. Expiration actions can delete objects and object versions. Object life‐cycle configurations can’t delete buckets or move objects to an EBS volume.

<br>

5. What methods can be used to grant anonymous access to an object in S3? (Choose two.)
    - Bucket policies
    - Access control lists
    <br>
    
    > You can use bucket policies or access control lists (ACLs) to grant anonymous users access to an object in S3. You can’t use user policies to do this, although you can use them to grant IAM principals access to objects. Security groups control access to resources in a virtual private cloud (VPC) and aren’t used to control access to objects in S3.

<br>

6. Your budget‐conscious organization has a 5 TB database file it needs to retain off‐site for at least 5 years. In the event the organization needs to access the database, it must be accessible within 8 hours. Which cloud storage options should you recommend, and why? (Choose two.)
    - S3 Glacier.
    - Glacier is the most cost‐effective.
    <br>
    
    > Both S3 and Glacier are designed for durable, long‐term storage and offer the same level of durability. Data stored in Glacier can be reliably retrieved within 8 hours using the Expedited or Standard retrieval options. Data stored in S3 can be retrieved even faster than Glacier. S3 can store objects up to 5 TB in size, and Glacier can store archives up to 40 TB. Both S3 or Glacier will meet the given requirements, but Glacier is the more cost‐effective solution.

<br>

7. Which of the following actions can you perform from the S3 Glacier service console?
    - Create a vault.
    <br>
    
    > You can create or delete vaults from the Glacier service console. You can’t upload, download, or delete archives. To perform archive actions, you must use the AWS Command‐Line Interface, an AWS SDK, or a third‐party program. Glacier doesn’t use buckets.

<br>

8. Which Glacier retrieval option generally takes 3 to 5 hours to complete?
    - Standard
    <br>
    
    > The Standard retrieval option typically takes 3 to 5 hours to complete. Expedited takes 1 to 5 minutes, and Bulk takes 5 to 12 hours. There is no Provisioned retrieval option, but you can purchase provisioned capacity to ensure Expedited retrievals complete in a timely manner.

<br>

9. What’s the minimum size for a Glacier archive?
    - 1 byte
    <br>
    
    > A Glacier archive can be as small as 1 byte and as large as 40 TB. You can’t have a zero‐byte archive.

<br>

10. Which types of AWS Storage Gateway let you connect your servers to block storage using the iSCSI protocol? (Choose two.)
    - Tape gateway
    - File gateway
    <br>
    
    > The tape gateway and volume gateway types let you connect to iSCSI storage. The file gateway supports NFS. There’s no such thing as a cached gateway.

<br>

11. Where does AWS Storage Gateway primarily store data?
    - S3 buckets
    <br>
    
    > All AWS Storage Gateway types—file, volume, and tape gateways—primarily store data in S3 buckets. From there, data can be stored in Glacier or EBS snapshots, which can be instantiated as EBS volumes.

<br>

12. You need an easy way to transfer files from a server in your data center to S3 without having to install any third‐party software. Which of the following services and storage protocols could you use? (Choose four.)
    - AWS Storage Gateway—file gateway
    - iSCSI
    - SMB
    - AWS Storage Gateway—volume gateway
    <br>
    
    > The AWS Storage Gateway allows transferring files from on‐premises servers to S3 using industry‐standard storage protocols. The AWS Storage Gateway functioning as a file gateway supports the SMB and NFS protocols. As a volume gateway, it supports the iSCSI protocol. AWS Snowball and the AWS CLI also provide ways to transfer data to S3, but using them requires installing third‐party software.

<br>

13. Which of the following are true regarding the AWS Storage Gateway volume gateway configuration? (Choose three.)
    - Stored volumes asynchronously back up data to S3 as EBS snapshots.
    - Cached volumes locally store only a frequently used subset of data.
    - Cached volumes can be up to 32 TB in size.
    <br>
    
    > The volume gateway type offers two configurations: stored volumes and cached volumes. Stored volumes store all data locally and asynchronously back up that data to S3 as EBS snapshots. Stored volumes can be up to 16 TB in size. In contrast, cached volumes locally store only a frequently used subset of data but do not asynchronously back up the data to S3 as EBS snapshots. Cached volumes can be up to 32 TB in size.

<br>

14. What’s the most data you can store on a single Snowball device?
    - 72 TB
    <br>
    
    > The 80 TB Snowball device offers 72 TB of usable storage and is the largest available. The 50 TB Snowball offers 42 TB of usable space.

<br>

15. Which of the following are security features of AWS Snowball? (Choose two.)
    - It enforces encryption at rest.
    - It uses a Trusted Platform Module (TPM) chip.
    <br>
    
    > AWS Snowball enforces encryption at rest and in transit. It also uses a TPM chip to detect unauthorized changes to the hardware or software. Snowball doesn’t use NFS encryption, and it doesn’t have tamper‐resistant network ports.

<br>

16. Which of the following might AWS do after receiving a damaged Snowball device from a customer?
    - Securely erase the customer’s data from the device.
    <br>
    
    > If AWS detects any signs of tampering or damage, it will not replace the TPM chip or transfer customer data from the device. Instead, AWS will securely erase it.

<br>

17. Which of the following can you use to transfer data to AWS Snowball from a Windows machine without writing any code?
    - The Snowball Client
    <br>
    
    > The Snowball Client lets you transfer files to or from a Snowball using a machine running Windows, Linux, or macOS. It requires no coding knowledge, but the S3 SDK Adapter for Snowball does. Snowball doesn’t support the NFS, iSCSI, or SMB storage protocols.

<br>

18. How do the AWS Snowball and Snowball Edge devices differ? (Choose two.)
    - Snowball devices can be clustered together for storage.
    - Snowball Edge can run EC2 instances.
    <br>
    
    > Snowball Edge offers compute power to run EC2 instances and supports copying files using the NFSv3 and NFSv4 protocols. Snowball devices can’t be clustered and don’t have a QFSP+ port.

<br>

19. Which of the following Snowball Edge device options is the best for running machine learning applications?
    - Compute Optimized with GPU
    <br>
    
    > The Snowball Edge Compute Optimized with GPU option is optimized for machine learning and high‐performance computing applications. Although the Compute Optimized and Storage Optimized options could work, they aren’t the best choices. There’s no Network Optimized option.

<br>

20. Which of the following hardware devices offers a network interface speed that supports up to 100 Gbps?
    - Snowball Edge with the Compute Optimized configuration
    <br>
    
    > Snowball Edge with the Compute Optimized configuration includes a QSFP+ network interface that supports up to 100 Gbps. The Storage Optimized configuration has a QSFP+ port that supports only up to 40 Gbps. The 80 TB Snowball supports only up to 10 Gbps. A storage gateway is a virtual machine, not a hardware device.
    
<br>



<br><br><br>



## Chapter 9: The Core Database Services

1. Which type of database stores data in columns and rows?
    - Relational
    <br>
    
    > A relational database stores data in columns called attributes and rows called records. Nonrelational databases—including key‐value stores and document stores—store data in collections or items but don’t use columns or rows.

<br>

2. Which of the following Structured Query Language (SQL) statements can you use to write data to a relational database table?
    - `INSERT`
    <br>
    
    > The SQL INSERT statement can be used to add data to a relational database. The QUERY command is used to read data. CREATE can be used to create a table but not add data to it. WRITE is not a valid SQL command.

<br>

3. Which of the following statements is true regarding nonrelational databases?
    - You don’t have to define all the types of data that a table can store before adding data to it.

    <br>
    
    > A nonrelational database is schemaless, meaning that there’s no need to predefine all the types of data you’ll store in a table. This doesn’t preclude you from storing data with a fixed structure, as nonrelational databases can store virtually any kind of data. A primary key is required to uniquely identify each item in a table. Creating multiple tables is allowed, but most applications that use nonrelational databases use only one table.

<br>

4. What is a no‐SQL database?
    - A schemaless nonrelational database
    <br>
    
    > A no‐SQL database is another term for a nonrelational database. By definition, nonrelational databases are schemaless and must use primary keys. There’s no such thing as a schemaless relational database. No‐SQL is never used to describe a relational database of any kind.

<br>

5. What do new Relational Database Service (RDS) instances use for database storage?
    - Elastic Block Store (EBS) volumes
    <br>
    
    > RDS instances use EBS volumes for storage. They no longer can use magnetic storage. Instance volumes are for temporary, not database storage. You can take a snapshot of a database instance and restore it to a new instance with a new EBS volume, but an RDS instance can’t use a snapshot directly for database storage.

<br>

6. Which of the following are database engine options for Amazon Relational Database Service (RDS)? (Choose two.)
    - PostgreSQL
    - Amazon Aurora
    <br>
    
    > PostgreSQL and Amazon Aurora are options for RDS database engines. IBM dBase and the nonrelational databases DynamoDB and Redis are not available as RDS database engines.

<br>

7. What two databases is Amazon Aurora compatible with? (Choose two.)
    - MySQL
    - PostgreSQL
    <br>
    
    > Aurora is Amazon’s proprietary database engine that works with existing PostgreSQL and MySQL databases. Aurora doesn’t support MariaDB, Oracle, or Microsoft SQL Server.

<br>

8. Which of the following features of Relational Database Service (RDS) can prevent data loss in the event of an availability zone failure? (Choose two.)
    - Multi‐AZ
    - Snapshots
    <br>
    
    > Multi‐AZ and snapshots can protect your data in the event of an availability zone failure. Read replicas don’t use synchronous replication and may lose some data. IOPS is a measurement of storage throughput. Vertical scaling refers to changing the instance class but has nothing to do with preventing data loss.

<br>

9. Which RDS database engine offers automatically expanding database storage up to 64 TB?
    - Amazon Aurora
    <br>
    
    > Amazon Aurora uses a shared storage volume that automatically expands up to 64 TB. The Microsoft SQL Server and Oracle database engines don’t offer this. Amazon Athena is not a database engine.

<br>

10. Which of the following Relational Database Service (RDS) features can help you achieve a monthly availability of 99.95 percent?
    - Multi‐AZ
    <br>
    
    > Multi‐AZ lets your database withstand the failure of an RDS instance, even if the failure is due to an entire availability zone failing. Read replicas are a way to achieve horizontal scaling to improve performance of database reads but don’t increase availability. Point‐in‐time recovery allows you to restore a database up to a point in time but doesn’t increase availability.

<br>

11. What is true regarding a DynamoDB partition? (Choose two.)
    - It’s backed by solid‐state drives.
    - It’s replicated across multiple availability zones.
    <br>
    
    > A partition is an allocation of storage backed by solid‐state drives and replicated across multiple availability zones. Tables are stored across partitions, but tables do not contain partitions. A primary key, not a partition, is used to uniquely identify an item in a table.

<br>

12. What is the minimum monthly availability for DynamoDB in a single region?
    - 99.99 percent
    <br>
    
    > The minimum monthly availability for DynamoDB is 99.99 percent in a single region. It’s not 99.95 percent, 99.9 percent, or 99.0 percent.

<br>

13. Which of the following statements is true regarding a DynamoDB table?
    - Items in a table don’t have to have all the same attributes.
    <br>
    
    > Items in a DynamoDB table can have different attributes. For example, one item can have five attributes, while another has only one. A table can store items containing multiple data types. There’s no need to predefine the number of items in a table. Items in a table can’t have duplicate primary keys.

<br>

14. Which configuration parameters can you adjust to improve write performance against a DynamoDB table? (Choose two.)
    - Increase write capacity units (WCU).
    - Enable DynamoDB Auto Scaling.
    <br>
    
    > Increasing WCU or enabling Auto Scaling will improve write performance against a table. Increasing or decreasing RCU won’t improve performance for writes. Decreasing WCU will make write performance worse.

<br>

15. Which DynamoDB operation is the most read‐intensive?
    - Scan
    <br>
    
    > A scan requires reading every partition on which the table is stored. A query occurs against the primary key, enabling DynamoDB to read only the partition where the matching item is stored. Writing and updating an item are not read‐intensive operations.

<br>

16. Which of the following would be appropriate to use for a primary key in a DynamoDB table that stores a customer list?
    - A randomly generated customer ID number
    <br>
    
    > A primary key must be unique within a table. A full name, phone number, or city may not be unique, as some customers may share the same name or phone number. A randomly generated customer ID number would be unique and appropriate for use as a primary key.

<br>

17. Which type of Redshift node uses magnetic storage?
    - Dense compute
    <br>
    
    > Dense compute nodes use magnetic disks. Dense storage nodes use SSDs. There are no such nodes as dense memory or cost‐optimized.

<br>

18. Which Redshift feature can analyze structured data stored in S3?
    - Redshift Spectrum
    <br>
    
    > Redshift Spectrum can analyze structured data stored in S3. There is no such service as Redshift S3. Amazon Athena can analyze structured data in S3, but it’s not a feature of Redshift. Amazon RDS doesn’t analyze data stored in S3.

<br>

19. What is the term for a relational database that stores large amounts of structured data from a variety of sources for reporting and analysis?
    - Data warehouse
    <br>
    
    > A data warehouse stores large amounts of structured data from other relational databases. It’s not called a data storehouse or a report cluster. Dense storage node is a type of Redshift compute node.

<br>

20. What’s the maximum amount of data you can store in a Redshift cluster when using dense storage nodes?
    - 2 PB
    <br>
    
    > Dense storage nodes can be used in a cluster to store up to 2 PB of data. Dense compute nodes can be used to store up to 326 TB of data.
    
<br>



<br><br><br>



## Chapter 10: The Core Networking Services

1. Which of the following are true of a default VPC? (Choose two.)
    - 
    <br>
    
    > 

<br>

2. Which of the following is a valid CIDR for a VPC or subnet?
    - 
    <br>
    
    > 

<br>

3. Which of the following are true regarding subnets? (Choose two.)
    - 
    - 
    <br>
    
    > 

<br>

4. Which of the following is true of a new security group?
    - 
    <br>
    
    > 

<br>

5. What’s the difference between a security group and a network access control list (NACL)? (Choose two.)
    - 
    - 
    <br>
    
    > 

<br>

6. Which of the following is true of a VPC peering connection?
    - 
    <br>
    
    > 

<br>

7. What are two differences between a virtual private network (VPN) connection and a Direct Connect connection? (Choose two.)
    - 
    - 
    <br>
    
    > 

<br>

8. Which of the following are true about registering a domain name with Route 53? (Choose two.)
    - 
    - 
    <br>
    
    > 

<br>

9. Which of the following Route 53 routing policies can return a set of randomly ordered values?
    - 
    <br>
    
    > 

<br>

10. Which of the following Route 53 routing policies doesn’t use health checks?
    - 
    <br>
    
    > 

<br>

11. Which of the following types of Route 53 health checks works by making a test connection to a TCP port?
    - 
    <br>
    
    > 

<br>

12. You have two EC2 instances hosting a web application. You want to distribute 20 percent of traffic to one instance and 80 percent to the other. Which of the following Route 53 routing policies should you use?
    - 
    <br>
    
    > 

<br>

13. Resources in a VPC need to be able to resolve internal IP addresses for other resources in the VPC. No one outside of the VPC should be able to resolve these addresses. Which of the following Route 53 resources can help you achieve this?
    - 
    <br>
    
    > 

<br>

14. You want to provide private name resolution for two VPCs using the domain name company.pri. How many private hosted zones do you need to create?
    - 
    <br>
    
    > 

<br>

15. You want to provide private name resolution for two VPCs using the domain name company.pri. How many private hosted zones do you need to create?
    - 
    <br>
    
    > 

<br>

16. From where does CloudFront retrieve content to store for caching?
    - 
    <br>
    
    > 

<br>

17. Which CloudFront distribution type requires you to provide a media player?
    - 
    <br>
    
    > 

<br>

18. You need to deliver content to users in the United States and Canada. Which of the following edge location options will be the most cost‐effective for your CloudFront distribution?
    - 
    <br>
    
    > 

<br>

19. Approximately how many different CloudFront edge locations are there?
    - 
    <br>
    
    > 

<br>

20. Which of the following are valid origins for a CloudFront distribution? (Choose two.)
    - 
    - 
    <br>
    
    > 
    
<br>



<br><br><br>



## Chapter 11: Automating Your AWS Workloads

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



<br><br><br>



## Chapter 12: Common Use-case Scenarios

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