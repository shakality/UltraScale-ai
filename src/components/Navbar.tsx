import { Link } from 'react-router-dom';
import { Maximize2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-lg group-hover:bg-accent transition-colors">
              <Maximize2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">UltraScale<span className="text-primary">AI</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/privacy-policy" className="nav-link">Privacy</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
