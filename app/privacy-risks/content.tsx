'use client'

import { useState } from 'react'
import { privacyRisks, riskCategories } from '@/lib/data/risks'
import { RiskCard } from '@/components/RiskCard'

type CategoryId = 'data-leakage' | 'model-behavior' | 'system-access' | 'regulatory'

export default function PrivacyRisksContent() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all')

  const filteredRisks =
    selectedCategory === 'all' ? privacyRisks : privacyRisks.filter((risk) => risk.category === selectedCategory)

  const severityCounts = {
    critical: privacyRisks.filter((r) => r.severity === 'critical').length,
    high: privacyRisks.filter((r) => r.severity === 'high').length,
    medium: privacyRisks.filter((r) => r.severity === 'medium').length,
    low: privacyRisks.filter((r) => r.severity === 'low').length,
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Risk Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Descripción General de Riesgos</h2>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <SeverityCard label="Crítico" count={severityCounts.critical} color="bg-red-100 text-red-800 dark:bg-red-900" />
          <SeverityCard label="Alto" count={severityCounts.high} color="bg-orange-100 text-orange-800 dark:bg-orange-900" />
          <SeverityCard label="Medio" count={severityCounts.medium} color="bg-yellow-100 text-yellow-800 dark:bg-yellow-900" />
          <SeverityCard label="Bajo" count={severityCounts.low} color="bg-blue-100 text-blue-800 dark:bg-blue-900" />
        </div>

        <div className="p-6 rounded-lg bg-secondary/50 border border-border">
          <h3 className="font-semibold mb-3">Total de Riesgos Identificados</h3>
          <p className="text-muted-foreground">
            Se han identificado {privacyRisks.length} riesgos de privacidad en 4 categorías. Cada riesgo incluye ejemplos específicos,
            impactos potenciales y estrategias de mitigación recomendadas. Usa los filtros abajo para explorar riesgos por
            categoría o severidad.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Filtrar por Categoría</h2>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Todas las Categorías ({privacyRisks.length})
          </button>

          {riskCategories.map((category) => {
            const count = privacyRisks.filter((r) => r.category === category.id).length
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as CategoryId)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category.label} ({count})
              </button>
            )
          })}
        </div>

        {selectedCategory !== 'all' && (
          <div className={`p-4 rounded-lg ${riskCategories.find((c) => c.id === selectedCategory)?.color}`}>
            <p className="text-sm font-medium">
              {riskCategories.find((c) => c.id === selectedCategory)?.description}
            </p>
          </div>
        )}
      </section>

      {/* Risk Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-8">
          {selectedCategory === 'all' ? 'Todos los Riesgos de Privacidad' : riskCategories.find((c) => c.id === selectedCategory)?.label}
        </h2>

        <div className="space-y-6">
          {filteredRisks.map((risk) => (
            <ExpandableRiskCard key={risk.id} risk={risk} />
          ))}
        </div>
      </section>

      {/* Common Themes */}
      <section className="mt-20 pt-20 border-t border-border">
        <h2 className="text-2xl font-bold mb-8">Common Themes Across Risks</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ThemeCard
            title="Data Protection & Minimization"
            description="Many risks stem from exposing too much data to LLMs. Following data minimization principles and carefully controlling what data is provided to models significantly reduces risk."
            risks={['Unauthorized Data Exposure', 'Inference-Based Data Reconstruction', 'Data Retention Issues']}
          />
          <ThemeCard
            title="Access Control & Authentication"
            description="Proper access controls, authentication mechanisms, and audit logging are critical for preventing both unauthorized system access and insider threats."
            risks={['Unauthorized Access', 'Prompt Injection Attacks', 'System Vulnerabilities']}
          />
          <ThemeCard
            title="Model Limitations & Human Oversight"
            description="LLMs have inherent limitations including hallucination and bias. Human oversight and verification remain essential for decisions affecting individuals."
            risks={['Hallucination & Misinformation', 'Bias & Discrimination', 'Unreliable Predictions']}
          />
          <ThemeCard
            title="Compliance & Governance"
            description="Establishing clear governance frameworks, compliance procedures, and third-party oversight ensures institutional accountability and regulatory adherence."
            risks={['Regulatory Non-Compliance', 'Third-Party Risks', 'Inadequate Oversight']}
          />
        </div>
      </section>
    </div>
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
