export default function SentimentBadge({ sentiment }: { sentiment?: string }) {
  if (!sentiment) return null;

  const getColors = (s: string) => {
    const lower = s.toLowerCase();
    if (lower === 'esperançoso' || lower === 'esperancoso') return 'bg-amber-100 text-amber-800 border-amber-200';
    if (lower === 'forte') return 'bg-red-100 text-red-800 border-red-200';
    if (lower === 'rejuvenescido') return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    if (lower === 'grato') return 'bg-blue-100 text-blue-800 border-blue-200';
    if (lower === 'reflexivo') return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getColors(sentiment)}`}>
      {sentiment}
    </span>
  );
}