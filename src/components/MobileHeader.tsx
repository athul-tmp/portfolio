"use client";

import React, { useState, useEffect } from 'react';
import { useActiveSection } from '@/context/ActiveSectionContext';
import { ThemeToggle } from './ThemeToggle';

// Maps the section ID to a displayable title
const SECTION_TITLES: Record<string, string> = {
    'about': 'About',
    'skills': 'Skills',
    'projects': 'Projects',
};

export function MobileHeader() {
    const { activeSection } = useActiveSection();
    const [scrolled, setScrolled] = useState(false);
    
    // Function to check scroll position
    const handleScroll = () => {
        const scrollThreshold = 100; 
        setScrolled(window.scrollY > scrollThreshold);
    };

    // Attach scroll listener on mount
    useEffect(() => {
        handleScroll();
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // Get the title based on the active section ID
    const displayTitle = SECTION_TITLES[activeSection] || 'Portfolio';

    const visibilityClass = scrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0';

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b 
                       p-4 flex justify-between items-center lg:hidden shadow-sm 
                       transition-all duration-300 ${visibilityClass}`}
        >
            <h2 className="text-xl font-bold text-foreground">
                {displayTitle}
            </h2>
            
            <ThemeToggle />
        </header>
    );
}