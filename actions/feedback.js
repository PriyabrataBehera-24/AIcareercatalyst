import { db } from '../lib/prisma'; // Importing the database client

export const saveFeedback = async (feedback) => {
    try {
        await db.feedback.create({
            data: {
                content: feedback,
                createdAt: new Date(),
            },
        });
        return { success: true };
    } catch (error) {
        console.error("Error saving feedback:", error);
        return { success: false };
    }
};
