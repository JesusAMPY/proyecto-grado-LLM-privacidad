# 📦 Instrucciones para GitHub

## Estructura Recomendada en GitHub

```
proyecto-grado-LLM-privacidad/
├── app/                          # Código de la aplicación
├── components/                   # Componentes React
├── lib/                          # Lógica y datos
├── public/                       # Archivos estáticos
├── doc/                          # CARPETA DOCUMENTACIÓN (NUEVA)
│   ├── DOCUMENTO_MAESTRO.md     # Documento académico completo
│   ├── DOCUMENTO_MAESTRO.pdf    # PDF del documento (exportar)
│   ├── README.md                # Guía de documentación
│   ├── INSTRUCCIONES_GITHUB.md  # Este archivo
│   └── evidencias/              # Screenshots y pruebas
│       ├── 01_landing_page.png
│       ├── 02_framework_page.png
│       ├── 03_risks_page.png
│       ├── 04_compliance_page.png
│       ├── 05_scenarios_page.png
│       ├── 06_prototype_page.png
│       ├── 07_resources_page.png
│       ├── 08_about_page.png
│       ├── mobile_responsive.png
│       └── dashboard_interactive.png
├── README.md                     # README principal mejorado
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── .gitignore
```

---

## 🎯 Contenido de la Carpeta `/doc`

### Archivos Obligatorios

#### 1. `DOCUMENTO_MAESTRO.md`
- Documento académico completo del proyecto
- Todas las secciones especificadas
- Listo para convertir a PDF
- Referencias bibliográficas completas

#### 2. `DOCUMENTO_MAESTRO.pdf`
- Versión PDF del documento maestro
- Formatted para impresión
- Incluye tabla de contenidos
- Márgenes y estilos profesionales

#### 3. `README.md`
- Guía de la documentación
- Explicación de cada sección
- Instrucciones de conversión a PDF
- Estructura de presentación

#### 4. `INSTRUCCIONES_GITHUB.md`
- Este archivo
- Guía de estructura del repositorio
- Instrucciones de colaboración

### Carpeta `/doc/evidencias/`

Debe contener screenshots de:

| Archivo | Descripción | Dimensiones |
|---------|-------------|-------------|
| `01_landing_page.png` | Página de inicio completa | 1920x1080 |
| `02_framework_page.png` | Página del marco de 4 pilares | 1920x1080 |
| `03_risks_page.png` | Catálogo de riesgos interactivo | 1920x1080 |
| `04_compliance_page.png` | Mapeo de cumplimiento | 1920x1080 |
| `05_scenarios_page.png` | Casos de estudio | 1920x1080 |
| `06_prototype_page.png` | Dashboards del prototipo | 1920x1080 |
| `07_resources_page.png` | Recursos y referencias | 1920x1080 |
| `08_about_page.png` | Acerca del proyecto | 1920x1080 |
| `mobile_responsive.png` | Vista móvil con menú | 375x812 |
| `dashboard_interactive.png` | Dashboard interactivo ejemplo | 1920x1080 |

---

## 📝 Cómo Capturar Screenshots

### Opción 1: Usando Chrome DevTools
```bash
1. Abrir http://localhost:3000
2. Presionar F12 (DevTools)
3. Ctrl+Shift+P (Command Palette)
4. Escribir "Screenshot"
5. Seleccionar "Capture full page screenshot"
6. Guardar en doc/evidencias/
```

### Opción 2: Usando Python
```python
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("http://localhost:3000")

# Screenshot de página completa
driver.save_screenshot("doc/evidencias/01_landing_page.png")

# Para vista móvil
driver.set_window_size(375, 812)
driver.save_screenshot("doc/evidencias/mobile_responsive.png")

driver.quit()
```

### Opción 3: Usando Playwright
```bash
npm install -D @playwright/test
```

```javascript
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'doc/evidencias/01_landing_page.png' });
  
  // Vista móvil
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: 'doc/evidencias/mobile_responsive.png' });
  
  await browser.close();
})();
```

---

## 🔄 Flujo de Actualización Recomendado

### 1. Guardar Documentos Localmente

```bash
# Clonar repositorio
git clone https://github.com/JesusAMPY/proyecto-grado-LLM-privacidad.git
cd proyecto-grado-LLM-privacidad

# Crear rama para documentación
git checkout -b docs/actualizacion-julio-2026
```

### 2. Agregar Documentación

```bash
# Carpeta ya existe, agregar archivos
cp DOCUMENTO_MAESTRO.md doc/
cp DOCUMENTO_MAESTRO.pdf doc/
cp -r evidencias/* doc/evidencias/
```

### 3. Verificar Cambios

```bash
# Ver estado
git status

# Ver diferencias
git diff doc/
```

### 4. Commit y Push

```bash
# Agregar cambios
git add doc/

# Commit con mensaje descriptivo
git commit -m "docs: Agregar documentación maestro y evidencias del prototipo TRL 5"

# Push a rama
git push origin docs/actualizacion-julio-2026
```

### 5. Pull Request

- Crear PR desde rama `docs/actualizacion-julio-2026` a `main`
- Título: "Docs: Documentación Maestro y Evidencias - TRL 5"
- Descripción: Incluir resumen de cambios
- Esperar revisión y merge

---

## 📋 Checklist para README Principal

El README.md en raíz debe incluir:

- ✅ Título y descripción clara
- ✅ Autores y afiliación institucional
- ✅ Stack tecnológico completo
- ✅ Descripción del prototipo
- ✅ Características principales
- ✅ Nivel TRL alcanzado
- ✅ Cómo ejecutar localmente
- ✅ Cómo desplegar a producción
- ✅ Referencias bibliográficas
- ✅ Estructura del proyecto
- ✅ Información de contacto
- ✅ Licencia

---

## 🎓 Información Clave para GitHub

### Descripción del Repositorio
```
Framework integral para evaluación de riesgos de privacidad 
en adopción de LLM en educación superior colombiana. 
Alineado con Ley 1581, CONPES 4144, OWASP, NIST e ISO/IEC 27701.
TRL 5 - Validación en ambiente relevante.
```

### Topics/Etiquetas
```
llm
privacy
data-protection
framework
education
colombia
cybersecurity
ai-governance
ley-1581
conpes-4144
```

### Keywords para SEO
```
LLM Privacy Framework
Educación Superior Colombia
Protección de Datos
Marco de Privacidad
Modelos de Lenguaje Grande
Compliance
Privacidad por Diseño
```

---

## 🔒 Configuración Recomendada de GitHub

### 1. Branch Protection Rules

Proteger rama `main`:
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Dismiss stale pull request approvals

### 2. Colaboradores Sugeridos

- `@JesusAMPY` (Admin)
- Directores de proyecto
- Revisores académicos

### 3. Configuración de Seguridad

- ✅ Enable vulnerability scanning
- ✅ Enable secret scanning
- ✅ Enable code scanning with CodeQL

---

## 📚 Archivos Complementarios

### .gitignore (Asegurar que incluya)
```
node_modules/
.next/
.env.local
.env.*.local
*.pdf.tmp
```

### CONTRIBUTING.md (Crear si hay colaboradores)
```markdown
# Cómo Contribuir

1. Fork el repositorio
2. Crear rama (`git checkout -b feature/nombre`)
3. Commit cambios (`git commit -m 'Agregar feature'`)
4. Push a rama (`git push origin feature/nombre`)
5. Abrir Pull Request
```

### LICENSE (MIT recomendado)
```
MIT License

Copyright (c) 2026 Antonio Amp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, and/or sublicense...
```

---

## 🚀 Próximos Pasos Después de Push

### 1. Actualizar GitHub Pages (Opcional)
```bash
# Si se desea un sitio web de documentación
git checkout --orphan gh-pages
git add doc/README.md
git commit -m "Create GitHub Pages"
git push origin gh-pages
```

### 2. Crear Releases
```bash
# Taggear versión
git tag -a v1.0.0 -m "Release 1.0.0 - TRL 5 Validation"
git push origin v1.0.0
```

### 3. Crear Discussiones
En GitHub, crear discusiones para:
- Validación de usuarios
- Feedback de IES
- Propuestas de mejora

---

## 📊 Métricas en GitHub

### Esperadas
- **Stars:** 10-50 (académico)
- **Forks:** 5-15 (colaboraciones)
- **Issues:** 5-20 (mejoras propuestas)
- **Discussions:** 10-30 (validación)

### Monitorear
- Tendencia de commits
- Actividad de colaboradores
- Feedback de comunidad

---

## 📞 Contacto y Soporte

**Mantener actualizado:**
- Email: antonio.amp@universitario.edu.co
- GitHub Issues: Para reportes y mejoras
- Discussions: Para preguntas y validación

---

## ✅ Checklist Final

Antes de hacer commit:
- [ ] Documentos están en `/doc/`
- [ ] Evidencias están en `/doc/evidencias/`
- [ ] README principal está actualizado
- [ ] Todos los archivos están en español
- [ ] URLs de GitHub son correctas
- [ ] Información de contacto actualizada
- [ ] Licencia incluida
- [ ] .gitignore está configurado
- [ ] Build compila sin errores
- [ ] Todos los links internos funcionan

---

**Última actualización:** Julio 2026  
**Versión:** 1.0.0  
**Estado:** Listo para push a GitHub
