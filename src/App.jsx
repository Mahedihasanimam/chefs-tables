
import { useState } from 'react'
import './App.css'
import Hero from './components/heroSection/Hero'
import Navigation from './components/navigation/Navigation'
import Recips from './components/recips/Recips'
import Cook from './components/wantCook/Cook'


function App() {
  const [cook,setCook]=useState([])
  const [cooking,setCooking]=useState([])
  const handleAddCook=(item)=>{
    const isExist=cook.find(mycook=>mycook===item);
    if(!isExist){
      const newCookValue=[...cook,item]
      setCook(newCookValue)
    }
    else{
      alert('lksf')
    }
  }
  const handleCooking=(item)=>{
    const newck=cook.filter(sitem=> sitem !==item);
    const newCook=[...cooking,item]
    setCooking(newck)
    console.log(item)
}
console.log(cook)
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
      <div className=" flex justify-between gap-8 my-6 p-6">
      <Recips  handleAddCook={handleAddCook}></Recips>
      <Cook cooking={cooking} handleCooking={handleCooking} cook={cook}></Cook>
      
      </div>
    </>
  )
}

export default App
