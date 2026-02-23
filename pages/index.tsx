import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import Sponsors from "@/components/sponsors";
import About from "@/components/about";
import Tickets from "@/pages/tickets";
import Schedule from "./schedule";
import Faqs from "./faqs";

export default function Home() {
  return (
    <div className="px-20">
      <NavBar />
      <Hero />
      <div className="py-5 px-4 md:py-10 md:px-30">
        <section id="about">
          <About />
        </section>

        <section id="schedule">
          <Schedule />
        </section>

        <section id="faqs">
          <Faqs />
        </section>

        <section id="tickets">
          <Tickets />
        </section>
      </div>
      <section id="sponsors">
        <Sponsors />
      </section>
    </div>
  );
}
