type Logos = {
  image: string;
  alt: string;
  url: string;
};

type LogoCloudProps = {
  logos: Logos[];
  partners: Logos[];
};

const LogoCloud = ({ logos, partners }: LogoCloudProps) => {
  return (
    <section className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
            Thank you to our 2026 sponsors!
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 py-10 max-sm:flex-col">
          {logos.map((logo, index) => (
            <a href={logo.url} target="_blank">
              <img
                key={index}
                src={logo.image}
                alt={logo.alt}
                className="h-24 hover:scale-105 transition"
              />
            </a>
          ))}
        </div>
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl text-foreground">
            & Our Community Partners!
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 pt-10 max-sm:flex-col">
          {partners.map((logo, index) => (
            <a href={logo.url} target="_blank">
              <img
                key={index}
                src={logo.image}
                alt={logo.alt}
                className="h-24 hover:scale-105 transition"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LogoCloud;
