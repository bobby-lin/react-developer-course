import React from 'react'

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>
                Make a Decision
            </button>
        </div>
    );
};

export default Action