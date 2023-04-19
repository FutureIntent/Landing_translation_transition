import { RefObject, useEffect } from 'react';

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (e: MouseEvent | TouchEvent) => void,
    disabled?: boolean,
): void => {
    useEffect(() => {
        const handleClick = (e: MouseEvent | TouchEvent) => {
            if (disabled || !ref.current || ref.current.contains(e.target as Node)) return;

            handler(e);
        };
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('touchstart', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('touchstart', handleClick);
        };
    }, [ref, disabled]);
};
