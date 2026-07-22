export interface Scenario {
  id: string
  title: string
  institution: string
  context: string
  privacyChallenge: string
  solutionApproach: string
  keyLessons: string[]
  applicableStandards: string[]
}

export const scenarios: Scenario[] = [
  {
    id: 'scenario-001',
    title: 'Implementing AI-Powered Academic Advising',
    institution: 'Large Public University',
    context:
      'A Colombian public university seeks to deploy an LLM-based academic advisor to help students select courses and career paths. The system would analyze student academic histories, preferences, and institutional data.',
    privacyChallenge:
      'The LLM requires access to sensitive student data including academic records, personal interests, and potentially family background. How can the institution provide personalized advice while protecting student privacy and complying with Ley 1581?',
    solutionApproach:
      'Implement federated learning where the model processes data locally without transmitting full records to central systems. Use anonymization techniques and differential privacy. Establish clear data processing agreements with explicit student consent. Implement strict access controls and audit logging.',
    keyLessons: [
      'Data minimization: Only provide the LLM with essential information for advising',
      'Transparency: Clear communication with students about data usage',
      'Technical controls: Encryption and secure data handling throughout the pipeline',
      'Accountability: Document all data access and processing for compliance audits',
    ],
    applicableStandards: ['Ley 1581', 'CONPES 4144', 'ISO/IEC 27701'],
  },
  {
    id: 'scenario-002',
    title: 'Research Data Analysis with Sensitive Demographics',
    institution: 'Research-Focused University',
    context:
      'A research university wants to use LLMs to analyze large datasets containing research participant information, including demographic data, health conditions, and behavioral patterns.',
    privacyChallenge:
      'Research participants may have provided data under strict confidentiality agreements. Using this data to train or query LLMs could expose protected information, violate research ethics protocols, and breach informed consent.',
    solutionApproach:
      'De-identify and anonymize data before LLM processing using established protocols. Use synthetic data for model development and testing. Implement strict access controls limiting LLM queries to aggregated, non-identifiable results. Establish ethics review procedures.',
    keyLessons: [
      'Research ethics must inform AI deployment, not the reverse',
      'Informed consent mechanisms should explicitly address AI and LLM usage',
      'Technical anonymization combined with organizational controls provides better protection',
      'Regular privacy impact assessments are essential for research-focused deployment',
    ],
    applicableStandards: ['Ley 1581', 'NIST Framework', 'Research Ethics Guidelines'],
  },
  {
    id: 'scenario-003',
    title: 'Administrative Operations and Employee Data',
    institution: 'Medium-Sized Private University',
    context:
      'A private university considers deploying LLMs for HR functions including employee performance analysis, scheduling optimization, and benefit recommendations. The system would access employment records, salaries, and performance evaluations.',
    privacyChallenge:
      'Employee personal and financial data is particularly sensitive. Using LLMs for decision-making (even recommendations) raises questions about algorithmic bias, employee privacy, and compliance with labor regulations.',
    solutionApproach:
      'Implement explicit consent procedures with transparent communication about LLM usage. Use anonymized data for model development. Ensure human oversight of all recommendations, particularly for employment decisions. Regular bias audits and fairness assessments.',
    keyLessons: [
      'Employment decisions should never be fully automated; maintain meaningful human control',
      'Bias in hiring/performance systems creates legal and ethical liability',
      'Employee consent and transparency are crucial for institutional trust',
      'Documentation of decision logic is necessary for regulatory compliance and defense',
    ],
    applicableStandards: ['Ley 1581', 'Labor Regulations', 'OWASP Top 10'],
  },
  {
    id: 'scenario-004',
    title: 'Cybersecurity Threat Detection Using LLMs',
    institution: 'Tech-Forward University',
    context:
      'A university IT department wants to use LLMs to analyze security logs and identify potential cyber threats. The system would process network traffic data, user activity logs, and system access patterns.',
    privacyChallenge:
      'Security logs contain sensitive information about user activities. An LLM analyzing these logs could reveal private behaviors, communication patterns, or system vulnerabilities. How can the institution protect privacy while enhancing security?',
    solutionApproach:
      'Use LLMs on local security infrastructure without transmitting raw logs to external services. Implement log anonymization and aggregation before analysis. Use technical controls like differential privacy. Limit LLM access to security-relevant signals only, not full activity details.',
    keyLessons: [
      'Security and privacy are not mutually exclusive; they must be balanced',
      'Local processing of sensitive data reduces exposure compared to cloud-based solutions',
      'Anonymization techniques can protect individual privacy while enabling threat detection',
      'Clear policies on what security monitoring is acceptable help maintain trust',
    ],
    applicableStandards: ['Ley 1581', 'NIST Cybersecurity Framework', 'ISO 27001'],
  },
]

export interface ResourceLink {
  title: string
  url: string
  type: 'document' | 'external' | 'tool'
  description: string
}

export const resources: ResourceLink[] = [
  {
    title: 'Ley 1581 de 2012 - Full Text',
    url: 'https://www.sic.gov.co',
    type: 'external',
    description:
      'Official Colombian data protection law from the Superintendencia de Industria y Comercio (SIC)',
  },
  {
    title: 'CONPES 4144 - AI and Data Strategy for Colombia',
    url: '#',
    type: 'document',
    description: 'National policy on artificial intelligence adoption and data governance',
  },
  {
    title: 'OWASP Top 10 for LLM Applications',
    url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
    type: 'external',
    description: 'Security vulnerabilities specific to LLM-based systems',
  },
  {
    title: 'NIST AI Risk Management Framework',
    url: 'https://www.nist.gov/ai-risk-management-framework',
    type: 'external',
    description: 'Framework for managing risks in AI systems across organizations',
  },
  {
    title: 'ISO/IEC 27701:2019 - Privacy Management',
    url: 'https://www.iso.org/standard/71670.html',
    type: 'external',
    description: 'International standard for privacy management in information systems',
  },
  {
    title: 'Data Protection Impact Assessment Template',
    url: '#',
    type: 'tool',
    description: 'Customizable DPIA template for Colombian HEIs',
  },
]
