"use client";

import About from "@/components/about";
import Advantages from "@/components/advantages";
import Contacts from "@/components/contacts/Contacts";
import Footer from "@/components/footer";
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
import Head from "next/head";

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
    <>
      <Head>
        <title>stfenergo</title>
        <meta
          name="description"
          content="STF Energo: Надійні Силові Трансформатори та Енергетичне Обладнання
Компанія СТФ Енерго спеціалізується на виробництві, ревізії та ремонті енергетичного обладнання, зокрема силових трансформаторів. Ми пропонуємо широкий асортимент продукції, включаючи трансформатори типів ТМ, ТМГ, ТМЗ, ТМН, а також комплексні трансформаторні підстанції (КТП). Наші масляні трансформатори забезпечують стабільне та ефективне енергопостачання для промислових та комерційних об'єктів.

Наші послуги включають:

Професійна ревізія трансформаторів
Капітальний ремонт силових трансформаторів
Монтаж і технічне обслуговування КТП
Компанія STF Energo гарантує високу якість обладнання та сервісу, що відповідає сучасним вимогам енергетичної галузі."
        />
      </Head>
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
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
