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


<br>

## CloudFoundry<br>MTA Descriptor
```yaml
_schema-version: "3.1"
ID: simple-web-app
version: 1.0.0

modules:
  - name: web-app
    type: docker
    path: .
    parameters:
      memory: 512M
      disk-quota: 512M
      buildpack: "staticfile_buildpack"
      container:
        image: "nginx:latest"
    provides:
      - name: web-service
        properties:
          port: 80
          host: web-app

resources:
  - name: log-group
    type: log
    parameters:
      region: us-east-1
      group-name: "/ecs/simple-web-app"
```

### Key Components in mta.yaml
- `modules`: Represents application modules. Here, web-app is the main module.
  - `type: docker`: Indicates a Docker-based application.
  - `parameters.container.image`: Specifies the Docker image (similar to image in Fargate).
- `resources`: Declares additional dependencies like logging (optional).
- `provides`: Defines services provided by the module, e.g., exposing a web service.


<br><hr>

## AWS Fargate Multi-Container App
```json
{
  "family": "multi-container-app",
  "taskRoleArn": "arn:aws:iam::123456789012:role/ecsTaskExecutionRole",
  "executionRoleArn": "arn:aws:iam::123456789012:role/ecsTaskExecutionRole",
  "networkMode": "awsvpc",
  "containerDefinitions": [
    {
      "name": "nodejs-app",
      "image": "123456789012.dkr.ecr.us-west-2.amazonaws.com/nodejs-app:latest",
      "portMappings": [
        {
          "containerPort": 3000,
          "hostPort": 3000
        }
      ],
      "essential": true
    },
    {
      "name": "redis-cache",
      "image": "redis:latest",
      "portMappings": [
        {
          "containerPort": 6379,
          "hostPort": 6379
        }
      ],
      "essential": true
    }
  ],
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024",
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": ["subnet-abc123"],
      "securityGroups": ["sg-abc123"],
      "assignPublicIp": "ENABLED"
    }
  }
}
```