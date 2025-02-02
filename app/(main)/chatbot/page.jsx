"use client";
import React, { useState } from "react";

// Predefined responses for different career fields
const jsonResponses = {
  "software engineer": {
    role: "Software Engineer",
    salaryRange: { min: 60000, max: 150000, median: 90000 },
    skills: ["Programming", "Problem Solving", "Algorithms", "Data Structures", "Version Control"],
    growthRate: "22%",
    demandLevel: "HIGH",
    marketOutlook: "POSITIVE",
    recommendedSkills: ["Cloud Computing", "Machine Learning", "DevOps"]
  },
  "data scientist": {
    role: "Data Scientist",
    salaryRange: { min: 70000, max: 180000, median: 100000 },
    skills: ["Data Analysis", "Machine Learning", "Statistics", "Programming", "Data Visualization"],
    growthRate: "18%",
    demandLevel: "HIGH",
    marketOutlook: "POSITIVE",
    recommendedSkills: ["Deep Learning", "AI", "Big Data"]
  },
  "digital marketer": {
    role: "Digital Marketer",
    salaryRange: { min: 40000, max: 120000, median: 65000 },
    skills: ["SEO", "Content Creation", "Social Media Marketing", "PPC Advertising", "Data Analytics"],
    growthRate: "10%",
    demandLevel: "MEDIUM",
    marketOutlook: "NEUTRAL",
    recommendedSkills: ["Content Marketing", "Email Marketing", "Influencer Marketing"]
  },
  "graphic designer": {
    role: "Graphic Designer",
    salaryRange: { min: 35000, max: 90000, median: 55000 },
    skills: ["Adobe Suite", "Creativity", "Typography", "Branding", "UX/UI Design"],
    growthRate: "5%",
    demandLevel: "MEDIUM",
    marketOutlook: "NEUTRAL",
    recommendedSkills: ["UI/UX", "Motion Graphics", "3D Design"]
  },
  "teacher": {
    role: "Teacher",
    salaryRange: { min: 30000, max: 70000, median: 45000 },
    skills: ["Communication", "Classroom Management", "Lesson Planning", "Adaptability", "Organization"],
    growthRate: "4%",
    demandLevel: "MEDIUM",
    marketOutlook: "NEUTRAL",
    recommendedSkills: ["Technology Integration", "Special Education", "Online Teaching"]
  },
  "default": {
    message: "Sorry, I don't have information on that career field. Please try another."
  }
};

const ChatbotPage = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Predefined career options
  const careerFields = [
    "Software Engineer",
    "Data Scientist",
    "Digital Marketer",
    "Graphic Designer",
    "Teacher"
  ];

  const handleCareerSelection = (career) => {
    setLoading(true);
    const response = jsonResponses[career.toLowerCase()] || jsonResponses["default"];

    let aiMessage = {
      sender: "chatbot",
      message: "",
    };

    if (response.message) {
      aiMessage.message = response.message;
    } else {
      aiMessage.message = `
        Role: ${response.role}
        Salary Range: $${response.salaryRange.min.toLocaleString()} - $${response.salaryRange.max.toLocaleString()} (Median: $${response.salaryRange.median.toLocaleString()})
        Skills: ${response.skills.join(", ")}
        Growth Rate: ${response.growthRate}
        Demand Level: ${response.demandLevel}
        Market Outlook: ${response.marketOutlook}
        Recommended Skills: ${response.recommendedSkills.join(", ")}
      `;
    }

    // Append AI message to chat
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "chatbot", message: aiMessage.message },
    ]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-6xl font-bold gradient-title text-center">
        Career Info Chatbot
      </h1>

      <div className="w-full max-w-xl bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden">
        <div className="h-96 overflow-y-scroll mb-4"> {/* Height set to h-96 */}
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
            >
              <div
                className={`max-w-xs p-4 rounded-lg ${msg.sender === "user" ? "bg-blue-600" : "bg-gray-700"}`}
              >
                <p>{msg.message}</p>
              </div>
            </div>
          ))}
        </div>

        {!loading && (
          <div className="mb-4">
            <p>Select a career field:</p>
            <div className="h-48 overflow-y-auto mt-2"> {/* Scrollable container for career fields */}
              <div className="flex flex-col gap-4">
                {careerFields.map((career) => (
                  <button
                    key={career}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={() => handleCareerSelection(career)}
                  >
                    {career}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {loading && <p className="text-center">Loading...</p>}
      </div>
    </div>
  );
};

export default ChatbotPage;
