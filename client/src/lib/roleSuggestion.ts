/**
 * Dynamic Role Suggestion Algorithm
 * Analyzes branch, skills, and interests to suggest the most suitable role
 */

export interface RoleSuggestion {
  role: string;
  matchScore: number;
  description: string;
  whyThisRole: string;
  requiredSkills: string[];
  salaryRange: string;
  companies: string[];
  growthPath: string[];
  interviewTips: string[];
}

const branchRoleMap: Record<string, Record<string, RoleSuggestion>> = {
  'Computer Science & Engineering': {
    'Web Development': {
      role: 'Full Stack Developer',
      matchScore: 95,
      description: 'Build end-to-end web applications using modern frameworks and technologies',
      whyThisRole: 'Your interest in Web Development perfectly aligns with Full Stack Development. You can work on both frontend and backend, making you highly valuable in Indian startups.',
      requiredSkills: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Git'],
      salaryRange: '₹4-8 LPA (Internship: ₹15,000-25,000/month)',
      companies: ['Google India', 'Microsoft India', 'Amazon India', 'Flipkart', 'Paytm'],
      growthPath: ['Junior Developer', 'Senior Developer', 'Tech Lead', 'Engineering Manager'],
      interviewTips: ['Practice coding problems on LeetCode', 'Build 2-3 portfolio projects', 'Learn system design basics'],
    },
    'Backend Development': {
      role: 'Backend Engineer',
      matchScore: 90,
      description: 'Develop robust server-side systems, APIs, and databases',
      whyThisRole: 'Backend engineering is crucial for scalable applications. Your CS background gives you the foundation to excel in this role.',
      requiredSkills: ['Python/Java', 'REST APIs', 'PostgreSQL', 'Docker', 'Microservices'],
      salaryRange: '₹3.5-7 LPA (Internship: ₹12,000-20,000/month)',
      companies: ['Infosys', 'TCS', 'Wipro', 'Amazon India', 'Microsoft India'],
      growthPath: ['Junior Backend Developer', 'Senior Backend Developer', 'Tech Architect', 'Principal Engineer'],
      interviewTips: ['Master database design', 'Understand API design patterns', 'Learn about scalability'],
    },
    'AI/ML': {
      role: 'Machine Learning Engineer',
      matchScore: 88,
      description: 'Build AI/ML models and deploy them to production',
      whyThisRole: 'AI/ML is one of the most in-demand fields. Your CS background and interest in AI/ML make this an excellent career path.',
      requiredSkills: ['Python', 'TensorFlow/PyTorch', 'Data Analysis', 'SQL', 'Statistics'],
      salaryRange: '₹4-9 LPA (Internship: ₹20,000-30,000/month)',
      companies: ['Google India', 'Microsoft India', 'Amazon India', 'Flipkart', 'Unacademy'],
      growthPath: ['ML Engineer', 'Senior ML Engineer', 'ML Architect', 'Research Scientist'],
      interviewTips: ['Build ML projects', 'Understand algorithms deeply', 'Practice on Kaggle competitions'],
    },
  },
  'Electronics & Communication': {
    'Embedded Systems': {
      role: 'Embedded Systems Engineer',
      matchScore: 94,
      description: 'Develop firmware and embedded software for IoT and hardware devices',
      whyThisRole: 'Your EC background is perfect for embedded systems. This is a high-demand field with excellent career prospects in India.',
      requiredSkills: ['C/C++', 'Microcontroller Programming', 'RTOS', 'Hardware Interfacing', 'VHDL'],
      salaryRange: '₹3-6.5 LPA (Internship: ₹12,000-18,000/month)',
      companies: ['Intel India', 'Qualcomm', 'Broadcom', 'Texas Instruments', 'STMicroelectronics'],
      growthPath: ['Embedded Engineer', 'Senior Embedded Engineer', 'Firmware Architect', 'Hardware Design Lead'],
      interviewTips: ['Master C/C++ fundamentals', 'Understand microcontroller datasheets', 'Build IoT projects'],
    },
    'IoT Development': {
      role: 'IoT Developer',
      matchScore: 91,
      description: 'Build Internet of Things applications connecting devices and sensors',
      whyThisRole: 'IoT is growing rapidly in India. Your EC knowledge combined with software skills makes you ideal for this role.',
      requiredSkills: ['Python', 'Arduino/Raspberry Pi', 'MQTT', 'Cloud Platforms', 'Sensor Integration'],
      salaryRange: '₹3.5-7 LPA (Internship: ₹13,000-19,000/month)',
      companies: ['Bosch India', 'Siemens India', 'GE India', 'Honeywell India', 'Cisco India'],
      growthPath: ['IoT Developer', 'Senior IoT Engineer', 'IoT Architect', 'Product Manager'],
      interviewTips: ['Build IoT prototypes', 'Understand cloud platforms', 'Learn wireless protocols'],
    },
    'VLSI Design': {
      role: 'VLSI Design Engineer',
      matchScore: 89,
      description: 'Design and optimize integrated circuits and digital systems',
      whyThisRole: 'VLSI is a specialized field with strong demand. Your EC background makes this a natural fit.',
      requiredSkills: ['Verilog/VHDL', 'Cadence Tools', 'Digital Design', 'Simulation', 'Layout Design'],
      salaryRange: '₹3.5-7.5 LPA (Internship: ₹15,000-22,000/month)',
      companies: ['Intel India', 'Qualcomm', 'AMD', 'Nvidia', 'Broadcom'],
      growthPath: ['VLSI Engineer', 'Senior VLSI Engineer', 'Design Lead', 'Principal Engineer'],
      interviewTips: ['Master Verilog/VHDL', 'Practice design problems', 'Learn EDA tools'],
    },
  },
  'Mechanical Engineering': {
    'CAD Design': {
      role: 'CAD/Design Engineer',
      matchScore: 93,
      description: 'Create detailed technical drawings and 3D models for manufacturing',
      whyThisRole: 'CAD design is fundamental in mechanical engineering. Your skills directly apply to this high-demand role.',
      requiredSkills: ['CATIA/SolidWorks', 'AutoCAD', 'ANSYS', 'GD&T', 'Manufacturing Processes'],
      salaryRange: '₹2.5-5.5 LPA (Internship: ₹10,000-15,000/month)',
      companies: ['Bosch India', 'Siemens India', 'GE India', 'Mahindra & Mahindra', 'Maruti Suzuki'],
      growthPath: ['CAD Engineer', 'Senior Design Engineer', 'Design Lead', 'Engineering Manager'],
      interviewTips: ['Master CAD software', 'Understand manufacturing constraints', 'Build portfolio projects'],
    },
    'Mechanical Design': {
      role: 'Mechanical Design Engineer',
      matchScore: 91,
      description: 'Design mechanical systems and components for various applications',
      whyThisRole: 'Mechanical design is core to your field. This role offers excellent growth opportunities in Indian manufacturing.',
      requiredSkills: ['Design Principles', 'ANSYS FEA', 'Material Science', 'Thermodynamics', 'CAD'],
      salaryRange: '₹2.5-5 LPA (Internship: ₹9,000-14,000/month)',
      companies: ['Bharat Heavy Electricals', 'Larsen & Toubro', 'Godrej & Boyce', 'Timken India', 'SKF India'],
      growthPath: ['Design Engineer', 'Senior Design Engineer', 'Project Lead', 'Chief Engineer'],
      interviewTips: ['Understand design principles', 'Practice FEA analysis', 'Learn manufacturing standards'],
    },
    'Manufacturing Engineering': {
      role: 'Manufacturing Engineer',
      matchScore: 88,
      description: 'Optimize manufacturing processes and production efficiency',
      whyThisRole: 'Manufacturing engineering is crucial for Indian industries. This role combines design and production expertise.',
      requiredSkills: ['Process Optimization', 'Lean Manufacturing', 'Six Sigma', 'Quality Control', 'Production Planning'],
      salaryRange: '₹2.5-5.5 LPA (Internship: ₹10,000-16,000/month)',
      companies: ['Maruti Suzuki', 'Hyundai Motor', 'Hero MotoCorp', 'Bajaj Auto', 'TVS Motor'],
      growthPath: ['Manufacturing Engineer', 'Senior Manufacturing Engineer', 'Plant Manager', 'Operations Head'],
      interviewTips: ['Learn Lean Six Sigma', 'Understand production systems', 'Study case studies'],
    },
  },
  'Civil Engineering': {
    'Structural Design': {
      role: 'Structural Engineer',
      matchScore: 92,
      description: 'Design and analyze building structures and infrastructure projects',
      whyThisRole: 'Structural engineering is fundamental in civil engineering. India\'s infrastructure boom creates excellent opportunities.',
      requiredSkills: ['STAAD Pro', 'AutoCAD', 'Structural Analysis', 'Building Codes', 'Revit'],
      salaryRange: '₹2.5-5 LPA (Internship: ₹9,000-14,000/month)',
      companies: ['Larsen & Toubro', 'Godrej & Boyce', 'Shapoorji Pallonji', 'Tata Projects', 'HCC'],
      growthPath: ['Structural Engineer', 'Senior Structural Engineer', 'Project Lead', 'Chief Engineer'],
      interviewTips: ['Master STAAD Pro', 'Understand building codes', 'Study famous structures'],
    },
    'Project Management': {
      role: 'Project Manager',
      matchScore: 89,
      description: 'Manage construction projects, teams, and resources',
      whyThisRole: 'Project management is critical in civil engineering. This role offers leadership and growth opportunities.',
      requiredSkills: ['Project Planning', 'Resource Management', 'Risk Management', 'Communication', 'MS Project'],
      salaryRange: '₹3-6 LPA (Internship: ₹12,000-18,000/month)',
      companies: ['Larsen & Toubro', 'Reliance Infrastructure', 'DLF', 'Lodha Group', 'Oberoi Realty'],
      growthPath: ['Project Manager', 'Senior Project Manager', 'Program Manager', 'Director'],
      interviewTips: ['Learn project management tools', 'Understand construction processes', 'Study case studies'],
    },
    'BIM Specialist': {
      role: 'BIM Specialist',
      matchScore: 87,
      description: 'Implement Building Information Modeling in construction projects',
      whyThisRole: 'BIM is the future of construction. This specialized role is in high demand with premium salaries.',
      requiredSkills: ['Revit', 'Navisworks', 'BIM Coordination', 'AutoCAD', 'Project Management'],
      salaryRange: '₹3-6.5 LPA (Internship: ₹13,000-19,000/month)',
      companies: ['Larsen & Toubro', 'Godrej & Boyce', 'Shapoorji Pallonji', 'Tata Projects', 'HCC'],
      growthPath: ['BIM Coordinator', 'BIM Manager', 'BIM Director', 'Digital Transformation Lead'],
      interviewTips: ['Master Revit', 'Understand BIM workflows', 'Learn coordination processes'],
    },
  },
  'Information Technology': {
    'Software Development': {
      role: 'Software Developer',
      matchScore: 95,
      description: 'Develop enterprise software applications and solutions',
      whyThisRole: 'Software development is your core strength. This role offers the best opportunities in India\'s IT industry.',
      requiredSkills: ['Java/Python', 'Spring Boot', 'REST APIs', 'SQL', 'AWS'],
      salaryRange: '₹3.5-7.5 LPA (Internship: ₹15,000-25,000/month)',
      companies: ['TCS', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra'],
      growthPath: ['Software Developer', 'Senior Developer', 'Tech Lead', 'Engineering Manager'],
      interviewTips: ['Practice coding problems', 'Build portfolio projects', 'Learn system design'],
    },
    'DevOps Engineering': {
      role: 'DevOps Engineer',
      matchScore: 91,
      description: 'Manage infrastructure and deployment pipelines',
      whyThisRole: 'DevOps is in high demand with premium salaries. Your IT background makes this an excellent choice.',
      requiredSkills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS/Azure', 'Linux'],
      salaryRange: '₹4-8.5 LPA (Internship: ₹18,000-28,000/month)',
      companies: ['Google India', 'Microsoft India', 'Amazon India', 'Flipkart', 'Swiggy'],
      growthPath: ['DevOps Engineer', 'Senior DevOps Engineer', 'Infrastructure Lead', 'Platform Architect'],
      interviewTips: ['Master Docker & Kubernetes', 'Learn cloud platforms', 'Understand CI/CD pipelines'],
    },
    'Cloud Architecture': {
      role: 'Cloud Architect',
      matchScore: 89,
      description: 'Design and implement cloud solutions for enterprises',
      whyThisRole: 'Cloud architecture is one of the highest-paying roles. Your IT skills position you well for this career.',
      requiredSkills: ['AWS/Azure/GCP', 'Cloud Design', 'Security', 'Scalability', 'Cost Optimization'],
      salaryRange: '₹5-10 LPA (Internship: ₹20,000-30,000/month)',
      companies: ['Google India', 'Microsoft India', 'Amazon India', 'Accenture', 'Deloitte'],
      growthPath: ['Cloud Engineer', 'Cloud Architect', 'Principal Architect', 'VP Engineering'],
      interviewTips: ['Master cloud platforms', 'Learn architecture patterns', 'Study case studies'],
    },
  },
  'Other': {
    'Software Engineering': {
      role: 'Software Engineer',
      matchScore: 85,
      description: 'Build software solutions across various domains',
      whyThisRole: 'Software engineering is a versatile field with excellent opportunities. Start here and specialize later.',
      requiredSkills: ['Python/Java', 'Data Structures', 'Algorithms', 'Git', 'Testing'],
      salaryRange: '₹2.5-5 LPA (Internship: ₹10,000-18,000/month)',
      companies: ['Various IT Companies', 'Startups', 'Consulting Firms', 'Product Companies'],
      growthPath: ['Software Engineer', 'Senior Engineer', 'Tech Lead', 'Engineering Manager'],
      interviewTips: ['Build foundational skills', 'Create portfolio projects', 'Practice problem-solving'],
    },
    'Data Analysis': {
      role: 'Data Analyst',
      matchScore: 80,
      description: 'Analyze data and provide business insights',
      whyThisRole: 'Data analysis is growing rapidly. This role bridges technical and business domains.',
      requiredSkills: ['SQL', 'Python', 'Excel', 'Tableau/Power BI', 'Statistics'],
      salaryRange: '₹2.5-5.5 LPA (Internship: ₹10,000-16,000/month)',
      companies: ['Amazon India', 'Flipkart', 'Swiggy', 'Paytm', 'Analytics Firms'],
      growthPath: ['Data Analyst', 'Senior Analyst', 'Analytics Manager', 'Chief Data Officer'],
      interviewTips: ['Learn SQL deeply', 'Master visualization tools', 'Understand statistics'],
    },
    'Technical Support': {
      role: 'Technical Support Engineer',
      matchScore: 75,
      description: 'Provide technical support and troubleshooting',
      whyThisRole: 'Technical support is a good entry point. Gain experience and transition to development roles.',
      requiredSkills: ['Troubleshooting', 'Communication', 'Customer Service', 'Documentation', 'Technical Knowledge'],
      salaryRange: '₹1.5-3.5 LPA (Internship: ₹8,000-12,000/month)',
      companies: ['Various IT Companies', 'Support Centers', 'Product Companies'],
      growthPath: ['Support Engineer', 'Senior Support Engineer', 'Support Manager', 'Technical Lead'],
      interviewTips: ['Develop soft skills', 'Learn troubleshooting', 'Understand products deeply'],
    },
  },
};

export function suggestRole(
  branch: string,
  skills: string,
  interests: string
): RoleSuggestion {
  // Extract interest keywords
  const interestKeywords = interests.toLowerCase().split(',').map(i => i.trim());
  
  // Get branch recommendations
  const branchRoles = branchRoleMap[branch] || branchRoleMap['Other'];
  
  // Find best matching role based on interests
  let bestMatch: RoleSuggestion | null = null;
  let highestScore = 0;

  for (const [interestKey, role] of Object.entries(branchRoles)) {
    const keywordMatches = interestKeywords.filter(keyword =>
      interestKey.toLowerCase().includes(keyword) || 
      role.role.toLowerCase().includes(keyword) ||
      role.description.toLowerCase().includes(keyword)
    ).length;

    const score = role.matchScore * (1 + keywordMatches * 0.1);

    if (score > highestScore) {
      highestScore = score;
      bestMatch = role;
    }
  }

  // If no match found, return first role
  if (!bestMatch) {
    bestMatch = Object.values(branchRoles)[0];
  }

  return bestMatch;
}

export function getAllRolesForBranch(branch: string): RoleSuggestion[] {
  const branchRoles = branchRoleMap[branch] || branchRoleMap['Other'];
  return Object.values(branchRoles);
}
