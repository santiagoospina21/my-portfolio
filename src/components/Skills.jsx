import { useRef } from "react";

export function Skills() {
  const techs = [
    {
      name: "HTML",
      image:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/html.png",
    },
    {
      name: "CSS",
      image:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/css.png",
    },
    {
      name: "JavaScript",
      image:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/js.png",
    },
    {
      name: "React",
      image:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/react.png",
    },
    {
      name: "Tailwind",
      image:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/tailwind.png",
    },
    {
      name: "MySQL",
      image:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/mysql.png",
    },
    {
      name: "Node.js",
      image:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/nodejs.png",
    },
    {
      name: "Express",
      image:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/Express.png",
    },
    {
      name: "Redux",
      image:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/redux.png",
    },
    {
      name: "Firebase",
      image:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/firebase.png",
    },
  ];

  return (
    <div>
      <h1 className="font-mono text-center 2xl:mb-14 xl:mb-14 lg:mb-8 max-md:mb-5 2xl:mr-[27rem] xl:mr-28 2xl:ml-0 xl:ml-0  md:ml-52 text-4xl max-md:text-2xl p-10 font-bold">
        Skills
      </h1>

      <div className="flex flex-wrap xl:flex-row sm:flex-col  ">
        <div>
          <img
            src="https://topdevs.org/images/site/services/webdev/hero-bg.svg"
            className="2xl:w-[26rem] max-md:w-36 xl:w-96 md:w-56 2xl:pt-[10rem] 2xl:ml-0 xl:ml-0 md:ml-[31rem] ]  xl:pt-0 max-md:ml-10 
            2xl:mb-0 xl:mb-0 md:mb-8
            "
          ></img>
        </div>
        <div>
          <h2 className="font-mono  2xl:mb-14  text-3xl 2xl:p-10 max-md:pb-5 2xl:pl-[22rem] xl:pl-52 2xl:ml-0 xl:ml-0 md:ml-[30.5rem]   max-md:pl-10 max-md:pt-4 font-bold max-md:text-xl ">
            Web Development
          </h2>
          <div className="flex flex-wrap space-x-7 2xl:ml-0 xl:ml-0 lx:ml-[29rem] md:ml-[20rem]">
            {techs.slice(0, 5).map((tech, i) => (
              <Tech key={i} name={tech.name} image={tech.image} />
            ))}
          </div>
          <div className="flex flex-wrap space-x-7 ml-16 max-md:ml-0 2xl:ml-16 xl:ml-0 lx:ml-[32rem] md:ml-[23rem]">
            {techs.slice(5, 10).map((tech, i) => (
              <Tech key={i} name={tech.name} image={tech.image} />
            ))}
          </div>
          <div className=" 2xl:pl-[15rem] 2xl:pt-[7rem] xl:pl-20  xl:pt-20 md:pt-12 max-md:pt-4  2xl:ml-0 xl:ml-0 md:ml-[20rem]">
            <ul className="space-y-2 fontArsenal text-2xl max-md:text-xl ">
              <li className="before:content-['▹'] flex before:mr-3 before:text-accent before:block ">
                Building responsive apps in React.js
              </li>
              <li className="before:content-['▹'] flex before:mr-3 before:text-accent before:block ">
                Building websites connecting them with APIs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tech({ name, image, i }) {
  const imageRef = useRef(null);

  function handleMouseOver(event) {
    const imagePos = imageRef.current.getBoundingClientRect();
    const balloon = document.createElement("div");
    balloon.className =
      "bg-gray-300 text-gray-800 p-2 rounded-lg absolute   shadow-md  ";
    balloon.textContent = name;

    console.log(event.currentTarget.nextSibling);
    event.currentTarget.nextSibling.appendChild(balloon);
  }

  function handleMouseOut() {
    const balloon = document.querySelector(".balloon-container div");
    if (balloon) {
      balloon.remove();
    }
  }

  return (
    <div className=" contenedor relative bg-white rounded-full 2xl:h-20 2xl:w-20  xl:h-20 xl:w-20 max-md:w-7 max-md:h-7 mt-5 shadow 2xl:ml-56 xl:ml-32 flex items-center justify-center">
      <img
        ref={imageRef}
        src={image}
        className="w-[3.5rem]"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></img>
      <div key={i} className="balloon-container absolute -top-10 left-5 "></div>
    </div>
  );
}
