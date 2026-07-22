import { HeroSection } from '@/components/HeroSection'
import Link from 'next/link'
import { ArrowRight, BookOpen, Shield, CheckCircle } from 'lucide-react'

export default function Page() {
  return (
    <>
      <HeroSection
        title="Marco de Privacidad LLM para Educación Superior Colombiana"
        subtitle="Navega por los riesgos de privacidad y asegura el cumplimiento al implementar Modelos de Lenguaje Grande"
        description="Un recurso educativo integral para investigadores, académicos y profesionales de TI que buscan entender los riesgos de privacidad, requisitos de protección de datos y mejores prácticas para una adopción segura de LLM."
        ctaLabel="Explorar el Marco"
        ctaHref="/framework"
        secondaryCtaLabel="Ver Riesgos de Privacidad"
        secondaryCtaHref="/privacy-risks"
      />

      {/* Quick Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <QuickNavCard
            icon={<Shield className="w-6 h-6" />}
            title="Descripción General del Marco"
            description="Aprende los cuatro pilares del marco de privacidad"
            href="/framework"
          />
          <QuickNavCard
            icon={<AlertCircle className="w-6 h-6" />}
            title="Riesgos de Privacidad"
            description="Comprende 8+ amenazas de privacidad identificadas"
            href="/privacy-risks"
          />
          <QuickNavCard
            icon={<CheckCircle className="w-6 h-6" />}
            title="Estándares de Cumplimiento"
            description="Mapeo a Ley 1581, CONPES, OWASP, NIST"
            href="/compliance"
          />
          <QuickNavCard
            icon={<BookOpen className="w-6 h-6" />}
            title="Casos de Estudio"
            description="Escenarios reales de implementación en IES"
            href="/scenarios"
          />
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Por Qué Este Marco es Importante</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              title="Cumplimiento Normativo"
              description="La Ley 1581 colombiana requiere que las organizaciones protejan datos personales. La implementación de LLM crea nuevos desafíos de cumplimiento que este marco aborda sistemáticamente."
            />
            <InfoCard
              title="Riesgo Institucional"
              description="Las brechas de privacidad pueden exponer datos sensibles de estudiantes e investigación, generando sanciones regulatorias, daño reputacional y pérdida de confianza de partes interesadas."
            />
            <InfoCard
              title="Necesidad Educativa"
              description="Muchas IES carecen de orientación para adoptar LLM de forma segura. Este marco proporciona recomendaciones basadas en evidencia fundamentadas en investigación y estándares internacionales."
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Componentes del Marco</h2>

        <div className="space-y-12">
          <FeatureItem
            number="1"
            title="Catálogo Integral de Riesgos"
            description="8+ riesgos de privacidad identificados específicos para la adopción de LLM en IES, incluyendo fugas de datos, problemas de comportamiento de modelos, vulnerabilidades de acceso al sistema e incumplimiento normativo."
          />
          <FeatureItem
            number="2"
            title="Mapeo de Cumplimiento"
            description="Alineación con Ley 1581 colombiana, CONPES 4144, OWASP Top 10 para LLMs, Marco de Ciberseguridad NIST e ISO/IEC 27701 Gestión de Privacidad."
          />
          <FeatureItem
            number="3"
            title="Escenarios del Mundo Real"
            description="4+ casos de estudio detallados que ilustran cómo las IES colombianas pueden implementar LLM protegiendo privacidad en contextos de asesoramiento académico, investigación, RRHH y seguridad."
          />
          <FeatureItem
            number="4"
            title="Orientación Práctica"
            description="Estrategias de mitigación, controles de implementación y mejores prácticas para cada riesgo identificado, con recomendaciones accionables para tomadores de decisiones institucionales."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para Aprender Más?</h2>
          <p className="text-lg mb-8 opacity-90">
            Comienza con la descripción general del marco para entender los cuatro pilares, luego explora riesgos específicos y requisitos de cumplimiento relevantes para tu institución.
          </p>
          <Link
            href="/framework"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Comenzar Exploración <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

function QuickNavCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group relative p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
    </Link>
  )
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-card border border-border">
      <h3 className="font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function FeatureItem({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

import { AlertCircle } from 'lucide-react'
