import SignUpCard from "@/features/auth/components/sign-up-card";

interface SignUpPageProps {
  children: React.ReactNode;
}

const SignUpPage = ({ children }: SignUpPageProps) => {
  return <SignUpCard />;
};

export default SignUpPage;
