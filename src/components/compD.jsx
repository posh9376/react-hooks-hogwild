import { useState } from "react";

function ComponentD({name, image ,speciality, weight, hmedal}){
    const[showHog, setShowHog]=useState(false)
    const [hide, setHide]=useState(false)

    function clear(e){
        console.log(e);
        console.log('btn clicked');
        setHide(!hide)
        
        
    }

    function disp(e){
        console.log(e);
        setShowHog(!showHog)
    }

    return(
        <div>
            {setHide && (
                 <div
                 style={{
                     width: "400px",
                     border:"2px solid #F5A9BC"
                 }}
                 onClick={disp}>
                     <div>
                         <img src={image}alt={name}  style={{
                             width: "400px"
                         }}/>
                         <h2>{name}</h2>  
                     </div>
                     {showHog && (
                     <div>
                         <p>speciality: {speciality}</p>
                         <p>weight: {weight}</p>
                         <p>Highest medal: {hmedal}</p>
                     </div>
                     )}  
                 </div>
             
            )}
           
        <button onClick={clear}>Hide</button>
        </div>
        

    )
}


export default ComponentD