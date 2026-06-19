import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Community() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Verified Authenticity",
      description: "Every item in our catalog is verified on-chain. No dupes, no scams, just pure authentic collector pieces."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Elite Community",
      description: "Join private Discord channels, access alpha leaks on upcoming drops, and network with top-tier traders."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Instant Transfers",
      description: "Our proprietary escrow system ensures that items hit your inventory the second a transaction clears."
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">More Than A Marketplace. <br/><span className="text-primary">A Syndicate.</span></h2>
            <p className="text-lg text-muted-foreground mb-10">
              BestUGCs isn't just about buying and selling pixels. It's about culture. We've built the most secure, high-end platform for serious collectors who demand the best.
            </p>
            
            <div className="space-y-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="mt-10 font-mono h-12 px-6 bg-white text-black hover:bg-gray-200 group">
              Read the Manifesto
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Abstract decorative graphic */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px]" />
              <div className="relative h-full w-full border border-border bg-background/50 backdrop-blur-xl rounded-[2rem] overflow-hidden flex flex-col p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-border" />
                  <div>
                    <div className="w-24 h-3 bg-secondary rounded-full mb-2" />
                    <div className="w-16 h-2 bg-secondary/50 rounded-full" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="w-full h-24 bg-secondary/30 rounded-xl border border-white/5" />
                  <div className="w-full h-24 bg-secondary/30 rounded-xl border border-white/5" />
                  <div className="w-full h-24 bg-primary/10 rounded-xl border border-primary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary text-primary font-mono text-sm font-bold shadow-[0_0_15px_rgba(222,21,54,0.3)]">
                    Access Granted
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
