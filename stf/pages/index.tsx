import About from "@/components/about";
import Advantages from "@/components/advantages";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Open_Sans as openSansFont } from "next/font/google";

const openSans = openSansFont({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-openSans",
});

export default function Home() {
  return (
    <div className={`${openSans.variable}`}>
      <header className="font-openSans">
        <Header />
        <Hero />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between font-openSans">
        <About />
        <Advantages />
      </main>
    </div>
  );
}
