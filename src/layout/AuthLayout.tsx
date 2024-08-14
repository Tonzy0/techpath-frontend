import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/lib/store/auth";

import { toast } from "@/components/ui/use-toast";

function AuthLayout({ children }: PropsWithChildren) {
  const isAuthorized = useAuthStore((state: any) => state.isAuthorized);
  const tokens = JSON.parse(localStorage.getItem("tokens") as string);

  const navigate = useNavigate();

  if (!isAuthorized && tokens) {
    navigate("/login");
    toast({ title: "Session expired", description: "kindly login again" });
  }

  return <>{children}</>;
}

export default AuthLayout;
