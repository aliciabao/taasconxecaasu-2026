import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import Sponsors from "@/components/sponsors";
import Theme from "@/components/theme";
import Tickets from "@/components/tickets";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Theme/>
      <Tickets/>
      <Sponsors/>
    </div>
  );
}
