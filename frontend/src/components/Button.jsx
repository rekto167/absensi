import React from 'react';
import PropTypes from 'prop-types';

const Button = ({title}) => {
    return (
        // <div>
            <button className="bg-teal-500 w-200 h-10 rounded text-white font-semibold hover:bg-teal-700 mt-3">
                    {title}
            </button>
        // </div>
    )
}

Button.propTypes= {
    title: PropTypes.string
}

export default Button;