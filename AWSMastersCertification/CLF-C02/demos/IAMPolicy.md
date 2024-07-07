# Troubleshooting an IAM Policy on an EC2 Instance

### ABOUT THIS LAB
In this lab you will be taking on the role of a cloud engineer. You come to realize your EC2 instance is unable to get items from your S3 bucket. All of the network settings appear to be correct, so you need to determine how to give your EC2 instance permission to access the S3 bucket.

### LEARNING OBJECTIVES
- Upload an object to the S3 bucket.
- Connect to the EC2 instance and attempt to get the object
- Connect to the EC2 instance to verify the new permissions
- Edit the instance’s IAM Policy to allow access to the S3 Bucket

<br>

## Solution
### Upload an object to the S3 bucket
1. Log in to the AWS Management Console using the credentials provided on the lab instructions page. Make sure you're using the us-east-1 Region.
2. Navigate to S3
3. Find and select the S3 Bucket
4. Copy and store the full name of the S3 Bucket
5. Find and select Upload
6. Select Add Files
7. Select a small text file named test.txt
8. From the Add Files screen, finalize your upload by selecting Upload
9. Copy and store the name of your text file

<br>

### Connect to the EC2 instance and attempt to get the object
1. Navigate to EC2
2. Find and select Instances (running)
3. Click on the Instance ID
4. Click Connect
5. Click Connect
6. Enter the command:

    ```sh
    aws s3api get-object --bucket <INSERT BUCKET NAME> --key test.txt my-test.txt
    ```

<br>

### Edit the instance’s IAM Policy to allow access to the S3 Bucket
1. Switch tabs back to EC2
2. Find and select the IAM Role
3. Under Permissions Policies select Add permissions and choose "Attach Policies"
4. From the Search, search for AmazonS3ReadOnlyAccess
5. Check the box next to AmazonS3ReadOnlyAccess
6. Click Add permissions

<br>

### Connect to the EC2 instance to verify the new permissions
1. Switch tabs back to the EC2 Instance Connect
2. Rerun the command:

    ```bash
    aws s3api get-object --bucket <INSERT BUCKET NAME> --key test.txt my-test.txt
    ```
3. Verify the new file is present with the ls command