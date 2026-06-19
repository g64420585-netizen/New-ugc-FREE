import React from "react";
import { Hexagon, Twitter, Github, MessageSquare } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="relative flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg">
                <Hexagon className="w-5 h-5 text-primary" strokeWidth={2} />
              </div>
              <span className="font-mono text-xl font-bold tracking-tight text-white">UGC Free</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              The premier destination for elite Roblox UGC collectors. Discover, trade, and showcase the most exclusive limited-edition items on the platform.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-white font-bold mb-4 uppercase tracking-wider text-sm">Marketplace</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">All Items</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">New Drops</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Trending</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Creators</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-white font-bold mb-4 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Community Guidelines</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Creator Application</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} UGC Free. Not affiliated with Roblox Corporation.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
