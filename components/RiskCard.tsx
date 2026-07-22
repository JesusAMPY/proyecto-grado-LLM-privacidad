import { AlertCircle, AlertTriangle, AlertOctagon, Info } from 'lucide-react'

interface RiskCardProps {
  title: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  description: string
  examples: string[]
}

const severityConfig = {
  critical: {
    icon: AlertOctagon,
    bgColor: 'bg-red-50 dark:bg-red-950',
    borderColor: 'border-red-200 dark:border-red-800',
    badgeBg: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    textColor: 'text-red-900 dark:text-red-100',
  },
  high: {
    icon: AlertTriangle,
    bgColor: 'bg-orange-50 dark:bg-orange-950',
    borderColor: 'border-orange-200 dark:border-orange-800',
    badgeBg: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    textColor: 'text-orange-900 dark:text-orange-100',
  },
  medium: {
    icon: AlertCircle,
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    badgeBg: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    textColor: 'text-yellow-900 dark:text-yellow-100',
  },
  low: {
    icon: Info,
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    borderColor: 'border-blue-200 dark:border-blue-800',
    badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    textColor: 'text-blue-900 dark:text-blue-100',
  },
}

export function RiskCard({ title, severity, description, examples }: RiskCardProps) {
  const config = severityConfig[severity]
  const Icon = config.icon

  return (
    <div
      className={`rounded-lg border-2 ${config.borderColor} ${config.bgColor} p-6 hover:shadow-md transition-shadow`}
    >
      <div className="flex items-start gap-3 mb-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-1 ${config.textColor}`} />
        <div className="flex-1">
          <h3 className={`font-semibold ${config.textColor} mb-1`}>{title}</h3>
          <span className={`inline-block text-xs font-semibold px-2 py-1 rounded ${config.badgeBg}`}>
            {severity.charAt(0).toUpperCase() + severity.slice(1)} Severity
          </span>
        </div>
      </div>

      <p className={`${config.textColor} mb-4 text-sm`}>{description}</p>

      {examples.length > 0 && (
        <div>
          <p className={`text-xs font-semibold ${config.textColor} mb-2`}>Examples:</p>
          <ul className={`space-y-1 text-sm ${config.textColor}`}>
            {examples.slice(0, 3).map((example, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="flex-shrink-0">•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
