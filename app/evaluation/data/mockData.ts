export interface Institution {
  id: string
  name: string
  city: string
  studentCount: number
  type: 'Pública' | 'Privada'
}

export interface Question {
  id: string
  category: string
  question: string
  options: string[]
  description: string
}

export interface CategoryResult {
  category: string
  score: number
  maxScore: number
  percentage: number
  recommendations: string[]
}

export const institutions: Institution[] = [
  {
    id: '1',
    name: 'Universidad Nacional Abierta y a Distancia',
    city: 'Medellín',
    studentCount: 45000,
    type: 'Pública',
  },
  {
    id: '2',
    name: 'Pontificia Universidad Javeriana',
    city: 'Medellín',
    studentCount: 12000,
    type: 'Privada',
  },
  {
    id: '3',
    name: 'Universidad de Antioquia',
    city: 'Medellín',
    studentCount: 35000,
    type: 'Pública',
  },
  {
    id: '4',
    name: 'EAFIT',
    city: 'Medellín',
    studentCount: 10500,
    type: 'Privada',
  },
]

export const evaluationQuestions: Question[] = [
  {
    id: '1',
    category: 'Gobernanza de Datos',
    question: '¿Existe un Oficial de Protección de Datos designado en la institución?',
    options: ['Sí, con dedicación exclusiva', 'Sí, con otras responsabilidades', 'No existe', 'No sabe'],
    description: 'Evaluación de la designación de responsable de protección de datos personales',
  },
  {
    id: '2',
    category: 'Gobernanza de Datos',
    question: '¿La institución tiene una política documentada de privacidad de datos?',
    options: [
      'Política completa y actualizada',
      'Política parcial o desactualizada',
      'Sin política formal',
      'No sabe',
    ],
    description: 'Existencia de marco político para protección de datos',
  },
  {
    id: '3',
    category: 'Evaluación de Riesgos',
    question: '¿Se han realizado evaluaciones de impacto de privacidad (DPIA) para sistemas LLM?',
    options: [
      'Sí, en todos los sistemas',
      'Sí, en algunos sistemas',
      'No se han realizado',
      'No sabe',
    ],
    description: 'Realización de evaluaciones de impacto de privacidad según Ley 1581',
  },
  {
    id: '4',
    category: 'Evaluación de Riesgos',
    question: '¿Cuál es el nivel de conciencia sobre riesgos de privacidad en el uso de LLMs?',
    options: ['Alto (>75% del personal)', 'Medio (50-75%)', 'Bajo (<50%)', 'No sabe'],
    description: 'Nivel de capacitación y conciencia sobre riesgos de privacidad',
  },
  {
    id: '5',
    category: 'Controles Técnicos',
    question: '¿Cuál es el estado de encriptación de datos en la institución?',
    options: [
      'Encriptación completa (en reposo y tránsito)',
      'Encriptación parcial',
      'Sin encriptación',
      'No sabe',
    ],
    description: 'Implementación de controles de encriptación de datos',
  },
  {
    id: '6',
    category: 'Controles Técnicos',
    question: '¿Se implementan controles de acceso basados en roles (RBAC)?',
    options: ['Implementación completa', 'Implementación parcial', 'Sin implementar', 'No sabe'],
    description: 'Implementación de control de acceso por roles',
  },
  {
    id: '7',
    category: 'Cumplimiento Normativo',
    question: '¿La institución conoce los requisitos de la Ley 1581 de 2012?',
    options: [
      'Conocimiento completo y aplicado',
      'Conocimiento parcial',
      'Desconocimiento total',
      'No sabe',
    ],
    description: 'Conocimiento de obligaciones legales colombianas',
  },
  {
    id: '8',
    category: 'Cumplimiento Normativo',
    question: '¿Existen acuerdos de procesamiento de datos con proveedores terceros de LLM?',
    options: [
      'Sí, documentos y actualizados',
      'Sí, pero desactualizados',
      'No existen',
      'No sabe',
    ],
    description: 'Existencia de acuerdos de procesamiento de datos con terceros',
  },
  {
    id: '9',
    category: 'Respuesta a Incidentes',
    question: '¿Existe un plan documentado de respuesta a brechas de privacidad?',
    options: ['Plan completo y probado', 'Plan parcial', 'Sin plan', 'No sabe'],
    description: 'Existencia de procedimientos para incidentes de privacidad',
  },
  {
    id: '10',
    category: 'Respuesta a Incidentes',
    question: '¿Se realizan auditorías regulares de seguridad y privacidad?',
    options: ['Sí, trimestral o más frecuente', 'Sí, anual', 'No se realizan', 'No sabe'],
    description: 'Frecuencia de auditorías de seguridad y privacidad',
  },
]

export const mockResults: CategoryResult[] = [
  {
    category: 'Gobernanza de Datos',
    score: 6,
    maxScore: 10,
    percentage: 60,
    recommendations: [
      'Fortalecer la posición del Oficial de Protección de Datos con dedicación exclusiva',
      'Actualizar política de privacidad incluyendo requisitos específicos para LLMs',
      'Establecer comité de gobernanza de datos con representantes multidisciplinarios',
    ],
  },
  {
    category: 'Evaluación de Riesgos',
    score: 4,
    maxScore: 10,
    percentage: 40,
    recommendations: [
      'Realizar DPIA inmediato para todos los sistemas LLM en uso',
      'Implementar programa de capacitación sobre privacidad con alcance institucional',
      'Crear matriz de riesgos específica para contexto educativo colombiano',
    ],
  },
  {
    category: 'Controles Técnicos',
    score: 7,
    maxScore: 10,
    percentage: 70,
    recommendations: [
      'Extender encriptación a todos los datos personales procesados',
      'Implementar monitoreo continuo de accesos con auditoría',
      'Integrar autenticación multifactor (MFA) en sistemas críticos',
    ],
  },
  {
    category: 'Cumplimiento Normativo',
    score: 5,
    maxScore: 10,
    percentage: 50,
    recommendations: [
      'Capacitación formal en Ley 1581 y Decreto 1377 para equipo legal y TI',
      'Revisar y actualizar acuerdos de procesamiento con proveedores',
      'Alinear procesos con CONPES 4144 y NIST AI RMF 1.0',
    ],
  },
  {
    category: 'Respuesta a Incidentes',
    score: 3,
    maxScore: 10,
    percentage: 30,
    recommendations: [
      'Desarrollar plan de respuesta a brechas de privacidad documentado',
      'Establecer protocolo de notificación a afectados y autoridades (SIC)',
      'Realizar simulacros semestrales de respuesta a incidentes',
    ],
  },
]

export const overallScore = {
  total: 25,
  maxTotal: 50,
  percentage: 50,
  level: 'Riesgo Moderado' as const,
}
