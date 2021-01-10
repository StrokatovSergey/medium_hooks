import React from 'react';

const BackendErrorMessages = ({backendErrors}) => {

    const errorMessages = Object.keys(backendErrors).map(name => {
            const message = backendErrors[name].join(' ')
            return `${name} ${message}`
        })

    return (
        <div>
            <ul className="error-messages">
                {errorMessages.map( errMessage => (
                    <li key={errMessage}>{errMessage}</li>
                ))}
            </ul>
        </div>
    );
};

export default BackendErrorMessages;
