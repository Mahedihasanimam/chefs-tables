
import { useEffect, useState } from "react";
import Rcard from "../Rcard/Rcard";
import Cook from "../wantCook/Cook";



const Recips = () => {
    const [recips,setRecips]=useState([])
    useEffect(()=>{
        fetch('recips.json')
        .then(res=>res.json())
        .then(data=>setRecips(data))
    },[])
  return (
    <div>
        <div>

        </div>
        <div className=" flex justify-between gap-8 my-6 p-6">
      <div className="w-3/5 grid grid-cols-2 gap-8">
      {
        recips.map(card=><Rcard key={card.recipe_id} card={card}></Rcard>)
      }
      </div>
      <div className="w-2/5">
        <Cook></Cook>
      </div>
    </div>
    </div>
  );
};
export default Recips;
