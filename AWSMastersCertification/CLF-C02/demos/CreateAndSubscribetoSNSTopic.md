# Create and Subscribe to an AWS SNS Topic



<br>

## Create an SNS Topic
1. In the search bar at the top of the AWS portal, type SNS and select Simple Notification Service.
2. Under `Create topic`, enter `EC2State` as the topic name.
3. Click `Next step`.
4. Under `Create topic` > `Details`, ensure the `Standard` type is selected.
5. Leave the other settings at default, scroll down, and click `Create topic`.

<br>

## Subscribe to the SNS Topic
1. Under the `Subscriptions` tab, select `Create subscription`.
2. Leave the `Topic ARN` at default. Since you're on the page for the topic you just created, the correct topic will automatically be selected.
3. Under `Protocol`, click on the dropdown menu and select `Email`.
4. Under `Endpoint`, enter a valid email address.
5. Click `Create subscription`.
6. Under `Details`, note the `Pending confirmation` status.
7. In a new browser tab, navigate to the inbox of the endpoint email you just entered.
8. Search for the `AWS Notifications` email and click on the `Confirm subscription` link provided in the email.
9. Navigate back to the `Simple Notification Service` browser tab.
10. In the breadcrumb trail at the top, click on `EC2State`.
11. Under the `Subscriptions` tab, verify the `Status` is now `Confirmed`.

<br>

## Test the SNS Topic
1. In the search bar at the top of the `AWS portal`, type `EC2` and select it.
2. Click on `Instances (running)`.
3. Click the checkbox next to the running instance to select it.
4. On the bottom half of the page under the `Details` tab, copy the `Instance ID` by clicking the double overlapping box icon. You'll need this later.
5. In the top-right corner, click on the `Instance state` dropdown menu and select `Stop instance`.
6. In the `Stop instance?` pop-up menu, select `Stop`.
7. Exit out of the green `Successfully stopped` banner that appears at the top of the page by clicking the `X` icon.

<br>

## Create a CloudWatch Alarm
1. In the search bar at the top of the `AWS portal`, type `CloudWatch` and select it.
2. Under Get started with `CloudWatch`, click `Create alarms`.
3. Click on the orange `Create alarm` button.
4. Click `Select metric`.
5. In the search bar under `Metrics`, paste in the `Instance ID` you previously copied and press `Enter`.
6. Click on `EC2` > `Per-Instance Metrics`.
7. In the search bar next to `Per-Instance Metrics`, type `StatusCheck` and press `Enter`.
8. Under `Instance name`, Click the checkbox next to `StatusCheckFailed_Instance` to select it.
9. Click `Select metric`.
10. Under `Metric` > `Period`, click on the dropdown menu and select `1 minute`.
11. Under `Conditions` select `Greater` > `than...`, enter `1` as the threshold value.
12. Click `Additional configuration` to expand the menu.
13. Under `Missing data treatment`, click on the dropdown menu and select `Treat missing data as bad (breaching threshold)`.
14. Click `Next`.
15. Under `Notification`, ensure `Alarm state trigger` is set to `In alarm`.
16. Under `Send a notification to...`, select `EC2State`.
17. Click `Add notification`.
18. Under `Alarm state trigger`, select `OK`.
19. Under `Send a notification to...`, select `EC2State` again.
20. Click `Add notification` again.
21. Under `Alarm trigger state`, select `Insufficient data`.
22. Under `Send a notification to...`, select `EC2State` again.
23. Scroll down and click `Next`.
24. Under `Alarm name`, type `EC2State`.
25. Click `Next`.
26. Scroll down and click `Create alarm`.
27. Under `Alarms`, click on `EC2State`.
28. It may take a few minutes before the state shows `In alarm`. Click on the refresh icon in the top-right corner until the status changes.
29. Navigate back to the your inbox and confirm you received the AWS notification regarding the alarm state.