"use client";

import { withPrivateRoute } from "~/providers/AuthProvider/withPrivateRoute";

const LayoutViewComponent = ({ children }: { children: React.ReactNode }) =>
  children;

export const LayoutView = withPrivateRoute(LayoutViewComponent);
