import React from 'react'

class Button extends React.Component {


    render() {

        const {changeLoadingState} = this.props

        const handleChange = () => {
            changeLoadingState()
        }

        return(
            <button id="btn" onClick={handleChange}>Click to toggle state...</button>
        )
    }
}

export default Button