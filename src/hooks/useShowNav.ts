import { useEffect, useState } from 'react';

export const useShowNav = ({
    forceShow = false,
    initial = false,
}: {
    forceShow?: boolean;
    initial?: boolean;
}) => {
    const [showNav, setShowNav] = useState(initial);

    const handleShowNav = () => {
        if (!forceShow) {
            if (window.scrollY > 100) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleShowNav);

        return () => {
            window.removeEventListener('scroll', handleShowNav);
        };
    }, []);

    return { showNav, handleShowNav };
};
