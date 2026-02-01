import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CosmicBadge from '@/components/CosmicBadge';

export const metadata: Metadata = {
  title: 'Nova Folha - Diário de Crescimento',
  description: 'Um espaço para cultivar esperança e registrar seu crescimento pessoal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="/dashboard-console-capture.js" is:inline></script>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={process.env.COSMIC_BUCKET_SLUG || ''} />
      </body>
    </html>
  );
}