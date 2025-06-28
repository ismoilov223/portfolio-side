import React, { useEffect, useRef, useState } from 'react';

const ProgressBar = ({ percent = 70, color = 'bg-green-500' }) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Animate only once
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-md border border-gray-300 rounded-full h-6 overflow-hidden"
    >
      <div
        className={`h-full transition-all duration-[1500ms] ease-in-out ${color}`}
        style={{ width: visible ? `${percent}%` : '0%' }}
      ></div>
    </div>
  );
};

export default ProgressBar;
