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
  awsSecurity:{
    "title": "AWS Security Engineer",
    "subtitle": "Master Cloud Security on AWS Platform",
    "description": "Comprehensive AWS security training covering the shared responsibility model, IAM, network security, data protection, compliance frameworks, and incident response. Gain hands-on experience with security tools and implement best practices for securing AWS infrastructure.",
    "image": "/images/courses/awssecurity.jpg",
    "duration": "60 Days",
    "schedule": "Weekdays",
    "level": "Intermediate to Advanced",
    "certification": "AWS Security Specialty",
    "brochurePath": "/brochure/AWS Security Engineer.pdf",
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
    ],"features": [
      "Comprehensive coverage of AWS security services and frameworks",
      "Hands-on experience with security tools and infrastructure",
      "In-depth IAM policy management and implementation",
      "Network security configurations including VPC, security groups, and NACLs",
      "Data protection strategies with KMS and encryption techniques",
      "Compliance frameworks and auditing implementation",
      "Incident response automation and monitoring"
    ]

  },
  mern: {
    "title": "MERN Stack Developer Course",
    "subtitle": "Become a Professional MERN Stack Developer",
    "description": "A structured, module-wise MERN Stack curriculum covering frontend, backend, and database technologies. Gain hands-on experience in full stack development using MongoDB, Express.js, React.js, and Node.js.",
    "image": "/images/courses/mern.jpg",
    "duration": "180 Days",
    "schedule": "Weekdays and Weekends",
    "level": "Beginner to Advanced",
    "certification": "MERN Stack Developer",
    "brochurePath": "/brochure/MernStack.pdf",
    "syllabus": [
      {
        "title": "HTML & CSS",
        "topics": [
          "Introduction to Web Technology and HTML",
          "HTML Tags, Elements, Forms, Tables, Semantic Tags",
          "CSS Basics, Selectors, Box Model, Flexbox, Grid, Media Queries",
          "Transitions, Animations, and Responsive Design"
        ]
      },
      {
        "title": "JavaScript & Advanced JavaScript",
        "topics": [
          "JavaScript Syntax, Variables, Data Types, Functions, DOM & Events",
          "ES6 Features, Closures, Callbacks, Promises, Async/Await",
          "Form Validation, Regular Expressions, Local & Session Storage"
        ]
      },
      {
        "title": "Bootstrap",
        "topics": [
          "Bootstrap Setup and Grid System",
          "Responsive Tables, Forms, Modals, Accordions",
          "Project-based UI development"
        ]
      },
      {
        "title": "React.js",
        "topics": [
          "JSX, Components, Props, State, Lifecycle",
          "Hooks (useState, useEffect, useContext, etc.)",
          "Routing, Forms, CRUD with APIs, Redux Toolkit"
        ]
      },
      {
        "title": "Node.js & Express.js",
        "topics": [
          "Node.js Basics, Modules, NPM, Express Framework",
          "HTTP Methods, Routing, Middleware",
          "Building REST APIs, JWT Authentication"
        ]
      },
      {
        "title": "MongoDB",
        "topics": [
          "NoSQL Concepts, CRUD Operations",
          "Indexing, Aggregation, Mongoose ODM",
          "Integration with Express and Node"
        ]
      },
      {
        "title": "Version Control with Git & GitHub",
        "topics": [
          "Git Basics, Cloning, Branching, Pushing",
          "Collaboration, GitHub Workflows"
        ]
      },
      {
        "title": "Deployment",
        "topics": [
          "Hosting Frontend and Backend",
          "Working with GitHub Pages, Heroku, Vercel, or Netlify"
        ]
      }
    ],
    "features": [
      "Complete Frontend and Backend Coverage",
      "Hands-on Project Development",
      "Modern JavaScript and React Hooks",
      "RESTful API Design with Node and Express",
      "MongoDB Database Integration",
      "Real-world Deployment Strategies",
      "Version Control using Git & GitHub"
    ]
  },
  confluenKafka:{
    "title": "Confluent Kafka",
    "subtitle": "Master Distributed Event Streaming Platform",
    "description": "Comprehensive Confluent Kafka training covering architecture, implementation, administration, and security. Learn to set up, configure, and manage Kafka clusters while integrating with various data sources using connectors, schema registry, and REST proxy.",
    "image": "/images/courses/kafka.jpg",
   "duration": "45 Days",
    "schedule": "Flexible",
    "level": "Intermediate",
    "certification": "Confluent Certified Developer for Apache Kafka",
    "brochurePath": "/brochure/Kafka.pdf",
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
    ], "features": [
      "Single-node and multi-node Kafka implementation",
      "Administration through CLI and GUI tools",
      "Connector integration and schema registry",
      "Security implementation with SSL/TLS",
      "Hands-on experience with Kafka Connect and REST Proxy",
      "Advanced configuration settings and partition management",
      "Data streaming capabilities and management"
    ]

  },
  snowflake:{
    "title": "Snowflake on AWS",
    "subtitle": "Cloud Data Warehousing Solutions",
    "description": "Comprehensive Snowflake training covering data warehousing fundamentals, Snowflake architecture, advanced features, and AWS integration. Learn to design, implement, and optimize data solutions while understanding Snowflake's unique pricing model and performance capabilities.",
    "image": "/images/courses/snowflake.jpg",
    "duration": "60 Days",
    "schedule": "Weekdays/Weekends",
    "level": "Beginner to Advanced",
    "certification": "SnowPro Core Certification",
    "brochurePath": "/brochure/SNOWFLAKE.pdf",
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
    ],"features": [
      "Cloud data warehousing architecture and design",
      "AWS services integration capabilities",
      "Data loading and optimization techniques",
      "Performance tuning and resource management",
      "Advanced data sharing and security implementation",
      "Micro-partitioning and clustering optimization",
      "Real-time scenario training and certification preparation"
    ]

  },
  python_full_stack:{
    "title": "Python Full Stack Development",
    "subtitle": "Master Web Development with Python & Modern Frameworks",
    "description": "Comprehensive full-stack Python development course covering frontend technologies (HTML, CSS, JavaScript), core Python programming, database interaction, and backend frameworks like Django/Flask. Learn to build complete web applications with modern responsive designs and RESTful APIs.",
    "image": "/images/courses/pythonfullstack.jpg",
    "duration": "150 Days",
    "schedule": "Flexible",
    "level": "Beginner to Advanced",
    "certification": "Python Full Stack Developer Certification",
    "brochurePath": "/brochure/Python FSD.pdf",
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
    ], "features": [
      "End-to-end web application development skills",
      "Frontend and backend integration expertise",
      "Database management and API development",
      "Responsive web design with modern frameworks",
      "JavaScript/TypeScript and Angular integration",
      "Object-oriented programming implementation",
      "RESTful API development with Django REST Framework"
    ]

  },
  aws_devops:{
    "title": "AWS & DevOps",
    "subtitle": "Cloud Infrastructure Automation & Continuous Delivery",
    "description": "Comprehensive AWS and DevOps course covering cloud infrastructure, automation tools, containerization, and CI/CD pipelines. Learn to implement infrastructure as code with Terraform, configuration management with Ansible, continuous integration with Jenkins, and container orchestration with Docker.",
    "image": "/images/courses/awsdevops.jpg",
    "duration": "60-90 Days",
    "schedule": "Weekdays",
    "level": "Intermediate",
    "certification": "AWS DevOps Engineer Professional",
    "brochurePath": "/brochure/AWS_DevOps .pdf",
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
    ],  "features": [
      "Continuous integration and deployment pipeline implementation",
      "Infrastructure as code with Terraform",
      "Configuration management with Ansible",
      "Containerization with Docker and orchestration",
      "Monitoring and logging implementation",
      "Cloud infrastructure design and management",
      "Serverless application development"
    ]

  },
  oracle_apex:{
    "title": "Oracle APEX",
    "subtitle": "Low-Code Application Development Platform",
    "description": "Comprehensive Oracle APEX course covering application development concepts, SQL Workshop, page building, and security implementation. Learn to create interactive reports, forms, and secure data-driven applications with minimal coding requirements using Oracle's enterprise-grade development platform.",
    "image": "/images/courses/oracleapex.jpg",
    "duration": "45 Days",
    "schedule": "Flexible",
    "level": "Beginner to Intermediate",
    "certification": "Oracle APEX Developer Certification",
    "brochurePath": "/brochure/OracleApex.pdf",
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
    ],  "features": [
      "Low-code application development expertise",
      "Interactive report and form creation",
      "Templates and themes customization",
      "Security implementation and access control",
      "SQL workshop and database integration",
      "Responsive design implementation",
      "Dynamic actions and JavaScript integration"
    ]

  },
  dataScience:{
    "title": "Data Science Complete Course",
    "subtitle": "Master Data Science with Python, Machine Learning, Deep Learning & Visualization",
    "description": "An end-to-end Data Science training covering Python, statistics, data wrangling, machine learning, deep learning, databases, NLP, and BI tools. Includes real-world projects and interview preparation.",
    "image": "/images/courses/datascience.jpg",
    "duration": "150 Days",
    "schedule": "Weekdays and Weekends",
    "level": "Beginner to Advanced",
    "certification": "Data Scientist Professional Certification",
    "brochurePath": "/brochure/Datascience.pdf",
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
  "duration": "60-90 Days",
  "schedule": "Weekdays",
  "level": "Beginner to Advanced",
  "certification": "Certified Software Testing Professional",
  "brochurePath": "/brochure/Softwaretesting.pdf",
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
  javafullstack:{
    "title": "Java Full Stack Development",
  "subtitle": "Master Java Programming with Core Concepts and Real-Time Projects",
  "description": "Comprehensive training in Java, covering core concepts, web technologies, frameworks, database handling, and much more. Includes hands-on projects, career readiness, and interview preparation.",
  "image": "/images/courses/javafullstack.jpg",
  "duration": "150 Days",
  "schedule": "Weekdays and Weekends",
  "level": "Beginner to Advanced",
  "certification": "Certified Java Developer",
  "brochurePath": "/brochure/JAVA.pdf",
  "syllabus": [
    {
      "title": "Module 1: Core Java",
      "topics": [
        "Introduction to Java",
        "Data Types and Variables",
        "Classes and Objects",
        "Object Oriented Programming",
        "Constructors",
        "Control Statements",
        "Abstract Classes",
        "Interfaces",
        "Packages",
        "Exception Handling",
        "Multi-threading",
        "Collection Framework",
        "Generics",
        "Input Output Streams",
        "Java 8 Features"
      ]
    },
    {
      "title": "Module 2: JDBC",
      "topics": [
        "Introduction to SQL",
        "Introduction to JDBC",
        "Architecture of JDBC",
        "Types of Drivers",
        "JDBC-ODBC Bridge Driver",
        "Native-API Driver",
        "Network Protocol Driver",
        "Thin Driver",
        "CRUD Operations using JDBC in Java",
        "Batch Processing",
        "Transaction Management"
      ]
    },
    {
      "title": "Module 3: Servlets",
      "topics": [
        "Introduction to Web Technologies",
        "Ways to create a Servlet",
        "Implementing Servlet Interface",
        "Extending GenericServlet",
        "Extending HttpServlet",
        "Html with Servlet Communication",
        "Html with Servlet and Database Communication",
        "Servlet with Servlet Communication",
        "ServletConfig & ServletContext",
        "Session Tracking"
      ]
    },
    {
      "title": "Module 4: JSP",
      "topics": [
        "Introduction to JSP",
        "Architecture of JSP",
        "JSP Scripting Elements",
        "Scriplet Tag",
        "Expression Tag",
        "Declaration Tag",
        "JSP Directive Elements",
        "page Directive",
        "include Directive",
        "taglib Directive",
        "JSP Action Elements",
        "forward",
        "include",
        "bean",
        "setProperty",
        "getProperty",
        "JSP Implicit objects",
        "request",
        "response",
        "config",
        "application",
        "session",
        "pageContext",
        "page",
        "exception",
        "JSP and JDBC"
      ]
    },
    {
      "title": "Module 5: Hibernate",
      "topics": [
        "Introduction to Hibernate",
        "Architecture of Hibernate",
        "Database CRUD Operations",
        "Inheritance",
        "Table per Hierarchy",
        "Table per Sub Class",
        "Table per Concrete Class",
        "Hibernate Relationships",
        "One-to-one",
        "One-to-many",
        "Many-to-one",
        "Many-to-many",
        "HQL and Restrictions",
        "Criteria in Hibernate"
      ]
    },
    {
      "title": "Module 6: Spring Framework",
      "topics": [
        "Introduction to Spring",
        "Spring Core (Basic Concepts)",
        "Spring Core (Advanced Concepts)",
        "Spring Core (3.0 Annotations)",
        "Spring MVC",
        "Spring AOP",
        "Spring ORM",
        "Spring Transaction",
        "Spring JDBC",
        "Creating Views in Spring MVC"
      ]
    },
    {
      "title": "Module 7: Spring Boot & REST API",
      "topics": [
        "Spring Boot Introduction",
        "Spring Boot + Maven – Hello World Example",
        "Creating a RESTful Web Service Example",
        "Common Application Properties",
        "How to Change Default Tomcat Server Port",
        "How to Change Default Context Path",
        "How to Reload Changes Without Restarting the Server",
        "How to Create/Configure a Data Source",
        "How to Configure Multiple Data Source",
        "Spring Boot + Spring Security – RESTful Web Service with basic Authentication",
        "Spring Boot + Spring Security – RESTful Web Service with Database Authentication",
        "Spring Boot + Spring MVC + JSP Hello World Example",
        "Spring Boot - RESTful Web Service with POST Request in JSON Example"
      ]
    },
    {
      "title": "Module 8: Microservices",
      "topics": [
        "Introduction to Microservices Architecture",
        "Fundamentals of RESTful Services",
        "Java Microservices with Spring Boot",
        "Building and Deploying Microservices",
        "Communication Between Microservices",
        "Microservices Data Management",
        "API Gateway and Service Discovery",
        "Security in Microservices",
        "Monitoring and Logging",
        "Testing Microservices",
        "Scaling Microservices",
        "DevOps and CI/CD for Microservices"
      ]
    },
    {
      "title": "Module 9: Agile Methodology",
      "topics": [
        "Agile Methodology Introduction",
        "Advantages & Disadvantages of Agile",
        "Agile Manifesto",
        "Agile Characteristics",
        "Agile SDLC",
        "Agile Scrum",
        "Agile Daily stand-up",
        "Product Management"
      ]
    },
    {
      "title": "Module 10: Tools and Technologies",
      "topics": [
        "Maven",
        "JUnit",
        "Log4J",
        "GitHub",
        "Jira"
      ]
    },
    {
      "title": "Module 11: Databases",
      "topics": [
        "MongoDB",
        "MySQL"
      ]
    },
    {
      "title": "Module 12: UI Technologies",
      "topics": [
        "Html",
        "JavaScript",
        "TypeScript",
        "React JS"
      ]
    },
    {
      "title": "Module 13: React JS",
      "topics": [
        "Introduction to React JS",
        "JSX",
        "Components",
        "State and Props",
        "React Hooks",
        "Forms in React",
        "React Router",
        "Redux for State Management",
        "API Integration",
        "Performance Optimisation",
        "Testing React Apps"
      ]
    },
    {
      "title": "Module 14: AI for Java",
      "topics": [
        "Introduction to AI",
        "Why use Java for AI?",
        "Machine Learning Basics",
        "Data Handling and Preprocessing",
        "Building Machine Learning Models in Java",
        "Neural Networks in Java",
        "Natural Language Processing (NLP) with Java",
        "AI in Real-Time Applications",
        "AI and Java for Image Recognition"
      ]
    },
    {
      "title": "Module 15: AWS Cloud Fundamentals",
      "topics": [
        "AWS Cloud Practitioner Essentials",
        "Introduction to Amazon Web Services",
        "Compute in the Cloud",
        "Global Infrastructure and Reliability",
        "Networking",
        "Storage and Databases",
        "Security"
      ]
    },
    {
      "title": "Module 16: DevOps Fundamentals",
      "topics": [
        "Introduction to DevOps",
        "DevOps Architecture",
        "DevOps Lifecycle",
        "Pipeline and Methodology",
        "Jenkins"
      ]
    }
  ],
  "features": [
    "Complete Java Programming Coverage",
    "Real-Time Project Work",
    "Java Frameworks and Tools Integration",
    "Database and Cloud Integration",
    "Agile Methodology and Scrum Practices",
    "Career Readiness and Mock Interviews"
  ]
  },
  sqlServer: {
    "title": "SQL Server Training Program",
    "subtitle": "Master SQL Server Database Management and Azure Data Pipelines",
    "description": "Comprehensive course covering SQL Server fundamentals, database operations, and Azure Data Factory for ETL pipeline development. Ideal for aspiring data engineers and analysts.",
   "image": "/images/courses/sqlserver.jpg",
    "duration": "30 Days",
    "schedule": "Weekdays",
    "level": "Beginner to Intermediate",
    "certification": "Certified SQL Server & ADF Professional",
    "brochurePath": "/brochure/Sql server.pdf",
    "syllabus": [
      {
        "title": "Module 1: Getting started with the database",
        "topics": ["Database and its overview"]
      },
      {
        "title": "Module 2: Creating, Dropping & Restoring Sql server database",
        "topics": ["Download & Restore Adventure Works"]
      },
      {
        "title": "Module 3: Creating and working with tables",
        "topics": []
      },
      {
        "title": "Module 4: Constraints and working with Identity Column",
        "topics": []
      },
      {
        "title": "Module 5: Data types and built-in functions",
        "topics": []
      },
      {
        "title": "Module 6: Working with data (Insert, Update, Delete)",
        "topics": []
      },
      {
        "title": "Module 7: Retrieving data using SELECT Statement",
        "topics": []
      },
      {
        "title": "Module 8: Filtering data using WHERE clause",
        "topics": []
      },
      {
        "title": "Module 9: Using Operators in queries",
        "topics": []
      },
      {
        "title": "Module 10: Sorting and Pagination",
        "topics": []
      },
      {
        "title": "Module 11: Joins and Subqueries",
        "topics": []
      },
      {
        "title": "Module 12: Grouping and Aggregating Data",
        "topics": []
      },
      {
        "title": "Module 13: Views and Indexes",
        "topics": []
      },
      {
        "title": "Module 14: Stored Procedures and Functions",
        "topics": []
      },
      {
        "title": "Module 15: Triggers and Transactions",
        "topics": []
      },
      {
        "title": "Module 16: Introduction to Azure Data Factory",
        "topics": ["What is Cloud", "Create resource group", "Azure Data Factory UI Walkthrough", "Create Free Azure Subscription"]
      },
      {
        "title": "Module 17: Key concepts of Azure Data Factory",
        "topics": ["Integration Runtime, Linked Services, Datasets, Activities, Pipelines, Triggers"]
      },
      {
        "title": "Module 18: Data Flow Activities",
        "topics": ["Mapping Data Flows", "Data Transformations", "Data Sink and Data Source"]
      },
      {
        "title": "Module 19: Parameters, Variables, Expressions",
        "topics": ["Dynamic Content", "Pipeline Parameters", "Data Flow Parameters"]
      },
      {
        "title": "Module 20: Real-Time Project using ADF",
        "topics": ["ETL Scenario Implementation", "Debugging & Monitoring", "CI/CD Integration"]
      }
    ],
    "features": [
      "End-to-End SQL Server & ADF Training",
      "Hands-on Database Management Practice",
      "Real-Time Data Flow Projects in Azure",
      "Resume and Interview Support",
      "Industry-Relevant Use Cases"
    ]
  },
  azureADF: {
    "title": "Azure Data Factory Training Program",
    "subtitle": "Master Azure Data Engineering Workflows",
    "description": "A comprehensive hands-on course to master Azure Data Factory pipelines, data flows, triggers, Databricks integration, and real-time project experience.",
    "image": "/images/courses/azuredatafactory.jpg",
    "duration": "30 Days",
    "schedule": "Weekdays",
    "level": "Intermediate",
    "certification": "Certified Azure Data Engineer",
    "brochurePath": "/brochure/Azure Data Factory.pdf",
    "syllabus": [
      {
        "title": "Module 1: Introduction to Azure Data Factory",
        "topics": [
          "What is Cloud",
          "Create resource group",
          "Azure Data Factory UI Walkthrough",
          "Create Free Azure Subscription"
        ]
      },
      {
        "title": "Module 2: Key Concepts of Azure Data Factory",
        "topics": [
          "Integration Runtime",
          "Linked Services",
          "Datasets",
          "Activities",
          "Pipelines",
          "Triggers"
        ]
      },
      {
        "title": "Module 3: Variable & Parameters",
        "topics": []
      },
      {
        "title": "Module 4: Activities in ADF",
        "topics": [
          "Copy Data",
          "Join",
          "Conditional Split",
          "Exists",
          "Union",
          "Lookup",
          "Derived Column",
          "Select",
          "Aggregate",
          "Surrogate Key",
          "Pivot",
          "Unpivot Key",
          "Window",
          "Rank",
          "External Call",
          "Cast",
          "Flatten",
          "Parse",
          "Stringify",
          "Filter",
          "Sort",
          "Alter Row",
          "Assert",
          "Flowlet",
          "Sink"
        ]
      },
      {
        "title": "Module 5: General Activities",
        "topics": [
          "Append Variable",
          "Delete",
          "Execute Pipeline",
          "Execute SSIS Package",
          "Fail",
          "Get Metadata",
          "Lookup",
          "Stored Procedure",
          "Script",
          "Set Variable",
          "Validation",
          "Web"
        ]
      },
      {
        "title": "Module 6: Iteration & Conditionals",
        "topics": [
          "Filter",
          "For Each",
          "If Condition",
          "Switch",
          "Until"
        ]
      },
      {
        "title": "Module 7: Databricks Integration",
        "topics": [
          "Notebook",
          "Jar",
          "Python",
          "Job"
        ]
      },
      {
        "title": "Module 8: Azure Key Vault",
        "topics": []
      },
      {
        "title": "Module 9: Change Data Capture",
        "topics": []
      },
      {
        "title": "Module 10: Code Repository",
        "topics": []
      },
      {
        "title": "Module 11: Real-Time Interview Questions",
        "topics": []
      },
      {
        "title": "Module 12: Mini Project on ADF",
        "topics": []
      }
    ],
    "features": [
      "Hands-on ADF Pipeline Design",
      "Extensive Coverage of Data Flow & Control Flow",
      "Databricks and Azure Integration",
      "Mini Project for Real-World Experience",
      "Interview Preparation Support"
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
                courseSlug={params.slug}
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

