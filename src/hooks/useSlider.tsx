'use client'

import { useRef, useState, useEffect } from 'react';

export function useSlider(paddingSize: number) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    

    const handlePreviousClick = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= containerRef.current.offsetWidth + (paddingSize * 2);
        }
    };

    const handleNextClick = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += containerRef.current.offsetWidth + (paddingSize * 2);
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