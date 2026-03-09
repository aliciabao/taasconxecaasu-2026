import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import Sponsors from "@/components/sponsors";
import About from "@/components/about";
import Tickets from "@/pages/tickets";
import Schedule from "./schedule";
import Faqs from "./faqs";

export default function Home() {
  return (
    <div>
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
          <div className="flex justify-center">
            <iframe src="https://www.google.com/maps/d/embed?mid=1LsSx01ubuHaXw2A9Sul0VvLU5Ct5SBw&ehbc=2E312F" width="640" height="480"></iframe>
          </div>
        </section>
      </div>
      <section id="sponsors">
        <Sponsors />
      </section>
    </div>
  );
}
