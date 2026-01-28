# AWS Certified SysOps Administrator Study Guide: Associate SOA-C02 

## Chapter 1: AWS Fundamentals
1. Which of the following injects an additional piece of information into the authentication process?
   - **Implementing MFA**

   > Implementing multifactor authentication (MFA) injects an additional piece of information into the authentication process. MFA can be implemented using software or hardware tools and will add protection to your root account and users that goes beyond simple username and password. Use MFA for all accounts and users if possible.
   
<br>

2. Which of the following are required to implement CLI programmatic access? (Choose two.)
   - **Defining a secret access key**
   - **Defining an access key ID**

   > Configuring programmatic access for the CLI will require four pieces of information: access key ID, secret access key, default region name, and default output format.
   
<br>

3. Which of the following are best practices for AWS account protection? (Choose three.)
   - **Defining an account‐level password**
   - **Implementing MFA for all users**
   - **Enabling AWS Security Hub**

   > Defining an account‐level password, enabling MFA for all users, and enabling AWS Security Hub are fundamental to protecting your AWS account. Using CloudShell, Session Manager, and/or service‐linked roles provides a form of security and protection but are not as fundamental.
   
<br>

4. Which of the following is a best practice for cross–AWS account access?
   - **Using IAM roles**

   > IAM roles are essential to provide cross‐account access as well as enabling AWS services to interact with each other. Learn and understand roles and the mechanics of role policy creation to maintain a strong security posture.
   
<br>

5. Which of the following saves you from provisioning keys to operate AWS services in a programmatic way?
   - **AWS CloudShell**

   > AWS CloudShell provides a mechanism for operators to use the AWS CLI without having to provision access keys in a local machine. This adds a new layer of security as it saves time and effort in executing one‐line and simple administrative CLI commands.
   
<br>

6. Which of the following saves you from configuring SSH or RDP resources to operate EC2 instances?
   - **Session Manager**

   > Systems Manager Session Manager provides you with a way to connect to Amazon EC2 instances that does not require the configuration of SSH or RDP resources to operate a particular instance. This is a significantly more secure way to manage EC2 instances.
   
<br>

7. Which of the following represents the URL to log into the AWS Management Console as an IAM user? (Choose two.)

   > For console access, IAM users need to use the URL as follows: https://accountID.signin.aws.amazon.com/console or https://account_alias.signin.aws.amazon.com/console.
   
<br>

8. Which of the following brings AWS services to the edge of a 5G network?
   - **Wavelength zone**

   > Wavelength zones bring AWS services to the edge of a 5G network, reducing the latency to connect to your application from a mobile device. Application traffic can reach application servers running in wavelength zones without leaving the mobile provider’s network. They provide single‐digit millisecond latencies to mobile devices by reducing the extra network hops that may be needed without such a resource.
   
<br>

9. Which of the following is an extension of a region where you can run low‐latency applications using AWS services?
   - **Local zone**

   > A local zone is an extension of a region where you can run low‐latency applications using AWS services in proximity to end users. Local zones deliver single‐digit millisecond latencies to users for use cases like media, entertainment, and real‐time gaming, among others.
   
<br>

10. Which of the following bring AWS services, infrastructure, and operating models to your datacenter, co‐location space, or physical facility?
   - **Outpost**

   > Outpost is designed to support applications that need to remain in your datacenter due to low‐latency requirements or local data processing needs. It brings AWS services, infrastructure, and operating models to your datacenter, co‐location space, or physical facility.
   
<br>

11. Which of the following is the resource used by AWS to deliver reliable and low‐latency performance globally?
   - **Edge location**

   > Edge locations are the resource used by AWS to deliver reliable and low‐latency performance globally. Edge locations are how AWS attains high performance in countries and territories where a region does not exist. The global edge network connects thousands of Tiers 1, 2, and 3 telecom carriers globally and delivers hundreds of terabits of capacity. Edge locations are connected with regions using the AWS backbone, which is a fully redundant, multiple 100 Gigabit Ethernet (GbE) parallel fiber infrastructure. The AWS edge network consists of over 400 edge locations.
   
<br>

12. Which of the following represents a logical group of AWS datacenters?
   - **Availability zone**

   > An availability zone is a logical group of datacenters. These groups are isolated and physically separate. Each of them includes independent power, cooling, physical security, and interconnectivity using high bandwidth and low‐latency links. All traffic between availability zones is encrypted. Also, each availability zone is implemented separately from other availability zones but within 60 miles of each other.
   
<br>

13. Which of the following CLI commands will guide you through the process of managing AWS resources?
   - `aws configure wizard`

    > The AWS CLIv2 wizards feature is an improved version of the -cli-auto-prompt command‐line option. Wizards guide you through the process of managing AWS resources. You can access the wizards feature by using the command line:
    > 
    > `aws ˂service‐name˃ wizard ˂wizard‐name˃`
   
<br>

14. Which AWS services have CLI wizards available? (Choose three.)
    - **AWS Lambda functions**
    - **Amazon DynamoDB**
    - **AWS IAM**

    > Wizards will query existing resources and prompt you for data in the process of setting up for the service invoked. As of this writing, wizards are available for configure, dynamodb, iam, and lambda functions. For example, the command:
    > 
    > `aws dynamodb wizard new‐table`
    > will guide you in creating a DynamoDB table. Also, note that the configure command does not use a wizard name. It’s invoked as aws configure wizard.
   
<br>

15. Which of the following CLI commands creates an S3 bucket?
   - `aws s3 mb s3://my-bucket`
  
<br>

16.  Which of the following CLI commands copies the content of a local directory to an S3 bucket?
   - `aws s3 sync my-directory s3://my-bucket/`

<br>

17.  Which of the following CLI options provide filtering of the output? (Choose two.)
   - `--query`
   - `--filter`
  
    > The --query option can be used to limit the results displayed from a CLI command. The query is expected to be structured according to the JMESPath specification, which defines the syntax for searching a JSON document.
    > 
    > The --filter option can also be used to manage the results displayed. However, with the --filter option, the output is restricted on the server side whereas --query filters the results at the client side.
    > 
    > The --dry-run option is used to verify that you have the required permissions to make the request and gives you an error if you are not authorized. The --dry-run option does not make the request.

<br>

18.   Which of the following support options give you access to the AWS Health API? (Choose two.)
   - Business
   - Enterprise

    > The AWS Health API is available directly as part of an AWS Business Support or AWS Enterprise Support plan. It allows for chat integration and ingesting events into Slack, Microsoft Teams, and Amazon Chime. It also allows integration with dozens of AWS partners such as DataDog and Splunk, among many others.

<br>

19.  What is the AWS default quota value for EC2‐VPC Elastic IPs?
   - 5

    > The AWS default quota value for EC2‐VPC Elastic IPs is 5 and will need an adjustment if you need more IPs. You can use the Service Quotas page on your management console to make a request to support and have the limit increased if needed.
<br>

20.  Which of the following URLs are useful for the purpose of pricing a solution using AWS? (Choose three.)
    - https://aws.amazon.com/free
    - https://aws.amazon.com/migration-evaluator
    - https://calculator.aws

    > For details about service pricing and usage limits included in the AWS free tier, you can visit https://aws.amazon.com/free.
    > 
    > The logic for AWS TCO calculator now resides in the Migration Evaluator at https://aws.amazon.com/migration-evaluator.
    > 
    > The AWS Pricing Calculator is available at https://calculator.aws.
    > 
    > The older, simple monthly calculator and TCO calculator have been deprecated.
<br>