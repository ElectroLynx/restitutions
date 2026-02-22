import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-50 font-[family-name:var(--font-inter)]">
      <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-space)]">Page non trouvée</h2>
      <p className="text-slate-400 mb-8">Désolé, la page que vous cherchez n&apos;existe pas.</p>
      <Link href="/" className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 transition-colors">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
