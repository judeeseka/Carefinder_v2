"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";
import CustomFormInput from "./CustomFormInput";
import { signIn, signUp } from "@/lib/actions/user.action";
import { useState } from "react";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const formSchema = authFormSchema("sign-in");
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        console.log(response);

        if (response) router.push("/dashboard");
      }
      if (type === "sign-up") {
        const newUser = await signUp(data);
        console.log(newUser);
        if (newUser) router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      <div className="hidden bg-cover lg:block lg:w-1/2">
        <Image
          //   src={logo}
          src="/assets/logo.jpg"
          alt="Carefinder logo"
          width={1368}
          height={1712}
          className="w-full h-full object-fill"
        />
      </div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center gap-2 items-center">
          <Image
            src="/icons/favicon.ico"
            alt="Carefinder icon"
            width={25}
            height={25}
          />
          <span className="text-2xl font-bold">
            <Link href="/">Carefinder</Link>
          </span>
        </div>

        <h1 className="text-xl mt-4 lg:text-3xl font-semibold text-gray-900">
          {type === "sign-in" ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-md font-normal text-gray-600">
          {type === "sign-in" ? "Welcome Back" : "Please enter your details"}
        </p>

        <a
          href="#"
          className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <div className="px-4 py-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>
          </div>

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Continue with Google
          </span>
        </a>

        <div className="flex items-center justify-between my-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            or login with email
          </span>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        {/* FORM */}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {type === "sign-up" && (
              <>
                <div className="flex gap-4">
                  <CustomFormInput
                    control={form.control}
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                  />
                  <CustomFormInput
                    control={form.control}
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your first name"
                  />
                </div>
                <CustomFormInput
                  control={form.control}
                  name="address"
                  label="Address"
                  placeholder="Enter your specific address"
                />
              </>
            )}
            <CustomFormInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
            <CustomFormInput
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />

            <div className="flex flex-col gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;
                    Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>
        </Form>

        <footer className="flex items-center justify-center gap-1 mt-4">
          <p className=" text-gray-600">
            {type === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link
            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            className="text-md cursor-pointer font-medium text-[#2463EB]"
          >
            {type === "sign-in" ? "Sign up" : "Sign in"}
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AuthForm;
