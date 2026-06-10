import { Search, Menu } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps { onLoginClick: () => void; }

export default function Navbar({ onLoginClick }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-40 h-20 border-b border-white/5 bg-black/60 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-800 p-[2px]">
              <div className="w-full h-full bg-black rounded-full overflow-hidden flex items-center justify-center group-hover:bg-opacity-80 transition-all">
                <img src="https://files.catbox.moe/mysg50.jpeg" alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="font-mono font-bold text-xl tracking-widest text-white group-hover:text-red-500 transition-colors uppercase">
              Zeno Arena
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-red-500 border-b border-red-500 pb-1">MARKET</a>
            <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">ARENAS</a>
            <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">RANKINGS</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-red-500 transition-colors" />
            <input
              type="text"
              placeholder="SEARCH..."
              className="w-64 bg-white/5 border border-white/10 rounded-full py-2 pl-9 pr-4 text-xs font-mono text-white focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all"
            />
          </div>

          <button
            onClick={onLoginClick}
            className="hidden md:block px-6 py-2 rounded-full border border-red-500/30 text-sm font-medium text-red-500 hover:bg-red-500/10 hover:border-red-500 transition-all font-mono"
          >
            LOGIN
          </button>

          <button className="md:hidden text-white/80 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
