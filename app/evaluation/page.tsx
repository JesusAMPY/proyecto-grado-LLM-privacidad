import { Metadata } from 'next'
import EvaluationClient from './client'

export const metadata: Metadata = {
  title: 'Evaluación de Privacidad - Marco LLM',
  description:
    'Herramienta de evaluación de riesgos de privacidad para LLMs en instituciones de educación superior',
}

export default function EvaluationPage() {
  return <EvaluationClient />
}
