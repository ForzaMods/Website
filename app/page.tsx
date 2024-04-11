import Link from "next/link";
import Counter from "@/components/counter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://forzamods.dev'),
  title: "Forza Mods - The Forza Modding Community",
  description: "Forza Mods is developing tools for Forza Horizon 4 and Forza Horizon 5 that are open source and free.",
  openGraph: {
    title: "Forza Mods - The Forza Modding Community",
    description:
      "Largest Forza Modding community in the world creating user-requested open source and free tools.",
    images: "/twitter-card.png",
  },
  twitter: {
    title: "Forza Mods - The Forza Modding Community",
    description:
      "Largest Forza Modding community in the world creating user-requested open source and free tools.",
    images: "/twitter-card.png",
    creator: "https://d4vss.net"
  },
};

export default function Home() {
  return (
    <main className="p-10">
      <div className="hero min-h-[calc(100vh-24rem)]">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-extrabold">Forza Mods</h1>
            <p className="py-6">
              Forza Mods is developing tools for Forza Horizon 4 and Forza
              Horizon 5. Explore a new dimension of customization and
              exhilarating gameplay with us.
            </p>
            <Link className="btn btn-secondary" href="/tools/aio">Start modding</Link>
          </div>
        </div>
      </div>
      <div className="text-center mb-20">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">AIO Downloads</div>
            <div className="stat-value"><Counter from={0} to={640} />K+</div>
            <div className="stat-desc">A trusted source by many</div>
          </div>

          <div className="stat">
            <div className="stat-title">GitHub Stars</div>
            <div className="stat-value"><Counter from={0} to={500} />+</div>
            <div className="stat-desc">That is many stars</div>
          </div>

          <div className="stat">
            <div className="stat-title">Discord Members</div>
            <div className="stat-value"><Counter from={0} to={60} />K+</div>
            <div className="stat-desc">A growing community</div>
          </div>
        </div>
      </div>
    </main>
  );
}
