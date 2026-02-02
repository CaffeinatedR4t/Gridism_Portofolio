"use client";

import { useEffect, useState } from "react";

export const useBackgroundDetection = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark

  useEffect(() => {
    // Find all sections with data-navbar-theme attribute
    const sections = document.querySelectorAll<HTMLElement>('[data-navbar-theme]');
    
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute('data-navbar-theme');
            setIsDark(theme === 'dark');
          }
        });
      },
      {
        root: null,
        rootMargin: '-50px 0px -50px 0px', // Trigger when section is 50px from top
        threshold: [0, 0.1, 0.5, 1], // Multiple thresholds for smooth detection
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return isDark;
};