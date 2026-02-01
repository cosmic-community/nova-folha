import { createBucketClient } from '@cosmicjs/sdk';
import { GrowthJournalEntry, Inspiration } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || 'demo-bucket-slug',
  readKey: process.env.COSMIC_READ_KEY || 'demo-read-key',
  writeKey: process.env.COSMIC_WRITE_KEY || 'demo-write-key',
});

// Helper to check for status errors
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export async function getJournalEntries(): Promise<GrowthJournalEntry[]> {
  try {
    const data = await cosmic.objects
      .find({ type: 'diario-de-crescimento' })
      .props('id,slug,title,metadata,created_at')
      .depth(1);
      
    // Manual sorting by date (newest first) since SDK sort method changed
    return (data.objects as GrowthJournalEntry[]).sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching journal entries:', error);
    return [];
  }
}

export async function getSingleEntry(slug: string): Promise<GrowthJournalEntry | null> {
  try {
    const data = await cosmic.objects
      .findOne({ type: 'diario-de-crescimento', slug })
      .props('id,slug,title,metadata,created_at')
      .depth(1);
      
    return data.object as GrowthJournalEntry;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}

export async function getInspirations(): Promise<Inspiration[]> {
  try {
    const data = await cosmic.objects
      .find({ type: 'inspiracoes' })
      .props('id,slug,title,metadata')
      .depth(1);
      
    return data.objects as Inspiration[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching inspirations:', error);
    return [];
  }
}