import { useRef, useState, useEffect } from 'react';

export function useSlider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const handlePreviousClick = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
        }
    };

    const handleNextClick = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += containerRef.current.offsetWidth;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { scrollLeft, scrollWidth, offsetWidth } = containerRef.current;
                setCanScrollLeft(scrollLeft > 0);
                setCanScrollRight(scrollLeft + offsetWidth < scrollWidth);
            }
        };

        const handleResize = () => {
            handleScroll();
        };

        containerRef.current?.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleScroll();

        return () => {
            containerRef.current?.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        containerRef,
        canScrollLeft,
        canScrollRight,
        handlePreviousClick,
        handleNextClick,
    };
};