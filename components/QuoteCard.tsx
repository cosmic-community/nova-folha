import { Inspiration } from '@/types';
import { Quote } from 'lucide-react';

export default function QuoteCard({ inspiration }: { inspiration: Inspiration }) {
  return (
    <div className="bg-earth-50 p-8 rounded-2xl border border-earth-200 relative">
      <Quote className="absolute top-6 left-6 w-8 h-8 text-earth-300 opacity-50" />
      <div className="relative z-10 text-center">
        <blockquote className="font-serif text-lg text-earth-900 italic mb-4">
          "{inspiration.metadata?.frase}"
        </blockquote>
        {inspiration.metadata?.autor && (
          <cite className="block text-sm font-medium text-earth-600 not-italic uppercase tracking-wide">
            — {inspiration.metadata.autor}
          </cite>
        )}
      </div>
    </div>
  );
}