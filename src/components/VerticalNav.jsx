import { Header, GiftPika, RedIcons } from "./Header";
import { Outlet } from "react-router-dom";
const VerticalNav = () => {
  return (
    <div className="bg-gradient-to-r from-teal-100 to-teal-200 h-screen sm:w-auto  2xl:w-auto flex ">
      <div className=" bg-teal-400 w-60 xl:w-52 md:w-52 max-md:w-24 h-screen fixed ">
        <GiftPika />
        <Header />
        <RedIcons />
      </div>
      <Outlet />
    </div>
  );
};

export default VerticalNav;
