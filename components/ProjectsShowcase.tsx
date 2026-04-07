'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronLeft, ChevronRight, Image as ImageIcon, Eye } from 'lucide-react';

type Category = 'All' | 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile Apps';

const categories: Category[] = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile Apps'];

const projects = [
  {
    id: 'kangpack',
    title: 'Kangpack',
    description: 'A comprehensive full-stack platform featuring modern packaging solutions. Built for scale, providing seamless e-commerce tracking and ordering experiences.',
    category: 'Full Stack',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB', 'Stripe'],
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
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Framer Motion'],
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-6 lg:p-10"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-4 bg-white/10 hover:bg-[#22C55E] rounded-full text-white transition-all z-[110] border border-white/10 hover:scale-110 active:scale-95"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative w-full h-full max-w-7xl mx-auto flex flex-col justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-8">
          <h3 className="text-4xl md:text-6xl font-agency font-bold text-white tracking-widest uppercase mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            {project.title}
          </h3>
          <div className="inline-flex px-6 py-2 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-sm font-bold uppercase tracking-widest">
            {mediaItems[currentIndex].label}
          </div>
        </div>

        <div className="relative aspect-video w-full max-h-[70vh] flex items-center justify-center group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {mediaItems[currentIndex].type === 'video' ? (
                <video
                  src={mediaItems[currentIndex].src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                />
              ) : (
                <img
                  src={mediaItems[currentIndex].src}
                  alt={mediaItems[currentIndex].label}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                />
              )}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 p-3 md:p-4 bg-black/50 hover:bg-[#22C55E] border border-white/10 rounded-2xl text-white backdrop-blur-md transition-all group-hover:translate-x-0 opacity-100"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 p-3 md:p-4 bg-black/50 hover:bg-[#22C55E] border border-white/10 rounded-2xl text-white backdrop-blur-md transition-all group-hover:translate-x-0 opacity-100"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-8 overflow-x-auto pb-4 scrollbar-hide">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 md:w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                currentIndex === index 
                  ? 'border-[#22C55E] scale-110 shadow-lg' 
                  : 'border-white/10 opacity-50 hover:opacity-100'
              }`}
            >
              {item.type === 'video' ? (
                <div className="w-full h-full bg-black flex items-center justify-center"><Eye className="w-6 h-6 text-white" /></div>
              ) : (
                <img src={item.src} className="w-full h-full object-cover" />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, onOpenGallery }: { project: Project; onOpenGallery: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full shrink-0 snap-center px-4 md:px-0"
    >
      <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-0 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-0 lg:gap-20 backdrop-blur-sm group/project hover:bg-white/[0.07] transition-all duration-500 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#22C55E]/10 to-transparent blur-[100px] pointer-events-none" />
        
        {/* Media Section */}
        <div className="w-full lg:w-1/2 relative group/image order-1 lg:order-2 self-stretch">
          <div className="relative aspect-[16/10] lg:aspect-square md:rounded-2xl overflow-hidden bg-black/40 border-b md:border border-white/10 shadow-2xl transform transition-transform duration-700 group-hover/project:scale-[1.02] group-hover/project:rotate-0.5 h-full">
             <video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover/project:opacity-100 transition-opacity" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6 md:p-8">
                <div 
                  className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold flex items-center gap-2 cursor-pointer hover:bg-[#22C55E] transition-all transform hover:scale-105 active:scale-95 text-[10px] md:text-base"
                  onClick={onOpenGallery}
                >
                  <Eye className="w-4 h-4 md:w-5 md:h-5 text-[#22C55E] group-hover:text-white" />
                  Visual Insight
                </div>
             </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-[#22C55E]/15 to-[#0EA5E9]/15 blur-3xl opacity-0 group-hover/project:opacity-100 transition-opacity -z-10" />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 z-10 order-2 lg:order-1 text-left p-6 md:p-0">
          <div className="space-y-2 md:space-y-4">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-[10px] md:text-xs font-bold uppercase tracking-widest">
              {project.category}
            </span>
            <h3 className="font-agency text-3xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#22C55E] group-hover:to-[#0EA5E9] transition-all duration-500">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-400 text-sm md:text-lg lg:text-xl leading-relaxed font-sora line-clamp-4 lg:line-clamp-none">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 md:px-4 md:py-2 rounded-xl bg-white/5 text-gray-400 font-sora text-[10px] md:text-sm border border-white/5 group-hover:border-[#22C55E]/30 transition-colors">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-row items-center gap-3 pt-4 md:pt-8 w-full">
            <button
              onClick={onOpenGallery}
              className="btn-primary flex-1 md:flex-none"
            >
              <ImageIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
              Gallery
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 md:flex-none"
            >
              Visit
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  const handleScroll = (direction: 'next' | 'prev') => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const target = direction === 'next' ? scrollLeft + offsetWidth : scrollLeft - offsetWidth;
      scrollRef.current.scrollTo({ left: target, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative bg-[#0B0F19] overflow-hidden">
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-[#0EA5E9]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-[#22C55E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-agency text-3xl md:text-7xl font-bold uppercase tracking-tight mb-6"
          >
            Digital <span className="text-gradient">Masterpieces</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-sora"
          >
            A curated selection of high-performance digital products engineered for excellence.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10 md:mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 md:px-8 md:py-3 rounded-2xl text-xs md:text-sm font-sora font-semibold transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#22C55E] to-[#0EA5E9] text-white border-transparent shadow-[0_0_20px_rgba(34,197,94,0.4)] scale-105'
                  : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="relative group">
          {filteredProjects.length > 0 && (
            <div className="flex absolute -left-4 -right-4 md:-left-16 md:-right-16 top-1/2 -translate-y-1/2 justify-between z-30 pointer-events-none px-2 md:px-0">
              <button
                onClick={() => handleScroll('prev')}
                className="p-3 md:p-4 rounded-2xl bg-black/60 text-white hover:bg-[#22C55E] backdrop-blur-md border border-white/10 pointer-events-auto transition-all hover:scale-110 active:scale-95 shadow-2xl opacity-100"
              >
                <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
              </button>
              <button
                onClick={() => handleScroll('next')}
                className="p-3 md:p-4 rounded-2xl bg-black/60 text-white hover:bg-[#22C55E] backdrop-blur-md border border-white/10 pointer-events-auto transition-all hover:scale-110 active:scale-95 shadow-2xl opacity-100"
              >
                <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
              </button>
            </div>
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 w-full px-2"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenGallery={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <motion.div className="w-full text-center py-32 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                <h3 className="text-3xl font-agency font-bold text-white mb-4 uppercase tracking-wider">Innovations Pending</h3>
                <p className="text-gray-400 font-sora max-w-md mx-auto">We're currently finalizing exciting new projects. Check back soon for our latest masterpieces.</p>
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
