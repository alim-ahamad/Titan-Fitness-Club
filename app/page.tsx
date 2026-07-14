import { Navbar } from "@/components/navbar";
import { ScrollProvider } from "@/components/scroll-provider";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Features } from "@/components/features";
import { Programs } from "@/components/programs";
import { Transformation } from "@/components/transformation";
import { SuccessMetrics } from "@/components/success-metrics";
import { Testimonials } from "@/components/testimonials";
import { VideoSection } from "@/components/video-section";
import { Gallery } from "@/components/gallery";
import { FAQ } from "@/components/faq";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <ScrollProvider>
      <Navbar />
      <main className="w-full overflow-hidden bg-background">
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Features />
        <Programs />
        <Transformation />
        <SuccessMetrics />
        <Testimonials />
        <VideoSection />
        <Gallery />
        <FAQ />
        <Blog />
        <Contact />
        <CTA />
        <Footer />
      </main>
    </ScrollProvider>
  );
}
