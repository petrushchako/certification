# Fargate vs Cloud Foundry

## Fargate<br>Task Definition for Fargate (JSON Format)

```json
{
  "family": "simple-web-app",
  "containerDefinitions": [
    {
      "name": "web-container",
      "image": "nginx:latest",
      "memory": 512,
      "cpu": 256,
      "portMappings": [
        {
          "containerPort": 80,
          "hostPort": 80,
          "protocol": "tcp"
        }
      ],
      "essential": true,
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/simple-web-app",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "web"
        }
      }
    }
  ],
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "executionRoleArn": "arn:aws:iam::123456789012:role/ecsTaskExecutionRole",
  "taskRoleArn": "arn:aws:iam::123456789012:role/ecsTaskRole",
  "cpu": "256",
  "memory": "512"
}
```

### Key Components in Task Definition
- `family`: Name of the task.
- `containerDefinitions`: Configuration for containers (image, memory, ports, etc.).
- `requiresCompatibilities`: Ensures this task runs on Fargate.
- `executionRoleArn`: IAM role that allows Fargate to pull images and write logs.
- `networkMode`: `awsvpc` mode ensures each task gets its own network interface.
