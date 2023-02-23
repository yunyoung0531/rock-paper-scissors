import React from 'react'

const Box = (props) => {
    let result
    if (props.title === "computer" && props.result !== "TIE" && props.result !== "") {
        result = props.result === "WIN" ? "LOSE" : "WIN"
    }
    else {
        result = props.result
    }

    console.log("props 는", props)
    return (
    <div className='box'>
        <h1>{props.title}</h1>
        <h2>{props.item && props.item.name}</h2>
        <img className="item-img" src={props.item && props.item.img}/>
        <h2>{result}</h2>
    </div>
    )
}

export default Box
