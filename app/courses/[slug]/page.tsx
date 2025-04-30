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
  aws_security:{
    "title": "AWS Security Engineer",
    "subtitle": "Master Cloud Security on AWS Platform",
    "description": "Comprehensive AWS security training covering the shared responsibility model, IAM, network security, data protection, compliance frameworks, and incident response. Gain hands-on experience with security tools and implement best practices for securing AWS infrastructure.",
    "image": "/images/courses/awssecurity.jpg",
    "duration": "12 Days",
    "schedule": "Weekdays",
    "level": "Intermediate to Advanced",
    "certification": "AWS Security Specialty",
    "brochurePath": "/placeholder.svg",
    "syllabus": [
      {
        "title": "Module 1: Introduction to AWS Security",
        "topics": [
          "AWS Cloud Security Overview",
          "Understanding the Shared Responsibility Model",
          "Security and compliance objectives in cloud computing",
          "Core AWS security services overview",
          "Introduction to AWS Identity and Access Management (IAM)",
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
          "Review of tools like Wiz, Panaseer, Aikido"
        ]
      }
    ]
  },
  confluent_kafka:{
    "title": "Confluent Kafka",
    "subtitle": "Master Distributed Event Streaming Platform",
    "description": "Comprehensive Confluent Kafka training covering architecture, implementation, administration, and security. Learn to set up, configure, and manage Kafka clusters while integrating with various data sources using connectors, schema registry, and REST proxy.",
    "image": "/images/courses/kafka.jpg",
    "duration": "12 Modules",
    "schedule": "Flexible",
    "level": "Intermediate",
    "certification": "Confluent Certified Developer for Apache Kafka",
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
        "title": "Module 2: Kafka Components",
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
        "title": "Module 4: Kafka Administration (CLI)",
        "topics": [
          "Topic management (Replication factor, Partitions)",
          "Console Producer",
          "Console Consumer",
          "Console Consumer Groups",
          "Reset the offsets of a topic for a consumer group"
        ]
      },
      {
        "title": "Module 5: Kafka Administration (GUI Tools)",
        "topics": [
          "OffSet Explorer (Kafka Tools)"
        ]
      },
      {
        "title": "Module 6: Kafka Topic Partition Reassignment",
        "topics": [
          "Setup a two brokers kafka cluster",
          "Topic partition re-assignment"
        ]
      },
      {
        "title": "Module 7: Kafka Configurations",
        "topics": [
          "Broker level configurations",
          "Topics configuration",
          "Retention settings",
          "Min.insync.replicas",
          "Log Cleanup policies (Delete, Compact)"
        ]
      },
      {
        "title": "Module 8: Kafka Connect",
        "topics": [
          "Use of kafka-connect",
          "Building a connector file with a simple json file",
          "File stream source connector setup in distribution mode",
          "Kafka connector status, start, stop, pause and resume scenarios"
        ]
      },
      {
        "title": "Module 9: Schema Registry",
        "topics": [
          "Use of Schema-Registry in kafka",
          "Building a Schema in avro using avrc file",
          "kafka-avro-console-producer use case",
          "kafka-avro-console-consumer use case"
        ]
      },
      {
        "title": "Module 10: Kafka REST Proxy",
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
          "Multi-broker installation",
          "Zookeeper configuration and setup",
          "Kafka server configuration and setup"
        ]
      }
    ]
  },
  snowflake_aws:{
    "title": "Snowflake on AWS",
    "subtitle": "Cloud Data Warehousing Solutions",
    "description": "Comprehensive Snowflake training covering data warehousing fundamentals, Snowflake architecture, advanced features, and AWS integration. Learn to design, implement, and optimize data solutions while understanding Snowflake's unique pricing model and performance capabilities.",
    "image": "/images/courses/snowflake.jpg",
    "duration": "10 Modules",
    "schedule": "Weekdays/Weekends",
    "level": "Beginner to Advanced",
    "certification": "SnowPro Core Certification",
    "brochurePath": "/placeholder.svg",
    "syllabus": [
      {
        "title": "Pre-requisites",
        "topics": [
          "Basic Of SQL",
          "Datawarehousing basics",
          "Cloud Exposure"
        ]
      },
      {
        "title": "Module 1: Introduction of Datawarehouse and its Basics",
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
        "title": "Module 4: Table types in Snowflake",
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
        "title": "Module 5: View types in Snowflake",
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
          "Internal & External Stages",
          "Data Loading Considerations",
          "Preparing to Load Data",
          "Data Load using Web UI",
          "Data load using Copy Command",
          "Data load Using SnowSQL",
          "Snowpipe Continuous Stream Data Integration",
          "Bulk loading",
          "Data Unloading into Internal and External Stages"
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
        "title": "Additional Resources",
        "topics": [
          "Realtime Scenarios",
          "Interview Questions & Answers",
          "SnowPro Preparation Material",
          "Sample Tests & Quiz"
        ]
      }
    ]
  },
  python_full_stack:{
    "title": "Python Full Stack Development",
    "subtitle": "Master Web Development with Python & Modern Frameworks",
    "description": "Comprehensive full-stack Python development course covering frontend technologies (HTML, CSS, JavaScript), core Python programming, database interaction, and backend frameworks like Django/Flask. Learn to build complete web applications with modern responsive designs and RESTful APIs.",
    "image": "/images/courses/pythonfullstack.jpg",
    "duration": "16 Weeks",
    "schedule": "Flexible",
    "level": "Beginner to Advanced",
    "certification": "Python Full Stack Developer Certification",
    "brochurePath": "/placeholder.svg",
    "syllabus": [
      {
        "title": "Module 1: Frontend Development",
        "topics": [
          "HTML 5 Fundamentals and Semantic Elements",
          "Document structure and formatting",
          "Tables, Lists, and Links",
          "Image Handling and Frames",
          "HTML Forms and Input Elements",
          "CSS 3 Basics and Selectors",
          "Text Formatting, Fonts, and Colors",
          "Borders, Backgrounds, and Shadows",
          "Bootstrap Framework",
          "Responsive Web Design with Bootstrap Grid System"
        ]
      },
      {
        "title": "Module 2: JavaScript & TypeScript",
        "topics": [
          "JavaScript ES6 Features",
          "Variable Declarations (var, let, const)",
          "Arrow Functions and Template Strings",
          "Object Destructuring and Spread/Rest Operators",
          "Asynchronous Programming with Promises",
          "TypeScript Fundamentals",
          "Types, Custom Objects, and Interfaces",
          "Classes and Decorators",
          "Object-Oriented Programming in TypeScript"
        ]
      },
      {
        "title": "Module 3: Core Python Programming",
        "topics": [
          "Python Introduction and Environment Setup",
          "Variables, Data Types, and Operators",
          "Control Flow (Conditionals and Loops)",
          "String Manipulation and Formatting",
          "Data Structures (Lists, Tuples, Sets, Dictionaries)",
          "Functions and Lambda Expressions",
          "File I/O Operations",
          "Object-Oriented Programming Concepts",
          "Exception Handling",
          "Regular Expressions",
          "Multi-threaded Programming"
        ]
      },
      {
        "title": "Module 4: Database & SQL Fundamentals",
        "topics": [
          "Relational Database Concepts",
          "Basic SQL Commands (SELECT, INSERT, UPDATE, DELETE)",
          "Filtering and Sorting Results",
          "Joins and Relationships",
          "Group By and Aggregate Functions",
          "Python Database Connectivity (PDBC)",
          "Performing CRUD Operations with Python"
        ]
      },
      {
        "title": "Module 5: Django/Flask Framework",
        "topics": [
          "Django Installation and Project Setup",
          "Django Project Structure and Admin Interface",
          "Django Commands and Shell",
          "URL Routing and Views",
          "Django Templates and Forms",
          "Django ORM and Database Migrations",
          "Authentication and Authorization",
          "RESTful API Development with Django REST Framework",
          "Flask Alternative for Lightweight Applications"
        ]
      },
      {
        "title": "Module 6: Angular Framework",
        "topics": [
          "Angular Introduction and Environment Setup",
          "Angular CLI and Project Structure",
          "Components and Modules",
          "Data Binding and Directives",
          "Services and Dependency Injection",
          "Forms (Template-Driven and Reactive)",
          "Routing and Navigation",
          "HTTP Requests and Observables",
          "Component Lifecycle Hooks"
        ]
      }
    ]
  },
  aws_devops:{
    "title": "AWS & DevOps",
    "subtitle": "Cloud Infrastructure Automation & Continuous Delivery",
    "description": "Comprehensive AWS and DevOps course covering cloud infrastructure, automation tools, containerization, and CI/CD pipelines. Learn to implement infrastructure as code with Terraform, configuration management with Ansible, continuous integration with Jenkins, and container orchestration with Docker.",
    "image": "/images/courses/awsdevops.jpg",
    "duration": "22 Days",
    "schedule": "Weekdays",
    "level": "Intermediate",
    "certification": "AWS DevOps Engineer Professional",
    "brochurePath": "/placeholder.svg",
    "syllabus": [
      {
        "title": "Module 1: DevOps Fundamentals",
        "topics": [
          "What is DevOps",
          "Tools used in DevOps Process",
          "DevOps Culture and Practices"
        ]
      },
      {
        "title": "Module 2: Source Code Management",
        "topics": [
          "Github, Git Client",
          "Gitlab, Bitbucket and Azure Repos",
          "Github actions",
          "Commonly used Git commands",
          "Git Branching and Workflows"
        ]
      },
      {
        "title": "Module 3: Infrastructure as Code with Terraform",
        "topics": [
          "Intro to Terraform, Advantages",
          "Terraform Providers",
          "Terraform Commands",
          "Terraform Backend and State Management",
          "Terraform Modules and Best Practices"
        ]
      },
      {
        "title": "Module 4: CI/CD with Jenkins",
        "topics": [
          "Intro to CI/CD, Jenkins",
          "Installation and Setup of Jenkins",
          "Jenkins Jobs - Freestyle and Pipeline Jobs",
          "Jenkins Slave Setup",
          "Jenkins Groovy Scripting"
        ]
      },
      {
        "title": "Module 5: Configuration Management with Ansible",
        "topics": [
          "Intro to Config Management Tools",
          "Advantages of using Config Management",
          "Ansible Installation and Setup",
          "Ansible Adhoc Commands",
          "Ansible Modules - Shell, File, Copy and Apt",
          "Ansible Playbooks",
          "Ansible Variables - Global, Play, Group and Host vars",
          "Loops in Ansible",
          "Handlers and Error/Exception Handling"
        ]
      },
      {
        "title": "Module 6: Containerization with Docker",
        "topics": [
          "Intro to Microservices and Docker",
          "Docker Installation and Commands",
          "Sample Docker File",
          "Docker Volume",
          "Dockerhub Registry",
          "Dependent Containers",
          "Docker Env Variables",
          "Docker Compose",
          "Docker Networking",
          "Container Orchestration",
          "Docker Swarm"
        ]
      },
      {
        "title": "Module 7: Logging and Monitoring",
        "topics": [
          "Cloudwatch Logs",
          "Logging Tools - ELK, Splunk",
          "Monitoring Tools - Grafana, Prometheus, Nagios, Zabbix",
          "Grafana and Prometheus Setup"
        ]
      },
      {
        "title": "Module 8: Agile Development",
        "topics": [
          "Intro to Agile and Project Development",
          "Jira Tool",
          "Sprint Planning, Daily Standup",
          "Agile Story, Backlog, Sprint, Retro"
        ]
      },
      {
        "title": "Module 9: Azure DevOps",
        "topics": [
          "Intro to Azure DevOps",
          "Azure Boards, Repos, Pipelines, Artifacts",
          "Running a Sample Job"
        ]
      },
      {
        "title": "Module 10: AWS Cloud Fundamentals",
        "topics": [
          "Cloud Computing Concepts",
          "AWS Services Overview",
          "AWS Region, AZ, Edge Location",
          "AWS Pricing Models"
        ]
      },
      {
        "title": "Module 11: AWS Compute and Networking",
        "topics": [
          "EC2 and Instance Types",
          "Security Groups",
          "VPC and Subnets",
          "Internet and NAT Gateway",
          "Load Balancer Types"
        ]
      },
      {
        "title": "Module 12: AWS Storage and Image Management",
        "topics": [
          "AMI and Marketplace",
          "AWS Metadata and Userdata",
          "EBS and Instance Store",
          "EBS Types",
          "Storage Services and Classes"
        ]
      },
      {
        "title": "Module 13: Infrastructure as Code in AWS",
        "topics": [
          "AWS CLI Install and Setup",
          "CloudFormation Templates",
          "YAML and JSON Templates"
        ]
      },
      {
        "title": "Module 14: AWS Database Services",
        "topics": [
          "RDS Overview",
          "DB Engine Options",
          "RDS Backup and Snapshots",
          "DynamoDB, ElastiCache"
        ]
      },
      {
        "title": "Module 15: AWS Identity and Management",
        "topics": [
          "IAM Overview",
          "IAM Users, Roles and Policies",
          "IAM Best Practices",
          "IAM Access Keys"
        ]
      },
      {
        "title": "Module 16: AWS Monitoring and Route Services",
        "topics": [
          "CloudWatch",
          "CloudTrail",
          "VPC Flow Logs",
          "Route53 and DNS",
          "Routing Policies"
        ]
      },
      {
        "title": "Module 17: AWS Serverless Services",
        "topics": [
          "Lambda Functions",
          "Step Functions",
          "API Gateway",
          "AWS Athena",
          "Event Bridge"
        ]
      }
    ]
  },
  oracle_apex:{
    "title": "Oracle APEX",
    "subtitle": "Low-Code Application Development Platform",
    "description": "Comprehensive Oracle APEX course covering application development concepts, SQL Workshop, page building, and security implementation. Learn to create interactive reports, forms, and secure data-driven applications with minimal coding requirements using Oracle's enterprise-grade development platform.",
    "image": "/images/courses/oracleapex.jpg",
    "duration": "11 Modules",
    "schedule": "Flexible",
    "level": "Beginner to Intermediate",
    "certification": "Oracle APEX Developer Certification",
    "brochurePath": "/placeholder.svg",
    "syllabus": [
      {
        "title": "Module 1: Introduction To Oracle Application Express",
        "topics": [
          "What is Oracle Application Express (Oracle APEX)?",
          "Oracle APEX Architecture",
          "APEX Benefits and Use Cases"
        ]
      },
      {
        "title": "Module 2: APEX Demonstration Application",
        "topics": [
          "Creating and logging onto APEX workspace",
          "Running APEX demonstration application",
          "Understanding APEX interface"
        ]
      },
      {
        "title": "Module 3: APEX Application Builder Concepts",
        "topics": [
          "Page processing and Rendering in APEX",
          "Substitution strings & URL syntax in APEX",
          "Application Components"
        ]
      },
      {
        "title": "Module 4: Using SQL Workshop In APEX",
        "topics": [
          "Using Object Browser, SQL Commands",
          "Create, edit and drop database objects in APEX",
          "Using SQL Scripts to create, edit, delete and run SQL & PL/SQL scripts"
        ]
      },
      {
        "title": "Module 5: Understanding Pages and Regions",
        "topics": [
          "What is a Page & Region in APEX",
          "APEX Page Processing",
          "Shared Components",
          "Region Types and Properties"
        ]
      },
      {
        "title": "Module 6: Creating Reports and Forms",
        "topics": [
          "Creating Interactive Reports in APEX",
          "Interactive APEX Report & Column Attributes",
          "Creating Simple Forms, Tabular Forms, Master-Detail Forms"
        ]
      },
      {
        "title": "Module 7: Working With Items & Buttons",
        "topics": [
          "Creating Different Types of Items (Text, Text Area, Checkbox, Select List, Radio Group)",
          "Understanding Buttons in APEX",
          "Creating Tabs, Lists and Breadcrumbs, List of Values"
        ]
      },
      {
        "title": "Module 8: APEX Shared Components",
        "topics": [
          "Understanding Different Attributes of APEX Shared Components",
          "Navigation and User Interface Components",
          "Logic and Validation Components"
        ]
      },
      {
        "title": "Module 9: Page Processing in APEX",
        "topics": [
          "Dynamic Actions, Validations and Computations",
          "Advanced Computations",
          "JavaScript in APEX"
        ]
      },
      {
        "title": "Module 10: Themes & Templates",
        "topics": [
          "Understanding Themes & Templates in APEX",
          "Customizing Templates",
          "Responsive Design Implementation"
        ]
      },
      {
        "title": "Module 11: Oracle APEX Security",
        "topics": [
          "Understanding Different Authentication & Authorization Options",
          "Security Best Practices",
          "Access Control Implementation"
        ]
      }
    ]
  },
  data_science:{
    "title": "Data Science Complete Course",
    "subtitle": "Master Data Science with Python, Machine Learning, Deep Learning & Visualization",
    "description": "An end-to-end Data Science training covering Python, statistics, data wrangling, machine learning, deep learning, databases, NLP, and BI tools. Includes real-world projects and interview preparation.",
    "image": "/images/courses/datascience.jpg",
    "duration": "45 Days",
    "schedule": "Weekdays and Weekends",
    "level": "Beginner to Advanced",
    "certification": "Data Scientist Professional Certification",
    "brochurePath": "/placeholder.svg",
    "syllabus": [
      {
        "title": "Module 1: Python Programming for Data Science",
        "topics": [
          "Core Python Basics and Installation",
          "Data Types, Variables, Operators",
          "Conditionals and Loops",
          "Data Structures: List, Tuple, Dict, Set",
          "Functions, Lambda, Map/Filter/Reduce",
          "OOPs Concepts, Modules and Libraries",
          "Exception and File Handling",
          "Multithreading and Multiprocessing"
        ]
      },
      {
        "title": "Module 2: Data Collection & Cleaning",
        "topics": [
          "Primary and Secondary Data Sources",
          "Kaggle, UCI ML Repositories",
          "SQL Import/Export, Web Scraping",
          "Data Validation & Normalization",
          "Handling Spaces, Nulls, and Duplicates"
        ]
      },
      {
        "title": "Module 3: Exploratory Data Analysis (EDA)",
        "topics": [
          "Univariate, Bivariate, and Multivariate Analysis",
          "Descriptive Statistics and Distributions",
          "Skewness, Kurtosis, Correlation & Covariance",
          "Data Visualization using Matplotlib, Seaborn",
          "Plots: Histogram, Boxplot, Heatmap, Pairplot"
        ]
      },
      {
        "title": "Module 4: Inferential Statistics",
        "topics": [
          "Population vs Sample, Probability Distributions",
          "Z-scores, Confidence Intervals",
          "Hypothesis Testing: Z-Test, ANOVA, Chi-Square"
        ]
      },
      {
        "title": "Module 5: Data Preparation & Feature Engineering",
        "topics": [
          "Handling Missing Values and Outliers",
          "Feature Selection, Generation, and Modification",
          "Scaling Techniques and Encoding Methods",
          "Avoiding Data Leakage"
        ]
      },
      {
        "title": "Module 6: Machine Learning Algorithms",
        "topics": [
          "Supervised Learning Overview",
          "Regression Models: Linear, Polynomial, Lasso, Ridge",
          "Classification: Logistic, KNN, SVM, Naïve Bayes",
          "Ensemble: Random Forest, Boosting, Bagging",
          "Model Evaluation and Hyperparameter Tuning",
          "Cross Validation and Bias-Variance Trade-off"
        ]
      },
      {
        "title": "Module 7: Unsupervised Learning",
        "topics": [
          "Dimensionality Reduction with PCA",
          "Clustering: K-Means, Hierarchical, DBSCAN"
        ]
      },
      {
        "title": "Module 8: Deep Learning with Neural Networks",
        "topics": [
          "Neural Network Basics and Architecture",
          "ANN for Regression and Classification",
          "CNN for Image Classification",
          "Object Detection: YOLO, R-CNN",
          "Transfer Learning Techniques"
        ]
      },
      {
        "title": "Module 9: Natural Language Processing (NLP)",
        "topics": [
          "Text Data Collection and Cleaning",
          "Tokenization, Stop Words, Lemmatization",
          "Text Vectorization: BOW, TF-IDF, Word2Vec",
          "Text Classification and Sentiment Analysis",
          "RNN & LSTM for Sequence Models"
        ]
      },
      {
        "title": "Module 10: Databases for Data Science",
        "topics": [
          "Basics of DBMS and RDBMS (MySQL)",
          "SQL Queries: DDL, DML, Joins, Aggregations",
          "NoSQL with MongoDB: CRUD Operations"
        ]
      },
      {
        "title": "Module 11: BI Tools - Tableau or Power BI",
        "topics": [
          "Introduction and Installation",
          "Connecting Data Sources",
          "Creating Visualizations and Dashboards",
          "Storytelling with Data",
          "Case Study on Data Visualization"
        ]
      },
      {
        "title": "Module 12: Projects and Interview Preparation",
        "topics": [
          "End-to-End Regression and Classification Projects",
          "Image and Text Data Projects",
          "Case Studies on Real-World Data",
          "Mock Interviews and Q&A Sessions"
        ]
      }
    ],
    "features": [
      "Hands-on Python and ML Labs",
      "Project-based Learning with Real Datasets",
      "Advanced Deep Learning and NLP Coverage",
      "Database and BI Tool Integration",
      "Interview Preparation and Certification Support"
    ]
  },
  softwareTesting: {
  "title": "Software Testing Training Program",
  "subtitle": "Master Manual and Automated Testing with Real-Time Projects",
  "description": "Comprehensive training in manual testing, automation with Selenium, BDD with Cucumber, SQL, Git, Jenkins, and more. Includes hands-on project work, resume preparation, and mock interviews to help you become job-ready.",
  "image": "/images/courses/softwaretesting.jpg",
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

