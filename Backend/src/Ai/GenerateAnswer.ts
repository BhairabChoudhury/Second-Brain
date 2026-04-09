import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const generateAnswer = async (context: string, query: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = `
  Answer the question using the context below.

  Context:
  ${context}

  Question:
  ${query}
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return response.text();
};