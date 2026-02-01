import Link from 'next/link';
import { ArrowRight, Leaf, Sun } from 'lucide-react';
import { getJournalEntries, getInspirations } from '@/lib/cosmic';
import JournalCard from '@/components/JournalCard';
import QuoteCard from '@/components/QuoteCard';

export default async function Home() {
  const journalEntries = await getJournalEntries();
  const inspirations = await getInspirations();
  
  const latestEntries = journalEntries.slice(0, 3);
  const featuredInspiration = inspirations[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-800 rounded-full mb-6 animate-fade-in">
            <Leaf className="w-6 h-6 text-emerald-300 mr-2" />
            <span className="text-emerald-200 font-medium">Diário de Crescimento</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Uma nova folha vai crescer em sua vida
          </h1>
          <p className="text-xl md:text-2xl text-emerald-200/80 mb-10 max-w-2xl mx-auto font-light">
            Cultive esperança, força e rejuvenescimento. Como uma planta que abraça a luz do sol e a chuva gentil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/journal"
              className="inline-flex items-center px-8 py-3 rounded-full bg-amber-400 text-emerald-950 font-bold hover:bg-amber-300 transition-colors"
            >
              Ler Diário
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/inspirations"
              className="inline-flex items-center px-8 py-3 rounded-full bg-emerald-800 text-white font-medium hover:bg-emerald-700 transition-colors"
            >
              Buscar Inspiração
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Inspiration */}
      {featuredInspiration && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <Sun className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">Inspiração do Dia</h2>
            </div>
            <QuoteCard inspiration={featuredInspiration} />
          </div>
        </section>
      )}

      {/* Latest Entries */}
      <section className="py-20 bg-earth-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Últimas Reflexões</h2>
              <p className="text-gray-600">Acompanhe sua jornada de crescimento.</p>
            </div>
            <Link href="/journal" className="hidden sm:flex items-center text-emerald-700 hover:text-emerald-800 font-medium">
              Ver todas <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          {latestEntries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestEntries.map((entry) => (
                <JournalCard key={entry.id} entry={entry} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-500">Nenhuma entrada encontrada. Comece a escrever sua história.</p>
            </div>
          )}
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/journal" className="text-emerald-700 font-medium">
              Ver todas as entradas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}