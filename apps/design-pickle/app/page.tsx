import { strapi } from "@strapi/client";
import { About } from "@repo/ui/components/About";
import { Cta } from "@repo/ui/components/Cta";
import { FAQ } from "@repo/ui/components/FAQ";
import { Features } from "@repo/ui/components/Features";
import { Footer } from "@repo/ui/components/Footer";
import { Hero } from "@repo/ui/components/Hero";
import { HowItWorks } from "@repo/ui/components/HowItWorks";
import { Navbar } from "@repo/ui/components/Navbar";
import { Newsletter } from "@repo/ui/components/Newsletter";
import { Pricing } from "@repo/ui/components/Pricing";
import { ScrollToTop } from "@repo/ui/components/ScrollToTop";
import { Services } from "@repo/ui/components/Services";
import { Sponsors } from "@repo/ui/components/Sponsors";
import { Team } from "@repo/ui/components/Team";
import { Testimonials } from "@repo/ui/components/Testimonials";
import { ThemeProvider } from "@repo/ui/components/theme-provider";
import "../index.css";

export default async function Page() {
  return (
    <>
      <ThemeProvider>
        <Navbar />

        <Sponsors />
        <HowItWorks />
        <Features />
        <Services />
        <Cta />
        <Testimonials />
        <Team />
        <Pricing />
        <Newsletter />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}
