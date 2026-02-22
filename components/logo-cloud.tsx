import { Card, CardContent } from "@/components/ui/card";

type Logos = {
  image: string;
  alt: string;
};

const LogoCloud = ({ logos }: { logos: Logos[] }) => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 text-center pb-10">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Thank you to our 2026 sponsors!{" "}
          </h2>
          <p className="text-muted-foreground text-xl">
            Proudly partnering with local businesses and organizations.
          </p>
        </div>
        <Card className="py-14">
          <CardContent className="px-14 text-2xl font-semibold">
            <h1 className="text-center">Sponsor Reveal Coming Soon</h1>
            {/* <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 max-sm:flex-col">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.image}
                  alt={logo.alt}
                  className="h-7"
                />
              ))}
            </div> */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LogoCloud;
