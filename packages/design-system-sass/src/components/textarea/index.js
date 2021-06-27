import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Textarea = (props) => {
    const textareaClasses = classNames({
        'text-area-base': true,
        'text-area-disabled': props.disabled,
        'text-area-error': props.error
    });

    return (
        <div className={'text-area-container'}>
            <textarea className={textareaClasses} {...props} />
        </div>
    )
}

Textarea.propTypes = {
    placeholder: PropTypes.string
};

Textarea.defaultProps = {
    placeholder: 'Enter a message'
};

export default Textarea;
