import React from 'react'
import Button from './Button'



const Loading = ({changeLoadingState}) => {
    return(
        <div className="container">
            <h1 id="loading">LOADING...</h1>
            <Button changeLoadingState={changeLoadingState}/>
        </div>
    )
}

export default Loading