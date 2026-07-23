const domainCategories = {
  // ==========================================
  // 1. ENGINEERING & TECHNOLOGY
  // ==========================================
  engineering: {
    title: "Engineering & Technology",
    icon: "",
    shortDesc: "Software, Hardware, AI, Data, Cloud, Cybersecurity, Mechanical, Civil & Infrastructure.",
    subDomains: {
      aiml: {
        title: "AI & Machine Learning",
        overview: "Designing intelligent systems, neural networks, large language models (LLMs), and automated data workflows.",
        avgSalary: "$110,000 - $180,000 / year",
        timeToMaster: "6 to 12 Months",
        phases: [
          { name: "Phase 1: Foundations", desc: "Python, Linear Algebra, Multivariable Calculus, Probability & Statistics." },
          { name: "Phase 2: Core ML", desc: "Supervised & Unsupervised Learning, Scikit-Learn, Feature Engineering." },
          { name: "Phase 3: Deep Learning & GenAI", desc: "Neural Networks, PyTorch/TensorFlow, Transformers, RAG & LLMs." },
          { name: "Phase 4: MLOps & Deployment", desc: "Docker, Model Monitoring, FastAPI, Cloud Deployment (AWS/GCP)." }
        ],
        roles: [
          { name: "AI Engineer", desc: "Builds and integrates AI models and API services into scalable software applications." },
          { name: "ML Research Engineer", desc: "Develops novel neural architectures and optimizes transformer models." },
          { name: "Data Scientist", desc: "Extracts actionable insights from complex structured/unstructured datasets." }
        ],
        companies: [
      { name: "Google", desc: "Global technology leader in search, AI research (DeepMind), and cloud computing.", url: "https://www.google.com" },
      { name: "OpenAI", desc: "AI research organization behind revolutionary models like GPT-4, DALL-E, and Sora.", url: "https://openai.com" },
      { name: "TCS", desc: "organization behind revolutionary service based companies", url: "https://www.tcs.com" }
    ],
        skills: [
          { name: "Python", desc: "The primary programming language for artificial intelligence and data science." },
          { name: "PyTorch", desc: "Leading open-source deep learning framework favored by research and industry teams." }
        ],
        certs: [
          { name: "AWS Certified Machine Learning - Specialty", provider: "AWS", difficulty: "Advanced", desc: "Validates building, training, and deploying ML models on AWS." }
        ],
        courses: [
          { name: "Machine Learning Specialization", provider: "Coursera (Andrew Ng)", duration: "3 Months", desc: "Foundational course covering fundamental ML concepts." }
        ],
        projects: [
          { title: "Syllabus Question Answering Bot", desc: "Build an LLM RAG agent to parse textbooks and answer academic module questions with citations." }
        ]
      },
      fullstack: {
        title: "Full-Stack Web Development",
        overview: "Building end-to-end web applications including dynamic user interfaces, backend APIs, and databases.",
        avgSalary: "$90,000 - $150,000 / year",
        timeToMaster: "6 Months",
        phases: [
          { name: "Phase 1: Web Fundamentals", desc: "HTML5, CSS3, JavaScript (ES6+), DOM Manipulation." },
          { name: "Phase 2: Frontend Frameworks", desc: "React.js, Next.js, TailwindCSS, State Management." },
          { name: "Phase 3: Backend & APIs", desc: "Node.js, Express, RESTful APIs, PostgreSQL / MongoDB." }
        ],
        roles: [
          { name: "Full Stack Developer", desc: "Manages both frontend UI design and backend server application logic." }
        ],
        companies: [
          { name: "Atlassian", desc: "Software giant behind productivity platforms like Jira and Confluence." }
        ],
        skills: [
          { name: "JavaScript", desc: "Core interactive language powering modern browser-based web applications." },
          { name: "React.js", desc: "Component-driven frontend UI library created by Meta." }
        ],
        certs: [
          { name: "Meta Full-Stack Developer Certificate", provider: "Meta", difficulty: "Intermediate", desc: "Covers client-side React and backend database management." }
        ],
        courses: [
          { name: "Full Stack Open", provider: "University of Helsinki", duration: "4 Months", desc: "Deep dive into modern web apps with React, Redux, and Node.js." }
        ],
        projects: [
          { title: "Real-time Collaboration App", desc: "Build a multi-user document editor with real-time WebSocket synchronization." }
        ]
      },
      cloud_devops: {
        title: "Cloud Computing & DevOps",
        overview: "Managing cloud infrastructure, containerization, CI/CD automation pipelines, and platform reliability.",
        avgSalary: "$100,000 - $165,000 / year",
        timeToMaster: "6 to 8 Months",
        phases: [
          { name: "Phase 1: Networking & Linux", desc: "Bash, TCP/IP, DNS, System Administration." },
          { name: "Phase 2: Cloud & Containers", desc: "AWS, Azure, Docker, Kubernetes, Terraform." }
        ],
        roles: [
          { name: "DevOps Engineer", desc: "Automates deployment pipelines and streamlines infrastructure management." }
        ],
        companies: [
          { name: "AWS", desc: "Dominant cloud service provider offering global infrastructure solutions." }
        ],
        skills: [
          { name: "Docker", desc: "Container engine for packaging applications with necessary dependencies." },
          { name: "Kubernetes", desc: "Container orchestration tool for automated scaling." }
        ],
        certs: [
          { name: "AWS Solutions Architect Associate", provider: "AWS", difficulty: "Intermediate", desc: "Validates ability to design resilient cloud architectures." }
        ],
        courses: [
          { name: "DevOps BootCamp", provider: "KodeKloud", duration: "3 Months", desc: "Hands-on labs in Linux, Docker, and Kubernetes." }
        ],
        projects: [
          { title: "Auto-Scaling Kubernetes Cluster", desc: "Deploy an auto-healing microservice web app." }
        ]
      },
      cybersecurity: {
        title: "Cybersecurity & Ethical Hacking",
        overview: "Protecting systems, networks, and data from cyber threats, vulnerabilities, and digital attacks.",
        avgSalary: "$95,000 - $160,000 / year",
        timeToMaster: "6 to 8 Months",
        phases: [
          { name: "Phase 1: Networking & Security Fundamentals", desc: "OSI Model, Firewalls, Cryptography, Wireshark." },
          { name: "Phase 2: Penetration Testing", desc: "Kali Linux, Metasploit, Burp Suite, OWASP Top 10." }
        ],
        roles: [
          { name: "Ethical Hacker / Pen Tester", desc: "Simulates cyberattacks to identify and patch security vulnerabilities." }
        ],
        companies: [
          { name: "Palo Alto Networks", desc: "Global cybersecurity leader providing enterprise firewalls and cloud protection." }
        ],
        skills: [
          { name: "Wireshark", desc: "Network packet analyzer used for network troubleshooting and analysis." }
        ],
        certs: [
          { name: "CompTIA Security+", provider: "CompTIA", difficulty: "Beginner", desc: "Foundational baseline certification for cybersecurity professionals." }
        ],
        courses: [
          { name: "Practical Ethical Hacking", provider: "TCM Security", duration: "2 Months", desc: "Hands-on training in network penetration testing." }
        ],
        projects: [
          { title: "Vulnerability Assessment Lab", desc: "Set up a virtual lab environment and perform vulnerability scans on target systems." }
        ]
      },
      mechanical: {
        title: "Mechanical & Robotics Engineering",
        overview: "Designing mechanical hardware, CAD modeling, thermodynamics, robotics kinematics, and automation systems.",
        avgSalary: "$80,000 - $135,000 / year",
        timeToMaster: "8 to 12 Months",
        phases: [
          { name: "Phase 1: Engineering Mechanics & CAD", desc: "Statics, Strength of Materials, SolidWorks/AutoCAD." },
          { name: "Phase 2: Robotics & Controls", desc: "ROS (Robot Operating System), Microcontrollers, Actuators." }
        ],
        roles: [
          { name: "Robotics Engineer", desc: "Designs autonomous mechanical systems and robotic automation controllers." }
        ],
        companies: [
          { name: "Tesla", desc: "Automotive and clean energy giant pioneering advanced robotic manufacturing." }
        ],
        skills: [
          { name: "SolidWorks", desc: "Computer-aided design (CAD) software for 3D mechanical modeling." }
        ],
        certs: [
          { name: "Certified SolidWorks Associate (CSWA)", provider: "Dassault Systèmes", difficulty: "Intermediate", desc: "Validates baseline competency in 3D CAD modeling." }
        ],
        courses: [
          { name: "Robotics Specialization", provider: "University of Pennsylvania", duration: "4 Months", desc: "Covers robot kinematics, motion planning, and control systems." }
        ],
        projects: [
          { title: "Autonomous Robotic Arm Design", desc: "Model and simulate a 4-DOF robotic arm using SolidWorks and ROS." }
        ]
      },
      civil: {
        title: "Civil & Infrastructure Engineering",
        overview: "Planning, designing, and managing structural building, transportation, and environmental infrastructure projects.",
        avgSalary: "$75,000 - $130,000 / year",
        timeToMaster: "8 to 12 Months",
        phases: [
          { name: "Phase 1: Structural Analysis", desc: "Concrete/Steel Design, Geotechnical Engineering, Surveying." },
          { name: "Phase 2: Drafting & BIM", desc: "AutoCAD, Revit, Building Information Modeling (BIM)." }
        ],
        roles: [
          { name: "Structural Engineer", desc: "Designs structural frameworks to ensure safety and stability against forces." }
        ],
        companies: [
          { name: "Bechtel", desc: "Global engineering, construction, and project management company." }
        ],
        skills: [
          { name: "Revit BIM", desc: "Building Information Modeling software for structural design and coordination." }
        ],
        certs: [
          { name: "FE / PE Civil License", provider: "NCEES", difficulty: "Advanced", desc: "Official professional license required for practicing civil engineering." }
        ],
        courses: [
          { name: "Structural Engineering Foundations", provider: "Coursera", duration: "3 Months", desc: "Principles of structural load analysis and structural design." }
        ],
        projects: [
          { title: "Multi-Story Building Load Analysis", desc: "Perform structural modeling and load calculation for a residential building in Revit." }
        ]
      }
    }
  },

  // ==========================================
  // 2. MEDICINE & HEALTH SCIENCES
  // ==========================================
  medicine: {
    title: "Medicine & Health Sciences",
    icon: "",
    shortDesc: "MBBS, Dentistry, Nursing, Pharmacy, Biotechnology, Medical Lab & Public Health.",
    subDomains: {
      mbbs: {
        title: "MBBS (Medicine & Surgery)",
        overview: "Comprehensive human biological study, clinical diagnostic techniques, pharmacology, and surgical care.",
        avgSalary: "$80,000 - $200,000 / year",
        timeToMaster: "5.5 Years",
        phases: [
          { name: "Phase 1: Pre-Clinical", desc: "Human Anatomy, Physiology, Biochemistry." },
          { name: "Phase 2: Clinical Practice", desc: "Pathology, Pharmacology, General Surgery, Internal Medicine." }
        ],
        roles: [
          { name: "General Physician", desc: "Diagnoses and treats non-surgical medical ailments." }
        ],
        companies: [
          { name: "Apollo Hospitals", desc: "Leading hospital network offering comprehensive healthcare." }
        ],
        skills: [
          { name: "Clinical Diagnosis", desc: "Analyzing patient symptoms to identify medical conditions." }
        ],
        certs: [
          { name: "USMLE / PLAB", provider: "NBME / GMC", difficulty: "Advanced", desc: "Medical licensing examinations for US and UK practice." }
        ],
        courses: [
          { name: "Anatomy Specialization", provider: "Coursera", duration: "3 Months", desc: "Comprehensive human biological organ study." }
        ],
        projects: [
          { title: "Clinical Case Study Analysis", desc: "Formulate diagnostic plans for complex clinical presentations." }
        ]
      },
      dentistry: {
        title: "Dentistry (BDS)",
        overview: "Oral health, dental surgery, prosthodontics, periodontics, and maxillofacial diagnostics.",
        avgSalary: "$85,000 - $170,000 / year",
        timeToMaster: "5 Years",
        phases: [
          { name: "Phase 1: Dental Sciences", desc: "Oral Anatomy, Dental Materials, Pathology." },
          { name: "Phase 2: Clinical Rotations", desc: "Orthodontics, Endodontics, Oral Surgery." }
        ],
        roles: [
          { name: "Dental Surgeon", desc: "Diagnoses and treats oral diseases, performs dental restorative procedures." }
        ],
        companies: [
          { name: "ClearChoice Dental", desc: "Leading network of dental implant specialized centers." }
        ],
        skills: [
          { name: "Oral Surgery", desc: "Surgical intervention procedures for teeth extraction and jaw repair." }
        ],
        certs: [
          { name: "National Board Dental Examination (NBDE)", provider: "ADA", difficulty: "Advanced", desc: "Licensing exam for practicing dentistry." }
        ],
        courses: [
          { name: "Contemporary Dentistry", provider: "University of Pennsylvania", duration: "2 Months", desc: "Modern oral restorative materials and dental care." }
        ],
        projects: [
          { title: "Digital Impression Restoration Case", desc: "Map and model 3D digital dental restoration scans." }
        ]
      },
      nursing: {
        title: "Nursing & Patient Care",
        overview: "Direct patient care administration, clinical monitoring, critical care nursing, and emergency triage.",
        avgSalary: "$65,000 - $110,000 / year",
        timeToMaster: "3 to 4 Years",
        phases: [
          { name: "Phase 1: Nursing Foundations", desc: "Anatomy, Pharmacology, Patient Care Principles." },
          { name: "Phase 2: Clinical Practicum", desc: "ICU Care, Pediatrics, Surgical Nursing Rotations." }
        ],
        roles: [
          { name: "Registered Nurse (RN)", desc: "Provides bedside clinical patient care, administers medication, monitors vitals." }
        ],
        companies: [
          { name: "Kaiser Permanente", desc: "One of America's largest non-profit healthcare plans and hospital networks." }
        ],
        skills: [
          { name: "Patient Triage", desc: "Assessing severity of incoming emergency patients." }
        ],
        certs: [
          { name: "NCLEX-RN", provider: "NCSBN", difficulty: "Advanced", desc: "National licensing examination for registered nurses." }
        ],
        courses: [
          { name: "Clinical Nursing Fundamentals", provider: "Coursera", duration: "2 Months", desc: "Key healthcare practices and bedside care." }
        ],
        projects: [
          { title: "ICU Patient Care Plan", desc: "Develop a multi-day recovery and clinical care plan for intensive care patients." }
        ]
      },
      pharmacy: {
        title: "Pharmacy & Clinical Research",
        overview: "Drug synthesis, formulation, pharmacokinetics, pharmaceutical chemistry, and clinical drug trials.",
        avgSalary: "$70,000 - $125,000 / year",
        timeToMaster: "4 Years",
        phases: [
          { name: "Phase 1: Chemistry & Pharmacology", desc: "Medicinal Chemistry, Pharmacokinetics, Dosage Forms." },
          { name: "Phase 2: Regulatory & Clinical", desc: "Clinical Trials, Good Manufacturing Practice (GMP)." }
        ],
        roles: [
          { name: "Pharmacologist", desc: "Researches chemical interactions with biological systems." }
        ],
        companies: [
          { name: "Pfizer", desc: "Global biopharmaceutical corporation developing novel therapeutics." }
        ],
        skills: [
          { name: "Pharmacology", desc: "Study of drug mechanisms and adverse reactions." }
        ],
        certs: [
          { name: "Regulatory Affairs Certification (RAC)", provider: "RAPS", difficulty: "Advanced", desc: "Healthcare regulatory compliance credential." }
        ],
        courses: [
          { name: "Clinical Trials Data Management", provider: "Vanderbilt University", duration: "2 Months", desc: "Managing clinical trial datasets safely." }
        ],
        projects: [
          { title: "Controlled-Release Formulation Study", desc: "Evaluate tablet dissolution profiles in lab settings." }
        ]
      },
      biotech: {
        title: "Biotechnology & Genetic Engineering",
        overview: "Gene editing (CRISPR), recombinant DNA technology, bioinformatics, and biomanufacturing.",
        avgSalary: "$75,000 - $135,000 / year",
        timeToMaster: "4 Years",
        phases: [
          { name: "Phase 1: Molecular Biology", desc: "Genetics, Biochemistry, Cell Biology." },
          { name: "Phase 2: Genetic Engineering", desc: "CRISPR-Cas9, Gene Sequencing, Bioinformatics." }
        ],
        roles: [
          { name: "Biotech Research Scientist", desc: "Conducts gene editing and cellular bio-process engineering." }
        ],
        companies: [
          { name: "Moderna", desc: "Pioneer in mRNA vaccine technology and therapeutic biotechnology." }
        ],
        skills: [
          { name: "CRISPR-Cas9", desc: "Precision gene editing technique for modifying DNA sequences." }
        ],
        certs: [
          { name: "Biotechnology Laboratory Specialist", provider: "Biomanufacturing Institute", difficulty: "Intermediate", desc: "Validates lab techniques." }
        ],
        courses: [
          { name: "Genomics & Precision Medicine", provider: "Johns Hopkins", duration: "2 Months", desc: "Gene sequencing applications in clinical treatment." }
        ],
        projects: [
          { title: "DNA Sequence Alignment Tool", desc: "Build a python algorithm to align and compare target genome sequences." }
        ]
      },
      public_health: {
        title: "Public Health & Epidemiology",
        overview: "Disease transmission tracking, biostatistics, public health administration, and health policy planning.",
        avgSalary: "$65,000 - $115,000 / year",
        timeToMaster: "2 Years (MPH)",
        phases: [
          { name: "Phase 1: Epidemiological Methods", desc: "Biostatistics, Outbreak Investigation, Global Health." },
          { name: "Phase 2: Health Policy", desc: "Healthcare Economics, Program Evaluation, Preventative Health." }
        ],
        roles: [
          { name: "Epidemiologist", desc: "Tracks patterns and causes of diseases in human populations." }
        ],
        companies: [
          { name: "World Health Organization (WHO)", desc: "Global specialized agency responsible for international public health." }
        ],
        skills: [
          { name: "Biostatistics", desc: "Application of statistical methods to public health data." }
        ],
        certs: [
          { name: "Certified in Public Health (CPH)", provider: "NBOEPH", difficulty: "Advanced", desc: "National credential in public health science." }
        ],
        courses: [
          { name: "Epidemiology in Public Health", provider: "Johns Hopkins", duration: "2 Months", desc: "Methods for measuring disease frequency and association." }
        ],
        projects: [
          { title: "Outbreak Mapping Dashboard", desc: "Create a spatial visualization dashboard tracking regional disease transmission data." }
        ]
      }
    }
  },

  // ==========================================
  // 3. BUSINESS, FINANCE & MANAGEMENT
  // ==========================================
  business: {
    title: "Business & Management",
    icon: "",
    shortDesc: "Finance, Product Management, Marketing, Human Resources, Strategy & Consulting.",
    subDomains: {
      finance: {
        title: "Investment Banking & Corporate Finance",
        overview: "Financial modeling, equity valuation, corporate financial accounting, and M&A advisory.",
        avgSalary: "$90,000 - $175,000 / year",
        timeToMaster: "6 to 12 Months",
        phases: [
          { name: "Phase 1: Financial Accounting", desc: "Balance Sheets, Income Statements, Cash Flow Dynamics." },
          { name: "Phase 2: Valuation Modeling", desc: "DCF Models, LBO Analysis, Trading Comps." }
        ],
        roles: [
          { name: "Investment Banking Analyst", desc: "Builds financial valuation models for corporate mergers." }
        ],
        companies: [
          { name: "Goldman Sachs", desc: "Leading global financial institution providing investment banking services." }
        ],
        skills: [
          { name: "Financial Modeling", desc: "Building mathematical Excel models to project revenue and valuation." }
        ],
        certs: [
          { name: "Chartered Financial Analyst (CFA)", provider: "CFA Institute", difficulty: "Advanced", desc: "Gold-standard certification for investment analysts." }
        ],
        courses: [
          { name: "Financial Markets", provider: "Yale University", duration: "2 Months", desc: "Comprehensive foundation in risk management." }
        ],
        projects: [
          { title: "Public Company Valuation Model", desc: "Build a 3-statement DCF valuation model in Excel." }
        ]
      },
      product_mgmt: {
        title: "Product Management (Tech PM)",
        overview: "Guiding software product lifecycles, user experience strategy, cross-functional engineering execution, and metrics.",
        avgSalary: "$95,000 - $160,000 / year",
        timeToMaster: "4 to 6 Months",
        phases: [
          { name: "Phase 1: User Discovery & Strategy", desc: "Customer Interviews, PRD Writing, Roadmapping." },
          { name: "Phase 2: Execution", desc: "Agile/Scrum, A/B Testing, Product Analytics." }
        ],
        roles: [
          { name: "Product Manager", desc: "Owns the vision, execution roadmap, and key metrics of software products." }
        ],
        companies: [
          { name: "Google", desc: "Pioneered structured product management leadership frameworks." }
        ],
        skills: [
          { name: "PRD Writing", desc: "Formulating clear Product Requirement Documents for engineering." }
        ],
        certs: [
          { name: "Certified Scrum Product Owner (CSPO)", provider: "Scrum Alliance", difficulty: "Intermediate", desc: "Training for leading Scrum product sprints." }
        ],
        courses: [
          { name: "Become a Product Manager", provider: "Udemy", duration: "2 Months", desc: "Covers market validation, wireframing, and product metric tracking." }
        ],
        projects: [
          { title: "App Feature PRD & Prototype", desc: "Draft a comprehensive PRD and wireframe for an innovative app feature." }
        ]
      },
      marketing: {
        title: "Digital Marketing & Brand Strategy",
        overview: "SEO optimization, paid performance ads (PPC), social media strategy, content marketing, and growth analytics.",
        avgSalary: "$60,000 - $115,000 / year",
        timeToMaster: "3 to 5 Months",
        phases: [
          { name: "Phase 1: Performance Marketing", desc: "Google Ads, Meta Ads Manager, Keyword Research." },
          { name: "Phase 2: Content & Analytics", desc: "SEO, Copywriting, Google Analytics 4 (GA4)." }
        ],
        roles: [
          { name: "Growth Marketer", desc: "Runs experiment-driven marketing campaigns to scale user acquisition." }
        ],
        companies: [
          { name: "HubSpot", desc: "Leading inbound marketing, sales, and CRM software provider." }
        ],
        skills: [
          { name: "Google Analytics 4", desc: "Web analytics service tracking web traffic and user activity." }
        ],
        certs: [
          { name: "Google Ads Search Certification", provider: "Google", difficulty: "Beginner", desc: "Demonstrates capability in running Google Search ad campaigns." }
        ],
        courses: [
          { name: "Digital Marketing Specialization", provider: "University of Illinois", duration: "3 Months", desc: "Digital marketing analytics and social strategy." }
        ],
        projects: [
          { title: "Multi-Channel Ad Campaign", desc: "Design and run an optimized mock Google & Meta ad budget allocation plan." }
        ]
      },
      strategy_consulting: {
        title: "Strategy & Management Consulting",
        overview: "Corporate restructuring, market entry strategies, operational efficiency, and executive decision frameworks.",
        avgSalary: "$100,000 - $185,000 / year",
        timeToMaster: "6 to 12 Months",
        phases: [
          { name: "Phase 1: Case Frameworks", desc: "MECE Principle, Profitability Framework, Market Entry." },
          { name: "Phase 2: Slide Deck Writing", desc: "Pyramid Principle, Data Visualization, Boardroom Presentations." }
        ],
        roles: [
          { name: "Management Consultant", desc: "Advises corporate executives on solving complex operational and strategic challenges." }
        ],
        companies: [
          { name: "McKinsey & Company", desc: "World-renowned top management consulting firm." }
        ],
        skills: [
          { name: "MECE Framework", desc: "Mutually Exclusive, Collectively Exhaustive problem solving structure." }
        ],
        certs: [
          { name: "Project Management Professional (PMP)", provider: "PMI", difficulty: "Advanced", desc: "Industry-standard project management credential." }
        ],
        courses: [
          { name: "Business Strategy Specialization", provider: "Darden School of Business", duration: "3 Months", desc: "Competitive and corporate strategy analysis." }
        ],
        projects: [
          { title: "Market Entry Advisory Deck", desc: "Build a 15-slide executive presentation advising a tech firm on entering renewable energy markets." }
        ]
      }
    }
  },

  // ==========================================
  // 4. DESIGN, ARTS & CREATIVE MEDIA
  // ==========================================
  design: {
    title: "Design, Arts & Creative Media",
    icon: "",
    shortDesc: "UI/UX Design, Graphic & Brand Design, 3D Animation, Game Art, and Film Production.",
    subDomains: {
      uiux: {
        title: "UI/UX Design & Product Design",
        overview: "Designing intuitive digital screen experiences, visual component systems, user workflows, and prototypes.",
        avgSalary: "$75,000 - $130,000 / year",
        timeToMaster: "4 to 6 Months",
        phases: [
          { name: "Phase 1: User Research", desc: "Information Architecture, Wireframes, Usability Testing." },
          { name: "Phase 2: Visual Interface", desc: "Typography, Grid Layouts, Design Systems, Figma." }
        ],
        roles: [
          { name: "UI/UX Designer", desc: "Creates screen wireframes, design components, and visual layouts." }
        ],
        companies: [
          { name: "Figma", desc: "Leading cloud collaborative vector graphics and interface design platform." }
        ],
        skills: [
          { name: "Figma", desc: "Standard vector UI design tool for wireframing and prototyping." }
        ],
        certs: [
          { name: "Google UX Design Certificate", provider: "Google", difficulty: "Beginner", desc: "Foundation in usability research and Figma wireframes." }
        ],
        courses: [
          { name: "UX/UI Specialization", provider: "CalArts", duration: "3 Months", desc: "Project-centric curriculum covering graphic design for digital screens." }
        ],
        projects: [
          { title: "E-Commerce Mobile UX Redesign", desc: "Redesign an existing mobile shopping checkout flow to improve conversions." }
        ]
      },
      graphic_design: {
        title: "Graphic & Brand Design",
        overview: "Brand visual identity, typography, vector illustration, marketing collateral, and packaging design.",
        avgSalary: "$55,000 - $95,000 / year",
        timeToMaster: "4 to 6 Months",
        phases: [
          { name: "Phase 1: Visual Design Theory", desc: "Color Theory, Typography, Composition, Illustrator." },
          { name: "Phase 2: Brand Identity", desc: "Logo Design, Brand Style Guides, Photoshop, InDesign." }
        ],
        roles: [
          { name: "Brand Designer", desc: "Develops cohesive visual identity systems, logos, and brand guidelines." }
        ],
        companies: [
          { name: "Pentagram", desc: "World's largest independently-owned design studio." }
        ],
        skills: [
          { name: "Adobe Illustrator", desc: "Industry standard vector graphics software for logos and illustration." }
        ],
        certs: [
          { name: "Adobe Certified Professional (Illustrator/Photoshop)", provider: "Adobe", difficulty: "Intermediate", desc: "Official credential in Adobe design software." }
        ],
        courses: [
          { name: "Graphic Design Specialization", provider: "CalArts", duration: "4 Months", desc: "Typography, branding, and image making principles." }
        ],
        projects: [
          { title: "Complete Brand Identity System", desc: "Design a logo, color palette, typography kit, and brand guideline document." }
        ]
      },
      animation: {
        title: "3D Animation & Game Art",
        overview: "3D asset modeling, character rigging, environmental lighting, game engine development, and visual effects (VFX).",
        avgSalary: "$70,000 - $120,000 / year",
        timeToMaster: "6 to 12 Months",
        phases: [
          { name: "Phase 1: 3D Modeling", desc: "Blender/Maya, Sculpting, Texturing, UV Unwrapping." },
          { name: "Phase 2: Engines & Rigging", desc: "Unreal Engine 5, Unity, Character Rigging." }
        ],
        roles: [
          { name: "3D Generalist", desc: "Creates digital 3D models, textures, environments, and animated renders." }
        ],
        companies: [
          { name: "Epic Games", desc: "Creators of Unreal Engine and developer of world-class interactive games." }
        ],
        skills: [
          { name: "Blender", desc: "Free, open-source 3D creation suite supporting modeling, rigging, and rendering." }
        ],
        certs: [
          { name: "Unreal Engine Certified Associate", provider: "Epic Games", difficulty: "Intermediate", desc: "Validates 3D workflows in Unreal Engine." }
        ],
        courses: [
          { name: "Complete 3D Artist Bootcamp", provider: "Udemy", duration: "3 Months", desc: "Master hard-surface modeling, sculpting, and texturing." }
        ],
        projects: [
          { title: "Interactive 3D Game Environment", desc: "Construct a fully textured and lit virtual scene in Unreal Engine." }
        ]
      },
      film_production: {
        title: "Film Production & Video Editing",
        overview: "Cinematography, video post-production editing, color grading, sound design, and narrative storytelling.",
        avgSalary: "$60,000 - $110,000 / year",
        timeToMaster: "6 Months",
        phases: [
          { name: "Phase 1: Camera & Lighting", desc: "Cinematography, Lenses, Lighting Setup, Audio Capture." },
          { name: "Phase 2: Post-Production", desc: "Premiere Pro, DaVinci Resolve (Color Grading), After Effects." }
        ],
        roles: [
          { name: "Video Editor / Colorist", desc: "Assembles raw footage, performs color correction, and crafts final story cuts." }
        ],
        companies: [
          { name: "Netflix Studios", desc: "Global streaming entertainment studio producing original series and movies." }
        ],
        skills: [
          { name: "DaVinci Resolve", desc: "Professional video editing, color grading, and audio post-production software." }
        ],
        certs: [
          { name: "DaVinci Resolve Certified User", provider: "Blackmagic Design", difficulty: "Intermediate", desc: "Official certification in video color grading and editing." }
        ],
        courses: [
          { name: "Filmmaking Masterclass", provider: "MasterClass", duration: "2 Months", desc: "Learn directing, editing, and storytelling from industry masters." }
        ],
        projects: [
          { title: "Short Film Editing & Color Grade", desc: "Edit and color grade a 3-minute cinematic short film with sound design." }
        ]
      }
    }
  },

  // ==========================================
  // 5. HUMANITIES, SOCIAL SCIENCES & ARTS
  // ==========================================
  humanities: {
    title: "Humanities & Social Sciences",
    icon: "",
    shortDesc: "Psychology, Sociology, Journalism, History, Political Science & Linguistics.",
    subDomains: {
      psychology: {
        title: "Clinical & Industrial Psychology",
        overview: "Human behavior analysis, cognitive processes, mental health therapeutics, and workplace organizational psychology.",
        avgSalary: "$65,000 - $120,000 / year",
        timeToMaster: "3 to 5 Years",
        phases: [
          { name: "Phase 1: Core Psychology", desc: "Cognitive Psychology, Neuroanatomy, Behavioral Statistics." },
          { name: "Phase 2: Clinical Application", desc: "Psychopathology, Cognitive Behavioral Therapy (CBT)." }
        ],
        roles: [
          { name: "Clinical Psychologist", desc: "Diagnoses and treats psychological and emotional mental health conditions." }
        ],
        companies: [
          { name: "BetterHelp", desc: "Leading digital mental health platform providing direct online therapy." }
        ],
        skills: [
          { name: "Psychotherapy (CBT)", desc: "Evidence-based therapeutic technique for cognitive and emotional health." }
        ],
        certs: [
          { name: "Licensed Professional Counselor (LPC)", provider: "State Boards", difficulty: "Advanced", desc: "Official license required for clinical therapy." }
        ],
        courses: [
          { name: "Introduction to Psychology", provider: "Yale University", duration: "2 Months", desc: "Overview of cognitive neuroscience and social behavior." }
        ],
        projects: [
          { title: "Behavioral Intervention Study", desc: "Design a research survey measuring workplace stress metrics." }
        ]
      },
      sociology: {
        title: "Sociology & Social Research",
        overview: "Social institutions, cultural dynamics, demographic data research, and community policy development.",
        avgSalary: "$55,000 - $95,000 / year",
        timeToMaster: "3 to 4 Years",
        phases: [
          { name: "Phase 1: Sociological Theory", desc: "Classical Social Theory, Qualitative Research, Survey Methodology." },
          { name: "Phase 2: Applied Analytics", desc: "Demographic Data Analysis, SPSS, Social Policy Evaluation." }
        ],
        roles: [
          { name: "Social Research Analyst", desc: "Gathers and analyzes qualitative/quantitative data on community trends." }
        ],
        companies: [
          { name: "Pew Research Center", desc: "Non-partisan think tank informing the public about issues and demographic trends." }
        ],
        skills: [
          { name: "Qualitative Data Analysis", desc: "Coding and interpreting interview and observational research data." }
        ],
        certs: [
          { name: "Social Research Methodology Certificate", provider: "SRA", difficulty: "Intermediate", desc: "Validates social science research techniques." }
        ],
        courses: [
          { name: "Classical Sociological Theory", provider: "University of Amsterdam", duration: "2 Months", desc: "Core theories shaping modern social understanding." }
        ],
        projects: [
          { title: "Urban Community Demographic Survey", desc: "Conduct statistical analysis on urban population shift datasets." }
        ]
      },
      journalism: {
        title: "Digital Journalism & Media",
        overview: "Investigative reporting, podcast production, digital media publishing, and media ethics.",
        avgSalary: "$50,000 - $95,000 / year",
        timeToMaster: "6 Months",
        phases: [
          { name: "Phase 1: News Writing", desc: "Editorial Guidelines, Copywriting, Sourcing, Ethics." },
          { name: "Phase 2: Digital Media", desc: "Data Journalism, Podcasting, CMS Publishing." }
        ],
        roles: [
          { name: "Digital Journalist", desc: "Investigates, writes, and publishes news stories across digital platforms." }
        ],
        companies: [
          { name: "The New York Times", desc: "Global newspaper publisher setting standards in digital media." }
        ],
        skills: [
          { name: "Investigative Interviewing", desc: "Extracting critical facts and corroborating evidence from sources." }
        ],
        certs: [
          { name: "Digital Journalism Certificate", provider: "Reuters", difficulty: "Beginner", desc: "Foundational certification covering ethical digital reporting." }
        ],
        courses: [
          { name: "Journalism in the Digital Age", provider: "Knight Center", duration: "2 Months", desc: "Multimedia reporting techniques and data visualization." }
        ],
        projects: [
          { title: "Data-Driven Investigative Article", desc: "Publish an interactive news story using open government datasets." }
        ]
      },
      political_science: {
        title: "Political Science & International Relations",
        overview: "Geopolitics, governance structures, diplomatic relations, public opinion, and legislative policy.",
        avgSalary: "$60,000 - $110,000 / year",
        timeToMaster: "3 to 4 Years",
        phases: [
          { name: "Phase 1: Comparative Politics", desc: "Political Theory, International Relations, Foreign Policy." },
          { name: "Phase 2: Policy & Diplomacy", desc: "Legislative Analysis, Diplomatic Protocols, Global Security." }
        ],
        roles: [
          { name: "Foreign Policy Analyst", desc: "Evaluates international political events and advises on geopolitical risk." }
        ],
        companies: [
          { name: "Eurasia Group", desc: "Leading political risk consultancy firm advising global investors." }
        ],
        skills: [
          { name: "Geopolitical Risk Assessment", desc: "Evaluating how political changes impact international trade and stability." }
        ],
        certs: [
          { name: "International Security Certificate", provider: "Chatham House", difficulty: "Intermediate", desc: "Credential in global security analysis." }
        ],
        courses: [
          { name: "Global Diplomacy", provider: "University of London", duration: "2 Months", desc: "Principles of international diplomacy and treaty negotiations." }
        ],
        projects: [
          { title: "Bilateral Trade Policy Brief", desc: "Draft an analytical policy brief evaluating international trade relations." }
        ]
      }
    }
  },

  // ==========================================
  // 6. LAW & PUBLIC POLICY
  // ==========================================
  law: {
    title: "Law & Public Policy",
    icon: "",
    shortDesc: "Corporate Law, Cyber Law, Intellectual Property, International Relations & Governance.",
    subDomains: {
      corporate_law: {
        title: "Corporate & Tech Law",
        overview: "Navigating corporate contracts, business mergers, technology regulations, GDPR privacy compliance, and patents.",
        avgSalary: "$85,000 - $180,000 / year",
        timeToMaster: "3 to 5 Years",
        phases: [
          { name: "Phase 1: Legal Foundations", desc: "Constitutional Law, Contract Law, Torts." },
          { name: "Phase 2: Business & Tech", desc: "Company Law, Corporate Mergers, Tech Privacy Regulations." }
        ],
        roles: [
          { name: "Corporate Counsel", desc: "Advises businesses on contract liabilities and regulatory compliance." }
        ],
        companies: [
          { name: "Baker McKenzie", desc: "Global law firm specializing in corporate cross-border transactions." }
        ],
        skills: [
          { name: "Contract Drafting", desc: "Authoring legally binding agreements with protective clauses." }
        ],
        certs: [
          { name: "Certified Information Privacy Professional (CIPP)", provider: "IAPP", difficulty: "Intermediate", desc: "Global privacy credential for data protection compliance." }
        ],
        courses: [
          { name: "Internet Giants: Tech Law", provider: "University of Chicago", duration: "2 Months", desc: "Legal framework covering tech platforms and copyright." }
        ],
        projects: [
          { title: "SaaS Enterprise Terms & Privacy Audit", desc: "Draft a comprehensive Terms of Service and Privacy Agreement for a software startup." }
        ]
      },
      cyber_law: {
        title: "Cyber Law & Intellectual Property",
        overview: "Digital privacy laws, software copyright, patent litigation, trademark strategy, and cybercrime legislation.",
        avgSalary: "$80,000 - $160,000 / year",
        timeToMaster: "3 to 5 Years",
        phases: [
          { name: "Phase 1: Intellectual Property", desc: "Patents, Trademarks, Copyrights, Trade Secrets." },
          { name: "Phase 2: Digital Rights", desc: "Cybercrime Act, Digital Rights Management (DRM), Data Governance." }
        ],
        roles: [
          { name: "IP & Cyber Attorney", desc: "Protects proprietary software patents, trademarks, and defends against cyber litigation." }
        ],
        companies: [
          { name: "Finnegan, Henderson, Farabow", desc: "Leading global intellectual property law firm." }
        ],
        skills: [
          { name: "Patent Prosecution", desc: "Filing and navigating patent applications through government patent offices." }
        ],
        certs: [
          { name: "Patent Attorney Bar License", provider: "USPTO", difficulty: "Advanced", desc: "Official license required to represent clients before patent offices." }
        ],
        courses: [
          { name: "Intellectual Property Law", provider: "Penn Law", duration: "2 Months", desc: "Foundations in patents, copyright, and trademarks." }
        ],
        projects: [
          { title: "Software Patent Prior Art Search", desc: "Perform a comprehensive prior-art legal search for a novel software algorithm." }
        ]
      }
    }
  },

  // ==========================================
  // 7. PURE & APPLIED SCIENCES
  // ==========================================
  sciences: {
    title: "Pure & Applied Sciences",
    icon: "",
    shortDesc: "Physics, Chemistry, Quantum Computing, Climate Science, Mathematics & Astronomy.",
    subDomains: {
      physics: {
        title: "Theoretical & Applied Physics",
        overview: "Quantum mechanics, thermodynamics, particle physics, condensed matter, and mathematical physics modeling.",
        avgSalary: "$75,000 - $140,000 / year",
        timeToMaster: "4 Years",
        phases: [
          { name: "Phase 1: Classical Physics", desc: "Mechanics, Electromagnetism, Quantum Theory." },
          { name: "Phase 2: Advanced Topics", desc: "Statistical Mechanics, Particle Physics, Quantum Field Theory." }
        ],
        roles: [
          { name: "Research Physicist", desc: "Conducts experimental or theoretical research to advance physical science." }
        ],
        companies: [
          { name: "CERN", desc: "European Organization for Nuclear Research operating the largest particle physics lab." }
        ],
        skills: [
          { name: "Mathematical Physics Modeling", desc: "Using differential equations to simulate physical phenomena." }
        ],
        certs: [
          { name: "Certified Laboratory Safety Specialist", provider: "OSHA", difficulty: "Intermediate", desc: "Safety compliance for laboratory environments." }
        ],
        courses: [
          { name: "Exploring Quantum Physics", provider: "University of Maryland", duration: "3 Months", desc: "Quantum mechanical systems and wave functions." }
        ],
        projects: [
          { title: "Particle Path Simulation", desc: "Write a Python computational physics script simulating charged particle trajectories." }
        ]
      },
      quantum: {
        title: "Quantum Computing",
        overview: "Quantum mechanics, qubit gate development, quantum algorithm design (Qiskit), and solid-state physics.",
        avgSalary: "$100,000 - $170,000 / year",
        timeToMaster: "8 to 12 Months",
        phases: [
          { name: "Phase 1: Quantum Mechanics & Math", desc: "Linear Algebra, Complex Numbers, Qubits, Quantum Gates." },
          { name: "Phase 2: SDK & Algorithms", desc: "Qiskit, Cirq, Shor's Algorithm, Quantum Cryptography." }
        ],
        roles: [
          { name: "Quantum Software Engineer", desc: "Writes quantum circuit algorithms on cloud quantum processors." }
        ],
        companies: [
          { name: "IBM Quantum", desc: "World leader in superconducting quantum hardware and open Qiskit ecosystem." }
        ],
        skills: [
          { name: "Qiskit", desc: "Open-source SDK developed by IBM for working with quantum circuits." }
        ],
        certs: [
          { name: "IBM Certified Quantum Developer", provider: "IBM", difficulty: "Intermediate", desc: "Validates practical knowledge of quantum circuits." }
        ],
        courses: [
          { name: "Quantum Computing for Everyone", provider: "University of Chicago", duration: "2 Months", desc: "Introduction to qubits and quantum gates." }
        ],
        projects: [
          { title: "Quantum Key Distribution Protocol", desc: "Implement the BB84 quantum cryptography protocol using Qiskit." }
        ]
      },
      climate_science: {
        title: "Climate Science & Sustainability",
        overview: "Environmental modeling, carbon footprint tracking, climate policy, and renewable energy ecosystems.",
        avgSalary: "$70,000 - $125,000 / year",
        timeToMaster: "4 Years",
        phases: [
          { name: "Phase 1: Environmental Systems", desc: "Atmospheric Science, Oceanography, Biogeochemical Cycles." },
          { name: "Phase 2: Climate Modeling & GIS", desc: "GIS Mapping, Remote Sensing, Carbon Accounting." }
        ],
        roles: [
          { name: "Climate Data Analyst", desc: "Models environmental datasets to forecast climate impacts and carbon emissions." }
        ],
        companies: [
          { name: "World Resources Institute (WRI)", desc: "Global research non-profit turning big data into environmental policy." }
        ],
        skills: [
          { name: "GIS Spatial Analysis", desc: "Geographic Information Systems software used for environmental mapping." }
        ],
        certs: [
          { name: "LEED Green Associate", provider: "USGBC", difficulty: "Intermediate", desc: "Credential validating green building and sustainability practices." }
        ],
        courses: [
          { name: "Climate Change Science", provider: "MIT", duration: "2 Months", desc: "Physical principles governing global climate systems." }
        ],
        projects: [
          { title: "Regional Deforestation Remote Sensing Audit", desc: "Analyze satellite spatial data to map regional forest cover loss over time." }
        ]
      }
    }
  },

  // ==========================================
  // 8. EDUCATION & TEACHING
  // ==========================================
  education: {
    title: "Education & Teaching",
    icon: "",
    shortDesc: "K-12 Teaching, Special Education, Higher Education, EdTech & Curriculum Design.",
    subDomains: {
      k12_teaching: {
        title: "K-12 & Special Education",
        overview: "Classroom pedagogy, child psychology, inclusive special needs education, and lesson planning.",
        avgSalary: "$50,000 - $85,000 / year",
        timeToMaster: "3 to 4 Years (B.Ed / State License)",
        phases: [
          { name: "Phase 1: Educational Psychology", desc: "Child Development, Learning Theories, Classroom Management." },
          { name: "Phase 2: Pedagogy & Practicum", desc: "Subject Curriculum Design, Student Teaching Rotations." }
        ],
        roles: [
          { name: "Licensed Educator", desc: "Delivers subject curriculum, manages student progress, and designs classroom activities." }
        ],
        companies: [
          { name: "Teach For All", desc: "Global network of independent organizations cultivating educational leadership." }
        ],
        skills: [
          { name: "Classroom Management", desc: "Techniques maintaining positive and productive learning environments." }
        ],
        certs: [
          { name: "State Teaching License / Certification", provider: "Board of Education", difficulty: "Advanced", desc: "Mandatory official state teaching credential." }
        ],
        courses: [
          { name: "Foundations of Teaching for Learning", provider: "Commonwealth Trust", duration: "2 Months", desc: "Core practices for effective classroom instruction." }
        ],
        projects: [
          { title: "Inclusive Curriculum Lesson Unit", desc: "Design a 4-week science unit adapted for diverse learning abilities." }
        ]
      },
      edtech: {
        title: "EdTech & Instructional Design",
        overview: "Creating digital learning platforms, corporate training curricula, and interactive pedagogical systems.",
        avgSalary: "$65,000 - $115,000 / year",
        timeToMaster: "4 to 6 Months",
        phases: [
          { name: "Phase 1: Instructional Frameworks", desc: "ADDIE Model, Bloom's Taxonomy, Adult Learning." },
          { name: "Phase 2: E-Learning Development", desc: "Articulate Storyline, LMS Platforms (Canvas/Moodle)." }
        ],
        roles: [
          { name: "Instructional Designer", desc: "Designs effective digital courses and corporate learning programs." }
        ],
        companies: [
          { name: "Coursera", desc: "Leading online learning platform connecting global universities." }
        ],
        skills: [
          { name: "ADDIE Model", desc: "Instructional design process: Analysis, Design, Development, Implementation, Evaluation." }
        ],
        certs: [
          { name: "Certified Professional in Learning and Performance (CPLP)", provider: "ATD", difficulty: "Advanced", desc: "Corporate training credential." }
        ],
        courses: [
          { name: "Instructional Design Foundations", provider: "University of Illinois", duration: "2 Months", desc: "Building digital courses based on learning science." }
        ],
        projects: [
          { title: "Interactive E-Learning Course Module", desc: "Build an interactive training module using Articulate Storyline." }
        ]
      }
    }
  },

  // ==========================================
  // 9. VOCATIONAL, TRADES & AVIATION
  // ==========================================
  trades: {
    title: "Vocational, Trades & Aviation",
    icon: "",
    shortDesc: "Commercial Aviation, Culinary Arts, Automotive Tech, Electrical Trades & Logistics.",
    subDomains: {
      aviation: {
        title: "Commercial Aviation & Piloting",
        overview: "Flight operations, aerodynamics, navigation systems, commercial pilot certification, and air safety.",
        avgSalary: "$80,000 - $220,000 / year",
        timeToMaster: "18 to 24 Months",
        phases: [
          { name: "Phase 1: Ground School", desc: "Aerodynamics, Meteorology, Air Law, Navigation." },
          { name: "Phase 2: Flight Training", desc: "PPL (Private Pilot), Instrument Rating (IR), Commercial Pilot License (CPL)." }
        ],
        roles: [
          { name: "Commercial Airline Pilot", desc: "Operates commercial passenger aircraft safely on domestic/international routes." }
        ],
        companies: [
          { name: "Delta Air Lines", desc: "Major US global airline operating massive global fleets." }
        ],
        skills: [
          { name: "Instrument Flight Rules (IFR)", desc: "Flying aircraft solely by cockpit flight instrument reference." }
        ],
        certs: [
          { name: "Commercial Pilot License (CPL)", provider: "FAA / DGCA", difficulty: "Advanced", desc: "Mandatory official license required to fly for pay." }
        ],
        courses: [
          { name: "Commercial Ground School", provider: "King Schools", duration: "3 Months", desc: "Theory preparing pilots for official written exams." }
        ],
        projects: [
          { title: "Cross-Country Flight Plan Calculation", desc: "Draft a navigation log calculating fuel burn, wind correction, and alternate routes." }
        ]
      },
      culinary: {
        title: "Culinary Arts & Hospitality Management",
        overview: "Culinary techniques, kitchen management, food safety standards, menu engineering, and hospitality operations.",
        avgSalary: "$45,000 - $90,000 / year",
        timeToMaster: "1 to 2 Years",
        phases: [
          { name: "Phase 1: Culinary Fundamentals", desc: "Knife Skills, Classic Sauces, Food Safety (HACCP)." },
          { name: "Phase 2: Kitchen Management", desc: "Menu Costing, Inventory Control, Fine Dining Production." }
        ],
        roles: [
          { name: "Executive Chef", desc: "Oversees culinary operations, menu creation, and kitchen team execution." }
        ],
        companies: [
          { name: "Marriott International", desc: "Global hospitality brand operating luxury hotels and dining outlets." }
        ],
        skills: [
          { name: "HACCP Food Safety", desc: "Systematic preventative approach to food safety and contamination risk." }
        ],
        certs: [
          { name: "Certified Executive Chef (CEC)", provider: "American Culinary Federation", difficulty: "Advanced", desc: "Professional chef credential." }
        ],
        courses: [
          { name: "Food & Beverage Management", provider: "Cornell University", duration: "2 Months", desc: "Restaurant operations and financial control." }
        ],
        projects: [
          { title: "Restaurant Menu Costing & Profit Model", desc: "Design a seasonal 5-course menu with ingredient yield and profit margin calculations." }
        ]
      },
      automotive: {
        title: "Automotive Tech & Electric Vehicles (EV)",
        overview: "Automotive mechanics, engine diagnostics, Electric Vehicle battery packs, power electronics, and CAN bus systems.",
        avgSalary: "$55,000 - $95,000 / year",
        timeToMaster: "1 to 2 Years",
        phases: [
          { name: "Phase 1: Mechanical Systems", desc: "Internal Combustion Engines, Brakes, Suspension." },
          { name: "Phase 2: EV Powertrains", desc: "High-Voltage Battery Systems, Electric Motors, Inverters, Diagnostics." }
        ],
        roles: [
          { name: "EV Diagnostic Technician", desc: "Diagnoses and repairs electric vehicle high-voltage drive systems." }
        ],
        companies: [
          { name: "Rivian", desc: "Electric vehicle manufacturer building electric trucks and adventure vehicles." }
        ],
        skills: [
          { name: "High-Voltage EV Diagnostics", desc: "Safe troubleshooting of high-voltage battery powertrains." }
        ],
        certs: [
          { name: "ASE L3 Light Duty Hybrid/EV Specialist", provider: "ASE", difficulty: "Intermediate", desc: "Certification in electric vehicle repair safety." }
        ],
        courses: [
          { name: "Electric Industry Technology", provider: "Udemy", duration: "2 Months", desc: "Fundamentals of electric vehicles and battery management systems." }
        ],
        projects: [
          { title: "EV Battery Pack Thermal Simulation", desc: "Model battery heat dissipation during fast-charging cycles." }
        ]
      }
    }
  },

  // ==========================================
  // 10. DEFENSE, PUBLIC SERVICE & SPORTS
  // ==========================================
  defense: {
    title: "Defense, Public Service & Sports",
    icon: "",
    shortDesc: "Armed Forces, Civil Services (IAS/IPS), Intelligence, Public Administration & Sports Science.",
    subDomains: {
      civil_services: {
        title: "Civil Services & Governance",
        overview: "Public administration, policy implementation, district governance, regulatory enforcement, and public welfare.",
        avgSalary: "$60,000 - $130,000 / year",
        timeToMaster: "1 to 2 Years",
        phases: [
          { name: "Phase 1: General Studies", desc: "Constitutional History, Economics, Ethics, Current Affairs." },
          { name: "Phase 2: Governance Practice", desc: "Policy Analysis, District Management, Public Administration." }
        ],
        roles: [
          { name: "Civil Servant / Administrator", desc: "Manages government departments, district administration, and public policies." }
        ],
        companies: [
          { name: "Union Public Service Commission (UPSC)", desc: "Central agency conducting civil services recruitment in India." }
        ],
        skills: [
          { name: "Public Administration", desc: "Principles governing public sector policy and administrative management." }
        ],
        certs: [
          { name: "Civil Services Examination", provider: "Government Commissions", difficulty: "Advanced", desc: "Competitive examination to enter elite civil administrative services." }
        ],
        courses: [
          { name: "Public Policy Analysis", provider: "LSE", duration: "3 Months", desc: "Analytical frameworks for designing public programs." }
        ],
        projects: [
          { title: "District Healthcare Infrastructure Plan", desc: "Formulate an administrative plan delivering medical supplies across rural clinics." }
        ]
      },
      armed_forces: {
        title: "Armed Forces & Defense Leadership",
        overview: "Military tactics, defense strategy, operational logistics, leadership command, and tactical communication.",
        avgSalary: "$65,000 - $140,000 / year",
        timeToMaster: "1 to 4 Years (Military Academy)",
        phases: [
          { name: "Phase 1: Officer Academy", desc: "Tactical Leadership, Physical Endurance, Military History." },
          { name: "Phase 2: Branch Specialization", desc: "Infantry, Artillery, Aviation, Cyber Defense." }
        ],
        roles: [
          { name: "Commissioned Military Officer", desc: "Leads military units, plans tactical missions, and manages defense assets." }
        ],
        companies: [
          { name: "Department of Defense / Armed Forces", desc: "National military defense establishment." }
        ],
        skills: [
          { name: "Tactical Command", desc: "Making strategic high-stakes decisions under extreme operational pressure." }
        ],
        certs: [
          { name: "Commissioning Certificate", provider: "Military Academy", difficulty: "Advanced", desc: "Official military rank commission officer status." }
        ],
        courses: [
          { name: "Military Leadership & Strategy", provider: "West Point / Coursera", duration: "2 Months", desc: "Principles of decision making under pressure." }
        ],
        projects: [
          { title: "Tactical Logistics Operation Plan", desc: "Draft a supply line logistics plan for rapid disaster relief deployment." }
        ]
      },
      sports_science: {
        title: "Sports Science & Kinesiology",
        overview: "Biomechanics, athletic performance conditioning, sports nutrition, movement analysis, and physical rehabilitation.",
        avgSalary: "$55,000 - $105,000 / year",
        timeToMaster: "3 to 4 Years",
        phases: [
          { name: "Phase 1: Human Movement", desc: "Kinesiology, Exercise Physiology, Biomechanics." },
          { name: "Phase 2: Performance Training", desc: "Strength & Conditioning, Sports Nutrition, Injury Prevention." }
        ],
        roles: [
          { name: "High-Performance Strength Coach", desc: "Designs biomechanical athletic conditioning and recovery programs." }
        ],
        companies: [
          { name: "Nike Sports Research Lab (NSRL)", desc: "Pioneer in athletic performance research and movement science." }
        ],
        skills: [
          { name: "Biomechanical Motion Analysis", desc: "Evaluating human joint mechanics to optimize performance and prevent injury." }
        ],
        certs: [
          { name: "CSCS (Certified Strength & Conditioning Specialist)", provider: "NSCA", difficulty: "Advanced", desc: "Gold standard credential for professional sports athletic coaches." }
        ],
        courses: [
          { name: "Science of Exercise", provider: "University of Colorado", duration: "2 Months", desc: "Physiological response of human body systems to exercise." }
        ],
        projects: [
          { title: "Athletic Load & Recovery Optimization System", desc: "Design a data-driven monitoring plan tracking athlete fatigue and movement efficiency." }
        ]
      }
    }
  }
};