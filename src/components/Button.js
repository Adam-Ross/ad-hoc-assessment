import React from 'react'

// stateless functional component
const Button = ({changeLoadingState}) => {
    
    const handleClick = () => {
        changeLoadingState()
    }

    return(
        <button id="btn" onClick={handleClick}>Click to change state of loading...</button>
    )

}

export default Button