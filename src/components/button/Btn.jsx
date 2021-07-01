import React from 'react';
import './Btn.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--cursos'];

const SIZES = ['btn--medium', 'btn--large'];

export const Btn = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    target
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

        return(
        <Link to={target} className="btn--mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
};