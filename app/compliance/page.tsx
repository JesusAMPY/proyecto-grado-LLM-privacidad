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
                  <th className="border border-border px-4 py-3 text-left font-semibold">Privacy Protection Area</th>
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
          <h2 className="text-3xl font-bold mb-8">Compliance Implementation Checklist</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {checklistItems.map((section, idx) => (
              <ChecklistSection key={idx} section={section} />
            ))}
          </div>
        </section>

        {/* Key Compliance Obligations */}
        <section className="bg-secondary/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-8">Key Colombian Compliance Obligations</h2>

          <div className="space-y-6">
            <ObligationItem
              title="Lawful Basis for Processing"
              description="Organizations must establish a legal basis for processing personal data through LLMs, typically requiring explicit informed consent from data subjects under Ley 1581."
            />
            <ObligationItem
              title="Data Subject Rights"
              description="Individuals have rights to access, rectify, delete, and export their personal data processed by LLMs. Organizations must establish mechanisms to fulfill these rights."
            />
            <ObligationItem
              title="Data Security Measures"
              description="Organizations must implement administrative, physical, and technical measures to protect data from unauthorized access, loss, or alteration."
            />
            <ObligationItem
              title="Incident Notification"
              description="Significant data breaches or privacy incidents must be reported to affected individuals and the SIC (Superintendencia de Industria y Comercio) within defined timeframes."
            />
            <ObligationItem
              title="Data Processing Documentation"
              description="Organizations must maintain detailed records of data processing activities, including what data is collected, how it is used, and who has access to it."
            />
            <ObligationItem
              title="Third-Party Accountability"
              description="If using third-party LLM services or data processors, organizations remain liable. Data processing agreements must ensure compliance."
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
    area: 'Data Collection & Consent',
    ley1581: 'Requires informed consent',
    conpes: 'Encourages transparency',
    owasp: 'Input validation',
    iso: 'Purpose specification',
  },
  {
    area: 'Data Minimization',
    ley1581: 'Limited to necessary data',
    conpes: 'Responsible AI principles',
    owasp: 'Attack surface reduction',
    iso: 'Data quality principles',
  },
  {
    area: 'Encryption & Access Control',
    ley1581: 'Technical security measures',
    conpes: 'Cybersecurity governance',
    owasp: 'Prevent unauthorized access',
    iso: 'Cryptography controls',
  },
  {
    area: 'Data Retention',
    ley1581: 'Limited retention period',
    conpes: 'Data lifecycle management',
    owasp: 'Minimize stored data',
    iso: 'Retention guidelines',
  },
  {
    area: 'User Rights (Access/Delete)',
    ley1581: 'Habeas data rights',
    conpes: 'Data subject empowerment',
    owasp: 'User control mechanisms',
    iso: 'Privacy controls',
  },
  {
    area: 'Incident Response',
    ley1581: 'Notification requirement',
    conpes: 'Risk management',
    owasp: 'Threat detection',
    iso: 'Breach response',
  },
]

const checklistItems = [
  {
    title: 'Governance & Policy',
    items: [
      { label: 'Data Protection Officer Designated', description: 'Assign responsibility for compliance oversight' },
      { label: 'Privacy Policy Updated', description: 'Document LLM usage and data handling practices' },
      {
        label: 'Data Processing Agreements',
        description: 'Establish agreements with third-party LLM providers',
      },
      { label: 'Incident Response Plan', description: 'Procedures for handling privacy breaches' },
    ],
  },
  {
    title: 'Technical Implementation',
    items: [
      {
        label: 'Encryption Implemented',
        description: 'Data encrypted at rest and in transit',
      },
      {
        label: 'Access Controls Configured',
        description: 'Role-based access with MFA',
      },
      {
        label: 'Audit Logging Active',
        description: 'All data access logged and monitored',
      },
      {
        label: 'Data Anonymization Tools',
        description: 'Mechanisms to remove identifiers before processing',
      },
    ],
  },
  {
    title: 'Compliance Assessment',
    items: [
      {
        label: 'Privacy Impact Assessment Completed',
        description: 'Identify risks and mitigation measures',
      },
      { label: 'Compliance Mapping Done', description: 'Map practices to applicable standards' },
      {
        label: 'Vendor Security Audit',
        description: 'Evaluate third-party security practices',
      },
      {
        label: 'Regular Compliance Reviews',
        description: 'Quarterly or annual compliance verification',
      },
    ],
  },
  {
    title: 'Training & Awareness',
    items: [
      {
        label: 'Staff Privacy Training',
        description: 'Ley 1581 requirements and institutional policies',
      },
      {
        label: 'LLM Responsible Use Training',
        description: 'Best practices for safe LLM deployment',
      },
      {
        label: 'Leadership Awareness',
        description: 'Regulatory obligations and institutional risks',
      },
      {
        label: 'Data Handler Certification',
        description: 'Ensure all staff handling data are trained',
      },
    ],
  },
]
