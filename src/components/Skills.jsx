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
      <h1 className="font-mono text-center mb-14 mr-[10rem] text-4xl p-10 font-bold">
        Skills
      </h1>

      <div className="flex flex-wrap">
        <div>
          <img
            src="https://topdevs.org/images/site/services/webdev/hero-bg.svg"
            className="w-[30rem] pt-[10rem]"
          ></img>
        </div>
        <div>
          <h2 className="font-mono  mb-14 text-3xl p-10 pl-[22rem] font-bold ">
            Web Development
          </h2>
          <div className="flex flex-wrap space-x-7">
            {techs.slice(0, 4).map((tech, i) => (
              <Tech key={i} name={tech.name} image={tech.image} />
            ))}
          </div>
          <div className="flex flex-wrap space-x-7 ml-16">
            {techs.slice(4, 7).map((tech, i) => (
              <Tech key={i} name={tech.name} image={tech.image} />
            ))}
          </div>
          <div className=" pl-[15rem] pt-[7rem] ">
            <ul className="space-y-2 fontArsenal text-2xl ">
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
    <div className=" contenedor relative bg-white rounded-full h-24 w-24 mt-5 shadow ml-56 flex items-center justify-center">
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
