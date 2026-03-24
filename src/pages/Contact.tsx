import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, HelpCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 space-y-6"
      >
        <h1 className="text-5xl font-display font-bold text-white tracking-tight">Get in Touch</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Have questions about our AI technology or need enterprise support? Our team is here to help.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="glass-card space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-white">Email Support</h3>
            <p className="text-neutral-400">For general inquiries and technical support, reach out to us at:</p>
            <a href="mailto:support@ultrascale.ai" className="text-primary font-semibold hover:text-accent transition-colors">support@ultrascale.ai</a>
          </div>

          <div className="glass-card space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-white">Enterprise & Bulk</h3>
            <p className="text-neutral-400">Need to upscale thousands of videos? Contact our sales team for custom API solutions.</p>
            <a href="mailto:sales@ultrascale.ai" className="text-primary font-semibold hover:text-accent transition-colors">sales@ultrascale.ai</a>
          </div>
        </div>

        <div className="glass-card">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
