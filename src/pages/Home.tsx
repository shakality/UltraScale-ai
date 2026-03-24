import { motion } from 'motion/react';
import Upscaler from '../components/Upscaler';
import AdPlaceholder from '../components/AdPlaceholder';
import { Sparkles, Shield, Zap, Globe, CheckCircle2, HelpCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        {/* Hero Section with Tool */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                  <Sparkles className="w-3.5 h-3.5" /> Next-Gen AI Engine
                </div>
                <h1 className="text-6xl md:text-7xl font-display font-bold tracking-tight text-white leading-[0.95] mb-6">
                  UltraScale <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-orange-400">Pro 2026</span>
                </h1>
                <p className="text-lg text-neutral-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  The world's most powerful unrestricted AI upscaler. Enhance images and videos to 8K resolution with zero filters and total privacy.
                </p>
                
                <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-display font-bold text-white">40M+</span>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Files Processed</span>
                  </div>
                  <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-display font-bold text-white">99.9%</span>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Uptime</span>
                  </div>
                  <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-display font-bold text-white">0</span>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Content Filters</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Upscaler />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ad Placeholder 1 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <AdPlaceholder label="Premium Partner" className="min-h-[90px]" />
        </div>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-display font-bold text-white">Professional Capabilities</h2>
            <p className="text-neutral-500 max-w-xl mx-auto">Built for high-volume creators who demand quality without compromise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Unrestricted Access", desc: "No NSFW filters. No moral policing. Just high-performance AI for your content." },
              { icon: Zap, title: "8K Neural Upscaling", desc: "Our 2026 models reconstruct textures at a sub-pixel level for unmatched clarity." },
              { icon: Globe, title: "GPU Cluster Power", desc: "Instant processing via dedicated NVIDIA H100 clusters in the cloud." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card space-y-4 group hover:bg-white/10 transition-all border-white/5"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-inherit" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 markdown-body">
          <div className="p-8 glass rounded-3xl border-white/5">
            <h2 className="text-3xl font-display font-bold text-white mb-8">The Ultimate AI Upscaler for Adult Content Creators</h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed">
              <p>
                In the competitive landscape of 2026, content quality is the primary differentiator for successful creators. <strong>UltraScale AI</strong> provides a specialized solution for those working in the adult industry and other creative fields where mainstream AI tools impose restrictive NSFW filters.
              </p>
              <p>
                Our platform uses the latest neural network architectures to upscale older phone footage, low-resolution webcams, and legacy content into stunning 4K and 8K masterpieces. By removing the "censorship layer" found in tools like Adobe or Topaz, we give you full control over your creative output.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Unrestricted Image & Video Enhancement</h3>
              <p>
                Why settle for blurry content when you can offer your subscribers a premium viewing experience? UltraScale AI is optimized for human skin textures, lighting, and movement, ensuring that your upscaled content looks natural and professional.
              </p>
              <ul className="space-y-4">
                <li><strong>No Content Blocking:</strong> We never scan your files for "inappropriate" content. Your privacy is our priority.</li>
                <li><strong>Batch Processing:</strong> Our cloud infrastructure handles multiple requests simultaneously, saving you hours of rendering time.</li>
                <li><strong>Privacy-First Architecture:</strong> Files are processed in volatile memory and purged immediately after the session ends.</li>
              </ul>
            </div>

            <div className="mt-20 space-y-8">
              <h2 className="text-3xl font-display font-bold text-white">Why UltraScale AI is the #1 Choice for Creators</h2>
              <div className="space-y-6 text-neutral-400">
                <p>
                  When searching for the <strong>best AI upscaler for NSFW content</strong>, most users find themselves blocked by "Safety Filters" on platforms like Google Cloud, AWS, or Topaz Labs. UltraScale AI was built specifically to bypass these limitations. Whether you are an <strong>OnlyFans creator</strong> looking to upscale low-res webcam footage or a digital artist needing <strong>8K neural enhancement</strong> for private commissions, our engine delivers.
                </p>
                <p>
                  Our 2026 neural models are trained on over 500 million high-fidelity images, specifically focusing on <strong>skin texture reconstruction</strong>, <strong>motion blur removal</strong>, and <strong>low-light noise reduction</strong>. This makes it the perfect tool for <strong>upscaling adult videos</strong> and <strong>enhancing amateur photos</strong> to professional studio quality.
                </p>
              </div>

              <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-primary" /> FAQ
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { q: "Is it really unrestricted?", a: "Yes. We do not use any NSFW filtering models. You can upscale any content you have the rights to." },
                  { q: "What formats are supported?", a: "We support all modern formats: MP4, MOV, WEBM for video; JPG, PNG, WEBP, HEIC for images." },
                  { q: "Do you store my files?", a: "No. We utilize ephemeral cloud storage that is wiped automatically every 60 minutes." }
                ].map((faq, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                    <p className="text-neutral-400 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ad Placeholder 2 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <AdPlaceholder label="Sponsored" className="min-h-[150px]" />
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "UltraScale AI",
          "url": "https://ultrascale.ai",
          "description": "Unrestricted AI image and video upscaler for high-quality content enhancement.",
          "applicationCategory": "MultimediaApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}
      </script>
    </div>
  );
}
