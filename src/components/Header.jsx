import { VscGithubInverted } from "react-icons/vsc";
import { GrLinkedin, GrMail } from "react-icons/gr";
import { Link, animateScroll as scroll } from "react-scroll";

window.addEventListener("load", function () {
  const lis = document.querySelectorAll("ul li");
  lis[0].classList.add("bg-teal-700");
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});

const handleScroll = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });

      navLinks[index].classList.add("active");
    }
  });
};

window.addEventListener("scroll", handleScroll);

window.removeEventListener("scroll", handleScroll);

export function GiftPika() {
  return (
    <div className="bg-teal-500">
      <img src="https://raw.githubusercontent.com/santiagoospina21/my-portfolio/master/img/pikachu-running.gif"></img>
    </div>
  );
}

export function Header() {
  const classes = "mb-12 p-2    hover:scale-110 text-line";

  function classesClick(e) {
    e.preventDefault();
    const lis = document.querySelectorAll("ul li");

    lis.forEach((li) => li.classList.remove("bg-teal-700"));
    e.target.parentNode.className =
      "bg-teal-700 mb-12 p-2 hover::scale-110 text-line ";
  }

  return (
    <nav className="bg-teal-500  text-center flex  items-center 2xl:h-4/6 xl:h-4/6 px-16  fontRoboto   ">
      <ul>
        <li className={classes}>
          <a
            href="section1"
            onClick={(e) => {
              classesClick(e);
              document
                .querySelector("#about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            About me
          </a>
        </li>

        <li className={classes}>
          <a
            href="#projects"
            onClick={(e) => {
              classesClick(e);
              document
                .querySelector("#projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </a>
        </li>
        <li className={classes}>
          <a
            href="#skills"
            onClick={(e) => {
              classesClick(e);
              document
                .querySelector("#skills")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </a>
        </li>
        <li className={classes}>
          <a
            href="#contact"
            onClick={(e) => {
              classesClick(e);
              document
                .querySelector("#contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </li>

        <li className={classes}>
          <a href="https://drive.google.com/file/d/1YaD4UbTRyyLptoWOjB9wQArJGP2dJE4h/view">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export function RedIcons() {
  return (
    <div className="flex flex-row ml-5   space-x-10 text-4xl mt-16 xl:pb-[-10] hover:cursor-pointer">
      <VscGithubInverted /> <GrLinkedin />
      <GrMail />
    </div>
  );
}
