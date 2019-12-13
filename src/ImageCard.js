import React, { useState, useEffect } from "react";
// import { Card, CardText, CardTitle} from 'reactstrap';
import ImageList from './ImageList';
import axios from 'axios';




const ImageCard = () => {
        const [image, setImage] = useState();
        const [date, setDate] = useState();
        const [title, setTitle] = useState();
        const [explanation, setExplanation] = useState();

        useEffect(() => {
            axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=5NYLc8SUrVF5DYdp8sI3F2J23DqYoLV8vr35lmCm`)
            .then(response => {
                setImage(response.data.image);
                setDate(response.data.date);
                setTitle(response.data.title);
                setExplanation(response.data.explanation);
                console.log(response);
                
            })
        },[])
         return(
             <ImageList
             image = {image}
             date = {date}
             title = {title}
             explanation= {explanation}
             />
         );

         };



export default ImageCard;