/**
 * AI Career Engine - Dynamic Role Generation System
 * Generates personalized career role clusters based on comprehensive student inputs
 */

export interface StudentProfile {
  branch: string;
  currentSkills: string[];
  interests: string[];
  careerGoals: string;
  aptitude: string; // Technical, Creative, Leadership, Problem-Solving, Analytical
  gpa: number; // 0-10 scale
}

export interface SkillGap {
  skill: string;
  currentLevel: number; // 0-5
  requiredLevel: number; // 0-5
  gap: number;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  learningTime: string; // e.g., "3-6 months"
  resources: string[];
}

export interface LearningMilestone {
  month: number;
  title: string;
  skills: string[];
  projects: string[];
  certifications: string[];
}

export interface InternshipMatch {
  title: string;
  company: string;
  location: string;
  duration: string;
  stipend: string;
  matchScore: number;
  requiredSkills: string[];
  skillsYouHave: string[];
  skillsNeeded: string[];
}

export interface RoleCluster {
  role: string;
  marketDemand: 'Very High' | 'High' | 'Medium' | 'Growing';
  matchScore: number;
  description: string;
  whyThisRole: string;
  requiredSkills: SkillGap[];
  salaryRange: string;
  topCompanies: string[];
  growthPath: string[];
  learningRoadmap: LearningMilestone[];
  matchingInternships: InternshipMatch[];
  interviewTips: string[];
}

// Comprehensive role database by branch
const roleDatabase: Record<string, Record<string, Omit<RoleCluster, 'matchScore' | 'whyThisRole' | 'requiredSkills'>>> = {
  'Computer Science & Engineering': {
    'Full Stack Developer': {
      role: 'Full Stack Developer',
      marketDemand: 'Very High',
      description: 'Build end-to-end web applications using modern frameworks and technologies',
      salaryRange: '₹4-8 LPA (Internship: ₹15,000-25,000/month)',
      topCompanies: ['Google India', 'Microsoft India', 'Amazon India', 'Flipkart', 'Paytm'],
      growthPath: ['Junior Developer', 'Senior Developer', 'Tech Lead', 'Engineering Manager'],
      learningRoadmap: [
        {
          month: 1,
          title: 'Frontend Fundamentals',
          skills: ['HTML5', 'CSS3', 'JavaScript ES6+'],
          projects: ['Portfolio Website', 'Todo App'],
          certifications: ['HTML/CSS Basics'],
        },
        {
          month: 3,
          title: 'React Mastery',
          skills: ['React.js', 'State Management', 'Hooks'],
          projects: ['E-commerce UI', 'Social Media Feed'],
          certifications: ['React Developer Certificate'],
        },
        {
          month: 5,
          title: 'Backend Development',
          skills: ['Node.js', 'Express.js', 'REST APIs'],
          projects: ['Blog API', 'User Authentication System'],
          certifications: ['Node.js Developer Certificate'],
        },
        {
          month: 7,
          title: 'Database & DevOps',
          skills: ['MongoDB', 'PostgreSQL', 'Docker', 'AWS'],
          projects: ['Full Stack E-commerce', 'Deployment Pipeline'],
          certifications: ['AWS Certified Cloud Practitioner'],
        },
      ],
      matchingInternships: [
        {
          title: 'Web Development Intern',
          company: 'Google India',
          location: 'Bangalore',
          duration: '3 months',
          stipend: '₹25,000/month',
          matchScore: 95,
          requiredSkills: ['React', 'Node.js', 'MongoDB'],
          skillsYouHave: [],
          skillsNeeded: ['React', 'Node.js', 'MongoDB'],
        },
        {
          title: 'Frontend Developer Intern',
          company: 'Flipkart',
          location: 'Bangalore',
          duration: '2 months',
          stipend: '₹20,000/month',
          matchScore: 90,
          requiredSkills: ['React', 'JavaScript', 'CSS'],
          skillsYouHave: [],
          skillsNeeded: ['React'],
        },
      ],
      interviewTips: [
        'Build 3-5 portfolio projects showcasing full stack capabilities',
        'Master JavaScript fundamentals and async programming',
        'Practice system design and API design patterns',
        'Understand database optimization and indexing',
        'Learn Docker and basic DevOps concepts',
      ],
    },
    'Data Scientist': {
      role: 'Data Scientist',
      marketDemand: 'Very High',
      description: 'Build AI/ML models and extract insights from data',
      salaryRange: '₹4-9 LPA (Internship: ₹20,000-30,000/month)',
      topCompanies: ['Google India', 'Microsoft India', 'Amazon India', 'Flipkart', 'Unacademy'],
      growthPath: ['Data Scientist', 'Senior Data Scientist', 'ML Architect', 'Research Scientist'],
      learningRoadmap: [
        {
          month: 1,
          title: 'Python & Statistics Basics',
          skills: ['Python', 'Pandas', 'NumPy', 'Statistics'],
          projects: ['Data Analysis Project', 'Statistical Analysis'],
          certifications: ['Python for Data Science'],
        },
        {
          month: 3,
          title: 'Machine Learning Fundamentals',
          skills: ['Scikit-learn', 'Supervised Learning', 'Unsupervised Learning'],
          projects: ['Classification Model', 'Clustering Analysis'],
          certifications: ['ML Basics Certificate'],
        },
        {
          month: 5,
          title: 'Deep Learning',
          skills: ['TensorFlow', 'PyTorch', 'Neural Networks'],
          projects: ['Image Classification', 'NLP Project'],
          certifications: ['Deep Learning Specialization'],
        },
        {
          month: 7,
          title: 'Production ML',
          skills: ['Model Deployment', 'MLOps', 'A/B Testing'],
          projects: ['Production ML Pipeline', 'Model Monitoring'],
          certifications: ['MLOps Engineer Certificate'],
        },
      ],
      matchingInternships: [
        {
          title: 'Data Science Intern',
          company: 'Amazon India',
          location: 'Bangalore',
          duration: '3 months',
          stipend: '₹30,000/month',
          matchScore: 92,
          requiredSkills: ['Python', 'Machine Learning', 'SQL'],
          skillsYouHave: [],
          skillsNeeded: ['Machine Learning'],
        },
      ],
      interviewTips: [
        'Master Python and SQL deeply',
        'Build end-to-end ML projects from data collection to deployment',
        'Understand statistical concepts and hypothesis testing',
        'Practice Kaggle competitions',
        'Learn about model evaluation metrics and validation techniques',
      ],
    },
    'Backend Engineer': {
      role: 'Backend Engineer',
      marketDemand: 'High',
      description: 'Develop robust server-side systems, APIs, and databases',
      salaryRange: '₹3.5-7 LPA (Internship: ₹12,000-20,000/month)',
      topCompanies: ['Infosys', 'TCS', 'Wipro', 'Amazon India', 'Microsoft India'],
      growthPath: ['Junior Backend Developer', 'Senior Backend Developer', 'Tech Architect', 'Principal Engineer'],
      learningRoadmap: [
        {
          month: 1,
          title: 'Core Backend Concepts',
          skills: ['Java/Python', 'OOP', 'Data Structures'],
          projects: ['Console Applications', 'Basic Server'],
          certifications: ['Java/Python Fundamentals'],
        },
        {
          month: 3,
          title: 'Web Frameworks',
          skills: ['Spring Boot/Django', 'REST APIs', 'Middleware'],
          projects: ['REST API Development', 'Authentication System'],
          certifications: ['Spring Boot Developer'],
        },
        {
          month: 5,
          title: 'Database Design',
          skills: ['SQL', 'Database Design', 'Query Optimization'],
          projects: ['Complex Database Schema', 'Performance Tuning'],
          certifications: ['SQL Advanced Certificate'],
        },
        {
          month: 7,
          title: 'Scalability & DevOps',
          skills: ['Microservices', 'Docker', 'Kubernetes', 'AWS'],
          projects: ['Microservices Architecture', 'CI/CD Pipeline'],
          certifications: ['AWS Solutions Architect'],
        },
      ],
      matchingInternships: [
        {
          title: 'Backend Developer Intern',
          company: 'Microsoft India',
          location: 'Hyderabad',
          duration: '3 months',
          stipend: '₹18,000/month',
          matchScore: 88,
          requiredSkills: ['Java', 'Spring Boot', 'SQL'],
          skillsYouHave: [],
          skillsNeeded: ['Spring Boot'],
        },
      ],
      interviewTips: [
        'Master a backend language (Java/Python) thoroughly',
        'Understand database design and optimization',
        'Learn about API design patterns and REST principles',
        'Practice system design interviews',
        'Understand concurrency and multithreading',
      ],
    },
  },
  'Electronics & Communication': {
    'Embedded Systems Engineer': {
      role: 'Embedded Systems Engineer',
      marketDemand: 'High',
      description: 'Develop firmware and embedded software for IoT and hardware devices',
      salaryRange: '₹3-6.5 LPA (Internship: ₹12,000-18,000/month)',
      topCompanies: ['Intel India', 'Qualcomm', 'Broadcom', 'Texas Instruments', 'STMicroelectronics'],
      growthPath: ['Embedded Engineer', 'Senior Embedded Engineer', 'Firmware Architect', 'Hardware Design Lead'],
      learningRoadmap: [
        {
          month: 1,
          title: 'C/C++ Fundamentals',
          skills: ['C Programming', 'Pointers', 'Memory Management'],
          projects: ['Console Programs', 'Data Structure Implementation'],
          certifications: ['C Programming Basics'],
        },
        {
          month: 3,
          title: 'Microcontroller Programming',
          skills: ['Arduino', 'STM32', 'Embedded C'],
          projects: ['LED Blink', 'Sensor Integration'],
          certifications: ['Arduino Developer Certificate'],
        },
        {
          month: 5,
          title: 'IoT & Communication Protocols',
          skills: ['UART', 'SPI', 'I2C', 'WiFi/BLE'],
          projects: ['IoT Device', 'Wireless Communication'],
          certifications: ['IoT Fundamentals'],
        },
        {
          month: 7,
          title: 'RTOS & Advanced Topics',
          skills: ['RTOS', 'Real-time Systems', 'Debugging'],
          projects: ['Multi-tasking System', 'Production Firmware'],
          certifications: ['RTOS Developer Certificate'],
        },
      ],
      matchingInternships: [
        {
          title: 'Embedded Systems Intern',
          company: 'Qualcomm',
          location: 'Hyderabad',
          duration: '3 months',
          stipend: '₹16,000/month',
          matchScore: 90,
          requiredSkills: ['C/C++', 'Microcontroller', 'Embedded Systems'],
          skillsYouHave: [],
          skillsNeeded: ['Microcontroller'],
        },
      ],
      interviewTips: [
        'Master C/C++ and embedded C',
        'Understand microcontroller architecture and datasheets',
        'Build IoT projects from scratch',
        'Learn debugging techniques and tools',
        'Understand real-time systems and RTOS',
      ],
    },
    'IoT Developer': {
      role: 'IoT Developer',
      marketDemand: 'Growing',
      description: 'Build Internet of Things applications connecting devices and sensors',
      salaryRange: '₹3.5-7 LPA (Internship: ₹13,000-19,000/month)',
      topCompanies: ['Bosch India', 'Siemens India', 'GE India', 'Honeywell India', 'Cisco India'],
      growthPath: ['IoT Developer', 'Senior IoT Engineer', 'IoT Architect', 'Product Manager'],
      learningRoadmap: [
        {
          month: 1,
          title: 'IoT Fundamentals',
          skills: ['IoT Concepts', 'Sensors', 'Arduino/Raspberry Pi'],
          projects: ['Temperature Sensor', 'Light Control System'],
          certifications: ['IoT Basics'],
        },
        {
          month: 3,
          title: 'Cloud Platforms',
          skills: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT'],
          projects: ['Cloud Connected Device', 'Data Dashboard'],
          certifications: ['AWS IoT Certified'],
        },
        {
          month: 5,
          title: 'Communication & Security',
          skills: ['MQTT', 'CoAP', 'IoT Security', 'Encryption'],
          projects: ['Secure IoT System', 'Multi-device Network'],
          certifications: ['IoT Security Certificate'],
        },
        {
          month: 7,
          title: 'Production IoT Systems',
          skills: ['Edge Computing', 'Analytics', 'Scalability'],
          projects: ['Smart Home System', 'Industrial IoT Solution'],
          certifications: ['IoT Solutions Architect'],
        },
      ],
      matchingInternships: [
        {
          title: 'IoT Developer Intern',
          company: 'Bosch India',
          location: 'Bangalore',
          duration: '3 months',
          stipend: '₹15,000/month',
          matchScore: 87,
          requiredSkills: ['Python', 'IoT', 'Cloud Platforms'],
          skillsYouHave: [],
          skillsNeeded: ['Cloud Platforms'],
        },
      ],
      interviewTips: [
        'Build end-to-end IoT projects',
        'Understand cloud IoT platforms deeply',
        'Learn wireless protocols (WiFi, BLE, LoRaWAN)',
        'Master MQTT and IoT communication patterns',
        'Understand IoT security best practices',
      ],
    },
  },
  'Mechanical Engineering': {
    'Mechanical Design Engineer': {
      role: 'Mechanical Design Engineer',
      marketDemand: 'High',
      description: 'Design mechanical systems and components for various applications',
      salaryRange: '₹2.5-5 LPA (Internship: ₹9,000-14,000/month)',
      topCompanies: ['Bharat Heavy Electricals', 'Larsen & Toubro', 'Godrej & Boyce', 'Timken India', 'SKF India'],
      growthPath: ['Design Engineer', 'Senior Design Engineer', 'Project Lead', 'Chief Engineer'],
      learningRoadmap: [
        {
          month: 1,
          title: 'CAD Fundamentals',
          skills: ['CATIA', 'SolidWorks', 'Basic Modeling'],
          projects: ['Simple Parts', 'Assemblies'],
          certifications: ['CAD Basics'],
        },
        {
          month: 3,
          title: 'Advanced Modeling',
          skills: ['Complex Assemblies', 'Surfacing', 'Sheet Metal'],
          projects: ['Mechanical Components', 'Product Design'],
          certifications: ['Advanced CAD'],
        },
        {
          month: 5,
          title: 'Simulation & Analysis',
          skills: ['ANSYS FEA', 'CFD', 'Stress Analysis'],
          projects: ['Structural Analysis', 'Thermal Analysis'],
          certifications: ['FEA Fundamentals'],
        },
        {
          month: 7,
          title: 'Manufacturing & Optimization',
          skills: ['Manufacturing Processes', 'Cost Optimization', 'GD&T'],
          projects: ['Design for Manufacturing', 'Optimization Study'],
          certifications: ['Manufacturing Engineer Certificate'],
        },
      ],
      matchingInternships: [
        {
          title: 'Mechanical Design Intern',
          company: 'Larsen & Toubro',
          location: 'Mumbai',
          duration: '3 months',
          stipend: '₹12,000/month',
          matchScore: 89,
          requiredSkills: ['CATIA', 'ANSYS', 'Design'],
          skillsYouHave: [],
          skillsNeeded: ['ANSYS'],
        },
      ],
      interviewTips: [
        'Master CAD software (CATIA/SolidWorks)',
        'Understand FEA and simulation concepts',
        'Learn manufacturing constraints and processes',
        'Build a strong portfolio of design projects',
        'Understand GD&T and technical drawings',
      ],
    },
  },
  'Civil Engineering': {
    'Structural Engineer': {
      role: 'Structural Engineer',
      marketDemand: 'High',
      description: 'Design and analyze building structures and infrastructure projects',
      salaryRange: '₹2.5-5 LPA (Internship: ₹9,000-14,000/month)',
      topCompanies: ['Larsen & Toubro', 'Godrej & Boyce', 'Shapoorji Pallonji', 'Tata Projects', 'HCC'],
      growthPath: ['Structural Engineer', 'Senior Structural Engineer', 'Project Lead', 'Chief Engineer'],
      learningRoadmap: [
        {
          month: 1,
          title: 'Design Software Basics',
          skills: ['STAAD Pro', 'AutoCAD', 'Basics'],
          projects: ['Simple Structures', 'Basic Drawings'],
          certifications: ['STAAD Pro Basics'],
        },
        {
          month: 3,
          title: 'Structural Analysis',
          skills: ['Load Analysis', 'Stress Analysis', 'Design Codes'],
          projects: ['Building Analysis', 'Bridge Design'],
          certifications: ['Structural Analysis Certificate'],
        },
        {
          month: 5,
          title: 'Advanced Design',
          skills: ['Reinforced Concrete', 'Steel Design', 'Optimization'],
          projects: ['Complex Structure', 'High-rise Building'],
          certifications: ['Advanced Structural Design'],
        },
        {
          month: 7,
          title: 'BIM & Project Management',
          skills: ['Revit', 'BIM Coordination', 'Project Management'],
          projects: ['BIM Model', 'Project Documentation'],
          certifications: ['BIM Specialist Certificate'],
        },
      ],
      matchingInternships: [
        {
          title: 'Structural Engineer Intern',
          company: 'Tata Projects',
          location: 'Delhi',
          duration: '3 months',
          stipend: '₹11,000/month',
          matchScore: 88,
          requiredSkills: ['STAAD Pro', 'Structural Design', 'AutoCAD'],
          skillsYouHave: [],
          skillsNeeded: ['STAAD Pro'],
        },
      ],
      interviewTips: [
        'Master STAAD Pro and design software',
        'Understand building codes and standards',
        'Learn structural analysis and design principles',
        'Build portfolio of structural designs',
        'Understand construction processes and site management',
      ],
    },
  },
  'Information Technology': {
    'Software Developer': {
      role: 'Software Developer',
      marketDemand: 'Very High',
      description: 'Develop enterprise software applications and solutions',
      salaryRange: '₹3.5-7.5 LPA (Internship: ₹15,000-25,000/month)',
      topCompanies: ['TCS', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra'],
      growthPath: ['Software Developer', 'Senior Developer', 'Tech Lead', 'Engineering Manager'],
      learningRoadmap: [
        {
          month: 1,
          title: 'Programming Fundamentals',
          skills: ['Java/Python', 'OOP', 'Data Structures'],
          projects: ['Console Applications', 'Basic Programs'],
          certifications: ['Programming Basics'],
        },
        {
          month: 3,
          title: 'Web Development',
          skills: ['Web Frameworks', 'Databases', 'APIs'],
          projects: ['Web Application', 'REST API'],
          certifications: ['Web Developer Certificate'],
        },
        {
          month: 5,
          title: 'Advanced Concepts',
          skills: ['Design Patterns', 'Testing', 'Deployment'],
          projects: ['Enterprise Application', 'Microservices'],
          certifications: ['Software Architect Certificate'],
        },
        {
          month: 7,
          title: 'Cloud & DevOps',
          skills: ['Cloud Platforms', 'CI/CD', 'Containers'],
          projects: ['Cloud Application', 'DevOps Pipeline'],
          certifications: ['Cloud Architect Certificate'],
        },
      ],
      matchingInternships: [
        {
          title: 'Software Developer Intern',
          company: 'TCS',
          location: 'Pune',
          duration: '3 months',
          stipend: '₹15,000/month',
          matchScore: 91,
          requiredSkills: ['Java', 'SQL', 'Web Development'],
          skillsYouHave: [],
          skillsNeeded: ['Web Development'],
        },
      ],
      interviewTips: [
        'Master a programming language thoroughly',
        'Build 3-5 real-world projects',
        'Understand design patterns and best practices',
        'Practice coding interviews on LeetCode',
        'Learn about software development lifecycle',
      ],
    },
  },
  'Chemical Engineering': {
    'Process Data Scientist': {
      role: 'Process Data Scientist',
      marketDemand: 'Growing',
      description: 'Use AI/ML to optimize chemical processes and improve efficiency',
      salaryRange: '₹4-8 LPA (Internship: ₹18,000-25,000/month)',
      topCompanies: ['BASF India', 'Reliance Industries', 'Hindustan Unilever', 'Dow Chemical', 'Bayer India'],
      growthPath: ['Process Data Scientist', 'Senior Data Scientist', 'Process Optimization Lead', 'Chief Scientist'],
      learningRoadmap: [
        {
          month: 1,
          title: 'Python & Data Fundamentals',
          skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
          projects: ['Process Data Analysis', 'Statistical Analysis'],
          certifications: ['Python for Data Science'],
        },
        {
          month: 3,
          title: 'Machine Learning for Processes',
          skills: ['Scikit-learn', 'Predictive Modeling', 'Optimization'],
          projects: ['Yield Prediction', 'Quality Control Model'],
          certifications: ['ML for Process Industries'],
        },
        {
          month: 5,
          title: 'Advanced Analytics',
          skills: ['Deep Learning', 'Time Series Analysis', 'Anomaly Detection'],
          projects: ['Process Anomaly Detection', 'Predictive Maintenance'],
          certifications: ['Advanced Analytics Certificate'],
        },
        {
          month: 7,
          title: 'Production Deployment',
          skills: ['MLOps', 'Real-time Analytics', 'Dashboarding'],
          projects: ['Production ML Pipeline', 'Real-time Monitoring'],
          certifications: ['MLOps Engineer Certificate'],
        },
      ],
      matchingInternships: [
        {
          title: 'Process Data Science Intern',
          company: 'Reliance Industries',
          location: 'Jamnagar',
          duration: '3 months',
          stipend: '₹22,000/month',
          matchScore: 93,
          requiredSkills: ['Python', 'Machine Learning', 'Process Knowledge'],
          skillsYouHave: [],
          skillsNeeded: ['Machine Learning'],
        },
      ],
      interviewTips: [
        'Combine chemical engineering knowledge with data science',
        'Master Python and ML libraries',
        'Understand process optimization and control',
        'Learn about industrial IoT and sensors',
        'Build projects combining process and data science',
      ],
    },
    'AI Engineer – Process Automation': {
      role: 'AI Engineer – Process Automation',
      marketDemand: 'Very High',
      description: 'Develop AI solutions for automating chemical processes',
      salaryRange: '₹5-9 LPA (Internship: ₹20,000-28,000/month)',
      topCompanies: ['BASF India', 'Reliance Industries', 'Hindustan Unilever', 'Dow Chemical', 'Bayer India'],
      growthPath: ['AI Engineer', 'Senior AI Engineer', 'AI Architect', 'Chief AI Officer'],
      learningRoadmap: [
        {
          month: 1,
          title: 'AI & Automation Basics',
          skills: ['Python', 'RPA Concepts', 'Process Automation'],
          projects: ['Simple Automation', 'Bot Development'],
          certifications: ['RPA Fundamentals'],
        },
        {
          month: 3,
          title: 'Deep Learning & Computer Vision',
          skills: ['TensorFlow', 'Computer Vision', 'Image Processing'],
          projects: ['Quality Control AI', 'Visual Inspection System'],
          certifications: ['Computer Vision Specialist'],
        },
        {
          month: 5,
          title: 'Advanced AI Systems',
          skills: ['NLP', 'Reinforcement Learning', 'Robotics'],
          projects: ['Intelligent Control System', 'Predictive Maintenance'],
          certifications: ['Advanced AI Systems'],
        },
        {
          month: 7,
          title: 'Production AI Systems',
          skills: ['AI Deployment', 'Edge AI', 'Real-time Processing'],
          projects: ['Production AI System', 'Autonomous Control'],
          certifications: ['AI Solutions Architect'],
        },
      ],
      matchingInternships: [
        {
          title: 'AI Engineer Intern',
          company: 'BASF India',
          location: 'Mumbai',
          duration: '3 months',
          stipend: '₹25,000/month',
          matchScore: 94,
          requiredSkills: ['Python', 'Deep Learning', 'Automation'],
          skillsYouHave: [],
          skillsNeeded: ['Deep Learning'],
        },
      ],
      interviewTips: [
        'Master deep learning frameworks',
        'Understand process automation and RPA',
        'Learn computer vision for quality control',
        'Build AI projects for industrial applications',
        'Understand edge AI and real-time systems',
      ],
    },
  },
  'Other': {
    'Software Engineer': {
      role: 'Software Engineer',
      marketDemand: 'Very High',
      description: 'Build software solutions across various domains',
      salaryRange: '₹2.5-5 LPA (Internship: ₹10,000-18,000/month)',
      topCompanies: ['Various IT Companies', 'Startups', 'Consulting Firms', 'Product Companies'],
      growthPath: ['Software Engineer', 'Senior Engineer', 'Tech Lead', 'Engineering Manager'],
      learningRoadmap: [
        {
          month: 1,
          title: 'Programming Basics',
          skills: ['Python/Java', 'Data Structures', 'Algorithms'],
          projects: ['Console Programs', 'Coding Challenges'],
          certifications: ['Programming Fundamentals'],
        },
        {
          month: 3,
          title: 'Web Development',
          skills: ['HTML/CSS', 'JavaScript', 'Web Frameworks'],
          projects: ['Website', 'Web Application'],
          certifications: ['Web Developer Basics'],
        },
        {
          month: 5,
          title: 'Backend Development',
          skills: ['Backend Framework', 'Databases', 'APIs'],
          projects: ['REST API', 'Database Application'],
          certifications: ['Backend Developer Certificate'],
        },
        {
          month: 7,
          title: 'Full Stack Development',
          skills: ['Full Stack', 'Deployment', 'DevOps Basics'],
          projects: ['Full Stack Application', 'Production Deployment'],
          certifications: ['Full Stack Developer Certificate'],
        },
      ],
      matchingInternships: [
        {
          title: 'Software Developer Intern',
          company: 'Startup',
          location: 'Bangalore',
          duration: '2 months',
          stipend: '₹12,000/month',
          matchScore: 85,
          requiredSkills: ['Programming', 'Web Development', 'Problem Solving'],
          skillsYouHave: [],
          skillsNeeded: ['Web Development'],
        },
      ],
      interviewTips: [
        'Build foundational programming skills',
        'Create portfolio projects',
        'Practice problem-solving',
        'Learn web development basics',
        'Understand software development best practices',
      ],
    },
  },
};

// Skill database with learning resources
const skillDatabase: Record<string, { level: number; learningTime: string; resources: string[] }> = {
  'Python': { level: 3, learningTime: '3-4 months', resources: ['Codecademy', 'Real Python', 'YouTube Tutorials'] },
  'Java': { level: 3, learningTime: '4-5 months', resources: ['Oracle Java Tutorials', 'Udemy', 'Coursera'] },
  'JavaScript': { level: 2, learningTime: '2-3 months', resources: ['MDN Web Docs', 'Codecademy', 'FreeCodeCamp'] },
  'React.js': { level: 3, learningTime: '2-3 months', resources: ['React Official Docs', 'Udemy', 'Scrimba'] },
  'Node.js': { level: 3, learningTime: '2-3 months', resources: ['Node.js Official Docs', 'Udemy', 'YouTube'] },
  'MongoDB': { level: 2, learningTime: '1-2 months', resources: ['MongoDB University', 'Udemy', 'YouTube'] },
  'PostgreSQL': { level: 3, learningTime: '2-3 months', resources: ['PostgreSQL Docs', 'Udemy', 'YouTube'] },
  'SQL': { level: 2, learningTime: '1-2 months', resources: ['SQLZoo', 'Codecademy', 'LeetCode'] },
  'Docker': { level: 2, learningTime: '1-2 months', resources: ['Docker Docs', 'Udemy', 'YouTube'] },
  'Kubernetes': { level: 3, learningTime: '2-3 months', resources: ['Kubernetes Docs', 'Linux Academy', 'Udemy'] },
  'AWS': { level: 2, learningTime: '2-3 months', resources: ['AWS Training', 'Udemy', 'A Cloud Guru'] },
  'TensorFlow': { level: 3, learningTime: '3-4 months', resources: ['TensorFlow Docs', 'Coursera', 'Udemy'] },
  'PyTorch': { level: 3, learningTime: '3-4 months', resources: ['PyTorch Docs', 'Fast.ai', 'Udemy'] },
  'C/C++': { level: 3, learningTime: '4-5 months', resources: ['cplusplus.com', 'Udemy', 'YouTube'] },
  'CATIA': { level: 3, learningTime: '3-4 months', resources: ['CATIA Training', 'Udemy', 'YouTube'] },
  'ANSYS': { level: 3, learningTime: '2-3 months', resources: ['ANSYS Learning', 'Udemy', 'YouTube'] },
  'STAAD Pro': { level: 2, learningTime: '2-3 months', resources: ['STAAD Training', 'Udemy', 'YouTube'] },
};

/**
 * Calculate skill gaps based on student profile and role requirements
 */
function calculateSkillGaps(
  studentSkills: string[],
  requiredSkills: string[],
  aptitude: string
): SkillGap[] {
  return requiredSkills.map((skill) => {
    const hasSkill = studentSkills.some(s => s.toLowerCase().includes(skill.toLowerCase()));
    const skillInfo = skillDatabase[skill] || { level: 2, learningTime: '2-3 months', resources: [] };
    
    // Adjust learning time based on aptitude
    let learningTime = skillInfo.learningTime;
    if (aptitude === 'Technical' || aptitude === 'Analytical') {
      learningTime = learningTime.replace(/(\d+)-(\d+)/, (match, min, max) => {
        return `${Math.max(1, parseInt(min) - 1)}-${Math.max(1, parseInt(max) - 1)}`;
      });
    }

    return {
      skill,
      currentLevel: hasSkill ? 2 : 0,
      requiredLevel: skillInfo.level,
      gap: hasSkill ? Math.max(0, skillInfo.level - 2) : skillInfo.level,
      priority: hasSkill ? 'Medium' : 'Critical',
      learningTime,
      resources: skillInfo.resources,
    };
  });
}

/**
 * Generate role clusters based on student profile
 */
export function generateRoleClusters(profile: StudentProfile): RoleCluster[] {
  const branchRoles = roleDatabase[profile.branch] || roleDatabase['Other'];
  const roleClusters: RoleCluster[] = [];

  // Extract interest keywords
  const interestKeywords = profile.interests.map(i => i.toLowerCase());
  const goalKeywords = profile.careerGoals.toLowerCase().split(' ');

  for (const [roleKey, roleData] of Object.entries(branchRoles)) {
    // Calculate match score based on interests, aptitude, and academic performance
    let matchScore = 50;

    // Interest matching (0-25 points)
    const roleDescription = (roleData.description + roleData.role).toLowerCase();
    const interestMatches = interestKeywords.filter(keyword =>
      roleDescription.includes(keyword)
    ).length;
    matchScore += Math.min(25, interestMatches * 5);

    // Aptitude matching (0-15 points)
    const aptitudeBonus: Record<string, number> = {
      'Technical': roleData.role.includes('Engineer') ? 15 : 5,
      'Creative': roleData.role.includes('Design') ? 15 : 5,
      'Leadership': roleData.role.includes('Manager') || roleData.role.includes('Lead') ? 15 : 5,
      'Problem-Solving': roleData.role.includes('Scientist') || roleData.role.includes('Architect') ? 15 : 5,
      'Analytical': roleData.role.includes('Data') || roleData.role.includes('Analyst') ? 15 : 5,
    };
    matchScore += aptitudeBonus[profile.aptitude] || 5;

    // Academic performance bonus (0-10 points)
    if (profile.gpa >= 8) matchScore += 10;
    else if (profile.gpa >= 7) matchScore += 7;
    else if (profile.gpa >= 6) matchScore += 4;

    matchScore = Math.min(100, matchScore);

    // Calculate skill gaps
    const requiredSkills = roleData.learningRoadmap
      .flatMap(milestone => milestone.skills)
      .filter((skill, index, self) => self.indexOf(skill) === index);

    const skillGaps = calculateSkillGaps(profile.currentSkills, requiredSkills, profile.aptitude);

    // Generate why this role message
    const whyThisRole = generateWhyThisRole(profile, roleData.role, interestMatches);

    roleClusters.push({
      ...roleData,
      matchScore: Math.round(matchScore),
      whyThisRole,
      requiredSkills: skillGaps,
    });
  }

  // Sort by match score and return top 4-5 roles
  return roleClusters.sort((a, b) => b.matchScore - a.matchScore).slice(0, 5);
}

/**
 * Generate personalized "why this role" message
 */
function generateWhyThisRole(profile: StudentProfile, role: string, interestMatches: number): string {
  const messages = [
    `Your interests in ${profile.interests.join(' and ')} align perfectly with ${role}. This role combines your passion with market demand in India's growing tech sector.`,
    `Based on your ${profile.aptitude} aptitude and ${profile.gpa >= 7 ? 'strong' : 'solid'} academic performance, ${role} is an excellent career path. You have the foundation to excel in this field.`,
    `${role} leverages your ${profile.currentSkills.slice(0, 2).join(' and ')} skills while opening doors to new technologies. This role is in high demand with excellent growth prospects.`,
    `Your career goals align with ${role}. This position offers the learning opportunities and market demand you're looking for in India's competitive job market.`,
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Generate learning milestones with specific timelines
 */
export function generateLearningTimeline(role: RoleCluster): LearningMilestone[] {
  return role.learningRoadmap;
}

/**
 * Find matching internships for a role
 */
export function findMatchingInternships(role: RoleCluster): InternshipMatch[] {
  return role.matchingInternships;
}
