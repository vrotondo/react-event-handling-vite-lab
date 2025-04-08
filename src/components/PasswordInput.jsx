import React from 'react';

function PasswordInput() {
    const handleChange = (event) => {
        console.log('Entering password...');
        console.log('Password changed:', event.target.value);
    };

    return (
        <input
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
        />
    );
}

export default PasswordInput;