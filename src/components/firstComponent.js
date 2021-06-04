import React from 'react';

//ES6 new way of declaring components

const Joe = (props) =>{
    return(
    <div>
            <p>Many people went to see the black hole in many years..&#128540;</p>
            <p>person {props.name} At age: {props.age}</p>
            <p> Year {Math.floor(Math.random()*2000)}</p>
            <p>{props.children}</p>

    </div> 
    )
}

// function Joe(){
//     return <p>Joe is the first girl went to black hole..&#128540;</p>
// }

export default Joe;