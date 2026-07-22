import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { WorkflowDiagram } from '@/components/WorkflowDiagram'
import { TimelineChart } from '@/components/TimelineChart'
import Image from 'next/image'
import { Shield, AlertTriangle, CheckCircle, Lock, BarChart3, Clock, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prototipo Interactivo | Marco de Privacidad LLM',
  description: 'Visualización de prototipos, flujos de trabajo y gráficos del marco implementado en instituciones de educación superior',
}

export default function PrototypePage() {
  return (
    <>
      <HeroSection
        title="Prototipos y Demostraciones Interactivas"
        subtitle="Visualización de cómo funciona el marco en la práctica"
        description="Explora los workflows, timelines y gráficos que las IES colombianas pueden utilizar para evaluar y gestionar riesgos de privacidad en la implementación de LLM."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Framework Overview */}
        <section>
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

        {/* Risk Assessment Workflow */}
        <section className="bg-secondary/10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-2 text-secondary">Flujo de Evaluación de Riesgos</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Proceso paso a paso para identificar y evaluar riesgos de privacidad en tu institución.
          </p>
          <WorkflowDiagram
            steps={[
              {
                id: 'identify',
                title: 'Identificar',
                description: 'Reconocer puntos de exposición de datos',
                icon: <AlertTriangle className="w-6 h-6" />,
                color: 'bg-red-500',
              },
              {
                id: 'assess',
                title: 'Evaluar',
                description: 'Determinar severidad e impacto',
                icon: <BarChart3 className="w-6 h-6" />,
                color: 'bg-orange-500',
              },
              {
                id: 'mitigate',
                title: 'Mitigar',
                description: 'Aplicar controles de seguridad',
                icon: <Shield className="w-6 h-6" />,
                color: 'bg-blue-500',
              },
              {
                id: 'monitor',
                title: 'Monitorear',
                description: 'Vigilancia continua y auditoría',
                icon: <CheckCircle className="w-6 h-6" />,
                color: 'bg-green-500',
              },
            ]}
          />
        </section>

        {/* Implementation Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-2 text-primary">Cronograma de Implementación (6 Meses)</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Plan estructurado para la adopción segura de LLM en tu institución de educación superior.
          </p>
          <TimelineChart
            phases={[
              {
                phase: 1,
                title: 'Planificación y Evaluación',
                duration: 'Semanas 1-4',
                tasks: [
                  'Conducir evaluación de impacto en privacidad (DPIA)',
                  'Identificar datos sensibles en tu institución',
                  'Mapear estado actual de cumplimiento',
                  'Establecer estructura de gobernanza',
                ],
                color: 'bg-red-500',
              },
              {
                phase: 2,
                title: 'Evaluación de Riesgos y Diseño',
                duration: 'Semanas 5-12',
                tasks: [
                  'Realizar evaluación detallada de riesgos',
                  'Diseñar controles técnicos',
                  'Desarrollar políticas de manejo de datos',
                  'Planificar estrategias de minimización de datos',
                ],
                color: 'bg-orange-500',
              },
              {
                phase: 3,
                title: 'Implementación y Pruebas',
                duration: 'Semanas 13-24',
                tasks: [
                  'Desplegar controles técnicos',
                  'Implementar controles de acceso',
                  'Configurar sistemas de monitoreo',
                  'Realizar pruebas de seguridad',
                ],
                color: 'bg-blue-500',
              },
              {
                phase: 4,
                title: 'Verificación y Monitoreo Continuo',
                duration: 'Permanente',
                tasks: [
                  'Verificar cumplimiento en todos los pilares',
                  'Establecer monitoreo continuo',
                  'Realizar auditorías regulares',
                  'Actualizar políticas según sea necesario',
                ],
                color: 'bg-green-500',
              },
            ]}
          />
        </section>

        {/* Risk Assessment Dashboard */}
        <section>
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
                  icon={<AlertTriangle className="w-5 h-5" />}
                  title="Identificación de Riesgos"
                  description="Checklist estructurado de amenazas de privacidad específicas para LLM"
                />
                <FeatureBullet
                  icon={<BarChart3 className="w-5 h-5" />}
                  title="Evaluación de Severidad"
                  description="Clasificación de riesgos por nivel: crítico, alto, medio, bajo"
                />
                <FeatureBullet
                  icon={<Zap className="w-5 h-5" />}
                  title="Análisis de Impacto"
                  description="Evaluación de consecuencias en datos, reputación y cumplimiento"
                />
                <FeatureBullet
                  icon={<Lock className="w-5 h-5" />}
                  title="Estrategias de Mitigación"
                  description="Controles y acciones recomendadas para cada riesgo identificado"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Risk Heatmap */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-accent">Mapa de Calor de Riesgos</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Visualización de la severidad de riesgos según categorías e impacto potencial. Ayuda a priorizar qué riesgos abordar primero.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <span className="text-muted-foreground">Bajo - Gestión estándar</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                  <span className="text-muted-foreground">Medio - Requiere atención</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  <span className="text-muted-foreground">Alto - Prioritario</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded"></div>
                  <span className="text-muted-foreground">Crítico - Acción inmediata</span>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/risk-heatmap.png"
                alt="Mapa de calor de riesgos"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Compliance Mapping */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <Image
                src="/images/compliance-mapping.png"
                alt="Mapeo de cumplimiento"
                fill
                className="object-contain"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-primary">Mapeo de Cumplimiento Regulatorio</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Alineación sistemática de tu implementación de LLM con todas las regulaciones colombianas e internacionales aplicables.
              </p>
              <div className="space-y-3">
                <ComplianceBullet framework="Ley 1581 de 2012" status="Habeas Data Colombiano" />
                <ComplianceBullet framework="CONPES 4144" status="Estrategia IA Nacional" />
                <ComplianceBullet framework="OWASP Top 10" status="Vulnerabilidades LLM" />
                <ComplianceBullet framework="NIST Framework" status="Ciberseguridad" />
                <ComplianceBullet framework="ISO/IEC 27701" status="Gestión de Privacidad" />
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Scenario */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-secondary">Escenario Real: Asesoría Académica con LLM</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ejemplo práctico de cómo implementar un chatbot LLM para asesoría académica mientras se protege la privacidad de estudiantes.
              </p>
              <div className="space-y-4">
                <ScenarioStep
                  step="1"
                  title="Entrada Segura"
                  description="Estudiante envía consulta académica general (sin datos personales)"
                />
                <ScenarioStep
                  step="2"
                  title="Procesamiento"
                  description="LLM procesa solo información anonimizada sobre políticas académicas"
                />
                <ScenarioStep
                  step="3"
                  title="Controles Aplicados"
                  description="Encriptación, auditoría de acceso, y límites de datos automáticos"
                />
                <ScenarioStep
                  step="4"
                  title="Respuesta Segura"
                  description="LLM retorna asesoramiento académico verificado sin datos sensibles"
                />
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/scenario-workflow.png"
                alt="Flujo de escenario real"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Implementation Timeline Image */}
        <section className="relative h-96">
          <h2 className="text-3xl font-bold mb-8 text-primary">Cronograma Visual de Implementación</h2>
          <Image
            src="/images/implementation-timeline.png"
            alt="Cronograma de implementación"
            fill
            className="object-contain"
          />
        </section>

        {/* Framework Overview Image */}
        <section className="relative h-96">
          <h2 className="text-3xl font-bold mb-8 text-accent">Descripción General Completa del Marco</h2>
          <Image
            src="/images/framework-overview.png"
            alt="Descripción general del marco"
            fill
            className="object-contain"
          />
        </section>

        {/* Summary Stats */}
        <section className="bg-primary/10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Alcance del Marco</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <StatCard number="4" label="Pilares Fundamentales" />
            <StatCard number="8+" label="Riesgos Identificados" />
            <StatCard number="5" label="Marcos de Cumplimiento" />
            <StatCard number="6" label="Meses de Implementación" />
          </div>
        </section>
      </div>
    </>
  )
}

function FeatureBullet({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 text-secondary">{icon}</div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function ComplianceBullet({ framework, status }: { framework: string; status: string }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-card border border-border hover:border-primary transition-colors">
      <span className="font-semibold text-foreground">{framework}</span>
      <span className="text-sm text-muted-foreground">{status}</span>
    </div>
  )
}

function ScenarioStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
        {step}
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-card border-2 border-primary rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
      <div className="text-4xl font-bold text-primary mb-2">{number}</div>
      <p className="text-sm font-semibold text-foreground">{label}</p>
    </div>
  )
}
