import React, { useState } from 'react'
import SectionWrapper from './sectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/exercise'


function Header(props){
  const{index,title,description} = props

  return(
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-small sm:text-base mx-auto '>{description}</p>
    </div>
  )
} 



export default function Generator() {

  const[showModal, setShowModal] = useState(false);
  const[poison , setPoison] = useState('individua');
  const[muscles, setMuscles] = useState([]);
  const[goals , setGoals] = useState('strength_power');

//  let showModal = false

 function toggleModal(){
  setShowModal(!showModal)
 }

  return (
    <SectionWrapper header={"generate your workout"} title={['it\'s','grind','o\'clock']}>

      <Header index={'01'} title={'pick your poison'} description={'select the workout you wish to endure'}/>

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type,typeIndex)=>{
          return(
            <button className='bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600  py-4 rounded-lg' key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_'," ")}</p>
            </button>
          )
        })}
      </div>


      <Header index={'02'} title={'Lock on target'} description={'select the muscle judged for annihilation'}/>

      <div className='bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal} className='relative p-3 flex justify-center items-center'>
          <p>Select muscle groups</p>
          <i className="absolute right-3 top-1/2 -translate-y-1/2 fa-solid fa-caret-down"></i>
        </button>

        {showModal && (
          <div>modal</div>
        )}

        
      </div>



      <Header index={'03'} title={'Become juggernaut'} description={'Select your ultimate objective.'}/>

      <div className='grid grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme,schemeIndex)=>{
          return(
            <button className='bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600  py-4 rounded-lg' key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>
            </button>
          )
        })}
      </div>
       
    </SectionWrapper>

   
  )
}
