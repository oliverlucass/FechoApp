import type { Metadata } from "next";
import { AuthScreen } from "@/components/site/auth-screen";

export const metadata: Metadata = { title: "Entrar" };

export default function LoginPage() {
  return <AuthScreen title="Entrar na sua conta" altPrompt="Não tem uma conta?" alt="Cadastrar" altHref="/cadastrar" />;
}
