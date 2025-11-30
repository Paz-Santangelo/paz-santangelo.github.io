# 🚀 Deploy Rápido - Comandos Paso a Paso

## ⚡ Instalación de gh-pages

```powershell
npm install --save-dev gh-pages
```

## 📦 Deploy Inicial

### 1. Asegúrate de tener todo commiteado
```powershell
git status
git add .
git commit -m "Configurar para GitHub Pages"
git push origin main
```

### 2. Deploy
```powershell
npm run deploy
```

### 3. Activar GitHub Pages
1. Ve a: https://github.com/Paz-Santangelo/portfolio-paz/settings/pages
2. En **Source** selecciona: `Branch: gh-pages` → `/ (root)`
3. Click **Save**

**Tu sitio estará en:** https://paz-santangelo.github.io/portfolio-paz/

---

## 🔄 Actualizar (cada vez que hagas cambios)

```powershell
# 1. Hacer cambios
# 2. Probar
npm run dev

# 3. Commit
git add .
git commit -m "Descripción de tus cambios"
git push origin main

# 4. Deploy
npm run deploy
```

---

## 🌐 Opción: Usar dominio personalizado

### Si compras un dominio (ej: pazsantangelo.com):

1. **Crea archivo `CNAME` en la carpeta `public/`:**
   ```
   pazsantangelo.com
   ```

2. **Actualiza `vite.config.js`:**
   ```javascript
   base: '/', // Cambiar de '/portfolio-paz/' a '/'
   ```

3. **Configura DNS en tu proveedor de dominio:**
   ```
   Tipo: A → Valor: 185.199.108.153
   Tipo: A → Valor: 185.199.109.153
   Tipo: A → Valor: 185.199.110.153
   Tipo: A → Valor: 185.199.111.153
   Tipo: CNAME → Host: www → Valor: paz-santangelo.github.io
   ```

4. **En GitHub Settings → Pages:**
   - Custom domain: `pazsantangelo.com`
   - ✅ Enforce HTTPS

5. **Redeploy:**
   ```powershell
   npm run deploy
   ```

---

## 🎯 URLs a Actualizar DESPUÉS del Deploy

Una vez que tengas tu URL final (ej: `https://paz-santangelo.github.io/portfolio-paz/`):

### En `index.html`:
Busca: `https://tu-dominio.com/`
Reemplaza con: Tu URL real

### En `sitemap.xml`:
Reemplaza todas las URLs con tu dominio real

### En `robots.txt`:
```
Sitemap: https://TU-URL-REAL/sitemap.xml
```

Luego redeploy:
```powershell
npm run deploy
```

---

## ✅ Verificar que funciona

1. Espera 2-5 minutos después del deploy
2. Visita tu URL
3. Navega entre páginas
4. Verifica que todo cargue correctamente

---

## 🐛 Problemas Comunes

### ❌ "npm: no se reconoce como comando"
**Solución:** Asegúrate de tener Node.js instalado

### ❌ Página 404 después del deploy
**Solución:** 
- Verifica que GitHub Pages esté activado
- Espera 5 minutos
- Limpia caché del navegador (Ctrl + Shift + R)

### ❌ CSS/JS no cargan
**Solución:** Verifica que `base` en `vite.config.js` sea correcto

---

**¿Dudas?** Consulta `DEPLOY-GITHUB-PAGES.md` para guía completa.
