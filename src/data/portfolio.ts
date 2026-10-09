/**
 * Central portfolio data for Nupur Madaan.
 * Every fact, project, metric, and skill on this site is strictly verified
 * against her actual repositories, documented internships, and academic records.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Nupur Madaan',
  displayName: 'Nupur Madaan',
  name: 'Nupur Madaan',
  firstName: 'NUPUR',
  brandLetter: 'N',
  seriesTag: 'THE PORTFOLIO',
  /** Cinematic studio card shown at the start of the opening sequence. */
  originalLabel: 'A NUPUR MADAAN PRODUCTION',
  role: 'Data Analyst | Data Scientist | Machine Learning Enthusiast',
  tagline: ['Data Analytics', 'Machine Learning', 'Applied AI'],
  intro:
    'A Computer Science and Engineering undergraduate at Mody University (CGPA 8.93) specializing in data analytics, machine learning, and deep learning. Experienced in building predictive models, exploratory data pipelines, interactive dashboards, and applied AI systems with Python, SQL, Scikit-learn, PyTorch, and FastAPI.',
  location: 'Mandi Gobindgarh, Punjab, India',
  email: 'nupur.04.mn@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/nupurmadaan04/',
    github: 'https://github.com/nupurmadaan04',
    portfolio: 'https://www.nupurmadaan.xyz/',
    credly: 'https://www.credly.com/users/nupurmadaan04',
  },
  resumePdf: '/assets/Nupur_Madaan_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Nupur Madaan',
  },
  interests: [
    'Data Analytics',
    'Machine Learning',
    'Deep Learning',
    'Applied AI & GenAI',
    'Data Visualization',
    'Python & SQL',
  ],
};

export const education = [
  {
    school: 'Mody University of Science and Technology',
    place: 'Lakshmangarh, Rajasthan',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2023 – 2027',
    score: 'CGPA 8.93',
  },
  {
    school: 'S D Model Sr Sec School',
    place: 'Mandi Gobindgarh, Punjab',
    degree: 'Intermediate Education (Non-Medical)',
    period: '2022 – 2023',
    score: 'Score 84.4%',
  },
  {
    school: 'S D Model Sr Sec School',
    place: 'Mandi Gobindgarh, Punjab',
    degree: 'Secondary Education',
    period: '2020 – 2021',
    score: 'Score 90.8%',
  },
];

export const experience = [
  {
    company: 'Infosys Springboard',
    role: 'Data Visualization Intern',
    place: 'Remote',
    period: 'July 2026 – Present',
    points: [
      'Architecting the Unified Military Analytics and Comparison Dashboard to analyze and benchmark international defense capability datasets.',
      'Designing dynamic dashboards and interactive data visualizations (Plotly & Streamlit) to translate multi-dimensional metrics into actionable insights.',
      'Performing data preprocessing, feature normalization, and comparative statistical reporting across diverse country profiles.',
    ],
  },
  {
    company: 'Jalte Diye Foundation',
    role: 'Summer Intern',
    place: 'Remote',
    period: 'June 2026 – July 2026',
    points: [
      'Contributed to Cogentic, an automated content publishing engine and agentic AI platform for educational and social-impact initiatives.',
      'Engineered automated content generation pipelines with Gemini API, multi-criteria AI quality evaluation, and PIL-based poster rendering.',
      'Configured GitHub Actions CI/CD workflows and automated daily publishing routines with CSV fallbacks.',
    ],
  },
  {
    company: 'YBI Foundation',
    role: 'Data Science Intern',
    place: 'Remote',
    period: 'May 2025 – June 2025',
    points: [
      'Preprocessed agricultural datasets (1,500+ records) by applying exploratory data analysis, feature scaling, encoding, and missing-value imputation.',
      'Trained and evaluated machine learning regression algorithms for district crop yield estimation with comprehensive performance metrics.',
    ],
  },
  {
    company: 'Academor',
    role: 'AI-ML Intern',
    place: 'Remote',
    period: 'June 2024 – July 2024',
    points: [
      'Completed practical AI modules covering supervised learning, unsupervised learning, and algorithmic model implementation in Python.',
      'Practiced data manipulation and statistical analysis completing coding exercises with NumPy and Pandas.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  image?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-agriculture',
    title: 'AI Agriculture & Crop Yield',
    year: '2026',
    genre: 'Machine Learning • Agricultural Analytics • Decision Intelligence',
    logline:
      'An evidence-governed multi-crop agricultural forecasting platform combining leakage-aware temporal walk-forward validation and crop-specific model selection.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'FastAPI', 'React 18', 'TypeScript'],
    build: [
      'Engineered district-level agricultural data preprocessing and feature engineering across a canonical panel of 71k+ agricultural records.',
      'Evaluated candidate algorithms across 14 crops using 4 expanding chronological walk-forward historical origins (2014–2017) to stress-test against severe climate shocks.',
      'Benchmarked ML models against Historical District Mean persistence baselines with runtime 3-sigma district variance clipping and empirical P10–P90 ensemble intervals across 150 decision tree estimators.',
      'Built a full-stack serving and visual dashboard with FastAPI and React to interactively inspect yield estimations, feature importances, and distribution shifts.',
    ],
    features: [
      'Leakage-aware chronological walk-forward validation (4 origins)',
      'Crop-specific algorithm evaluation across 14 crops',
      'Statistical persistence benchmarking against district historical means',
      'Empirical P10–P90 ensemble dispersion intervals (150 estimators)',
      'Full-stack interactive serving dashboard with FastAPI & React',
    ],
    metrics: [
      { value: '71.6k', label: 'canonical panel records' },
      { value: '14', label: 'crops evaluated' },
      { value: '4 Origins', label: 'walk-forward validation' },
      { value: '150', label: 'decision tree estimators' },
      { value: 'FastAPI', label: 'serving backend' },
    ],
    github: 'https://github.com/nupurmadaan04/AI-agriculture-yield-production',
    image: '/assets/ai-agriculture.webp',
    palette: { from: '#061726', via: '#0284c7', to: '#091e33', accent: '#38bdf8' },
    motif: 'flow',
  },
  {
    id: 'soul-sense',
    title: 'Soul Sense EQ Platform',
    year: '2026',
    genre: 'Applied AI • Psychometrics • Full-Stack Web',
    logline:
      'A psychometric assessment and emotional wellbeing platform combining Goleman/Salovey-Mayer models with dynamic Gemini AI question synthesis.',
    stack: ['Next.js 14', 'FastAPI', 'Python', 'Gemini AI', 'NLTK / VADER', 'SQLite', 'Tailwind CSS'],
    build: [
      'Built an end-to-end emotional intelligence platform grounded in the 5 Core Emotional Intelligence domains (Daniel Goleman & Salovey-Mayer frameworks).',
      'Integrated Gemini AI for dynamic, real-time psychometric assessment question generation tailored to user stressors, goals, and tone preferences.',
      'Developed a 4-point Likert forced-choice scoring engine and an expressive journaling system with NLTK/VADER sentiment analysis.',
      'Engineered privacy-first architecture with localized SQLite storage, offline sync capabilities, and zero-data-loss protection.',
    ],
    features: [
      '5 Core Emotional Intelligence domain psychometrics',
      'Gemini AI dynamic assessment question synthesis',
      'Forced-choice 4-point Likert scoring engine',
      'Daily mood journaling with NLTK/VADER sentiment tracking',
      'Privacy-focused architecture with local persistence',
    ],
    metrics: [
      { value: '5 Domains', label: 'EQ evaluation model' },
      { value: '4-Point', label: 'Likert scoring engine' },
      { value: 'Next.js 14', label: 'App Router frontend' },
      { value: 'Gemini AI', label: 'dynamic questions' },
      { value: 'VADER', label: 'sentiment analytics' },
    ],
    github: 'https://github.com/nupurmadaan04/SOUL_SENSE_EXAM',
    image: '/assets/soul-sense.png',
    palette: { from: '#0f112e', via: '#4f46e5', to: '#0b0a21', accent: '#a5b4fc' },
    motif: 'shield',
  },
  {
    id: 'cogentic',
    title: 'Cogentic AI',
    year: '2026',
    genre: 'Agentic AI • Automated Publishing • Content Ops',
    logline:
      'An automated social education and content publishing platform engineered for the Jalte Diye Foundation with multi-criteria AI quality evaluation.',
    stack: ['Python', 'Gemini API', 'PIL / Pillow', 'GitHub Actions', 'REST API'],
    build: [
      'Engineered an agentic content publishing pipeline for the Jalte Diye Foundation, automating educational and social-impact content creation.',
      'Implemented multi-criteria automated evaluation (scoring relevance, grammar, educational depth, and social impact) with automated retry and CSV fallback logic.',
      'Automated custom graphic poster rendering with PIL and dynamic Poppins/Raleway typography overlays for dynamic theme matching.',
      'Orchestrated automated daily execution and asset updates via GitHub Actions workflows.',
    ],
    features: [
      'Automated Gemini-driven educational content generation',
      'Multi-criteria quality gate (score >= 7 validation)',
      'Automated poster rendering with PIL and dynamic typography',
      'Robust CSV fallback pipeline for zero-downtime publishing',
      'GitHub Actions automated daily orchestration',
    ],
    metrics: [
      { value: '100%', label: 'automated pipeline' },
      { value: '4 Themes', label: 'SDG & social categories' },
      { value: 'PIL Engine', label: 'dynamic poster rendering' },
      { value: '>= 7/10', label: 'AI quality threshold' },
      { value: 'CI/CD', label: 'GitHub Actions schedule' },
    ],
    github: 'https://github.com/nupurmadaan04/Cogentic',
    image: '/assets/cogentic.jpg',
    palette: { from: '#081a24', via: '#0891b2', to: '#05131a', accent: '#67e8f9' },
    motif: 'flow',
  },
  {
    id: 'dental-caries',
    title: 'Dental Caries Clinical AI',
    year: '2026',
    genre: 'Computer Vision • Deep Learning • Medical Image Segmentation',
    logline:
      'Semi-supervised deep learning research platform for pixel-level dental caries segmentation on panoramic radiographs (OPGs).',
    stack: ['PyTorch', 'ResNet-34', 'FPN', 'FastAPI', 'React 18', 'Vite', 'TypeScript', 'OpenCV'],
    build: [
      'Researched and implemented semi-supervised medical image segmentation on panoramic dental radiographs (OPGs) to address severe class imbalance and scarce annotations.',
      'Engineered ResNet-34 Feature Pyramid Network (FPN) architecture with dual BatchNorm buffer-and-parameter Exponential Moving Average (EMA) teacher-student synchronization.',
      'Implemented 21-patch sliding-window reconstruction (384x384 patches, 192px stride) for 768x1536 panoramic radiographs to overcome cervical burnout and distortion artifacts.',
      'Developed a full-stack clinical review dashboard with FastAPI and React, providing 4-tier severity staging and Gemini reasoning explanations (experimental research).',
    ],
    features: [
      'ResNet-34 + FPN pixel-level lesion segmentation',
      'Dual BatchNorm EMA teacher-student semi-supervised learning',
      '21-patch overlapping sliding-window reconstruction',
      '4-tier clinical severity staging (Incipient to Severe)',
      'Experimental research clearly separated from clinical diagnostic claims',
    ],
    metrics: [
      { value: '21 Patches', label: 'sliding-window reconstruction' },
      { value: 'ResNet-34', label: 'FPN backbone' },
      { value: '4 Tiers', label: 'severity staging' },
      { value: '768×1536', label: 'OPG resolution processed' },
      { value: 'FastAPI', label: 'inference API' },
    ],
    github: 'https://github.com/nupurmadaan04/dental-caries',
    image: '/assets/dental-caries.png',
    palette: { from: '#13102c', via: '#6d28d9', to: '#0d0a21', accent: '#c084fc' },
    motif: 'shield',
  },
  {
    id: 'military-analytics',
    title: 'Unified Military Analytics',
    year: '2026',
    genre: 'Data Analytics • Interactive Visualization • Defense Intelligence',
    logline:
      'Interactive defense intelligence and capability comparison dashboard developed during the Infosys Springboard internship.',
    stack: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Data Visualization'],
    build: [
      'Developed an interactive comparison platform to analyze and benchmark international military and defense capability datasets.',
      'Implemented comprehensive data cleaning, normalization, and feature transformations on multi-indicator defense statistics.',
      'Designed dynamic comparison matrices, radial charts, and interactive time-series plots for multi-nation capability benchmarking.',
    ],
    features: [
      'Multi-country military expenditure & force capability comparisons',
      'Dynamic Plotly & Streamlit interactive visualization charts',
      'Automated data preprocessing and indicator normalization',
      'Exportable visual intelligence reports',
    ],
    metrics: [
      { value: 'Multi-Nation', label: 'benchmarking scope' },
      { value: 'Infosys', label: 'Springboard project' },
      { value: 'Interactive', label: 'Plotly visual suite' },
      { value: 'Python', label: 'analytics pipeline' },
    ],
    github: 'https://github.com/nupurmadaan04/Unified-Military-Analytics',
    image: '/assets/military-analytics.webp',
    palette: { from: '#0b1329', via: '#1d4ed8', to: '#070f21', accent: '#60a5fa' },
    motif: 'tenants',
  },
  {
    id: 'parklytics',
    title: 'Parklytics AI',
    year: '2024',
    genre: 'Computer Vision • Smart City AI • Spatial Analytics',
    logline:
      'Intelligent parking space detection and telemetry system utilizing computer vision to classify occupancy and streamline urban space management.',
    stack: ['Python', 'OpenCV', 'Computer Vision', 'NumPy', 'Image Processing'],
    build: [
      'Engineered computer vision algorithms for real-time parking slot occupancy classification using bounding coordinates.',
      'Processed video feeds and static overhead imagery with adaptive thresholding, morphological filters, and contour tracking.',
      'Built visual analytics showing live available capacity, occupancy rates, and slot status indicators.',
    ],
    features: [
      'Real-time automated parking slot vacancy classification',
      'Adaptive image thresholding & contour area filtering',
      'Live availability counts and occupancy rate metrics',
      'Custom slot coordinate mapping interface',
    ],
    metrics: [
      { value: 'Real-Time', label: 'detection pipeline' },
      { value: 'OpenCV', label: 'frame processing' },
      { value: 'Python', label: 'core architecture' },
      { value: 'Vision', label: 'spatial analytics' },
    ],
    github: 'https://github.com/nupurmadaan04/Parklytice_AI',
    image: '/assets/parklytics.webp',
    palette: { from: '#061726', via: '#0284c7', to: '#091e33', accent: '#38bdf8' },
    motif: 'flow',
  },
  {
    id: 'ticket-generator',
    title: 'Event Ticket Generator',
    year: '2024',
    genre: 'Python Programming • Automation • Document Processing',
    logline:
      'Automated document compilation and credential generator producing styled, personalized event tickets with unique barcode tracking.',
    stack: ['Python', 'ReportLab', 'Pillow / PIL', 'Data Processing'],
    build: [
      'Developed an automated programmatic event pass and ticket generator from structured registrant datasets.',
      'Integrated high-resolution barcode and identification code rendering for verification workflows.',
      'Implemented custom template layouts with dynamic typography, guest name placement, and automated PDF export.',
    ],
    features: [
      'Automated multi-record ticket generation from input datasets',
      'Dynamic typography, guest detail placement, and branding',
      'Embedded unique identification code and barcode rendering',
      'Batch export to print-ready PDF and image formats',
    ],
    metrics: [
      { value: 'Batch', label: 'processing engine' },
      { value: 'Automated', label: 'ticket compilation' },
      { value: 'Python', label: 'automation stack' },
      { value: 'Print-Ready', label: 'vector PDF output' },
    ],
    github: 'https://github.com/nupurmadaan04/TICKET_GENERATOR',
    image: '/assets/ticket-generator.webp',
    palette: { from: '#0f112e', via: '#4f46e5', to: '#0b0a21', accent: '#a5b4fc' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'gssoc-rank',
    title: 'Top 20 Project Admin',
    org: 'GirlScript Summer of Code (GSSoC)',
    detail: 'Recognized as Top 20 Project Admin in GirlScript Summer of Code.',
    laurel: 'Open Source Leadership',
  },
  {
    id: 'elite-winter-rank',
    title: '4th Rank Project Admin',
    org: 'Elite Code Winters of Code',
    detail: 'Secured 4th Rank Project Admin in Elite Code Winters of Code.',
    laurel: 'Open Source Leadership',
  },
  {
    id: 'ssoc-rank',
    title: 'Top 50 Contributor',
    org: 'SSOC',
    detail: 'Achieved Top 50 Contributor ranking in the SSOC open source program.',
    laurel: 'Open Source Achievement',
  },
  {
    id: 'btech-cgpa',
    title: 'CGPA 8.93 in B.Tech CSE',
    org: 'Mody University of Science and Technology',
    detail: 'Consistent academic excellence in Computer Science and Engineering coursework (2023–2027).',
    laurel: 'Academic Excellence',
  },
  {
    id: 'secondary-education',
    title: '90.8% Secondary & 84.4% Intermediate',
    org: 'S D Model Sr Sec School',
    detail: 'Outstanding scholastic record in Non-Medical science stream.',
    laurel: 'School Merit',
  },
];

export type CredentialItem = {
  issuer: string;
  name: string;
  category: 'Virtual Experience' | 'Applied Skills' | 'Certificate' | 'Verified Badges' | 'Practical Training';
  link: string;
  actionText: string;
  isFormalCertification?: boolean;
  description?: string;
};

export const credentials: CredentialItem[] = [
  {
    issuer: 'Deloitte Australia',
    name: 'Data Analytics Virtual Experience Program',
    category: 'Virtual Experience',
    link: 'https://www.theforage.com/simulations/deloitte-au/data-analytics-s5zy/completed',
    actionText: 'View Completion',
    isFormalCertification: false,
    description: 'Virtual experience program covering data analytics simulation, exploratory data analysis, and insights communication.',
  },
  {
    issuer: 'Microsoft',
    name: 'Microsoft Applied Skills: Generate Reports with AI Research Agents',
    category: 'Applied Skills',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/NupurMadaan-4599/74D05CDEC5B306EE?sharingId=F468A78DF862A3F7',
    actionText: 'Verify Credential',
    isFormalCertification: true,
    description: 'Verified Microsoft credential demonstrating applied competence in building AI research agents and automated report synthesis.',
  },
  {
    issuer: 'Jalte Diye Foundation',
    name: 'WiSTEM Certificate',
    category: 'Certificate',
    link: 'https://www.jaltediyefoundation.org/certificate.html?id=JDF-WiSTEM-CE11',
    actionText: 'Verify Certificate',
    isFormalCertification: false,
    description: 'Official WiSTEM certificate issued by Jalte Diye Foundation (Credential Verification ID: JDF-WiSTEM-CE11).',
  },
  {
    issuer: 'Credly',
    name: 'Verified Badges & Technical Credentials',
    category: 'Verified Badges',
    link: 'https://www.credly.com/users/nupurmadaan04',
    actionText: 'View Badges',
    isFormalCertification: true,
    description: 'Verified technical badges and credentials across cloud systems, database technologies, and software development.',
  },
  {
    issuer: 'Infosys Springboard',
    name: 'Data Visualization & Dashboard Engineering',
    category: 'Practical Training',
    link: 'https://github.com/nupurmadaan04/Unified-Military-Analytics',
    actionText: 'View Project',
    isFormalCertification: false,
    description: 'Practical data visualization internship experience engineering interactive multi-country defense intelligence dashboards.',
  },
  {
    issuer: 'YBI Foundation',
    name: 'Data Science & Machine Learning Practical Training',
    category: 'Practical Training',
    link: 'https://github.com/nupurmadaan04/AI-agriculture-yield-production',
    actionText: 'View Project',
    isFormalCertification: false,
    description: 'Practical training and internship in predictive modeling, feature engineering, and agricultural crop yield estimation.',
  },
  {
    issuer: 'Academor',
    name: 'AI-ML Practical Foundation Modules',
    category: 'Practical Training',
    link: 'https://github.com/nupurmadaan04',
    actionText: 'View Profile',
    isFormalCertification: false,
    description: 'Practical foundational training covering supervised and unsupervised learning algorithms implemented in Python.',
  },
];

export type Certification = CredentialItem;
export const certifications: CredentialItem[] = credentials;

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming foundations',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sql', note: 'Data' },
      { name: 'C++', mono: 'C++' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    subtitle: 'Data processing & statistical rigor',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Exploratory Data Analysis', mono: 'Eda' },
      { name: 'Feature Engineering', mono: 'Fe' },
      { name: 'Data Preprocessing', mono: 'Dp' },
      { name: 'Statistical Analysis', mono: 'Stat' },
    ],
  },
  {
    id: 'visualization',
    title: 'Visualization',
    subtitle: 'Insight communication & storytelling',
    skills: [
      { name: 'Tableau', mono: 'Tb' },
      { name: 'Matplotlib', mono: 'Mpl' },
      { name: 'Seaborn', mono: 'Sbn' },
      { name: 'Plotly', mono: 'Ply' },
      { name: 'Streamlit', mono: 'St' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    subtitle: 'Predictive modeling & validation',
    skills: [
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'Regression', mono: 'Reg' },
      { name: 'Classification', mono: 'Cls' },
      { name: 'Model Evaluation', mono: 'Eval' },
      { name: 'Walk-Forward Validation', mono: 'Wfv' },
    ],
  },
  {
    id: 'deeplearning',
    title: 'Deep Learning',
    subtitle: 'Neural networks & vision research',
    skills: [
      { name: 'PyTorch', mono: 'Tor' },
      { name: 'Neural Networks', mono: 'Nn' },
      { name: 'Image Segmentation', mono: 'Seg' },
      { name: 'OpenCV', mono: 'Cv' },
    ],
  },
  {
    id: 'tools',
    title: 'Dev & AI Tools',
    subtitle: 'Production & developer workflows',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Git & GitHub', mono: 'Git' },
      { name: 'Jupyter Notebook', mono: 'Jup' },
      { name: 'VS Code', mono: 'Vsc' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Gemini API', mono: 'Gem' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, coursework, or internships.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['AI Agriculture', 'Soul Sense EQ', 'Cogentic AI', 'Dental Caries Clinical AI'],
  SQL: ['MySQL Database Management', 'Data extraction & relational analysis'],
  'C++': ['CS Data Structures & Algorithms', 'Mody University coursework'],
  Pandas: ['AI Agriculture (71.6k rows)', 'Military Analytics', 'YBI Foundation'],
  NumPy: ['AI Agriculture', 'Dental Caries PyTorch tensors', 'Academor AI-ML'],
  'Exploratory Data Analysis': ['AI Agriculture yield analysis', 'Military Analytics'],
  'Feature Engineering': ['Agricultural leakage-aware features', 'YBI Foundation'],
  'Data Preprocessing': ['Agricultural panel cleaning', 'OPG radiograph normalization'],
  'Statistical Analysis': ['District persistence benchmarking', 'Hypothesis evaluation'],
  Tableau: ['Data Visualization dashboards', 'Academic analytics labs'],
  Matplotlib: ['Model training loss curves', 'Agricultural yield distributions'],
  Seaborn: ['Correlation matrices', 'Feature distribution plots'],
  Plotly: ['Unified Military Analytics Dashboard', 'Interactive comparisons'],
  Streamlit: ['Military Analytics interactive dashboard', 'Rapid data app prototypes'],
  'Scikit-learn': ['AI Agriculture (150 decision tree estimators)', 'YBI Foundation'],
  Regression: ['Crop yield estimation', 'Statistical persistence baselines'],
  Classification: ['Supervised learning modules', 'Severity staging models'],
  'Model Evaluation': ['P10–P90 empirical intervals', 'RMSE/MAE & cross-validation metrics'],
  'Walk-Forward Validation': ['AI Agriculture 4 expanding historical origins'],
  PyTorch: ['MLUA Dental Caries Research', 'ResNet-34 Feature Pyramid Network'],
  'Neural Networks': ['Deep Learning fundamentals', 'Medical image segmentation'],
  'Image Segmentation': ['OPG dental caries pixel-level lesion detection'],
  OpenCV: ['OPG radiograph patch preprocessing', '21-patch sliding window'],
  FastAPI: ['AI Agriculture serving backend', 'Dental Caries API', 'Soul Sense API'],
  'Git & GitHub': ['All public repositories', 'Version control & branch management'],
  'Jupyter Notebook': ['Exploratory data analysis', 'Model experimentation workflows'],
  'VS Code': ['Primary development environment'],
  MySQL: ['Relational schema design', 'Query optimization'],
  'Gemini API': ['Cogentic quality gate', 'Soul Sense dynamic question generation'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const skyPastel: Palette = { from: '#061726', via: '#0284c7', to: '#091e33', accent: '#38bdf8' };
const periwinkle: Palette = { from: '#0f112e', via: '#4f46e5', to: '#0b0a21', accent: '#a5b4fc' };
const cyanPastel: Palette = { from: '#081a24', via: '#0891b2', to: '#05131a', accent: '#67e8f9' };
const violetPastel: Palette = { from: '#13102c', via: '#6d28d9', to: '#0d0a21', accent: '#c084fc' };
const bluePastel: Palette = { from: '#0b1329', via: '#1d4ed8', to: '#070f21', accent: '#60a5fa' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Academic Roots',
    period: '2023 – Present',
    synopsis: 'B.Tech in Computer Science & Engineering at Mody University, student leadership, volunteering, and verified competitive-program achievements.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'B.Tech Computer Science & Engineering',
        description: 'Pursuing Bachelor of Technology in Computer Science and Engineering at Mody University of Science and Technology (2023–2027) with an academic record of CGPA 8.93.',
        tags: ['B.Tech CSE', 'Mody University', 'CGPA 8.93'],
        runtime: '2023 – 2027',
        palette: skyPastel,
      },
      {
        code: 'S01 E02',
        title: 'Jalte Diye Foundation',
        description: 'Served as Volunteer (August 2025 – December 2025) and Event & Outreach Lead (January 2026 – Present). Hosted and coordinated events and campaigns, managed event promotions and outreach, and supported communication and participation initiatives.',
        tags: ['Volunteer', 'Event & Outreach Lead', 'Outreach'],
        runtime: 'Aug 2025 – Present',
        palette: cyanPastel,
      },
      {
        code: 'S01 E03',
        title: "Institution's Innovation Council (IIC)",
        description: "Event & Promotion Coordinator (November 2025 – Present). Coordinated and managed events, supporting comprehensive event planning, promotion, and execution.",
        tags: ['IIC', 'Event Coordinator', 'Promotions'],
        runtime: 'Nov 2025 – Present',
        palette: periwinkle,
      },
      {
        code: 'S01 E04',
        title: 'Elite Coders',
        description: 'Tech Team Member (August 2026 – Present). Active technical team involvement supporting programming initiatives and developer community sessions.',
        tags: ['Elite Coders', 'Tech Team', 'Technical Involvement'],
        runtime: 'Aug 2026 – Present',
        palette: bluePastel,
      },
      {
        code: 'S01 E05',
        title: 'SSOC',
        description: 'Achieved Top 50 Contributor ranking in the SSOC open source program.',
        tags: ['SSOC', 'Top 50 Contributor', 'Open Source'],
        runtime: 'Contributor',
        palette: violetPastel,
      },
      {
        code: 'S01 E06',
        title: 'GirlScript Summer of Code (GSSoC)',
        description: 'Recognized as Top 20 Project Admin in GirlScript Summer of Code (GSSoC).',
        tags: ['GSSoC', 'Top 20 Project Admin', 'Open Source'],
        runtime: 'Project Admin',
        palette: cyanPastel,
      },
      {
        code: 'S01 E07',
        title: 'Elite Code Winters of Code',
        description: 'Secured 4th Rank Project Admin in Elite Code Winters of Code.',
        tags: ['Winters of Code', '4th Rank', 'Project Admin'],
        runtime: 'Project Admin',
        palette: skyPastel,
      },
    ],
  },
  {
    number: 2,
    title: 'Foundational Studies & Training',
    period: '2020 – 2024',
    synopsis: 'Secondary and Intermediate education with academic distinction and AI-ML foundational apprenticeship.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Secondary Education Merit',
        description: 'Completed Secondary Education at S D Model Sr Sec School with 90.8%, building strong analytical and mathematical roots.',
        tags: ['S D Model School', '90.8%', 'Secondary Merit'],
        runtime: '2020 – 2021',
        palette: cyanPastel,
      },
      {
        code: 'S02 E02',
        title: 'Intermediate Non-Medical',
        description: 'Completed Intermediate Education (Non-Medical stream) with 84.4%, solidifying mathematical and computational foundations.',
        tags: ['S D Model School', '84.4%', 'Non-Medical'],
        runtime: '2022 – 2023',
        palette: periwinkle,
      },
      {
        code: 'S02 E03',
        title: 'AI-ML Practical Apprenticeship',
        description: 'AI-ML Intern at Academor. Completed practical AI modules covering supervised learning, unsupervised learning, and Python algorithmic exercises with NumPy and Pandas.',
        tags: ['Academor', 'AI-ML Intern', 'Python', 'NumPy'],
        runtime: 'Jun 2024 – Jul 2024',
        palette: bluePastel,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Production AI',
    period: '2025 – Present',
    synopsis: 'Verified industry internships across machine learning, agentic pipelines, and defense intelligence.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'YBI Foundation',
        description: 'Data Science Intern — Preprocessed real agricultural data (1,500+ records) applying exploratory data analysis, feature scaling, encoding, and missing-value imputation. Trained and evaluated regression models for district crop yield estimation.',
        tags: ['YBI Foundation', 'Data Science & ML', 'Crop Yield ML', 'Pandas'],
        runtime: 'May 2025 – Jun 2025',
        palette: violetPastel,
      },
      {
        code: 'S03 E02',
        title: 'Jalte Diye Foundation',
        description: 'Summer Intern — Contributed to Cogentic, an automated content publishing engine and agentic AI platform. Engineered automated content generation pipelines with Gemini API, multi-criteria AI quality evaluation, PIL poster rendering, and GitHub Actions CI/CD.',
        tags: ['Jalte Diye Foundation', 'Summer Intern', 'Cogentic AI', 'Gemini API'],
        runtime: 'Jun 2026 – Jul 2026',
        palette: cyanPastel,
      },
      {
        code: 'S03 E03',
        title: 'Infosys Springboard',
        description: 'Data Visualization Intern — Developing the Unified Military Analytics and Comparison Dashboard to analyze and benchmark international defense capability datasets using dynamic Plotly & Streamlit interactive visualizations.',
        tags: ['Infosys Springboard', 'Data Visualization Intern', 'Plotly', 'Streamlit'],
        runtime: 'Jul 2026 – Present',
        palette: bluePastel,
      },
    ],
  },
  {
    number: 4,
    title: 'Advanced Research & Deep Tech',
    period: '2026',
    synopsis: 'Medical imaging deep learning research, temporal walk-forward forecasting, and psychometrics.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Empirical Yield Forecasting',
        description: 'AI Agriculture Platform — leakage-aware chronological walk-forward validation across 14 crops and 71.6k records.',
        tags: ['Walk-Forward', 'Scikit-learn', 'FastAPI'],
        runtime: '2026',
        palette: skyPastel,
      },
      {
        code: 'S04 E02',
        title: 'Psychometric Intelligence',
        description: 'Soul Sense EQ Platform — Goleman psychometrics, Gemini dynamic question generation, and VADER sentiment tracking.',
        tags: ['Next.js 14', 'FastAPI', 'Gemini AI'],
        runtime: '2026',
        palette: periwinkle,
      },
      {
        code: 'S04 E03',
        title: 'Clinical Caries Segmentation',
        description: 'Semi-supervised ResNet-34 Feature Pyramid Network for panoramic dental radiograph lesion segmentation.',
        tags: ['PyTorch', 'ResNet-34', 'FPN', 'Medical AI'],
        runtime: '2026',
        palette: violetPastel,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Core Language', title: 'Python & SQL', detail: 'Primary languages for end-to-end data manipulation and database querying', palette: skyPastel },
  { label: 'Data Science', title: 'Exploratory Analytics', detail: 'Statistical profiling, distribution shift checks, and feature normalization', palette: cyanPastel },
  { label: 'Validation Rigor', title: 'Walk-Forward ML', detail: 'Temporal validation without lookahead leakage for realistic forecasting', palette: bluePastel },
  { label: 'Computer Vision', title: 'Medical Deep Learning', detail: 'PyTorch sliding-window segmentation with Feature Pyramid Networks', palette: violetPastel },
  { label: 'Applied AI', title: 'Psychometrics & NLP', detail: 'Likert engines, sentiment scoring, and prompt-engineered dynamic assessments', palette: periwinkle },
  { label: 'Agentic Systems', title: 'Autonomous Workflows', detail: 'Multi-criteria automated quality gates and scheduled GitHub Actions', palette: cyanPastel },
  { label: 'Interactive Viz', title: 'Plotly & Dashboards', detail: 'Multi-country benchmark matrices and comparative visual intelligence', palette: skyPastel },
  { label: 'Algorithms & CS', title: 'C++ Foundations', detail: 'Data structures, algorithm complexity, and high-performance computing', palette: bluePastel },
  { label: 'API Serving', title: 'FastAPI Microservices', detail: 'High-throughput async REST endpoints for machine learning inference', palette: periwinkle },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Mody University of Science and Technology', 'Computer Science and Engineering (2023 – 2027)'],
    chips: ['CGPA 8.93'],
  },
  {
    kicker: 'Core Stack',
    title: 'Data & Machine Learning',
    lines: ['Python, SQL, C++ · Scikit-learn, PyTorch, Pandas, NumPy', 'FastAPI, React, Next.js · Plotly, Tableau, Streamlit'],
    chips: ['Python', 'SQL', 'Scikit-learn', 'PyTorch', 'FastAPI', 'Pandas'],
  },
  {
    kicker: 'Internships',
    title: 'Practical Engineering',
    lines: [
      'Data Visualization Intern · Infosys Springboard · July 2026 – Present',
      'Summer Intern · Jalte Diye Foundation · Cogentic AI · June – July 2026',
      'Data Science Intern · YBI Foundation · May – June 2025',
    ],
  },
  {
    kicker: 'Flagship Projects',
    title: 'Verified Originals',
    lines: [
      'AI Agriculture — 71.6k records, 14 crops, walk-forward validation',
      'Soul Sense EQ — Next.js 14, Gemini psychometrics, VADER sentiment',
      'Dental Caries AI — PyTorch ResNet-34 FPN semi-supervised segmentation',
      'Cogentic AI — Automated agentic publishing with Gemini quality gate',
    ],
  },
  {
    kicker: 'Academic Merit',
    title: 'Strong Scholastic Record',
    lines: ['Secondary Education: 90.8%', 'Intermediate Non-Medical: 84.4%', 'B.Tech CSE: 8.93 CGPA'],
  },
  {
    kicker: 'Focus Area',
    title: 'Data Science & Applied AI',
    lines: ['Translating complex datasets into reliable, interpretable intelligence.'],
  },
];

export type ProfileId = 'nupur' | 'recruiter' | 'data_lead' | 'analyst';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'nupur',
    name: 'Nupur',
    blurb: 'The complete portfolio, in cinematic order',
    color: '#38bdf8',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, education, credentials & skills first',
    color: '#818cf8',
    order: ['story', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'data_lead',
    name: 'Data & AI Lead',
    blurb: 'Machine learning, research & architectures first',
    color: '#67e8f9',
    order: ['originals', 'skills', 'journey', 'about', 'picks', 'story'],
  },
  {
    id: 'analyst',
    name: 'Product & Analytics',
    blurb: 'Visualizations, dashboards & highlights first',
    color: '#a5b4fc',
    order: ['picks', 'originals', 'skills', 'journey', 'about', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Background & education', palette: periwinkle },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: skyPastel },
  originals: { nav: 'Originals', card: 'Featured Projects', meta: `${projects.length} Verified Originals • 2026`, palette: cyanPastel },
  picks: { nav: 'Focus Areas', card: 'Top Focus Areas', meta: 'Core competencies & technical focus', palette: bluePastel },
  skills: { nav: 'Skills', card: 'My Skill Universe', meta: `${skillCategories.length} Categories`, palette: skyPastel },
  story: { nav: 'The Full Story', card: 'The Full Story', meta: 'Resume & Verified Credentials', palette: violetPastel },
};
