const translations = {
  en: {
    meta: {
      title: 'Shivankar Mehta | Software Engineer',
      description: 'Shivankar Mehta - Software Developer and System Engineer in Japan, building data platforms and AI-enabled enterprise systems.'
    },
    nav: {
      links: ['Home', 'About', 'Skills', 'Jobs/Internships', 'Projects', 'GitHub', 'Technical Writing', 'Positions', 'Contact'],
      contact: "Let's Talk",
      language: 'Switch to Japanese',
      themeLight: 'Switch to light theme',
      themeDark: 'Switch to dark theme'
    },
    header: {
      eyebrow: 'Software Developer & System Engineer | Japan',
      availability: 'Systems online - building production-ready solutions',
      workingAt: 'Currently working at',
      lead: 'I design and deliver enterprise software for operational teams, combining reliable data integration, decision-ready dashboards, and AI-assisted document workflows to improve access to critical business information.',
      focusAria: 'Core engineering focus',
      focus: [
        ['Enterprise Systems', 'Dashboards + APIs'],
        ['Document AI', 'OCR + Retrieval'],
        ['Data Pipelines', 'MySQL + ETL'],
        ['Secure Sync', 'SSH2 + MySQL'],
        ['System Design', 'Architecture + Scale'],
        ['Construction Tech', 'Field Operations']
      ],
      download: 'Download Resume',
      contact: "Let's Talk",
      actions: 'Primary actions',
      observatory: 'Systems Observatory',
      productionProfile: 'production profile',
      fullStack: 'Complete technology stack',
      statsAria: 'Selected impact',
      telemetry: 'TELEMETRY',
      explore: 'Explore systems and experience',
      stats: [
        'Multiple remote MySQL databases consolidated through one ETL pipeline',
        'Faster deployments through CI/CD improvements',
        'Client organizations supported by enterprise systems'
      ],
      terminalEvents: [
        'boot observatory --profile shivankar',
        'tunnel established :: remote-db[10] -> warehouse',
        'retrieval ready :: OCR + pgvector + LangChain',
        'deploy stable :: client-orgs[05] online'
      ],
      domains: {
        languages: 'Languages',
        frontend: 'Frontend',
        backend: 'Backend',
        data: 'Data',
        ai: 'AI and LLM',
        operations: 'DevOps and Systems'
      },
      footer: [['STATUS', 'stable'], ['REGION', 'Japan'], ['FOCUS', 'reliability']]
    },
    about: {
      status: 'MOUNTED',
      kicker: 'About Me',
      title: 'Turning complex operations into usable systems.',
      paragraphs: [
        'I am a software developer and system engineer working in Japan, with an engineering foundation from IIT (ISM) Dhanbad. My work spans web applications, distributed data pipelines, backend reliability, and applied AI.',
        'At Standard Force Corporation, I design construction management and document-intelligence systems that make information buried in documents and operational data accessible to field teams through dashboards, secure synchronization, and AI-assisted search.'
      ],
      credentials: [
        ['IIT (ISM) Dhanbad', 'B.Tech, Mechanical Engineering', '2020 - 2024 | GPA 7.62 / 10'],
        ['Based in Japan', 'Software engineering for enterprise operations', 'On-site | Standard Force Corporation']
      ],
      flowLabel: 'Distributed data transfer architecture',
      flowTitle: 'Distributed data transfer platform',
      flow: [['Remote Sources', 'Multiple databases'], ['Secure Tunnel', 'SSH2 transfer'], ['Data Warehouse', 'Centralized MySQL'], ['Operations UI', 'Next.js dashboard']]
    },
    skills: {
      status: 'LOADED',
      kicker: 'Technical Skills',
      title: 'Technologies I work with.',
      categories: [
        ['Languages', 'Programming foundation'],
        ['Frontend', 'Interfaces and analytics'],
        ['Backend', 'Services and APIs'],
        ['Databases and Cache', 'Storage and pipelines'],
        ['AI and LLM', 'Document intelligence'],
        ['DevOps and Cloud', 'Deployment and servers']
      ]
    },
    work: {
      status: 'RUNNING',
      kicker: 'Experience',
      title: 'Work experience and internships.',
      jobs: [
        {
          role: 'Software Developer and System Engineer',
          location: 'Japan | On-site',
          dates: 'Oct 2024 - Present',
          bullets: [
            'Architected a distributed ETL pipeline consolidating multiple remote MySQL databases into a centralized warehouse through SSH2 tunneling and cron-based batch synchronization.',
            'Built an AI Document Assistant for PDF, Office, image, Excel, and audio uploads using Gemini Vision, Tesseract OCR, pgvector, pg-boss, LangChain, and SSE streaming.',
            'Delivered a Construction Management System across 5 client organizations and a Next.js dashboard with Redis caching, QR logistics tracking, and reporting exports.',
            'Managed CI/CD with Docker and Git on AlmaLinux servers, reducing deployment time by 60%.'
          ]
        },
        {
          role: 'Full Stack Developer Intern',
          location: 'Omura, Nagasaki, Japan',
          dates: 'May 2023 - Sep 2024',
          bullets: [
            'Designed and deployed a ReactJS, NodeJS, and MySQL supply chain dashboard serving 3 internal teams.',
            'Integrated Nivo and Wijmo visualizations into an existing Laravel project over secure SSH tunneling, reducing manual reporting time by 50%.'
          ]
        },
        {
          role: 'Frontend Developer Intern',
          location: 'India | Remote',
          dates: 'Jun 2022 - Jan 2023',
          bullets: [
            'Engineered a responsive ReactJS Sales Management System for 200+ users.',
            'Developed tutor selection and matching modules for Fynii EduTech, supporting 500+ student and tutor pairings.'
          ]
        }
      ]
    },
    projects: {
      status: 'DEPLOYED',
      kicker: 'Projects',
      title: 'Selected project highlights.',
      view: 'View project',
      modules: [
        ['AI Document Assistant', 'Standard Force Corporation', 'Natural-language document querying across PDF, Office, image, Excel, and audio uploads with OCR, vector retrieval, background workers, and streamed AI responses.'],
        ['Distributed ETL Pipeline', 'Standard Force Corporation', 'Consolidates multiple remote MySQL databases into a centralized warehouse through SSH2 tunneling and cron-based batch synchronization.'],
        ['Construction Management System', 'Standard Force Corporation', 'Enterprise system delivering real-time budget alerts, financial tracking, and compliance monitoring across 5 client organizations.'],
        ['Dashboard and QR Logistics System', 'Standard Force Corporation', 'Next.js operational dashboard with virtualized tables, visual reporting, Redis caching, Excel exports, and QR-based real-time logistics tracking.'],
        ['Supply Chain Dashboard', 'LTU Corporation', 'Full-stack dashboard serving 3 internal teams with ReactJS, NodeJS, MySQL and reporting visualizations integrated into Laravel.'],
        ['Automated Online Classroom Platform', 'HACKFEST 2022 Top 5', 'Multi-user video platform with real-time chat, automated attendance, speech transcription, and ML-based attention detection for 50+ concurrent users.']
      ]
    },
    github: {
      status: 'SYNCED',
      kicker: 'GitHub Profile',
      title: 'Repository network and build activity.',
      intro: 'Public code experiments and engineering systems spanning web services, distributed data, real-time communication, and AI tooling.',
      dashboardAria: 'GitHub public profile dashboard',
      metrics: [['1,028', 'Contributions last year'], ['88', 'Public repos'], ['3', 'Followers'], ['3', 'Following']],
      languageTitle: 'Language Distribution',
      heatmapTitle: 'GitHub Contribution Heatmap',
      heatmapAlt: 'GitHub contribution heatmap for ShivankarMehta',
      heatmapCaption: 'Private/org-inclusive profile snapshot based on the 1,028 contributions shown on GitHub. Public embeds can show less because GitHub does not expose private contribution detail to third-party charts.',
      repositories: 'repositories',
      repoTitle: 'Recent Engineering Repositories',
      snapshot: 'Public GitHub snapshot verified 2026-05-28.'
    },
    writing: {
      status: 'PUBLISHED',
      kicker: 'Technical Writing',
      title: 'Articles and technical posts on engineering and reliability.',
      mediumProfile: 'Medium profile',
      linkedinProfile: 'LinkedIn profile',
      read: 'Open publication',
      readInside: 'Read inside',
      readingNow: 'Reading now',
      openOriginal: 'Open original',
      readerLabel: 'Inbuilt article viewer'
    },
    achievements: {
      status: 'VERIFIED',
      kicker: 'Achievements',
      title: 'Awards and recognition.',
      items: [
        ['Top 5', 'HACKFEST 2022', 'Automated Online Classroom with ML-based attention detection at IIT (ISM) Dhanbad.'],
        ['1500+', 'DSA Problems Solved', 'Competitive programming practice across platforms, including CodeChef and AtCoder.'],
        ['Runner-Up', 'Web-It-Up and Ideate', 'Recognized for the Binary Bombers project and the Off-Earth Mining concept.']
      ],
      leetcodeUsername: 'Shivankar_123',
      leetcodeTitle: 'LeetCode Profile',
      leetcodeDescription: 'Problem-solving practice focused on data structures, algorithms, and interview-ready implementation patterns.',
      leetcodeAria: 'LeetCode profile highlights',
      leetcodeStats: [['698', 'Total solved'], ['278', 'Easy'], ['379', 'Medium'], ['41', 'Hard'], ['88,836', 'Ranking'], ['0', 'Reputation']],
      leetcodeAction: 'View LeetCode'
    },
    identity: { status: 'READY', kicker: 'Identity', title: 'Business Card', alt: 'Business card for Shivankar Mehta' },
    contact: {
      status: 'LISTENING',
      kicker: 'Contact Me',
      title: "Let's get in touch.",
      projectAria: 'Web project and solution inquiries',
      projectStatus: 'OPEN FOR WEB PROJECTS',
      projectTitle: 'Need a web product or a reliable digital solution?',
      projectDescription: 'I can help turn your requirements into production-ready web applications, operational dashboards, data-connected platforms, and AI-enabled workflows.',
      projectServicesAria: 'Available web solution types',
      projectServices: ['Web Applications', 'Business Dashboards', 'API Integrations', 'AI Workflows', 'System Design'],
      projectAction: 'Start a project',
      items: ['Email', 'LinkedIn', 'GitHub', 'Medium'],
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      message: 'Message',
      messagePlaceholder: 'How can I help?',
      send: 'Send Message',
      sending: 'Sending...',
      sent: 'Message sent. Thank you for reaching out.',
      failure: 'Message could not be sent right now. Please use email instead.'
    },
    footer: {
      title: 'Software Developer and System Engineer | Japan',
      rights: 'All rights reserved.'
    }
  },
  ja: {
    meta: { title: 'Shivankar Mehta | Software Developer', description: 'Portfolio of Shivankar Mehta, building enterprise systems, data platforms, and AI document workflows in Japan.' },
    nav: { links: ['Home', 'About', 'Skills', 'Jobs/Internships', 'Projects', 'GitHub', 'Technical Writing', 'Positions', 'Contact'], contact: 'Let us talk', language: 'Switch to English', themeLight: 'Light theme', themeDark: 'Dark theme' },
    header: {
      eyebrow: 'Software Developer & System Engineer | Japan', availability: 'Systems online - building production-ready solutions', workingAt: 'Currently working at', lead: 'I design and deliver enterprise software for operational teams, combining reliable data integration, decision-ready dashboards, and AI-assisted document workflows to improve access to critical business information.', focusAria: 'Professional focus areas',
      focus: [['Enterprise Systems', 'Dashboards + APIs'], ['Document AI', 'OCR + Retrieval'], ['Data Pipelines', 'MySQL + ETL'], ['Secure Sync', 'SSH2 + MySQL'], ['System Design', 'Architecture + Scale'], ['Construction Tech', 'Field Operations']],
      download: 'Download Resume', contact: 'Let us talk', actions: 'Primary actions', observatory: 'Systems Observatory', productionProfile: 'Production Profile', fullStack: 'Tech stack matrix', statsAria: 'Key metrics', telemetry: 'Telemetry', explore: 'Explore systems and experience',
      stats: ['10 remote MySQL databases consolidated through one ETL pipeline', 'Faster deployments through CI/CD improvements', 'Client organizations supported by enterprise systems'], terminalEvents: ['boot observatory --profile shivankar', 'tunnel established :: remote-db[10] -> warehouse', 'retrieval ready :: OCR + pgvector + LangChain', 'deploy stable :: client-orgs[05] online'],
      domains: { languages: 'Languages', frontend: 'Frontend', backend: 'Backend', data: 'Data', ai: 'AI / LLM', operations: 'DevOps / Systems' }, footer: [['Status', 'Stable'], ['Base', 'Japan'], ['Focus', 'Reliability']]
    },
    about: { status: 'MOUNTED', kicker: 'About Me', title: 'Turning complex operations into usable systems.', paragraphs: ['I am a software developer and system engineer working in Japan, with an engineering foundation from IIT (ISM) Dhanbad. My work spans web applications, distributed data pipelines, backend reliability, and applied AI.', 'At Standard Force Corporation, I design construction management and document-intelligence systems that make operational information accessible to field teams through dashboards, secure synchronization, and AI-assisted search.'], credentials: [['IIT (ISM) Dhanbad', 'B.Tech Mechanical Engineering', '2020 - 2024 | GPA 7.62 / 10'], ['Working in Japan', 'Enterprise operations software', 'On-site | Standard Force Corporation']], flowLabel: 'Distributed data transfer architecture', flowTitle: 'Distributed data transfer platform', flow: [['Remote Sources', 'Multiple databases'], ['Secure Tunnel', 'SSH2 transfer'], ['Data Warehouse', 'Centralized MySQL'], ['Operations UI', 'Next.js dashboard']] },
    skills: { status: 'LOADED', kicker: 'Technical Skills', title: 'Technologies I work with.', categories: [['Languages', 'Programming foundation'], ['Frontend', 'Interfaces and analytics'], ['Backend', 'Services and APIs'], ['Databases and Cache', 'Storage and pipelines'], ['AI and LLM', 'Document intelligence'], ['DevOps and Cloud', 'Deployment and servers']] },
    work: { status: 'RUNNING', kicker: 'Experience', title: 'Jobs and internships.', jobs: [ { role: 'Software Developer / System Engineer', location: 'Japan | On-site', dates: 'Oct 2024 - Present', bullets: ['Architected a distributed ETL pipeline consolidating multiple remote MySQL databases into a centralized warehouse through SSH2 tunneling and cron-based synchronization.', 'Built an AI Document Assistant for PDF, Office, image, Excel, and audio uploads using Gemini Vision, Tesseract OCR, pgvector, pg-boss, LangChain, and SSE streaming.', 'Delivered a Construction Management System across 5 client organizations and a Next.js dashboard with Redis caching, QR logistics tracking, and reporting exports.', 'Managed CI/CD with Docker and Git on AlmaLinux servers, reducing deployment time by 60%.'] }, { role: 'Full Stack Developer Intern', location: 'Omura, Nagasaki, Japan', dates: 'May 2023 - Sep 2024', bullets: ['Designed and implemented a supply chain dashboard for 3 internal teams with ReactJS, NodeJS, and MySQL.', 'Integrated Nivo and Wijmo visualizations into an existing Laravel project, reducing manual reporting time by 50%.'] }, { role: 'Frontend Developer Intern', location: 'India | Remote', dates: 'Jun 2022 - Jan 2023', bullets: ['Developed a responsive ReactJS Sales Management System used by 200+ users.', 'Built tutor selection and matching modules for Fynii EduTech, supporting 500+ student-teacher pairings.'] } ] },
    projects: { status: 'DEPLOYED', kicker: 'Projects', title: 'Selected project highlights.', view: 'View project', modules: [['AI Document Assistant', 'Standard Force Corporation', 'Natural language document question-answering for PDF, Office, image, Excel, and audio uploads using OCR, vector search, background processing, and streamed AI responses.'], ['Distributed ETL Pipeline', 'Standard Force Corporation', 'SSH2 tunneling and cron synchronization pipeline consolidating multiple remote MySQL databases into a central warehouse.'], ['Construction Management System', 'Standard Force Corporation', 'Operational platform for 5 client organizations with real-time budget alerts, financial tracking, and compliance monitoring.'], ['Dashboard and QR Logistics System', 'Standard Force Corporation', 'Next.js operational dashboard with Redis caching, visual reporting, Excel exports, and QR-based logistics tracking.'], ['Supply Chain Dashboard', 'LTU Corporation', 'Full-stack dashboard for 3 internal teams with ReactJS, NodeJS, MySQL, and Laravel reporting integrations.'], ['Automated Online Classroom Platform', 'HACKFEST 2022 Top 5', 'Video classroom platform with chat, attendance automation, transcription, and ML-based attention detection for 50+ participants.']] },
    github: { status: 'SYNCED', kicker: 'GitHub Profile', title: 'Repository network and build activity.', intro: 'Public code experiments and engineering systems spanning web services, distributed data, real-time communication, and AI tooling.', dashboardAria: 'GitHub public profile dashboard', metrics: [['1,028', 'Contributions last year'], ['88', 'Public repos'], ['3', 'Followers'], ['3', 'Following']], languageTitle: 'Language Distribution', heatmapTitle: 'GitHub Contribution Heatmap', heatmapAlt: 'GitHub contribution heatmap for ShivankarMehta, including private and organization profile activity snapshot', heatmapCaption: 'Private/org-inclusive profile snapshot based on the 1,028 contributions shown on GitHub. Public embeds can show less because GitHub does not expose private contribution detail to third-party charts.', repositories: 'repositories', repoTitle: 'Recent Engineering Repositories', snapshot: 'Public GitHub snapshot verified 2026-05-28.' },
    writing: { status: 'PUBLISHED', kicker: 'Technical Writing', title: 'Articles and technical posts on engineering and reliability.', mediumProfile: 'Medium profile', linkedinProfile: 'LinkedIn profile', read: 'Open publication', readInside: 'Read inside', readingNow: 'Reading now', openOriginal: 'Open original', readerLabel: 'Inbuilt article viewer' },
    achievements: { status: 'VERIFIED', kicker: 'Positions', title: 'Recognition and achievements.', items: [['Top 5', 'HACKFEST 2022', 'Built an automated online classroom platform with ML-based attention detection at IIT (ISM) Dhanbad.'], ['1500+', 'DSA problems solved', 'Practiced competitive programming across platforms including CodeChef and AtCoder.'], ['Runner-up', 'Web-It-Up / Ideate', 'Recognized for Binary Bombers and Off-Earth Mining concepts.']], leetcodeUsername: 'Shivankar_123', leetcodeTitle: 'LeetCode Profile', leetcodeDescription: 'Problem-solving practice focused on data structures, algorithms, and interview-ready implementation patterns.', leetcodeAria: 'LeetCode profile highlights', leetcodeStats: [['698', 'Total solved'], ['278', 'Easy'], ['379', 'Medium'], ['41', 'Hard'], ['88,836', 'Ranking'], ['0', 'Reputation']], leetcodeAction: 'View LeetCode' },
    identity: { status: 'READY', kicker: 'Profile', title: 'Business Card', alt: 'Business card for Shivankar Mehta' },
    contact: { status: 'WAITING', kicker: 'Contact', title: 'Get in touch.', projectAria: 'Web project and solution inquiry', projectStatus: 'WEB PROJECTS OPEN', projectTitle: 'Looking for web products or reliable digital solutions?', projectDescription: 'I can help turn requirements into production-ready web applications, business dashboards, data integrations, and AI-powered workflows.', projectServicesAria: 'Available web solution types', projectServices: ['Web applications', 'Business dashboards', 'API integrations', 'AI workflows', 'System design'], projectAction: 'Discuss a project', items: ['Email', 'LinkedIn', 'GitHub', 'Medium'], name: 'Your Name', namePlaceholder: 'Your full name', email: 'Email Address', message: 'Message', messagePlaceholder: 'How can I help?', send: 'Send Message', sending: 'Sending...', sent: 'Message sent. Thank you for reaching out.', failure: 'Message could not be sent right now. Please use email instead.' },
    footer: { title: 'Software Developer and System Engineer | Japan', rights: 'All rights reserved.' }
  }
}
export default translations
