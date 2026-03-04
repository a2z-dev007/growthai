'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

type Category = 'All' | 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile Apps';

const categories: Category[] = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile Apps'];

const projects = [
  {
    id: 'kangpack',
    title: 'Kangpack',
    description: 'A comprehensive full-stack platform featuring modern packaging solutions. Built for scale, providing seamless e-commerce tracking and ordering experiences.',
    category: 'Full Stack',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'Mongoose', 'MongoDB', 'Stripe', 'Shadcn UI', 'Tailwind CSS', 'Framer Motion'],
    images: {
      laptop: '/projects/kangpack/kangpack-laptop.webp',
      tablet: '/projects/kangpack/kangpack-tab.webp',
      mobile: '/projects/kangpack/kangpack-mobile.webp',
    },
    video: '/projects/kangpack/kangpack-video.webm',
    link: 'https://kangpack.in',
  },
  {
    id: 'ner-solar',
    title: 'NER Solar',
    description: 'A forward-thinking interactive platform for solar energy. Offering sleek dashboard integrations and complex data visualizations for energy quotes.',
    category: 'Full Stack',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'Mongoose', 'MongoDB', 'Stripe', 'Shadcn UI', 'Tailwind CSS', 'Framer Motion'],
    images: {
      laptop: '/projects/ner-solar/ner-laptop.webp',
      tablet: '/projects/ner-solar/ner-tab.webp',
      mobile: '/projects/ner-solar/ner-mobile.webp',
    },
    video: '/projects/ner-solar/ner-laptop-video.webm',
    link: 'https://ner-solar.netlify.app/',
  },
];

type Project = typeof projects[0];

function ProjectGalleryModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const mediaItems = [
    { type: 'video', src: project.video, label: 'Demo Video' },
    { type: 'image', src: project.images.laptop, label: 'Desktop View' },
    { type: 'image', src: project.images.tablet, label: 'Tablet View' },
    { type: 'image', src: project.images.mobile, label: 'Mobile View' },
  ].filter((item) => item.src);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const currentMedia = mediaItems[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-6 lg:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110] shadow-md border border-white/10 hover:scale-105"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative w-full h-full max-w-[1600px] mx-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title & Badge */}
        <div className="text-center shrink-0 mt-2 md:mt-4">
          <h3 className="text-3xl lg:text-5xl font-agency font-bold text-white tracking-widest uppercase mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            {project.title}
          </h3>
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/50 text-[#22C55E] text-sm md:text-base font-sora font-medium tracking-wide shadow-[0_0_20px_rgba(34,197,94,0.15)]">
            {currentMedia.label}
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative w-full flex-1 flex items-center justify-center group my-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              {currentMedia.type === 'video' ? (
                <video
                  src={currentMedia.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                />
              ) : (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.label}
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4 px-2 md:px-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handlePrev}
              className="pointer-events-auto p-4 bg-black/60 hover:bg-[#22C55E] border border-white/20 hover:border-[#22C55E] rounded-full text-white backdrop-blur-xl transition-all shadow-2xl hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto p-4 bg-black/60 hover:bg-[#22C55E] border border-white/20 hover:border-[#22C55E] rounded-full text-white backdrop-blur-xl transition-all shadow-2xl hover:scale-110"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-4 mt-2 overflow-x-auto max-w-full pb-6 scrollbar-hide shrink-0 px-4">
          <div className="flex gap-4 md:gap-6 bg-black/40 p-3 md:p-4 rounded-2xl border border-white/5 backdrop-blur-xl">
            {mediaItems.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`relative h-20 md:h-28 aspect-video rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                  currentIndex === index
                    ? 'border-[#22C55E] scale-110 shadow-[0_0_30px_rgba(34,197,94,0.4)] z-10'
                    : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                {item.type === 'video' ? (
                  <video src={item.src} className="w-full h-full object-cover" />
                ) : (
                  <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                )}
                
                {/* Visual Indicator for Video */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-8 h-8 rounded-full bg-[#22C55E]/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <div className="w-2.5 h-2.5 rounded-sm bg-white ml-0.5" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                    </div>
                  </div>
                )}
                
                {/* Dark Overlay when not active */}
                {currentIndex !== index && <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectMediaCarousel({ project, onOpenGallery }: { project: Project; onOpenGallery: () => void }) {
  const mediaItems = [
    { type: 'video', src: project.video, label: 'Demo Video' },
    { type: 'image', src: project.images.laptop, label: 'Desktop View' },
    { type: 'image', src: project.images.tablet, label: 'Tablet View' },
    { type: 'image', src: project.images.mobile, label: 'Mobile View' },
  ].filter((item) => item.src);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const currentMedia = mediaItems[currentIndex];

  return (
    <div className="w-full relative aspect-[4/3] lg:aspect-[16/12] rounded-[2rem] overflow-hidden bg-black/20 border border-white/5 group/media shadow-2xl flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
           key={currentIndex}
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 1.05 }}
           transition={{ duration: 0.3 }}
           className="absolute inset-0 flex flex-col items-center justify-center p-6 pb-12"
        >
          {currentMedia.type === 'video' ? (
            <video
              src={currentMedia.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
            />
          ) : (
            <img
              src={currentMedia.src}
              className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
              alt={currentMedia.label}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-bold font-sora z-20 uppercase tracking-widest shadow-xl">
        {currentMedia.label}
      </div>

      {/* Hover Overlay for Gallery */}
      <div 
        className="absolute inset-0 z-30 bg-black/60 backdrop-blur-sm opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
        onClick={onOpenGallery}
      >
        <div className="px-6 py-3 rounded-full bg-[#22C55E] text-white font-bold font-sora flex items-center gap-2 transform translate-y-4 group-hover/media:translate-y-0 transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] border border-[#22C55E]/50">
          <ImageIcon className="w-5 h-5" />
          Open Full Gallery
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-40 flex items-center justify-between pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto p-3 bg-black/70 hover:bg-[#22C55E] border border-white/10 hover:border-[#22C55E] rounded-full text-white backdrop-blur-md transition-all shadow-xl hover:scale-110 opacity-0 group-hover/media:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto p-3 bg-black/70 hover:bg-[#22C55E] border border-white/10 hover:border-[#22C55E] rounded-full text-white backdrop-blur-md transition-all shadow-xl hover:scale-110 opacity-0 group-hover/media:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-40 flex justify-center gap-2 pointer-events-auto">
        {mediaItems.map((_, idx) => (
          <button 
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#22C55E] w-8 shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-white/40 hover:bg-white/80 w-2'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  const handleScrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const handleScrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative bg-[#0B0F19] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-[#0EA5E9]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-[#22C55E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-agency text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-4"
          >
            Our <span className="text-gradient">Masterpieces</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-sora"
          >
            Explore our recent work spanning robust web platforms, sleek mobile applications, and powerful backend systems.
          </motion.p>
        </div>

        {/* Improved Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-3 mb-20"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-sora font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#22C55E] to-[#16a34a] text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] scale-105'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="relative w-full group">
          {filteredProjects.length > 1 && (
            <>
              <button
                onClick={handleScrollPrev}
                className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-30 p-4 bg-black/60 hover:bg-[#22C55E] border border-white/10 hover:border-[#22C55E] rounded-full text-white backdrop-blur-xl transition-all shadow-2xl hover:scale-110 opacity-0 group-hover:opacity-100 hidden md:flex cursor-pointer"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={handleScrollNext}
                className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-30 p-4 bg-black/60 hover:bg-[#22C55E] border border-white/10 hover:border-[#22C55E] rounded-full text-white backdrop-blur-xl transition-all shadow-2xl hover:scale-110 opacity-0 group-hover:opacity-100 hidden md:flex cursor-pointer"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 pt-4 w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full shrink-0 snap-center bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20 backdrop-blur-sm group/project"
                >
                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-8 z-20">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                      {project.category}
                    </div>
                    <h3 className="font-agency text-4xl lg:text-6xl font-bold text-white uppercase tracking-wide">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-sora">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-xl bg-black/40 text-gray-300 font-sora text-sm border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-8 pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#22C55E] text-white font-bold font-sora hover:bg-[#1ea34d] transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      <ImageIcon className="w-5 h-5" />
                      Show Gallery
                    </button>
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold font-sora hover:bg-white/10 transition-all border border-white/10 hover:scale-105"
                      >
                        Visit Site
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Media Carousel Composition */}
                <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
                  <ProjectMediaCarousel project={project} onOpenGallery={() => setSelectedProject(project)} />
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-sora text-white mb-2">More Projects Coming Soon!</h3>
              <p className="text-gray-400 font-sora">Stay tuned as we update our portfolio with incredible new products.</p>
            </motion.div>
          )}

          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectGalleryModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
