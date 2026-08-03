'use client'

import { Download, TrendingUp, AlertCircle } from 'lucide-react'
import { mockResults, overallScore, institutions } from '../data/mockData'

interface ResultsSectionProps {
  institutionId: string
  onRestart: () => void
}

export function ResultsSection({ institutionId, onRestart }: ResultsSectionProps) {
  const institution = institutions.find((i) => i.id === institutionId)

  const handleDownloadPDF = () => {
    // Mock PDF download
    const pdfContent = generatePDFContent()
    const element = document.createElement('a')
    const file = new Blob([pdfContent], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `Informe-Privacidad-LLM-${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const generatePDFContent = () => {
    return `
INFORME DE EVALUACIÓN DE PRIVACIDAD - LLM EN INSTITUCIONES DE EDUCACIÓN SUPERIOR
${'='.repeat(80)}

Institución: ${institution?.name}
Ciudad: ${institution?.city}
Tipo: ${institution?.type}
Estudiantes: ${institution?.studentCount.toLocaleString()}

Fecha de Evaluación: ${new Date().toLocaleDateString('es-CO')}

${'='.repeat(80)}

PUNTUACIÓN GENERAL
${'='.repeat(80)}

Puntuación Total: ${overallScore.total}/${overallScore.maxTotal}
Porcentaje: ${overallScore.percentage}%
Nivel de Riesgo: ${overallScore.level}

${'='.repeat(80)}

RESULTADOS POR CATEGORÍA
${'='.repeat(80)}

${mockResults
  .map(
    (result) => `
CATEGORÍA: ${result.category}
Score: ${result.score}/${result.maxScore} (${result.percentage}%)

RECOMENDACIONES:
${result.recommendations.map((rec, i) => `${i + 1}. ${rec}`).join('\n')}
`,
  )
  .join('\n')}

${'='.repeat(80)}

PRÓXIMOS PASOS
${'='.repeat(80)}

1. Revisar recomendaciones por categoría
2. Priorizar implementación de controles técnicos
3. Establecer plan de acción con cronograma
4. Realizar seguimiento trimestral

Generado por: Framework de Evaluación de Privacidad LLM
Universidad Nacional Abierta y a Distancia - UNAD
    `.trim()
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Resultados de la Evaluación</h1>
        <p className="text-muted-foreground">
          Evaluación completada para {institution?.name}
        </p>
      </div>

      {/* Overall Score Card */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-lg p-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2">PUNTUACIÓN GENERAL</p>
            <p className="text-5xl font-bold text-primary">
              {overallScore.total}/{overallScore.maxTotal}
            </p>
            <p className="text-lg font-semibold mt-2">{overallScore.percentage}%</p>
          </div>
          <div className="text-right">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${
              overallScore.percentage >= 70
                ? 'bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100'
                : overallScore.percentage >= 50
                  ? 'bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100'
                  : 'bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100'
            }`}>
              <AlertCircle className="w-5 h-5" />
              {overallScore.level}
            </div>
            <p className="text-sm text-muted-foreground mt-4">Nivel de Riesgo</p>
          </div>
        </div>
      </div>

      {/* Category Results */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold">Resultados por Categoría</h2>

        {mockResults.map((category) => (
          <div key={category.category} className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{category.category}</h3>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">
                  {category.score}/{category.maxScore}
                </p>
                <p className="text-sm text-muted-foreground">{category.percentage}%</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-secondary rounded-full h-2 mb-6">
              <div
                className={`h-2 rounded-full transition-all ${
                  category.percentage >= 70
                    ? 'bg-green-500'
                    : category.percentage >= 50
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                }`}
                style={{ width: `${category.percentage}%` }}
              />
            </div>

            {/* Recommendations */}
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Recomendaciones
              </h4>
              <ul className="space-y-2">
                {category.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {idx + 1}
                    </span>
                    <span className="text-muted-foreground pt-0.5">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          <Download className="w-5 h-5" />
          Descargar Informe PDF
        </button>

        <button
          onClick={onRestart}
          className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors"
        >
          Nueva Evaluación
        </button>
      </div>

      {/* Footer Info */}
      <div className="mt-8 p-6 bg-secondary/30 rounded-lg text-center text-sm text-muted-foreground">
        <p className="font-semibold mb-2">Próximos Pasos Recomendados</p>
        <p>
          1. Revisar recomendaciones por categoría • 2. Crear plan de acción • 3. Implementar
          controles • 4. Realizar seguimiento trimestral
        </p>
      </div>
    </div>
  )
}
