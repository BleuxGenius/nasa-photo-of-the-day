import React from "react";
import { Card, CardText, CardTitle} from 'reactstrap';




const ImageCard = props => {
    return (
    <Card>
        <CardTitle>
            Nasa Pic Of the Day: {props.title}
        </CardTitle>
        <CardText> </CardText>
    </Card>
    );
};

export default ImageCard;