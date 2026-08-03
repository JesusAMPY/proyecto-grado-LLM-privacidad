'use client'

import { useState } from 'react'
import { Building2 } from 'lucide-react'
import { institutions } from '../data/mockData'

interface InstitutionFormProps {
  onNext: (institutionId: string) => void
}

export function InstitutionForm({ onNext }: InstitutionFormProps) {
  const [selectedId, setSelectedId] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedId) {
      onNext(selectedId)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">Información de la Institución</h1>
        </div>
        <p className="text-muted-foreground">
          Selecciona tu institución de educación superior para comenzar la evaluación de privacidad
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label className="block text-sm font-semibold">Institución *</label>
          <div className="grid gap-3">
            {institutions.map((institution) => (
              <label
                key={institution.id}
                className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  selectedId === institution.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <input
                  type="radio"
                  name="institution"
                  value={institution.id}
                  checked={selectedId === institution.id}
                  onChange={(e) => setSelectedId(e.target.value)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{institution.name}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                    <span>{institution.city}</span>
                    <span>{institution.type}</span>
                    <span>{institution.studentCount.toLocaleString()} estudiantes</span>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={!selectedId}
            className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Continuar al Cuestionario
          </button>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          Los datos recopilados se utilizarán únicamente para esta evaluación de privacidad
        </p>
      </form>
    </div>
  )
}
