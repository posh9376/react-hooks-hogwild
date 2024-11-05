import { useState } from "react"

function ComponentB(props){
    const {setHog}=props
    const[name, setName]=useState("")
    const[speciality, setSpecialiy]=useState("")
    const[weight, setWeight]=useState("")
    const[image, setImage]=useState("")
    const[medal, setMedal]=useState("")
    const[greased, setGreased]=useState("")
console.log(greased);

    const add = (e)=>{
        e.preventDefault()
        const addedHog = {
            name,
            speciality,
            weight,
            image,
            medal,
            greased
        }
        console.log(addedHog);
        
    }
    

    

    return(
        <div style={{padding: "20px"}}>
            <form action="submit">
                <h2>Submit new Hog</h2>
                <label htmlFor="name">name: </label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>

                <label htmlFor="spciality"> Speciality: </label>
                <input type="text" value={speciality} onChange={(e)=> {setSpecialiy(e.target.value)}}/>
                
                <label htmlFor="weight"> Weight: </label>
                <input type="number" value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
                
                <label htmlFor="image"> Image: </label>
                <input value={image} onChange={(e)=>{setImage(e.target.value)}}/>
                
                <label for="cars"> Choose a medal:</label>
                <select name="medals" value={medal} onChange={(e)=>{setMedal(e.target.value)}}>
                    
                    <option value="bronze">Bronze</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="platinum">Platinum</option>
                </select>
                <label for="cars">  Greased:</label>
                <select name="greased" value={greased} onChange={(e)=>{setGreased(e.target.value)}} >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <br/>
                <input type="submit" value="submit" style={{marginTop:"5px"}} onClick={add}/>
            </form>

        </div>
    )
}


export default ComponentB