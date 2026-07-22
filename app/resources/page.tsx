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
        title="Resources & References"
        subtitle="Tools, templates, and external references for safe LLM adoption"
        description="A curated collection of resources to help Colombian HEIs implement the framework and stay current with evolving privacy and security best practices."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Primary Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Resources</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ResourceTypeCard
              icon={<FileText className="w-8 h-8" />}
              title="Colombian Laws & Policies"
              count={documentResources.length}
              description="National regulations and strategic documents"
            />
            <ResourceTypeCard
              icon={<ExternalLink className="w-8 h-8" />}
              title="International Standards"
              count={externalResources.length}
              description="Global best practices and frameworks"
            />
            <ResourceTypeCard
              icon={<Wrench className="w-8 h-8" />}
              title="Tools & Templates"
              count={toolResources.length}
              description="Practical implementation resources"
            />
          </div>
        </section>

        {/* Resource Lists */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Reference Materials</h2>

          <div className="space-y-12">
            {/* Documents */}
            {documentResources.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6" /> Colombian Law & Policy
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
                  <ExternalLink className="w-6 h-6" /> International Standards & Frameworks
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
                  <Wrench className="w-6 h-6" /> Tools & Templates
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
          <h2 className="text-3xl font-bold mb-8">Recommended Reading</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ReadingItem
              title="Understanding Ley 1581 for HEIs"
              description="A guide to the key requirements of Colombian data protection law and how they apply to higher education institution specific contexts including student records, research data, and administrative operations."
              topics={['Personal Data Protection', 'Institutional Obligations', 'Data Subject Rights']}
            />
            <ReadingItem
              title="Privacy by Design in AI Systems"
              description="Principles for incorporating privacy considerations from the start of LLM implementations, rather than as an afterthought. Covers data minimization, consent mechanisms, and privacy-preserving technologies."
              topics={['Privacy Engineering', 'Data Minimization', 'Consent Management']}
            />
            <ReadingItem
              title="LLM Security & Robustness"
              description="Technical overview of LLM vulnerabilities including prompt injection, model poisoning, and inference attacks. Practical mitigation strategies aligned with OWASP and NIST frameworks."
              topics={['Security Vulnerabilities', 'Attack Vectors', 'Defense Mechanisms']}
            />
            <ReadingItem
              title="Bias Detection & Mitigation"
              description="Understanding algorithmic bias in LLMs and practical approaches to detect and mitigate discriminatory outcomes. Critical for fair institutional decision-making with AI systems."
              topics={['Fairness Assessment', 'Bias Auditing', 'Mitigation Strategies']}
            />
            <ReadingItem
              title="Governance Frameworks for AI"
              description="How to establish organizational governance structures for responsible AI adoption, including decision-making processes, oversight mechanisms, and accountability frameworks."
              topics={['AI Governance', 'Decision Frameworks', 'Accountability']}
            />
            <ReadingItem
              title="Incident Response for Data Breaches"
              description="Procedures for responding to privacy incidents and data breaches, including detection, containment, notification, and remediation steps required under Ley 1581."
              topics={['Incident Detection', 'Breach Response', 'Notification Procedures']}
            />
          </div>
        </section>

        {/* Implementation Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Step-by-Step Implementation Guides</h2>

          <div className="space-y-6">
            <GuideCard
              title="Conducting a Privacy Impact Assessment (DPIA)"
              steps={[
                'Define the scope: What data and systems are involved?',
                'Identify the purpose: Why is this LLM implementation needed?',
                'Assess risks: What privacy threats exist?',
                'Design controls: What measures will mitigate risks?',
                'Document findings: Create a detailed DPIA report',
                'Review and approve: Governance committee review',
                'Monitor: Regular updates as implementation evolves',
              ]}
            />

            <GuideCard
              title="Establishing Data Processing Agreements with Third Parties"
              steps={[
                'Identify external LLM providers or data processors',
                'Assess their security and privacy practices',
                'Negotiate contractual terms including data handling, deletion, and compliance',
                'Include Ley 1581 compliance requirements explicitly',
                'Ensure audit rights and incident notification provisions',
                'Document the agreement and maintain in records',
                'Conduct periodic security reviews',
              ]}
            />

            <GuideCard
              title="Implementing Data Minimization for LLM Use Cases"
              steps={[
                'Document what data the LLM truly needs',
                'Remove unnecessary identifying information',
                'Aggregate or anonymize where possible',
                'Use tokenization for sensitive values',
                'Implement access controls limiting who provides data',
                'Monitor actual data usage to verify minimization',
                'Regularly audit to ensure ongoing minimization',
              ]}
            />
          </div>
        </section>

        {/* Useful Links */}
        <section className="bg-secondary/50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Useful Links & Organizations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <LinkCategory
              title="Colombian Regulatory Authorities"
              links={[
                { label: 'SIC (Superintendencia de Industria y Comercio)', description: 'Colombian data protection regulator' },
                { label: 'Ministerio de Tecnologías de la Información', description: 'Ministry overseeing CONPES 4144' },
                {
                  label: 'Consejo Nacional de Seguridad Informática',
                  description: 'National cybersecurity council',
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
