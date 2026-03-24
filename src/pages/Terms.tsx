import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 markdown-body">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <h1 className="text-5xl font-display font-bold text-white mb-12">Terms of Service</h1>
        
        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">1. Terms</h2>
        <p className="text-neutral-400 leading-relaxed">
          By accessing the website at <a href="https://ultrascale.ai" className="text-primary hover:underline">https://ultrascale.ai</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
        </p>

        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">2. Use License</h2>
        <p className="text-neutral-400 leading-relaxed">
          Permission is granted to temporarily download one copy of the materials (information or software) on UltraScale AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on UltraScale AI's website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">3. Disclaimer</h2>
        <p className="text-neutral-400 leading-relaxed">
          The materials on UltraScale AI's website are provided on an 'as is' basis. UltraScale AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">4. Limitations</h2>
        <p className="text-neutral-400 leading-relaxed">
          In no event shall UltraScale AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on UltraScale AI's website, even if UltraScale AI or an UltraScale AI authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">5. Accuracy of materials</h2>
        <p className="text-neutral-400 leading-relaxed">
          The materials appearing on UltraScale AI's website could include technical, typographical, or photographic errors. UltraScale AI does not warrant that any of the materials on its website are accurate, complete or current. UltraScale AI may make changes to the materials contained on its website at any time without notice. However UltraScale AI does not make any commitment to update the materials.
        </p>

        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">6. Links</h2>
        <p className="text-neutral-400 leading-relaxed">
          UltraScale AI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by UltraScale AI of the site. Use of any such linked website is at the user's own risk.
        </p>

        <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">7. Modifications</h2>
        <p className="text-neutral-400 leading-relaxed">
          UltraScale AI may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </p>
      </motion.div>
    </div>
  );
}
