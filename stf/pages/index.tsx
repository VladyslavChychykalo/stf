import { Inter } from "next/font/google";
import Header from "@/components/header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <About />
      </main>
    </>
  );
}
