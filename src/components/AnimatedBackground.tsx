import { motion } from 'motion/react';
import { useMemo } from 'react';

const SHAPES = ['circle', 'square', 'triangle'];

export default function AnimatedBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => {
      const shapeType = SHAPES[i % SHAPES.length];
      const size = Math.random() * 15 + 10;
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const tx1 = (Math.random() - 0.5) * 500;
      const ty1 = (Math.random() - 0.5) * 500;
      const tx2 = (Math.random() - 0.5) * 500;
      const ty2 = (Math.random() - 0.5) * 500;
      const rotate = Math.random() > 0.5 ? 360 : -360;
      const duration = Math.random() * 20 + 20;
      
      return {
        id: i,
        shapeType,
        size,
        initialX,
        initialY,
        tx1, ty1, tx2, ty2,
        rotate,
        duration,
        delay: Math.random() * -20
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05)_0%,black_100%)] z-10" />

      {/* Floating Red Orbs (Subtle) */}
      <motion.div
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[100px] mix-blend-screen z-10"
      />

      <div className="absolute inset-0 z-10 opacity-60">
        {particles.map((p) => {
          let shapeEl;
          if (p.shapeType === 'circle') {
             shapeEl = <div className="rounded-full border border-red-500/60 bg-red-500/30 w-full h-full" />;
          } else if (p.shapeType === 'square') {
             shapeEl = <div className="border border-red-500/60 bg-red-500/30 w-full h-full" />;
          } else if (p.shapeType === 'triangle') {
             shapeEl = (
               <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                 <polygon points="50,0 100,100 0,100" fill="rgba(239, 68, 68, 0.3)" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="4" />
               </svg>
             );
          }

          return (
            <motion.div
              key={p.id}
              className="absolute"
              style={{
                 width: p.size,
                 height: p.size,
                 top: `${p.initialY}%`,
                 left: `${p.initialX}%`,
              }}
              animate={{ 
                 x: [0, p.tx1, p.tx2, 0], 
                 y: [0, p.ty1, p.ty2, 0], 
                 rotate: [0, p.rotate, p.rotate * 2, p.rotate * 3],
                 opacity: [0.1, 0.8, 0.4, 0.1]
              }}
              transition={{ 
                 duration: p.duration, 
                 repeat: Infinity, 
                 ease: "linear", 
                 delay: p.delay 
              }}
            >
              {shapeEl}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
