'use client'

interface TimelinePhase {
  phase: number
  title: string
  duration: string
  tasks: string[]
  color: string
}

export function TimelineChart({ phases }: { phases: TimelinePhase[] }) {
  return (
    <div className="space-y-8">
      {phases.map((phase, index) => (
        <div key={phase.phase} className="relative">
          {/* Timeline line */}
          {index !== phases.length - 1 && (
            <div className="absolute left-6 top-16 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />
          )}

          {/* Phase content */}
          <div className="flex gap-6">
            {/* Timeline dot */}
            <div className={`flex-shrink-0 w-12 h-12 rounded-full ${phase.color} flex items-center justify-center text-white font-bold text-lg relative z-10`}>
              {phase.phase}
            </div>

            {/* Phase details */}
            <div className="flex-1 pb-8">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                  <span className="text-sm bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full font-medium">
                    {phase.duration}
                  </span>
                </div>

                <ul className="space-y-2">
                  {phase.tasks.map((task, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold">→</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
