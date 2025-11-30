# 🚀 GUÍA PASO A PASO - DEPLOY TU PORTFOLIO

## 📌 INFORMACIÓN DE TU PROYECTO

- **Repositorio:** https://github.com/Paz-Santangelo/portfolio-paz
- **Usuario GitHub:** Paz-Santangelo
- **Nombre del repositorio:** portfolio-paz

---

## ✅ PASO 1: VERIFICAR QUE TODO ESTÉ LISTO

Ya tienes instalado `gh-pages` ✅  
Ya tienes configurado `vite.config.js` ✅  
Ya tienes los scripts en `package.json` ✅

---

## 🚀 PASO 2: HACER EL PRIMER DEPLOY

### 2.1 Asegúrate de que todo esté guardado y funcionando:

```powershell
# Verifica el estado de git
git status
```

### 2.2 Si hay cambios, haz commit:

```powershell
# Agrega todos los archivos
git add .

# Haz commit con un mensaje descriptivo
git commit -m "Optimizar SEO y preparar para deploy en GitHub Pages"

# Sube a GitHub
git push origin main
```

### 2.3 ¡DEPLOY! 🎉

```powershell
npm run deploy
```

Este comando:
- Construye tu proyecto optimizado (`npm run build`)
- Crea/actualiza la rama `gh-pages`
- Sube el contenido a GitHub Pages

⏱️ **Espera 1-2 minutos** mientras se sube.

---

## 🌐 PASO 3: ACTIVAR GITHUB PAGES

### 3.1 Ve a la configuración de tu repositorio:

🔗 https://github.com/Paz-Santangelo/portfolio-paz/settings/pages

### 3.2 Configura GitHub Pages:

1. En **"Source"** (Fuente):
   - Selecciona: `Branch: gh-pages`
   - Carpeta: `/ (root)`

2. Click en **"Save"** (Guardar)

3. ✅ Espera que aparezca el mensaje:
   > "Your site is live at https://paz-santangelo.github.io/portfolio-paz/"

⏱️ **Espera 2-5 minutos** para que el sitio esté disponible.

---

## 📝 PASO 4: ACTUALIZAR TUS URLs

Ahora que sabes tu URL final: **https://paz-santangelo.github.io/portfolio-paz/**

### 4.1 Actualizar `index.html`:

Abre: `c:\Users\Lenovo\OneDrive\Escritorio\Programacion\CURSOS\PARA PORTFOLIO\portfolio-paz\index.html`

**Busca estas líneas y reemplaza:**

```html
<!-- Línea ~20 -->
<link rel="canonical" href="https://tu-dominio.com/" />

<!-- Línea ~24 -->
<meta property="og:url" content="https://tu-dominio.com/" />

<!-- Línea ~33 -->
<meta name="twitter:url" content="https://tu-dominio.com/" />

<!-- Línea ~52 -->
"url": "https://tu-dominio.com",
```

**Reemplaza TODAS con:**
```
https://paz-santangelo.github.io/portfolio-paz/
```

### 4.2 Actualizar tus redes sociales en `index.html`:

**Busca la línea ~50-56 (JSON-LD):**

```json
"sameAs": [
  "https://github.com/tu-usuario",
  "https://linkedin.com/in/tu-usuario"
]
```

**Reemplaza con TUS URLs reales:**

```json
"sameAs": [
  "https://github.com/Paz-Santangelo",
  "https://linkedin.com/in/TU-USUARIO-LINKEDIN"
]
```

⚠️ **IMPORTANTE:** Cambia `TU-USUARIO-LINKEDIN` por tu usuario real de LinkedIn.

### 4.3 Actualizar `sitemap.xml`:

Abre: `c:\Users\Lenovo\OneDrive\Escritorio\Programacion\CURSOS\PARA PORTFOLIO\portfolio-paz\public\sitemap.xml`

**Busca y reemplaza TODAS las apariciones de:**
```
https://tu-dominio.com/
```

**Por:**
```
https://paz-santangelo.github.io/portfolio-paz/
```

Debería quedar así:
```xml
<loc>https://paz-santangelo.github.io/portfolio-paz/</loc>
<loc>https://paz-santangelo.github.io/portfolio-paz/about</loc>
<loc>https://paz-santangelo.github.io/portfolio-paz/experience</loc>
<loc>https://paz-santangelo.github.io/portfolio-paz/project</loc>
<loc>https://paz-santangelo.github.io/portfolio-paz/resume</loc>
```

### 4.4 Actualizar `robots.txt`:

Abre: `c:\Users\Lenovo\OneDrive\Escritorio\Programacion\CURSOS\PARA PORTFOLIO\portfolio-paz\public\robots.txt`

**Busca:**
```
Sitemap: https://tu-dominio.com/sitemap.xml
```

**Reemplaza por:**
```
Sitemap: https://paz-santangelo.github.io/portfolio-paz/sitemap.xml
```

---

## 🔄 PASO 5: REDEPLOY CON LAS URLs ACTUALIZADAS

```powershell
# 1. Guarda todos los archivos que editaste
# 2. Haz commit de los cambios
git add .
git commit -m "Actualizar URLs y redes sociales"
git push origin main

# 3. Redeploy
npm run deploy
```

⏱️ Espera 1-2 minutos.

---

## ✅ PASO 6: VERIFICAR QUE TODO FUNCIONA

### 6.1 Visita tu portfolio:

🔗 https://paz-santangelo.github.io/portfolio-paz/

### 6.2 Verifica:

- ✅ La página carga correctamente
- ✅ Puedes navegar entre secciones (Home, About, Projects, etc.)
- ✅ Las imágenes se ven
- ✅ No hay errores en la consola (F12 → Console)

### 6.3 Prueba compartir en redes sociales:

**Facebook/LinkedIn:**
1. Ve a: https://developers.facebook.com/tools/debug/
2. Pega tu URL: `https://paz-santangelo.github.io/portfolio-paz/`
3. Click en "Debug"
4. Verifica que aparezca:
   - ✅ Título correcto
   - ✅ Descripción correcta
   - ✅ Imagen (tu logo)

**LinkedIn:**
1. Ve a: https://www.linkedin.com/post-inspector/
2. Pega tu URL
3. Click en "Inspect"
4. Verifica el preview

---

## 🔍 PASO 7: REGISTRAR EN GOOGLE SEARCH CONSOLE

### 7.1 Ir a Search Console:

🔗 https://search.google.com/search-console

### 7.2 Agregar propiedad:

1. Click en **"Agregar propiedad"**
2. Selecciona **"Prefijo de URL"**
3. Ingresa: `https://paz-santangelo.github.io/portfolio-paz/`
4. Click **"Continuar"**

### 7.3 Verificar propiedad:

**Método HTML (más fácil):**

1. Descarga el archivo de verificación que te da Google
2. Colócalo en la carpeta `public/` de tu proyecto
3. Redeploy:
   ```powershell
   npm run deploy
   ```
4. En Search Console, click **"Verificar"**

### 7.4 Enviar sitemap:

1. En Search Console, ve a **"Sitemaps"** (menú lateral)
2. En "Agregar un sitemap nuevo" escribe: `sitemap.xml`
3. Click **"Enviar"**

✅ ¡Listo! Google empezará a indexar tu sitio.

---

## 🔄 PASO 8: WORKFLOW PARA FUTURAS ACTUALIZACIONES

Cada vez que hagas cambios en tu portfolio:

```powershell
# 1. Hacer tus cambios en el código

# 2. Probar localmente
npm run dev
# Ctrl + C para detener

# 3. Si está todo bien, commit
git add .
git commit -m "Descripción de lo que cambiaste"
git push origin main

# 4. Deploy
npm run deploy
```

⏱️ Tus cambios estarán online en 1-2 minutos.

---

## 📊 RESUMEN DE COMANDOS PRINCIPALES

```powershell
# Deploy inicial o actualización
npm run deploy

# Probar localmente antes de deploy
npm run dev

# Git workflow
git add .
git commit -m "mensaje"
git push origin main
```

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### ❌ Error al hacer `npm run deploy`

```powershell
# Intenta limpiar la caché
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force dist
npm install
npm run deploy
```

### ❌ La página muestra 404

1. Verifica que GitHub Pages esté activado en `gh-pages` branch
2. Espera 5 minutos
3. Limpia caché del navegador (Ctrl + Shift + R)
4. Verifica que `base` en `vite.config.js` sea: `/portfolio-paz/`

### ❌ CSS/JS no cargan

- Verifica que `base: '/portfolio-paz/'` esté en `vite.config.js`
- Redeploy: `npm run deploy`

### ❌ Rutas no funcionan al navegar

- Ya tienes el archivo `404.html` creado ✅
- Si persiste, redeploy: `npm run deploy`

---

## ✅ CHECKLIST FINAL

Antes de dar por terminado:

- [ ] Deploy realizado con `npm run deploy`
- [ ] GitHub Pages activado en Settings
- [ ] Portfolio visible en: https://paz-santangelo.github.io/portfolio-paz/
- [ ] URLs actualizadas en `index.html`
- [ ] Usuario LinkedIn actualizado en `index.html`
- [ ] URLs actualizadas en `sitemap.xml`
- [ ] URL actualizada en `robots.txt`
- [ ] Redeploy después de actualizar URLs
- [ ] Navegación funciona correctamente
- [ ] Meta tags verificados con Facebook Debugger
- [ ] Registrado en Google Search Console
- [ ] Sitemap enviado a Google

---

## 🎉 ¡FELICITACIONES!

Tu portfolio está online y optimizado para SEO. En las próximas semanas:

- Google empezará a indexar tu sitio
- Aparecerás en búsquedas de "Paz Santangelo"
- Los previews en redes sociales se verán profesionales

**URL de tu portfolio:** https://paz-santangelo.github.io/portfolio-paz/

---

**¿Necesitas ayuda?** Consulta:
- `DEPLOY-GITHUB-PAGES.md` → Guía completa de deploy
- `DEPLOY-QUICK.md` → Comandos rápidos
- `SEO-CHECKLIST.md` → Lista de tareas SEO

**Última actualización:** Enero 2025
