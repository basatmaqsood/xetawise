import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          XetaWise was founded by four friends who noticed a gap in how developer studios approached value and cost. From day one, we’ve been committed to delivering exceptional quality, transparent pricing, and meaningful results for our clients.
          </p>
          <p>
          At XetaWise, we’re more than just a team — we’re a community. We believe in fair compensation, flexibility, and empowering our employees to work in ways that align with their strengths and focus. In return, we ask for passion, dedication, and a shared commitment to excellence.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="50+" label="Employees" />
          <StatListItem value="100+" label="Placated clients" />
          <StatListItem value="$25M+" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
