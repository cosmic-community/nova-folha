import Link from 'next/link';
import { GrowthJournalEntry } from '@/types';
import WeatherIcon from '@/components/WeatherIcon';
import SentimentBadge from '@/components/SentimentBadge';
import { Calendar } from 'lucide-react';

export default function JournalCard({ entry }: { entry: GrowthJournalEntry }) {
  const date = new Date(entry.created_at).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Link 
      href={`/journal/${entry.slug}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-emerald-100 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          {entry.metadata?.clima_interior && (
            <div className="bg-gray-50 p-1.5 rounded-full" title={entry.metadata.clima_interior}>
              <WeatherIcon climate={entry.metadata.clima_interior} />
            </div>
          )}
        </div>
        
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
          {entry.title}
        </h3>
        
        <div className="mb-4">
          <SentimentBadge sentiment={entry.metadata?.sentimento} />
        </div>
        
        <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
          {entry.metadata?.reflexao.replace(/[#*`]/g, '')}
        </p>
      </div>
      
      {entry.metadata?.imagem && (
        <div className="h-48 overflow-hidden bg-gray-100">
          <img 
            src={`${entry.metadata.imagem.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={entry.title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </div>
      )}
    </Link>
  );
}