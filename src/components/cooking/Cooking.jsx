import PropTypes from 'prop-types';
import { useState } from 'react';
const Cooking = ({cooking}) => {

 let totalcount=cooking.map(i=>i.preparing_time)
 let time = totalcount.reduce((acc, curr) => acc + curr, 0);
 let totalcalo=cooking.map(i=>i.calories)
 let calo = totalcalo.reduce((acc, curr) => acc + curr, 0);

//  cooking.map(i=>setTotal(i.preparing_time))
//  console.log(parseInt(total))
    return (
        <div>
            <h3 className='text-2xl font-bold text-center pb-4 '>Currently cooking : {cooking.length} </h3>
            <hr />
           <br />
            <table className='flex items-center justify-around mb-4  '>
              <th className=''>Name</th>
              <th className=''>Time</th>
              <th className=''>Calories</th>
              <th className=''></th>
            </table>
            {
                cooking.map((item,index)=>(

                         <>
                      
                       <table className='flex items-center justify-between mb-4 bg-gray-100 p-5 rounded-md'>
                        <td>{index+1}</td>
                       <td>{item.recipe_name}</td>
                       <td>{item.preparing_time} minute</td>
                       <td>{item.calories} calories</td>
                       <td></td>
 
                       </table>
                    </>
                        
                ))
            }

           <div>
           <div className="overflow-x-auto">
  <table className="table">

    <tbody>
      {/* row 1 */}
      <tr>
        <th></th>
        <td></td>
        <td></td>
        <td>total time : {time} min</td>
        <td>total calories : {calo} calories</td>
      </tr>
    
    </tbody>
  </table>
</div>
           </div>
            
        </div>
    );


};

Cooking.prototype={
    cooking : PropTypes.func
}
export default Cooking;