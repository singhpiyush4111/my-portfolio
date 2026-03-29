import { useState, useEffect } from 'react';

/**
 * Custom hook to detect which section is currently in viewport
 * @param sectionIds - Array of section IDs to track
 * @param offset - Offset from top of viewport (default: 100px)
 * @returns The ID of the currently active section
 */
export function useActiveSection(sectionIds: string[], offset: number = 100): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the section that is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }

      // Default to first section if none found
      setActiveSection(sectionIds[0] || '');
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}

export default useActiveSection;
