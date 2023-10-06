"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

import { Icons } from "~/components/Icons";
import { buttonVariants } from "~/components/ui/button";
import { supabase } from "~/server/supabase/supabaseClient";
import { cn } from "~/utils/cn";

import { UserAuthForm } from "./molecules/UserAuthForm";

const testAccounts = [
  { email: "random@gmail.com", password: "testPassword" },
  { email: "random2@gmail.com", password: "testPassword2" },
];

export const Login = () => {
  const { t } = useTranslation();

  return (
    <div className="container flex h-full w-screen grow flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8",
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {t("login.title")}
          </h1>
        </div>
        <UserAuthForm />
        <div className="flex flex-col items-center justify-center gap-2">
          <Link
            className="text-sm font-medium text-secondary-foreground hover:underline"
            href="/register"
          >
            {t("login.registerButton")}
          </Link>
          <Link
            className="text-sm font-medium text-secondary-foreground  hover:underline"
            href="/forgot-password"
          >
            {t("login.forgotPasswordButton")}
          </Link>
        </div>

        {process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" && (
          <div className="flex flex-col gap-2">
            {testAccounts.map((account, index) => (
              <div key={index} className="flex flex-col items-start ">
                <button
                  onClick={() => {
                    void supabase().auth.signInWithPassword(account);
                  }}
                >
                  Login {account.email}
                </button>
                <button
                  onClick={() => {
                    void supabase().auth.signUp(account);
                  }}
                >
                  Register {account.email}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
