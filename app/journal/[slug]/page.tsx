// app/journal/[slug]/page.tsx
import { getSingleEntry } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import WeatherIcon from '@/components/WeatherIcon';
import SentimentBadge from '@/components/SentimentBadge';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// NOTE: In Next.js 16, params is a Promise
export default async function JournalEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = await getSingleEntry(slug);

  if (!entry) {
    notFound();
  }

  const date = new Date(entry.created_at).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Header Image */}
      {entry.metadata?.imagem && (
        <div className="h-[40vh] w-full relative">
          <div className="absolute inset-0 bg-emerald-900/20 z-10" />
          <img 
            src={`${entry.metadata.imagem.imgix_url}?w=1600&h=600&fit=crop&auto=format,compress`}
            alt={entry.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto relative z-20 ${entry.metadata?.imagem ? '-mt-20' : 'mt-12'}`}>
          <div className="bg-white rounded-t-3xl shadow-lg p-8 md:p-12 border-b border-gray-100">
            
            <Link href="/journal" className="inline-flex items-center text-gray-500 hover:text-emerald-600 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Diário
            </Link>

            <div className="flex flex-wrap gap-4 items-center mb-6">
              <span className="flex items-center text-emerald-700 font-medium bg-emerald-50 px-3 py-1 rounded-full text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {date}
              </span>
              {entry.metadata?.clima_interior && (
                <span className="flex items-center bg-gray-50 px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-100">
                  <WeatherIcon climate={entry.metadata.clima_interior} className="w-4 h-4 mr-2" />
                  {entry.metadata.clima_interior}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              {entry.title}
            </h1>

            <div className="mb-8">
              <SentimentBadge sentiment={entry.metadata?.sentimento} />
            </div>

            <div className="prose prose-lg prose-emerald max-w-none font-serif text-gray-700 leading-relaxed">
              <ReactMarkdown>{entry.metadata?.reflexao}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}