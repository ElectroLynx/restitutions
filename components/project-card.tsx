'use client';

import {motion} from 'motion/react';
import {ExternalLink} from 'lucide-react';
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

export function ProjectCard({
  title,
  description,
  link,
  grade,
  icon,
  color = 'cyan',
}: ProjectCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      <motion.div
        whileHover={{y: -5, scale: 1.02}}
        whileTap={{scale: 0.98}}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3}}
        className={`h-full relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-colors duration-300 ${colorMap[color]} ${bgMap[color]} p-6 group`}
      >
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-current opacity-10 blur-3xl rounded-full pointer-events-none group-hover:opacity-20 transition-opacity" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl bg-slate-950/50 border border-white/5 ${colorMap[color].split(' ').pop()}`}>
              {icon}
            </div>
            {grade && (
              <div className="px-3 py-1 rounded-full bg-slate-950/50 border border-white/10 text-xs font-mono font-bold tracking-wider">
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

          <div className="flex items-center text-xs font-medium uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
            Voir le projet <ExternalLink className="ml-2 w-3 h-3" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
