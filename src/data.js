// Portfolio content sourced from Vikas_Resume.pdf.
export const data = {
  name: "Vikas Shukla",
  photo: "profile-image.png",
  location: "McLean, VA",
  phone: "+1 (716) 903-2501",
  email: "vikasofficial927@gmail.com",
  github: "crazyphoton007",
  linkedin: "vikas-shukla-48063b78",
  resumeUrl: "Vikas_Resume.pdf",
  kicker: "Scalable systems, analytics and engineering",
  experienceSummary: "8+ years experience",
  specialty: "Scalable, high-performance systems",
  headline: "Data Professional with 8+ years of experience building scalable, high-performance systems. Proven technical leader with a strong track record of delivering innovative solutions and leading cross-functional teams.",
  roles: ["Data Professional", "Snooker Player", "Analytics Builder"],
  about: "Data Professional with 8+ years of experience spanning data quality monitoring, analytics, machine learning infrastructure, and scalable backend systems. Builds automated Python, SQL, and PySpark workflows, productionizes models, and partners with engineering, risk, and compliance teams to deliver reliable systems and actionable insights.",
  skills: {
    languages: ["Python", "SQL", "PySpark", "Java"],
    engineering: ["Object-Oriented Programming", "Scalable Architecture", "Git"],
    tools: ["AWS Lambda", "Amazon S3", "Amazon ECS Fargate", "Amazon DynamoDB", "Amazon RDS", "Amazon SQS", "Amazon SNS", "Amazon Kinesis", "AWS CloudFormation", "AWS Glue", "Amazon EventBridge", "AWS AppConfig", "Databricks", "QuickSight", "Snowflake", "Excel"],
  },
  experience: [
    {
      company: "Capital One",
      title: "Contractor",
      team: "Cards Platform Engineering & Enterprise Services",
      dates: "Oct 2024 – Present",
      location: "McLean, VA",
      bullets: [
        "Built an automated Python/SQL data quality monitoring system with real-time KPI alerting, catching data issues before business impact in ~80% of cases and reducing weekly metric variance by 20%.",
        "Consolidated 40M+ transactions across disparate systems into a unified self-serve analytics layer, eliminating 60% of manual analysis cycles.",
        "Productionized fraud scoring models with automated threshold management via a CI/CD pipeline, achieving 98% model adoption across Risk Management teams.",
        "Partnered with engineering and compliance to align AI model outputs with U.S. regulatory standards; documented diagnostics and root-cause analysis fixes.",
        "Executed Risk Management and Audit testing using Test of Design and Test of Effectiveness for data pipeline controls. Mapped controls to risks.",
        "Developed and optimized complex PySpark scripts in Databricks, executing 70+ daily credit card controls to validate 15M+ accounts across APR, fees, payments, and statements.",
        "Managed campaign runs, production catch-up reruns, and script fixes, resolving data discrepancies, execution failures, and reconciliation mismatches across Cards Platform Engineering.",
        "Delivered high-level control performance reports, tracking execution status, mismatch trends, and risk indicators while supporting Script Governance, OE/DE testing, and audit readiness.",
      ],
    },
    {
      company: "Bayer",
      title: "Sr. Data Analyst (Contract)",
      dates: "Jul 2023 – Oct 2024",
      location: "St. Louis, MO",
      bullets: [
        "Transformed an aging analytics environment into a clean, modern reporting system. Rebuilt RMarkdown workflows and containerized all analytical steps in Docker, reducing reporting failures by 90%.",
        "Implemented scheduled job automation to generate updated reports monthly, ensuring stakeholders regularly received the most recent insights.",
        "Operationalized an R Shiny application for breeding data visualization and model training. Added logistic regression with regularization and stratified cross validation, with ROC and PR curves and threshold tuning. Improved AUC from 0.78 to 0.86, lifted F1 by 14%, and reduced iteration time from 3 days to 1.",
        "Produced complex plots and tables for large data analysis in LaTeX reports.",
      ],
    },
    {
      company: "Amazon",
      title: "Software Engineer",
      dates: "Jun 2022 – Apr 2023",
      location: "Bellevue, WA",
      bullets: [
        "Designed and deployed secure machine learning development infrastructure supporting model training, experimentation, and deployment workflows for the Alexa Data Science organization.",
        "Built an AI-powered notification quality assessment framework integrating user settings, reachability signals, and A/B test results across push, SMS, and email channels, improving Alexa user engagement and retention by 20%.",
        "Launched an uplift-based targeting system with guardrails against notification fatigue, reducing total sends by 22% with no engagement loss, cutting SMS/email failures by 30%, and lifting incremental conversion by 8%.",
        "Built scalable REST APIs and backend services following object-oriented design principles, supporting production experimentation platforms and distributed data pipelines.",
      ],
    },
    {
      company: "SGS Tekniks",
      title: "Data Analyst",
      dates: "Nov 2014 – May 2018",
      location: "Gurugram, IND",
      bullets: [
        "Automated on-premises server fleet scaling for the SGS tax engine during peak holiday traffic, reducing deployment time from 3–4 hours per server to just 25 seconds.",
        "Led the infrastructure design and deployment of the SGS tax processing platform, ensuring high availability, scalability, and reliable performance during peak sales periods.",
        "Mentored interns, organized innovation hackathons, and delivered technical training programs to strengthen team capability and engineering excellence.",
      ],
    },
  ],
  projects: [
    {
      name: "Fraud Detection Project",
      stack: ["Python", "SQL"],
      bullets: [
        "Engineered features using target encoding and transaction patterns, cleaned redundant attributes, and trained an XGBoost classifier.",
        "Validated performance using decile analysis, Lorenz curve, and Gini coefficient for discrimination strength.",
        "The top two deciles captured the majority of fraudulent transactions, achieving high recall while minimizing false positives.",
      ],
      links: [{ label: "Repo", href: "https://github.com/crazyphoton007/Fraud-detection/blob/main/fraud_detection.ipynb" }],
    },
    {
      name: "Cancer Gene Detection",
      stack: ["R", "Python", "SQL"],
      bullets: [
        "Reduced dimensionality from 20K+ features to ~500 using PCA + feature selection (~99.7% reduction).",
        "Applied multiple clustering algorithms on principal components to group patients.",
        "Validated clusters using original labels to confirm separability and interpretability.",
      ],
      links: [
        {
          label: "Repo",
          href: "https://github.com/crazyphoton007/Gene-Expression-Cancer-RNA-Sequence",
        },
      ],
    },
    {
      name: "Forecast Bike Rentals",
      stack: ["Python", "SQL"],
      bullets: [
        "Identified and plotted features with high and low correlation with the response variable.",
        "Used gradient boosting to estimate total rentals per hour for the last quarter of 2012.",
      ],
      links: [{ label: "Repo", href: "https://github.com/crazyphoton007/Forecast_Bike-Rentals" }],
    },
    {
      name: "IntelliQuery Engine",
      stack: ["Python", "SQL"],
      bullets: [
        "Implemented agentic routing and context-aware retrieval workflows for finance/legal queries, improving accuracy by 45% and reducing manual validation effort by 50%.",
        "Deployed a scalable FastAPI backend integrated with a React Native application, delivering production-grade, low-latency AI responses.",
      ],
      links: [{ label: "Repo", href: "https://github.com/crazyphoton007/Intelliquery-Engine" }],
    },
  ],
  education: [
    { school: "University at Buffalo", degree: "M.S. Data Science (GPA: 3.7 / 4.0)", dates: "Feb 2022" },
    { school: "SRM University, India", degree: "B.Tech. Electrical & Electronics Engineering (GPA: 8.6 / 10)", dates: "May 2014" },
  ],
};
