import React from 'react'

function Title(props){
    let myStyle = {}
    if(props.small) {
        myStyle = {fontSize: 20}
    }else{
        myStyle = props.style
    }

    console.log(props)
    return(
        <div>
            <h1 style = {myStyle}>{props.children}</h1>
        </div>
    )
}

export default Title;