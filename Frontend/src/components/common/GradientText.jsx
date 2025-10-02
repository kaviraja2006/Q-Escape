import { useEffect, useRef } from 'react';

export default function GradientText({
    children,
    className = '',
    colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
    animationSpeed = 8,
    showBorder = false
  }) {
    const gradientStyle = {
      backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
      animationDuration: `${animationSpeed}s`
    };
  
    const textRef = useRef(null);
    const borderRef = useRef(null);

    const colorsString = colors.join(',');

    useEffect(() => {
      let rafId;
      let start = performance.now();
      const durationMs = Math.max(0.001, animationSpeed) * 1000;

      const tick = (now) => {
        const elapsed = (now - start) % durationMs;
        const progress = elapsed / durationMs; // 0..1
        const x = progress * 300; // match backgroundSize 300% width

        if (textRef.current) {
          textRef.current.style.backgroundPosition = `${x}% 50%`;
        }
        if (borderRef.current) {
          borderRef.current.style.backgroundPosition = `${x}% 50%`;
        }
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafId);
    }, [animationSpeed, colorsString]);
  
    return (
      <div
        className={`relative mx-auto flex max-w-fit flex-row items-center justify-center font-medium transition-shadow duration-500 ${className}`}
        style={{ background: 'none', backdropFilter: 'none', borderRadius: 0, overflow: 'visible', cursor: 'default' }}
      >
        {showBorder && (
          <div
            ref={borderRef}
            className="absolute inset-0 bg-cover z-0 pointer-events-none"
            style={{
              ...gradientStyle,
              backgroundSize: '300% 100%'
            }}
          >
            <div
              className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
              style={{
                width: 'calc(100% - 2px)',
                height: 'calc(100% - 2px)',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
          </div>
        )}
        <div
          ref={textRef}
          className="inline-block relative z-2 text-transparent bg-cover"
          style={{
            ...gradientStyle,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            backgroundSize: '300% 100%'
          }}
        >
          {children}
        </div>
      </div>
    );
  }

export { GradientText };
  
  // tailwind.config.js
  // module.exports = {
  //   theme: {
  //     extend: {
  //       keyframes: {
  //         gradient: {
  //           '0%': { backgroundPosition: '0% 50%' },
  //           '50%': { backgroundPosition: '100% 50%' },
  //           '100%': { backgroundPosition: '0% 50%' },
  //         },
  //       },
  //       animation: {
  //         gradient: 'gradient 8s linear infinite'
  //       },
  //     },
  //   },
  //   plugins: [],
  // };
  