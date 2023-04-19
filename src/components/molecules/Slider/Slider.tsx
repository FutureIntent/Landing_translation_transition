import { props } from '@styled-system/should-forward-prop';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Children, ReactElement, RefObject, useState } from 'react';
import SpringLightbox, { ImagesListType } from 'react-spring-lightbox';
import styled from 'styled-components';
import { Navigation, Pagination, Thumbs, Virtual, Controller } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

interface SliderProps extends SwiperProps {
    lightboxSrcImages?: ImagesListType;
    children?: ReactElement[] | ReactElement;
    showOverflow?: boolean;
    sliderRef?: RefObject<HTMLElement>;
    paginationRef?: RefObject<HTMLElement>;
    showNumber?: boolean;
    shouldShrink?: boolean;
}

const StyledSwiper = styled(Swiper).withConfig({
    shouldForwardProp: (prop) => ![...props, 'showOverflow', 'shouldShrink'].includes(String(prop)),
})<Pick<SliderProps, 'showOverflow' | 'shouldShrink'> & { ref?: RefObject<HTMLElement> }>`
    max-width: 100vw;
    height: 100%;

    .swiper-slide {
        height: auto;
        width: auto;

        flex-shrink: ${({ shouldShrink }) => (shouldShrink ? '1' : '0')};
    }

    ${({ showOverflow }) =>
        showOverflow &&
        `
        overflow: visible !important;
    `}
`;

const Slider = ({
    lightboxSrcImages,
    children,
    showOverflow = false,
    sliderRef,
    paginationRef,
    shouldShrink = false,
    showNumber,
    ...rest
}: SliderProps) => {
    const [lightBoxIsOpen, setLightBoxIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextLightBoxSlide = () => {
        if (lightboxSrcImages) {
            setCurrentIndex(
                currentIndex < lightboxSrcImages.length ? currentIndex + 1 : currentIndex,
            );
        }
    };

    const prevLightBoxSlide = () => {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : currentIndex);
    };

    const handleOpenLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightBoxIsOpen(true);
    };

    return (
        <StyledSwiper
            grabCursor
            shouldShrink={shouldShrink}
            modules={[Navigation, Pagination, Thumbs, Virtual, Controller]}
            showOverflow={showOverflow}
            ref={sliderRef}
            pagination={{
                el: paginationRef?.current,
                clickable: true,
                renderBullet: (index: number, className: string) =>
                    `<p class='bullet ${className} ${showNumber ? 'bullet-number' : ''}'><span>${
                        showNumber ? index + 1 : ''
                    }</span></p>`,
            }}
            {...rest}
        >
            {lightboxSrcImages?.length && (
                <SpringLightbox
                    images={lightboxSrcImages}
                    isOpen={lightBoxIsOpen}
                    onClose={() => setLightBoxIsOpen(false)}
                    currentIndex={currentIndex}
                    onNext={nextLightBoxSlide}
                    onPrev={prevLightBoxSlide}
                    singleClickToZoom
                />
            )}
            {Children.toArray(children).map((child, index) => (
                <SwiperSlide
                    key={(child as ReactElement)?.key}
                    virtualIndex={index}
                    onClick={() => handleOpenLightbox(index)}
                >
                    {child}
                </SwiperSlide>
            ))}
        </StyledSwiper>
    );
};

export default Slider;
