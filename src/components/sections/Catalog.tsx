import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { items, type Item, Rarity } from "@/lib/data";
import { Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RobloxModal } from "@/components/ui/RobloxModal";

export function Catalog() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const categories = ["All", "Legendary", "Mythic", "Epic", "Rare", "Uncommon"];
  const filteredItems = items.filter(item => filter === "All" || item.rarity === filter);

  return (
    <>
      <RobloxModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      <section className="py-24 bg-background relative z-10 min-h-[80vh]">
        <div className="container mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">The Vault</h2>
            <p className="text-muted-foreground text-lg">
              Browse the complete collection of verified limited-edition items. Verified ownership, secure transfers.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-mono font-medium transition-all ${
                    filter === cat
                      ? "bg-primary text-white shadow-[0_0_10px_rgba(222,21,54,0.4)] border-transparent"
                      : "bg-secondary text-muted-foreground border border-border hover:border-primary/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search items..."
                className="pl-10 bg-secondary border-border focus-visible:ring-primary h-10 w-full font-mono text-sm"
              />
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all flex flex-col h-full"
                >
                  <div className="relative p-6 bg-secondary/30 aspect-square flex items-center justify-center overflow-hidden">
                    <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded text-[10px] font-mono font-bold uppercase text-white">
                      {item.tag || "Classic"}
                    </div>
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-primary font-medium">{item.rarity}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight mb-1">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4">By {item.creator}</p>

                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                      <div className="font-mono font-bold text-white flex items-center gap-1">
                        <span className="text-green-400 text-xs">R$</span> {item.price}
                      </div>
                      <button
                        data-testid={`button-claim-${item.id}`}
                        onClick={() => setSelectedItem(item)}
                        className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-primary/10"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
