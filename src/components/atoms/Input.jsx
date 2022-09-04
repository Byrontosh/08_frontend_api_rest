import React from 'react'
import PropTypes from 'prop-types';

export const Input = ({ id, type, value, sytles, disable, placeholder, maxlength, isRequired, autoFocus }) => {
    return (
        <>
            <input
                className={`rounded-2xl text-base px-4 py-2 border-0 border-b border-gray-300 focus:border-cyan-500 disabled:opacity-50 ${sytles}`}
                id={id}
                name={id}
                type={type}
                value={value}
                disabled={disable}
                placeholder={placeholder}
                maxLength={maxlength}
                required={isRequired}
                autoFocus={autoFocus}
            />
        </>
    );
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    styles: PropTypes.string,
    disable: PropTypes.bool,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    isRequired: PropTypes.bool,
    autoFocus: PropTypes.bool,
}

Input.defaultProps = {
    type: 'text',
    disable: false,
    maxLength: 35,
    isRequired: true,
    autoFocus: false,
}