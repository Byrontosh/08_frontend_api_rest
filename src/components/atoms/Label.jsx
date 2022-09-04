import React from 'react';
import PropTypes from 'prop-types';

export const Label = ({ description, htmlFor, styles }) => {
    return (
        <>
            <label
                className={`block ml-3 font-semibold text-sm text-gray-700 tracking-wide ${styles}`}
                htmlFor={htmlFor}
            >
                {description}
            </label>
        </>
    );
}

Label.propTypes = {
    description: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    styles: PropTypes.string,
}
