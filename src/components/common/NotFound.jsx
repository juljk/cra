import React from 'react';

const NotFound = ({title}) => {
    return (
        <div className="text-center text-muted">
            <p className="display-1"><strong>{title}</strong></p>
            <p className="display-4">Not found!</p>
        </div>
    );
}

export default NotFound;