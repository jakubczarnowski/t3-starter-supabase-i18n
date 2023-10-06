"use client";

import { type PropsWithChildren } from "react";
import { withPublicRoute } from "~/providers/AuthProvider/withPublicRoute";

const Layout = ({ children }: PropsWithChildren) => <>{children}</>;

export default withPublicRoute(Layout);
