// components/hero.tsx
import { ReactNode } from "react";

export default function Hero({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <section className="w-full bg-gradient-to-br from-navy-800 to-slate-700 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle ? (
            <p className="text-lg md:text-xl text-gray-200">{subtitle}</p>
          ) : null}
          {right ? <div className="mt-6 flex justify-center">{right}</div> : null}
        </div>
      </div>
    </section>
  );
}
