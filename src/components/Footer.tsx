import { Link } from 'react-router-dom';
import { Maximize2, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1.5 rounded-lg group-hover:bg-accent transition-colors">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">UltraScale<span className="text-primary">AI</span></span>
            </Link>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              The world's first unrestricted AI upscaler for high-quality image and video enhancement. No filters, no limits. Perfect for creators and adult content.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About Us</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
              <li><Link to="/terms" className="nav-link">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="nav-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="nav-link">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="nav-link">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">© 2026 UltraScale AI. All rights reserved.</p>
          <p className="text-neutral-500 text-sm">Designed for creators, by creators.</p>
        </div>
      </div>
    </footer>
  );
}
