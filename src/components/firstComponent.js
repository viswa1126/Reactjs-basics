import React from 'react';

//ES6 new way of declaring components

const Joe = () =>{
    return(
    <div>
            <p>Joe is the first girl went to black hole many times many years..&#128540;</p>
            <p> Year {Math.floor(Math.random()*2000)}</p>

    </div> 
    )
}

// function Joe(){
//     return <p>Joe is the first girl went to black hole..&#128540;</p>
// }

export default Joe;