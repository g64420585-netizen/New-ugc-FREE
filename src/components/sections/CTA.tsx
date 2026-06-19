import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative py-32 bg-background overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">Flex?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Your avatar deserves the best. Stop wearing mass-produced items and step up to the elite tier of limiteds.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto h-14 px-10 font-mono text-base bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(222,21,54,0.4)] border-transparent rounded-full">
              Enter The Marketplace
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-10 font-mono text-base border-border bg-card/50 hover:bg-card hover:text-white rounded-full">
              Join Discord
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
