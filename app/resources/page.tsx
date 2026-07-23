import { resources } from '@/lib/data/resources'
import { HeroSection } from '@/components/HeroSection'
import { Metadata } from 'next'
import { ExternalLink, FileText, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recursos y Referencias | Marco de Privacidad LLM',
  description: 'Herramientas, plantillas y referencias para evaluación de privacidad en educación superior',
}

export default function ResourcesPage() {
  const documentResources = resources.filter((r) => r.type === 'document')
  const externalResources = resources.filter((r) => r.type === 'external')
  const toolResources = resources.filter((r) => r.type === 'tool')

  return (
    <>
      <HeroSection
        title="Recursos y Referencias"
        subtitle="Herramientas, plantillas y referencias externas para adopción segura de LLM"
        description="Colección curada de recursos para ayudar a las IES colombianas a implementar el marco y mantenerse actualizado con mejores prácticas de privacidad y seguridad en evolución."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Primary Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Recursos Clave</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ResourceTypeCard
              icon={<FileText className="w-8 h-8" />}
              title="Leyes y Políticas Colombianas"
              count={documentResources.length}
              description="Regulaciones nacionales y documentos estratégicos"
            />
            <ResourceTypeCard
              icon={<ExternalLink className="w-8 h-8" />}
              title="Estándares Internacionales"
              count={externalResources.length}
              description="Mejores prácticas globales y marcos de referencia"
            />
            <ResourceTypeCard
              icon={<Wrench className="w-8 h-8" />}
              title="Herramientas y Plantillas"
              count={toolResources.length}
              description="Recursos de implementación práctica"
            />
          </div>
        </section>

        {/* Resource Lists */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Materiales de Referencia</h2>

          <div className="space-y-12">
            {/* Documents */}
            {documentResources.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6" /> Ley y Política Colombiana
                </h3>
                <div className="space-y-4">
                  {documentResources.map((resource, idx) => (
                    <ResourceCard key={idx} resource={resource} />
                  ))}
                </div>
              </div>
            )}

            {/* External Resources */}
            {externalResources.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <ExternalLink className="w-6 h-6" /> Estándares e Marcos Internacionales
                </h3>
                <div className="space-y-4">
                  {externalResources.map((resource, idx) => (
                    <ResourceCard key={idx} resource={resource} />
                  ))}
                </div>
              </div>
            )}

            {/* Tools */}
            {toolResources.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Wrench className="w-6 h-6" /> Herramientas y Plantillas
                </h3>
                <div className="space-y-4">
                  {toolResources.map((resource, idx) => (
                    <ResourceCard key={idx} resource={resource} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Recommended Reading */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Lectura Recomendada</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ReadingItem
              title="Comprendiendo Ley 1581 para IES"
              description="Una guía a los requisitos clave de la ley de protección de datos colombiana y cómo se aplican en contextos específicos de instituciones de educación superior incluyendo registros de estudiantes, datos de investigación y operaciones administrativas."
              topics={['Protección de Datos Personales', 'Obligaciones Institucionales', 'Derechos de Sujetos de Datos']}
            />
            <ReadingItem
              title="Privacidad por Diseño en Sistemas de IA"
              description="Principios para incorporar consideraciones de privacidad desde el inicio de implementaciones de LLM, en lugar de como una consideración posterior. Cubre minimización de datos, mecanismos de consentimiento y tecnologías que preservan privacidad."
              topics={['Ingeniería de Privacidad', 'Minimización de Datos', 'Gestión de Consentimiento']}
            />
            <ReadingItem
              title="Seguridad y Robustez de LLM"
              description="Descripción técnica de vulnerabilidades de LLM incluyendo inyección de prompts, envenenamiento de modelos y ataques de inferencia. Estrategias de mitigación práctica alineadas con marcos OWASP y NIST."
              topics={['Vulnerabilidades de Seguridad', 'Vectores de Ataque', 'Mecanismos de Defensa']}
            />
            <ReadingItem
              title="Detección y Mitigación de Sesgo"
              description="Comprensión del sesgo algorítmico en LLM y enfoques prácticos para detectar y mitigar resultados discriminatorios. Crítico para toma de decisiones institucional justa con sistemas de IA."
              topics={['Evaluación de Equidad', 'Auditoría de Sesgo', 'Estrategias de Mitigación']}
            />
            <ReadingItem
              title="Marcos de Gobernanza para IA"
              description="Cómo establecer estructuras de gobernanza organizacional para adopción responsable de IA, incluyendo procesos de toma de decisiones, mecanismos de supervisión y marcos de responsabilidad."
              topics={['Gobernanza de IA', 'Marcos de Decisión', 'Responsabilidad']}
            />
            <ReadingItem
              title="Respuesta a Incidentes para Brechas de Datos"
              description="Procedimientos para responder a incidentes de privacidad y brechas de datos, incluyendo detección, contención, notificación y pasos de remediación requeridos bajo Ley 1581."
              topics={['Detección de Incidentes', 'Respuesta a Brechas', 'Procedimientos de Notificación']}
            />
          </div>
        </section>

        {/* Implementation Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Guías de Implementación Paso a Paso</h2>

          <div className="space-y-6">
            <GuideCard
              title="Conduciendo una Evaluación de Impacto de Privacidad (DPIA)"
              steps={[
                'Define el alcance: ¿Qué datos y sistemas están involucrados?',
                'Identifica el propósito: ¿Por qué se necesita esta implementación de LLM?',
                'Evalúa riesgos: ¿Qué amenazas de privacidad existen?',
                'Diseña controles: ¿Qué medidas mitigarán los riesgos?',
                'Documenta hallazgos: Crea un reporte DPIA detallado',
                'Revisa y aprueba: Revisión del comité de gobernanza',
                'Monitorea: Actualizaciones regulares mientras evoluciona la implementación',
              ]}
            />

            <GuideCard
              title="Estableciendo Acuerdos de Procesamiento de Datos con Terceros"
              steps={[
                'Identifica proveedores externos de LLM o procesadores de datos',
                'Evalúa sus prácticas de seguridad y privacidad',
                'Negocia términos contractuales incluyendo manejo de datos, eliminación y cumplimiento',
                'Incluye explícitamente requisitos de cumplimiento de Ley 1581',
                'Asegura derechos de auditoría y disposiciones de notificación de incidentes',
                'Documenta el acuerdo y mantenlo en registros',
                'Realiza revisiones de seguridad periódicas',
              ]}
            />

            <GuideCard
              title="Implementando Minimización de Datos para Casos de Uso de LLM"
              steps={[
                'Documenta qué datos el LLM realmente necesita',
                'Elimina información de identificación innecesaria',
                'Agrega o anonimiza donde sea posible',
                'Usa tokenización para valores sensibles',
                'Implementa controles de acceso limitando quién proporciona datos',
                'Monitorea el uso real de datos para verificar minimización',
                'Audita regularmente para asegurar minimización continua',
              ]}
            />
          </div>
        </section>

        {/* Useful Links */}
        <section className="bg-secondary/50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Enlaces Útiles y Organizaciones</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <LinkCategory
              title="Autoridades Regulatorias Colombianas"
              links={[
                { label: 'SIC (Superintendencia de Industria y Comercio)', description: 'Regulador de protección de datos colombiano' },
                { label: 'Ministerio de Tecnologías de la Información', description: 'Ministerio que supervisa CONPES 4144' },
                {
                  label: 'Consejo Nacional de Seguridad Informática',
                  description: 'Consejo de ciberseguridad nacional',
                },
              ]}
            />

            <LinkCategory
              title="International Standards Organizations"
              links={[
                { label: 'OWASP', description: 'Open Web Application Security Project' },
                { label: 'NIST', description: 'National Institute of Standards & Technology' },
                { label: 'ISO/IEC', description: 'International Organization for Standardization' },
              ]}
            />

            <LinkCategory
              title="Educational & Research Organizations"
              links={[
                {
                  label: 'RACAI (Research Alliance on AI)',
                  description: 'Colombian AI research consortium',
                },
                { label: 'AULA (Association of Colombian HEIs)', description: 'Higher education association' },
                {
                  label: 'ASCUN',
                  description: 'Colombian university leaders association',
                },
              ]}
            />

            <LinkCategory
              title="Technical Resources"
              links={[
                { label: 'AI Explainability Hub', description: 'Understanding LLM decision-making' },
                {
                  label: 'Privacy-Preserving ML',
                  description: 'Techniques for privacy in machine learning',
                },
                { label: 'Fairness Toolkit', description: 'Tools for bias detection and mitigation' },
              ]}
            />
          </div>
        </section>

        {/* Contact & Support */}
        <section className="border-t border-border pt-16">
          <h2 className="text-3xl font-bold mb-8">Need More Information?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <InfoBox
              title="Questions about the Framework?"
              description="Review the framework overview and specific sections. Most questions are answered in the detailed compliance and implementation guidance."
            />
            <InfoBox
              title="Need Specific Guidance for Your Institution?"
              description="Consult with your IT security team and data protection officer. Consider engaging external expertise if implementing complex LLM solutions."
            />
            <InfoBox
              title="Want to Contribute?"
              description="This is an evolving resource. Your feedback and experiences implementing this framework in Colombian HEIs are valuable. Contact the project team to share insights."
            />
          </div>
        </section>
      </div>
    </>
  )
}

function ResourceTypeCard({
  icon,
  title,
  count,
  description,
}: {
  icon: React.ReactNode
  title: string
  count: number
  description: string
}) {
  return (
    <div className="p-6 rounded-lg border-2 border-border bg-card">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="font-bold text-foreground mb-1">{title}</h3>
      <p className="text-3xl font-bold text-primary mb-3">{count}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function ResourceCard({ resource }: { resource: (typeof resources)[0] }) {
  const isExternal = resource.url.startsWith('http')

  return (
    <div className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-semibold text-foreground flex-1">{resource.title}</h3>
        {isExternal && <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
      </div>
      <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
      {isExternal ? (
        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline">
          Access External Resource →
        </a>
      ) : (
        <button className="text-primary text-sm font-medium hover:underline cursor-not-allowed opacity-60">
          Available in Project (placeholder)
        </button>
      )}
    </div>
  )
}

function ReadingItem({
  title,
  description,
  topics,
}: {
  title: string
  description: string
  topics: string[]
}) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <h3 className="font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, idx) => (
          <span key={idx} className="px-2 py-1 rounded text-xs bg-primary/10 text-primary font-medium">
            {topic}
          </span>
        ))}
      </div>
    </div>
  )
}

function GuideCard({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="p-6 rounded-lg border-2 border-primary bg-card">
      <h3 className="font-bold text-foreground mb-4">{title}</h3>
      <ol className="space-y-3">
        {steps.map((step, idx) => (
          <li key={idx} className="flex gap-4">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
              {idx + 1}
            </span>
            <span className="text-sm text-muted-foreground pt-0.5">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function LinkCategory({ title, links }: { title: string; links: Array<{ label: string; description: string }> }) {
  return (
    <div>
      <h3 className="font-bold text-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, idx) => (
          <li key={idx} className="text-sm">
            <p className="font-medium text-foreground">{link.label}</p>
            <p className="text-muted-foreground text-xs">{link.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function InfoBox({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-card border border-border">
      <h3 className="font-bold text-primary mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
