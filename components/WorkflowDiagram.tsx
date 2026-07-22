'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'

interface WorkflowStep {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

export function WorkflowDiagram({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-4 min-w-max p-6">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-3 min-w-max">
              <div
                className={`p-4 rounded-full ${step.color} flex items-center justify-center text-white transform hover:scale-110 transition-transform`}
              >
                {step.icon}
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-sm text-foreground">{step.title}</h4>
                <p className="text-xs text-muted-foreground max-w-xs">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex flex-col items-center gap-1">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
