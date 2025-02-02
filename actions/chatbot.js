import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const handleChatbotInteraction = async (userInput) => {
    try {
        const prompt = `User: ${userInput}\nChatbot:`;
        
        // Fetch data from the Gemini API using the useFetch hook
        const response = await fetch('https://api.gemini.com/data', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch data from Gemini API');
        }
        
        const apiData = await response.json();
        
        // Enhance the prompt with the fetched data
        const enhancedPrompt = `${prompt}\nAPI Data: ${JSON.stringify(apiData)}`;

        const res = await model.generateContent(enhancedPrompt);
        const responseMessage = res.response.candidates[0].content.parts[0].text || "";
        
        return {
            success: true,
            message: responseMessage,
        };
    } catch (error) {
        console.error("Error generating chatbot response:", error);
        return {
            success: false,
            message: "An error occurred while generating the response.",
        };
    }
};
