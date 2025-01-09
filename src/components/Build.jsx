import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";
import { TagList, TagListItem } from "./TagList";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Building on the insights gained during the discovery phase, we
          develop a clear and actionable roadmap tailored to each product. This
          roadmap ensures a structured and efficient approach toward delivery,
          focusing on quality and innovation at every step.
        </p>
        <p>
          Each client is partnered with a dedicated account manager who serves
          as a reliable point of contact. They ensure seamless communication,
          keeping clients informed about progress while coordinating closely
          with our development team to maintain alignment with project goals.
        </p>
        <p>
          Our account managers are committed to providing timely updates and
          addressing client feedback with care, fostering a collaborative
          environment that drives success and ensures satisfaction.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Detailed project roadmap</TagListItem>
        <TagListItem>Milestone tracking</TagListItem>
        <TagListItem>Collaborative planning sessions</TagListItem>
        <TagListItem>Custom development workflows</TagListItem>
        <TagListItem>Regular progress updates</TagListItem>
        <TagListItem>Quality assurance checkpoints</TagListItem>
      </TagList>

    </Section>
  );
};

export default Build;
