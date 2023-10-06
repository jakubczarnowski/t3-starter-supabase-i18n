"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

import { UserAuthForm } from "./molecules/UserAuthForm";

export const Login = () => {
  const { t } = useTranslation();

  return (
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
    </div>
  );
};
