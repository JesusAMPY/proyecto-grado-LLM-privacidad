import { Metadata } from 'next'
import { privacyRisks, riskCategories } from '@/lib/data/risks'
import { RiskCard } from '@/components/RiskCard'
import { HeroSection } from '@/components/HeroSection'
import PrivacyRisksContent from './content'

export const metadata: Metadata = {
  title: 'Privacy Risks | LLM Privacy Framework',
  description: 'Comprehensive catalog of privacy risks specific to LLM adoption in higher education',
}

export default function PrivacyRisksPage() {
  return (
    <>
      <HeroSection
        title="Privacy Risks in LLM Adoption"
        subtitle="Comprehensive catalog of privacy threats specific to Large Language Models in higher education"
        description="Understanding these risks is the first step toward implementing appropriate protections. Each risk includes examples, impact assessment, and mitigation strategies."
      />
      <PrivacyRisksContent />

    </>
  )
}

function SeverityCard({ label, count, color }: { label: string; count: number; color: string }) {
  return (
    <div className={`p-6 rounded-lg border-2 ${color}`}>
      <p className="text-sm font-semibold opacity-75">{label} Severity</p>
      <p className="text-3xl font-bold">{count}</p>
    </div>
  )
}

function ExpandableRiskCard({ risk }: { risk: (typeof privacyRisks)[0] }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsExpanded(!isExpanded)
        }
      }}
    >
      <RiskCard
        title={risk.title}
        severity={risk.severity}
        description={risk.description}
        examples={risk.examples}
      />

      {isExpanded && (
        <div className="mt-2 p-6 rounded-lg bg-card border-2 border-primary/20 animate-in fade-in">
          <div className="mb-6">
            <h4 className="font-semibold text-primary mb-3">Impact Assessment</h4>
            <p className="text-muted-foreground">{risk.impact}</p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-3">Mitigation Strategies</h4>
            <ul className="space-y-2">
              {risk.mitigation.map((strategy, idx) => (
                <li key={idx} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary flex-shrink-0 font-semibold">✓</span>
                  <span>{strategy}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function ThemeCard({
  title,
  description,
  risks,
}: {
  title: string
  description: string
  risks: string[]
}) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <h3 className="font-bold text-primary mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="space-y-2">
        <p className="text-xs font-semibold text-foreground">Related Risks:</p>
        <ul className="space-y-1">
          {risks.map((risk, idx) => (
            <li key={idx} className="text-xs text-muted-foreground flex gap-2">
              <span>•</span>
              <span>{risk}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
