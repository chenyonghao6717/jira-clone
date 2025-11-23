"use client";

import SignInCard from "@/features/auth/components/sign-in-card";

interface SignInPageProps {
  children: React.ReactNode;
}

const SignInPage = ({ children }: SignInPageProps) => {
  return (
      <SignInCard />
  );
};

export default SignInPage;
