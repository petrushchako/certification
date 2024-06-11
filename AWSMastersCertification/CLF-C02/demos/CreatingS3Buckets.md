# Creating S3 Buckets with Versioning and Encryption

### Introduction
In this lab, we will be creating an S3 bucket with versioning and encryption.

### Solution
Log in to the AWS Management Console using the credentials provided on the lab instructions page. Make sure you're using the `us-east-1` Region.

#### Create an S3 Bucket

1. In the search bar on top of the console, enter `S3`.
2. From the search results, click `S3`.
3. Click `Create bucket`.
4. On the Create bucket page, set the following parameters:
    - In Bucket name, enter a globally unique name.
    - Leave ACLs disabled (recommended) selected.
    - Leave Block all public access selected.
    - In Bucket Versioning, select Enable.
5. Click `Create Bucket`.
6. Click the name of the bucket.
7. Click the `Properties` tab.
8. Review the information to check that bucket versioning is enabled and encryption has been applied.

#### Upload a File to the Bucket
1. In another browser tab or window, navigate to the GitHub repository for the lab: `https://github.com/linuxacademy/content-aws-essentials`
2. Click `Code`.
3. Click `Download ZIP`.
4. Unzip the file on your computer. In the S3 folder, you should see the Test.txt file we will use in this lab.
5. Click the `Objects` tab.
6. Click `Upload`.
7. Click `Add` files.
8. Navigate to the folder where you downloaded your Test.txt file, and click on the file.
9. Click `Open`.<br>Alternatively, you can drag and drop the file into the console.
10. Click `Upload`.
11. Once the upload is complete, click `Close`.

#### Upload Second Version of the Same File
1. On your computer, open the Test.txt file in a text editor program, such as Notepad, and change the text in the file.
2. Save the changed file.
3. Return to the console showing our new bucket.
4. Click `Upload`.
5. Click `Add` files.
6. Navigate to the folder where you saved the changed Test.txt file, and click on the file.
7. Click `Open`.
8. Click `Upload`.
9. Once the upload is complete, click `Close`.
10. Click the checkbox next to the Test.txt file in the bucket and click the Open button. It should open in a new tab and show the new text that you entered into the file.
11. Return to the bucket and click on the Test.txt file.
12. Click on the `Versions` tab.
13. `Click the checkbox` next to the earlier version of the file, and then click `Download`.
14. Click the `Objects` tab.
15. Click `Add` files.
16. Navigate to the folder where you downloaded your Test.txt file, and click on the file.
17. Click `Open`.<br>Alternatively, you can drag and drop the file into the console.
18. Click `Upload`.
19. Once the upload is complete, click `Close`.
20. `Click the checkbox next to the Test.txt` file in the bucket and click the `Open` button. It should open in a new tab and show the previous version of the text before it was edited.