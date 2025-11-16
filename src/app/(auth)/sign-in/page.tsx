"use client";

import SignInCard from "@/features/auth/components/sign-in-card";

interface SignInPageProps {
  children: React.ReactNode;
}

const SignInPage = ({ children }: SignInPageProps) => {
  return (
    <div>
      <SignInCard />
    </div>
  );
};

export default SignInPage;
