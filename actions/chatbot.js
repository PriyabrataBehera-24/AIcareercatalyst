"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function chat(messages) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not set in environment variables");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash",
      systemInstruction: `You are an expert AI career coach and advisor. Your role is to help users with:
- Career path guidance and planning
- Resume and cover letter advice
- Interview preparation and tips
- Industry insights and job market trends
- Skill development recommendations
- Salary negotiation strategies
- Professional networking advice
- Career transitions and pivots

Be concise, actionable, and encouraging. Always tailor your advice to the user's specific situation.
If the user hasn't provided enough context, ask clarifying questions.`,
    });

    const lastMessage = messages[messages.length - 1];

    // Build history from all messages except the last one, which is the current user input.
    // Gemini requires: history must start with 'user' and alternate user/model.
    // So we drop any leading assistant messages (e.g. the greeting).
    const rawHistory = messages.slice(0, -1).map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    // Drop messages from the front until the first 'user' message
    while (rawHistory.length > 0 && rawHistory[0].role !== "user") {
      rawHistory.shift();
    }

    const chatSession = model.startChat({ history: rawHistory });
    const result = await chatSession.sendMessage(lastMessage.content);
    const response = result.response.text();

    return { role: "assistant", content: response };
  } catch (error) {
    console.error("Chatbot error details:", error?.message, error?.status, error);
    throw new Error(error?.message || "Failed to get response from AI");
  }
}