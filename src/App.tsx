import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import LoginModal from './components/LoginModal';
import AnimatedBackground from './components/AnimatedBackground';
import IntroScreen from './components/IntroScreen';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isIntroDone, setIsIntroDone] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-red-500/30 overflow-hidden">
      {!isIntroDone && <IntroScreen onComplete={() => setIsIntroDone(true)} />}
      
      <AnimatedBackground />
      
      <div className={`relative z-10 h-screen overflow-y-auto transition-opacity duration-1000 ${isIntroDone ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
        
        <main>
          <Hero />
          <ProjectList />
        </main>

        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={() => setIsLoginModalOpen(false)} 
        />
        
        {/* Footer */}
        <footer className="border-t border-white/5 py-8 mt-20 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2">
                 <span className="font-mono font-bold text-lg text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-700">ZENO</span>
                 <span className="font-mono text-sm text-white/40">© 2026 ZENO ARENA.</span>
              </div>
              <span className="font-mono text-xs text-white/30">Dev: Andrison</span>
            </div>
            <div className="flex gap-6 text-xs font-mono text-white/40">
              <a href="#" className="hover:text-red-500 transition-colors">TERMS</a>
              <a href="#" className="hover:text-red-500 transition-colors">PRIVACY</a>
              <a href="#" className="hover:text-red-500 transition-colors">STATUS</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
