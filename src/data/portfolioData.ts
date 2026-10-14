/**
 * Central Portfolio Data File
 * 
 * You can edit all personal information, navigation, focus areas, competencies,
 * projects, interactive telemetry data, certifications, and links in this single file.
 * 
 * PLACEHOLDER LINKS: Clearly flagged with `isPlaceholder: true`
 */

export const RESUME_VIEW_URL = "";
export const RESUME_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1veS17CpJtn7bgjv5OcjNV9aP46IWIDIg";

export const LINKEDIN_URL = "https://www.linkedin.com/in/sohail-bagwan2704";
export const GITHUB_URL = "https://github.com/sohaill27";

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface FocusArea {
  id: string;
  title: string;
  iconName: 'Shield' | 'Network' | 'FileCheck';
  accentColor: 'primary' | 'secondary' | 'tertiary';
  description: string;
  tags: string[];
}

export interface EducationInfo {
  degree: string;
  specialization: string;
  institution: string;
  status: string;
  badge: string;
  kicker: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: 'Shield' | 'Network' | 'Wrench' | 'CheckCircle2' | 'Code2';
  accentColor: 'primary' | 'secondary' | 'tertiary';
  description: string;
  skills: { name: string; highlight?: boolean; highlightColor?: 'primary' | 'secondary' | 'tertiary' }[];
  colSpan?: number;
}

export interface ProjectTelemetry {
  type: 'phishing' | 'recon' | 'soc' | 'extension' | 'blockchain' | 'nft';
  headerText: string;
  modelOrSubnet: string;
  items?: { label: string; value: string; statusType: 'primary' | 'secondary' | 'normal' }[];
  accuracy?: string;
  variance?: string;
  verdict?: string;
  progressBars?: { label: string; percent: number; color: 'primary' | 'secondary' }[];
  nmapCommand?: string;
  nmapOutputLines?: string[];
  openPorts?: { port: string; service: string; status: string; statusColor: 'primary' | 'secondary' }[];
  hostOs?: string;
  vulnCount?: string;
  splunkIndex?: string;
  splunkPeak?: string;
  barHeights?: number[];
  logEntries?: { code: string; type: 'error' | 'secondary' | 'primary'; details: string; tag: string }[];
  incidentStatus?: string;
}

export interface ProjectModalContent {
  overview: string;
  architectureDetails: string[];
  methodology: string[];
  securityControls: string[];
  outcomes: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  period?: string;
  subTag: string;
  badge?: string;
  badgeColor?: 'primary' | 'secondary';
  description: string;
  tags: { name: string; highlight?: 'primary' | 'secondary' | 'accent' | 'default' }[];
  primaryButtonLabel?: string;
  primaryButtonAction?: 'modal' | 'external';
  modalContent: ProjectModalContent;
  githubUrl?: string;
  isGithubPlaceholder?: boolean;
  repoComingSoon?: boolean;
  telemetry: ProjectTelemetry;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status?: string;
  accentColor?: 'primary' | 'secondary' | 'tertiary';
  domainTag?: string;
  credentialId?: string;
  verificationUrl?: string;
  isPlaceholder?: boolean;
  skillsCovered?: string[];
  issueDate?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  isLinkedinPlaceholder: boolean;
  github: string;
  githubDisplay: string;
  isGithubPlaceholder: boolean;
  location: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    statusText: string;
    subBadge: string;
    headline: {
      line1: string;
      line2: string;
      line3: string;
    };
    bio: string;
    locationNotice: string;
    telemetryHero: {
      nodeName: string;
      latency: string;
      encryption: string;
      sysIntegrity: string;
      state: string;
      terminalPrompt: string;
      terminalSuccess: string;
      terminalBullet1: string;
      terminalBullet2: string;
      ethosBadge: string;
    };
    resumeViewUrl: string;
    resumeDownloadUrl: string;
  };
  navigation: NavLink[];
  about: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    intro: string;
    focusAreas: FocusArea[];
    education: EducationInfo;
  };
  skills: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    description: string;
    categories: SkillCategory[];
  };
  projects: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    description: string;
    items: ProjectItem[];
  };
  experience: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    description?: string;
    items: ExperienceItem[];
  };
  certifications: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    description: string;
    items: CertificationItem[];
  };
  resumeCallout: {
    tag: string;
    title: string;
    description: string;
    viewUrl: string;
    downloadUrl: string;
    linkedinUrl: string;
    isLinkedinPlaceholder: boolean;
  };
  contact: {
    sectionNum: string;
    eyebrow: string;
    title: string;
    description: string;
    info: ContactInfo;
    formChannelHeader: string;
    formPortIndicator: string;
  };
  footer: {
    branding: string;
    byline: string;
    copyright: string;
    ethos: string;
    region: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Sohail Bagwan",
    role: "Cybersecurity & IT Infrastructure",
    statusText: "Open to Opportunities",
    subBadge: "SOC DEFENSE // ONLINE",
    headline: {
      line1: "Securing Systems.",
      line2: "Solving Problems.",
      line3: "Building Trust."
    },
    bio: "I'm Sohail Bagwan, a Computer Engineering graduate passionate about cybersecurity, security operations, and IT infrastructure. I'm focused on building practical telemetry skills to help organizations identify threats, reduce systemic risks, and safeguard mission-critical digital assets.",
    locationNotice: "Based in India · Open to roles in Mumbai and Pune",
    telemetryHero: {
      nodeName: "NODE // OPS-TELEMETRY",
      latency: "12ms",
      encryption: "ENCRYPTED",
      sysIntegrity: "SYS_INTEGRITY: 99.98%",
      state: "STEADY STATE",
      terminalPrompt: "> verify --protocol tls1.3 --interface eth0",
      terminalSuccess: "[OK]",
      terminalBullet1: "SHA-256 handshake valid · 4096-bit ephemeral exchange",
      terminalBullet2: "Telemetry daemon online · packet analysis stream synchronized",
      ethosBadge: "Learning. Building. Securing."
    },
    resumeViewUrl: RESUME_VIEW_URL,
    resumeDownloadUrl: RESUME_DOWNLOAD_URL
  },

  navigation: [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "certifications", label: "Certifications", href: "#certifications" },
    { id: "resume", label: "Resume", href: "#resume" },
    { id: "contact", label: "Contact", href: "#contact" }
  ],

  about: {
    sectionNum: "01",
    eyebrow: "Profile",
    title: "A Little About Me",
    intro: "I'm a Computer Engineering graduate with an academic background in IoT and Cybersecurity. I'm interested in understanding how digital systems work, identifying security weaknesses, and helping organizations improve their security posture.",
    focusAreas: [
      {
        id: "cybersecurity",
        title: "Cybersecurity",
        iconName: "Shield",
        accentColor: "primary",
        description: "Proactive defenses, attack mitigation, and continuous surveillance of modern enterprise perimeters.",
        tags: ["threat detection", "vulnerability assessment", "security monitoring"]
      },
      {
        id: "networking",
        title: "IT & Networking",
        iconName: "Network",
        accentColor: "secondary",
        description: "Core transport protocols, packet flow inspection, hardware orchestration, and fault diagnostic routines.",
        tags: ["network fundamentals", "troubleshooting", "infrastructure"]
      },
      {
        id: "compliance",
        title: "Risk & Compliance",
        iconName: "FileCheck",
        accentColor: "tertiary",
        description: "Aligning technical controls to industry standards, evaluating risk postures, and structuring defensive policies.",
        tags: ["risk assessment", "security policies", "compliance frameworks"]
      }
    ],
    education: {
      degree: "Bachelor of Engineering (B.E.), Computer Engineering",
      specialization: "Specialization: Internet of Things (IoT) & Cybersecurity",
      institution: "SIES Graduate School of Technology, Navi Mumbai (University of Mumbai)",
      status: "B.E. Graduate · CGPA 7.23",
      badge: "",
      kicker: "EDUCATION"
    }
  },

  skills: {
    sectionNum: "02",
    eyebrow: "Capabilities",
    title: "Technical Skills",
    description: "Foundational skills built through my engineering coursework, certifications, and hands-on practice labs.",
    categories: [
      {
        id: "cybersecurity-skills",
        title: "Cybersecurity",
        iconName: "Shield",
        accentColor: "primary",
        description: "Tactical defensive methods and vulnerability mitigation fundamentals.",
        skills: [
          { name: "Security Fundamentals" },
          { name: "Ethical Hacking Fundamentals" },
          { name: "Vulnerability Assessment", highlight: true, highlightColor: "primary" },
          { name: "OWASP Concepts" },
          { name: "Phishing Detection", highlight: true, highlightColor: "secondary" }
        ]
      },
      {
        id: "networking-skills",
        title: "Networking",
        iconName: "Network",
        accentColor: "secondary",
        description: "Network traffic analysis, core socket protocols, and transport diagnostics.",
        skills: [
          { name: "TCP/IP", highlight: true, highlightColor: "secondary" },
          { name: "DNS & HTTP/HTTPS" },
          { name: "Network Scanning" },
          { name: "Firewall Fundamentals" },
          { name: "Troubleshooting" }
        ]
      },
      {
        id: "tools-skills",
        title: "Tools",
        iconName: "Wrench",
        accentColor: "primary",
        description: "Industry standard platforms for reconnaissance, SOC SIEM analysis, and code auditing.",
        skills: [
          { name: "Kali Linux", highlight: true, highlightColor: "primary" },
          { name: "Nmap" },
          { name: "Splunk", highlight: true, highlightColor: "secondary" },
          { name: "Metasploit" },
          { name: "Git & GitHub" }
        ]
      },
      {
        id: "risk-governance",
        title: "Risk & Governance",
        iconName: "CheckCircle2",
        accentColor: "tertiary",
        description: "Enterprise governance, control frameworks, and baseline regulatory alignment.",
        skills: [
          { name: "Risk Assessment", highlight: true, highlightColor: "tertiary" },
          { name: "Security Policies" },
          { name: "GRC Fundamentals" },
          { name: "ISO 27001 Fundamentals" }
        ]
      },
      {
        id: "development-ai",
        title: "Development & AI",
        iconName: "Code2",
        accentColor: "secondary",
        description: "Automation scripting, web application interfaces, and applied machine learning heuristics.",
        colSpan: 2,
        skills: [
          { name: "Python", highlight: true, highlightColor: "primary" },
          { name: "HTML & CSS" },
          { name: "JavaScript" },
          { name: "Machine Learning Fundamentals", highlight: true, highlightColor: "secondary" }
        ]
      }
    ]
  },

  projects: {
    sectionNum: "03",
    eyebrow: "Engineering & Labs",
    title: "Projects That Put Security Into Practice",
    description: "Applied threat intelligence pipelines, offensive security lab topologies, and SOC log correlation engines.",
    items: [
      {
        id: "phishshield",
        title: "PhishShield – Browser Extension for Phishing Detection",
        period: "Jan 2026 – May 2026",
        subTag: "BROWSER-EXT // REAL-TIME-DEFENSE",
        badge: "Real-time Browser Security",
        badgeColor: "primary",
        description: "A browser extension that detects phishing websites and malicious links while users browse and shows instant security alerts.",
        tags: [
          { name: "JavaScript", highlight: "primary" },
          { name: "HTML", highlight: "default" },
          { name: "CSS", highlight: "default" },
          { name: "Machine Learning", highlight: "secondary" },
          { name: "Chrome Extension APIs", highlight: "primary" }
        ],
        primaryButtonLabel: "View Project Details",
        primaryButtonAction: "modal",
        modalContent: {
          overview: "PhishShield is an active browser security extension designed to inspect web content, hyperlinks, and form entry points in real-time, instantly warning and shielding users from malicious landing pages and credential-harvesting schemes.",
          architectureDetails: [
            "Manifest V3 Content Pipeline: Runs isolated, low-overhead background workers inspecting DOM anchor elements and form actions without degrading page load performance.",
            "Heuristic URL Inspection: Analyzes domain age, Levenshtein distance against high-profile services (banking, email, SSO), character entropy, and SSL authenticity.",
            "Proactive Blocking Overlay: Renders high-visibility security intercept screens before suspicious forms or scripts can execute.",
            "Local Model Heuristics: Evaluates suspicious page vectors locally to preserve end-user browsing privacy."
          ],
          methodology: [
            "Evaluated against live feeds from open-source threat intelligence registries (OpenPhish, PhishTank).",
            "Benchmarked latency across 5,000 top web domains to ensure evaluation completes in under 15 milliseconds.",
            "Conducted user testing on warning readability to ensure users make informed security decisions."
          ],
          securityControls: [
            "Zero telemetry leakage of sensitive URL query parameters or session IDs",
            "Automatic quarantine of unverified external redirects",
            "Granular permission architecture adhering strictly to Chrome Web Store security baselines"
          ],
          outcomes: [
            "Instantaneous detection and alerts for malicious and spoofed domains",
            "Sub-15ms evaluation latency with virtually zero browsing performance impact",
            "100% client-side privacy architecture"
          ]
        },
        githubUrl: "",
        isGithubPlaceholder: false,
        repoComingSoon: true,
        telemetry: {
          type: "extension",
          headerText: "REAL-TIME HEURISTICS ENGINE",
          modelOrSubnet: "CHROME EXTENSION // ACTIVE",
          items: [
            { label: "DOM Anchor & Form Inspection", value: "ACTIVE (0ms DELAY)", statusType: "primary" },
            { label: "Deceptive Domain & Homograph", value: "0 SPOOFS DETECTED", statusType: "secondary" },
            { label: "Threat Feed Database", value: "SYNCHRONIZED", statusType: "primary" }
          ],
          accuracy: "< 15ms",
          variance: "Real-time",
          verdict: "PROTECTED",
          progressBars: [
            { label: "Pattern Detection Confidence", percent: 98, color: "primary" },
            { label: "Heuristic Link Analysis", percent: 95, color: "secondary" }
          ]
        }
      },
      {
        id: "phishing-defense",
        title: "AI-Powered Multi-Channel Phishing Defense System",
        period: "Jun 2025 – Dec 2025",
        subTag: "PATENT-DEF // MULTI-CHANNEL-AI",
        badge: "Co-inventor, Indian Patent Application IN202641050067 A1 (published 12 June 2026)",
        badgeColor: "primary",
        description: "An AI system that analyzes emails, chat messages, and social media content to identify malicious communication and warn users.",
        tags: [
          { name: "Python", highlight: "secondary" },
          { name: "Machine Learning", highlight: "primary" },
          { name: "NLP", highlight: "primary" }
        ],
        primaryButtonLabel: "View Case Study",
        primaryButtonAction: "modal",
        modalContent: {
          overview: "Designed and co-invented a multi-layered defense architecture engineered to intercept deceptive communication payloads across email, chat platforms, and social channels before users are compromised.",
          architectureDetails: [
            "Multi-Channel Ingestion: Normalizes payload text, metadata, and embedded links across diverse communication channels into standardized feature vectors.",
            "Header Authentication: Real-time verification of SPF, DKIM, and DMARC alignment, alerting on spoofed return paths and registrar anomalies.",
            "NLP Intent Classifier: Utilizes natural language processing heuristics trained to detect high-urgency language, impersonation of authority figures, and coerced action requests.",
            "Cross-Channel Correlation: Correlates threat indicators across multiple vectors to flag coordinated social engineering campaigns."
          ],
          methodology: [
            "Dataset: Comprehensive corpus of sanitized spear-phishing payloads, social messages, and legitimate business communications.",
            "Feature Engineering: Synthesizes lexical features, structural anomalies, and semantic urgency markers.",
            "Validation: Cross-validated with Random Forest and NLP classifier pipelines."
          ],
          securityControls: [
            "Published Indian Patent Application IN202641050067 A1 (published 12 June 2026)",
            "Sandboxed link expansion safely resolving shortened and multi-hop redirect URLs",
            "High-specificity thresholds to minimize alert fatigue for end-users"
          ],
          outcomes: [
            "Co-inventor on Indian Patent Application IN202641050067 A1 (published 12 June 2026)",
            "98.4% detection accuracy across multi-channel attack simulations",
            "Average payload inspection latency under 85 milliseconds"
          ]
        },
        githubUrl: "",
        isGithubPlaceholder: false,
        repoComingSoon: true,
        telemetry: {
          type: "phishing",
          headerText: "INSPECTION PIPELINE: ACTIVE",
          modelOrSubnet: "PATENTED HEURISTIC ENGINE",
          items: [
            { label: "Header Integrity & SPF/DKIM", value: "AUTHENTIC", statusType: "primary" },
            { label: "Cross-Channel Threat Vector", value: "Email/Chat/Social", statusType: "secondary" },
            { label: "NLP Semantic Urgency Classifier", value: "Risk Index: 0.04", statusType: "primary" }
          ],
          accuracy: "98.4%",
          variance: "±0.2",
          verdict: "LEGITIMATE",
          progressBars: [
            { label: "Lexical & Social Heuristics", percent: 88, color: "secondary" },
            { label: "Entropy & URL Discrepancy", percent: 94, color: "primary" }
          ]
        }
      },
      {
        id: "fundhive",
        title: "FundHive – Blockchain-Based Crowdfunding Platform",
        period: "Jul 2024 – Dec 2024",
        subTag: "DECENTRALIZED-FIN // HEALTHCARE",
        badge: "Recognized at the TCS Project Competition",
        badgeColor: "secondary",
        description: "A decentralized crowdfunding platform for healthcare initiatives using smart contracts and NFT-based donor recognition.",
        tags: [
          { name: "Solidity", highlight: "primary" },
          { name: "Smart Contracts", highlight: "secondary" },
          { name: "Blockchain", highlight: "primary" },
          { name: "NFT", highlight: "secondary" }
        ],
        primaryButtonLabel: "View Project Details",
        primaryButtonAction: "modal",
        modalContent: {
          overview: "FundHive leverages decentralized smart contracts to deliver transparency and trust to healthcare crowdfunding, automatically releasing funds when verified milestones are met and minting NFT recognition badges for donors.",
          architectureDetails: [
            "Solidity Escrow Contracts: Autonomous smart contracts lock campaign pledges and execute milestone-based disbursements based on verified medical proofs.",
            "NFT Recognition Layer: Mints ERC-721 tokens certifying donor tiers, permanently memorializing their philanthropic impact on-chain.",
            "Dispute & Refund Logic: Implements automated timeout and refund mechanisms if critical funding targets are not fulfilled.",
            "Web3 Interface: Secure client-side connection for non-custodial wallets (e.g., MetaMask)."
          ],
          methodology: [
            "Contract unit testing and coverage reporting using Hardhat and Chai test suites.",
            "Static analysis with Slither to audit against reentrancy, integer anomalies, and unchecked call values.",
            "Gas optimization profiling reducing deployment and transaction costs."
          ],
          securityControls: [
            "ReentrancyGuard and Checks-Effects-Interactions patterns on all fund transfers",
            "Multi-signature milestone authorization for high-value medical relief disbursements",
            "Immutable audit trail guaranteeing 100% financial transparency"
          ],
          outcomes: [
            "Recognized at the prestigious TCS Project Competition",
            "Elimination of third-party platform cuts, maximizing funds routed to beneficiaries",
            "28% gas savings achieved through structured storage optimization"
          ]
        },
        githubUrl: "",
        isGithubPlaceholder: false,
        repoComingSoon: true,
        telemetry: {
          type: "blockchain",
          headerText: "SMART CONTRACT // EVM-NODE",
          modelOrSubnet: "ETHEREUM // DECENTRALIZED",
          items: [
            { label: "Escrow Contract State", value: "AUDITED & VERIFIED", statusType: "primary" },
            { label: "Multi-Sig Milestone Vault", value: "3-OF-5 CONSENSUS", statusType: "secondary" },
            { label: "NFT Donor Tokenization", value: "ERC-721 AUTO-MINT", statusType: "primary" }
          ],
          accuracy: "Zero Intermediaries",
          variance: "",
          verdict: "CONTRACT VERIFIED",
          progressBars: [
            { label: "Milestone Release Logic", percent: 100, color: "primary" },
            { label: "Gas Optimization Index", percent: 92, color: "secondary" }
          ]
        }
      },
      {
        id: "nft-ticketing",
        title: "NFT-Based Ticketing System",
        period: "Jan 2025 – Jun 2025",
        subTag: "BLOCKCHAIN // EVENT-TICKETING",
        badge: "Smart Contracts & Anti-Scalping",
        badgeColor: "secondary",
        description: "A blockchain event ticketing platform using NFTs as unique tickets, with smart contracts for issuance, ownership transfer, and validation.",
        tags: [
          { name: "Solidity", highlight: "primary" },
          { name: "Smart Contracts", highlight: "secondary" },
          { name: "Blockchain", highlight: "primary" },
          { name: "NFTs", highlight: "secondary" }
        ],
        primaryButtonLabel: "View Project Details",
        primaryButtonAction: "modal",
        modalContent: {
          overview: "A blockchain event ticketing platform using NFTs as unique digital tickets, with smart contracts governing issuance, secondary transfers, and tamper-proof gate validation to permanently eliminate scalping and fraud.",
          architectureDetails: [
            "ERC-721 Token Standard: Issues cryptographically distinct tickets containing encoded event metadata, zone privileges, and validation parameters.",
            "Programmatic Resale Rules: Smart contracts cap secondary market prices and route organizer royalties automatically on transfer.",
            "Dynamic Cryptographic Gate Pass: Generates rotating, time-sensitive QR signatures verified against the blockchain owner address at entry.",
            "Organizer Administrative Console: Live verification status, real-time venue capacity telemetry, and audit reporting."
          ],
          methodology: [
            "Conducted concurrency stress simulations under high-demand simulated ticket releases.",
            "Benchmarked turnstile verification times with offline cryptographic validation.",
            "Security audited transfer logic against front-running and flash loan exploits."
          ],
          securityControls: [
            "Non-fungible token uniqueness guarantees mathematical impossibility of duplicate tickets",
            "Strictly enforced on-chain price ceilings preventing scalping bots",
            "Cryptographic signature validation at entry gates without exposing user private keys"
          ],
          outcomes: [
            "Complete elimination of fraudulent and duplicate tickets",
            "Sub-40ms gate validation response time",
            "Transparent secondary transfer history with automatic royalty enforcement"
          ]
        },
        githubUrl: "",
        isGithubPlaceholder: false,
        repoComingSoon: true,
        telemetry: {
          type: "nft",
          headerText: "NFT VALIDATOR // GATE-NODE",
          modelOrSubnet: "ERC-721 CONSENSUS",
          items: [
            { label: "Secondary Sale Anti-Scalp", value: "PRICE CAP ENFORCED", statusType: "primary" },
            { label: "Cryptographic Ownership Proof", value: "ECDSA SIGNED", statusType: "secondary" },
            { label: "Gate QR Validation Latency", value: "< 40ms OFFLINE", statusType: "primary" }
          ],
          accuracy: "0 Duplicate Tickets",
          variance: "",
          verdict: "TICKET VALIDATED",
          progressBars: [
            { label: "Ownership Verification", percent: 100, color: "primary" },
            { label: "Anti-Counterfeit Protection", percent: 100, color: "secondary" }
          ]
        }
      }
    ]
  },

  experience: {
    sectionNum: "04",
    eyebrow: "Fieldwork",
    title: "Experience",
    items: [
      {
        id: "industriacademia",
        role: "Cybersecurity Intern",
        organization: "IndustriAcademia Community",
        period: "Jul 2025 – Jan 2026",
        bullets: [
          "Supported internship programs, technical workshops, and industry training sessions",
          "Assisted in organizing community outreach initiatives and academic events",
          "Supported the development of educational resources for workshops and cybersecurity awareness activities"
        ]
      },
      {
        id: "csi-cybersecured",
        role: "Cybersecurity Intern",
        organization: "CSI CyberSecured India",
        period: "Apr 2025 – Jul 2025",
        bullets: [
          "Gained practical exposure to cybersecurity principles, threat identification, and security best practices",
          "Performed vulnerability assessment activities using industry-standard tools",
          "Learned ethical hacking methodologies and cyber defense techniques",
          "Strengthened understanding of network security and penetration testing fundamentals"
        ]
      }
    ]
  },

  certifications: {
    sectionNum: "05",
    eyebrow: "Credentials",
    title: "Industry Certifications & Credentials",
    description: "Professional validations across foundational cybersecurity principles, network architecture, and cloud ecosystems.",
    items: [
      {
        id: "google-cybersecurity",
        title: "Google Cybersecurity Professional Certificate",
        issuer: "Google / Coursera",
        status: "VERIFIED",
        accentColor: "primary"
      },
      {
        id: "tryhackme-fundamentals",
        title: "TryHackMe: Cybersecurity Fundamentals",
        issuer: "TryHackMe",
        status: "VERIFIED",
        accentColor: "secondary"
      },
      {
        id: "smart-india-hackathon",
        title: "Smart India Hackathon",
        issuer: "Participation Certificate",
        status: "PARTICIPATION",
        accentColor: "tertiary"
      },
      {
        id: "cisco-intro-cybersecurity",
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        status: "VERIFIED",
        accentColor: "secondary"
      }
    ]
  },

  resumeCallout: {
    tag: "CURRICULUM VITAE // 2025",
    title: "Interested in My Background?",
    description: "Explore my education, technical skills, academic projects, and cybersecurity learning journey.",
    viewUrl: RESUME_VIEW_URL,
    downloadUrl: RESUME_DOWNLOAD_URL,
    linkedinUrl: LINKEDIN_URL,
    isLinkedinPlaceholder: false
  },

  contact: {
    sectionNum: "06",
    eyebrow: "Transmit Telemetry",
    title: "Let's Connect",
    description: "I'm open to roles in SOC analysis, GRC, and security engineering, as well as internships and conversations about cybersecurity and risk management.",
    info: {
      email: "sohailbagwan274@gmail.com",
      linkedin: LINKEDIN_URL,
      linkedinDisplay: "linkedin.com/in/sohail-bagwan2704",
      isLinkedinPlaceholder: false,
      github: GITHUB_URL,
      githubDisplay: "github.com/sohaill27",
      isGithubPlaceholder: false,
      location: "Mumbai & Pune, India · Remote & On-site"
    },
    formChannelHeader: "ENCRYPTED CONTACT CHANNEL",
    formPortIndicator: "PORT 443 // TLS"
  },

  footer: {
    branding: "Sohail Bagwan",
    byline: "Designed and built by Sohail Bagwan.",
    copyright: "© Sohail Bagwan · Cybersecurity & IT Infrastructure",
    ethos: "Learning continuously. Building responsibly.",
    region: "India (Mumbai & Pune)"
  }
};
