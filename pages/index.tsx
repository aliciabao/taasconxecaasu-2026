import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import Sponsors from "@/components/sponsors";
import Theme from "@/components/theme";
import About from "@/components/about";
import Tickets from "@/pages/tickets";
import Schedule from "./schedule";
import Faqs from "./faqs";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="py-10 px-75">
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

        <section id="sponsors">
          <Sponsors />
        </section>
      </div>
    </div>
  );
}
