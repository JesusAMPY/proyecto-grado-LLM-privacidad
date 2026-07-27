import { complianceStandards } from '@/lib/data/framework'
import { HeroSection } from '@/components/HeroSection'
import { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cumplimiento y Estándares | Marco de Privacidad LLM',
  description: 'Alineación con ley colombiana, CONPES 4144, OWASP, NIST e ISO/IEC 27701',
}

export default function CompliancePage() {
  return (
    <>
      <HeroSection
        title="Cumplimiento y Estándares"
        subtitle="Alineación con regulaciones colombianas y mejores prácticas internacionales"
        description="Esta página mapea los requisitos de privacidad de LLM a la ley colombiana aplicable, políticas nacionales y estándares internacionales para garantizar el cumplimiento institucional."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Compliance Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Panorama de Cumplimiento</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ComplianceType
              jurisdiction="Colombiana"
              standards={[
                { name: 'Ley 1581 de 2012', description: 'Derecho constitucional a la protección de datos personales' },
                { name: 'CONPES 4144', description: 'Estrategia nacional de IA y datos' },
              ]}
            />
            <ComplianceType
              jurisdiction="Internacional"
              standards={[
                { name: 'OWASP Top 10', description: 'Vulnerabilidades de seguridad específicas para LLM' },
                { name: 'Marco NIST', description: 'Ciberseguridad y gestión de riesgos de IA' },
                { name: 'ISO/IEC 27701', description: 'Estándares de gestión de privacidad' },
              ]}
            />
          </div>

          <div className="p-6 rounded-lg bg-secondary/50 border border-border">
            <h3 className="font-semibold mb-3">Principio Clave: Privacidad por Diseño</h3>
            <p className="text-muted-foreground">
              Todos los marcos enfatizan incorporar consideraciones de privacidad y seguridad desde las etapas iniciales de la implementación de LLM, no como una consideración posterior. Esto incluye minimización de datos, encriptación, controles de acceso y monitoreo continuo.
            </p>
          </div>
        </section>

        {/* Detailed Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Estándares en Detalle</h2>

          <div className="space-y-8">
            {complianceStandards.map((standard) => (
              <StandardCard key={standard.id} standard={standard} />
            ))}
          </div>
        </section>

        {/* Compliance Mapping Matrix */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Mapeo de Protección de Privacidad</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="border border-border px-4 py-3 text-left font-semibold">Área de Protección de Privacidad</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold">Ley 1581</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold">CONPES 4144</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold">OWASP/NIST</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold">ISO 27701</th>
                </tr>
              </thead>
              <tbody>
                {mappingData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-card' : 'bg-secondary/50'}>
                    <td className="border border-border px-4 py-3 font-semibold text-foreground">{row.area}</td>
                    <td className="border border-border px-4 py-3 text-sm text-muted-foreground">{row.ley1581}</td>
                    <td className="border border-border px-4 py-3 text-sm text-muted-foreground">{row.conpes}</td>
                    <td className="border border-border px-4 py-3 text-sm text-muted-foreground">{row.owasp}</td>
                    <td className="border border-border px-4 py-3 text-sm text-muted-foreground">{row.iso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Implementation Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Lista de Verificación de Implementación de Cumplimiento</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {checklistItems.map((section, idx) => (
              <ChecklistSection key={idx} section={section} />
            ))}
          </div>
        </section>

        {/* Key Compliance Obligations */}
        <section className="bg-secondary/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-8">Obligaciones Clave de Cumplimiento Colombiano</h2>

          <div className="space-y-6">
            <ObligationItem
              title="Base Legal para el Procesamiento"
              description="Las organizaciones deben establecer una base legal para procesar datos personales a través de LLM, normalmente requiriendo consentimiento informado explícito de los sujetos de datos bajo Ley 1581."
            />
            <ObligationItem
              title="Derechos de los Sujetos de Datos"
              description="Los individuos tienen derechos de acceso, rectificación, eliminación y exportación de sus datos personales procesados por LLM. Las organizaciones deben establecer mecanismos para cumplir estos derechos."
            />
            <ObligationItem
              title="Medidas de Seguridad de Datos"
              description="Las organizaciones deben implementar medidas administrativas, físicas y técnicas para proteger datos de acceso no autorizado, pérdida o alteración."
            />
            <ObligationItem
              title="Notificación de Incidentes"
              description="Brechas de datos significativas o incidentes de privacidad deben ser reportados a individuos afectados y la SIC (Superintendencia de Industria y Comercio) dentro de plazos definidos."
            />
            <ObligationItem
              title="Documentación de Procesamiento de Datos"
              description="Las organizaciones deben mantener registros detallados de actividades de procesamiento de datos, incluyendo qué datos se recopilan, cómo se usan y quién tiene acceso a ellos."
            />
            <ObligationItem
              title="Responsabilidad de Terceros"
              description="Si se usan servicios LLM de terceros o procesadores de datos, las organizaciones siguen siendo responsables. Los acuerdos de procesamiento de datos deben garantizar cumplimiento."
            />
          </div>
        </section>
      </div>
    </>
  )
}

function ComplianceType({
  jurisdiction,
  standards,
}: {
  jurisdiction: string
  standards: Array<{ name: string; description: string }>
}) {
  return (
    <div className="p-6 rounded-lg border-2 border-border bg-card">
      <h3 className="text-lg font-bold text-primary mb-4">{jurisdiction}</h3>
      <div className="space-y-3">
        {standards.map((standard, idx) => (
          <div key={idx} className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">{standard.name}</p>
              <p className="text-sm text-muted-foreground">{standard.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StandardCard({ standard }: { standard: (typeof complianceStandards)[0] }) {
  return (
    <div className="p-6 rounded-lg border-2 border-border bg-card">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-primary">{standard.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{standard.jurisdiction}</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Key Requirements:</p>
        <ul className="grid md:grid-cols-2 gap-3">
          {standard.keyRequirements.map((req, idx) => (
            <li key={idx} className="flex gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ChecklistSection({
  section,
}: {
  section: { title: string; items: Array<{ label: string; description: string }> }
}) {
  return (
    <div className="p-6 rounded-lg bg-card border border-border">
      <h3 className="font-bold text-primary mb-4">{section.title}</h3>
      <div className="space-y-3">
        {section.items.map((item, idx) => (
          <div key={idx} className="flex gap-3">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-border accent-primary flex-shrink-0 mt-0.5 cursor-pointer"
              id={`item-${idx}`}
            />
            <label htmlFor={`item-${idx}`} className="flex-1 cursor-pointer">
              <p className="font-medium text-foreground text-sm">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

function ObligationItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold text-sm">
        ✓
      </div>
      <div>
        <h3 className="font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  )
}

const mappingData = [
  {
    area: 'Recopilación de Datos y Consentimiento',
    ley1581: 'Requiere consentimiento informado',
    conpes: 'Fomenta la transparencia',
    owasp: 'Validación de entrada',
    iso: 'Especificación de propósito',
  },
  {
    area: 'Minimización de Datos',
    ley1581: 'Limitado a datos necesarios',
    conpes: 'Principios de IA responsable',
    owasp: 'Reducción de superficie de ataque',
    iso: 'Principios de calidad de datos',
  },
  {
    area: 'Encriptación y Control de Acceso',
    ley1581: 'Medidas técnicas de seguridad',
    conpes: 'Gobernanza de ciberseguridad',
    owasp: 'Prevenir acceso no autorizado',
    iso: 'Controles de criptografía',
  },
  {
    area: 'Retención de Datos',
    ley1581: 'Período de retención limitado',
    conpes: 'Gestión del ciclo de vida de datos',
    owasp: 'Minimizar datos almacenados',
    iso: 'Directrices de retención',
  },
  {
    area: 'Derechos de Usuario (Acceso/Eliminación)',
    ley1581: 'Derechos de habeas data',
    conpes: 'Empoderamiento del sujeto de datos',
    owasp: 'Mecanismos de control de usuario',
    iso: 'Controles de privacidad',
  },
  {
    area: 'Respuesta a Incidentes',
    ley1581: 'Requisito de notificación',
    conpes: 'Gestión de riesgos',
    owasp: 'Detección de amenazas',
    iso: 'Respuesta a brechas',
  },
]

const checklistItems = [
  {
    title: 'Gobernanza y Política',
    items: [
      { label: 'Oficial de Protección de Datos Designado', description: 'Asignar responsabilidad de supervisión de cumplimiento' },
      { label: 'Política de Privacidad Actualizada', description: 'Documentar uso de LLM y prácticas de manejo de datos' },
      {
        label: 'Acuerdos de Procesamiento de Datos',
        description: 'Establecer acuerdos con proveedores terceros de LLM',
      },
      { label: 'Plan de Respuesta a Incidentes', description: 'Procedimientos para manejar brechas de privacidad' },
    ],
  },
  {
    title: 'Implementación Técnica',
    items: [
      {
        label: 'Encriptación Implementada',
        description: 'Datos encriptados en reposo y en tránsito',
      },
      {
        label: 'Controles de Acceso Configurados',
        description: 'Acceso basado en roles con MFA',
      },
      {
        label: 'Auditoría Activa Registrada',
        description: 'Todos los accesos a datos registrados y monitoreados',
      },
      {
        label: 'Herramientas de Anonimización de Datos',
        description: 'Mecanismos para eliminar identificadores antes del procesamiento',
      },
    ],
  },
  {
    title: 'Evaluación de Cumplimiento',
    items: [
      {
        label: 'Evaluación de Impacto de Privacidad Completada',
        description: 'Identificar riesgos y medidas de mitigación',
      },
      { label: 'Mapeo de Cumplimiento Realizado', description: 'Mapear prácticas a estándares aplicables' },
      {
        label: 'Auditoría de Seguridad de Vendedor',
        description: 'Evaluar prácticas de seguridad de terceros',
      },
      {
        label: 'Revisiones de Cumplimiento Regulares',
        description: 'Verificación de cumplimiento trimestral o anual',
      },
    ],
  },
  {
    title: 'Capacitación y Conciencia',
    items: [
      {
        label: 'Capacitación de Privacidad del Personal',
        description: 'Requisitos de Ley 1581 y políticas institucionales',
      },
      {
        label: 'Capacitación en Uso Responsable de LLM',
        description: 'Mejores prácticas para implementación segura de LLM',
      },
      {
        label: 'Conciencia de Liderazgo',
        description: 'Obligaciones regulatorias y riesgos institucionales',
      },
      {
        label: 'Certificación de Manipulador de Datos',
        description: 'Asegurar que todo personal que manipula datos esté capacitado',
      },
    ],
  },
]
