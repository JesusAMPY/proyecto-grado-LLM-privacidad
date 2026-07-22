export interface Resource {
  id: string
  title: string
  description: string
  type: 'document' | 'external' | 'tool'
  url?: string
  category: string
}

export const resources: Resource[] = [
  {
    id: 'res-001',
    title: 'Ley 1581 de 2012 - Habeas Data (Texto Completo)',
    description: 'Legislación colombiana fundamental sobre protección de datos personales y derechos de privacidad.',
    type: 'document',
    category: 'Colombian Laws & Policies',
    url: '#',
  },
  {
    id: 'res-002',
    title: 'CONPES 4144 - Política Nacional de Inteligencia Artificial',
    description: 'Documento de política nacional que define estrategia de adopción de IA responsable en Colombia.',
    type: 'document',
    category: 'Colombian Laws & Policies',
    url: '#',
  },
  {
    id: 'res-003',
    title: 'Decreto 1377 de 2013 - Regulación de Ley 1581',
    description: 'Reglamentación específica de la Ley 1581 con procedimientos operativos y responsabilidades.',
    type: 'document',
    category: 'Colombian Laws & Policies',
    url: '#',
  },
  {
    id: 'res-004',
    title: 'OWASP Top 10 para Aplicaciones LLM',
    description: 'Guía internacional de las 10 vulnerabilidades más críticas en aplicaciones de modelos de lenguaje.',
    type: 'external',
    category: 'International Standards',
    url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
  },
  {
    id: 'res-005',
    title: 'Marco de Ciberseguridad NIST',
    description: 'Conjunto integral de estándares, directrices y mejores prácticas para ciberseguridad organizacional.',
    type: 'external',
    category: 'International Standards',
    url: 'https://www.nist.gov/cyberframework',
  },
  {
    id: 'res-006',
    title: 'ISO/IEC 27701 - Gestión de Privacidad',
    description: 'Estándar internacional de seguridad de información con enfoque en privacidad y protección de datos.',
    type: 'external',
    category: 'International Standards',
    url: '#',
  },
  {
    id: 'res-007',
    title: 'Plantilla de Evaluación de Impacto en Privacidad',
    description: 'Herramienta práctica para evaluar riesgos de privacidad antes de implementar sistemas LLM.',
    type: 'tool',
    category: 'Tools & Templates',
    url: '#',
  },
  {
    id: 'res-008',
    title: 'Checklist de Cumplimiento Ley 1581',
    description: 'Lista de verificación detallada para asegurar cumplimiento con requisitos de protección de datos.',
    type: 'tool',
    category: 'Tools & Templates',
    url: '#',
  },
  {
    id: 'res-009',
    title: 'Plantilla de Contrato de Procesamiento de Datos',
    description: 'Modelo de acuerdo para establecer responsabilidades entre controlador y procesador de datos.',
    type: 'tool',
    category: 'Tools & Templates',
    url: '#',
  },
]
