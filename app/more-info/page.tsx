import { Metadata } from 'next'
import Link from 'next/link'
import { Download, BookOpen, FileText, Users, Target, CheckCircle2 } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Más Información | Marco de Privacidad LLM',
  description: 'Acceso al documento maestro, metodología completa y recursos detallados del proyecto de grado',
}

export default function MoreInfoPage() {
  return (
    <>
      <HeroSection
        title="Más Información"
        subtitle="Acceso al documento maestro completo y recursos adicionales"
        description="Descarga la investigación completa, metodología detallada y hallazgos del proyecto de evaluación de riesgos de privacidad en LLM para educación superior colombiana."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Document Download */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border-2 border-primary/20">
            <div className="flex items-start gap-6">
              <FileText className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2 text-foreground">Documento Maestro del Proyecto</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Investigación completa del proyecto de grado: "Sistema de evaluación de riesgos de privacidad y fuga de datos en el uso de modelos de lenguaje de gran escala (LLM) en instituciones de educación superior en Medellín, Colombia"
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Autores:</strong> Jesús Antonio Acevedo Montoya, Daniel Felipe Villa Duarte, Juan Pablo Londoño Corrales
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Tutor:</strong> Daniel Andrés Guzmán Arevalo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Institución:</strong> Programa de Ingeniería de Sistemas - Universidad Nacional Abierta y a Distancia (UNAD)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Fecha:</strong> 12 de julio de 2026
                  </p>
                </div>
                <a
                  href="/documentos/Documento-Maestro.pdf"
                  download="Documento-Maestro.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Descargar Documento Maestro (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Document Contents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Contenido del Documento</h2>
          
          <div className="space-y-4">
            <details className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-foreground group-open:text-primary">
                <span>Resumen y Abstract</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-muted-foreground space-y-2">
                <p>
                  Este apartado presenta un resumen ejecutivo de la investigación en español e inglés, incluyendo palabras clave principales relacionadas con modelos de lenguaje, privacidad de datos, auditoría de privacidad e instituciones de educación superior.
                </p>
              </div>
            </details>

            <details className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-foreground group-open:text-primary">
                <span>Introducción y Contexto</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-muted-foreground space-y-2">
                <p>
                  Análisis de la adopción masiva de LLM en instituciones de educación superior colombianas, brecha de gobernanza de datos identificada y urgencia de marcos estructurados para gestión de riesgos de privacidad.
                </p>
                <ul className="list-disc list-inside space-y-1 mt-3">
                  <li>Contexto global y nacional de adopción de LLM</li>
                  <li>Regulaciones colombianas aplicables (Ley 1581, CONPES 4144)</li>
                  <li>Vulnerabilidades técnicas identificadas por OWASP</li>
                  <li>Brechas institucionales en gobernanza de datos</li>
                </ul>
              </div>
            </details>

            <details className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-foreground group-open:text-primary">
                <span>Planteamiento del Problema</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-muted-foreground space-y-2">
                <p>
                  Identificación detallada de la brecha de gobernanza en adopción de LLM en IES de Medellín, incluyendo análisis causal y árbol de problemas que muestra causas y efectos esperados.
                </p>
                <ul className="list-disc list-inside space-y-1 mt-3">
                  <li>Causas principales: desconocimiento, ausencia de gobernanza, adopción acelerada, vulnerabilidades técnicas</li>
                  <li>Efectos: exposición de datos personales, sanciones legales, pérdida de confianza institucional</li>
                  <li>Pregunta de investigación central</li>
                </ul>
              </div>
            </details>

            <details className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-foreground group-open:text-primary">
                <span>Justificación y Objetivos</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-muted-foreground space-y-2">
                <p>
                  Justificación de la investigación alineada con ODS 4 y 16, CONPES 4144, y marcos internacionales de IA responsable. Definición de objetivo general y 6 objetivos específicos.
                </p>
                <ul className="list-disc list-inside space-y-1 mt-3">
                  <li>Objetivo general: Diseñar framework de evaluación de riesgos de privacidad</li>
                  <li>Objetivos específicos por niveles taxonómicos de Bloom</li>
                </ul>
              </div>
            </details>

            <details className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-foreground group-open:text-primary">
                <span>Marco Referencial y Metodología</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-muted-foreground space-y-2">
                <p>
                  Marco conceptual, legal y tecnológico que sustenta la investigación. Metodología mixta secuencial explicativa con fases cuantitativas y cualitativas, seguida de desarrollo Scrum.
                </p>
                <ul className="list-disc list-inside space-y-1 mt-3">
                  <li>Fase cuantitativa: encuestas estructuradas en 3+ IES</li>
                  <li>Fase cualitativa: entrevistas semiestructuradas a stakeholders</li>
                  <li>Desarrollo: 4 sprints Scrum culminando en TRL5</li>
                </ul>
              </div>
            </details>

            <details className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-foreground group-open:text-primary">
                <span>Diseño de la Solución</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-muted-foreground space-y-2">
                <p>
                  Especificación técnica del framework: requerimientos funcionales y no funcionales, arquitectura del prototipo, tecnologías seleccionadas y esquema de implementación.
                </p>
              </div>
            </details>

            <details className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-foreground group-open:text-primary">
                <span>Cronograma y Recursos</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-muted-foreground space-y-2">
                <p>
                  Plan de ejecución detallado con 4 fases, duración de 6 meses, y especificación de recursos necesarios (tecnológicos, humanos, económicos).
                </p>
              </div>
            </details>

            <details className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-foreground group-open:text-primary">
                <span>Conclusiones y Referencias</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-muted-foreground space-y-2">
                <p>
                  Hallazgos principales, contribuciones académicas, recomendaciones de implementación e impacto esperado. Referencias bibliográficas completas de fuentes colombianas e internacionales.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Key Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Información Clave del Proyecto</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Nivel TRL Alcanzado</h3>
                  <p className="text-muted-foreground text-sm">
                    <strong>TRL 5 - Tecnología Validada en Ambiente Relevante</strong>
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Prototipo funcional desplegable demostrando viabilidad del marco en contexto real de IES colombianas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Marcos Regulatorios Cubiertos</h3>
                  <p className="text-muted-foreground text-sm">
                    Ley 1581 de 2012, CONPES 4144, OWASP Top 10, NIST Cybersecurity Framework, ISO/IEC 27701
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Usuarios Objetivo</h3>
                  <p className="text-muted-foreground text-sm">
                    Oficiales de Protección de Datos (DPOs), responsables de TI, académicos, directivos de IES colombianas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Entregables Principales</h3>
                  <p className="text-muted-foreground text-sm">
                    Framework validado, matriz de riesgos cuantificada, prototipo web, guías de implementación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Detalles de la Investigación</h2>
          
          <div className="bg-card border border-border rounded-lg p-8 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Metodología de Investigación</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Enfoque mixto de tipo secuencial explicativo combinando análisis cuantitativo y cualitativo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li><strong>Fase Cuantitativa:</strong> Encuestas estructuradas aplicadas en al menos 3 IES para medir nivel de exposición de datos</li>
                <li><strong>Fase Cualitativa:</strong> Entrevistas semiestructuradas a directivos TIC, oficiales de protección de datos y académicos</li>
                <li><strong>Análisis Técnico:</strong> Evaluación de vulnerabilidades según OWASP Top 10 para LLMs 2025</li>
                <li><strong>Desarrollo Ágil:</strong> Implementación en 4 sprints Scrum culminando en prototipo TRL5</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Hallazgos Principales</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Brecha crítica de gobernanza de datos en adopción de LLM por IES colombianas</li>
                <li>Desalineación entre adopción tecnológica acelerada y capacidad institucional de gestión de riesgos</li>
                <li>Marco de 4 pilares proporciona cobertura integral de consideraciones de privacidad</li>
                <li>Mapeo exitoso a regulaciones colombianas e internacionales de privacidad y seguridad</li>
                <li>Casos de estudio demuestran aplicabilidad práctica en contextos reales de IES</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Impacto Esperado</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Reducción significativa de riesgos de privacidad en adopción de LLM por IES</li>
                <li>Mayor cumplimiento con Ley 1581 de 2012 en sector educativo superior</li>
                <li>Empoderamiento de instituciones para tomar decisiones informadas sobre adopción de IA</li>
                <li>Base para investigaciones futuras en IA responsable en contexto latinoamericano</li>
                <li>Contribución a ecosistema regulatorio de IA en construcción en Colombia</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation Links */}
        <section className="mb-16 bg-secondary/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Explora Más del Proyecto</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/framework"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <BookOpen className="w-5 h-5 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Marco de 4 Pilares</div>
                <div className="text-sm text-muted-foreground">Estructura fundamental del sistema</div>
              </div>
            </Link>

            <Link
              href="/privacy-risks"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <Target className="w-5 h-5 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Riesgos de Privacidad</div>
                <div className="text-sm text-muted-foreground">Catálogo completo de amenazas</div>
              </div>
            </Link>

            <Link
              href="/compliance"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Cumplimiento Regulatorio</div>
                <div className="text-sm text-muted-foreground">Mapeo normativo detallado</div>
              </div>
            </Link>

            <Link
              href="/scenarios"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <Users className="w-5 h-5 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Casos de Estudio</div>
                <div className="text-sm text-muted-foreground">Escenarios reales de IES</div>
              </div>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-card border-2 border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">¿Preguntas sobre la Investigación?</h2>
          <p className="text-muted-foreground mb-6">
            Para consultas sobre el proyecto, metodología o resultados, contáctanos a través de los canales disponibles.
          </p>
          <div className="space-y-3">
            <p className="text-muted-foreground text-sm">
              <strong>Equipo de Investigación:</strong> Programa de Ingeniería de Sistemas - Universidad Nacional Abierta y a Distancia (UNAD)
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Ver Acerca de → 
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
