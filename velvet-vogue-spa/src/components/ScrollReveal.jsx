import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  duration = 'duration-1000' 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Trigger only once for performance
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is in view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getAnimationClasses = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-12 blur-[2px]';
      case 'fade-down':
        return isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 -translate-y-12 blur-[2px]';
      case 'fade-left':
        return isVisible 
          ? 'opacity-100 translate-x-0 blur-0' 
          : 'opacity-0 -translate-x-12 blur-[2px]';
      case 'fade-right':
        return isVisible 
          ? 'opacity-100 translate-x-0 blur-0' 
          : 'opacity-0 translate-x-12 blur-[2px]';
      case 'zoom-in':
        return isVisible 
          ? 'opacity-100 scale-100 blur-0' 
          : 'opacity-0 scale-95 blur-[2px]';
      default:
        return isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[2px]';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ${duration} ease-out ${getAnimationClasses()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
