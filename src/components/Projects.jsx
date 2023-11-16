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
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/Movie-app.JPG",
      tech: "React | FireBase | Redux",
      name: "Movie App Sanflix",
      gitHub: "https://github.com/santiagoospina21/movieReact-App.git",
      linkPage: "https://santy-movies-app.netlify.app/",
    },
    {
      dataImg:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/Encriptador.JPG",
      tech: "JS | CSS | HTML ",
      name: "Text Encoder",
      gitHub: "https://github.com/santiagoospina21/encriptador.git",
      linkPage: "https://encriptador-santy.netlify.app/",
    },

    {
      dataImg:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/Crown-Clothing.JPG",
      tech: "React | FireBase | Redux | Stripe ",
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
    slidesToScroll: 2,
    rows: 2,
    arrows: false,
  };

  return (
    <div className="container   xl:pt-20 md:pt-40 max-md:pt-10 max-md:pl-0   h-screen    ">
      <h1 className="font-mono text-center xl:ml-[20rem] md:ml-[15rem] mb-14 text-4xl font-bold max-md:text-xl max-md:ml-20 max-md:mt-10 ">
        My Projects
      </h1>
      <Slider
        {...settings}
        className="max-md:w-80  2xl:ml-[30rem] lg:ml-[19rem] md:ml-[15rem] max-md:ml-10 "
      >
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
    <div className="2xl:mt-10 2xl:mb-10 2xl:mr-12  xl:mt-10    max-md:mt-1   sm:mb-10 project-card flex justify-center items-center  ">
      <div
        href={linkPage}
        className="rounded-lg shadow-lg bg-white 2xl:w-auto xl:w-auto md:w-3/4  max-md:w-[5rem] hover:-translate-y-2 transition-all duration-200  "
      >
        <a>
          <img
            className="rounded-t-lg 2xl:w-[22rem] xl:w-[14rem]"
            src={dataImg}
            alt="imagen_proyecto"
          />
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
