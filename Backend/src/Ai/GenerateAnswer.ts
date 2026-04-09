import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);

export const generateAnswer = async (context: string, query: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-flash-latest"});

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