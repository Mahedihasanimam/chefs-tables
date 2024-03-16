import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
const Rcard = ({ card,handleAddCook }) => {
  const {
    recipe_id,
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = card;
  return (
    <div className=" ">
      <div className="card h-fit border-solid border-2 border-gray-200 my-1  bg-base-100 shadow-xl">
        <figure>
          <img src={recipe_image} alt={recipe_image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="pb-2">{short_description}</p>
          <hr />
          <div className="py-2">
            <h3 className="text-xl font-bold py-1">ingradience : 6</h3>
            {ingredients.map((item) => (
              <li key={recipe_id} className="opacity-70">
                {item}
              </li>
            ))}
          </div>
          <hr />
          <div className="flex justify-between items-center mb-12">
            <span className="flex items-center gap-2 text-lg">
              {" "}
              <CiClock2></CiClock2>{" "}
              <span className="opacity-70 ">{preparing_time}</span>{" "}
            </span>
            <span className="flex items-center gap-2 text-lg">
              {" "}
              <FaFire></FaFire> <span className="opacity-70 ">{calories}</span>{" "}
            </span>
          </div>
          <div className="card-actions ">
            <button onClick={()=>handleAddCook(card)} className="btn rounded-full px-8 bg-[#0BE58A] text-white outline-none border-none lg:mr-12 md:mr-12 mr-4 mb-5 hover:bg-[#0BE58A]">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Rcard.propTypes = {
  card: PropTypes.func,
  handleAddCook : PropTypes.func
};
export default Rcard;
