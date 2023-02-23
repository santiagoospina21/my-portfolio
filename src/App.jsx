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
    <main className="bg-gradient-to-r from-teal-100 to-teal-200 h-screen xl:w-[90rem]  2xl:w-[118.95rem] flex   ">
      <div className="container bg-teal-400  w-60  h-screen xl:h-screen fixed left-0 ">
        <GiftPika />
        <Header />
        <RedIcons />
      </div>

      <div className=" ">
        <section id="about" className="mb-4 2xl:w-auto h-screen pl-96  ">
          <div className=" 2xl:inline-block 2xl:w-1/2 xl:w-1/3 xl:inline-block  ">
            <Container></Container>
          </div>
          <div className=" 2xl:inline-block 2xl:w-1/2 2xl:h-700 xl:w-1/3  xl:inline-block  ">
            <PhotoProfile></PhotoProfile>
          </div>
        </section>

        <section
          id="projects"
          className="overflow-hidden text-gray-700 pl-96 pt-4"
        >
          <Projects />
        </section>
        <section id="skills" className="  bg-teal-100  pl-96 h-screen pt-10">
          <Skills />
        </section>
        <section id="contact" className="   pl-[30rem] h-screen pt-10   ">
          <ContactHi />
          <div className="flex flex-wrap">
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
