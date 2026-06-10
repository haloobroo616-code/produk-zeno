import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const PRODUCTS = [
  { 
    id: 1, 
    title: "FDXH BASIC SETINGGS", 
    price: "5.000", 
    features: [
      "TERSEDIA QRIS ALL PAY ✅",
      "FREE CARA PASANG ✅",
      "BOLEH NEGO ✅"
    ],
    benefit: "𝗠𝗘𝗡𝗜𝗡𝗚𝗞𝗔𝗧𝗞𝗔𝗡 𝗛𝗘𝗔𝗗𝗦𝗛𝗢𝗢𝗧 𝗥𝗔𝗧𝗘 + 𝗘𝗔𝗦𝗬 𝗗𝗥𝗔𝗚 𝗠𝗘𝗗𝗜𝗨𝗠 𝗗𝗔𝗧𝗔 𝗛𝗦 𝗗𝗥𝗔𝗚 𝗛𝗦 𝗕𝗔𝗦𝗜𝗖"
  },
  { 
    id: 2, 
    title: "FDXH MEDIUM SETINGGS", 
    price: "10.000", 
    features: [
      "TERSEDIA QRIS ALL PAY ✅",
      "FREE CARA PASANG ✅",
      "BOLEH NEGO ✅"
    ],
    benefit: "𝗠𝗘𝗡𝗜𝗡𝗚𝗞𝗔𝗧𝗞𝗔𝗡 𝗛𝗘𝗔𝗗𝗦𝗛𝗢𝗢𝗧 𝗥𝗔𝗧𝗘 + 𝗘𝗔𝗦𝗬 𝗗𝗥𝗔𝗚 𝗠𝗘𝗗𝗜𝗨𝗠 𝗗𝗔𝗧𝗔 𝗛𝗦 𝗗𝗥𝗔𝗚 𝗛𝗦 𝗠𝗘𝗗𝗜𝗨𝗠"
  },
  { 
    id: 3, 
    title: "FDXH GOOD SETINGGS", 
    price: "20.000", 
    features: [
      "TERSEDIA QRIS ALL PAY ✅",
      "FREE CARA PASANG ✅",
      "BOLEH NEGO ✅"
    ],
    benefit: "𝗠𝗘𝗡𝗜𝗡𝗚𝗞𝗔𝗧𝗞𝗔𝗡 𝗛𝗘𝗔𝗗𝗦𝗛𝗢𝗢𝗧 𝗥𝗔𝗧𝗘 + 𝗘𝗔𝗦𝗬 𝗗𝗥𝗔𝗚 𝗘𝗫𝗧𝗥𝗘𝗠 𝗗𝗔𝗧𝗔 𝗛𝗦 𝗗𝗥𝗔𝗚 𝗛𝗦 𝗘𝗫𝗧𝗥𝗔"
  },
  { 
    id: 4, 
    title: "FDXH PERFECT SETINGGS", 
    price: "30.000", 
    features: [
      "TERSEDIA QRIS ALL PAY ✅",
      "FREE CARA PASANG ✅",
      "BOLEH NEGO ✅"
    ],
    benefit: "𝗠𝗘𝗡𝗜𝗡𝗚𝗞𝗔𝗧𝗞𝗔𝗡 𝗛𝗘𝗔𝗗𝗦𝗛𝗢𝗢𝗧 𝗥𝗔𝗧𝗘 + 𝗘𝗔𝗦𝗬 𝗗𝗥𝗔𝗚 𝗘𝗫𝗧𝗥𝗘𝗠 𝗗𝗔𝗧𝗔 𝗛𝗦 𝗗𝗥𝗔𝗚 𝗛𝗦 𝗘𝗫𝗧𝗥𝗔"
  },
  { 
    id: 5, 
    title: "FDXH SPECIAL SETINGGS", 
    price: "40.000", 
    features: [
      "TERSEDIA QRIS ALL PAY ✅",
      "FREE CARA PASANG ✅",
      "BOLEH NEGO ✅"
    ],
    benefit: "𝗠𝗘𝗡𝗜𝗡𝗚𝗞𝗔𝗧𝗞𝗔𝗡 𝗛𝗘𝗔𝗗𝗦𝗛𝗢𝗢𝗧 𝗥𝗔𝗧𝗘 + 𝗘𝗔𝗦𝗬 𝗗𝗥𝗔𝗚 𝗘𝗫𝗧𝗥𝗘𝗔𝗠 𝗗𝗔𝗧𝗔 𝗛𝗦 𝗗𝗥𝗔𝗚 𝗛𝗦 𝗦𝗨𝗣𝗘𝗥 𝗘𝗫𝗧𝗥𝗘𝗔𝗠"
  }
];

export default function ProjectList() {
  return (
    <div id="products" className="max-w-4xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 gap-6">
        {PRODUCTS.map((product, index) => {
          const waText = encodeURIComponent(`Bang Zeno Mau Beli File\n${product.title}\nRp ${product.price}`);
          const waLink = `https://wa.me/6287729847454?text=${waText}`;

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-[#0a0a0f]/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden transition-all hover:border-red-500/50 hover:shadow-[0_0_30px_-10px_rgba(220,38,38,0.2)] p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/* Product Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-xl md:text-2xl text-white tracking-wide uppercase">
                      {product.title}
                    </h3>
                  </div>
                  
                  <div className="mt-4 flex flex-col gap-2.5">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-white/80 leading-relaxed font-sans">
                          {feature.replace('✅', '').trim()}
                        </span>
                      </div>
                    ))}
                    
                    {product.benefit && (
                      <div className="mt-2 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                        <span className="text-red-400 font-bold text-sm tracking-wide uppercase block mb-1">
                          Keuntungan buy file:
                        </span>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base text-white/90 leading-relaxed font-sans">
                            {product.benefit}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex flex-col items-start md:items-end md:w-[220px] shrink-0 border-t border-white/10 md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-6">
                  <div className="text-white/40 text-xs font-mono mb-1 uppercase tracking-widest">Harga</div>
                  <div className="text-3xl font-bold text-white mb-6">
                    Rp {product.price}
                  </div>
                  
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-red-600 text-white font-bold tracking-wide hover:bg-red-500 transition-colors flex items-center justify-center gap-2 group border border-red-500/50 shadow-[0_0_15px_rgba(220,38,38,0.2)] text-center text-sm uppercase"
                  >
                    Buy File
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
