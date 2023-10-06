"use client";

import { ThemeProvider } from "next-themes";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import {
  AnalyticsProvider,
  UmamiAnalyticsProvider,
} from "./AnalyticsProvider/AnalyticsProvider";
import { api } from "~/utils/api";
import React from "react";
import { type Language } from "~/i18n/settings";
import { I18NextProvider } from "./I18NextProvider/I18NextProvider";

type ProvidersProps = {
  children: React.ReactNode;
  initialLanugage: Language;
};

function ProvidersBase({ children, initialLanugage }: ProvidersProps) {
  return (
    <I18NextProvider initialLanguage={initialLanugage}>
      <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <AnalyticsProvider />
        <UmamiAnalyticsProvider />
      </AuthProvider>
    </I18NextProvider>
  );
}

export const Providers = api.withTRPC(
  ProvidersBase,
) as React.FC<ProvidersProps>;
