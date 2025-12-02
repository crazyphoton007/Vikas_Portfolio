export const links = {
  email: "vikasofficial927@gmail.com",
  linkedIn: "https://www.linkedin.com/in/vikas-shukla-48063b78/",
  github: "https://github.com/crazyphoton007",
  resume: "/Vikas_Shukla_Resume.pdf",
  website: "https://crazyphoton007.github.io/vShukla/"
};

export const hero = {
  name: "Vikas Shukla",
  title: "Data Scientist",
  tagline:
    "I design and productionize models that support real business decisions, covering trial analytics, commercial insights, fraud detection, customer behavior, and cloud-scale data.",
  location: "USA",
};

export const about = {
  summary: "Innovative and collaborative Data Scientist with 7+ years delivering large scale models. Detail oriented with a track record of structured execution. Experienced in cloud scale data solutions focused on market behavior analysis, insight generation, and decision support."

};

export const experience = [
  {
    company: "Capital One",
    role: "Data Scientist",
    location: "Richmond, VA",
    period: "Oct 2024 - Present",
    bullets: [
      "Identified instability in high-volume card transaction signals and rebuilt monitoring using XGBoost and segmented time-series diagnostics, improving fraud prediction accuracy and reducing false positives during peak shopping periods.",
      "Built consolidated behavioral datasets from tens of millions of card transactions, cutting manual analysis cycles and speeding up decisions for product and risk teams.",
      "Designed a scoring framework that combined ensemble models with business rules to surface early indicators of account compromise and reduced investigation time for analysts.",
      "Created SQL diagnostics to catch data-quality issues before they affected KPIs and reduced weekly metric variance by roughly 20 percent.",
      "Performed Risk Management and Audit testing for data pipeline controls, mapped controls to risks, and delivered clear and traceable audit evidence."
    ]
  },
  {
    company: "Bayer",
    role: "Data Scientist",
    location: "St. Louis, MO",
    period: "Jul 2023 - Oct 2024",
    bullets: [
      "Modernized analytics workflows for trial and breeding data by containerizing RMarkdown pipelines and making reporting consistent and reproducible.",
      "Automated reporting on a fixed schedule so research and commercial teams always had updated insights.",
      "Built Gradient Boosting and regularized Logistic models on complex datasets and improved performance while reducing model iteration time from several days to a single day.",
      "Developed an R Shiny application for data visualization and model training with ROC and PR curves and interactive threshold tuning.",
      "Produced high-quality tables and visualizations for large analytical reports, making technical outputs easier for leadership to use."
    ]
  },
  {
    company: "Amazon",
    role: "Software Engineer ML",
    location: "Bellevue, WA",
    period: "Jun 2022 - Apr 2023",
    bullets: [
      "Built a secure notebook environment for Data Science teams to explore, train, and deploy models, reducing development time by about 40 percent.",
      "Created a notification quality framework across push, SMS, and email channels, improving engagement and retention for Alexa.",
      "Implemented automated logic for A/B tests, auto-targeting, and multivariate experiments and improved conversion and ROI.",
      "Launched uplift-based targeting with fatigue controls, reducing total notification volume and delivery failures while increasing incremental conversion."
    ]
  },
  {
    company: "SGS Tekniks",
    role: "Data Scientist",
    location: "Gurugram, IND",
    period: "Nov 2014 - May 2018",
    bullets: [
      "Delivered forecasting models for customer demand using regression and improved accuracy across several metrics that guided planning decisions.",
      "Built incident categorization models using parametric and non-parametric methods including KNN, achieving more than 95 percent accuracy.",
      "Automated Python and SQL pipelines for orders, tickets, and marketing data and moved from weekly to daily data freshness while saving analyst time.",
      "Consolidated vendors and created volume advantage, reducing marketing costs and supporting analytics operations."
    ]
  }
];

export const projects = [
  {
    title: "Fraud Detection",
    stack: ["Python", "SQL", "XGBoost"],
    desc:
      "Engineered features from transaction patterns, trained an XGBoost classifier, and validated performance through decile analysis, Lorenz curves, and Gini. The top deciles captured most fraudulent transactions with strong recall and controlled false positives.",
    link: "https://github.com/crazyphoton007/Fraud-detection/blob/main/fraud_detection.ipynb"
  },
  {
    title: "Cancer Gene Detection",
    stack: ["R", "Python", "SQL"],
    desc:
      "Reduced dimensionality from more than twenty thousand features to about five hundred using PCA and feature selection. Performed clustering and validated the groups using original labels.",
    link: "https://github.com/crazyphoton007/Gene-Expression-Cancer-RNA-Sequence"
  },
  {
    title: "Forecast Bike Rentals",
    stack: ["Python", "SQL", "Gradient Boosting"],
    desc:
      "Built Gradient Boosting models to estimate hourly bike rentals for the last quarter of 2012. Performed detailed feature analysis to improve forecast stability and accuracy.",
    link: "https://github.com/crazyphoton007/Forecast_Bike-Rentals"
  }
];

export const skills = [
  "Python",
  "R",
  "R Shiny",
  "SQL",
  "Pandas",
  "NumPy",
  "scikit-learn",
  "Gradient Boosting",
  "XGBoost",
  "A/B Testing",
  "Time Series",
  "Classification",
  "Regression",
  "Clustering",
  "Statistics",
  "Snowflake",
  "Databricks",
  "AWS",
  "Azure",
  "Docker",
  "Tableau",
  "QuickSight",
  "CI/CD",
  "Git"
];

export const education = [
  { school: "Trine University", degree: "M.S. Information Studies", period: "2025" },
  { school: "University at Buffalo", degree: "M.S. Data Science (GPA 3.7/4)", period: "2020 - 2022" },
  { school: "SRM University", degree: "B.Tech Electrical and Electronics Engineering (GPA 8.6/10)", period: "2010 - 2014" }
];
