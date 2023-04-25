import { FiGithub } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function Projects() {
  // datos de los proyectos
  const projects = [
    {
      dataImg:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/Encriptador.JPG",
      tech: "JS | CSS| HTML ",
      name: "Text Encoder",
      gitHub: "https://github.com/santiagoospina21/encriptador.git",
      linkPage: "https://encriptador-santy.netlify.app/",
    },

    {
      dataImg:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/Crown-Clothing.JPG",
      tech: "React | FireBase | Styled Comp ",
      name: "E-Commerce Crown Clothing",
      gitHub: "https://github.com/santiagoospina21/Crown-clothing-app.git",
      linkPage: "https://crown-clothing-e-commerce-santy.netlify.app/",
    },

    {
      dataImg:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/Portfolio.JPG",
      tech: "React | JS | HTML | Tailwind",
      name: "My Portfolio",
      gitHub: "https://github.com/santiagoospina21/my-portfolio.git",
      linkPage: "https://portfolio-santy.netlify.app/",
    },
    {
      dataImg:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/Pokedex.JPG",
      tech: "JS | HTML | CSS | API Rest",
      name: "Pokedex Pokemon",
      gitHub: "https://github.com/santiagoospina21/pokedex-santy.git",
      linkPage: "https://pokedex-santy.netlify.app",
    },
    {
      dataImg:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/Forkify.JPG",
      tech: "JS | HTML | CSS | API Rest",
      name: "Forkify Recipes",
      gitHub: "https://github.com/santiagoospina21/forkify-project.git",
      linkPage: "https://forkify-santy.netlify.app",
    },
    {
      dataImg:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/Mapty.JPG",
      tech: "JS | HTML | CSS |API Rest",
      name: "Mapty Workout",
      gitHub: "https://github.com/santiagoospina21/mapty-santy.git",
      linkPage: "https://santy-mapty.netlify.app",
    },
    {
      dataImg:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/BankistWeb.JPG",
      tech: "JS | HTML | CSS",
      name: "Bankist Web",
      gitHub: "https://github.com/santiagoospina21/Bankist_Web.git",
      linkPage: "https://bankistweb-santy.netlify.app",
    },
    {
      dataImg:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/BankistApp.JPG",
      tech: "JS | HTML | CSS",
      name: "Bankist App",
      gitHub: "https://github.com/santiagoospina21/Bankist_App.git",
      linkPage: "https://bankist-app-santy.netlify.app",
    },
    {
      dataImg:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/PigGame.JPG",
      tech: "JS | HTML | CSS",
      name: "Pig Game",
      gitHub: "https://github.com/santiagoospina21/pig-game.git",
      linkPage: "https://pig-game-santy.netlify.app",
    },
    {
      dataImg:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/MyNumber.JPG",
      tech: "JS | HTML | CSS",
      name: "Guest my Number",
      gitHub: "https://github.com/santiagoospina21/guess-my-number.git",
      linkPage: "https://guess-my-number-santy.netlify.app",
    },
  ];

  // configuración de react-slick
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
  };

  return (
    <div className="container 2xl:-ml-20  xl:pt-4 2xl:px-56 xl:pl-56 max-md:px-0 max-md:pl-0 xl:pr-0  h-screen  max-md:block ">
      <h1 className="font-mono text-center mb-14 text-4xl font-bold max-md:text-xl max-md:ml-20 max-md:mt-10">
        My Projects
      </h1>
      <Slider {...settings} className="max-md:w-80">
        {projects.map((project, i) => (
          <Project
            key={i}
            dataImg={project.dataImg}
            tech={project.tech}
            name={project.name}
            gitHub={project.gitHub}
            linkPage={project.linkPage}
          />
        ))}
      </Slider>
    </div>
  );
}

function Project({ dataImg, tech, name, gitHub, linkPage }) {
  return (
    <div className="2xl:mt-10 2xl:ml-10 max-md:mt-1 xl:ml-8 max-md:ml-28 2xl:mb-10 xl:mb-10 project-card ">
      <div
        href={linkPage}
        className="rounded-lg shadow-lg bg-white 2xl:w-[19rem] xl:w-[14.5rem] max-md:w-[5rem] hover:-translate-y-2 transition-all duration-200  "
      >
        <a>
          <img className="rounded-t-lg" src={dataImg} alt="" />
        </a>
        <div className="p-4 flex flex-wrap  flex-col justify-between ml-2 max-md:ml-0 ">
          <h5 className="text-xs capitalize font-mono ">{tech}</h5>

          <div className="flex ml-auto  ">
            <a href={gitHub} target="_blank">
              <FiGithub className="mr-2 hover:text-blue-500" />
            </a>
            <a href={linkPage} target="_blank">
              <RxOpenInNewWindow className="hover:text-blue-500" />
            </a>
          </div>
          <p className="text-gray-700  text-base max-md:text-xs mt-2   font-mono ">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}
