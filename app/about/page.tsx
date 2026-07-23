import { HeroSection } from '@/components/HeroSection'
import { Metadata } from 'next'
import { Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Acerca de | Marco de Privacidad LLM',
  description: 'Antecedentes del proyecto e información sobre este recurso educativo',
}

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="Acerca de Este Proyecto"
        subtitle="Un recurso educativo para la adopción consciente de privacidad de LLM en educación superior colombiana"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Descripción General del Proyecto</h2>

          <div className="space-y-4 text-muted-foreground">
            <p>
              Este marco educativo fue desarrollado para abordar los únicos desafíos de privacidad y protección de datos que enfrenta
              las Instituciones de Educación Superior (IES) colombianas al adoptar Modelos de Lenguaje Grande (LLMs). Proporciona un enfoque
              estructurado y basado en evidencia para identificar, evaluar y mitigar riesgos de privacidad mientras se garantiza el cumplimiento
              con la Ley 1581 colombiana (Ley 1581 de 2012) y la estrategia nacional de IA (CONPES 4144).
            </p>

            <p>
              El marco sintetiza requisitos de regulaciones colombianas, estándares internacionales (OWASP, NIST,
              ISO/IEC 27701) y mejores prácticas de investigación académica. Está diseñado para ser práctico, accionable y
              adaptado a los contextos específicos de las instituciones educativas colombianas.
            </p>

            <p>
              Este proyecto resultó de investigación exhaustiva en riesgos de privacidad en adopción de IA, análisis regulatorio
              y consulta con partes interesadas en educación superior colombiana. El marco ha sido validado a través del
              desarrollo de casos de estudio y análisis de contexto institucional.
            </p>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-16 bg-secondary/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Por Qué Esto Es Importante</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ImpactCard
              number="1"
              title="Imperativo de Cumplimiento Regulatorio"
              description="La Ley 1581 colombiana requiere que las organizaciones protejan datos personales. A medida que los LLM se proliferan en educación, las instituciones deben entender y cumplir estos requisitos para evitar sanciones y responsabilidad legal."
            />
            <ImpactCard
              number="2"
              title="Riesgo Institucional"
              description="Las brechas de privacidad que involucran registros de estudiantes, datos de investigación o información de empleados pueden devastar la reputación institucional, violar la confianza de partes interesadas y crear exposición legal significativa."
            />
            <ImpactCard
              number="3"
              title="Brecha de Conocimiento"
              description="Muchas IES colombianas carecen de orientación sobre adopción segura de LLM. Este marco llena esa brecha al proporcionar recomendaciones basadas en evidencia y alineadas con estándares."
            />
            <ImpactCard
              number="4"
              title="Oportunidad Educativa"
              description="Los LLM ofrecen un potencial tremendo para avanzar la enseñanza, investigación y operaciones, si se implementan responsablemente. Este marco permite a las instituciones capturar beneficios mientras protegen la privacidad."
            />
          </div>
        </section>

        {/* Key Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Principios Fundamentales</h2>

          <div className="space-y-4">
            <PrincipleItem
              title="Privacidad por Diseño"
              description="Las consideraciones de privacidad deben incorporarse desde las etapas iniciales de la planificación e implementación de LLM, no agregadas como una consideración posterior."
            />
            <PrincipleItem
              title="Proporcionalidad"
              description="El nivel de protección de privacidad debe ser proporcional a la sensibilidad de los datos y la importancia de las decisiones del LLM que afectan a individuos."
            />
            <PrincipleItem
              title="Minimización de Datos"
              description="Proporciona a los LLM solo los datos mínimos necesarios para lograr objetivos institucionales. En caso de duda, usa menos datos."
            />
            <PrincipleItem
              title="Transparencia"
              description="Comunica claramente con partes interesadas sobre cuándo, cómo y por qué se usan los LLM en procesos institucionales."
            />
            <PrincipleItem
              title="Supervisión Humana"
              description="Los LLM deben informar la toma de decisiones humana, no reemplazar el criterio humano significativo, especialmente para decisiones que afectan a individuos."
            />
            <PrincipleItem
              title="Responsabilidad"
              description="Las instituciones siguen siendo responsables del cumplimiento de privacidad y los impactos de los sistemas LLM, independientemente de proveedores externos."
            />
          </div>
        </section>

        {/* Framework Development */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Desarrollo del Marco</h2>

          <div className="space-y-6">
            <ProcessPhase
              phase="Fase 1: Investigación y Análisis"
              description="Revisión exhaustiva de amenazas de privacidad en sistemas LLM, análisis del panorama regulatorio colombiano (Ley 1581, CONPES 4144) y síntesis de estándares internacionales (OWASP, NIST, ISO 27701)."
              duration="Investigación Fundamental"
            />

            <ProcessPhase
              phase="Fase 2: Identificación de Riesgos"
              description="Identificación y categorización sistemática de riesgos de privacidad específicos para adopción de LLM en IES colombianas. Riesgos organizados por categoría (fuga de datos, comportamiento del modelo, acceso al sistema, regulatorio) y severidad."
              duration="Evaluación de Riesgos"
            />

            <ProcessPhase
              phase="Fase 3: Mapeo de Estándares"
              description="Mapeo detallado entre riesgos identificados y estándares regulatorios y de cumplimiento aplicables para mostrar cómo las estrategias de mitigación se alinean con la ley colombiana y mejores prácticas internacionales."
              duration="Análisis de Cumplimiento"
            />

            <ProcessPhase
              phase="Fase 4: Desarrollo de Escenarios"
              description="Creación de casos de estudio realistas mostrando cómo las IES colombianas pueden implementar LLM en varias funciones institucionales (asesoramiento académico, investigación, RRHH, seguridad) mientras protegen la privacidad."
              duration="Aplicación Contextual"
            />

            <ProcessPhase
              phase="Fase 5: Validación del Marco"
              description="Prueba y refinamiento del marco a través de consulta con profesionales de seguridad de TI, oficiales de protección de datos, expertos legales y líderes institucionales en educación superior colombiana."
              duration="Consulta de Partes Interesadas"
            />
          </div>
        </section>

        {/* Resources & Support */}
        <section className="bg-card border-2 border-primary p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Usando Este Marco</h2>

          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong>Para Equipos de Seguridad de TI y Protección de Datos:</strong> Usa el marco para conducir evaluaciones de impacto de privacidad,
              identifica riesgos en las implementaciones de LLM de tu institución y desarrolla estrategias de mitigación alineadas con Ley 1581.
            </p>

            <p>
              <strong>Para Líderes Académicos y Directores de Departamento:</strong> Revisa los escenarios y casos de estudio para
              entender las consideraciones de privacidad relevantes para tus casos de uso específicos. Trabaja con equipos de seguridad de TI para
              implementar controles recomendados.
            </p>

            <p>
              <strong>Para Investigadores y Académicos:</strong> Usa este recurso para entender las implicaciones de privacidad de
              LLM para datos de investigación e información de estudiantes. Incorpora consideraciones de privacidad en metodologías de investigación
              y procesos de consentimiento.
            </p>

            <p>
              <strong>Para Formuladores de Políticas y Gobernanza Institucional:</strong> Usa la orientación de cumplimiento para asegurar que
              las políticas de LLM de tu institución se alineen con regulaciones colombianas y mejores prácticas. Establece marcos de gobernanza
              para decisiones de adopción de LLM.
            </p>
          </div>
        </section>

        {/* Contact & Feedback */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Contacto y Retroalimentación</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Consultas por Correo</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                ¿Tienes preguntas sobre el marco o necesitas aclaración sobre temas específicos?
              </p>
              <a href="mailto:info@llmprivacyframework.edu.co" className="text-primary font-medium text-sm hover:underline">
                Envíanos un correo
              </a>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Ubicación</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Este marco fue desarrollado con aporte de Instituciones de Educación Superior colombianas y está adaptado
                específicamente para el contexto regulatorio e institucional colombiano.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-secondary/50 border border-border">
            <h3 className="font-bold text-foreground mb-3">Comparte Tu Experiencia</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Si has implementado este marco en tu institución, ¡nos encantaría escuchar sobre tu
              experiencia! Tu retroalimentación nos ayuda a mejorar y refinar continuamente este recurso.
            </p>
            <button className="text-primary font-medium text-sm hover:underline">
              Comparte la Experiencia de Tu Institución
            </button>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-16 pt-16 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">Descargo de Responsabilidad</h2>

          <div className="p-6 rounded-lg bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm text-yellow-900 dark:text-yellow-100">
              Este marco se proporciona con fines educativos para apoyar a las Instituciones de Educación Superior colombianas en
              entender las consideraciones de privacidad para la adopción de LLM. No es un sustituto del asesoramiento legal ni una
              garantía de cumplimiento. Las instituciones deben consultar con su asesor legal, profesionales de seguridad de TI
              y oficiales de protección de datos al implementar sistemas LLM. Aunque se basa en regulaciones actuales y mejores
              prácticas, este marco puede no reflejar todos los cambios regulatorios futuros o mejores prácticas de seguridad en evolución.
              Se recomienda la actualización y revisión regular de este recurso.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

function ImpactCard({
  number,
  title,
  description,
}: {
  number: string | number
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <div className="mb-3">
        <span className="inline-block w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
          {number}
        </span>
      </div>
      <h3 className="font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function PrincipleItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors">
      <h3 className="font-bold text-primary mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function ProcessPhase({
  phase,
  description,
  duration,
}: {
  phase: string
  description: string
  duration: string
}) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-bold text-foreground text-lg">{phase}</h3>
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold whitespace-nowrap">
          {duration}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
