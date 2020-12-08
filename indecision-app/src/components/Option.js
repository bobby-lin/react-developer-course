import React from 'react';

const Option = (props) => {
    return (
        <div>
            <li>{props.name}</li>
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.name);
                }}
            >
                Remove
            </button>
        </div>
    );
};

export default Option;