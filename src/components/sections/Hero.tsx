import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";
import { items } from "@/lib/data";

export function Hero() {
  const heroItem = items[2]; // Void Demon Wings

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">Season 4 Drop Live</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-white">
              Own the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-400">Rarest</span> <br />
              UGC Items
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Join the elite circle of Roblox collectors. Discover, trade, and showcase high-tier limiteds before they're gone forever.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="font-mono text-base bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(222,21,54,0.4)] border-transparent h-14 px-8">
                Explore Catalog
              </Button>
              <Button size="lg" variant="outline" className="font-mono text-base h-14 px-8 border-border bg-card/50 hover:bg-card hover:text-white backdrop-blur-sm group">
                View Top Collectors
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-border/50 pt-8 max-w-lg">
              <div>
                <div className="text-3xl font-black text-white font-mono">15k+</div>
                <div className="text-sm text-muted-foreground">Active Traders</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white font-mono">2.4M</div>
                <div className="text-sm text-muted-foreground">Volume (R$)</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white font-mono">850</div>
                <div className="text-sm text-muted-foreground">Rare Items</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-[500px] aspect-square mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-tr from-secondary to-card rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden backdrop-blur-sm flex items-center justify-center p-8 group">
                <div className="absolute top-0 right-0 p-4">
                  <div className="bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                    <div className="text-xs text-muted-foreground mb-1">Current Price</div>
                    <div className="text-lg font-mono font-bold text-white flex items-center gap-2">
                      <span className="text-green-400">R$</span> {heroItem.price}
                    </div>
                  </div>
                </div>
                
                <motion.img 
                  src={heroItem.image} 
                  alt={heroItem.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(222,21,54,0.3)] relative z-10"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />
                
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 text-primary text-xs font-mono font-bold uppercase rounded mb-2">
                    {heroItem.rarity}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{heroItem.name}</h3>
                  <p className="text-sm text-muted-foreground">Created by {heroItem.creator}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
