import { getJournalEntries } from '@/lib/cosmic';
import JournalCard from '@/components/JournalCard';
import { Leaf } from 'lucide-react';

export default async function JournalPage() {
  const entries = await getJournalEntries();

  return (
    <div className="py-16 bg-earth-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex p-3 bg-emerald-100 rounded-full mb-4">
            <Leaf className="w-6 h-6 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Seu Diário</h1>
          <p className="text-lg text-gray-600">
            Cada dia é uma nova folha. Explore seus pensamentos, sentimentos e crescimento.
          </p>
        </div>

        {entries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entries.map((entry) => (
              <JournalCard key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-lg">Seu jardim ainda está crescendo. Adicione sua primeira entrada.</p>
          </div>
        )}
      </div>
    </div>
  );
}