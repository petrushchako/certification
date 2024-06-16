# Launch EC2 Instance in VPC

### ABOUT THIS LAB
In this lab scenario, Alfredo of Alfredo's Pizza is looking to set up a website to advertise his pizza shop. We are going to help him by getting the server primed and ready to host his website. During this lab, you'll have the opportunity to explore and understand foundational and compute services provided by AWS. We will create a virtual private cloud (VPC), subnets across multiple Availability Zones (AZs), routes and an internet gateway, and more. These services are the foundation of networking architecture inside of AWS and cover concepts such as infrastructure, design, routing, and security.

![](../img/VPC-demo.png)


Solution
Log in to the live AWS environment using the credentials provided. Use an incognito or private browser window to ensure you're using the lab account rather than your own.

Make sure you're in the N. Virginia (us-east-1) region throughout the lab.

Create a VPC

Navigate to VPC > Your VPCs.
Click Create VPC, and set the following values:
Select: VPC Only
Name tag: my-vpc
IPv4 CIDR block: 10.0.0.0/16
Leave the IPv6 CIDR block and Tenancy fields as their default values.
Click Create VPC.
Create a Public Subnet

Click Subnets in the left-hand menu.
Click Create subnet, and set the following values:
VPC ID: my-vpc
Subnet name: my-public-subnet
Availability Zone: us-east-1a
IPv4 CIDR block: 10.0.0.0/24
Click Create subnet.
Create Routes and Configure Internet Gateway

With my-public-subnet selected, click Actions > Edit subnet settings.
Check the box to Enable auto-assign public IPv4 address.
Click Save.
Click Internet Gateways in the left-hand menu.
Click Create internet gateway.
Set Name tag as "my-internet-gateway".
Click Create internet gateway.
On the next screen, click Actions > Attach to VPC.
In the Available VPCs dropdown, select my-vpc.
Click Attach internet gateway.
Click Route Tables in the left-hand menu.
Click Create route table, and set the following values:
Name: publicRT
VPC: my-vpc
Click Create route table.
On the next screen, click Edit routes.
Click Add route, and set the following values:
Destination: 0.0.0.0/0
Target: Internet Gateway, my-internet-gateway
Click Save changes.
Click the Subnet associations tab.
Click Edit subnet associations.
Select the box for my-public-subnet.
Click Save associations.
Launch EC2 Instance in Subnet

Navigate to EC2 > Instances.
Click Launch instances.
EC2 Instance name my-public-instance.
On the AMI page, select the Amazon Linux AMI.
Ensure t2.micro is selected.
Click Create new key pair.
Give it a Key pair name of "my-keypair".
Click Create Key Pair.
Click Launch Instance.
Click View Instances, and give it a few minutes to enter the Running state.
Access EC2 Instance

Once the instance has a Running state, select the box next to it.
Click Connect at the top.
In the EC2 Instance Connect section, click Connect.
This will open a new browser tab showing a command line interface.
