import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="mx-36  flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <NavLink to={"/"}>Poetry</NavLink>
        </div>
        <nav className="space-x-4">
          <NavLink
            to={"/create-poetry"}
            className="text-white hover:text-gray-300"
          >
            Create Poetry
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
