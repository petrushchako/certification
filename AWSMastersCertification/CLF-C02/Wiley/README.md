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

