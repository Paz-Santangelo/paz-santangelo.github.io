# 📚 Guía de Uso del Hook useSEO

## 🎯 ¿Qué hace este hook?

El hook `useSEO` te permite **actualizar dinámicamente** los meta tags de cada página de tu portfolio, mejorando el SEO específico de cada sección.

---

## 📦 Importación

```javascript
import useSEO from "../hooks/useSEO";
```

---

## 🔧 Uso Básico

```javascript
function MiComponente() {
  useSEO({
    title: "Título de la Página | Paz Santangelo",
    description: "Descripción específica de esta página...",
    keywords: "palabra1, palabra2, palabra3",
    url: "https://tu-dominio.com/ruta-de-la-pagina"
  });

  return (
    // ... tu JSX
  );
}
```

---

## 📄 Ejemplos por Página

### 🏠 Home.jsx

```javascript
import React from "react";
import useSEO from "../hooks/useSEO";
import Type from "./Type";
import { Container, Row, Col } from "react-bootstrap";
// ... otros imports

function Home() {
  useSEO({
    title: "Paz Santangelo | Desarrolladora Backend Java | Portfolio",
    description: "Portfolio profesional de Paz Santangelo - Desarrolladora Backend especializada en Java, Spring Boot, Microservicios con Spring Cloud y APIs REST. Conocimientos en React, Redux, Bootstrap y Material UI.",
    keywords: "Paz Santangelo, portfolio, desarrolladora backend, Java, Spring Boot, Microservicios, Spring Cloud, APIs REST",
    url: "https://tu-dominio.com/"
  });

  return (
    <section>
      {/* Tu código existente */}
    </section>
  );
}

export default Home;
```

---

### 👤 About.jsx

```javascript
import React from "react";
import useSEO from "../hooks/useSEO";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
// ... otros imports

function About() {
  useSEO({
    title: "Sobre Mí | Paz Santangelo - Desarrolladora Backend Java",
    description: "Conoce más sobre Paz Santangelo, desarrolladora Backend con experiencia avanzada en Java, Spring Boot, Microservicios con Spring Cloud y APIs REST. Conocimientos complementarios en React, Redux, Bootstrap y Material UI.",
    keywords: "Paz Santangelo, sobre mí, desarrolladora, Java, Spring Boot, backend, habilidades, experiencia, biografía",
    url: "https://tu-dominio.com/about"
  });

  return (
    <Container fluid className="about-section">
      {/* Tu código existente */}
    </Container>
  );
}

export default About;
```

---

### 💼 Experience.jsx

```javascript
import React from "react";
import useSEO from "../hooks/useSEO";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
// ... otros imports

function Experience() {
  useSEO({
    title: "Experiencia Profesional | Paz Santangelo",
    description: "Descubre la trayectoria profesional de Paz Santangelo como desarrolladora Backend Java. Experiencia en desarrollo con Spring Boot, arquitectura de Microservicios, Spring Cloud y APIs REST.",
    keywords: "experiencia, trayectoria profesional, desarrolladora backend, Paz Santangelo, Java, Spring Boot, trabajo, carrera",
    url: "https://tu-dominio.com/experience"
  });

  return (
    <Container fluid className="experience-section">
      {/* Tu código existente */}
    </Container>
  );
}

export default Experience;
```

---

### 🚀 Projects.jsx

```javascript
import React from "react";
import useSEO from "../hooks/useSEO";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
// ... otros imports

function Projects() {
  useSEO({
    title: "Proyectos | Paz Santangelo - Portfolio Backend Java",
    description: "Explora los proyectos de desarrollo backend de Paz Santangelo. APIs REST con Spring Boot, arquitectura de Microservicios con Spring Cloud y proyectos Java innovadores. Descubre mi trabajo y código.",
    keywords: "proyectos, portfolio, desarrollo backend, Java, Spring Boot, Microservicios, APIs REST, Paz Santangelo, código, GitHub",
    url: "https://tu-dominio.com/project"
  });

  return (
    <Container fluid className="project-section">
      {/* Tu código existente */}
    </Container>
  );
}

export default Projects;
```

---

### 📄 ResumeNew.jsx

```javascript
import React from "react";
import useSEO from "../hooks/useSEO";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// ... otros imports

function ResumeNew() {
  useSEO({
    title: "CV & Resume | Paz Santangelo - Desarrolladora Backend Java",
    description: "Consulta el CV y resume de Paz Santangelo. Habilidades técnicas, experiencia laboral, educación y certificaciones como desarrolladora Backend especializada en Java, Spring Boot y Microservicios.",
    keywords: "CV, resume, currículum, Paz Santangelo, desarrolladora, habilidades técnicas, educación, certificaciones",
    url: "https://tu-dominio.com/resume"
  });

  return (
    <div>
      {/* Tu código existente */}
    </div>
  );
}

export default ResumeNew;
```

---

## 🎨 Parámetros del Hook

| Parámetro | Tipo | Descripción | Ejemplo |
|-----------|------|-------------|---------|
| `title` | string | Título de la página (50-60 caracteres ideal) | "Sobre Mí \| Paz Santangelo" |
| `description` | string | Descripción para SEO (150-160 caracteres) | "Conoce más sobre Paz..." |
| `keywords` | string | Palabras clave separadas por comas | "React, Node.js, desarrolladora" |
| `url` | string | URL completa de la página | "https://tu-dominio.com/about" |
| `image` | string | URL de imagen (opcional, usa default si no se especifica) | "https://..." |

---

## ✨ Mejores Prácticas

### ✅ Hacer:
- **Títulos únicos** para cada página
- **Descripciones específicas** del contenido de la página
- **URLs correctas** que coincidan con la ruta actual
- **Keywords relevantes** al contenido de cada sección
- **Longitud adecuada**: Títulos 50-60 chars, Descripciones 150-160 chars

### ❌ Evitar:
- Usar el mismo título en todas las páginas
- Descripciones genéricas o muy cortas
- Keyword stuffing (exceso de palabras clave)
- Olvidar actualizar las URLs

---

## 🔍 Ejemplo Completo con Estructura

```javascript
import React from "react";
import useSEO from "../hooks/useSEO";
import { Container, Row, Col } from "react-bootstrap";

function MiPagina() {
  // 1. Llamar al hook ANTES del return
  useSEO({
    title: "Mi Página | Paz Santangelo",
    description: "Descripción específica de mi página con palabras clave relevantes.",
    keywords: "palabra1, palabra2, palabra3, Paz Santangelo",
    url: "https://tu-dominio.com/mi-pagina",
    // image: "https://..." // Opcional, si tienes imagen específica
  });

  // 2. El resto de tu lógica del componente
  const [state, setState] = React.useState(null);

  // 3. Return con tu JSX
  return (
    <Container>
      <Row>
        <Col>
          <h1>Mi Página</h1>
          {/* ... contenido ... */}
        </Col>
      </Row>
    </Container>
  );
}

export default MiPagina;
```

---

## 🛠️ Verificación

Después de implementar, verifica que funciona:

1. **En el navegador:**
   - Abre DevTools (F12)
   - Ve a la pestaña "Elements"
   - Busca `<head>` y verifica que los meta tags cambien al navegar

2. **Con herramientas:**
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 🎯 Tips Extra

### Para URLs dinámicas:
```javascript
import { useLocation } from "react-router-dom";

function MiComponente() {
  const location = useLocation();
  const baseUrl = "https://tu-dominio.com";
  
  useSEO({
    title: "Título...",
    description: "Descripción...",
    url: `${baseUrl}${location.pathname}`
  });
}
```

### Para imágenes específicas:
```javascript
useSEO({
  title: "Mi Proyecto",
  description: "...",
  url: "...",
  image: "https://cloudinary.com/imagen-del-proyecto.jpg" // Imagen específica
});
```

---

## ⚠️ Notas Importantes

1. **El hook NO reemplaza** los meta tags base del `index.html`, solo los actualiza dinámicamente
2. **Siempre actualiza** `https://tu-dominio.com/` con tu dominio real
3. **Usa el hook en componentes de PÁGINA**, no en componentes pequeños
4. **Los cambios son inmediatos** cuando navegas entre páginas

---

## 🚀 Implementación Rápida

**Pasos:**

1. Copia el código de ejemplo de la página correspondiente
2. Pégalo en tu componente, justo después de los imports
3. Personaliza: title, description, keywords, url
4. ¡Listo! El SEO de esa página está optimizado

---

**¿Dudas?** Revisa `SEO-SETUP.md` y `KEYWORDS-STRATEGY.md` para más información.
