import { Container, PhotoProfile, Email } from "./Container";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Contact, CatGift, ContactHi } from "./Contact";

const Contenido = () => {
  return (
    <div className="2xl:w-auto  xl:w-auto lg:w-auto max-xl:w-auto ">
      <section
        id="about"
        className=" flex justify-center  items-center max-md:flex-col mb-4 2xl:w-auto 2xl:h-screen 2xl:pl-24 xl:pl-32   md:pl-20  "
      >
        <div className="xl:w-1/2 lg:w-[45rem] md:w-[40rem] max-md:w-11/12 max-md:block  ">
          <Container></Container>
        </div>

        <PhotoProfile></PhotoProfile>
      </section>

      <section
        id="projects"
        className=" h-screen overflow-hidden text-gray-700    max-md:pl-1 2xl:pt-4 xl:pt-32 "
      >
        <Projects />
      </section>

      <section
        id="skills"
        className="  bg-teal-100  2xl:pl-96 xl:pl-72 max-md:pl-28  h-screen 2xl:pt-10 max-md:pt-5 max-md:block"
      >
        <Skills />
      </section>

      <section
        id="contact"
        className="   2xl:pl-[20rem]  xl:pl-80 h-screen   max-md:pl-10    "
      >
        <ContactHi />
        <div className="flex justify-center items-center max-md:block max-md:ml-16 xl:flex-row md:flex-col">
          <Contact />
          <CatGift />
        </div>
      </section>
      <Email />
    </div>
  );
};

export default Contenido;
