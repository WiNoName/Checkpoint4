import React from 'react'
import Title from "./Title.js"
import Photo from "./Photo.js"

function Wrapper(props){
    return(
        <div>
            {props.children}
        </div>
        )
}


export default Wrapper;