# Exploring Compute Services - EC2 In Action

### Connecting to EC2
- **AWS Management Console**<br>Allows you to configure and manage your instance through browser.
- **EC2 Instance Conenct (EIC)**<br>Allows you to use IAM policies to control SSH access into your instances, removing the need to manage SSH keys.
- **Secure Shell (SSH) and Remote Desktop Protocol (RDP)**<br>This allow you to establish a secure connection to your instance from your local laptop or PC. This option requires a key pair.
- **AWS Systems Manager**<br>This allows you to manage your systems via browser or the AWS CLI

### Scenario
You have been tasked with creating a new EC2 instance named Web App using an Amazon Linux AM. The instance should be part of the free tier and use a new key pair named `NewKeyPair`. Make sure to test its connection!

### Steps
1. Search for `EC2` in search bar 
2. Select `Launch Instance` to open configuration wizard
3. Provide instance details:
   - Name and tags
   - OS image type
   - Architecture type
   - Instance type
   - Create Keypair (**Only time you can create it**):
     - Name: `NewKeyPair`
     - Type: `RSA`
     - Key format `.pem`
     - Press `Create key pair` to complete the configuration and download created key to your Downloads folder
   - Network configuration and storage can be left default
   - Sport insance option is available under Advanced options
4. After filling in all necessary infomration, press `Launch Instance` to create configured EC2 isntance.
5. Navigate to Running instances and search for your image
6. Select Connect, and use Instance Connect to connect to EC2 from the browser.
