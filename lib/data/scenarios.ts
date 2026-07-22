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
    title: 'Implementación de Asesoramiento Académico Impulsado por IA',
    institution: 'Universidad Pública Grande',
    context:
      'Una universidad pública colombiana busca desplegar un asesor académico basado en LLM para ayudar a estudiantes a seleccionar cursos y caminos profesionales. El sistema analizaría historiales académicos de estudiantes, preferencias y datos institucionales.',
    privacyChallenge:
      'El LLM requiere acceso a datos sensibles de estudiantes incluyendo registros académicos, intereses personales y potencialmente información de familia. ¿Cómo puede la institución proporcionar asesoramiento personalizado mientras protege privacidad estudiantil y cumple con Ley 1581?',
    solutionApproach:
      'Implementar aprendizaje federado donde el modelo procesa datos localmente sin transmitir registros completos a sistemas centrales. Usar técnicas de anonimización y privacidad diferencial. Establecer acuerdos claros de procesamiento de datos con consentimiento explícito estudiantil. Implementar controles de acceso estrictos y registros de auditoría.',
    keyLessons: [
      'Minimización de datos: Solo proporcionar al LLM información esencial para asesoramiento',
      'Transparencia: Comunicación clara con estudiantes sobre uso de datos',
      'Controles técnicos: Encriptación y manejo seguro de datos en todo el pipeline',
      'Responsabilidad: Documentar todo acceso y procesamiento de datos para auditorías de cumplimiento',
    ],
    applicableStandards: ['Ley 1581', 'CONPES 4144', 'ISO/IEC 27701'],
  },
  {
    id: 'scenario-002',
    title: 'Análisis de Datos de Investigación con Datos Demográficos Sensibles',
    institution: 'Universidad Enfocada en Investigación',
    context:
      'Una universidad enfocada en investigación quiere usar LLMs para analizar conjuntos de datos grandes que contienen información de participantes de investigación, incluyendo datos demográficos, condiciones de salud y patrones conductuales.',
    privacyChallenge:
      'Los participantes de investigación pueden haber proporcionado datos bajo acuerdos estrictos de confidencialidad. Usar estos datos para entrenar o consultar LLMs podría exponer información protegida, violar protocolos de ética en investigación y quebrantar consentimiento informado.',
    solutionApproach:
      'Desidentificar y anonimizar datos antes del procesamiento del LLM usando protocolos establecidos. Usar datos sintéticos para desarrollo y prueba de modelos. Implementar controles de acceso estrictos limitando consultas del LLM a resultados agregados e no identificables. Establecer procedimientos de revisión ética.',
    keyLessons: [
      'La ética en investigación debe informar la implementación de IA, no al revés',
      'Los mecanismos de consentimiento informado deben abordar explícitamente uso de IA y LLM',
      'La anonimización técnica combinada con controles organizacionales proporciona mejor protección',
      'Las evaluaciones regulares de impacto en privacidad son esenciales para implementación enfocada en investigación',
    ],
    applicableStandards: ['Ley 1581', 'Marco NIST', 'Directrices de Ética en Investigación'],
  },
  {
    id: 'scenario-003',
    title: 'Operaciones Administrativas y Datos de Empleados',
    institution: 'Universidad Privada Mediana',
    context:
      'Una universidad privada considera desplegar LLMs para funciones de RRHH incluyendo análisis de desempeño de empleados, optimización de programación y recomendaciones de beneficios. El sistema accedería a registros de empleo, salarios y evaluaciones de desempeño.',
    privacyChallenge:
      'Los datos personales y financieros de empleados son particularmente sensibles. Usar LLMs para toma de decisiones (incluso recomendaciones) plantea preguntas sobre sesgo algorítmico, privacidad de empleados y cumplimiento con regulaciones laborales.',
    solutionApproach:
      'Implementar procedimientos de consentimiento explícito con comunicación transparente sobre uso de LLM. Usar datos anonimizados para desarrollo de modelos. Asegurar supervisión humana de todas las recomendaciones, particularmente para decisiones de empleo. Auditorías regulares de sesgo y evaluaciones de equidad.',
    keyLessons: [
      'Las decisiones de empleo nunca deben ser completamente automatizadas; mantener control humano significativo',
      'El sesgo en sistemas de contratación/desempeño crea responsabilidad legal y ética',
      'El consentimiento de empleados y transparencia son cruciales para confianza institucional',
      'La documentación de lógica de decisión es necesaria para cumplimiento regulatorio y defensa',
    ],
    applicableStandards: ['Ley 1581', 'Regulaciones Laborales', 'OWASP Top 10'],
  },
  {
    id: 'scenario-004',
    title: 'Detección de Amenazas de Ciberseguridad Usando LLMs',
    institution: 'Universidad Orientada a Tecnología',
    context:
      'Un departamento de TI de universidad quiere usar LLMs para analizar registros de seguridad e identificar posibles amenazas cibernéticas. El sistema procesaría datos de tráfico de red, registros de actividad de usuario y patrones de acceso al sistema.',
    privacyChallenge:
      'Los registros de seguridad contienen información sensible sobre actividades de usuarios. Un LLM analizando estos registros podría revelar comportamientos privados, patrones de comunicación o vulnerabilidades del sistema. ¿Cómo puede la institución proteger privacidad mientras mejora seguridad?',
    solutionApproach:
      'Usar LLMs en infraestructura de seguridad local sin transmitir registros sin procesar a servicios externos. Implementar anonimización de registros y agregación antes del análisis. Usar controles técnicos como privacidad diferencial. Limitar acceso del LLM solo a señales relevantes para seguridad, no detalles completos de actividad.',
    keyLessons: [
      'Seguridad y privacidad no son mutuamente excluyentes; deben ser equilibradas',
      'El procesamiento local de datos sensibles reduce exposición comparado con soluciones basadas en nube',
      'Las técnicas de anonimización pueden proteger privacidad individual mientras permiten detección de amenazas',
      'La supervisión humana de alertas generadas por IA es esencial para contexto y precisión',
    ],
    applicableStandards: ['Ley 1581', 'Marco NIST', 'OWASP Top 10'],
  },
]
