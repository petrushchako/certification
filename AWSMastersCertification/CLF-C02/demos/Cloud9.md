# Documentation: Using AWS Cloud9

## Introduction

In this demonstration, you will learn how to use AWS Cloud9, an integrated development environment (IDE) that lets you write, run, and debug code directly in your browser. Cloud9 supports popular programming languages such as JavaScript, Python, Ruby, and C++, and it also allows you to run AWS CLI commands. This guide will walk you through creating a Cloud9 environment, writing and running code, and executing AWS CLI commands.

## Creating a Cloud9 Environment

1. **Access AWS Cloud9:**
   - From the AWS Management Console, search for "Cloud9" in the search bar and select it.

2. **Create a New Environment:**
   - Click on "Create environment."
   - **Environment Name:** Enter `My-IDE`.
   - **Environment Type:** Select `New EC2 instance`.
   - **Instance Type:** Choose `t3.small`.
   - **Platform:** Select `Amazon Linux`.
   - **Network Settings:** Keep the default settings.
   - Scroll to the bottom and click "Create."

3. **Environment Setup:**
   - Wait for the environment to be created. It may take a few moments to set up.

## Exploring the Cloud9 Code Editor

1. **Open the Cloud9 Environment:**
   - Once the environment is ready, click "Open" to access your Cloud9 IDE.

2. **Create a New File:**
   - In the Cloud9 interface, click on "File" and select "New File."
   - Type the following Python code:
     ```python
     print("Hello Cloud Gurus")
     ```
   - Save the file by selecting "File" > "Save As," and name the file `hello.py`.

## Running Code in Cloud9

1. **Locate the Terminal:**
   - At the bottom of the screen, find the terminal window. If needed, drag it up to make it more visible.

2. **Run the Python Code:**
   - In the terminal, list the files in your directory by typing:
     ```sh
     ls
     ```
   - Run your Python script by typing:
     ```sh
     python hello.py
     ```
   - You should see the output:
     ```sh
     Hello Cloud Gurus
     ```

## Using the AWS CLI in Cloud9

1. **Verify AWS CLI Installation:**
   - The AWS CLI comes pre-installed in Cloud9. To create an S3 bucket, type:
     ```sh
     aws s3 mb s3://my-code-<random-numbers>
     ```
   - Replace `<random-numbers>` with random numbers to ensure a unique bucket name.

2. **Upload a File to S3:**
   - Copy the `hello.py` file to the S3 bucket:
     ```sh
     aws s3 cp hello.py s3://my-code-<random-numbers>/
     ```

3. **Verify Upload:**
   - If successful, the terminal will confirm that the file has been uploaded to the S3 bucket.

## Summary

AWS Cloud9 provides a powerful and convenient environment for developing applications, running AWS CLI commands, and integrating with various AWS services—all within your web browser. Thank you for following this demo, and feel free to explore further features of AWS Cloud9 and the AWS CLI.