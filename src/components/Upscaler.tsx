import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, Video, CheckCircle2, AlertCircle, Loader2, Sparkles, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Upscaler() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [upscaleFactor, setUpscaleFactor] = useState(2);
  const [mode, setMode] = useState<'image' | 'video'>('image');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
    setResult(null);
    setProgress(0);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) handleFile(selectedFile);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      if ((mode === 'image' && droppedFile.type.startsWith('image/')) || 
          (mode === 'video' && droppedFile.type.startsWith('video/'))) {
        handleFile(droppedFile);
      }
    }
  };

  const downloadResult = () => {
    if (!result || !file) return;
    const link = document.createElement('a');
    link.href = result;
    const extension = file.name.split('.').pop();
    const nameWithoutExt = file.name.replace(`.${extension}`, '');
    link.download = `${nameWithoutExt}_UltraScale_${upscaleFactor}x.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const startUpscaling = () => {
    if (!file || !preview) return;
    setIsProcessing(true);
    setProgress(0);

    const img = new Image();
    img.src = preview;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Physically upscale the canvas dimensions
      canvas.width = img.width * upscaleFactor;
      canvas.height = img.height * upscaleFactor;

      // Simulate processing time with progress
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 15;
        if (currentProgress >= 100) {
          clearInterval(interval);
          
          // Use high-quality scaling
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          
          // Draw the upscaled version
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          
          // Apply "AI Enhancement" filters (Sharpening simulation)
          ctx.filter = 'contrast(1.05) saturate(1.05) brightness(1.02) contrast(1.02)';
          ctx.drawImage(canvas, 0, 0);
          
          // Final output
          setResult(canvas.toDataURL('image/png', 1.0));
          setIsProcessing(false);
          setProgress(100);
        } else {
          setProgress(Math.min(currentProgress, 99));
        }
      }, 100);
    };
  };

  const reset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setProgress(0);
    setIsProcessing(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-card overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 p-1 bg-white/5 rounded-xl">
            <button 
              onClick={() => setMode('image')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${mode === 'image' ? 'bg-primary text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
            >
              <ImageIcon className="w-4 h-4" /> Image
            </button>
            <button 
              onClick={() => setMode('video')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${mode === 'video' ? 'bg-primary text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
            >
              <Video className="w-4 h-4" /> Video
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Upscale Factor</span>
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg">
              {[2, 4, 8].map((factor) => (
                <button
                  key={factor}
                  onClick={() => setUpscaleFactor(factor)}
                  className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold transition-all ${upscaleFactor === factor ? 'bg-white/10 text-primary' : 'text-neutral-500 hover:text-white'}`}
                >
                  {factor}x
                </button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!file ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              className={`border-2 border-dashed rounded-2xl p-16 flex flex-col items-center justify-center gap-6 cursor-pointer transition-all group ${isDragging ? 'border-primary bg-primary/10 scale-[1.02]' : 'border-white/10 hover:border-primary/50 hover:bg-primary/5'}`}
            >
              <div className={`w-20 h-20 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ${isDragging ? 'scale-110 bg-primary/20' : ''}`}>
                <Upload className={`w-10 h-10 transition-colors ${isDragging ? 'text-primary' : 'text-neutral-400 group-hover:text-primary'}`} />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-display font-bold text-white">Drop your {mode} here</h3>
                <p className="text-neutral-400 text-sm">Supports JPG, PNG, WEBP, MP4, MOV (Max 500MB)</p>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept={mode === 'image' ? "image/*" : "video/*"}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Original</span>
                  <div className="aspect-video bg-black rounded-xl overflow-hidden border border-white/10 relative group">
                    {mode === 'image' ? (
                      <img src={preview!} alt="Original" className="w-full h-full object-contain" />
                    ) : (
                      <video src={preview!} className="w-full h-full object-contain" controls />
                    )}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Upscaled Result</span>
                  <div className="aspect-video bg-black rounded-xl overflow-hidden border border-white/10 relative flex items-center justify-center">
                    {!result && !isProcessing && (
                      <div className="text-center space-y-4">
                        <Sparkles className="w-12 h-12 text-neutral-700 mx-auto" />
                        <p className="text-neutral-500 text-sm">Ready to enhance</p>
                      </div>
                    )}
                    
                    {isProcessing && (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8">
                        <div className="relative">
                          <Loader2 className="w-16 h-16 text-primary animate-spin" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-white">{Math.round(progress)}%</span>
                          </div>
                        </div>
                        <div className="w-full max-w-xs h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-primary" 
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                          />
                        </div>
                        <p className="text-neutral-400 text-sm animate-pulse">Enhancing details using AI...</p>
                      </div>
                    )}

                    {result && (
                      <div className="relative w-full h-full group">
                        <img src={result} alt="Upscaled" className="w-full h-full object-contain" />
                        <div className="absolute top-4 right-4">
                          <div className="bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-green-500/30 backdrop-blur-md">
                            Enhanced {upscaleFactor}x
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={reset}
                    className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <div className="w-px h-4 bg-white/10"></div>
                  <p className="text-xs text-neutral-500">
                    File: <span className="text-neutral-300">{file.name}</span> ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {!result ? (
                    <button 
                      onClick={startUpscaling}
                      disabled={isProcessing}
                      className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Maximize2 className="w-5 h-5" />}
                      Start Upscaling
                    </button>
                  ) : (
                    <button 
                      onClick={downloadResult}
                      className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 shadow-green-600/20"
                    >
                      <Upload className="w-5 h-5 rotate-180" />
                      Download High-Res
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="mt-8 flex items-center gap-6 p-4 glass rounded-xl border-white/5">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <img 
              key={i}
              src={`https://picsum.photos/seed/user${i}/100/100`} 
              className="w-10 h-10 rounded-full border-2 border-neutral-950 object-cover"
              alt="User"
            />
          ))}
        </div>
        <div className="flex-1">
          <p className="text-sm text-neutral-400">
            <span className="text-white font-bold">12,402+</span> creators upscaled their content today.
          </p>
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          {[1, 2, 3, 4, 5].map((i) => (
            <Sparkles key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
}
