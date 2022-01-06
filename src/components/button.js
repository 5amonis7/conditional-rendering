import React from 'react'

const button = (props) => {
    return (
        <div className="button">
            <button onClick={props.click} className="btn" type="submit">{props.text}</button>
        </div>
    )
}

export default button
