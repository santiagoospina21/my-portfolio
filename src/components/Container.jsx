export function Container() {
  return (
    <div className="  h-screen  pt-96 xl:pt-64 ">
      <div className="mb-4 text-cyan-600 ">
        <h4 className="fontRoboto  ">Hi, my name is</h4>
      </div>
      <div className=" font-bold">
        <h1 className="xl:text-6xl animate__animated animate__fadeInLeft text-cyan-900 ">
          Santiago Ospina
        </h1>
        <p className=" text-cyan-900 mt-10 text-2xl text-justify  fontArsenal ">
          I am a sound engineer with a passion for web development, with
          knowledge in front-end. I have made my own projects applying various
          technologies, mainly focused on JavaScript and React. Currently my
          goal is to expand my knowledge in back-end, and find my first
          opportunity in the field of software development.
        </p>
        <h4 className="fontRoboto mt-10 text-xs sm:text-sm text-cyan-600 ">
          Currently available for remote job & freelance
        </h4>
      </div>
    </div>
  );
}

export function PhotoProfile() {
  return (
    <div className="relative group">
      <img
        src="/img/foto3.jpg"
        alt="Imagen circular"
        className=" 2xl:absolute  2xl:top-8 2xl:right-72 2xl:left-0    2xl:z-10  xl:absolute xl:top-40 xl:left-32 xl:z-10 2 xl:rounded-lg 2xl:w-6/12 xl:w-11/12  2xl:m-4 2xl:mt-52 2xl:ml-20 2xl:shadow-lg   animate__animated animate__fadeInRight   "
      ></img>
      <div className=" 2xl:absolute 2xl:top-24 2xl:right-64 2xl:left-0 2xl:z-0 2xl:h-[32rem] 2xl:w-[25rem] 2xl:ml-[7.5rem] 2xl:mt-[12.5rem] xl:h-[32rem] xl:w-[24rem]  xl:ml-[7.5rem] xl:mt-[12.5rem]    xl:absolute xl:top-0 xl:left-12      border-4 rounded  border-cyan-900  group-hover:translate-x-4 group-hover:translate-y-4  hidden xl:block "></div>
    </div>
  );
}

export function Email() {
  return (
    <div className="fixed bottom-0 flex-col items-center hidden md:flex right-6 xl:right-12">
      <a
        href="mailto:ing.santiagoospina@gmail.com"
        className=" block text-sm p-2.5 hover:translate-y-1 focus:outline-none focus:translate-y-1 duration-200 [writing-mode:vertical-lr] font-mono tracking-widest  "
      >
        ing.santiagoospina@gmail.com
      </a>
      <div className="bg-slate-500 h-24 w-0.5 mt-5"></div>
    </div>
  );
}
