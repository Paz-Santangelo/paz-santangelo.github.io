import { useEffect, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Actualizar posición del cursor
        window.addEventListener('mousemove', updatePosition);

        // Detectar hover en elementos interactivos
        const interactiveElements = document.querySelectorAll(
            'a, button, .tech-icons, .home-social-icons, .navbar-brand, .link, input, textarea, select, [role="button"]'
        );

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default Cursor;