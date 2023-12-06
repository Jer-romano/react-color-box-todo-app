import React from 'react';

const Box = ({id, width, height, color, removeBox}) => {
    return (
        <div style={{
                     width: `${width}px`,
                     height: `${height}px`,
                     backgroundColor: color
                    }}>
            <button id={id} onClick={removeBox}>X</button>
        </div>
    );

};

export default Box;