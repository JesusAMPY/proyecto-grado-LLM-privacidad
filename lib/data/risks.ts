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
    title: 'Exposición No Autorizada de Datos a Través de Salidas del Modelo',
    category: 'data-leakage',
    severity: 'critical',
    description:
      'Los LLMs pueden exponer inadvertidamente datos personales o institucionales sensibles en sus respuestas si fueron entrenados con datos que contienen tal información.',
    examples: [
      'Direcciones de correo de estudiantes o números de identificación apareciendo en salidas del modelo',
      'Datos de investigadores incluidos inadvertidamente en predicciones del modelo',
      'Hallazgos de investigación confidencial reproducidos por el modelo',
    ],
    impact:
      'Violación directa de Ley 1581, responsabilidad legal potencial, daño reputacional, pérdida de confianza de partes interesadas',
    mitigation: [
      'Implementar anonimización estricta de datos antes del entrenamiento del modelo',
      'Usar mecanismos de filtrado para prevenir salida de datos sensibles',
      'Auditorías regulares de salidas del modelo para fugas de datos',
      'Pruebas de equipo rojo para intentos de extracción de datos',
    ],
  },
  {
    id: 'risk-002',
    title: 'Reconstrucción de Datos Basada en Inferencia',
    category: 'model-behavior',
    severity: 'high',
    description:
      'Adversarios pueden reconstruir datos de entrenamiento sensibles mediante patrones cuidadosos de consultas y análisis de salida.',
    examples: [
      'Usar búsquedas de similitud para identificar si estudiantes específicos existen en datos de entrenamiento',
      'Extraer patrones sobre afiliaciones de investigadores y proyectos',
      'Inferir políticas institucionales desde respuestas del modelo',
    ],
    impact: 'Violaciones de privacidad, problemas potenciales de cumplimiento similar a GDPR, daño reputacional',
    mitigation: [
      'Técnicas de privacidad diferencial en entrenamiento del modelo',
      'Limitación de tasa de consultas y detección de anomalías',
      'Autenticación de usuario y registro de auditoría',
      'Detección de ataques de inferencia de membresía',
    ],
  },
  {
    id: 'risk-003',
    title: 'Acceso No Autorizado al Modelo y Datos de Entrenamiento',
    category: 'system-access',
    severity: 'critical',
    description: 'La falta de controles de acceso apropiados puede permitir que personal no autorizado acceda al sistema LLM y sus datos de entrenamiento subyacentes.',
    examples: [
      'Autenticación débil permitiendo acceso no autorizado de personal de IES',
      'Configuraciones incorrectas de almacenamiento en nube exponiendo datos de entrenamiento',
      'Amenazas internas de cuentas comprometidas',
    ],
    impact: 'Brecha masiva de datos, sanciones regulatorias, responsabilidad institucional, pérdida de ventajas competitivas',
    mitigation: [
      'Autenticación multifactor para todo acceso al sistema',
      'Implementación de control de acceso basado en roles (RBAC)',
      'Encriptación de datos en reposo y en tránsito',
      'Revisiones regulares de acceso y auditorías de privilegios',
    ],
  },
  {
    id: 'risk-004',
    title: 'Alucinación del Modelo y Desinformación',
    category: 'model-behavior',
    severity: 'medium',
    description: 'Los LLMs pueden generar información convincente pero falsa, potencialmente dañando la toma de decisiones en contextos educativos.',
    examples: [
      'El modelo inventa citas que parecen autorizadas pero son fabricadas',
      'Generación de predicciones falsas de desempeño estudiantil',
      'Creación de resúmenes de políticas engañosos',
    ],
    impact:
      'Violaciones de integridad académica, daño a estudiantes y profesores, daño a credibilidad institucional, escrutinio regulatorio',
    mitigation: [
      'Descargos de responsabilidad claros sobre limitaciones del modelo',
      'Requisitos de verificación de salida antes del uso',
      'Verificación de humano en el circuito para decisiones sensibles',
      'Ingeniería de prompts para reducir alucinaciones',
    ],
  },
  {
    id: 'risk-005',
    title: 'Riesgos de Procesadores de Datos Terceros',
    category: 'regulatory',
    severity: 'high',
    description:
      'Si los servicios LLM están alojados en la nube o usan procesadores terceros, las prácticas de manejo de datos pueden no cumplir con estándares regulatorios colombianos o institucionales.',
    examples: [
      'Proveedores de nube almacenando datos en jurisdicciones con estándares de privacidad diferentes',
      'Subprocesadores ganando acceso no autorizado a datos sensibles',
      'Incidentes de centros de datos afectando datos institucionales',
    ],
    impact:
      'Violaciones de cumplimiento, pérdida de responsabilidad del controlador de datos, incumplimiento de CONPES 4144, erosión de confianza institucional',
    mitigation: [
      'Acuerdos de procesamiento de datos (DPA) con cláusulas claras de cumplimiento de Ley 1581',
      'Debida diligencia en prácticas de seguridad de terceros',
      'Localización de datos dentro de Colombia donde sea posible',
      'Derechos de auditoría regular y certificaciones de seguridad',
    ],
  },
  {
    id: 'risk-006',
    title: 'Ataques de Inyección de Prompts',
    category: 'system-access',
    severity: 'high',
    description: 'Adversarios pueden manipular el comportamiento del LLM mediante prompts cuidadosamente elaborados para eludir controles de seguridad.',
    examples: [
      'Inyectar prompts para extraer información sensible del sistema',
      'Anular salvaguardias de privacidad mediante manipulación de prompts',
      'Causar que el modelo revele sus instrucciones del sistema',
    ],
    impact: 'Acceso no autorizado a datos, compromiso del sistema, violaciones de privacidad, brechas de cumplimiento',
    mitigation: [
      'Validación de entrada y sanitización',
      'Ingeniería de prompts con límites estrictos',
      'Ajuste fino del modelo con objetivos de seguridad',
      'Sistemas de detección para patrones sospechosos',
    ],
  },
  {
    id: 'risk-007',
    title: 'Sesgo y Discriminación en Predicciones del Modelo',
    category: 'model-behavior',
    severity: 'medium',
    description:
      'Los LLMs pueden perpetuar sesgos históricos, conduciendo a resultados discriminatorios que afectan estudiantes e investigadores.',
    examples: [
      'Sesgo de género o etnia en recomendaciones de admisión',
      'Predicciones sesgadas en asignación de becas',
      'Sugerencias discriminatorias de colaboración en investigación',
    ],
    impact: 'Violaciones de discriminación institucional, responsabilidad legal, brechas éticas, daño a partes interesadas',
    mitigation: [
      'Auditorías de sesgo en datos de entrenamiento y salidas del modelo',
      'Restricciones de equidad en optimización del modelo',
      'Representación diversa de datos de entrenamiento',
      'Monitoreo regular de patrones discriminatorios',
    ],
  },
  {
    id: 'risk-008',
    title: 'Incumplimiento en Retención y Eliminación de Datos',
    category: 'regulatory',
    severity: 'high',
    description:
      'No gestionar adecuadamente la retención y eliminación de datos puede violar requisitos de Ley 1581 y gobernanza de datos institucional.',
    examples: [
      'Datos de entrenamiento retenidos más allá de períodos necesarios',
      'Mecanismos de eliminación inadecuados para datos solicitados',
      'Sin registro de auditoría para gestión del ciclo de vida de datos',
    ],
    impact:
      'Violación directa de Ley 1581, violación de derechos de sujetos de datos, sanciones regulatorias, responsabilidad institucional',
    mitigation: [
      'Políticas claras de retención de datos alineadas con Ley 1581',
      'Mecanismos de eliminación automática para datos expirados',
      'Registros de auditoría para todas las acciones de retención/eliminación',
      'Evaluaciones regulares de cumplimiento',
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
    label: 'Fuga de Datos',
    color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    description: 'Riesgos relacionados con exposición no autorizada de datos sensibles',
  },
  {
    id: 'model-behavior',
    label: 'Comportamiento del Modelo',
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    description: 'Riesgos inherentes a la operación y salidas del LLM',
  },
  {
    id: 'system-access',
    label: 'Acceso al Sistema',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    description: 'Riesgos relacionados con acceso no autorizado al sistema y control',
  },
  {
    id: 'regulatory',
    label: 'Normativo',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    description: 'Riesgos relacionados con requisitos de cumplimiento y regulatorios',
  },
]
