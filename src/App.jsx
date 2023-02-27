import "./App.css";
import { Header } from "./components/Header";
import { RedIcons } from "./components/Header";
import { GiftPika } from "./components/Header";
import { Container } from "./components/Container";
import { PhotoProfile } from "./components/Container";
import { Email } from "./components/Container";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { CatGift } from "./components/Contact";
import { ContactHi } from "./components/Contact";

function App() {
  return (
    <main className="bg-gradient-to-r from-teal-100 to-teal-200 h-screen xl:w-auto  2xl:w-auto flex   ">
      <div className="container bg-teal-400  2xl:w-60 xl:w-52 max-md:w-24  h-screen xl:h-screen fixed left-0  ">
        <GiftPika />
        <Header />
        <RedIcons />
      </div>

      <div className="2xl:w-auto xl:w-auto max-xl:w-auto  ">
        <section
          id="about"
          className="mb-4 2xl:w-auto 2xl:h-screen  2xl:pl-96  xl:pl-96 max-md:pl-36 "
        >
          <div className=" 2xl:inline-block 2xl:w-1/2 xl:w-1/3 max-md:w-11/12 xl:inline-block max-md:block  ">
            <Container></Container>
          </div>

          <div className=" 2xl:inline-block 2xl:w-1/2 2xl:h-4/6 xl:w-1/3 xl:inline-block max-md:block  ">
            <PhotoProfile></PhotoProfile>
          </div>
        </section>

        <section
          id="projects"
          className="overflow-hidden text-gray-700 2xl:pl-96 xl:pl-10  max-md:pl-1 2xl:pt-4"
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
          className="   2xl:pl-[30rem]  xl:pl-80 h-screen 2xl:pt-10 xl:pt-0 max-md:pl-10    "
        >
          <ContactHi />
          <div className="flex flex-wrap max-md:block">
            <Contact />
            <CatGift />
          </div>
        </section>

        <footer className="bg-teal-500 mx-auto   md:px-28 lg:px-20 xl:px-0 font-mono text-center hover:text-white">
          <a className="ml-60 "> Design & Built by Santiago Ospina</a>
        </footer>
        <Email />
      </div>
    </main>
  );
}

export default App;
