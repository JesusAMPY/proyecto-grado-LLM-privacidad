import { frameworkPillars, complianceStandards } from '@/lib/data/framework'
import { HeroSection } from '@/components/HeroSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Descripción General del Marco | Marco de Privacidad LLM',
  description: 'Marco integral para evaluar y gestionar riesgos de privacidad en la adopción de LLM',
}

export default function FrameworkPage() {
  return (
    <>
      <HeroSection
        title="Descripción General del Marco"
        subtitle="Cuatro pilares para una adopción segura y conforme de LLM en Instituciones de Educación Superior"
        description="Este marco proporciona un enfoque estructurado para identificar y gestionar riesgos de privacidad al implementar Modelos de Lenguaje Grande, alineado con regulaciones colombianas y estándares internacionales."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Los Cuatro Pilares</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            El marco se construye sobre cuatro pilares interconectados que trabajan juntos para garantizar protección integral de privacidad y cumplimiento normativo durante todo el ciclo de vida del LLM.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {frameworkPillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className="p-8 rounded-lg border-2 border-border bg-card hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{pillar.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{pillar.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{pillar.description}</p>

                <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Componentes Clave:</p>
                  <ul className="space-y-1">
                    {pillar.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Framework Relationships */}
        <section className="bg-secondary/50 p-8 rounded-lg mb-20">
          <h2 className="text-2xl font-bold mb-6">Cómo Trabajan los Pilares Juntos</h2>

          <div className="space-y-6">
            <ProcessStep
              step="1"
              title="Evaluación de Riesgos"
              description="Comienza identificando y evaluando riesgos de privacidad específicos para tu implementación de LLM. Esto forma la base para todas las decisiones posteriores."
            />
            <ProcessStep
              step="2"
              title="Clasificación de Datos"
              description="Clasifica datos institucionales según sensibilidad y requisitos regulatorios. Esto determina qué datos pueden usarse con LLM y cómo deben protegerse."
            />
            <ProcessStep
              step="3"
              title="Mapeo de Cumplimiento"
              description="Mapea tus prácticas de LLM a regulaciones aplicables (Ley 1581, CONPES 4144) y estándares (OWASP, NIST, ISO 27701). Identifica brechas de cumplimiento."
            />
            <ProcessStep
              step="4"
              title="Controles de Implementación"
              description="Despliega controles técnicos y organizacionales para mitigar riesgos y garantizar cumplimiento. Esto incluye encriptación, controles de acceso y mecanismos de monitoreo."
            />
          </div>
        </section>

        {/* Compliance Alignment */}
        <section>
          <h2 className="text-3xl font-bold mb-12">Alineación de Cumplimiento</h2>

          <div className="space-y-6">
            {complianceStandards.map((standard) => (
              <div
                key={standard.id}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{standard.name}</h3>
                    <p className="text-sm text-muted-foreground">{standard.jurisdiction}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Requisitos Clave:</p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {standard.keyRequirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary flex-shrink-0">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mt-20 pt-20 border-t border-border">
          <h2 className="text-2xl font-bold mb-8">Cronograma de Implementación Recomendado</h2>

          <div className="space-y-4">
            <TimelineItem
              phase="Fase 1"
              title="Evaluación y Planificación"
              duration="Semanas 1-4"
              items={[
                'Realizar evaluación de impacto de privacidad (DPIA)',
                'Identificar datos sensibles en tu institución',
                'Mapear estado de cumplimiento actual',
                'Establecer estructura de gobernanza',
              ]}
            />
            <TimelineItem
              phase="Fase 2"
              title="Evaluación de Riesgos y Diseño de Controles"
              duration="Semanas 5-12"
              items={[
                'Realizar evaluación de riesgos detallada',
                'Diseñar controles técnicos',
                'Desarrollar políticas de manejo de datos',
                'Planificar estrategias de minimización de datos',
              ]}
            />
            <TimelineItem
              phase="Fase 3"
              title="Implementación y Pruebas"
              duration="Semanas 13-24"
              items={[
                'Desplegar controles técnicos',
                'Implement access controls',
                'Configure monitoring systems',
                'Conduct security testing',
              ]}
            />
            <TimelineItem
              phase="Phase 4"
              title="Compliance Verification & Monitoring"
              duration="Ongoing"
              items={[
                'Verify compliance across all pillars',
                'Establish continuous monitoring',
                'Conduct regular audits',
                'Update policies as needed',
              ]}
            />
          </div>
        </section>
      </div>
    </>
  )
}

function ProcessStep({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold">
          {step}
        </div>
      </div>
      <div className="flex-1 pt-1">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function TimelineItem({
  phase,
  title,
  duration,
  items,
}: {
  phase: string
  title: string
  duration: string
  items: string[]
}) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
            {phase}
          </span>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <span className="text-sm text-muted-foreground font-semibold">{duration}</span>
      </div>

      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm text-muted-foreground flex gap-2">
            <span className="text-primary">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
