import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EnrollmentForm } from "@/components/enrollment-form"
import { CheckCircle, Clock, Calendar, Users, Award, ChevronLeft } from "lucide-react"
import { DownloadBrochureButton } from "@/components/DownloadBrochure";

// Course data
const courses = {
  aws: {
    "title": "AWS Cloud Fundamentals",
    "subtitle": "Master Amazon Web Services Architecture and Services",
    "description": "Comprehensive AWS training covering cloud computing concepts, core AWS services, security, databases, and architecture best practices. Prepare for AWS certification while gaining hands-on experience with real-world AWS implementations.",
    "image": "/images/courses/aws.png",
    "duration": "12 Days",
    "schedule": "Weekdays",
    "level": "Beginner to Intermediate",
    "certification": "AWS Cloud Practitioner or Developer/Sysops-Associate",
    "brochurePath": "/placeholder.svg",
    "syllabus": [
      {
        "title": "Module 1: Cloud Computing Fundamentals",
        "topics": [
          "What is Cloud Computing",
          "Cloud Computing Types and Service Models",
          "Introduction to AWS and Benefits",
          "AWS Region, AZ, Edge Location, LocalZone",
          "AWS Pricing and Purchase Options"
        ]
      },
      {
        "title": "Module 2: AWS Compute and Networking",
        "topics": [
          "AWS Computing Services Overview",
          "EC2 and Instance Types",
          "EC2 IP Addressing (Public, Private, Elastic)",
          "Security Groups and Network Configuration",
          "Amazon VPC, Subnets, and Gateways",
          "Network Access Control Lists (NACLs)",
          "Load Balancers (ALB, NLB)"
        ]
      },
      {
        "title": "Module 3: AWS Storage Solutions",
        "topics": [
          "AMI and AWS Marketplace",
          "Metadata and Userdata",
          "EBS and Instance Store",
          "EBS Types and Performance Options",
          "Object and Block Storage Services",
          "Storage Classes and Lifecycle Management",
          "EFS and FSx Block Storage Solutions"
        ]
      },
      {
        "title": "Module 4: AWS Infrastructure as Code",
        "topics": [
          "AWS CLI Installation and Configuration",
          "Automation with CLI Commands",
          "Infrastructure as Code (IaaC) Concepts",
          "CloudFormation Fundamentals",
          "YAML and JSON Templates",
          "Sample CloudFormation Implementations"
        ]
      },
      {
        "title": "Module 5: AWS Database Services",
        "topics": [
          "RDS Overview and Use Cases",
          "Database Engine Options",
          "RDS Backup and Snapshots",
          "SQL and NoSQL Database Offerings",
          "Aurora Instance Types",
          "DynamoDB and ElastiCache"
        ]
      },
      {
        "title": "Module 6: AWS Security and Management",
        "topics": [
          "Identity and Access Management (IAM)",
          "IAM Users, Roles, and Policies",
          "Access Keys and Security Best Practices",
          "CloudWatch Monitoring",
          "CloudTrail and VPC Flow Logs",
          "Custom Metrics and Alarms",
          "Auto-Scaling Groups"
        ]
      },
      {
        "title": "Module 7: AWS Applications and Serverless",
        "topics": [
          "DNS and Route 53",
          "Routing Policies",
          "Elastic Beanstalk",
          "CloudFront and Content Delivery",
          "AWS Cognito",
          "Lambda Functions and Serverless Computing",
          "Step Functions and API Gateway",
          "AWS Athena and Event Bridge"
        ]
      },
      {
        "title": "Module 8: DevOps and Cost Management",
        "topics": [
          "AWS Developer Services (CodeCommit, CodeDeploy, CodeBuild)",
          "CI/CD Implementation",
          "AWS Cost and Billing Explorer",
          "Billing Alerts and Budget Management",
          "Cost Optimization Strategies"
        ]
      }
    ],
    "features": [
      "Hands-on labs with AWS console",
      "Infrastructure automation practice",
      "Security implementation exercises",
      "Serverless application deployment",
      "Certification preparation materials"
    ]
  },
  
  awsSecurity: {
    "title": "AWS Security Engineer",
    "subtitle": "Master Cloud Security Best Practices and Solutions",
    "description": "Comprehensive AWS security training covering identity management, network security, data protection, compliance frameworks, incident response, and security best practices. Gain practical skills through hands-on labs and real-world security implementations.",
    "image": "/images/courses/aws-security.jpg",
    "duration": "12 Days",
    "schedule": "Weekdays",
    "level": "Intermediate to Advanced",
    "certification": "AWS Security Specialist",
    "brochurePath": "/placeholder.svg",
    "syllabus": [
      {
        "title": "Module 1: Intro to AWS Security",
        "topics": [
          "AWS Cloud Security Overview",
          "Understanding the Shared Responsibility Model",
          "Security and compliance objectives in cloud computing",
          "Core AWS security services overview",
          "AWS Identity and Access Management (IAM)",
          "IAM users, groups, roles and policies",
          "Best practices for IAM, including least privilege access",
          "Managing IAM credentials and MFA"
        ]
      },
      {
        "title": "Module 2: Network Security and Infrastructure Protection",
        "topics": [
          "Virtual Private Cloud (VPC) architecture",
          "Security groups and Network ACLs",
          "VPC design considerations for security",
          "VPN and Direct Connect",
          "AWS Security Hub and GuardDuty"
        ]
      },
      {
        "title": "Module 3: Data Protection",
        "topics": [
          "AWS Key Management Service (KMS)",
          "Server-side encryption (SSE) and client-side encryption",
          "AWS Certificate Manager (ACM)",
          "Amazon S3 security best practices",
          "Securing databases with Amazon RDS and DynamoDB"
        ]
      },
      {
        "title": "Module 4: Governance, Compliance, and Audit",
        "topics": [
          "Introduction to compliance frameworks",
          "Using AWS Config for continuous monitoring",
          "AWS Artifact and compliance reports",
          "AWS CloudTrail and AWS Config",
          "Setting up AWS CloudWatch for security monitoring"
        ]
      },
      {
        "title": "Module 5: Incident Response and Threat Detection",
        "topics": [
          "Incident response planning and automation",
          "Using AWS Lambda in security automation",
          "AWS Systems Manager for incident response",
          "AWS WAF and AWS Shield",
          "Using Amazon Inspector for vulnerability management"
        ]
      },
      {
        "title": "Module 6: Security Best Practices and Real-world Applications",
        "topics": [
          "Securing AWS infrastructure: EC2, S3, RDS",
          "Best practices for DevSecOps on AWS",
          "Implementing a secure CI/CD pipeline",
          "Review of tools like Wiz, Panaseer, Aikido",
          "Implementing a comprehensive security solution"
        ]
      }
    ],
    "features": [
      "Hands-on security labs",
      "Security automation practice",
      "Compliance implementation exercises",
      "Threat detection and incident response scenarios",
      "Comprehensive security solution project"
    ]
  },
  
  devops: {
    "title": "AWSome DevOps Engineering",
    "subtitle": "Master Modern DevOps Tools and Practices",
    "description": "Comprehensive DevOps training covering industry-standard tools including Git, Terraform, Jenkins, Ansible, Docker, and monitoring solutions. Learn infrastructure as code, CI/CD pipelines, configuration management, and containerization through hands-on projects.",
    "image": "/images/courses/devops.jpg",
    "duration": "22 Days",
    "schedule": "Weekdays",
    "level": "Intermediate to Advanced",
    "certification": "Terraform or Ansible Certification",
    "brochurePath": "/placeholder.svg",
    "syllabus": [
      {
        "title": "Module 1: DevOps Fundamentals",
        "topics": [
          "What is DevOps",
          "DevOps Culture and Principles",
          "Tools and Technologies Overview",
          "DevOps Processes and Workflows"
        ]
      },
      {
        "title": "Module 2: Source Control Management",
        "topics": [
          "GitHub and Git Client",
          "GitLab, Bitbucket, and Azure Repos",
          "GitHub Actions",
          "Common Git Commands and Workflows",
          "Git Branching Strategies"
        ]
      },
      {
        "title": "Module 3: Infrastructure as Code with Terraform",
        "topics": [
          "Introduction to Terraform and Advantages",
          "Terraform Providers",
          "Key Terraform Commands",
          "Backend and State Management",
          "Working with Terraform Modules"
        ]
      },
      {
        "title": "Module 4: CI/CD with Jenkins",
        "topics": [
          "Introduction to CI/CD",
          "Jenkins Installation and Setup",
          "Freestyle and Pipeline Jobs",
          "Jenkins Slave Configuration",
          "Groovy Scripting for Jenkins"
        ]
      },
      {
        "title": "Module 5: Configuration Management with Ansible",
        "topics": [
          "Introduction to Configuration Management",
          "Ansible vs. Chef and Puppet",
          "Ansible Installation and Setup",
          "Ad-hoc Commands and Modules",
          "Ansible Playbooks and Real-world Examples",
          "Working with Variables and Loops",
          "Handlers and Error Handling"
        ]
      },
      {
        "title": "Module 6: Containerization with Docker",
        "topics": [
          "Introduction to Microservices and Containers",
          "Docker Installation and Commands",
          "Writing Dockerfiles",
          "Docker Volumes and Data Persistence",
          "DockerHub Registry",
          "Container Dependencies and Environment Variables",
          "Docker Compose",
          "Docker Networking",
          "Container Orchestration with Docker Swarm"
        ]
      },
      {
        "title": "Module 7: Logging and Monitoring",
        "topics": [
          "CloudWatch Logs",
          "ELK Stack and Splunk",
          "Infrastructure Monitoring Tools",
          "Grafana and Prometheus Setup",
          "Metrics Collection and Visualization"
        ]
      },
      {
        "title": "Module 8: Agile Development",
        "topics": [
          "Introduction to Agile Development",
          "Jira for Project Management",
          "Sprint Planning and Daily Standups",
          "Agile Stories, Backlogs, and Retrospectives"
        ]
      },
      {
        "title": "Module 9: Azure DevOps",
        "topics": [
          "Introduction to Azure DevOps",
          "Azure Boards, Repos, Pipelines, and Artifacts",
          "Running Sample Jobs",
          "Azure DevOps Integration"
        ]
      }
    ],
    "features": [
      "Hands-on infrastructure automation",
      "CI/CD pipeline implementation",
      "Container orchestration practice",
      "Configuration management exercises",
      "End-to-end DevOps workflow experience"
    ]
  },
  
  dataScience: {
    "title": "Data Science Training Program",
  "subtitle": "Master End-to-End Data Science with Real-World Projects",
  "description": "A comprehensive course covering Python, data collection, data cleaning, exploratory analysis, statistics, machine learning, deep learning, natural language processing, databases, and reporting tools with hands-on projects and interview preparation.",
  "image": "/images/courses/data-science.jpg",
  "duration": "90 Days",
  "schedule": "Weekdays",
  "level": "Beginner to Advanced",
  "certification": "Certified Data Science Professional",
  "brochurePath": "/placeholder.svg",
  "syllabus": [
    {
      "title": "Module 1: Business Understanding & Python Basics",
      "topics": [
        "Understanding business goals",
        "Feature and variable identification",
        "Core Python: installation, syntax, data types",
        "Control structures: conditions, loops",
        "Data structures: list, tuple, dictionary, set",
        "Functions, Lambda, Map, Filter, Reduce",
        "OOP: classes, inheritance, polymorphism, etc.",
        "Modules, exception handling, file handling",
        "Multi-threading & multi-processing"
      ]
    },
    {
      "title": "Module 2: Data Collection and Cleaning",
      "topics": [
        "Manual and automated data collection",
        "Sources: Kaggle, UCI, SQL, Web scraping",
        "Data validation and normalization",
        "Cleaning data: trimming, formatting"
      ]
    },
    {
      "title": "Module 3: Data Analysis and Visualization",
      "topics": [
        "Exploratory Data Analysis (EDA)",
        "Univariate, Bivariate & Multivariate analysis",
        "Descriptive statistics & distribution analysis",
        "Visualization: bar, box, pie, histogram, scatter, heatmap"
      ]
    },
    {
      "title": "Module 4: Inferential Statistics",
      "topics": [
        "Sampling, population, distributions",
        "Confidence intervals & hypothesis testing",
        "Z-tests, ANOVA, Chi-square tests",
        "Central Limit Theorem, probability, z-scores"
      ]
    },
    {
      "title": "Module 5: Data Preparation & Feature Engineering",
      "topics": [
        "Handling missing values & outliers",
        "Feature selection, generation, modification",
        "Scaling and encoding techniques",
        "Avoiding data leakage"
      ]
    },
    {
      "title": "Module 6: Predictive Modeling and Machine Learning",
      "topics": [
        "Supervised learning: Regression & Classification",
        "Linear, Logistic, Decision Trees, SVM, KNN, Random Forest",
        "Ensemble methods: Bagging & Boosting",
        "Model evaluation metrics & cross-validation",
        "Bias-variance tradeoff & hyperparameter tuning"
      ]
    },
    {
      "title": "Module 7: Unsupervised Learning",
      "topics": [
        "Clustering: K-Means, Hierarchical, DBSCAN",
        "Dimensionality Reduction: PCA",
        "Applications and project use-cases"
      ]
    },
    {
      "title": "Module 8: Deep Learning",
      "topics": [
        "Neural Networks: ANN, CNN, RNN",
        "Forward & Backpropagation",
        "CNN for image classification",
        "RNN/LSTM for sequence modeling",
        "YOLO, Object detection, Transfer Learning"
      ]
    },
    {
      "title": "Module 9: Natural Language Processing (NLP)",
      "topics": [
        "Text data collection and cleaning",
        "Tokenization, Stop words, Lemmatization",
        "Text vectorization: TF-IDF, Word2Vec",
        "Sentiment analysis and text classification",
        "Sequence modeling with RNN/LSTM"
      ]
    },
    {
      "title": "Module 10: Databases & Reporting Tools",
      "topics": [
        "SQL (DDL, DML, joins, group by, filters)",
        "NoSQL (MongoDB, CRUD operations)",
        "Reporting with Tableau/Power BI",
        "Dashboards and storytelling with data"
      ]
    }
  ],
  "features": [
    "Hands-on Python coding and data projects",
    "Real-world EDA and statistical analysis",
    "Model building and deployment training",
    "Deep learning and NLP implementation",
    "Database and reporting integration"
  ]
  },
  
  sql: {
    "title": "SQL Server Training Program",
  "subtitle": "Master Microsoft SQL Server for Database Management & Development",
  "description": "This course provides comprehensive training on Microsoft SQL Server covering database fundamentals, advanced querying, stored procedures, triggers, error handling, and more. Designed to equip you with the skills required for real-world database development and interviews.",
  "image": "/images/courses/sql-server.jpg",
  "duration": "30 Days",
  "schedule": "Weekdays",
  "level": "Beginner to Intermediate",
  "certification": "Microsoft SQL Server Certified Developer",
  "brochurePath": "/placeholder.svg",
  "syllabus": [
    {
      "title": "Module 1: Introduction to SQL Server",
      "topics": [
        "Overview of SQL Server",
        "SQL Server Editions and Tools",
        "Understanding Databases and Tables"
      ]
    },
    {
      "title": "Module 2: Constraints in SQL Server",
      "topics": [
        "Primary Key, Foreign Key",
        "Unique, Not Null, Check Constraints",
        "Default Constraints"
      ]
    },
    {
      "title": "Module 3: Normalization & Denormalization",
      "topics": [
        "Normal Forms (1NF to 5NF)",
        "Normalization Rules",
        "When and How to Denormalize"
      ]
    },
    {
      "title": "Module 4: SQL Clauses",
      "topics": [
        "SELECT, WHERE, ORDER BY, GROUP BY, HAVING",
        "TOP, DISTINCT, BETWEEN, LIKE, IN, EXISTS"
      ]
    },
    {
      "title": "Module 5: Indexes",
      "topics": [
        "Clustered vs. Non-clustered Indexes",
        "Composite Indexes",
        "Index Management and Performance"
      ]
    },
    {
      "title": "Module 6: Joins",
      "topics": [
        "Inner Join, Left Join, Right Join, Full Outer Join",
        "Self Join, Cross Join",
        "Practical Scenarios"
      ]
    },
    {
      "title": "Module 7: Sequence & Identity",
      "topics": [
        "Difference Between Sequence and Identity",
        "Implementing Auto-Increment Columns"
      ]
    },
    {
      "title": "Module 8: Inbuilt Functions",
      "topics": [
        "String Functions",
        "Date and Time Functions",
        "Aggregate Functions (SUM, COUNT, AVG, etc.)"
      ]
    },
    {
      "title": "Module 9: Temporary Tables",
      "topics": [
        "Local and Global Temporary Tables",
        "Table Variables",
        "Use Cases and Performance"
      ]
    },
    {
      "title": "Module 10: Views",
      "topics": [
        "Simple Views",
        "Complex Views",
        "Materialized Views (Indexed Views)"
      ]
    },
    {
      "title": "Module 11: CTE, Derived Tables & Table Variables",
      "topics": [
        "Common Table Expressions (CTE)",
        "Derived Tables",
        "Using Table Variables Effectively"
      ]
    },
    {
      "title": "Module 12: Subqueries & Correlated Queries",
      "topics": [
        "Types of Subqueries",
        "Scalar and Multi-Row Subqueries",
        "Correlated Subqueries"
      ]
    },
    {
      "title": "Module 13: Pivot & Unpivot",
      "topics": [
        "Data Transformation using Pivot",
        "Unpivot for Tabular Representation"
      ]
    },
    {
      "title": "Module 14: Error Handling",
      "topics": [
        "TRY...CATCH Block",
        "Transaction Rollback",
        "RAISERROR Function"
      ]
    },
    {
      "title": "Module 15: Triggers",
      "topics": [
        "DML Triggers (AFTER, INSTEAD OF)",
        "DDL Triggers",
        "Nested Triggers and Usage"
      ]
    },
    {
      "title": "Module 16: User Defined Functions",
      "topics": [
        "Scalar Functions",
        "Table-Valued Functions",
        "Deterministic vs. Non-Deterministic Functions"
      ]
    },
    {
      "title": "Module 17: Stored Procedures",
      "topics": [
        "Creating and Executing Stored Procedures",
        "Input and Output Parameters",
        "Benefits of Using Procedures"
      ]
    },
    {
      "title": "Module 18: Cursors",
      "topics": [
        "Types of Cursors",
        "Declaring and Using Cursors",
        "Performance Implications"
      ]
    },
    {
      "title": "Module 19: Transactions",
      "topics": [
        "ACID Properties",
        "BEGIN, COMMIT, ROLLBACK",
        "Nested Transactions"
      ]
    },
    {
      "title": "Module 20: Interview Preparation",
      "topics": [
        "Commonly Asked SQL Server Interview Questions",
        "Problem-Solving Practice",
        "Mock Interviews"
      ]
    }
  ],
  "features": [
    "Real-time database scenario discussions",
    "Hands-on SQL coding labs",
    "Performance tuning tips and tricks",
    "Interview preparation and resume building",
    "Practical use of stored procedures, views, triggers"
  ]
  },
  
  snowflake: {
    "title": "Snowflake on AWS",
    "subtitle": "Cloud Data Warehousing and Analytics",
    "description": "Comprehensive Snowflake training focusing on cloud data warehousing architecture, AWS integration, performance optimization, and data sharing. Learn to design, implement, and manage enterprise-grade data solutions with Snowflake's cloud-native platform.",
    "image": "/images/courses/snowflake.jpg",
    "duration": "4 Weeks",
    "schedule": "Weekdays",
    "level": "Intermediate",
    "certification": "SnowPro Core Certification",
    "brochurePath": "/placeholder.svg",
    "syllabus": [
      {
        "title": "Module 1: Introduction to Datawarehouse and its Basics",
        "topics": [
          "What is Datawarehouse",
          "Dimensional & Fact tables",
          "Star, Snowflake & Galaxy Schemas",
          "Limitations of Traditional data warehouses",
          "Advantages of Cloud over On-Prem"
        ]
      },
      {
        "title": "Module 2: Getting Started with Snowflake",
        "topics": [
          "Snowflake History",
          "Create Snowflake trial account",
          "Snowflake Editions",
          "Web User Interface",
          "Different Roles in Snowflake",
          "Explore - Databases, Schemas and Tables",
          "Writing DDL & DML Queries"
        ]
      },
      {
        "title": "Module 3: Using Snowflake",
        "topics": [
          "Snowflake Architecture",
          "Virtual warehouse & Scalability",
          "Databases, Tables & Views",
          "Roles and Privileges",
          "Snowflake Pricing",
          "Query Processing in Snowflake"
        ]
      },
      {
        "title": "Module 4: Table types in snowflake",
        "topics": [
          "Permanent table",
          "Transient table",
          "Temporary table",
          "External Tables",
          "Dynamic Tables",
          "Iceberg Tables"
        ]
      },
      {
        "title": "Module 5: View types in snowflake",
        "topics": [
          "Standard Views",
          "Secure Views",
          "Materialized Views"
        ]
      },
      {
        "title": "Module 6: Micro Partitions & Clustering",
        "topics": [
          "What are Micropartitions",
          "Pruning",
          "What is Clustering?",
          "How clustering works & Its advantages"
        ]
      },
      {
        "title": "Module 7: AWS Cloud",
        "topics": [
          "Introduction Of AWS Cloud",
          "AWS Services (IAM, S3, SQS, SNS, DMS, RDS, CloudWatch etc)",
          "AWS & Snowflake Integration"
        ]
      },
      {
        "title": "Module 8: Stages, Data Loading & Unloading",
        "topics": [
          "FileFormats",
          "Internal (Table, User & Named) & External Stages",
          "Data Loading Considerations",
          "Preparing to Load Data",
          "Data Load using Web UI",
          "Data load using Copy Command",
          "Data load Using SnowSQL (Snowflake CLI Client)",
          "Snowpipe (Snowflake Continuous stream data integrations)",
          "Bulk loading",
          "Data Unloading into Internal Stages",
          "Data Unloading into External Stages"
        ]
      },
      {
        "title": "Module 9: Change Data Capture (CDC)",
        "topics": [
          "Streams",
          "Tasks",
          "SCDs (Slowly Changing Dimensions)"
        ]
      },
      {
        "title": "Module 10: Sharing Data in Snowflake",
        "topics": [
          "Introduction to Data Sharing",
          "Inbound Shares",
          "Outbound Shares",
          "Using Secure Objects to Control Data Access",
          "Advantages & Limitations Of Shares"
        ]
      },
      {
        "title": "Module 11: Caching Techniques",
        "topics": [
          "Metadata Cache",
          "Query Results Cache",
          "Disk/Data Cache"
        ]
      },
      {
        "title": "Module 12: Performance Tuning",
        "topics": [
          "Monitoring Credit and Storage Usage",
          "Resource Monitors",
          "Clustering",
          "Horizontal Scaling",
          "Autoscaling",
          "Other ways to improve Performance"
        ]
      },
      {
        "title": "Module 13: Interview Preparation",
        "topics": [
          "Realtime Scenarios",
          "Interview Questions & Answers",
          "SnowPro Preparation Material",
          "Sample Tests & Quiz"
        ]
      }
    ],
    "features": [
      "Hands-on Snowflake environment practice",
      "AWS integration exercises",
      "Performance optimization techniques",
      "Data loading and transformation scenarios",
      "Certification preparation materials"
    ]
  },
  
  softwareTesting: {
    "title": "Software Testing Training Program",
  "subtitle": "Master Manual and Automated Testing with Real-Time Projects",
  "description": "Comprehensive training in manual testing, automation with Selenium, BDD with Cucumber, SQL, Git, Jenkins, and more. Includes hands-on project work, resume preparation, and mock interviews to help you become job-ready.",
  "image": "/images/courses/software-testing.jpg",
  "duration": "60 Days",
  "schedule": "Weekdays",
  "level": "Beginner to Advanced",
  "certification": "Certified Software Testing Professional",
  "brochurePath": "/placeholder.svg",
  "syllabus": [
    {
      "title": "Module 1: Manual Testing",
      "topics": [
        "Software Testing Fundamentals",
        "Verification vs. Validation",
        "SDLC & STLC",
        "Test Cases, Plans, and Strategies",
        "Test Design Techniques: BVA, Equivalence, Decision Tables",
        "Bug Life Cycle, Reporting, Tracking Tools",
        "Types of Testing: Functional, Non-Functional, Black Box, White Box",
        "Testing Phases and Environments",
        "Requirement Traceability Matrix"
      ]
    },
    {
      "title": "Module 2: Core Java for Testers",
      "topics": [
        "Java Fundamentals, OOP Concepts",
        "Control Structures, Exception Handling",
        "Collections, Arrays, Strings",
        "Multithreading, Serialization",
        "SQL Basics for Testing: Joins, Aggregates, DDL/DML"
      ]
    },
    {
      "title": "Module 3: Selenium with Java",
      "topics": [
        "Selenium WebDriver Architecture",
        "Browser Setup and Test Execution",
        "Locators and XPath Techniques",
        "CSS Selectors and WebElements Handling",
        "Handling Alerts, Popups, Frames, and Windows",
        "Mouse & Keyboard Events, Screenshots"
      ]
    },
    {
      "title": "Module 4: Waits & TestNG",
      "topics": [
        "Implicit, Explicit, Fluent Waits",
        "TestNG Setup and Annotations",
        "Assertions, Test Suites, Data Providers",
        "TestNG Listeners and Reporting"
      ]
    },
    {
      "title": "Module 5: BDD with Cucumber",
      "topics": [
        "Agile and BDD Fundamentals",
        "Gherkin Syntax and Step Definitions",
        "BDD Framework Implementation"
      ]
    },
    {
      "title": "Module 6: Test Automation Frameworks",
      "topics": [
        "Types: Data-Driven, Keyword-Driven",
        "Custom Framework Design and Execution",
        "Modularity, Configurability, DRY Principle"
      ]
    },
    {
      "title": "Module 7: Project Execution",
      "topics": [
        "Automating Real-World Applications",
        "Framework Setup and Configuration",
        "Logging and Reporting",
        "Test Data Management"
      ]
    },
    {
      "title": "Module 8: Git & Jenkins",
      "topics": [
        "Git Basics: Setup, Commands, Version Control",
        "Branching, Merging, Conflict Resolution",
        "Jenkins Setup, Job Creation, CI Integration"
      ]
    },
    {
      "title": "Module 9: SQL for Testing",
      "topics": [
        "SQL Queries: Select, Insert, Update, Delete",
        "Joins, Aggregations, Constraints",
        "Views, Indexes, Keys, and Data Types"
      ]
    },
    {
      "title": "Module 10: Other Testing Concepts",
      "topics": [
        "Unix Basics",
        "Manual Mobile Testing",
        "API Testing Basics",
        "How to Test AI Applications like ChatGPT"
      ]
    },
    {
      "title": "Module 11: Career Preparation",
      "topics": [
        "Resume Preparation",
        "Mock Interviews"
      ]
    }
  ],
  "features": [
    "Complete Manual + Automation Coverage",
    "Live Project Execution",
    "Framework Design from Scratch",
    "CI/CD Integration using Jenkins & Git",
    "Resume and Interview Readiness"
  ]
  },
  
  kafka: {
    "title": "Confluent Kafka Certification",
    "subtitle": "Master Event Streaming Platform for Modern Applications",
    "description": "Comprehensive Confluent Kafka training covering architecture, installation, administration, and advanced features including Schema Registry, REST Proxy, and security. Gain hands-on experience with Kafka Connect, multi-node clusters, and real-time data streaming implementations.",
    "image": "/images/courses/kafka.jpg",
    "duration": "8 Weeks",
    "schedule": "Weekdays & Weekends",
    "level": "Intermediate to Advanced",
    "certification": "Confluent Kafka Developer Certification",
    "brochurePath": "/placeholder.svg",
    "syllabus": [
      {
        "title": "Module 1: Introduction to Kafka",
        "topics": [
          "What is Kafka",
          "Kafka Features and terminologies",
          "High-level kafka architecture",
          "Real-life Kafka Case Studies"
        ]
      },
      {
        "title": "Module 2: Kafka components",
        "topics": [
          "Broker",
          "Zookeeper",
          "Topics",
          "Partition",
          "Replication",
          "Producer",
          "Consumer"
        ]
      },
      {
        "title": "Module 3: Confluent Kafka Single-node Installation",
        "topics": [
          "Linux Environment setup and Pre-requisites",
          "Code download (Confluent community)",
          "Single broker installation",
          "Kafka broker and controller configuration and setup"
        ]
      },
      {
        "title": "Module 4: Kafka Administration (Using CLI)",
        "topics": [
          "Topics - Replication factor and Partitions",
          "Console Producer",
          "Console Consumer",
          "Console Consumer Groups",
          "Reset the offsets of a topic for a consumer group"
        ]
      },
      {
        "title": "Module 5: Kafka Administration (using GUI Tools)",
        "topics": [
          "OffSet Explorer (Kafka Tools)"
        ]
      },
      {
        "title": "Module 6: Kafka topic partition reassignment",
        "topics": [
          "Setup a two brokers kafka cluster",
          "Topic partition re-assignment"
        ]
      },
      {
        "title": "Module 7: Kafka Configurations",
        "topics": [
          "Broker level configurations (log.retention.hours, message.max.bytes, auto.create.topics.enable)",
          "Topics configuration (Changing a topic configuration, Retention time, Retention bytes, Min.insync.replicas)",
          "Log Cleanup policies (Delete, Compact)"
        ]
      },
      {
        "title": "Module 8: Kafka - Connect",
        "topics": [
          "Use of kafka -- connect",
          "Building a connector file with a simple json file",
          "File stream source connector setup in distribution mode",
          "Kafka connector status, start, stop, pause and resume scenarios"
        ]
      },
      {
        "title": "Module 9: Schema - Registry",
        "topics": [
          "Use of Schema -- Registry in kafka",
          "Building a Schema in avro using avrc file",
          "kafka-avro-console-producer use case",
          "kafka-avro-console-consumer use case"
        ]
      },
      {
        "title": "Module 10: Kafka Rest Proxy",
        "topics": [
          "Understanding REST Proxy",
          "Configuring and spinning up a REST Proxy",
          "Kafka topic end points with REST Proxy"
        ]
      },
      {
        "title": "Module 11: Kafka SSL Security",
        "topics": [
          "Encryption - SSL/TLS - setup",
          "Authentication",
          "Authorization (ACL)"
        ]
      },
      {
        "title": "Module 12: Confluent Kafka Multinode Installation",
        "topics": [
          "Linux Environment setup and Pre-requisites",
          "Code download (Confluent community)",
          "Zookeeper configuration and setup",
          "Kafka server configuration and setup"
        ]
      }
    ],
    "features": [
      "Hands-on Kafka cluster setup",
      "Data streaming implementations",
      "Schema Registry integration",
      "Security configuration practice",
      "Multi-node cluster deployment"
    ]
  },
  ibmMQCourse: {
    "title": "WebSphere IBM MQ Training",
  "subtitle": "Master Enterprise Messaging for Mission-Critical Applications",
  "description": "Comprehensive IBM MQ training covering installation, configuration, administration, security, performance tuning, and troubleshooting. Learn how to implement high-availability messaging solutions and integrate with cloud and hybrid environments through hands-on labs and real-world scenarios.",
  "image": "/images/courses/ibm-mq.jpg",
  "duration": "45 Days",
  "schedule": "Weekdays",
  "level": "Intermediate to Advanced",
  "certification": "IBM Certified Administrator - WebSphere MQ",
  "brochurePath": "/placeholder.svg",
  "syllabus": [
    {
      "title": "Module 1: Introduction to IBM MQ",
      "topics": [
        "What is IBM MQ and message-oriented middleware",
        "Role in enterprise messaging systems",
        "Key components: Queue Manager, Queues, Channels",
        "Message types and formats",
        "Message persistence and durability",
        "IBM MQ architecture overview",
        "Basic operations with MQ Explorer"
      ]
    },
    {
      "title": "Module 2: Installation and Configuration",
      "topics": [
        "Prerequisites and system requirements",
        "Installation on Windows and Linux platforms",
        "Creating and configuring Queue Managers",
        "Setting up system and user queues",
        "Defining channels and connections",
        "Multi-Queue Manager configuration",
        "One-to-Many and Many-to-One configurations"
      ]
    },
    {
      "title": "Module 3: Advanced IBM MQ Concepts",
      "topics": [
        "IBM MQ clustering fundamentals",
        "Benefits of clustering in message routing",
        "Cluster Queue Managers and cluster channels",
        "Troubleshooting MQ clusters",
        "High availability implementation",
        "Multi-instance queue managers",
        "Running and standby Queue Manager setup"
      ]
    },
    {
      "title": "Module 4: IBM MQ Security",
      "topics": [
        "Authentication and authorization mechanisms",
        "SSL/TLS encryption for secure communications",
        "Defining and managing security policies",
        "Securing MQ Channels",
        "User permissions and access control lists",
        "Role-based security in MQ",
        "Auditing, compliance, and event log management"
      ]
    },
    {
      "title": "Module 5: Performance Tuning",
      "topics": [
        "Performance monitoring tools (AMQMON, MQ Explorer)",
        "IBM MQ Performance Tuning Guide overview",
        "Optimizing queue performance",
        "Configuring channel buffers and timeouts",
        "Diagnosing performance issues",
        "Analyzing trace logs and error logs",
        "Resolving common MQ performance bottlenecks"
      ]
    },
    {
      "title": "Module 6: Integrating IBM MQ with Other Systems",
      "topics": [
        "IBM MQ client and server applications",
        "Message listeners and automated processing",
        "IBM MQ on cloud platforms",
        "Configuring MQ in hybrid cloud architectures",
        "Integration patterns and best practices"
      ]
    },
    {
      "title": "Module 7: Troubleshooting and Best Practices",
      "topics": [
        "Connection issues and channel failures",
        "Message loss and duplication problems",
        "Dead-letter queues and backout queues",
        "Error handling and recovery strategies",
        "Common issues and resolution techniques"
      ]
    },
    {
      "title": "Module 8: Migration and Upgrade to IBM MQ 9.2+",
      "topics": [
        "Steps for upgrading from previous versions",
        "Compatibility considerations",
        "Migration toolkit and utilities",
        "New features in IBM MQ 9.2+",
        "Multi-cloud environments and IBM MQ on Kubernetes"
      ]
    },
    {
      "title": "Module 9: Hands-on Labs",
      "topics": [
        "Setting up a basic IBM MQ environment",
        "Configuring security settings and user roles",
        "Implementing a clustered MQ setup",
        "Integrating MQ with sample applications",
        "Performance tuning exercises"
      ]
    },
    {
      "title": "Module 10: Interview Preparation",
      "topics": [
        "Resume preparation and optimization",
        "Job portal strategies",
        "Technical introduction techniques",
        "Common interview questions and answers",
        "Career path planning for MQ specialists"
      ]
    }
  ],
  "features": [
    "Hands-on IBM MQ environment setup",
    "Security configuration practice",
    "Performance tuning exercises",
    "High availability implementation",
    "Real-world troubleshooting scenarios"
  ]
  }
}

// Generate metadata for each course page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = courses[params.slug]

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    }
  }

  return {
    title: `${course.title} | Acquiescent`,
    description: course.description,
  }
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses[params.slug]

  if (!course) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <Link href="/courses" className="inline-flex items-center text-white/80 hover:text-white mb-2">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Courses
              </Link>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{course.title}</h1>
              <p className="text-xl text-white/80">{course.subtitle}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-white/70" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-white/70" />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-white/70" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-white/70" />
                  <span>{course.certification}</span>
                </div>
              </div>
              <DownloadBrochureButton 
                brochurePath={course.brochurePath} 
                courseTitle={course.title} 
              />
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={course.image || "/placeholder.svg?height=400&width=600"}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Course Overview</h2>
                    <p className="text-gray-700 leading-relaxed">{course.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Duration</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{course.duration}</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Schedule</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{course.schedule}</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Level</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{course.level}</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Certification</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{course.certification}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="syllabus" className="mt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Course Syllabus</h2>
                    <div className="space-y-8">
                      {course.syllabus.map((module, index) => (
                        <Card key={index} className="overflow-hidden">
                          <CardHeader className="bg-primary/5">
                            <CardTitle>{module.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-6">
                            <ul className="space-y-2">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="mt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Course Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {course.features.map((feature, index) => (
                        <Card key={index}>
                          <CardContent className="pt-6">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                              <p>{feature}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-primary text-white">
                    <CardTitle className="text-xl">Enroll in this Course</CardTitle>
                    <CardDescription className="text-white/80">Fill out the form below to get started</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <EnrollmentForm courseName={course.title} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary">Related Courses</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Explore other courses that might interest you
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(courses)
              .filter(([slug, _]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, relatedCourse]) => (
                <Card key={slug} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="aspect-video relative">
                    <Image
                      src={relatedCourse.image || "/placeholder.svg?height=200&width=400"}
                      alt={relatedCourse.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{relatedCourse.title}</CardTitle>
                    <CardDescription>{relatedCourse.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 line-clamp-2 mb-4">{relatedCourse.description}</p>
                    <Button asChild>
                      <Link href={`/courses/${slug}`}>View Course</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}

