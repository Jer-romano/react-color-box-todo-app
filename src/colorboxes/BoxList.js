import {React, useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import {v4 as uuid } from 'uuid';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const renderBoxes = () => {
        return (
            <div>
                {boxes.map(b => (<Box id={b.id}
                                      key={b.id}
                                      width={b.width}
                                      height={b.height}
                                      color={b.color}
                                      removeBox={removeBox} />))}
            </div>
        );
    };

    const addBox = (box) => {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    };

    const removeBox = (e) => {
        let id = e.target.id;

        const result = boxes.filter(b => b.id !== id);
        setBoxes(result);
    }

    return (
        <div className='BoxList'>
            <NewBoxForm addBox={addBox}/>
            {renderBoxes()}
        </div>
    );

};

export default BoxList;