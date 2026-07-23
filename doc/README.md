# 📚 Documentación del Proyecto

Esta carpeta contiene toda la documentación académica y evidencias del proyecto **"Marco de Privacidad para Adopción de Modelos de Lenguaje Grande en Instituciones de Educación Superior Colombianas"**.

## 📄 Contenido

### 1. Documento Maestro
- **Archivo:** `DOCUMENTO_MAESTRO.md`
- **Descripción:** Documento académico completo del proyecto incluyendo:
  - Introducción y contexto
  - Marco conceptual
  - Tecnologías utilizadas
  - Descripción del prototipo
  - Evidencias del prototipo
  - Nivel TRL alcanzado (TRL 5)
  - Resultados obtenidos
  - Conclusiones y recomendaciones
  - Referencias bibliográficas

**Cómo usar:**
- Este documento puede ser convertido a PDF para presentaciones formales
- Sirve como base para el documento final de grado
- Referencia completa del proyecto para stakeholders

### 2. Evidencias del Funcionamiento
- **Carpeta:** `evidencias/`
- **Contenido:**
  - Screenshots de todas las páginas principales
  - Demostraciones de funcionalidad interactiva
  - Capturas de dashboards y visualizaciones
  - Evidencia de diseño responsivo (móvil, tablet, desktop)
  - Pruebas de navegación

**Cómo usar:**
- Incluir en presentaciones finales
- Adjuntar en documento de grado
- Demostrar durante defensa oral

---

## 🚀 Estructura de Carpetas

```
doc/
├── README.md                    # Este archivo
├── DOCUMENTO_MAESTRO.md         # Documento académico completo
└── evidencias/                  # Screenshots y pruebas
    ├── 01_landing_page.png
    ├── 02_framework_page.png
    ├── 03_risks_page.png
    ├── 04_compliance_page.png
    ├── 05_scenarios_page.png
    ├── 06_prototype_page.png
    ├── 07_resources_page.png
    ├── 08_about_page.png
    ├── mobile_responsive.png
    └── dashboard_examples.png
```

---

## 📋 Secciones del Documento Maestro

### 1. Introducción (Sección 1)
- Contexto y motivación
- Problema de investigación
- Objetivos general y específicos

### 2. Marco Conceptual (Sección 2)
- Definición de LLM
- Clasificación de riesgos de privacidad
- Explicación de los 4 pilares

### 3. Tecnologías (Sección 3)
- Stack tecnológico completo
- Justificación de cada tecnología
- Beneficios técnicos

### 4. Descripción del Prototipo (Sección 4)
- Arquitectura de la aplicación
- Descripción de 8 páginas principales
- Componentes reutilizables
- Características de diseño

### 5. Evidencias (Sección 5)
- Checklist de páginas funcionales
- Métricas de cobertura
- Referencia a capturas de pantalla

### 6. Nivel TRL (Sección 6)
- Definición de TRL 5
- Evidencia de cumplimiento
- Justificación detallada
- Camino a TRL 6-7

### 7. Resultados (Sección 7)
- Entregables técnicos
- Entregables académicos
- Cobertura de alcance
- Indicadores de éxito

### 8. Conclusiones (Sección 8)
- Hallazgos principales
- Contribuciones al conocimiento
- Recomendaciones de implementación
- Impacto esperado

### 9. Referencias (Sección 9)
- Regulación colombiana
- Estándares internacionales
- Investigación académica
- Privacidad y seguridad
- Recursos técnicos

### 10. Anexos (Sección 10)
- Glosario de términos
- Matrices y tablas
- Guías de implementación

---

## 📸 Sobre las Evidencias

Las capturas de pantalla en la carpeta `/evidencias/` demuestran:

1. **Funcionalidad Completa**
   - Todas las 8 páginas son navegables
   - Menús y links funcionan correctamente
   - Formularios y filtros son interactivos

2. **Diseño Visual**
   - Paleta de colores vibrante (rojo, azul, naranja)
   - Tipografía profesional y legible
   - Espaciado y alineación consistentes

3. **Responsividad**
   - Vista desktop optimizada
   - Vista tablet funcional
   - Vista móvil completa con menú hamburguesa

4. **Contenido Multimedio**
   - 6 dashboards interactivos
   - 6 imágenes de mockups
   - Diagramas de flujo
   - Cronogramas

5. **Accesibilidad**
   - Alto contraste de colores
   - Navegación clara y lógica
   - Textos legibles
   - Iconos descriptivos

---

## 🔄 Cómo Generar el PDF

### Opción 1: Usando Pandoc
```bash
pandoc DOCUMENTO_MAESTRO.md -o DOCUMENTO_MAESTRO.pdf \
  --from markdown \
  --pdf-engine=xelatex \
  --variable mainfont="Calibri" \
  --table-of-contents
```

### Opción 2: Usando Google Docs
1. Copiar contenido de `DOCUMENTO_MAESTRO.md`
2. Pegar en Google Docs
3. Formatear según requerimientos institucionales
4. Descargar como PDF

### Opción 3: Usando GitHub
1. Navegar a `doc/DOCUMENTO_MAESTRO.md` en GitHub
2. Usar extensión "Print to PDF" del navegador
3. Ajustar márgenes y estilos

---

## 📊 Estructura de Presentación

Para defensa oral, se recomienda:

1. **Portada** (1 minuto)
   - Título del proyecto
   - Autor
   - Institución
   - Fecha

2. **Contexto y Problema** (2 minutos)
   - Por qué LLM en IES
   - Riesgos de privacidad identificados
   - Brecha en el mercado

3. **Solución Propuesta** (3 minutos)
   - Marco de 4 pilares
   - Cubierta regulatoria
   - Diferenciadores

4. **Prototipo Demo** (5 minutos)
   - Navegación por páginas clave
   - Demostración de interactividad
   - Dashboards explicados

5. **Resultados y TRL** (2 minutos)
   - Entregables completados
   - Métricas de éxito
   - Justificación de TRL 5

6. **Impacto y Conclusiones** (2 minutos)
   - Beneficios para IES
   - Próximos pasos
   - Preguntas

**Tiempo Total: ~15 minutos**

---

## 👥 Información de Contacto

**Autor del Proyecto:**
- **Nombre:** Antonio Amp
- **Email:** antonio.amp@universitario.edu.co
- **GitHub:** [@JesusAMPY](https://github.com/JesusAMPY)

**Institución:**
- Programa de Grado - Ingeniería de Sistemas
- Grupo de Investigación en Seguridad Informática y Privacidad

---

## 📝 Notas Importantes

1. **Actualización Documento:** El documento maestro debe actualizarse con:
   - Feedback de validación con IES
   - Resultados de pruebas de usuario
   - Métricas finales de implementación

2. **Control de Versiones:** 
   - Versión actual: 1.0.0
   - Próxima versión: 1.1.0 (con validación de usuarios)

3. **Disponibilidad:**
   - Documento es público y puede ser compartido
   - Está bajo licencia MIT
   - Puede ser utilizado por investigadores y educadores

4. **Citación Académica:**
   ```
   Amp, A. (2026). Marco de Privacidad para Adopción de Modelos 
   de Lenguaje Grande en Instituciones de Educación Superior 
   Colombianas. Proyecto de Grado, Ingeniería de Sistemas.
   ```

---

**Última actualización:** Julio 2026  
**Estado:** Completo - TRL 5  
**Próxima revisión:** Enero 2027
