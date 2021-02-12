import React from "react";
import { Button } from "semantic-ui-react";

function LikeButton (props) {
    return(
        <Button
        color='red'
        content='Like'
        icon='heart'
        label={{ basic: true, color: 'red', pointing: 'left', content: '' }}
     />
    )

}


export default LikeButton; 









