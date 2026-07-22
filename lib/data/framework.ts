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
    title: 'Evaluación de Riesgos',
    description:
      'Identificación y evaluación sistemática de riesgos de privacidad asociados con la implementación de LLM en IES.',
    icon: '⚠️',
    details: [
      'Taxonomía de amenazas de privacidad específica para LLMs',
      'Marcos de clasificación de datos',
      'Evaluación de severidad e impacto de riesgos',
      'Identificación de vulnerabilidades',
    ],
  },
  {
    id: 'data-classification',
    title: 'Clasificación de Datos',
    description:
      'Categorización de datos institucionales basada en sensibilidad y requisitos regulatorios.',
    icon: '📊',
    details: [
      'Identificación de datos personales',
      'Categorías de datos sensibles (registros estudiantiles, datos de investigación)',
      'Niveles de clasificación (público, confidencial, restringido)',
      'Políticas de retención de datos',
    ],
  },
  {
    id: 'compliance-mapping',
    title: 'Mapeo de Cumplimiento',
    description:
      'Alineación de prácticas de LLM con regulaciones colombianas y estándares internacionales.',
    icon: '✓',
    details: [
      'Cumplimiento con Ley 1581 de 2012',
      'Alineación con directrices CONPES 4144',
      'OWASP Top 10 para IA',
      'Marco de Ciberseguridad NIST',
      'ISO/IEC 27701 Gestión de Privacidad',
    ],
  },
  {
    id: 'implementation-controls',
    title: 'Controles de Implementación',
    description: 'Medidas técnicas y organizacionales para mitigar riesgos de privacidad identificados.',
    icon: '🔒',
    details: [
      'Estrategias de minimización de datos',
      'Encriptación y controles de acceso',
      'Tecnologías de preservación de privacidad',
      'Mecanismos de auditoría y monitoreo',
      'Procedimientos de respuesta a incidentes',
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
      'Consentimiento para procesamiento de datos personales',
      'Derechos de sujetos de datos (acceso, rectificación, eliminación)',
      'Responsabilidades del controlador y procesador de datos',
      'Seguridad de datos y confidencialidad',
      'Requisitos de notificación de incidentes',
    ],
  },
  {
    id: 'conpes-4144',
    name: 'CONPES 4144 - Estrategia de IA y Datos',
    jurisdiction: 'Colombia',
    keyRequirements: [
      'Principios de adopción de IA responsable',
      'Marcos de gobernanza de datos',
      'Enfoque basado en riesgos para implementación de IA',
      'Desarrollo de capacidades y fortalecimiento de habilidades',
      'Armonización regulatoria',
    ],
  },
  {
    id: 'owasp',
    name: 'OWASP Top 10 para Aplicaciones LLM',
    jurisdiction: 'Internacional',
    keyRequirements: [
      'Prevención de inyección de prompts',
      'Manejo inseguro de resultados',
      'Mitigación de envenenamiento de datos de entrenamiento',
      'Protección contra denegación de servicio de modelos',
      'Mitigación de sobredependencia',
    ],
  },
  {
    id: 'nist',
    name: 'Marco de Ciberseguridad NIST',
    jurisdiction: 'Internacional',
    keyRequirements: [
      'Identificar: Gestión de activos y riesgos',
      'Proteger: Controles de acceso y seguridad de datos',
      'Detectar: Monitoreo y detección de anomalías',
      'Responder: Procedimientos de respuesta a incidentes',
      'Recuperar: Planificación de continuidad del negocio',
    ],
  },
  {
    id: 'iso27701',
    name: 'ISO/IEC 27701 - Gestión de Privacidad',
    jurisdiction: 'Internacional',
    keyRequirements: [
      'Privacidad por diseño',
      'Gestión de derechos de sujetos de datos',
      'Evaluaciones de impacto en privacidad',
      'Gestión de riesgos de terceros',
      'Controles de privacidad y monitoreo',
    ],
  },
]
