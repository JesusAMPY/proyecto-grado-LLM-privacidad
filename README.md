# 🛡️ Framework de Evaluación de Riesgos de Privacidad en LLM (IES Medellín)

![Next.js](https://img.shields.io/badge/Next.js-14%2B-black?style=for-the-badge&logo=next.js&logoColor=white)
![v0.app](https://img.shields.io/badge/Developed%20with-v0.app-000000?style=for-the-badge&logo=v0&logoColor=white)
![TRL Level](https://img.shields.io/badge/TRL-5-emerald?style=for-the-badge)
![Compliance](https://img.shields.io/badge/Ley_1581-Colombia-blue?style=for-the-badge)
![Security Standard](https://img.shields.io/badge/OWASP-LLM_Top_10-red?style=for-the-badge)
![Framework](https://img.shields.io/badge/NIST-AI_RMF_1.0-purple?style=for-the-badge)

> Prototipo funcional (TRL5) para la auditoría, cuantificación de riesgos de privacidad y fuga de datos en la adopción de Modelos de Lenguaje de Gran Escala (LLM) dentro de las Instituciones de Educación Superior (IES) de Medellín.

---

## 📌 Vista Previa del Sistema
TBD

---

## 🚀 Resumen del Proyecto

La adopción masiva de **LLMs (ChatGPT, Claude, Gemini)** en los procesos administrativos y académicos de las IES de Medellín ha generado una brecha crítica en la **gobernanza de datos**. La mayoría de las herramientas se integran sin un marco formal de evaluación de riesgos alineado con la **Ley 1581 de 2012** y el **Decreto 1377 de 2013**.

Este proyecto aplicado proporciona una solución integral que:
1. **Evalúa** el nivel de exposición de datos personales y sensibles mediante encuestas cuantitativas y entrevistas a DPOs / Directores TIC.
2. **Parametriza** las vulnerabilidades técnicas críticas identificadas por **OWASP 2025** (Prompt Injection, Data Disclosure, Excessive Agency, etc.).
3. **Calcula** de manera automatizada la severidad del riesgo operacional e institucional.
4. **Genera** recomendaciones de mitigación alineadas con el **NIST AI RMF 1.0** y el **CONPES 4144**.

---

## 📐 Matriz Cuantitativa de Severidad

El cálculo automatizado de riesgo dentro de la plataforma utiliza la siguiente fórmula:

$$Riesgo = Impacto \times Probabilidad$$

| Nivel de Riesgo | Rango ($R$) | Acción Requerida |
| :--- | :---: | :--- |
| 🔴 **Crítico** | $16 - 25$ | Suspensión inmediata del flujo e implementación de anonimización estricta. |
| 🟠 **Alto** | $10 - 15$ | Controles de acceso, acuerdos de confidencialidad y revisión contractual. |
| 🟡 **Medio** | $5 - 9$ | Políticas institucionales de uso aceptable y capacitación docente. |
| 🟢 **Bajo** | $1 - 4$ | Monitoreo periódico y auditorías de seguimiento. |

---

## 💻 Tech Stack & Herramientas

* **Framework Web:** [Next.js](https://nextjs.org/) (App Router, React Server Components)
* **Diseño & UI:** [Tailwind CSS](https://tailwindcss.com/) + Components generados con [v0.app](https://v0.app)
* **Iconografía & Gráficos:** [Lucide Icons](https://lucide.dev/) & Recharts
* **Despliegue & Prototipado:** Vercel / Test Sandbox (Nivel de Madurez TRL5)

---

## 🔄 Metodología de Desarrollo (Scrum - 4 Sprints)

```mermaid
graph LR
    A[Sprint 1: Mapeo & Encuestas] --> B[Sprint 2: Entrevistas & OWASP]
    B --> C[Sprint 3: Motor de Riesgo R=I*P]
    C --> D[Sprint 4: Validación TRL5 & NIST]
