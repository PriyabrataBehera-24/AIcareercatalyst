import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industries";
import { redirect } from "next/navigation";
import OnboardingForm from "./_components/onboarding-form";
// import { redirect } from "next/dist/server/api-utils";

const OnboardingPage = async() => {
    //check if user is onboarded or not
    const {isOnboarded}= await getUserOnboardingStatus();

    if(isOnboarded){
        redirect("/dashboard");
    }
  return (
   <main>
    <OnboardingForm industries={industries}/>
   </main>
  );
};

export default OnboardingPage;