import React from 'react';

function Search () {
    const styleInput = {
        borderTop: 'none',
        borderRight: 'none',
        borderLeft: 'none',
        borderBottom: '1px solid',
        width: '220px',
        height: '30px',
    };

    return <input style={styleInput} placeholder='Enter your task here ...' />;
}

export default Search;
