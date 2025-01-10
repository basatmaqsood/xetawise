import PageIntro from "@/components/PageIntro";
import WorkShowcase from "@/components/WorkShowcase";
import React from "react";

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
        We believe in efficiency and optimizing resources to deliver exceptional value to our clients. Our proven frameworks, refined over the years, allow us to create reliable and high-quality solutions tailored to your needs.
        </p>
      </PageIntro>
      <WorkShowcase/>
    </>
  );
};

export default WorkPage;
