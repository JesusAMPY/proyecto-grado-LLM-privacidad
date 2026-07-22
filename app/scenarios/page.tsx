import { scenarios } from '@/lib/data/scenarios'
import { HeroSection } from '@/components/HeroSection'
import { Metadata } from 'next'
import { BookOpen, Lightbulb, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies & Scenarios | LLM Privacy Framework',
  description: 'Real-world case studies showing how Colombian HEIs can implement LLMs while protecting privacy',
}

export default function ScenariosPage() {
  return (
    <>
      <HeroSection
        title="Case Studies & Scenarios"
        subtitle="Real-world LLM implementation scenarios in Colombian higher education"
        description="These case studies illustrate how institutions can navigate privacy challenges when deploying LLMs across different institutional functions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Implementation Scenarios</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Below are detailed scenarios showing how Colombian higher education institutions can implement LLMs in
            different contexts while identifying and mitigating privacy risks. Each scenario includes the institutional
            context, specific privacy challenges, proposed solutions, and key lessons learned.
          </p>
        </section>

        {/* Scenarios */}
        <section className="space-y-12">
          {scenarios.map((scenario, index) => (
            <ScenarioCard key={scenario.id} scenario={scenario} index={index + 1} />
          ))}
        </section>

        {/* Cross-Cutting Lessons */}
        <section className="mt-20 pt-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-12">Cross-Cutting Lessons</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <LessonCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Institutional Context Matters"
              description="The privacy challenges and solutions differ significantly based on the institution's size, resources, existing data governance practices, and specific use cases. A one-size-fits-all approach will not work. Each institution must conduct a thorough privacy impact assessment aligned with its specific context."
            />
            <LessonCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Governance Must Precede Implementation"
              description="Rushing to deploy LLMs without first establishing clear governance frameworks, data policies, and compliance procedures leads to preventable privacy issues. Invest time upfront in planning, policies, and stakeholder engagement."
            />
            <LessonCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Data Minimization is Your Best Friend"
              description="When in doubt, provide LLMs with less data, not more. The less sensitive data you expose to a model, the fewer privacy risks you face. Always ask: 'Can this analysis be done with less data?'"
            />
            <LessonCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Human Oversight is Non-Negotiable"
              description="LLMs should inform human decision-making, not replace it—especially for decisions affecting individuals. For employment, admissions, or research decisions, meaningful human review is essential both ethically and legally."
            />
            <LessonCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Transparency Builds Trust"
              description="Clearly communicating with stakeholders (students, researchers, employees) about when and how LLMs are used in institutional processes significantly improves institutional credibility and reduces concerns."
            />
            <LessonCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Regular Auditing is Essential"
              description="Privacy and security are not one-time implementations. Regular audits, bias assessments, compliance reviews, and security testing should be continuous processes, not afterthoughts."
            />
          </div>
        </section>

        {/* Decision Framework */}
        <section className="mt-20 pt-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-12">LLM Adoption Decision Framework</h2>

          <div className="bg-card border-2 border-primary p-8 rounded-lg mb-8">
            <p className="text-muted-foreground mb-6">
              Before implementing any LLM application in your institution, consider these key questions:
            </p>
          </div>

          <div className="space-y-4">
            {decisionQuestions.map((question, idx) => (
              <DecisionQuestion key={idx} question={question} index={idx + 1} />
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="mt-20 pt-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-8">Getting Started with Your Institution</h2>

          <div className="bg-secondary/50 p-8 rounded-lg space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Form a Governance Committee</h3>
                <p className="text-muted-foreground text-sm">
                  Bring together IT security, data protection, legal, and relevant departmental leaders to guide LLM
                  adoption decisions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Conduct Privacy Impact Assessment (DPIA)</h3>
                <p className="text-muted-foreground text-sm">
                  Use a standardized DPIA template to document current data landscape, identify risks, and plan
                  mitigations specific to your institution.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Map Your Compliance Status</h3>
                <p className="text-muted-foreground text-sm">
                  Use this framework to assess compliance with Ley 1581, CONPES 4144, and international standards.
                  Identify gaps and prioritize remediation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Pilot with Low-Risk Use Cases</h3>
                <p className="text-muted-foreground text-sm">
                  Start with LLM applications that involve minimal personal data or non-sensitive information, learn
                  from the experience, then expand carefully.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Establish Continuous Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  Set up regular audits, compliance reviews, and privacy assessments to ensure ongoing compliance as
                  LLM usage and regulations evolve.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function ScenarioCard({ scenario, index }: { scenario: (typeof scenarios)[0]; index: number }) {
  return (
    <div className="p-8 rounded-lg border-2 border-border bg-card hover:border-primary transition-colors">
      <div className="mb-6">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
          Scenario {index}
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">{scenario.title}</h3>
        <p className="text-sm text-muted-foreground">
          Institution Type: <span className="font-semibold">{scenario.institution}</span>
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-lg">🏫</span> Institutional Context
          </h4>
          <p className="text-muted-foreground text-sm">{scenario.context}</p>
        </div>

        <div className="p-4 bg-secondary/50 rounded-lg">
          <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-lg">⚠️</span> Privacy Challenge
          </h4>
          <p className="text-muted-foreground text-sm">{scenario.privacyChallenge}</p>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
            <span className="text-lg">✓</span> Solution Approach
          </h4>
          <p className="text-green-800 dark:text-green-200 text-sm">{scenario.solutionApproach}</p>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="text-lg">💡</span> Key Lessons Learned
          </h4>
          <ul className="space-y-2">
            {scenario.keyLessons.map((lesson, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary flex-shrink-0">•</span>
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-2 text-sm">Applicable Standards:</h4>
          <div className="flex flex-wrap gap-2">
            {scenario.applicableStandards.map((standard, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                {standard}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function LessonCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="font-bold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function DecisionQuestion({ question, index }: { question: string; index: number }) {
  return (
    <div className="p-4 rounded-lg border border-border bg-card flex gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
        {index}
      </div>
      <div className="flex-1 pt-1">
        <p className="text-foreground font-medium text-sm">{question}</p>
      </div>
    </div>
  )
}

const decisionQuestions = [
  'What sensitive personal data would this LLM application require access to?',
  'Is this decision (if used for decision-making) significant enough to require human approval?',
  'What are the potential privacy impacts if the LLM makes errors or acts unexpectedly?',
  'Can this use case be achieved with anonymized or minimized data instead?',
  'Have stakeholders (students, researchers, employees) consented to this use?',
  'What audit and accountability mechanisms will we implement?',
  'How will we respond if a privacy breach or incident occurs?',
  'Is the benefit of this LLM application proportionate to its privacy risks?',
]
