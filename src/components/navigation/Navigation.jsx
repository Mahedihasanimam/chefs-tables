import PropTypes from "prop-types";
import { FaRegCircleUser } from "react-icons/fa6";

const Navigation = () => {
  return (
   <div className="px-8 pb-8">
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
      </ul>
    </div>
    <a className="font-bold lg:text-4xl text-lg">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-4-8 text-lg font-normal">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
 
  <div className="navbar-end">
  <div className="lg:px-5 md:px-5">
  <label className="input bg-gray-100 flex items-center gap-2 rounded-full lg:w-full md:w-full float-right w-2/5">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text" className=" border-none text-[#150B2BB3] w-2/3"  placeholder="Search" />
</label>
  </div>
    <FaRegCircleUser className="text-3xl p-2 bg-[#0BE58A] rounded-full lg:block md:block hidden"></FaRegCircleUser>
  </div>
</div>
   </div>
  );
};

Navigation.propTypes = {
  Navigation: PropTypes.func,
};

export default Navigation;
