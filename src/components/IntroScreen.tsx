import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState<'playing' | 'done'>('playing');

  useEffect(() => {
    // Delay voice to sync with the text animation (delay: 0.5s)
    const voiceTimer = setTimeout(() => {
      try {
        const msg = new SpeechSynthesisUtterance("Welcome to zeno arena");
        msg.lang = "en-US";
        msg.pitch = 0.8;
        msg.rate = 0.9;
        window.speechSynthesis.speak(msg);
      } catch (e) {
        console.error("Speech synthesis failed", e);
      }
    }, 500);

    // 4 seconds duration before exiting
    const exitTimer = setTimeout(() => {
      setStep('done');
      // Wait for exit animation to finish before entering main app
      setTimeout(onComplete, 800);
    }, 4000);

    return () => {
      clearTimeout(voiceTimer);
      clearTimeout(exitTimer);
      window.speechSynthesis.cancel(); // Stop speaking if unmounted early
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step !== 'done' && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,black_70%)]" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center gap-8 text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', damping: 15 }}
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-full border border-red-600/50 p-2"
            >
              <div className="absolute inset-0 rounded-full border border-red-500 blur-sm animate-pulse shadow-[0_0_50px_rgba(220,38,38,0.3)]" />
              <img
                src="https://files.catbox.moe/mysg50.jpeg"
                alt="Zeno Arena"
                className="w-full h-full object-cover rounded-full relative z-10"
              />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold font-sans tracking-tight text-white drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] flex flex-col gap-2"
            >
              <span className="text-xl md:text-2xl text-red-500/80 font-mono tracking-widest font-normal uppercase">Welcome to</span>
              ZENO ARENA
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
