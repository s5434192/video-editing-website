"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import logo from '../../../public/logo.png'
import google from '../../../app/social.png'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
      .string()
      .min(7, "Password should not be less than 7 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);

    try {
      // Here you would typically call your authentication API
      console.log("Form submitted with:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to next step or dashboard
      window.location.href = "/auth/verify"; // or use router.push for client-side navigation
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setIsLoading(true);

    try {
      // Implement Google sign-in logic here
      console.log("Google sign-in initiated");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error("Google sign-in error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
        <div className="flex flex-col items-start space-y-2 text-center">
          {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"> */}
            <Image src={logo} height={34} width={34} alt="logo"/>
          {/* </div> */}
          <h1 className="text-2xl font-semibold tracking-tight">
            Login your account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter the information you entered while Signup
          </p>
        </div>

        <Button
          variant="outline"
          className="flex w-full items-center justify-center gap-2"
          onClick={handleGoogleSignIn}
          disabled={isLoading}
        >
          <Image
            src={google}
            alt="Google logo"
            width={24}
            height={24}
          />
          Continue with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className="py-5 border border-[#E2E8F0]" placeholder="Your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
                <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input
                                  type="password"
                                  className="py-5 border border-[#E2E8F0]"
                                  placeholder="Your password"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
            
            <Link href='/dashboard/'>
            <Button type="submit" className="w-full " disabled={isLoading}>
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </form>
        </Form>

        <div className="text-center text-sm">
          Don&lsquo;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
