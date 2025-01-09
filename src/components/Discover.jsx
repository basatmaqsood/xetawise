import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{" "}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, embedding ourselves in their daily operations to gain a deeper
          understanding of what drives their business forward.
        </p>
        <p>
          Our team conducts thorough research and analysis to uncover key
          insights and opportunities, collaborating with stakeholders to
          identify areas for improvement and growth. By leveraging a
          multidisciplinary approach, we ensure a holistic understanding of
          each client’s{" "}
          <strong className="font-semibold text-neutral-950">business</strong>.
        </p>
        <p>
          Once our assessment is complete, we deliver a comprehensive{" "}
          <strong className="font-semibold text-neutral-950">plan</strong>{" "}
          tailored to your unique objectives, accompanied by a detailed budget
          to guide the next steps.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Data-driven analysis</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
