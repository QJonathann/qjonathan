export interface MaterialItem {
  id: string;
  title: string;
  subject: "fizyka" | "matematyka";
  level: "Klasy 7-8" | "Liceum Podstawa" | "Liceum Rozszerzenie" | "Wszystkie";
  category: string;
  description: string;
  formulaCount: number;
  formulas: { label: string; formula: string; note: string }[];
  keyTips: string[];
}

export interface PricingPlan {
  id: string;
  title: string;
  subjectBadge: string;
  price: string;
  duration: string;
  popular?: boolean;
  features: string[];
  targetAudience: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: "matematyka" | "fizyka" | "oba";
  level: "egzamin_8kl" | "matura_podstawa" | "matura_rozszerzenie" | "korepetycje_biezace";
  message: string;
}

export interface AiTutorResponse {
  success: boolean;
  solution: string;
  subject: string;
  mode: string;
}
