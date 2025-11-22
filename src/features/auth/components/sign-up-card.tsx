"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DottedSeparator from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FormFieldWrapper } from "@/features/auth/components/form-field-wrapper";

const formSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  email: z.email(),
  password: z.string().trim().min(8, "Minimum 8 characters"),
});

const SignUpCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const description = (
    <CardDescription className="flex justify-center whitespace-pre-wrap px-7">
      <p>
        By signing up, you agree to our{" "}
        <Link href="/privacy" className="text-blue-700">
          <span>Privacy Policy</span>
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="text-blue-700">
          <span>Terms of service</span>
        </Link>
      </p>
    </CardDescription>
  );

  const header = (
    <CardHeader className="flex items-center justify-center text-center p-7">
      <CardTitle className="text-2xl ">Sign up</CardTitle>
      {description}
    </CardHeader>
  );

  return (
    <Card className="w-full h-full md:w-[550px] border-none shadow-none">
      {header}
      <div className="px-7 mb-1">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormFieldWrapper
              name="name"
              control={form.control}
              type="text"
              placeholder="Enter name"
            />
            <FormFieldWrapper
              name="email"
              control={form.control}
              type="email"
              placeholder="Enter email"
            />
            <FormFieldWrapper
              name="password"
              control={form.control}
              type="password"
              placeholder="Enter password"
            />
            <Button size="lg" className="w-full ">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button variant="secondary" size="lg" className="w-full">
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button variant="secondary" size="lg" className="w-full">
          <FaGithub className="mr-2 size-5" />
          Login with Github
        </Button>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <p>
          Already have an account?{" "}
          <Link href="/sign-in">
            <span className="text-blue-700">Sign In</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
