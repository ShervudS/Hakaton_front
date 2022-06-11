import { useState, useEffect } from 'react';

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({
        mouseX: null,
        mouseY: null,
    });

    const updateMousePosition = (ev) => {
        setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);

        return () =>
            window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return mousePosition;
};
