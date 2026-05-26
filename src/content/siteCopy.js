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
        ['Networked Data', 'ETL + Reliability'],
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
        'More than 10 remote databases consolidated through one ETL pipeline',
        'Faster deployments through CI/CD improvements',
        'Client organizations supported by enterprise systems'
      ],
      terminalEvents: [
        'boot observatory --profile shivankar',
        'tunnel established :: remote-db[10+] -> warehouse',
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
        'I am a software developer and system engineer working in Japan, with an engineering foundation from IIT (ISM) Dhanbad. My work sits at the intersection of web applications, operating environments, networked data flows, backend reliability, and applied AI.',
        'At Standard Force Corporation, I design construction management and document-intelligence systems that make information buried in documents and operational data accessible to field teams through dashboards, secure synchronization, and AI-assisted search.'
      ],
      credentials: [
        ['IIT (ISM) Dhanbad', 'B.Tech, Mechanical Engineering', '2020 - 2024 | GPA 7.62 / 10'],
        ['Based in Japan', 'Software engineering for enterprise operations', 'On-site | Standard Force Corporation']
      ],
      flowLabel: 'Distributed data transfer architecture',
      flowTitle: 'Distributed data transfer platform',
      flow: [['Remote Sources', '10+ MySQL databases'], ['Secure Tunnel', 'SSH2 transfer'], ['Data Warehouse', 'Centralized MySQL'], ['Operations UI', 'Next.js dashboard']]
    },
    skills: {
      status: 'LOADED',
      kicker: 'Technical Skills',
      title: 'Technologies I work with.',
      categories: [
        ['Product Engineering', 'Interfaces and analytics'],
        ['Systems and Networks', 'Services and transport'],
        ['AI and Operations', 'Intelligence and delivery']
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
            'Architected a distributed ETL pipeline consolidating more than 10 remote MySQL databases using SSH2 tunneling and scheduled synchronization.',
            'Built an AI Document Intelligence Assistant that makes document knowledge accessible through RAG, OCR, pgvector search, and streamed responses.',
            'Delivered construction management and Next.js dashboard systems across five client organizations, while CI/CD improvements reduced deployment time by 60%.'
          ]
        },
        {
          role: 'Full Stack Developer Intern',
          location: 'Omura, Nagasaki, Japan',
          dates: 'May 2023 - Sep 2024',
          bullets: [
            'Designed and deployed a React, Node.js, and MySQL supply chain dashboard used by three internal teams.',
            'Integrated reporting visualizations into a Laravel system, reducing manual reporting time by 50%.'
          ]
        },
        {
          role: 'Frontend Developer Intern',
          location: 'India | Remote',
          dates: 'Jun 2022 - Jan 2023',
          bullets: [
            'Developed a responsive React sales management system used by more than 200 users.',
            'Built tutor selection and matching modules supporting more than 500 student and tutor pairings.'
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
        ['AI Document Intelligence Assistant', 'Enterprise product', 'Turns knowledge stored across PDF, Office, image, spreadsheet, and audio files into actionable answers for operational teams through OCR, vector retrieval, and streamed AI responses.'],
        ['Distributed Data Transfer Platform', 'Infrastructure', 'Secure, scheduled consolidation of remote operational databases into a centralized warehouse with validation and transactional safeguards.'],
        ['Automated Online Classroom', 'Hackfest top 5', 'Multi-user video classroom with chat, attendance automation, transcription, and attention detection for 50+ concurrent users.']
      ]
    },
    github: {
      status: 'SYNCED',
      kicker: 'GitHub Profile',
      title: 'Repository network and build activity.',
      intro: 'Public code experiments and engineering systems spanning web services, distributed data, real-time communication, and AI tooling.',
      dashboardAria: 'GitHub public profile dashboard',
      metrics: [['88', 'Public repos'], ['3', 'Followers'], ['3', 'Following']],
      languageTitle: 'Language Distribution',
      repositories: 'repositories',
      repoTitle: 'Recent Engineering Repositories',
      snapshot: 'Public GitHub snapshot verified 2026-05-26.'
    },
    writing: {
      status: 'PUBLISHED',
      kicker: 'Technical Writing',
      title: 'Articles and technical posts on engineering and reliability.',
      mediumProfile: 'Medium profile',
      linkedinProfile: 'LinkedIn profile',
      read: 'Open publication'
    },
    achievements: {
      status: 'VERIFIED',
      kicker: 'Achievements',
      title: 'Awards and recognition.',
      items: [
        ['Top 5', 'HACKFEST 2022', 'Automated Online Classroom with ML-based attention detection at IIT (ISM) Dhanbad.'],
        ['1500+', 'DSA Problems Solved', 'Competitive programming practice across platforms, including CodeChef and AtCoder.'],
        ['Runner-Up', 'Web-It-Up and Ideate', 'Recognized for the Binary Bombers project and the Off-Earth Mining concept.']
      ]
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
    meta: {
      title: 'Shivankar Mehta | ソフトウェアエンジニア',
      description: '日本でデータ基盤とAI活用型エンタープライズシステムを構築する、Shivankar Mehtaのポートフォリオ。'
    },
    nav: {
      links: ['ホーム', '自己紹介', 'スキル', '職歴', 'プロジェクト', 'GitHub', '技術記事', '実績', 'お問い合わせ'],
      contact: '相談する',
      language: '英語に切り替え',
      themeLight: 'ライトテーマに切り替え',
      themeDark: 'ダークテーマに切り替え'
    },
    header: {
      eyebrow: 'ソフトウェア開発者 & システムエンジニア | 日本',
      availability: 'システム稼働中 - 本番品質のソリューションを構築中',
      workingAt: '現在の勤務先',
      lead: '運用チーム向けのエンタープライズソフトウェアを設計・提供し、信頼性の高いデータ統合、意思決定に役立つダッシュボード、AI支援型の文書ワークフローを通じて、重要な業務情報へのアクセスを改善します。',
      focusAria: '専門領域',
      focus: [
        ['業務システム', 'ダッシュボード + API'],
        ['文書AI', 'OCR + 検索'],
        ['ネットワークデータ', 'ETL + 信頼性'],
        ['セキュア同期', 'SSH2 + MySQL'],
        ['システム設計', '設計 + 拡張性'],
        ['建設テック', '現場オペレーション']
      ],
      download: '履歴書をダウンロード',
      contact: '相談する',
      actions: '主な操作',
      observatory: 'システム観測パネル',
      productionProfile: '本番プロファイル',
      fullStack: '技術スタック一覧',
      statsAria: '主な実績',
      telemetry: 'テレメトリ',
      explore: 'システムと経験を見る',
      stats: [
        '10以上のリモートデータベースを1つのETLパイプラインへ統合',
        'CI/CD改善によりデプロイ時間を短縮',
        'エンタープライズシステムを導入した顧客組織数'
      ],
      terminalEvents: [
        'boot observatory --profile shivankar',
        'tunnel established :: remote-db[10+] -> warehouse',
        'retrieval ready :: OCR + pgvector + LangChain',
        'deploy stable :: client-orgs[05] online'
      ],
      domains: {
        languages: '言語',
        frontend: 'フロントエンド',
        backend: 'バックエンド',
        data: 'データ',
        ai: 'AI / LLM',
        operations: 'DevOps / システム'
      },
      footer: [['状態', '安定'], ['拠点', '日本'], ['重視', '信頼性']]
    },
    about: {
      status: 'マウント済み',
      kicker: '自己紹介',
      title: '複雑な運用を、使いやすいシステムへ。',
      paragraphs: [
        'IIT (ISM) Dhanbadで工学を学び、現在は日本でソフトウェア開発者兼システムエンジニアとして働いています。Webアプリケーション、運用環境、ネットワーク化されたデータフロー、バックエンドの信頼性、応用AIを横断して取り組んでいます。',
        'Standard Force Corporationでは、文書や運用データに埋もれた情報を、ダッシュボード、安全な同期、AI支援検索を通じて現場チームが活用できる建設管理・文書インテリジェンスシステムを設計しています。'
      ],
      credentials: [
        ['IIT (ISM) Dhanbad', '機械工学 B.Tech', '2020 - 2024 | GPA 7.62 / 10'],
        ['日本を拠点に勤務', '企業運用向けソフトウェア開発', 'オンサイト | Standard Force Corporation']
      ],
      flowLabel: '分散データ転送アーキテクチャ',
      flowTitle: '分散データ転送プラットフォーム',
      flow: [['リモートデータ', '10+ MySQL databases'], ['安全なトンネル', 'SSH2 transfer'], ['データ倉庫', 'Centralized MySQL'], ['運用画面', 'Next.js dashboard']]
    },
    skills: {
      status: 'ロード済み',
      kicker: '技術スキル',
      title: '扱っている技術。',
      categories: [
        ['プロダクト開発', 'UIと分析'],
        ['システムとネットワーク', 'サービスと通信'],
        ['AIと運用', '知能化とデリバリー']
      ]
    },
    work: {
      status: '実行中',
      kicker: '経験',
      title: '職務経験とインターンシップ。',
      jobs: [
        {
          role: 'ソフトウェア開発者 / システムエンジニア',
          location: '日本 | オンサイト',
          dates: '2024年10月 - 現在',
          bullets: [
            'SSH2トンネリングと定期同期を使用し、10以上のリモートMySQLデータベースを統合する分散ETLパイプラインを設計しました。',
            'RAG、OCR、pgvector検索、ストリーミング応答を活用したAI Document Intelligence Assistantを開発しました。',
            '5つの顧客組織向けに建設管理・Next.jsダッシュボードシステムを提供し、CI/CD改善でデプロイ時間を60%短縮しました。'
          ]
        },
        {
          role: 'フルスタック開発インターン',
          location: '長崎県大村市 | 日本',
          dates: '2023年5月 - 2024年9月',
          bullets: [
            '3つの社内チームが利用するReact、Node.js、MySQLによるサプライチェーンダッシュボードを設計・導入しました。',
            'Laravelシステムへレポート可視化を統合し、手作業のレポート時間を50%削減しました。'
          ]
        },
        {
          role: 'フロントエンド開発インターン',
          location: 'インド | リモート',
          dates: '2022年6月 - 2023年1月',
          bullets: [
            '200人以上が利用するレスポンシブなReact営業管理システムを開発しました。',
            '500件以上の生徒と講師のマッチングを支える選択・割当モジュールを構築しました。'
          ]
        }
      ]
    },
    projects: {
      status: 'デプロイ済み',
      kicker: 'プロジェクト',
      title: '主なプロジェクト。',
      view: 'プロジェクトを見る',
      modules: [
        ['AI文書インテリジェンスアシスタント', '企業向けプロダクト', 'PDF、Office、画像、表計算、音声ファイルの情報を、OCR、ベクトル検索、ストリーミングAI応答で運用チームが活用できる回答へ変換します。'],
        ['分散データ転送プラットフォーム', 'インフラストラクチャ', 'リモートの運用データベースを検証とトランザクション保護付きで中央ウェアハウスに安全かつ定期的に統合します。'],
        ['自動オンライン教室', 'Hackfest トップ5', 'チャット、出席自動化、文字起こし、注意検出を備えた、50人以上に対応するマルチユーザービデオ教室です。']
      ]
    },
    github: {
      status: '同期済み',
      kicker: 'GitHub プロフィール',
      title: 'リポジトリネットワークと開発活動。',
      intro: 'Webサービス、分散データ、リアルタイム通信、AIツールにわたる公開コードとエンジニアリングシステム。',
      dashboardAria: 'GitHub公開プロフィールダッシュボード',
      metrics: [['88', '公開リポジトリ'], ['3', 'フォロワー'], ['3', 'フォロー中']],
      languageTitle: '言語分布',
      repositories: 'リポジトリ',
      repoTitle: '最近のエンジニアリングリポジトリ',
      snapshot: '公開GitHubスナップショット確認日: 2026-05-26'
    },
    writing: {
      status: '公開済み',
      kicker: '技術記事',
      title: 'エンジニアリングと信頼性に関する記事・技術投稿。',
      mediumProfile: 'Mediumプロフィール',
      linkedinProfile: 'LinkedInプロフィール',
      read: '投稿を開く'
    },
    achievements: {
      status: '確認済み',
      kicker: '実績',
      title: '受賞歴と評価。',
      items: [
        ['トップ5', 'HACKFEST 2022', 'IIT (ISM) Dhanbadにて、MLによる注意検出を備えた自動オンライン教室を開発。'],
        ['1500+', 'DSA問題を解決', 'CodeChefやAtCoderを含むプラットフォームで競技プログラミングに取り組みました。'],
        ['準優勝', 'Web-It-Up / Ideate', 'Binary BombersプロジェクトおよびOff-Earth Mining構想で評価されました。']
      ]
    },
    identity: { status: '準備完了', kicker: 'プロフィール', title: '名刺', alt: 'Shivankar Mehtaの名刺' },
    contact: {
      status: '待受中',
      kicker: 'お問い合わせ',
      title: 'お気軽にご連絡ください。',
      projectAria: 'Webプロジェクトおよびソリューションのご相談',
      projectStatus: 'WEBプロジェクト受付中',
      projectTitle: 'Webプロダクトや信頼性の高いデジタルソリューションをお探しですか？',
      projectDescription: '要件をもとに、本番運用に対応したWebアプリケーション、業務ダッシュボード、データ連携基盤、AI活用ワークフローの実現を支援します。',
      projectServicesAria: '対応可能なWebソリューション',
      projectServices: ['Webアプリケーション', '業務ダッシュボード', 'API連携', 'AIワークフロー', 'システム設計'],
      projectAction: 'プロジェクトを相談する',
      items: ['メール', 'LinkedIn', 'GitHub', 'Medium'],
      name: 'お名前',
      namePlaceholder: 'お名前',
      email: 'メールアドレス',
      message: 'メッセージ',
      messagePlaceholder: 'どのようにお手伝いできますか？',
      send: '送信する',
      sending: '送信中...',
      sent: 'メッセージを送信しました。ご連絡ありがとうございます。',
      failure: '現在メッセージを送信できません。メールをご利用ください。'
    },
    footer: {
      title: 'ソフトウェア開発者 / システムエンジニア | 日本',
      rights: 'All rights reserved.'
    }
  }
}

export default translations
