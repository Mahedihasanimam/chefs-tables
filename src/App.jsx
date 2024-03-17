
import { useState } from 'react'
import './App.css'
import Hero from './components/heroSection/Hero'
import Navigation from './components/navigation/Navigation'
import Recips from './components/recips/Recips'
import Cook from './components/wantCook/Cook'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [move,setMove]=useState([])
  const [cook,setCook]=useState([])
  // const [cooking,setCooking]=useState([])
  const handleAddCook=(item)=>{
    const isExist=cook.find(mycook=>mycook===item);
    if(!isExist){
      const newCookValue=[...cook,item]
      setCook(newCookValue)
    }
    else{
      toast('already exsist')
    }
  }

  const handlePreparing=(item)=>{
    console.log(item.recipe_id)
    const newck=cook.filter(sitem=>sitem.recipe_id !== item.recipe_id);
    setCook(newck)
   const newmove=cook.find(sitem=>sitem.recipe_id == item.recipe_id);
   setMove([...move,newmove])

}
console.log(move)
  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <div>
      <div className="text-center my-6 lg:w-2/4 mx-auto space-y-2">
            <h3 className="text-4xl font-bold">our recips</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non libero consequuntur dicta provident sapiente praesentium, perspiciatis magnam dignissimos est quam.</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse justify-between gap-8 my-6 p-6">
        <ToastContainer></ToastContainer>
      <Recips  handleAddCook={handleAddCook}></Recips>
      <Cook move={move} handlePreparing={handlePreparing} cook={cook}></Cook>

      </div>
    </>
  )
}

export default App
