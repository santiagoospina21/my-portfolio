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
      name: "Chat GPT",
      image:
        "https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/chatgpt.png",
    },
  ];

  return (
    <div>
      <h1 className="font-mono text-center mb-14 max-md:mb-5 2xl:mr-[10rem] xl:mr-28 text-4xl max-md:text-2xl p-10 font-bold">
        Skills
      </h1>

      <div className="flex flex-wrap">
        <div>
          <img
            src="https://topdevs.org/images/site/services/webdev/hero-bg.svg"
            className="2xl:w-[30rem] max-md:w-36 xl:w-96 2xl:pt-[10rem] xl:pt-0 max-md:ml-10 "
          ></img>
        </div>
        <div>
          <h2 className="font-mono  2xl:mb-14  text-3xl 2xl:p-10 max-md:pb-5 2xl:pl-[22rem] xl:pl-52 max-md:pl-10 max-md:pt-4 font-bold max-md:text-xl ">
            Web Development
          </h2>
          <div className="flex flex-wrap space-x-7">
            {techs.slice(0, 4).map((tech, i) => (
              <Tech key={i} name={tech.name} image={tech.image} />
            ))}
          </div>
          <div className="flex flex-wrap space-x-7 ml-16 max-md:ml-10">
            {techs.slice(4, 7).map((tech, i) => (
              <Tech key={i} name={tech.name} image={tech.image} />
            ))}
          </div>
          <div className=" 2xl:pl-[15rem] 2xl:pt-[7rem] xl:pl-20  xl:pt-20 max-md:pt-4 ">
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
    <div className=" contenedor relative bg-white rounded-full 2xl:h-24 2xl:w-24  xl:h-20 xl:w-20 max-md:w-10 max-md:h-10 mt-5 shadow 2xl:ml-56 xl:ml-32 flex items-center justify-center">
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
