import type { Metadata } from "next";
import { AuthScreen } from "@/components/site/auth-screen";

export const metadata: Metadata = { title: "Cadastrar" };

export default function SignUpPage() {
  return (
    <AuthScreen title="Cadastre-se no FechoApp" altPrompt="Já tem uma conta?" alt="Entrar" altHref="/entrar" />
  );
}
