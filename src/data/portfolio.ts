export const profile = {
  name: 'Praneet Hase',
  role: 'DevOps Engineer',
  tagline: 'DevOps Engineer',
  phone: '9313454159',
  email: 'praneethase512@gmail.com',
  github: 'https://github.com/CaptainPraneet',
  linkedin: 'https://www.linkedin.com/in/gecdhd-comp-praneet-hase',
  resumeLink: 'https://drive.google.com/file/d/1_4btJDQCZKA463zRxqZo-hspZq7kC1gY/view?usp=drivesdk',
  summary:
    'Enthusiastic and detail-oriented Computer Engineering fresher with a strong foundation in DevOps practices, cloud technologies, and full-stack development. Hands-on experience building CI/CD pipelines, containerizing applications, and automating deployments. Eager to apply technical skills in a dynamic environment and contribute to building scalable, secure, and automated solutions.',
  heroSub:
    'Computer Engineering fresher focused on building automated, containerized, monitored, and scalable deployment workflows using modern DevOps and cloud technologies.',
};

export const roles = [
  'DevOps Engineer',
  'Cloud Enthusiast',
  'CI/CD Automation',
  'Linux & Infrastructure',
  'Containerization',
  'Kubernetes',
];

export const heroTerminal = [
  { cmd: 'whoami', out: 'Praneet Hase' },
  { cmd: 'role', out: 'DevOps Engineer' },
  { cmd: 'stack', out: 'Docker | Kubernetes | Jenkins | AWS | Azure' },
  { cmd: 'status', out: 'Ready for Opportunities 🚀' },
];

export const learningJourney = [
  { label: 'Computer Engineering', icon: 'GraduationCap' },
  { label: 'Linux', icon: 'Terminal' },
  { label: 'Git & GitHub', icon: 'GitBranch' },
  { label: 'Cloud', icon: 'Cloud' },
  { label: 'CI/CD', icon: 'Workflow' },
  { label: 'Docker', icon: 'Box' },
  { label: 'Kubernetes', icon: 'Ship' },
  { label: 'Monitoring', icon: 'Activity' },
  { label: 'DevOps', icon: 'Infinity' },
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  desc: string;
  project?: string;
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'DevOps & Cloud',
    icon: 'Cloud',
    skills: [
      { name: 'CI/CD', desc: 'Continuous integration & delivery pipelines', project: 'CI/CD Pipeline Automation' },
      { name: 'Jenkins', desc: 'Pipeline automation & build orchestration', project: 'CI/CD Pipeline Automation' },
      { name: 'GitHub Actions', desc: 'Workflow automation for repos', project: 'CI/CD Pipeline Automation' },
      { name: 'Docker', desc: 'Application containerization', project: 'CI/CD Pipeline Automation' },
      { name: 'Kubernetes', desc: 'Container orchestration', project: 'Kubernetes Deployment & Monitoring' },
      { name: 'AWS — Basic', desc: 'EC2, storage & deployment basics', project: 'CI/CD Pipeline Automation' },
      { name: 'Microsoft Azure', desc: 'VMs, storage, networking, security', project: 'Azure Cloud Internship' },
    ],
  },
  {
    title: 'Monitoring & Automation',
    icon: 'Activity',
    skills: [
      { name: 'Prometheus', desc: 'Metrics & infrastructure monitoring', project: 'Kubernetes Deployment & Monitoring' },
      { name: 'Grafana', desc: 'Monitoring visualization & dashboards', project: 'Kubernetes Deployment & Monitoring' },
      { name: 'Linux', desc: 'Server management & administration', project: 'DevOps Internship' },
      { name: 'Shell Scripting', desc: 'Task automation & scripting' },
    ],
  },
  {
    title: 'Programming & Scripting',
    icon: 'Code2',
    skills: [
      { name: 'Python', desc: 'Scripting & automation' },
      { name: 'JavaScript', desc: 'Application & tooling development' },
      { name: 'PHP', desc: 'Server-side web development', project: 'Clinic Management System' },
    ],
  },
  {
    title: 'Web Development',
    icon: 'Globe',
    skills: [
      { name: 'MERN Stack', desc: 'MongoDB, Express, React, Node.js' },
      { name: 'MongoDB', desc: 'NoSQL document database' },
      { name: 'Express.js', desc: 'Node.js web framework' },
      { name: 'React.js', desc: 'Component-based UI library' },
      { name: 'Node.js', desc: 'JavaScript runtime' },
      { name: 'HTML', desc: 'Web page structure' },
      { name: 'CSS', desc: 'Styling & responsive design' },
    ],
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: [
      { name: 'MySQL', desc: 'Relational database management', project: 'Clinic Management System' },
      { name: 'MongoDB', desc: 'NoSQL document store' },
    ],
  },
  {
    title: 'Tools & Version Control',
    icon: 'Wrench',
    skills: [
      { name: 'Git', desc: 'Distributed version control', project: 'CI/CD Pipeline Automation' },
      { name: 'GitHub', desc: 'Repository hosting & collaboration', project: 'CI/CD Pipeline Automation' },
    ],
  },
];

export type PipelineStage = {
  name: string;
  purpose: string;
  use: string;
  project?: string;
};

export const deployPipeline: PipelineStage[] = [
  { name: 'Developer', purpose: 'Writes & commits application code', use: 'Local development of application source' },
  { name: 'Git', purpose: 'Version control for source code', use: 'Tracking changes & branching', project: 'CI/CD Pipeline Automation' },
  { name: 'GitHub', purpose: 'Remote repository hosting', use: 'Collaboration & source hosting', project: 'CI/CD Pipeline Automation' },
  { name: 'CI/CD', purpose: 'Continuous integration & delivery', use: 'Automating build, test, deploy', project: 'CI/CD Pipeline Automation' },
  { name: 'Jenkins / GitHub Actions', purpose: 'Pipeline orchestration engine', use: 'Running build & deploy stages', project: 'CI/CD Pipeline Automation' },
  { name: 'Build & Test', purpose: 'Compile code & run tests', use: 'Automated test gates before deploy', project: 'CI/CD Pipeline Automation' },
  { name: 'Docker', purpose: 'Containerize the application', use: 'Consistent build & runtime images', project: 'CI/CD Pipeline Automation' },
  { name: 'Container', purpose: 'Portable runtime artifact', use: 'Reproducible deployment unit', project: 'CI/CD Pipeline Automation' },
  { name: 'Kubernetes / AWS', purpose: 'Orchestration & cloud hosting', use: 'Deploying & scaling containers', project: 'Kubernetes Deployment & Monitoring' },
  { name: 'Prometheus', purpose: 'Collect metrics', use: 'Monitoring app & infra metrics', project: 'Kubernetes Deployment & Monitoring' },
  { name: 'Grafana', purpose: 'Visualize metrics', use: 'Dashboards & alerting', project: 'Kubernetes Deployment & Monitoring' },
];

export type Project = {
  id: string;
  title: string;
  type: string;
  tech: string[];
  description: string;
  architecture: string[];
  implementation: string[];
  tools: string[];
  github: string;
  liveDemo?: string;
  whatILearned: string[];
  accent: 'cyan' | 'mint' | 'amber';
};

export const projects: Project[] = [
  {
    id: 'cicd',
    title: 'CI/CD Pipeline Automation',
    type: 'DevOps / Automation',
    tech: ['Jenkins', 'GitHub Actions', 'Docker', 'AWS'],
    description:
      'Implemented a CI/CD pipeline using Jenkins and GitHub Actions for a sample Node.js application. Automated build, test, and deployment to AWS EC2 with Docker.',
    architecture: ['Developer', 'GitHub', 'Jenkins / GitHub Actions', 'Build', 'Test', 'Docker', 'AWS EC2'],
    implementation: [
      'Configured GitHub as the source repository with webhook-driven triggers.',
      'Built Jenkins pipeline stages for build, test, and Docker image creation.',
      'Automated deployment to AWS EC2 using Docker containers.',
      'Integrated GitHub Actions as an alternative CI workflow.',
    ],
    tools: ['Jenkins', 'GitHub Actions', 'Docker', 'AWS EC2', 'Git', 'Node.js'],
    github: 'https://github.com/CaptainPraneet/portfolio.git',
    accent: 'cyan',
    whatILearned: [
      'Designing end-to-end CI/CD pipelines from source to deployment.',
      'Containerizing applications for consistent runtime environments.',
      'Automating cloud deployments to AWS EC2.',
    ],
  },
  {
    id: 'k8s',
    title: 'Kubernetes Deployment & Monitoring',
    type: 'DevOps / Orchestration',
    tech: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana'],
    description:
      'Deployed a microservices-based application on Kubernetes using Minikube. Configured Prometheus and Grafana for performance monitoring and alerting.',
    architecture: ['Application', 'Container', 'Kubernetes', 'Services', 'Prometheus', 'Grafana'],
    implementation: [
      'Containerized microservices and defined Kubernetes deployments & services.',
      'Used Helm for packaged deployments and configuration management.',
      'Configured Prometheus to scrape cluster & application metrics.',
      'Built Grafana dashboards for performance and alerting visibility.',
    ],
    tools: ['Kubernetes', 'Minikube', 'Helm', 'Prometheus', 'Grafana', 'Docker'],
    github: 'https://github.com/CaptainPraneet/Kubernetes-Project.git',
    accent: 'mint',
    whatILearned: [
      'Orchestrating containerized workloads with Kubernetes.',
      'Setting up observability with Prometheus & Grafana.',
      'Managing deployments with Helm charts.',
    ],
  },
  {
    id: 'clinic',
    title: 'Clinic Management System',
    type: 'Full-Stack Web Application',
    tech: ['PHP', 'HTML', 'CSS', 'MySQL'],
    description:
      'Developed a web application for managing patients, doctors, and appointments. Implemented CRUD operations and an intuitive interface for managing clinic workflows.',
    architecture: ['User', 'Web Interface', 'PHP Application', 'MySQL Database'],
    implementation: [
      'Built PHP application layer for clinic workflow management.',
      'Designed MySQL schema for patients, doctors, and appointments.',
      'Implemented CRUD operations across all entities.',
      'Created an intuitive web interface with HTML & CSS.',
    ],
    tools: ['PHP', 'MySQL', 'HTML', 'CSS', 'Apache'],
    github: 'https://github.com/CaptainPraneet/Clinic-Management-System.git',
    accent: 'amber',
    whatILearned: [
      'Full-stack web development with PHP & MySQL.',
      'Designing relational database schemas.',
      'Building CRUD-driven business workflows.',
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
  certificate?: string;
};

export const experiences: Experience[] = [
  {
    role: 'DevOps Intern',
    company: 'DigiFarm Technologies, Navsari',
    period: 'January 2026 – April 2026',
    points: [
      'Worked with Linux, Git, GitHub, Docker, and CI/CD workflows for application deployment.',
      'Assisted in containerizing applications and automating build and deployment processes.',
      'Gained hands-on experience in server management, application deployment, and basic troubleshooting.',
    ],
    certificate: 'https://drive.google.com/file/d/1ADaHVNGzAJfNrK_2bkSt3g-pfRYBQszb/view?usp=drivesdk',
  },
  {
    role: 'Microsoft Azure Cloud Infrastructure Intern',
    company: 'Microsoft — Powered by CloudThat',
    period: 'June 2025 – July 2025',
    points: [
      'Completed the Microsoft Azure Cloud Infrastructure Internship Program 2025.',
      'Worked with Azure services including Virtual Machines, Storage, Networking, and Security.',
      'Learned core cloud concepts including IaaS, scalability, availability, and resource management.',
    ],
    certificate: 'https://drive.google.com/file/d/1hBObK1Wx7ZQiJGkvtTSAG9CanV-BXUgM/view?usp=drivesdk',
  },
];

export type Education = {
  degree: string;
  institution: string;
  cgpa: string;
};

export const education: Education[] = [
  {
    degree: 'B.E. in Computer Engineering',
    institution: 'Government Engineering College, Dahod',
    cgpa: '7.8',
  },
  {
    degree: 'Diploma in IT Engineering',
    institution: 'Dr. BBA Government Polytechnic, Karad',
    cgpa: '8.5',
  },
];

export type Certification = {
  title: string;
  issuer: string;
  note?: string;
  url?: string;
  selfLearning?: boolean;
};

export const certifications: Certification[] = [
  {
    title: 'DevOps Fundamentals',
    issuer: 'Self-learning',
    note: 'Hands-on projects with CI/CD, Docker, Kubernetes & monitoring.',
    selfLearning: true,
  },
  {
    title: 'PHP Bootcamp: The Complete Course',
    issuer: 'Udemy',
  },
  {
    title: 'Basics of Computer Networking Bootcamp',
    issuer: 'Udemy',
  },
  {
    title: 'Python Programming',
    issuer: 'Coursera',
  },
];

export const devopsLab = [
  { name: 'Local Development', what: 'Writing & testing application code locally', how: 'Developing apps before pushing to version control', project: 'CI/CD Pipeline Automation' },
  { name: 'Git', what: 'Distributed version control system', how: 'Tracking changes & managing branches', project: 'CI/CD Pipeline Automation' },
  { name: 'GitHub', what: 'Remote repository hosting platform', how: 'Collaboration & source hosting', project: 'CI/CD Pipeline Automation' },
  { name: 'Jenkins / GitHub Actions', what: 'CI/CD pipeline orchestration tools', how: 'Automating build, test & deploy stages', project: 'CI/CD Pipeline Automation' },
  { name: 'Docker', what: 'Containerization platform', how: 'Containerized apps for consistent dev & deploy', project: 'CI/CD Pipeline Automation' },
  { name: 'Kubernetes', what: 'Container orchestration system', how: 'Deploying & scaling containerized workloads', project: 'Kubernetes Deployment & Monitoring' },
  { name: 'AWS / Azure', what: 'Cloud infrastructure providers', how: 'Hosting & managing cloud resources', project: 'CI/CD Pipeline Automation' },
  { name: 'Prometheus', what: 'Metrics & monitoring system', how: 'Collecting app & infra metrics', project: 'Kubernetes Deployment & Monitoring' },
  { name: 'Grafana', what: 'Observability & visualization platform', how: 'Building dashboards & alerting', project: 'Kubernetes Deployment & Monitoring' },
];

export const k8sControlPlane = [
  { name: 'API Server', desc: 'Frontend for the Kubernetes control plane.' },
  { name: 'Scheduler', desc: 'Assigns pods to nodes based on resources.' },
  { name: 'Controller Manager', desc: 'Runs controllers regulating cluster state.' },
  { name: 'etcd', desc: 'Consistent key-value store for cluster data.' },
];

export const k8sWorkerNodes = [
  {
    name: 'Worker Node 1',
    kubelet: 'Kubelet',
    runtime: 'Container Runtime',
    pods: ['Pod A', 'Pod B'],
  },
  {
    name: 'Worker Node 2',
    kubelet: 'Kubelet',
    runtime: 'Container Runtime',
    pods: ['Pod C', 'Pod D'],
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'devops-lab', label: 'DevOps Lab' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const bootSequence = [
  { label: 'Initializing Linux...', done: 'Linux Ready' },
  { label: 'Connecting Git...', done: 'Git Connected' },
  { label: 'Starting Docker Engine...', done: 'Docker Ready' },
  { label: 'Loading Kubernetes...', done: 'Kubernetes Ready' },
  { label: 'Connecting Cloud...', done: 'Cloud Connected' },
  { label: 'Starting Monitoring...', done: 'Prometheus & Grafana Ready' },
];
