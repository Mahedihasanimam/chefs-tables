
import PropTypes from 'prop-types';
import Cooking from '../cooking/Cooking';


const Cook = ({cook,handlePreparing,move}) => {

//  const id=cook.filter(item=>(item.recipe_id))
//  console.log(id)

        
    return (
        <div className='lg:w-2/5 w-full border-solid border-2 border-gray-200 h-fit py-10 rounded-2xl shadow-md p-4 '>
            <h3 className='text-2xl font-bold text-center pb-4 '>Want to cook : {cook.length} </h3>
            <hr />
           <br />
            <table className='flex items-center justify-around mb-4  '>
              <th className=''>Name</th>
              <th className=''>Time</th>
              <th className=''>Calories</th>
              <th className=''></th>
            </table>
           
            {
                cook.map((item,index)=>(
                    <>
                       <table className='flex items-center justify-between mb-4 bg-gray-100 p-5 rounded-md'>
                        <td>{index+1}</td>
                       <td>{item.recipe_name}</td>
                       <td>{item.preparing_time} min</td>
                       <td>{item.calories} calories</td>
        
                        <td> <button id='btn' onClick={()=>handlePreparing(item)} className="btn rounded-full px-8 bg-[#0BE58A] text-white outline-none border-none hover:bg-[#0BE58A]">Preparing</button></td>
                      
                       </table>
                      
                    </>
                ))
            }
          <Cooking cooking={move}></Cooking>
        </div>
    
    );
};

Cook.propTypes = {
    cook : PropTypes.func,
    handlePreparing : PropTypes.func,
    move : PropTypes.func
};

export default Cook;