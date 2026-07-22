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
              title="Risk Assessment"
              description="Begin by identifying and evaluating privacy risks specific to your LLM implementation. This forms the foundation for all subsequent decisions."
            />
            <ProcessStep
              step="2"
              title="Data Classification"
              description="Classify institutional data based on sensitivity and regulatory requirements. This determines which data can be used with LLMs and how it must be protected."
            />
            <ProcessStep
              step="3"
              title="Compliance Mapping"
              description="Map your LLM practices to applicable regulations (Ley 1581, CONPES 4144) and standards (OWASP, NIST, ISO 27701). Identify compliance gaps."
            />
            <ProcessStep
              step="4"
              title="Implementation Controls"
              description="Deploy technical and organizational controls to mitigate risks and ensure compliance. This includes encryption, access controls, and monitoring mechanisms."
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
                  <p className="text-sm font-semibold text-foreground">Key Requirements:</p>
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
          <h2 className="text-2xl font-bold mb-8">Recommended Implementation Timeline</h2>

          <div className="space-y-4">
            <TimelineItem
              phase="Phase 1"
              title="Assessment & Planning"
              duration="Weeks 1-4"
              items={[
                'Conduct privacy impact assessment (DPIA)',
                'Identify sensitive data in your institution',
                'Map current compliance status',
                'Establish governance structure',
              ]}
            />
            <TimelineItem
              phase="Phase 2"
              title="Risk Evaluation & Controls Design"
              duration="Weeks 5-12"
              items={[
                'Perform detailed risk assessment',
                'Design technical controls',
                'Develop data handling policies',
                'Plan data minimization strategies',
              ]}
            />
            <TimelineItem
              phase="Phase 3"
              title="Implementation & Testing"
              duration="Weeks 13-24"
              items={[
                'Deploy technical controls',
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
