'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const projects = [
  {
    title: 'AI Customer Support Agent',
    description: 'A custom LLM-powered chatbot that reduced support tickets by 40% for a leading e-commerce brand.',
    image: 'https://picsum.photos/seed/ai-support/800/600',
    tags: ['Next.js', 'OpenAI', 'Tailwind'],
  },
  {
    title: 'Predictive Analytics Dashboard',
    description: 'A real-time dashboard that uses machine learning to forecast sales trends with 95% accuracy.',
    image: 'https://picsum.photos/seed/analytics/800/600',
    tags: ['React', 'Python', 'AWS'],
  },
  {
    title: 'Automated Content Generator',
    description: 'A SaaS platform that generates high-quality blog posts and social media content using generative AI.',
    image: 'https://picsum.photos/seed/content-gen/800/600',
    tags: ['Vue.js', 'Node.js', 'Gemini'],
  },
];

function TiltCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-[400px] rounded-2xl overflow-hidden cursor-pointer group"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10" />
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20" style={{ transform: "translateZ(50px)" }}>
        <h3 className="font-agency text-2xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="py-32 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-agency text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6"
          >
            Featured <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Explore how we've helped startups launch their MVPs and scale with AI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <TiltCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
