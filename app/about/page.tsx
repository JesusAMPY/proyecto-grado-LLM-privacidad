import { HeroSection } from '@/components/HeroSection'
import { Metadata } from 'next'
import { Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | LLM Privacy Framework',
  description: 'Project background and information about this educational resource',
}

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About This Project"
        subtitle="An educational resource for privacy-aware LLM adoption in Colombian higher education"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

          <div className="space-y-4 text-muted-foreground">
            <p>
              This educational framework was developed to address the unique privacy and data protection challenges
              facing Colombian Higher Education Institutions (HEIs) as they adopt Large Language Models (LLMs). It
              provides a structured, evidence-based approach to identifying, assessing, and mitigating privacy risks
              while ensuring compliance with Colombian Law 1581 (Ley 1581 de 2012) and the national AI strategy (CONPES
              4144).
            </p>

            <p>
              The framework synthesizes requirements from Colombian regulations, international standards (OWASP, NIST,
              ISO/IEC 27701), and best practices from academic research. It is designed to be practical, actionable, and
              tailored to the specific contexts of Colombian educational institutions.
            </p>

            <p>
              This project resulted from comprehensive research into privacy risks in AI adoption, regulatory analysis,
              and consultation with stakeholders in Colombian higher education. The framework has been validated through
              case study development and institutional context analysis.
            </p>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-16 bg-secondary/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why This Matters</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ImpactCard
              number="1"
              title="Regulatory Compliance Imperative"
              description="Colombian Law 1581 requires organizations to protect personal data. As LLMs proliferate in education, institutions must understand and comply with these requirements to avoid penalties and legal liability."
            />
            <ImpactCard
              number="2"
              title="Institutional Risk"
              description="Privacy breaches involving student records, research data, or employee information can devastate institutional reputation, violate stakeholder trust, and create significant legal exposure."
            />
            <ImpactCard
              number="3"
              title="Knowledge Gap"
              description="Many Colombian HEIs lack guidance on safe LLM adoption. This framework fills that gap by providing evidence-based, standards-aligned recommendations."
            />
            <ImpactCard
              number="4"
              title="Educational Opportunity"
              description="LLMs offer tremendous potential for advancing teaching, research, and operations—if implemented responsibly. This framework enables institutions to capture benefits while protecting privacy."
            />
          </div>
        </section>

        {/* Key Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Principles</h2>

          <div className="space-y-4">
            <PrincipleItem
              title="Privacy by Design"
              description="Privacy considerations should be incorporated from the earliest stages of LLM planning and implementation, not added as an afterthought."
            />
            <PrincipleItem
              title="Proportionality"
              description="The level of privacy protection should be proportionate to the sensitivity of data and the significance of LLM decisions affecting individuals."
            />
            <PrincipleItem
              title="Data Minimization"
              description="Provide LLMs only with the minimum data necessary to accomplish institutional goals. When in doubt, use less data."
            />
            <PrincipleItem
              title="Transparency"
              description="Clearly communicate with stakeholders about when, how, and why LLMs are used in institutional processes."
            />
            <PrincipleItem
              title="Human Oversight"
              description="LLMs should inform human decision-making, not replace meaningful human judgment, especially for decisions affecting individuals."
            />
            <PrincipleItem
              title="Accountability"
              description="Institutions remain responsible for privacy compliance and the impacts of LLM systems, regardless of external vendors or providers."
            />
          </div>
        </section>

        {/* Framework Development */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Framework Development</h2>

          <div className="space-y-6">
            <ProcessPhase
              phase="Phase 1: Research & Analysis"
              description="Comprehensive review of privacy threats in LLM systems, analysis of Colombian regulatory landscape (Ley 1581, CONPES 4144), and synthesis of international standards (OWASP, NIST, ISO 27701)."
              duration="Foundational Research"
            />

            <ProcessPhase
              phase="Phase 2: Risk Identification"
              description="Systematic identification and categorization of privacy risks specific to LLM adoption in Colombian HEIs. Risks organized by category (data leakage, model behavior, system access, regulatory) and severity."
              duration="Risk Assessment"
            />

            <ProcessPhase
              phase="Phase 3: Standards Mapping"
              description="Detailed mapping between identified risks and applicable regulatory and compliance standards to show how mitigation strategies align with Colombian law and international best practices."
              duration="Compliance Analysis"
            />

            <ProcessPhase
              phase="Phase 4: Scenario Development"
              description="Creation of realistic case studies showing how Colombian HEIs can implement LLMs across various institutional functions (academic advising, research, HR, security) while protecting privacy."
              duration="Contextual Application"
            />

            <ProcessPhase
              phase="Phase 5: Framework Validation"
              description="Testing and refinement of the framework through consultation with IT security professionals, data protection officers, legal experts, and institutional leaders in Colombian higher education."
              duration="Stakeholder Consultation"
            />
          </div>
        </section>

        {/* Resources & Support */}
        <section className="bg-card border-2 border-primary p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Using This Framework</h2>

          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong>For IT Security & Data Protection Teams:</strong> Use the framework to conduct privacy impact
              assessments, identify risks in your institution&apos;s LLM implementations, and develop mitigation
              strategies aligned with Ley 1581.
            </p>

            <p>
              <strong>For Academic Leaders & Department Heads:</strong> Review the scenarios and case studies to
              understand privacy considerations relevant to your specific use cases. Work with IT security teams to
              implement recommended controls.
            </p>

            <p>
              <strong>For Researchers & Academics:</strong> Use this resource to understand privacy implications of
              LLMs for research data and student information. Incorporate privacy considerations into research
              methodologies and consent processes.
            </p>

            <p>
              <strong>For Policy Makers & Institutional Governance:</strong> Use the compliance guidance to ensure your
              institution&apos;s LLM policies align with Colombian regulations and best practices. Establish governance
              frameworks for LLM adoption decisions.
            </p>
          </div>
        </section>

        {/* Contact & Feedback */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Contact & Feedback</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Email Inquiries</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Have questions about the framework or need clarification on specific topics?
              </p>
              <a href="mailto:info@llmprivacyframework.edu.co" className="text-primary font-medium text-sm hover:underline">
                Send us an email
              </a>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Location</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                This framework was developed with input from Colombian Higher Education Institutions and is tailored
                specifically for the Colombian regulatory and institutional context.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-secondary/50 border border-border">
            <h3 className="font-bold text-foreground mb-3">Share Your Experience</h3>
            <p className="text-muted-foreground text-sm mb-4">
              If you&apos;ve implemented this framework in your institution, we&apos;d love to hear about your
              experience! Your feedback helps us continuously improve and refine this resource.
            </p>
            <button className="text-primary font-medium text-sm hover:underline">
              Share Your Institution&apos;s Experience
            </button>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-16 pt-16 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">Disclaimer</h2>

          <div className="p-6 rounded-lg bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm text-yellow-900 dark:text-yellow-100">
              This framework is provided for educational purposes to support Colombian Higher Education Institutions in
              understanding privacy considerations for LLM adoption. It is not a substitute for legal advice or a
              guarantee of compliance. Institutions should consult with their legal counsel, IT security professionals,
              and data protection officers when implementing LLM systems. While based on current regulations and best
              practices, this framework may not reflect all future regulatory changes or evolving security best
              practices. Regular updates and reviews of this resource are recommended.
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
