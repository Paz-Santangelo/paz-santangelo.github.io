# 🚀 Guía de Deploy en GitHub Pages - Portfolio Paz Santangelo

## ✅ Ventajas de GitHub Pages

- ✅ **100% Gratis** (hosting + dominio .github.io)
- ✅ **Rápido y confiable** (CDN global de GitHub)
- ✅ **HTTPS automático** (importante para SEO)
- ✅ **Fácil de actualizar** (push y listo)
- ✅ **Compatible con dominios personalizados**
- ✅ **Integración perfecta con Vite**

---

## 📦 Paso 1: Preparar tu Proyecto

### 1.1 Instalar gh-pages (si no lo tienes)

```powershell
npm install --save-dev gh-pages
```

### 1.2 Actualizar `vite.config.js`

Abre `vite.config.js` y asegúrate de tener:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-paz/', // ⚠️ IMPORTANTE: Nombre de tu repositorio
})
```

**⚠️ NOTA:** Reemplaza `/portfolio-paz/` con el nombre EXACTO de tu repositorio GitHub.

Si quieres usar dominio personalizado, después cambiarlo a:
```javascript
base: '/', // Para dominio personalizado
```

### 1.3 Actualizar `package.json`

Abre `package.json` y agrega estos scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

---

## 🌐 Paso 2: Deploy Inicial

### 2.1 Hacer commit de tus cambios

```powershell
git add .
git commit -m "Preparar para deploy en GitHub Pages"
git push origin main
```

### 2.2 Ejecutar el deploy

```powershell
npm run deploy
```

Esto:
1. Construye tu proyecto (`npm run build`)
2. Sube la carpeta `dist` a la rama `gh-pages`
3. ¡Listo! 🎉

### 2.3 Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. Scroll hasta **Pages** en el menú lateral
4. En **Source** selecciona: `Branch: gh-pages` → `/ (root)`
5. Click en **Save**

**Tu sitio estará en:** `https://tu-usuario.github.io/portfolio-paz/`

---

## 🌍 Paso 3: Configurar Dominio Personalizado (Opcional)

### Opción A: Subdominio de GitHub (Gratis)

**URL:** `https://pazsantangelo.github.io/`

Para esto, renombra tu repositorio a: `pazsantangelo.github.io`

Y actualiza `vite.config.js`:
```javascript
base: '/',
```

### Opción B: Dominio Personalizado (Ej: pazsantangelo.com)

#### 3.1 Comprar un dominio (recomendaciones):
- [Namecheap](https://www.namecheap.com/) - $8-12/año
- [Google Domains](https://domains.google/) - $12/año
- [Hostinger](https://www.hostinger.com.ar/) - $5-10/año
- [NIC Argentina](https://nic.ar/) - Para dominios .ar

#### 3.2 Configurar DNS

En tu proveedor de dominio, agrega estos registros DNS:

**Para dominio raíz (pazsantangelo.com):**
```
Tipo: A
Host: @
Valor: 185.199.108.153
TTL: 3600

Tipo: A
Host: @
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Host: @
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Host: @
Valor: 185.199.111.153
TTL: 3600
```

**Para www (www.pazsantangelo.com):**
```
Tipo: CNAME
Host: www
Valor: tu-usuario.github.io
TTL: 3600
```

#### 3.3 Configurar en GitHub

1. En tu repo → **Settings** → **Pages**
2. En **Custom domain** escribe: `pazsantangelo.com`
3. Click **Save**
4. Espera que se verifique (puede tardar 24-48h)
5. ✅ Activa **Enforce HTTPS**

#### 3.4 Crear archivo CNAME

En la carpeta `public/` crea un archivo llamado `CNAME` (sin extensión):

```
pazsantangelo.com
```

#### 3.5 Actualizar vite.config.js

```javascript
base: '/', // Para dominio personalizado
```

#### 3.6 Redeploy

```powershell
npm run deploy
```

---

## 🔧 Paso 4: Actualizar URLs en tu Proyecto

Ahora que sabes tu dominio final, actualiza estos archivos:

### 4.1 En `index.html`

Busca y reemplaza:
- `https://tu-dominio.com/` → Tu dominio real

**Ejemplos:**
- Con GitHub Pages: `https://pazsantangelo.github.io/`
- Con dominio custom: `https://pazsantangelo.com/`

### 4.2 En `sitemap.xml`

Reemplaza todas las URLs con tu dominio real.

### 4.3 En `robots.txt`

```
Sitemap: https://TU-DOMINIO-REAL.com/sitemap.xml
```

### 4.4 Redeploy después de cambios

```powershell
npm run deploy
```

---

## 📊 Paso 5: Verificar y Optimizar

### 5.1 Verificar que funciona

Espera 2-5 minutos después del deploy y visita:
- `https://tu-usuario.github.io/portfolio-paz/`
- O tu dominio personalizado

### 5.2 Verificar SEO

1. **Google Search Console:**
   - Agrega tu propiedad
   - Verifica con método DNS o archivo HTML
   - Envía sitemap: `https://tu-dominio.com/sitemap.xml`

2. **Meta Tags:**
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [LinkedIn Inspector](https://www.linkedin.com/post-inspector/)
   - Pega tu URL y verifica que se vean bien

3. **Performance:**
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - Ingresa tu URL
   - Objetivo: Score > 90

---

## 🔄 Workflow de Actualización

### Cada vez que hagas cambios:

```powershell
# 1. Hacer tus cambios en el código
# 2. Probar localmente
npm run dev

# 3. Commit
git add .
git commit -m "Descripción de cambios"
git push origin main

# 4. Deploy
npm run deploy
```

¡Tus cambios estarán online en 1-2 minutos! 🚀

---

## ⚙️ Configuración Avanzada (Opcional)

### GitHub Actions para Auto-Deploy

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

Con esto, cada `git push` hará deploy automático. 🔥

---

## 🐛 Solución de Problemas

### ❌ Error: "Page not found"

**Solución:**
1. Verifica que `base` en `vite.config.js` coincida con tu repo
2. Asegúrate de que GitHub Pages esté activado en `gh-pages` branch

### ❌ Rutas no funcionan (404 en navegación)

**Solución:** Crea `public/404.html` con este contenido:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
  <body></body>
</html>
```

Y en tu `index.html`, antes de `</head>`:

```html
<script>
  (function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

### ❌ CSS/JS no cargan

**Causa:** `base` incorrecto en `vite.config.js`

**Solución:** Verifica que `base` sea:
- `/nombre-repo/` para GitHub Pages normal
- `/` para dominio personalizado o username.github.io

### ❌ Dominio personalizado no funciona

**Solución:**
1. Espera 24-48h para propagación DNS
2. Verifica registros DNS en [DNS Checker](https://dnschecker.org/)
3. Asegúrate de tener archivo `CNAME` en `public/`

---

## 📈 Monitoreo Post-Deploy

### Semana 1:
- [ ] Verificar que todas las páginas carguen
- [ ] Probar navegación entre secciones
- [ ] Verificar que meta tags se vean bien al compartir
- [ ] Revisar en móvil y desktop

### Semana 2:
- [ ] Configurar Google Search Console
- [ ] Verificar indexación: `site:tu-dominio.com` en Google
- [ ] Revisar errores en Search Console

### Mensual:
- [ ] Revisar analytics (si instalaste)
- [ ] Verificar enlaces rotos
- [ ] Actualizar sitemap si agregaste proyectos

---

## 💡 Tips Pro

1. **Usa el archivo .gitignore correcto:**
   ```
   node_modules
   dist
   .env
   ```

2. **Optimiza imágenes antes de deploy:**
   - Usa WebP para mejor compresión
   - Tamaños máximos razonables
   - Lazy loading implementado

3. **Lighthouse CI:**
   - Corre auditorías automáticas en cada deploy
   - Mantén scores altos

4. **Caché y Performance:**
   - GitHub Pages tiene CDN global
   - HTTPS automático
   - Compresión Gzip activada

---

## 📞 Recursos Útiles

- [Documentación GitHub Pages](https://docs.github.com/en/pages)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## ✅ Checklist Final

Antes de hacer deploy:

- [ ] Actualizar `vite.config.js` con base correcto
- [ ] Agregar scripts en `package.json`
- [ ] Instalar `gh-pages`
- [ ] Hacer commit de todos los cambios
- [ ] Ejecutar `npm run deploy`
- [ ] Activar GitHub Pages en Settings
- [ ] Actualizar URLs en index.html y sitemap.xml
- [ ] Crear archivo CNAME (si usas dominio personalizado)
- [ ] Verificar que el sitio cargue correctamente
- [ ] Probar navegación y links
- [ ] Verificar meta tags con herramientas
- [ ] Registrar en Google Search Console

---

**¡Tu portfolio estará online en minutos! 🎉**

*Última actualización: Enero 2025*
