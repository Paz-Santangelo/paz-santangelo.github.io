import { useEffect } from 'react';

/**
 * Hook personalizado para actualizar meta tags dinámicamente
 * Útil para cambiar títulos y descripciones según la ruta
 */
const useSEO = ({ 
  title = "Paz Santangelo | Desarrolladora Backend Java | Portfolio",
  description = "Portfolio profesional de Paz Santangelo - Desarrolladora Backend especializada en Java, Spring Boot, Microservicios con Spring Cloud y APIs REST.",
  keywords = "Paz Santangelo, desarrolladora backend, portfolio, Java, Spring Boot, Microservicios",
  image = "https://res.cloudinary.com/dnw0mx8qr/image/upload/v1764196622/Logo-Siglas-SF_xyyrgr.png",
  url = "https://tu-dominio.com/"
}) => {
  useEffect(() => {
    // Actualizar título
    document.title = title;
    
    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Actualizar meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Actualizar Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', image);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', url);
    
    // Actualizar Twitter Cards
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', image);
    
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', url);
    
    // Actualizar canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, image, url]);
};

export default useSEO;
