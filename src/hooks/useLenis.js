import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
    useEffect(() => {
        // Inicializar Lenis con configuración optimizada
        const lenis = new Lenis({
            duration: 1.2,        // Duración de la animación del scroll
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing suave
            orientation: 'vertical', // Dirección del scroll
            gestureOrientation: 'vertical',
            smoothWheel: true,    // Scroll suave con la rueda del mouse
            wheelMultiplier: 1,   // Multiplicador de velocidad de la rueda
            smoothTouch: false,   // Desactivar en touch para mejor rendimiento móvil
            touchMultiplier: 2,
            infinite: false,
        });

        // Función de animación
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup al desmontar
        return () => {
            lenis.destroy();
        };
    }, []);
};
