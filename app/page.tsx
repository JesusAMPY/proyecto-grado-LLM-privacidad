import { HeroSection } from '@/components/HeroSection'
import Link from 'next/link'
import { ArrowRight, BookOpen, Shield, CheckCircle } from 'lucide-react'

export default function Page() {
  return (
    <>
      <HeroSection
        title="LLM Privacy Framework for Colombian Higher Education"
        subtitle="Navigate privacy risks and ensure compliance when implementing Large Language Models"
        description="A comprehensive educational resource for researchers, academics, and IT professionals seeking to understand privacy risks, data protection requirements, and best practices for safe LLM adoption."
        ctaLabel="Explore the Framework"
        ctaHref="/framework"
        secondaryCtaLabel="View Privacy Risks"
        secondaryCtaHref="/privacy-risks"
      />

      {/* Quick Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <QuickNavCard
            icon={<Shield className="w-6 h-6" />}
            title="Framework Overview"
            description="Learn the four pillars of the privacy framework"
            href="/framework"
          />
          <QuickNavCard
            icon={<AlertCircle className="w-6 h-6" />}
            title="Privacy Risks"
            description="Understand 8+ identified privacy threats"
            href="/privacy-risks"
          />
          <QuickNavCard
            icon={<CheckCircle className="w-6 h-6" />}
            title="Compliance Standards"
            description="Map to Ley 1581, CONPES, OWASP, NIST"
            href="/compliance"
          />
          <QuickNavCard
            icon={<BookOpen className="w-6 h-6" />}
            title="Case Studies"
            description="Real-world HEI implementation scenarios"
            href="/scenarios"
          />
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why This Framework Matters</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              title="Regulatory Compliance"
              description="Colombian Ley 1581 requires organizations to protect personal data. LLM implementation creates new compliance challenges that this framework addresses systematically."
            />
            <InfoCard
              title="Institutional Risk"
              description="Privacy breaches can expose sensitive student and research data, leading to regulatory penalties, reputational damage, and loss of stakeholder trust."
            />
            <InfoCard
              title="Educational Need"
              description="Many HEIs lack guidance on safe LLM adoption. This framework provides evidence-based recommendations grounded in research and international standards."
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Framework Components</h2>

        <div className="space-y-12">
          <FeatureItem
            number="1"
            title="Comprehensive Risk Catalog"
            description="8+ identified privacy risks specific to LLM adoption in HEIs, including data leakage, model behavior issues, system access vulnerabilities, and regulatory non-compliance."
          />
          <FeatureItem
            number="2"
            title="Compliance Mapping"
            description="Alignment with Colombian Law 1581, CONPES 4144, OWASP Top 10 for LLMs, NIST Cybersecurity Framework, and ISO/IEC 27701 Privacy Management."
          />
          <FeatureItem
            number="3"
            title="Real-World Scenarios"
            description="4+ detailed case studies illustrating how Colombian HEIs can implement LLMs while protecting privacy across academic advising, research, HR, and security contexts."
          />
          <FeatureItem
            number="4"
            title="Practical Guidance"
            description="Mitigation strategies, implementation controls, and best practices for each identified risk, with actionable recommendations for institutional decision-makers."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-lg mb-8 opacity-90">
            Start with the framework overview to understand the four pillars, then explore specific risks and compliance requirements relevant to your institution.
          </p>
          <Link
            href="/framework"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Start Exploring <ArrowRight className="w-4 h-4" />
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
