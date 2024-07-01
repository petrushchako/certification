# Visualize Metrics for Tagged Resources on Amazon CloudWatch

### ABOUT THIS LAB
In this lab you will be taking on the role of a cloud operations expert that is tasked with finding a way to visualize CPU Utilization for EC2 instances in your AWS account. Your company needs a dashboard where they can track average CPU Utilization by Environment.


## Solution

### Create a CloudWatch Dashboard
1. In the AWS console, navigate to EC2 to inspect the instances running. Select an instance and navigate to the Tags menu to look at the existing Environment tag.
2. Navigate to CloudWatch.
3. Find and select Dashboards from the side panel.
4. Click the Create dashboard button.
5. Enter my-ec2-dashboard as the Dashboard name.
6. Select Create dashboard.

### Select EC2 CPU Utilization in Metrics Explorer
1. Exit out of the Add widget pop-up.
2. Expand the side panel menu and under Metrics, select Explorer.
3. Fill in the appropriate fields:
    - Metric: EC2 Instance: CPUUtilization
    - From: Environment = Prod
    - Aggregate by: Average
    - columns: 1
    - rows: 1
4. Select the context menu (3 vertical dots) at the top of the 5. All resources - CPUUtilization widget.
6. Select View in metrics.
7. Find and select the Pencil Icon next to the title All resources - CPUUtilization.
8. Enter Prod EC2 - CPUUtilization in the Rename Graph field.
9. Select Apply.
10. From the Actions dropdown, select Add to dashboard.
11. Select my-ec2-dashboard under Select a dashboard.
12. Click Add to dashboard.
13. At the top right of the screen select Save.


### Filter the Aggregated Metrics by Environment Tag and Create One Visual for Each Environment
1. Navigate back to Explorer under the Metrics side menu.
2. Fill in the appropriate fields:
    - Metrics: EC2 Instance: CPUUtilization
    - From: Environment = Dev
    - Aggregate by: Average
    - columns: 1
    - rows: 1
3. Select the context menu (3 vertical dots) at the top of the All resources - CPUUtilization widget.
4. Select View in metrics.
5. Find and select the Pencil Icon next to the title All resources - CPUUtilization.
6. Enter Dev EC2 - CPUUtilization for the Rename Graph field.
7. Select Apply.
8. From the Actions dropdown, select Add to dashboard.
9. Select my-ec2-dashboard under Select a dashboard.
10. Click Add to dashboard.
11. At the top right of the screen select Save.