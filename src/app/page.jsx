import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Transforming Ideas into Digital Reality{" "}
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          We are a development agency operating at the dynamic crossroads of business and technology. It’s a fast-paced environment where our team thrives, navigating challenges with agility and delivering impactful solutions.
          </p>
        </FadeIn>
      </Container>
      <Cultures />
      {/* <Clients /> */}
      {/* <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials> */}
      <Services />
      <ContactSection />
    </main>
  );
}
