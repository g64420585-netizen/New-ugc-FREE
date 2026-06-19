import React from "react";
import { motion } from "framer-motion";
import { items } from "@/lib/data";
import { ArrowUpRight, Flame } from "lucide-react";
import { Link } from "wouter";

export function Featured() {
  const featuredItems = [items[0], items[4]]; // Crown and Skull

  return (
    <section className="py-24 bg-card relative border-y border-border">
      <div className="absolute inset-0 bg-primary/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container relative mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-primary font-mono font-bold tracking-wider uppercase text-sm mb-3">
              <Flame className="w-4 h-4" /> Hot Right Now
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Trending Drops</h2>
          </div>
          <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
            View all trending <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative bg-background border border-border rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-primary/50 transition-colors"
            >
              <div className="w-full md:w-1/2 p-8 bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <motion.img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-48 h-48 object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <div className="mb-4 flex items-center justify-between">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono font-medium text-muted-foreground uppercase">
                    {item.rarity}
                  </span>
                  <span className="text-xs font-mono text-primary flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {item.stock} Left
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">By {item.creator}</p>
                
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-mono">Price</div>
                    <div className="text-xl font-bold font-mono text-white flex items-center gap-1">
                      <span className="text-green-400 text-sm">R$</span> {item.price}
                    </div>
                  </div>
                  
                  <button className="w-12 h-12 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-[0_0_0_rgba(222,21,54,0)] group-hover:shadow-[0_0_15px_rgba(222,21,54,0.4)]">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
