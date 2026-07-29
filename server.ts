import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Initialize Gemini Client server-side
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// API Route for AI Physics & Mathematics Tutor
app.post("/api/ai-tutor", async (req, res) => {
  try {
    const { prompt, subject = "matematyka", mode = "solution" } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Proszę podać treść zadania lub pytanie." });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Fallback simulated expert response if API key is not yet set
      return res.json({
        success: true,
        subject,
        mode,
        solution: `[Tryb demo/brak klucza API] Oto analiza zadania z przedmiotu: ${subject.toUpperCase()}\n\n1. Identyfikacja danych:\n- Przeanalizowano podany problem: "${prompt}"\n\n2. Kluczowy wzór i zasada:\n- Zastosowanie odpowiednich wzorów fizycznych/matematycznych.\n\n3. Rozwiązanie krok po kroku:\n- Krok 1: Podstawienie wartości do wzoru głównego.\n- Krok 2: Przekształcenie równania oraz obliczenia jednostek.\n- Krok 3: Wynik końcowy z odpowiednim komentarzem dydaktycznym.\n\n💡 Wskazówka maturalna: Pamiętaj o zapisaniu założeń i jednostek końcowych!`,
        formulas: subject === "fizyka" ? ["v = v_0 + a \\cdot t", "F = m \\cdot a"] : ["f(x) = ax^2 + bx + c", "\\Delta = b^2 - 4ac"],
        hints: ["Sprawdź jednostki SI.", "Zwróć uwagę na zwrot wektora prędkości/siły."],
      });
    }

    const systemInstruction = `Jestem profesjonalnym nauczycielem i korepetytorem fizyki oraz matematyki z wieloletnim doświadczeniem w przygotowywaniu uczniów do Matury (poziom podstawowy i rozszerzony) oraz Egzaminu Ósmoklasisty.

Wybranym przedmiotem jest: ${subject}.
Tryb odpowiedzi to: ${mode} (solution = pełne rozwiązanie krok po kroku z wyjaśnieniem dydaktycznym, hint = dyskretne wskazówki bez podawania od razu gotowego wyniku, formula = analiza i wyprowadzenie potrzebnych wzorów, matura_tips = rady jak uniknąć typowych błędów na egzaminie CKE).

Zasady odpowiedzi:
1. Pisz czystym, profesjonalnym i wspierającym językiem polskim.
2. Formułuj przejrzyste kroki i podświetlaj najważniejsze wzory.
3. Używaj czytelnego formatu z punktami i sekcjami.
4. Zachęcaj ucznia do samodzielnego myślenia i budowania pewności siebie.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.3,
      },
    });

    const outputText = response.text || "Brak odpowiedzi od modelu.";

    res.json({
      success: true,
      solution: outputText,
      subject,
      mode,
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: "Przepraszamy, wystąpił błąd podczas generowania odpowiedzi Asystenta AI.",
      details: error.message,
    });
  }
});

// API Route for Contact Form Submissions
app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, level, message } = req.body;

  if (!name || (!email && !phone)) {
    return res.status(400).json({
      error: "Podaj swoje imię oraz adres e-mail lub numer telefonu.",
    });
  }

  console.log("Nowa wiadomość kontaktowa:", { name, email, phone, subject, level, message });

  res.json({
    success: true,
    message: "Dziękujemy za kontakt! Twoja wiadomość została wysłana. Odpowiemy w ciągu maksymalnie 2 godzin w dni robocze.",
    timestamp: new Date().toISOString(),
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
