import PropTypes from 'prop-types';
const Cooking = ({cooking}) => {
    console.log(cooking)
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
            
        </div>
    );


};

Cooking.prototype={
    cooking : PropTypes.func
}
export default Cooking;