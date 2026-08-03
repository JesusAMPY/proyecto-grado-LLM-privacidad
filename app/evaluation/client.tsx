'use client'

import { useState } from 'react'
import { HeroSection } from '@/components/HeroSection'
import { InstitutionForm } from './components/InstitutionForm'
import { QuestionWizard } from './components/QuestionWizard'
import { ResultsSection } from './components/ResultsSection'

type EvaluationStep = 'institution' | 'questionnaire' | 'results'

export default function EvaluationClient() {
  const [step, setStep] = useState<EvaluationStep>('institution')
  const [selectedInstitutionId, setSelectedInstitutionId] = useState('')

  const handleSelectInstitution = (institutionId: string) => {
    setSelectedInstitutionId(institutionId)
    setStep('questionnaire')
  }

  const handleCompleteQuestionnaire = () => {
    setStep('results')
  }

  const handleRestart = () => {
    setStep('institution')
    setSelectedInstitutionId('')
  }

  const handleBackToInstitution = () => {
    setStep('institution')
  }

  return (
    <main className="min-h-screen">
      <HeroSection
        title="Evaluación de Privacidad"
        subtitle="Herramienta de Diagnóstico de Riesgos LLM para Instituciones de Educación Superior"
        description="Evalúa el nivel de madurez en privacidad y seguridad de datos de tu institución en el uso de Modelos de Lenguaje de Gran Escala"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-12">
            {(['institution', 'questionnaire', 'results'] as EvaluationStep[]).map(
              (s, index) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step === s
                        ? 'bg-primary text-primary-foreground'
                        : (['institution', 'questionnaire', 'results'].indexOf(s) <
                            ['institution', 'questionnaire', 'results'].indexOf(step)
                          ? 'bg-primary/50 text-primary-foreground'
                          : 'bg-secondary text-muted-foreground')
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div
                    className={`h-1 flex-1 ml-2 ${
                      ['institution', 'questionnaire', 'results'].indexOf(s) <
                      ['institution', 'questionnaire', 'results'].indexOf(step)
                        ? 'bg-primary/50'
                        : 'bg-secondary'
                    } ${index === 2 ? 'hidden' : ''}`}
                  />
                </div>
              ),
            )}
          </div>

          {/* Step Labels */}
          <div className="flex justify-between mb-12 text-sm font-semibold">
            <div className={step === 'institution' ? 'text-primary' : 'text-muted-foreground'}>
              Institución
            </div>
            <div className={step === 'questionnaire' ? 'text-primary' : 'text-muted-foreground'}>
              Cuestionario
            </div>
            <div className={step === 'results' ? 'text-primary' : 'text-muted-foreground'}>
              Resultados
            </div>
          </div>

          {/* Content */}
          <div className="mb-12">
            {step === 'institution' && (
              <InstitutionForm onNext={handleSelectInstitution} />
            )}

            {step === 'questionnaire' && selectedInstitutionId && (
              <QuestionWizard onBack={handleBackToInstitution} onComplete={handleCompleteQuestionnaire} />
            )}

            {step === 'results' && selectedInstitutionId && (
              <ResultsSection institutionId={selectedInstitutionId} onRestart={handleRestart} />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
