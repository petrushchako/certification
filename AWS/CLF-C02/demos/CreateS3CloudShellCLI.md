# Demo: Working with AWS CloudShell and the AWS Command Line Interface (AWS CLI)

In this scenario, you'll create an S3 bucket and upload a file using the AWS CLI, running in the CloudShell, instead of using the AWS Console.

## Launching AWS CloudShell

1. **Open AWS CloudShell:**
   - From the AWS Console, click on the CloudShell icon at the top of the screen.

2. **Verify AWS CLI Installation:**
   - In the CloudShell terminal, type:
     ```sh
     aws --version
     ```
   - This command verifies that the AWS CLI is installed and configured.

## Creating an S3 Bucket

1. **Create an S3 Bucket:**
   - To create a bucket, type:
     ```sh
     aws s3 mb s3://Mybucket-<random-numbers>
     ```
   - Replace `<random-numbers>` with some random numbers to ensure a globally unique bucket name.

2. **List S3 Buckets:**
   - To list all buckets in your account, type:
     ```sh
     aws s3 ls
     ```
   - This command displays the bucket you just created.

## Creating and Uploading a File

1. **Create a New File:**
   - Create a file named `file.txt` with some content:
     ```sh
     echo "my new file" >> file.txt
     ```
   - This command creates a new file with the text "my new file".

2. **Verify the File:**
   - List the files to ensure `file.txt` is created:
     ```sh
     ls
     ```
   - Display the file content:
     ```sh
     cat file.txt
     ```

3. **Upload the File to S3:**
   - Upload `file.txt` to your S3 bucket:
     ```sh
     aws s3 cp file.txt s3://Mybucket-<random-numbers>/
     ```
   - Replace `<random-numbers>` with your actual bucket name.

4. **Verify the Upload:**
   - List the files in your S3 bucket:
     ```sh
     aws s3 ls s3://Mybucket-<random-numbers>/
     ```
   - You should see `file.txt` listed in the bucket.

## Using AWS CLI Help

1. **Using the Help Command:**
   - If you need help with any AWS CLI command, type:
     ```sh
     aws s3 mb help
     ```
   - This command displays the documentation for the `mb` (make bucket) command.

2. **Viewing Online Documentation:**
   - Search for the AWS CLI command reference online to get detailed information and examples. Make sure you refer to the version 2 documentation if you are using AWS CLI version 2.

