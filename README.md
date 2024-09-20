# SecurePipe: NestJS CRUD Example with Secure CI/CD Pipeline

This project demonstrates a secure CI/CD pipeline integrated with security tools for a **NestJS CRUD RESTful API**. The goal is to ensure the application is containerized, tested, and scanned for vulnerabilities during the CI/CD process, utilizing tools such as **Trivy**, **SonarQube**, **Snyk**, and **OWASP ZAP**.

## Features

- **NestJS** framework for creating a CRUD RESTful API.
- **CI/CD Pipeline** using GitLab CI with security checks.
- **Container Security**: Trivy for Docker image vulnerability scanning.
- **Static Code Analysis**: SonarQube for code quality and security checks.
- **Dependency Scanning**: Snyk for scanning project dependencies.
- **Security Testing**: OWASP ZAP for automated security testing.
- **Optional**: Kubernetes deployment with Helm (or OpenShift).

## Installation

Clone the repository and install dependencies:

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Swagger Docs

```bash
$ npm run start

GET app:port/docs
```
