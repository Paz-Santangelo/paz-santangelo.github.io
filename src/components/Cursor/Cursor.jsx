import { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isOverPDF, setIsOverPDF] = useState(false);
  const [isTouchDevice] = useState(() => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  });

  useEffect(() => {
    if (isTouchDevice) {
      return;
    }
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Detectar si está sobre el PDF
      const pdfElement = document.querySelector('.react-pdf__Page');
      if (pdfElement) {
        const rect = pdfElement.getBoundingClientRect();
        const isOver = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
        setIsOverPDF(isOver);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Actualizar posición del cursor
    window.addEventListener("mousemove", updatePosition);

    // Detectar hover en elementos interactivos
    const interactiveElements = document.querySelectorAll(
      'a, button, .tech-icons, .home-social-icons, .navbar-brand, .link, input, textarea, select, [role="button"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isTouchDevice]);

  // No renderizar el cursor en dispositivos táctiles
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${isHovering ? "hovering" : ""} ${isOverPDF ? "over-pdf" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
