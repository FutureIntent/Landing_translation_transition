import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';

export const useSwiper = () => {
    const [realIndex, setRealIndex] = useState(0);
    const sliderRef = useRef<HTMLElement & { swiper: Swiper }>(null);
    const sliderPaginationRef = useRef<HTMLElement>(null);
    const thumbsSliderRef = useRef<HTMLElement>(null);
    const [shouldRenderSlider, setShouldRenderSlider] = useState(false);

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current?.swiper.slideNext();

            setRealIndex(sliderRef.current.swiper.realIndex);
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current?.swiper.slidePrev();

            setRealIndex(sliderRef.current?.swiper.realIndex);
        }
    };

    useEffect(() => {
        if (sliderPaginationRef?.current) {
            setShouldRenderSlider(true);
        }
    }, [sliderPaginationRef, sliderRef]);

    return {
        sliderRef,
        sliderPaginationRef,
        thumbsSliderRef,
        shouldRenderSlider,
        nextSlide,
        prevSlide,
        realIndex,
    };
};
