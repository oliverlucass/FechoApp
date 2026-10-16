import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export function Counts({
  title,
  lede,
  stats,
}: {
  title: string;
  lede: string;
  stats: ReadonlyArray<readonly [string, string]>;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="px-6 pt-10 pb-3 xl:px-9">
          <h1 className="text-[32px] font-extrabold tracking-[-0.6px] text-[#061257] xl:text-[40px]">{title}</h1>
          <p className="mt-2 text-[16px]">{lede}</p>
        </div>
        <div className="grid grid-cols-1 gap-3 p-6 sm:grid-cols-2 xl:grid-cols-4 xl:p-7">
          {stats.map(([name, count]) => (
            <div key={name} className="rounded-2xl bg-[#F7F8FC] p-4">
              <div className="font-extrabold text-[#061257]">{name}</div>
              <div className="mt-1.5 text-[#0A65FC]">{count}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
