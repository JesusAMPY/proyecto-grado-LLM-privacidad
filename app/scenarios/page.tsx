import { scenarios } from "@/lib/data/scenarios";
import { HeroSection } from "@/components/HeroSection";
import { Metadata } from "next";
import { BookOpen, Lightbulb, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de Estudio y Escenarios | Marco de Privacidad LLM",
  description:
    "Casos de estudio reales mostrando cómo las IES colombianas pueden implementar LLM protegiendo privacidad",
};

export default function ScenariosPage() {
  return (
    <>
      <HeroSection
        title="Casos de Estudio y Escenarios"
        subtitle="Escenarios reales de implementación de LLM en educación superior colombiana"
        description="Estos casos de estudio ilustran cómo las instituciones pueden navegar desafíos de privacidad al desplegar LLM en diferentes funciones institucionales."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Escenarios de Implementación
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            A continuación se presentan escenarios detallados mostrando cómo las
            instituciones de educación superior colombianas pueden implementar
            LLM en diferentes contextos mientras identifican y mitigan riesgos
            de privacidad. Cada escenario incluye el contexto institucional,
            desafíos específicos de privacidad, soluciones propuestas y
            lecciones clave aprendidas.
          </p>
        </section>

        {/* Scenarios */}
        <section className="space-y-12">
          {scenarios.map((scenario, index) => (
            <ScenarioCard
              key={scenario.id}
              scenario={scenario}
              index={index + 1}
            />
          ))}
        </section>

        {/* Cross-Cutting Lessons */}
        <section className="mt-20 pt-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-12">Lecciones Transversales</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <LessonCard
              icon={<BookOpen className="w-8 h-8" />}
              title="El Contexto Institucional es Importante"
              description="Los desafíos de privacidad y las soluciones difieren significativamente según el tamaño, recursos, prácticas de gobernanza de datos existentes y casos de uso específicos de la institución. Un enfoque de talla única no funcionará. Cada institución debe realizar una evaluación completa de impacto de privacidad alineada con su contexto específico."
            />
            <LessonCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="La Gobernanza Debe Preceder la Implementación"
              description="Apresurarse a desplegar LLM sin primero establecer marcos de gobernanza claros, políticas de datos y procedimientos de cumplimiento lleva a problemas de privacidad prevenibles. Invierte tiempo por adelantado en planificación, políticas e involucramiento de partes interesadas."
            />
            <LessonCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Minimización de Datos es Tu Mejor Aliado"
              description="En caso de duda, proporciona a los LLM menos datos, no más. Cuanto menos datos sensibles exponga a un modelo, menos riesgos de privacidad enfrenta. Siempre pregunta: '¿Puede hacerse este análisis con menos datos?'"
            />
            <LessonCard
              icon={<BookOpen className="w-8 h-8" />}
              title="La Supervisión Humana es Innegociable"
              description="Los LLM deben informar la toma de decisiones humana, no reemplazarla, especialmente para decisiones que afecten a individuos. Para decisiones de empleo, admisión o investigación, la revisión humana significativa es esencial ética y legalmente."
            />
            <LessonCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="La Transparencia Construye Confianza"
              description="Comunicarse claramente con partes interesadas (estudiantes, investigadores, empleados) sobre cuándo y cómo se usan los LLM en procesos institucionales mejora significativamente la credibilidad institucional y reduce preocupaciones."
            />
            <LessonCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Auditoría Regular es Esencial"
              description="Privacidad y seguridad no son implementaciones únicas. Auditorías regulares, evaluaciones de sesgo, revisiones de cumplimiento y pruebas de seguridad deben ser procesos continuos, no consideraciones posteriores."
            />
          </div>
        </section>

        {/* Decision Framework */}
        <section className="mt-20 pt-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-12">
            Marco de Decisión para Adopción de LLM
          </h2>

          <div className="bg-card border-2 border-primary p-8 rounded-lg mb-8">
            <p className="text-muted-foreground mb-6">
              Antes de implementar cualquier aplicación LLM en tu institución,
              considera estas preguntas clave:
            </p>
          </div>

          <div className="space-y-4">
            {decisionQuestions.map((question, idx) => (
              <DecisionQuestion key={idx} question={question} index={idx + 1} />
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="mt-20 pt-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-8">
            Cómo Comenzar en Tu Institución
          </h2>

          <div className="bg-secondary/50 p-8 rounded-lg space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  Formar un Comité de Gobernanza
                </h3>
                <p className="text-muted-foreground text-sm">
                  Reúne seguridad de TI, protección de datos, legal y líderes
                  departamentales relevantes para guiar decisiones de adopción
                  de LLM.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  Realizar Evaluación de Impacto de Privacidad (DPIA)
                </h3>
                <p className="text-muted-foreground text-sm">
                  Usa una plantilla DPIA estandarizada para documentar el
                  panorama actual de datos, identificar riesgos y planificar
                  mitigaciones específicas para tu institución.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  Mapea Tu Estado de Cumplimiento
                </h3>
                <p className="text-muted-foreground text-sm">
                  Usa este marco para evaluar cumplimiento con Ley 1581, CONPES
                  4144 y estándares internacionales. Identifica brechas y
                  prioriza remediación.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  Piloto con Casos de Uso de Bajo Riesgo
                </h3>
                <p className="text-muted-foreground text-sm">
                  Comienza con aplicaciones LLM que involucren datos personales
                  mínimos o información no sensible, aprende de la experiencia,
                  luego expande cuidadosamente.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  Establecer Monitoreo Continuo
                </h3>
                <p className="text-muted-foreground text-sm">
                  Configura auditorías regulares, revisiones de cumplimiento y
                  evaluaciones de privacidad para asegurar cumplimiento continuo
                  a medida que el uso de LLM y regulaciones evolucionan.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function ScenarioCard({
  scenario,
  index,
}: {
  scenario: (typeof scenarios)[0];
  index: number;
}) {
  return (
    <div className="p-8 rounded-lg border-2 border-border bg-card hover:border-primary transition-colors">
      <div className="mb-6">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
          Escenario {index}
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">
          {scenario.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          Tipo de Institución:{" "}
          <span className="font-semibold">{scenario.institution}</span>
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-lg">🏫</span> Contexto Institucional
          </h4>
          <p className="text-muted-foreground text-sm">{scenario.context}</p>
        </div>

        <div className="p-4 bg-secondary/50 rounded-lg">
          <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-lg">⚠️</span> Desafío de Privacidad
          </h4>
          <p className="text-muted-foreground text-sm">
            {scenario.privacyChallenge}
          </p>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
            <span className="text-lg">✓</span> Enfoque de Solución
          </h4>
          <p className="text-green-800 dark:text-green-200 text-sm">
            {scenario.solutionApproach}
          </p>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="text-lg">💡</span> Lecciones Clave Aprendidas
          </h4>
          <ul className="space-y-2">
            {scenario.keyLessons.map((lesson, idx) => (
              <li
                key={idx}
                className="text-sm text-muted-foreground flex gap-2"
              >
                <span className="text-primary flex-shrink-0">•</span>
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-2 text-sm">
            Applicable Standards:
          </h4>
          <div className="flex flex-wrap gap-2">
            {scenario.applicableStandards.map((standard, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
              >
                {standard}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LessonCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="font-bold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function DecisionQuestion({
  question,
  index,
}: {
  question: string;
  index: number;
}) {
  return (
    <div className="p-4 rounded-lg border border-border bg-card flex gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
        {index}
      </div>
      <div className="flex-1 pt-1">
        <p className="text-foreground font-medium text-sm">{question}</p>
      </div>
    </div>
  );
}

const decisionQuestions = [
  "¿A qué datos personales sensibles requeriría acceder esta aplicación LLM?",
  "¿Es esta decisión (si se utiliza para la toma de decisiones) lo suficientemente significativa como para requerir aprobación humana?",
  "¿Cuáles son los posibles impactos en la privacidad si el LLM comete errores o actúa de forma inesperada?",
  "¿Se puede lograr este caso de uso con datos anonimizados o minimizados?",
  "¿Han consentido los interesados (estudiantes, investigadores, empleados) en este uso?",
  "¿Qué mecanismos de auditoría y rendición de cuentas implementaremos?",
  "¿Cómo responderemos si ocurre una violación de privacidad o un incidente?",
  "¿Es el beneficio de esta aplicación LLM proporcional a sus riesgos de privacidad?",
];
