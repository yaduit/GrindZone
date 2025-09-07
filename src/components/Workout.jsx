import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";


function Workout(props) {

  const{workout} = props;
  return (
    <div>
        <SectionWrapper id={'workout'} header={"your workout is ready"} title={['time','to','grind']}>
          <div lassName ='flex flex-col gap-4'>
            {workout.map((exercise , i)=>{
              return(
                  <ExerciseCard i={i} exercise={exercise} key={i}/>
              )
            })}

          </div>


        </SectionWrapper>
    </div>
  )
}
export default Workout
