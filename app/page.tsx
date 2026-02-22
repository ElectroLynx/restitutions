'use client';

import {motion} from 'motion/react';
import {BookOpen, Flame, Landmark, ExternalLink} from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  grade?: string;
  icon?: React.ReactNode;
  color?: 'cyan' | 'purple' | 'amber' | 'emerald' | 'rose';
}

const colorMap = {
  cyan: 'border-cyan-500/20 hover:border-cyan-400/50 shadow-cyan-500/10 hover:shadow-cyan-500/20 text-cyan-400',
  purple:
    'border-purple-500/20 hover:border-purple-400/50 shadow-purple-500/10 hover:shadow-purple-500/20 text-purple-400',
  amber:
    'border-amber-500/20 hover:border-amber-400/50 shadow-amber-500/10 hover:shadow-amber-500/20 text-amber-400',
  emerald:
    'border-emerald-500/20 hover:border-emerald-400/50 shadow-emerald-500/10 hover:shadow-emerald-500/20 text-emerald-400',
  rose: 'border-rose-500/20 hover:border-rose-400/50 shadow-rose-500/10 hover:shadow-rose-500/20 text-rose-400',
};

const bgMap = {
  cyan: 'bg-cyan-950/10 hover:bg-cyan-900/20',
  purple: 'bg-purple-950/10 hover:bg-purple-900/20',
  amber: 'bg-amber-950/10 hover:bg-amber-900/20',
  emerald: 'bg-emerald-950/10 hover:bg-emerald-900/20',
  rose: 'bg-rose-950/10 hover:bg-rose-900/20',
};

function ProjectCard({
  title,
  description,
  link,
  grade,
  icon,
  color = 'cyan',
}: ProjectCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block h-full group">
      <motion.div
        whileHover={{y: -5, scale: 1.02}}
        whileTap={{scale: 0.98}}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3}}
        className={`h-full relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 ${colorMap[color]} ${bgMap[color]} p-6`}
      >
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-current opacity-10 blur-3xl rounded-full pointer-events-none group-hover:opacity-20 transition-opacity" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl bg-slate-950/50 border border-white/5 ${colorMap[color].split(' ').pop()}`}>
              {icon}
            </div>
            {grade && (
              <div className="px-3 py-1 rounded-full bg-slate-950/50 border border-white/10 text-xs font-mono font-bold tracking-wider text-slate-300">
                {grade}
              </div>
            )}
          </div>

          <h3 className="text-xl font-bold font-[family-name:var(--font-space)] text-slate-100 mb-2 group-hover:text-white transition-colors">
            {title}
          </h3>
          
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-[family-name:var(--font-inter)]">
            {description}
          </p>

          <div className="flex items-center text-xs font-medium uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity mt-auto">
            Voir le projet <ExternalLink className="ml-2 w-3 h-3" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  const projects = [
    {
      title: 'Hugo contre le Minotaure',
      description:
        'Un questionnaire interactif sur le livre "Hugo contre le Minotaure". J\'ai obtenu la note de 20/20.',
      link: 'https://forms.office.com/r/DJYcdmdCXJ',
      grade: '20/20',
      color: 'cyan' as const,
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: 'Eragon - Tome 1',
      description:
        "Une présentation Keynote immersive sur le premier livre de la saga Eragon. J'ai obtenu la note de 20/20.",
      link: 'https://electrolynx.github.io/eragon-abecedaire/',
      grade: '20/20',
      color: 'purple' as const,
      icon: <Flame className="w-6 h-6" />,
    },
    {
      title: 'Notre-Dame de Paris',
      description:
        "Un jeu de mot mystère basé sur l'œuvre monumentale de Victor Hugo, Notre-Dame de Paris.",
      link: 'https://electrolynx.github.io/notre-dame-de-paris/',
      grade: 'En attente',
      color: 'amber' as const,
      icon: <Landmark className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-50 font-[family-name:var(--font-inter)] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <header className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono uppercase tracking-widest"
          >
            Portfolio Scolaire
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400"
          >
            Mes Restitutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Bienvenue sur mon espace de présentation. Retrouvez ici mes exposés,
            questionnaires et projets réalisés en classe.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <footer className="mt-32 text-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Mes Restitutions. Fait avec passion.</p>
        </footer>
      </div>
    </main>
  );
}
