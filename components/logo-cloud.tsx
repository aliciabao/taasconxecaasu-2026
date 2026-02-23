import { Card, CardContent } from "@/components/ui/card";

type Logos = {
  image: string;
  alt: string;
};

const LogoCloud = ({ logos }: { logos: Logos[] }) => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center pb-10">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Thank you to our 2026 sponsors!{" "}
          </h1>
        </div>
        <Card className="py-14">
          <CardContent className="px-4 sm:px-14 text-2xl font-semibold bg-color-background">
            <h2 className="text-center text-foreground">
              Sponsor Reveal Coming Soon
            </h2>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LogoCloud;
