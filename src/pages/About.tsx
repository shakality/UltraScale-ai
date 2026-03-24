import { motion } from 'motion/react';
import { Target, Users, ShieldCheck, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 space-y-6"
      >
        <h1 className="text-5xl font-display font-bold text-white">Our Mission</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          We believe in creative freedom. UltraScale AI was founded to provide creators with the high-performance tools they need to enhance their content without restrictive filters.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <div className="glass-card space-y-6">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">Why We Exist</h2>
          <p className="text-neutral-400 leading-relaxed">
            For too long, mainstream AI companies have dictated what content is "acceptable" to enhance. This has left thousands of creators—from adult content producers to independent filmmakers—without access to the best technology. We're here to change that.
          </p>
        </div>

        <div className="glass-card space-y-6">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">Privacy First</h2>
          <p className="text-neutral-400 leading-relaxed">
            Your content is your business. We don't store your uploads, we don't track your results, and we don't share your data. Our cloud-powered processing is entirely ephemeral, ensuring your privacy is never compromised.
          </p>
        </div>
      </div>

      <section className="text-center space-y-12">
        <h2 className="text-3xl font-display font-bold text-white">Powered by Open Source</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {['PyTorch', 'TensorFlow', 'AWS GPU', 'NVIDIA', 'OpenCV'].map((tech) => (
            <div key={tech} className="px-6 py-3 glass rounded-full text-neutral-400 font-semibold border-white/5">
              {tech}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
