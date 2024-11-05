import ComponentC from "./CompC"
import ComponentB from "./CompB"


function ComponentA(){
    return(
        <div>
            <ComponentB />
            <ComponentC/>
        </div>
    )
}

export default ComponentA