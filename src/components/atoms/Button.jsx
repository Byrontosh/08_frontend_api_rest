import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ name, type, styles }) => {
    return (
        <>
            <button
                className={`inline-flex justify-center py-1.5 px-3 rounded-full text-base text-white tracking-wider bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 ${styles}`}
                type={type}
            >
                {name}
            </button>
        </>
    );
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    styles: PropTypes.string,
}

Button.defaultProps = {
    type: 'submit',
}