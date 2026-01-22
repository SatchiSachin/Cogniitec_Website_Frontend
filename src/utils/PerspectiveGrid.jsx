import React from 'react';

const PerspectiveGrid = () => {
  return (
    <div className="relative w-full h-[400px] bg-white overflow-hidden flex items-center justify-center">
      {/* Container to hold the perspective */}
      <div 
        className="absolute inset-0"
        style={{ perspective: '500px' }}
      >
        {/* The Animated Grid */}
        <div 
          className="absolute inset-0 w-full h-[200%] origin-[50%_50%]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(200, 200, 230, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(200, 200, 230, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'rotateX(60deg)',
            animation: 'grid-move 4s linear infinite'
          }}
        />
      </div>

      {/* Optional: Radial Fade for Depth (Vignette) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white pointer-events-none" />
      
      {/* Content Area */}
      <div className="relative z-10 p-10 bg-white border border-gray-100 shadow-xl rounded-md">
        <h2 className="text-xl font-light text-gray-400 tracking-widest">LAYER BANNER</h2>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: rotateX(60deg) translateY(0);
          }
          100% {
            transform: rotateX(60deg) translateY(60px);
          }
        }
      `}</style>
    </div>
  );
};

export default PerspectiveGrid;