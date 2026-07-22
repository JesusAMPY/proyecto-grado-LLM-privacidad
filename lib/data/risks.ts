export interface PrivacyRisk {
  id: string
  title: string
  category: 'data-leakage' | 'model-behavior' | 'system-access' | 'regulatory'
  severity: 'critical' | 'high' | 'medium' | 'low'
  description: string
  examples: string[]
  impact: string
  mitigation: string[]
}

export const privacyRisks: PrivacyRisk[] = [
  {
    id: 'risk-001',
    title: 'Unauthorized Data Exposure Through Model Outputs',
    category: 'data-leakage',
    severity: 'critical',
    description:
      'LLMs may inadvertently expose sensitive personal or institutional data in their responses if trained on data containing such information.',
    examples: [
      'Student email addresses or social security numbers appearing in model outputs',
      'Researcher data inadvertently included in model predictions',
      'Confidential research findings reproduced by the model',
    ],
    impact:
      'Direct violation of Ley 1581, potential legal liability, reputational damage, loss of stakeholder trust',
    mitigation: [
      'Implement strict data anonymization before model training',
      'Use filtering mechanisms to prevent sensitive data output',
      'Regular audits of model outputs for data leakage',
      'Red team testing for data extraction attempts',
    ],
  },
  {
    id: 'risk-002',
    title: 'Inference-Based Data Reconstruction',
    category: 'model-behavior',
    severity: 'high',
    description:
      'Adversaries may reconstruct sensitive training data through careful query patterns and output analysis.',
    examples: [
      'Using similarity searches to identify if specific students exist in training data',
      'Extracting patterns about researcher affiliations and projects',
      'Inferring institutional policies from model responses',
    ],
    impact: 'Privacy violations, potential GDPR-like compliance issues, member institution reputation harm',
    mitigation: [
      'Differential privacy techniques in model training',
      'Query rate limiting and anomaly detection',
      'User authentication and audit logging',
      'Membership inference attack detection',
    ],
  },
  {
    id: 'risk-003',
    title: 'Unauthorized Access to Model and Training Data',
    category: 'system-access',
    severity: 'critical',
    description: 'Lack of proper access controls may allow unauthorized personnel to access the LLM system and its underlying training data.',
    examples: [
      'Weak authentication allowing unauthorized HEI staff access',
      'Cloud storage misconfigurations exposing training data',
      'Insider threats from compromised accounts',
    ],
    impact: 'Mass data breach, regulatory penalties, institutional liability, loss of competitive advantages',
    mitigation: [
      'Multi-factor authentication for all system access',
      'Role-based access control (RBAC) implementation',
      'Encryption of data at rest and in transit',
      'Regular access reviews and privilege audits',
    ],
  },
  {
    id: 'risk-004',
    title: 'Model Hallucination and Misinformation',
    category: 'model-behavior',
    severity: 'medium',
    description: 'LLMs may generate convincing but false information, potentially harming decision-making in educational contexts.',
    examples: [
      'Model inventing citations that seem authoritative but are fabricated',
      'Generating false student performance predictions',
      'Creating misleading policy summaries',
    ],
    impact:
      'Academic integrity violations, student and faculty harm, institutional credibility damage, regulatory scrutiny',
    mitigation: [
      'Clear disclaimers about model limitations',
      'Output verification requirements before use',
      'Human-in-the-loop verification for sensitive decisions',
      'Prompt engineering to reduce hallucinations',
    ],
  },
  {
    id: 'risk-005',
    title: 'Third-Party Data Processor Risks',
    category: 'regulatory',
    severity: 'high',
    description:
      'If LLM services are cloud-hosted or use third-party processors, data handling practices may not meet institutional or Colombian regulatory standards.',
    examples: [
      'Cloud providers storing data in jurisdictions with different privacy standards',
      'Subprocessors gaining unauthorized access to sensitive data',
      'Data center incidents affecting institutional data',
    ],
    impact:
      'Compliance violations, loss of data controller liability, CONPES 4144 non-compliance, institutional trust erosion',
    mitigation: [
      'Data processing agreements (DPA) with clear Ley 1581 compliance clauses',
      'Due diligence on third-party security practices',
      'Data localization within Colombia where feasible',
      'Regular audit rights and security certifications',
    ],
  },
  {
    id: 'risk-006',
    title: 'Prompt Injection Attacks',
    category: 'system-access',
    severity: 'high',
    description: 'Adversaries may manipulate LLM behavior through carefully crafted prompts to bypass security controls.',
    examples: [
      'Injecting prompts to extract sensitive system information',
      'Overriding privacy safeguards through prompt manipulation',
      'Causing model to disclose its system instructions',
    ],
    impact: 'Unauthorized data access, system compromise, privacy violations, compliance breaches',
    mitigation: [
      'Input validation and sanitization',
      'Prompt engineering with strict boundaries',
      'Model fine-tuning with security objectives',
      'Detection systems for suspicious patterns',
    ],
  },
  {
    id: 'risk-007',
    title: 'Bias and Discrimination in Model Predictions',
    category: 'model-behavior',
    severity: 'medium',
    description:
      'LLMs may perpetuate historical biases, leading to discriminatory outcomes affecting students and researchers.',
    examples: [
      'Gender or ethnicity bias in admissions recommendations',
      'Biased scholarship allocation predictions',
      'Discriminatory research collaboration suggestions',
    ],
    impact: 'Institutional discrimination violations, legal liability, ethical breaches, stakeholder harm',
    mitigation: [
      'Bias audits of training data and model outputs',
      'Fairness constraints in model optimization',
      'Diverse training data representation',
      'Regular monitoring for discriminatory patterns',
    ],
  },
  {
    id: 'risk-008',
    title: 'Data Retention and Deletion Non-Compliance',
    category: 'regulatory',
    severity: 'high',
    description:
      'Failing to properly manage data retention and deletion may violate Ley 1581 requirements and institutional data governance.',
    examples: [
      'Training data retained beyond necessary periods',
      'Inadequate deletion mechanisms for requested data',
      'No audit trail for data lifecycle management',
    ],
    impact:
      'Direct Ley 1581 violation, data subject rights breach, regulatory penalties, institutional liability',
    mitigation: [
      'Clear data retention policies aligned with Ley 1581',
      'Automated deletion mechanisms for expired data',
      'Audit logs for all retention/deletion actions',
      'Regular compliance assessments',
    ],
  },
]

export interface RiskCategory {
  id: string
  label: string
  color: string
  description: string
}

export const riskCategories: RiskCategory[] = [
  {
    id: 'data-leakage',
    label: 'Data Leakage',
    color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    description: 'Risks related to unauthorized exposure of sensitive data',
  },
  {
    id: 'model-behavior',
    label: 'Model Behavior',
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    description: 'Risks inherent to LLM operation and outputs',
  },
  {
    id: 'system-access',
    label: 'System Access',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    description: 'Risks related to unauthorized system access and control',
  },
  {
    id: 'regulatory',
    label: 'Regulatory',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    description: 'Risks related to compliance and regulatory requirements',
  },
]
