import React from "react";
import styled from 'styled-components';

const InfoImg = styled.img`
    width: 50%;
    height: 50%;
    padding:1%;
    background-color: white;
    border: 1px solid black;
    border-radius: 2%;
    margin-bottom: 2%;
    box-shadow: 5px 5px 5px slategray;
    `;

//passed information from image card 

const ImageList = props => {

    return(

        <div>
            <InfoImg src={props.image} alt='RandomizedImg'/>
            <h3>{props.title}</h3>
            <h3>{props.date}</h3>
            <p>{props.explanation}</p>
        </div>

    )

}


export default ImageList;