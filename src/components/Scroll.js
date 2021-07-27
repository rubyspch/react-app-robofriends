import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border: '2px solid rgb(185, 255, 255)', height:'500px'}}>
            {props.children}
        </div>

    )
}

export default Scroll;