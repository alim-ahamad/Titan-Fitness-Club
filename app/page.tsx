import { ScrollProvider } from "@/components/scroll-provider";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Programs } from "@/components/programs";
import { Testimonials } from "@/components/testimonials";
import { Gallery } from "@/components/gallery";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <ScrollProvider>
      <main className="w-full overflow-hidden bg-background">
        <Hero />
        <Services />
        <About />
        <Programs />
        <Testimonials />
        <Gallery />
        <CTA />
        <Footer />
      </main>
    </ScrollProvider>
  );
}
