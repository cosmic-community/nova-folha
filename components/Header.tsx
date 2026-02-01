import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-emerald-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-emerald-100 p-2 rounded-full group-hover:bg-emerald-200 transition-colors">
            <Leaf className="w-5 h-5 text-emerald-700" />
          </div>
          <span className="font-serif font-bold text-xl text-emerald-900">Nova Folha</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link href="/journal" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
            Diário
          </Link>
          <Link href="/inspirations" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">
            Inspirações
          </Link>
        </nav>
      </div>
    </header>
  );
}