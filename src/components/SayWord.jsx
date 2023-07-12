import React from 'react'
import { useParams } from 'react-router-dom';

const SayWord = () => {

    const { word , color } = useParams()

    const styleColor = {
        "color": color,
    }

    return (
        <div>
            { isNaN(word) ?
            <p style={styleColor}>The word is: {word}</p> :
            <p>The number is: {word}</p>
            }
        </div>
    )
}

export default SayWord
