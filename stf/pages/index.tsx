"use client";

import About from "@/components/about";
import Advantages from "@/components/advantages";
import Contacts from "@/components/contacts/Contacts";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Installation from "@/components/installation";
import Models from "@/components/models";
import Partners from "@/components/partners";
import Works from "@/components/works";
import {
  Montserrat as montserratFont,
  Open_Sans as openSansFont,
} from "next/font/google";

const openSans = openSansFont({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-openSans",
});

const montserrat = montserratFont({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <div className={`${openSans.variable} ${montserrat.variable}`}>
      <header className="font-openSans">
        <Header />
        <Hero />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between font-openSans">
        <About />
        <Advantages />
        <Works />
        <Models />
        <Installation />
        <Partners />
        <Contacts />
      </main>
    </div>
  );
}
