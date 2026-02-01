import { getInspirations } from '@/lib/cosmic';
import QuoteCard from '@/components/QuoteCard';
import { Sun } from 'lucide-react';

export default async function InspirationsPage() {
  const inspirations = await getInspirations();

  return (
    <div className="py-16 bg-earth-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex p-3 bg-amber-100 rounded-full mb-4">
            <Sun className="w-6 h-6 text-amber-500" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Inspirações</h1>
          <p className="text-lg text-gray-600">
            Palavras de sabedoria para regar sua jornada interior.
          </p>
        </div>

        {inspirations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
            {inspirations.map((inspiration) => (
              <QuoteCard key={inspiration.id} inspiration={inspiration} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-lg">Nenhuma inspiração encontrada no momento.</p>
          </div>
        )}
      </div>
    </div>
  );
}