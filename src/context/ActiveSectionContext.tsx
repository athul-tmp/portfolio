"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const sectionIds = ['about', 'skills', 'projects'];
type SectionId = 'about' | 'skills' | 'projects';

interface ActiveSectionContextType {
  activeSection: SectionId;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionId>>;
  mainRef: React.RefObject<HTMLElement | null>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

// Hook to observe elements
const useIntersectionObserver = (setActiveSection: (id: SectionId) => void) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId;
            setActiveSection(id);
          }
        });
      },
      {
        root: null, 
        rootMargin: '0px 0px -50% 0px', 
        threshold: 0.1, 
      }
    );

    // Attach observer to all target sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    // Cleanup on unmount
    return () => {
      observerRef.current?.disconnect();
    };
  }, [setActiveSection]);
};

export const ActiveSectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Set default active section
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const mainRef = useRef<HTMLElement | null>(null);

  useIntersectionObserver(setActiveSection);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, mainRef }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
};