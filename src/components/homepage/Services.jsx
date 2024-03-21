import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Web Design",
    "Wireframing",
    "UI/UX Design",
    "Branding",
  ];

  const toolBoxItems = [
    "JavaScript",
    "HTML",
    "CSS",
    "Figma",
    "Webflow",
    "GSAP",
    "TailwindCSS",
    "ReactJS",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I am dedicated to all aspects of design and web development.
           Through each of my services, my aim is to deliver a meaningful and uplifting digital experience for all users."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="I rely on a robust tech stack to bring projects to life, constantly seeking to enhance my expertise in my current tools while eagerly exploring new technologies to broaden my capabilities."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
