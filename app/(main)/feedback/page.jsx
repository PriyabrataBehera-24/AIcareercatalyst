"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [rating, setRating] = useState(0);
  
  const messages = [
    "Very Bad 😢", 
    "Bad 😕", 
    "Okay 😐", 
    "Good 🙂", 
    "Excellent! 😃"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      setSuccessMessage("Please select a rating.");
      return;
    }
    setLoading(true);
    // Simulating successful submission
    setTimeout(() => {
      setSuccessMessage("Feedback submitted successfully! Thank you.");
      setFeedback("");
      setRating(0);
      setLoading(false);
    }, 1000); // Simulate a delay for the submission
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text gradient-title">Feedback Form</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-6 rounded-2xl shadow-md mt-6">
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-10 h-10 cursor-pointer transition-all ${rating >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`}
              onClick={() => setRating(star)}
              fill={rating >= star ? "#FACC15" : "none"}
            />
          ))}
        </div>
        <p className="text-center text-lg font-semibold mb-4">{rating > 0 ? messages[rating - 1] : "Rate your experience"}</p>
        <Textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Your feedback..."
          className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <Button type="submit" disabled={loading} className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {successMessage && <p className="mt-4 text-lg font-medium text-gray-300">{successMessage}</p>}
    </div>
  );
};

export default FeedbackPage;
