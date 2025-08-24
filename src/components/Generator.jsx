import React from 'react'
import SectionWrapper from './sectionWrapper'


function Header(props){
  const{index,title,description} = props

  return(
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-lg sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  )
}



export default function Generator() {
  return (
    <SectionWrapper header={"generate your workout"} title={['it\'s','huge','o\'clock']}>

      <Header index={'01'} title={'pick your poison'} description={'select the workout you wish to endure'}/>
       
    </SectionWrapper>
  )
}
