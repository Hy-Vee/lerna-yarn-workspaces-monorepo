import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const appearances = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
};

const Button = (props) => {
    const buttonClasses = classNames({
        'btn-base': true,
        'btn-primary': props.variant === appearances.PRIMARY,
        'btn-secondary': props.variant === appearances.SECONDARY
    });

    return <button className={buttonClasses} {...props} />;
}

Button.propTypes = {
    disabled: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(Object.values(appearances))
};

Button.defaultProps = {
    disabled: false,
    type: 'button',
    variant: appearances.PRIMARY
};

export default Button;
