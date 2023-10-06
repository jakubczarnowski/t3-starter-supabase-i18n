"use client";

import React from "react";
import { UserAuthForm } from "./molecules/UserAuthForm";
import { useTranslation } from "react-i18next";

export const Register = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {t("register.title")}
        </h1>
      </div>
      <UserAuthForm />
    </div>
  );
};
