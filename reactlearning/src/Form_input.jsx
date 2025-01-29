import { useState } from "react";

const Form_input = () => {
    const [inputValue, setInputValue] = useState('');
    const [addedItems, setAddedItems] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addText = () => {
        if (inputValue.trim()) {  // Ensure non-empty value is added
            setAddedItems([...addedItems, inputValue]);
            setInputValue('');  // Clear the input after adding text
        }
    };

    return (
        <>
            <div>
                <input 
                    type="text" 
                    onChange={handleInputChange} 
                    value={inputValue}  // Keep input value controlled
                    placeholder="Type something..."
                />
                <button onClick={addText}>Add</button>
                
                <ol>
                    {addedItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
                <p>You typed: {inputValue}</p>
            </div>
        </>
    );
}

export default Form_input;
