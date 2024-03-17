
import { useEffect, useState } from "react";
import Rcard from "../Rcard/Rcard";

import PropTypes from "prop-types";


const Recips = ({handleAddCook}) => {
    const [recips,setRecips]=useState([])
    useEffect(()=>{
        fetch('recips.json')
        .then(res=>res.json())
        .then(data=>setRecips(data))
    },[])
  return (  
      <div className="lg:w-7/12 w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mb-6">
      {
        recips.map(card=><Rcard key={card.recipe_id} card={card} handleAddCook={handleAddCook}></Rcard>)
      }
      </div>
    
  );
};
Recips.propTypes = {
  handleAddCook: PropTypes.func,
};
export default Recips;
