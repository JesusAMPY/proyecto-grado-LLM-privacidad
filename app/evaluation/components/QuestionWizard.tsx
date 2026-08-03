'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft, HelpCircle } from 'lucide-react'
import { evaluationQuestions } from '../data/mockData'

interface QuestionWizardProps {
  onBack: () => void
  onComplete: (answers: Record<string, number>) => void
}

export function QuestionWizard({ onBack, onComplete }: QuestionWizardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})

  const currentQuestion = evaluationQuestions[currentIndex]
  const progress = ((currentIndex + 1) / evaluationQuestions.length) * 100

  const getScore = (optionIndex: number) => {
    // Scoring logic: first option = high score, decreasing
    const scoreMap: Record<number, number> = {
      0: 4,
      1: 2,
      2: 0,
      3: 1,
    }
    return scoreMap[optionIndex] || 0
  }

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: getScore(optionIndex),
    }
    setAnswers(newAnswers)

    // Auto-advance to next question
    if (currentIndex < evaluationQuestions.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 300)
    }
  }

  const handleNext = () => {
    if (currentIndex < evaluationQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleComplete = () => {
    if (Object.keys(answers).length === evaluationQuestions.length) {
      onComplete(answers)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Cuestionario de Privacidad</h1>
          <span className="text-sm font-semibold text-muted-foreground">
            {currentIndex + 1} de {evaluationQuestions.length}
          </span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 mb-8">
        <div className="flex gap-3 mb-6">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{currentQuestion.question}</h2>
            <p className="text-muted-foreground">{currentQuestion.description}</p>
            <div className="mt-2 px-3 py-1 bg-secondary rounded inline-block text-sm font-medium text-primary">
              {currentQuestion.category}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectOption(index)}
              className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                answers[currentQuestion.id] === getScore(index)
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50 hover:bg-secondary/30'
              }`}
            >
              <p className="font-medium">{option}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3 justify-between">
        <button
          onClick={onBack}
          className="px-6 py-2 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors"
        >
          Cambiar Institución
        </button>

        <div className="flex gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </button>

          {currentIndex === evaluationQuestions.length - 1 ? (
            <button
              onClick={handleComplete}
              disabled={Object.keys(answers).length !== evaluationQuestions.length}
              className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
            >
              Ver Resultados
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center mt-6">
        Responde todas las preguntas para completar la evaluación
      </p>
    </div>
  )
}
