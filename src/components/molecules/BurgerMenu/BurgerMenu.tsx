import { useLocation } from '@reach/router';
import { useEffect, useState } from 'react';

import Button from '@components/atoms/Button';

import BurgerMenuList from '@components/molecules/BurgerMenu/BurgerMenuList';
import Burger from '@components/molecules/Icons/Burger';

const BurgerMenu = () => {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        if (!isOpen) {
            document.getElementsByTagName('body')[0].classList.add('no-scroll');
        } else {
            document.getElementsByTagName('body')[0].classList.remove('no-scroll');
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
        document.getElementsByTagName('body')[0].classList.remove('no-scroll');
    }, [pathname]);

    return (
        <>
            <Button
                style={{ position: 'relative', zIndex: 10001, color: 'white' }}
                variant="transparent"
                onClick={toggle}
            >
                <Burger isOpen={isOpen} size={{ _: 'medium3', tablet: 'xl' }} />
            </Button>
            <BurgerMenuList isOpen={isOpen} />
        </>
    );
};

export default BurgerMenu;
