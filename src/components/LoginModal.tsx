import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, Swords } from 'lucide-react';
import { useState } from 'react';

interface LoginModalProps { isOpen: boolean; onClose: () => void; }

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-md pointer-events-auto"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-tr from-red-600 to-red-900 rounded-2xl opacity-50 blur-[2px]" />

              <div className="relative bg-[#050505] rounded-2xl p-8 border border-white/5 shadow-[0_0_40px_-10px_rgba(220,38,38,0.2)] overflow-hidden">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

                <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10 p-1">
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="text-center space-y-2">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1, type: "spring" }}
                      className="inline-block p-3 rounded-xl bg-red-500/10 border border-red-500/30 mb-2"
                    >
                      <Swords className="w-8 h-8 text-red-500" />
                    </motion.div>
                    <h2 className="text-2xl font-bold tracking-tight text-white uppercase">ARENA ACCESS</h2>
                    <p className="text-sm text-white/30 font-mono">AUTHENTICATE_TO_ENTER</p>
                  </div>

                  <form className="space-y-4 font-mono mt-4" onSubmit={(e) => e.preventDefault()}>
                    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-1.5">
                      <label className="text-xs text-red-500 font-semibold tracking-wider">EMAIL_ADDRESS</label>
                      <div className="relative group">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-red-500 transition-colors" />
                        <input
                          type="email"
                          className="w-full bg-[#111] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all font-sans"
                          placeholder="fighter@zeno.net"
                        />
                      </div>
                    </motion.div>

                    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-xs text-red-500 font-semibold tracking-wider">SECURE_KEY</label>
                        <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">FORGOT?</a>
                      </div>
                      <div className="relative group">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-red-500 transition-colors" />
                        <input
                          type="password"
                          className="w-full bg-[#111] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all font-sans"
                          placeholder="••••••••"
                        />
                      </div>
                    </motion.div>

                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="pt-2">
                      <button
                        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                        className="relative w-full group overflow-hidden rounded-lg font-bold font-sans tracking-wide border border-red-500/50"
                      >
                        <div className="absolute inset-0 w-full h-full bg-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <motion.div
                          className="absolute inset-0 bg-white/20 blur-md"
                          initial={{ x: '-100%' }} animate={{ x: isHovered ? '100%' : '-100%' }} transition={{ duration: 0.8, ease: 'easeInOut' }}
                        />
                        <div className="relative flex items-center justify-center gap-2 px-6 py-3.5 bg-black/40 text-white group-hover:bg-transparent transition-colors">
                          <Lock className="w-4 h-4" />
                          <span>LOGIN_TO_ARENA</span>
                        </div>
                      </button>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center pt-4">
                      <p className="text-xs text-white/40">
                        NEW_FIGHTER? <a href="#" className="text-red-500 font-semibold hover:text-red-400 transition-colors">REGISTER_NOW</a>
                      </p>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
