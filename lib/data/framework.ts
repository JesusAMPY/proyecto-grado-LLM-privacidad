export interface FrameworkPillar {
  id: string
  title: string
  description: string
  icon: string
  details: string[]
}

export const frameworkPillars: FrameworkPillar[] = [
  {
    id: 'risk-assessment',
    title: 'Risk Assessment',
    description:
      'Systematic identification and evaluation of privacy risks associated with LLM deployment in HEIs.',
    icon: '⚠️',
    details: [
      'Privacy threat taxonomy specific to LLMs',
      'Data classification frameworks',
      'Risk severity and impact assessment',
      'Vulnerability identification',
    ],
  },
  {
    id: 'data-classification',
    title: 'Data Classification',
    description:
      'Categorization of institutional data based on sensitivity and regulatory requirements.',
    icon: '📊',
    details: [
      'Personal data identification',
      'Sensitive data categories (student records, research data)',
      'Classification levels (public, confidential, restricted)',
      'Data retention policies',
    ],
  },
  {
    id: 'compliance-mapping',
    title: 'Compliance Mapping',
    description:
      'Alignment of LLM practices with Colombian regulations and international standards.',
    icon: '✓',
    details: [
      'Law 1581 of 2012 compliance',
      'CONPES 4144 guidelines alignment',
      'OWASP Top 10 for AI',
      'NIST Cybersecurity Framework',
      'ISO/IEC 27701 Privacy Management',
    ],
  },
  {
    id: 'implementation-controls',
    title: 'Implementation Controls',
    description: 'Technical and organizational measures to mitigate identified privacy risks.',
    icon: '🔒',
    details: [
      'Data minimization strategies',
      'Encryption and access controls',
      'Privacy-preserving technologies',
      'Audit and monitoring mechanisms',
      'Incident response procedures',
    ],
  },
]

export interface ComplianceStandard {
  id: string
  name: string
  jurisdiction: string
  keyRequirements: string[]
}

export const complianceStandards: ComplianceStandard[] = [
  {
    id: 'law-1581',
    name: 'Ley 1581 de 2012 - Habeas Data',
    jurisdiction: 'Colombia',
    keyRequirements: [
      'Consent for personal data processing',
      'Data subject rights (access, rectification, deletion)',
      'Data controller and processor responsibilities',
      'Data security and confidentiality',
      'Incident notification requirements',
    ],
  },
  {
    id: 'conpes-4144',
    name: 'CONPES 4144 - AI and Data Strategy',
    jurisdiction: 'Colombia',
    keyRequirements: [
      'Responsible AI adoption principles',
      'Data governance frameworks',
      'Risk-based approach to AI deployment',
      'Skills development and capacity building',
      'Regulatory harmonization',
    ],
  },
  {
    id: 'owasp',
    name: 'OWASP Top 10 for LLM Applications',
    jurisdiction: 'International',
    keyRequirements: [
      'Prompt injection prevention',
      'Insecure output handling',
      'Training data poisoning mitigation',
      'Model denial of service protection',
      'Overreliance mitigation',
    ],
  },
  {
    id: 'nist',
    name: 'NIST Cybersecurity Framework',
    jurisdiction: 'International',
    keyRequirements: [
      'Identify: Asset and risk management',
      'Protect: Access controls and data security',
      'Detect: Monitoring and anomaly detection',
      'Respond: Incident response procedures',
      'Recover: Business continuity planning',
    ],
  },
  {
    id: 'iso27701',
    name: 'ISO/IEC 27701 - Privacy Management',
    jurisdiction: 'International',
    keyRequirements: [
      'Privacy by design',
      'Data subject rights management',
      'Privacy impact assessments',
      'Third-party risk management',
      'Privacy controls and monitoring',
    ],
  },
]
