import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Prototipo Interactivo | Marco de Privacidad LLM',
  description: 'Visualización de prototipos y mockups del marco implementado en instituciones de educación superior',
}

export default function PrototypePage() {
  return (
    <>
      <HeroSection
        title="Prototipos y Demostraciones"
        subtitle="Visualización de cómo funciona el marco en la práctica"
        description="Explora los mockups de los tableros y flujos de trabajo que las IES colombianas pueden utilizar para evaluar y gestionar riesgos de privacidad en la implementación de LLM."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Framework Overview */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Descripción General del Marco</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Los cuatro pilares fundamentales del marco de privacidad LLM trabajan juntos para crear un enfoque integral para la adopción segura de LLM en instituciones de educación superior.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span><strong>Evaluación de Riesgos:</strong> Identificar y analizar amenazas específicas de privacidad</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span><strong>Clasificación de Datos:</strong> Categorizar información según sensibilidad</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span><strong>Mapeo de Cumplimiento:</strong> Alinear con Ley 1581, CONPES, OWASP, NIST</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <span><strong>Controles de Implementación:</strong> Aplicar medidas técnicas y organizativas</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/framework-overview.png"
                alt="Descripción general del marco de 4 pilares"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Risk Assessment Dashboard */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <Image
                src="/images/risk-assessment-dashboard.png"
                alt="Tablero de evaluación de riesgos"
                fill
                className="object-contain"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-secondary">Tablero de Evaluación de Riesgos</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Este tablero permite a los equipos de TI y gobernanza de datos evaluar sistemáticamente los riesgos de privacidad asociados con la implementación de LLM.
              </p>
              <div className="space-y-4">
                <FeatureBullet
                  title="Identificación de Riesgos"
                  description="Checklist estructurado de amenazas de privacidad específicas para LLM"
                />
                <FeatureBullet
                  title="Evaluación de Severidad"
                  description="Clasificación de riesgos por nivel: crítico, alto, medio, bajo"
                />
                <FeatureBullet
                  title="Análisis de Impacto"
                  description="Evaluación de consecuencias en datos, reputación y cumplimiento"
                />
                <FeatureBullet
                  title="Estrategias de Mitigación"
                  description="Controles y acciones recomendadas para cada riesgo identificado"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Risk Heatmap */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-accent">Mapa de Severidad de Riesgos</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Una visualización de matriz que muestra la intersección entre categorías de riesgos e impactos potenciales, permitiendo priorizar las acciones de mitigación.
              </p>
              <div className="space-y-4">
                <FeatureBullet
                  title="Matriz de Riesgos"
                  description="Visualización de 4 categorías x 4 tipos de impacto"
                />
                <FeatureBullet
                  title="Codificación por Color"
                  description="Indica severidad: verde (bajo), naranja (medio), rojo (crítico)"
                />
                <FeatureBullet
                  title="Puntuación de Riesgos"
                  description="Scores numéricos para comparación y seguimiento"
                />
                <FeatureBullet
                  title="Resumen Ejecutivo"
                  description="Estadísticas agregadas de riesgos identificados"
                />
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/risk-heatmap.png"
                alt="Mapa de calor de severidad de riesgos"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Compliance Mapping */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <Image
                src="/images/compliance-mapping.png"
                alt="Mapeo de cumplimiento normativo"
                fill
                className="object-contain"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-primary">Mapeo de Cumplimiento Normativo</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Muestra cómo el marco se alinea con regulaciones clave colombianas e internacionales para garantizar conformidad con requisitos legales y estándares de seguridad.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-primary"></div>
                  <span><strong>Ley 1581:</strong> Protección de datos personales colombiana</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-secondary"></div>
                  <span><strong>CONPES 4144:</strong> Estrategia nacional de transformación digital</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-accent"></div>
                  <span><strong>OWASP Top 10:</strong> Seguridad en aplicaciones de LLM</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-green-500"></div>
                  <span><strong>NIST & ISO/IEC:</strong> Estándares de ciberseguridad e privacidad</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-secondary">Cronograma de Implementación</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Un plan de 6 meses que muestra las fases de adopción de LLM en una IES, desde planeación inicial hasta despliegue en producción, con hitos y responsables claramente definidos.
              </p>
              <div className="space-y-3 text-sm">
                <PhaseBullet month="Mes 1" phase="Planeación" color="bg-red-100" />
                <PhaseBullet month="Mes 2" phase="Evaluación" color="bg-orange-100" />
                <PhaseBullet month="Mes 3" phase="Desarrollo de Políticas" color="bg-yellow-100" />
                <PhaseBullet month="Mes 4" phase="Implementación Técnica" color="bg-blue-100" />
                <PhaseBullet month="Mes 5" phase="Pruebas y Cumplimiento" color="bg-green-100" />
                <PhaseBullet month="Mes 6" phase="Despliegue" color="bg-purple-100" />
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/implementation-timeline.png"
                alt="Cronograma de implementación de 6 meses"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Real-World Scenario */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <Image
                src="/images/scenario-workflow.png"
                alt="Flujo de trabajo del escenario real"
                fill
                className="object-contain"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-accent">Escenario Real: Asesoramiento Académico con LLM</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ejemplo práctico de cómo una universidad colombiana puede implementar un LLM para asesoramiento académico mientras mantiene la privacidad de estudiantes y datos institucionales.
              </p>
              <div className="space-y-4">
                <ScenarioStep
                  step="1"
                  title="Estudiante Formula Consulta"
                  description="Un estudiante pregunta sobre requisitos de pregrado"
                />
                <ScenarioStep
                  step="2"
                  title="Procesamiento Seguro"
                  description="LLM procesa solo datos mínimos y anonimizados"
                />
                <ScenarioStep
                  step="3"
                  title="Verificaciones de Privacidad"
                  description="Validaciones automáticas de cumplimiento de Ley 1581"
                />
                <ScenarioStep
                  step="4"
                  title="Respuesta Segura"
                  description="Información útil sin exponer datos personales o sensibles"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Puntos Clave del Marco</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-3">4</div>
              <p className="font-semibold mb-2">Pilares Fundamentales</p>
              <p className="text-muted-foreground text-sm">Evaluación, Clasificación, Mapeo, Controles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-3">8+</div>
              <p className="font-semibold mb-2">Riesgos Identificados</p>
              <p className="text-muted-foreground text-sm">Con estrategias de mitigación específicas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-3">5</div>
              <p className="font-semibold mb-2">Marcos de Cumplimiento</p>
              <p className="text-muted-foreground text-sm">Ley 1581, CONPES, OWASP, NIST, ISO</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function FeatureBullet({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function PhaseBullet({ month, phase, color }: { month: string; phase: string; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`${color} px-3 py-1 rounded text-xs font-bold`}>{month}</div>
      <span className="text-foreground">{phase}</span>
    </div>
  )
}

function ScenarioStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
          {step}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
