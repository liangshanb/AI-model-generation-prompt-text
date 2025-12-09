import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Note: In a real production app, ensure this is handled securely.
// For this environment, we assume process.env.API_KEY is available.

const ai = new GoogleGenAI({ apiKey });

export const generateImageFromPrompt = async (prompt: string): Promise<string | null> => {
  try {
    if (!apiKey) {
      console.error("API Key is missing");
      return null;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "3:4", // Standard for e-commerce
          imageSize: "1K" // Note: 1K is standard for this model, 'gemini-3-pro-image-preview' supports higher but requires approval/availability check
        }
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString: string = part.inlineData.data;
        return `data:image/png;base64,${base64EncodeString}`;
      }
    }
    
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};