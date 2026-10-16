import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Pill } from "@/components/site/pill";

export function PageHero({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-6 py-10 xl:px-10 xl:pt-12 xl:pb-7">
        <h1 className="max-w-[760px] text-[32px] leading-[1.05] font-extrabold text-ink xl:text-[44px]">
          {title}
        </h1>
        <p className="mt-3 max-w-[640px] text-[18px]">{body}</p>
        {action ? (
          <div className="mt-4">
            <Pill href={action.href}>{action.label}</Pill>
          </div>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
