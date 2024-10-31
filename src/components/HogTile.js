import { useState } from "react";


function HogTile({hog}) {                           // prop from App
    const [ pigOn, setPig ] = useState(false)
    function handleClick(){                         // event handler func
        setPig(!pigOn)                              // set the new value of the pigOn to opposite !
    }
    return (
        <div onClick={handleClick}>                         {/* attach the whole pig to and event, and call the handler func */}
            <img src={hog.image} alt={hog.name} />          {/* call the image and name using the prop from App */}
            <p>{hog.name}</p>                               {/* display the pig name */}
            {pigOn ?                                        
                (<><p>Specialty: {hog.specialty}</p> 
                <p>Greased: {hog.greased.toString()}</p>
                <p>Weight: {hog.weight}</p>
                <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p> 
                </>)
                : ""}          {/* add the ternary condition if the pig gets clicked and show more info*/}                             
        </div>     /* if pig is not clicked, show an empty string */
    );
}

export default HogTile