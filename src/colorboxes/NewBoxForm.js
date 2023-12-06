import {React, useState} from 'react';

const NewBoxForm = ({ addBox }) => {

    const INITIAL_STATE = {
        height: "",
        width: "",
        color: ""
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        const {value, name} = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox(formData);
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='height'>Height in pixels:</label>
            <input type="text" 
                   id="height"
                   name="height"
                   value={formData.height}
                   onChange={handleChange}
            />
            <label htmlFor='width'>Width in pixels:</label>
            <input type="text" 
                   id='width'
                   name="width"
                   value={formData.width}
                   onChange={handleChange}
            />
            <label htmlFor='color'>Background color:</label>
            <input type="text" 
                   id='color'
                   name="color"
                   value={formData.color}
                   onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    );

};

export default NewBoxForm;