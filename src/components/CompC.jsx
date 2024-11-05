import { useState } from "react";
import hogs from "../porkers_data";
import ComponentD from "./compD";

function ComponentC(){

   let hoggy = hogs.map((hog,index)=>{
        
        
        return(
            <ComponentD key={index} name={hog.name} image={hog.image} speciality={hog.specialty} weight={hog.weight} hmedal={hog.highestMedalAchieved}/>
        )   
    })
   return <div 
        style={{
            display:"flex",
            flexWrap:'wrap',
            gap:"80px",
            justifyContent:"space-evenly"
        }}
   >
    {hoggy}
   </div>
}

export default ComponentC