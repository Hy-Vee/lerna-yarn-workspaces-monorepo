import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({disabled, id, label, placeholder}) => {
    const inputClasses = classNames({
        'input-basic': true,
        'input-disabled': disabled
    });

    return (
        <div className={'input-container'}>
            <label className={'input-label'} htmlFor={id}>{label}</label>
            <input className={inputClasses} disabled={disabled} id={id} placeholder={placeholder} type="text" />
        </div>
    );
}

Input.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

Input.defaultProps = {
    disabled: false
};

export default Input;
