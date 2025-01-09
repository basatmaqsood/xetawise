import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We are committed to staying ahead of industry trends and embracing
          innovative technologies, while ensuring the stability and reliability
          of our solutions. Our core values guide every project we undertake and
          are central to our approach.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            We take great pride in the details, ensuring that every element of
            your project reflects quality and precision from design to execution.
          </GridListItem>
          <GridListItem title="Efficient">
            We deliver high-quality results on time by leveraging our experience
            and expertise, ensuring that every project is streamlined and effective.
          </GridListItem>
          <GridListItem title="Adaptable">
            We understand that each business has unique needs, and we work
            flexibly to tailor our solutions to meet those needs while maintaining
            the integrity of the project.
          </GridListItem>
          <GridListItem title="Honest">
            Transparency is key to us. We are open and clear about our processes,
            keeping you informed at every step to ensure a smooth and successful
            collaboration.
          </GridListItem>
          <GridListItem title="Loyal">
            We value long-term relationships with our clients and are committed
            to providing ongoing support and delivering value well beyond project
            completion.
          </GridListItem>
          <GridListItem title="Innovative">
            We are always exploring new opportunities to innovate and enhance
            our solutions, staying at the cutting edge of technology to deliver
            the best possible outcomes for our clients.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
