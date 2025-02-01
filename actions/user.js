"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
    const {userId} = await auth();
    if(!userId) throw new Error("unauthorized");

    const user = await db.user.findUnique({
        where: {
            clerkUserId:userId,
        },
    });
    if(!user) throw new Error("user not found");

    try {
        const result = await db.$transaction
        (async (tx)=>{
          // finds if the industry exist n if not then ai will create n update the user
           let industryInsight = await tx.industryInsight.findUnique({
            where:{
                industry:data.industry,
            },
           });
           if(!industryInsight){
             const insights = await generateAIInsights(data.industry);
                 industryInsight = await db.industryInsight.create({
                        data:{
                          industry:data.industry,
                          ...insights,
                          nextUpdate : new Date(Date.now() + 7* 24 * 60 * 60 * 1000),
                        },
                      });
           }
           //update the user
           const updatedUser = await tx.user.update({
            where:{
                id:user.id,
            },
            data:{
                industry:data.industry,
                experience:data.experience,
                bio:data.bio,
                skills:data.skills,
            },
           });
           return {updatedUser,industryInsight};
        },
    {
        timeout:10000,
    }
    );    
      return {success:true,...result};
    } catch (error) {
        console.error("Error updating user and industry:",error.message);
        throw new Error("Error updating user and industry");
    }
}

export async function getUserOnboardingStatus() {
    const {userId} = await auth();
    if(!userId) throw new Error("unauthorized");

    const user = await db.user.findUnique({
        where: {
            clerkUserId:userId,
        },
    });
    if(!user) throw new Error("user not found");

    try {
        const user = await db.user.findUnique({
            where:{
                clerkUserId:userId,
            },
            select:{
                industry:true,
            },
        });
        return{
            isOnboarded: !!user?.industry,
        };
    } catch (error) {
        console.error("Error checking onboarding status:",error.message);
        throw new Error("Error checking onboarding status" + error.message);
    }
}