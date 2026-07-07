export type CategoryId = 'known' | 'algo' | 'bru' | 'dec' | 'div' | 'tra' | 'spa' | 'gre' | 'dyn';

export interface Category {
  id: CategoryId;
  name: string;
}

export interface Topic {
  id: string;
  title: string;
  notes: string; // HTML-enriched text containing notes and formulas
  code?: string;  // Code sample associated with the topic
}

export interface Theme {
  id: string;
  name: string;
  color: string; // Secondary accent hex color for the chip preview
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}
