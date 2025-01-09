import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          During the Build phase, we work closely with clients to refine the{" "}
          <strong className="font-semibold text-neutral-950">
            requirements
          </strong>{" "}
          and ensure the project aligns with their evolving needs. This
          flexibility allows us to fine-tune every aspect for a successful
          launch.
        </p>
        <p>
          Our team uses a blend of custom-built and pre-existing components to
          accelerate development, ensuring that each project is both innovative
          and efficient. We prioritize delivering solutions that are{" "}
          <strong className="font-semibold text-neutral-950">high-quality</strong>{" "}
          and ready to make an immediate impact.
        </p>
        <p>
          At launch, we ensure all key functionalities are{" "}
          <strong className="font-semibold text-neutral-950">fully operational</strong>, 
          with a roadmap in place to optimize and expand auxiliary features as part 
          of ongoing maintenance and support.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Comprehensive testing ensures the reliability, performance, and security 
          of your solution before launch.
        </ListItem>
        <ListItem title="Infrastructure">
          We deploy projects on reliable, scalable infrastructure tailored to 
          your business needs, ensuring optimal performance.
        </ListItem>
        <ListItem title="Support">
          Our team provides post-launch support, offering maintenance and assistance 
          to ensure your project’s continued success.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
