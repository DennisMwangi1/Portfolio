import { GoogleGenAI } from "@google/genai";
// import { Listing } from '../types';
// import { MOCK_LISTINGS } from '../constants';

// Initialize the Gemini client
const getClient = () => {
  const apiKey = process.env.API_KEY || "";
  // In a real app, we would handle missing keys more gracefully or via backend proxy
  return new GoogleGenAI({ apiKey });
};

export const generateRentalAdvice = async (
  userMessage: string,
  chatHistory: { role: string; text: string }[],
) => {
  const ai = getClient();

  // Construct a context-aware system instruction
  const listingsContext = []
    .map(
      (l) =>
        `- ${l.type} in ${l.location} for ${l.price} KES (${l.beds} beds). ID: ${l.id}`,
    )
    .join("\n");

  const systemInstruction = `
    You are "Rentie", a helpful, energetic, and knowledgeable real estate assistant for Dennis Mwangi., a Kenyan property platform.
    
    Your goal is to help users find rental properties in Nairobi and give advice on the rental process in Kenya.
    
    Style Guide:
    - Be friendly, informal, and professional.
    - Use Kenyan slang appropriately if the user does (e.g., "sasa", "bedsitter", "deposit").
    - Keep answers concise and mobile-friendly.
    
    Current Listings Available in System:
    ${listingsContext}
    
    If a user asks for a property, recommend one from the list above if it matches. If nothing matches exactly, suggest the closest option or advice on where to look.
    Always format prices as "KES X,XXX".
  `;

  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: chatHistory.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Pole sana (Sorry)! I'm having trouble connecting to the server right now. Please check your connection or try again later.";
  }
};
