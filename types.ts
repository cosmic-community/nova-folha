export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Based on "Diário de Crescimento" model
export interface GrowthJournalEntry extends CosmicObject {
  type: 'diario-de-crescimento';
  metadata: {
    title: string;
    reflexao: string; // Markdown
    sentimento?: 'Esperançoso' | 'Forte' | 'Rejuvenescido' | 'Grato' | 'Reflexivo';
    clima_interior?: 'Luz do Sol ☀️' | 'Chuva Gentil 🌧️' | 'Nublado ☁️' | 'Tempestade ⛈️' | 'sol' | 'chuva' | 'nublado' | 'tempestade'; 
    // Note: API might return key or value depending on config, allowing both for safety
    imagem?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Based on "Inspirações" model
export interface Inspiration extends CosmicObject {
  type: 'inspiracoes';
  metadata: {
    frase: string;
    autor?: string;
  };
}

export type InnerClimate = 'Luz do Sol ☀️' | 'Chuva Gentil 🌧️' | 'Nublado ☁️' | 'Tempestade ⛈️' | 'sol' | 'chuva' | 'nublado' | 'tempestade';