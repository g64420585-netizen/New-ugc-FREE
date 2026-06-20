import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, ArrowRight, CheckCircle } from "lucide-react";
import { type Item } from "@/lib/data";
import { clientLogger } from "@/lib/logger";

interface Props {
  item: Item | null;
  onClose: () => void;
}

export function RobloxModal({ item, onClose }: Props) {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!username.trim()) return;
    setLoading(true);
    clientLogger.info("item_claim", `${username} pediu o item ${item?.name}`, {
      username: username.trim(),
      item: item?.name ?? "",
      rarity: item?.rarity ?? "",
      creator: item?.creator ?? "",
    });
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(
        "https://www.roblox.com/communities/432923469462/UGC_FREE",
        "_blank",
        "noopener,noreferrer"
      );
    }, 1500);
  }

  function handleClose() {
    setUsername("");
    setSubmitted(false);
    setLoading(false);
    onClose();
  }

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-card border border-border rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            <button
              onClick={handleClose}
              data-testid="button-close-modal"
              className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-secondary/60 flex items-center justify-center shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain drop-shadow-lg"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1">
                        {item.rarity}
                      </p>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Por {item.creator}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-sm text-muted-foreground mb-5">
                      Digite seu nome de usuário do Roblox para receber o item gratuitamente.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Seu username do Roblox"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          data-testid="input-roblox-username"
                          className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg text-white placeholder:text-muted-foreground text-sm font-mono focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={!username.trim() || loading}
                        data-testid="button-claim-item"
                        className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(222,21,54,0.3)] hover:shadow-[0_0_30px_rgba(222,21,54,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                            />
                            Processando...
                          </span>
                        ) : (
                          <>
                            Pegar Item Grátis <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Pedido Enviado!</h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    O item <span className="text-white font-semibold">{item.name}</span> será enviado para
                  </p>
                  <p className="text-primary font-mono font-bold mb-6">@{username}</p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2 bg-secondary border border-border text-muted-foreground hover:text-white rounded-lg text-sm transition-colors"
                  >
                    Fechar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
