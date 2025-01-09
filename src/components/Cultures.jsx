import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
          Our team’s dedication runs deep, with many members growing alongside us from the very beginning. We value their commitment and create an environment where they can thrive.
          </GridListItem>
          <GridListItem title="Trust" invert>
          We believe in results, not micromanagement. Our team enjoys flexibility, knowing we trust them to deliver excellence on their terms.
          </GridListItem>
          <GridListItem title="Compassion" invert>
          We understand that life extends beyond work, and we’re committed to supporting our team with empathy and respect for their individual experiences.          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
