# AWS Identity Access Management Capabilities

### Introduction
AWS provides robust access management capabilities to ensure only authorised users and applications can access AWS resources. Identity and Access Management (IAM) controls access and permissions.

#### Key Concepts in AWS Access Management
- AWS Identity and Access Management (IAM)
- AWS Root User Account Protection
- Principle of Least Privilege
- AWS IAM Identity Centre (AWS Single Sign-On)

<br>

### AWS Identity and Access Management (IAM)
AWS IAM is global service that allows users to manage access to AWS resouces securely

#### Key Features of AWS IAM
| **Feature**         | **Description**                                                      |
|---------------------|----------------------------------------------------------------------|
| **IAM Users**       | Individual user accounts within AWS (e.g. developers, admins)        |
| **IAM Groups**      | Collections of IAM users with shared permissions                     |
| **IAM Roles**       | Assignable permissions for AWS services or external users            |
| **IAM Policies**    | JSON-based rules that define permissions of users, groups, and roles |
| **IAM Access Keys** | Secure credentials for programmatic access via AWS CLI/SDK           |
| **MFA**             | Adds an extra security layer for user authentication                 |

<br>

#### Types of IAM Policies
1. **AWS-Manged Policies** - Predefined by AWS for everday use cases
2. **Customer-Managed Policies** - Custom policies created by users
3. **Inline Policies** - Directly attached to an IAM user, group or role


#### IAM Best Practices
* Use **IAM roles** instead of long-term access keys.
* Enable **MFA** for all users, especially administrators.
* Regularly review **IAM policies and permissions**.
* Use the **IAM Access Analyzer** to identify excessive permissions.

<br>

### Importance of Protecting Root User Account
The root user is the first account created when setting up AWS and has full administrative access.

#### Danger of Using the Root User
- Unrestricted permissions make it high-risk account.
- If compromised, an attacher gains full control over AWS resources.
- Root users cannot be restricted by IAM policies.

#### Best Practice to Protect the AWS Root User
* **Enable MFA** for root user login
* **Avoid using the root account** for daily tasks
* **Create IAM users** with specific permissions for administrative tasks
* **Lock away root credentials** and use them only for critical actions (e.g. billing changes).


<br>

### Prociple of Least Privilege (PoLP)
The Principle of Least Privilege (PoLP) states that users and applications should only have the minimum permissions necessary to perform their tasks

#### Implementing Least Privilege in AWS
* **Start with a minimal set of permissions** and add only what is required
* Use **IAM roles** instead of assigning permissions directly to users
* Regularly **review IAM policies** and remove unnecessary permissions
* Use the **IAM Access Analyzer** to detect excessive access rights

<br>

### AWS IAM Identity Centre (AWS Single Sign-On)
AWS IAM Identity Centre (formerly AWS Single Sign-On) is centralised identity management solution that allows users to sign in once and access multiple AWS accounts or applications.

#### Key features of AWS IAM Centre
| **Feature**                       | **Description**                                                       |
|-----------------------------------|-----------------------------------------------------------------------|
| **Single Sign-On**                | Users log in once to access multiple AWS accounts and applications    |
| **Centralised User Management**   | Manage access for multiple AWS account from one place                 |
| **Integration with External IdP** | Supports Microsoft Active Directory, Okta and other identity services |
| **Termporary Credentials**        | Provides session-based access instead of long-term access keys        |

<br>

#### Benefits of AWS IAM Identity Centre
* **Simplifies access management** for multiple AWS accounts
* **Enhances security** with MFA and session-based authentication
* **Reduces admin overhead** by eliminating the need for multiple IAM users
* **Supports enterprise integration** with third-party identity providers