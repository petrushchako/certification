# Create a Lambda Function Using the AWS Management Console

### ABOUT THIS LAB
In this hands-on lab, you'll author a Lambda function using the Python programming language in the AWS console. You will also review logs generated by CloudWatch.

Note: There have been UI changes to the Lambda console. Please keep this in mind as you are going through this lab.


## Solution

### Author Lambda Function in Python

1. Navigate to `Lambda`.
2. Click `Create function`.
3. Make sure the `Author from scratch` option at the top is selected, and then use the following settings:
    - Function name: Type `myFunction`.
    - Runtime: Select the latest version of `Python`.
4. Expand Change default execution role section, and verify that **Create a new role with basic Lambda permissions is selected**.
5. Click `Create` function.
6. Once the function has been created, scroll down to the Code tab.
7. Under Code source, select `lambda_function.py`.
8. Replace the existing sample code with the following:
   
    ```python
    import json

    def lambda_handler(event, context):
        message = 'Hello {} {}! Keep being awesome!'.format(event['first_name'], event['last_name'])  

        #print to CloudWatch logs
        print(message)

        return {
            'message' : message
        }  
    ```
9.  Click `Deploy`.

<br>

### Create a Test Event and Execute Lambda

1. Select **Test > Configure test event**.
2. For Event name, type `myTest`.
3. In the Event JSON box, replace the sample code with the following:
```json
{ "first_name": "Your First Name Here", "last_name": "Your Last Name Here" }
```
4. Update the code to use your first and last name.
5. Click `Format JSON`.
6. Click `Save`.
7. Click `Test`.
8. Review the execution results that appear.

<br>

### Verify that CloudWatch has Captured Function Logs
1. Click the `Monitor tab`.
2. Click `View logs in CloudWatch`.
3. Under Log streams, click the most recent log stream.
4. Review the log. You should see similar output as you did in the execution results.